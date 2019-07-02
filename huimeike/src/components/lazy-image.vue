<!-- 图片懒加载组件 -->
<template>
	<view class="lazy-image">
		<image class="real-image" @load="onLoaded" :src="realSrc"></image>
		<view :class="loaded?'loaded':''">
			<image :src="placeholdSrc" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			placeholdSrc:{
				type:String,
				default:""
			},
			realSrc:{
				type:String,
				default:""
			}
		},
		data(){
			return {
				loaded:false
			}
		},
		methods:{
			onLoaded(){
				this.loaded = true
			}
		}
	}
</script>

<style lang="less" scoped>
	.lazy-image{
		height: 100%;
		width: 100%;
		position: relative;
		image{
			width: 100%;
			height: 100%;
		}
		view{
			background-color: #eee;
			position: absolute;
			z-index: 2;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			transition: opacity 0.4s linear;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.loaded{
			opacity: 0;
		}
	}
</style>
