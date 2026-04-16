import { DefaultTheme } from 'vitepress'

export const search: { provider: 'local'; options?: DefaultTheme.LocalSearchOptions } = {
    provider: 'local',
    options: {
        async _render(src, env, md) {
            const html = md.render(src, env)
            if (env.relativePath.startsWith('en/api/')) return ''
            return html
        }
    }
}