const PubFuc = {
	// 秒格式化化成00:00的格式
	secondFormact:(second)=>{
		var sec = second % 60;
		var min = Math.floor(second / 60);
		if(min.toString().length < 2){
			min = '0' + min;
		}
		if(sec.toString().length < 2){
			sec = '0' + sec;
		}
		return min+':' + sec
	}
}
export default PubFuc