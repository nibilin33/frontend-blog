
module.exports = {
    title: 'FrontEnd blog',
    description: 'Just playing around',
    base: '/frontend-blog/',
    themeConfig: {
        sidebar: [
            ['./guide/foo', '内嵌web'],
            ['./guide/component.md', '组件说明'],
            ['./guide/tool.md', '工具说明'],
            ['./guide/promto.md', '那些年做过的优化'],
            ['./guide/knowledge.md', '重要的知识点'],
            ['./guide/we.md', '小程序'],
            ['./guide/electron.md', 'Electron'],
            ['./guide/cooperation.md', '协作的实现'],
            ['./guide/miniserve.md', '前端微服务'],
            ['./guide/code.md', '那些年读过的源码'],
        ],
        sidebarDepth: 3,
        displayAllHeaders: true // 默认值：false
    }
}