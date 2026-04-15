import { defineAdditionalConfig } from 'vitepress'
import { apiSidebar } from '../zh/config/sidebar/api'
import { docSidebar } from './config/sidebar/doc'
import { nav } from './config/nav'
import { search } from './config/search'
import { prefixLang } from '../helper/lang'

prefixLang(nav as any, 'en')
prefixLang(docSidebar, 'en')
prefixLang(apiSidebar, 'en')

export default defineAdditionalConfig({
    themeConfig: {
        nav,
        sidebar: {
            '/en/': docSidebar,
            '/en/api/': apiSidebar
        },

        search,

        editLink: {
            pattern: 'https://github.com/leaferjs/docs/edit/main/:path'
        },
    }
})