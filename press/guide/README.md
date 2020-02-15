   
https://vuepress.vuejs.org/zh/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F

http://emojihomepage.com/

流程图语法 https://flowchart.vuepress.ulivz.com/#usage     

@flowstart
st=>start: Start
e=>end: End
st->e
@flowend  
🙉
🔞
<span class="emoj">🔞</span>
<span class="emoj">🙉</span>

## 你是怎么理解HTML的语义化的     

## HTML的盒子模型有哪些构成，盒子模型有哪几种，默认的是哪一种    
content-box

## 盒子模型有没有办法把宽度设置为包含padding的     

border-box

## 浮动元素有没有什么特征     
特征：
浮动元素会脱离正常的文档流，按照其外边距指定的位置相对于它的上一个块级元素（或父元素）显示
浮动元素后面的块级元素的内容会向此浮动元素的外边距靠齐，但是边框和背景却忽略浮动元素而向上一个任意非浮动元素靠齐
浮动元素后面的内联元素会向此浮动元素的外边距靠齐
float造成的影响：
1、对其父元素的影响
对于其父元素来说，元素浮动之后，它脱离当前正常的文档流，所以它也无法撑开其父元素，造成父元素的塌陷
2、对其兄弟元素（非浮动）的影响
如果兄弟元素为块级元素，该元素会忽视浮动元素的而占据它的位置，并且元素会处在浮动元素的下层（并且无法通过z-index属性改变他们的层叠位置），但它的内部文字和其他行内元素都会环绕浮动元素。
如果如果兄弟元素为内联元素，则元素会环绕浮动元素排列。
3、对其兄弟元素（浮动）的影响
同一个方向的浮动元素：当一个浮动元素在浮动过程中碰到同一个方向的浮动元素时，它会紧跟在它们后面
反方向的浮动元素：互不影响，位于同一条水平线上，当空间不够时会被挤下
4、对子元素的影响
当一个元素浮动时，在没有清除浮动的情况下，它无法撑开其父元素，但它可以让自己的浮动子元素撑开它自身，并且在没有定义具体宽度情况下，使自身的宽度从100%变为自适应（浮动元素display:block）。其高度和宽度均为浮动元素高度和非浮动元素高度之间的最大值。

## 清除浮动的所有方法     

## js基本数据类型     

## typeof去判断数据类型时返回值有哪些           

## 阻止冒泡的函数是什么    

stopPropagation     

## cookie有哪些特征           

## cookie的其他解决方案
https://junyiseo.com/php/757.html      

## localstorage存数据的格式是什么 

localStorage存储数据的格式都是以字符串的形式来存储的           
16怎样将一个数组存入localstorage        
17storage有哪些存储方法    
读取属性
getItem 
18html5的一些新的特性        

## 箭头函数      

> 引入箭头函数有两个方面的作用：更简短的函数并且不绑定this

箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj   
23es6不能在有的浏览器中执行，编译过程是怎样的      

24如果一个页面要做性能优化，从哪方面考察，从哪些地方优化     
https://segmentfault.com/a/1190000010927816
25vue的开发模式和jQuery的开发模式有哪些不同，有哪些优点     

26jQuery有没有办法组件化        

27能用es6写jQuery  

28VUE数据双向绑定是怎么实现的     

29假设一个object A里面的值n为1，怎么知道n改变的，有事件绑定吗   
## 请解释原型继承（prototypal inheritance）的工作原理  
每一个对象都包含一个原型属性，用于关联另一个对象，关联后就能使用那个对象的属性和方法，这就是js的原型式继承。
> 所有 JS 对象都有一个prototype属性，指向它的原型对象。当试图访问一个对象的属性时，   

如果没有在该对象上找到，它还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，    
直到找到一个名字匹配的属性或到达原型链的末尾。这种行为是在模拟经典的继承，但是与其说是继承，不如说是委托（delegation）。
说说你对 AMD 和 CommonJS 的了解   

> 它们都是实现模块体系的方式，直到 ES2015 出现之前，JavaScript 一直没有模块体系。CommonJS 是同步的，而 AMD（Asynchronous Module Definition）从全称中可以明显看出是异步的。CommonJS 的设计是为服务器端开发考虑的，而 AMD 支持异步加载模块，更适合浏览器。

(前端模块化：CommonJS, AMD, CMD, ES6)

 
埋点的实现思路      

> 代码埋点、可视化埋点和无痕埋点   

如果埋点的事件较多，或者说网页内部交互频繁，可以通过本地存储的方式先缓存上报信息，然后定期上报。    

非递归的二叉树遍历     

## 文件上传断点、续传   

>  

1. 把文件按大小1M分割成N份
2. 每次上传时，告诉后台大文件的md5、当前第几份（从0开始）、总共几份
3. 并行上传，前端同时开启5个请求进行传输增加速度
4. 上传失败或出错后，继续上传下一份，把出错的份放在队尾，如果一直出错则中断请求防止死循环
5. 后台接受文件后通过md5进行比对，上次是否接受过此文件，如果接受则跳过，最后进行文件合并出来     

## VUE/React diff 算法的大概思路    

> react diff 原理    

把树形结构按照层级分解，只比较同级元素。  
给列表结构的每个单元添加唯一的 key 属性，方便比较。 
React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）  
合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty. 到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
选择性子树渲染。  
开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。  
vue diff 
当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。  

## 虚拟DOM算法思路   

> 用JS对象模拟DOM树

比较两棵虚拟DOM树的差异
把差异应用到真正的DOM树上

现有的状态管理的实现        

webpack中 loader、plugin 的实现思路     

>

简易版 webpack 的实现       

    

前端构建工具的、vue-cli、create-react-app 的原理和实现思路      

事件委托？原理、好处、应用场景。     

> 事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发。这种技术的好处是：

内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。    

vue和react的区别。        

> 1.react整体的思路就是函数式，所以推崇纯组件，数据不可变，单向数据流.

而vue是基于可变数据的，支持双向绑定.
2.vue内置了很多功能，而react做的很少，很多都是由社区来完成的，vue追求的是开发的简单，而react更在乎方式是否正确。

      

## VUEX的原理

vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件   

## 闭包     

> 闭包是函数和声明该函数的词法环境的组合。

词法作用域中使用的域，是变量在代码中声明的位置所决定的。闭包是即使被外部函数返回，依然可以访问到外部（封闭）函数作用域的函数。    
为什么使用闭包？    
利用闭包实现数据私有化或模拟私有方法。这个方式也称为模块模式（module pattern）。    
部分参数函数（partial applications）柯里化（currying）.

匿名函数的典型应用场景是什么

> 匿名函数可以在 IIFE 中使用，来封装局部作用域内的代码，以便其声明的变量不会暴露到全局作用域。

(function() {
  // 一些代码。
})(); 
匿名函数可以作为只用一次，不需要在其他地方使用的回调函数。
当处理函数在调用它们的程序内部被定义时，代码具有更好地自闭性和可读性，可以省去寻找该处理函数的函数体位置的麻烦。
setTimeout(function() {
  console.log("Hello world!"); 
}, 1000); 
匿名函数可以用于函数式编程或 Lodash（类似于回调函数）。

宿主对象（hostbjects）和原生对象（native objects）的区别是什么

> 原生对象是由 ECMAScript 规范定义的 JavaScript 内置对象，比如String、Math、RegExp、Object、Function等等。  

宿主对象是由运行时环境（浏览器或 Node）提供，比如window、XMLHTTPRequest等等。 

.call和.apply有什么区别？

> .call和.apply都用于调用函数，

第一个参数将用作函数内 this 的值。然而，
.call接受逗号分隔的参数作为后面的参数，而.apply接受一个参数数组作为后面的参数。一个简单的记忆方法是，
从call中的 C 联想到逗号分隔（comma-separated），从apply中的 A 联想到数组（array）。
function add(a, b) {
  return a + b; 
}
console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3

功能检测（feature detection）、功能推断（feature inference）和使用 UA 字符串之间有什么区别？

>  

功能检测包括确定浏览器是否支持某段代码，以及是否运行不同的代码（取决于它是否执行），以便浏览器始终能够正常运行代码功能，而不会在某些浏览器中出现崩溃和错误。例如：
if ("geolocation" in navigator) {
  // 可以使用 navigator.geolocation
} else {
  // 处理 navigator.geolocation 功能缺失
}
Modernizr是处理功能检测的优秀工具。
功能推断与功能检测一样，会对功能可用性进行检查，但是在判断通过后，还会使用其他功能，因为它假设其他功能也可用.
UA 字符串这是一个浏览器报告的字符串，它允许网络协议对等方（network protocol peers）识别请求用户代理的应用类型、操作系统、应用供应商和应用版本。它可以通过navigator.userAgent访问。

单页应用有那些优缺点

>

好处：
用户感知响应更快，用户切换页面时，不再看到因页面刷新而导致的白屏。
对服务器进行的 HTTP 请求减少，因为对于每个页面加载，不必再次下载相同的资源。
客户端和服务器之间的关注点分离。可以为不同平台（例如手机、聊天机器人、智能手表）建立新的客户端，而无需修改服务器代码。只要 API 没有修改，可以单独修改客户端和服务器上的代码。
坏处：
由于加载了多个页面所需的框架、应用代码和资源，导致初始页面加载时间较长。    
服务器还需要进行额外的工作，需要将所有请求路由配置到单个入口点，然后由客户端接管路由。    
SPA 依赖于 JavaScript 来呈现内容，但并非所有搜索引擎都在抓取过程中执行 JavaScript，他们可能会在你的页面上看到空的内容。   
这无意中损害了应用的搜索引擎优化（SEO）。然而，当你构建应用时，大多数情况下，搜索引擎优化并不是最重要的因素，因为并非所有内容都需要通过搜索引擎进行索引。
为了解决这个问题，可以在服务器端渲染你的应用，或者使用诸如 Prerender 的服务来“在浏览器中呈现你的 javascript，保存静态 HTML，并将其返回给爬虫”。   

请说明 JSONP 的工作原理，它为什么不是真正的 Ajax？  

> JSONP（带填充的 JSON）是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 不允许跨域请求。

JSONP 通过script标签发送跨域请求，通常使用callback查询参数，例如：https://example.com?callback=printData。 
然后服务器将数据包装在一个名为printData的函数中并将其返回给客户端。
<script>
  function printData(data) {

    console.log( `My name is ${data.name}!` );

  }
</script>
<script src="https://example.com?callback=printData"></script>
printData({ name: "Yang Shun" }); 
客户端必须在其全局范围内具有printData函数，并且在收到来自跨域的响应时，该函数将由客户端执行。
JSONP 可能具有一些安全隐患。由于 JSONP 是纯 JavaScript 实现，它可以完成 JavaScript 所能做的一切，因此需要信任 JSONP 数据的提供者。
现如今，跨来源资源共享（CORS） 是推荐的主流方式，JSONP 已被视为一种比较 hack 的方式。

“attribute” 和 “property” 之间有什么区别？

>  

“Attribute” 是在 HTML 中定义的，
而 “property” 是在 DOM 上定义的。
为了说明区别，假设我们在 HTML 中有一个文本框：<input type="text" value="Hello">。
const input = document.querySelector("input"); 
console.log(input.getAttribute("value")); // Hello
console.log(input.value); // Hello
但是在文本框中键入“ World!”后:
console.log(input.getAttribute("value")); // Hello
console.log(input.value); // Hello World!   

document 中的load事件和DOMContentLoaded事件之间的区别是什么？

> 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、图像和子框架的完成加载。

window的load事件仅在 DOM 和所有相关资源全部完成加载后才会触发。

什么是"use strict"; ？使用它有什么优缺点？

> use strict' 是用于对整个脚本或单个函数启用严格模式的语句。严格模式是可选择的一个限制 JavaScript 的变体一种方式 。

优点：
无法再意外创建全局变量。
会使引起静默失败（silently fail，即：不报错也没有任何效果）的赋值操抛出异常。
试图删除不可删除的属性时会抛出异常（之前这种操作不会产生任何效果）。
要求函数的参数名唯一。
全局作用域下，this的值为undefined。
捕获了一些常见的编码错误，并抛出异常。
缺点：
无法访问function.caller和function.arguments。
以不同严格模式编写的脚本合并后可能导致问题。    

## 什么是事件循环？调用堆栈和任务队列之间有什么区别？

> 事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。   

如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出队并推送到调用堆栈中执行。    

let和var的区别。let产生的背景？ 

> 用var声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，也可以是声明在任何函数外的变量。 

let和const是块级作用域，意味着它们只能在最近的一组花括号（function、if-else 代码块或 for 循环中）中访问。

高阶函数（higher-order）的定义是什么

> 高阶函数是将一个或多个函数作为参数的函数，它用于数据处理，也可能将函数作为返回结果。高阶函数是为了抽象一些重复执行的操作。一个典型的例子是map，它将一个数组和一个函数作为参数。map使用这个函数来转换数组中的每个元素，并返回一个包含转换后元素的新数组。JavaScript 中的其他常见示例是forEach、filter和reduce。高阶函数不仅需要操作数组的时候会用到，还有许多函数返回新函数的用例。Function.prototype.bind就是一个例子。

请阐述块格式化上下文（Block Formatting Context）及其工作原理。    

>

块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。
一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：
float的值不是none.
position的值不是static或relative.
display的值是table-cell、table-caption、inline-block、flex、或inline-flex。
overflow的值不是visible。
在 BFC 中，每个盒的左外边缘都与其包含的块的左边缘相接。
两个相邻的块级盒在垂直方向上的边距会发生合并（collapse）。更多内容请参考边距合并（margin collapsing）。

有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）

>  

visibility: hidden：元素仍然在页面流中，并占用空间。
width: 0; height: 0：使元素不占用屏幕上的任何空间，导致不显示它。
position: absolute; left: -99999px： 将它置于屏幕之外。
text-indent: -9999px：这只适用于block元素中的文本。
Metadata： 例如通过使用 Schema.org，RDF 和 JSON-LD。
WAI-ARIA：如何增加网页可访问性的 W3C 技术规范。

使用 CSS 预处理的优缺点分别是什么

> 优点：

提高 CSS 可维护性。   
易于编写嵌套选择器。    
引入变量，增添主题功能。可以在不同的项目中共享主题文件。    
通过混合（Mixins）生成重复的 CSS。    
将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。    
缺点：
需要预处理工具。    
重新编译的时间可能会很慢。    

什么情况下，用translate()而不用绝对定位？什么时候，情况相反

>

translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），   
只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个 GPU 图层，    
但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。    
当使用translate()时，元素仍然占据其原始空间（有点像position：relative），这与改变绝对定位不同。   

定宽定高，如何垂直居中？那不定宽高呢？      

HTTPS的请求过程     

代码规范         

尾递归问题   

> 不会让栈爆掉

请简述JavaScript中的this

> 粗略地讲，函数的调用方式决定了this的值。this取值符合以下规则：

在调用函数时使用new关键字，函数内的this是一个全新的对象。   
如果apply、call或bind方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。   
当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象。比如当obj.method()被调用时，函数内的 this 将绑定到obj对象。   
如果调用函数不符合上述规则，那么this的值指向全局对象（global object）。浏览器环境下this的值指向window对象，但是在严格模式下('use strict')，this的值为undefined。    
如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定this的值。    
如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this被设置为它被创建时的上下文。    

``` 
function fact(_n, _r) { // <= _n, _r 用作初始化变量
    var n = _n;
    var r = _r; // <= 将原来的 n, r 变量提出来编程迭代变量
    function _fact(_n, _r) { // <= 迭代函数非常简单,就是更新迭代变量而已
        n = _n;
        r = _r;
    }
    _fact_loop: while (true) { // <= 生成一个迭代循环
        if (n <= 0) {
            return r;
        } else {
            _fact(n - 1, r * n); continue _fact_loop; // <= 执行迭代函数，并且进入下一次迭代
        }
    }
}
```

实现函数的柯里化    
柯里化通常也称部分求值  
```js
// 柯里化函数的构造方法
function curry (fn) {
  // 缓存除第一个参数的所有参数
  let args = [].slice.call(arguments, 1); 
  let _fn = function () {

    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      args.push(...arguments);
      return _fn
    }

}  return _fn}   
let currying = (... rest) => {
  
      // 如果参数为空，那么递归停止，返回执行结果
          if (rest.length === 0) {
                  return args.reduce((a, b) => a + b);
                      } else {
      // 否则将参数保存到args里面，返回currying方法
      args.push(...rest);
      return currying
    }      

  }
``` 
## 在浏览器中，一个页面从输入URL到加载完成，都有哪些步骤    
1. 域名解析
2. 建立TCP连接，浏览器与服务器经过3次握手后建立连接   
3. 浏览器发起HTTP气球，获取资源/*-
4. 服务器响应HTTP气球
5. 浏览器渲染   

## HTTP1.1 有哪些不足   
1. 出现队首阻塞问题   
2. 响应不分轻重缓急，只会先来后到   
3. 并行需要建立多个TCP
4. 只能被动等待客户端发起请求
5. HTTP是无状态的，每次请求和响应都会携带大量冗余信息 
## 用new 运算符创建对象时，具体的创建过程有哪几步
1. 一个新对象被创建，它继承自构造函数的原型
2. 将指定的参数传递给构造函数
3. 将执行上下文（this）绑定到新创建的对象中
4. 如果构造函数有返回值，那么返回值将取代第一步中新创建的对象   
## isPrototypeOf方法与instanceof 运算符有哪些区别
isPrototypeOf 用于检测调用此方法对象是否存在于指定对象的原型链中，`
而instanceof用于检测构造函数的原型是否存在于指定对象的原型链
有一个进度条，进度条中间有一串文字，当我的进度条覆盖了文字之后，文字要与进度条反色:mix-blend-mode       
## 跨域问题有几种解决方式？
1. CORS：跨资源共享，服务器响应报文中指定一个跨资源首部
2. JSONP： 借助script元素实现，之所以能跨域，主要是因为script元素有2个特点：
它的src属性能够访问任何URL的资源，
如果访问的资源包含js代码，在下载后会自动执行。
问：如何让一个元素在页面内上下左右居中？
问：如何清除浮动？
问：如何实现动画？
问：CSS 选择器的优先级是怎样的？
> 浏览器通过优先级规则，判断元素展示哪些样式。优先级通过 4 个维度指标确定，我们假定以a、b、c、d命名，分别代表以下含义：
a表示是否使用内联样式（inline style）。如果使用，a为 1，否则为 0。    
b表示 ID 选择器的数量。   
c表示类选择器、属性选择器和伪类选择器数量之和。   
d表示标签（类型）选择器和伪元素选择器之和。   
优先级的结果并非通过以上四个值生成一个得分，而是每个值分开比较。a、b、c、d权重从左到右，依次减小。
判断优先级时，从左到右，一一比较，直到比较出最大值，即可停止。所以，如果b的值不同，那么c和d不管多大，都不会对结果产生影响。比如0，1，0，0的优先级高于0，0，10，10。
当出现优先级相等的情况时，最晚出现的样式规则会被采纳。如果你在样式表里写了相同的规则（无论是在该文件内部还是其它样式文件中），那么最后出现的（在文件底部的）样式优先级更高，因此会被采纳。
问：熟悉什么类库吗？
问：原生 js 怎么发起 ajax 请求？
答：新建一个 XMLHttpRequest 实例，用 open 和 send 方法发起请求，添加状态变更监听器。
追问：一个 XMLHttpRequest 实例有多少种状态？
问：用 js 怎样实现一个类？      
追问：那如果后面动态地在父类的原型上添加一个方法，拷贝继承这种方式，子类不就找不到这个方法了吗？
追问：js 中怎么实现封装和多态？ 
问：js 的闭包了解吗？
追问：为什么会有这样的特性？        
问：js 的作用域有几种？
答：var 有全局作用域、函数作用域，let 和 const 外加块作用域。
问：了解 Promise 吗？
答：Promise 是 ES6 的新特性，可以用来碾平异步回调。简要地描述了一下 resolve、reject 函数和 then 方法。  
问：svn 和 git 的主要区别？
问：让一个 100px 的方形元素从页面的最左边过渡到最右边，最高效的动画方式是什么？ 
追问：有没有更高效的方式？
答：想不到（可能想问我 animation 属性？当时的确没想到）。
问：有没有做过移动端应用？
追问：那谈谈对移动端开发的理解吧。
   

### redis

非关系型数据库    

1. Redis支持的数据类型

String，哈希，列表，集合，zset    

2. 什么是Redis持久化？Redis有哪几种持久化方式？优缺点是什么？

持久化就是把内存的数据写到磁盘中去，防止服务宕机了内存数据丢失。
Redis 提供了两种持久化方式: RDB（默认） 和AOF 。   
存储结构:
内容是redis通讯协议(RESP )格式的命令文本存储。
比较：
1、aof文件比rdb更新频率高，优先使用aof还原数据。    
2、aof比rdb更安全也更大   
3、rdb性能比aof好   
4、如果两个都配了优先加载AOF    

3. Redis 有哪些架构模式？讲讲各自的特点 

单机  
主从复制：降低 master 读压力在转交从库，无法保证高可用，没有解决 master 写的压力    
哨兵：
Redis sentinel 是一个分布式系统中监控 redis 主从服务器，并在主服务器下线时自动进行故障转移。其中三个特性：
监控（Monitoring）：    Sentinel  会不断地检查你的主服务器和从服务器是否运作正常。
提醒（Notification）： 当被监控的某个 Redis 服务器出现问题时， Sentinel 可以通过 API 向管理员或者其他应用程序发送通知。
自动故障迁移（Automatic failover）： 当一个主服务器不能正常工作时， Sentinel 会开始一次自动故障迁移操作。
特点：    
1、保证高可用   
2、监控各个节点   
3、自动故障迁移   
缺点：主从模式，切换需要时间丢数据    
没有解决 master 写的压力    
集群（proxy 型）

4. Redis常用命令  

Set   

1. 请解释一下什么是Nginx?

Nginx是一个web服务器和方向代理服务器，用于HTTP、HTTPS、SMTP、POP3和IMAP协议。

2. 请解释Nginx如何处理HTTP请求。  

Nginx使用反应器模式。主事件循环等待操作系统发出准备事件的信号，这样数据就可以从套接字读取，在该实例中读取到缓冲区并进行处理。单个线程可以提供数万个并发连接。   

3. 请解释Nginx服务器上的Master和Worker进程分别是什么?

Master进程：读取及评估配置和维持    
Worker进程：处理请求    

4. 请解释ngx_http_upstream_module的作用是什么?    

ngx_http_upstream_module用于定义可通过fastcgi传递、proxy传递、uwsgi传递、memcached传递和scgi传递指令来引用的服务器组。   

5. 请陈述stub_status和sub_filter指令的作用是什么?

Stub_status指令：该指令用于了解Nginx当前状态的当前状态，如当前的活动连接，接受和处理当前读/写/等待连接的总数
Sub_filter指令：它用于搜索和替换响应中的内容，并快速修复陈旧的数据

6. 解释Nginx是否支持将请求压缩到上游?   

您可以使用Nginx模块gunzip将请求压缩到上游。gunzip模块是一个过滤器，它可以对不支持“gzip”编码方法的客户机或服务器使用“内容编码:gzip”来解压缩响应。    

7. 解释如何在Nginx中获得当前的时间?   

要获得Nginx的当前时间，必须使用SSI模块、$date_gmt和$date_local的变量。    
Proxy_set_header THE-TIME $date_gmt; 

8. 用Nginx服务器解释-s的目的是什么?   

用于运行Nginx -s参数的可执行文件。  

9. 负载均衡配置

Upstream模块实现负载均衡
ip_hash指令   
server指令    
upstream指令及相关变量    
[react](http://react-china.org/t/topic/33558)  

