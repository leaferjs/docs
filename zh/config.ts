import { defineAdditionalConfig } from 'vitepress'
import { apiSidebar } from './config/sidebar/api'
import { docSidebar } from './config/sidebar/doc'
import { nav } from './config/nav'
import { search } from './config/search'


export default defineAdditionalConfig({
    themeConfig: {
        nav,
        sidebar: {
            '/': { base: '/', items: docSidebar },
            '/api/': { base: '/', items: apiSidebar }
        },

        search,

        outlineTitle: '导航',

        lastUpdatedText: '更新于',

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        editLink: {
            pattern: 'https://github.com/leaferjs/docs/edit/main/:path',
            text: '在 GitHub 上编辑此页'
        },
    }
})