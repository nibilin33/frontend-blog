## 环境准备

1. Anaconda:python 版本和第三方库管理  

2. [安装步骤](https://docs.anaconda.com/anaconda/install/) https://docs.anaconda.com/anaconda/install/  
3. [使用说明](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html) https://docs.conda.io/projects/conda/en/latest/user-guide/index.html

4. 常用命令  
> conda create --name snakes python=2.7
> conda env list 查看创建的环境 
> conda activate envname 激活当前环境
5. 编辑器我使用pycharm，永久注册方式： 
修改pycharm64.exe.vmoptions          
-javaagent:你pycharm的安装目录\jetbrains-agent.jar      
[永久激活](https://pan.baidu.com/s/1z7zBV1wGGJi74jylLMxQ7g) 
提取码：cc2v    
提取二维码：
## 国际化 

1. 实现思路  
1.1）新项目开发利用python脚本替换中文为$t      
1.2）重构或者迭代项目利用vscode国际化插件替换已有的国际化        
[vscode 插件开发](https://code.visualstudio.com/api/get-started/your-first-extension)     
[vscode 参考](https://github.com/antfu/i18n-ally)   
::: details 
<span class="emoj">🙉</span>在公司写的，不能这么直白
:::
2. 使用说明

## 项目发布

1. 实现思路  

> 1. 本地目录放到服务器目录  
> 2. 执行打包命令    
> 3. 下载包到本地，本地中转到目标打包目录    
> 4. 发送邮件     

::: details 
<span class="emoj">🙉</span>在公司写的，不能这么直白
:::

2. 使用说明  
安装依赖pip install paramiko,pip install pywin32    
配置使用看show me the code 的注释说明     

## 代码生成

1. 实现思路  
> 1. 爬取后端api 接口，解析出url和方法
> 2. 根据项目规范生成请求代码
::: details 
<span class="emoj">🙉</span>在公司写的，不能这么直白
:::

## 代码分析 

背景：
项目需要移植另一个项目的功能，本身这个项目就是基于那个项目改的。    
对于完全不熟悉功能点，移植很容易出问题。        
1. 实现思路  
> 1. 比较出相同目录相同文件的差异   
> 2. 比较出增加文件 
2. 使用说明
::: details 
<span class="emoj">🙉</span>在公司写的，不能这么直白
:::

## 自动化测试     
1. Selenium IDE 
Selenium IDE是Firefox浏览器的一个插件，依附于Firefox浏览器。    
[FireFox 插件](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/)        
[Chrome 插件](https://github.com/nibilin33/frontend-blog/raw/master/press/guide/crx/chrome_selenium.crx)
(https://github.com/nibilin33/frontend-blog/raw/master/press/guide/crx/chrome_selenium.pem)
2. WebdriverIO  
[文档地址](https://webdriver.io/docs/api.html)  
3. XPath
[xpath](https://devhints.io/xpath)  
4. python 录制回放  
由于利用selenium感觉编写操作的代码比较多而且很难复用，  
就还是想把操作录制，回放执行的时候做基准图像比较判断，    
有差异的生成差异图，    
最后生成报告。  
::: tip 
操作键盘鼠标的库:pynput         
存储操作：sqlite        
html报告：%格式格式化   
"%(name)s-----%(age)d "%{'name':'xx','age':20}  
xx-----20       
:::

```js     
pip install pynput  
pip install pysqlite    
```

## 自动下载并安装软件    
背景：换台电脑装环境都要折腾很久，建一个虚拟机装环境也要很久                
1. 实现思路
> 软件能自动批量下载到指定目录      
> 执行安装程序，跳过图形界面的各种确定按钮             


[参考](https://www.cnblogs.com/xiongzaiqiren/p/11268615.html)       
[基本语法](https://blog.51cto.com/8686505/2438270)   

## Linux 初始化node 环境shell 脚本  
```
wget http://nodejs.org/dist/v8.11.1/node-v8.11.1-linux-x64.tar.gz 

tar  xf node-v8.11.1-linux-x64.tar.gz -C /usr/local/

cd /usr/local/

mv node-v8.11.1-linux-x64/ nodejs

ln -s /usr/local/nodejs/bin/node /usr/local/bin

ln -s /usr/local/nodejs/bin/npm /usr/local/bin
```
执行命令        
```
chomd 744 node_init.sh 
./node_init.sh  
```
[完整下载](https://github.com/nibilin33/python-tool/blob/master/shell/node_init.sh) 
## github 爬虫  
github 爬虫开放[api](https://developer.github.com/v3/search/#search-users)      

