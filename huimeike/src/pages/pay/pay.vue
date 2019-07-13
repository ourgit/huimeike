<template>
	<view class="buy">

		<view class="num">
			<view class="box">
				<view>
					<text class="t1">{{changePrice}}</text>
					<text class="t2">颜值豆</text>
				</view>
				<text class="t3">· 颜值豆仅用于付费内容</text>
			</view>
		</view>
		<view class="container">
			<view class="recharge">充值</view>
			<view class="ul">
				<view class="li" :class="{active:item == isA }" v-for="item in RechargeSpecification" :key="item" @click="onSelect(item)">
					<text class="bold">{{item}}颜值豆</text>
					<text>{{item}}元</text>
				</view>
			</view>
			<button @click="Confirm">确认支付</button>
			<view class="mark">
				<text>1.颜值豆可用于直接购买APP内的商品；</text>
				<text class="last">2.颜值豆为虚拟币，充值后的颜值豆不会过期，但无法提现或转赠他人；</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				//充值规格
				RechargeSpecification: [],
				//选中状态
				isA: 0,
				price: '0'
			}
		},
		computed: {
			changePrice() {
				return this.price;
			}
		},
		onLoad() {
			/* 支付档次 */
			this.$request.pay().then(res =>{
				//将字符串转成数组
				this.RechargeSpecification = eval(res)
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
			buy() {
				uni.navigateTo({
					
				})
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了扫码")

				}
			},
			onSelect(item) {
				this.isA = item;
				this.price = item;
			},
			//确认支付
			Confirm() {
				console.log(this.price)
				// this.$request.WXZF({
				// 	total_fee: 1
				// }).then(res =>{
				// 	res = JSON.parse(res);
				// 	if(res.code === 1) {
				// 		// #ifdef H5
				// 		window.location.href = res.msg
				// 		// #endif
				// 	}else if(res.code === 2) {
				// 		this.$msg(res.msg)
				// 	}
				// },err =>{
				// 	console.log(err)
				// })
				this.$request.recharge({
					czje: this.price
				}).then(res =>{
					console.log(res)
					uni.showLoading({
						title: '支付中...'
					})
					uni.requestPayment({
						provider: "wxpay",  
						timeStamp: JSON.stringify(res.timestamp),  
						nonceStr: res.noncestr,  
						package: res.package,  
						signType:"MD5",  
						paySign: res.sign,  
						orderInfo: JSON.stringify({  
							appid: res.appid,  
							noncestr: res.noncestr,  
							package: res.package,  
							partnerid: res.partnerid,  
							prepayid: res.prepayid,  
							timestamp: res.timestamp,  
							sign: res.sign  
						}),
						success: function (res) {
							console.log(res)
							uni.hideLoading()
							uni.showToast({  
								title:"支付成功",  
								icon:"success",  
								duration:2000,  
								success:function(){  
									uni.switchTab({
										url: '/pages/checkout/checkout'
									})
								}  
							}); 
						},
						fail: function (err) {
							uni.showToast({  
								title:"支付失败",  
								icon:"success",  
								duration:2000,  
								complete:function(){  
									
								}  
							});
							
						}
					});
				},err =>{
					console.log(err)
				})
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
	.num {
		.box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			view {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 55upx;
				.t1 {
					font-size: 60upx;
					font-weight: bold;
				}
				.t2 {
					font-size: 40upx;
					margin-left: 10upx;
				}				
			}
			.t3 {
				font-size: 24upx;
				color: #ff5b03;
				text-align: center;
				margin-top: 10upx;
			}

		}
	}
	.container {
		padding: 0 41upx;
		.recharge {
			font-size: 25upx;
			color: #a3a3a3;
			padding-top: 67upx;
			padding-bottom: 40upx;
		}
		.ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.li {
				display: flex;
				flex-direction: column;
				padding: 32upx 47upx;
				border-radius: 10upx;
				border: 2upx solid #ff5b03;
				margin-bottom: 22upx;
				text {
					font-size: 28upx;
					color: #ff5b03;
				}
				.bold {
					font-weight: bold;
				}
			}
			.active {
				display: flex;
				flex-direction: column;
				padding: 32upx 47upx;
				border-radius: 10upx;
				border: 2upx solid #ff5b03;
				margin-bottom: 22upx;
				background: #ff6a0c;
				text {
					font-size: 28upx;
					color: #fff;
				}
				.bold {
					font-weight: bold;
				}
			}
		}
		button {
			background-color: #ff6a0c;
			color: #fff;
			margin-top: 44upx;
		}
		.mark {
			font-size: 23upx;
			color: #a3a3a3;
			margin-top: 62upx;
			display: flex;
			flex-direction: column;
			.last {
				margin-top: 20upx;
			}
		}
	}

</style>
