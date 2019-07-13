<template>
	<view class="signIn">
		<view class="box" :style="{ backgroundImage:'url('+BG+')'}">
			<view class="box1">
				<text class="big">{{signInInfo.hyname}}</text>
				<text class="small">课程时间：{{timeNow}}</text>
			</view>
			<view class="box2">
				<view>
					<image :src="imgUrl2 + signInInfo.img"></image>
					<text class="jsname">{{signInInfo.name}}</text>					
				</view>
				<view style="margin-top: 25upx;">
					<text class="name">电话</text>
					<text>{{signInInfo.phone}}</text>
				</view>
				<view style="margin-top: 15upx;">
					<text class="ccname">场次</text>
					<text>{{signInInfo.hyccname}}</text>
				</view>				
				<view style="margin-top: 15upx;">
					<text class="seat">座位</text>
					<text>{{signInInfo.zwh}}</text>
				</view>
				<text class="mask">学习档案</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {bg} from '@/static/base64/signIn/bg.js';
	export default {
		data() {
			return {
				imgUrl: this.$imgUrl.imgUrl,
				imgUrl2: this.$imgUrl.imgUrl2,
				BG: bg,
				signInInfo: {}
			}
		},
		computed: {
			timeNow () {
				return this.$moment().format("YYYY年MM月DD日");
			}
		},
		onLoad(options) {
			/* 获取个人中心请求 */
			this.$request.SweepCode({
				hyid: options.hyid,
				ccid: options.ccid
			}).then(res =>{
				res = JSON.parse(res)
				this.signInInfo = res;
			},err =>{
				console.log(err)
			})
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	view {
		box-sizing: border-box;
	}
	.iconfont {
		font-family: 'iconfont' !important;
	}
	.signIn {
		width: 100%;
		height: 100%;
		background: #000;
		position: relative;
		.box {
			width: 100%;
			height: 100%;
			background-size: 100% 100%;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			.box1 {
				width: 100%;
				height: 310upx;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-start;
				color: #fff;
				padding-left: 30upx;
				.big {
					font-size: 30upx;
					color: #fff;
					font-weight: bold;
					margin-bottom: 15upx;
				}
				.small {
					margin-bottom: 20upx;
				}
			}
			.box2 {
				margin-top: 33upx;
				padding: 28upx 90upx;
				width: 100%;
				height: 400upx;
				position: relative;
				view {
					display: flex;
					align-items: center;
					image {
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
						margin-right: 21upx;
					}
					.jsname {
						font-size: 32upx;
						color: #fff;
						font-weight: bold;
					}
					.name {
						color: #503405;
						margin-right: 47upx;
						&:before {
							.iconfont;
							content: '\e602';
							font-size: 24upx;
							margin-right: 15upx;
						}
					}
					.ccname {
						color: #503405;
						margin-right: 47upx;
						&:before {
							.iconfont;
							content: '\e609';
							font-size: 24upx;
							margin-right: 15upx;
						}						
					}
					.seat {
						color: #503405;
						margin-right: 47upx;
						&:before {
							.iconfont;
							content: '\e613';
							font-size: 24upx;
							margin-right: 15upx;
						}						
					}
				}
				.mask {
					width: 160upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					color: #fff;
					border-bottom-right-radius: 10upx;
					border-bottom-left-radius: 10upx;
					position: absolute;
					right: 100upx;
					top: -10upx;
					background: #caa473;
				}
			}
		}
	}
</style>
