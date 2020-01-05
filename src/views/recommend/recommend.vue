<template>
	<Scroll v-if="recommendList.length" :data="dissList" class="main-container" ref="scroll">
		<div>
			<!-- 轮播 -->
			<swiper class="swiper-container" v-if="recommendList.length" :options="swiperOption" ref="mySwiper">
				<swiperSlide class="swiper-slide" v-for="(item,index) in recommendList" :key="index">
					<a :href="item.linkUrl">
						<img @load="imgOnload" :src="item.picUrl" alt="">
					</a>
				</swiperSlide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<!-- 推荐歌单 -->
			<div class="diss-container">
				<div class="diss-title" v-show="dissList">热门歌单推荐</div>
				<ul v-if="dissList.length" class="diss-list" ref="recommendUl">
					<li @click="selectItem(item)" class="dissList-item" v-for="(item,index) in dissList" :key="index">
						<img v-lazy="item.imgurl" alt="歌单" :title="item.creator.name">
						<div class="dissItem-con">
							<h2>{{item.creator.name}}</h2>
							<p>{{item.dissname}}</p>
						</div>
					</li>
				</ul>
				<loading v-show="!dissLoading"></loading>
			</div>
		</div>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</Scroll>
</template>

<script>
import Scroll from '@/components/Scroll';
import { getRecommend, getDiss } from '@/api/recommend.js';
import 'swiper/dist/css/swiper.css'; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import loading from '@/components/Loading';
import { ERR_OK } from 'api/config';

export default {
	data() {
		return {
			recommendList: [],
			dissList: [],
			dissLoading: true,
			swiperOption: {
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets'
				},
				loop: true
			}
		};
	},

	components: {
		Scroll,
		swiper,
		swiperSlide,
		loading
	},

	created() {
		this._getRecommendList();
		this._getDissList();
	},

	methods: {
		_getRecommendList() {
			getRecommend().then(res => {
				if (res.code === ERR_OK) {
					this.recommendList = res.data.slider;
					this.appLoading();
				}
			});
		},

		appLoading() {
			const appLoading = document.querySelector('#appLoading');

			if (appLoading) {
				const animationendFunc = function() {
					appLoading.removeEventListener(
						'animationend',
						animationendFunc
					);
					appLoading.removeEventListener(
						'webkitAnimationEnd',
						animationendFunc
					);
					document.body.removeChild(appLoading);
				};

				appLoading.addEventListener('animationend', animationendFunc);
				appLoading.addEventListener(
					'webkitAnimationEnd',
					animationendFunc
				);

				appLoading.classList.add('removeLoading');
			}
		},
		imgOnload() {
			if (!this.checkloaded) {
				this.checkloaded = true;
				this.$refs.scroll.refresh();
			}
		},
		_getDissList() {
			getDiss().then(res => {
				if (res.code === ERR_OK) {
					this.dissList = res.data.list;
					this.dissLoading = true;
				}
			});
		},
		selectItem(item) {
			this.$router.push({
				path: `/recommend/${item.dissid}`
			});
			this.setDisc(item);
		},
		setDisc(item) {
			this.$store.dispatch('setDisc', item);
		}
	}
};
</script>
<style lang='scss'>
.main-container {
	width: 100vw;
	height: 100%;
	overflow: hidden;
}

.swiper-container {
	width: 100%;
	height: rem(150);
	img {
		width: 100%;
		height: rem(150);
	}
	.swiper-pagination {
		.swiper-pagination-bullet {
			opacity: 0.8;
			border-radius: 4px;
			transition: all 0.2s; //可设置缓慢变化
			background: #fff;
		}
		.swiper-pagination-bullet-active {
			width: 30px;
		}
	}
}

.diss-container {
	overflow: hidden;
	.diss-title {
		height: rem(65);
		text-align: center;
		line-height: rem(65);
		color: #333;
		font-size: rem(15);
		letter-spacing: rem(2);
	}
	.diss-list {
		margin: 0;
		position: relative;
		min-height: rem(80);
		box-sizing: border-box;
		padding: 0 rem(20) rem(20) rem(20);
		list-style: none;
		img {
			position: absolute;
			width: rem(60);
			height: rem(60);
		}
	}
	.dissItem-con {
		padding-left: rem(80);
		h2 {
			margin-bottom: rem(10);
			color: $contentTit;
			font-size: rem(15);
			padding-top: rem(6);
		}
		p {
			color: $contentDis;
			font-size: rem(14);
		}
	}
}

.loading-wrap {
	position: fixed;
	width: 100%;
	top: 50%;
	transform: translateY(-50%);
}

/* 子路由进去动画 */
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
	transform: translate3d(100%, 0, 0);
}
</style>