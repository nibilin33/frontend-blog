(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{237:function(t,a,e){"use strict";e.r(a);var r=e(0),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"linux操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux操作系统","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux操作系统")]),t._v(" "),e("h2",{attrs:{id:"webkit技术内幕"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webkit技术内幕","aria-hidden":"true"}},[t._v("#")]),t._v(" Webkit技术内幕")]),t._v(" "),e("p",[t._v("主流的演染引擎包括 Trident 、 Gecko 和 webkit，它们分别是 IE 、火狐和 Chrome 的内核。"),e("br"),t._v("\n一个渲染引擎包括：HTML解释器， CSS解释器， 布局，Javascript引擎。"),e("br"),t._v("\n渲染过程：输入到 HTML 解释器， HTML 解释器在解释它后构建成一棵 DOM 树，"),e("br"),t._v("\n如果遇到 Javascript 代码则交给 Javascript 引擎去处理；"),e("br"),t._v("\n如果网贞中包含 CSS ，则交给 CSS 解释器去解释。"),e("br"),t._v("\n当 OOM 建立的时候，渲染引擎接收来自 CSS 解释器的样式信息，构建一个新的内部绘图模型。"),e("br"),t._v("\n该模型由布局模块计算模型内部各个元素的位置和大小信息，最后由绘图模块完成从该模型到图像的绘制。")]),t._v(" "),e("h3",{attrs:{id:"html-hypertext-markup-language"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-hypertext-markup-language","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML(hypertext markup language)")]),t._v(" "),e("p",[t._v("HTML5 包括10大类别：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("类别")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("内容")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("离线（offline）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Application cache , Local storage , Indexed DB ，在线／离线")])]),t._v(" "),e("tr",[e("td",[t._v("存储（storage）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Application cache , Local storage , Indexcd DB 等")])]),t._v(" "),e("tr",[e("td",[t._v("连接（connectivity）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Web Sockets , Server-sent 事件")])]),t._v(" "),e("tr",[e("td",[t._v("文件访问（file access）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("File API , File System , Filewriter , ProgressEvents")])]),t._v(" "),e("tr",[e("td",[t._v("语义（semantics）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("各种新的元素，包括 Media , structural ，国际化，Link relation ，属性， form 类型， microdata 等方面")])]),t._v(" "),e("tr",[e("td",[t._v("音频和视频（audio/video）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("HTMLS Video , Web Audio , WebRTC, Video track 等")])]),t._v(" "),e("tr",[e("td",[t._v("3D和图形（3D/graphics）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Canvas ZD , 3D CSS 变换， WebGL , SVG 等")])]),t._v(" "),e("tr",[e("td",[t._v("展示（presentation）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("css3 2D/ 3D 变换, 转换（ transition ) , webFonts 等")])]),t._v(" "),e("tr",[e("td",[t._v("性能（performance）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("web worker , HTTP caching 等")])]),t._v(" "),e("tr",[e("td",[t._v("其他（Nuts and bolts）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("触控和鼠标， Shadow DoM , css masking 等")])])])]),t._v(" "),e("h3",{attrs:{id:"webkit渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webkit渲染过程","aria-hidden":"true"}},[t._v("#")]),t._v(" Webkit渲染过程")]),t._v(" "),e("ol",[e("li",[t._v("当用户输入网页 URL 的时候, WebKit 调用其资源加载器加载该 URL 对应的网页。")]),t._v(" "),e("li",[t._v("加载器依赖网络模块建立连接，发送请求并接收答复。")]),t._v(" "),e("li",[t._v("WebKit 接收到各种网页或者资源的数据，其中某些资源可能是同步或异步获取的。")]),t._v(" "),e("li",[t._v("网页被交给 HTML 解释器转变成一系列的词语（ Token ）。")]),t._v(" "),e("li",[t._v("解释器根据词语构建节点（ Node ) ，形成 DOM 树。")]),t._v(" "),e("li",[t._v("如果节点是 Javascript 代码的话，调用 Javascript 引擎解释并执行。")]),t._v(" "),e("li",[t._v("Javascript 代码可能会修改 DOM 树的结构。")]),t._v(" "),e("li",[t._v("如果节点需要依赖其他资源，例如图片、 CSS 、视频等，调用资源加载器来加载它们，但是它们是异步的，不会阻碍当前 DOM 树的继续创建；如果是 JavascriPt 资源 URL （没有标记异步方式），则需要停止当前 DOM 树的创建，直到 Javascript 的资源加载并被 Javascript 引擎执行后才继续 DOM 树的创建。")])]),t._v(" "),e("p",[t._v("在上述的过程中，网页在加载和渲染过程中会发出“ DOMConent ”事件和 DOM 的“ onload ”事件，分别在 DOM 树构建完之后，以及 DOM 树建完并且网页所依赖。")]),t._v(" "),e("h3",{attrs:{id:"webkit-资源加载机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webkit-资源加载机制","aria-hidden":"true"}},[t._v("#")]),t._v(" webkit 资源加载机制")]),t._v(" "),e("p",[t._v("缓存，有资源池，以URL作为标识，如果URL不一样，即使是同一个资源也认为是不同的。"),e("br"),t._v("\n资源池使用的机制采用LRU算法。替换其中的资源。")]),t._v(" "),e("h3",{attrs:{id:"chromium-网络栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chromium-网络栈","aria-hidden":"true"}},[t._v("#")]),t._v(" Chromium 网络栈")]),t._v(" "),e("p",[t._v("查看 chrome://net-internals"),e("br"),t._v("\nDNS解析和TCP连接占用大量的时间，所以为了高效地加载页面:")]),t._v(" "),e("ol",[e("li",[t._v("减少链接的重定向。有些网页中使用了大量的重定向，可能还会有很多次重定向，")])]),t._v(" "),e("p",[t._v("这不仅要求浏览器建立多次链接，同时也需要多次DNS解析，这会阻碍DNS预取技术的应用，应该尽量避免。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("利用DNS预取机制。< link ref='dns-prefet'  href =\"http://thidnsprefetchexample.com\">")]),t._v(" "),e("li",[t._v("搭建支持SPDY协议的服务器，当然指的是那些需要使用HTTPS协议的站。")]),t._v(" "),e("li",[t._v("避免错误的链接请求。网页中包含了一些失效的链接，当浏览器试图获取该链接对应的资源的时候，就会占用网络资源。")])]),t._v(" "),e("h3",{attrs:{id:"web-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Web Components")]),t._v(" "),e("ol",[e("li",[t._v("Custom elements（自定义元素）:   CustomElementRegistry.define() , Window.customElements")]),t._v(" "),e("li",[t._v("Shadow dom (影子DOM)：Element.attachShadow()，Element.shadowRoot，HTMLTemplateElement， HTMLSlotElement，")])]),t._v(" "),e("p",[t._v("DocumentOrShadowRoot"),e("br"),t._v("\nDOM的子树在网页上不可见"),e("br"),t._v("\n例如：（video）\n伪类：:host, :host(), :host-context()"),e("br"),t._v("\n伪元素：::shadow and ::content"),e("br"),t._v("\n组合器：>>> (formerly /deep/)*")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("HTML templates（HTML模板）： template 和 slot 元素")])]),t._v(" "),e("h3",{attrs:{id:"javascript-的执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-的执行","aria-hidden":"true"}},[t._v("#")]),t._v(" Javascript 的执行")]),t._v(" "),e("p",[t._v("Javascript 的执行会阻碍后面节点的创建，也会阻碍后面资源的下载。"),e("br"),t._v("\n将script 加上 async 标识, 扫描到这个时候会先跳过，等资源都下载完之后执行。")]),t._v(" "),e("h3",{attrs:{id:"css-解释器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-解释器","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 解释器")]),t._v(" "),e("ol",[e("li",[t._v("盒模型")])]),t._v(" "),e("p",[t._v("外边距，外边框，内边距，内容。")]),t._v(" "),e("h3",{attrs:{id:"硬件加速的基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件加速的基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 硬件加速的基础")]),t._v(" "),e("p",[t._v("GPU 绘制3D图形性能特别好。"),e("br"),t._v("\n如果没有分层，引擎会重绘所有区域。因为GPU计算更新区域更费劲。"),e("br"),t._v("\n合成层："),e("br"),t._v("\ncss3D属性，css 透视效果，video，webGL,\ncanvas2D, css变化动画，clip, z坐标比自己小的兄弟节点。\n减少重绘：")]),t._v(" "),e("ol",[e("li",[t._v("网页分层计算以减少需要重新计算的布局和绘图。")]),t._v(" "),e("li",[t._v("使用css 3d 变形和动画技术。")])]),t._v(" "),e("h3",{attrs:{id:"javascript-引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" javascript 引擎")]),t._v(" "),e("p",[t._v("闭包: 拥有了许多变量和绑定了这些变量的环境的表达式。\n当执行到哪一条语句的时候，哪些能被使用。使用作用域链来实现闭包，\n作用域链由执行环境维护。")]),t._v(" "),e("h3",{attrs:{id:"安全机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全机制")]),t._v(" "),e("ol",[e("li",[t._v("XSS：执行跨域的javascript脚本")])]),t._v(" "),e("p",[t._v("防御：CSP，使用http消息头来指定网站哪些域的资源能被加载")]),t._v(" "),e("h3",{attrs:{id:"移动webkit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动webkit","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动Webkit")]),t._v(" "),e("p",[t._v("在移动系统中，需要更多考虑的是触控和手势事件。"),e("br"),t._v("\nweinre远程调试")]),t._v(" "),e("h2",{attrs:{id:"内容分发网络原理与实践-cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容分发网络原理与实践-cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容分发网络原理与实践(CDN)")]),t._v(" "),e("h2",{attrs:{id:"web安全深度剖析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web安全深度剖析","aria-hidden":"true"}},[t._v("#")]),t._v(" web安全深度剖析")]),t._v(" "),e("h3",{attrs:{id:"理论篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理论篇","aria-hidden":"true"}},[t._v("#")]),t._v(" 理论篇")]),t._v(" "),e("ol",[e("li",[t._v("SQL 注入漏洞： 用户输入的数据被SQL解释器执行。")]),t._v(" "),e("li",[t._v("上传漏洞：")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("2.1 IIS解析漏洞： IIS6.0 建立*.asp 格式的文件夹，其任意文件都将被IIS当做asp文件解析。"),e("br"),t._v("\n2.2 apache 解析漏洞： apache 1.x 和 2.x 在解析文件时有一个原则：当碰到不认识的扩展名时，"),e("br"),t._v("\n将会从后向前解析，直到碰到认识的扩展名为止，如果都不认识，则会暴露其源代码\n2.3 PHP CGI 解析漏洞： http：//xx.ss/x.txt/xx.php , x.php 是不存在的，PHP将会向前递归解析，造成解析漏洞。"),e("br"),t._v("\n防止上传漏洞：")]),t._v(" "),e("ol",[e("li",[t._v("客户端检测：用javascript检测，在文件未上传时，就对文件进行校验。")]),t._v(" "),e("li",[t._v("服务器检测： mime type，扩展名，检测文件是否嵌入恶意代码。")])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("XSS 跨站脚本漏洞： 攻击者在网页中嵌入客户端脚本，通常是javascript编写的恶意代码。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("常见危害："),e("br"),t._v("\n盗取用户cookie"),e("br"),t._v("\n修改网页内容"),e("br"),t._v("\n网站挂马"),e("br"),t._v("\n利用网站重定向"),e("br"),t._v("\nXSS蠕虫"),e("br"),t._v("\n修复："),e("br"),t._v("\n敏感字符过来\nHttpOnly: 防止客户端脚本访问")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("CSRF(跨站请求伪造)：建立在浏览器与web服务器的会话中;欺骗用户访问URL;")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("预防")]),t._v(" "),e("ol",[e("li",[t._v("二次确认")]),t._v(" "),e("li",[t._v("token 认证")])])]),t._v(" "),e("h3",{attrs:{id:"实战篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战篇","aria-hidden":"true"}},[t._v("#")]),t._v(" 实战篇")]),t._v(" "),e("ol",[e("li",[t._v("与安全性相关的HTTP标头："),e("br"),t._v("\ncsp设置Content-Security-Policy标头可帮助防止跨站点脚本攻击和其他跨站点注入。"),e("br"),t._v("\nhidePoweredBy删除X-Powered-By标题。\nhpkp添加了公钥固定标头，以防止伪造证书对中间人的攻击。"),e("br"),t._v("\nhsts设置Strict-Transport-Security标头，以强制建立与服务器的安全（基于SSL / TLS的HTTP）连接。"),e("br"),t._v("\nieNoOpen套X-Download-Options为IE8 +。"),e("br"),t._v("\nnoCache集Cache-Control和Pragma标头可禁用客户端缓存。"),e("br"),t._v("\nnoSniff设置X-Content-Type-Options为防止浏览器通过MIME嗅探远离声明的内容类型的响应。"),e("br"),t._v("\nframeguard设置X-Frame-Options标题以提供点击劫持保护。"),e("br"),t._v("\nxssFilter设置X-XSS-Protection为在最新的Web浏览器中启用跨站点脚本（XSS）过滤器。")]),t._v(" "),e("li",[t._v("确保依赖项安全"),e("br"),t._v("\nnpm audit"),e("br"),t._v("\nnpm install -g snyk"),e("br"),t._v("\nsnyk test"),e("br"),t._v("\nsnyk wizard")]),t._v(" "),e("li",[t._v("Node.js安全清单"),e("br"),t._v("\n实施速率限制，以防止对身份验证的暴力攻击。一种实现方法是使用StrongLoop Microgateway实施限速策略。另外，您可以使用rate-limiter-flexible之类的包并配置限制。"),e("br"),t._v("\n使用csurf中间件来防止跨站点请求伪造（CSRF）。"),e("br"),t._v("\n始终过滤和清除用户输入，以防止跨站点脚本（XSS）和命令注入攻击。"),e("br"),t._v("\n通过使用参数化查询或准备好的语句来防御SQL注入攻击。"),e("br"),t._v("\n使用开源sqlmap工具检测您的应用程序中的SQL注入漏洞。"),e("br"),t._v("\n使用nmap和sslyze工具测试SSL密码，密钥和重新协商的配置以及证书的有效性。"),e("br"),t._v("\n使用安全正则表达式可确保您的正则表达式不受正则表达式拒绝服务攻击的影响。")])]),t._v(" "),e("h2",{attrs:{id:"深入理解nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入理解nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 深入理解Nginx")]),t._v(" "),e("p",[t._v("特点：")]),t._v(" "),e("h2",{attrs:{id:"深入浅出node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入浅出node-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 深入浅出node.js")]),t._v(" "),e("p",[t._v("node.js 采用事件驱动，异步编程，为网络服务而设计。"),e("br"),t._v("\n事件驱动是node.js通过内部单线程高效地维护事件循环队列来实现的。\n没有多线程的资源占用和上下文切换。")]),t._v(" "),e("h3",{attrs:{id:"单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单线程","aria-hidden":"true"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),e("p",[t._v("无法利用多核CPU\n错误会引起应用退出"),e("br"),t._v("\n大量计算占用CPU倒置无法继续调用异步IO（解决：child_process）")]),t._v(" "),e("h3",{attrs:{id:"node-的模块实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-的模块实现","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 的模块实现")]),t._v(" "),e("p",[t._v("在node中引入模块，需要经历3个步骤")]),t._v(" "),e("ol",[e("li",[t._v("路径分析")]),t._v(" "),e("li",[t._v("文件定位")]),t._v(" "),e("li",[t._v("编译执行")])]),t._v(" "),e("p",[t._v("核心模块在node源代码的编译过程中，编译进了二进制执行文件。在node进程启动时，"),e("br"),t._v("\n部分核心模块就被直接加载进内存中，文件模块则要经历完整过程。")]),t._v(" "),e("h3",{attrs:{id:"核心模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 核心模块")]),t._v(" "),e("p",[t._v("核心模块分为c/c++编写和javascript编写"),e("br"),t._v("\n编译程序需要将所有javascript模块文件编译成c/c++代码，"),e("br"),t._v("\nnode采用v8附带的js2c.py工具")]),t._v(" "),e("h3",{attrs:{id:"非i-o-的异步api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非i-o-的异步api","aria-hidden":"true"}},[t._v("#")]),t._v(" 非I/O 的异步API")]),t._v(" "),e("p",[t._v("setTimeout(), setInterval(), setImmediate(), process.nextTick()"),e("br"),t._v("\n调用setTimeout，setInterval创建的定时器会被插入到定会器观察者内部的\n一个红黑树中。"),e("br"),t._v("\nprocess.nextTick 方法比setTimeout 轻量")]),t._v(" "),e("h3",{attrs:{id:"nodejs基础中间件connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs基础中间件connect","aria-hidden":"true"}},[t._v("#")]),t._v(" Nodejs基础中间件Connect")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://blog.fens.me/nodejs-connect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("connect"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"异步api添加过载保护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步api添加过载保护","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步API添加过载保护")]),t._v(" "),e("p",[t._v("bagpipe:")]),t._v(" "),e("ol",[e("li",[t._v("通过一个队列来控制并发量")]),t._v(" "),e("li",[t._v("当前活跃的异步调用量小于")]),t._v(" "),e("li",[t._v("活跃调用到定")])]),t._v(" "),e("h3",{attrs:{id:"v8垃圾回收机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8垃圾回收机制","aria-hidden":"true"}},[t._v("#")]),t._v(" V8垃圾回收机制")]),t._v(" "),e("p",[t._v("V8做一次小的垃圾回收需要50ms以上，做一次非增量的垃圾回收甚至要1s以上。\n查看垃圾回收日志： node --trace_gc -e > gc.log"),e("br"),t._v("\nGC算法： 标记清除算法和引用计数算法"),e("br"),t._v("\n标记清除算法(V8)："),e("br"),t._v("\n以root（windows对象 ）作为起点，使用深度优先搜索向下遍历所有对象，并在对象的头部做标记。"),e("br"),t._v("\n未被标记的清除的时候就会被清除掉。它们对应的内存变成碎片。碎片化内存的危害：分块的内存查询效率远低于连续的。"),e("br"),t._v("\n存储空间的浪费。所以清除后会有合并逻辑。"),e("br"),t._v("\n引用计数算法：\n对象头部记录引用它的对象个数，计算器为0时会立即被回收。"),e("br"),t._v("\na⇆b 相互引用，没有第三者引用这两个对象，所以无论通过什么途径均访问不到它们，"),e("br"),t._v("\n就无法被注销。")]),t._v(" "),e("h3",{attrs:{id:"内存泄漏排查工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏排查工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 内存泄漏排查工具")]),t._v(" "),e("ol",[e("li",[t._v("v8-profiler")]),t._v(" "),e("li",[t._v("node-heapdump")]),t._v(" "),e("li",[t._v("node-mtrace")]),t._v(" "),e("li",[t._v("drace")]),t._v(" "),e("li",[t._v("node-memwatch")])]),t._v(" "),e("h3",{attrs:{id:"buffer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buffer","aria-hidden":"true"}},[t._v("#")]),t._v(" Buffer")]),t._v(" "),e("p",[t._v("buffer 所占的内存不是由V8分配的，属于堆外内存。")]),t._v(" "),e("h3",{attrs:{id:"ansi转义码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ansi转义码","aria-hidden":"true"}},[t._v("#")]),t._v(" ANSI转义码")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("终端共支持8种（代码0，30-37）不同的颜色,8种背景颜色对应的代码为(40-47）")]),t._v(" "),e("p",[t._v("重置：\\u001b[0m\n黑色：\\u001b[30m"),e("br"),t._v("\n红色：\\u001b[31m"),e("br"),t._v("\n绿色：\\u001b[32m"),e("br"),t._v("\n黄色：\\u001b[33m"),e("br"),t._v("\n蓝色：\\u001b[34m"),e("br"),t._v("\n洋红：\\u001b[35m"),e("br"),t._v("\n青色：\\u001b[36m"),e("br"),t._v("\n白特：\\u001b[37m"),e("br"),t._v("\n亮黑: \\u001b[30; 1m"),e("br"),t._v("\n亮红: \\u001b[31; 1m"),e("br"),t._v("\n亮绿: \\u001b[32; 1m"),e("br"),t._v("\n亮黄: \\u001b[33; 1m"),e("br"),t._v("\n亮蓝: \\u001b[34; 1m"),e("br"),t._v("\n亮洋红: \\u001b[35; 1m"),e("br"),t._v("\n亮青: \\u001b[36; 1m"),e("br"),t._v("\n亮白: \\u001b[37; 1m"),e("br"),t._v("\nReset: \\u001b[0m")])]),t._v(" "),e("h2",{attrs:{id:"serverless-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serverless-架构","aria-hidden":"true"}},[t._v("#")]),t._v(" Serverless 架构")]),t._v(" "),e("p",[t._v("Serverless 这个名词最近出现频率有点小高，让我有点好奇，所以买了本闲暇翻一下，补补文盲。")]),t._v(" "),e("h3",{attrs:{id:"什么是serverless"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是serverless","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是serverless")]),t._v(" "),e("p",[t._v("Serverless 它是由开发者实现的服务端逻辑运行在无状态的计算容器中，它是由事件触发，完全被第三方管理的。\n分为 Backend as a Service(BaaS) 和 Functions as a Service(FaaS) 两种。\n比如 HTTP 请求，API Gateway 接受请求、解析和认证，传递对应参数给云函数平台，平台中执行对应回调函数，配合 DB、MQ 等 BaaS 服务在特定容器中完成计算，最终将结果返回给用户。函数执行完成后，一般会被 FaaS 平台销毁，释放对应容器，等待下一个函数运行。")]),t._v(" "),e("h2",{attrs:{id:"redis实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis实战","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis实战")])])}),[],!1,null,null,null);a.default=v.exports}}]);