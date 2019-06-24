<template>
	<view class="address">
		<view class="container">
			<view class="input">
				<text style="text-indent: 54upx;">姓名</text>
				<input type="text" v-model="name" adjust-position=true />
			</view>
			<view class="input">
				<text>联系电话</text>
				<input type="number" v-model="phone" />
			</view>
			<view class="input" @click="openPicker">
				<text style="margin-right: 20upx;">所在地区</text>
				<text v-if="lotusAddressData.provinceName">{{lotusAddressData.provinceName}}-{{lotusAddressData.cityName}}-{{lotusAddressData.townName}}</text>
				<text class="right">请选择</text>
			</view>
			<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
			<view class="input">
				<text>详细地址</text>
				<input type="text" v-model="detailaddress" />
			</view>
			<view class="input" style="display: flex; justify-content: space-between;">
				<text>设为默认</text>
				<switch @change="switch1Change" style="transform:scale(0.7)" />
			</view>
			<button @click="add">保存</button>
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
				name: '',
				phone: '',
				detailaddress: '',
				DefaultAddress: 0,
				lotusAddressData:{
					visible:false,
					provinceName:'',
					cityName:'',
					townName:''
				},
				region:''
			}
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
			},
			//回传已选的省市区的值
			choseValue(res){
				//res数据源包括已选省市区与省市区code
				console.log(res);
				this.lotusAddressData.visible = res.visible;//visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if(res.isChose){
					this.lotusAddressData.provinceName = res.provice;//省
					this.lotusAddressData.cityName = res.city;//市
					this.lotusAddressData.townName = res.town;//区
					this.region = `${res.provice} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
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
			//添加地址
			add() {
				if(!this.name) {
					this.$msg("姓名不能为空！")
				}else if(!this.phone) {
					this.$msg("手机号不能为空！")
				}else if(!this.lotusAddressData.provinceName && !this.lotusAddressData.cityName && !this.lotusAddressData.townName) {
					this.$msg("请选择省市区！")
				}else if(!this.detailaddress) {
					this.$msg("请填写详细地址！")
				}else {
					/* 添加地址请求 */
					this.$request.AddAddress({
						name: this.name,
						tel: this.phone,
						province: this.lotusAddressData.provinceName,
						city: this.lotusAddressData.cityName,
						area: this.lotusAddressData.townName,
						address_detailed: this.detailaddress,
						state: this.DefaultAddress
					}).then(res =>{
						res = JSON.parse(res);
						console.log(res);
						this.$msg(res.msg)
						uni.navigateTo({
							url: '/pages/address/address'
						});
					},err =>{
						console.log(err)
					})					
				}

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
				font-size: 24upx;
			}
			input {
				flex: 1;
				margin-left: 20upx;
				font-size: 28upx;

			}
			.right {
				color: #848484;
				position: absolute;
				right: 40upx;
				top: 24upx;
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

