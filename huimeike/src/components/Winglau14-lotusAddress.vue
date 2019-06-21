<template>
	<!--地址picker-->
	<view :status="checkStatus" v-if="lotusAddressData.visible" class="lotus-address-mask">
		<view class="lotus-address-box">
			<view class="lotus-address-action">
				<text @tap="cancelPicker" class="lotus-address-action-cancel">取消</text>
				<text @tap="chosedVal" class="lotus-address-action-affirm">确认</text>
			</view>
			<view class="lotus-address-picker-box">
				<!--省-->
				<scroll-view scroll-y :scroll-into-view="'pid'+pChoseIndex" class="lotus-address-picker-box-item">
					<view @tap="clickPicker(0,pIndex,pItem);" :id="'pid'+pIndex" :class="pIndex === pChoseIndex?'lotus-address-picker lotus-address-picker2':'lotus-address-picker'"  v-for="(pItem,pIndex) in province" :key="pIndex">{{pItem}}</view>
				</scroll-view>
				<!--市-->
				<scroll-view scroll-y :scroll-into-view="'cid'+cChoseIndex" class="lotus-address-picker-box-item">
					<view @tap="clickPicker(1,cIndex,cItem);" :id="'cid'+cIndex" :class="cIndex === cChoseIndex?'lotus-address-picker lotus-address-picker2':'lotus-address-picker'" v-for="(cItem,cIndex) in city" :key="cIndex">{{cItem}}</view>
				</scroll-view>
				<!--区-->
				<scroll-view scroll-y :scroll-into-view="'tid'+tChoseIndex" class="lotus-address-picker-box-item">
					<view @tap="clickPicker(2,tIndex,tItem);" :id="'tid'+tIndex" :class="tIndex === tChoseIndex?'lotus-address-picker lotus-address-picker2':'lotus-address-picker'" v-for="(tItem,tIndex) in town" :key="tIndex">{{tItem}}</view>
				</scroll-view>
				<!--区END-->
			</view>
		</view>
	</view>
	<!--地址picker END-->
</template>

<script>
	import {area} from  "../common/area.js";
	export default {
		props:['lotusAddressData'],
		data() {
			return {
				visible: false,
				province:[],
				city:[],
				town:[],
				provinceName:'',
				cityName:'',
				townName:'',
				type:0,//0新增1编辑
				pChoseIndex:-1,
				cChoseIndex:-1,
				tChoseIndex:-1,
			};
		},
		methods:{
			//取消
			cancelPicker(){
				const provinceCode = this.getTarId(this.provinceName);
				const cityCode = this.getTarId(this.cityName);
				const townCode = this.getTarId(this.townName);
				this.$emit("choseVal",{
					provice:this.provinceName,
					provinceCode,
					city:this.cityName,
					cityCode,
					town:this.townName,
					townCode,
					isChose:0,
					visible:false
				});
			},
			//获取最后选择的省市区的值
			chosedVal() {
				this.type = 1;
				const provinceCode = this.getTarId(this.provinceName);
				const cityCode = this.getTarId(this.cityName);
				const townCode = this.getTarId(this.townName);
				this.$emit("choseVal",{
					provice:this.provinceName,
					provinceCode,
					city:this.cityName,
					cityCode,
					town:this.townName,
					townCode,
					isChose:1,
					visible:false
				});
			},
			//获取省市区value
			getTarId(name,type){
			    let id = 0;
				const _this = this;
			    area.map((item,index)=>{
			        if(item.name === name){
			            id = item.value;
			        }
			    });
			    return id;
			},
			//获取市数据
			getCityArr(parentId){
			    let city = [];
				
			    area.map((item,index)=>{
			        if(item.parent === parentId){
			            city.push(item.name);
			        }
			    });
			    return city;
			},
			//获取区数据
			getTownArr(parentId){
			    let town = [];
			    area.map((item,index)=>{
			        if(index>34&&item.parent === parentId){
			            town.push(item.name);
			        }
			    });
			    return town;
			},
			//初始化数据
			initFn(){
				console.log(1);
			    area.map((item,index)=>{
			        if(index<=34){
			            this.province.push(item.name);
			        }
			    });
				//已选择省市区，高亮显示对应选择省市区
				const p = this._props.lotusAddressData.provinceName;
				const c = this._props.lotusAddressData.cityName;
				const t = this._props.lotusAddressData.townName;
				if(p){
					this.pChoseIndex = this.getTarIndex(this.province,p);
				}
				if(p&&c){
					const pid = this.getTarId(p);
					this.city = this.getCityArr(pid);
					this.cChoseIndex = this.getTarIndex(this.city,c);
				}
				if(p&&c&&t){
					const cid= this.getTarId(c);
					this.town = this.getTownArr(cid);
					this.tChoseIndex = this.getTarIndex(this.town,t);
				}
			},
			//获取已选省市区
			getChosedData(){
				const pid = this.getTarId(this.provinceName,'provice');
				this.city = this.getCityArr(pid);
				const cid= this.getTarId(this.cityName,'city');
				this.town = this.getTownArr(cid);
				//已选省市区获取对应index
				if(this.provinceName){
					this.pChoseIndex = this.getTarIndex(this.province,this.provinceName);
				}
				if(this.cityName){
					this.cChoseIndex = this.getTarIndex(this.city,this.cityName);
				}
				if(this.townName){
					this.tChoseIndex = this.getTarIndex(this.town,this.townName);
				}
			},
			//选择省市区交互
			clickPicker(type,index,name){
				//省
				if(type === 0){
					this.pChoseIndex = index;
					this.provinceName = name;
					this.cChoseIndex = -1;
					this.tChoseIndex = -1;
					this.cityName = '';
					this.townName = '';
				}
				//市
				if(type ===1){
					this.cChoseIndex = index;
					this.cityName = name;
					this.tChoseIndex = -1;
					this.townName = '';
				}
				//区
				if(type === 2){
					this.tChoseIndex = index;
					this.townName = name;
				}
				//获取省市区数据
				this.getChosedData();
			},
			//获取已选省市区index
			getTarIndex(arr,tarName){
			    let cIndex = 0;
			    arr.map((item,index)=>{
			        if(item === tarName){
			            cIndex = index;
			        }
			    });
			    return cIndex;
			}
		},
		created() {
			this.provinceName = this._props.lotusAddressData.provinceName;
			this.cityName = this._props.lotusAddressData.cityName;
			this.townName = this._props.lotusAddressData.townName;
		},
		computed:{
			checkStatus(){
				let t = null;
				const _this = this;
				if(!_this.visible){
					_this.initFn();
					_this.visible = _this._props.lotusAddressData.visible;
					t = _this.visible;
				}
				return t;
			}
		}
	}
</script>

<style scoped>
	.lotus-address-picker {
	  font-size: 26rpx;
	  padding-top: 30rpx;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 1;
	  -webkit-box-orient: vertical;
	  line-height: normal;
	  padding-right: 30rpx;
	  box-sizing: border-box;
	}
	.lotus-address-picker-box {
	  /*display: -webkit-box;
	  display: -webkit-flex;*/
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  justify-content: flex-start;
	  padding-top: 10rpx;
	  padding-bottom: 10rpx;
	}
	.lotus-address-picker-box-item {
	  height: 600upx;
	  overflow-y: auto;
	  width: 33.333%;
	  padding-left: 20rpx;
	  padding-right: 20rpx;
	  box-sizing: border-box;
	}
	.lotus-address-picker2 {
	  color: #e93b3d;
	  position: relative;
	}
	.lotus-address-picker2:after {
	  content: '';
	  position: absolute;
	  right: 0;
	  top: 65%;
	  transform: translateY(-35%) rotate(-45deg);
	  width: 20rpx;
	  height: 10rpx;
	  border-left-width: 4rpx;
	  border-bottom-width: 4rpx;
	  border-left-style: solid;
	  border-bottom-style: solid;
	  border-left-color: #e93b3d;
	  border-bottom-color: #e93b3d;
	}
	.lotus-address-mask {
	  position: fixed;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100%;
	  z-index: 999;
	  background: rgba(0, 0, 0, 0.5);
	}
	.lotus-address-box {
	  background: #fff;
	  position: absolute;
	  left: 0;
	  bottom: 0;
	  width: 100%;
	  height: auto;
	}
	.lotus-address-action {
	  font-size: 30rpx;
	  /*display: -webkit-box;
	  display: -webkit-flex;*/
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  justify-content: space-between;
	  padding: 25rpx 30rpx;
	  position: relative;
	}
	.lotus-address-action:after {
	  content: " ";
	  position: absolute;
	  left: 0;
	  top: 0;
	  right: 0;
	  height: 1px;
	  border-top: 1px solid #eee;
	  color: #eee;
	  transform-origin: 0 0;
	  transform: scaleY(0.5);
	}
	.lotus-address-action:before {
	  content: " ";
	  position: absolute;
	  left: 0;
	  bottom: 0;
	  right: 0;
	  height: 1px;
	  border-bottom: 1px solid #eee;
	  color: #eee;
	  transform-origin: 0 100%;
	  transform: scaleY(0.5);
	}
	.lotus-address-action-cancel {
	  color: #969696;
	}
	.lotus-address-action-affirm {
	  color: #e93b3d;
	}
</style>
