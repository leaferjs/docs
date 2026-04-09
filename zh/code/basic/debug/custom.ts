import { Debug } from 'leafer-ui'

Debug.enable = true

const debug = Debug.get('CustomType') // [!code hl:7]

debug.log('content1', 'content2') // CustomType content1 content2

debug.warn('content')

debug.error('content')