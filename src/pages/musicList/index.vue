<template>
	<div class="musiclist-container">
		<div class="musiclist-title-wrap" ref="titleWrapDiv">
			<span class="musiclist-back" @click="goBack">
				<svg-icon icon-name="back"></svg-icon>
			</span>
			<div class="musiclist-title">
				<noticeBar :title="title"></noticeBar>
			</div>
		</div>
		<div class="musiclist-bg" ref="bgImageDiv" :style="bgStyle">
			<div class="mask-bg" ref="maskBgDiv"></div>
		</div>
		<div class="layer-bg" ref="layerBgDiv"></div>
		<scroll class="list-scroll" :data="songs" @scroll="yScroll" :probeType="probeType" :listenScroll="listenScroll" ref="listScrollWrapDiv">
			<div class="song-list-wrapper">
				<songList :songs="songs" :rank="rank"></songList>
			</div>
			<div class="loading-warpper" v-show="!songs.length">
				<loading></loading>
			</div>
		</scroll>
	</div>
</template>

<script>
import scroll from '@/components/scroll';
import noticeBar from '@/components/noticeBar';
import loading from '@/components/loading';
import songList from './songList';

export default {
	name: 'MusicList',
	props: {
		bgImage: {
			type: String,
			default: ''
		},
		songs: {
			type: Array,
			default: []
		},
		title: {
			type: String,
			default: ''
		},
		rank: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			scrollY: 0,
			probeType: 3,
			listenScroll: true
		};
	},
	components: {
		scroll,
		noticeBar,
		loading,
		songList
	},
	computed: {
		bgStyle() {
			return `background-image: url(${this.bgImage})`;
		}
	},
	watch: {
		scrollY(newY) {
			let translateY = Math.max(this.minTranslateY, newY);
			let scale = 1;
			let zIndex = 0;
			const percent = Math.abs(newY / this.imageHeight);

			this.$refs.layerBgDiv.style.transform = `translate3d(0,${translateY}px,0)`;
			// 向上拉
			if (newY < translateY) {
				zIndex = 10;
				this.$refs.bgImageDiv.style.paddingTop = 0;
				this.$refs.bgImageDiv.style.height = `${this.titleHeight}px`;
			} else {
				this.$refs.bgImageDiv.style.paddingTop = '70%';
				this.$refs.bgImageDiv.style.height = 0;
			}
			//向下拉
			if (newY > 0) {
				scale = 1 + percent;
				zIndex = 10;
			}

			this.$refs.bgImageDiv.style.transform = `scale(${scale})`;
			this.$refs.bgImageDiv.style.zIndex = zIndex;
		}
	},
	mounted() {
		this.titleHeight = this.$refs.titleWrapDiv.clientHeight;
		this.imageHeight = this.$refs.bgImageDiv.clientHeight;
		this.$refs.listScrollWrapDiv.$el.style.top = `${this.imageHeight}px`;
		this.minTranslateY = -this.imageHeight + this.titleHeight;
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
		yScroll(pos) {
			this.scrollY = pos.y;
		}
	}
};
</script>
<style lang='scss' scoped>
.musiclist-container {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: $contentBg;
	z-index: 301;
	color: #000;
	.musiclist-title-wrap {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 50;
		@include lineHeight(rem(40));
		overflow: hidden;
		.musiclist-back {
			position: absolute;
			top: rem(5);
			left: 0;
			width: 10%;
			height: rem(30);
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				width: 100%;
				height: 100%;
				font-size: rem(18);
			}
		}
		.musiclist-title {
			position: relative;
			left: 10%;
			top: 0;
			width: 80%;
			text-align: center;
			@include lineHeight(rem(40));
			font-size: rem(18);
			color: $titleColor;
			overflow: hidden;
		}
	}
	.musiclist-bg {
		position: relative;
		width: 100%;
		padding-top: 70%;
		height: 0;
		transform-origin: top;
		background-size: cover;
		.mask-bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(7, 17, 27, 0.4);
		}
	}

	.layer-bg {
		height: 100%;
		background: $contentBg;
	}

	.list-scroll {
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		background: $contentBg;
		.song-list-wrapper {
			padding: rem(20) rem(30);
		}
		.loading-warpper {
			position: absolute;
			top: 50%;
			width: 100%;
			transform: translateY(-50%);
		}
	}
}
</style>