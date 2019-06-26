import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var state =  uni.getStorageSync('state')?uni.getStorageSync('state'):{
	token:'',
	phone:'',
	Avatar: ''
}
const store = new Vuex.Store({
    state,
    mutations: {
		//设置vuex的token
		SetUserInfo(state, data) {
		state.token = data.token;
		state.phone = data.phone;
		},
		//更新用户头像
		SetAvatar(state,data) {
			state.Avatar = data;
			console.log(state.Avatar)
		}		
    }
})

export default store