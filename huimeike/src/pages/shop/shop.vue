<template>
	<view class="shop">
		<view class="nav">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" style="font-size: 35upx;"></wuc-tab>
		</view>	
		<view class="content">
			<view class="ul">
				<view class="li" v-for="(item, index) in 20" :key="index" @click="shopDetail">
					<lazy-image realSrc="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558428196660&di=eefe6366a6731a7423684c752674b739&imgtype=0&src=http%3A%2F%2Fpic12.nipic.com%2F20110221%2F177770_101451530140_2.jpg" :placeholdSrc="placeholderSrc" class="img"></lazy-image>					
					<text class="title2">《努力到无能为力》</text>
					<text class="content2">介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明介绍说明</text>
					<text class="yzd">99颜值豆</text>
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
				TabCur: 0,
				tabList: [{ name: '美业书籍' }, { name: '顾问方案' },{ name: '生美项目' },{ name: '医美项目' },{ name: '商务礼品' }],
				placeholderSrc: '../../static/images/common/abc.png',
			}
		},
		onLoad() {
			
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			},
			swiperChange(e) {
				let { current } = e.target;
				this.TabCur = current;
			},
			goback() {
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			shopDetail() {
				uni.navigateTo({
					url: '/pages/shopDetail/shopDetail'
				})
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					uni.switchTab({
						url: '/pages/home/home'
					})
					
				}else if (index === 1) {
					this.$msg("点击了扫码")
				}
			}				
		}
	}
</script>

<style lang="less">
	.shop {
		.nav {
			width: 100%;
			box-sizing: border-box;
			/*  #ifdef H5  */
			top: 88upx;
			/*  #endif  */
			/*  #ifdef APP-PLUS  */
			top: 0upx;
			/*  #endif  */
			left: 0;
			z-index: 9;
			position: fixed;
			height: 80upx;
			line-height: 80upx;
			background: #fff;
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
		.content {
			margin-top: 88upx;
			padding: 27upx 36upx;
			padding-bottom: 120upx;
			.ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.li {
					width: 324upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-bottom: 15upx;
					background-color: #fff;
					margin-bottom: 27upx;
					border-radius: 10upx;
					text-align: center;
					.img {
						display: block;
						width: 100%;
						height: 320upx;
						border-top-left-radius: 10upx;
						border-top-right-radius: 10upx;
					}
					.title2 {
						font-size:25upx;
						margin-top: 10upx;
					}
					.content2 {
						width: 280upx;
						font-size: 18upx;
						color: #919191;
						line-height: 30upx;
					}
					.yzd {
						margin-top: 10upx;
						font-size: 25upx;
						color: #ff802b;						
					}
				}
			}
		}
	}
</style>
