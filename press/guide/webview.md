## PC端内嵌交互
相互约定一个方法，终端会在加载的时候写入脚本方法，我们调用

``` 
window.sendMessageToPlatformFunc = function (data) {
    if (window.sendMsgJs2Qt) {
        window.sendMsgJs2Qt(data);
    }
}

if (window.initData) {
    window.initData();
}
```

## PC端认证流程

终端在url上拼上code或者我们通过sendMessageToPlatformFunc向终端所要code，通过code向服务器换取token以及用户信息

## 移动端内嵌交互（webView）

移动端存在特殊的view，展示web页面控件。
具体的可以看[https://blog.csdn.net/carson_ho/article/details/64904691](https://blog.csdn.net/carson_ho/article/details/64904691)理解   
交互核心： 通过方法注入来实现。Native 应用将协议注入到系统Scheme，或将Native方法直接注入到  
页面全局遍历，反之也可以在HTML5页面全局作用域添加方法，让Native调用。       
### JSBridge 的实现原理     
JavaScript 是运行在一个单独的 JS Context 中（例如，WebView 的 Webkit 引擎、JSCore）。       
由于这些 Context 与原生运行环境的天然隔离，我们可以将这种情况与 RPC（Remote Procedure Call，远程过程调用）通信进行类比，将 Native 与 JavaScript 的每次互相调用看做一次 RPC 调用。       
那么什么是RPC呢？🙉            
RPC 是指计算机 A 上的进程，调用另外一台计算机 B 上的进程，其中 A 上的调用进程被挂起，而 B 上的被调用进程开始执行，当值返回给 A 时，A 进程继续执行。调用方可以通过使用参数将信息传送给被调用方，而后可以通过传回的结果得到信息。    
### JSBridge 设计规范       
目前较多的方式是通过一个协定串定义Native 和 Javascript间的数据通信规则：    
jsbridge://className:callbackMethod/methodName?jsonObj       
### DeepLinks   
在H5中使用一个链接（URL Scheme或者Universal Links）就能打开我们指定的App。  
URL Scheme：mycoolapp://path?foo=bar        
url schema 是app自身注册到手机系统里面的。在安装完成后，就已经保存在手机系统的协议列表中了。    
当浏览器挂起这个url schema的请求时，第一接收方式系统本身。  
默认的链接如 weixin:// 盒子的操作都是发送给手机系统，然后手机系统回去列表上查，查到了会去通知对应的盒子做处理，一般是直接打开盒子。
如果需要做其他操作，需要传参。
回调，依然是盒子获取盒子本身webview的全局对象，进行执行。   
### WebViewJavascriptBridge      
WebViewJavascriptBridge开源库使用，本质上，它也是通过webview的代理拦截scheme，然后注入相应的JS。    
``` js
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    let WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}
WebViewJavascriptBridge.registerHandler(handlerName,
    function(data, callback) {
        responseCallback(data),
            callback && callback({
                errorCode: "0",
                errorMessage: "成功"
            })
    });
WebViewJavascriptBridge.callHandler(path, params);
```

## H5 多个webview 通信  

1.  

``` 
localStorage.setItem('message', 'hello');
window.onstorage = evt => {
    console.log(evt);
}
```

2.  

postMessage 方法  
window.addEventListener('message'); 

## 移动端认证流程

1. 内部项目：拿着应用ID向终端获取code，我们通过code向服务器换取token以及用户信息  
2. 工作台（集成第三方应用），所有信息都通过clientId向服务器获取重定向地址然后直接跳转  

## 联调注意事项

1. PC端文件下载需要调用接口告诉客户端是要执行下载操作  
2. 移动端文件的相关同样需要调用他们的接口  

## 核心的坑

不管在自己的模拟器执行地多么完美，嵌入都会有意想不到的偏差，一定要真实环境验收。 

## 问题  

内嵌的web时常收到体验差的效果，除了在代码层面尽量压缩资源，最好的效果还是本地效应。  
具体的见 [那些年做过的优化](/guide/promto.html) 
调试：spy-debugger

