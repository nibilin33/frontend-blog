## 编码风格

这份文档仅供统一项目编码风格

#### 基本概念

**实体（Entities）**，实体用于封装企业范围的业务规则。实体可以是拥有方法的对象，也可以是数据结构和函数的集合。如果没有企业，只是单个应用，那么实体就是应用里的业务对象。这些对象封装了最通用和高层的业务规则，极少会受到外部变化的影响。任何操作层面的改动都不会影响到这一层。  
**用例（Use Cases）**，用例是特定于应用的业务逻辑，一般用来完成用户的某个操作。用例协调数据流向或者流出实体层，并且在此过程中通过执行实体的业务规则来达成用例的目标。用例层的改动不会影响到内部的实体层，同时也不会受外层的改动影响，比如数据库、UI 和框架的变动。只有而且应当应用的操作发生变化的时候，用例层的代码才随之修改。  
**接口适配器（Interface Adapters）** ，接口适配器层的主要作用是转换数据，数据从最适合内部用例层和实体层的结构转换成适合外层（比如数据持久化框架）的结构。反之，来自于外部服务的数据也会在这层转换为内层需要的结构。

#### 目录即分层的具体实践

![目录即分层的具体实践](https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/目录即分层.png)  
>---- example  
>---- mock  
>---- public  
>---- src  
>>---- api  
>>---- assets  
>>---- components  
>>---- directives  
>>---- i18n  
>>---- lib  
>>---- router  
>>---- store  
>>---- utils  
>>---- views  
>>>---- login  
>>>---- \_\_tests\_\_  
>>>---- adapters  
>>>---- entity  
>>>---- interface   
>>>index.vue  
- 具体业务包含自己的适配器,实体,单元测试的目录     
- 实体的目录包含简单的数据模型，核心的业务逻辑  
- 适配器做一些数据的转换        
- .vue 做为用例层，编写用户行为的一些方法，其余的都只负责调用ts文件的方法。    
这边与TS的整合，.vue 文件不使用vue-class-component来达到class的写法，保留之前的写法。   
因为这种写法本身觉得绕了很多弯，是2.x为TS的支持补丁方式.目前来说，ts + vue 当然可用，  
但是依然相当多的问题，没法如丝般顺滑的相互配合。尤大大他们完全打算通过 vue3 去彻底解决于 ts 共用的的问题，  
不打算优化一下 2.x 当前存在的问题，那当下来说，vue文件我就不是很想用。(vue-class-component.js 通过gzip 有3.8KB，
源文件大小 11KB。vue-property-decorator.js 通过gzip 有2.4KB ，源文件大小9KB)（3.0兼容性到IE11。废弃支持class）      

.vue文件lang=ts未解决的问题？     
jsx  Duplicate declaration "h"     
其他 any/@ts-ignore         
#### 文件名文件结构

1.文件名全部为小写或包含-  
2.单文件组件的顶级元素的顺序 template,script,style  
3.有需要的生命周期按照被调用的顺序书写  
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeDestroy
- destroyed
```
<template>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  watch: {
  },
  created() {
  },
  beforeDestroy() {
  },
  methods: {
  }
};
</script>
<style lang="scss">
</style>
```

#### 命名规则

- css 采用 BEM 命名规则    
eg：    
.listCard 块，高层次组件  
.listCard\_\_title 元素  
.listCard--feature 修饰符，表示不同状态    
在选择器中，由以下三种符号来表示扩展的关系
```
-   中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。 
__  双下划线：双下划线用来连接块和块的子元素    
_   单下划线：单下划线用来描述一个块或者块的子元素的一种状态    
```
##### 块
一个块是设计或布局的一部分，它有具体且唯一地意义 ，要么是语义上的要么是视觉上的。   
在大多数情况下，任何独立的页面元素（或复杂或简单）都可以被视作一个块。  
它的HTML容器会有一个唯一的CSS类名，也就是这个块的名字。 
针对块的CSS类名会加一些前缀（ ui-），这些前缀在CSS中有类似 命名空间 的作用。    

##### 元素  
块中的子元素是块的子元素，并且子元素的子元素在 bem 里也被认为是块的直接子元素。 
一个块中元素的类名必须用父级块的名称作为前缀。  
##### 修饰符    
一个“修饰符”可以理解为一个块的特定状态，标识着它持有一个特定的属性。    
用一个例子来解释最好不过了。一个表示按钮的块默认有三个大小：小，中，大。    
为了避免创建三个不同的块，最好是在块上加修饰符。    
这个修饰符应该有个名字（比如：size ）和值（ small，normal 或者 big ）。     

#### CSS Module   
vue.config.js   
```
    css: {
        modules: true,
    },
```
开启了css module 配置，可以这么使用  
``` 
<style lang="scss" module scoped>
.meeting-layout{
  font-size:24px;
  color: red;
}
</style>
script 中   
this.$style['meeting-layout']   
template 中   
$style['meeting-layout']    
```
在.tsx 文件中使用，需要先全局定义        
```
declare module "*.scss" {
  const content: any;
  export default content;
}
```
```
import css from "./button.scss";
render() {
    return (
      <div class={css.button}>
      </div>
    );
  }
```


- script 采用驼峰  
类的命名:首字母必须采用大写的形式  
变量的命名：首字母小写  

#### 样式变量  
样式中有需要颜色的地方，统一定义到body下面。  
给多彩提供脚本直接在当前替换能力。  
兼容性问题：css-vars-ponyfill  
```
document.body.style.setProperty('--bgColor','red'); 
```     
eg ：    
body{
  --bgColor: blue;
}    
使用:    
```
<style lang="scss" scoped>
.title{
  color:var(--bgColor);
}
</style>
```
#### 注释

尽量利用函数名称，参数或者返回值自身就足够传达信息。  
短函数不需要太多描述，为只做一件事的短函数选个好名字，比写函数头注释要好。  
**好注释**  
1.对意图解释的注释  
2.用于警告其他程序员会出现某种后果的注释  
3.TODO 注释  
**写注释的常见动机之一是糟糕代码的存在，与其花时间编写解释你搞出的**  
**糟糕的代码的注释，不如花时间清洁代码。如果编程语言足够有表达里，就不那么需要注释**  
eg:
```
// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow: () => number = Date.now
这段代码第一反应让人觉得没有必要，但加了上面的解释，达到认同。  
```
```
这段代码从命名完全看不出想做什么，为什么这么做，作者的解释，让阅读代码者更快地理解。    
function createInvoker(
  initialValue: any,
  instance: ComponentInternalInstance | null
) {
  const invoker: Invoker = (e: Event) => {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (e.timeStamp >= invoker.lastUpdated - 1) {
      const args = [e]
      const value = invoker.value
      if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          callWithAsyncErrorHandling(
            value[i],
            instance,
            ErrorCodes.NATIVE_EVENT_HANDLER,
            args
          )
        }
      } else {
        callWithAsyncErrorHandling(
          value,
          instance,
          ErrorCodes.NATIVE_EVENT_HANDLER,
          args
        )
      }
    }
  }
  invoker.value = initialValue
  initialValue.invoker = invoker
  invoker.lastUpdated = getNow()
  return invoker
}
```
#### 函数

函数的第一个规则是要短小，第二条规则是只做一件事。

#### 项目 README

- 运行命令
- 线上的示例或者最后的运行环境
- 相关的文档链接
- 相关人员的联系方式或群
- 代码组织结构图  

## 开发前可考虑的事情       
- 是否满足最小复杂度  
- 设计时为维护工作的程序员考虑  
- 信息隐藏： 这类，方法，组件该隐藏什么 
- 找出容易改变的区域做划分  
- 考虑潜在的变化，让这些变化的影响或范围与发生该变化的可能性成比  
- 如何便于测试  
- 层次性： 比如当需要调用设计不佳的旧代码的时候，就要编写一层同旧  
代码交互的一层，这一层要隐藏代码的低劣质量，同时提供一组一致的服务。  
- 参考常用的设计模式形成类似的解决方案  
## OOP的设计步骤  
- 辨识对象及其属性（方法和数据）  
- 确定可以对各个对象进行的操作  
- 确定各个对象能对其他对象进行的操作  
- 确定对象的哪些部分对其他对象可见，哪些部分而已是public，哪些是private  
- 定义每个对象的公开接口,即向其他对象暴露的数据及方法  
## 测试驱动开发的具体实践  
- 1.先编写伪代码，只有方法名以及流程    
- 2.编写测试用例，描述功能点    
- 3.交叉编写模块测试用例    
- 4.具体逻辑开发  
先编写测试，我们就能设身处地从代码使用者的角度考虑问题。  
这种方式确保我们设计的每一个函数都由一系列测试驱动。  
编写验证可考虑的类型：  
- 正向测试： 当前置条件满足时，验证代码的结果确实符合预期。  
- 反向测试： 当前置条件或输入不符合要求时，代码能优雅地进行处理。  
- 异常测试： 代码在应该抛出异常的地方正确地抛出异常。  
[jest官网](https://jestjs.io/docs/en/getting-started)
```
import { PbxAPI } from '../entity/pbx';
import { transformToUse } from '../adapters/pbx';

test('测试构建函数对数据的限制', ()=> {
    const pbxWrong = new PbxAPI(Object.create({id:''})).params;
    expect(pbxWrong).toEqual({username:'',code:''});
    const pbxRight = new PbxAPI().params;
    expect(pbxRight).toEqual({username:'',code:''});
})
test('测试接口转换的结果', ()=> {
    const data =  transformToUse({id:'xxx'});
    expect(data).toEqual({username:'',code:''});
})
```
其实最后会发现，最好写测试的就是无副作用的函数，只需要考虑，输入，输出。  
## Typescript 运用

1.interface ,type
使用接口来确保类拥有的指定结构，或者约束对象。  
接口好比一个协议，当我们签署它的时候，必须遵守他的规则。

```
interface ChinaMobile {
    name: string;
    website: string;
}
interface ChinaMobileList {
    // 动态属性
    [phone: string]: ChinaMobile
}
```

2.enum  
旧版：

```
const typeMach = {
    image: 'browse_original_image',
    file: 'down_file'
}
```

改版：

```
enum typeMach {
    image = 'browse_original_image',
    file = 'down_file'
}
```

3.class,extends  
在 .jsx 文件里，泛型可能会被当做 jsx 标签
```
const toArray = <T>(element: T) => [element]; // Error in .jsx file.  
```
修改方式
```
const toArray = <T extends {}>(element: T) => [element]; // No errors.  
``` 
4.namespace  
命名空间，又称内部模块，用于组织一些具有某些内在联系的特性和对象，使代码结构更清晰。

```
单例模式  
namespace Singleton {
  export function someMethod() {}
}
Singleton.someMethod();
```

5.decorators (装饰者模式+切面编程,reflect-metadata)  
```
tsconfig.json
compilerOptions:{
"experimentalDecorators": true
}
```
面向切面编程主要用于抽离与核心业务逻辑无关的功能，如日志统计、埋点、异常处理等等，  
可以提高业务模块功能的纯净度与被分离模块的复用性。  
装饰器用来为元素添加一些额外的逻辑或者元数据。
装饰器：类，属性，方法，参数  
类装饰器：接受一个类构造函数作为参数的函数  
方法装饰器：接受属性的对象，属性名和一个可选的参数  
属性装饰器： 接受属性的对象和属性的属性名  
参数装饰器： 接受被装饰参数的方法的对象，方法的名字和参数在参数列表中的索引。  
reflect-metadata：反射元数据 API  
元数据是指程序本身的信息数据，元数据存储在程序集中;
反射就是在运行时动态获取一个对象的一切信息：方法/属性等等。  
参数的提交的各种处理，校验也可以用这种方式    

```
6.泛型 T ，允许使用的时候定义类型(通用函数的考虑)   
```
7.Omit
有时候我们需要复用一个类型，  
但是又不需要此类型内的全部属性，  
因此需要剔除某些属性 -- Omit

## 定制化构想       
目标：  
1.减少if                
2.不用后端配合       
思路：              
利用国际key在当前模块相对唯一，用脚本依据源码生成一份Map文件，并把   
把flag(目录+国际key+标签)生成自定义节点，去管理页面元素。       
提供管理界面操作页面元素，更新Map文件之后重新执行打包运行，生成定制的代码。     
如果不是简单的元素有无差异，而是功能上的不同，提供差异模块替换的可选。     

在使用webcomponet之前需要先安装     
```
npm install babel-plugin-transform-custom-element-classes
.babelrc
"plugins": [
    "transform-runtime",
    "transform-custom-element-classes"
],
```
```js
class CustomClose extends HTMLElement {
    triple=null;
    constructor() {
        super();
        this.addEventListener('click', e => {
          if(e.target.className === 'ripple') {
            this.parentElement.removeChild(this);
            this.triple = null;
          }
        });
        this.addEventListener('mouseover',e=>{
            this.toggleRipple();
        });
      }
      toggleRipple() {
        if(this.triple) {
            return;
        }
        let div = document.createElement('div');
        div.classList.add('ripple');
        div.innerHTML = 'x';
        this.triple = div;
        this.appendChild(this.triple);
      }
}

window.customElements.define('nb-close', CustomClose);

```
```html
<style>
nb-close{
    cursor: pointer;
    border: 1px solid red;
    border-radius: 5px;
}
.ripple{
    border: 1px solid red;
    display: inline-block;
    width: 15px;
    height: 15px;
    line-height: 12px;
    color:red;
    text-align: center;
    border-radius: 50%;
}
</style>
```
自定义loader，用于去正则匹配生成节点         
```js
module.exports = function (source) {
    try {
        let result = source.match(/\<template\>[\s\S]*\<\/template\>/gmi).map((it)=>{
            return it.replace(/(\{\{\$t\(.*\)\}\})/g,'<nb-close>$1</nb-close>');
        }).join('');
       return source.replace(/\<template\>([\s\S]*)\<\/template\>/gmi,result);
    } catch (error) {
        return source;
    }
}
webpack 的配置修改      
      {
        test: /\.vue$/,
        use:[
          {
            loader: 'vue-loader',
            options: vueLoaderConfig
          }, {
            loader: path.resolve(__dirname, './loader.js')
          }
        ]
        
      },
```
## 领域驱动设计       
首先DDD，无关技术，而是理解，发现业务价值。     
DDD关注的是业务战略，业务战略的发展方向。      
开发者不应该只是热衷于技术，而应该将眼界放得更宽。   
不管使用什么技术，我们的目的都是提供业务价值。     
而业务价值最直观的就是用户体验。    
DDD的开发步骤和测试驱动开发的唯一区别是：  
‘精通业务’的人（目前这个角色的既定于产品，测试），   
可以通过阅读测试代码来检验领域对象是否满足业务需求。    
那么测试代码就需要有一定的业务表达力。 
这种表达力就需要一种‘通用性语言’的制定，这里依旧是个问号。      
