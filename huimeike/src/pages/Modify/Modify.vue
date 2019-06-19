<template>
	<view class="Modify">
        <view class="form">
            <view><text>旧密码</text><input type="text" placeholder="请填写旧密码" v-model="password"></view>
            <view><text>新密码</text><input type="text" placeholder="请输入新的密码" v-model="newpassword"></view>
            <view><text>确认密码</text><input type="text" placeholder="请再次输入新的密码" v-model="true_new"></view>
        </view>
        <text class="forget" @click="forget">忘记旧密码？</text>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				password: '',
				newpassword: '',
				true_new: ''
			}
		},
		onLoad() {
			
		},
		methods: {
						//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					if(this.newpassword === this.true_new) {
						/* 修改密码请求 */
						this.$request.Modify({
							ysmm: this.$md5(this.password),
							password: this.$md5(this.newpassword)
						}).then(res =>{
							res = JSON.parse(res);
							console.log(res)
							this.$msg(res.msg)
							this.show = true
							setTimeout(() => {
								uni.showLoading({
									title: '请稍后...'							
								})
							}, 1500);

							setTimeout(() => {
								uni.hideLoading();
								uni.redirectTo({
									url: '/pages/login/login',
									animationType: 'none'
								})
							}, 3000);

							
						},err =>{
							console.log(err)
						})

					}else if(!this.password) {
						this.$msg('内容不能为空！')
					}else if(!this.newpassword) {
						this.$msg('内容不能为空！')
					}else if(!this.true_new) {
						this.$msg('内容不能为空！')
					}else {
						this.$msg('新密码与确认密码不一致！')
					}					
					
				}
			},
			forget() {
				uni.navigateTo({
					url: "/pages/forgot/forgot"
				})
			}
		}
	}
</script>

<style lang="less">
	view {
		box-sizing: border-box;
	}
	.Modify {
		.form {
			background-color: #fff;
			view {
				padding: 30upx 0;
                background: #fff;
                border-bottom: 1upx solid #f2f2f2;
				display: flex;
				text {
					margin-left: 20upx;
				}
                input {
                    margin-left: 40upx;
                }
                input::-webkit-input-placeholder {
                    color: #cbcbcd;
                }
                &:last-child input {
                    margin-left: 25upx;
                }				
			}
		}
		.forget {
            margin-top: 30upx;
            margin-left: 15upx;
            color: #676c8c;			
		}
	}
</style>
