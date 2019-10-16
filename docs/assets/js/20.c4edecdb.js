(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{214:function(e,n,t){"use strict";t.r(n);var r=t(0),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"编码风格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编码风格","aria-hidden":"true"}},[e._v("#")]),e._v(" 编码风格")]),e._v(" "),t("p",[e._v("这份文档仅供统一项目编码风格")]),e._v(" "),t("h4",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),t("p",[t("strong",[e._v("实体（Entities）")]),e._v("，实体用于封装企业范围的业务规则。实体可以是拥有方法的对象，也可以是数据结构和函数的集合。如果没有企业，只是单个应用，那么实体就是应用里的业务对象。这些对象封装了最通用和高层的业务规则，极少会受到外部变化的影响。任何操作层面的改动都不会影响到这一层。"),t("br"),e._v(" "),t("strong",[e._v("用例（Use Cases）")]),e._v("，用例是特定于应用的业务逻辑，一般用来完成用户的某个操作。用例协调数据流向或者流出实体层，并且在此过程中通过执行实体的业务规则来达成用例的目标。用例层的改动不会影响到内部的实体层，同时也不会受外层的改动影响，比如数据库、UI 和框架的变动。只有而且应当应用的操作发生变化的时候，用例层的代码才随之修改。"),t("br"),e._v(" "),t("strong",[e._v("接口适配器（Interface Adapters）")]),e._v(" ，接口适配器层的主要作用是转换数据，数据从最适合内部用例层和实体层的结构转换成适合外层（比如数据持久化框架）的结构。反之，来自于外部服务的数据也会在这层转换为内层需要的结构。")]),e._v(" "),t("h4",{attrs:{id:"目录即分层的具体实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录即分层的具体实践","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录即分层的具体实践")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/%E7%9B%AE%E5%BD%95%E5%8D%B3%E5%88%86%E5%B1%823.png",alt:"目录即分层的具体实践"}})]),e._v(" "),t("blockquote",[t("p",[e._v("---- example"),t("br"),e._v("\n---- mock"),t("br"),e._v("\n---- public"),t("br"),e._v("\n---- src")]),e._v(" "),t("blockquote",[t("p",[e._v("---- api"),t("br"),e._v("\n---- assets"),t("br"),e._v("\n---- components"),t("br"),e._v("\n---- directives"),t("br"),e._v("\n---- i18n"),t("br"),e._v("\n---- lib"),t("br"),e._v("\n---- router"),t("br"),e._v("\n---- store"),t("br"),e._v("\n---- utils"),t("br"),e._v("\n---- views")]),e._v(" "),t("blockquote",[t("p",[e._v("---- login"),t("br"),e._v("\n---- __tests__"),t("br"),e._v("\n---- adapters"),t("br"),e._v("\n---- entity"),t("br"),e._v("\nindex.vue")])])])]),e._v(" "),t("ul",[t("li",[e._v("具体业务包含自己的适配器,实体,单元测试的目录")]),e._v(" "),t("li",[e._v("实体的目录包含简单的数据模型，核心的业务逻辑")]),e._v(" "),t("li",[e._v("适配器做一些数据的转换")]),e._v(" "),t("li",[e._v(".vue 做为用例层，编写用户行为的一些方法，其余的都只负责调用ts文件的方法。"),t("br"),e._v("\n这边与TS的整合，.vue 文件不使用vue-class-component来达到class的写法，保留之前的写法。"),t("br"),e._v("\n因为这种写法本身觉得绕了很多弯，是2.x为TS的支持补丁方式(vue-class-component.js 通过gzip 有3.8KB，\n源文件大小 11KB。vue-property-decorator.js 通过gzip 有2.4KB ，源文件大小9KB)。3.0会更好地支持，"),t("br"),e._v("\n至于  如何更好地支持，都必然能向下兼容。（3.0兼容性到IE11。）\n从业务的支撑以及需要来考虑变化。这一层变化目前上面的结构还是可以容许的。"),t("br"),e._v("\n另一方面的考虑，.vue文件基本是用户的行为结果，这边应该做到最大容忍，不管是乱来的输入还是不合常理的行为结果。\n以及之前封装好的组件在当前可以保持原状，也能少踩一些坑。")])]),e._v(" "),t("p",[e._v("planA:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".vue文件\n<template>\n    <div>\n        <button\n        v-for=\"(it,index) in loginType\"\n        :key=\"index\"\n        @click=\"setLoginType(it)\">\n        {{it}}</button>\n        <p>&nbsp;</p>\n         用户名：\n         <input v-model=\"userForm.username\"/>\n         密码：\n         <input v-model=\"userForm.code\"/>\n         <button @click=\"submit\">提交</button>\n    </div>\n</template>\n<script>\nimport StrategyLogin from './adapters/login';\nimport PlatformApi from '@/lib/PlatformApi';\nimport { PbxAPI } from './entity/pbx';\nimport { getLoginConfig } from '@/api/pbx';\nimport { transformToUse } from './adapters/pbx';\nexport default {\n  data() {\n    return {\n      loginType: ['notice', 'vote'],\n      result: {},\n      isShow: false,\n      userForm: new PbxAPI().params,\n    };\n  },\n  created() {\n    this.init();\n  },\n  methods: {\n    init() {\n      getLoginConfig()\n      .then((res)=> {\n          this.userForm = new PbxAPI(transformToUse(res)).params;\n          console.log(this.userForm);\n      });\n    },\n    submit() {\n      // 只负责接口调用\n      new PbxAPI(this.userForm).tramsfrom().submit();\n    },\n    setLoginType(value) {\n      const instance = StrategyLogin.getLoginInstance(value);\n      instance.login('12121212');\n    },\n  },\n};\n<\/script>\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("entity 文件  \nimport { transformToServer } from '../adapters/pbx';\n\nexport interface userData {\n    username:string\n    code:string\n}\nlet user :userData = { username: '', code: '' };\nexport const getUser = () => {\n  return Object.create(user);\n}\n// 一个实体，考虑，它应该拥有哪些属性，它拿这些属性能干什么  \nexport class PbxAPI {\n    private user: userData\n\n    constructor(params: userData = user) {\n      this.user = params;\n    }\n\n    get params() {\n      return this.user;\n    }\n\n    tramsfrom() {\n      this.user = transformToServer(this.user);\n      return this;\n    }\n\n    submit() {\n      console.log(this.user, 'submit');\n    }\n}\n\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("adapters 文件  \n\n\nexport const transformToServer = (data:any) => {\n// 如果提交的数据需要格式化,比如页面的交互数据为[{id:xx,name:xxx}],提交只需要[id,id,id]\n  console.log(data);\n  return data;\n}\n\nexport const transformToUse = (data:any) => {\n  // 拿到服务器数据做处理后给页面使用\n  console.log(data);\n  return data;\n};\n\n")])])]),t("p",[e._v("planB:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".vue\n<template>\n    <div>\n        <button\n        v-for=\"(it,index) in loginType\"\n        :key=\"index\"\n        @click=\"setLoginType(it)\">\n        {{it}}</button>\n        <p>&nbsp;</p>\n         用户名：\n         <input v-model=\"userForm.username\"/>\n         密码：\n         <input v-model=\"userForm.code\"/>\n         <button @click=\"submit\">提交</button>\n    </div>\n</template>\n<script lang=\"ts\">\nimport { Component, Vue } from 'vue-property-decorator';\nimport StrategyLogin from './adapters/login';\nimport PlatformApi from '@/lib/PlatformApi';\nimport { PbxAPI,userData } from './entity/pbx';\nimport { getLoginConfig } from '@/api/pbx';\nimport { transformToUse } from './adapters/pbx'\nexport default class Login extends Vue {\n    isShow: boolean = false\n    userForm: userData = { username: '', code: '' }\n    loginType: Array<string> = ['Notice', 'Vote']\n    result:Object = {}\n    created() {\n        this.init();\n    }\n    init() {\n      getLoginConfig()\n      .then((res)=> {\n          //即使我在construct 定义了userData的接口，后端数据进来如果没有做任何过滤，  \n          //里面有什么属性依然什么值都能进去，类型不符都不会有什么问题，  \n          //那么依然需要适配器在每个进入实体数据时候做处理。\n          this.userForm = new PbxAPI(res).params;\n          console.log(this.userForm);\n      });\n    }\n    submit() {\n      // 只负责接口调用\n      new PbxAPI(this.userForm).tramsfrom().submit();\n    }\n    setLoginType(value:string) {\n      const instance = StrategyLogin.getLoginInstance(value);\n      instance.login('12121212');\n    }\n}\n<\/script>\n")])])]),t("h4",{attrs:{id:"文件名文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件名文件结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 文件名文件结构")]),e._v(" "),t("p",[e._v("1.文件名全部为小写或包含-"),t("br"),e._v("\n2.单文件组件的顶级元素的顺序 template,script,style"),t("br"),e._v("\n3.有需要的生命周期按照被调用的顺序书写")]),e._v(" "),t("ul",[t("li",[e._v("beforeCreate")]),e._v(" "),t("li",[e._v("created")]),e._v(" "),t("li",[e._v("beforeMount")]),e._v(" "),t("li",[e._v("mounted")]),e._v(" "),t("li",[e._v("beforeUpdate")]),e._v(" "),t("li",[e._v("updated")]),e._v(" "),t("li",[e._v("activated")]),e._v(" "),t("li",[e._v("deactivated")]),e._v(" "),t("li",[e._v("beforeDestroy")]),e._v(" "),t("li",[e._v("destroyed")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<template>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n    };\n  },\n  watch: {\n  },\n  created() {\n  },\n  beforeDestroy() {\n  },\n  methods: {\n  }\n};\n<\/script>\n<style lang="scss">\n</style>\n')])])]),t("h4",{attrs:{id:"命名规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名规则","aria-hidden":"true"}},[e._v("#")]),e._v(" 命名规则")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("css 采用 BEM 命名规则"),t("br"),e._v("\neg："),t("br"),e._v("\n.listCard 块，高层次组件"),t("br"),e._v("\n.listCard__title 元素"),t("br"),e._v("\n.listCard--feature 修饰符，表示不同状态")])]),e._v(" "),t("li",[t("p",[e._v("script 采用驼峰"),t("br"),e._v("\n类的命名:首字母必须采用大写的形式"),t("br"),e._v("\n变量的命名：首字母小写")])])]),e._v(" "),t("h4",{attrs:{id:"样式变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 样式变量")]),e._v(" "),t("p",[e._v("样式中有需要颜色的地方，统一定义到body下面。"),t("br"),e._v("\n给多彩提供脚本直接在当前替换能力。"),t("br"),e._v("\n兼容性问题：css-vars-ponyfill")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("document.body.style.setProperty('--bgColor','red'); \n")])])]),t("p",[e._v("eg ："),t("br"),e._v("\nbody{\n--bgColor: blue;\n}"),t("br"),e._v("\n使用:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<style lang="scss" scoped>\n.title{\n  color:var(--bgColor);\n}\n</style>\n')])])]),t("h4",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[e._v("#")]),e._v(" 注释")]),e._v(" "),t("p",[e._v("尽量利用函数名称，参数或者返回值自身就足够传达信息。"),t("br"),e._v("\n短函数不需要太多描述，为只做一件事的短函数选个好名字，比写函数头注释要好。"),t("br"),e._v(" "),t("strong",[e._v("好注释")]),t("br"),e._v("\n1.对意图解释的注释"),t("br"),e._v("\n2.用于警告其他程序员会出现某种后果的注释"),t("br"),e._v("\n3.TODO 注释"),t("br"),e._v(" "),t("strong",[e._v("写注释的常见动机之一是糟糕代码的存在，与其花时间编写解释你搞出的")]),t("br"),e._v(" "),t("strong",[e._v("糟糕的代码的注释，不如花时间清洁代码。如果编程语言足够有表达里，就不那么需要注释")]),t("br"),e._v("\neg:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Async edge case fix requires storing an event listener's attach timestamp.\nlet _getNow: () => number = Date.now\n这段代码第一反应让人觉得没有必要，但加了上面的解释，达到认同。  \n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("这段代码从命名完全看不出想做什么，为什么这么做，作者的解释，让阅读代码者更快地理解。    \nfunction createInvoker(\n  initialValue: any,\n  instance: ComponentInternalInstance | null\n) {\n  const invoker: Invoker = (e: Event) => {\n    // async edge case #6566: inner click event triggers patch, event handler\n    // attached to outer element during patch, and triggered again. This\n    // happens because browsers fire microtask ticks between event propagation.\n    // the solution is simple: we save the timestamp when a handler is attached,\n    // and the handler would only fire if the event passed to it was fired\n    // AFTER it was attached.\n    if (e.timeStamp >= invoker.lastUpdated - 1) {\n      const args = [e]\n      const value = invoker.value\n      if (isArray(value)) {\n        for (let i = 0; i < value.length; i++) {\n          callWithAsyncErrorHandling(\n            value[i],\n            instance,\n            ErrorCodes.NATIVE_EVENT_HANDLER,\n            args\n          )\n        }\n      } else {\n        callWithAsyncErrorHandling(\n          value,\n          instance,\n          ErrorCodes.NATIVE_EVENT_HANDLER,\n          args\n        )\n      }\n    }\n  }\n  invoker.value = initialValue\n  initialValue.invoker = invoker\n  invoker.lastUpdated = getNow()\n  return invoker\n}\n")])])]),t("h4",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 函数")]),e._v(" "),t("p",[e._v("函数的第一个规则是要短小，第二条规则是只做一件事。")]),e._v(" "),t("h4",{attrs:{id:"项目-readme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目-readme","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目 README")]),e._v(" "),t("ul",[t("li",[e._v("运行命令")]),e._v(" "),t("li",[e._v("线上的示例或者最后的运行环境")]),e._v(" "),t("li",[e._v("相关的文档链接")]),e._v(" "),t("li",[e._v("相关人员的联系方式或群")]),e._v(" "),t("li",[e._v("代码组织结构图")])]),e._v(" "),t("h2",{attrs:{id:"开发前可考虑的事情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发前可考虑的事情","aria-hidden":"true"}},[e._v("#")]),e._v(" 开发前可考虑的事情")]),e._v(" "),t("ul",[t("li",[e._v("是否满足最小复杂度")]),e._v(" "),t("li",[e._v("设计时为维护工作的程序员考虑")]),e._v(" "),t("li",[e._v("信息隐藏： 这类，方法，组件该隐藏什么")]),e._v(" "),t("li",[e._v("找出容易改变的区域做划分")]),e._v(" "),t("li",[e._v("考虑潜在的变化，让这些变化的影响或范围与发生该变化的可能性成比")]),e._v(" "),t("li",[e._v("如何便于测试")]),e._v(" "),t("li",[e._v("层次性： 比如当需要调用设计不佳的旧代码的时候，就要编写一层同旧"),t("br"),e._v("\n代码交互的一层，这一层要隐藏代码的低劣质量，同时提供一组一致的服务。")]),e._v(" "),t("li",[e._v("参考常用的设计模式形成类似的解决方案")])]),e._v(" "),t("h2",{attrs:{id:"oop的设计步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oop的设计步骤","aria-hidden":"true"}},[e._v("#")]),e._v(" OOP的设计步骤")]),e._v(" "),t("ul",[t("li",[e._v("辨识对象及其属性（方法和数据）")]),e._v(" "),t("li",[e._v("确定可以对各个对象进行的操作")]),e._v(" "),t("li",[e._v("确定各个对象能对其他对象进行的操作")]),e._v(" "),t("li",[e._v("确定对象的哪些部分对其他对象可见，哪些部分而已是public，哪些是private")]),e._v(" "),t("li",[e._v("定义每个对象的公开接口,即向其他对象暴露的数据及方法")])]),e._v(" "),t("h2",{attrs:{id:"测试驱动开发的具体实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试驱动开发的具体实践","aria-hidden":"true"}},[e._v("#")]),e._v(" 测试驱动开发的具体实践")]),e._v(" "),t("ul",[t("li",[e._v("1.先编写伪代码，只有方法名以及流程")]),e._v(" "),t("li",[e._v("2.编写测试用例，描述功能点")]),e._v(" "),t("li",[e._v("3.交叉编写模块测试用例")]),e._v(" "),t("li",[e._v("4.具体逻辑开发"),t("br"),e._v("\n先编写测试，我们就能设身处地从代码使用者的角度考虑问题。"),t("br"),e._v("\n这种方式确保我们设计的每一个函数都由一系列测试驱动。"),t("br"),e._v("\n编写验证可考虑的类型：")]),e._v(" "),t("li",[e._v("正向测试： 当前置条件满足时，验证代码的结果确实符合预期。")]),e._v(" "),t("li",[e._v("反向测试： 当前置条件或输入不符合要求时，代码能优雅地进行处理。")]),e._v(" "),t("li",[e._v("异常测试： 代码在应该抛出异常的地方正确地抛出异常。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import { PbxAPI } from '../entity/pbx';\nimport { transformToUse } from '../adapters/pbx';\n\ntest('测试构建函数对数据的限制', ()=> {\n    const pbxWrong = new PbxAPI(Object.create({id:''})).params;\n    expect(pbxWrong).toEqual({username:'',code:''});\n    const pbxRight = new PbxAPI().params;\n    expect(pbxRight).toEqual({username:'',code:''});\n})\ntest('测试接口转换的结果', ()=> {\n    const data =  transformToUse({id:'xxx'});\n    expect(data).toEqual({username:'',code:''});\n})\n")])])]),t("p",[e._v("其实最后会发现，最好写测试的就是无副作用的函数，只需要考虑，输入，输出。")]),e._v(" "),t("h2",{attrs:{id:"typescript-运用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-运用","aria-hidden":"true"}},[e._v("#")]),e._v(" Typescript 运用")]),e._v(" "),t("p",[e._v("1.interface ,type\n使用接口来确保类拥有的指定结构，或者约束对象。"),t("br"),e._v("\n接口好比一个协议，当我们签署它的时候，必须遵守他的规则。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("interface ChinaMobile {\n    name: string;\n    website: string;\n}\ninterface ChinaMobileList {\n    // 动态属性\n    [phone: string]: ChinaMobile\n}\n")])])]),t("p",[e._v("2.enum"),t("br"),e._v("\n旧版：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const typeMach = {\n    image: 'browse_original_image',\n    file: 'down_file'\n}\n")])])]),t("p",[e._v("改版：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("enum typeMach {\n    image = 'browse_original_image',\n    file = 'down_file'\n}\n")])])]),t("p",[e._v("3.class,extends"),t("br"),e._v("\n在 .jsx 文件里，泛型可能会被当做 jsx 标签")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const toArray = <T>(element: T) => [element]; // Error in .jsx file.  \n")])])]),t("p",[e._v("修改方式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const toArray = <T extends {}>(element: T) => [element]; // No errors.  \n")])])]),t("details",[t("summary",[e._v("旧版代码，点击查看详细")]),e._v(" "),t("code",[e._v(" \nexport const network = { \n"),t("pre",[t("code",[e._v("    post(url, data, loading = false, warn = true) {  \n        service.loading = service.loading||loading;  \n        service.warn = warn;  \n        return Promise.resolve(  \n            service.post(url, {  \n                data  \n            })  \n        )  \n    },\n\nget(url, data, loading = false, warn = true) {\n    service.loading = service.loading||loading;\n    service.warn = warn;\n    return Promise.resolve(\n        service.get(url + (IS_IE_BROWSER ? `?T=${ new Date().getTime()}` : ''), {\n            params: data ? data : {}\n        })\n    )\n},\n\ndelete(url, data, loading = true, warn = true) {\n    service.loading = loading;\n    service.warn = warn;\n    return Promise.resolve(\n        service.delete(url, {\n            params:data\n        })\n    )\n},\n\nput(url, data, loading = true, warn = true) {\n    service.loading = loading;\n    service.warn = warn;\n    return Promise.resolve(\n        service.put(url, {\n            data\n        })\n    )\n},\n\npatch(url, data, loading = true, warn = true) {\n    service.loading = loading;\n    service.warn = warn;\n    return Promise.resolve(\n        service.patch(url, {\n            data\n        })\n    )\n}};  \nexport default network;  \n")])])])]),e._v(" "),t("details",[t("summary",[e._v("改版代码，点击查看详细")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  import axios from 'axios';\n  const CancelToken = axios.CancelToken;\n  const instance = axios.create({\n      headers: {\n          'Content-Type': 'application/json',\n      },\n      transformRequest: [function (data) {\n          return JSON.stringify(data);\n      }],\n  });\n\n  /**\n  *\n  * @description 阻止重复提交，错误处理，等待效果，过期处理\n  */\n\n  interface customConfig {\n      url:string,\n      data?: any,\n      isLoading?: boolean\n      error?: string\n  }\n  class Axios {\n      private pedding: Object\n      constructor() {\n          this.pedding = {};\n          this.intercepteRequest();\n          this.intercepteResponse();\n      }\n\n      post(params:customConfig) {\n          return instance.post(params.url,{data:params.data});\n      }\n\n      get(params:customConfig) {\n          return instance.get(params.url,\n              { params: params.data? params.data : {} });\n      }\n\n      delete(params:customConfig) {\n          return instance.delete(params.url,\n              { params: params.data? params.data : {} });\n      }\n\n      put(params:customConfig) {\n          return instance.put(params.url,{data:params.data});\n      }\n\n      patch(params:customConfig) {\n          return instance.patch(params.url,{data:params.data});\n      }\n\n      cancel() {\n          const source = CancelToken.source();\n          source.cancel('Operation canceled by the user');\n      }\n\n      intercepteRequest(options?:any) {\n          instance.interceptors.request.use((config) => {\n              // do something with the request data\n              console.log('Request was sent',config);\n              return config;\n            }, (error) => {\n              return Promise.reject(error);\n            });\n      }\n\n      intercepteResponse(options?:any) {\n          instance.interceptors.response.use((response) => {\n              // do something with the response data\n              console.log('Response was received');\n              return response;\n          }, (error) => {\n              return Promise.reject(error);\n          }); \n      }\n  }\n  export default Axios;\n")])])])]),e._v(" "),t("p",[e._v("4.namespace"),t("br"),e._v("\n命名空间，又称内部模块，用于组织一些具有某些内在联系的特性和对象，使代码结构更清晰。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("单例模式  \nnamespace Singleton {\n  export function someMethod() {}\n}\nSingleton.someMethod();\n")])])]),t("details",[t("summary",[e._v("旧版代码，点击查看详细")]),e._v(" "),t("pre",[e._v("  "),t("code",[e._v("\nauthLogin() {\nlet path = this.$route.path;\npath = path.split('/ume')[1]\nswitch (path) {\n    case '/extension':\n        let platformExtension = new PlatformApi(function() {\n            return new Promise((resolve, reject) => {\n                resolve({\n                    data: {\n                        clientId: 'web-extension'\n                    }\n                })\n            })\n        }, extensionLogin);\n        platformExtension.setRequestTimeOut(3000);\n        platformExtension.login(this.$route.query.code).then(token => {\n            this.refreshToken('extension');\n            this.setUserId(token.userId);\n            this.$router.push({ path: '/ume/web_extension' });\n        }).catch((error) => {\n            this.$router.push({ path: '/pcError/error', query: { type: 'web-extension', path: path, code: this.$route.query.code } })\n        });\n        break;\n    case '/notice':\n        let platformNotice = new PlatformApi(application, login);\n        platformNotice.consoleLog(\"notice logining\");\n        platformNotice.setRequestTimeOut(3000);\n        platformNotice.login(this.$route.query.code).then(token => {\n            sessionStorage.setItem('notice', JSON.stringify(token));\n            this.refreshToken('notice');\n            this.setUserId(token.userId);\n            platformNotice.consoleLog(\"notice login success:\" + JSON.stringify(token));\n            this.handleNotice();\n        }).catch((error) => {\n            platformNotice.consoleLog(\"notice login fail\");\n            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-bulletin', path: path, code: this.$route.query.code } })\n        });\n        break;\n    case '/meeting':\n        let platformMeeting = new PlatformApi(getApplication, umeLogin);\n        platformMeeting.consoleLog(\"meeting logining\");\n        platformMeeting.setRequestTimeOut(3000);\n        platformMeeting.login(this.$route.query.code).then(res => {\n            platformMeeting.consoleLog(\"meeting login success\" + JSON.stringify(res));\n            if (res.personal === null || typeof res.personal === \"undefined\") {\n                this.$router.push({ path: '/pcError/error', query: { type: 'yealink-conference', path: path, code: this.$route.query.code } })\n            } else {\n                sessionStorage.personal = JSON.stringify({ personal: res.personal });\n                this.refreshToken('meeting');\n                this.handleReservation();\n            }\n        }).catch(res => {\n            platformMeeting.consoleLog(\"meeting login fail\");\n            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-conference', path: path, code: this.$route.query.code } })\n            //this.$router.push('/uc/login')\n        });\n        break;\n    case '/vote':\n        let platformNoticeVote = new PlatformApi(applicationVote, loginVote);\n        platformNoticeVote.consoleLog(\"vote logining\");\n        platformNoticeVote.setRequestTimeOut(3000);\n        platformNoticeVote.login(this.$route.query.code).then(token => {\n            sessionStorage.setItem('vote', JSON.stringify(token));\n            this.refreshToken('vote');\n            this.setUserId(token.userId);\n            platformNoticeVote.consoleLog(\"vote login success:\" + JSON.stringify(token));\n            this.deleteLoading();\n            console.log(\"votelist--------\")\n            if (this.$route.query.groupId) {\n                this.$router.push({ path: '/vote/poll', query: { groupId: this.$route.query.groupId } });\n            } else {\n                this.$router.push({ path: '/vote/list', query: { id: this.$route.query.id } });\n            }\n        }).catch((error) => {\n            platformNoticeVote.consoleLog(\"vote login failed\");\n            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-vote', path: path, code: this.$route.query.code } })\n        });\n        break;\n    case '/changePwd':\n        let platformPwd = new PlatformApi(function() {\n            return new Promise((resolve, reject) => {\n                resolve({\n                    data: {\n                        clientId: 'yealink-pwdChange'\n                    }\n                })\n            })\n        }, pwdLogin);\n        platformPwd.setRequestTimeOut(3000);\n        platformPwd.login(this.$route.query.code).then(token => {\n            this.$router.push({ path: '/changePassword', query: { fullJid: token.bareJid } });\n        }).catch((error) => {\n            this.$router.push({ path: '/pcError/error' })\n        });\n        break;\n    case '/questionnaire':\n        let platQuestion = new PlatformApi(applicationQuestion, questionLogin);\n        platQuestion.setRequestTimeOut(3000);\n        platQuestion.login(this.$route.query.code).then(token => {\n            sessionStorage.setItem('questionnaire', JSON.stringify(token));\n            this.refreshToken('questionnaire');\n            this.setUserId(token.userId);\n            platQuestion.consoleLog(\"questionnaire login success:\" + JSON.stringify(token));\n            this.$router.push({ path: '/question/list', query: { id: this.$route.query.id } });\n        }).catch((error) => {\n            platQuestion.consoleLog(\"questionnaire login failed\");\n            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-questionnaire', path: path, code: this.$route.query.code } })\n        });\n        break;\n    case '/forward':\n        let platformForward = new PlatformApi(applicationForward, forwardLogin);\n        platformForward.consoleLog(\"forward logining\");\n        platformForward.setRequestTimeOut(3000);\n        platformForward.login(this.$route.query.code).then(token => {\n            sessionStorage.setItem('forward', JSON.stringify(token));\n            this.refreshToken('forward');\n            this.setUserId(token.userId);\n            platformForward.consoleLog(\"forward login success:\" + JSON.stringify(token));\n            this.deleteLoading();\n            this.$router.push({ path: '/self/forward', query: { id: this.$route.query.id } });\n        }).catch((error) => {\n            platformForward.consoleLog(\"forward login failed\");\n            this.$router.push({ path: '/pcError/error', query: { type: 'yealink-forward', path: path, code: this.$route.query.code } })\n        });\n        break;\n    case '/imessage':\n        let platformIM = new PlatformApi(function() {\n            return new Promise((resolve, reject) => {\n                resolve({\n                    data: {\n                        clientId: 'yealink-smsgateway'\n                    }\n                })\n            })\n        }, imLogin);\n        platformIM.setRequestTimeOut(3000);\n        platformIM.login(this.$route.query.code).then(token => {\n            sessionStorage.setItem('imessage', JSON.stringify(token));\n            this.refreshToken('imessage');\n            this.$router.push({ path: '/ume/self/imessage'});\n        }).catch((error) => {\n            this.$router.push({ path: '/pcError/error' })\n        });\n        break;\n    default:\n        console.error('type error');\n        break;\n}\n    }\n}\n  ")]),e._v(" \n    ")])]),e._v(" "),t("details",[t("summary",[e._v("改变后代码，点击查看详细")]),e._v("\n 利用策略者模式消除switch,if，利用namespace组织登录相关模块\n "),t("pre",[e._v(" "),t("code",[e._v("\n  authLogin() {\n      const value = this.$route.path;\n      const code =  this.$route.query.code;\n      const instance = StrategyLogin.getLoginInstance(value);\n      instance.login(code);\n  },\n ")]),e._v("\n"),t("code",[e._v("\nimport * as app from '@/views/login/entity';\nclass StrategyLogin {\n    static getLoginInstance(type:string) {\n        return new app.login[`${type}`]();\n    }\n}\nexport default StrategyLogin;\n上面这种写法会报类型错误，于是改成下面这种写法\nimport { login }from '@/views/login/entity';\nclass StrategyLogin {\n  static getLoginInstance(type:any) {\n    const allInstance = Object.values(login);\n    let curentInstance = allInstance.findIndex((it)=>{\n        return it.toString().toLowerCase().indexOf(type) > -1;\n    });\n    return new allInstance[curentInstance]();\n  }\n}\nexport default StrategyLogin;\n ")]),e._v("\n "),t("code",[e._v("\nimport {NoticeAPI} from './notice';\nexport namespace login {\n    export class Notice extends NoticeAPI{\n    }\n}\n ")]),e._v("\n ")])]),e._v(" "),t("p",[e._v("5.decorators (装饰者模式+切面编程,reflect-metadata)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('tsconfig.json\ncompilerOptions:{\n"experimentalDecorators": true\n}\n')])])]),t("p",[e._v("面向切面编程主要用于抽离与核心业务逻辑无关的功能，如日志统计、埋点、异常处理等等，"),t("br"),e._v("\n可以提高业务模块功能的纯净度与被分离模块的复用性。"),t("br"),e._v("\n装饰器用来为元素添加一些额外的逻辑或者元数据。\n装饰器：类，属性，方法，参数"),t("br"),e._v("\n类装饰器：接受一个类构造函数作为参数的函数"),t("br"),e._v("\n方法装饰器：接受属性的对象，属性名和一个可选的参数"),t("br"),e._v("\n属性装饰器： 接受属性的对象和属性的属性名"),t("br"),e._v("\n参数装饰器： 接受被装饰参数的方法的对象，方法的名字和参数在参数列表中的索引。"),t("br"),e._v("\nreflect-metadata：反射元数据 API"),t("br"),e._v("\n元数据是指程序本身的信息数据，元数据存储在程序集中;\n反射就是在运行时动态获取一个对象的一切信息：方法/属性等等。"),t("br"),e._v("\neg："),t("br"),e._v("\n埋点   (google 分析？)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/**\n * @interface UserBehavior\n * eventProperty：事件属性，事件描述\n */\ninterface UserBehavior{\n  module?: string,\n  eventName: string,\n  eventProperty: string,\n  version?: string,\n  date?: Date,\n  dns?:string,\n  connect?:string,\n  ttfb?:string,\n  basePage?:string,\n  frontEnd?:string\n}\n\nexport function Log(value:UserBehavior) {\n  return function (target: any, name: string, descriptor: PropertyDescriptor) {\n    const timing = window.performance.timing;\n    Object.assign(value, {\n        date: new Date(),\n        version: navigator.platform,\n        module: name,\n        dns: timing.domainLookupEnd - timing.domainLookupStart,\n        connect: timing.connectEnd - timing.connectStart,\n        ttfb: timing.responseStart - timing.connectEnd,\n        basePage: timing-responseEnd - timing.responseStart,\n        frontEnd: timing.loadEventStart - timing.responseEnd\n    })\n  };\n}\nimport { Log } from '@/utils/log';\nexport class NoticeAPI {\n    @Log({eventName: 'notice-login',eventProperty: '用户登录'})\n    login(code:string) {\n        apiLogin(code);\n    }\n}\n")])])]),t("p",[e._v("参数的提交的各种处理，校验也可以用这种方式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import \"reflect-metadata\";\nexport function format(target: any, name: string|symbol, descriptor: PropertyDescriptor) {\n    const savedValue = descriptor.value;\n    // 如果多个参数表 （...args:any[]）\n    descriptor.value = (args:string) =>{\n        console.log(args,\"before\");\n        args = 'dddd';\n        return Reflect.apply(savedValue,target,[args]);\n    }\n}\nimport { format } from '@/views/login/adapters/transform-params';\nexport class VoteAPI {\n    @format\n    login(code:string) {\n        console.log(code,\"after\");//此时after的值为'ddd'\n    }\n}\n")])])]),t("p",[e._v("6.泛型 T ，允许使用的时候定义类型(通用函数的考虑)"),t("br"),e._v("\neg：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('geEntities<T>(url:string):void{\n  axois.get(url)\n    .then() {\n      //todo\n    }\n}\ngeEntities<User>("/api/users"):void{\n\n}\n')])])]),t("p",[e._v("7.Omit\n有时候我们需要复用一个类型，"),t("br"),e._v("\n但是又不需要此类型内的全部属性，"),t("br"),e._v("\n因此需要剔除某些属性 -- Omit")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("interface User {\n    username: string\n    id: number\n    token: string\n    avatar: string\n    role: string\n}\ntype UserWithoutToken = Omit<User, 'token'>\n")])])]),t("h2",{attrs:{id:"常用的设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的设计模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 常用的设计模式")])])}),[],!1,null,null,null);n.default=a.exports}}]);