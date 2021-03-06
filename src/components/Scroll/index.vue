<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';

export default {
	name: 'Scroll',
	props: {
		/** * 1 滚动的时候会派发scroll事件，会截流。
		 * * 2 滚动的时候实时派发scroll事件，不会截流。
		 * * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件 */
		probeType: {
			type: Number,
			default: 1
		},
		// 点击列表是否派发click事件
		click: {
			type: Boolean,
			default: true
		},
		// 列表的数据
		data: {
			type: Array,
			default: []
		},
		// 是否派发滚动事件
		listenScroll: {
			type: Boolean,
			default: false
		},
		// 是否派发滚动到底部的事件，用于上拉加载
		listenScrollEnd: {
			type: Boolean,
			default: false
		},
		// 是否派发列表滚动开始的事件
		listenScrollBefore: {
			type: Boolean,
			default: false
		},
		// 当数据更新后，刷新scroll的延时。
		refreshDelay: {
			type: Number,
			default: 20
		}
	},
	watch: {
		data() {
			setTimeout(() => {
				this.refresh();
			}, this.refreshDelay);
		}
	},
	mounted() {
		setTimeout(() => {
			this._initScroll();
		}, 20);
	},
	methods: {
		_initScroll() {
			if (!this.$refs.wrapper) {
				return;
			}

			let options = {
				probeType: this.probeType,
				click: this.click
			};

			this.scroll = new BScroll(this.$refs.wrapper, options);

			if (this.listenScroll) {
				this.scroll.on('scroll', (pos) => {
					this.$emit('scroll', pos);
				});
			}

			if (this.listenScrollEnd) {
				this.scroll.on('scrollEnd', (pos) => {
					if (this.scroll.y <= this.scroll.maxScrollY + 50) {
						this.$emit('scrollToEnd', pos);
					}
				});
			}

			if (this.listenScrollBefore) {
				this.scroll.on('beforeScrollStart', () => {
					this.$emit('beforeScroll');
				});
			}
		},
		disable() {
			this.scroll && this.scroll.disable();
		},
		enable() {
			this.scroll && this.scroll.enable();
		},
		refresh() {
			this.scroll && this.scroll.refresh();
		},
		scrollTo() {
			this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
		},
		scrollToElement() {
			this.scroll &&
				this.scroll.scrollToElement.apply(this.scroll, arguments);
		},
		destroy() {
			this.scroll && this.scroll.destroy();
		}
	}
};
</script>