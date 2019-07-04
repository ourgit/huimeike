<template>
	<view class="NotPurchased" v-show="isShow">
		<view class="banner">
			<image v-if="xqxx.photo" :src="imgUrl + xqxx.photo"></image>
			<view>{{xqxx.bmrs}}人学习</view>
		</view>
		<view class="content">
			<view class="dabiaoti">{{xqxx.title}}</view>
			<view class="box1">
				<view class="v1" @click="jsdetail(js.id)">
					<image v-if="js.portrait" :src="imgUrl2 + js.portrait"></image>
					<view>
						<text class="t1">{{js.name}}</text>
						<text class="t2" style="font-size: 24upx;">{{js.time}}</text>						
					</view>
				</view>
				<view class="v2" @click="collectFunc">
					<text class="icon t3" v-if="!collect">&#xe61a;</text>
					<text class="icon t3 yellow" v-if="collect">&#xe642;</text>
					<text class="t4">关注</text>
				</view>
			</view>
			<view class="mp3-box">
				<view class="mp3">
					<image src="../../static/images/NotPurchased/play.png" @click="play(gmzt)"></image>
					<view class="view1">
						<view class="biaoti2">{{xqxx.title}}</view>
						<view class="biaoti3">
							<text style="font-size: 24upx;">{{duration}}</text>
							<text style="margin-left: 33upx;font-size: 24upx;">{{xqxx.size}}</text>							
						</view>						
					</view>
				</view>				
			</view>
			<view class="view2">建议WIFI环境下播放</view>	
			<view class="huazhongdian">
				<view class="title6">
					<text class="t6">划重点</text>
				</view>
				<view class="neirong1">
					<view class="neirong" :style="{ backgroundImage:'url('+Heiban+')'}">
						<text>{{xqxx.hzdnr}}</text>
					</view>
				</view>
			</view>
			<!-- 富文本盛放的内容盒子 -->
			<view class="tx">
				<u-parse :content="xqxx.content" @preview="preview" @navigate="navigate" :imgOptions="false" />
			</view>
			<view class="shizhan">
				<view class="zhidao">实战指导</view>
				<view class="heiban2">
					<view class="heiban3" :style="{ backgroundImage:'url('+Heiban2+')'}">
						<text>{{xqxx.szzd}}</text>
					</view>					
				</view>
			</view>
			<view class="xinde">
				<text class="da">学习心得</text>
				<view>
					<text class="icon xiao1">&#xe661;</text>
					<text class="xiao2">写心得</text>
				</view>
			</view>
			<view class="classItem" v-for="(item,index) in xxxd" :key="index">
				<view class="top">
					<image v-if="item.head_img" :src="imgUrl2 + item.head_img"></image>
					<view>
						<text class="user">{{item.nickname}}</text>
						<text class="time">{{item.time}}</text>
					</view>
				</view>
				<view class="bottom">
					<text class="ed824a">学习心得：</text>
					<text>{{$tools.cutString(item.plxd,34)}}</text>
				</view>
				<view class="tubiao"></view>
			</view>
			<view class="tabBar"  v-if="gmzt===1">
				<view class="liebiao">
					<text class="icon">&#xe661;</text>
					<text>写心得</text>
				</view>
				<view class="liebiao">
					<text class="icon">&#xe61a;</text>
					<text>关注</text>
				</view>
				<view class="liebiao">
					<text class="icon">&#xe608;</text>
					<text>收藏</text>
				</view>
				<view class="liebiao">
					<text class="icon">&#xe823;</text>
					<text>下载</text>
				</view>
				<view class="liebiao">
					<text class="icon">&#xe667;</text>
					<text>分享</text>
				</view>
			</view>			
			<view class="tabBar" v-else>
				<text class="yzd">{{xqxx.gmsl}}颜值豆</text>
				<text class="mianfei" @click="play">免费试听</text>
				<button @click="buy">购买</button>
			</view>
		</view>
		<view class="end">
			<text>—— 我是有底线的 ——</text>
		</view>
	</view>
</template>

<script>
	import {heiban} from '@/static/base64/NotPurchased/heiban.js';
	import {heiban2} from '@/static/base64/NotPurchased/heiban2.js';
	export default {
		data() {
			return {
				isShow: false,
				placeholderSrc: '../../static/images/common/abc.png',
				imgUrl: this.$imgUrl.imgUrl,
				imgUrl2: this.$imgUrl.imgUrl2,
				Heiban: heiban,
				Heiban2: heiban2,
				id: '',
				gmzt: '',
				xqxx: {},
				//讲师信息
				js: {},
				xxxd: [],
				collect:0,//是否收藏	,
				gzzt: '',
				duration: null
			}
		},
		onLoad(options) {
			this.id = options.id;
			console.log(this.id)
			/* 获取未购买课程请求 */
			this.$request.NotPurchased(
				{id: this.id}
			).then(res =>{
				res = JSON.parse(res);
				console.log(res)
				this.gmzt = res.gmzt;
				this.xqxx = res.xqxx;
				this.js = res.js;
				this.xxxd = res.xxxd;
				this.duration = this.format(this.xqxx.duration)
				this.gzzt = res.gzzt;
				this.isShow = true;
				if(this.gzzt) {
					this.collect = this.gzzt
				}
			},err =>{
				console.log(err)
			})
		},
		methods: {
			//格式化时长
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(
					Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
			goback() {
				uni.navigateBack({
					delta: 1
				});
			},
			buy() {
				uni.navigateTo({
					url: '/pages/buy/buy'
				})
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了分享")

				}
			},
			preview(src, e) {
				// do something
			},
			navigate(href, e) {
				// do something
			},
			play(gmzt) {
				if(this.xqxx.yplx === 0) {
					uni.navigateTo({
						url: `/pages/audio/audio?id=${this.id}&jsid=${this.js.id}&yplx=${this.xqxx.yplx}&gmzt=${gmzt}`
					})
				}
				else if(this.xqxx.yplx === 1) {
					uni.navigateTo({
						url: `/pages/video/video?id=${this.id}&jsid=${this.js.id}&yplx=${this.xqxx.yplx}&gmzt=${gmzt}`
					})					
				}
			},
			//跳转到讲师详情
			jsdetail(id) {
				uni.navigateTo({
					url: `/pages/LecturerDetails/LecturerDetails?id=${id}`
				})
			},
			collectFunc(){
				this.collect = !this.collect
				/* 获取未购买课程请求 */
				this.$request.focus(
					{
						id: this.js.id,
						zt: this.collect
					}
				).then(res =>{
					res = JSON.parse(res);
					console.log(res)
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
	.NotPurchased {
		padding-bottom: 130upx;
		.banner {
			box-sizing: border-box;
			height: 368upx;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
			view {
				display: block;
				width: 100%;
				height: 68upx;
				position: absolute;
				left: 0;
				bottom: 0;
				text-indent: 33upx;
				font-size: 32upx;
				color: #fff;
				line-height: 68upx;
				background: rgba(0,0,0,.5);
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
						margin-left: 18upx;
						.t1 {
							font-size: 25upx;
							color: #676767;
							margin-top: 8upx;
						}
						.t2 {
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
			.mp3-box {
				padding: 22upx 20upx;
				overflow: hidden;
				background-color: #f8f8f8;
				border-radius: 15upx;
				margin-top: 44upx;
				.mp3 {
					display: flex;
					position: relative;
					image {
						width: 90upx;
						height: 90upx;
					}
					.view1 {
						width: 55%;
						margin-left: 20upx;
						margin-top: 5upx;						
						.biaoti2 {							
							font-size: 28upx;
							color: #686868;
							overflow:hidden;
							text-overflow:ellipsis;
							white-space:nowrap;
						}
						.biaoti3 {
							font-size: 18upx;
							color: #a6a6a6;
							margin-top: 10upx;
						}
					}
					.ic1 {
						font-size: 40upx;
						position: absolute;
						right: 50upx;
						top: 20upx;
					}
				}
			}
			.view2 {
				font-size: 21upx;
				color: #aeaeae;
				height: 71upx;
				line-height: 71upx;
				display: flex;
				justify-content: center;
				border-bottom: 1upx solid #e6e6e6;
			}
			.huazhongdian {
				background-color: #fff;
				overflow: hidden;
				.title6 {
					font-size: 30upx;
					color: #645c37;
					position: relative;
					text-indent: 44upx;
					height: 103upx;
					line-height: 103upx;
					&:before {
						content: "";
						display: inline-block;
						width: 38upx;
						height: 33upx;
						background: url("~@/static/images/NotPurchased/pen.png") no-repeat;
						background-size: 38upx 33upx;
						position: absolute;
						left: 0;
						top: 35upx;
					}
				}
				.neirong1 {
					padding-bottom: 20upx;
					border-bottom: 1upx solid #e6e6e6;
					.neirong {
						height: 384upx;
						line-height: 48upx;
						padding: 36upx;
						box-sizing: border-box;
						background-repeat: no-repeat;
						background-size: 100% 384upx;
						color: #fff;
						font-size: 30upx;
					}					
				}
			}
			.tx {
				margin-top: 29upx;
				font-size: 30upx;
			}
			.shizhan {
				.zhidao {
					font-size: 30upx;
					color: #645c37;
					text-indent: 44upx;
					padding-top: 32upx;
					padding-bottom: 28upx;
					position: relative;
					&:before {
						content: "";
						display: inline-block;
						width: 29upx;
						height: 41upx;
						background: url("~@/static/images/NotPurchased/zhihui.png") no-repeat;
						background-size: 29upx 41upx;
						position: absolute;
						left: 10upx;
						top: 30upx;						
					}
				}
				.heiban2 {
					padding-bottom: 20upx;
					border-bottom: 1upx solid #e6e6e6;
					.heiban3 {
						height: 384upx;
						line-height: 48upx;
						padding: 44upx;
						box-sizing: border-box;
						background-repeat: no-repeat;
						background-size: 103% 384upx;
						color: #fff;
						font-size: 30upx;
					}
				}
			}
			.xinde {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100upx;
				line-height: 100upx;
				.da {
					font-size: 30upx;
					font-weight: bold;
				}
				view {
					height: 63upx;
					padding: 0upx 30upx;
					display: flex;
					align-items: center;
					background: #f86e25;
					border-radius: 40upx;
					color: #fff;
					.xiao1 {
						font-size: 28upx;
						color: #fff;
					}
					.xiao2 {
						font-size: 28upx;
						color: #fff;
						margin-left: 8upx;
					}
				}				
			}
			.classItem {
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
						}
					}
				}
				.bottom {
					margin-left: 120upx;
					font-size: 22upx;
					.ed824a {
						color: #ed824a;
					}
				}
				.tubiao {
					width: 30upx;
					height: 30upx;
					background: url("~@/static/images/NotPurchased/huifu.png") no-repeat;
					background-size: 100% 100%;
					position: absolute;
					right: 15upx;
					bottom: 15upx;
				}				
			}
			.tabBar {
				width: 100%;
				position: fixed;
				bottom: 0;
				left: 0;
				height: 123upx;
				border-top: 1px solid #e6e6e6;
				background-color: #f9f9f9;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.liebiao {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					justify-content: center;
					text {
						font-size: 19upx;
						color: #878787;
					}
					.icon {
						font-size: 40upx;
						margin-bottom: 10upx;
					}
					&:first-child {
						margin-left: 39upx;
					}
					&:last-child {
						margin-right: 39upx;
					}					
				}
				.yzd {
					font-size: 33upx;
					color: #f86e25;
					margin-left: 50upx;
					&:after {
						content: "|";
						color: #d9d9d9;
						margin-left: 35upx;
					}
				}
				.mianfei {
					font-size: 30upx;
				}
				button {
					width: 207upx;
					height: 61upx;
					background-color: #f86e25;
					line-height: 61upx;
					margin: 0;
					font-size: 26upx;
					color: #fff;
					border-radius: 40upx;
					margin-right: 55upx;
				}
			}
		}		
	}
</style>
