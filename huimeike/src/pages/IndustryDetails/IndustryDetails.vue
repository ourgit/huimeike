<template>
	<view class="IndustryDetails">
		<view class="title">{{DetailsData.title}}</view>
		<view class="time">{{parseInt(DetailsData.create_time)*1000 | time}}</view>
		<view>
			<u-parse :content="DetailsData.content" @preview="preview" @navigate="navigate" :imgOptions="false" />
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				DetailsData: {}
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.$request.IndustryDetails({
				id: this.id
			}).then(res =>{
				res = JSON.parse(res);
				console.log(res);
				this.DetailsData = res;
			},err =>{
				console.log(err)
			})
		}
	}
</script>

<style lang="less" scoped>
	view {
		box-sizing: border-box;
	}
	.IndustryDetails {
		width: 100%;
		height: 100%;
		padding: 0 20upx;
		background-color: #fff;
		.title {
			height: 100upx;
			line-height: 100upx;
			font-size: 40upx;
			font-weight: bold;
			text-align: center;
		}
		.time {
			display: flex;
			justify-content: flex-end;
			margin-top: 10upx;
			margin-right: 40upx;
			color: #c1c1c1;
			font-size: 24upx;
		}
	}
</style>
