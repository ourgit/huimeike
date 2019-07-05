<template>
	<view class="StudyNotes">
		<view class="item">
			<view class="top">
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562321635115&di=5fb3a423aba1e2ed5c89ac4f47d2c56e&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2F2019%2F03%2F18%2Fde8354c863eb42eabde77b44bf4bcafa.jpeg"></image>
				<view>
					<text class="h1">小葡萄</text>
					<text class="time">2019-07-30 19:32</text>
				</view>
			</view>
			<view class="item2">
				<view class="bottom">
					<view class="box">
						<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562322432887&di=7fc81b5c6391b9916842926c09999b06&imgtype=0&src=http%3A%2F%2F04imgmini.eastday.com%2Fmobile%2F20190302%2F20190302013530_55772c68da68ec6b6f3930f099e073d5_3.jpeg"></image>
						<view class="box2">
							<text>对今领域保持好奇，多结交良师益友</text>
							<text>逻辑思维</text>
						</view>
					</view>
					<view class="box3">
						<text class="orange">学习心得</text>
						<text class="content">学习心得内容学习心得内容学习心得内容学习心得内容学习心得内容</text>
					</view>
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
		
		}
	}
</script>

<style lang="less" scoped>
	.StudyNotes {
		.item {
			background-color: #fff;
			margin-bottom: 20upx;
			padding: 0 20upx;
			.top {
				padding-top: 32upx;
				padding-bottom: 26upx;
				display: flex;
				image {
					width: 75upx;
					height: 75upx;
					border-radius: 50%;
				}
				view {
					display: flex;
					flex-direction: column;
					margin-left: 20upx;
					.h1 {
						font-weight: bold;
						font-size: 26upx;
					}
					.time {
						font-size: 24upx;
						color: #b2b2b2;
						margin-top: 15upx;
					}
				}
			}
			.item2 {
				display: flex;
				justify-content: flex-end;
				.bottom {
					width: 85%;
					border-radius: 20upx;
					display: flex;
					flex-direction: column;
						.box {
							display: flex;
							background-color: #f4f4f4;
							padding: 14upx 17upx;
							border-radius: 10upx;
							image {
								width: 112upx;
								height: 112upx;
								border-radius: 10upx;
							}
							.box2 {
								display: flex;
								flex-direction: column;
								margin-left: 20upx;
							}
						}
						.box3 {
							margin: 25upx 0;
						}
					}
				}
		}
	}
</style>
