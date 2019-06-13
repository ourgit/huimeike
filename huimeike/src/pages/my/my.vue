<template>
	<view class="my">
		<view class="info">
			<view class="top">
				<image src="../../static/images/my/headImg.png"></image>
				<view class="box">
					<view>
						<text class="text1">StarSky</text>
						<text class="text2">Lv.9</text>
					</view>
					<text class="autograph">如果有一个霸气的个性签名，会给你加分哦</text>
				</view>
			</view>
			<view class="bottom">
				<view>
					<text class="ed824a">168</text>
					<text class="b3b3b3">关注</text>
				</view>
				<view>
					<text class="ed824a">85</text>
					<text class="b3b3b3">粉丝</text>
				</view>
				<view>
					<text class="ed824a">9625</text>
					<text class="b3b3b3">颜值豆</text>
				</view>
				<view>
					<text class="ed824a">42</text>
					<text class="b3b3b3">积分</text>
				</view>
			</view>
		</view>
		<view class="diploma">
			<text style="font-size: 30upx;">我的学员证</text>
			<view style="display: flex;">
				<view class="icon hui">&#xe646;</view>
				<view class="icon hui" @click="certificate">&#xe656;</view>
			</view>
		</view>
		<view class="account">
			<text class="account-text"  style="font-size: 30upx;">我的账户</text>
			<view class="account_nav">
				<view @click="coupons">
					<text class="ico ico1"></text>
					<text class="text3">卡券</text>
					<text class="text4">0张</text>
				</view>
				<view @click="order">
					<text class="ico ico2"></text>
					<text class="text3">订单</text>
					<text class="text4">0个</text>
				</view>
				<view>
					<text class="ico ico3"></text>
					<text class="text3">颜值豆</text>
					<text class="text4">9642</text>
				</view>
				<view>
					<text class="ico ico4"></text>
					<text class="text3">积分</text>
					<text class="text4">42</text>
				</view>	
			</view>								
		</view>
		<view class="account">
			<text class="account-text" style="font-size: 30upx;">我的学习</text>
			<view class="account_nav">
				<view @click="collection">
					<text class="ico ico5"></text>
					<text class="text3">收藏</text>
					<text class="text4">0个</text>
				</view>
				<view>
					<text class="ico ico6"></text>
					<text class="text3">心得</text>
					<text class="text4">0条</text>
				</view>
				<view>
					<text class="ico ico7"></text>
					<text class="text3">学习时长</text>
					<text class="text4">862分钟</text>
				</view>
				<view>
					<text class="ico ico8"></text>
					<text class="text3">证书</text>
					<text class="text4">0个</text>
				</view>
				<view>
					<text class="ico ico9"></text>
					<text class="text3">学习过程</text>
					<text class="text4">0个</text>
				</view>	
				<view @click="download">
					<text class="ico ico10"></text>
					<text class="text3">下载</text>
					<text class="text4">0个</text>
				</view>					
			</view>								
		</view>
		<view class="diploma" @click="contacts">
			<text style="font-size: 30upx;">我的人脉</text>
			<view style="display: flex;">
				<view class="icon hui" style="font-size: 21upx;">立即查看</view>
				<view class="icon hui" style="font-size: 21upx;">&#xe656;</view>
			</view>
		</view>
		<view class="diploma">
			<text style="font-size: 30upx;">推荐给好友</text>
			<view style="display: flex;">
				<view class="icon hui" style="font-size: 21upx;">立即邀请</view>
				<view class="icon hui" style="font-size: 21upx;">&#xe656;</view>
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
			set() {
				uni.navigateTo({
					url: '/pages/set/set'
				})
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg('点击了扫描');
					
				}else if (index === 1) {
					this.$msg("您点击了设置")
					uni.navigateTo({
						url: '/pages/set/set'
					})
				}
			},
			certificate() {
				uni.navigateTo({
					url: "/pages/certificate/certificate"
				})
			},
			//订单
			order() {
				uni.navigateTo({
					url: "/pages/order/order"
				})
			},
			//优惠券
			coupons() {
				uni.navigateTo({
					url: "/pages/coupons/coupons"
				})	
			},
			//人脉
			contacts() {
				uni.navigateTo({
					url: "/pages/contacts/contacts"
				})					
			},
			//收藏
			collection() {
				uni.navigateTo({
					url: "/pages/collection/collection"
				})	
			},
			//下载
			download() {
				uni.navigateTo({
					url: "/pages/download/download"
				})					
			}
		}
	}
</script>

<style lang="less">
	.my {
		width: 100%;		
		background: url("~@/static/images/my/bg.png") no-repeat;
		background-size: 100% 100%;
		padding: 0 23upx;
		padding-bottom: 110upx;
		box-sizing: border-box;
		.info {
			border-radius: 10upx;
			padding: 9upx;
			box-sizing: border-box;
			background: #fff;
			.top {																
				display: flex;
				image {
					width: 160upx;
					height: 160upx;
					margin-left: 10upx;
					margin-top: 10upx;
				}
				.box {
					height: 160upx;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
					margin-left: 26upx;
					overflow: hidden;
					view {
						display: flex;
						.text1 {
							font-size: 30upx;
							color: #ed824a;							
						}
						.text2 {
							padding: 4upx 30upx;
							box-sizing: border-box;
							background-color: #f5af1a;
							color: #fff;
							font-size: 16upx;
							border-radius: 15upx;
							margin-left: 8upx;
						}
						
					}
					.autograph {
						margin-top: 10upx;
						font-size: 24upx;
						color: #b3b3b3;
					}
				}
			}
			.bottom {
				display: flex;
				justify-content: space-around;
				padding: 38upx 0;
				view {
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					.ed824a {
						color: #ed824a;
						font-size: 36upx;
					}
					.b3b3b3 {
						font-size: 28upx;
						color: #b3b3b3;
						
					}
				}
			}
		}
		.diploma {
			height: 98upx;
			line-height: 98upx;
			display: flex;
			background-color: #fff;
			justify-content: space-between;
			align-items: center;
			margin-top: 22upx;
			border-radius: 10upx;
			padding: 0 32upx;
			color: #ed824a;
			.hui {
				color: #b2b2b2;
			}
		}
		.account {
			display: flex;
			flex-direction: column;
			background-color: #fff;
			margin-top: 20upx;
			border-radius: 10upx;
			.account-text {
				width: 90%;
				padding: 30upx 0;
				margin: 0 auto;
				border-bottom: 1upx solid #b2b2b2;
				color: #ed824a;
			}
			.account_nav {
				width: 90%;
				margin: 0 auto;
				padding: 20upx 0;
				padding-bottom: 0;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				text-align: center;
				view {
					display: flex;
					flex-direction: column;
					margin-bottom: 30upx;					
					text.ico {
						display: block;
						width: 120upx;
						height: 60upx;
						background-position: center;
					}
					.ico1 {						
						background: url("~@/static/images/my/coupon.png") no-repeat;
						background-size: 55upx 41upx;
					}
					.ico2 {						
						background: url("~@/static/images/my/order.png") no-repeat;	
						background-size: 51upx 49upx;											
					}
					.ico3 {						
						background: url("~@/static/images/my/yzd.png") no-repeat;
						background-size: 54upx 49upx;												
					}
					.ico4 {						
						background: url("~@/static/images/my/integral.png") no-repeat;
						background-size: 55upx 52upx;												
					}
					.text3 {
						font-size: 24upx;
						margin-top: 10upx;
					}
					.text4 {
						font-size: 24upx;
						color: #b2b2b2;
					}
					.ico5 {						
						background: url("~@/static/images/my/collect.png") no-repeat;
						background-size: 55upx 52upx;												
					}
					.ico6 {						
						background: url("~@/static/images/my/study.png") no-repeat;
						background-size: 55upx 52upx;												
					}
					.ico7 {						
						background: url("~@/static/images/my/time.png") no-repeat;
						background-size: 55upx 52upx;												
					}
					.ico8 {						
						background: url("~@/static/images/my/diploma.png") no-repeat;
						background-size: 55upx 52upx;												
					}
					.ico9 {						
						background: url("~@/static/images/my/Learned.png") no-repeat;
						background-size: 55upx 52upx;												
					}
					.ico10 {						
						background: url("~@/static/images/my/download.png") no-repeat;
						background-size: 55upx 52upx;												
					}																														
				}
			}
		}
	}
</style>
