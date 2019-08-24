function gen(args='nul8'){//密码生成
	if(url = location.search){
		args = url.substr(1);
		str = randstr(args);
	}else{
		str = randstr(args);
	}
	document.getElementById("target").value = str;//将str写入目标元素赋值
	return str;
}

function copy(obj){//复制 data-clipboard-target实现，复制过程可见
	var clipboard = new ClipboardJS("#"+obj.id)
}

function genCopy(obj){//生成加复制 data-clipboard-text实现，复制过程不可见
	copy(obj);
	document.getElementById(obj.id).setAttribute("data-clipboard-text",gen()); 
}

function save(){//保存

}
window.onload = function(){//载入调用
	gen();
}
