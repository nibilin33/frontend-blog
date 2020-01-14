## 起步

```
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project
# 安装依赖并运行你的程序
cd my-project
npm install
npm run dev
```
由于 simulatedgreg 太久没有更新，electron版本还是用2.x的    
方法二(慢的话用cnpm)    
npm install -g electron
npm install -g electron-forge       
electron-forge init projectName 
electron-forge start   
方法三  
vue-cli init project
vue add electron-builder     
如果出现异常，反复vue add electron-builder           
## 参考
[electron-webview完全指南](http://www.ayqy.net/blog/electron-webview%E5%AE%8C%E5%85%A8%E6%8C%87%E5%8D%97/)  
## 使用 
加入项目作为内嵌模拟工具        
```
<template>
  <div id="wrapper">
    设置加载URL：<input
      @keydown.enter="setUrl"
      style="width:100%"
      v-model="pageUrl"/>
    <button @click="setUrl">设置</button>
    <br/>
    <button :disabled="!ready" @click="sendMsg({
      param: {
        notify:'notify_language_changed',
        lang: 'English'
      }
    })">英文</button>
    <button :disabled="!ready"
    @click="sendMsg({
      param: {
        notify:'notify_language_changed',
        lang: 'Chinese_S'
      }
    })">中文</button>
    <button
      :disabled="!ready"
      @click="sendMsg({
      param: {
        notify:'notify_theme_changed',
        theme: 'Default'
      }
    })">正常模式</button>
    <button :disabled="!ready"
      @click="sendMsg({
      param: {
        notify:'notify_theme_changed',
        theme: 'Dark'
      }
    })">深色模式</button>
    <webview id="webview" src="file:///J:/gitlab/ume-2.3-for-testlocal/server/dist/pc/index.html"></webview>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    data() {
      return{
        pageUrl:'',
        ready: false,

      }
    },
    mounted() {
    },
    methods: {
      setUrl() {
        if (!this.pageUrl) {
          alert('请输入链接');
        }
        const webview = document.getElementById('webview');
        webview.loadURL(this.pageUrl);
        webview.style.height = '80vh';
        webview.addEventListener('dom-ready',()=>{
              const webContents = webview.getWebContents().webContents;
              webContents.on('did-finish-load', () => {
                this.ready = true;
              });
        })
      },
      sendMsg(msg) {
        const webview = document.getElementById('webview');
        const webContents = webview.getWebContents().webContents;
        webContents.executeJavaScript(`receiveMessageFromPlatformFunc('${JSON.stringify(msg)}')`);
      },
    }
  }
</script>
```
## 可能遇到的问题
1.webview 不识别
https://github.com/electron/electron/blob/master/docs/api/breaking-changes.md#new-browserwindow-webpreferences- 

