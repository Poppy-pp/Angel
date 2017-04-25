window.onload = function(){
	var oSec = document.getElementById("sec1");
	var aInput = oSec.getElementsByTagName("input");
	var inPassword = /[a-zA-Z0-9_-]{6,16}/g;
	var oNext = document.getElementById("next");
	var arr1 = [];
	var oBtn = document.getElementById("btn1");
	// 验证
	var oBtnyanzheng = document.getElementById("number1");
	var num;

	function random_str(length){
	    var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    ALPHABET += "abcdefghijklmnopqrstuvwxyz";
	    ALPHABET += "0123456789";
	    var str = "";
	    for( var i = 0;i<length;++i){
	      	var rand = Math.floor(Math.random()*ALPHABET.length);
	       	str += ALPHABET.substring(rand,rand+1);
	    }
	    return str;
	}
	oBtnyanzheng.onclick = function(){
	    num = random_str(4);
	    oBtnyanzheng.innerHTML = num;
	}

	aInput[0].onblur = function(){

		if(aInput[0].value !== ""){

	        if(aInput[0].value == num){
	            arr1.push(0);
	        }
	        else if(aInput[0].value !== num){
	            alert("验证码不正确");
	        }
	    }
	}

	//旧密码
	aInput[1].onblur = function(){
		if(aInput[1].value !== ""){

	        if(aInput[1].value.match(inPassword)){
	          
	            arr1.push(1);
	        }
	        else if(!aInput[1].value.match(inPassword)){
	            
	            alert("请输入6-16位字母与数字组合的密码");
	           
	        }
	    }
	}

	//新密码
	aInput[2].onblur = function(){
		if(aInput[2].value !== ""){

	        if(aInput[2].value.match(inPassword)){
	          
	            arr1.push(2);
	        }
	        else if(!aInput[2].value.match(inPassword)){
	            
	            alert("请输入6-16位字母与数字组合的密码");
	           
	        }
	    }
	}
	//密码确认
	aInput[3].onblur = function(){
	    if(aInput[3].value !== ""){

	        if(aInput[3].value == aInput[2].value){
	            arr1.push(3);
	        }
	        else if(aInput[3].value !== aInput[2].value){
	            alert("两次输入密码不一致");
	        }
	    }
	}

	oBtn.onclick = function(){
		if(arr1.indexOf(0)>=0&&
			arr1.indexOf(1)>=0&&
			arr1.indexOf(2)>=0&&
			arr1.indexOf(3)>=0){
			window.open("我的.html","_self");
		}else{
			alert("请重新填写您的信息！");
		}
	}

}