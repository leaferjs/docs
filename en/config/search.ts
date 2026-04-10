import { DefaultTheme } from 'vitepress';
export const search: {
  provider: 'local';
  options?: DefaultTheme.LocalSearchOptions;
} = {
  provider: 'local',
  options: {
    async _render(src, env, md) {
      const html = md.render(src, env);
      if (env.relativePath.startsWith('api/')) return '';
      return html;
    },
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换'
        }
      }
    }
  }
};