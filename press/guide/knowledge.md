## 运行时的一些概念  

#### 帧  

一个帧是一个连续的工作单元。当一个函数被调用时，运行时环境就会在栈中  
创建一个帧。帧里面保存了特殊函数的参数和局部变量。  

#### 栈  

栈包含了一个信息在执行时的所有步骤（帧）。   

#### 队列

队列包含一个待执行信息的列表，每一个信息都与一个函数相互联系。  

#### 堆  

堆是一个内存存储空间，它不关注内部储存的内容的保存顺序。   
堆中保存了所有正在被使用的变量和对象，同时也保存了一些当前  
作用域已经不在被用到，但还没被垃圾回收的帧。  

## 浏览器工作原理       
### 浏览器端的Event Loop
一个函数执行栈，一个事件队列，一个微任务队列。      
每个事件队列中取一个事件时有微任务就把微任务执行完，才开始执行事件。
### 一段代码的运行
从一段JavaScript源码，解析，抽象语法树，执行上下文，解释器，字节码，编译器。        
### JavaScript的核心
对象，原型链，构造函数，执行上下文堆栈，执行上下文，变量对象，活动对象，作用域链，闭包，this。      
### 运行时的描述

对于每个执行上下文，三个重要的属性，变量对象，作用域链，this。

执行上下文，第一，函数的形参，当进入到函数执行上下文时，变量对象的一个属性，其属性名就是形参的名字，其值就是实参的值，对于没有传递的参数其值为undefined。           
函数声明，变量对象的一个属性，其属性名和值都是函数对象创建出来的，如果变量对象已经包含了相同名字的属性，则替换它的值。      
变量声明，变量对象的一个属性，其属性名即为变量名，其值为undefined，如果变量名和已经声明的函数名或者函数的参数名相同，则不会影响已经存在的属性。         
### 微任务和宏任务对页面渲染的影响  
异步任务包含：
process.nextTick(Node都有)         
promise.then()            
object.Observe            
mutaionObserver     
微任务可以多个同时执行，宏任务一次只能执行一个。        
Promise宏任务，Promise.then是微任务，宏任务先，console.log，再到微任务         
## XHTML 与 HTML 的不同 

XHTML 元素必须被正确地嵌套。    
XHTML 元素必须被关闭。  
标签名必须用小写字母。  
XHTML 文档必须拥有根元素。  
XHTML 可以混合各种XML应用（MathMl, svg）
XHTML 文档内的CDATA中的内容可以被执行，CDATA的作用是防止XML解析到非法字符。 

## WAI-ARIA 

WAI-ARIA, 是Web Accessibility Initiative - Accessible Rich Internet Applications 的缩写，指无障碍网页应用技术。她主要解决的一个问题：让残障人士能无障碍地访问网页上的动态内容。     
ARIA主要由两部分组成，分别是：      
role(角色)，标示这个dom元素是做什么用的.
aria-属性描述了与之有关的事物（特征）及其是什么样的（状态）.

## meta 元素   

属性：charset, name, http-equiv, content       
| charset        | name         | http-equiv| content|
| ------------- |:-------------:|:-------------:|-------------:|
| utf-8       | application-name | content-type  | width    |
|               | author        |   default-style| initial-scale|
|               | description    | refresh     | maximum-scale|
|               | generator     |             | minimun-scale  |
|               | keywords     |              | user-scalable  |
|               | robots        |               |           |
|               | viewport     |                |            |


## A 元素的功能 
1. 导航
2. 浏览器支持的任何协议 
::: tip
手机拨号：href="tel:10086"      
发送短信：href="sms:10086?body=test"    
发送邮件：href="mailto:ss@qq.co?cc="    
:::
## IMG 新增实用属性     
crossorigin:  anonymous,use-credentials (帮助canvas能够使用第三方站点的图像，并且不会污染画布)      
usemap: 让图像关联分区响应图  
figure,figcaption: 用于插入图像以及图像的描述       
<ClientOnly>
<cp-image></cp-image>
</ClientOnly> 
eg:点狗脸，点狗脸   
<ClientOnly>
<nb-img></nb-img>
</ClientOnly>  

::: demo
<template>
    <div class="hide">
    <figure>
        <img class="img-transform" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1266768696,2505081725&fm=26&gp=0.jpg"
            usemap="#Map"></img>
    <figcaption>小白狗</figcaption>
    </figure>
        <map name="Map">
            <area shape="circle" href="javascript:alert('haha')" coords="10,150,50">
        </map>
    </div>
</template>
<script>
export default {
    name:'nb-img'
}
</script>
:::

## H5新增日期类型（chrome） 
| 类型          | 功能|
| --------------|----:|
| datetime-local|选择本地日期时间|
| month| xx年xx月|
| time| 11:00|
| week| xx年第xx周|

## Iframe   
1. 用途 
2. 缺点 

## 多媒体元素       
video,audio,embed,track     

## BEF 和 Margin Collapse   
BFC全称Block Formatting Context ，直译“块级格式化上下文”，也有译作“块级格式化范围”。它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。BEF中的内容就相当于箱子中的物品，将物品摆放在箱子中，能避免与其他箱子中的物品混淆，还能保护它们不被破坏。
怎么产生BFC?    
::: tip    
根元素      
float属性不为none       
position为absolute或fixed       
display为inline-block, table-cell, table-caption, flex, inline-flex     
overflow不为visible  
:::  
***BEF 的用途***    
1. 清除浮动
2. 解决外边距塌陷
3. 宽度自适应的两栏布局      

## EventLoop    
EventLoop 运行机制：检测调用栈为空闲状态时将回调函数加入任务队列中并执行。  
异步编程原理:比如ajax， 分为发请求和回调，javascript引擎先调用发起请求后，顺序执行任务队列中      
的下一个任务，浏览器网络模块得到响应通知javascript引擎，eventloop 检测到栈  
为空闲的时候将回到函数加入任务队列。    

## 网络  

<ClientOnly>
<urlNavigation/>
</ClientOnly>  
HTTP 1.1 均为纯文本格式传输，     

HTTP2.0将消息的传输格式改为二进制，以流的形式进行消息传输。         

消除队首阻塞。服务器还可以主动推送消息。      

Websocket:协议基于TCP协议实现，包含初始的握手过程，以及后续的多次数据帧双向传输过程。其目的是在WebSocket应用和WebSocket服务 器进行频繁双向通信时，可以使服务器避免打开多个HTTP连接进行工作来节约资源，提高了工作效率和资源利用率。  

当创建 WebSocket 实例的时候，会发一个 HTTP 请求，请求报文中有个特殊的字段 Upgrade ，然后这个连接会由 HTTP 协议转换为 WebSocket 协议，这样客户端和服务端建立了全双工通信，通过 WebSocket 的 send 方法和 onmessage 事件就可以通过这条通信连接交换信息。   

socket.io: 从IE6到IOS都支持         


<img src="https://s1.51cto.com/oss/201906/17/47b144c643677df810e0270e6a228934.jpeg"/>

#### URI,URL,URN的理解： 

URI：通一资源标志符(Uniform Resource Identifier， URI)，表示的是web上每一种可用的资源，如 HTML文档、图像、视频片段、程序等都由一个URI进行定位的。(分为URL,URN)

URL：Uniform Resource Locator（统一资源定位符）

URN：Uniform Resource Name（统一资源命名），P2P下载中使用的磁力链接是URN的一种实现，它可以持久化的标识一个BT资源，资源分布式的存储在P2P网络中，无需中心服务器用户即可找到并下载它。 

ETag：是实体标签(Entity Tag)的缩写。ETag一般不以明文形式相应给客户端。在资源的各个生命周期中，它都具有不
同的值，用于标识出资源的状态   

#### 常用的首部字段     
1. X-Frame-Options  
网站内容在其他web站的frame标签显示。防止点击劫持。  
2. X-XSS-Protection     
用于控制浏览器XSS防护机制的开关。       
3. DNT  
DO Not Track 的简称，拒绝个人信息被收集。拒绝被精准广告追踪的一种方法。     
4. P3P  
在线隐私偏好平台技术，可以让web网站上的个人隐私变成一种仅供程序可理解的形式，以达到保护用户隐私的目的。     

#### SSL
SSL的慢分两种。一种是指通信慢。另一种是指由于大量消耗 CPU 及内存等资源，导致处理速度变慢。 和使用 HTTP 相比，网络负载可能会变慢 2 到 100 倍。除去和 TCP 连接、发送 HTTP 请求 • 响应以外，还必须进行 SSL通信， 因此整体上处理通信量不可避免会增加。 另一点是 SSL必须进行加密处理。在服务器和客户端都需要进行 加密和解密的运算处理。因此从结果上讲，比起 HTTP 会更多地 消耗服务器和客户端的硬件资源，导致负载增强。 针对速度变慢这一问题，并没有根本性的解决方案，我们会使用 SSL加速器这种（专用服务器）硬件来改善该问题。该硬件为 SSL通信专用硬件，相对软件来讲，能够提高数倍 SSL的计算速 度。仅在 SSL处理时发挥 SSL加速器的功效，以分担负载。

#### HTTP 使用的认证方式    