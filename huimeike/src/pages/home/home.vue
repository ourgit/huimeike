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
				<view class="swiper-item"><image :src="imgUrl + item.images"></image></view>
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
				<text class="icon more" @click="zuixinmore">更多</text>
			</view>
			<view class="CurriculumItem" v-for="(item, index) in zxkc" :key="index" @click="zx(item.id)">
				<view class="img"><lazy-image :realSrc="imgUrl + item.photo" :placeholdSrc="placeholderSrc"></lazy-image></view>
				<view class="view">{{$tools.cutString(item.title,21)}}</view>
				<text class="icon font">&#xe656;</text>
			</view>
		</view>
		<view class="OfflineCourse" @click="goOffline">
			<image src="http://hmk.qmwhcb.cn/static/home/images/xxk.jpg"></image>
		</view>
		<view class="NewCurriculum">
			<view class="title3">
				<text class="headline">顾问案</text>
				<text class="icon more" @click="gwmore">更多</text>
			</view>
			<view class="CurriculumItem" v-for="(item, index) in guwenan" :key="index" @click="gw">
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
					<text class="icon more" @click="commonmore">更多</text>
				</view>	
			</view>
			<view class="commonItem" >
				<view v-for="(items,index2) in item.list" :key="index2" class="view-box" @click="ym">
					<view class="img2"><lazy-image :realSrc="imgUrl + items.photo" :placeholdSrc="placeholderSrc"></lazy-image></view>
					<text class="biaoti">《{{items.title}}》</text>
					<text class="duanluo" style="font-size: 22upx;">{{$tools.cutString(items.abstract,20)}}</text>
					<text class="f26" v-if="items.gmsl !== undefined">{{items.gmsl}}颜值豆</text>
				</view>
			</view>
		</view>
		<view class="share">
			<view class="NewCurriculum">
				<view class="title3">
					<text class="headline">精彩分享</text>
					<text class="icon more" @click="jcmore">更多</text>
				</view>	
			</view>
			<view class="classItem" v-for="(item,index) in jcfx" :key="index">
				<view class="top">
					<lazy-image class="img" :realSrc="imgUrl2 + item.head_img" :placeholdSrc="placeholderSrc"></lazy-image>
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
					<text class="icon more" @click="wqmore">更多</text>
				</view>	
				<view></view>
			</view>	
			<view class="ul-box">
				<view class="li-box" v-for="(item,index) in wqkc" :key="index" @click="wq(item.id)">
					<view class="top">
						<lazy-image :realSrc="imgUrl + item.photo" :placeholdSrc="placeholderSrc"></lazy-image>
						<text class="text1">{{item.bmrs}}人加入学习</text>
					</view>
					<view class="bottom">
						<text class="text2">{{item.title}}</text>
						<text class="text3">{{$tools.cutString(item.szzd,30)}}</text>
						<view>
							<text class="text4">{{item.gmsl}}颜值豆</text>
							<text class="text5">{{item.bmrs}}人学习</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="share">
			<view class="NewCurriculum">
				<view class="title3">
					<text class="headline">行业动态</text>
					<text class="icon more" @click="IndustryMore">更多</text>
				</view>	
				<view></view>
			</view>
			<view class="classItem2" v-for="(item,index) in hydt" :key="index" @click="IndustryDetails(item.id)">
				<view>
					<text class="user2">{{item.title}}</text>
					<text class="time2">{{parseInt(item.create_time)*1000 | time}}</text>
					<text class="ed824a2">{{$tools.cutString(item.remark,30)}}</text>					
				</view>
			</view>
		</view>
		<view class="NewCurriculum" style="margin-top: 30upx;">
			<view class="title3">
				<text class="headline">精品推荐</text>
				<text class="icon more" @click="jpmore">更多</text>
			</view>
			<view class="CurriculumItem" v-for="(item, index) in zxkc" :key="index" @click="jp(item.id)">
				<view class="img"><lazy-image :realSrc="imgUrl + item.photo" :placeholdSrc="placeholderSrc"></lazy-image></view>
				<view class="view">{{$tools.cutString(item.title,21)}}</view>
				<text class="icon font">&#xe656;</text>
			</view>
		</view>
		<view class="end">
			<text>—— 我是有底线的 ——</text>
		</view>
		<view class="mask" v-show="mask">
			<view class="pop_up">
				<button class="pop_up-btn" @click="pop_up_btn"></button>
			</view> 
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				placeholderSrc2: '../../static/images/common/loading.gif',
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
				show: false,
				//遮罩层
				mask: false
			}
		},
		onLoad() {
			this.mask = true;
			
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			/* 获取banner请求 */
			this.$request.banner().then(res =>{
				res = JSON.parse(res);
				console.log(res)
				this.banner  = res.banner;
				this.wmhbanner = res.wmh;
			},err =>{
				console.log(err)
			})
			
			/* 获取首页请求 */
			this.$request.index().then(res =>{
				res = JSON.parse(res);
				// console.log(res);
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
			/* 点击确定唤起微信支付 */
			pop_up_btn() {
				this.mask = false;
				uni.showTabBar()
				// #ifdef  H5
					this.$request.WXZF({
						total_fee: 1
					}).then(res =>{
						res = JSON.parse(res);
						if(res.code === 1) {
							// #ifdef H5
							window.location.href = res.msg
							// #endif
						}else if(res.code === 2) {
							this.$msg(res.msg)
						}
					},err =>{
						console.log(err)
					})
				// #endif
				
				// #ifdef  APP-PLUS
					this.$request.APPWXZF().then(res =>{
						console.log(res);
						uni.requestPayment({
							provider: 'wxpay',
							orderInfo: {
								"appId": res.appid,
								"partnerId": res.partnerid,
								"prepayId": res.prepayid,
								"packageValue": res.package,
								"nonceStr": res.noncestr,
								"timeStamp": res.timestamp,
								"signType": 'MD5',
								"paySign": res.sign
							},
							success: function (res) {
								console.log(JSON.stringify(res));
								this.$msg("支付成功！")
							},
							fail: function (err) {

							}
						});
					},err =>{
						console.log(err)
					})
				
				// #endif
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
				this.$msg("搜索功能暂未开放")
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					// #ifdef  H5
					this.$msg('请在APP个人点击中心扫码');
					//#endif
					
					// #ifdef  APP-PLUS
					uni.scanCode({
						onlyFromCamera: true,
						success: function (res) {
							let url = res.result;
							let [a,b,c,d] = url.match(/(hyid).*/gi)[0].split('/')
							uni.navigateTo({
								url: `/pages/signIn/signIn?hyid=${b}&ccid=${d}`
							})
						}
					});
					//#endif
				}else if (index === 1) {
					uni.switchTab({
						url: '/pages/my/my'
					})
				}
			},
			//点击单个最新课程
			zx(id) {
				console.log(id)
				uni.navigateTo({
					url: `/pages/NotPurchased/NotPurchased?id=${id}`
				})
			},
			//最新课程更多
			zuixinmore() {
				uni.navigateTo({
					url: '/pages/classroom/classroom'
				})
			},
			//点击单个顾问案
			gw() {
				uni.navigateTo({
					url: '/pages/shopDetail/shopDetail'
				})
			},
			//顾问案更多
			gwmore() {
				uni.navigateTo({
					url: '/pages/guwenan/guwenan'
				})
			},
			//点击单个医美项目
			ym() {
				uni.navigateTo({
					url: '/pages/shopDetail/shopDetail'
				})
			},
			//医美、生美、商务更多
			commonmore() {
				uni.switchTab({
					url: '/pages/shop/shop'
				})
			},
			//精彩分享更多
			jcmore() {
				uni.navigateTo({
					url: '/pages/StudentSharing/StudentSharing'
				})				
			},
			//点击单个往期课程
			wq(id) {
				uni.navigateTo({
					url: `/pages/NotPurchased/NotPurchased?id=${id}`
				})
			},
			//往期课程更多
			wqmore() {
				uni.navigateTo({
					url: '/pages/classroom/classroom'
				})				
			},
			//点击单个精品推荐
			jp(id) {
				uni.navigateTo({
					url: `/pages/NotPurchased/NotPurchased?id=${id}`
				})				
			},
			//精品推荐更多
			jpmore() {
				uni.navigateTo({
					url: '/pages/classroom/classroom'
				})				
			},
			//行业动态详情页
			IndustryDetails(id) {
				uni.navigateTo({
					url: `/pages/IndustryDetails/IndustryDetails?id=${id}`
				})
			},
			//行业更多
			IndustryMore() {
				uni.navigateTo({
					url: '/pages/IndustryMore/IndustryMore'
				})
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
		box-sizing: border-box;
		padding-bottom: 110upx;
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
			height: 470upx;
			/* #endif  */
			/* #ifdef MP || H5 */
			padding-top: 100upx;
			height: 410upx;
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
		.OfflineCourse {
			height: 200upx;
			padding: 0 40upx;
			box-sizing: border-box;
			margin-bottom: 20upx;
			image {
				width: 100%;
				height: 100%;
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
				.img {
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
						margin-top: 8upx;
						font-weight: bold;
					}
					.time {
						margin-top: 10upx;
						color: #b2b2b2;
					}
				}
			}
			.bottom {
				margin-top: 10upx;
				margin-left: 120upx;
				margin-right: 60upx;
				font-size: 22upx;
				.ed824a {
					color: #ed824a;
				}
			}
		}
		.wqkc {
			margin-top: 30upx;
			.ul-box {
				// display: flex;
				// flex-wrap: wrap;
				// justify-content: space-around;
				display: grid;
				grid-template-columns: 1fr 1fr;
				justify-items: center;
				box-sizing: border-box;
				padding: 0 20upx;
				.li-box {
					width: 335upx;
					border-radius: 20upx;
					background-color: #fff;
					position: relative;
					margin-bottom: 21upx;
					padding-bottom: 19upx;
					.top {
						height: 94.5px;
						position: relative;
						lazy-image {
							width: 100%;
							height: 100%;
							border-top-left-radius: 20upx;
							border-top-right-radius: 20upx;
						}
						.text1 {
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
					}
					.bottom {
						display: flex;
						flex-direction: column;
						.text2 {
							font-size: 26upx;
							font-weight: bold;
							margin: 15upx 0;
							text-indent: 6upx;
						}
						.text3 {
							padding: 0 10upx;
							font-size: 22upx;
							line-height: 34upx;
							color: #838383;
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
		.mask {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .5);
			position: fixed;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			z-index: 9;
			.pop_up {
				width: 750upx;
				height: 741upx;
				background: url('~@/static/images/common/pop_up.png') no-repeat;
				background-size: 100% 100%;
				position: absolute;
				left: 50%;
				top: 50%;
				z-index: 10;
				margin-left: -375upx;
				margin-top: -370.5upx;
				.pop_up-btn {
					width: 370upx;
					height: 85upx;
					position: absolute;
					bottom: 50upx;
					left: 50%;
					margin-left: -185upx;
					z-index: 10;
					background: url('~@/static/images/common/pop_up-btn.png') no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
</style>
