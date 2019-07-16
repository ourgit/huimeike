
<template>
	<view class="contacts">
		<view class="item">
			<view class="title">你的团队正在不断壮大！！！</view>
			<view class="flex">
				<text>今天已有{{contactsData.count}}位新朋友加入！</text>
				<view>
					<view class="cu-avatar-group">
						<view class="cu-avatar round lg"  v-for="(item,index) in contactsData.my_tj" :key="index" v-if="item.head_img" :style="[{ backgroundImage:'url(' + imgUrl2 + item.head_img + ')' }]"></view>
						<view class="renshu">+6</view>
					</view>
				</view>
			</view>
		</view>
		<view class="text">—————  我的介绍人  —————</view>
		<view class="item2" v-if="contactsData.my_js">
				<image :src="imgUrl2 + contactsData.my_js.head_img"></image>			
			<view class="v1">
				<text>{{contactsData.my_js.nickname}}</text>
				<text class="small">{{parseInt(contactsData.my_js.create_time)*1000 | time}}</text>
			</view>
		</view>
		
		<view class="text">—————  我介绍的人  —————</view>
		<view class="item2 t2" v-for="(item,index) in contactsData.my_tj" :key="index">
				<image v-if="item.head_img" :src="imgUrl2 + item.head_img"></image>
				<view class="cu-avatar radius" v-else style="width: 94upx;height: 94upx;">
					<text class="cuIcon-people"></text>
				</view>
			<view class="v1">
				<text>柚子酱</text>
				<text class="small">2019-02-02</text>
			</view>
		</view>	
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl.imgUrl,
				imgUrl2: this.$imgUrl.imgUrl2,
				avatar: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
				],
				contactsData: {}
			}
		},
		onLoad() {
			//顾问案列表请求
			this.$request.connection().then(res =>{
				res = JSON.parse(res);
				console.log(res)
				this.contactsData = res;
			},err =>{
				console.log(err)
			})
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
	.contacts {
		padding: 31upx 41upx;
		box-sizing: border-box;
		.item {
			padding: 40upx;
			box-sizing: border-box;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			.title {
				font-size: 28upx;
				color: #4d6268;
			}
			.flex {
				display: flex;
				align-items: center;
				margin-top: 32upx;
				position: relative;
				text {
					font-size: 24upx;
					color: #acb8bf;
				}
				.img {
					width: 180upx;
					margin-left: 75upx;
					position: relative;
					top: -20upx;
					image {
						width: 60upx;
						height: 60upx;
						border-radius: 50%;
						
					}
					.img1 {
						position: absolute;
						left: 0;
						top: 0;
						z-index: 4;
					}
					.img2 {
						position: absolute;
						left: 30upx;
						top: 0;
						z-index: 3;
					}
					.img3 {
						position: absolute;
						left: 60upx;
						top: 0;
						z-index: 2;
					}
					.num {
						padding: 15upx;
						border-radius: 50%;
						background-color: #f86e25;
						color: #fff;
						position: absolute;
						left: 110upx;
						top: 0;
						z-index: 5;
					}	
				}
				.renshu {
					width: 60upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					border-radius: 50%;
					background-color: #f86e25;
					color: #fff;
					position: absolute;
					right: 110upx;
					top: 0;
				}
			}
		}
		.text {
			height: 62upx;
			line-height: 62upx;
			text-align: center;
			font-size: 26upx;
			
		}
		.item2 {
			display: flex;
			width: 100%;
			margin: 0 auto;
			background-color: #fff;
			padding: 31upx;
			image {
				width: 95upx;
				height: 95upx;
				border-radius: 50%;
			}
			.v1 {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 20upx;
				text {
					font-size: 28upx;
					color: #65767b;
				}
				.small {
					font-size: 20upx;
				}
			}
		}
		.t2 {
			margin-bottom: 10upx;
		}
		.cu-avatar.lg {
			width: 60upx;
			height: 60upx;
		}
	}
</style>
