<template>
	<view class="Offline">

		<view class="banner">
			<image v-if="OfflineData.kcxq" :src="imgUrl + OfflineData.kcxq.photo"></image>
			<view class="enroll">
				<view>
					<text>倒计时：</text>
					<count-down v-if="OfflineData.kcxq" :endTime="OfflineData.kcxq.endsj + ''" endText="已经结束了"></count-down>					
				</view>
				<view class="bmzt" @click="GObmzt(OfflineData.kcxq.id)">
					<view class="button" v-if="!bmzt">报名</view>
					<view class="buttonActive" v-if="bmzt">{{OfflineData.count}}</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="dabiaoti" v-if="OfflineData.kcxq">{{OfflineData.kcxq.hyname}}</view>
			<view class="box1">
				<view class="v1" @click="jsdetail">
					<image v-if="OfflineData.kcxq" :src="imgUrl2 + OfflineData.kcxq.portrait"></image>
					<view>
						<text class="t1" v-if="OfflineData.kcxq">{{OfflineData.kcxq.jsname}}</text>					
					</view>
				</view>
				<view class="v2" @click="collectFunc">
					<text class="icon t3" v-if="!collect">&#xe61a;</text>
					<text class="icon t3 yellow" v-if="collect">&#xe642;</text>
					<text class="t4">关注</text>
				</view>
			</view>
			<view class="box2">
				<text v-if="OfflineData.kcxq" class="time">时间：{{OfflineData.kcxq.hykssj}}</text>
				<text v-if="OfflineData.kcxq" class="mt">地点：{{OfflineData.kcxq.hydd}}</text>
			</view>
			<!-- 富文本编辑 -->
			<view class="parse">
				<u-parse v-if="OfflineData.kcxq" :content="OfflineData.kcxq.content" @preview="preview" @navigate="navigate" :imgOptions="false" />
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
				imgUrl: this.$imgUrl.imgUrl,
				imgUrl2: this.$imgUrl.imgUrl2,
				canClick: true,
				content: "报名",
				OfflineData: {},
				bmzt: 0,
				collect:0
			}
		},
		onLoad() {
			/* 线下课详情 */
			this.$request.OfflineCourse({
				id: 1
			}).then(res =>{
				res = JSON.parse(res);
				this.OfflineData = res;
				
				console.log(this.OfflineData)
				if(this.OfflineData.bmzt === 1) {
					this.bmzt = this.OfflineData.bmzt;
				}
				if(this.OfflineData.kcxq.gzjs === 1) {
					
					this.collect = this.OfflineData.kcxq.gzjs;
				}
				
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
			// callback() {
			// 	uni.showModal({
			// 		title: '课程结束！',
			// 		content: this.OfflineData.kcxq.hykssj + "-" + this.OfflineData.kcxq.endsj,
			// 		showCancel: false,
			// 		cancelText: '',
			// 		confirmText: '',
			// 		success: res => {
			// 			
			// 		},
			// 		fail: () => {},
			// 		complete: () => {}
			// 	});
			// },
			GObmzt (id) {
				
				uni.navigateTo({
					url: `/pages/checkout/checkout?id=${id}`
				})
				// if(this.OfflineData.bmzt === -1) {
				// 	//这里发送报名给后台
				// 	this.$request.enroll(
				// 		{
				// 			id: this.OfflineData.kcxq.id
				// 		}
				// 	).then(res =>{
				// 		console.log(res)
				// 		uni.showLoading({
				// 			title: '支付中...'
				// 		})
				// 		uni.requestPayment({
				// 			provider: "wxpay",  
				// 			timeStamp: JSON.stringify(res.timestamp),  
				// 			nonceStr: res.noncestr,  
				// 			package: res.package,  
				// 			signType:"MD5",  
				// 			paySign: res.sign,  
				// 			orderInfo: JSON.stringify({  
				// 				appid: res.appid,  
				// 				noncestr: res.noncestr,  
				// 				package: res.package,  
				// 				partnerid: res.partnerid,  
				// 				prepayid: res.prepayid,  
				// 				timestamp: res.timestamp,  
				// 				sign: res.sign  
				// 			}),
				// 			success: function (res) {
				// 				console.log(res)
				// 				uni.hideLoading()
				// 				uni.showToast({  
				// 					title:"支付成功",  
				// 					icon:"success",  
				// 					duration:2000,  
				// 					success:function(){
				// 						uni.redirectTo({
				// 							url: '/pages/OfflineClass/Offline'
				// 						})
				// 					}  
				// 				}); 
				// 			},
				// 			fail: function (err) {
				// 				uni.showToast({  
				// 					title:"支付失败",  
				// 					icon:"success",  
				// 					duration:2000,  
				// 					complete:function(){  
				// 						
				// 					}  
				// 				});
				// 			}
				// 		});						
				// 	},err =>{
				// 		console.log(err)
				// 	})
				// }else if (this.OfflineData.bmzt === 1) {
				// 	this.$msg("您已经报过名了！")
				// }
				
			},
			//关注讲师
			collectFunc(){
				this.collect = !this.collect
				/* 获取未购买课程请求 */
				this.$request.focus(
					{
						id: this.OfflineData.kcxq.hyjs,
						zt: this.collect
					}
				).then(res =>{
					res = JSON.parse(res);
					console.log(res)
				},err =>{
					console.log(err)
				})
			},
			//进入讲师详情
			jsdetail() {
				uni.navigateTo({
					url: `/pages/LecturerDetails/LecturerDetails?id=${this.OfflineData.kcxq.hyjs}`
				})
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
	
	.Offline {
		padding-bottom: 130upx;
		background-color: #fff;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.banner {
			box-sizing: border-box;
			height: 510upx;
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
				background: #737373;
				.bmzt {
					margin-right: 20upx;
					text-align: center;
					.button {
						width: 180upx;
						height: 60upx;
						line-height: 60upx;
						background-color: #f86e25;
						color: #fff;
						border-radius: 40upx;
						font-size: 28upx;
						
					}
					.buttonActive {
						width: 180upx;
						height: 60upx;
						line-height: 60upx;
						background-color: #f86e25;
						color: #fff;
						border-radius: 40upx;
						font-size: 28upx;
					}
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
				align-items: center;
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
						align-items: center;
						justify-content: center;
						margin-left: 18upx;
						.t1 {
							font-size: 25upx;
							color: #676767;
							margin-top: 8upx;
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
					.yellow {
						color: orange;
					}
					.t4 {
						font-size: 32upx;
					}
				}
			}
			.box2 {
				padding: 28upx 0;
				display: flex;
				flex-direction: column;
				border-bottom: 1upx solid #e6e6e6;
				text {
					color: #686868;
					font-size: 28upx;
				}
				.time {
					&:before {
						.iconfont;
						content: '\e73c';
						margin-right: 10upx;
					}
				}
				.mt {
					margin-top: 25upx;
					&:before {
						.iconfont;
						content: '\e644';
						margin-right: 8upx;
						font-size: 30upx;
					}
				}
			}
			.parse {
				margin-top: 20upx;
			}
		}				
	}	

</style>
