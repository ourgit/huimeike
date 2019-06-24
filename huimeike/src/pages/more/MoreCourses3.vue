<template>
	<view class="MoreCourses">
		<view class="NewList">
			<view class="NewLi" v-for="(item,index) in 6" :key="index" @click="detail()">
				<image :src="img"></image>
				<text class="text1">sdxgdsxg</text>
				<text class="text2">发的规划是如何</text>
				<text class="text3">手续费规划建设性公交站</text>
				<view>
					<text class="text4">18颜值豆</text>
					<text class="text5">25698人学习</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561373347816&di=347bd6c09f5b7998c0773dc1ddbf10a6&imgtype=0&src=http%3A%2F%2Fpic-image.yesky.com%2FuploadImages%2F2016%2F330%2F05%2FGSZ6269F925B.jpg'
			}
		},
		methods: {
			detail() {
				uni.navigateTo({
					url: '/pages/NotPurchased/NotPurchased'
				});
			}
		},
	}	
</script>

<style lang="less">
	view {
		box-sizing: border-box;
	}
	.iconfont {
		font-family: 'iconfont' !important;
	}	
	.MoreCourses {
		padding: 0 20upx;
		padding-top: 20upx;
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
	}
	
</style>
