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
具体实现可以看项目中MobilePlatform.js这个文件
## 移动端认证流程
1.内部项目：拿着应用ID向终端获取code，我们通过code向服务器换取token以及用户信息  
2.工作台（集成第三方应用），所有信息都通过clientId向服务器获取重定向地址然后直接跳转  
## 联调注意事项
1.PC端文件下载需要调用接口告诉客户端是要执行下载操作  
2.移动端文件的相关同样需要调用他们的接口  
## 核心的坑
不管在自己的模拟器执行地多么完美，嵌入都会有意想不到的偏差，一定要真实环境验收。 
## 问题  
内嵌的web时常收到体验差的效果，除了在代码层面尽量压缩资源，最好的效果还是本地效应。  
具体的见 [那些年做过的优化](/guide/promto.html) 



