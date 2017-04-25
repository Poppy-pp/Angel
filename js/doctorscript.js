/**
 * @pulin (you@example.org)
 * @date    2017-03-27 10:34:24
 * @version $Id$
 */
 $(function(){

//	显示隐藏医师信息
$("#doctordeteils .list").each(function(index,item){
	var x=false;
	$(item).click(function(){
		// 判断列表收缩展开
		if(x){
				$(item).parent("a").next("div").slideUp();	//收起
				$(item).siblings(".img_jiantou").attr("src","../../../image/yuyue/pic00001@2x.png");
				x = false;	
			}else{
				$(item).parents("ul").children("div").slideUp();//全部div收缩
				$(item).parent("a").next("div").slideDown();//展开当前
				$(item).siblings(".img_jiantou").attr("src","../../../image/yuyue/pic00001@2xtop.png");
				x = true;
			}
			

		
		// 判断 预约时间栏 是否是展开状态
		if (index==3) {
			if ($(item).siblings(".img_jiantou").attr("src")!="../../../image/yuyue/pic00001@2xtop.png") {
			// alert("预约时间未点开时");
			api.removeEventListener({//移除事件
			    name: 'scrolltobottom'
			});
			}else{// alert("预约时间点开了");
				apiready = function(){
					api.addEventListener({
						name:'scrolltobottom',
						extra:{
								threshold:0            //设置距离底部多少距离时触发，默认值为0，数字类型
							}
						}, function(ret, err) {
							api.showProgress({
								title: '正在加载预约时间',
								text: '请稍后...',
								modal: true
							});
							setTimeout(function(){
									close();   //两秒后服务器返回数据
								},1000)		
						});
				}  
			/*关闭提示框*/
			function close(){
				api.hideProgress();
			}
		}
		}
		


	});//onclick事件结束

		
	});//列表循环结束



// 	预约时间跳转
$("#order_time li").each(function(index,item){
	$(item).click(function(){
		if($(item).children("button").text()=="预约"){
				var str=$(item).text();//获取当前li里的所有文本
				var strText=str.substring(0, 14);//截取前15 个字符
				var conf=confirm("确定预约： " + strText + "\n" + " 这个时间点吗？");
				if (conf==true) {
					apicloud.openWin("order-yuyue","./order-yuyue.html",true,index);
				}else{
					alert("已取消");
				}
			}else{
				alert("该时间段预约人数超过上限！");
				$(item).parents("#order_time").slideDown();
			}
		});

});

})