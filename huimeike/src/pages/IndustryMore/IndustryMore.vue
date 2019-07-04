<template>
	<view class="IndustryMore">
		<view class="item" v-for="(item,index) in listData" :key="index" @click="IndustryDetails(item.id)">
			<view>
				<text class="user2">{{item.title}}</text>
				<text class="time2">{{parseInt(item.create_time)*1000 | time}}</text>
				<text class="ed824a2">{{$tools.cutString(item.remark,30)}}</text>					
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: []
			}
		},
		onLoad() {
			this.$request.IndustryMore().then(res =>{
				res = JSON.parse(res);
				console.log(res);
				this.listData = res;
			},err =>{
				console.log(err)
			})
		},
		methods: {
			IndustryDetails(id) {
				uni.navigateTo({
					url: `/pages/IndustryDetails/IndustryDetails?id=${id}`
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.iconfont {
		font-family: 'iconfont' !important;
	}
	view {
		box-sizing: border-box;
	}
	.IndustryMore {
		background-color: #fff;
		padding: 0 30upx;
	}
	.item {
		padding: 30upx 0;
		border-bottom: 1upx solid #ddd;
		&:last-child {
			border-bottom: none;
		}
		view {
			display: flex;
			flex-direction: column;
			.user2 {
				font-size: 30upx;
				font-weight: bold;
			}
			.time2 {
				font-size: 24upx;
				color: #848484;
				margin-top: 15upx;
			}
			.ed824a2 {
				font-size: 26upx;
				color: #848484;
				margin-top: 15upx;
			}
		}
	}
</style>
