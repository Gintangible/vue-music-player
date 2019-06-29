<template>
	<Scroll :data="recommendList" class="main-container" ref="scroll">
		<!-- 轮播 -->
		<swiper class="swiper-container" v-if="banner.length" :options="swiperOption" ref="mySwiper">
			<swiperSlide class="swiper-slide" v-for="(item,index) in banner" :key="index">
				<a :href="item.linkUrl">
					<img @load="imgOnload" :src="item.picUrl" alt="">
				</a>
			</swiperSlide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- 推荐歌单 -->
		<div class="recommend-container">
			<div class="recommend-title" v-show="recommendList">热门歌单推荐</div>
			<ul v-if="recommendList.length" class="recommend-list" ref="discListUl">
				<li @click="selectItem(item)" class="recommend-item" v-for="(item,index) in recommendList" :key="index">
					<img v-lazy="item.imgurl" alt="歌单" :title="item.creator.name">
					<div class="recommend-con">
						<h2>{{item.creator.name}}</h2>
						<p>{{item.dissname}}</p>
					</div>
				</li>
			</ul>
		</div>
	</Scroll>
</template>

<script>
import Scroll from '@/components/Scroll';
import { getBannerList, getRecommendList } from '@/api/recommend.js';
import 'swiper/dist/css/swiper.css'; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	data() {
		return {
			recommendList: [],
			banner: [],
			swiperOption: {
				autoplay: 2000,
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
		swiperSlide
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
		imgOnload() {},
		_getRecommendcList() {
			getRecommendList().then(res => {
				console.log(res);
				this.recommendList = res.data;
			});
		}
	}
};
</script>
<style lang='scss' scoped>
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
}

.recommend-container {
	.recommend-title {
		height: rem(65);
		text-align: center;
		line-height: rem(65);
		color: #ffcd32;
		font-size: rem(15);
		letter-spacing: rem(2);
	}
	.recommendList-list {
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
	.recommend-con {
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