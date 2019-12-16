## 环境准备

1. Anaconda:python 版本和第三方库管理  

2.[安装步骤](https://docs.anaconda.com/anaconda/install/) https://docs.anaconda.com/anaconda/install/  
3.[使用说明](https://docs.conda.io/projects/conda/en/latest/user-guide/index.html) https://docs.conda.io/projects/conda/en/latest/user-guide/index.html

4. 常用命令  

> conda env list 查看创建的环境
> conda activate envname 激活当前环境

## 国际化 

1. 实现思路  
2. 使用说明

## 项目发布

1. 实现思路  

> 1. 本地目录放到服务器目录  
> 2. 执行打包命令    
> 3. 下载包到本地，本地中转到目标打包目录    
> 4. 发送邮件     
pip install pywin32 
<details>
<summary>Show Me The Code</summary>

```
# coding: utf-8
import requests
import paramiko
import os
import traceback
import shutil

host = "10.200.112.207"
port = 22
user = "root"
password = "Yealink1105"
packageConfig = {
    'web_uc': {
        'local': 'J:\gitlab\uc2.xApplications\server\dist', #本地工程路径
        'remote': '/usr/local/apollo/web_uc/dist', # 目标服务器目录
        'upload': True, # 是否需要发版
        'nextVersionPath': '\\\\gitlab.yealink.com\uc_module\web_uc\\23.253.0.20', # 放包的的地址，直接写下个版本号，会自动创建
    },
    'web_ume': {
        'local': '',
        'remote': '/usr/local/apollo/web_ume/dist',
        'upload': False,
        'nextVersionPath': '\\\\gitlab.yealink.com\uc_module\web_ume\\23.253.0.21',
    }
}
# 中文要注意编码，u
mailConfig = {
    'receivers':['gaojd@yealink.com'],
    'subject':u'【信通院】【uc2.2】web_uc 23.253.3.1，web_ume 23.253.3.1',
    'mailContentPath':'mail.html', # 邮件模板路径
    # eg:{'mail_path':'J:/python-anaconda/translate.json','file_name':'translate.json'}
    'attachments':[]
}


def __get_all_files_in_local_dir(local_dir):
    all_files = list()
    files = os.listdir(local_dir)
    for x in files:
        filename = os.path.join(local_dir, x)
        if os.path.isdir(filename):
            all_files.extend(__get_all_files_in_local_dir(filename))
        else:
            all_files.append(filename)
    return all_files


def sftp_put_dir(local_dir, remote_dir, sftp, ssh):
    if remote_dir[-1] == '/':
        remote_dir = remote_dir[0:-1]
    print remote_dir
    all_files = __get_all_files_in_local_dir(local_dir)
    for x in all_files:
        filename = os.path.split(x)[-1]
        remote_file = os.path.split(x)[0].replace(local_dir, remote_dir)
        path = remote_file.replace('\\', '/')
        remote_filename = path + '/' + filename
        tdin, stdout, stderr = ssh.exec_command('mkdir -p ' + path)
        print stderr.read()
        print (u'Put文件%s传输到%s中...' % (filename, host))
        sftp.put(x, remote_filename)


def sendOutLook():
    outlook = win32.Dispatch('Outlook.Application')
    mail_item = outlook.CreateItem(0) # 0: olMailItem
    for recipers in mailConfig['receivers']:
        mail_item.Recipients.Add(recipers)
    mail_item.BodyFormat = 2          # 2: Html format
    myfile = codecs.open(mailConfig['mailContentPath'], 'r',encoding='utf8')
    for attr in mailConfig['attachments']:
        print attr
        mail_item.Attachments.Add(attr['mail_path'], 1, 1, attr['file_name'])
    data = myfile.read()
    myfile.close()
    mail_item.HTMLBody = data
    mail_item.Subject = mailConfig['subject']
    mail_item.Send()

def package(local, remote, filename, nextVersion):
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, port, user, password)
    sftp = ssh.open_sftp()
    ssh.exec_command('rm -rf ' + remote)
    sftp_put_dir(local, remote, sftp, ssh)
    targetDir = remote[0:remote.rindex('/')]
    targetFile = targetDir + '/' + filename + '.tar.gz'
    ssh.exec_command('rm -rf ' + targetFile)
    tdin, stdout, stderr = ssh.exec_command('cd ' + targetDir + ';' + 'tar -zcvf' + ' ' + filename + '.tar.gz' + ' *')
    print stdout.read()
    print "Downloading files ==> " + targetFile
    localPath = './' + filename + '.tar.gz'
    print localPath
    if os.path.exists(localPath):
        try:
            os.remove(localPath)
            print("File removed successfully")
        except OSError as error:
            print(error)
            print("File path can not be removed")
    sftp.get(targetFile, localPath)
    if not os.path.exists(nextVersion):
        os.mkdir(nextVersion)
    print("Directory ", nextVersion, " Created ")
    shutil.copy(localPath, nextVersion)

if __name__ == '__main__':
    print desktop
    try:
        for itera in packageConfig:
            if packageConfig[itera]['upload']:
                package(packageConfig[itera]['local'], packageConfig[itera]['remote'],itera,packageConfig[itera]['nextVersionPath'])
        sendOutLook()
    except Exception, err:
        print(traceback.format_exc())

```

</details>

2. 使用说明  
安装依赖pip install paramiko,pip install pywin32
**详细看show me the code 的注释说明**

## 代码生成

1. 实现思路  
2. 使用说明

## 代码分析

1. 实现思路  
2. 使用说明

## 自动化测试

方法一      
1. Selenium IDE 
Selenium IDE是Firefox浏览器的一个插件，依附于Firefox浏览器。    
[FireFox 插件](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/)
[Chrome 插件] 

方法二      
1. WebdriverIO  
[文档地址](https://webdriver.io/docs/api.html)  

