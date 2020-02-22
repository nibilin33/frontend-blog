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
<span class="emoj">🙉</span>在公司开发的，不能开
:::
2. 使用说明

## 项目发布

1. 实现思路  

> 1. 本地目录放到服务器目录  
> 2. 执行打包命令    
> 3. 下载包到本地，本地中转到目标打包目录    
> 4. 发送邮件     

::: details 
<span class="emoj">🙉</span>在公司开发的，不能开
:::

2. 使用说明  
安装依赖pip install paramiko,pip install pywin32    
配置使用看show me the code 的注释说明     

## 代码生成

1. 实现思路  
2. 使用说明
::: details 
<span class="emoj">🙉</span>在公司开发的，不能开
:::
## 代码分析

1. 实现思路  
2. 使用说明
::: details 
<span class="emoj">🙉</span>在公司开发的，不能开
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
就还是想把操作录制，回放执行的时候做基本的预期判断，    
最后生成报告。  
::: tip 
操作键盘鼠标的库:pynput         
存储操作：sqlite        
html报告：%格式格式化   
"%(name)s-----%(age)d "%{'name':'xx','age':20}  
xx-----20       
:::



