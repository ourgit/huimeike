<template>
	<view class="audio" v-show="show">
		<view class="top">
			<view class="container">
				<image :src="imgUrl2 + audioList.jspic"></image>
				<text>{{audioList.title}}</text>
			</view>
			<view class="lineBar">
				<view class="time star">{{nowmiaoForc}}</view>
					<slider class="line" :value="nowmiao" min="0" :max="allmiao" @change="sliderChange" block-size="15" activeColor="#55A532" />
				<view class="time end">{{allmiaoForc}}</view>
			</view>	
		</view>
		<view class="bottom">
			<!-- 明天来改样式 -->
			<view class="box">
				<view class="on"></view>
				<view class="play" @tap="play">
					<image v-if="!playState" class="iconbtn play" src="../../static/images/audio/play.png"></image>
					<image v-if="playState" class="iconbtn play" src="../../static/images/audio/pause.png"></image>
				</view>
				<view class="next"></view>
			</view>
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
	let innerAudioContext = ''
	export default {
		data() {
			return {
				nowmiao:0,//当前时间
				allmiao:0,//全部时间
				cur: '',
				dec: '',
				timer: null,
				lineBarWid:520,//进度条的宽度跟css一只
				playState:0,//播放状态
				audioCont:'',
				audioPlaySrc:0,//当前播放的歌曲index
				audioWay:0,//播放方式 0顺序播放 1随机播放 2单曲循环
				audioList:{},
				collect:0,//是否收藏	
				//全屏显示开关
				show: false,
				placeholderSrc: '../../static/images/common/abc.png',
				imgUrl2: this.$imgUrl.imgUrl2,
				id: '',
				jsid: '',
				yplx: ''
			}
		},
		computed: {
			width:function (){
				return 'width:' + this.nowmiao/this.allmiao * this.lineBarWid + 'upx'
			},
			nowmiaoForc:function (){
					var sec = this.nowmiao % 60;
					var min = Math.floor(this.nowmiao / 60);
					if(min.toString().length < 2){
						min = '0' + min;
					}
					if(sec.toString().length < 2){
						sec = '0' + sec;
					}
					return min+':' + sec
			},
			allmiaoForc:function(){
				var sec = this.allmiao % 60;
				var min = Math.floor(this.allmiao / 60);
				if(min.toString().length < 2){
					min = '0' + min;
				}
				if(sec.toString().length < 2){
					sec = '0' + sec;
				}
				return min+':' + sec
			}
		},
		onReady() {

			
		},
		onLoad(options) {
			
			this.id = options.id;
			this.jsid = options.jsid;
			this.yplx = options.ypls;
			/* 获取播放请求 */
			this.$request.play({
				id: this.id
			}).then(res =>{
				res = JSON.parse(res);
				console.log(res)
				this.audioList = res;
				this.show = true;
				this.audioInit()
				if(this.audioList.sczt) {
					this.collect = this.audioList.sczt
				}
				console.log(this.cur)
			},err =>{
				console.log(err)
			})			
		},		
		methods: {
			audioInit(){
				if(innerAudioContext){
					innerAudioContext.destroy()
					innerAudioContext = ''
					//销毁====================
				}
				innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = 'http://psamupqu5.bkt.clouddn.com/薛之谦.mp3';
				innerAudioContext.autoplay = true
				//获取时长
				this.timer = setInterval(()=>{
					this.allmiao = Math.floor(innerAudioContext.duration)
					if(this.allmiao){
						clearInterval(this.timer)
					}
				})
				//监听事件
				innerAudioContext.onPlay(()=>{
					this.playFunc()
				})
				innerAudioContext.onPause(()=>{
					this.pauseFunc()
				})
				innerAudioContext.onTimeUpdate((e)=>{
					this.nowmiao = Math.floor(innerAudioContext.currentTime)
				})
			},
			playFunc(){
				this.playState=1
			},
			pauseFunc(){
				this.playState= 0
			},
			sliderChange(e) {
				this.nowmiao = e.detail.value
				innerAudioContext.seek(this.nowmiao)
			},
			play(){
				if(this.playState){
					//暂停
					innerAudioContext.pause()
				}else{
					//播放
					innerAudioContext.play()
				}
			},
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
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了扫码")
				}
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
					url: this.audioList.url
				}).then(res =>{
					res = JSON.parse(res);
					console.log(res)
					if(res.code === 1) {
						uni.downloadFile({
							url: this.audioList.url, //仅为示例，并非真实的资源
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
		},
		destroyed(){
			innerAudioContext.destroy()
			innerAudioContext = ''
		},
		onUnload(){ 
			clearInterval(this.timer);  
			this.timer = null;		 
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
	.audio {
		width: 100%;
		height: 100%;
		background: url("~@/static/images/audio/bg.jpg") center no-repeat;
		background-size: 100% 100%;
		.top {
			display: flex;
			flex-direction: column;
			justify-content: center;
			
			.container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-top: 300upx;
				image {
					width: 478upx;
					margin: 0 auto;				
					height: 480upx;
				}
				text {
					font-size: 22upx;
					color: #fff;
					margin-top: 38upx;
					text-align: center;
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
					width: 520upx;
					
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
					.icon {
						font-size: 40upx;
						margin-bottom: 10upx;
					}
					.no {
						.iconfont;
						content: '\e608';
					}
					.red {
						color: #ff2400;
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
