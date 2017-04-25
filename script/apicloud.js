/**
 * @Pulin (you@example.org)
 * @date   2017-03-27 09:19:43
 * @version $Id$
 */
 var apicloud = {

//打开Frame组方法	
openFrame : function(FrameName, url,y,h) {
	api.openFrame({
			name : FrameName,//frame 组名字
			url : url,					//打开文件的路径
			scrollEnabled : true,
			rect : {
				x : 0,		//左上角x坐标
				y : y,			//页头的高度----//左上角y坐标 
				w : "auto", //内容宽------//宽度，若传'auto'，页面从x位置开始自动充满父页面宽度
				h : h			//内容高------//高度，若传'auto'，页面从y位置开始自动充满父页面高度
			},
		});
},

//	得到偏好数据
getPrefs:function(){
	var userName;
	api.getPrefs({
		sync:false,
		key:'userName'
	},function(ret,err){
		return ret.value;
	});
},

//登录状态
isloginState:function(){
	var userId=apicloud.getPrefs();
	if(userId != "" || userId != undefined || userId != null){
		return true;
	}else{
		return false;
	}
},

//	打开窗口
openWin:function(FrameName,url,isReload,para){
	var para = (para == "undefined" ? "" : para);
	var isReload=isReload || false;
	api.openWin({
		name:FrameName,
		url:url,
		reload:isReload,
		pageParam:{
			index:para
		},
	});
},


	//获取系统相册、相机方法
	getCamera:function() {
		api.getPicture({
			sourceType : 'camera',
			encodingType : 'jpg',
			mediaValue : 'pic',
			destinationType : 'url',
			allowEdit : true,
			quality : 50,
			targetWidth : 100,
			targetHeight : 100,
			saveToPhotoAlbum : false
		}, function(ret, err) {
			if (ret) {
				alert(JSON.stringify(ret));
			} else {
//				alert(JSON.stringify(err));
			}
		});
	},
	getAlbum:function() {
		api.getPicture({
			sourceType : 'album',
			encodingType : 'jpg',
			mediaValue : 'pic',
			destinationType : 'url',
			allowEdit : true,
			quality : 50,
			targetWidth : 100,
			targetHeight : 100,
			saveToPhotoAlbum : false
		}, function(ret, err) {
			if (ret) {
				alert(JSON.stringify(ret));
			} else {
//				alert(JSON.stringify(err));
			}
		});
	},
//	保存图片
	savePicture:function() {
		api.saveMediaToAlbum({
	    	path: 'widget://image/my/header.png'
	}, function(ret, err) {
	    if (ret && ret.status) {
	        alert('保存成功');
	    } else {
	        alert('保存失败');
	    }
	});
	},


//引导页frame 
openGuideFrame:function(){
	api.openFrame({
		name: 'guide',
		url: '../html/guide/guide.html',
		rect: {
			x: 0,
			y: 0,
			w: 'auto',
			h: 'auto'
		},
	});
},


// 引导页——写入文件
//writeFile:function(){
//	api.writeFile({
//		path: 'fs://a.txt',
//		data: 'writeFile测试内容'
//	}, function(ret, err) {
//		if (ret.status) {//写入成功
//			alert("写入成功");
//		} else {
//		}
//	});
//},


// 引导页——读取写入的文件
//readFile:function(){
//	api.readFile({
//		path: 'fs://a.txt'
//	}, function(ret, err) {
//		if (ret.status) {
//			var data = ret.data;
//			if (data !="") {//有数据时
//				apicloud.openFrame("index","../index.html");
//			}else {//无数据时
//				 apicloud.openFrame();
//			}
//		} else {
//			alert(err.msg);
//		}
//	});
//},



}



