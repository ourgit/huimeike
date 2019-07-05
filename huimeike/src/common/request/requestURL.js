/**
 * 基础的页面请求地址
 */
const baseurl = "http://hmk.qmwhcb.cn/api";

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
	set: `${baseurl}/Personal/sz`,
	//添加地址
	AddAddress: `${baseurl}/dzapi/add_address`,
	//地址管理列表
	AddressList: `${baseurl}/Dzapi/dzlist`,
	//获取单个地址
	GetAddress: `${baseurl}/dzapi/address_find`,
	//编辑地址
	EditAddress: `${baseurl}/dzapi/editor_address`,
	//删除地址
	DelAddress: `${baseurl}/dzapi/del_address`,
	//修改用户头像
	ModifyAvatar: `${baseurl}/Personal/photo`,
	//微信支付
	WXZF: `${baseurl}/Wxh/Wxh`,
	//学员分享
	StudentSharing:	`${baseurl}/Xyfx/xxxd`,
	//修改姓名
	ModifyName: `${baseurl}/Personal/mod_name`,
	//修改职位
	ReviseJob:	`${baseurl}/Personal/mod_zw`,
	//修改手机号
	RevisePhone: `${baseurl}/Personal/mod_phone`,
	//修改个性签名
	ReviseSignature: `${baseurl}/Personal/mod_signature`,
	//商城接口
	shop: `${baseurl}/Shopapi/sc`,
	//行业动态详情
	IndustryDetails: `${baseurl}/Index/htdtxq`,
	//行业动态更多
	IndustryMore: `${baseurl}/Index/htdt`,
	//讲师介绍
	lecturer: `${baseurl}/teacher/taecher_details`,
	//扫码接口
	SweepCode: `${baseurl}/hycc/hyxx/`,
	// 线下课详情
	OfflineCourse: `${baseurl}/Hyapi/hyxq`
}