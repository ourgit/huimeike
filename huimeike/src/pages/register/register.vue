<!-- 注册页面 -->
<template>
	<view class="register" :style="{ backgroundImage:'url('+bgImage+')'}">
		<view class="logo" :style="{ backgroundImage:'url('+logoImage+')'}"></view>
		<view class="form" :style="{ backgroundImage:'url('+formImage+')'}">
			<view class="flex">
				<text class="zhuce" @click="goLogin">登陆</text>				
			</view>
			<view class="input" style="margin-top: 15px;">
				<text class="icon">&#xe620;</text>
				<input type="number" placeholder="请输入手机号" placeholder-style="color:#b2b2b2" v-model="phone" />
			</view>
			<view class="input" style="margin-top: 15px;">
				<text class="icon bold">&#xe61e;</text>
				<input type="number" placeholder="手机验证码" placeholder-style="color:#b2b2b2" v-model="code" style="width: 60%;" />
				<button class="yzm" :class="{disabled: !this.canClick}" @click="countDown">{{content}}</button>
			</view>			
			<view class="input" style="margin-top: 15px;">
				<text class="icon bold">&#xe60f;</text>
				<input type="text" placeholder="请设置密码" placeholder-style="color:#b2b2b2" v-model="password" />
			</view>
				<picker @change="bindPickerChange" :value="index" :range="array" range-key="group_name" v-if="array.length">
					<view class="id" style="margin-top: 15px;" >
						<view class="icon left">&#xe64d;</view><view>身份选择：{{array[index].group_name}}</view><view class="icon right">&#xe617;</view>	
					</view>
				</picker>	
			<button class="submit" @click="register" :disabled="isDisable">注册</button>
		</view>
	</view>
</template>

<script>
	import {bg} from '@/static/base64/common/bg.js';
	import {logo} from '@/static/base64/common/logo.js';
	import {form2} from '@/static/base64/common/form2.js';
	var self;
	export default {
		data() {
			return {
				bgImage: bg,
				logoImage: logo,
				formImage: form2,
				phone: '',
				code: '',
				password: '',
				/* 选择身份 */
				array: [],
				index: 0,
				//存一个选中身份的id，留着发给后台
				id: '',
				/* 获取验证码 */
				content: '获取验证码',
				totalTime: 60,
				canClick: true,
				//防止表单重复提交开关
				isDisable: false
				
			}
		},
		onLoad() {
			/* 获取身份请求 */
			this.$request.getid().then(res =>{
				
				this.array = JSON.parse(res);
				
			},err =>{
				console.log(err)
			})	
			
		},
		methods: {
			/* 点击获取验证码 */
			countDown () {
				if (!this.canClick) return;
					/* 发送获取验证码请求 */
					this.$request.getcode({
						phone: this.phone
					}).then(res =>{
						
						if(!this.phone) {
							this.$msg("手机号不能为空！");
							return
						}
						else if(!(/^1[345789]\d{9}$/.test(this.phone))) {
							this.$msg("手机号格式不正确！");
							return							
						}
						else if(res.code == -2) {
							this.$msg(res.msg);
						}
					},err =>{
						console.log(err)
					})	
					this.canClick = false
					this.content = this.totalTime + 's后重新发送'
					const timer = setInterval(() => {
						this.totalTime--
						this.content = this.totalTime + 's后重新发送'
						if (this.totalTime < 0) {
							clearInterval(timer)
							this.content = '重新发送验证码'
							this.totalTime = 60
							this.canClick = true  //这里重新开启
						}
					},1000)
			},
			//点击选择身份
			bindPickerChange: function(e) {
				this.index = e.target.value;
				this.id = this.array[this.index].id;

			},
			register() {
				this.$request.register({
					phone: this.phone,
					password: this.$md5(this.password),
					yzm: this.code,
					group_id: this.id
				}).then(res =>{
					res = JSON.parse(res)
					
					if(!this.phone) {
						this.$msg("内容不能为空！");
					}
					else if(res.code == -2) {
						this.$msg(res.msg);
					}
					else if(res.code == -3) {
						this.$msg(res.msg);
					}
					else if(res.code == -4) {
						this.$msg(res.msg);
					}
					else if(!this.id) {
						this.$msg("请选择身份！");					
					}
					else if (res.code == 1) {
						this.isDisable = true;
						this.$msg(res.msg);
						setTimeout(() => {
							uni.showLoading({
								title: '请稍后...'							
							})
						}, 1500);						
						setTimeout(() => {
							uni.hideLoading();
							this.isDisable = false;
							uni.navigateTo({
								url: '/pages/login/login',
								animationType: 'none'
							})
						}, 3000);
					}
					else if (res.code === -1) {
						this.$msg(res.msg);					
					}					
				},err =>{
					console.log(err)
				})				
			},
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login',
					animationType: 'none'
				})
			}
		}
	}
</script>

<style lang="less">
	.register {
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
			height: 770upx;
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
				.yzm {
					width: 200upx;
					height: 48upx;
					line-height: 48upx;
					border: 2upx solid #b2b2b2;
					background: #fff;
					border-radius: 100upx;
					color: #b2b2b2;
					font-size: 24upx;
					position: absolute;
					right: 6upx;
					top: 10upx;
					outline: none;
				}
				.disabled{
					color:#b2b2b2;
				}
			}
			.id {
				width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 30upx;
				color: #b2b2b2;
				padding-left: 66upx;
				box-sizing: border-box;
				border-bottom: 2upx solid #f2f2f2;
				height: 79upx;
				line-height: 79upx;
				position: relative;
				text {
					font-size: 30upx;
				}
				.icon {
					position: absolute;
					top: 0upx;
					font-size: 35upx;
					font-weight: bold;
					color: #666;
				}
				.left {
					left: 13upx;					
				}
				.right {
					right: 23upx;
					font-weight: normal;
					color: #bfbfbf;
				}
			}
			.between {
				height: 79upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30upx;
				color: #b2b2b2;
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
