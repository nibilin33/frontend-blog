
module.exports = {
    title: 'Nibl Blog',
    description: 'Just playing around',
    base: '/frontend-blog/',
    head: [
        ['link', { rel: "shortcut icon", href: "./favicon.ico" ,type:"image/x-icon"}]
    ],
    themeConfig: {
        sidebar: [
            ['./guide/solution.md', '解决方案'],
            ['./guide/requirements.md', '代码实践'],
            ['./guide/tool.md', '工具说明'], 
            ['./guide/webview.md', 'WebView'],
            ['./guide/book.md', '书籍阅读'],
            ['./guide/knowledge.md', 'Need to Know'],
            ['./guide/design.md', '设计模式'],
            ['./guide/promto.md', '那些年让人难受的BUG'],
            ['./guide/component.md', '组件说明'],
            ['./guide/code.md', '源码学习'],
            ['./guide/penetration.md', '渗透测试'],
            ['./guide/min-routine.md', '小程序'],
            ['./guide/electron.md', 'Electron'],
            ['./guide/cooperation.md', '协作的实现'],
            ['./guide/interview.md', '解题'],
            ['./guide/me.md', 'README'],
        ],
        sidebarDepth: 3,
        displayAllHeaders: true, // 默认值：false
        nav:[{
                text: '评论留言',
                link: '/guide/comment.md'}
        ],
    },
    plugins:['flowchart','demo-code', 
    [
      'vuepress-plugin-container',
      {
        type: 'details',
        before: info => `<details class="custom-block details">`,
        after: '</details>',
      },
    ],[
        'vuepress-plugin-comment',
        {
          choosen: 'valine', 
          // options选项中的所有参数，会传给Valine的配置
          options: {
            el: '#valine-vuepress-comment',
            appId: 'jJfXeV1I2kHde68Hnn7A7yEJ-gzGzoHsz',
            appKey: 'SXR99ldnbUDDFITs3h62K9OH',
            placeholder: '来了就说点什么吧~~~',
            recordIP:true,
            
          }
        }
      ]
    ],
    markdown: {
        lineNumbers: true,

    },
    // extendMarkdown: md => {
    //     // 使用更多的 markdown-it 插件!
    //     md.use(require('markdown-it-xxx'))
    // }
}