<template>
	<view class="editaddr">
		<view class="container">
			<view class="banner">
				<view class="bg-img bg-mask flex align-center" v-if="IndustryDetailsData.details" :style="{backgroundImage: 'url('+imgUrl2 + IndustryDetailsData.details.portrait+')'}" style="height: 414upx;">
					<view class="padding-xl text-white">
						<view class="padding-xs text-xxl text-bold">
							{{IndustryDetailsData.details.name}}
						</view>
						<view class="padding-xs text-lg">
							{{IndustryDetailsData.details.gxqm}}
						</view>
					</view>
				<view class="focuses" @click="focuses">
					<text v-if="!focus">+关注</text>
					<text v-if="focus">{{IndustryDetailsData.details.gzrs}}</text>
				</view>
				</view>
			</view>
			<view class="nav">
				<view class="row">
					<text class="bold" v-if="IndustryDetailsData.details">{{IndustryDetailsData.details.zjs}}讲</text>
					<text class="nobold">总讲数</text>
				</view>
				<view class="row">
					<text class="bold" v-if="IndustryDetailsData.details">{{IndustryDetailsData.details.xxrs}}人</text>
					<text class="nobold">加入学习</text>					
				</view>
			</view>
			<view class="content">
				<view>
					<text class="title">老师简介</text>
					<text class="text" v-if="IndustryDetailsData.details">{{IndustryDetailsData.details.jsjj}}</text>
				</view>
				<view style="margin-top: 70upx;">
					<text class="title">课程亮点</text>
					<text class="text" v-if="IndustryDetailsData.details">{{IndustryDetailsData.details.kcld}}</text>
				</view>
				<view style="margin-top: 70upx;">
					<text class="title" style=" margin-bottom: 30upx;">课程列表</text>
					<view class="ul">
						<view class="li" v-for="(item,index) in IndustryDetailsData.kclist" :key="index" @click="kcdetail(item.id)">{{item.title}}</view>
					</view>
					<text class="more" @click="more">查看更多</text>
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
				imgUrl: this.$imgUrl.imgUrl,
				imgUrl2: this.$imgUrl.imgUrl2,
				js_img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
				focus: 0,
				//课程列表
				list: [{
					id: 1,
					kcname: "智能时代的行动指南"
				},{
					id: 2,
					kcname: "智能时代的行动指南"
				},{
					id: 3,
					kcname: "智能时代的行动指南"
				},{
					id: 4,
					kcname: "智能时代的行动指南"
				},{
					id: 5,
					kcname: "智能时代的行动指南"
				},{
					id: 6,
					kcname: "智能时代的行动指南"
				},{
					id: 7,
					kcname: "智能时代的行动指南"
				},{
					id: 8,
					kcname: "智能时代的行动指南"
				},{
					id: 9,
					kcname: "智能时代的行动指南"
				},{
					id: 10,
					kcname: "智能时代的行动指南"
				},{
					id: 11,
					kcname: "智能时代的行动指南"
				},{
					id: 12,
					kcname: "智能时代的行动指南"
				}],
				IndustryDetailsData: {}
			}
		},
		onLoad(options) {
			this.$request.lecturer({
				id: options.id
			}).then(res =>{
				res = JSON.parse(res);
				this.IndustryDetailsData = res;
				if(this.IndustryDetailsData.is_gz) {
					this.focus = this.IndustryDetailsData.is_gz;
					console.log(this.focus)
				}
				console.log(this.IndustryDetailsData)
			},err =>{
				console.log(err)
			})
		},
		methods: {
			focuses() {
				this.focus = !this.focus;
				/* 关注老师 */
				this.$request.focus(
					{
						id: this.IndustryDetailsData.details.id,
						zt: this.focus
					}
				).then(res =>{
					res = JSON.parse(res);
					console.log(res)
				},err =>{
					console.log(err)
				})
			},
			more() {
				this.$msg("暂无更多课程！")
			},
			kcdetail(id) {
				uni.navigateTo({
					url: `/pages/NotPurchased/NotPurchased?id=${id}`
				})
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
		width: 100%;
		height: 100%;
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
		.content {
			padding: 40upx;
			background-color: #fff;
			view {
				display: flex;
				flex-direction: column;
				.title {
					font-size: 38upx;
					font-weight: bold;
				}
				.text {
					margin-top: 40upx;
					font-size: 28upx;
				}
				.ul {
					overflow: hidden;
					background: #f3f4f6;
					border-radius: 10upx;
					.li {
						height: 83upx;
						line-height: 83upx;
						text-indent: 30upx;
						font-size: 26upx;
						border-bottom: 2upx solid #e4e5e7;
					}
				}
				.more {
					font-size: 26upx;
					color: #848484;
					text-align: center;
					margin-top: 20upx;
				}
			}

		}
	}
</style>

