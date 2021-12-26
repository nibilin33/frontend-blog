module.exports = {
  title: "Blog",
  description: "记录——平凡之路",
  base: "/frontend-blog/",
  head: [
    [
      "link",
      { rel: "shortcut icon", href: "./nibl_32.ico", type: "image/x-icon" }
    ]
  ],
  themeConfig: {
    sidebar: [
      ["./guide/worknote.md", "工作日记"],
      ["./guide/npm.md","每天一个实用npm库"],
      ["./guide/webgpu.md","WebGPU学习"],
      ["./guide/webgl.md", "WebGL学习"],
      ["./guide/wasm.md","WebAssembly学习"],
      ["./guide/book.md", "读书笔记"],
      ["./guide/code.md", "源码学习"],
      ["./guide/algorithm.md", "算法学习"],
      ["./guide/webview.md", "WebView"],
      ["./guide/knowledge.md", "小知识点"],
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
