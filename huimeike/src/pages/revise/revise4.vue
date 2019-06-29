<template>
	<view class="revise">
		<textarea class="text" maxlength="30" v-model="qm" />
		<text class="numberV">{{qm.length}}/30</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qm: ''
			}
		},
		onLoad() {

		},
		methods: {
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					/* 修改姓名接口请求 */
					this.$request.ReviseSignature({
						qm: this.qm
					}).then(res =>{
						res = JSON.parse(res);
						this.$msg(res.msg)
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/set/set'
							})
						},1500)
					},err =>{
						console.log(err)
					})

				}
			}
		}
	}
</script>

<style lang="less">
	.revise {
		background-color: #fff;
		position: relative;
		.text {
			width: 100%;
			height: 200upx;
			box-sizing: border-box;
			padding: 40upx;
		}
		.numberV {
			position: absolute;
			right: 0;
			bottom: 0;
			font-size: 30upx;
		}
	}

</style>
