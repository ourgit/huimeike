<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import "./static/iconfont/iconfont.css";
	//公共富文本样式
	@import url("/components/gaoyia-parse/parse.css");
	page {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		background: #f1f1f1;
	}
	.swiper .uni-swiper-dots-horizontal .uni-swiper-dot {
		width: 21upx;
		height: 3upx;
		background-color: #fff;
	}
	.swiper .uni-swiper-dots-horizontal  .uni-swiper-dot-active {
		background: #ff802b;
	}
	/*  #ifdef H5  */
	/* 去掉输入框默认黄色背景 */
	input:-webkit-autofill {
		transition:background-color 5000s ease-in-out 0s;
		background-color: #FAFFBD;
		background-image: none;
		color: #000;
		-webkit-box-shadow: 0 0 0 1000px white inset;
	}
	input{
		background-color:rgba(255,255,255,0.6);
	}
	/*  #endif  */
</style>
