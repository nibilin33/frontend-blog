## 惰性单例模式     
lazyload加载图片，它就是惰性加载，只当含有图片资源的dom元素出现在媒体设备的可视区时，图片资源才会被加载，这种加载模式就是惰性加载.

``` 
var singleton = function(fn) {
    var instance;
    return function() {
        return instance || (instance = fn.apply(this, arguments));
    }
};
```
## 发布订阅vs观察者 
[参考](https://github.com/MudOnTire/frontend-design-patterns)         
   
观察者模式中观察者和目标直接进行交互，  
而发布订阅模式中统一由调度中心进行处理，订阅者和发布者互不干扰.         
从使用层面上讲：    
观察者模式，多用于单个应用内部                
发布订阅模式，则更多的是一种跨应用的模式(cross-application pattern)，比如我们常用的消息中间件       

观察者模式中Subject对象一般需要实现以下API：        
  ● subscribe(): 接收一个观察者observer对象，使其订阅自己       
  ● unsubscribe(): 接收一个观察者observer对象，使其取消订阅自己     
  ● fire(): 触发事件，通知到所有观察者      
