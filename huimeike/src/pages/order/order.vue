<template>
	<view class="buy">
        <view class="title">
			<view>
				<text :class="{active:idx==1}" @click="idx=1">全部</text>
				<text :class="{active2:idx==2}" @click="idx=2">课程</text>	
				<text :class="{active2:idx==3}" @click="idx=3">商城</text>					
			</view>
        </view>
        <view class="list" v-show="idx==1">
			<view class="li">
				<view class="top">
					<text class="success">购买成功</text>
					<text class="time">2019-02-02 09:31</text>
				</view>
				<view class="bottom">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559656231&di=bd6ac1e709f982fc3888b3ee333a6729&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Ffashion%2Fpics%2Fhv1%2F219%2F73%2F2302%2F149706384.jpg"></image>
					<view>
						<text>对新领域保持好奇，多结交新朋友</text>
						<text>实付：99.9颜值豆</text>
					</view>
				</view>
			</view>
        </view>
		<view class="list" v-show="idx==2">
			<text>课程</text>
		</view>
		<view class="list" v-show="idx==3">
			<text>商城</text>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				idx: 1
			}
		},
		onLoad() {
			
		},
		methods: {
			goback() {
				uni.navigateBack({
					delta: 1
				});
			},
			buy() {
				uni.navigateTo({
					
				})
			},
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					this.$msg("您点击了扫码")

				}
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
	.title {
		height: 84upx;
		line-height: 84upx;
		background-color: #fff;		
		box-sizing: border-box;
		padding: 0 20upx;
		view {
			display: flex;
			justify-content: space-around;
			border-bottom: 1upx solid #e3e3e3;
			text {
				font-size: 30upx;				
			}			
		}
	}
	.list {
		padding: 0 20upx;
		box-sizing: border-box;
		.li {
			padding: 33upx 0;
			.top {
				display: flex;
				justify-content: space-between;
				text {
					font-size: 24upx;
					color: #5a5a5a;
				}
				.success {
					&:before {
						.iconfont;
						content: '\e658';
					}
				}
			}
		}
	}
	.active {
		color: #fd9938;
		position: relative;
	}
	.active2 {
		color: #fd9938;
		position: relative;
	}	
</style>
