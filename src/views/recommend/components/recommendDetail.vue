<template>
	<div class="detail-container">
		<musicList :title="title" :bg-image="bgImage" :songs="songs"></musicList>
	</div>
</template>

<script type="text/ecmascript-6">
import musicList from '@/views/MusicList';
import { getDiscSongList } from '@/api/recommend';
import { ERR_OK } from 'api/config';


export default {
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
			return this.discInfo.dissname;
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
					this.songs = res.cdlist[0].songlist;
				}
			})
		}
	}
};
</script>

<style scoped lang="scss">
.detail-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgb(34, 34, 34);
	z-index: 301;
}
</style>
