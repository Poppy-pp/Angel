window.onload = function(){
	var oSec = document.getElementById("sec1");
	var aInput = oSec.getElementsByTagName("input");
	var inPhone =/^1(3|4|5|7|8)\d{9}$/g;
	var inPassword = /[a-zA-Z0-9_-]{6,20}/g;
	var lastBtn = document.getElementById("btn1");
	var arr1 = [];

	// 账号
	aInput[0].onblur = function(){

		if(aInput[0].value !== ""){

	        if(aInput[0].value.match(inPhone)){
	            arr1.push(0);
	        }
	        else if(!aInput[0].value.match(inPhone)){
	            alert("请重新输入");
	        };
    	}
	}

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

	aInput[1].onblur = function(){

		if(aInput[1].value !== ""){

	        if(aInput[1].value == num){
	            arr1.push(1);
	        }
	        else if(aInput[1].value !== num){
	            alert("验证码不正确");
	        }
	    }
	}

	//密码
	aInput[2].onblur = function(){
		if(aInput[2].value !== ""){

	        if(aInput[2].value.match(inPassword)){
	          
	            arr1.push(2);
	        }
	        else if(!aInput[2].value.match(inPassword)){
	            
	            alert("请输入6-20位字母与数字组合的密码");
	           
	        }
	    }
	}

	lastBtn.onclick = function(){
		if(arr1.indexOf(0)>=0&&
			arr1.indexOf(1)>=0&&
			arr1.indexOf(2)>=0){
			alert(1);
		}else{
			alert("请填将您的信息填写完整！");
		}
	}

	

}