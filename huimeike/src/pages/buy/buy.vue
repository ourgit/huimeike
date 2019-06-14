<template>
	<view class="buy">

		<view class="inner">
			<view class="container">
				<view class="top">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558519496977&di=263688d811e1dabbfa9dad32edbd0827&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F6971d6fd691a2d2bb249424387d25157fdc49e1e.jpg"></image>
					<view>
						<text class="t1">对新领域保持好奇，多结交新朋友</text>
						<text class="t2">99.99颜值豆</text>
					</view>					
				</view>
				<view class="bottom">
					<text class="t3">优惠券</text>
					<text class="t4">5</text>
				</view>
			</view>
			
			<view class="mode">收货地址:</view>
			<view class="address" @click="address">请添加收货地址</view>
						
			<view class="mode">支付方式:</view>
			<view class="money">
				<view>
					<text class="t5">余额：</text>
					<text class="t6">99.8颜值豆（不足支付）</text>
				</view>
				<button @click="recharge">充值</button>
			</view>
			<view class="mark">.你将购买的商品为虚拟内容服务，购买后不支持退订、转让、退换，请斟酌确定。</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png'
			}
		},
		onLoad() {
			
		},
		methods: {
			goback() {
				uni.navigateBack({
					delta: 1
				});
			},
			recharge() {
				uni.navigateTo({
					url: '/pages/pay/pay'
				})
			},
			address() {
				uni.navigateTo({
					url: '/pages/address/address'
				})				
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了扫码")
			
				}
			}
		}
	}
</script>

<style lang="less">
	view {
		box-sizing: border-box;
	}
	//公共样式提取
	.title {
		width: 100%;
		position: fixed;
		padding: 0 23upx;
		padding-top: 80upx;
		background: url("~@/static/images/shop/bg.png");
		padding-bottom: 20upx;
		display: flex;
		justify-content: space-between;	
		z-index: 9;
		text {
			color: #fff;
		}
	}
	.iconfont {
		font-family: 'iconfont' !important;
	}
	.inner {
		width: 90%;
		margin: 0 auto;
		box-sizing: border-box;
		.container {
			width: 100%;
			background: url("~@/static/images/buy/buy.png") no-repeat;
			background-size: 100% 100%;
			.top {
				padding: 23upx 36upx;
				display: flex;
				image {
					width: 112upx;
					height: 112upx;
					border-radius: 10upx;
				}
				view {
					width: 80%;
					margin-left: 15upx;
					display: flex;
					flex-direction: column;
					.t1 {
						font-size: 29upx;
					}
					.t2 {
						margin-top: 10upx;
						font-size: 30upx;
						color: #f86e25;
					}
				}
			}
			.bottom {
				display: flex;
				height: 100upx;
				line-height: 100upx;
				justify-content: space-between;
				align-items: center;
				.t3 {
					font-size: 30upx;
					margin-left: 22upx;
				}
				.t4 {
					font-size: 28upx;
					color: #f86e25;
					margin-right: 16upx;
					&:after {
						.iconfont;
						content: '\e656';
						color: #b8b8b8;
						
					}
				}
			}
		}
		.mode {
			height: 92upx;
			line-height: 92upx;
			font-size: 26upx;			
		}
		.money {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 97upx;
			line-height: 97upx;
			background-color: #fff;
			border-radius: 10upx;
			view {
				.t5 {
					font-size: 28upx;
					margin-left: 17upx;
				}
				.t6 {
					font-size: 25upx;
					color: #f86e25;
				}
			}
			button {
				width: 127upx;
				height: 56upx;
				margin: 0;
				margin-right: 23upx;
				line-height: 56upx;
				font-size: 25upx;
				background: #f86e25;
				color: #fff;
			}
		}
		.mark {
			margin-top: 42upx;
			font-size: 22upx;
			color: #9b9b9b;
		}
		.address {
			height: 112upx;
			background-color: #fff;
			line-height: 112upx;
			text-align: center;
			font-size: 24upx;
			border-radius: 10upx;
		}
	}
</style>
