<template>
	<view class="buy">

		<view class="headImg">
			<text>头像</text>
			<view>
				<avatar 
					selWidth="200px"
					selHeight="400upx"
					@upload="ModifyAvatar"
					:avatarSrc="imgUrl2 + userInfo.head_img"
					avatarStyle="width:80upx;height:80upx;"
					inner="true"
					canRotate="false"
				>
				</avatar>
				<text class="icon">&#xe656;</text>				
			</view>

		</view>
		<view class="item">
			<view>
				<text>姓名</text>
				<text class="hui" @click="revise">{{userInfo.nickname}}</text>
			</view>
		</view>
		<view class="item">
			<view>
				<text>职位</text>
				<text class="hui" @click="revise">{{userInfo.group_id}}</text>				
			</view>
		</view>
		<view class="item">
			<view>
				<text>电话</text>
				<text class="hui" @click="revise">{{userInfo.account}}</text>
			</view>
		</view>
		<view class="item">
			<view>
				<text>密码</text>
				<text class="hui" @click="modify">修改</text>				
			</view>
		</view>
		<view class="address">
			<view>
				<text>收货地址</text>
				<text class="hui" @click="look">查看</text>				
			</view>
		</view>
		<view class="signature">
			<view>
				<text>个性签名</text>
				<text class="hui">修改</text>				
			</view>
		</view>
		<view class="out" @click="out">退出登录</view>
	</view>
</template>

<script>
	/* 引入头像组件 */
	import avatar from "@/components/yq-avatar.vue";
	/* 利用vuex同步更新其他页面头像 */
	import {mapState,mapMutations} from 'vuex';
	/* 压缩base64 */
	import { pathToBase64, base64ToPath } from '@/common/image-tools/index.js'
	export default {
		components: {
            avatar
        },
		data() {
			return {
				imgUrl2: this.$imgUrl.imgUrl2,
				placeholderSrc: '../../static/images/common/abc.png',
				userInfo: {}
			}
		},
		computed: {
			...mapState(['Avatar'])
		},
		onLoad() {
			/* 设置接口请求 */
			this.$request.set().then(res =>{
				res = JSON.parse(res);
				this.userInfo = res;
				this.$store.commit('SetAvatar', this.userInfo.head_img)
			},err =>{
				console.log(err)
			})			
		},
		onBackPress() {  
			console.log("你返回了")
		},  
		methods: {
			//修改头像
			ModifyAvatar(rsp) {
				pathToBase64(rsp.path)
				.then(base64 => {
					/* 修改头像请求 */
					this.$request.ModifyAvatar({
						image: base64
					}).then(res =>{
						res = JSON.parse(res);
						uni.redirectTo({
							url: '/pages/set/set'
						})
					},err =>{
						console.log(err)
					}).catch(err => {
						console.log(err)
					})					
				})
				.catch(error => {
					console.error(error);
				})
			},
			...mapMutations(['SetAvatar']),
			goback() {
				uni.navigateBack({
					delta: 1
				});
			},
			//查看收货地址
			look() {
				uni.navigateTo({
					url: '/pages/address/address'
				})
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了扫码")
				}
			},
			revise() {
				uni.navigateTo({
					url: '/pages/revise/revise'
				})
			},
			modify() {
				uni.reLaunch({
					url: '/pages/Modify/Modify'
				})
			},
			out() {
				uni.showModal({  
					title: '提示',  
					content: '是否退出登陆？',  
					success: function(res) {  
						if (res.confirm) {  
							// 退出当前应用，该方法只在App中生效  
							plus.runtime.quit();  
						} else if (res.cancel) {  
							console.log('用户点击取消');  
						}  
					}  
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
		.small {
			font-size: 22upx;
		}
	}
	.iconfont {
		font-family: 'iconfont' !important;
	}
	.headImg {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14upx 32upx;
		background-color: #fff;
		margin-bottom: 20upx;
		text {
			font-size: 32upx;
		}
		view {
			display: flex;
			align-items: center;
			text {
				font-size: 32upx;
			}
			image {
				width: 80upx;
				height: 80upx;
			}
			.icon {
				margin-left: 10upx;			
			}
		}		
	}
	.item {
		.headImg;
		border-top: none;
		margin-bottom: 0;
		padding: 0 32upx;
		view {
			width: 100%;
			height: 100%;
			padding: 36upx 0;
			display: flex;
			justify-content: space-between;
			border-bottom: 1upx solid #f8f8f8;
			.hui {
				font-size: 26upx;
				color: #696868;
				::after {
					.iconfont;
					content: '\e656';
					font-size: 25upx;
					margin-left: 15upx;
				}
			}
		}
	}
	.address, .signature {
		.item;
		margin-top: 30upx;
		view {
			width: 100%;
			height: 100%;
			padding: 36upx 0;
			display: flex;
			justify-content: space-between;
			border-bottom: 1upx solid #f8f8f8;
			.hui {
				font-size: 26upx;
				color: #696868;
				::after {
					.iconfont;
					content: '\e656';
					font-size: 25upx;
					margin-left: 15upx;
				}
			}
		}			
	}
	.out {
		height: 108upx;
		line-height: 108upx;
		background-color: #fff;
		text-align: center;
		font-size: 28upx;
		color: #ff5400;
		margin-top: 103upx;
	}
</style>
