## 项目经历描述 
::: tip
项目经历中扮演的角色、  
负责的模块、  
碰到的问题、  
解决的思路、  
达成的效果以及最后的总结与沉淀
:::     

## 刷题的思考       
刚开始会很不理解这种方式，  
但想了想，如果是自己，该怎么判断一个人能力如何？    
答案是：不知道，不知道怎么聊去了解一个人。       
参考应试的做法，大概是最简单，毕竟基础决定上层建筑。      
虽然存在小概率的失误，但总体还是可靠的。    
对我来说，上机做题，会比想那些名词会舒服一点。      
毕竟上了年龄，记忆力会飘忽不定，一瞬间会突然想不起怎么表达。        
准备的[题目](https://github.com/nibilin33/Interviews)    
[精读周刊](https://github.com/dt-fe/weekly)     
[在阿里我是如何当面试官系列](https://juejin.im/post/5e6ebfa86fb9a07ca714d0ec#heading-43)                   
[前端面试与进阶指南](https://www.cxymsg.com)        
[大前端面试题库](http://bigerfe.com/author)     
[javascript-101题](https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md)       
[javascript问题](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/javascript-questions.md)       
[HTML问题](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/html-questions.md)       
[CSS问题](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/css-questions.md)     
[技术面试手册](https://yangshun.github.io/tech-interview-handbook/algorithms/array)     
[virtual DOM](https://github.com/livoras/blog/issues/13)    
https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers      
[(上)中高级前端大厂面试秘籍](https://github.com/xd-tayde/blog/blob/master/interview-1.md)            
[(下)中高级前端大厂面试秘籍](https://github.com/xd-tayde/blog/blob/master/interview-3.md)       
   
## 面试期间犯的迷糊  
一心想去第一志愿的公司，        
在第一志愿还没落空的时候就完全不考虑其他的机会，           
中断了面试的节奏和状态。而恢复节奏的代价是———无法回到那个峰值。               
~~>_<~~ :-( o_o ....这该死的无法说服自我的执着......      

## 阿里巴巴面经          
从毕业一直在一家公司待了3年多，        
离职的目标很明确————阿里。                 
有自己的小坚持，特意没有按市面简历模板来写，就想懂技术的人来看，             
看看哪些公司会找上来，事实证明————阿里。        
于是前前后后3个月，只面了阿里这家公司。            
这期间也有一个小插曲，简历投到字节跳动的HR，然后从简历层面被    
拉黑了，怎么发现这个的，字节跳动的开发觉得我的简历不错拿去内推，    
然后被秒拒了o_o所以如果有自己的坚持的人类...简历不要交到HR...不然   
连面试的机会都没有了。      
我的面试流程都很快，钉钉一周多两天结束所有面试，支付宝也一周结束所有面试。     
为什么花了3个月，先通过了钉钉，但碰上组织架构调整没有HC（等了一个多月），       
转支付宝重新走面试流程（心脏不好的大概会奔溃=0=），拿了支付宝的offer。          

要知道开始有多么相信能进钉钉，那后面面支付宝的时候就有多么    
震惊。并不具备强大心理素质的我，庆幸压缩了面试流程，不然    
应该半路昏厥了=-=     
       

### 淘系

某部门一        
```
1. 自我介绍             
2. 聊一下最近的项目经历     
3. 根据我简历提到的问了：       
内存泄漏是什么场景，GC的原理是什么？              
如果上百个复杂组件要展示如何优化？            
离线资源包的方案是什么样的？            
混合H5是如何通信的？    
（前提：我提到H5和native的通信都采用异步方式）就如果想要同步获得native的数据要怎么做？      
4. 基础知识：
首屏加载优化？
CDN是如何能做到优化效果的？ 
服务端渲染的原理？  
客户端渲染的引擎有了解吗？      
跨域请求有哪些方式？    
JSONP如何保证不被劫持，被任何人调用         
了解前端哪些安全方面?         
了解Option请求吗？             
了解HTTP2吗？   
箭头函数的优点？        
知道ES6哪些特性？await,async实现原理               
这些性特性浏览器不能支持怎么做？        
babel是用来做什么的？有写过babel的loader吗？        
webpack是用来做什么的？知道loader和Plugin的原理吗？           
（我有写过webpack的loader）写过loader是用来做什么的？   
vue 的双向绑定的原理，vue template是如何知道哪些数据要双向绑定的？
5. 你还有什么想问的吗？      
```  
某部门二          
```
1. 说出输出结果     
setTimeout(function() {
    console.log('setTimeout');
}, 0);

new Promise(function(resolve) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('then');
});

console.log('console');
2. 用apply实现bind           
Function.prototype.bind = function () {
}
3. 按1,2,3,4这样输出树           
const tree = [
  {
    name: 'dir1', 
    children: [
      {name: 'dir2', children: []}
    ]
  },
  {
    name: 'dir3', 
    children: [
      {name: 'dir4', children: []}
    ]
  }
]
4. 知道BFC吗？用BFC解决过什么问题？     
5. 行内元素和块元素有什么区别？         
6. 了解行内替换元素和非替换元素吗？         
``` 
某部门三         
```
1. postion有哪些属性？      
2. absolute是相对什么定位的？       
3. get和post区别？          
4. 可以用get上传吗？            
5. 有没有什么场景是一定要用post请求？            
6. 开发组件有什么原则吗？       
```
### 钉钉       
5轮面试           
1轮的基础的考察主要是上机，我的github分支上有我做过的题目，     
额，可以参考，但并不具备特别的“指导”作用。      
没什么好取巧的，老老实实刷一下leetcode找找手感。                 
后面3轮技术面基本在考察比较虚的能力和工程经验.....这个是临时准备        
不了的，就是看平时工作思考了。记录一些思考也很重要，我完全不记得        
前两年到底干了啥...好在后面开始写博客整理，总归能讲一些东西出来。                

不同部门侧重的点不一样，有的部门侧重工程经验，有的侧重      
基础表达。              

### 支付宝      
3轮面试     
因为通过了钉钉的面试，推荐到这边面试流程就压缩了一些。          
没有上机和交叉面。             
      
```
1. 解释一下MVVM     
2. react 和 vue的区别       
3. vue 的生命周期       
4. v-model 和 v-bind区别        
5. 说一下 == 和 === 的区别，以及=== 的实现原理      
=-=...    
因为太突然地就开始新的面试，脑袋还处于蒙蔽的状态...   
想不起来基础问题问了啥...   
```

### 建议        
1. 一定要通过客服中心去查询面试进度，                                  
HR告诉你提交offer审批，并不一定是提交了...... 
2. 如果你是做ToB的，并且没有ToC的技能点（canvas,webgl，渲染引擎...）        
老老实实找B类事业群，我开始只是简单地想 
去ToC的，试了3次后老老实实找ToB的       
(阿里没有拉黑机制，不同部门都能投，但最好还是要找      
适合的，不然像我盲目地浪费了一些时间)。     
3. 如果某个基础知识答的出彩，也就能减少被抓着基础一直问时间，      
就可以多一些时间表达自己项目（要想好项目的亮点，提前组织好表达语言，        
引导面试官问自己想被问的点），证明自己是真的有做出一些。            
所以基础知识体系很重要，但也要明白，这只是给自己有下面表达项目的机会。 

        
           



