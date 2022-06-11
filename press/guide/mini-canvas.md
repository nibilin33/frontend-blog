# 小型canvas框架
体积在20kb左右      
## 需要实现的功能点
1. 图层管理（增删改查）     
2. 事件     
3. 基本组件     
### 定义数据结构
模拟浏览器，定义Node节点，只实现抽象部分，不具备对canvas的直接操作能力      
绘制方法通过私有属性或用户传入绘制方法      
绘制的触发都统一由上层容器对象收口，另外为了考虑适配不同容器，用户不能直接操作原生对象      
```js
class Node{
    drawFunc;
    parent;
    draw(canvas) {
        const fn = this.attrs.drawFunc ｜｜ this.drawFunc;
        // ...
        fn(context);
    }
}
```
### 判断是否在点击区域
增加一个影子canvas，不可见，和主canvas完成一样的绘制操作        
点击后获取点击的像素，判断这个像素是否在影子canvas里面      
### 更新

### 局部清除

## G6编辑器的代码生成       
1. [Esprima](https://esprima.org/demo/parse.html) 是用来做词法和语法分析的      
2. [Escodegen](https://www.npmjs.com/package/escodegen)用来生成es规范代码       

# 可学习的框架资料
- [konva](https://github.com/konvajs/konva)
- [g](https://github.com/antvis/g)             