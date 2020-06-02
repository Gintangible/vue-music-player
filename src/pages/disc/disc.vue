<template>
	<div class="detail-container">
		<musicList :title="title" :bg-image="bgImage" :songs="songs"></musicList>
	</div>
</template>

<script type="text/ecmascript-6">
import musicList from '@/pages/musicList';
import { getDiscSongList } from '@/api/recommend';
import { ERR_OK } from 'api/config';
import { getSongInfo } from 'utils/song';

export default {
	name: 'RecommendDetail',
	data() {
		return {
			songs: []
		};
	},
	computed: {
		bgImage() {
			return this.discInfo.imgurl;
		},
		title() {
			return this.discInfo.dissname + '     这里的标题可以滚动的呦';
		},
		discInfo() {
			return this.$store.state.disc.discInfo;
		}
	},
	components: {
		musicList
	},
	created() {
		this._getSongList();
	},
	methods: {
		_getSongList() {
			if (!this.discInfo.dissid) {
				this.$router.replace('/recommend');
				return;
			}
			getDiscSongList(this.discInfo.dissid).then(res => {
				if (res.code === ERR_OK) {
					this.songs = this._normalizeSongs(res.cdlist[0].songlist);
				}
			});
		},
		_normalizeSongs(list) {
			let ret = [];
			list.forEach(item => {
				if (item.songid && item.albummid) {
					ret.push(getSongInfo(item));
				}
			});

			return ret;
		}
	}
};
</script>

<style scoped lang="scss">
.detail-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgb(34, 34, 34);
	z-index: 301;
}
</style>
