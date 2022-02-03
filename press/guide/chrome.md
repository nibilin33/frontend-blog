[Chromium源码解读](https://juejin.cn/post/7039850183244382216)
depot_tools
Tools for working with Chromium development. It requires python 2.7 or 3.8 for python 3 support.

## Tools   
The most important tools are:     

fetch: A gclient wrapper to checkout a project. Use fetch --help for more details.      
gclient: A meta-checkout tool. Think repo or git submodules, except that it support OS-specific rules, e.g. do not checkout Windows only dependencies when checking out for Android. Use gclient help for more details and README.gclient.md.       
git cl: A code review tool to interact with Rietveld or Gerrit. Use git cl help for more details and README.git-cl.md.      
roll-dep: A gclient dependency management tool to submit a dep roll, updating a dependency to a newer revision.     
There are a lot of git utilities included.  
## Updating
depot_tools updates itself automatically when running gclient tool. To disable auto update, set the environment variable DEPOT_TOOLS_UPDATE=0.      

To update package manually, run update_depot_tools.bat on Windows, or ./update_depot_tools on Linux or Mac.   

On Windows only, running gclient will install git and python.         

mac 上跑源码      
brew install --HEAD ccache      
To install symlinks for compilers that will automatically use   
ccache, prepend this directory to your PATH:    
  /opt/homebrew/opt/ccache/libexec    

If this is an upgrade and you have previously added the symlinks to   
your PATH, you may need to modify it to the path specified above so
it points to the current version.     
国外源git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git     
国内源 https://source.codeaurora.org/quic/lc/chromium/tools/depot_tools/     
git clone git://source.codeaurora.org/quic/lc/chromium/tools/depot_tools.git      
cd depot_tools      
git checkout origin/chromium.org/main   
export PATH=/path to depot_tools/depot_tools:"$PATH"    
git config --global core.precomposeUnicode true   
mkdir chromium && cd chromium   
