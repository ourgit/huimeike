<template>
	<view class="video">
		<view class="top">
			<view class="container">
				 <video id="myVideo" :src="videoData.url" controls></video>
			</view>
		</view>
		<view class="bottom">

			<view class="tabBar">
				<view class="liebiao">
					<text class="icon">&#xe634;</text>
					<text>1/1</text>
				</view>
				<view class="liebiao" @click="wengao">
					<text class="icon">&#xe601;</text>
					<text>文稿</text>
				</view>
				<view class="liebiao" @click="collectFunc">
					<text class="icon no" v-if="!collect">&#xe608;</text>
					<text class="icon red" v-if="collect">&#xe635;</text>
					<text>收藏</text>
				</view>
				<view class="liebiao" @click="download">
					<text class="icon">&#xe823;</text>
					<text>下载</text>
				</view>
				<view class="liebiao">
					<text class="icon small">&#xe603;</text>
					<text>分享</text>
				</view>
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
				id: '',
				videoData: {},
				//收藏状态
				collect:0
			}
		},
		computed: {
	
		},
		mounted() {

		},		
		onLoad(options) {
			this.id = options.id;
				/* 获取播放请求 */
				this.$request.play({
					id: this.id
				}).then(res =>{
					res = JSON.parse(res);
					console.log(res)
					this.videoData = res;
					if(this.videoData.sczt) {
						this.collect = this.videoData.sczt
					}
				},err =>{
					console.log(err)
				})
		},
		methods: {
			collectFunc(){
				this.collect = !this.collect
				/* 获取收藏接口请求 */
				this.$request.collect({
					id: this.id,
					zt: this.collect
				}).then(res =>{
					res = JSON.parse(res);
					console.log(res)
				},err =>{
					console.log(err)
				})
			},
			//文稿跳转
			wengao() {
				uni.navigateTo({
					url: `/pages/NotPurchased/NotPurchased?id=${this.id}`
				})
			},
			download() {
				/* 获取下载接口 */
				this.$request.download({
					id: this.id,
					jsid: this.jsid,
					yplx: this.ypls,
					url: this.videoData.url
				}).then(res =>{
					res = JSON.parse(res);
					console.log(res)
					if(res.code === 1) {
						uni.downloadFile({
							url: this.videoData.url, //仅为示例，并非真实的资源
							success: (res) => {								
								if (res.statusCode === 200) {
									console.log("下载成功！")
									var tempFilePath = res.tempFilePath
									console.log(tempFilePath)
									uni.saveFile({
										tempFilePath: tempFilePath,
										success: function (res) {
											console.log(res.savedFilePath)
											var savedFilePath = res.savedFilePath;
											
										}
									});
								}
							}
						});
						this.$msg(res.msg);
					}else {
						this.$msg(res.msg);
					}
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
	.video {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		.top {
			display: flex;
			flex-direction: column;
			justify-content: center;
			
			.container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				video {
					width: 100%;
					height: 500upx;
					margin: 0 auto;
					box-sizing: border-box;
				}
			}
			.lineBar{
				margin: 0 auto;				
				margin-top: 110upx;
				width: 90%;
				display: flex;
				padding: 20upx 0;
				justify-content: space-between;
				align-items: center;
				.star {
					font-size: 30upx;
					color: #fff;
				}
				.end {
					font-size: 30upx;
					color: #fff;					
				}
				.line{
					margin: 0;
					width: 70%;
					
				}
			}
		}
		.bottom {
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #fff;
			.pattern {
				position: absolute;
				left: 65upx;
				top: 65upx;
				.iconbtn{
					display: block;
					width: 50upx;
					height: 50upx;
					margin:0 auto;
					
				}
			}
			.box {
				width: 358upx;
				margin: 0 auto;
				height: 188upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				view {
					width: 50upx;
					height: 50upx;
				}
				.on {
					background: url("~@/static/images/audio/on.png") no-repeat;
					background-size: 100% 100%;
					
				}
				.play {
					width: 134upx;
					height: 134upx;
					image {
						width: 134upx;
						height: 134upx;
					}
				}
				.next {
					background: url("~@/static/images/audio/next.png") no-repeat;
					background-size: 100% 100%;
				}
			}
			.tabBar {
				width: 100%;
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
					.red {
						color: #ff2400;
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
					.small {
						font-size: 36upx;
						margin-bottom: 10upx;
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

