<template>
	<view class="buy">

		<view class="headImg">
			<text>头像</text>
			<view>
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558671924035&di=7378ee4d080f57b2e109a2c6f5d13bb9&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FLibwdZlwIumNibOqpqWrKzFOjlHUFScsYULHrMibS9ACZ1cjCMWAiaWsz1rfR5pZsGBqNBJcDghSu3cJx0cqp8EbMw%2F640%3Fwx_fmt%3Djpeg"></image>
				<text class="icon">&#xe656;</text>				
			</view>
		</view>
		<view class="item">
			<view>
				<text>姓名</text>
				<text class="hui" @click="revise">{{itemData.name}}</text>
			</view>
		</view>
		<view class="item">
			<view>
				<text>职位</text>
				<text class="hui" @click="revise">{{itemData.job}}</text>				
			</view>
		</view>
		<view class="item">
			<view>
				<text>电话</text>
				<text class="hui" @click="revise">{{itemData.phone}}</text>
			</view>
		</view>
		<view class="item">
			<view>
				<text>密码</text>
				<text class="hui" @click="modify">修改</text>				
			</view>
		</view>
		<view class="address">
			<view>
				<text>收货地址</text>
				<text class="hui" @click="look">查看</text>				
			</view>
		</view>
		<view class="signature">
			<view>
				<text>个性签名</text>
				<text class="hui">修改</text>				
			</view>
		</view>
		<view class="out" @click="out">退出登录</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				itemData: {
					"name": "StarSky",
					"job": "店长",
					"phone": "17710595507"										
				}
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
			//查看收货地址
			look() {
				uni.navigateTo({
					url: ''
				})
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了扫码")

				}
			},
			revise() {
				uni.navigateTo({
					url: '/pages/revise/revise'
				})
			},
			modify() {
				uni.reLaunch({
					url: '/pages/Modify/Modify'
				})
			},
			out() {
				uni.redirectTo({
					url: '/pages/login/login'
				})
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
		align-items: center;
		z-index: 9;
		text {
			color: #fff;
		}
		.small {
			font-size: 22upx;
		}
	}
	.iconfont {
		font-family: 'iconfont' !important;
	}
	.headImg {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14upx 32upx;
		background-color: #fff;
		margin-bottom: 20upx;
		text {
			font-size: 32upx;
		}
		view {
			display: flex;
			align-items: center;
			text {
				font-size: 32upx;
			}
			image {
				width: 80upx;
				height: 80upx;
			}
			.icon {
				margin-left: 10upx;			
			}
		}		
	}
	.item {
		.headImg;
		border-top: none;
		margin-bottom: 0;
		padding: 0 32upx;
		view {
			width: 100%;
			height: 100%;
			padding: 36upx 0;
			display: flex;
			justify-content: space-between;
			border-bottom: 1upx solid #f8f8f8;
			.hui {
				font-size: 26upx;
				color: #696868;
				::after {
					.iconfont;
					content: '\e656';
					font-size: 25upx;
					margin-left: 15upx;
				}
			}
		}
	}
	.address, .signature {
		.item;
		margin-top: 30upx;
		view {
			width: 100%;
			height: 100%;
			padding: 36upx 0;
			display: flex;
			justify-content: space-between;
			border-bottom: 1upx solid #f8f8f8;
			.hui {
				font-size: 26upx;
				color: #696868;
				::after {
					.iconfont;
					content: '\e656';
					font-size: 25upx;
					margin-left: 15upx;
				}
			}
		}			
	}
	.out {
		height: 108upx;
		line-height: 108upx;
		background-color: #fff;
		text-align: center;
		font-size: 28upx;
		color: #ff5400;
		margin-top: 103upx;
	}
</style>
