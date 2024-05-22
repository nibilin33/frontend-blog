# 小程序转APP方案
## 背景
app上的功能落后太多，下单链路上有一个大的改动（对接新的商品中台），这个功能上线会导致 app 直接无法下单。        
就有了保持多平台同步的需求。            
## 技术选型
1. WebView 容器      
2. 小程序容器            
   - finclip        
   - donut      
3. 混合开发
    - wxml 转成 js 对象 [wxml-transformer](https://github.com/imingyu/wxml-transformer), [wxmlify](https://github.com/zhanziyang/wxmlify)             
    - 模拟App,Page,Component,wx对象