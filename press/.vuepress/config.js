
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
            ['./guide/knowledge.md', 'Need to Know'],
            ['./guide/promto.md', '那些年做过的优化'],
            ['./guide/component.md', '组件说明'],
            ['./guide/code.md', '源码学习'],
            ['./guide/min-routine.md', '小程序'],
            ['./guide/pwa.md', 'PWA实践'],
            ['./guide/electron.md', 'Electron'],
            ['./guide/cooperation.md', '协作的实现'],
            ['./guide/me.md', 'README'],
            ['./guide/interview.md', '解题'],
        ],
        sidebarDepth: 3,
        displayAllHeaders: true // 默认值：false
    }
}