<template>
	<view class="editaddr">

		<view class="container">
			<view class="input">
				<text>姓名</text>
				<input type="text" />
			</view>
			<view class="input">
				<text>联系电话</text>
				<input type="number" />
			</view>
			<view class="input">
				<text>所在地区</text>
				<text class="right">请选择</text>
			</view>
			<view class="input">
				<text>详细地址</text>
				<input type="text" />
			</view>
			<view class="input" style="display: flex; justify-content: space-between;">
				<text>设为默认</text>
				<switch @change="switch1Change" style="transform:scale(0.7)" />
			</view>
			<button>保存</button>
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
		background: #fff;
		.input {
			display: flex;
			align-items: center;
			height: 78upx;
			padding: 0 38upx;
			border-bottom: 1upx solid #f4f4f4;
			position: relative;
			text {
				font-size: 26upx;
			}
			input {
				margin-left: 30upx;
				

			}
			.right {
				position: absolute;
				top: 20upx;
				right: 60upx;
				color: #848484;
				&:after {
					.iconfont;
					content: "\e656";
				}
			}
		}
		button {
			width: 80%;
			height: 67upx;
			line-height: 67upx;
			background-color: #ff8000;
			text-align: center;
			color: #fff;
			font-size: 30upx;
			border-radius: 100upx;
			position: absolute;
			left: 50%;
			margin-left: -40%;
			bottom: 100upx;
		}
	}
</style>

