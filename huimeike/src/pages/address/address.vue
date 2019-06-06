<template>
	<view class="address">
		<view class="container">
			<view class="item" v-for="(item,index) in 4" :key="index">
				<view class="top">
					<view class="name-box">
						<text>张三</text>
						<text>17710595507</text>
					</view>
					<view class="dizhi">秦皇岛市海港区建设大街166号</view>
				</view>
				<view class="bottom">
					<view class="default">
						<text class="icon">&#xe623;</text>
						<text>设为默认</text>
					</view>
					<view class="operate">
						<text class="edit" @click="edit">编辑</text>
						<text class="delate">删除</text>
					</view>
				</view>
			</view>
			<view class="Newaddress">
				<button @click="edit">添加新地址</button>
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
			goback() {
				uni.navigateBack({
					delta: 1
				});
			},
			edit() {
				uni.navigateTo({
					url: '/pages/Newaddress/Newaddress'
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
