(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{297:function(n,e,t){"use strict";t.r(e);var a=t(14),s=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h3",{attrs:{id:"淘系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#淘系"}},[n._v("#")]),n._v(" 淘系")]),n._v(" "),e("p",[n._v("某部门一")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1. 自我介绍             \n2. 聊一下最近的项目经历     \n3. 根据我简历提到的问了：       \n内存泄漏是什么场景，GC的原理是什么？   \n\n把vue 组件内this作为构造参数传给工具对象保存，返回的对象再挂载到this的state上\n相对于 this 中的 state 属性引用 工具对象，工具对象 中的 属性引用 this，这样就构成了循环引用\nGC的原理\njs垃圾回收机制-----采用的方式\n标记清除法\n当变量进入执行环境时，就将这个变量标记为“进入环境”，\n当变量离开执行环境时，就将这个变量标记为“离开环境”，\n离开环境的变量会被释放内存。\n核心要义就是判断内存中对象是否可达，通常从根对象开始对全部子对象进行递归遍历，可以访问到的对象都是可达的，被标记为活动对象，没有遍历到的对象为非活动对象（垃圾），需要进行回收。\n引用计数法\n跟踪记录每个值被引用的次数，\n当某个值的引用次数变为0时\n说明没有方法再访问该值了\n手工法---这戒置空，GC下次再运行时会删除这些值\na=null\n如果上百个复杂组件要展示如何优化？\n1. 控制展示的节点数\n2. 复杂组件进行子组件拆分，懒加载，如果子组件过多时，父组件的渲染会导致子组件跟着渲染，React.memo可以做浅层的比较防止不必要的渲染： \n\n离线资源包的方案是什么样的？  \n          \n混合H5是如何通信的？ \nH5 和 Native 之间通过注入API、URL拦截、全局调用等形式，实现消息通信\n1.注入 API 方式的主要原理：通过 WebView 提供的接口，向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。\n\n说白了就是，Native 往 window 对象挂对象或方法，让 H5 可以调 Native 的方法。具体挂的对象或方法是 Native 定义的，比如人家挂了个getName(arg)，H5 调用就是window.getName(arg)，当然调用时可以向 Native 传数据。\n\n2.拦截 url scheme原理：先解释一下 url scheme： url scheme 是一种类似于 url 的链接，是为了方便app直接互相调用设计的，形式和普通的 url 近似，主要区别是 protocol 和 host 一般是自定义的，例如: httpsss://bridge_loaded/url?url=http://ymfe.tech，protocol 是 httpsss，host 则是 bridge_loaded。\n\n拦截 url scheme 的主要流程是：**Web 端通过某种方式（例如 iframe.src）发送 url scheme 请求，之后 Native 拦截到请求并根据 url scheme（包括所带的参数）进行相关操作。 **\n \n（前提：我提到H5和native的通信都采用异步方式）就如果想要同步获得native的数据要怎么做？      \n\n4. 基础知识：\n首屏加载优化？\nCDN是如何能做到优化效果的？ \n服务端渲染的原理？  \n客户端渲染的引擎有了解吗？ \n[渲染引擎blink](https://juejin.cn/post/6844904143279095822)     \n首先明确Blink完成一个网页渲染需要做的事情：\n实现Web标准，也就是W3C和一些标准组织的规范。包括HTML、DOM、CSS等。\n嵌入V8引擎，执行JS\n请求网络资源\n构建DOM树\n计算样式和布局\n嵌入合成器，绘制图形\n首先Blink渲染器会有一个主线程，其次会有N个Worker线程和一些内部线程。\n其中所有的js计算、DOM解析、CSS解析、样式和布局计算都是在主线程中完成的。\n\n跨域请求有哪些方式？    \n\nJSONP如何保证不被劫持，被任何人调用  \n1）严格定义 Content-Type: application / json\n2）过滤 callback 以及 JSON 数据输出  \nReferer正则匹配\n添加Token   \n\n了解前端哪些安全方面?         \n了解Option请求吗？             \n了解HTTP2吗？   \n箭头函数的优点？        \n知道ES6哪些特性？await,async实现原理               \n这些性特性浏览器不能支持怎么做？   \n\nbabel是用来做什么的？有写过babel的loader吗？        \nwebpack是用来做什么的？知道loader和Plugin的原理吗？           \n（我有写过webpack的loader）写过loader是用来做什么的？   \nvue 的双向绑定的原理，vue template是如何知道哪些数据要双向绑定的？\n5. 你还有什么想问的吗？      \n")])])]),e("p",[n._v("某部门二")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1. 说出输出结果     \nsetTimeout(function() {\n    console.log('setTimeout');\n}, 0);\n\nnew Promise(function(resolve) {\n    console.log('promise');\n    resolve();\n}).then(function() {\n    console.log('then');\n});\n\nconsole.log('console');\n2. 用apply实现bind           \nFunction.prototype.bind = function () {\n}\n3. 按1,2,3,4这样输出树           \nconst tree = [\n  {\n    name: 'dir1', \n    children: [\n      {name: 'dir2', children: []}\n    ]\n  },\n  {\n    name: 'dir3', \n    children: [\n      {name: 'dir4', children: []}\n    ]\n  }\n]\n4. 知道BFC吗？用BFC解决过什么问题？     \n5. 行内元素和块元素有什么区别？         \n6. 了解行内替换元素和非替换元素吗？  \n替换元素是其内容不受CSS视觉格式化模型控制的元素，例如img标签       \n")])])]),e("p",[n._v("某部门三")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1. postion有哪些属性？      \n2. absolute是相对什么定位的？       \n3. get和post区别？          \n4. 可以用get上传吗？  \nGET请求能上传文件吗？\n答案是可以的：\n\n放在请求路径后面，在各种浏览器中针对于 GET 请求，都做出了相应的限制，你可以把小型的文件转换成字符串，然后在服务器解码成文件\n放在请求报文的 body 中，这种应该是最稳妥的了，但是就和 POST 请求就没啥区别了。但是你得用js编码完成许多额外的工作，比如设置请求报文的请求头的Content-Type，自己完成对请求体的编码。但是还要考虑有些浏览器、服务器的限制，它们会主动过滤掉 GET 请求的 body 部分。不只是前端需要编写，后端也得编写相应的解码代码，简直是麻烦的不行。          \n5. 有没有什么场景是一定要用post请求？            \n6. 开发组件有什么原则吗？    \nhttps://juejin.cn/post/6844904032700481550       \n")])])]),e("h3",{attrs:{id:"钉钉"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#钉钉"}},[n._v("#")]),n._v(" 钉钉")]),n._v(" "),e("p",[n._v("5轮面试"),e("br"),n._v("\n1轮的基础的考察主要是上机，我的github分支上有我做过的题目，"),e("br"),n._v("\n额，可以参考，但并不具备特别的“指导”作用。"),e("br"),n._v("\n没什么好取巧的，老老实实刷一下leetcode找找手感。"),e("br"),n._v("\n后面3轮技术面基本在考察比较虚的能力和工程经验.....这个是临时准备"),e("br"),n._v("\n不了的，就是看平时工作思考了。记录一些思考也很重要，我完全不记得"),e("br"),n._v("\n前两年到底干了啥...好在后面开始写博客整理，总归能讲一些东西出来。")]),n._v(" "),e("p",[n._v("不同部门侧重的点不一样，有的部门侧重工程经验，有的侧重"),e("br"),n._v("\n基础表达。")]),n._v(" "),e("h3",{attrs:{id:"支付宝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支付宝"}},[n._v("#")]),n._v(" 支付宝")]),n._v(" "),e("p",[n._v("3轮面试"),e("br"),n._v("\n因为通过了钉钉的面试，推荐到这边面试流程就压缩了一些。"),e("br"),n._v("\n没有上机和交叉面。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1. 解释一下MVVM     \n2. react 和 vue的区别       \n3. vue 的生命周期       \n4. v-model 和 v-bind区别        \n5. 说一下 == 和 === 的区别，以及=== 的实现原理   \n6. js是如何上传本地文件的？为什么能拿到文件句柄，拿到文件句柄是不是就可以删除覆盖文件？   \n  \n=-=...    \n因为太突然地就开始新的面试，脑袋还处于蒙蔽的状态...   \n想不起来基础问题问了啥...   \n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);