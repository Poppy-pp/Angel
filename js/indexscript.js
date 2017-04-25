/**
 * 
 * @authors Your pulin (you@example.org)
 * @date    2017-01-16 16:31:58
 * @version $Id$
 */

var index=document.getElementById("index");
var find=document.getElementById("find");
var mall=document.getElementById("mall");
var my=document.getElementById("my");
var iAll=document.getElementById("footer").getElementsByTagName("i");//获取所有i标签
// console.log(iAll);


iAll[0].style.color="#11A8BB";//默认“首页”为蓝色选中状态

function change(obj){
for(var i = 0; i < iAll.length; i++){
	iAll[i].index = i;
	if (iAll[i].style.color=="#11A8BB") {
		window.history.go(0);// 刷新界面
	}
	else {
	 	iAll[i].style.color="#11A8BB";
	}
	obj.style.color="#11A8BB";
}


}


// 返回按钮
function goback(){
	window.history.back();
}