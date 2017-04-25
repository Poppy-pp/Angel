window.onload=function (){
	var oBtn = document.getElementById("btn1");
	oBtn.onclick = function(){
		window.open("login.html","_self");
	}

	var oArticle=document.getElementsByTagName("article")[0];
	var aSec=oArticle.getElementsByTagName("section");
	for(var i = 0, length1 = aSec.length; i < length1; i++){
		aSec[i].onclick = function(){
			var index = Array.prototype.indexOf.call(aSec, this);
			if (index==2 || index==4 || index==1 ) {
			alert("暂无数据");
		}
	}
}}
