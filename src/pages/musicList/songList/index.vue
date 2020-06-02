<template>
	<ul class="song-list">
		<li @click="selectItem(song,index)" class="songItem" v-for="(song,index) in songs">
			<div class="songItem-rank" v-show="rank">
				{{ index + 1}}
			</div>
			<div class="songItem-content">
				<h2 class="songItem-name">{{song.name}}</h2>
				<p class="songItem-desc">{{getDesc(song)}}</p>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'SongList',
	data() {
		return {};
	},
	props: {
		songs: {
			type: Array,
			default: []
		},
		rank: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		getDesc(song) {
			return `${song.singer} - ${song.album}`;
		},
		selectItem() {}
	}
};
</script>
<style lang='scss' scoped>
.song-list {
	.songItem {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		height: rem(64);
	}
	.songItem-rank {
		flex: 0 0 rem(25);
		width: rem(25);
		margin-right: rem(30);
		text-align: center;
	}
	.songItem-content {
		flex: 1;
		line-height: rem(20);
		overflow: hidden;
		.songItem-name {
			color: $contentTit;
			font-size:rem(14);
			@include nowrap;
		}
		.songItem-desc {
			margin-top: rem(4);
			color: $contentDis;
			font-size:rem(14);
			@include nowrap;
		}
	}
}
</style>