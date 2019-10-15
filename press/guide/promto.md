## 内嵌web加载慢  
优化的核心是让服务端的资源能够本地化   
**方案一：PWA**   
那么什么是PWA？ 
>Progressive Web App, 简称 PWA，是提升 Web App 的体验的一种新方法，能给用户原生应用的体验。
PWA 能做到原生应用的体验不是靠特指某一项技术，而是经过应用一些新技术进行改进，
在安全、性能和体验三个方面都有很大提升，PWA 本质上是 Web App，
借助一些新技术也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点。

>PWA 的主要特点包括下面三点：  
>- 可靠 - 即使在不稳定的网络环境下，也能瞬间加载并展现
>- 体验 - 快速响应，并且有平滑的动画响应用户的操作
>- 粘性 - 像设备上的原生应用，具有沉浸式的用户体验，用户可以添加到桌面  
>PWA 本身强调渐进式，并不要求一次性达到安全、性能和体验上的所有要求，开发者可以通过 PWA Checklist 查看现有的特征。

具体的可以查看 [https://lavas.baidu.com/pwa/README](https://lavas.baidu.com/pwa/README)   
或者 [PWA 应用实战](https://lavas-project.github.io/pwa-book/)  
**想法**  
PWA请求一次后资源都缓存在本地了，可以利用这个特点，在终端启动的时候先请求  
往后所有资源都可以在缓存里面拿，当资源需要更新的时候，Service Worker 也提供  
更新资源的方法。   
这样从缓存到更新所有策略都无需终端干涉，终端目测只要修改cef的一些配置。  
但目前来看，server-workder 有https,或者127.0.0.1 的限制。  
如果为http请求无法注册成功。  

**方案二：**  
终端在请求到html的时候，写入一个js脚本，这个脚本做资源判断，  
如果资源和本地一致，替换成本地资源路径。  
如果存在不一致，先使用远程的。并且需要下载资源包进行替换。    

**方案三：**  
前提：本地已经下载好资源。node需要支持跨域请求
```
    app.use("*", function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , Origin"
        );
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
        next();
    });
```  
用file协议直接打开index.html，前端路由模式需要改成hash。  
在ajax请求方面，如果webview能够拦截请求，需要判断是请求资源还是接口请求。   
在图片资源全部变成base64, base64-inline-loader         
{
test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
}
如果是接口请求，需要加上服务器地址。      
如果无法拦截，就需要向终端获取服务器地址。  
本地更新策略采用定时请求版本情况，发现版本变更，下载资源包替换。   
这个大概由原来无感知更新变成有感知更新。   
```
  打包方式的修改  
 "buildLocal": "cross-env ROOTPATH=./ node build/build.js -n pc && node build/themeExtract.js -p ./"  
 把全局变量注入  
new webpack.DefinePlugin({
    'process.env': env,
    'ROOTPATH': !!process.env.ROOTPATH
})

webpack.base.conf.js  
    const imgLoader = !!process.env.ROOTPATH ?  
    {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?limit=10000&name=[name].[ext]'
    }: {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 10,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
    };
    const fontLoader = !!process.env.ROOTPATH ?
    {} :{
        test: /\.(woff2?|eot|ttf|otf|swf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
    };  
------------------------------------
     const PATH = process.env.ROOTPATH ? process.env.ROOTPATH : '/ume/';
     assetsPublicPath: PATH
     
``` 
## Android的webview概率触摸白屏
网上看到的一个类似的解释：  
webkit在绘制页面时会将结构分为各种层，   
当层足够大时就会变成很大的平铺层。  
这样一来webkit在每次页面结构发生变化时不需要都渲染整个页面而是渲染对应层了，  
这对渲染速度来说相当的重要。  
webkit会给各种层分配一定大小的“后备存储器”在内存里缓存起来，  
这就是绘制层的上下文，通过这个上下文就可以很容易的实现各种效果（动画，3D变换等），  
“后备存储器”内存占用大小不仅依层而定，  
跟设备和显示方式也是有关的，假设这在普通屏幕下是1：1的，  
但在Retina屏幕下则是1：2的，并且放大时这个量会成倍增加；  
一张图片是10X10，普通屏幕分配的就是10X10，Retina初始则是20X20。  
这也表明Retina是更加消耗内存的。  
当层很大时，意味着“后备存储器”会消耗更大的内存，为了避免这点，  
webkit并不会绘制一个很大的层来存储一个很大的页面，  
比如说平铺层则会拆分成很多的块来绘制，即尽占用尽可能小的内存，  
只是将可视范围内的那部分渲染出来。  
这就是为什么我们在大页面滚动时会发现下面的内容慢慢显示，  
向上滚动时上面的内容还慢慢显示的原因。

以下则是webkit划分为层绘制的场景：  

1、页面主容器永远是独立的平铺层  
2.绘制密集型元素时，如video，canvas  
3、应用3D transformations的元素，包括translate3d, rotate3d, translateZ  
4、内容被加强时，如Filters, masks, reflections, opacity, transitions, animations  
5、某些特殊的情况下也会，如position:fixed, -webkit-overflow-scrolling:touch  
6、任何在已知层上覆盖的内容  
  
**所以解决方案就是Android开启硬件加速**  
## NGINX 502问题，node 的锅？！  
对于一个没有服务器任何相关经验的人类，  
接收到这样的一个结论，感受到巨大的恶意。  
叕一次踏上自证清白的道路。    
觉得node扛不住，那就来吧。  
1.简单的node服务
```
const express = require('express');
const path = require('path');
const app = express();
const http =  require("http");
const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
app.use(log4js.connectLogger(logger));
app.use(express.static(path.join(__dirname,'docs')));
app.use(function(request, response) {
    try {
        response.sendFile(path.resolve('docs/index.html'));
    }catch (e) {
        logger.error('sendFile error %s', e.toString());
    }
});
http.createServer(app).listen(3000, '0.0.0.0', function () {
    var host = this.address().address;
    var port = this.address().port;
    logger.error('Service listening http at http://%s:%s', host, port);
});
```
2.Locust—python压力测试工具  
[使用文档](https://docs.locust.io/en/stable/what-is-locust.html)  
安装：pip install locustio
简单的locustio脚本  
```
# coding: utf-8
from locust import HttpLocust, TaskSet, task  
class MyTaskSet(TaskSet):
    @task(1)
    def index(self):
        self.client.get("/ume/extension")

class MyLocust(HttpLocust):
    task_set = MyTaskSet
    min_wait = 5000
    max_wait = 15000
```
跑起来  
locust -f locustTest.py --host=http://    
访问 localhost:8089 开始模拟并发  
![本地执行文件](https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/locust.png)  
![图形界面](https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/web.png)  
**结论**  
直接压node没有问题，2000用户并发400，可以处理过来，但是加上NG代理，出现失败。   
到此，问题转交。  
## 大数据量情况的性能问题 
### 可以用上的工具
- css 压力测试(css stress test)
- css 性能分析器（the css profilers are coming）    
- css lint  
- dom monster
### UI性能关注点  
- 大量元素应用border-radius会拖慢页面
- 调整移动设备的viewport标签可以减少渲染时间  
- 旧版webkit boxshandows 在滚动和渲染会有延迟问题  
- css 径向渐变在某些浏览器会有渲染问题，特别是Android
- 避免使用IE css 滤镜，会有性能问题  
- 使用硬件加速css动画替代javascript动画  
## 内存泄漏问题  