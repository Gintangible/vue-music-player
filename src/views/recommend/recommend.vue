<template>
	<Scroll :data="discList" class="main-container" ref="scroll">
		<!-- 轮播 -->
		<div class="banner-container">

		</div>
		<!-- 推荐歌单 -->
		<div class="recommend-container">
			<div class="gedanTitle" v-show="discList">热门歌单推荐</div>
			<ul v-if="discList.length" class="discList-ul" ref="discListUl">
				<li @click="selectItem(item)" class="discList-li" v-for="(item,index) in discList" :key="index">
					<img v-lazy="item.imgurl" alt="歌单" :title="item.creator.name">
					<div class="discList-con">
						<h2>{{item.creator.name}}</h2>
						<p>{{item.dissname}}</p>
					</div>
				</li>
			</ul>
			<div class="loading" v-show="discList.length === 0 ? 1 : 0">
				<!-- <loading></loading> -->
			</div>
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</div>
	</Scroll>
</template>

<script>
import Scroll from '@/components/Scroll';
import { getRecommend, getDiscList } from "@/api/recommend.js";

export default {
	data() {
		return {};
	},

	components: { Scroll },

	created() {
		this._getRecomend();
		this._getDiscList();
	},

	methods: {
		_getRecomend(){
			getRecommend().then(res => {
				console.log(res);
			})
		},
		_getDiscList(){

		}
	}
};
</script>
<style lang='scss' scoped>
@import '@/styles/mixin.scss';

.main-container {
	width: 100vw;
	height: 86vh;
	overflow: hidden;
}

.banner-container {
	width: 100%;
	height: rem(150);
	background: #fff;
	img {
		width: 100%;
		height: rem(150);
	}
}

.recommend-container {
	.discList-li {
		width: 100%;
		min-height: rem(80);
		box-sizing: border-box;
		padding: 0 rem(20) rem(20) rem(20);
		position: relative;
		img {
			width: rem(60);
			height: rem(60);
			position: absolute;
		}
	}
	.discList-con {
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
	.loading {
		position: fixed;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
		// z-index: 200;
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