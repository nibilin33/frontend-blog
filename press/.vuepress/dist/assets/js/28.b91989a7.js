(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{208:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"起步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),n("p",[t._v("微信：wxml"),n("br"),t._v("\n支付宝：axml"),n("br"),t._v("\nXML Parser"),n("br"),t._v("\n所有现代浏览器都有内建的 XML 解析器。"),n("br"),t._v("\nXML 解析器把 XML 文档转换为 XML DOM 对象,就可通过 JavaScript 操作的对象。"),n("br"),t._v("\n通过使用 XSLT，可以把 XML 文档转换成 HTML 格式。")]),t._v(" "),n("h2",{attrs:{id:"遇到的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),n("ol",[n("li",[t._v("async,await 语法报错")])]),t._v(" "),n("p",[t._v("详情->本地设置->ES6转ES5选项去掉")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("canvas 绘制本地图片")])]),t._v(" "),n("p",[t._v("官网只提到网络图片要先下载，但我需要的是绘制本地图片=-=，api上也没有"),n("br"),t._v("\n看到很明确的用法, 找了一下发现可以用createImage")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export const getImage = source => {\n  return new Promise(async (resolve, reject) => {\n    //创建图片对象\n    const canvas = await getCanvasById('#games');\n    let img = canvas.createImage();\n    img.src = source;\n    img.onload = () =>{\n        resolve(img);\n    }\n  });\n};\n\nasync draw() {\n    if(!this.img) {\n        this.img = await getImage(bg);\n    }\n    this.context.drawImage(this.img,-this.x,0,this.width,this.height);\n}\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("真机调试HTMLCanvasView is not defined")])]),t._v(" "),n("p",[t._v("让人绝望的，工具里面都能运行，放到手机开始报错。\n最后在官网找到，我使用的是canvas最新的接口写法...\n真机还不支持🙉真的是让人绝望...")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const ctx =  wx.createCanvasContext('games');\nctx.drawImage(\n      this.img,\n      this.x,\n      this.y,\n      this.birdHeight,\n      this.birdWidth\n);\nctx.draw(true);\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[t._v("改成旧的api的写法，在模拟器上会一闪一闪的，真机上虽然可以渲染出来了，但是卡顿得可怕...\n而且像素还很模糊🙉\n最后发现，用web-view比原生api流畅多了🙉")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("个人账号发布的不支持web-view的使用...🙉")])]),t._v(" "),n("p",[t._v("被迫又去试小游戏那一套... 🙉")]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("服务器更新，web-view 内容没有更新"),n("br"),t._v("\n清除缓存：在src上加时间戳参数")])]),t._v(" "),n("h2",{attrs:{id:"canvas-性能差异"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas-性能差异","aria-hidden":"true"}},[t._v("#")]),t._v(" canvas 性能差异")]),t._v(" "),n("h4",{attrs:{id:"不同底层的web-view，canvas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不同底层的web-view，canvas","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同底层的web-view，canvas")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("环境")]),t._v(" "),n("th",[t._v("逻辑层")]),t._v(" "),n("th",[t._v("视图层")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("IOS")]),t._v(" "),n("td",[t._v("JSCore")]),t._v(" "),n("td",[t._v("WKWebView")])]),t._v(" "),n("tr",[n("td",[t._v("Android")]),t._v(" "),n("td",[t._v("V8")]),t._v(" "),n("td",[t._v("Chrome 内核")])]),t._v(" "),n("tr",[n("td",[t._v("模拟器")]),t._v(" "),n("td",[t._v("NW.js")]),t._v(" "),n("td",[t._v("Chromium Webview")])])])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://source.chromium.org/chromium/chromium/src/+/master:?originalUrl=https:%2F%2Fcs.chromium.org%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chromium 在线源码搜索"),n("OutboundLink")],1),t._v(" （需要翻墙）"),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/nibilin33/chromium",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chromium 源码"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/nibilin33/webkit",target:"_blank",rel:"noopener noreferrer"}},[t._v("webkit源码"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/nibilin33/v8",target:"_blank",rel:"noopener noreferrer"}},[t._v("v8源码"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://docs.google.com/document/d/11T2CRex9hXxoJwbYqVQ32yIPMh0uouUZLdyrtmMoL44/edit?ts=56f27d9d#heading=h.6jz9dj3bnr8t",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ignition：V8解释器"),n("OutboundLink")],1),n("br"),t._v("\n可以利用服务器去下载，然后再从服务器上拉下来，直接从github上面拉取太慢了，"),n("br"),t._v("\n而且一直中断失败，毕竟github的节点不在国内。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("wget https://github.com/nibilin33/webkit/archive/master.zip\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("strong",[t._v("1. canvas 在webkit的源文件目录Source/WebCore/html/canvas")]),n("br"),t._v("\n从文件名能看出canvasContext 分为2D类型和非2D，2D类型有开启GPU加速。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[n("strong",[t._v("问题的代码：")]),n("br"),t._v("\ncreateCanvasContext 不是2D类型，canvas源码里面是默认关闭GPU的，所以效果差很多。"),n("br"),t._v("\n而在web-view里面是使用2D类型")])]),t._v(" "),n("p",[n("strong",[t._v("2. canvas 在Chromium的源文件目录/skia")]),n("br"),t._v("\nskia 图形渲染引擎其速度与GPU渲染不相上下")]),t._v(" "),n("p",[n("strong",[t._v("3. android web-view 在Chromium的源文件目录/android_webview")]),t._v("\nandroid_webview/renderer/aw_render_view_ext.cc")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#include "android_webview/renderer/aw_render_view_ext.h"\n#include "android_webview/common/render_view_messages.h"\n#include "content/public/renderer/render_frame.h"\n#include "content/public/renderer/render_view.h"\n#include "third_party/blink/public/web/web_local_frame.h"\n#include "third_party/blink/public/web/web_view.h"\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("可以看出是使用blink作为渲染引擎"),n("br"),t._v("\nBlink只是Webkit的一个分支。")]),t._v(" "),n("p",[n("strong",[t._v("4. iOS 在Chromium的源文件目录/ios/web_view")]),n("br"),t._v("\nios/web_view/public/cwv_web_view.h")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#import <UIKit/UIKit.h>\n#import <WebKit/WebKit.h>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("可以看出是使用webkit作为渲染引擎。")]),t._v(" "),n("p",[n("em",[n("strong",[t._v("从渲染引擎性能角度看：微信的canvas元素，开放2D type，利用GPU加速优化渲染效果")])]),n("br"),t._v(" "),n("em",[n("strong",[t._v("也可以达到用终端原生的图形渲染库的效果")])])]),t._v(" "),n("h4",{attrs:{id:"小游戏canvas优化点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小游戏canvas优化点","aria-hidden":"true"}},[t._v("#")]),t._v(" 小游戏canvas优化点")]),t._v(" "),n("p",[t._v("小游戏引入一个adapter.js")]),t._v(" "),n("ol",[n("li",[t._v("核心canvas对象代码")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Canvas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCanvas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),t._v("\n\t    canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_HTMLElement2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _getContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getContext\n\t    canvas"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getBoundingClientRect")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t            top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t            left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t            width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t            height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight\n\t        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" canvas\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("有人提到小游戏是调用Native canvas，我看了一下就是skia这个引擎，而这个引擎我上面提到了"),n("br"),t._v("\n渲染优化的速度和GPU差不多。"),n("br"),t._v("\ncreateCanvas 是创建一个画布对象。首次调用创建的是显示在屏幕上的画布，\n之后调用创建的都是离屏画布。\n离屏渲染能优化渲染的流畅，就是费性能，需要多开一条通道。")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("事件")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchStart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("touchEventHandlerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchMove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("touchEventHandlerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchEnd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("touchEventHandlerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchend'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTouchCancel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("touchEventHandlerFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchcancel'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("小程序事件是绑定在组件上，当达到触发事件，再执行逻辑层中对应的事件处理函数。"),n("br"),t._v("\n小游戏是直接执行逻辑层的事件。从架构可以知道，这样少了一层进程通信交流。\njson格式的数据传递和解析比较费性能，如果频繁调用很可能损耗过多性能，进而影响用户体验。"),n("br"),t._v("\n为什么数据传递和解析费性能？我才发现IOS，android 进程通信是没法通过共享内存实现。"),n("br"),t._v("\n那序列化和反序列化成为数据交换的瓶颈，序列化反序列化涉及大量I/O操作，\n这些操作会占用大量 CPU。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[t._v("序列化将对象的状态信息转换为可以存储或传输的形式的过程。"),n("br"),t._v("\n在序列化期间，对象将其当前状态写入到临时或持久性存储区。"),n("br"),t._v("\n以后，可以通过从存储区中读取或反序列化对象的状态，重新创建该对象。"),n("br"),t._v("\n序列化反序列化的影响效果可以查看"),n("a",{attrs:{href:"https://github.com/nibilin33/vue-solution/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("11. 序列化反序列化性能影响情况"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png",alt:"渲染层和逻辑层"}})]),t._v(" "),n("h2",{attrs:{id:"模拟器实现分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模拟器实现分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 模拟器实现分析")]),t._v(" "),n("p",[t._v("微信工具的源码都混淆了，不好看，有人已经实现了个基本"),n("br"),t._v("\n流程，可以作为参考"),n("a",{attrs:{href:"https://github.com/chemzqm/wept",target:"_blank",rel:"noopener noreferrer"}},[t._v("模拟器 WEPT"),n("OutboundLink")],1),n("br"),t._v("\n或者参考"),n("a",{attrs:{href:"https://github.com/yuan1994/wechat_web_devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux版weixin-devtools"),n("OutboundLink")],1),n("br"),t._v("\n进行了解。")])])}),[],!1,null,null,null);s.default=e.exports}}]);