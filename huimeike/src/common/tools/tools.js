//文本省略号封装轮子
const cutString = (str, len) => {
	if(str.length >= len) {
		return str.substring(0,len) + "...";
	}else {
		return str;
	}
}

export default {
	cutString
}