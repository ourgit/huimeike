<template>
	<view class="record">
		<view class="item">
			<view class="left">
				<text class="t1">充值颜值豆</text>
				<text class="t2">2018-08-08 08:08:08</text>
			</view>
			<text class="right">+100</text>
		</view>
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
		
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$msg("您点击了扫码")

			}
		}			
	}
</script>

<style lang="less">
	view {
		box-sizing: border-box;
	}
	.record {
		padding: 0 37upx;
		box-sizing: border-box;
		.item {
			padding: 33upx 0;
			display: flex;
			justify-content: space-between;
			border-bottom: 1upx solid #cac8c5;
			.left {
				display: flex;
				flex-direction: column;
				.t1 {
					font-size: 35upx;
					font-weight: bold;
				}
				.t2 {
					font-size: 17upx;
					margin-top: 20upx;
					color: #878787;
				}
			}
			.right {
				font-size: 30px;
				color: #ed824a;
				margin-right: 36upx;
			}
		}
	}
</style>
