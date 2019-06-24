<template>
	<view class="address">
		<view class="container">
			<view class="item" v-for="(item,index) in addressList" :key="index">
				<view class="top">
					<view class="name-box">
						<text>{{item.name}}</text>
						<text>{{item.phone}}</text>
					</view>
					<view class="dizhi">{{item.province}}{{item.city}}{{item.area}}{{item.address_detailed}}</view>
				</view>
				<view class="bottom">
					<view class="default">
						<text class="icon" v-if="item.state">&#xe77c;</text>
						<text class="icon" v-else>&#xe623;</text>
						<text>设为默认</text>
					</view>
					<view class="operate">
						<text class="edit" @click="edit(item.id)">编辑</text>
						<text class="delate" @click="del(item.id,index)">删除</text>
					</view>
				</view>
			</view>
			<view class="Newaddress">
				<button @click="Newaddress">添加新地址</button>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				addressList: [],
				isDefault: 0
			}
		},
		onLoad() {
			/* 添加地址请求 */
			this.$request.AddressList().then(res =>{
				res = JSON.parse(res);
				this.addressList = res;
				this.isShow = true
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
			Newaddress() {
				uni.navigateTo({
					url: '/pages/Newaddress/Newaddress'
				})				
			},
			edit(id) {
				uni.navigateTo({
					url: `/pages/editaddr/editaddr?id=${id}`
				})
			},
			del(id,index) {
				this.$request.DelAddress({
					id: id
				}).then(res =>{
					res = JSON.parse(res);
					console.log(res);
					this.addressList.splice(index, 1);
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
	//公共样式提取
	.iconfont {
		font-family: 'iconfont' !important;
	}
	.container {
		.item {
			background-color: #fff;
			margin-bottom: 16upx;
			.top {
				display: flex;
				flex-direction: column;
				padding: 0 35upx;
				padding-bottom: 24upx;
				border-bottom: 2upx solid #f5f5f5;
				.name-box {
					display: flex;
					justify-content: space-between;
					padding: 23upx 0;
					text {
						font-size: 26upx;
					}
				}
				.dizhi {
					font-size: 26upx;
				}
			}
			.bottom {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 18upx 0;
				.default {
					font-size: 26upx;
					color: #707070;
					margin-left: 67upx;
					display: flex;
					align-items: center;
					.icon {
						margin-top: 2upx;
						margin-right: 8upx;
						font-size: 34upx;
					}
				}
				.operate {
					margin-right: 54upx;
					font-size: 26upx;
					.edit {
						&:before {
							.iconfont;
							content: '\e614';
							color: #707070;
							margin-right: 8upx;
						}						
					}
					.delate {
						margin-left: 30upx;
						&:before {
							.iconfont;
							content: '\e625';
							color: #707070;
							margin-right: 8upx;
						}
					}
				}
			}
		}
		.Newaddress {			
			height: 432upx;
			background-color: #fff;
			overflow: hidden;
			button {
				 width: 80%;
				 height: 68upx;
				 line-height: 68upx;
				 color: #fff;
				 background-color: #ff7a00;
				 margin-top: 100upx;
				 border-radius: 100upx;
				 font-size: 26upx;
			}
		}
	}
</style>
