<template>
	<div class="loading">
		<div class="bounce4"></div>
		<div class="bounce3"></div>
		<div class="bounce2"></div>
		<div class="bounce1"></div>
		<div class="bounce0"></div>
	</div>
</template>

<script type="text/ecmascript-6">

export default {
	name: 'Loading'
};
</script>

<style lang='scss' scoped>
.loading {
	display: flex;
	justify-content: center;
	padding: rem(15) 0;
	> div {
		margin-right: rem(2);
		width: rem(10);
		height: rem(10);
		background-color: #333;
		border-radius: 50%;
		animation: g-bouncedelay 1.4s infinite ease-in-out both;
		@for $i from 1 through 4 {
			&.bounce#{$i} {
				animation-delay: -0.16s * $i;
			}
		}
	}
}

@keyframes g-bouncedelay {
	0%,
	80%,
	100% {
		transform: scale(0);
	}
	40% {
		transform: scale(1);
	}
}
</style>