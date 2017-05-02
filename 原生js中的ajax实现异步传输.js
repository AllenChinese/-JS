var ajaxGet = function(url,callback){
	var _xhr = null;
	if (window.XMLHttpRequest) {
		_xhr = new window.XMLHttpRequest();//new 一个新的请求
		}else if(window.ActiveXObject){
			_xhr = new ActiveXObject('Msxml2.XMLHTTP');//表示使用的浏览器
		}
		_xhr.onreadystatechange = function(){
		/*当readyState为4时表示请求已完成，且响应已就绪，也就是响完成了。当staus==200,表示连接ok*/
			if (_xhr.readyState == 4 && _xhr.status == 200) {
                   callback(JSON.parse(_xhr.responseText));
			}
		} 
		_xhr.open('get', url, false);//get方式建立交换，URL，false表示是异步传输，默认是同步传输
		_xhr.send(null);
}
//运用XMLHttpRequest和web服务器进行数据的异步交换。
