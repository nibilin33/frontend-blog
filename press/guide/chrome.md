[Chromium源码解读](https://juejin.cn/post/7039850183244382216)
[深入理解v8](https://blog.appsignal.com/2020/07/01/a-deep-dive-into-v8.html)
# [Chromium for Mac](https://github.com/chromium/chromium/blob/main/docs/mac_build_instructions.md)
1. 获取代码
   AppStore Install Xcode   
   Run sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
   检查是否有sdk
   ls ` xcode-select -p ` /Platforms/MacOSX.platform/Developer/SDKs     
   通过chromium提供的depot_tools获取代码        
   ```shell
   git config --global core.precomposeUnicode true
   git clone https://chromium.googlesource.com/chromium/tools/depot_tools   # 国外源
   git clone https://source.codeaurora.org/quic/lc/chromium/tools/depot_tools    # 国内源
   # 在bash_profile插入下面代码 
   export PATH="/path to depot_tools/depot_tools:$PATH"
   function proxy_off(){
        unset http_proxy
        unset https_proxy
        unset ftp_proxy
        unset rsync_proxy
        echo -e "已关闭代理"
   }
    function proxy_on() {
        export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"
        export http_proxy="http://127.0.0.1:1087"
        export https_proxy=$http_proxy
        export ftp_proxy=$http_proxy
        export rsync_proxy=$http_proxy
        export HTTP_PROXY=$http_proxy
        export HTTPS_PROXY=$http_proxy
        export FTP_PROXY=$http_proxy
        export RSYNC_PROXY=$http_proxy
        echo -e "已开启代理"
    }
    # 保存
    source ~/.bash_profile
   # 注意，根据自己的配置设置有可能会是1080或1086
   # 需要使用代理时开启ss全局模式，然后打开终端，输入proxy_on就会启动。如果需要关闭，只需要输入proxy_off。
    proxy_on
    mkdir chromium && cd chromium   
    # 大约需要半小时到一小时
    fetch chromium 
    cd src
   ```
2. 准备构建环境
   ```shell
    # check CPU
    uname -m
    # modify cpu args
    gn args out/Default
    # insert args
    target_os = "mac"
    target_cpu = "x64/arm64"
    is_debug = false
    is_component_build = false
   ```
3. 构建Chromium
  ```shell
     autoninja -C out/Default chrome
  ```

4. 启动
   ```shell
   out/Default/Chromium.app/Contents/MacOS/Chromium --disable-features="DialMediaRouteProvider"
   ```
5. Debugging Chromium on macOS
  https://github.com/chromium/chromium/blob/main/docs/mac/debugging.md  

# depot_tools 介绍
chromium 开发工具，要求python2.7或者3.8   
## Tools  
重要的工具    
### fetch
用于获取项目，更多信息查看 fetch --help
fetch configs
  - android
  - android_internal
  - breakpad
  - chromium
  - config_util
  - crashpad
  - dart
  - depot_tools
  - devtools-frontend
  - flutter
  - goma_client
  - gyp
  - infra
  - infra_internal
  - inspector_protocol
  - ios
  - ios_internal
  - nacl
  - naclports
  - node-ci
  - pdfium
  - skia
  - skia_buildbot
  - syzygy
  - v8
  - webrtc
  - webrtc_android
  - webrtc_ios
  - website

### gclient     
gclient是谷歌开发的一套跨平台git仓库管理工具，用来将多个git仓库组成一个solution进行管理
它的作用类似 git 的 submodule，用来将多个git仓库组成一个solution进行管理，比如chromium项目是由80多个独立的git仓库构成的.
更多细节可以看README.gclient.md   
### git cl      
git cl: A code review tool to interact with Rietveld or Gerrit. Use git cl help for more details and README.git-cl.md.         
### roll-dep  
roll-dep: A gclient dependency management tool to submit a dep roll, updating a dependency to a newer revision.     
There are a lot of git utilities included.      
## Updating
depot_tools updates itself automatically when running gclient tool. To disable auto update, set the environment variable DEPOT_TOOLS_UPDATE=0.      
To update package manually, run update_depot_tools.bat on Windows, or ./update_depot_tools on Linux or Mac.   
On Windows only, running gclient will install git and python.         

## 可能遇到的问题    
- Failed to connect to chromium.googlesource.com port 443: Operation timed out
git config --global http.proxy "localhost:1087"
- xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
- FileNotFoundError: [Errno 2] No such file or directory: '../../third_party/node/mac/node-darwin-x64/bin/node'
    修改 third_party/node.py
    里面的cpu类型判断有问题    
## 其他参考    
- https://segmentfault.com/a/1190000023231568   
- https://ijackey.com/mac-%E4%B8%8B-chromium-%E6%BA%90%E7%A0%81%E7%BC%96%E8%AF%91-716.html  
- [CCache on Mac](https://github.com/chromium/chromium/blob/main/docs/ccache_mac.md)
  brew install --HEAD ccache      
  To install symlinks for compilers that will automatically use   
  ccache, prepend this directory to your PATH:       
  /opt/homebrew/opt/ccache/libexec      
  If this is an upgrade and you have previously added the symlinks to   
  your PATH, you may need to modify it to the path specified above so
  it points to the current version.   