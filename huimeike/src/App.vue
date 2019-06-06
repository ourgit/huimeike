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

</style>
