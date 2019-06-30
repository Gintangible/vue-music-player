<template>
	<div class="loading">
		<img width="30" height="30" src="./loading.gif">
		<p class="desc">{{title}}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		title: {
			type: String,
			default: '玩命加载中'
		}
	}
};
</script>
<style lang='scss' scoped>
@import '@/styles/mixin.scss';

.loading {
	width: 100%;
	text-align: center;
}
.desc {
	line-height: 20px;
	font-size: rem(15);
	color: #f7cd4e;
	margin-top: rem(5);
}
</style>