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

