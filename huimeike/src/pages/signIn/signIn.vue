<template>
	<view class="signIn">
		<view class="box" :style="{ backgroundImage:'url('+BG+')'}">
			
		</view>
	</view>
</template>

<script>
	import {bg} from '@/static/base64/signIn/bg.js';
	export default {
		data() {
			return {
				BG: bg
			}
		},
		onLoad(options) {
			console.log(options.hyid)
			console.log(options.ccid)
			/* 获取个人中心请求 */
			this.$request.SweepCode({
				hyid: options.hyid,
				ccid: options.ccid
			}).then(res =>{
				res = JSON.parse(res);
				console.log(res)
			},err =>{
				console.log(err)
			})
		}
	}
</script>

<style lang="less" scoped>
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
		}
	}
</style>
