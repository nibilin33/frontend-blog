
## webpack  
Why: 解决代码的拆分问题     
What: 现代JavaScript 应用程序的静态模块打包工具,能做代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布        
How: 构建依赖图，生成chunk        
通过官网可以知道关键概念：    
Entry：构建第一步从entry开始。  
Module:一个模块对应一个文件，webpack会从entry开始，递归找出所有依赖的模块。     
Chunk：代码块，一个Chunk由多个模块组合而成，用于代码合并与分割。        
Loader: loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）.    
Plugin:loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。 
插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。   
 
先浏览了一下package.json,依赖了哪些。        
发现了不少第一次见到的库<span class="emoj">🙉</span>
1. json-schema-to-typescript, json schema 校验格式是否规范
2. memory-fs, node原生fs模块内存版(in-memory)的完整功能实现。   
memory-fs是内存缓存和快速数据处理的完美替代方案。webpack间过程中打包的文件  
是利用这个放到内存，减少了代码写入文件的开销。  
实现原理：把数据都放到一个js 对象里面，实现文件的几个api. 
3. rimraf， 递归删除目录所有文件    
4. graceful-fs, 可以替代fs模块，是对fs模块的改进，使不同平台和环境之间的行为规范化，并使文件系统访问对错误的恢复更具弹性。      
5. vm, 提供了在 V8 虚拟机上下文中编译和运行代码的一系列 API。JavaScript 代码可以被编译并立即运行，也可以编译、保存，以后再运行。  
6. Tapable,公开了许多Hook类，可用于为插件创建钩子。专注于自定义事件的触发和处理。
7. source-map，是一个存储了打包前所有代码的行，列信息的mapping文件,,以及VLQ编码的字母记录着转换前的代码的位置。
8. benchmark，代码基准测试，分析代码性能。   
9. portfinder, 自动获取端口.  
10. serve-index, 将文件夹中文件列表显示到浏览器中.[具体](https://www.cnblogs.com/zhaoweikai/p/9662572.html)   
11. internal-ip,获取内网IP地址. 
### 整体流程    
Webpack 的运行流程是一个串行的过程    
• 初始化参数 从配置文件和 Shell 语句中读取与合并参数，得出最终的参数    
• 开始编译：用上一步得到的参数初始Compiler 对象，加载所有配置的插件，通
过执行对象的 run 方法开始执行编译       
• 确定入口:根据配置中的 Entry 找出所有入口文件    
• 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出
模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理    
• 完成模块编译:在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被
翻译后的最终内容及它们之间的依赖关系。    
• 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk,
再将每个 Chunk 转换成一个单独的文件加入输出列表中，这是可以修改输出内容
的最后机会    
• 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内
容写入文件系统中。
以上过程中， Webpack 会在特定的时间点广播特定的事件，插件在监听到感兴趣的
事件后会执行特定的逻辑，井且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行
结果。 

### 参数管理  
使用json-schema-to-typescript去生成   
/declarations   .ts 文件  
结合jsdoc 引入类型声明    
```js
/**
@typedef {import("../declarations/plugins/
 ProgressPlugin").HandlerFunction} HandlerFunction 
**/
```
用schema-utils去校验传入的参数    
```js
const validateOptions = require("schema-utils");
const schema = require("../schemas/plugins/DllPlugin.json");
constructor(options) {
		validateOptions(schema, options, {
			name: "Dll Plugin",
			baseDataPath: "options"
		});
		this.options = {
			...options,
			entryOnly: options.entryOnly !== false
		};
}
```
### 构建依赖图    

### 输出        
webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射.    
可以安装webpack-manifest-plugin 
查看打包后的manifest。  

### 构建优化    
对于 HTTP/2，可以使用代码分离来实现最佳构建结果   
[http2-aggressive-splitting](https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting)    

### 相关插件    
1. webpack-dev-server  
2. webpack-dev-middleware：它作为一个容器，将 webpack 编译后的文件存储到内存中，然后在用户访问 express 服务时，将内存中对应的资源输出返回。 

## vue      
[12道vue高频原理面试题,你能答出几道?](https://juejin.im/post/5e04411f6fb9a0166049a073#heading-23)   
[router 工作原理](https://segmentfault.com/a/1190000019386190)   
::: tip vue 专题    
1. 如何理解MVVM原理?
2. 响应式数据的原理是什么?
3. Vue中是如何检测数组变化?劫持数组，改写数组方法   
4. 为何Vue采用异步渲染?每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用VirtualDOM进行计算得出需要更新的具体的DOM节点，然后对DOM进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要。   
5. nextick实现原理?
6. vue组件的生命周期?
7. Ajax请求放在哪个生命周期中?
8. 何时需要使用beforeDestroy? 清除自己定义的定时器，事件解绑   
9. Vue父子组件生命周期调用顺序?
10. Vue中Computed的特点?
11. Watch中的deep:true是如何实现的?
12. Vue中事件绑定的原理?
13. Vue中v-html会导致哪些问题?
14. Vue中v-if和v-show的区别?
15. 为什么V-for和v-if不能连用   
16. v-model中的实现原理及如何自定义v-model?
17. 组件中的data为什么是一个函数? 因为组件是可以复用的,JS 里对象是引用关系,如果组件 data 是一个对象,那么子组件中的 data 属性值会互相污染,产生副作用。
所以一个组件的 data 选项必须是一个函数,因此每个实例可以维护一份被返回对象的独立的拷贝。new Vue 的实例是不会被复用的,因此不存在以上问题。    
18. Vue组件如何通信?
19. 什么是作用域插槽?
20. 用vnode来描述一个DoM结构?
21. diff算法的时间复杂度?O(n)
22. 简述Vue中diff算法原理?
23. v-for中为什么要用key?
24. 描述组件渲染和更新过程?
25. Vue中模板编译原理?  
模板字符串 转换成 element ASTs（解析器）    
对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）    
使用 element ASTs 生成 render 函数代码字符串（代码生成器）    
26. Vue中常见性能优化?
27. Vue中相同逻辑如何抽离?
28. 为什么要使用异步组件?
29. 谈谈你对keep-alive的了解?
30. 实现hash路由和history路由
31. Vue-Router中导航守卫有哪些?
32. action和mutation区别    
流程顺序:“相应视图—>修改State”拆分成两部分，视图触发Action，Action再触发Mutation。
角色定位:基于流程顺序，二者扮演不同的角色。   
Mutation：专注于修改State，理论上是修改State的唯一途径。
Action：业务代码、异步请求。
限制:角色不同，二者有不同的限制。
Mutation：必须同步执行。
Action：可以异步，但不能直接操作State。
33. 简述Vuex工作原理
34. Vue3.0你知道有哪些改进?   
virtual DOM 完全重写，mounting & patching 提速 100%；   
更多编译时 （compile-time）提醒以减少 runtime 开销；    
基于 Proxy 观察者机制以满足全语言覆盖以及更好的性能；   
优化插槽生成(Optimized Slots Generation):以单独重新渲染父组件和子组件   
静态树提升(Static Tree Hoisting):Vue 3 的编译器将能够检测到什么是静态组件，然后将其提升，从而降低了渲染成本。它将能够跳过未整个树结构打补丁的过程。
静态属性提升（Static Props Hoisting）   
更易于开发使用: import {Observer }  from 'vue'  
新的 core runtime：~ 10kb gzipped；   
实验性的 Time Slicing 支持:有许多组件同时尝试重新渲染时，任何浏览器都可以开始变得很慢，从而使用户体验下降。
尝试使用 Time Slicing，将 JS 的执行分解为几个部分，如果有用户交互需要处理，这些部分将提供给浏览器。

::: 
答：没看答案之前，答上了一半。<span class="emoj">🙉</span>我根据API的表现形式，猜测出大概实现方式，但是还是有没有
反应过来的。我不喜欢人家问你看过XX的源码吗？没有（<span class="emoj">😒</span>）|有（<span class="emoj">😍</span>）。   
因为有自己没有想到的思路，才推动了我去看源码的兴趣。    
核心：发布订阅模式Dep+object.defineproperty数据劫持    
### watch   
创建 Observer 实例观察数据，Observer 又创建 Dep , Dep 用来维护订阅者。然后创建 Watcher 实例提供 update函数。一旦数据变动，就层层执行回调函数。

### keep-alive       
1. 它是个vue 组件,负责渲染子组件           
2. 用一个cache对象存对应组件：cache[vnode.key]=componentInstance;
3. 监听include,exclude, 发生变更的时候就对应操作cache对象。 
4. 将最近访问的组件 push 到 this.keys 最后面,this.keys[0]也就是最久没被访问的组件,当缓存实例超过 max 设置值,删除 this.key[0]   
keep-alive 使用的是LRU缓存机制，[LRU实现](https://github.com/nibilin33/Interviews/blob/master/codes/146.lru%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6.js) 
### nextTick    
1. 用一个队列存再包装的function,function里面执行cb    
2. timerFunc 主要是利用setTimeout等让callback放入任务队列去等待下一次空闲时候执行。 
3. MutationObserver 这个api不常用，了解了一下
> MutationObserver接口提供了监视对DOM树所做更改的能力
disconnect()
阻止 MutationObserver 实例继续接收的通知，直到再次调用其observe()方法，该观察者对象包含的回调函数都不会再被调用。       
observe()       
配置MutationObserver在DOM更改匹配给定选项时，通过其回调函数开始接收通知。       
takeRecords()       
从MutationObserver的通知队列中删除所有待处理的通知，并将它们返回到MutationRecord对象的新Array中。       
```js

export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```
### v-on,v-bind,v-model 
v-model 是v-on 和v-bind的语法糖 
```js
<input v-model="sth" />
<input v-bind:value="sth" v-on:input="sth = $event.target.value" />
```
简单来说，就是包了层方法去执行  
on 
```js
export default function on (el: ASTElement, dir: ASTDirective) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn(`v-on without argument does not support modifiers.`)
  }
  el.wrapListeners = (code: string) => `_g(${code},${dir.value})`
}
```
bind  
```js
export default function bind (el: ASTElement, dir: ASTDirective) {
  el.wrapData = (code: string) => {
    return `_b(${code},'${el.tag}',${dir.value},${
      dir.modifiers && dir.modifiers.prop ? 'true' : 'false'
    }${
      dir.modifiers && dir.modifiers.sync ? ',true' : ''
    })`
  }
}

```
### v-if、v-show、v-html,v-for   
都是将指令解析到AST，然后用AST生成代码字符串，最后在虚拟DOM渲染时候触发指令钩子函数让指令生效。   
提到AST，有在线的展示js代码解析成AST的样子[https://astexplorer.net/](https://astexplorer.net/)    
### key 的作用      
我的理解：更快地定位到要比较的节点找出差异，不用一层层找。就优化了diff算法 。   
diff 算法核心：updateChildren方法<span class="emoj">🙉</span>    
太多......if elseif elseif......冷静下来，画一下图（<span class="emoj">🙉</span>字忽略）....  
核心思想：尽量复用相同节点，所以会从旧节点里面找到和新节点一样的，进行移动。    

<ClientOnly>
<diff/>
</ClientOnly> 

我按着这个思路写了一个简易版...<span class="emoj">🙉</span> 
[vue-diff](https://github.com/nibilin33/Interview-Days/blob/master/code-practice/3-12/vue-diff.js)  

### vuex  
核心：  
```js
this._watcherVM = new Vue();
```
本质： 就是一个没有template的vue对象。  

### vue-router  
看了眼install.js文件...离不开数据劫持   
router 基本依托于window.history的api, 
那么url与组件的渲染匹配关系本质上利用了vue的响应式属性，  
在route属性变更和router-view视图渲染之间建立关系。    
```js
  Vue.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })
```
### vue-server-renderer  
原理：虚拟dom(用JavaScript模拟DOM树，并渲染这个DOM树，变更的时候把差异对象应用到渲染的DOM树。)    
主要方法：renderToString  
就找到核心renderNode(component._render(), true, context); 
利用vue的私有_render方法，把组件转成html之后返回客户端。  
顺藤摸瓜，找到_render,从_render找createElement,然后找到[虚拟dom](https://github.com/snabbdom/snabbdom)的算法来源。  
```js 
  Vue.prototype._render = function () {
    .....
    return vnode
  };  
  /**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
```


## babel
Babel 是一个 JavaScript 编译器      
Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行 在当前和旧版本的浏览器或其他环境中。       
功能：      
语法转换    
通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)    

::: tip 源码转换 (codemods)
第1步 解析（Parse）   
通过解析器babylon将代码解析成抽象语法树。   
第2步 转换（TransForm）   
通过babel-traverse plugin对抽象语法树进行深度优先遍历，遇到需要转换的，就直接在AST对象上对节点进行添加、更新及移除操作，比如遇到箭头函数，就转换成普通函数，最后得到新的AST树。   
第3步 生成（Generate）
通过babel-generator将AST树生成es5代码。   
:::

1. transform-runtime    
为了解决全局对象或者全局对象方法编译不足的情况，才出现了transform-runtime这个插件，
但是它只会对es6的语法进行转换，而不会对新api进行转换  


参考    
[Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)     
[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)     
## express  
## lodash   
看到一段很妙的正则    
解析'a[0].b.c'这种格式    
```js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;

string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
});
```
1. 反向引用 \1. \2...
表达式在匹配时，表达式引擎会将小括号 "( )" 包含的表达式所匹配到的字符串记录下来。在获取匹配结果的时候，小括号包含的表达式所匹配到的字符串可以单独获取   
2. ?: 匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用   
**这瞬间启发了我，好几个手写题**      
```js  
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
function render(template, data){
  let reg = /{{(\w+)}}/g;
  return template.replace(reg,function(match,name){
    return data[name];
  });
}
// 输出：我是姓名，年龄18，性别undefined
```
```js
var s1 = "get-element-by-id";
// 转化为 getElementById
function caseIgnore(s) {
  const reg = /-(\w)/g;
  return s.replace(reg,function(match,res){
    return res.toUpperCase();
  })
}
```
```js
//return '1.087.654.321'
function parseToMoney(value){
  const reg = /(\d)(?=(\d{3})+$)/g;
  let sm = value.split('.');
  let res = sm[0].replace(reg,function(match){
    return match+',';
  })
  return res+(sm.length>1?'.'+sm[1]:'');
}
```
[正则手册](https://tool.oschina.net/uploads/apidocs/jquery/regexp.html)  
[正则之环视](https://blog.csdn.net/chencye/article/details/51635391)    
## react  
::: tip react 专题 
1. react key的作用？如果出现了相同的key怎么办？   
2. React 中的 setState 为什么需要异步操作？   
3. React 应用如何在重新加载页面时保留数据？ 
4. 使用 React Hooks 的同时为什么需要使用高阶组件？  
5. Ajax 请求放在 componentDidMount 里进行处理还是放在componentWillMount 里进行处理比较合适？    
AJAX请求应在 componentDidMount函数 进行请求。   
6. React 在语法层面可以做哪些性能优化？   
PureComponent + Redux + immutable-js / immutability-helper    
Redux ->  Redux Toolkit   
组件库按需加载    
动态 Ployfill   
Tree Shaking    
路由懒加载    
Hooks useCallback   
React Fragments   
构建函数中的事件 bind 处理    
避免使用内联样式属性    
JSX 中合理控制条件渲染的范围（避免无谓的重复渲染）    
key   
保持 state 中数据必响应的特性   
7. React 使用场景？   
逻辑复杂单页应用，偏中后台管理系统，纯展示性的UI页面不合适    
8. 描述一下React 生命周期   

9. 实现组件有哪些方式？   
React.createClass 使用API来定义组件
React ES6 class component 用 ES6 的class 来定义组件
Functional stateless component 通过函数定义无状态组件
10. shouldComponentUpdate函数有什么作用？   
shouldComponentUpdate是一个允许我们自行决定某些组件（以及他们的子组件）是否进行更新的生命周期函数，   
reconciliation的最终目的是尽可能以最有效的方式去根据新的state更新UI，   
如果你已经知道UI的哪些状态无需进行改变，就没必要去让React去判断它是否该改变。     
让shouldComponentUpdate返回falss, React就会让当前的组件和其子组件保持不变。   

11. 当组件的setState函数被调用之后，发生了什么？    
React会做的第一件事就是把你传递给setState的参数对象合并到组件原先的state。     
这个事件会导致一个“reconciliation”（调和）的过程。    
reconciliation的最终目标就是，尽可能以最高效的方法，去基于新的state来更新UI。   
为了达到这个目的，React会构建一个React元素树（你可以把这个想象成一个表示UI的一个对象）。一旦这个树构建完毕,React为了根据新的state去决定UI要怎么进行改变，它会找出这棵新树和旧树的不同之处。   
React能够相对精确地找出哪些位置发生了改变以及如何发生了什么变化，并且知道如何只通过必要的更新来最小化重渲染。
12. React-router 路由的实现原理？   

13. 说说React Native,Weex框架的实现原理？   

14. 受控组件(Controlled Component)与非受控组件(Uncontrolled Component)的区别    
受控组件      
1. 没有维持自己的状态	    
2. 数据由父组件控制	    
3. 通过 props 获取当前值，然后通过回调通知更改	
非受控组件        
1. 保持着自己的状态
2. 数据由 DOM 控制  
3. Refs 用于获取其当前值    
15. refs 是什么?    
Refs是能访问DOM元素或组件实例的一个函数；   
16. React为什么自己定义一套事件体系呢，与浏览器原生事件体系有什么关系？   

17. 什么时候应该选择用class实现一个组件，什么时候用一个函数实现一个组件？   
组件用到了state或者用了生命周期函数，那么就该使用Class component。其他情况下，应使用Functional component。    
18. 什么是HoC（Higher-Order Component）？适用于什么场景？   
高阶组件就是一个 React 组件包裹着另外一个 React 组件    
19. 并不是父子关系的组件，如何实现相互的数据通信？    
使用父组件，通过props将变量传入子组件（如通过refs，父组件获取一个子组件的方法，简单包装后，将包装后的方法通过props传入另一个子组件）
20. Redux是如何做到可预测呢？   
总是存在一个真实来源，即 store ，因此不存在如何将当前状态与动作和应用的其他部分同步的问题。   

21. Redux将React组件划分为哪两种？    

22. Redux是如何将state注入到React组件上的？   

23. 请描述一次完整的 Redux 数据流   

24. React的批量更新机制 BatchUpdates？    

25. React与Vue，各自的组件更新进行对比，它们有哪些区别？    
:::
### 常用库    
1. react-dom:提供了可在应用顶层使用的 DOM（DOM-specific）方法[api](https://react.docschina.org/docs/react-dom.html)          
2. classnames:方便动态绑定样式    
```js
<p className={classnames({
    title:true,
    color:this.state.addColor
})}>标题</p>
```       
3. react-css-modules   
原来的样式写法    
```js
import React from 'react';
import styles from './table.css';

export default class Table extends React.Component {
    render () {
        return <div className={styles.table}>
            <div className={styles.row}>
                <div className={styles.cell}>A0</div>
                <div className={styles.cell}>B0</div>
            </div>
        </div>;
```  
存在问题：    
1. 你必须使用驼峰式类名。 
2. 无论何时构建一个 className 你都必须使用 style 对象。   
3. 混合类模块以及全局 CSS 类不够灵活。    
4. 引用一个未定义的 CSS 模块时解析结果为 undefined ,但并无相关警告提示。    
```js
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.css';

class Table extends React.Component {
    render () {
        return <div styleName='table'>
            <div styleName='row'>
                <div styleName='cell'>A0</div>
                <div styleName='cell'>B0</div>
            </div>
        </div>;
    }
}

export default CSSModules(Table, styles);
```

4. events   
主要用到EventEmitter       
```js
import {EventEmitter} from 'event';
export default new EventEmitter;

emiter.addListener(event, listener)
// 为指定事件添加一个监听器到监听器数组的尾部。
emiter.on(event, listener)
//为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
emiter.once(event, listener)
//为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器
emiter.removeListener(event, listener)
//移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
emiter.emit(event, [arg1], [arg2], [...])
//按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
```
5. react-core-decorators    
用装饰器写mixin      
```js
import PureRenderMixin from 'react-addons-pure-render-mixin'; 
import { mixin } from 'react-core-decorators';  
@mixin(PureRenderMixin)
class Button extends React.Component { ... }
```    
6. immutable    
[Immutable.js及在React中的应用](http://zhenhua-lee.github.io/react/Immutable.html)     
7. redux :是JavaScript 状态容器，提供可预测化的状态管理[api](http://cn.redux.js.org/)       
[理解Redux](https://mp.weixin.qq.com/s/oVEoDLPWYrfbgAxZXCgOeQ)      
8. react-router [api](http://react-guide.github.io/react-router-cn/docs/API.html) 
9. react-router-redux:将react router 与 redux store 绑定,管理路由状态  
10. redux-thunk: 处理异步等副作用操作[理解redux-thunk](https://zhuanlan.zhihu.com/p/85403048)     
11. react-redux:将Redux结合React使用.react-redux 实现了一个简单的发布-订阅库，来监听当前 store 的变化.    
```js
import {push} from 'react-router-redux';
store.dispatch(push('/home'));
```
### key  
1. 使用shortid作为key比index好些   
2. key 只是在兄弟节点之间必须唯一 
```js 
var shortid = require('shortid');
function createNewTodo(text) {
  return {
    completed: false,
    id: shortid.generate(),
    text
  }
}
```
### 表单    
验证、追踪访问字段以及处理表单提交的完整解决方案：https://jaredpalmer.com/formik/  
```js
import PropTypes from 'prop-types';
Greeting.propTypes = {
  name: PropTypes.string
};
``` 
### diff 算法 
当对比两颗树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态。    
在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，生成一个 mutation。  
当子元素拥有 key 时，React 使用 key 来匹配原有树上的子元素以及最新树上的子元素    


### Hook
#### 状态hook
state 挂载fiber 的 memoizedState
hook.next = 下一个hook
#### 副作用hook
对应生命周期的时候会创建Effect挂载到hook.memoizedState上
```js
  hook.memoizedState = pushEffect(
    HookHasEffect | hookFlags, // hookFlags用于创建effect
    create,
    undefined,
    nextDeps,
  );
```

### React Context 原理
Context的实现思路:        
在消费状态时,ContextConsumer节点调用readContext(MyContext)获取最新状态.     
在更新状态时, 由ContextProvider节点负责查找所有ContextConsumer节点, 并设置消费节点的父路径上所有节点的fiber.childLanes,         
保证消费节点可以得到更新.         
createContext核心逻辑:        
其初始值保存在context._currentValue(同时保存到context._currentValue2. 保存 2 个 value 是为了支持多个渲染器并发渲染)         
同时创建了context.Provider, context.Consumer2 个reactElement对象.     
```js
//作为支持多个并发渲染器的解决方法，我们将一些渲染器分类为主要渲染器，将其他渲染器分类为辅助渲染器。    
    // As a workaround to support multiple concurrent renderers, we categorize    
    // some renderers as primary and others as secondary.   
    
    //我们只希望最多有两个并发渲染器：React Native（主要）和Fabric（次要）;    
    // React DOM（主要）和React ART（次要）。    
    // 辅助渲染器将自己的context的value存储在单独的字段中。    
    // We only expect    
    // there to be two concurrent renderers at most: React Native (primary) and    
    // Fabric (secondary); React DOM (primary) and React ART (secondary).   
    // Secondary renderers store their context values on separate fields. 
    
    //<Provider value={xxx}>中的value就是赋值给_currentValue的    
    //也就是说_currentValue和_currentValue2作用是一样的，只是分别给主渲染器和辅助渲染器使用
```
### React 合成事件
监听原生事件: 对齐DOM元素和fiber元素      
收集listeners: 遍历fiber树, 收集所有监听本事件的listener函数.       
派发合成事件: 构造合成事件, 遍历listeners进行派发.        