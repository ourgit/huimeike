<template>
	<view class="login" :style="{ backgroundImage:'url('+bgImage+')'}">
		<view class="logo" :style="{ backgroundImage:'url('+logoImage+')'}"></view>
		<view class="form" :style="{ backgroundImage:'url('+formImage+')'}">
			<view class="flex">
				<text class="zhuce" @click="goRegister">注册</text>				
			</view>
			<view class="input" style="margin-top: 30upx;">
				<text class="icon">&#xe620;</text>
				<input type="number" placeholder="请输入手机号" placeholder-style="color:#b2b2b2" v-model="phone" value="phone" />
			</view>
			<view class="input">
				<text class="icon bold">&#xe60f;</text>
				<input type="password" placeholder="请输入密码" placeholder-style="color:#b2b2b2" v-model="password" value="password" autocomplete="password" />
			</view>
			<view class="between">
		        <view class="align-center">		       
		            <checkbox-group @change="checkboxChange">
						<view class="cu-form-group" style="padding: 0; margin-right: 12upx;">
							<checkbox id="chkRem" :class="rememberPsw?'checked':''" :checked="rememberPsw?true:false" @tap="rememberPsw = !rememberPsw" style="transform:scale(0.7)"></checkbox>
						</view>
		            </checkbox-group>
					<text class="chkRem">记住密码</text>
		        </view>
				<view>
					<text @click="forgot">忘记密码？</text>
				</view>
			</view>
			<button class="submit" @click="login" :disabled="isDisable">登录</button>
		</view>			
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import {bg} from '@/static/base64/common/bg.js';
	import {logo} from '@/static/base64/common/logo.js';
	import {form} from '@/static/base64/common/form.js';
	export default {
		data() {
			return {
				bgImage: bg,
				logoImage: logo,
				formImage: form,
				phone: '',
				password: '',
				rememberPsw: true,
				//防止表单重复提交开关
				isDisable: false
			}
		},
		onLoad() {
			//页面加载完成，获取本地存储的用户名及密码
			const userPhone = uni.getStorageSync('userPhone');
			const Password = uni.getStorageSync('Password');
			if(userPhone && Password) {
				this.phone = userPhone;
				this.password = Password;
			}else {
				this.phone = '';
				this.password = '';
			}		
		},
		methods: {
			...mapMutations(['SetUserInfo']),
			goRegister() {
				uni.navigateTo({
					url: '/pages/register/register',
					animationType: 'none'
				})				
			},
			forgot() {
				uni.navigateTo({
					url: '/pages/forgot/forgot',
					animationType: 'none'
				})				
			},
			//点击记住密码
	        checkboxChange(e) {
	            console.log(e.detail.value.length);
	            if (e.detail.value.length == 1) {
	                //获取缓存的账号
	                 uni.getStorageSync('userPhone',this.phone);
	                 uni.getStorageSync('Password',this.password);
	            } else {
	                  uni.removeStorageSync('userPhone');
	                  uni.removeStorageSync('Password');              
	            }
	        },
			login() {
				
				this.$request.login({
					phone: this.phone,
					password: this.$md5(this.password)
				}).then(res =>{					
					res = JSON.parse(res);
					
					if(res.code === 1) {
						this.isDisable = true;
						this.$msg(res.msg);
						//获取登陆成功后台返的token和手机号
						this.SetUserInfo({token:res.token,phone:this.phone})
						//为了防止页面刷新造成数据丢失，在这里要存储VueX里的state
						uni.setStorage({
							key: 'state',
							data: this.$store.state
						})
						//用户勾选记住密码将用户名密码存储到本地
						if(this.rememberPsw) {
							uni.setStorageSync('userPhone',this.phone);
							uni.setStorageSync('Password',this.password);
						}else {
							uni.removeStorageSync('userPhone');
							uni.removeStorageSync('Password');
							this.phone = "";
							this.password = "";
						}
						setTimeout(() => {
							uni.showLoading({
								title: '请稍后...'							
							})
						}, 1500);

						setTimeout(() => {
							uni.hideLoading();
							this.isDisable = false;
							uni.switchTab({
								url: '/pages/home/home',
								animationType: 'none'
							})
						}, 3000);
						
					}
					if(res.code === -2) {
						this.$msg(res.msg)
						return
					}
				},err =>{
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="less">
	.login {
		width: 100%;
		height: 1624upx;
		position: absolute;
		left: 0;
		padding: 0;
		right: 0;
		top: 0;
		background-size: 100%;
		background-color: #f5b345;
		background-position: center top;
		background-repeat: no-repeat;
		overflow: hidden;
		.logo {
			width: 518/2upx;
			height: 124/2upx;			
			background-size: 100%;
			position: absolute;
			top: 10%;
			left: 50%;
			margin-left: -129.5upx;
		}
		.form {
			width: 606upx;
			height: 600upx;
			position: absolute;
			overflow: hidden;
			top: 330upx;
			left: 50%;
			margin-left: -303upx;
			padding: 30upx;
			box-sizing: border-box;
			background-size: 100% 100%;
			.flex {
				height: 57upx;
				line-height: 77upx;
				display: flex;
				justify-content: flex-end;
				.zhuce {
					margin-right: 18upx;
					font-size: 28upx;
					color: #666;
				}
			}
			.input {
				height: 79upx;
				position: relative;
				padding: 5upx 0;
				padding-left: 66upx;
				display: flex;
				align-items: center;
				border-bottom: 2upx solid #f2f2f2;
				
				.icon {
					position: absolute;
					left: 13upx;
					top: 24upx;
					font-size: 35upx;
				}
				.bold {
					font-weight: bold;
				}
				input {
					width: 100%;
					font-size: 30upx;
				}
			}
			.between {
				height: 79upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30upx;
				color: #b2b2b2;
				margin-top: 15upx;
				.align-center {
					display: flex;
					align-items: center;
				}
			}		
			.submit {
				margin-top: 39upx;
				height: 84upx;
				line-height: 84upx;
				background: #f3a747;
				color: #fff;
				text-align: center;
			}
		}
	}
</style>
