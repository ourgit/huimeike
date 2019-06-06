
<template>
	<view class="download">
		<view class="item">
			<text class="icon">&#xe768;</text>
			<view class="play">
				<text class="t1">对新领域保持好奇,多结交新朋友</text>
				<view>
					<text class="time">时长：10：50</text>
					<text class="luoji">逻辑思维</text>
				</view>
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
	.download {
		padding: 0 30upx;
		.item {
			padding: 27upx 0;
			display: flex;
			border-bottom: 1upx solid #e8e8e8;
			.icon {
				margin-top: 10upx;
			}
			.play {
				margin-left: 23upx;
				
				.t1 {
					display: flex;
					font-size: 30upx;					
				}
				view {
					margin-top: 12upx;
					font-size: 25upx;
					color: #8e8e8e;					
					.time {
						font-size: 25upx;
						color: #8e8e8e;
					}
					.luoji {
						margin-left: 20upx;
					}
				}
			}
		}
	}
</style>
