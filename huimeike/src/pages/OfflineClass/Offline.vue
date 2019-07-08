<template>
	<view class="Offline">

		<view class="banner">
			<image v-if="OfflineData.kcxq" :src="imgUrl + OfflineData.kcxq.photo"></image>
			<view class="enroll">
				<view>
					<text>倒计时：</text>
					<count-down v-if="OfflineData.kcxq" :endTime="OfflineData.kcxq.endsj + ''" :callback="callback" endText="已经结束了"></count-down>					
				</view>
				<button :class="{disabled: !this.canClick}" @click="countDown">{{content}}</button>
			</view>
		</view>
		<view class="content">
			<view class="dabiaoti" v-if="OfflineData.kcxq">{{OfflineData.kcxq.hyname}}</view>
			<view class="box1">
				<view class="v1">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558519496977&di=263688d811e1dabbfa9dad32edbd0827&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F6971d6fd691a2d2bb249424387d25157fdc49e1e.jpg" mode=""></image>
					<view>
						<text class="t1">逻辑思维</text>					
					</view>
				</view>
				<view class="v2">
					<text class="icon t3">&#xe61a;</text>
					<text class="t4">关注</text>
				</view>
			</view>
			<view class="box2">
				<text>时间：2019年8月20日</text>
				<text>地点：河北省秦皇岛市海港区新世纪小区</text>
			</view>
			<!-- 富文本编辑 -->
			<view>
				
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
				imgUrl: this.$imgUrl.imgUrl,
				imgUrl2: this.$imgUrl.imgUrl2,
				canClick: true,
				content: "报名",
				OfflineData: {}
			}
		},
		onLoad() {
			/* 线下课详情 */
			this.$request.OfflineCourse({
				id: 1
			}).then(res =>{
				res = JSON.parse(res);
				
				this.OfflineData = res;
				console.log(this.OfflineData)
				if(this.OfflineData.bmzt === 1) {
					this.content = this.OfflineData.count;
				}
				
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
			callback() {
				uni.showModal({
					title: '课程结束！',
					content: '2019-5-23',
					showCancel: false,
					cancelText: '',
					confirmText: '',
					success: res => {
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			countDown () {
				if (!this.canClick) return;
					this.canClick = false
					this.content = this.OfflineData.count;
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了分享")
					
				}
			}			
		}
	}
</script>

<style lang="less">
	view {
		box-sizing: border-box;
	}
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
	
	.Offline {
		padding-bottom: 130upx;
		background-color: #fff;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.banner {
			box-sizing: border-box;
			height: 510upx;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
			.enroll {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 97upx;
				position: absolute;
				left: 0;
				bottom: 0;
				text-indent: 13upx;
				font-size: 32upx;
				color: #fff;
				line-height: 97upx;
				background: #737373;
				
				button {
					margin: 0;
					width: 179upx;
					height: 59upx;
					line-height: 59upx;
					background-color: #f86e25;
					color: #fff;
					border-radius: 80upx;
					font-size: 28upx;
					margin-right: 20upx;
				}
			}
		}
		.content {
			padding: 0 52upx;
			box-sizing: border-box;
			background-color: #fff;
			.dabiaoti {
				font-size: 50upx;
				padding-top: 74upx;
			}
			.box1 {
				display: flex;
				justify-content: space-between;
				margin-top: 55upx;
				padding-bottom: 40upx;
				border-bottom: 1upx solid #e6e6e6;
				.v1 {
					display: flex;
					image {
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
					}
					view {
						display: flex;
						flex-direction: column;	
						align-items: center;
						justify-content: center;
						margin-left: 18upx;
						.t1 {
							font-size: 25upx;
							color: #676767;
							margin-top: 8upx;
						}
					}
				}
				.v2 {
					text {
						color: #8a8a8a;
					}
					.t3 {
						font-size: 35upx;
					}
					.t4 {
						font-size: 32upx;
					}
				}
			}
			.box2 {
				padding: 28upx 0;
				display: flex;
				flex-direction: column;
				text {
					color: #515151;
				}
			}
		}				
	}	

</style>
