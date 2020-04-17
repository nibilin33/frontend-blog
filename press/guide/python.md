# Lambda 
1. 介绍   
创造匿名函数     
lambda 和def它两个的基本用法差不多，参数都是可选，也都会返回对象 
lambda是一个为编写简单的函数而设计的，而def用来处理更大的任务
2. 语法     
lambda [arg1[, arg2, ... argN]]: expression    
3. 实例 
```
map(lambda x: x*x,[y for y in range(10)])
```
等于    
```
def sq(x):
    return x*x

map(sq,[y for y in range(10)])
```