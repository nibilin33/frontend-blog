## 起步     

## 遇到的问题       

1. async,await 语法报错       

详情->本地设置->ES6转ES5选项去掉        

2. canvas 绘制本地图片  

官网只提到网络图片要先下载，但我需要的是绘制本地图片=-=，api上也没有        
看到很明确的用法, 找了一下发现可以用createImage                        

``` 
export const getImage = source => {
  return new Promise(async (resolve, reject) => {
    //创建图片对象
    const canvas = await getCanvasById('#games');
    let img = canvas.createImage();
    img.src = source;
    img.onload = () =>{
        resolve(img);
    }
  });
};

async draw() {
    if(!this.img) {
        this.img = await getImage(bg);
    }
    this.context.drawImage(this.img,-this.x,0,this.width,this.height);
}
```

3. 真机调试HTMLCanvasView is not defined  

让人绝望的，工具里面都能运行，放到手机开始报错。 
最后在官网找到，我使用的是canvas最新的接口写法... 
真机还不支持🙉真的是让人绝望... 

``` 
const ctx =  wx.createCanvasContext('games');
ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.birdHeight,
      this.birdWidth
);
ctx.draw(true);
```

改成旧的api的写法，真机上虽然可以渲染出来了，但是卡顿得可怕... 
而且像素还很模糊🙉
最后发现，用web-view比原生api流畅多了🙉    

4. 个人账号发布的不支持web-view的使用...🙉  

被迫又去试小游戏那一套... 🙉   

    

## canvas 性能差异    

### 小游戏canvas效果和小程序canvas 元素差异   
小游戏引入一个runtime 
1. 核心canvas对象代码      
``` js
	function Canvas() {
	    var canvas = wx.createCanvas()
	    canvas.type = 'canvas'
	    canvas.__proto__.__proto__ = new _HTMLElement2.default('canvas')
	    var _getContext = canvas.getContext
	    canvas.getBoundingClientRect = function() {
	        var ret = {
	            top: 0,
	            left: 0,
	            width: window.innerWidth,
	            height: window.innerHeight
	        }
	        return ret
	    }
	    return canvas
	}
```

createCanvas 是创建一个画布对象。首次调用创建的是显示在屏幕上的画布，
之后调用创建的都是离屏画布。
离屏渲染能优化渲染的流畅，就是费性能，需要多开一条通道。    

2. 事件 

``` js
wx.onTouchStart(touchEventHandlerFactory('touchstart'))
wx.onTouchMove(touchEventHandlerFactory('touchmove'))
wx.onTouchEnd(touchEventHandlerFactory('touchend'))
wx.onTouchCancel(touchEventHandlerFactory('touchcancel'))
```

### canvas 渲染引擎   

