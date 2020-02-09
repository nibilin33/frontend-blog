## 5W+1H
5W是指：Why，What，Where，Who，When     
1H是指：How 
## webpack  
Why: 解决代码的拆分问题 
What: 现代JavaScript 应用程序的静态模块打包工具,能做代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布    
How: 构建依赖图，生成chunk      
理清楚核心理念之后，开始读源码。     
无非是关心在哪里定义，谁调用了它。  
lib/Chunk.js --> ChunkGraph.js

## vue-next 

