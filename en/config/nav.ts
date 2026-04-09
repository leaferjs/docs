import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [{
  text: '✨ AI',
  items: [{
    text: '询问AI - DeepWiki',
    link: 'https://deepwiki.com/leaferjs/ai-docs'
  }, {
    text: '询问AI - Context7',
    link: 'https://context7.com/leaferjs/ai-docs?tab=chat'
  }, {
    text: 'MCP',
    link: 'https://context7.com/leaferjs/ai-docs'
  }, {
    text: 'Leafer AI 知识库',
    link: 'https://github.com/leaferjs/ai-docs'
  }]
}, {
  text: '文档',
  activeMatch: '/(guide)|(reference)|(plugin)/',
  items: [{
    text: '概览',
    link: '/guide/'
  }, {
    text: '快速入门',
    link: '/guide/basic/leafer'
  }, {
    text: '参考',
    link: '/reference/display/Leafer'
  }, {
    text: '图形编辑器',
    link: '/plugin/in/editor/'
  }, {
    text: '示例',
    link: 'https://www.leaferjs.com/examples/',
    target: '_self'
  }]
}, {
  text: 'API',
  link: '/api/index.md',
  activeMatch: '/api/'
}, {
  text: 'Playground',
  link: 'https://www.leaferjs.com/playground/'
}, {
  text: '生态',
  items: [{
    text: '官方 PxGrow 生态',
    link: 'https://www.pxgrow.com'
  }, {
    text: '社区参与',
    link: '/contribute/'
  }, {
    text: 'AI 训练计划',
    link: '/guide/ai'
  }, {
    text: '贡献指南',
    link: '/contribute/guide'
  }]
}, {
  text: 'v2.0.8',
  activeMatch: '/blog/',
  items: [{
    text: '更新日志',
    link: '/update/'
  }, {
    text: '博客',
    link: '/blog/'
  }, {
    text: '愿景',
    link: '/guide/#使命与愿景'
  }, {
    text: '文化',
    link: '/guide/#卓越文化'
  }, {
    text: '常见问题',
    link: '/guide/problem/'
  }, {
    text: '提问指南',
    link: '/guide/question.md'
  }, {
    text: 'Bug与建议',
    link: 'https://github.com/leaferjs/leafer-ui/issues'
  }, {
    text: '知乎问答',
    link: 'https://www.zhihu.com/topic/736459154/unanswered'
  }, {
    text: '技术交流群',
    link: 'https://www.leaferjs.com/#contact'
  }]
}, {
  text: '赞助',
  link: '/sponsor/'
}];