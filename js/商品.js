var ofanhui = document.getElementById('fanhui');
	ofanhui.onclick = function(){
		window.history.go(-1);
	}

	var oDiv = document.getElementById('pic');
	var oImg = oDiv.getElementsByTagName('img')[0];
	var oul2 = document.getElementById('ul2');
	var oul1 = document.getElementById('ul1');
	var oli = oul1.getElementsByTagName('li');
	var arrUrl = ['../img/商城-assets/纸尿裤2.png','../img/商城-assets/纸尿裤.png','../img/商城-assets/奶瓶.png'];
	var num = 0;
	var timer=null;
	for( var i=0; i<arrUrl.length; i++ ){
		oul2.innerHTML += '<li></li>';
	}
	var aLi = oul2.getElementsByTagName('li');
	function fnTab(){
		oImg.src = arrUrl[num];
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.backgroundColor = '#ddd';		
		}
		aLi[num].style.backgroundColor = 'red';
	}
	fnTab();
	for( var i=0; i<aLi.length; i++ ){
		aLi[i].index = i;			
		aLi[i].onclick = function (){
			num = this.index;
			fnTab();
		};
	}
	oli[0].onclick = function(){
		if (num==0) {
			num = arrUrl.length-1;
			fnTab();
		} else {
			num = num-1;
			fnTab();
		}
	}
	oli[1].onclick = next;
	function next(){
		if (num==arrUrl.length-1) {
			num = 0;
			fnTab();
		} else {
			num = num+1;
			fnTab();
		}
	}
	timer = setInterval(next,1500);
	oDiv.ontouchstart = function(){
		clearInterval(timer);
	}
	oDiv.ontouchend = function(){
		timer = setInterval(next,1500);
	}
	