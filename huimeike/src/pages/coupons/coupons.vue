<template>
	<view class="coupons">
		<view class="item">
			<view class="t1">
				<view>
					<text class="big">5</text><text class="small">元</text>
				</view>				
				<text class="text1">初来汇美客用户专享</text>
			</view>
			<view class="t2">
				<text class="text2">满5.01可用</text>
				<text class="text3">有效期至：2019.06.01</text>
				<text class="btn">立即使用</text>
			</view>
			<view class="t3">全场通用（实体商品除外）</view>
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
	.coupons {
		.item {
			width: 90%;
			margin: 0 auto;
			margin-top: 35upx;
			background: url("~@/static/images/coupons/bg.png") no-repeat;
			background-size: 100% 100%;
			padding: 28upx 32upx;
			box-sizing: border-box;
			.t1,.t2,.t3 {
				display: flex;				
			}
			.t1 {
				.big {
					font-size: 52upx;
					color: #ed5542;
					font-weight: bold;
				}
				.small {
					font-size: 26upx;
					color: #ed5542;
				}
				.text1 {
					margin-top: 15upx;
					font-size: 38upx;
					margin-left: 100upx;
				}
			}
			.t2 {
				margin-top: 20upx;
				position: relative;
				text {
					font-size: 25upx;
					color: #9b9b9b;
				}
				.text3 {
					margin-left: 36upx;
				}
				.btn {
					padding: 10upx 27upx;
					border: 2upx solid #f86e25;
					border-radius: 40upx;
					color: #f86e25;
					position: absolute;
					right: 0;
					top: -20upx;
				}
			}
			.t3 {
				margin-top: 45upx;
				position: relative;
				top: 10upx;
				font-size: 25upx;
				color: #9b9b9b;
			}
		}
	}
</style>
