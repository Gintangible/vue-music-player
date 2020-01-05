<template>
	<div id="app">
		<Header></Header>
		<Nav></Nav>
		<div class="content-container">
			<transition name="fadeleft">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
		<player></player>
	</div>
</template>

<script>
import Header from 'views/header/header';
import Nav from 'views/nav/nav';
import Player from 'views/player/player';
export default {
	name: 'app',
	components: {
		Header,
		Nav,
		Player
	}
};
</script>

<style  lang="scss" scoped>
$topHeight: rem(84) + rem(44);

#app {
	min-width: 100vw;
	min-height: 100vh;
	background: #fff;
}

// 128
.content-container {
	width: 100vw;
	height: rem(128);
	height: calc(100vh - #{$topHeight});
	overflow: hidden;
}

.fadeleft-enter-active {
	transition: all 0.2s;
}

.fadeleft-enter {
	opacity: 1;
	transform: translate3d(20%, 0, 0);
}
.fadeleft-enter {
	opacity: 0.9;
}
</style>
