[Chromium源码解读](https://juejin.cn/post/7039850183244382216)
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