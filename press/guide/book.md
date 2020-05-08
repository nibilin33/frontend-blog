## Linux操作系统    
### 基本组成    
1. 用户进程：用户界面，服务器，命令行   
2. Linux 内核： 系统调用，进程管理，内存管理，设备驱动程序  
3. 硬件：CPU，主内存，磁盘，网络端口    
### 目录结构    
/bin 可执行文件    
/dev 设备文件    
/etc 系统配置文件    
/home 用户个人目录    
/lib 供可执行程序使用的各种代码库    
/lib 一般放共享库 /usr/lib 存放静态库和动态库    
/proc 可浏览的目录与文件接口来存放系统相关的信息        
/sys 类似 /proc，里面是设备和系统信息    
/sbin 可执行文件系统，用来管理系统    
/usr 很多目录与/root相同,为了让文件系统占用尽可能少的空间  
/usr/include C编译器需要使用的头文件    
/usr/local 管理员安装软件的地方    
/tmp 临时文件，系统启动的时候会清掉
/var 程序存放运行时信息的地方，如系统日志，用户信息，缓存。
/var/tmp 系统启动的时候不会清掉        
/boot 存放内核家长文件    
/media 加载可移除设备    
/opt 第三方软件      
### 磁盘和文件系统      

### Shell 脚本  
vscode 安装 shell-format    
1. 以下行开头 
```
#!/bin/sh   
```
2. #为注释      
3. 给shell 脚本设置执行和读位(让shell能读取该文件)：chomd +rx script    
4. 变量 
```
length = 100    
$length 
整数命名：$1,$2... 命令行参数   
$0 脚本名   
$$ 进程号   
$? 退出码   
shell会对双引号内的变量进行转化 
"$100"
$@ 命令行所有参数       

```
5. 关键字       
if/then/else/elif/case/for/while    
条件判断止于fi,easc 
```
if ["$1" = "hi"];then   
elif["$2" = "bye"];then 
else
    echo "end"
fi  
```
```
for filename in *;do   
    code
done    
while true;do
done    
```
``` 
case $1 in
    bye)
        echo "Fine"
        ;;
easc
```
### 常用命令    
less:翻页查看，q退出    

## Webkit技术内幕   

主流的演染引擎包括 Trident 、 Gecko 和 webkit，它们分别是 IE 、火狐和 Chrome 的内核。   
一个渲染引擎包括：HTML解释器， CSS解释器， 布局，Javascript引擎。   
渲染过程：输入到 HTML 解释器， HTML 解释器在解释它后构建成一棵 DOM 树，     
如果遇到 Javascript 代码则交给 Javascript 引擎去处理；  
如果网贞中包含 CSS ，则交给 CSS 解释器去解释。  
当 OOM 建立的时候，渲染引擎接收来自 CSS 解释器的样式信息，构建一个新的内部绘图模型。    
该模型由布局模块计算模型内部各个元素的位置和大小信息，最后由绘图模块完成从该模型到图像的绘制。      

### HTML(hypertext markup language) 

HTML5 包括10大类别：  

| 类别                  |                                           内容                                          |
|-----------------------|:---------------------------------------------------------------------------------------:|
| 离线（offline）         |                 Application cache , Local storage , Indexed DB ，在线／离线                |
| 存储（storage）         |                    Application cache , Local storage , Indexcd DB 等                    |
| 连接（connectivity）    |                              Web Sockets , Server-sent 事件                             |
| 文件访问（file access）  |                   File API , File System , Filewriter , ProgressEvents                  |
| 语义（semantics）       | 各种新的元素，包括 Media , structural ，国际化，Link relation ，属性， form 类型， microdata 等方面 |
| 音频和视频（audio/video） |                     HTMLS Video , Web Audio , WebRTC, Video track 等                    |
| 3D和图形（3D/graphics）  |                          Canvas ZD , 3D CSS 变换， WebGL , SVG 等                         |
| 展示（presentation）    |                    css3 2D/ 3D 变换, 转换（ transition ) , webFonts 等                    |
| 性能（performance）     |                               web worker , HTTP caching 等                              |
| 其他（Nuts and bolts）  |                          触控和鼠标， Shadow DoM , css masking 等                          |

### Webkit渲染过程

1. 当用户输入网页 URL 的时候, WebKit 调用其资源加载器加载该 URL 对应的网页。 
2. 加载器依赖网络模块建立连接，发送请求并接收答复。 
3. WebKit 接收到各种网页或者资源的数据，其中某些资源可能是同步或异步获取的。    
4. 网页被交给 HTML 解释器转变成一系列的词语（ Token ）。    
5. 解释器根据词语构建节点（ Node ) ，形成 DOM 树。  
6. 如果节点是 Javascript 代码的话，调用 Javascript 引擎解释并执行。     
7. Javascript 代码可能会修改 DOM 树的结构。     
8. 如果节点需要依赖其他资源，例如图片、 CSS 、视频等，调用资源加载器来加载它们，但是它们是异步的，不会阻碍当前 DOM 树的继续创建；如果是 JavascriPt 资源 URL （没有标记异步方式），则需要停止当前 DOM 树的创建，直到 Javascript 的资源加载并被 Javascript 引擎执行后才继续 DOM 树的创建。    

在上述的过程中，网页在加载和渲染过程中会发出“ DOMConent ”事件和 DOM 的“ onload ”事件，分别在 DOM 树构建完之后，以及 DOM 树建完并且网页所依赖。
![加载过程对应的参数](http://fex.baidu.com/img/build-performance-monitor-in-7-days/timing.png)
### webkit 资源加载机制     

缓存，有资源池，以URL作为标识，如果URL不一样，即使是同一个资源也认为是不同的。      
资源池使用的机制采用LRU算法。替换其中的资源。       

### Chromium 网络栈

查看 chrome://net-internals     
DNS解析和TCP连接占用大量的时间，所以为了高效地加载页面:

1. 减少链接的重定向。有些网页中使用了大量的重定向，可能还会有很多次重定向， 

这不仅要求浏览器建立多次链接，同时也需要多次DNS解析，这会阻碍DNS预取技术的应用，应该尽量避免。  

2. 利用DNS预取机制。< link ref='dns-prefet'  href ="http://thidnsprefetchexample.com">  
3. 搭建支持SPDY协议的服务器，当然指的是那些需要使用HTTPS协议的站。  
4. 避免错误的链接请求。网页中包含了一些失效的链接，当浏览器试图获取该链接对应的资源的时候，就会占用网络资源。 

### Web Components  

1. Custom elements（自定义元素）:   CustomElementRegistry.define() , Window.customElements  
2. Shadow dom (影子DOM)：Element.attachShadow()，Element.shadowRoot，HTMLTemplateElement， HTMLSlotElement，

DocumentOrShadowRoot     
DOM的子树在网页上不可见       
例如：（video） 
伪类：:host, :host(), :host-context()    
伪元素：::shadow and ::content  
组合器：>>> (formerly /deep/)*  

3. HTML templates（HTML模板）： template 和 slot 元素       

### Javascript 的执行   

Javascript 的执行会阻碍后面节点的创建，也会阻碍后面资源的下载。     
将script 加上 async 标识, 扫描到这个时候会先跳过，等资源都下载完之后执行。      

### CSS 解释器  

1. 盒模型       

外边距，外边框，内边距，内容。      

### 硬件加速的基础           

GPU 绘制3D图形性能特别好。  
如果没有分层，引擎会重绘所有区域。因为GPU计算更新区域更费劲。       
合成层：        
css3D属性，css 透视效果，video，webGL, 
canvas2D, css变化动画，clip, z坐标比自己小的兄弟节点。
减少重绘：  

1. 网页分层计算以减少需要重新计算的布局和绘图。 
2. 使用css 3d 变形和动画技术。        

### javascript 引擎     

闭包: 拥有了许多变量和绑定了这些变量的环境的表达式。 
当执行到哪一条语句的时候，哪些能被使用。使用作用域链来实现闭包，
作用域链由执行环境维护。        

### 安全机制    

1. XSS：执行跨域的javascript脚本 

防御：CSP，使用http消息头来指定网站哪些域的资源能被加载

### 移动Webkit      

在移动系统中，需要更多考虑的是触控和手势事件。  
weinre远程调试  

## web安全深度剖析  

### 理论篇

1. SQL 注入漏洞： 用户输入的数据被SQL解释器执行。       
2. 上传漏洞： 

::: tip
2.1 IIS解析漏洞： IIS6.0 建立*.asp 格式的文件夹，其任意文件都将被IIS当做asp文件解析。     
2.2 apache 解析漏洞： apache 1.x 和 2.x 在解析文件时有一个原则：当碰到不认识的扩展名时，  
将会从后向前解析，直到碰到认识的扩展名为止，如果都不认识，则会暴露其源代码
2.3 PHP CGI 解析漏洞： http：//xx.ss/x.txt/xx.php , x.php 是不存在的，PHP将会向前递归解析，造成解析漏洞。      
防止上传漏洞：      

1. 客户端检测：用javascript检测，在文件未上传时，就对文件进行校验。
2. 服务器检测： mime type，扩展名，检测文件是否嵌入恶意代码。 

:::

3. XSS 跨站脚本漏洞： 攻击者在网页中嵌入客户端脚本，通常是javascript编写的恶意代码。    

::: tip
常见危害：  
盗取用户cookie    
修改网页内容        
网站挂马        
利用网站重定向      
XSS蠕虫     
修复：      
敏感字符过来
HttpOnly: 防止客户端脚本访问   
:::   

4.  CSRF(跨站请求伪造)：建立在浏览器与web服务器的会话中;欺骗用户访问URL;

::: tip 预防

1. 二次确认     
2. token 认证    

:::  

### 实战篇    

1. 与安全性相关的HTTP标头：         
csp设置Content-Security-Policy标头可帮助防止跨站点脚本攻击和其他跨站点注入。    
hidePoweredBy删除X-Powered-By标题。 
hpkp添加了公钥固定标头，以防止伪造证书对中间人的攻击。  
hsts设置Strict-Transport-Security标头，以强制建立与服务器的安全（基于SSL / TLS的HTTP）连接。    
ieNoOpen套X-Download-Options为IE8 +。   
noCache集Cache-Control和Pragma标头可禁用客户端缓存。    
noSniff设置X-Content-Type-Options为防止浏览器通过MIME嗅探远离声明的内容类型的响应。     
frameguard设置X-Frame-Options标题以提供点击劫持保护。       
xssFilter设置X-XSS-Protection为在最新的Web浏览器中启用跨站点脚本（XSS）过滤器。         
2. 确保依赖项安全       
npm audit        
npm install -g snyk         
snyk test          
snyk wizard     
3. Node.js安全清单  
实施速率限制，以防止对身份验证的暴力攻击。一种实现方法是使用StrongLoop Microgateway实施限速策略。另外，您可以使用rate-limiter-flexible之类的包并配置限制。      
使用csurf中间件来防止跨站点请求伪造（CSRF）。       
始终过滤和清除用户输入，以防止跨站点脚本（XSS）和命令注入攻击。     
通过使用参数化查询或准备好的语句来防御SQL注入攻击。     
使用开源sqlmap工具检测您的应用程序中的SQL注入漏洞。     
使用nmap和sslyze工具测试SSL密码，密钥和重新协商的配置以及证书的有效性。     
使用安全正则表达式可确保您的正则表达式不受正则表达式拒绝服务攻击的影响。           


## 深入浅出node.js  
node.js 采用事件驱动，异步编程，为网络服务而设计。      
事件驱动是node.js通过内部单线程高效地维护事件循环队列来实现的。 
没有多线程的资源占用和上下文切换。      

### 单线程

无法利用多核CPU 
错误会引起应用退出  
大量计算占用CPU倒置无法继续调用异步IO（解决：child_process）               

### Node 的模块实现     

在node中引入模块，需要经历3个步骤       

1. 路径分析        
2. 文件定位        
3. 编译执行          

核心模块在node源代码的编译过程中，编译进了二进制执行文件。在node进程启动时，    
部分核心模块就被直接加载进内存中，文件模块则要经历完整过程。   

### 核心模块

核心模块分为c/c++编写和javascript编写     
编译程序需要将所有javascript模块文件编译成c/c++代码，   
node采用v8附带的js2c.py工具

### 非I/O 的异步API     

setTimeout(), setInterval(), setImmediate(), process.nextTick()     
调用setTimeout，setInterval创建的定时器会被插入到定会器观察者内部的 
一个红黑树中。      
process.nextTick 方法比setTimeout 轻量     

### Nodejs基础中间件Connect        

[connect](http://blog.fens.me/nodejs-connect/)  

### 异步API添加过载保护     

bagpipe:        

1. 通过一个队列来控制并发量     
2. 当前活跃的异步调用量小于   
3. 活跃调用到定

### V8垃圾回收机制

V8做一次小的垃圾回收需要50ms以上，做一次非增量的垃圾回收甚至要1s以上。 
查看垃圾回收日志： node --trace_gc -e > gc.log     
GC算法： 标记清除算法和引用计数算法         
标记清除算法(V8)：  
以root（windows对象 ）作为起点，使用深度优先搜索向下遍历所有对象，并在对象的头部做标记。        
未被标记的清除的时候就会被清除掉。它们对应的内存变成碎片。碎片化内存的危害：分块的内存查询效率远低于连续的。    
存储空间的浪费。所以清除后会有合并逻辑。    
引用计数算法：
对象头部记录引用它的对象个数，计算器为0时会立即被回收。     
a⇆b 相互引用，没有第三者引用这两个对象，所以无论通过什么途径均访问不到它们，    
就无法被注销。      

### 内存泄漏排查工具        

1. v8-profiler  
2. node-heapdump    
3. node-mtrace  
4. drace    
5. node-memwatch    

### Buffer

buffer 所占的内存不是由V8分配的，属于堆外内存。     

### ANSI转义码  

::: tip 终端共支持8种（代码0，30-37）不同的颜色,8种背景颜色对应的代码为(40-47）
重置：\u001b[0m 
黑色：\u001b[30m    
红色：\u001b[31m    
绿色：\u001b[32m    
... 
可以使用[ansi-colors](https://www.npmjs.com/package/ansi-colors)依赖修改终端输出颜色           
:::   
```js
const colors = require('ansi-colors');
console.log(colors.red('This is a red string!'));
console.log(colors.green('This is a red string!'));
console.log(colors.cyan('This is a cyan string!'));
console.log(colors.yellow('This is a yellow string!')); 
```
### Chrome V8 基础        
#### 内存机制       
1. 新生代内存   
基本的数据对象都被分配到这里，特点小而频。  
使用Scanvenge算法进行回收。     
当新生代的对象经过多次垃圾回收后依然在内存区的时候，    
就会移动到老生代内存区。    
2. 老生代内存   
保存的对象大多数是生存周期很长的甚至是常驻内存的对象。      
使用的是标记清除和标记整理。    
#### 句柄       
是一个32位无符号整型值（32位系统下）,相当于指针的指针.    
是Windows中各个对象的一个唯一的、固定不变的ID,  
Windows使用句柄来标识诸如窗口、位图、画笔等对象，并通过句柄找到这些对象。       
句柄地址（稳定）->记载着对象在内存中的地址->对象在内存中的地址（不稳定）->实际对象         
v8 使用句柄提供堆内存中js数据对象的一个引用。              




