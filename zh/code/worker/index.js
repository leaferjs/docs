const worker = new Worker('./worker.js') // 相对当前运行的根目录

worker.onmessage = (e) => { // 通过worker生成一张图片进行显示
    const image = new Image()
    image.src = e.data
    document.body.appendChild(image)
}