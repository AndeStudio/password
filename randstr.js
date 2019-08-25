/**
 * randstr.js
 * Ande.Studio
 **/

function randstr(args='snul8'){
/**
 *s:special character特殊字符
 *n:number数字
 *u:upper case大写字母
 *l:lower case小写字母
 *数字8用作控制生成随机字符的长度,也可以是其他数字
 *默认参数snul8，生成8位随机字符串，包含大小写字母数字和特殊字符
 **/
	var lower = 'abcdefghijklmnopqrstuvwxyz';
	var number = '0123456789';
	var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';//有些特殊字符如'和\要加\转义

	var strs = '';//用作母串载体
	var str = '';//用作随机字串载体
	var num= args.replace(/[^0-9]/ig,"");//取得args中的数字，作密码长度

	if(args.search("l")!=-1){
		strs += lower;
	}
	if(args.search("n")!=-1){
		strs += number;
	}
	if(args.search("u")!=-1){
		strs += upper;
	}
	if(args.search("s")!=-1){
		strs += special;
	}

	var len = strs.length;

	for (i=0; i<num; i++){
		j = Math.floor(Math.random()*len);
		str += strs[j]
	}

	return str;
}
