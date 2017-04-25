window.onload = function(){
	var oSec = document.getElementById("sec1");
	var aInput = oSec.getElementsByTagName("input");
	var inPassword = /[a-zA-Z0-9_-]{6,16}/g;
	var oNext = document.getElementById("next");
	var arr1 = [];

	// 账号
	aInput[0].onblur = function(){
		if(aInput[0].value !== ""){

	        if(aInput[0].value.match(inPassword)){
	          
	            arr1.push(0);
	        }
	        else if(!aInput[0].value.match(inPassword)){
	            
	            alert("请输入6-16位字母与数字组合的密码");
	           
	        }
	    }
	}

	//密码确认
	aInput[1].onblur = function(){
	    if(aInput[1].value !== ""){

	        if(aInput[1].value == aInput[0].value){
	            arr1.push(1);
	        }
	        else if(aInput[1].value !== aInput[0].value){
	            alert("密码不正确！");
	        }
	    }
	}

	oNext.onclick = function(){
		if(arr1.indexOf(0)>=0&&
			arr1.indexOf(1)>=0){
			window.open("登录.html","_self");
		}else{
			alert("请将信息填写完整！");
		}
	}

}