(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{219:function(t,e,a){"use strict";a.r(e);var r=a(0),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"运行时的一些概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行时的一些概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行时的一些概念")]),t._v(" "),a("h4",{attrs:{id:"帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帧","aria-hidden":"true"}},[t._v("#")]),t._v(" 帧")]),t._v(" "),a("p",[t._v("一个帧是一个连续的工作单元。当一个函数被调用时，运行时环境就会在栈中"),a("br"),t._v("\n创建一个帧。帧里面保存了特殊函数的参数和局部变量。")]),t._v(" "),a("h4",{attrs:{id:"栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 栈")]),t._v(" "),a("p",[t._v("栈包含了一个信息在执行时的所有步骤（帧）。")]),t._v(" "),a("h4",{attrs:{id:"队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 队列")]),t._v(" "),a("p",[t._v("队列包含一个待执行信息的列表，每一个信息都与一个函数相互联系。")]),t._v(" "),a("h4",{attrs:{id:"堆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆","aria-hidden":"true"}},[t._v("#")]),t._v(" 堆")]),t._v(" "),a("p",[t._v("堆是一个内存存储空间，它不关注内部储存的内容的保存顺序。"),a("br"),t._v("\n堆中保存了所有正在被使用的变量和对象，同时也保存了一些当前"),a("br"),t._v("\n作用域已经不在被用到，但还没被垃圾回收的帧。")]),t._v(" "),a("h2",{attrs:{id:"xhtml-与-html-的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xhtml-与-html-的不同","aria-hidden":"true"}},[t._v("#")]),t._v(" XHTML 与 HTML 的不同")]),t._v(" "),a("p",[t._v("XHTML 元素必须被正确地嵌套。"),a("br"),t._v("\nXHTML 元素必须被关闭。"),a("br"),t._v("\n标签名必须用小写字母。"),a("br"),t._v("\nXHTML 文档必须拥有根元素。"),a("br"),t._v("\nXHTML 可以混合各种XML应用（MathMl, svg）\nXHTML 文档内的CDATA中的内容可以被执行，CDATA的作用是防止XML解析到非法字符。")]),t._v(" "),a("h2",{attrs:{id:"wai-aria"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wai-aria","aria-hidden":"true"}},[t._v("#")]),t._v(" WAI-ARIA")]),t._v(" "),a("p",[t._v("WAI-ARIA, 是Web Accessibility Initiative - Accessible Rich Internet Applications 的缩写，指无障碍网页应用技术。她主要解决的一个问题：让残障人士能无障碍地访问网页上的动态内容。"),a("br"),t._v("\nARIA主要由两部分组成，分别是："),a("br"),t._v("\nrole(角色)，标示这个dom元素是做什么用的.\naria-属性描述了与之有关的事物（特征）及其是什么样的（状态）.")]),t._v(" "),a("h2",{attrs:{id:"meta-元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-元素","aria-hidden":"true"}},[t._v("#")]),t._v(" meta 元素")]),t._v(" "),a("p",[t._v("属性：charset, name, http-equiv, content")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("charset")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("http-equiv")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("content")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("utf-8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("application-name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("content-type")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("width")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("author")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("default-style")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("initial-scale")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("description")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("refresh")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("maximum-scale")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("generator")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("minimun-scale")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("keywords")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("user-scalable")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("robots")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("viewport")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"right"}})])])]),t._v(" "),a("h2",{attrs:{id:"a-元素的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-元素的功能","aria-hidden":"true"}},[t._v("#")]),t._v(" A 元素的功能")]),t._v(" "),a("ol",[a("li",[t._v("导航")]),t._v(" "),a("li",[t._v("浏览器支持的任何协议")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v('手机拨号：href="tel:10086"'),a("br"),t._v('\n发送短信：href="sms:10086?body=test"'),a("br"),t._v('\n发送邮件：href="mailto:ss@qq.co?cc="')])]),t._v(" "),a("h2",{attrs:{id:"img-新增实用属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#img-新增实用属性","aria-hidden":"true"}},[t._v("#")]),t._v(" IMG 新增实用属性")]),t._v(" "),a("p",[t._v("crossorigin:  anonymous,use-credentials (帮助canvas能够使用第三方站点的图像，并且不会污染画布)"),a("br"),t._v("\nusemap: 让图像关联分区响应图"),a("br"),t._v("\nfigure,figcaption: 用于插入图像以及图像的描述"),a("br"),t._v(" "),a("ClientOnly",[a("cp-image")],1),t._v("\neg:点狗脸，点狗脸"),a("br"),t._v(" "),a("ClientOnly",[a("nb-img")],1)],1),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22hide%22%3E%0A%20%20%20%20%3Cfigure%3E%0A%20%20%20%20%20%20%20%20%3Cimg%20class%3D%22img-transform%22%20src%3D%22https%3A%2F%2Fss1.bdstatic.com%2F70cFuXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D1266768696%2C2505081725%26fm%3D26%26gp%3D0.jpg%22%0A%20%20%20%20%20%20%20%20%20%20%20%20usemap%3D%22%23Map%22%3E%3C%2Fimg%3E%0A%20%20%20%20%3Cfigcaption%3E%E5%B0%8F%E7%99%BD%E7%8B%97%3C%2Ffigcaption%3E%0A%20%20%20%20%3C%2Ffigure%3E%0A%20%20%20%20%20%20%20%20%3Cmap%20name%3D%22Map%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Carea%20shape%3D%22circle%22%20href%3D%22javascript%3Aalert('haha')%22%20coords%3D%2210%2C150%2C50%22%3E%0A%20%20%20%20%20%20%20%20%3C%2Fmap%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20%20%20name%3A'nb-img'%0A%7D%0A%3C%2Fscript%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[[a("div",{staticClass:"hide"},[a("figure",[a("img",{staticClass:"img-transform",attrs:{src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1266768696,2505081725&fm=26&gp=0.jpg",usemap:"#Map"}}),t._v(" "),a("figcaption",[t._v("小白狗")])]),t._v(" "),a("map",{attrs:{name:"Map"}},[a("area",{attrs:{shape:"circle",href:"javascript:alert('haha')",coords:"10,150,50"}})])])],t._v(" "),a("script",[t._v("\nexport default {\n    name:'nb-img'\n}\n")])],2)],2),t._v(" "),a("h2",{attrs:{id:"h5新增日期类型（chrome）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5新增日期类型（chrome）","aria-hidden":"true"}},[t._v("#")]),t._v(" H5新增日期类型（chrome）")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("datetime-local")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("选择本地日期时间")])]),t._v(" "),a("tr",[a("td",[t._v("month")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("xx年xx月")])]),t._v(" "),a("tr",[a("td",[t._v("time")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("11:00")])]),t._v(" "),a("tr",[a("td",[t._v("week")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("xx年第xx周")])])])]),t._v(" "),a("h2",{attrs:{id:"iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe","aria-hidden":"true"}},[t._v("#")]),t._v(" Iframe")]),t._v(" "),a("ol",[a("li",[t._v("用途")]),t._v(" "),a("li",[t._v("缺点")])]),t._v(" "),a("h2",{attrs:{id:"多媒体元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多媒体元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 多媒体元素")]),t._v(" "),a("p",[t._v("video,audio,embed,track")]),t._v(" "),a("h2",{attrs:{id:"bef-和-margin-collapse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bef-和-margin-collapse","aria-hidden":"true"}},[t._v("#")]),t._v(" BEF 和 Margin Collapse")]),t._v(" "),a("p",[t._v("BFC全称Block Formatting Context ，直译“块级格式化上下文”，也有译作“块级格式化范围”。它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。BEF中的内容就相当于箱子中的物品，将物品摆放在箱子中，能避免与其他箱子中的物品混淆，还能保护它们不被破坏。\n怎么产生BFC?")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("根元素"),a("br"),t._v("\nfloat属性不为none"),a("br"),t._v("\nposition为absolute或fixed"),a("br"),t._v("\ndisplay为inline-block, table-cell, table-caption, flex, inline-flex"),a("br"),t._v("\noverflow不为visible")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("BEF 的用途")])])]),t._v(" "),a("ol",[a("li",[t._v("清除浮动")]),t._v(" "),a("li",[t._v("解决外边距塌陷")]),t._v(" "),a("li",[t._v("宽度自适应的两栏布局")])]),t._v(" "),a("h2",{attrs:{id:"eventloop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventloop","aria-hidden":"true"}},[t._v("#")]),t._v(" EventLoop")]),t._v(" "),a("p",[t._v("EventLoop 运行机制：检测调用栈为空闲状态时将回调函数加入任务队列中并执行。"),a("br"),t._v("\n异步编程原理:比如ajax， 分为发请求和回调，javascript引擎先调用发起请求后，顺序执行任务队列中"),a("br"),t._v("\n的下一个任务，浏览器网络模块得到响应通知javascript引擎，eventloop 检测到栈"),a("br"),t._v("\n为空闲的时候将回到函数加入任务队列。")]),t._v(" "),a("h2",{attrs:{id:"网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),a("ClientOnly",[a("urlNavigation")],1),t._v("  \nHTTP 1.1 均为纯文本格式传输，     \n"),a("p",[t._v("HTTP2.0将消息的传输格式改为二进制，以流的形式进行消息传输。")]),t._v(" "),a("p",[t._v("消除队首阻塞。服务器还可以主动推送消息。")]),t._v(" "),a("p",[t._v("Websocket:协议基于TCP协议实现，包含初始的握手过程，以及后续的多次数据帧双向传输过程。其目的是在WebSocket应用和WebSocket服务 器进行频繁双向通信时，可以使服务器避免打开多个HTTP连接进行工作来节约资源，提高了工作效率和资源利用率。")]),t._v(" "),a("p",[t._v("当创建 WebSocket 实例的时候，会发一个 HTTP 请求，请求报文中有个特殊的字段 Upgrade ，然后这个连接会由 HTTP 协议转换为 WebSocket 协议，这样客户端和服务端建立了全双工通信，通过 WebSocket 的 send 方法和 onmessage 事件就可以通过这条通信连接交换信息。")]),t._v(" "),a("p",[t._v("socket.io: 从IE6到IOS都支持")]),t._v(" "),a("img",{attrs:{src:"https://s1.51cto.com/oss/201906/17/47b144c643677df810e0270e6a228934.jpeg"}}),t._v(" "),a("p",[t._v("URI,URL,URN的理解：")]),t._v(" "),a("p",[t._v("URI：通一资源标志符(Uniform Resource Identifier， URI)，表示的是web上每一种可用的资源，如 HTML文档、图像、视频片段、程序等都由一个URI进行定位的。")]),t._v(" "),a("p",[t._v("URL：Uniform Resource Locator（统一资源定位符）")]),t._v(" "),a("p",[t._v("URN：Uniform Resource Name（统一资源命名），P2P下载中使用的磁力链接是URN的一种实现，它可以持久化的标识一个BT资源，资源分布式的存储在P2P网络中，无需中心服务器用户即可找到并下载它。")]),t._v(" "),a("p",[t._v("ETag：是实体标签(Entity Tag)的缩写。ETag一般不以明文形式相应给客户端。在资源的各个生命周期中，它都具有不\n同的值，用于标识出资源的状态")])],1)}),[],!1,null,null,null);e.default=i.exports}}]);