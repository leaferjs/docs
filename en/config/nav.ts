import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '✨ AI', items: [
            { text: 'Ask AI - Context7', link: 'https://context7.com/leaferjs/ai-docs?tab=chat', },
            { text: 'Ask AI - DeepWiki', link: 'https://deepwiki.com/leaferjs/ai-docs' },
            { text: 'MCP & Skills', link: 'https://context7.com/leaferjs/ai-docs', },
            { text: 'Leafer AI Knowledge Base', link: 'https://github.com/leaferjs/ai-docs', },
        ]
    },
    {
        text: 'Docs', activeMatch: '/(guide)|(reference)|(plugin)/', items: [
            { text: 'Overview', link: '/guide/', },
            { text: 'Quick Start', link: '/guide/basic/leafer', },
            { text: 'Reference', link: '/reference/display/Leafer', },
            { text: 'Graphic Editor', link: '/plugin/in/editor/', },
            { text: 'Examples', link: 'https://www.leaferjs.com/examples/', target: '_self' },

        ]
    },
    { text: 'API', link: 'https://www.leaferjs.com/api/' },

    { text: 'Playground', link: 'https://www.leaferjs.com/playground/' },
    {
        text: 'Ecosystem', items: [
            { text: 'Official PxGrow Ecosystem', link: 'https://www.pxgrow.com', },
            { text: 'Community Participation', link: '/contribute/' },
            { text: 'Contribution Guide', link: '/contribute/guide' },
        ]
    },
    {
        text: 'v2.1.0', activeMatch: '/blog/', items: [
            { text: 'Changelog', link: '/update/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Vision', link: '/guide/#使命与愿景' },
            { text: 'Culture', link: '/guide/#卓越文化' },
            { text: 'FAQ', link: '/guide/problem/' },
            { text: 'Question Guide', link: '/guide/question.md' },
            { text: 'Bugs & Suggestions', link: 'https://github.com/leaferjs/leafer-ui/issues' },
            { text: 'Zhihu Q&A', link: 'https://www.zhihu.com/topic/736459154/unanswered' },
            { text: 'Tech Community', link: 'https://www.leaferjs.com/#contact' },
        ]
    },

    { text: 'Sponsor', link: '/sponsor/' }
]
