<script setup>
import Case from '/component/Case.vue'
</script>

# 更新

:::tip 注意事项

平台包、核心包、官方插件包的版本号为了方便大家记忆，均保持统一更新。

如出现旧版本缓存冲突导致的报错，需删除 lock 文件重装一下，可通过 [命令行工具](/create/leafer.md#更新项目中的-leafer-依赖版本号) 更新。

:::

## 2024 / 09 / 25

> v1.0.4

#### 🌱 新增

🌸 **[create-leafer](/create/leafer.md) 命令行工具上线** 🎉🎉🎉

帮助你快速创建 Leafer 项目（如 Vue + Leafer）、更新版本、管理与开发插件

由 LeaferJS 社区成员 [@214L](https://github.com/214L) 提供开发、维护 👍👍👍

#### 🪲 修复

\- 元素镜像后再旋转，再通过图形编辑器 resize 会出现跑偏的问题

#### 🌿 优化

\- 移除多余的控制台打印信息

#### 🌷 感谢反馈

[@RanMaoting](https://github.com/RanMaoting) @云迷

## 2024 / 09 / 20

> v1.0.3

### [【文章】LeaferJS 发布全新动画、状态、过渡、游戏功能](/blog/2024-09-20.md)

<br/>

#### 🌱 新增

\- 🌸 [animate 动画插件](/plugin/in/animate/index.md) 上线 🎉🎉🎉

\- 🌸 [robot 游戏插件](/plugin/in/robot/index.md) 上线 🎉🎉🎉

\- 元素增加 [animation](/reference/property/animation.md) 动画属性、[transition](/reference/property/transition.md) 过渡属性、[animate() ](/reference/property/animate.md) 动画方法

\- 元素增加 [state](/reference/property/state/state) 状态属性，可预设复杂多样的状态

\- [Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/property/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

\- 增加 box 坐标系 [getBoxPoint()](/reference/property/point/index.md#box-坐标) / [getBoxPointByInner](/reference/property/point/index.md#box-坐标) / [getInnerPointByBox()](/reference/property/point/index.md#内部坐标) / [getWorldPointByBox()](/reference/property/point/index.md#box-坐标)， UIEvent 增加 [getBoxPoint](/reference/event/ui/UIEvent.md#坐标转换方法) 方法

\- 元素增加 [created](/reference/event/basic/Child.md#仅派发给元素自身的事件) / [mounted](/reference/event/basic/Child.md#仅派发给元素自身的事件) / [unmounted](/reference/event/basic/Child.md#仅派发给元素自身的事件) 事件，可通过 event 初始化对象监听

\- clone() 方法增加 [data](/reference/property/data.md#clone-data-iuiinputdata) 参数覆盖旧数据

#### 🌿 优化

\- UIEvent 的 getPage() / getInner() / getLocal() 方法改为 [getPagePoint()](/reference/event/ui/UIEvent.md#坐标转换方法) / [getInnerPoint()](/reference/event/ui/UIEvent.md#坐标转换方法) / [getLocalPoint()](/reference/event/ui/UIEvent.md#坐标转换方法)，仍兼容之前

\- [ChildEvent.DESTROY](/reference/event/basic/Child.md#仅派发给元素自身的事件) 事件的字符名称由 `child.destroy` 改为 `destroy`

#### 🪲 修复

\- 自动宽高的 flow 元素 padding 计算方式不对的问题

\- 浏览器放大后，svg 的图片不会重新渲染，其他元素是清晰的

\- boxBounds 不是以 0,0 开始的元素/组编辑问题

\- menu_tap 在 windows 上的问题

\- 样式重置后 旧的图形还在，但是如果有个拖拽元素经过时 重叠部分就会被擦除

#### 产品/游戏分享

[Minesweeper](https://github.com/yh4922/leaferjs-minesweeper) <badge>扫雷小游戏</badge> @杨 🐑🐑

[Lazyva 懒画](https://canvas.lazykit.cn) <badge>在线设计工具（支持移动端）</badge> @ozar

[简单设计](https://jiandan.link) <badge>免费在线设计、图片处理工具</badge> @Ove🚀

[FlyCut](https://github.com/x007xyz/fly-cut) <badge>在线视频剪辑工具</badge> @x007xyz

#### 代码片段分享

[网格吸附功能](https://cloudstudio.net/a/21005323573952512?channel=share&sharetype=URL) @Curapica

[撤销回退功能](https://cloudstudio.net/a/21176161805070336?channel=share&sharetype=URL) @(இωஇ)

[Line 编辑时按住 shift 正交锁定功能](https://cloudstudio.net/a/20803058263158784?channel=share&sharetype=URL) @(இωஇ)

[标尺代码示例](https://cloudstudio.net/a/21175727747055616?channel=share&sharetype=URL) @(இωஇ)

#### 🌷 感谢反馈

[@kooriookami](https://github.com/kooriookami) [@Formulaaa](https://github.com/Formulaaa) @xiaou @黄某人 @伊雪冰尘 @BO @岁月 @Curapica @周明 @风之影 @778899 @洋葱

## 2024 / 08 / 06

> v1.0.2

#### 🌱 新增 🎉🎉🎉

\- 🌸 增加 [block](/reference/config/app/type.md#block-类型) 应用类型， 可以像 HTML 的普通块状元素一样融入到浏览器页面中

\- 🌸 图形编辑器 editSize 配置正式支持 [font-size](/plugin/in/editor/config.md#editsize-size-scale) 类型

\- 🌸 微信小程序增加 [uniapp](/guide/install/ui/miniapp/start.md#其他平台) / [taro](/guide/install/ui/miniapp/start.md#其他平台) 示例代码，并提供了 [原生构建 npm 包](/guide/install/ui/miniapp/start.md#微信开发工具中使用-npm-包) 的问题解决方案

\- [HTMLText](/plugin/in/html/) 支持 [文本编辑功能](/plugin/in/text-editor/)

\- 没有宽高的自动布局元素支持 padding

\- 增加 [touch](/reference/config/app/touch.md) 应用配置, 用于配置触摸屏事件

\- [config.move.drag](/reference/config/app/move.md#move-drag-boolean-auto) 配置增加 'auto' 类型，整体拖拽平移页面时，仍保留元素交互属性

\- Leafer 增加 [updateClientBounds()](/reference/display/Leafer.md#updateclientbounds) 方法， 用于手动更新应用的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)

\- Leafer 增加 [getPagePointByClient()](/reference/display/Leafer.md#getpagepointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) 方法用于转换浏览器 client 坐标到应用中

\- 元素增加 [moveInner()](/reference/property/transform.md#moveinner-x-number-ipointdata-y-0) 方法，可在内部坐标系中移动元素

\- [Canvas](/reference/display/Canvas.md#json) 元素支持导出 [JSON](/reference/property/json.md) 数据

\- 导出图片增加 [size](/reference/property/export.md#export) 导出选项，用于限制导出宽高

\- [script 标签引入](/guide/install/ui/start.md#通过-script-标签引入) 添加别名 [MyImage](/reference/display/Image.md) / [MyPointerEvent](/reference/event/ui/Pointer.md) / [MyDragEvent](/reference/event/ui/Drag.md)，防止命名冲突

#### 🌿 优化

\- 🌸 [Pen](/reference/display/Pen.md) 元素绘制路径，不再需要手动 paint()， 会自动处理

\- canvas 默认 [pixelRatio](/reference/display/Canvas.md#pixelratio-number) 改为 1， 同 Image 一致，可自行修改 [#175](https://github.com/leaferjs/ui/issues/175)

\- 优化图形编辑器的 [lockRatio](/plugin/in/editor/config.md#lockratio-boolean-corner) 体验（拉伸四条边时不跟手）

#### 🪲 修复

\- 🌸 flow 插件在 Node 环境中引入报错的问题

\- 🌸 App 单画布模式下使用文本编辑插件的问题

\- 两个 App 的交互配置会相互影响的问题

\- 文本元素行高为 0 无法选中的问题

\- Box 添加圆角后，隐藏超出部分的功能偶尔不起作用

#### 🪴 作品分享

[ShotEasy 在线截图美化工具](https://github.com/CH563/image-beautifier) @陈立文

#### 🌷 感谢反馈

[@kooriookami](https://github.com/kooriookami) [@rojer95](https://github.com/rojer95) [@3400442579](https://github.com/3400442579) [@826327700](https://github.com/826327700) [@AndersenWatson](https://github.com/AndersenWatson) [@wangxiaogang94](https://github.com/wangxiaogang94) [@zzzz-bang](https://github.com/zzzz-bang) [@canbaoSama](https://github.com/canbaoSama) [@Arc-zlz](https://github.com/Arc-zlz) [@howsweetiam](https://github.com/howsweetiam) [@QmagicianEX](https://github.com/QmagicianEX) @BO @风之影 @毛豆花生 @一灯 @小丑的尾巴不见了 @happy @\_Jing

## 2024 / 07 / 20

> v1.0.1 (新功能尝鲜)

#### 🌱 新增 🎉🎉🎉

\- 🌸 [文本编辑插件](/plugin/in/text-editor/) 已开放 🎉🎉🎉

\- 🌸 [iOS 小程序版](/guide/install/ui/miniapp/start.md#注意) 已支持，增加 [App 结构示例](/guide/install/ui/miniapp/start.md#app-结构-图形编辑器)，并支持 [扩展 uniapp 等平台](/guide/install/ui/miniapp/start.md#在其他平台中使用) 🎉🎉🎉

\- 🌸 应用增加 [app.config.mobile](/reference/config/app/base.md#mobile-boolean) 配置，用于优化手机端交互体验

\- 元素增加 [event](/reference/property/on.md) 属性，用于初始化时传入事件进行监听

\- PointerEvent 事件 增加 [multiTouch](/reference/event/ui/Pointer.md#multitouch-boolean) 属性， 用来判断是否多点触屏

\- MoveEvent 增加 [moveType](/reference/event/ui/Move.md#movetype-move-drag)， 区分鼠标滚动 / 拖拽产生的视图移动

\- 元素增加 [flip()](/reference/property/transform.md#flip-axis-x-y) 方法，用于在世界坐标轴中 镜像/翻转元素

#### 🪴 图形编辑器插件

\- 如使用了 editSize 为 font-size， 请暂缓升级，还有部分适配工作需完成

\- 🌸 编辑器控制点支持设置 [pointType](/plugin/in/editor/config.md#point-iboxinputdata-iboxinputdata) 属性自定义按钮功能

\- 🌸 支持限制元素的宽高 [widthRange](/reference/property/editable.md#widthrange-irangesize)、 [heightRange](/reference/property/editable.md#widthrange-irangesize)，

\- 🌸 支持混合使用 origin 、around 属性元素， 并会取其作为旋转点

\- 增加 [flipable](/plugin/in/editor/config.md#flipable-boolean) 配置, 控制是否启用镜像/翻转元素功能

\- 增加 [flip()](/plugin/in/editor/Editor.md#flip-axis-x-y) 方法，用于手动镜像/翻转元素

\- moveable 配置增加 [`'move'`](/plugin/in/editor/config.md#moveable-boolean-move) 类型， 用于手机端双指移动选中元素

\- mask 配置增加 [`'true'`](/plugin/in/editor/config.md#mask-string-boolean) 类型，用于快速设置编辑器遮罩

\- 配置 rotatePoint（仍可用）改为 [circle](/plugin/in/editor/config.md#circle-iboxinputdata), 并增加 [circleMargin](/plugin/in/editor/config.md#circle-iboxinputdata)、[circleDirection](/plugin/in/editor/config.md#circle-iboxinputdata)

\- [旋转控制点](/plugin/in/editor/config.md#circle-iboxinputdata) 和 [buttons](/plugin/in/editor/Editor.md#buttons-group) 进行分离，并可独立设置方向

#### 🌿 优化

\- Matrix 的 [setLayout()](/reference/math/Matrix.md#setlayout-layout-ilayoutdata-origin-ipointdata-around-ipointdata-matrix) / [getLayout()](/reference/math/Matrix.md#setlayout-layout-ilayoutdata-origin-ipointdata-around-ipointdata-matrix) 方法增加 around 参数

\- [export()](/reference/property/export.md) 导出切片时，自动隐藏切片(当前导出元素)

#### 🪲 修复

\- 浏览器放大页面，字体模糊

\- 导出 leafer 层图片缓存造成的清晰度问题（加大 pixelRatio 图片会模糊）

<!-- \- [leafer-editor](/guide/install/editor/start.md) 在小程序中运行报错的问题 -->

\- [flow 自动布局](/plugin/in/flow/) 插件通过全局方式引入没有变量的问题

#### 🪴 作品分享

[Leafer 开发小游戏教程 - 拼图](https://juejin.cn/post/7388338139633516595) @子洋

[Leafer 小游戏中心](https://github.com/Alessandro-Pang/leafer-games) @子洋

[超级玛丽游戏 - 开发教程](https://juejin.cn/post/7392116075674828827) @hhzzcc

[超级玛丽游戏](https://github.com/hhzzcc/super-mario) @hhzzcc

[leafer-x-tooltip-canvas 插件](https://www.npmjs.com/package/leafer-x-tooltip-canvas) @糖颂缘冥倾

[element-plus-leafer 文档](https://kooriookami.github.io/element-plus-leafer-docs/zh-CN/) @kooriookami

#### 🌷 感谢反馈

[@kooriookami](https://github.com/kooriookami) [@rojer95](https://github.com/rojer95) [@3400442579](https://github.com/3400442579) [@826327700](https://github.com/826327700) [@zzzz-bang](https://github.com/zzzz-bang) @xiaou @BO @风之影 @黄某人 @陈随易 @毛豆花生 @Max @L @糕噗

## 2024 / 06 / 30

> v1.0.0 正式版

#### 🌱 新增 🎉🎉🎉

\- 🌸 [Flow 自动布局插件](/plugin/in/flow/index.md) 已开放 🎉🎉🎉

\- 🌸 [官方文档](https://github.com/leaferjs/docs)、[示例代码](https://github.com/leaferjs/code)、[自动化测试用例](https://github.com/leaferjs/test) 已整理完成并开放至 GitHub

\- 🌸 [贡献指南文档](/contribute/guide.md) 初步完成，具体的 pull request、自动化测试指南，下周完善

\- 元素属性改为可选值，在 TS 的 `strictNullChecks` 模式下可设置为 undefined

\- 应用配置增加 [app.config.wheel.disabled](/reference/config/app/wheel.md#wheeldisabled-boolean) 可禁用滚轮事件

\- [export()](/reference/property/export.md#关键方法)、[toJSON()](/reference/property/json.md#tojson-iuiinputdata)、[toString()](/reference/property/json.md#tostring-options-ijsonoptions-string) 支持 JSON 导出选项（可导出元素本地矩阵）

\- 图形编辑器增加遮罩配置 [editor.config.mask](/plugin/in/editor/config.md#mask-string)，适用于裁剪图片场景。

#### 🪲 修复

\- 元素被销毁时交互事件不能向上传递的问题

\- pointer.menu_tap 事件触发一次后，点左键也会触发的问题

\- App 被销毁后，图形编辑器再选择元素会报错

\- 修复文本 textOverflow 为`...`时偶尔超出编辑框的问题

#### 🌿 优化

\- 优化 Group 的 [resizeWidth()](/reference/property/resize.md) / [resizeHeight()](/reference/property/resize.md) 定位准确性

\- 当最终创建的画布没有宽高时，控制台打印警告提示

#### 正式移除 API （已预告过）

\- 正式移除元素的 getWorld()方法， 请使用 [getLayoutBounds()](/reference/property/bounds.md#关键方法)

#### 🌷 感谢反馈

[@canbaoSama](https://github.com/canbaoSama) [@zzzz-bang](https://github.com/zzzz-bang) @Nevermore @南 @黄某人 @周游 @笑 @鸭梨 @do @王进元

## 2024 / 06 / 21

> v1.0.0-rc.28

#### 🌱 新增 🎉🎉🎉

\- 🌸 官方文档重大改版，方便新手入门（插图、示例）、查找内容 🎉🎉🎉

\- 🌸 [leafer-editor](/guide/install/editor/start.md) 图形编辑场景包发布，集成常用插件 🎉🎉🎉

\- 🌸 [Flow 自动布局插件](/plugin/in/flow/index.md) 、 [文本编辑插件](/plugin/in/text-editor/index.md) 开始公测 🎉🎉🎉

\- App 支持 [addAt()](/reference/display/App.md#addat-child-leafer-index-number)、 [addBefore()](/reference/display/App.md#addat-child-leafer-index-number)、[addAfter()](/reference/display/App.md#addat-child-leafer-index-number) 方法添加子 Leafer

\- App 结构下支持修改 Leafer 的 [zIndex](/reference/display/Leafer.md#zindex-number) 属性调整层叠顺序 [#70](https://github.com/leaferjs/ui/issues/70)

\- 图形编辑器增加 [updateEditBox()](/plugin/in/editor/Editor.md#updateeditbox) 方法，用于多选元素对齐后，手动更新编辑框大小

\- [export()](/reference/property/export.md#export) 支持导出懒加载的图片，并增加 smooth、contextSetting 画布设置。

#### 🪲 修复

\- 🌸 图形编辑器配置没有实时更新的问题 [#150](https://github.com/leaferjs/ui/issues/150)

\- 文本宽度小于字体大小，首行会自动换行的问题

#### 🌿 优化

\- 优化图片导出时的绘制方式，直接绘制原图提高清晰度

#### 🍃 API 变化 (重点关注)

- app.config.cursor.stop 配置改为 [app.config.cursor](/reference/config/app/base.md#cursor-boolean)

#### 🌷 感谢反馈

[@Alfen2309](https://github.com/Alfen2309)、 [@rojer95 ](https://github.com/rojer95) @杨 🐑🐑 @黄某人 @ozar @BO

## 2024 / 06 / 13

> v1.0.0-rc.27

#### 🌱 新增 🎉🎉🎉

\- 🌸 元素增加 [setAttr()](/reference/property/data.md#setattr-name-string-value-any) 、 [getAttr()](/reference/property/data.md#setattr-name-string-value-any) 、[getComputedAttr()](/reference/property/data.md#setattr-name-string-value-any) 方法用于便捷获取数据

\- 🌸 元素增加 [data](/reference/property/data.md) 自定义数据对象，预留给用户使用

\- 🌸 [Canvas](/reference/display/Canvas.md) 元素 支持 hitFill 像素碰撞检测

#### 🪲 修复

\- 🌸 hitFill 像素碰撞检测的问题

\- 🌸 [dragBounds](/reference/property/draggable.md#dragbounds-iboundsdata-parent) 为 parent 且拖拽元素比父容器大时，拖拽闪烁的问题

#### 🌷 感谢反馈

@xiaou @陈随易 @.. @开始学习开始

## 2024 / 06 / 12

> v1.0.0-rc.26

#### 🌱 新增 🎉🎉🎉

\- 🌸 元素/容器增加 [lockRatio](/reference/property/editable.md#lockratio-boolean) 属性，可单独锁定宽高比例

\- 🌸 元素/容器增加 [resizeWidth()](/reference/property/resize.md) / [resizeHeight()](/reference/property/resize.md) 方法

\- Box 增加 [resizeChildren](/reference/property/resize.md#resizechildren-boolean) 属性，可以控制子元素是否跟随 resize

\- Text 增加 [resizeFontSize](/reference/property/resize.md#resizefontsize-boolean) 属性，可单独控制 resize 字体大小

\- 应用增加 [config.keyEvent](/reference/config/app/base.md#keyevent-boolean) 配置， 用来设置是否接收键盘事件

\- DragEvent 增加 [getPageBounds()](/reference/event/ui/Drag.md#getpagebounds-iboundsdata) 方法，获取拖拽形成的边界，可用于快速 [创建图形](/plugin/in/editor/Editor.md#创建图形模式)

\- Bounds 增加 [setPoint()](/reference/math/Bounds.md#setpoint-point-ipointdata-bounds) 方法

#### 🪴 图形编辑器插件

\- 🌸 增加 [创建图形](/plugin/in/editor/Editor.md#创建图形模式)、[手动旋转元素](/plugin/in/editor/Editor.md#手动旋转元素) 代码示例

\- 🌸 可通过监听 editor 的 [`drag.start`](/reference/event/ui/Drag.md) 和 [`drag.end`](/reference/event/ui/Drag.md) 事件作为 [记录历史状态](/plugin/in/editor/Editor.md#历史记录) 的时机

\- 🌸 增加 [InnerEditorEvent](/plugin/in/editor/event/InnerEditorEvent.md)、[EditorGroupEvent](/plugin/in/editor/event/EditorGroupEvent.md) 事件

\- [openInnerEditor()](/plugin/in/editor/Editor.md#openinnereditor-target-ui) 支持直接传入一个 target

\- 支持在侧边栏直接选中组内元素并操作

\- 设置 [resizeable](/plugin/in/editor/config.md#resizeable-boolean-zoom) 为 zoom，可支持移动端手势缩放操作

\- 设置 [rotateable](/plugin/in/editor/config.md#rotateable-boolean-rotate) 为 rotate，可支持移动端手势旋转操作

\- 修复调整自动宽高的文本宽度后，高度被同时固定住的问题

\- 修复锁定功能，并自动取消编辑框

#### 🪴 自动布局插件

\- 增加 [lockRatio](/plugin/in/flow/Flow.md#lockratio-boolean) 属性，采用自动宽高时，可锁定元素原始宽高比例

\- 优化 resize 元素控制

#### 🪴 文本编辑插件

\- 增加打开、关闭事件 [InnerEditorEvent](/plugin/in/editor/event/InnerEditorEvent.md)

\- 增加 [config.selectAll](/plugin/in/text-editor/TextEditor.md) 配置是否双击后自动全选文本

\- 修复有 padding 的文本，编辑状态 bounds 不一致的问题

\- 修复文本为渐变色、对象颜色时，编辑文字为黑色的问题

\- 修复文本换行规则问题

\- 修复进入编辑文本后，应用仍会响应键盘事件，造成误操作

#### 🪲 修复

\- 🌸 遮罩之外的内容可以被拖动的问题

\- 修复 苹果手机 多点触屏旋转与缩放过快的问题

\- 背景不是半透明的内容时，hitFill 设为 `pixel` 后有问题

\- 多选直线，编辑后跑偏的问题

#### 🌿 优化

固定一边大小的 Box，可以像 HTML 的 DIV 一样自动延伸

chrome 刷新页面时不会销毁实例，需要主动销毁，可根据自己需要添加 [自动销毁](/reference/display/Leafer.md#监听浏览器-unload-事件自动销毁) 代码

#### 🌷 感谢反馈

[@rojer95](https://github.com/rojer95) @xiaou @陈随易 @黄某人 @风之影 @开始学习开始 @if

## 2024 / 06 / 04

> v1.0.0-rc.25

#### 🌱 新增 🎉🎉🎉

\- 🌸 [Flow 自动布局插件](/plugin/in/flow/index.md) alpha 内测版发布 🎉🎉🎉

\- 🌸 [文本编辑插件](/plugin/in/text-editor/index.md) alpha 内测版发布 🎉🎉🎉

## 2024 / 06 / 03

> v1.0.0-rc.24

#### 🌱 新增 🎉🎉🎉

\- 🌸 Leafer 增加 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)，获取应用在浏览器窗口中的位置（client 坐标）及宽高

\- 🌸 Leafer 增加 [getWorldPointByClient()](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) 方法， 用于转换浏览器原生事件坐标到应用中

\- 🌸 元素 [visible](/reference/property/layer.md#visible-boolean-number) 属性增加 类似 css 的 [`display: none`](/reference/property/layer.md#visible-boolean-number) 设置

\- Image 增加 [load()](/reference/display/Image.md#load) 方法，当未添加到 Leafer 中时，可手动加载图片，获取图片自然宽高

\- Image 单独设置宽或高，整体仍会保持原始比例，不会产生变形

\- 渐变颜色的 [from](/reference/property/paint/linear.md#from-ialign-iunitpointdata) / [to](/reference/property/paint/linear.md#from-ialign-iunitpointdata) 属性 增加 语义化方位及精确像素设置

\- 渐变颜色的 [stops](/reference/property/paint/linear.md#stops-colorstop-stringcolor) 属性 增加纯颜色字符串数组类型（自动 offset）

#### 🪲 修复

\- 🌸 app.tree.hittable 设为 false 后再设为 true， 元素监听 pointer.move 事件不触发的问题

\- 🌸 修复外描边笔触留的 renderBounds 不够，导致被截取的问题（文本阴影 bug）

\- Line 不能覆盖 editOuter 方法的问题

\- 多行文本裁剪后，空格字符被吃掉的问题

\- 矩形内描边大于元素宽高造成的渲染残留问题

\- Path 字符串路径解析报错（00、.123.12 没有拆分开）的问题

#### 🌿 优化

\- 🌸 只要检测到是直线路径就采用直线编辑工具

\- 🌸 resize 文本支持调整 fontSize , 需要给 [Text.editConfig](/reference/property/editable.md#editconfig-ieditorconfig) 配置 [editSize = ‘font-size’](/plugin/in/editor/config.md#editsize-size-scale)

\- 优化 box 的布局、渲染性能

\- 元素的 stroke 包围盒精确化，以 strokeWidth 为标准扩展数值，方便 flow 布局

\- long_press 与 tap 事件 [不再同时触发](/reference/event/ui/Pointer.md#多种点击事件同时只触发一个)，方便手机端长按产生菜单事件，轻点取消菜单事件

#### 🍃 API 变化 (重点关注)

\- 🌸 渐变颜色的 from / to 需增加 [type: 'percent'](/reference/property/paint/linear.md#from-ialign-iunitpointdata) 属性设置百分比坐标

#### 🪴 作品分享

\- 🌸 [珠串设计](https://leaferjs.com/ui/guide/install/ui/miniapp/start.html#%E4%BD%93%E9%AA%8C%E4%BA%A7%E5%93%81%E6%A1%88%E4%BE%8B) <badge>微信小程序 DIY 精美珠串</badge> @&荷@逸…

#### 🌷 感谢反馈

[@826327700](https://github.com/826327700) @表单开发 @吗喽一号 @xiaou @黄某人 @晓荷 @Lauginwing @Misakey @胜行天下

## 2024 / 05 / 24

> v1.0.0-rc.23

#### 🌱 新增 🎉🎉🎉

\- 🌸 官方插件均添加 node 环境导入支持

\- 🌸 元素增加 [origin](/reference/property/origin.md), 同 css 的 transform-origin， 作为缩放、旋转元素的原点

\- 元素增加 [offsetX](/reference/property/layout.md#偏移属性)、[offsetY](/reference/property/layout.md#偏移属性)，方便动画、交互状态中偏移元素

\- Box / Frame 增加 [scrollX](/reference/display/Box.md#滚动属性)、[scrollY](/reference/display/Box.md#滚动属性)，用于滚动内部元素，方便实现滚动条效果

\- 元素增加 [findId()](/reference/property/findOne.md#findid-id-number-string-ui) 方法，可以查找数字类型的 id

\- 元素增加 [findTag()](/reference/property/find.md#findtag-tag-number-number-ui) 方法，可以同时查找多个 tag

\- 元素 [eraser](/reference/property/eraser.md) 橡皮擦属性支持 路径模式（性能更好）

\- 元素 [off()](/reference/property/off.md) 支持关闭所有事件（不传 type 参数）， 关闭一类事件（不传 listener 函数）

#### 🪲 修复

\- 🌸 官方文档切换浏览器标签后，过段时间回来，画布会变空的问题（chrome 新版本 bug）

\- 🌸 当文本 textWrap 为 none 且 overflow 为 hide 时没有正确截取文字的问题

\- 高清屏上导出 App 截图不对的问题

\- 小数位分辨率的的屏幕底部有 1px 没清除掉的问题

\- 锁定比例缩放元素时，产生镜像后显示有问题

\- locked 的元素可以被拖拽的问题

\- resize 缩小画布后不会触发渲染事件的问题

#### 🍃 API 变化 (重点关注)

\- 🌸 设置 around 为百分比的坐标对象，需增加 [type: 'percent'](/reference/property/around.md#around-ialign-iunitpointdata) 属性

\- 🌸 文本 [letterSpacing](/reference/display/Text.md#letterspacing-number-iunitdata) / [lineHeight](/reference/display/Text.md#lineheight-number-iunitdata) 等百分比单位的数值，由 0 ～ 100 统一调整为 0 ～ 1

\- 填充图片对齐位置的 around 属性 改为 [align](/reference/property/paint/image.md#align-ialign)

\- 遮罩类型 maskType 合并到 [mask](/reference/property/mask.md) 中，移除 maskType

\- 移除 image 后缀 ?leaf，需要时可以自行配置 [Platform.image.suffix](/reference/display/Image.md#图片缓存)

##### 正式移除 API

\- 移除 forceFullRender()， 请使用 [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata-)

\- 移除元素的 editSize 属性, 请使用 [editConfig](/reference/property/editable.md#editconfig-ieditorconfig) 设置

\- 移除编辑器的 lockMove 设置， 请使用元素的 [draggable](/reference/property/draggable.md) 锁定 x、y 轴

#### 🌷 感谢反馈

[@wr1688](https://github.com/wr1688) [@aston-fu](https://github.com/aston-fu) [@3400442579](https://github.com/3400442579) [@chenyuyu118](https://github.com/chenyuyu118) [@x-tropy](https://github.com/x-tropy) @表单开发 @吗喽一号 @xiaou @毛豆花生 @晓荷 @天地有雪 @Lauginwing @On the way

## 2024 / 04 / 30

> v1.0.0-rc.22

#### 🌱 新增 🎉🎉🎉

<!-- \- 🌸 文本编辑插件 初步开发完成，即将进入内测阶段。 -->

\- 🌸 元素增加 [dragBounds](/reference/property/draggable.md#dragbounds-iboundsdata-parent) 属性， 可限制在指定范围、父元素中拖动 [#110](https://github.com/leaferjs/ui/issues/110)

\- 🌸 图片填充增加 [normal](/reference/property/paint/image.md#mode-imagepaintmode) 模式 、 [around](/reference/property/paint/image.md#around-idirection) 参数( 按方位自动定位图片) [#131](https://github.com/leaferjs/ui/issues/131)

\- 🌸 [export()](/reference/property/export.md) 支持直接导出 json 文件

\- 元素 [draggable](/reference/property/draggable.md) 可锁定在 x 或 y 轴移动

\- 元素 [move()](/reference/property/transform.md#move-x-number-ipointdata-y-0) / [moveWorld()](/reference/property/transform.md#moveworld-worldx-number-ipointdata-worldy-0) 支持直接传入 [坐标对象](/reference/interface/math/Math#ipointdata)

\- 元素增加 [editConfig](/reference/property/editable.md#editconfig-ieditorconfig) / [editOuter](/reference/property/editable.md#editouter-string) / [editInner](/reference/property/editable.md#editinner-string) 独立编辑器属性

#### 🪴 图形编辑器

\- 🌸 单选元素时，编辑框不再阻挡元素自身事件，并可以同步接收元素事件

\- 🌸 增加自定义 [编辑工具](/plugin/in/editor/editOuter/register.md)、 [内部编辑器](/plugin/in/editor/editInner/register.md) 功能及教程，可扩展形状、路径、文本编辑功能

\- 🌸 支持双击进组, 可手动 [openGroup()](/plugin/in/editor/Editor.md#opengroup-igroup) / [closeGroup()](/plugin/in/editor/Editor.md#closegroup-igroup)

\- 支持双击元素打开内部编辑器, 可手动 [openInnerEditor()](/plugin/in/editor/Editor.md#openinnereditor) / [closeInnerEditor()](/plugin/in/editor/Editor.md#closeinnereditor)

\- 增加状态属性 [editing](/plugin/in/editor/Editor.md#editing-boolean) / [innerEditing](/plugin/in/editor/Editor.md#innerediting-boolean) / [groupOpening](/plugin/in/editor/Editor.md#groupopening-boolean)

\- 增加 [EditBox](/plugin/in/editor/EditBox.md) / [EditPoint](/plugin/in/editor/EditPoint.md) / [EditTool](/plugin/in/editor/EditTool.md) / [InnerEditor](/plugin/in/editor/InnerEditor.md) 文档。

\- 增加 [select()](/plugin/in/editor/Editor.md#select-target-ui-ui) 选中 / [cancel()](/plugin/in/editor/Editor.md#cancel) 取消选中方法

\- 增加 [config.hoverStyle](/plugin/in/editor/config.md#hover-boolean) 配置， 可以自定义 hover 效果

\- 框选笔触调整为 1px

#### 🪲 修复

\- 🌸 折线结束箭头显示方向不对的问题

\- 🌸 单张画布 App 的 render 问题

\- Frame 使用 [hitSelf](/reference/property/hit.md#hitself-boolean) 没生效的问题

\- 微信电脑端浏览器 roundRect 不支持传数字圆角的问题

#### 🌿 优化

\- 编辑器固定比例缩放大小按对角线取缩放比例，更加自然

\- 编辑器移动元素，由偏移量改为补充距离到拖动位置，更加精准

\- App.zoomLayer 绑定 tree, 使 page 坐标系与 tree 一致

#### 🍃 API 变化

元素 editSize 属性即将移除， 请使用 [editConfig](/reference/property/editable.md#editconfig-ieditorconfig) 设置

编辑器的 config.lockMove 即将移除，请使用 [draggable](/reference/property/draggable.md) 锁定 x、y 轴

编辑器的 config.dualEvent 即将移除，改成了自动触发

[编辑工具](/plugin/in/editor/EditTool.md) 的 update() 方法，不再传入 editor 参数，变为内置属性

editor.hasTarget 改为 [editor.editing](/plugin/in/editor/Editor.md#editing-boolean) 状态属性

Picker.findList 改为 LeafList 类型

#### 🪴 作品分享

\- 🌸 [leafer-x-connector](https://www.npmjs.com/package/leafer-x-connector) <badge>连线插件</badge> @A☀️ 云 ☀️A

\- 🌸 [图片自由分割工具](https://github.com/wumingluren/PicFreeCutter) @無名路人

\- 🌸 [image-editor-core](https://www.npmjs.com/package/image-editor-core)<badge>开源图片设计工具 SDK</badge> @馒头

#### 🌷 感谢反馈

[@a-boom](https://github.com/a-boom) [@3400442579](https://github.com/3400442579) @毛豆花生 @ A☀️ 云 ☀️A @馒头 @刘杨 @即兴 @黄某人 @是鲈鱼不是鱼露 @风之影 @จุ๊บ﹏王`小嘿 @colin @小海

## 2024 / 04 / 15

> v1.0.0-rc.21

#### 🌱 新增 🎉🎉🎉

\- 🌸 [官网改版](https://www.leaferjs.com/)，新增 赞助商 / 谁在使用 / 正式版 / 加速计划 / 场景覆盖等板块

\- 🌸 SVG / PNG 透明图片支持像素拾取 [hitFill = 'pixel'](/reference/property/hit.md#hitfill-ihittype)

\- 🌸 Leafer 增加 [document](/reference/config/app/type.md#document-类型) 窗口类型，用于适配文档、网页类型的应用，需安装滚动条插件

\- Leafer 增加 [config.move.scroll](/reference/config/app/move.md#move-scroll-boolean-limit) 配置，限制横向或竖向滚动、有内容的区域滚动

\- 增加 [version](/reference/display/Leafer.md#版本号) 版本号

\- Leafer 增加 [FPS](/reference/display/Leafer.md#fps-number) 实时帧率属性

\- Leafer 增加 [waitInit()](/reference/display/Leafer.md#waitinit-item-function-bind-object) 初始化执行函数

\- Leafer / Canvas 增加 [config.contextSettings](/reference/config/app/canvas.md#contextsettings-icanvasrenderingcontext2dsettings) 用于设置原生画布的 willReadFrequently 等。

\- Leafer 增加 [config.pointer.hover](/reference/config/app/pointer.md#pointer-hover-boolean) 用于关闭 hover 事件 （一般用于手机端）

\- Leafer 增加 [config.move.disabled](/reference/config/app/move.md#move-disabled-boolean) 配置， 可禁用滚动功能

\- Leafer 增加 [config.zoom.disabled](/reference/config/app/move.md#zoom-disabled-boolean) 配置， 可禁用缩放功能

\- 🌸 图片填充的 fit 模式增加 [padding](/reference/property/paint/image.md#padding-ifournumber) 选项，方便用于制作图标按钮

\- 🌸 [Path](/reference/display/Path.md#pen-pathcreator) / [Pen](/reference/display/Pen.md#clear) 增加 clearPath() 方法

\- 🌸 Line 的 points 模式增加 [closed](/reference/display/Line.md#closed-boolean) 选项，用于自动闭合路径

\- Bounds 增加 [addPoint()](/reference/math/Bounds.md#addpoint-point-ipointdata-bounds) 方法

\- PointerEvent.UP 增加 [isCancel](/reference/event/ui/Pointer.md#iscancel-boolean) 属性标记被取消的事件

\- 滚动条增加 [config.minSize](/plugin/in/scroll/ScrollBar.md#config-iscrollbarconfig) 配置，限制滚动条的最小尺寸

\- Debug 增加 [showWarn](/reference/debug/basic.md#showwarn-boolean) 配置，可关闭控制台警告信息

#### 🪴 图形编辑器

\- 🌸 增加 [config.lockRatio = 'corner'](/plugin/in/editor/config.md#lockratio-boolean-corner) 配置，只固定 4 个角的缩放比例，中间点可自由调整

\- 🌸 增加 [config.select](/plugin/in/editor/config.md#select-press-tap) 配置，支持 tap 选中（一般用于手机端）

\- 🌸 增加 [config.continuousSelect](/plugin/in/editor/config.md#continuousselect-boolean) 配置，点击可以连续多选元素

\- 🌸 增加 [config.lockMove](/plugin/in/editor/config.md#lockmove-boolean-x-y) 配置，可锁定在 x 或 y 轴移动 [#124](https://github.com/leaferjs/ui/issues/124)

\- 增加 [config.hideOnSmall](/plugin/in/editor/config.md#hideonmove-boolean) 配置，控制元素太小时隐藏控制点

\- EditorEvent 增加 [list](/plugin/in/editor/Event.md#list-ui) / [oldList](/plugin/in/editor/Event.md#oldlist-ui) 属性

\- 修复关闭编辑器后，editable 元素仍然可以拖动的问题

\- 修复独立旋转光标被覆盖的问题

\- 修复元素镜像后 resize 光标不变化的问题

\- 修复旋转 Pen 不会产生变化的问题

#### 🪲 修复

\- 🌸 布局数据为 NaN 导致的渲染问题

\- 🌸 Leafer 初始化传 JSON / reset() 导致元素不能交互的问题

\- 🌸 Box/Frame 多出 1px 的 renderBounds 问题

\- 倾斜文本会产生残影的问题

\- leafer 导出截图时单独设置 fill 无效

\- 修复固定线宽时，加载 json 数据时报 nowWorld 不存在的问题

\- 导出 Box 元素，scale 设置存在问题 [#105](https://github.com/leaferjs/ui/issues/#105)

\- app 导出时 screenshot 的 x 和 y 设置无效 [#109](https://github.com/leaferjs/ui/issues/109)

#### 🌿 优化

\- dragging 状态在 drag.end 事件触发时调整为 false

#### 🍃 API 变化

移除 pathClosed, 改用 closed

HitCanvasManager.getImageType() 改为 getPixelType()

#### 🪴 作品分享

\- 🌸 [无界云图](https://image.h5ds.com) @馒头

\- 🌸 [NinjaQR 图片加二维码工具](https://ninja-qr.archergu.me/) @ArcherGu

#### 🌷 感谢反馈

[@QmagicianEX](https://github.com/QmagicianEX) [@340044257](https://github.com/3400442579) [@wumingluren](https://github.com/wumingluren) @馒头 @南 @即兴 @黄某人 @毛豆花生 @测试用户 @踩在 🐢 上的 🐰 @晓荷 @表单开发 @曹吉美爸爸 @葫芦娃是条狗 @安静 🦅

## 2024 / 03 / 30

#### 🌱 新增 🎉🎉🎉

\- 🌸 官网 [百万杯咖啡画布](https://www.leaferjs.com/coffee/) 上线，提前体验百万级元素的流畅交互，今年推进性能加速

\- 🌸 官网 [赞助我们，一起创造故事](/sponsor/) 上线，4 月 8 号正式启动赞助

#### 🪴 作品分享

\- 🌸 [ikon 图标生成工具](https://github.com/ArcherGu/ikon) @ArcherGu

## 2024 / 03 / 05

> v1.0.0-rc.19

#### 🪴 图形编辑器新增 🎉🎉🎉

\- 🌸 增加 [config.keyEvent](/plugin/in/editor/config.md#keyevent-boolean) 设置，用于控制是否接收键盘事件（如方向键移动）

\- 🌸 增加 [config.dualEvent](/plugin/in/editor/config.md#dualevent-boolean) 设置，首次点击元素时，元素是否可以接收 tap 等鼠标事件

\- 🌸 增加 [config.moveable](/plugin/in/editor/config.md#moveable-boolean-move) 设置，用于控制能否移动元素

#### 🪲 修复

\- 🌸 移动视图模式下，顶层 Leafer / isOutside 为 true 的元素需要接收 pointer 事件

\- 🌸 修复图像编辑器快速框选，交互区域偶发不同步导致的选择问题

\- 🌸 滚动条插件不同步 resize 事件的问题

#### 🍃 API 变化

移除从外部拖拽内容进入时，模拟 down 事件

#### 🌷 感谢反馈

[@QmagicianEX](https://github.com/QmagicianEX) @南 @黄某人 @子洋

## 2024 / 03 / 02

> v1.0.0-rc.18

#### 🌱 新增 🎉🎉🎉

\- 🌸 [视图插件](/plugin/in/view/) 发布，支持放大、缩小、fit、fit-width 视图， 支持聚焦元素，聚焦区域

\- 🌸 [滚动条插件](/plugin/in/scroll/) 发布，按需显示横向、竖向滚动条，支持切换暗黑主题或自定义样式

\- 🌸 [交互状态插件](/plugin/in/state/) 发布，支持 [hover](/reference/property/state/hover) 、 [press](/reference/property/state/press) 、 [focus](/reference/property/state/focus) 、 [selected](/reference/property/state/selected) 、 [disabled](/reference/property/state/disabled) 交互状态样式

\- 🌸 [Path](/reference/display/Path.md) / 元素 [路径模式](/reference/property/path.md) 支持通过 pen 画笔 快速绘制路径

\- 元素 - [waitParent()](/reference/property/layer.md#辅助方法) 、 [waitLeafer()](/reference/property/layer.md#辅助方法) 增加绑定 this 的参数

\- Leafer - [waitReady()](/reference/display/Leafer.md#关键方法) 、[waitViewReady()](/reference/display/Leafer.md#关键方法)、 [waitViewCompleted()](/reference/display/Leafer.md#关键方法) 增加绑定 this 的参数

\- 拖拽视图的惯性动画开关 [config.move.dragAnimate](/reference/config/app/move.md#move-draganimate-boolean)，手机端滑动页面需要用到

\- Bounds 增加 [shrink()](/reference/math/Bounds.md#spread-fournumber-ifournumber-bounds) 收缩方法，[spread()](/reference/math/Bounds.md#spread-fournumber-ifournumber-bounds) 支持设置四个方向的值

\- 元素增加 [getWorldBounds()](/reference/property/bounds.md#边界转换) 转换自定义 bounds

\- 元素增加 [getTransform()](/reference/property/transform.md#关键方法)， 可获取相对任何父元素的矩阵

\- 元素支持 [transformWorld()](/reference/property/transform.md#相对世界坐标系)、[moveWorld()](/reference/property/transform.md#相对世界坐标系)、[scaleOfWorld()](/reference/property/transform.md#相对世界坐标系)、[rotateOfWorld()](/reference/property/transform.md#相对世界坐标系) 等操作

\- 所有用到 [`ILocationType`](/api/modules.md#ilocationtype) 参数的方法，均已支持 [page 坐标系](/guide/basic/coordinate.md#page)

\- 元素增加 [zoomLayer](/reference/property/layer.md#只读属性) 只读属性， 可直接访问 leafer 的缩放层

\- Group 创建时支持通过参数 [children](/reference/display/Group.md#通过-children-属性添加) 快速添加子元素实例

\- 🌸 导出图片支持 [options.relative](/reference/property/export.md#export) 选项，可以相对任意父元素的比例进行导出。

#### 🪲 修复

\- 🌸 导出图片时四周偶尔存在 1px 空白空隙的问题

\- 🌸 导出图片时的原始图片清晰度问题

\- 笔触宽度修改后，箭头大小未跟随变化的问题

\- 当背景图片和路径元素一样大时，使用了 fit、cover 不生效的问题

\- 偶发从外部返回画布时产生自动拖拽的问题

\- 富文本元素添加到 Group 偶发性不显示，需其他元素触发刷新

\- 预览模式下，拖动视图结束时，控制台报错的问题

#### 🍃 API 变化

导出图片选项 options.location 改为 [options.relative](/reference/property/export.md#export)

当拖拽元素到达界面边界时，默认关闭自动平移视图，可以自行打开 [config.move.dragOut](/reference/config/app/move.md#move-dragout-boolean)

拖拽视图的惯性动画开关，默认关闭，可以自行打开 [config.move.dragAnimate](/reference/config/app/move.md#movedrag-animate-boolean)

移除 leafer.setZoomLayer() 方法

移动视图模式（设置按住 space 键、鼠标中键为移动视图功能）下不再派发 down / up / tap 等事件

#### 🪴 第三方插件分享

🌸 [leafer-x-tooltip](https://www.npmjs.com/package/leafer-x-tooltip?activeTab=readme) 新版 提示框插件 @子洋

#### 🌷 感谢反馈

[@毛豆花生](https://github.com/LvHuaiSheng)、[@xuchenxu](https://github.com/xuchenxu) @214L @普通人 @鸭梨 @槐壹 @Lauginwing @南 @黄某人 @表单开发 @无名之辈 @对生活比个耶 @开始学习开始

## 2024 / 02 / 10

> v1.0.0-rc.17

#### 🌱 新增 🎉🎉🎉

\- 🌸 [箭头插件](/plugin/in/arrow/) 发布，自带 12 种常用的箭头样式，并支持自定义

\- 🌸 自定义元素 [基础教程](/reference/display/custom/base/register.md) 完善， 包含 ts / js 示例

\- 🌸 元素支持 path 模式，同 [Path](/reference/display/Path.md) 属性一致，优先级最高

\- 元素增加 registerUI() / registerData() 静态方法 用于 js [自定义元素](/reference/display/custom/base/register.md)

\- 元素销毁事件 [ChildEvent.DESTROY](/reference/event/basic/Child.md#childevent-destroy)

\- 元素可以通过 [get(name)](/reference/property/data.md#get-iuiinputdata) 获取输入属性值

\- 🌸 图片支持像素比 [pixelRatio](/reference/display/Image.md#pixelratio-number)（适配高清屏）、懒加载 [lazy](/reference/display/Image.md#lazy-boolean) 属性

\- 🌸 导出图片支持 [options.onCanvas()](/reference/property/export.md#export) 选项方法，可以用于叠加绘制自定义内容。

#### 🪲 修复

\- [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata) 不设置 bounds 不生效的问题

\- strokeCap 会影响其他元素的问题

\- 导出图片 scale 位置不正确的问题

\- 导出 Leafer、Frame 受画布缩放影响

\- Box 单独设置宽度进行自适应，add 元素之后局部更新有问题

#### 🍃 API 变化

ui.\_\_.\_\_autoBounds 改为 ui.\_\_.\_\_autoSize

#### 🌷 感谢反馈

[@毛豆花生](https://github.com/LvHuaiSheng)、 @开始学习开始 @普通人 @葫芦娃是条狗 @轩辕二狗

## 2024 / 01 / 31

> v1.0.0-rc.12

#### 🌱 新增 🎉🎉🎉

\- 🌸 [leafer-draw](/guide/install/draw/start.md) 轻量包，仅提供绘图功能，减少 1/5 的代码量。

\- 🌸 [export()](/reference/property/export.md) 导出单个元素，并支持丰富的导出配置

\- 支持组透明效果（同 HTML、Figma、Sketch 一致）

\- 🌸 增加 [page 坐标系](/guide/basic/coordinate.md) 及转换方法 [getPagePoint()](/reference/property/point/) / [getPage()](/reference/event/ui/UIEvent.md#getpagepoint-ipointdata) / [getPageMove()](/reference/event/ui/Drag.md#getpagemove-ipointdata)

\- 🌸 遮罩增加 [maskType](/reference/property/mask.md#masktype-imasktype)，可支持路径遮罩、PS 剪贴蒙版效果

\- 🌸 元素添加 [strokeWidthFixed](/reference/property/stroke.md#strokewidth-number) 固定线宽属性，当元素放大时，线宽不会跟随放大

\- Group 支持 [pick()](/reference/property/pick.md) 方法，可通过坐标点拾取元素

\- Leafer 支持 [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata) 方法，可指定一个 bounds 进行局部重渲染

\- Leafer 支持手动更新光标样式 [updateCursor()](/reference/display/Leafer.md#updatecursor-cursor-icursortype)

\- 🌸 Leafer、Pen、Group 支持通过 [clear()](/reference/display/Group.md#clear) 方法清空所有子元素

\- Point 支持 [scale()](/reference/math/Point.md#缩放), [scaleOf()](/reference/math/Point.md#缩放) 方法

\- Image 全局跨域配置 [crossOrigin](/reference/display/Image.md#图片跨域)

\- 只监听 Leafer 自身属性变化的 [PropertyEvent.LEAFER_CHANGE](/reference/event/basic/Property.md) 事件

\- nextRender() 可通过 [removeNextRender()](/reference/property/layer.md#nextrender-item-function) 方法移除监听

\- 开启阻止默认右键事件 [config.pointer.preventDefaultMenu](/reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean)

\- 右键移动画布功能 [config.move.holdRightKey](/reference/config/app/move.md#move-holdrightkey-boolean)

\- 右键 tap 弹出菜单事件 [PointerEvent.MENU_TAP](/reference/event/ui/Pointer.md#pointerevent-menu)，开启右键移动画布功能后需要用到

\- 鼠标拖拽画面结束时增加物理缓动。

\- 元素添加 [renderBounds](/reference/property/bounds.md#renderbounds-iboundsdata) 属性

\- Matrix 添加 [withScale()](/reference/math/Matrix.md#withscale-scalex-number-scaley-scalex-imatrixwithscaledata) 方法， 用来支持临时叠加 [matrix 选项](/api/interfaces/IRenderOptions.md) 渲染元素

#### 🌿 性能

\- 快速渲染复用相同的图片，减少内存、渲染开销

\- 渲染外描边、遮罩、橡皮擦、内外阴影、混合模式的性能优化

#### 🪲 修复

\- 🌸 [滚轮速度控制](/reference/config/app/wheel.md#wheel-zoomspeed-number) 不生效

\- 当存在遮罩、混合模式时，组透明度导致子元素透明度叠加

\- pointer.up 无法区分左键与右键

\- 没有路径时 getPath() 返回数据不正确

\- blob 图片地址访问不了的问题

#### 🪴 图形编辑器

\- [group()](/plugin/in/editor/Editor.md#打组) 支持传入 json 或实例

\- 🌸 支持自定义可旋转角度的 resize、rotate、skew [光标](/plugin/in/editor/config.md#resizecursor-iimagecursor)，默认内置了一套。

\- 修复父元素存在镜像时旋转错位问题

\- 修复旋转 90 度与 270 度的显示问题

\- 修复锁定后还可以移动的问题

\- 控制点改为居中描边

#### 🍃 API 变化

元素 isMask 属性 改为 [mask](/reference/property/mask.md#mask)， 之前的快速设置遮罩方式另提供了[自定义函数](/reference/property/mask.md#快速设置遮罩)

元素 isEraser 属性 改为 [eraser](/reference/property/eraser.md#eraser)

Leafer 导出画面截图需添加 [screenshot](/reference/property/export.md#画面截图) 参数

ImageManager.isPixel() 改为 hasOpacityPixel()

AnswerType 改为 Answer（需从 leafer-ui 中引入）

移除老版插件注册机制 @leafer/plugin

移除之前的 user 应用类型，改用 draw 类型

移除 LeaferCanvas.setCursor，改用 [updateCursor()](/reference/display/Leafer.md#updatecursor-cursor-icursortype)

移除 Matrix.multiplyParentLayout() 方法

forceFullRender 即将移除，请改用 [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata) 方法代替

removeAll() 方法即将移除，请改用 clear()

#### 🌷 感谢反馈

[@毛豆花生](https://github.com/LvHuaiSheng)、[@霜序廿](https://shuangxunian.github.io)、[@mhrmsg](https://github.com/mhrmsg)、[@3400442579](https://github.com/3400442579)、[@ieleg](https://github.com/ieleg)、[@zhixiaotong](https://github.com/zhixiaotong)、[@hmwl](https://github.com/hmwl)、[@HeeChung](https://github.com/HeeChung)、[@rojer95](https://github.com/rojer95)、[@wermdany](https://github.com/wermdany) @黄某人 @do @南 @表单开发 @Moom🎶 @X @Knight @即兴 @普通人 @鲸要我保护海 @&荷@逸… @星星小夜曲 @dust @Lauginwing

## 2023 / 12 / 22

> v1.0.0-rc.9

#### 新增

\- 元素支持 [getPath()](/reference/property/getPath.md) / [getPathString()](/reference/property/getPathString.md)

\- 填充图案的 [clip](/reference/property/paint/image.md#clip-裁剪模式属性) / [repeat](/reference/property/paint/image.md#repeat-平铺模式属性) 模式支持拉伸图片 size

\- Image 与 HTMLText 导出数据时，移除重复的 fill 字段

#### 修复

\- HTMLText 修改响应式文本数据不生效

\- 鼠标移动值为整数时，导致图形编辑器突然消失

\- Canvas 作为 eraser，放大会出现锯齿

#### 作品分享

[开源海报设计器](https://github.com/LvHuaiSheng/gzm-design) @毛豆花生

[leafer-x-ruler](https://www.npmjs.com/package/leafer-x-ruler) <badge>标尺线插件</badge> @毛豆花生

[不做简历](https://github.com/shuangxunian/no-resume) @霜序廿

#### 感谢反馈

[@毛豆花生](https://github.com/LvHuaiSheng)、[@霜序廿](https://shuangxunian.github.io)、[@mhrmsg](https://github.com/mhrmsg)、[@xinglufan](https://github.com/xinglufan) 、@do、@..、@南、@YOLO、@&荷@逸…、@Ein

## 2023 / 12 / 07

> v1.0.0-rc.8

#### 新增

\- 通过 github 提交 issuse，在【感谢反馈】中开始增加个人主页链接。

\- [around](/reference/property/around.md) 属性支持 9 个方向的语义化设置

\- 填充图案的 [fit](/reference/property/paint/image.md#fit-适应模式属性) / [repeat](/reference/property/paint/image.md#repeat-平铺模式属性) 模式支持 repeat 详细参数

\- 图形编辑器 [group()](/plugin/in/editor/Editor.md#group-custom-igroup-igroup) 支持传入一个自定义的容器

\- 图形编辑器 [选择事件](/plugin/in/editor/Event.md) 传入旧值，方便业务判断

#### 修复

\- 彻底解决同时导出多个图片偶尔会卡住的问题

\- 自动宽高的图片 proxyData.width 初次未更新

\- 底部有大图，选中不了 Group 编组元素

\- 没有宽高的文本增加 padding，内容的位置没改变

\- 拖拽元素到画布外，会选择画布外的文本

#### 变化

```ts
text.padding // 没有宽高的文本增加padding， 内容的位置会改变（更符合使用逻辑）
```

#### 作品分享

[拼图小游戏](http://cqyc.com:8888/files/8puzzle.html) @zhk

#### 感谢反馈

[@xiaou66](https://github.com/xiaou66)、[@毛豆花生](https://github.com/LvHuaiSheng)、[@kooriookami](https://github.com/kooriookami)、@zhk、[@霜序廿](https://shuangxunian.github.io)、@YOLO、@YILS、@do、@..、@刘江、@Jerson Suen、@胡萝北、@南、@葫芦娃是条狗、@白月光

## 2023 / 11 / 30

> v1.0.0-rc.7

<case name="AnimeFrames"></case>

#### 新增 🎉🎉🎉

\- [Anime.js 动画](/plugin/combine/animejs/)，支持关键帧

\- [HTMLText](/plugin/in/html/) 富文本渲染

\- [Point](/reference/math/Point.md) / [Bounds](/reference/math/Bounds.md) / [Matrix](/reference/math/Matrix.md) 数学类

\- [LeafList](/reference/list/LeafList.md) 高性能元素列表

\- Box 不设置宽高时，支持自适应内容，如[自适应背景的文本](/reference/display/Box.md#创建自适应背景的文本)

\- Group、Path 支持 [around](/reference/property/around.md) 属性

\- [setTransform()](/reference/property/transform.md#关键方法) / [transform()](/reference/property/transform.md#关键方法) / [skewOf](/reference/property/transform.md#skewof-origin-ipointdata-skewx-number-skewy-0-resize-boolean) / [dropTo()](/reference/property/layer.md#dropto-parent-group-index-number) / [updateLayout()](/reference/property/layout.md#updatelayout) 元素操作方法

\- [getLayoutBounds()](/reference/property/bounds.md#关键方法) / [getLayoutPoints](/reference/property/bounds.md#关键方法) 用于获取 OBB 包围盒

\- 元素通过 [app](/reference/property/layer.md#app-app-leafer) 属性快速访问根应用

\- [changeAttr()](/reference/property/custom/changeAttr.md) / [addAttr()](/reference/property/custom/addAttr.md) 自定义元素属性（支持收集变化、导出 JSON）

\- App、Leafer 支持 [lockLayout()](/reference/display/Leafer.md#布局方法) / [unlockLayout](/reference/display/Leafer.md#布局方法) 手动控制布局优化

\- [预览/移动模式](/reference/config/app/move.md#拖拽时直接平移视图-预览模式)，拖拽时直接平移视图

\- 文档目录更新为三层结构

#### 图形编辑器新增 🎉🎉🎉

\- hover / 选中描边效果

\- 多选 / 框选 [编辑功能](/plugin/in/editor/)

\- 打组 / 解组功能

\- 移到顶层 / 移到底层功能

\- skew 变形操作

\- 固定方位的按钮组

\- 丰富的样式配置

#### 修复

\- 多边形圆角 cornerRadius 较大时表现出奇怪的形状或者毛刺

\- 图片不再限制最大尺寸

\- 图片导出功能完善

\- App 结构下修改 config.zoom 不生效的问题

\- 响应式数据不会同步自动宽高的图片

\- canvas 遮罩在画布放大后产生锯齿

#### 变化

```ts
leaf.find((child) => (child.fill ? 1 : 0)) //  传入的函数由之前返回布尔值变为数字。
leaf.__layout.checkUpdate() // 变更为leaf.__layout.update()

Matrix // decompose() 改为 getLayout()
Bounds // setByList()改为 setList()
Point / Matrix / Bounds // 移除copy() ，直接set(data)
// 移除resizeable， 改用 editSize

proxyData // 变化较大，简化了使用方式，建议重新阅读
```

#### 感谢反馈

@毛豆花生 @表单开发 @kooriookami @南 @ieleg @无我 @！^0^丶 @Moom🎶 @do

## 2023 / 10 / 21

> v1.0.0-rc.6

#### 新增

\- Node 版 支持 [NAPI-RS](/guide/install/ui/node/napi.md#skia-napi) 高性能画布

\- [find()](/reference/property/find.md)、[findOne()](/reference/property/findOne.md)，可通过 id、innerId、className、tag、函数查找元素

\- 元素支持 [响应式数据](/reference/property/proxy.md)（Vue / React 等前端框架）

\- [textWrap](/reference/display/Text.md#textwrap-itextwrap) 属性，文本支持设置是否换行及 break 换行。

\- [hitBox](/reference/property/hit.md#hitbox-boolean) 属性，使元素的 boxBounds 区域可以响应交互事件。

\- [Line](/reference/display/Line.md#圆角属性)、[Polygon](/reference/display/Polygon.md#圆角属性)、[Star](/reference/display/Star.md#圆角属性) 支持 cornerRadius 圆角属性

\- [wheel.zoomMode](/reference/config/app/wheel.md#wheel-zoommode-boolean-mouse) 支持设置 `'mouse'` 进行缩放

\- 自定义线条/图形 [案例](/reference/display/custom/)

#### 修复

\- 遮罩透明度会受顶部子元素影响问题

\- 单独描边文本的拾取不精准问题

\- 没有宽高的文本设置 textOverflow 报错

#### 变化

```ts
leafer.selector.find() // 该方法已移除，改用元素方法 find() / findOne()
```

#### 感谢反馈

@表单开发 @ahdg6 @毛豆花生 @南 @kooriookami @晓荷

## 2023 / 10 / 12

> v1.0.0-rc.5

#### 新增

\- [右键菜单](/reference/event/ui/Pointer.md#右键菜单-1) 事件

\- [reset](/guide/basic/style.md#重置样式) 方法，可重置元素样式状态

\- [cursorPoint](/reference/display/Leafer.md#cursorpoint-ipointdata)，获取当前光标位置

\- Node 版使用 [自定义字体说明](/guide/install/ui/node/start.md#使用自定义字体)

#### 修复

\- 图片投影问题

\- Node 版画圆环/圆角矩形的问题

\- 缩放画布后不能立即导出图片的问题

\- around 动画定位不更新的问题

#### 感谢反馈

@南 @毛豆花生 @ieleg @evenle

## 2023 / 09 / 29

> v1.0.0-rc.4

#### 新增

\- [全新的插件开发方式](/plugin/dev.md)

\- [插件开发模版](https://github.com/leaferjs/LeaferX/blob/main/template.md)

\- [config.cursor](/reference/config/app/base.md#cursor-boolean) 应用配置，可停用光标功能。

#### 修复

\- 文本描边与阴影属性结合显示偏移的问题。

#### 感谢反馈

@OldGong @ieleg

## 2023 / 09 / 25

> v1.0.0-rc.3

#### 新增

\- 使用 [leaf.emit(`PointEvent.DOWN`)](/reference/property/emit.md) 支持自动生成 UI 事件对象。

#### 修复

\- 文本修改后导致自动换行问题

\- letterSpacing 为负百分比时计算 bounds 不准确问题

\- [Polygon](/reference/display/Polygon.md)存在 curve 属性时计算 bounds 不准确问题

#### 其他

\- 微信小程序 iOS 端 drawImage 无法绘制离屏画布 导致白屏, 等待小程序官方修复

#### 感谢反馈

@kooriookami @毛豆花生 @Puppy @葫芦娃是条狗

## 2023 / 09 / 23

> v1.0.0-rc.2

#### 主要新增

\- [图形编辑器插件](/plugin/in/editor/) 🎉🎉🎉

\- [导入导出 JSON](/reference/property/json.md)

\- [LeaferJS 运行、测试、打包环境开放](https://github.com/leaferjs/LeaferJS)

\- [官方插件中心代码库](https://github.com/leaferjs/in)

#### 其他新增

\- 文档搜索功能

\- [clone()](/reference/property/data.md#clone-ui) 方法，用于克隆元素

\- [键盘事件](/reference/event/ui/Key.md)，增加长按键盘只触发一次的 key.hold 事件

\- [addMany()](/reference/display/Group.md#批量操作) 方法，可一次添加多个元素

\- points 绘制属性 （[Line](/reference/display/Line.md)、[Polygon](/reference/display/Polygon.md)）, 并支持转为平滑曲线

\- [around](/reference/property/around.md) 属性，围绕中心点绘制、旋转、缩放

\- [scale](/reference/property/layout.md#计算属性) 属性快速设置 scaleX, scaleY

\- [cursor](/reference/property/cursor.md) 属性设置光标，支持自定义系统光标

\- [hitRadius](/reference/property/hit.md#hitradius-number) 属性，单独设置元素与光标的碰撞半径

\- [简易坐标转换](/reference/property/point/index.md) 方法

\- [getInnerTotal()](/reference/event/ui/Drag.md#坐标转换方法) 方法 - DragEvent

\- [nextRender()](/reference/property/layer.md#关键方法) 方法，等待下一次渲染执行方法 - UI

\- [waitReady()](/reference/display/Leafer.md#关键方法) 、[waitViewReady()](/reference/display/Leafer.md#关键方法)、 [waitViewCompleted()](/reference/display/Leafer.md#关键方法) - Leafer

\- [微信小程序版](/guide/install/ui/miniapp/start.md) 支持 App 模式 与 图形编辑器

\- [Node 版](/guide/install/ui/node/start.md) 支持 require 和 import 两种引入方式

\- 核心代码包分离， 方便跨平台 [插件开发、打包](/plugin/dev.md)

\- [模拟交互](/reference/event/simulation.md)文档更新

#### 修复

\- 微信小程序更新 导致无法生成海报的问题

\- 微信小程序 绘制内描边报错问题

\- Node 版 多次刷新页面后，Image 不显示的问题

\- Vue3 打包时报 TS 类型错误，导致打包失败

\- 元素 width、height 为负数时，将使用 [镜像代替](/reference/property/bounds.md#width-number)

\- 文本 letterSpacing 为负数渲染异常的情况

\- DragEvent 事件中引用 draggable 元素的 x,y 不跟手的情况

\- Firefox 离屏画布与 Dom 中画布默认字体不一致的问题

通过 url 无法识别出 svg 的情况下，可以通过 [图案填充](/reference/property/paint/image.md#mode-imagepaintmode) 指定 format 为 svg。

修复 forceUpdate() 更新的问题

#### 变化

```ts
1. Pen, PathCreator 工具

moveToEllipse() 变为 drawEllipse()
moveToArc() 变为 drawArc()
增加 drawPoints() 方法

2. Star 元素

points 属性变为 corners

3. 移除 layout.decomposeTransform() 方法

4. Plugin

为了实现按需引入代码，插件机制已改变，并提供了一种新的方式
之前的插件需要给 PluginManager.pow 赋值 LeaferUI 对象

```

#### 感谢反馈

@Yohann @毛豆花生 @vikkyjain2013 @Lauginwing @南 @葫芦娃是条狗 @hhzzcc_lm

## 2023 / 08 / 30

> v1.0.0-beta.12

#### 新增

\- [Worker 版发布](/guide/install/ui/worker/start.md) 🎉🎉🎉

#### 修复

\- 图片 loading 中更新导致的问题

#### 感谢反馈

@kooriookami @hhzzcc_lm

## 2023 / 08 / 28

> v1.0.0-beta.11

#### 修复

\- 旋转图片导致模糊或消失

\- 自动回收图片时报错

#### 感谢反馈

@kooriookami

## 2023 / 08 / 25

> v1.0.0-beta.10

#### 新增

\- [小程序版发布](/guide/install/ui/miniapp/start.md) 🎉🎉🎉

#### 重构图片模块

\- 图片渲染性能极大提升

\- [SVG](/reference/display/SVG.md) 格式的图片支持高清缩放

\- [LOAD 事件](/reference/event/basic/Image.md#事件名称)

\- 超过 4096 x 4096 的图片会优化显示

\- 自动回收未被引用的原始图片

#### 修复

\- Node.js 版 DOMMatrix 报错问题

\- 大量图片循环导出时会卡住

\- zIndex 不生效的问题

\- 文字没有宽度时，使用居中对齐渲染有问题

\- rotation 后，再 scaleOf 单独 X 或 Y 轴定位不准确

\- 画布的页面位置产生变化导致拾取坐标不准确

\- 从外部拖拽内容进画布，没有产生 pointer.up 事件

\- 先触发 pointer.leave, 再触发 pointer.enter 事件

\- 完善应用与元素的 destroy 机制

#### 变更

\- 插件只支持 usePlugin() 一次

\- Leafer 移除 ImageManager 实例, ImageManager 变为静态类，全局共享图片资源

#### 感谢反馈

@kooriookami @hhzzcc_lm @Puppy @俊 @penguin0731 @ousiri

## 2023 / 08 / 05

> v1.0.0-beta.8

#### 新增

\- 小程序版初步开发完成

\- 添加事件坐标转换方法 [PointerEvent](/reference/event/ui/Pointer.md#坐标转换方法) / [DragEvent](/reference/event/ui/Drag.md#坐标转换方法) / [MoveEvent](/reference/event/ui/Move.md#坐标转换方法)

\- 自由宽高的文本也支持对齐功能

\- 插件增加 [获取 leafer 实例的方法](/plugin/dev.md#关键方法)

#### 修复

\- 当 Image 的 url 修改后，图片尺寸没有自动调节

\- Text 中空格宽度为 0

\- leafer.export 调用有时不触发

\- Window 环境下多层结构闪烁

\- 创建元素时未设置坐标导致显示错位

\- Canvas 元素 draw 带有混合模式的 Group 定位不准确

\- 当 stroke 有值时，strokeWidth 为 0 不生效

#### 事件坐标转换示例

\- 画笔工具（按下鼠标拖动开始画线， 可以缩放平移画面）

<<< @/code/display/Pen/draw.ts

## 2023 / 07 / 27

> v1.0.0-beta.7

#### 官网

\- [用户参与](/contribute/index.md)

#### 新增

\- Group 新增 [removeAll()](/reference/display/Group.md) 方法，用来移除子元素

\- 插件支持传入 [配置对象](/plugin/dev.md#关键方法)

#### 修复

\- Windows 环境下 zoomMode 不生效的问题

\- remove 与 add 连用出错

\- 多张图片加载的问题

\- watcher 监听添加 Group，没有收集子元素的问题

\- watcher 对已经移除的元素没有从更新列表中剔除

## 2023 / 07 / 21

> v1.0.0-beta.6

\- [Node.js 版发布](/guide/install/ui/node/start.md)🎉🎉🎉

\- [模拟用户交互](../reference/event/simulation.md)

\- [围绕中心点缩放与旋转](../reference/property/layout.md#关键方法)

\- [基础动画支持](../guide/animate/index.md)

\- [擦除功能](../reference/property/eraser.md)

\- [导出图片](../reference/property/export.md)

静态方法名变更：

```ts
LeafHelper.moveWorld() // =  LeafHelper.move() 已移除
LeafHelper.zoomOfWorld() // = LeafHelper.zoomOf() 已移除
LeafHelper.rotateOfWorld() // = LeafHelper.rotateOf() 已移除
```

## 2023 / 07 / 03

> v1.0.0-beta.2

\- 开放 [插件功能](../plugin/dev.md)

\- 建立技术交流群

#### 官网

\- 我们的博客

## 2023 / 06 / 26

#### 官网

\- 测试性能用例

\- 功能示例展示

\- 致谢开源技术

## 2023 / 06 / 17

> v1.0.0-beta

\- 基础 UI 组件

\- 渐变、图案填充、阴影、遮罩、裁剪

\- 自动化测试

\- 开发文档、API 文档
