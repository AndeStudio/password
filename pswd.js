/**
pswd.js
Ande.Studio
v3 20190826
 **/

function gen(args='nul8'){//密码生成
	if(url = location.search){
		args = url.substr(1);
		str = randstr(args);
	}else{
		str = randstr(args);
	}
	document.getElementById("target").value = str;//将str写入目标元素赋值
	document.getElementById("textarea_").value = str + '\n' + document.getElementById("textarea_").value;//将str追加写入目标文本域
	console.log(str);
	return str;
}

function copy(obj){//复制 
	var clipboard = new ClipboardJS("#"+obj.id);
	document.getElementById(obj.id).setAttribute("data-clipboard-target","#target");//data-clipboard-target，复制可见
}

function genCopy(obj){//生成加复制 
	gen();
	copy(obj);
	//document.getElementById(obj.id).setAttribute("data-clipboard-text",gen());//data-clipboard-text，复制过程不可见。假设在这条代码之前执行gen();copy(obj);会gen()2次，但只会copy最后一次gen()
	//data-clipboard-target和data-clipboard-text同时存在的话，text将优先target会失效。
	
}

function save(){//保存

}
window.onload = function(){//载入调用
	gen();
/**
	var obj = new Object();
	obj['id'] = 'genCopy_'
	genCopy(obj);
	手工构造一个obj,指定obj['id']='genCopy_'或者obj.id='genCopy_',以期在载入时调用genCopy(obj),实际上确实调用了且生成了密码且没有报错，但却不会实现复制。
	这是值得注意的问题，具体的机制有待研究。
**/
}
