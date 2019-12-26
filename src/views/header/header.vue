<template>
	<div class="header">
		<div class="header-title">
			<svg-icon icon-name="logo" class="logo"></svg-icon>  Intangible
		</div>
		<router-link to="/user" class="user-btn" tag="span">
			登录
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
  display: flex;
  align-items: center;
  width: 100%;
  height: rem(84);
  background: #d43c33;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  padding: 0 rem(10);
  z-index: 100;
  font-size: rem(24);
}

.header-title {
  color: #fff;
}

.user-btn {
  position: absolute;
  top: 50%;
  right: rem(15);
  line-height: rem(44);
  color: #fff;
  text-align: center;
  transform: translateY(-50%);
}
</style>