// #遮罩功能 [快速设置遮罩 (Leafer)]
import { Leafer, Group, Ellipse, Image, UI } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100, draggable: true })

const image = new Image({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg'
})

addMask(group, new Ellipse({ // [!code hl:7]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: 'black',

}))

leafer.add(group)
group.add(image)


console.log(
    getMask(group) // ellipse
)


// 自定义函数

function addMask(group: Group, maskChild: UI) {
    if (group.children.some(item => item.mask)) removeMask(group)
    maskChild.mask = true
    group.addAt(maskChild, 0)
}

function getMask(group: Group): UI {
    return group.children.find(item => item.mask) as UI
}

function removeMask(group: Group, maskChild?: UI): void {
    if (maskChild) {
        maskChild.mask = false
        group.remove(maskChild)
    } else {
        const { children } = group
        for (let i = 0, len = children.length; i < len; i++) {
            maskChild = children[i] as UI
            if (maskChild.mask) {
                removeMask(group, maskChild)
                len--, i--
            }
        }
    }
}