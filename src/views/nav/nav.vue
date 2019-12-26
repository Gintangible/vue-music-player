<template>
	<div class="nav-bar">
		<router-link to="/recommend" class="nav-item">
			<span>推荐</span>
		</router-link>
		<router-link to="/singer" class="nav-item">
			<span>热歌</span>
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
		line-height: rem(40);
		text-align: center;
		color: #333;
		font-size: rem(15);
		&.router-link-active {
			span {
				color: #dd001b;
				border-bottom: 2px solid #dd001b;
				padding-bottom: rem(5);
			}
		}
	}
}
</style>