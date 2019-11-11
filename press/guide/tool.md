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
desktop = os.path.expanduser("~/Desktop")


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


def sendMail():
    with open('mail.html', 'r') as myfile:
        data = myfile.read()
        print data
        payload = {
            "receiver": [
                "nibl@yealink.com"
            ],
            "content": data,
            "subject": "text"
        }
        r = requests.post('http://ume.yealink.com:9999/api/v1/external/conferenceMail/send/async', json=payload)
        print r.status_code


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
        sendMail()
    except Exception, err:
        print(traceback.format_exc())

```

</details>

2. 使用说明  

**详细看show me the code 的注释说明**

## 代码生成

1. 实现思路  
2. 使用说明

## 代码分析

1. 实现思路  
2. 使用说明

## 自动化测试

1. 实现思路  
2. 使用说明

