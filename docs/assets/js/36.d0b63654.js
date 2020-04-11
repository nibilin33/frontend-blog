(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{220:function(t,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Anaconda:python 版本和第三方库管理")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.anaconda.com/anaconda/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装步骤"),a("OutboundLink")],1),t._v(" https://docs.anaconda.com/anaconda/install/")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.conda.io/projects/conda/en/latest/user-guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用说明"),a("OutboundLink")],1),t._v(" https://docs.conda.io/projects/conda/en/latest/user-guide/index.html")])]),t._v(" "),a("li",[a("p",[t._v("常用命令")])])]),t._v(" "),a("blockquote",[a("p",[t._v("conda create --name snakes python=2.7\nconda env list 查看创建的环境\nconda activate envname 激活当前环境")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("编辑器我使用pycharm，永久注册方式：\n修改pycharm64.exe.vmoptions"),a("br"),t._v("\n-javaagent:你pycharm的安装目录\\jetbrains-agent.jar"),a("br"),t._v(" "),a("a",{attrs:{href:"https://pan.baidu.com/s/1z7zBV1wGGJi74jylLMxQ7g",target:"_blank",rel:"noopener noreferrer"}},[t._v("永久激活"),a("OutboundLink")],1),t._v("\n提取码：cc2v"),a("br"),t._v("\n提取二维码：")])]),t._v(" "),a("h2",{attrs:{id:"国际化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国际化","aria-hidden":"true"}},[t._v("#")]),t._v(" 国际化")]),t._v(" "),a("ol",[a("li",[t._v("实现思路"),a("br"),t._v("\n1.1）新项目开发利用python脚本替换中文为$t"),a("br"),t._v("\n1.2）重构或者迭代项目利用vscode国际化插件替换已有的国际化"),a("br"),t._v(" "),a("a",{attrs:{href:"https://code.visualstudio.com/api/get-started/your-first-extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode 插件开发"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/antfu/i18n-ally",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode 参考"),a("OutboundLink")],1)])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("p",[a("span",{staticClass:"emoj"},[t._v("🙉")]),t._v("在公司写的，不能这么直白")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用说明")])]),t._v(" "),a("h2",{attrs:{id:"项目发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目发布","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目发布")]),t._v(" "),a("ol",[a("li",[t._v("实现思路")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("本地目录放到服务器目录")]),t._v(" "),a("li",[t._v("执行打包命令")]),t._v(" "),a("li",[t._v("下载包到本地，本地中转到目标打包目录")]),t._v(" "),a("li",[t._v("发送邮件")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("p",[a("span",{staticClass:"emoj"},[t._v("🙉")]),t._v("在公司写的，不能这么直白")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用说明"),a("br"),t._v("\n安装依赖pip install paramiko,pip install pywin32"),a("br"),t._v("\n配置使用看show me the code 的注释说明")])]),t._v(" "),a("h2",{attrs:{id:"代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码生成","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码生成")]),t._v(" "),a("ol",[a("li",[t._v("实现思路")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("爬取后端api 接口，解析出url和方法")]),t._v(" "),a("li",[t._v("根据项目规范生成请求代码")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("p",[a("span",{staticClass:"emoj"},[t._v("🙉")]),t._v("在公司写的，不能这么直白")])]),a("h2",{attrs:{id:"代码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码分析")]),t._v(" "),a("p",[t._v("背景：\n项目需要移植另一个项目的功能，本身这个项目就是基于那个项目改的。"),a("br"),t._v("\n对于完全不熟悉功能点，移植很容易出问题。")]),t._v(" "),a("ol",[a("li",[t._v("实现思路")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("比较出相同目录相同文件的差异")]),t._v(" "),a("li",[t._v("比较出增加文件")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用说明")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("p",[a("span",{staticClass:"emoj"},[t._v("🙉")]),t._v("在公司写的，不能这么直白")])]),a("h2",{attrs:{id:"自动化测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动化测试")]),t._v(" "),a("ol",[a("li",[t._v("Selenium IDE\nSelenium IDE是Firefox浏览器的一个插件，依附于Firefox浏览器。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FireFox 插件"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/nibilin33/frontend-blog/raw/master/press/guide/crx/chrome_selenium.crx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome 插件"),a("OutboundLink")],1),t._v("\n(https://github.com/nibilin33/frontend-blog/raw/master/press/guide/crx/chrome_selenium.pem)")]),t._v(" "),a("li",[t._v("WebdriverIO"),a("br"),t._v(" "),a("a",{attrs:{href:"https://webdriver.io/docs/api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("XPath\n"),a("a",{attrs:{href:"https://devhints.io/xpath",target:"_blank",rel:"noopener noreferrer"}},[t._v("xpath"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("python 录制回放"),a("br"),t._v("\n由于利用selenium感觉编写操作的代码比较多而且很难复用，"),a("br"),t._v("\n就还是想把操作录制，回放执行的时候做基准图像比较判断，"),a("br"),t._v("\n有差异的生成差异图，"),a("br"),t._v("\n最后生成报告。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("操作键盘鼠标的库:pynput"),a("br"),t._v("\n存储操作：sqlite"),a("br"),t._v("\nhtml报告：%格式格式化"),a("br"),t._v("\n\"%(name)s-----%(age)d \"%{'name':'xx','age':20}"),a("br"),t._v("\nxx-----20")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("pip install pynput  \npip install pysqlite    \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"自动下载并安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动下载并安装软件","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动下载并安装软件")]),t._v(" "),a("p",[t._v("背景：换台电脑装环境都要折腾很久，建一个虚拟机装环境也要很久")]),t._v(" "),a("ol",[a("li",[t._v("实现思路")])]),t._v(" "),a("blockquote",[a("p",[t._v("软件能自动批量下载到指定目录"),a("br"),t._v("\n执行安装程序，跳过图形界面的各种确定按钮")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/xiongzaiqiren/p/11268615.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://blog.51cto.com/8686505/2438270",target:"_blank",rel:"noopener noreferrer"}},[t._v("基本语法"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"linux-初始化node-环境shell-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-初始化node-环境shell-脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux 初始化node 环境shell 脚本")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget http://nodejs.org/dist/v8.11.1/node-v8.11.1-linux-x64.tar.gz \n\ntar  xf node-v8.11.1-linux-x64.tar.gz -C /usr/local/\n\ncd /usr/local/\n\nmv node-v8.11.1-linux-x64/ nodejs\n\nln -s /usr/local/nodejs/bin/node /usr/local/bin\n\nln -s /usr/local/nodejs/bin/npm /usr/local/bin\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("执行命令")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chomd 744 node_init.sh \n./node_init.sh  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://github.com/nibilin33/python-tool/blob/master/shell/node_init.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整下载"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"github-爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-爬虫","aria-hidden":"true"}},[t._v("#")]),t._v(" github 爬虫")]),t._v(" "),a("p",[t._v("github 爬虫开放"),a("a",{attrs:{href:"https://developer.github.com/v3/search/#search-users",target:"_blank",rel:"noopener noreferrer"}},[t._v("api"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);