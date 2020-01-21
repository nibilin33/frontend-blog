## 运行时的一些概念  

#### 帧  

一个帧是一个连续的工作单元。当一个函数被调用时，运行时环境就会在栈中  
创建一个帧。帧里面保存了特殊函数的参数和局部变量。  

#### 栈  

栈包含了一个信息在执行时的所有步骤（帧）。   

#### 队列

队列包含一个待执行信息的列表，每一个信息都与一个函数相互联系。  

#### 堆  

堆是一个内存存储空间，它不关注内部储存的内容的保存顺序。   
堆中保存了所有正在被使用的变量和对象，同时也保存了一些当前  
作用域已经不在被用到，但还没被垃圾回收的帧。  

## XHTML 与 HTML 的不同 

XHTML 元素必须被正确地嵌套。    
XHTML 元素必须被关闭。  
标签名必须用小写字母。  
XHTML 文档必须拥有根元素。  
XHTML 可以混合各种XML应用（MathMl, svg）
XHTML 文档内的CDATA中的内容可以被执行，CDATA的作用是防止XML解析到非法字符。 

## WAI-ARIA 

WAI-ARIA, 是Web Accessibility Initiative - Accessible Rich Internet Applications 的缩写，指无障碍网页应用技术。她主要解决的一个问题：让残障人士能无障碍地访问网页上的动态内容。     
ARIA主要由两部分组成，分别是：      
role(角色)，标示这个dom元素是做什么用的.     
aria-属性描述了与之有关的事物（特征）及其是什么样的（状态）.        
## meta 元素   
属性：charset,name,http-equiv,content       

## test

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend



