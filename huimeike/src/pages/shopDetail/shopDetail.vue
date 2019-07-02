<template>
	<view class="shopDetail">
		<view class="banner">
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				</swiper-item>
			</swiper>
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
			<view class="t" @click="gohome">
				<text class="icon">&#xe636;</text>
				<text>首页</text>
			</view>
			<view class="t2" @click="gome">
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
				//轮播图的组件
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				circular: true,				
				banner: [],
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0
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
			//去首页
			gohome() {
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			//去个人中心
			gome() {
				uni.switchTab({
					url: '/pages/my/my'
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
			overflow: hidden;
			box-sizing: border-box;			
			image {
				width: 100%;
				height: 100%;
			}
			.screen-swiper {
				height: 500upx;
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
