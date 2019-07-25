
module.exports = {
    title: 'FrontEnd blog',
    description: 'Just playing around',
    base: '/frontend-blog/',
    themeConfig: {
        sidebar: [
            ['./guide/foo', '内嵌web'],
            ['./guide/component.md', '组件使用说明'],
            ['./guide/tool.md', '工具使用说明']
        ],
        sidebarDepth: 3,
        displayAllHeaders: true // 默认值：false
    }
}