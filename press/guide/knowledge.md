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

属性：charset, name, http-equiv, content       
| charset        | name         | http-equiv| content|
| ------------- |:-------------:|:-------------:|-------------:|
| utf-8       | application-name | content-type  | width    |
|               | author        |   default-style| initial-scale|
|               | description    | refresh     | maximum-scale|
|               | generator     |             | minimun-scale  |
|               | keywords     |              | user-scalable  |
|               | robots        |               |           |
|               | viewport     |                |            |


## A 元素的功能 
1. 导航
2. 浏览器支持的任何协议 
::: tip
手机拨号：href="tel:10086"      
发送短信：href="sms:10086?body=test"    
发送邮件：href="mailto:ss@qq.co?cc="    
:::
## IMG 新增实用属性     
crossorigin:  anonymous,use-credentials (帮助canvas能够使用第三方站点的图像，并且不会污染画布)      
usemap: 让图像关联分区响应图  
figure,figcaption: 用于插入图像以及图像的描述       
<ClientOnly>
<cp-image></cp-image>
</ClientOnly> 
eg:点狗脸，点狗脸   
<ClientOnly>
<nb-img></nb-img>
</ClientOnly>  

::: demo
<template>
    <div class="hide">
    <figure>
        <img class="img-transform" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1266768696,2505081725&fm=26&gp=0.jpg"
            usemap="#Map"></img>
    <figcaption>小白狗</figcaption>
    </figure>
        <map name="Map">
            <area shape="circle" href="javascript:alert('haha')" coords="10,150,50">
        </map>
    </div>
</template>
<script>
export default {
    name:'nb-img'
}
</script>
:::

## H5新增日期类型（chrome） 
| 类型          | 功能|
| --------------|----:|
| datetime-local|选择本地日期时间|
| month| xx年xx月|
| time| 11:00|
| week| xx年第xx周|

## Iframe   
1. 用途 
2. 缺点 

## 多媒体元素       
video,audio,embed,track     

## BEF 和 Margin Collapse   
BFC全称Block Formatting Context ，直译“块级格式化上下文”，也有译作“块级格式化范围”。它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。BEF中的内容就相当于箱子中的物品，将物品摆放在箱子中，能避免与其他箱子中的物品混淆，还能保护它们不被破坏。
怎么产生BFC?    
::: tip    
根元素      
float属性不为none       
position为absolute或fixed       
display为inline-block, table-cell, table-caption, flex, inline-flex     
overflow不为visible  
:::  
***BEF 的用途***    
1. 清除浮动
2. 解决外边距塌陷
3. 宽度自适应的两栏布局      



