var oUl = document.getElementById("ul1");
var aLi = oUl.getElementsByTagName("li");

for (var i = 0;i <aLi.length; i++) {
	aLi[i].onclick = function(){
		window.open("商品.html","_self");
	}
}