import type {DefaultThemeOptions} from 'vuepress-vite'
import {defineUserConfig} from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'MySQL 8.0 参考手册',
    description: 'MySQL 8.0 参考手册 github-pages',

    port: 1030,
    //主题配置
    themeConfig: {
        logo: '/images/h.png',
        repo: 'refout/docs.mysql_80.zh_cn',
        navbar: [],
        sidebar: [
            '/4_mysql_programs.md',
            '/5_mysql_server_administration.md',
            '/12_functions_and_operators.md'
        ],
        sidebarDepth: 4,
        date: 'yyyy-MM-dd hh:mm:ss'
    },
})
