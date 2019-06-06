
<template>
	<view class="contacts">
		<view class="item">
			<view class="title">你的团队正在不断壮大！！！</view>
			<view class="flex">
				<text>今天已有6位新朋友加入！</text>
				<view class="img">
					<image src="http://pic.58pic.com/58pic/15/17/01/47U58PICVQJ_1024.jpg" class="img1"></image>
					<image src="http://pic.58pic.com/58pic/11/71/64/90h58PICfG2.jpg" class="img2"></image>
					<image src="http://pic.58pic.com/58pic/15/11/51/20E58PICNs4_1024.jpg"  class="img3"></image>
					<text class="num">+6</text>
				</view>
			</view>
		</view>
		<view class="text">—————  我的介绍人  —————</view>
		<view class="item2">
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559274232915&di=6812f7be89a3cbbee69bde4b7f01156f&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F001TZ3a0gy6J1D1t1Ju10%26690"></image>			
			<view class="v1">
				<text>柚子酱</text>
				<text class="small">2019-02-02</text>
			</view>
		</view>
		
		<view class="text">—————  我介绍的人  —————</view>
		<view class="item2 t2">
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559274232915&di=6812f7be89a3cbbee69bde4b7f01156f&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F001TZ3a0gy6J1D1t1Ju10%26690"></image>			
			<view class="v1">
				<text>柚子酱</text>
				<text class="small">2019-02-02</text>
			</view>
		</view>
		<view class="item2 t2">
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559274232915&di=6812f7be89a3cbbee69bde4b7f01156f&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F001TZ3a0gy6J1D1t1Ju10%26690"></image>			
			<view class="v1">
				<text>柚子酱</text>
				<text class="small">2019-02-02</text>
			</view>
		</view>
		<view class="item2 t2">
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559274232915&di=6812f7be89a3cbbee69bde4b7f01156f&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F001TZ3a0gy6J1D1t1Ju10%26690"></image>			
			<view class="v1">
				<text>柚子酱</text>
				<text class="small">2019-02-02</text>
			</view>
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
	.contacts {
		padding: 31upx 41upx;
		box-sizing: border-box;
		.item {
			padding: 40upx;
			box-sizing: border-box;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			.title {
				font-size: 28upx;
				color: #4d6268;
			}
			.flex {
				display: flex;
				margin-top: 42upx;
				text {
					font-size: 24upx;
					color: #acb8bf;
				}
				.img {
					width: 180upx;
					margin-left: 75upx;
					position: relative;
					top: -20upx;
					image {
						width: 60upx;
						height: 60upx;
						border-radius: 50%;
						
					}
					.img1 {
						position: absolute;
						left: 0;
						top: 0;
						z-index: 4;
					}
					.img2 {
						position: absolute;
						left: 30upx;
						top: 0;
						z-index: 3;
					}
					.img3 {
						position: absolute;
						left: 60upx;
						top: 0;
						z-index: 2;
					}
					.num {
						padding: 15upx;
						border-radius: 50%;
						background-color: #f86e25;
						color: #fff;
						position: absolute;
						left: 110upx;
						top: 0;
						z-index: 5;
					}	
				}				
			}
		}
		.text {
			height: 62upx;
			line-height: 62upx;
			text-align: center;
			font-size: 26upx;
			
		}
		.item2 {
			display: flex;
			width: 100%;
			margin: 0 auto;
			background-color: #fff;
			padding: 31upx;
			image {
				width: 95upx;
				height: 95upx;
				border-radius: 50%;
			}
			.v1 {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 20upx;
				text {
					font-size: 28upx;
					color: #65767b;
				}
				.small {
					font-size: 20upx;
				}
			}
		}
		.t2 {
			margin-bottom: 10upx;
		}
	}
</style>
