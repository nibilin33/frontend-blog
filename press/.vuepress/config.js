module.exports = {
  title: "Nibl Blog",
  description: "记录所得",
  base: "/frontend-blog/",
  head: [
    [
      "link",
      { rel: "shortcut icon", href: "./nibl_32.ico", type: "image/x-icon" }
    ]
  ],
  themeConfig: {
    sidebar: [
      ["./guide/solution.md", "记录重构心路思考"],
      ["./guide/promto.md", "那些年让人难受的BUG"],
      ["./guide/book.md", "书籍阅读"],
      ["./guide/code.md", "源码学习"],
      ["./guide/algorithm.md", "算法学习"],
      ["./guide/webview.md", "WebView"],
      ["./guide/knowledge.md", "小知识点"],
      ["./guide/requirements.md", "代码实践"],
      ["./guide/tool.md", "工具说明"],
      ["./guide/electron.md", "Electron"],
      ["./guide/min-routine.md", "小程序"],
      ["./guide/serverless.md", "Serverless"],
      ["./guide/penetration.md", "渗透测试"],
      ["./guide/component.md", "组件说明"],
      ["./guide/cooperation.md", "协作的实现"],
      ["./guide/design.md", "设计模式"],
      ["./guide/interview.md", "面试"],
      ["./guide/me.md", "README"]
    ],
    sidebarDepth: 3,
    displayAllHeaders: true, // 默认值：false
    nav: [
      {
        text: "评论留言",
        link: "/guide/comment.md"
      },
      { text: "Github", link: "https://github.com/nibilin33" },
      // { text:"GitBook",link:"https://legacy.gitbook.com/book/nibilin33/share-code/welcome"}
    ]
  },
  plugins: [
    "flowchart",
    [
      "vuepress-plugin-container",
      {
        type: "details",
        before: info => `<details class="custom-block details">`,
        after: "</details>"
      }
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "jJfXeV1I2kHde68Hnn7A7yEJ-gzGzoHsz",
          appKey: "SXR99ldnbUDDFITs3h62K9OH",
          placeholder: "来了就说点什么吧~~~",
          recordIP: true
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  }
  // extendMarkdown: md => {
  //     // 使用更多的 markdown-it 插件!
  //     md.use(require('markdown-it-xxx'))
  // }
};
