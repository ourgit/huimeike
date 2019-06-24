<template>
	<view class="MoreCourses">
		<view class="NewCurriculum">
			<view class="CurriculumItem" v-for="(item, index) in 4" :key="index" @click="detail()">
				<view class="img" style="border-radius: 50%;"><lazy-image style="border-radius: 50%;"  :realSrc="img"></lazy-image></view>
				<view class="view">儿啊呵呵这番话</view>
				<text class="icon font">&#xe656;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
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

<style lang="less" scoped>
	view {
		box-sizing: border-box;
	}

	.iconfont {
		font-family: 'iconfont' !important;
	}
	.MoreCourses {
		padding: 0 20upx;
		padding-top: 20upx;
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
</style>
