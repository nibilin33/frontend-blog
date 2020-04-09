(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{203:function(v,_,t){"use strict";t.r(_);var r=t(0),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"我的核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我的核心","aria-hidden":"true"}},[v._v("#")]),v._v(" 我的核心")]),v._v(" "),t("p",[v._v("如何用最少的代码做最多的事情，如何只专注逻辑本身")]),v._v(" "),t("h2",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题","aria-hidden":"true"}},[v._v("#")]),v._v(" 遇到的问题")]),v._v(" "),t("ol",[t("li",[v._v("设计，交互风格随着人员变化而变化，伴随而来的是琐碎，重复地返工过程，每一次的返工，\n都导致代码生命的尽头。 然而更随潮流，变更是无法抗拒的过程，那么怎样才能快速，最小化地满足变更？")]),v._v(" "),t("li",[v._v("ToB的产品形态，在固定的领域内也是相对固定的，那么不变的是什么，变化的是什么？\n如何利用这份相对做到更快地交付？(定制化的考虑？配置化？)"),t("br"),v._v(" "),t("router-link",{attrs:{to:"/guide/requirements.html#领域驱动设计"}},[v._v("领域驱动设计的思考")]),t("br"),v._v(" "),t("router-link",{attrs:{to:"/guide/requirements.html#定制化构想"}},[v._v("定制构想")])],1),v._v(" "),t("li",[v._v("在业务支撑过程偿还了大量最早的欠考虑的债，\n这样就需要考虑，同一个功能，不同平台，业务的数据流存在相同的时候，这层如何复用。"),t("br"),v._v("\n能否用一份代码打包出不同平台。（PC，移动，PWA，各种小程序，electron）  --- uniapp")]),v._v(" "),t("li",[v._v("开发完成后没有一套共同认知的测试方案，对自身代码如果在开发周期内没有做到极尽测试\n后面的修改的成本将随时间成倍增长。对前端的自测，到底要测哪些内容，用什么方式测,以及如何回归？")]),v._v(" "),t("li",[v._v("维护的困难：底层工具库不统一，编程范式不统一，没有任何描述，耦合严重，没有为未来预留......"),t("br"),v._v("\n这些让我对代码充满了恐惧，也许更改了一行代码，就会破坏一些根本不相关的东西，导致我下意识地采取更多的防御式编程，并对大的更改非常抵抗，如果没有绝对必要，不要碰任何相关的代码。")]),v._v(" "),t("li",[v._v("开发协作，人事变动，项目交接没有明确的基础需知，不同的经历或者习惯，必然造就一些不必要的问题。")]),v._v(" "),t("li",[v._v("无效总结：我犯过的错误只是我的积累，换个人重复地犯着一样的错误，如何让积累成为共同？")])]),v._v(" "),t("h2",{attrs:{id:"重构到底重构什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重构到底重构什么","aria-hidden":"true"}},[v._v("#")]),v._v(" 重构到底重构什么")]),v._v(" "),t("h4",{attrs:{id:"对重构的持有的态度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对重构的持有的态度","aria-hidden":"true"}},[v._v("#")]),v._v(" 对重构的持有的态度")]),v._v(" "),t("p",[v._v("不加思索地重写，最后只是会换另一个重写的理由，从中并不能获得‘可改进持续’的目的。"),t("br"),v._v("\n不加思索地拒绝重构，最后只是会在迭代的过程中一直偿还技术债，直至偿还不动宣告破产。\n如何找到那个平衡点？")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("持续性")])])]),v._v(" "),t("blockquote",[t("p",[v._v("1.1)每一次废弃，应该是以修改过去的代码为主观，而不是完全抛弃。\n我们更容易从错误的代码中学习，而不是从成功的经验中学习。")])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[v._v("可维护性")])])]),v._v(" "),t("blockquote",[t("p",[v._v("2.1)我为什么想使用Typescript?")]),v._v(" "),t("blockquote",[t("ol",[t("li",[v._v("使用类型和接口等概念来描述正在使用的数据，是极好的文档")]),v._v(" "),t("li",[v._v("让javascript的面向对象的特性更加明显")]),v._v(" "),t("li",[v._v("减少运行时错误")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("2.2)我为什么不想使用Typescript?")]),v._v(" "),t("blockquote",[t("ol",[t("li",[v._v("javascript 的开发者社区更巨大，更方便找到成熟的项目和可用资源")]),v._v(" "),t("li",[v._v("OOP开发经验很薄弱的时候，无法真正地利大于弊")]),v._v(" "),t("li",[v._v("无法说服自己面对存在仅需要修改语法的工作")])])])]),v._v(" "),t("blockquote",[t("p",[v._v("2.3) 见"),t("router-link",{attrs:{to:"/guide/requirements.html#typescript-运用"}},[v._v("Typescript的运用")])],1)]),v._v(" "),t("h2",{attrs:{id:"整个架构组成的思考的角度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整个架构组成的思考的角度","aria-hidden":"true"}},[v._v("#")]),v._v(" 整个架构组成的思考的角度")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("系统级：微前端（每个模块都能成为独立的项目？lerna 包管理，可独立依赖，可独立打包)，"),t("br"),v._v("\n监测"),t("a",{attrs:{href:"https://www.fundebug.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("fundebug"),t("OutboundLink")],1),v._v("（对方：浏览器，地理位置，带宽，自身：报错，性能 ：慢怎么个慢法，多种因素如何定位） , 日志")])]),v._v(" "),t("li",[t("p",[v._v("应用级：组件库 (改轮子进而贴近实际)")])])]),v._v(" "),t("blockquote",[t("p",[v._v("改轮子进而贴近实际，设计最多变化的为圆角，行高，颜色，字号。\n组件库引用的方式不再使用npm，而是直接打包完独立到项目中"),t("br"),v._v("\n一次变更对应着一个批量修改的脚本")])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("模块级：组件化，模块化")])]),v._v(" "),t("blockquote",[t("p",[v._v("3.1）如何设计合理的方式管理CSS，复用，隔离变化，通用变量"),t("br"),v._v("\n3.2）组件封闭原则和粒度")])]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("代码级：规范(示例包含简单功能流程，可快速依葫芦画瓢)，原则，质量")])]),v._v(" "),t("blockquote",[t("p",[v._v("4.1）开发流程：代码合并方式->代码提交信息（git hooks 检查）->代码规范自动化（Prettier + husky + airbnb + lint-staged）->测试驱动开发"),t("br"),v._v("\n4.2) 测试驱动开发基本步骤（交叉）")]),v._v(" "),t("blockquote",[t("p",[v._v("1.编写一个不通过的测试"),t("br"),v._v("\n2.运行这个测试，并保证它不能通过"),t("br"),v._v("\n3.编写应用代码，让测试通过"),t("br"),v._v("\n4.运行这个测试，保证它能通过"),t("br"),v._v("\n5.运行所有其他测试，保证程序的其他部分没有被破坏"),t("br"),v._v("\n6.重复以上步骤")])])]),v._v(" "),t("blockquote",[t("p",[v._v("4.3）质量正常没有一个重要的标准。质量代码是一种能够正常工作并易于扩展的代码。"),t("br"),v._v("\nEVAN的质量代码的原则：")]),v._v(" "),t("blockquote",[t("ul",[t("li",[v._v("提取函数和模块以简化接口。")]),v._v(" "),t("li",[v._v("通过测试验证代码行为。")]),v._v(" "),t("li",[v._v("尽量避免非纯函数。")]),v._v(" "),t("li",[v._v("良好的变量和函数命名。")])])])]),v._v(" "),t("h2",{attrs:{id:"开发的原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发的原则","aria-hidden":"true"}},[v._v("#")]),v._v(" 开发的原则")]),v._v(" "),t("ul",[t("li",[v._v("单一职责原则：仅存在一个需要被改变的理由 ，避免修改了一个功能导致其他的功能发生故障。"),t("br"),v._v("\n不要做万能组件或类的封装，当一个组件或者一个类知道了太多或者做了太多事情的时候，就要考虑重新找寻更好的拆分设计。")]),v._v(" "),t("li",[v._v("开闭原则：允许新增代码来修改系统行为，而非只能靠修改原来的代码")])]),v._v(" "),t("p",[v._v("具体见"),t("router-link",{attrs:{to:"/guide/requirements.html#介绍"}},[v._v("代码实践")])],1),v._v(" "),t("h2",{attrs:{id:"维护的原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#维护的原则","aria-hidden":"true"}},[v._v("#")]),v._v(" 维护的原则")]),v._v(" "),t("ul",[t("li",[v._v("从短期来看，如果能够快速地提供功能驱动业务增长，不论其设计多么丑陋，代码质量多么差，只要\n不影响性能，未来就有改进空间。")]),v._v(" "),t("li",[v._v("在业务进度不合理的情况下，只能在丑陋的，旧的代码上不断堆砌功能。")]),v._v(" "),t("li",[v._v("如果发展到影响业务了，就愉快地选择重写，走向更好的设计，架构。")])]),v._v(" "),t("h2",{attrs:{id:"todo-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#todo-list","aria-hidden":"true"}},[v._v("#")]),v._v(" Todo List")]),v._v(" "),t("ul",[t("li",[v._v("[ x ] "),t("strong",[v._v("整理利用typescript整改例子")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("编写git hooks")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("编写vscode i18n 插件")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("编写自动化测试范例")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("编写node命令行工具")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("编写组件库整改方式")])]),v._v(" "),t("li",[v._v("[ x ] "),t("strong",[v._v("编写生成代码组织结构图")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("编写node自动化gulp,phantomJS")])]),v._v(" "),t("li",[v._v("[ x ] "),t("strong",[v._v("编写内嵌本地化")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("web性能调优跟踪?strace?")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("业务价值的挖掘？用户的分析")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("静态资源包平台")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("监控funbug平台")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("协作小程序")])]),v._v(" "),t("li",[v._v("[ ] "),t("strong",[v._v("shadowrock ios 应用")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);