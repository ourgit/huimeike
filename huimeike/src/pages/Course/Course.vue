<template>
	<view class="Course">
		<view class="banner">
			<image v-if="CourseData.jsxq" :src="imgUrl + CourseData.kcxq.img"></image>
		</view>
		<view class="enroll">
			<view>
				<text>倒计时：</text>
				<count-down  v-if="CourseData.kcxq" :endTime="CourseData.kcxq.start_time" endText="已经结束了"></count-down>					
			</view>
			<view class="bmzt"   v-if="CourseData.kcxq" @click="GObmzt(CourseData.kcxq.xsk_id)">
				<view class="button" v-if="!bmzt">预约</view>
				<view class="buttonActive" v-if="bmzt">{{CourseData.kcxq.yyrs}}</view>
			</view>
		</view>
		<view class="content">
			<view class="dabiaoti" v-if="CourseData.kcxq">{{CourseData.kcxq.name}}</view>
			<view class="box1">
				<view class="v1">
					<image v-if="CourseData.jsxq" :src="imgUrl2 + CourseData.jsxq.portrait"></image>
					<view>
						<text class="t1" v-if="CourseData.jsxq">{{CourseData.jsxq.name}}</text>
						<text class="t2" v-if="CourseData.jsxq">{{CourseData.jsxq.time}}</text>						
					</view>
				</view>
				<view class="v2" @click="collectFunc">
					<text class="icon t3" v-if="!collect">&#xe61a;</text>
					<text class="icon t3 yellow" v-if="collect">&#xe642;</text>
					<text class="t4">关注</text>
				</view>
			</view>
			<!-- 富文本编辑 -->
			<view class="parse">
				<u-parse v-if="CourseData.kcxq" :content="CourseData.kcxq.js" @preview="preview" @navigate="navigate" :imgOptions="false" />
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
				content: "预约",
				CourseData: {},
				bmzt: 0,
				collect:0
			}
		},
		onLoad() {
			/* 预约精品线上课接口 */
			this.$request.Course().then(res =>{
				res = JSON.parse(res);
				console.log(res)
				this.CourseData = res;
				if(this.CourseData.is_gz === 1) {
					this.collect = this.CourseData.is_gz;
				}
				if(this.CourseData.is_yy === 1) {
					this.bmzt = this.CourseData.is_yy;
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
			GObmzt (xskid) {
				console.log(xskid)
				if(this.CourseData.is_yy === 1) {
					this.$msg("您已经报过名了！")
				}else {
					/* 去预约接口 */
					this.$request.goCourse({
						kcid: xskid
					}).then(res =>{
						res = JSON.parse(res);
						console.log(res)
						this.CourseData = res;
					},err =>{
						console.log(err)
					})
				}
			},
			//关注讲师
			collectFunc(){
				this.collect = !this.collect
				/* 获取未购买课程请求 */
				this.$request.focus(
					{
						id: this.CourseData.jsxq.id,
						zt: this.collect
					}
				).then(res =>{
					res = JSON.parse(res);
					console.log(res)
				},err =>{
					console.log(err)
				})
			},			
			// callback() {
			// 	uni.showModal({
			// 		title: '活动结束！',
			// 		content: '2019-5-23',
			// 		showCancel: false,
			// 		cancelText: '',
			// 		confirmText: '',
			// 		success: res => {},
			// 		fail: () => {},
			// 		complete: () => {}
			// 	});
			// },
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
	//公共样式提取
	.title {
		width: 100%;
		position: fixed;
		padding: 0 23upx;
		padding-top: 80upx;
		background: url("~@/static/images/shop/bg.png");
		padding-bottom: 20upx;
		display: flex;
		justify-content: space-between;	
		z-index: 9;
		text {
			color: #fff;
		}
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
	
	.Course {
		width: 100%;
		height: 100%;
		background-color: #fff;
		padding-bottom: 130upx;
		.banner {
			box-sizing: border-box;
			height: 424upx;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.enroll {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 97upx;
			text-indent: 13upx;
			font-size: 32upx;
			color: #fff;
			line-height: 97upx;
			background: #ed824a;
			.bmzt {
				margin-right: 20upx;
				text-align: center;
				.button {
					width: 180upx;
					height: 60upx;
					line-height: 60upx;
					background-color: #ffb81f;
					color: #fff;
					border-radius: 40upx;
					font-size: 28upx;
					
				}
				.buttonActive {
					width: 180upx;
					height: 60upx;
					line-height: 60upx;
					background-color: #ffb81f;
					color: #fff;
					border-radius: 40upx;
					font-size: 28upx;
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
				align-items: center;
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
						margin-left: 18upx;
						.t1 {
							font-size: 25upx;
							color: #676767;
							margin-top: 8upx;
						}
						.t2 {
							margin-top: 5upx;
							font-size: 18upx;
							color: #adadad;
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
					.yellow {
						color: orange;
					}
					.t4 {
						font-size: 32upx;
					}
				}
			}
			.parse {
				margin-top: 20upx;
			}
		}				
	}	

</style>