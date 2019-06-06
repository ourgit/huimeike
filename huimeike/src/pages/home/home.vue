<template>
	<view class="home" v-show="show">
		<!-- #ifdef MP -->
		<view class="header">
			<view class="search">
				<text class="icon">&#xe618;</text>
				<input type="text" placeholder="请输入搜索的内容" />
			</view>
			<view class="Sweepcode"><text class="icon" @click="Sweepcode">&#xe600;</text></view>		
		</view>
		<!-- #endif -->

		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
			<swiper-item v-for="(item, index) in banner" :key="index">				
				<view class="swiper-item"><image :src="imgUrl + item.images" @click="goOffline"></image></view>
			</swiper-item>
		</swiper>		
		<view class="nav">
			<view class="nav-item" @click="classroom">
				<text class="ico icon1"></text>
				<text class="text">云课堂</text>
			</view>
			<view class="nav-item">
				<text class="ico icon2" @click="guwen"></text>
				<text class="text">顾问案</text>
			</view>
			<view class="nav-item" @click="shop">
				<text class="ico icon3"></text>
				<text class="text">商城</text>
			</view>
			<view class="nav-item" @click="share">
				<text class="ico icon4"></text>
				<text class="text">学员分享</text>
			</view>
		</view>
		<view class="bespoke">
			<view>
				<text class="title1">{{title.title1}}</text>
				<text class="title2">{{title.title2}}</text>
			</view>
			<button @click="yuyue">立即预约</button>
		</view>
		<view class="NewCurriculum">
			<view class="title3">
				<text class="headline">最新课程</text>
				<text class="icon more">更多</text>
			</view>
			<view class="CurriculumItem" v-for="(item, index) in zxkc" :key="index">
				<view class="img"><lazy-image :realSrc="'http://hmk.qhd58.net/uploads/images/' + item.photo" :placeholdSrc="placeholderSrc"></lazy-image></view>
				<view class="view">{{$tools.cutString(item.title,21)}}</view>
				<text class="icon font">&#xe656;</text>
			</view>
		</view>
		<view class="NewCurriculum">
			<view class="title3">
				<text class="headline">顾问案</text>
				<text class="icon more">更多</text>
			</view>
			<view class="CurriculumItem" v-for="(item, index) in guwenan" :key="index">
				<view class="img"><lazy-image :realSrc="imgUrl + item.photo" :placeholdSrc="placeholderSrc"></lazy-image></view>
				<view class="flexC">
					<text class="f30">《{{item.title}}》</text>
					<text class="f20">{{$tools.cutString(item.abstract,32)}}</text>
					<text class="f26">{{item.gmsl}}颜值豆</text>
				</view>
			</view>
		</view>	
		<view class="NewCurriculum">
			<view class="title3">
				<text class="headline">唯美汇</text>
			</view>
			<swiper class="swiper2" style="margin-top: 30upx;" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
				<swiper-item v-for="(item, index) in wmhbanner" :key="index">
					<view class="swiper-item"><image :src="imgUrl + item.images"></image></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="Item-box" v-for="(item,index1) in commonItem" :key="index1">
			<view class="NewCurriculum">
				<view class="title3">
					<text class="headline">{{item.scname}}</text>
					<text class="icon more">更多</text>
				</view>	
			</view>
			<view class="commonItem" >
				<view v-for="(items,index2) in item.list" :key="index2" class="view-box">
					<view class="img2"><lazy-image :realSrc="imgUrl + items.photo" :placeholdSrc="placeholderSrc"></lazy-image></view>
					<text class="biaoti">《{{items.title}}》</text>
					<text class="duanluo">{{$tools.cutString(items.abstract,32)}}</text>
					<text class="f26" v-if="items.gmsl !== undefined">{{items.gmsl}}颜值豆</text>
				</view>
			</view>
		</view>
		<view class="share">
			<view class="NewCurriculum">
				<view class="title3">
					<text class="headline">精彩分享</text>
					<text class="icon more">更多</text>
				</view>	
				<view></view>
			</view>
			<view class="classItem" v-for="(item,index) in jcfx" :key="index">
				<view class="top">
					<image :src="imgUrl2 + item.head_img"></image>
					<view>
						<text class="user">{{item.nickname}}</text>
						<text class="time">{{item.time}}</text>
					</view>
				</view>
				<view class="bottom">
					<text class="ed824a">学习心得：</text>
					<text>{{$tools.cutString(item.plxd,32)}}</text>
				</view>
			</view>
		</view> 
		<view class="wqkc">
			<view class="NewCurriculum">
				<view class="title3">
					<text class="headline">往期课程</text>
					<text class="icon more">更多</text>
				</view>	
				<view></view>
			</view>	
			<view class="ul-box">
				<view class="li-box" v-for="(item,index) in wqkc" :key="index">
					<image :src="imgUrl + item.photo">
					</image>
					<text class="text1">{{item.bmrs}}人加入学习</text>
					<text class="text2">{{item.title}}</text>
					<text class="text3">{{item.szzd}}</text>
					<view>
						<text class="text4">{{item.gmsl}}颜值豆</text>
						<text class="text5">{{item.bmrs}}人学习</text>
					</view>
				</view>
			</view>
		</view>
		<view class="share">
			<view class="NewCurriculum">
				<view class="title3">
					<text class="headline">行业动态</text>
					<text class="icon more">更多</text>
				</view>	
				<view></view>
			</view>
			<view class="classItem2" v-for="(item,index) in hydt" :key="index">
				<view>
					<text class="user2">{{item.title}}</text>
					<text class="time2">{{parseInt(item.create_time)*1000 | time}}</text>
					<text class="ed824a2">{{item.remark}}</text>					
				</view>
			</view>
		</view>
		<view class="NewCurriculum" style="margin-top: 30upx;">
			<view class="title3">
				<text class="headline">最新课程</text>
				<text class="icon more">更多</text>
			</view>
			<view class="CurriculumItem" v-for="(item, index) in zxkc" :key="index">
				<view class="img"><lazy-image :realSrc="'http://hmk.qhd58.net/uploads/images/' + item.photo" :placeholdSrc="placeholderSrc"></lazy-image></view>
				<view class="view">{{$tools.cutString(item.title,21)}}</view>
				<text class="icon font">&#xe656;</text>
			</view>
		</view>
		<view class="end">
			<text>—— 我是有底线的 ——</text>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				imgUrl: this.$imgUrl.imgUrl,
				imgUrl2: this.$imgUrl.imgUrl2,
				//轮播图的组件
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				circular: true,				
				banner: [],				
				title: {
					'title1': '本周精品课',
					'title2': '对新领域保持好奇，多结交朋友哈哈哈哈哈哈哈哈哈哈哈'
				},
				zxkc: [],
				guwenan: [],
				wmhbanner: [],
				commonItem: [],
				//精彩分享
				jcfx: [],
				//往期课程
				wqkc: [],
				//行业动态
				hydt: [],
				//全屏显示开关
				show: false
			}
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			/* 获取banner请求 */
			this.$request.banner().then(res =>{
				res = JSON.parse(res);
				this.banner  = res.banner;
				this.wmhbanner = res.wmh;
			},err =>{
				console.log(err)
			})
			
			/* 获取首页请求 */
			this.$request.index().then(res =>{
				res = JSON.parse(res);
				this.zxkc  = res.zxkc;
				this.guwenan = res.gwa;
				this.jcfx = res.jcfx;
				this.wqkc = res.wqkc;
				this.hydt = res.hydt;
				uni.hideLoading();
				this.show = true;				
			},err =>{
				console.log(err)
			})

			/* 获取首页商品请求 */
			this.$request.indexShop().then(res =>{
				res = JSON.parse(res);
				this.commonItem = res;
			},err =>{
				console.log(err)
			})					
		},
		methods: {
			//点击扫码
			Sweepcode() {
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			//点击进入云课堂
			classroom() {
				uni.navigateTo({
					url: '/pages/classroom/classroom'
				})
			},
			//商城导航按钮
			shop() {
				uni.switchTab({
					url: '/pages/shop/shop'
				})
			},
			guwen() {
				uni.navigateTo({
					url: '/pages/guwenan/guwenan'
				})				
			},
			//点击轮播图进入线下课
			goOffline() {
				uni.navigateTo({
					url: '/pages/OfflineClass/Offline'
				})
			},
			share() {
				uni.navigateTo({
					url: '/pages/StudentSharing/StudentSharing',
					animationType: 'none'
				})
				
			},
			yuyue() {
				uni.navigateTo({
					url: '/pages/Course/Course',
					animationType: 'none'
				})
				
			},
			// 标题栏input搜索框点击(请在真机上测试)
			onNavigationBarSearchInputConfirmed: async function(e) {
				this.$msg("您点击了搜索")
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg('点击了扫描');
					
				}else if (index === 1) {
					this.$msg("您点击了个人中心")
					uni.switchTab({
						url: '/pages/my/my'
					})
				}
			}			
		}
	}
</script>

<style lang="less">
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
		padding-top: 0;
		color: #919191;
	}
	
	.home {
		width: 100%;
		padding-bottom: 100upx;
		box-sizing: border-box;
		.header {
			width: 100%;
			height: 100upx;
			background-color: #fff;
			position: fixed;
			display: flex;
			z-index: 9;
			.search {
				width: 80%;
				margin: 20upx 0;
				border-radius: 20upx;
				box-sizing: border-box;
				padding-left: 76upx;
				background-color: #f8f8f8;
				margin-left: 36px;
				position: relative;
				text {
					position: absolute;
					left: 20upx;
					top: 8upx;
					font-size: 38upx;
				}
				input {
					width: 100%;
					height: 100%;
				}
			}
			.Sweepcode {
				width: 20%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.swiper {
			/* #ifdef APP-PLUS */
			padding-top: 162upx;
			/* #endif  */
			/* #ifdef MP || H5 */
			padding-top: 100upx;
			/* #endif  */
			.swiper-item {
				image {
					width: 100%;
					height: 310upx;
				}
			}
		}
		.swiper2 {
			width: 100%;
			box-sizing: border-box;
			margin: 0 auto;
			image {
				width: 100%;
				height: 310upx;
			}
		}
		.nav {
			height: 139upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #fff;
			.nav-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.ico {
					display: block;
					width: 63upx;
					height: 63upx;
				}
				.icon1 {
					background: url('~@/static/images/home/Cloudclassroom.png') center center no-repeat;
					background-size: 43upx 40upx;
				}
				.icon2 {
					background: url('~@/static/images/home/case.png') center center no-repeat;
					background-size: 37upx 43upx;
				}
				.icon3 {
					background: url('~@/static/images/home/shop.png') center center no-repeat;
					background-size: 42upx 42upx;
				}
				.icon4 {
					background: url('~@/static/images/home/leaveMessage.png') center center no-repeat;
					background-size: 42upx 42upx;
				}
				.text {
					font-size: 21upx;
					text-align: center;
					margin-top: 12upx;
				}											
			}
		}
		.bespoke {
			width: 90%;
			height: 180upx;
			margin: 31upx auto;
			background: url('~@/static/images/home/bespoke.png') no-repeat;
			background-size: 100% 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			view {
				width: 354upx;
				overflow:hidden;
				text-overflow:ellipsis;
				white-space:nowrap;
				display: flex;
				flex-direction: column;
				color: #fff;
				
				margin-left: 56upx;
				.title1 {
					font-size: 34upx;
					font-weight: bold;
				}
				.title2 {
					width: 355upx;
					font-size: 24upx;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap;	
					margin-top: 11upx;
				}
			}
			button {
				padding: 8upx 24upx;
				font-size: 30upx;
				line-height: 47upx;
				color: #f86f2b;
				background-color: #fff;
				border-radius: 79upx;
			}
		}
		.NewCurriculum {
			width: 90%;
			margin: 0 auto;
			margin-bottom: 30upx;
			.title3 {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.headline {
					font-size: 42upx;
					color: #4b4859;
					font-weight: bold;
					position: relative;
					text-indent: 20upx;
					::before {
						.iconfont;
						content: '\e605';						
						font-size: 100%;
						font-weight: bold;
						color: #ff802b;
						position: absolute;
						left: -35upx;
						top: 7upx;
					}
				}
				.more {
					font-size: 26upx;
					color: #f86f2b;
					::after {
						.iconfont;
						content: '\e619';						
						font-size: 20upx;
						font-weight: bold;
						color: #ff802b;						
					}
				}
			}
			.CurriculumItem {			
				display: flex;				
				align-items: center;
				background-color: #fff;
				padding: 19upx 0;
				margin-top: 28upx;
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
			}

		}
		.commonItem {
			width: 90%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			overflow: hidden;
			.view-box {
				width: 324upx;
				background-color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-bottom: 31upx;
				padding-bottom: 16upx;
				box-sizing: border-box;
				.img2 {
					width: 100%;
					height: 300upx;					
				}
				.biaoti {
					margin-top: 10upx;
					font-size: 24upx;
					font-weight: bold;
				}
				.duanluo {
					width: 280upx;
					font-size: 14upx;
					color: #919191;
					margin-top: 8upx;
				}
				.f26 {
					font-size: 26upx;
					color: #ff802b;
					margin-left: 15upx;
					margin-top: 20upx;
				}
			}
		}
		.classItem {
			background-color: #fff;
			padding: 32upx 0; 
			border-bottom: 1upx solid #f2f2f2;
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
		}
		.wqkc {
			margin-top: 30upx;
			.ul-box {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;				
				box-sizing: border-box;
				padding: 0 20upx;
				.li-box {
					width: 335upx;
					border-radius: 20upx;
					background-color: #fff;
					position: relative;
					margin-bottom: 21upx;
					display: flex;
					flex-direction: column;
					padding-bottom: 19upx;
					
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
		}
		.classItem2 {
			background-color: #fff;
			view {
				width: 90%;
				padding: 32upx 0;
				margin: 0 auto;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				border-bottom: 1upx solid #dddddd;
				.user2 {
					font-size: 30upx;
				}
				.time2 {
					font-size: 25upx;
					color: #737373;
					margin-top: 25upx;
				}
				.ed824a2 {
					font-size: 28upx;
					color: #737373;
					margin-top: 25upx;
				}
			}
			&:last-child {
				view {
					border-bottom: 0;
				}
			}
		}
		
	}
</style>
