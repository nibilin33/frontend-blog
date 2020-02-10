## 5W+1H
5W是指：Why，What，Where，Who，When     
1H是指：How 
## webpack  
Why: 解决代码的拆分问题 
What: 现代JavaScript 应用程序的静态模块打包工具,能做代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布    
How: 构建依赖图，生成chunk    
通过官网可以知道关键概念：
Entry：构建第一步从entry开始。  
Module:一个模块对应一个文件，webpack会从entry开始，递归找出所有依赖的模块。 
Chunk：代码块，一个Chunk由多个模块组合而成，用于代码合并与分割。    
 
先浏览了一下package.json,依赖了哪些。        
发现了不少第一次见到的库<span class="emoj">🙉</span>
1. json-schema-to-typescript, json schema 校验格式是否规范
2. memory-fs, node原生fs模块内存版(in-memory)的完整功能实现。   
memory-fs是内存缓存和快速数据处理的完美替代方案。webpack间过程中打包的文件  
是利用这个放到内存，减少了代码写入文件的开销。  
3. rimraf， 递归删除目录所有文件    
4. graceful-fs, 可以替代fs模块，是对fs模块的改进，使不同平台和环境之间的行为规范化，并使文件系统访问对错误的恢复更具弹性。      
5. vm, 提供了在 V8 虚拟机上下文中编译和运行代码的一系列 API。JavaScript 代码可以被编译并立即运行，也可以编译、保存，以后再运行。  
6. Tapable,公开了许多Hook类，可用于为插件创建钩子。专注于自定义事件的触发和处理。
7. source-map，是一个存储了打包前所有代码的行，列信息的mapping文件,,以及VLQ编码的字母记录着转换前的代码的位置。
8. benchmark，代码基准测试，分析代码性能。   


理清楚核心理念之后，开始读源码<span class="emoj">🔞</span>      
    

## vue-next 

