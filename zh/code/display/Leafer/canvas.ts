import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const canvas = leafer.canvas.view
const context = leafer.canvas.context

console.log('canvas', canvas) // HTMLCanvasElement
console.log('2d context', context) // CanvasRenderingContext2D