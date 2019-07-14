<template>
	<div class="detail-container">
		<musicList :title="title" :bg-image="bgImage" :songs="songs"></musicList>
	</div>
</template>

<script type="text/ecmascript-6">
import musicList from '@/views/MusicList';
import { getSongList } from '@/api/recommend';
export default {
	data() {
		return {
			songs: []
		};
	},
	computed: {
		bgImage() {
			return this.recommendDetailInfo.imgurl;
		},
		title() {
			return this.recommendDetailInfo.dissname;
		},
		recommendDetailInfo() {
			return this.$store.state.recommend.recommendDetailInfo;
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
			if (!this.recommendDetailInfo.dissid) {
				this.$router.replace('/recommend');
			}
			getSongList(this.recommendDetailInfo.dissid).then(res => {
				console.log(res);
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
