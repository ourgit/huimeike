<template>
	<view class="editaddr">

		<view class="container">
			<view class="input">
				<text>姓名</text>
				<input type="text" v-model="addressInfo.name" />
			</view>
			<view class="input">
				<text>联系电话</text>
				<input type="number" v-model="addressInfo.phone" />
			</view>
			<view class="input">
				<text style="margin-right: 20upx;">所在地区</text>
				<text v-if="addressInfo.province">{{addressInfo.province}}-{{addressInfo.city}}-{{addressInfo.area}}</text>
				<text class="right" @click="openPicker">请选择</text>
			</view>
			<lotus-address v-on:choseVal="choseValue" :lotusAddressData="addressInfo"></lotus-address>			
			<view class="input">
				<text>详细地址</text>
				<input type="text" v-model="addressInfo.address_detailed" />
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
	import lotusAddress  from "../../components/Winglau14-lotusAddress.vue";		
	export default {
		components: {
			"lotus-address":lotusAddress
		},			
		data() {
			return {
				addressInfo: {
					id: '',
					name: "",
					phone: "",
					province: "",
					city: "",
					area: "",
					address_detailed: "",
					state: 0,
					DefaultAddress: 0,
					visible:false
				}				
			}
		},
		onLoad(options) {
			this.id = options.id;
			console.log(this.id)
			/* 获取单个地址请求 */
			this.$request.GetAddress({
				id: this.id
			}).then(res =>{
				res = JSON.parse(res);
				console.log(res);
				this.addressInfo = res;
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
			//打开picker
			openPicker() {
				this.addressInfo.visible = true;
				console.log("123")
			},
			//回传已选的省市区的值
			choseValue(res){
				//res数据源包括已选省市区与省市区code
				console.log(res);
				this.addressInfo.visible = res.visible;//visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if(res.isChose){
					this.addressInfo.province = res.provice;//省
					this.addressInfo.city = res.city;//市
					this.addressInfo.area = res.town;//区
					this.region = `${res.provice} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			//是否设为默认地址
			switch1Change(e) {
				if(e.target.value) {
					this.addressInfo.DefaultAddress = e.target.value = 1;
				}else {
					this.addressInfo.DefaultAddress = e.target.value = 0;
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
				font-size: 24upx;
				flex: 1;

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

