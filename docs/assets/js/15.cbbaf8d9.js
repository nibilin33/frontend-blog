(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{203:function(n,s,e){"use strict";e.r(s);var a=e(0),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"起步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[n._v("#")]),n._v(" 起步")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install -g vue-cli\nvue init simulatedgreg/electron-vue my-project\n# 安装依赖并运行你的程序\ncd my-project\nnpm install\nnpm run dev\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("由于 simulatedgreg 太久没有更新，electron版本还是用2.x的"),e("br"),n._v("\n方法二(慢的话用cnpm)"),e("br"),n._v("\nnpm install -g electron\nnpm install -g electron-forge"),e("br"),n._v("\nelectron-forge init projectName\nelectron-forge start"),e("br"),n._v("\n方法三"),e("br"),n._v("\nvue-cli init project\nvue add electron-builder"),e("br"),n._v("\n如果出现异常，反复vue add electron-builder")]),n._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),e("p",[e("a",{attrs:{href:"http://www.ayqy.net/blog/electron-webview%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97/",target:"_blank",rel:"noopener noreferrer"}},[n._v("electron-webview完全指南"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[n._v("#")]),n._v(" 使用")]),n._v(" "),e("p",[n._v("加入项目作为内嵌模拟工具")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<template>\n  <div id=\"wrapper\">\n    设置加载URL：<input\n      @keydown.enter=\"setUrl\"\n      style=\"width:100%\"\n      v-model=\"pageUrl\"/>\n    <button @click=\"setUrl\">设置</button>\n    <br/>\n    <button :disabled=\"!ready\" @click=\"sendMsg({\n      param: {\n        notify:'notify_language_changed',\n        lang: 'English'\n      }\n    })\">英文</button>\n    <button :disabled=\"!ready\"\n    @click=\"sendMsg({\n      param: {\n        notify:'notify_language_changed',\n        lang: 'Chinese_S'\n      }\n    })\">中文</button>\n    <button\n      :disabled=\"!ready\"\n      @click=\"sendMsg({\n      param: {\n        notify:'notify_theme_changed',\n        theme: 'Default'\n      }\n    })\">正常模式</button>\n    <button :disabled=\"!ready\"\n      @click=\"sendMsg({\n      param: {\n        notify:'notify_theme_changed',\n        theme: 'Dark'\n      }\n    })\">深色模式</button>\n    <webview id=\"webview\" src=\"file:///J:/gitlab/ume-2.3-for-testlocal/server/dist/pc/index.html\"></webview>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'landing-page',\n    data() {\n      return{\n        pageUrl:'',\n        ready: false,\n\n      }\n    },\n    mounted() {\n    },\n    methods: {\n      setUrl() {\n        if (!this.pageUrl) {\n          alert('请输入链接');\n        }\n        const webview = document.getElementById('webview');\n        webview.loadURL(this.pageUrl);\n        webview.style.height = '80vh';\n        webview.addEventListener('dom-ready',()=>{\n              const webContents = webview.getWebContents().webContents;\n              webContents.on('did-finish-load', () => {\n                this.ready = true;\n              });\n        })\n      },\n      sendMsg(msg) {\n        const webview = document.getElementById('webview');\n        const webContents = webview.getWebContents().webContents;\n        webContents.executeJavaScript(`receiveMessageFromPlatformFunc('${JSON.stringify(msg)}')`);\n      },\n    }\n  }\n<\/script>\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br")])]),e("h2",{attrs:{id:"可能遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可能遇到的问题","aria-hidden":"true"}},[n._v("#")]),n._v(" 可能遇到的问题")]),n._v(" "),e("p",[n._v("1.webview 不识别"),e("br"),n._v("\nhttps://github.com/electron/electron/blob/master/docs/api/breaking-changes.md#new-browserwindow-webpreferences-")])])}),[],!1,null,null,null);s.default=t.exports}}]);