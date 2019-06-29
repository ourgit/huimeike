<template>
	<view class="revise">
		<input type="text" v-model="account" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: ''
			}
		},
		onLoad(options) {
			this.account = options.account;
			console.log(this.account)
		},
		methods: {
			//点击导航栏 buttons 时触发
			onNavigationBarButtonTap(e) {
				const index = e.index;
				if (index === 0) {
					/* 修改姓名接口请求 */
					this.$request.RevisePhone({
						xinphone: this.account
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
		height: 115upx;
		background-color: #fff;
		input {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding-left: 40upx;
		}
	}

</style>
