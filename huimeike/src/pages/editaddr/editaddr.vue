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
			<button @click="sava">保存</button>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				id: ''
			}
		},
		onLoad(options) {
			this.id = options.id;
			console.log(this.id)
			/* 获取单个地址报500错误 */
			this.$request.GetAddress({
				id: this.id
			}).then(res =>{
				res = JSON.parse(res);
				console.log(res);
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
			//是否设为默认地址
			switch1Change(e) {
				if(e.target.value) {
					this.DefaultAddress = e.target.value = 1;
					console.log(this.DefaultAddress)
				}else {
					this.DefaultAddress = e.target.value = 0;
					console.log(this.DefaultAddress)
				}
			},
			//保存
			sava() {
				/* 编辑地址请求 */
				this.$request.EditAddress().then(res =>{
					res = JSON.parse(res);
					console.log(res);
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

