## Linux操作系统    
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
类别|内容|
--|:--:|  
|离线（offline）| Application cache , Local slorage , Indexed DB ，在线／离线|  
|存储（storage）|Application cache , Local storage , Indexcd DB 等|     
|连接（connectivity）|  Web Sockets , Server-sent 事件|     
|文件访问（file access）|File API , File System , Filewriter , ProgressEvents|      
|语义（semantics）|各种新的元素，包括 Media , structural ，国际化，Link relation ，属性， form 类型， microdata 等方面|
|音频和视频（audio/video）|HTMLS Video , Web Audio , WebRTC, Video track 等|        
|3D和图形（3D/graphics）|Canvas ZD , 3D CSS 变换， WebGL , SVG 等|      
|展示（presentation）|css3 2D/ 3D 变换,转换（ transition ) , webFonts 等|
|性能（performance）|web worker , HTTP caching 等|  
|其他（Nuts and bolts）|触控和鼠标， Shadow DooM , css masking 等|    


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
伪类：:host, :host(), :host-context()    
伪元素：::shadow and ::content  
组合器：>>> (formerly /deep/)*  
3. HTML templates（HTML模板）： template 和 slot 元素

### CSS 解释器  
1. 盒模型       

## 内容分发网络原理与实践(CDN)   
## web安全深度剖析  
## 深入理解Nginx    
 
