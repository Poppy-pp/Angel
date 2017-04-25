/**
 * 
 * @pulin(you@example.org)
 * @date    2017-03-28 11:51:34
 * @version $Id$
 */
window.onload=function(){

//----------------------------------------------------------------------------预约挂号处------------------------------
	var aInput = document.getElementsByClassName("info_input");
	var inRegist = /^[\u4e00-\u9fa5a-zA-Z]{2,}$/;//姓名正则
	var oDate =/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;//出生日期正则
	var oSec3 = document.getElementById("sec3");//支付方式section
	var aDiv = oSec3.getElementsByTagName("div");//支付方式div
	var aDivImg2 = oSec3.getElementsByClassName("check");//支付方式img
	var arr1 = [];
	var oPay = document.getElementById("pay");//支付按钮

	//姓名
	aInput[0].onblur = function (){
	if (aInput[0].value !="") {//当输入不为空的时候
        		if(!inRegist.exec(aInput[0].value))//如果第0个input值不合要求
        		{
        			alert("请输入2位上汉字或英文字母");
        			aInput[0].value = "";
        		}else{ 
        			arr1.push(0);
        		}
    	}
   	}

	//性别
	aInput[1].onblur = function() {
	if (aInput[1].value !="") {//当输入不为空的时候
		if(aInput[1].value == "男" || aInput[1].value == "女"){
            		arr1.push(1);
        		}else {
        			alert("请输入正确的性别");
        			aInput[1].value = "";
        		}
	}
	}


	//出生日期
	aInput[2].onblur = function() {
	if (aInput[2].value !="") {//当输入不为空的时候
        		if(!oDate.exec(aInput[2].value))//如果input值不合要求
        		{
        			alert("请输入正确的日期格式："+"\n"+"如：YYYY/MM/DD"+"\n"+"或：YYYY.MM.DD"+"\n"+"或：YYYY-MM-DD");
        			aInput[2].value = "";
        		}else{ 
        			arr1.push(2);
        		}
    	}
	}


	//支付方式点击
	for(var i = 0; i < aDiv.length; i++){
			aDiv[i].index = i;
			aDiv[i].onclick = function (){
				o = this.index;
				check();//
			}
		}
	function check(){
		for(var i = 0; i <aDiv.length; i++){
			aDivImg2[i].src = "../../../image/B超预约/B超预约-预约支付/Rounded_f.png";
		}
		aDivImg2[o].src = "../../../image/B超预约/B超预约-预约支付/Rounded_t.png";
	}

	//立即支付按钮
	oPay.onclick = function(){
		if(arr1.indexOf(0)>=0&&
			arr1.indexOf(1)>=0&&
			arr1.indexOf(2)>=0){
			alert("恭喜预约成功！"+"\n"+"2秒后跳转至 医生详情 页");
			setTimeout(function(){
				location.href="./docutorNi.html"
			},2000);
		}else{
			alert("请将信息填写完整！");
		}
	}
	

}
