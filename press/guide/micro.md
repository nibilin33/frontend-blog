## 引入微前端背景   
完成整个项目重构周期太长，需要阶段性成果的输出  
### 技术选型过程
[module federation & qiankun](https://nibl.yuque.com/org-wiki-nibl-tazdnd/oq0d5h/klketfqf7a77i1vy?singleDoc#)
### 性能测试报告
[performance report](https://nibl.yuque.com/org-wiki-nibl-tazdnd/oq0d5h/suw1xc6m5gt022au?singleDoc#)        
### 优化   
主要在网络层面    
<img alt="微前端资源加载" src="https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/micro-net.webp"/>

1. 多路复用容易 Timeout,大批量的请求同时发送，由于 HTTP2 连接内存在多个并行的流，而网络带宽和服务器资源有限，每个流的资源会被稀释，虽然它们开始时间相差更短，但却都可能超时         
2. 文件拆得比较小，就也没用上GZIP      


## [技术分享PPT](https://nibilin33.github.io/frontend-blog/micro-frontend/#0)

<iframe  
 height=450 
 width=100% 
 src="https://nibilin33.github.io/frontend-blog/micro-frontend/#0"  
 frameborder=0  
 allowfullscreen>
 </iframe>