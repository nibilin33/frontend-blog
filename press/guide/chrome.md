[Chromium源码解读](https://juejin.cn/post/7039850183244382216)
mac 上跑源码
brew install --HEAD ccache
To install symlinks for compilers that will automatically use
ccache, prepend this directory to your PATH:
  /opt/homebrew/opt/ccache/libexec

If this is an upgrade and you have previously added the symlinks to
your PATH, you may need to modify it to the path specified above so
it points to the current version.

git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git