<template>
	<view class="BuyMember">
		<view class="box">
			<button class="pop_up-btn" @click="pop_up_btn"></button>
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
			/* 点击确定唤起微信支付 */
			pop_up_btn() {
				//判断环境是否为H5
				// #ifdef H5
					this.$request.WXZF({
						total_fee: 1
					}).then(res =>{
						res = JSON.parse(res);
						if(res.code === 1) {
							// #ifdef H5
							window.location.href = res.msg;
							// #endif
						}else if(res.code === 2) {
			
						}
					},err =>{
						console.log(err)
					})
				// #endif
				if(uni.getSystemInfoSync().platform === 'android') {
					this.$request.APPWXZF().then(res =>{
						console.log(res);
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
											url: '/pages/home/home'
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
				}else if(uni.getSystemInfoSync().platform === 'ios') {
					
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.BuyMember {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: url('~@/static/images/common/VIPbg.jpg') no-repeat;
		background-size: 100% 100%;
		.box {
			width: 750upx;
			height: 741upx;
			background: url('~@/static/images/common/pop_up.png') no-repeat;
			background-size: 100% 100%;
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 10;
			margin-left: -375upx;
			margin-top: -370.5upx;
			.pop_up-btn {
				width: 370upx;
				height: 85upx;
				position: absolute;
				bottom: 50upx;
				left: 50%;
				margin-left: -185upx;
				z-index: 10;
				background: url('~@/static/images/common/pop_up-btn.png') no-repeat;
				background-size: 100% 100%;
			}
		}
	}
</style>
