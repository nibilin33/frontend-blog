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
## canvas 性能差异              

