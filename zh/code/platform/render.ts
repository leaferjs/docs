// #请求渲染/动画帧
import { Platform } from 'leafer-ui'

// 1. 请求一次渲染帧，等同于 window.requestAnimateFrame
Platform.requestRender(() => {
    console.log('动画帧')
})

// 2. 循环请求渲染帧，实现连续动画
function animate() {

    // 执行动画逻辑...

    // 调用Platform.requestRender方法，实现循环
    Platform.requestRender(animate)
}

// 启动动画循环
animate()