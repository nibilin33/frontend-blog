## 安装Kail Linux
1. 下载kali-linux-2019.4-gnome-amd64.iso    
2. 虚拟机选择 linux debian 8.x 64位 
3. 磁盘大小60G,内存2G,处理器数量2   
4. 启动后选择第一个，live(amd64)    
5. kail 默认username = root and password = toor 
## Android 手机安装Kail Linux
突发兴致，买了台二手安卓手机，惊人地发现......不会用<span class="emoj">💀</span>    
找了个其他人的安装步骤折腾....  
echo "deb [trusted=yes] https://yadominjinta.github.io/files/ termux extras" >> $PREFIX/etc/apt/sources.list

pkg in atilo
::: tip    
1. 安装Termux    
2. pkg install proot    
3. termux-chroot（不用空格不用空格<span class="emoj">💀</span> ）
4. pkg install git
5. git clone https://github.com/YadominJinta/atilo      
6. cd atilo/        
7. chmod +x atilo       
8. ~~./atilo install kali~~     
额，提示没有python3这个目录        
更新一遍    
apt update
apt upgrade 
安装apt install python    
又提示我没有request这个模块，降版本安装pip install -I requests==2.14.2  
结果提示我未知命令<span class="emoj">💀</span>，cat README.md     
命令行只有下面几种：    
    | 命令       |   功能      |
    | --------   | -----:  |
    | images        | list available images  |
    | remove        | remove installed images|
    | pull        | pulling an image|   
    | run        | run an image|   
    | clean        | clean tmps|        
     
**./atilo pull kali**   
**./atilo run kali**   
报错：proot warning: can't santitize bingding /sys：no such file or directory   
<span class="emoj">💀</span> proot --link2symlink指令，是获取proot权限的 
:::