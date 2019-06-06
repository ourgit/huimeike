
<template>
	<view class="collection">
		<view class="item">
			<text class="title">对新领域保持好奇，多结交新朋友</text>
			<view>
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559281359935&di=a52953ef5d57ca1428772617a9ad5262&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2Fallimg%2F090626%2F1553504U2-2.jpg"></image>
				<text class="luoji">逻辑思维</text>
				<text class="time">2019-02-03</text>
				<text class="student">学习</text>
			</view>
		</view>

	</view>
</template>

<script>
	
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
		
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
	.collection {
		.item {
			width: 90%;
			margin: 0 auto;
			margin-top: 28upx;
			padding: 45upx 30upx;
			background-color: #fff;
			.title {
				font-size: 30upx;
			}
			view {
				display: flex;
				align-items: center;
				margin-top: 26upx;
				image {
					width: 43upx;
					height: 43upx;
					border-radius: 50%;
				}
				text {
					font-size: 22upx;
					color: #818183;
				}
				.luoji {
					margin-left: 10upx;
				}
				.time {
					margin-left: 40upx;
				}
				.student {
					padding: 10upx 40upx;
					background: #f86e25;
					border-radius: 40upx;
					color: #fff;
					margin-left: 100upx;
				}
			}
		}

	}
</style>
