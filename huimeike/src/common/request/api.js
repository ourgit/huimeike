import requestURL from './requestURL.js'
import request from './fetch.js'
/**
 * 请求API
 */
export default {
    /**
     * 
     * @param {*} 获取数据可以不入参
     */
    // 获取短信验证码接口请求
    getcode: async function (prams) {
        let response = await request.Fetch(requestURL.getcode,prams,'POST',false,false)
        return response;
    },
	//选择身份接口
	getid: async function (prams) {
        let response = await request.Fetch(requestURL.getid,prams,'POST',false)
        return response;		
	},
	//点击注册接口
	register: async function (prams) {
        let response = await request.Fetch(requestURL.register,prams,'POST',false,false)
        return response;		
	},
	//点击登陆接口
	login: async function (prams) {
	    let response = await request.Fetch(requestURL.login,prams,'POST',true,false)
	    return response;		
	},
	//忘记密码接口
	forgot: async function (prams) {
	    let response = await request.Fetch(requestURL.forgot,prams,'POST',true,false)
	    return response;		
	},
	//忘记密码获取验证码接口
	forgotcode: async function (prams) {
	    let response = await request.Fetch(requestURL.forgotcode,prams,'POST',true,false)
	    return response;		
	},
	//两个轮播图接口
	banner: async function (prams) {
	    let response = await request.Fetch(requestURL.banner,prams,'POST',true)
	    return response;		
	},
	//首页数据
	index: async function (prams) {
	    let response = await request.Fetch(requestURL.index,prams,'POST',true)
	    return response;		
	},
	//首页商品
	indexShop: async function (prams) {
		let response = await request.Fetch(requestURL.indexShop,prams,'POST',true)
		return response;		
	},
	//云课堂接口
	cloudClass: async function (prams) {
		let response = await request.Fetch(requestURL.cloudClass,prams,'POST',true)
		return response;		
	},
	//云课堂未购买接口
	NotPurchased: async function (prams) {
		let response = await request.Fetch(requestURL.NotPurchased,prams,'POST',true)
		return response;		
	},
	//音频视频播放接口
	play: async function (prams) {
		let response = await request.Fetch(requestURL.play,prams,'POST',true)
		return response;		
	},
	//收藏接口
	collect: async function (prams) {
		let response = await request.Fetch(requestURL.collect,prams,'POST',true)
		return response;		
	},
	//下载接口
	download: async function (prams) {
		let response = await request.Fetch(requestURL.download,prams,'POST',true)
		return response;		
	},
	//下载接口
	focus: async function (prams) {
		let response = await request.Fetch(requestURL.focus,prams,'POST',true)
		return response;		
	},
	//个人中心
	my: async function (prams) {
		let response = await request.Fetch(requestURL.my,prams,'POST',true)
		return response;		
	},
	//忘记密码
	Modify: async function (prams) {
		let response = await request.Fetch(requestURL.Modify,prams,'POST',true)
		return response;		
	},
	//设置
	set: async function (prams) {
		let response = await request.Fetch(requestURL.set,prams,'POST',true)
		return response;		
	},
	//添加地址
	AddAddress: async function (prams) {
		let response = await request.Fetch(requestURL.AddAddress,prams,'POST',true)
		return response;		
	},
	//地址列表
	AddressList: async function (prams) {
		let response = await request.Fetch(requestURL.AddressList,prams,'POST',true)
		return response;		
	},
	//获取地址
	GetAddress: async function (prams) {
		let response = await request.Fetch(requestURL.GetAddress,prams,'POST',true)
		return response;		
	},
	//编辑地址
	EditAddress: async function (prams) {
		let response = await request.Fetch(requestURL.EditAddress,prams,'POST',true)
		return response;		
	},
	//删除地址
	DelAddress: async function (prams) {
		let response = await request.Fetch(requestURL.DelAddress,prams,'POST',true)
		return response;		
	},
	//修改用户头像
	ModifyAvatar: async function (prams) {
		let response = await request.Fetch(requestURL.ModifyAvatar,prams,'POST',true)
		return response;		
	},
	//微信支付
	WXZF: async function (prams) {
		let response = await request.Fetch(requestURL.WXZF,prams,'POST',true)
		return response;		
	},
	//学员分享
	StudentSharing: async function (prams) {
		let response = await request.Fetch(requestURL.StudentSharing,prams,'POST',true)
		return response;		
	},
	//修改姓名
	ModifyName: async function (prams) {
		let response = await request.Fetch(requestURL.ModifyName,prams,'POST',true)
		return response;		
	},
	//修改职位
	ReviseJob: async function (prams) {
		let response = await request.Fetch(requestURL.ReviseJob,prams,'POST',true)
		return response;		
	},	
	//修改手机号
	RevisePhone: async function (prams) {
		let response = await request.Fetch(requestURL.RevisePhone,prams,'POST',true)
		return response;
	},
	//修改个性签名
	ReviseSignature: async function (prams) {
		let response = await request.Fetch(requestURL.ReviseSignature,prams,'POST',true)
		return response;
	},
	//商城接口
	shop: async function (prams) {
		let response = await request.Fetch(requestURL.shop,prams,'POST',true)
		return response;
	},
	//行业动态详情接口
	IndustryDetails: async function (prams) {
		let response = await request.Fetch(requestURL.IndustryDetails,prams,'POST',true)
		return response;
	},
	//行业动态更多接口
	IndustryMore: async function (prams) {
		let response = await request.Fetch(requestURL.IndustryMore,prams,'POST',true)
		return response;
	},
	//讲师介绍接口
	lecturer: async function (prams) {
		let response = await request.Fetch(requestURL.lecturer,prams,'POST',true)
		return response;
	},
	//扫码接口
	SweepCode: async function (prams) {
		let response = await request.Fetch(requestURL.SweepCode,prams,'POST',true)
		return response;
	},
	//线下课详情
	OfflineCourse: async function (prams) {
		let response = await request.Fetch(requestURL.OfflineCourse,prams,'POST',true)
		return response;
	}	
}