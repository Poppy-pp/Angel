window.onload = function(){
	var oSec1 = document.getElementById("sec1");
	var oBk = document.getElementById("bk");
	var oHiddiv = document.getElementById("hiddiv");
	var oPas = document.getElementById("pas");
	var oBtn = document.getElementById("btn");
	var inPas = /^[0-9]{6}$/;
	var o = true;
	var i = true;

	oSec1.onclick = function(){
		oBk.style.display = "block";
		oHiddiv.style.display = "block";
		o = false;
	}

	oBk.onclick = function(){
		oBk.style.display = "none";
		oHiddiv.style.display = "none";
		o = true;
	}

	oBtn.onclick = function(){
		if(oPas.value == ""){
			alert("请输入密码");
		}
		else if(oPas.value !== ""){
			if(oPas.value.match(inPas)){
				i=false;
				window.open("报告详情.html","_self");
			}
			else if(!oPas.value.match(inPas)){
				alert("请输入6位数字密码");
			}
		}
	}
}