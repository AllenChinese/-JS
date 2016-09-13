function getFocus(txt){
	//设置txt的class为txt_focus
	txt.className="txt_focus";
	//找到旁边的div，清除其class
	txt.parentNode
		.nextElementSibling
		.firstElementChild
		.className="";
}

function valiName(txt){
	//定义正则reg,10个以内的字母，数字或者下划线的组合，不可不填
	var reg=/^\w{1,10}$/;
	//调用vali,传入txt和reg作为参数，返回调用的结果
	return vali(txt,reg);
}

function vali(txt,reg){
	//清除txt的class
	txt.className="";
	//找到旁边的div
	var div=txt.parentNode
			   .nextElementSibling
			   .firstElementChild;
	//如果用reg，验证txt的value,通过
	if(reg.test(txt.value)){
		//设置div的class为vali_success
		div.className="vali_success";
		//返回true
		return true;
	} else {//否则
		//设置div的class为vali_fail
		div.className="vali_fail";
		//返回false
		return false;
	}
}

function valiPwd(txt){
	//定义正则reg，6位数字
	var reg=/^\d{6}$/;
	//调用vali，传入txt和reg作为参数，返回调用结果
	vali(txt,reg);
}