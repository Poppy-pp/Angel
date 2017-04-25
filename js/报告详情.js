window.onload = function (){
	var oIndex = document.getElementById("oindex");
	// 刷新本页
	oIndex.onclick = function (){
		window.history.go(0);
	};
}