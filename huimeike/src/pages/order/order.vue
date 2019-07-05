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
			<view class="li" v-for="(item,index) in 4" :key="index">
				<view class="top">
					<text class="success">购买成功</text>
					<text class="time">2019-02-02 09:31</text>
				</view>
				<view class="bottom">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559656231&di=bd6ac1e709f982fc3888b3ee333a6729&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Ffashion%2Fpics%2Fhv1%2F219%2F73%2F2302%2F149706384.jpg"></image>
					<view class="view">
						<text class="bag">对新领域保持好奇，多结交新朋友</text>
						<view class="small"><view>实付：<text class="y">99.9颜值豆</text></view><text class="z" @click="Logistical">物流信息</text></view>
					</view>
				</view>
			</view>
        </view>
		<view class="list" v-show="idx==2">
			<view class="li" v-for="(item,index) in 4" :key="index">
				<view class="top">
					<text class="success">购买成功</text>
					<text class="time">2019-02-02 09:31</text>
				</view>
				<view class="bottom">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559656231&di=bd6ac1e709f982fc3888b3ee333a6729&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Ffashion%2Fpics%2Fhv1%2F219%2F73%2F2302%2F149706384.jpg"></image>
					<view class="view">
						<text class="bag">对新领域保持好奇，多结交新朋友</text>
						<view class="small"><view>实付：<text class="y">99.9颜值豆</text></view></view>
					</view>
				</view>
			</view>
		</view>
		<view class="list" v-show="idx==3">
			<view class="li" v-for="(item,index) in 4" :key="index">
				<view class="top">
					<text class="success">购买成功</text>
					<text class="time">2019-02-02 09:31</text>
				</view>
				<view class="bottom">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559656231&di=bd6ac1e709f982fc3888b3ee333a6729&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Ffashion%2Fpics%2Fhv1%2F219%2F73%2F2302%2F149706384.jpg"></image>
					<view class="view">
						<text class="bag">对新领域保持好奇，多结交新朋友</text>
						<view class="small"><view>实付：<text class="y">99.9颜值豆</text></view><text class="z" @click="Logistical">物流信息</text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="mask" v-show="isShow">
			<view class="box">
				<text class="text1">快递名称</text>
				<text class="text2">顺丰快递</text>
				<text class="text3">快递单号</text>
				<text class="text4">584564813284</text>
				<button @click="off">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				placeholderSrc: '../../static/images/common/abc.png',
				idx: 1,
				//物流弹框显隐开关
				isShow: false
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
			},
			//点击显示物流弹窗
			Logistical() {
				this.isShow = true;
			},
			//关闭物流弹框
			off() {
				this.isShow = false;
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
			border-bottom: 1px solid #6f6f6f;
			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				text {
					font-size: 24upx;
					color: #5a5a5a;
				}
				.success {
					&:before {
						.iconfont;
						content: '\e658';
						font-size: 26upx;
						color: #7cbf79;
						font-weight: bold;
						margin-right: 10upx;
					}
				}
			}
			.bottom {
				margin-top: 30upx;
				display: flex;
				image {
					width: 113upx;
					height: 113upx;
					border-radius: 10upx;
				}
				.view {
					margin-left: 20upx;
					display: flex;
					flex-direction: column;
					.bag {
						font-size: 32upx;
						font-weight: 700;
						margin-bottom: 20upx;
						margin-top: 10upx;
					}
					.small {
						font-size: 26upx;
						color: #979797;
						font-weight: 700;
						display: flex;
						justify-content: space-between;
						.y {
							font-size: 24upx;
							color: #fd9938;
						}
						.z {
							font-size: 22upx;
							color: #fd9938;
							padding: 7upx 30upx;
							box-sizing: border-box;
							border: 1upx solid #fd9938;
							border-radius: 10upx;
						}
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
	.mask {
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		position: absolute;
		background-color: rgba(0, 0, 0, .5);
		z-index: 9;
		.box {
			width: 342upx;
			height: 342upx;
			background-color: #fff;
			border-radius: 20upx;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -171upx;
			margin-top: -171upx;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			z-index: 10;
			.text1, .text3 {
				margin-top: 30upx;
				font-size: 34upx;
				color: #fd9938;
				border-bottom: 1upx solid #ed824c;
				padding-bottom: 8upx;
			}
			.text2, .text4 {
				margin-top: 10upx;
				font-size: 26upx;
				color: #868686;
			}
			button {
				width: 179upx;
				height: 41upx;
				line-height: 41upx;
				border-radius: 10upx;
				background-color: #ed824c;
				color: #fff;
				font-size: 26upx;
				margin-top: 25upx;
			}
		}
	}
</style>
