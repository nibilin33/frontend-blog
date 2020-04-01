## 起步     
## 遇到的问题       
1. async,await 语法报错       
详情->本地设置->ES6转ES5选项去掉        
2. canvas 绘制本地图片  
官网只提到网络图片要先下载，但我需要的是绘制本地图片=-=，api上也没有        
看到很明确的用法,找了一下发现可以用createImage                        
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
最后发现，用web-view比原生api流程多了🙉 
4. 个人账号发布的不支持web-view的使用...🙉  
被迫再次重写...🙉   
## canvas 性能差异              

