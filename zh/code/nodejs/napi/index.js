const { Leafer, Rect, useCanvas } = require('@leafer-ui/node')
const napi = require('@napi-rs/canvas')
const http = require('http')

useCanvas('napi', napi) // must

http.createServer(function (req, res) {

    const leafer = new Leafer({ width: 800, height: 600 })
    leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

    leafer.export('png').then(function (result) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<img src="${result.data}" />`)
        res.end()
    })

}).listen(3000, function () {
    console.log('\x1B[36m%s\x1B[0m', 'server is running at http://localhost:3000')
})