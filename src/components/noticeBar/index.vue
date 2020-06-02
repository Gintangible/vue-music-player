<template>
	<div class="notice-container">
		<div></div>
		<div>{{title}}</div>
	</div>
</template>

<script>
export default {
	name: 'NoticeBar',

	props: {
		title: {
			type: String,
			required: true
		},
		loop: {
			type: Boolean,
			default: true
		},
		direction: {
			
		},
	},

	computed: {
		
	},

	mounted() {
	},

	methods: {
	}
};
</script>
<style lang='scss' scoped>
.marquee-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>