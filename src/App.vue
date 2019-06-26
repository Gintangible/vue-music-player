<template>
	<div id="app">
		<Header></Header>
		<Nav></Nav>
		<transition name="fadeleft">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		<player></player>
	</div>
</template>

<script>
import Header from 'views/header/header';
import Nav from 'views/nav/nav';
import player from 'views/player/player';
export default {
	name: 'app',
	components: {
		Header,
		Nav,
		player
	}
};
</script>

<style>
#app {
	min-width: 100vw;
	min-height: 100vh;
	background: rgb(34, 34, 34);
}

.fadeleft-enter-active {
	transition: all 0.2s;
}

.fadeleft-enter {
	opacity: 0;
	transform: translate3d(20%, 0, 0);
}
.fadeleft-enter {
	opacity: 0.9;
}
</style>
