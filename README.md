# ktPlayer
[![npm](https://img.shields.io/npm/v/ktPlayer.svg)]() [![npm](https://img.shields.io/npm/dt/ktPlayer.svg)]() [![npm](https://img.shields.io/npm/l/ktPlayer.svg)]() [![npm](https://img.shields.io/badge/made%20by-Felix-orange.svg)]()  
a simple HTML5 video player  
一款基于HTML5的web视频播放器  

## Demo
[在线预览](http://www.chengfeilong.com/ktPlayer/)  
预览图：  
![demo](http://oc8qda7cw.bkt.clouddn.com/demo.png)  

## 使用方法
方式1：NPM  

`npm install ktPlayer`  

方式2：引入该项目下的dist文件夹  

---

接下来  

引入css文件：
```html
<link rel="stylesheet" href="./dist/ktPlayer.min.css">
```
引入js文件：
```html
<script src="./dist/ktPlayer.min.js"></script>
```
写入播放器容器DOM：(可选,如未配置默认将播放器插入到body最后一个子节点.)
```html
<div id="container"></div>
```
创建KTPlayer对象,并初始化：
```js
//原生环境
window.onload = function(){
	var player = new KTPlayer({
	    src:'http://oc8qda7cw.bkt.clouddn.com/mayjlee.mp4',//视频文件，必填
	    pic:'http://oc8qda7cw.bkt.clouddn.com/mayjlee.png',//视频截图，必填
	    //root:document.getElementById('container') 配置播放器插入位置，选填
	});
	player.init();
};
//jQuery环境
$(function(){
	var player = new KTPlayer({
	    src:'http://oc8qda7cw.bkt.clouddn.com/mayjlee.mp4',//视频文件，必填
	    pic:'http://oc8qda7cw.bkt.clouddn.com/mayjlee.png',//视频截图，必填
	    //root:$('#container').get(0) 配置播放器插入位置，选填
	});
	player.init();
});
```

## 致谢
部分参考：[DPlayer](https://github.com/DIYgod/DPlayer)