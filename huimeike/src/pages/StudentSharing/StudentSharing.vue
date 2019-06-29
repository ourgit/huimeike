<template>
	<view class="StudentSharing">

		<view class="box">
			<view class="classItem" v-for="(item,index) in listData" :key="index">
				<view class="top">
					<image :src="imgUrl2 + item.head_img"></image>
					<view>
						<text class="user">{{item.nickname}}</text>
						<text class="time">{{item.time}}</text>
					</view>
				</view>
				<view class="bottom">
					<text class="ed824a">学习心得：</text>
					<text>{{item.plxd}}</text>
				</view>
			</view>				
		</view>
		
<!-- 		<view class="end">
			<text>—— 我是有底线的 ——</text>
		</view> -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				imgUrl2: this.$imgUrl.imgUrl2,				
				listData: []
			}
		},
		onLoad() {
			/* 获取单个地址请求 */
			this.$request.StudentSharing().then(res =>{
				res = JSON.parse(res);
				console.log(res)
				this.listData = res;
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
			//点击扫码
			Sweepcode() {
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了扫码")
					
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
	.end {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		font-size: 35upx;
		padding: 20upx 0;
		color: #919191;
	}
	.box {
		box-sizing: border-box;
	}
	.classItem {
		box-sizing: border-box;
		background-color: #fff;
		padding: 32upx 0; 
		border-bottom: 1upx solid #f2f2f2;
		position: relative;
		.top {
			display: flex;
			image {
				width: 75upx;
				height: 75upx;
				border-radius: 50%;
				margin-left: 27upx;
			}
			view {
				display: flex;
				flex-direction: column;
				overflow: hidden;
				margin-left: 19upx;
				text {
					font-size: 24upx;
				}
				.user {
					font-weight: bold;
				}
				.time {
					color: #b2b2b2;
					margin-top: 6upx;
				}
			}
		}
		.bottom {
			width: 80%;
			margin-left: 120upx;
			font-size: 22upx;
			margin-top: 10upx;
			.ed824a {
				color: #ed824a;
			}
		}
	}				

	
</style>
