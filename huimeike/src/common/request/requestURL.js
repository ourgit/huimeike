/**
 * 基础的页面请求地址
 */
const baseurl = "http://hmk.qhd58.net/api";

export default {
    // 获取短信验证码接口
    getcode: `${baseurl}/register/yzm`,
	//选择身份接口
	getid: `${baseurl}/register/zcsf`,
	//点击注册接口
	register: `${baseurl}/register/register`,
	//点击登陆接口
	login: `${baseurl}/login/login`,
	//忘记密码接口
	forgot: `${baseurl}/wjmm/wjmm`,
	//忘记密码获取验证码接口
	forgotcode: `${baseurl}/wjmm/yzm`,
	//首页轮播图接口
	banner: `${baseurl}/index/banner`,
	//首页最新课程
	index: `${baseurl}/index/index`,
	//首页商品
	indexShop: `${baseurl}/index/sp_api`,
	//云课堂最新课程接口
	cloudClass: `${baseurl}/YktApi/api`,
	//未购买
	NotPurchased: `${baseurl}/YktApi/yktwgm`,
	//播放视频或音频
	play: `${baseurl}/Yktapi/bf`,
	//收藏接口
	collect: `${baseurl}/Yktapi/sc`,
	//音频/视频下载
	download: `${baseurl}/Yktapi/xz`,
	//关注讲师
	focus: `${baseurl}/teacher/js_focus`,
	//个人中心
	my: `${baseurl}/Personal/grzs`,
	//修改密码
	Modify: `${baseurl}/xgmm/xgmm`,
	//设置
	set: `${baseurl}/Personal/sz`
}