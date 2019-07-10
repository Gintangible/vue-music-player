<template>
	<div class="musiclist-container">
		<div class="musiclist-bg" :style="bgStyle">
			<div class="musiclist-header" :style="bgStyle">
        	<img src="./toBack.png" alt="返回" title="返回" @click="goBack">
				<h1 v-html="title"></h1>
			</div>
		</div>
		<!-- <Scroll :data="songs" class="music-scroll" ref="musicScroll">

		</Scroll> -->
	</div>
</template>

<script>
import Scroll from '@/components/Scroll';
export default {
	data() {
		return {
			sogns: []
		};
	},
	props: {
		bgImage: {
			type: String,
			default: ''
		},
		songs: {
			type: Array
		},
		title: {
			type: String,
			default: ''
		}
	},
	components: {
		Scroll
	},

	computed: {
		bgStyle() {
			return `background-image: url(${this.bgImage})`;
		}
	},

	methods: {
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
@import '@/styles/mixin.scss';
.musiclist-container {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgb(34, 34, 34);
	z-index: 301;
	color: #fff;
}
.musiclist-bg {
	width: 100%;
	height: 39vh;
	background-size: 100% auto;
	position: relative;
}
.musiclist-header {
	width: 100%;
	background-size: 100% auto;
	position: relative;
	z-index: 300;
	img {
		width: rem(30);
		height: rem(30);
		position: absolute;
		top: rem(10);
		left: rem(15);
	}
	h1 {
		margin: 0;
		width: 100%;
		height: rem(45);
		text-align: center;
		line-height: rem(45);
		font-size: rem(18);
	}
}
</style>