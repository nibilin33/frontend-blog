## 5W+1H
5W是指：Why，What，Where，Who，When     
1H是指：How 
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
3. rimraf， 递归删除目录所有文件    
4. graceful-fs, 可以替代fs模块，是对fs模块的改进，使不同平台和环境之间的行为规范化，并使文件系统访问对错误的恢复更具弹性。      
5. vm, 提供了在 V8 虚拟机上下文中编译和运行代码的一系列 API。JavaScript 代码可以被编译并立即运行，也可以编译、保存，以后再运行。  
6. Tapable,公开了许多Hook类，可用于为插件创建钩子。专注于自定义事件的触发和处理。
7. source-map，是一个存储了打包前所有代码的行，列信息的mapping文件,,以及VLQ编码的字母记录着转换前的代码的位置。
8. benchmark，代码基准测试，分析代码性能。   


理清楚核心理念之后，开始读源码<span class="emoj">🔞</span>      
    

## vue  
[12道vue高频原理面试题,你能答出几道?](https://juejin.im/post/5e04411f6fb9a0166049a073#heading-23)
[router 工作原理](https://segmentfault.com/a/1190000019386190)    
答：没看答案之前，答上了一半。<span class="emoj">🙉</span>我根据API的表现形式，猜测出大概实现方式，但是还是有没有
反应过来的。我不喜欢人家问你看过XX的源码吗？没有（<span class="emoj">😒</span>）|有（<span class="emoj">😍</span>）。   
因为有自己没有想到的思路，才推动了我去看源码的兴趣。 
核心：发布订阅模式Dep+object.defineproperty数据劫持    

### keep-alive       
1. 它是个vue 组件,负责渲染子组件           
2. 用一个cache对象存对应组件：cache[vnode.key]=componentInstance;
3. 监听include,exclude, 发生变更的时候就对应操作cache对象。 
4. 将最近访问的组件 push 到 this.keys 最后面,this.keys[0]也就是最久没被访问的组件,当缓存实例超过 max 设置值,删除 this.key[0]   

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
源码转换 (codemods) 


第1步 解析（Parse）   
通过解析器babylon将代码解析成抽象语法树。   
第2步 转换（TransForm）   
通过babel-traverse plugin对抽象语法树进行深度优先遍历，遇到需要转换的，就直接在AST对象上对节点进行添加、更新及移除操作，比如遇到箭头函数，就转换成普通函数，最后得到新的AST树。   
第3步 生成（Generate）
通过babel-generator将AST树生成es5代码。   

1. transform-runtime
为了解决全局对象或者全局对象方法编译不足的情况，才出现了transform-runtime这个插件，
但是它只会对es6的语法进行转换，而不会对新api进行转换  
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
1. 反向引用 \1, \2...
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
//return '1,087,654.321'
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




