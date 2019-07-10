<template>
	<Scroll v-if="banner.length" :data="recommendList" class="main-container" ref="scroll">
		<div>
			<!-- 轮播 -->
			<div>
				<swiper class="swiper-container" v-if="banner.length" :options="swiperOption" ref="mySwiper">
					<swiperSlide class="swiper-slide" v-for="(item,index) in banner" :key="index">
						<a :href="item.linkUrl">
							<img @load="imgOnload" :src="item.picUrl" alt="">
						</a>
					</swiperSlide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!-- 推荐歌单 -->
			<div class="recommend-container">
				<div class="recommend-title" v-show="recommendList">热门歌单推荐</div>
				<ul v-if="recommendList.length" class="recommendList-list" ref="recommendUl">
					<li @click="selectItem(item)" class="recommendList-item" v-for="(item,index) in recommendList" :key="index">
						<img v-lazy="item.imgurl" alt="歌单" :title="item.creator.name">
						<div class="recommendItem-con">
							<h2>{{item.creator.name}}</h2>
							<p>{{item.dissname}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="loading-wrap" v-show="recommendList.length === 0">
			<loading></loading>
		</div>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</Scroll>
</template>

<script>
import Scroll from '@/components/Scroll';
import { getBannerList, getRecommendList } from '@/api/recommend.js';
import 'swiper/dist/css/swiper.css'; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import loading from '@/components/Loading';

export default {
	data() {
		return {
			recommendList: [],
			banner: [],
			swiperOption: {
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets'
				}
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
		this._getRecommend();
		this._getRecommendcList();
	},

	methods: {
		_getRecommend() {
			getBannerList().then(res => {
				this.banner = res.data.slider;
			});
		},
		imgOnload() {
			if (!this.checkloaded) {
				this.checkloaded = true;
				this.$refs.scroll.refresh();
			}
		},
		_getRecommendcList() {
			getRecommendList().then(res => {
				this.recommendList = res.data.list;
			});
		},
		selectItem(item) {
			this.$router.push({
				path: `/recommend/${item.dissid}`
			});
			this.setRecommendInfo(item);
		},
		setRecommendInfo(item) {
			this.$store.dispatch('setRecommendInfo', item);
		}
	}
};
</script>
<style lang='scss'>
@import '@/styles/mixin.scss';

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

.recommend-container {
	overflow: hidden;
	.recommend-title {
		height: rem(65);
		text-align: center;
		line-height: rem(65);
		color: #ffcd32;
		font-size: rem(15);
		letter-spacing: rem(2);
	}
	.recommendList-list {
		margin: 0;
		position: relative;
		min-height: rem(80);
		box-sizing: border-box;
		padding: 0 rem(20) rem(20) rem(20);
		img {
			position: absolute;
			width: rem(60);
			height: rem(60);
		}
	}
	.recommendItem-con {
		padding-left: rem(80);
		h2 {
			margin-bottom: rem(10);
			color: #fff;
			font-size: rem(15);
			padding-top: rem(6);
		}
		p {
			color: hsla(0, 0%, 100%, 0.3);
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