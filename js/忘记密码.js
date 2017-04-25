window.onload = function(){
	var oSec = document.getElementById("sec1");
	var aInput = oSec.getElementsByTagName("input");
	var inPhone =/^1(3|4|5|7|8)\d{9}$/g;
	var oNext = document.getElementById("next");
	var arr1 = [];

	// 账号
	aInput[0].onblur = function(){

		if(aInput[0].value !== ""){

	        if(aInput[0].value.match(inPhone)){
	            arr1.push(0);
	        }
	        else if(!aInput[0].value.match(inPhone)){
	            alert("账号格式不正确");
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

	oNext.onclick = function(){
		if(arr1.indexOf(0)>=0&&
			arr1.indexOf(1)>=0){
			window.open("forget2.html","_self");
		}else{
			alert("请将信息填写完整！");
		}
	}

}