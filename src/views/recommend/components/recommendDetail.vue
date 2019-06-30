<template>
	<div class="detail-container">
		<musicList :title="title" :bg-image="bgImage" :songs="songs"></musicList>
	</div>

</template>

<script type="text/ecmascript-6">
import musicList from '@/components/MusicList';
export default {
	data() {
		return {
			title: '',
			bgImage:'',
			songs:[]
		}
	},
	components: {
		musicList
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
