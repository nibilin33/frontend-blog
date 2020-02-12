   
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
3你是怎么理解HTML的语义化的     
4HTML的盒子模型有哪些构成，盒子模型有哪几种，默认的是哪一种     
5盒子模型有没有办法把宽度设置为包含padding的        
6浮动元素有没有什么特征     
7清除浮动的所有方法     
8js基本数据类型     
9typeof去判断数据类型时返回值有哪些     
10说说事件代理利用的原理是什么      
11阻止冒泡的函数是什么    
stopPropagation     
12cookie有哪些特征      
13假设访问了A.com存了一个cookie，在另一个页面用ajax向A的域名的发请求的话，会携带cookie吗        
14cookie的其他解决方案
https://junyiseo.com/php/757.html      
15localstorage存数据的格式是什么 
localStorage存储数据的格式都是以字符串的形式来存储的           
16怎样将一个数组存入localstorage        
17storage有哪些存储方法    
读取属性
getItem 
18html5的一些新的特性 

19假设两台电脑之间同步画板怎么实现     

20es6用的比较多的有哪些     
21promise的两个方法，具体实现       

22箭头函数      


23es6不能在有的浏览器中执行，编译过程是怎样的      

24如果一个页面要做性能优化，从哪方面考察，从哪些地方优化     
https://segmentfault.com/a/1190000010927816
25vue的开发模式和jQuery的开发模式有哪些不同，有哪些优点     

26jQuery有没有办法组件化        

27能用es6写jQuery  

28VUE数据双向绑定是怎么实现的     

29假设一个object A里面的值n为1，怎么知道n改变的，有事件绑定吗   

诸如我现在需要监听那种频繁发生的事件        
埋点的实现思路      
非递归的二叉树遍历      
文件上传断点、续传      
设计模式的应用场景考核        
VUE/React diff 算法的大概思路       
现有的状态管理的实现        
webpack中 loader、plugin 的实现思路     
简易版 webpack 的实现       
KOA、Express 中间件的实现       
React fiber 的理解和原理        
前端构建工具的、vue-cli、create-react-app 的原理和实现思路      
事件委托？原理、好处、应用场景。          
vue和react的区别。        
vue的原理。       
闭包         
let和var的区别。let产生的背景？
定宽定高，如何垂直居中？那不定宽高呢？      
HTTPS的请求过程     
代码规范            
尾递归问题   
不会让栈爆掉
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
  }
  return _fn
}   
let currying = (...rest) => {
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
Promise的用法以及实现原理。
有一个进度条，进度条中间有一串文字，当我的进度条覆盖了文字之后，文字要与进度条反色:mix-blend-mode       
问：跨域问题有几种解决方式？
问：如何让一个元素在页面内上下左右居中？
问：如何清除浮动？
问：如何实现动画？
问：CSS 选择器的优先级是怎样的？
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
问：对于以后的职业规划？    
问：感觉面试得如何？还有什么想问的？
目前部门里还有待解的问题吗      