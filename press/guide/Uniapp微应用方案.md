# Uniapp微应用方案
## 问题背景
由于业务需求，需要快速融合其他应用的功能，原方案是通过git submodule方式进行整合
整体流程就是主应用git clone submodule, 然后执行主应用的build，把主应用的产物拷贝到子应用的目录再build一遍，整体流程如下图
<img src="https://github.com/nibilin33/frontend-blog/raw/master/press/guide/img/old-progress.png">

整个研发流程就非常笨重，带来核心以下问题：      
1. 严重耦合 
2. git submodule 管理子项目繁琐
    - 需要在主项目更新最新的commit引用
3. 构建时间成倍数增长   
4. 子应用无法做构建版本控制，出现问题只能子应用仓库整个回滚再构建   
   
## 调整方案     
思路：子应用产生分包产物通过发npm包给主应用消费，主应用只需要将产物按照分包规则进行整合即可         

### 独立分包

### 产物整合