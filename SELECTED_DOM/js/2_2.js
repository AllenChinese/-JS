var unselCts=[],selCts=[];//定义未选中国家和选中国家的空数组
//将unsel元素中的所有国家名称填充到unselCts中
//unsel的内容去掉和结尾的空字符，再掐头去尾，按？切割
unselCts=unsel.innerHTML
			  .replace(/^\s+|\s+$/g,"")
			  .slice(8,-9)
			  .split(/<\/option>\s*<option>/);

function move(btn){
	switch(btn.innerHTML){//判断btn的内容
		case "&gt;&gt;"://是>>,就将unselCts拼接到selCts结尾，在保存回selCts中
		selCts=selCts.concat(unselCts);
		unselCts=[];//清空unselCts
		break;//结束
		case "&lt;&lt;"://是<<，就将selCts拼接到unselCts结尾，在保存回unselCts中
		unselCts=unselCts.concat(selCts);
		selCts=[];//清空selCts
		break;//结束
		case "&gt;"://是>,查找id为unsel下的所有option，保存在变量opts中
		var opts=document.querySelectorAll("#unsel>option");
		for(var i=opts.length-1;i>=0;i--){//反向遍历opts中每个opt
			//如果当前opt的selected为true
			if (opts[i].selected) {
				//删除unselCts数组中当前位置的元素，再将删除的元素拼接到selCts中
				selCts.push(unselCts.splice(i,1)[0]);//splice删除并添加
			}
		}//结束
		break;
		case "&lt;"://是<,就查找id为sel下的所有option,保存在变量opts中
		opts=document.querySelectorAll("#sel>option");
		for(var i=opts.length-1;i>=0;i--){//反向遍历opts中每个opt
		//如果当前opt的selected为true
		if (opts[i].selected) {
			//删除selCts数组中当前位置的元素，再将删除的元素拼接到unselCts中
			unselCts.push(selCts.splice(i,1)[0]);
		 }
	  }
}

unselCts.sort();// 将unselCts按国家名称升序排列
selCts.sort();// 将selCts按国家名称升序排列
var unsel=document.getElementById("unsel");// 查找id为unsel的元素，保存在unsel中
updataSel(unselCts,unsel);// 将unselCts数组的内容更新到unsel元素中
var sel=document.getElementById("sel");// 查找id为sel的元素，保存在sel中
updataSel(selCts,sel);// 将selCts数组的内容更新到sel元素中
}

function updataSel(arr,sel){
  //设置sel的内容为:arr按?拼接，补上开头和结尾
  sel.innerHTML=arr.length>0?("<option>"+
    arr.join("</option><option>")
    +"</option>"):"";
}