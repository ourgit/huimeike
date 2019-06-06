<template>
	<view class="shopDetail">

		<view class="banner">
			<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558701625215&di=bf8d35f8dda15e847bcd7c86e4ffaa79&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0134a057df98fd0000012e7ed00234.jpg"></image>
		</view>
		<view class="info">
			<text class="price">¥99.9</text>
			<text class="explain">新款女装 长荣摇粒哈哈哈哈哈哈哈哈哈哈哈哈哈</text>
		</view>
		<view class="detail">
			<text class="x">产品详情</text>
			<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3469209669,3124796523&fm=26&gp=0.jpg"></image>
		</view>
		<view class="footer">
			<view class="t">
				<text class="icon">&#xe636;</text>
				<text>首页</text>
			</view>
			<view class="t2">
				<text class="icon">&#xe64f;</text>
				<text>我的</text>				
			</view>
			<button>确定购买</button>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				Heiban: this.$base64.Heiban,
				Heiban2: this.$base64.Heiban2,
			}
		},
		onLoad() {
			
		},
		methods: {
			goback() {
				uni.navigateBack({
					delta: 1
				});
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
	}
	.iconfont {
		font-family: 'iconfont' !important;
	}
	.end {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		font-size: 35upx;
		padding: 20upx 0;
		color: #919191;
	}
	.shopDetail {
		.banner {
			width: 100%;
			height: 700upx;
			box-sizing: border-box;			
			image {
				width: 100%;
				height: 100%;
			}
		}
		.info {
			display: flex;
			flex-direction: column;
			padding: 34upx 23upx;
			background-color: #fff;
			.price {
				font-size: 36upx;
				color: #ff5800;
			}
			.explain {
				font-size: 26upx;
				margin-top: 15upx;
			}
		}
		.detail {			
			background-color: #fff;
			font-size: 28upx;
			margin-top: 10upx;
			padding-bottom: 150upx;
			.x {
				height: 84upx;
				line-height: 84upx;
				&:before {
					.iconfont;
					content: "\e605";
					font-size: 33upx;
					color: #ff5800;
					font-weight: bold;
				}				
			}
			image {
				width: 100%;				
			}
		}
		.footer {
			display: flex;
			justify-content: space-between;
			text-align: center;
			width: 100%;
			position: fixed;
			bottom: 0;
			background-color: #fff;
			.t, .t2 {
				display: flex;
				flex-direction: column;
				padding: 0 53upx;
				font-size: 20upx;
				margin: 8upx 0;				
			}
			.t {
				border-right: 1upx solid #dadada;
			}
			button {
				margin: 0;
				background-color: #ed824a;
				width: 373upx;
				border-radius: 0;
				border: none;
				line-height: 110upx;
				color: #fff;
				font-size: 30upx;
			}
		}
	}	
</style>
