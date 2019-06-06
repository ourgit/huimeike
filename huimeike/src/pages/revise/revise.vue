<template>
	<view class="revise">
		<input type="text" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了完成")

				}
			}
		}
	}
</script>

<style lang="less">
	.revise {
		height: 115upx;
		background-color: #fff;
		input {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding-left: 40upx;
		}
	}

</style>
