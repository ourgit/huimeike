<template>
	<view class="classroom" v-show="show">
		<view class="inner">
			<view class="commonTitle">
				<text class="text">{{resData.zxkctitle}}</text>
			</view>
			<view class="NewList">
				<view class="NewLi" v-for="(item,index) in resData.zxkc" :key="index" @click="NewLi(item.id)">
					<image :src="imgUrl + item.photo"></image>
					<text class="text1">{{item.bmrs}}</text>
					<text class="text2">{{item.title}}</text>
					<text class="text3">{{$tools.cutString(item.szzd,25)}}</text>
					<view>
						<text class="text4">{{item.gmsl}}颜值豆</text>
						<text class="text5">{{item.bmrs}}人学习</text>
					</view>
				</view>
			</view>
			<view class="commonTitle">
				<text class="text">{{resData.yunytitle}}</text>
				<text class="icon more">更多</text>
			</view>
			<view class="NewCurriculum">
				<view class="CurriculumItem" v-for="(item, index) in resData.yunylist" :key="index">
					<view class="img" style="border-radius: 50%;"><lazy-image style="border-radius: 50%;"  :realSrc="imgUrl + item.photo"></lazy-image></view>
					<view class="view">{{$tools.cutString(item.szzd,25)}}</view>
					<text class="icon font">&#xe656;</text>
				</view>
			</view>
			<view class="commonTitle">
				<text class="text">{{resData.yytitle}}</text>
				<text class="icon more">更多</text>
			</view>
			<view class="CurriculumItem" v-for="(item, index) in resData.yylis" :key="index">
				<view class="img"><lazy-image :realSrc="imgUrl + item.photo"></lazy-image></view>
				<view class="flexC">
					<text class="f30">{{item.title}}</text>
					<text class="f20">{{$tools.cutString(item.szzd,40)}}</text>
					<text class="f26">{{item.gmsl}}颜值豆</text>
				</view>
			</view>
			<view class="commonTitle">
				<text class="text">{{resData.tdtitle}}</text>
				<text class="icon more">更多</text>
			</view>
			<view class="NewList">
				<view class="NewLi" v-for="(item,index) in resData.tdlist" :key="index">
					<image :src="imgUrl + item.photo"></image>
					<text class="text1">{{item.bmrs}}</text>
					<text class="text2">{{item.title}}</text>
					<text class="text3">{{$tools.cutString(item.szzd,25)}}</text>
					<view>
						<text class="text4">18颜值豆</text>
						<text class="text5">25698人学习</text>
					</view>
				</view>
			</view>
			<view class="end">
				<text>—— 我是有底线的 ——</text>
			</view>
		</view>
					
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				//全屏显示开关
				show: false,
				placeholderSrc: '../../static/images/common/abc.png',
				imgUrl: this.$imgUrl.imgUrl,
				resData: {}
			}
		},
		onLoad() {
			/* 获取云课堂请求 */
			this.$request.cloudClass().then(res =>{
				res = JSON.parse(res);
				this.resData = res;
				this.show = true;
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
			NewLi(id) {
				uni.navigateTo({
					url: `/pages/NotPurchased/NotPurchased?id=${id}`
				})
			}			
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$msg("您点击了扫码")

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
	.commonTitle {
		padding: 24upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.text {
			font-size: 40upx;
			font-weight: bold;
			::before {
				.iconfont;
				content: '\e605';
				color: #ff802b;				
			}			
		}
		.more {
			font-size: 26upx;
			::after {
				.iconfont;
				content: '\e619';						
				font-size: 20upx;
				font-weight: bold;						
			}
		}
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
	.classroom {
		padding-bottom: 20upx;
		.inner {
			padding: 0 27upx;
			.NewList {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				.NewLi {
					width: 335upx;
					margin-right: 20upx;
					border-radius: 20upx;
					background-color: #fff;
					position: relative;
					margin-bottom: 21upx;
					display: flex;
					flex-direction: column;
					padding-bottom: 19upx;
					&:nth-child(even) {
						margin-right: 0;
					}
					&:last-child, &:nth-last-child(2) {
						margin-bottom: 0;
					}
					image {
					width: 335upx;
					height: 189upx;
					border-top-left-radius: 20upx;
					border-top-right-radius: 20upx;
					}
					.text1 {
						display: block;
						width: 335upx;
						height: 36upx;
						background: rgba(82, 93, 100, .5);
						font-size: 15upx;
						color: #fff;
						position: absolute;
						top: 150upx;
						text-indent: 6upx;
						border-bottom: 1upx solid #6f757b;
					}
					.text2 {
						font-size: 26upx;
						font-weight: bold;
						margin: 15upx 0;
						text-indent: 6upx;
					}
					.text3 {
						margin-left: 6upx;
						font-size: 22upx;
						line-height: 34upx;
						color: #838383;
						text-indent: 6upx;
					}
					view {
						display: flex;
						justify-content: space-between;
						padding: 9upx;
						box-sizing: border-box;
						.text4 {
							font-size: 26upx;
							color: #ff802b;
						}
						.text5 {
							font-size: 16upx;
							color: #a1a1a1;
						}					
					}
				}
			}
			.NewCurriculum {
				.CurriculumItem {			
					display: flex;				
					align-items: center;
					background-color: #fff;
					padding: 19upx 0;
					margin-bottom: 28upx;
					border-radius: 10upx;
					.img {
						width: 130upx;
						height: 130upx;
						border-radius: 50%;
						margin-left: 18upx;
					}
					.fang {
						width: 176upx;
						height: 176upx;
						border-radius: 10upx;
					}
					.view {
						width: 60%;
						margin-left: 22upx;
						box-sizing: border-box;
						font-size: 30upx;
					}
					.font {
						font-size: 26upx;
						margin-left: 30upx;
					}
					.flexC {
						display: flex;
						flex-direction: column;
						.f30 {
							font-size: 30upx;
							font-weight: bold;
							text-align: left;
						}
						.f20 {
							font-size: 20upx;
							color: #919191;
							margin-left: 15upx;
						}
						.f26 {
							font-size: 26upx;
							color: #ff802b;
							margin-left: 15upx;
						}
					}
					&:last-child {
						margin-bottom: 0;
					}
				}
			}
			.CurriculumItem {			
				display: flex;				
				align-items: center;
				background-color: #fff;
				padding: 19upx 0;
				margin-bottom: 28upx;
				border-radius: 10upx;
				&:last-child {
					margin-bottom: 0;
				}
				.img {
					width: 130upx;
					height: 130upx;
					margin-left: 18upx;
				}
				.fang {
					width: 176upx;
					height: 176upx;
					border-radius: 10upx;
				}
				.view {
					width: 60%;
					margin-left: 22upx;
					box-sizing: border-box;
					font-size: 30upx;
				}
				.font {
					font-size: 26upx;
					margin-left: 30upx;
				}
				.flexC {
					width: 80%;
					display: flex;
					flex-direction: column;
					.f30 {
						margin-left: 14upx;
						font-size: 30upx;
						font-weight: bold;
						text-align: left;
					}
					.f20 {
						
						font-size: 20upx;
						color: #919191;
						margin-left: 15upx;
					}
					.f26 {
						font-size: 26upx;
						color: #ff802b;
						margin-left: 15upx;
					}
				}
				::last-child {
					margin-bottom: 0;
				}
			}			
		}
	}
</style>
