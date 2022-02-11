module.exports = {
  title: "Blog",
  description: "记录——平凡之路",
  base: "/frontend-blog/",
  head: [
    [
      "link",
      { rel: "shortcut icon", href: "./nibl_32.ico", type: "image/x-icon" }
    ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      _hmt.push(['_setAutoPageview', false]);
      (function() {
        console.log("load hmt");
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ca71d93db8b670d9d48afc9fb07d5631";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
        `
    ]
  ],
  themeConfig: {
    sidebar: [
      ["./guide/softpower.md", "工作软技能"],
      ["./guide/programmer-english.md", "程序员的英语"],
      ["./guide/edge.md", "边缘计算"],
      ["./guide/graphics.md", "图形学编程"],
      ["./guide/iot.md","IoT"],
      ["./guide/canvas.md","Canvas"],
      ["./guide/webgpu.md","WebGPU"],
      ["./guide/webgl.md", "WebGL"],
      ["./guide/npm.md","每天一个实用npm库"],
      ["./guide/wasm.md","WebAssembly"],
      ["./guide/book.md", "读书笔记"],
      ["./guide/code.md", "源码学习"],
      ["./guide/interview.md", "面试"],
      ["./guide/algorithm.md", "算法学习"],
      ["./guide/webview.md", "WebView"],
      ["./guide/requirements.md", "代码实践"],
      ["./guide/cooperation.md", "协作的实现"],
      ["./guide/design.md", "设计模式"],
      ["./guide/tool.md","写过的python小工具"],
      ["./guide/solution.md", "记录重构心路思考"],
      ["./guide/promto.md", "那些年让人难受的BUG"],
      ["./guide/me.md", "README"]
    ],
    sidebarDepth: 3,
    displayAllHeaders: true, // 默认值：false
    nav: [
      { text: "Github", link: "https://github.com/nibilin33" },
      // { text:"GitBook",link:"https://legacy.gitbook.com/book/nibilin33/share-code/welcome"}
    ]
  }
};
