## 起步     
微信：wxml     
支付宝：axml     
XML Parser    
所有现代浏览器都有内建的 XML 解析器。   
XML 解析器把 XML 文档转换为 XML DOM 对象,就可通过 JavaScript 操作的对象。  
通过使用 XSLT，可以把 XML 文档转换成 HTML 格式。        
## 遇到的问题       

1. async,await 语法报错       

详情->本地设置->ES6转ES5选项去掉        

2. canvas 绘制本地图片  

官网只提到网络图片要先下载，但我需要的是绘制本地图片=-=，api上也没有        
看到很明确的用法, 找了一下发现可以用createImage                        

``` 
export const getImage = source => {
  return new Promise(async (resolve, reject) => {
    //创建图片对象
    const canvas = await getCanvasById('#games');
    let img = canvas.createImage();
    img.src = source;
    img.onload = () =>{
        resolve(img);
    }
  });
};

async draw() {
    if(!this.img) {
        this.img = await getImage(bg);
    }
    this.context.drawImage(this.img,-this.x,0,this.width,this.height);
}
```

3. 真机调试HTMLCanvasView is not defined  

让人绝望的，工具里面都能运行，放到手机开始报错。 
最后在官网找到，我使用的是canvas最新的接口写法... 
真机还不支持🙉真的是让人绝望... 

``` 
const ctx =  wx.createCanvasContext('games');
ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.birdHeight,
      this.birdWidth
);
ctx.draw(true);
```

改成旧的api的写法，在模拟器上会一闪一闪的，真机上虽然可以渲染出来了，但是卡顿得可怕... 
而且像素还很模糊🙉
最后发现，用web-view比原生api流畅多了🙉    
    

4. 个人账号发布的不支持web-view的使用...🙉  

被迫又去试小游戏那一套... 🙉   

5. 服务器更新，web-view 内容没有更新  
清除缓存：在src上加时间戳参数    
    

## canvas 性能差异    
### 不同底层的web-view，canvas      
|  环境   | 逻辑层  | 视图层|
|  ----  | ----  | ----  |
| IOS  | JSCore |WKWebView |
| Android  | V8 |Chrome 内核|
| 模拟器|NW.js| Chromium Webview|   

[Chromium 在线源码搜索](https://source.chromium.org/chromium/chromium/src/+/master:?originalUrl=https:%2F%2Fcs.chromium.org%2F) （需要翻墙）        
[Chromium 源码](https://github.com/nibilin33/chromium)     
[webkit源码](https://github.com/nibilin33/webkit)    
[v8源码](https://github.com/nibilin33/v8)   
[Ignition：V8解释器](https://docs.google.com/document/d/11T2CRex9hXxoJwbYqVQ32yIPMh0uouUZLdyrtmMoL44/edit?ts=56f27d9d#heading=h.6jz9dj3bnr8t)       
可以利用服务器去下载，然后再从服务器上拉下来，直接从github上面拉取太慢了，  
而且一直中断失败，毕竟github的节点不在国内。        
```
wget https://github.com/nibilin33/webkit/archive/master.zip
```
**1. canvas 在webkit的源文件目录Source/WebCore/html/canvas**  
从文件名能看出canvasContext 分为2D类型和非2D，2D类型有开启GPU加速。     
::: tip        
**问题的代码：**        
createCanvasContext 不是2D类型，canvas源码里面是默认关闭GPU的，所以效果差很多。               
而在web-view里面是使用2D类型
:::  
 
**2. canvas 在Chromium的源文件目录/skia**      
skia 图形渲染引擎其速度与GPU渲染不相上下   

**3. android web-view 在Chromium的源文件目录/android_webview**
android_webview/renderer/aw_render_view_ext.cc  
```
#include "android_webview/renderer/aw_render_view_ext.h"
#include "android_webview/common/render_view_messages.h"
#include "content/public/renderer/render_frame.h"
#include "content/public/renderer/render_view.h"
#include "third_party/blink/public/web/web_local_frame.h"
#include "third_party/blink/public/web/web_view.h"
```
可以看出是使用blink作为渲染引擎    
Blink只是Webkit的一个分支。 

**4. iOS 在Chromium的源文件目录/ios/web_view**     
ios/web_view/public/cwv_web_view.h      
```
#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>
```     
可以看出是使用webkit作为渲染引擎。  

***从渲染引擎性能角度看：微信的canvas元素，开放2D type，利用GPU加速优化渲染效果***             
***也可以达到用终端原生的图形渲染库的效果***    

### 小游戏canvas优化点       
小游戏引入一个adapter.js  
1. 核心canvas对象代码      
``` js
	function Canvas() {
	    var canvas = wx.createCanvas()
	    canvas.type = 'canvas'
	    canvas.__proto__.__proto__ = new _HTMLElement2.default('canvas')
	    var _getContext = canvas.getContext
	    canvas.getBoundingClientRect = function() {
	        var ret = {
	            top: 0,
	            left: 0,
	            width: window.innerWidth,
	            height: window.innerHeight
	        }
	        return ret
	    }
	    return canvas
	}
```
有人提到小游戏是调用Native canvas，我看了一下就是skia这个引擎，而这个引擎我上面提到了   
渲染优化的速度和GPU差不多。     
createCanvas 是创建一个画布对象。首次调用创建的是显示在屏幕上的画布，
之后调用创建的都是离屏画布。
离屏渲染能优化渲染的流畅，就是费性能，需要多开一条通道。    

2. 事件 

``` js
wx.onTouchStart(touchEventHandlerFactory('touchstart'))
wx.onTouchMove(touchEventHandlerFactory('touchmove'))
wx.onTouchEnd(touchEventHandlerFactory('touchend'))
wx.onTouchCancel(touchEventHandlerFactory('touchcancel'))
```
小程序事件是绑定在组件上，当达到触发事件，再执行逻辑层中对应的事件处理函数。  
小游戏是直接执行逻辑层的事件。从架构可以知道，这样少了一层进程通信交流。
json格式的数据传递和解析比较费性能，如果频繁调用很可能损耗过多性能，进而影响用户体验。   
为什么数据传递和解析费性能？我才发现IOS，android 进程通信是没法通过共享内存实现。       

![渲染层和逻辑层](https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png)   


## 模拟器实现分析       
微信工具的源码都混淆了，不好看，有人已经实现了个基本    
流程可以作为参考[模拟器 WEPT](https://github.com/chemzqm/wept)      
或者参考[Linux版weixin-devtools](https://github.com/yuan1994/wechat_web_devtools)       
进行了解。      


<!--    
[微信小程序架构分析（上）](https://zhuanlan.zhihu.com/p/22754296)   
[微信小程序架构分析（中）](https://zhuanlan.zhihu.com/p/22765476)   
[微信小程序架构分析（下）](https://zhuanlan.zhihu.com/p/22932309)   
-->

