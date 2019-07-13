	import Vue from 'vue';
	import store from '../../store/index.js';
	/*
	* @parm url string  短url
	* @parm pram Object 传入参数
	* @parm CheckToken boolen 令牌验证
	* @parm ShowLoading  boolen 请请求是否显示loading
	* @parm Methods  string 请求协议默认为get
	* @pram ShowMsg 请求完成是否弹出提示信息
	*/    
	export default {
	
		Fetch:function (url,pram = {},Methods="POST",CheckToken=true,NeedPhone=true,ShowLoading=true,ShowMsg=true){

			if(ShowLoading){
				uni.showLoading({
					title: '请稍候...'
				})
			}
			//如果token存在，将vuex中在登陆页同步到的token赋值给请求参数token，也可以将它放在CheckToken函数里
			if(CheckToken){
				pram.token = store.state.token;
			}
			//同理
			if(NeedPhone){
				pram.phone =  store.state.phone;
			}
			pram.client_type = 'h5';

		    pram.client_type = 'wx';

			pram.client_type = 'app';

		return new Promise((resolve,reject)=>{
				uni.request({
				url:url,
				data: pram,
				dataType: 'json',
				method:Methods,

				success:(res)=>{

					if(ShowLoading){
						uni.hideLoading();
					}
					if (res.statusCode == 200) {
						resolve(res.data);
					if(JSON.parse(res.data).code === 1) {
						if(JSON.parse(res.data).msg) {
							uni.showToast({
								title: `${JSON.parse(res.data).msg}`,
								icon: "none"
							})
						}
						resolve(res.data.msg);
						//传入vuex设置的token和手机号
						let data = {token:store.state.token,phone:store.state.phone}
						store.commit('SetUserInfo',data)


					}else if(JSON.parse(res.data).code === -1) {
						uni.showToast({
							title: `${JSON.parse(res.data).msg}`,
							icon: "none"
						})
						resolve(res.data.msg);
					}
					else if(JSON.parse(res.data).code === -2) {
						uni.showToast({
							title: `${JSON.parse(res.data).msg}`,
							icon: "none"
						})
						resolve(res.data.msg);						
					}
					//也可以将它放在CheckToken函数里做判断
					else if(JSON.parse(res.data).code === 201) {
						
						uni.showLoading({
							title: `${JSON.parse(res.data).msg}`,
							icon: "none"
						})
						resolve(res.data.msg);
						store.commit('SetUserInfo','')
						uni.removeStorageSync('state');
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/login/login'
							})
							uni.hideLoading()
						}, 1500);
					}
				}
															
				 else if(res.statusCode == 404){
					 if(ShowMsg){
					 uni.showToast({
					 	title:'访问的资源不存在',
					 	icon: 'none'
					 })
					 }
				 }
				 else if(res.statusCode == 500){
					 if(ShowMsg){
					 uni.showToast({
						title:'服务器异常请稍后再试',
						icon: 'none'
					 })
					 }
				 }else{
					 if(ShowMsg){
					 uni.showToast({
						title:'未知错误请稍后重试',
						icon: 'none'
					}) 
					}
				 }
				},
				fail: (res) => {
					if(ShowLoading){
					uni.hideLoading();
					}
					if(ShowMsg){
					uni.showToast({
						title:res.msg,
						icon: 'none'
					})
					}
					reject(res.msg);
				}
			})
		})
	},
	CheckToken:function(){
		
	}
}