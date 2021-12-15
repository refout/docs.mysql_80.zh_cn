import type {DefaultThemeOptions} from 'vuepress-vite'
import {defineUserConfig} from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'refout',
    description: 'refout.github.io github-pages',
    dest: 'dist',
    port: 1030,
    //主题配置
    themeConfig: {
        logo: '/images/h.png',
        repo: 'refout',
        navbar: []
    },
})
