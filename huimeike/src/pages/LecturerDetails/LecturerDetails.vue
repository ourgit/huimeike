<template>
	<view class="editaddr">
		<view class="container">
			<view class="banner">
				<view class="bg-img bg-mask flex align-center" :style="{backgroundImage: 'url('+js_img+')'}" style="height: 414upx;">
					<view class="padding-xl text-white">
						<view class="padding-xs text-xxl text-bold">
							钢铁之翼
						</view>
						<view class="padding-xs text-lg">
							Only the guilty need fear me.
						</view>
					</view>
				<view class="focuses" @click="focuses">
					<text v-if="!focus">+关注</text>
					<text v-if="focus">已关注</text>
				</view>
				</view>
			</view>
			<view class="nav">
				<view class="row">
					<text class="bold">364讲</text>
					<text class="nobold">总讲数</text>
				</view>
				<view class="row">
					<text class="bold">10864人</text>
					<text class="nobold">加入学习</text>					
				</view>
			</view>
		</view>
	</view>
</template>

<script>		
	export default {
		components: {

		},			
		data() {
			return {
				js_img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
				focus: 0
			}
		},
		onLoad() {
			this.$request.lecturer().then(res =>{
				res = JSON.parse(res);
				console.log(res)
			},err =>{
				console.log(err)
			})
		},
		methods: {
			focuses() {
				this.focus = !this.focus;
			}	
		}
	}
</script>

<style lang="less" scoped>
	view {
		box-sizing: border-box;
	}
	//公共样式提取
	.iconfont {
		font-family: 'iconfont' !important;
	}
	.editaddr {
		.banner {
			position: relative;
			.flex {
				align-items: flex-end;
			}
			.focuses {
				position: absolute;
				bottom: 60upx;
				right: 50upx;
				text {
					padding: 9upx 30upx;
					border: 1upx solid #f86e25;
					border-radius: 40upx;
					color: #f86e25;
			
				}
			}
		}
		.nav {
			background-color: #f7f7f7;
			display: flex;
			justify-content: space-between;
			.row {
				width: 50%;
				margin: 35upx 0;
				border-right: 1upx solid #e4e4e4;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.bold {
					font-size: 34upx;
					font-weight: bold;
				}
				.nobold {
					color: #848388;
					font-size: 26upx;
				}
			}
		}
	}
</style>

