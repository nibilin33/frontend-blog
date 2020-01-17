
module.exports = {
    title: 'FrontEnd blog',
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
            ['./guide/promto.md', '那些年让人难受的BUG'],
            ['./guide/component.md', '组件说明'],
            ['./guide/code.md', '渗透测试'],
            ['./guide/min-routine.md', '小程序'],
            ['./guide/electron.md', 'Electron'],
            ['./guide/cooperation.md', '协作的实现'],
            ['./guide/interview.md', '解题'],
            ['./guide/me.md', 'README'],
        ],
        sidebarDepth: 3,
        displayAllHeaders: true // 默认值：false
    }
}