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

<img data-original-src="//upload-images.jianshu.io/upload_images/4842858-484f192f9506a5f1.png" data-original-width="1148" data-original-height="770" data-original-format="image/png" data-original-filesize="365212" data-image-index="0" style="cursor: zoom-in;" class="" src="//upload-images.jianshu.io/upload_images/4842858-484f192f9506a5f1.png?imageMogr2/auto-orient/strip|imageView2/2/w/1148/format/webp">  