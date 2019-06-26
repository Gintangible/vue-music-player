<template>
	<div class="header">
		<div class="header-con">
			Intangible
		</div>
		<router-link to="/user" class="icon-user" tag="span">
			<svg-icon icon-class="user"></svg-icon>
		</router-link>
	</div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon';
export default {
	name: 'Header',
	components: { SvgIcon }
};
</script>
<style lang='scss' scoped>
@import '~@/styles/mixin.scss';

.header {
  width: 100%;
  height: rem(44);
  background: rgb(34, 34, 34);
  text-align: center;
  position: relative;
  padding-top: rem(5);
  box-sizing: border-box;
  z-index: 100;
}
.header-con {
  display: inline;
  margin: auto;
  color: #ffcd32;
}

.icon-user {
  width: rem(44);
  height: rem(44);
  line-height: rem(44);
  color: #ffcd32;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
}
</style>