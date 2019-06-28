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
			<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>			
			<view class="input">
				<text>详细地址</text>
				<input type="text" v-model="addressInfo.address_detailed" />
			</view>
			<view class="input" style="display: flex; justify-content: space-between;">
				<text>设为默认</text>
				<switch @change="switch1Change" :checked="!!DefaultAddress"   style="transform:scale(0.7)" />
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
				addressInfo: {},
				visible: false,
				region: '',
				DefaultAddress: 0,
				lotusAddressData:{
					visible:false,
					provinceName:'广东省',
					cityName:'广州市',
					townName:'天河区',
				}
			}
		},
		onLoad(options) {
			this.id = options.id;
			/* 获取单个地址请求 */
			this.$request.GetAddress({
				id: this.id
			}).then(res =>{
				res = JSON.parse(res);
				console.log(res);
				this.addressInfo = res;
				this.DefaultAddress = this.addressInfo.state;
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
				this.lotusAddressData.visible = true;
				console.log("123")
			},
			//回传已选的省市区的值
			choseValue(res){
				//res数据源包括已选省市区与省市区code
				console.log(res);
				this.lotusAddressData.visible = res.visible;
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if(res.isChose){
					this.lotusAddressData.provinceName = res.provice;//省
					//赋值省
					this.addressInfo.province = this.lotusAddressData.provinceName;
					
					this.lotusAddressData.cityName = res.city;//市
					//赋值市
					this.addressInfo.city = this.lotusAddressData.cityName;
					
					this.lotusAddressData.townName = res.town;//区
					//赋值区
					this.addressInfo.area = this.lotusAddressData.townName;
					
					this.region = `${res.provice} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			//是否设为默认地址
			switch1Change(e) {
				this.DefaultAddress = e.target.value;
			},
			//保存
			sava() {
				/* 编辑地址请求 */
				this.$request.EditAddress({
					name: this.addressInfo.name,
					tel: this.addressInfo.phone,
					province: this.addressInfo.province,
					city: this.addressInfo.city,
					area: this.addressInfo.area,
					address_detailed: this.addressInfo.address_detailed,
					state: this.DefaultAddress,
					id: this.id
				}).then(res =>{
					res = JSON.parse(res);
					console.log(res);
					uni.navigateTo({
						url: '/pages/address/address'
					})
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

