// #自定义滤镜 [blur 滤镜]
import { Leafer, Rect, Filter } from 'leafer-ui'
import '@leafer-in/filter'  // 导入滤镜插件  // [!code hl] 

// 注册自定义滤镜
Filter.register('blur', {
    apply(filter, _ui, worldBounds, currentCanvas, _orginCanvas, _shape) { // 应用自定义滤镜
        currentCanvas.filter = `blur(${filter.blur}px)`
        currentCanvas.resetTransform()
        // currentCanvas.clipWorld(worldBounds) // 某些svg滤镜需要裁剪区域再应用，否则会污染画布
        currentCanvas.copyWorld(currentCanvas, worldBounds, worldBounds, "copy")
        currentCanvas.filter = 'none'
    },
    getSpread(filter) { // 扩展元素的渲染边界
        return filter.blur
    }
})

// 使用滤镜
const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    draggable: true,
    filter: { // 支持多个滤镜 [filter, filter]
        type: 'blur',  // 对应注册的滤镜名称
        blur: 20
    }
})

leafer.add(rect)