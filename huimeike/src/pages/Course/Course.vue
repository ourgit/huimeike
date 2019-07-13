<template>
	<view class="Course">
		<view class="banner">
			<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558517802790&di=adb7b867c405ebac825c23484acb9509&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170603%2F756ce73de73c4a3ca5bf2fa5bce2bec7_th.jpg"></image>
			<view class="enroll">
				<view>
					<text>倒计时：</text>
					<count-down endTime="1561910400" :callback="callback" endText="已经结束了"></count-down>					
				</view>
				<button :class="{disabled: !this.canClick}" @click="countDown">{{content}}</button>
			</view>
		</view>
		<view class="content">
			<view class="dabiaoti">对新领域保持好奇，多结交新朋友</view>
			<view class="box1">
				<view class="v1">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558519496977&di=263688d811e1dabbfa9dad32edbd0827&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F6971d6fd691a2d2bb249424387d25157fdc49e1e.jpg" mode=""></image>
					<view>
						<text class="t1">逻辑思维</text>
						<text class="t2">2019-06-20</text>						
					</view>
				</view>
				<view class="v2">
					<text class="icon t3">&#xe61a;</text>
					<text class="t4">关注</text>
				</view>
			</view>
			<!-- 富文本编辑 -->
			<view>
				
			</view>
		</view>	
<!-- 		<view class="end">
			<text>—— 我是有底线的 ——</text>
		</view> -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				canClick: true,
				content: "预约"
			}
		},
		onLoad() {
			/* 预约精品线上课接口 */
			this.$request.Course().then(res =>{
				res = JSON.parse(res);
				console.log(res)
			},err =>{
				console.log(err)
			})
		},
		methods: {
			goback() {
				uni.navigateBack({
					delta: 1
				});
			},
			callback() {
				uni.showModal({
					title: '活动结束！',
					content: '2019-5-23',
					showCancel: false,
					cancelText: '',
					confirmText: '',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			countDown () {
				if (!this.canClick) return;

					this.canClick = false
					this.content = "4520人已预约"

			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了分享")
			
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
	.end {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		font-size: 35upx;
		padding: 20upx 0;
		color: #919191;
	}
	
	.Course {
		padding-bottom: 130upx;
		.banner {
			box-sizing: border-box;
			height: 548upx;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
			.enroll {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 97upx;
				position: absolute;
				left: 0;
				bottom: 0;
				text-indent: 13upx;
				font-size: 32upx;
				color: #fff;
				line-height: 97upx;
				background: #ed824a;
				
				button {
					margin: 0;
					width: 179upx;
					height: 59upx;
					line-height: 59upx;
					background-color: #ffb81f;
					color: #fff;
					border-radius: 80upx;
					font-size: 28upx;
					margin-right: 20upx;
				}
			}
		}
		.content {
			padding: 0 52upx;
			box-sizing: border-box;
			background-color: #fff;
			.dabiaoti {
				font-size: 50upx;
				padding-top: 74upx;
			}
			.box1 {
				display: flex;
				justify-content: space-between;
				margin-top: 55upx;
				padding-bottom: 40upx;
				border-bottom: 1upx solid #e6e6e6;
				.v1 {
					display: flex;
					image {
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
					}
					view {
						display: flex;
						flex-direction: column;						
						margin-left: 18upx;
						.t1 {
							font-size: 25upx;
							color: #676767;
							margin-top: 8upx;
						}
						.t2 {
							font-size: 18upx;
							color: #adadad;
						}
					}
				}
				.v2 {
					text {
						color: #8a8a8a;
					}
					.t3 {
						font-size: 35upx;
					}
					.t4 {
						font-size: 32upx;
					}
				}
			}			
		}				
	}	

</style>