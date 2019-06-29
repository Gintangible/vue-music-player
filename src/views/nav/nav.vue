<template>
	<div class="nav-bar">
		<router-link to="/recommend" class="nav-item">
			<span>推荐</span>
		</router-link>
		<router-link to="/singer" class="nav-item">
			<span>歌手</span>
		</router-link>
		<router-link to="/rank" class="nav-item">
			<span>排行</span>
		</router-link>
		<router-link to="/search" class="nav-item">
			<span>搜索</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Nav',
	data() {
		return {};
	}
};
</script>
<style lang='scss' scoped>
@import '@/styles/mixin.scss';
.nav-bar {
	display: flex;
	width: 100%;
	height: rem(44);
	justify-content: space-between;
	position: relative;
	z-index: 100;
	.nav-item {
		display: inline-block;
		flex: 1;
		height: 100%;
		background: rgb(34, 34, 34);
		line-height: rem(40);
		text-align: center;
		color: rgba(255, 255, 255, 0.5);
		font-size: rem(15);
		&.router-link-active {
			span {
				color: #ffcd32;
				border-bottom: 2px solid #ffcd32;
				padding-bottom: rem(5);
			}
		}
	}
}
</style>