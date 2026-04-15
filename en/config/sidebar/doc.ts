import { DefaultTheme } from 'vitepress'

import { guideSidebar } from './doc/guide'
import { referenceSidebar } from './doc/reference'
import { pluginSidebar } from './doc/plugin'

export const docSidebar: DefaultTheme.SidebarItem[] = [
    ...guideSidebar,
    ...referenceSidebar,
    ...pluginSidebar
]