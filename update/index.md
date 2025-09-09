# 更新

了解如何 [快速更新版本](/guide/update.md)。

## 2025 / 09 / 08

> v1.9.6

#### 🍇 社区

\- 🌸 [Web-Sport-Data-Overlay](https://github.com/dalang911/Web-Sport-Data-Overlay) [视频介绍](https://www.bilibili.com/video/BV1m9fEYRE6u/?vd_source=24e87517eebd755a4ebf44acdddf2781) <badge>在线制作运动数据视频</badge> [@浪先生](https://github.com/dalang911)

#### 🌱 新增

\- 🌸 App 增加 [mode](/reference/display/App.md#mode-ileafermode) 属性，可设置进入绘制/绘画模式、预览模式

\- 🌸 文本 [textDecoration](/reference/display/Text.md#textdecoration-itextdecoration) 下划线对象支持 offset 属性

\- 支持扩展阴影变形高级插件（斜切、旋转）

#### 🪲 修复

\- 🌸 boxStyle 非初始化时设置 fill 对象不能生效的问题

#### 🌿 优化

\- 🌸 导出图片后，及时清理已回收的临时画布，节省内存

\- 完善编辑器 resize 操作时的 dragBounds 限制效果

#### 🌷 感谢反馈

[@mozbia](https://github.com/mozbia) [@ml-bright](https://github.com/ml-bright) [@kekesita](https://github.com/kekesita) [@szw321127](https://github.com/szw321127)

## 2025 / 08 / 28

> v1.9.5

#### 🍇 社区

\- 🌸 [leafer-x-polyline-editor](https://www.npmjs.com/package/leafer-x-polyline-editor) <badge>折线编辑插件</badge> @johnnhan

\- 🌸 [leafer-flow](https://github.com/2992362310/leafer-flow) [预览](https://2992362310.github.io/leafer-flow/) <badge>类 excalidraw 产品方向</badge> [@GDO](https://github.com/2992362310/leafer-flow)

#### 🌱 新增

\- 🌸 应用支持配置 [maxFPS](/reference/config/app/base.md#maxfps-number) 来控制最高渲染帧率，节省性能开销

\- 🌸 应用的 [width](/reference/display/Leafer.md#width-number) / [height](/reference/display/Leafer.md#width-number) 支持重新设置为空值，进行自动布局

\- 🌸 箭头支持通过 [registerArrow()](/plugin/in/arrow/index.md#registerarrow-name-string-data-ipathdataarrow) 注册自定义箭头样式，预留箭头比例缩放功能

\- 增加 [path()](/plugin/in/arrow/index.md#注册自定义箭头样式) 方法，用于快速创建的 [PathCreator](/reference/path/PathCreator.md) 实例，可以像 Canvas 2D 一样 绘制路径

#### 🪲 修复

\- 🌸 箭头元素编辑线跟 Line 元素不一致的问题

\- 🌸 points 箭头存在圆角时，箭头方向有问题

\- 修复 v1.9.2 之后应用多次缩放会产生偏移的问题

\- Node 端图片绘制锯齿的问题 [#561](https://github.com/leaferjs/leafer-ui/issues/561)

\- 销毁应用时偶发 canvasManager 未定义的问题

#### 🌿 优化

\- 🌸 应用 zoom 放大、缩小定位在有规律的刻度上 [#584](https://github.com/leaferjs/leafer-ui/issues/584)

\- 🌸 优化 svg 图片渲染，底层按整数倍预渲染，避免产生杂色加深线条

\- 优化 arcTo 圆角折线 转路径的精确性

\- 元素初始化参数类型转移到 TS 声明中，减少实体代码

#### 🌷 感谢反馈

[@johnnhan](https://github.com/johnnhan) [@bedphp](https://github.com/bedphp) [@ml-bright](https://github.com/ml-bright) [@Han-JuZhongRen](https://github.com/Han-JuZhongRen) [@ZeeLyn](https://github.com/ZeeLyn) [@chenyomi](https://github.com/chenyomi) @dev_chen @小小城 @hyh

## 2025 / 08 / 14

> v1.9.4

#### 🌱 新增

\- 🌸 元素属性设为 null 和 undefined 均返回默认值

\- 🌸 Box 内部与世界坐标转换时，增加滚动因子

#### 🪲 修复

\- 🌸 修复鼠标上下滚动视图为大距离时，效果不一致的问题

\- overflow 设为 null 报错的问题

\- Box 滚动条偶发超出区域的问题

\- Box 滚动条取消后，拖动元素可能会超出容器的问题

#### 🌿 优化

\- 🌸 简化外联 Box 滚动逻辑，最大化迁移代码到插件中

#### 🌷 感谢反馈

[@johnnhan](https://github.com/johnnhan) [@littleTigerRunRunRun](https://github.com/littleTigerRunRunRun) @dev_chen @SaltedFish @Jerry

## 2025 / 08 / 11

> v1.9.3

#### 🍇 社区

[Box 滚动条](https://www.pxgrow.com/plugin/view/?id=10003) 官方增强插件已上线 🎉🎉🎉

#### 🌱 新增

\- 🌸 [Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 增加 [scrollConfig](/reference/display/Box.md#scrollconfig-iscrollconfig) 滚动条配置属性

\- 🌸 编辑器配置增加 [beforeEditOuter](/plugin/in/editor/config/event.md#beforeeditouter-ieditoreditouterdata) / [beforeEditInner](/plugin/in/editor/config/event.md#beforeeditouter-ieditoreditouterdata) 钩子，可修改打开编辑工具的逻辑

#### 🌷 感谢反馈

@CML

## 2025 / 08 / 08

> v1.9.2

#### 🌱 新增

\- 🌸 元素增加 [dragBoundsType](/reference/UI/dragBounds.md#dragboundstype-idragboundstype) 属性， 可指定 [dragBounds](/reference/UI/dragBounds.md) 区域是在元素的内部还是外部

\- 🌸 [Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 的 [overflow](/reference/display/Box.md#overflow-ioverflow) 属性支持滚动条功能，需安装 scroller 滚动条插件

\- [Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 元素增加 [scrollWorldTransform](/reference/display/Box.md#scrollworldtransform-imatrixwithscaledata) 属性，用于获取滚动区域的变换矩阵

\- 增加 [PropertyEvent.SCROLL](/reference/event/basic/Property.md#propertyevent-scroll) 滚动属性变化事件，可监听元素 scrollX、scrollY 属性变化

\- 图形编辑器增加 [targetLeafer](/plugin/in/editor/index.md#targetleafer-leafer) 只读属性，返回目标元素所在的 leafer 实例层

#### 🪲 修复

\- 🌸 修复 App 单画布模式下，浏览器缩小后操作可能会有残影的问题

#### 🌿 优化

\- 优化 [scroll](/reference/config/app/move.md#move-scroll-boolean-x-y-limit-x-limit-y-limit) 交互体验, 增加滚动限制拉拽动画

\- 优化 [textOverflow](/reference/display/Text.md#textoverflow-ioverflow-string) 类型提示

\- 元素的 one() 与 clone() 方法返回对应的元素类型

\- 通过 [draggable](/reference/UI/draggable.md) 锁定轴移动时，不进行 [dragLimitAnimate](/reference/config/app/pointer.md#pointer-draglimitanimate-boolean-number) 动画

#### 🌷 感谢反馈

[@HangChengJian](https://github.com/HangChengJian) [@bedphp](https://github.com/bedphp) [@fixji](https://github.com/fixji) @张老爷 @闰土 @第一生产力

## 2025 / 08 / 01

> v1.9.1

#### 🪲 修复

\- 🌸 修复 iOS Safari 18.5 之后裁剪导出带外描边的阴影偏移问题

\- 🌸 修复应用配置 pixelRatio 不生效的问题

#### 🌷 感谢反馈

[@mozbia](https://github.com/mozbia) @闰土

## 2025 / 07 / 29

> v1.9.0

#### 🍇 社区

[只需 1.5 秒的 Canvas 绘图引擎插件](https://www.douyin.com/video/7527462651733003578) <badge>视频博主分享</badge> @程序员 Rain

[leafer-x-easy-snap](https://www.npmjs.com/package/leafer-x-easy-snap) <badge>吸附插件(加强版)</badge> @Rainbow

[wzq-leafer-ui](https://ext.dcloud.net.cn/plugin?name=wzq-leafer-ui) 在 renderjs 中实现 uniapp 使用 leafer-ui 示例 @王志强

#### 🌱 新增

\- 🌸 [LeaferEvent](/reference/event/basic/Leafer.md#视图事件) 增加 [TRANSFORM](/reference/event/basic/Leafer.md#视图事件)、[MOVE](/reference/event/basic/Leafer.md#视图事件)、[SCALE](/reference/event/basic/Leafer.md#视图事件)、ROTATE、SKEW [视口属性](/reference/display/Leafer.md#视口属性-viewport) 变化事件

\- 🌸 元素增加 [hit()](/reference/UI/hit.md#hit-worldpoint-ipointdata-hitradius-number-0-boolean) 方法，可快速检测 point（支持碰撞半径）是否碰撞到元素

\- 🌸 平铺图片增加 [gap](/reference/UI/paint/image.md#gap-igap-ipointgap) 参数，支持设置间距，或自动间距，让平铺图片正好铺满元素

\- 平铺图片支持通过 [repeat](/reference/UI/paint/image.md#repeat-irepeat) 属性控制平铺个数

\- 平铺图片增加 [freeTransform](/reference/UI/paint/image.md#freetransform-boolean) 自由变换属性，方便进行手动编辑

\- 🌸 Leafer 配置增加 [pointer.dragLimitAnimate](/reference/config/app/pointer.md#pointer-draglimitanimate-boolean-number)， 使 [dragBounds](/reference/UI/dragBounds.md) 元素在拖拽结束时动画归位

\- 编辑器配置同时也增加了 [dragLimitAnimate](/plugin/in/editor/config/control.md#draglimitanimate-boolean-number) 参数，会覆盖 [pointer.dragLimitAnimate](/reference/config/app/pointer.md#pointer-draglimitanimate-boolean-number) 配置。

\- 🌸 编辑器配置增加 [multipleSelectKey](/plugin/in/editor/config/event.md#multipleselectkey-ishortcutkeyscheck)、[rotateKey](/plugin/in/editor/config/event.md#multipleselectkey-ishortcutkeyscheck) 钩子，支持自定义多选元素快捷键

\- 编辑器配置增加 [hideResizeLines](/plugin/in/editor/config/base.md#hideresizelines-boolean)、[hideRotatePoints](/plugin/in/editor/config/base.md#hideresizelines-boolean) 配置，可隐藏四周控制线、旋转控制点

\- 在多个填充、描边样式中可标记某一个对象为编辑状态（editing 设为 true）

\- UIEvent 增加 isHoldKeys() 通用方法，可检测是否按住快捷键组合，预留语义化类型接口

\- 🌸 阴影增加 [scaleFixed](/reference/UI/shadow.md) 参数，可不跟随画布放大

#### 🪲 修复

\- 🌸 编辑器开启 'font-size' 添加居中文字调整大小会漂移 [#522](https://github.com/leaferjs/leafer-ui/issues/522)

\- 🌸 修复 clip 导出含 spread 阴影的效果不正确的问题 [#511](https://github.com/leaferjs/leafer-ui/issues/511)

\- 🌸 修复 view 进行了 transform 后点击位置不准的问题 [#507](https://github.com/leaferjs/leafer-ui/issues/507)

\- 修复内部编辑器和编组事件会重复触发一次的问题

\- 修复设置 clipping 遮罩后，上层元素的 blendMode 不能与之混合的问题

\- 修复多个 mask 同时堆叠时的交互问题（底部存在无遮罩元素）

\- 修复 mask 父元素的 bounds 计算问题（底部存在无遮罩元素）

\- 修复编辑器首次选中元素后， move 图标不切换的问题

\- 手动关闭裁剪框报错

\- 修复 zoom()方法 padding 参数为 null 会报错的问题

#### 🌿 优化

\- 🌸 在 web 端开启图片 resize 优化，避免 resize 大图卡顿

\- 🌸 Leafer 配置 dragAnimate 支持设置速度, 推荐 0.8 ～ 0.95

\- 🌸 优化 Frame 内无相交子元素的选择体验，靠近边缘就能命中

\- 自动布局兼容 gap 可能为字符串数字的情况 [#544](https://github.com/leaferjs/leafer-ui/issues/544)

\- 微信小程序提示 wx.getSystemInfoSync 方法 [#552](https://github.com/leaferjs/leafer-ui/issues/552)

#### 🌷 感谢反馈

[@bob-chen](https://github.com/bob-chen) [@HangChengJian](https://github.com/HangChengJian) [@bedphp](https://github.com/bedphp) [@FZliweiliang](https://github.com/FZliweiliang) [@mozbia](https://github.com/mozbia) [@ghfkui](https://github.com/ghfkui) @CML @闰土 @do @Jerry

## 2025 / 06 / 30

> v1.8.0

#### 🌱 新增

\- 🌸 stroke 多个描边时，可增加子描边 [style](/reference/UI/stroke.md#子描边属性) 属性, 形成蚂蚁线、模拟内中外三层描边等效果

\- 🌸 平铺图片增加 [scaleFixed](/reference/UI/paint/image.md#scalefixed-boolean) 属性，支持固定全局缩放比例，不跟随画布缩放。

\- 🌸 编辑器配置增加 [spread](/plugin/in/editor/config/style.md#spread-number) 属性，可扩大编辑框与实际元素之间的间隙 [#490](https://github.com/leaferjs/leafer-ui/issues/490)

\- 自定义元素、工具增加属性装饰器 [createAttr()](/reference/display/custom/base/attr.md#普通属性)，可将属性转成 getter/setter，防止取不到值

\- Group 增加 [childlessJSON](/reference/display/Group.md#childlessjson-boolean) 属性，自定义元素时可配置不导出子元素 JSON

\- 元素增加 [renderSpread](/reference/UI/bounds.md#renderspread-number) 属性，可强制扩大渲染边界，防止文本等渲染边界测量不正确导致花屏

\- 🌸 元素增加 [isAutoWidth](/reference/UI/size.md#isautowidth-boolean)、[isAutoHeight](/reference/UI/size.md#isautowidth-boolean) 属性，用于判断是否为自动宽高

\- 编辑器增加 [gesturing](/plugin/in/editor/Editor/state.md#gesturing-boolean) 、[moving](/plugin/in/editor/Editor/state.md#gesturing-boolean)、[resizing](/plugin/in/editor/Editor/state.md#gesturing-boolean)、[rotating](/plugin/in/editor/Editor/state.md#gesturing-boolean)、[skewing](/plugin/in/editor/Editor/state.md#gesturing-boolean) 状态

\- 编辑器配置增加 [rotateAround](/plugin/in/editor/config/control.md#rotatearound-around) 属性，可单独设置旋转中心点

\- 🌸 图片裁剪模式下增加 [clipSize](/reference/UI/paint/image.md#clipsize-isizedata) 属性，自动拉伸裁剪框以适应元素宽高

\- 编辑器 [openInnerEditor()](/plugin/in/editor/Editor/innerEditor.md) 支持直接打开指定名称的内部编辑器

\- 导出图片增加错误捕获，返回对象中包含 error 字段

\- 🌸 Box、Frame 增加 scroll 插件接口，即将支持滚动条功能

#### 🪲 修复

\- 🌸 Frame 设置了 shadow 后，溢出表现异常 [#482](https://github.com/leaferjs/leafer-ui/issues/482)

\- 🌸 fastShadow 阴影模式下，导出图片后阴影会丢失的问题 [#511](https://github.com/leaferjs/leafer-ui/issues/511)

\- 🌸 元素设置 origin、around 属性后可能会导致图片不显示的问题 [#509](https://github.com/leaferjs/leafer-ui/issues/509)

\- clippling 遮罩会再次减淡自身的问题

\- animationOut 数组动画没有触发结束事件的问题 [#481](https://github.com/leaferjs/leafer-ui/issues/481)

\- 一开始就选中 Line 时，获取的编辑工具类型不正确 [#488](https://github.com/leaferjs/leafer-ui/issues/488)

\- 某些情况下阴影未包含描边的问题 [#502](https://github.com/leaferjs/leafer-ui/issues/502)

\- 导出空白图片后，trim 内容会报错 [#501](https://github.com/leaferjs/leafer-ui/issues/501)

#### 🌿 优化

\- 🌸 编辑器中间的控制点，按 0，90，180，270 度 around 自身中心点旋转，简化样式设置

#### 🌷 感谢反馈

[@mozbia](https://github.com/mozbia) [@Xdy1579883916](https://github.com/Xdy1579883916) [@szw321127](https://github.com/szw321127) [@boycy815](https://github.com/boycy815) [@pengjiaxusz](https://github.com/leaferjs/leafer-ui/issues/509) [@bedphp](https://github.com/bedphp) @CML @hhzzcc @毛豆花生 @do @goosen @张老爷 @那时晴天

## 2025 / 06 / 09

> v1.7.0

#### 🍇 社区

\- 🌸 [简易版图片裁剪编辑器](https://github.com/Xdy1579883916/leafer-x-clip-resize-inner-editor) @Rainbow 🎉🎉🎉

#### 🌱 新增

\- 🌸 视图控制 [zoom()](/plugin/in/view/index.md#关键方法) 方法增加 scroll 相关选项，可以限制 scroll 方向

\- 🌸 增加 [config.pointer.type](/reference/config/app/pointer.md#pointertype-mouse-pointer-touch) 设置，可以指定原生事件类型

\- 编辑器配置增加 [preventEditInner](/plugin/in/editor/config/select.md#preventeditinner-boolean) 可阻止双击时打开元素内部编辑器

#### 🪲 修复

\- 🌸 编辑 HTML 插件文本时重影的问题

\- 修复 Rect、Box 元素的 path 重置问题

\- Polygon 元素同时使用 cornerRadius 和虚线的问题

\- 编辑器 updateEditTool() 更新不实时的问题

\- 修复变形的长方形元素旋转时会抖动的问题

#### 🌿 优化

\- 🌸 优化图形编辑器架构，方便支撑图片裁剪等内部编辑器的开发

\- 🌸 文字编辑器粘贴富文本时自动去除样式，转成普通文本

\- 拖拽编辑器元素过程中，支持修改移动光标样式

#### 🌷 感谢反馈

[@18398773590](https://github.com/18398773590) [@FZliweiliang](https://github.com/FZliweiliang) [@27111](https://github.com/27111) [@HangChengJian](https://github.com/HangChengJian) @毛豆花生 @xiaou @李维亮 @人美声甜

## 2025 / 05 / 28

> v1.6.7

#### 🪲 修复

\- 🌸 实时导出缩略图，导致编辑文本有重影的问题

\- 自动宽度的文本会偶发自动换行的问题

\- 浏览器页面滚动后编辑文本有偏移的问题

\- 使用箭头功能报错的问题

#### 🌿 优化

优化 [leafer](/guide/install/leafer/start.md)、 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) 等集成包的版本锁定机制

#### 🌷 感谢反馈

[@FZliweiliang](https://github.com/FZliweiliang) [@minbaby](https://github.com/minbaby) @Rainbow @Run away

## 2025 / 05 / 26

> v1.6.3

#### 🌱 新增

\- 🌸 增加 [BoundsEvent](/reference/event/basic/Bounds.md) 事件, 提供丰富的元素 resize、包围盒变化监测，未监听时不会消耗性能

\- 🌸 事件监听方法 [on()](/reference/UI/on.md#关键方法) 、 [on\_()](/reference/UI/on.md#关键方法) 、 [once()](/reference/UI/on.md#关键方法) 支持多维数组参数，可一次监听多个不同参数的事件

\- 🌸 Bounds 类增加 [put()](/reference/math/Bounds.md#put-put-iboundsdata-align-ialign-center-putscale-iputscale) 方法，可将一个包围盒放入到指定位置，并自动对齐、fit/cover 缩放

\- Bounds 类 [scale()](/reference/math/Bounds.md#scale-scalex-number-scaley-scalex-onlysize-boolean-bounds) 方法增加 onlySize 参数，用于只缩放宽高

\- Point 类 的 [move()](/reference/math/Point.md#move-x-number-ipointdata-y-number-point) 方法支持传入坐标对象

\- [MoveEvent](/reference/event/ui/Move.md) 、 [ZoomEvent](/reference/event/ui/Zoom.md) 、 [RotateEvent](/reference/event/ui/Rotate.md) 事件增加 multiTouch 属性，可判断为触屏派发

#### 🪲 修复

\- 🌸 文本外描边不清晰，且有 1px 以下的间隙 [#143](https://github.com/leaferjs/leafer-ui/issues/143) [#393](https://github.com/leaferjs/leafer-ui/issues/393)

\- 🌸 使用 letterSpacing 后，emoji 显示不正常

\- 🌸 app 导出时设置 size 参数后缩放屏幕不正常的问题

\- 苹果手机上外边框加上阴影后跑偏的问题

\- 居中文本旋转角度后，双击编辑文本会偏移位置的问题

\- 多边形 curve 模式下存在重复坐标导致路径错误，运动路径不生效的问题

\- zIndex 偶发不生效的问题

\- stroke、fill 为空数组时会报错的问题

#### 🌿 优化

\- 🌸 优化不包含 spread 的单个阴影渲染性能，同时优化编辑器控制点的阴影性能

\- 🌸 优化外描边的性能及清晰度

\- 🌸 支持 [导出 App](/reference/UI/export.md#export) 上的有效内容，解除 App 最大只能导出当前分辨率的的限制

\- 减少 Image 的创建开销，优化性能

#### 🌷 感谢反馈

[@johnnhan](https://github.com/johnnhan) [@mozbia](https://github.com/mozbia) [@Xdy1579883916](https://github.com/Xdy1579883916) [@18398773590](https://github.com/18398773590) [@HangChengJian](https://github.com/HangChengJian) [@Chocoer](https://github.com/Chocoer) [@bedphp](https://github.com/bedphp) @王进元 @测试用户

## 2025 / 05 / 12

> v1.6.2

#### 🍇 社区

\- 🌸 [转盘侠](https://www.leaferjs.com/ui/guide/install/ui/miniapp/start.html#%E9%87%87%E7%94%A8-uniapp-%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8E%9F%E7%94%9F%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%A1%88%E4%BE%8B) <badge>午餐吃什么？来转一转，可 DIY</badge> @王志强

#### 🌱 新增

\- 🌸 Image 增加 [placeholderColor](/reference/display/Image.md#placeholdercolor-string) 图片占位符属性，需设置一个背景色

\- 🌸 Text 增加 [placeholder](/reference/display/Text.md#placeholder-string) 占位符文本属性，可通过 [placeholderColor](/reference/display/Text.md#placeholder-string) 设置颜色

\- 🌸 导出增加 [clip](/reference/UI/export.md#裁剪元素后导出) 裁剪参数，相对元素渲染区域进行裁剪

#### 🪲 修复

\- lockRatio 为 corner 时拖动中间控制点有问题

\- 全部删除文本后会保留一个换行符的问题

#### 🌿 优化

\- 优化首次渲染时，更新全局透明度的性能

#### 🌷 感谢反馈

[@Xdy1579883916](https://github.com/Xdy1579883916) [@HangChengJian](https://github.com/HangChengJian) @BO @测试用户

## 2025 / 04 / 30

> v1.6.1

#### 🌱 新增

\- 🌸 完善[`leafer`](/guide/install/leafer/start.md) 全量 npm 包使用说明，增加 [import 子包](/guide/install/leafer/start.md#import-子包) 注意事项

\- 小程序交互事件偶尔失效的 [解决方式](/guide/problem/index.md#小程序交互事件偶尔失效)

#### 🪲 修复

\- App 延时销毁会报错的问题，并增加测试用例

\- 移动端双指捏合缩放会触发 LONG_PRESS 事件

#### 🌷 感谢反馈

@dev_chen @ozar @军杨 @NinJa

## 2025 / 04 / 29

> v1.6.0

#### 🍇 社区

\- 🌸 增加全量 npm 包 [`leafer`](/guide/install/leafer/start.md), 会自动安装 `leafer-ui` 和 `leafer-in/*` 所有插件包

\- 🌸 [DeepWiki](https://deepwiki.com/leaferjs/leafer-ui) <badge>可进行 AI 询问</badge>

\- 🌸 [4oGen AI](https://4oimage.site/) <badge>AI 高质量图像生成工具</badge> @sunboy

\- 🌸 [图标工坊](https://www.u-tools.cn/plugins/detail/%E5%9B%BE%E6%A0%87%E5%B7%A5%E5%9D%8A/) <badge>你的专属图标定制专家</badge> @散装程序员

\- 🌸 [光影日历](https://frameelf.com/calendar) <badge>DIY 精美日历</badge> @ozar

#### 🌱 新增

\- 🌸 文本增加 [boxStyle](/reference/display/Text.md#boxstyle-ibackgroundboxstyle) 属性对象，可直接设置文字背景框样式

\- 🌸 元素增加 [dim](/reference/UI/dim.md) / [dimskip](/reference/UI/dim.md) 属性，用于突出主体、淡化其他元素，适用于产品拆解演示等场景

\- 🌸 引擎配置增加 [config.pixelSnap](/reference/config/app/base.md#pixelsnap-boolean) 对齐物理像素，避免居中线条/图片等元素模糊

\- 引擎配置增加 [config.pointSnap](/reference/config/app/base.md#pointsnap-boolean) 对齐逻辑像素，拖拽元素时对坐标进行取整

\- 引擎配置增加 [config.pointer.snap](/reference/config/app/pointer.md#pointer-snap-boolean) 参数，将交互事件坐标取整，避免产生小数

\- 🌸 引擎配置增加 [config.wheel.posDeltaSpeed](/reference/config/app/wheel.md#wheel-posdeltaspeed-number)，控制正数 delta 滚动速度，设为负数时反向

\- 引擎配置增加 [config.wheel.negDeltaSpeed](/reference/config/app/wheel.md#wheel-negdeltaspeed-number)，控制负数 delta 滚动速度，设为负数时反向

\- 图案填充增加 [changeful](/reference/UI/paint/image.md#changeful-boolean) 参数，用于频繁变化 url 的游戏精灵、动图场景，节省额外开销

\- Text 增加 [isOverflow](/reference/display/Text.md#isoverflow-boolean) 计算属性，用于判断文本是否溢出 boxBounds

\- 编辑器增加合并后的缓存配置 [mergedConfig](/plugin/in/editor/index.md#mergedconfig-ieditorconfig)

\- 🌸 Debug 调试配置增加 [showBounds](/reference/debug/basic.md#显示元素包围盒) 参数，可视化查看元素的渲染包围盒、碰撞区域。

#### 🪲 修复

\- 🌸 小程序安卓版频繁 resize 导致内存溢出的问题

\- 🌸 编辑器锁定比例和宽高限制共存时，会出现突破锁定比例的情况

\- 🌸 编辑器 resize 文本宽度后，产生的多行文本高度不会自动增高的问题

\- 自动宽高的居中文本，第一次 resize 会跳动的问题

\- 拖拽元素会触发 LONG_PRESS 事件

\- 自动布局多层嵌套自动宽度不生效的问题

\- 编辑器的编辑框和元素的位置对齐偶尔会有延迟

#### 🌿 优化

\- 🌸 优化编辑器配置 [mask](/plugin/in/editor/config/style.md#mask-string-boolean) 半透明覆盖遮罩层效果，贴合元素形状，适用于裁剪、截图等场景

\- 优化编辑器、局部渲染性能

\- 🌸 App 模式下统一走 App 控制渲染帧，按顺序渲染子 Leafer（之前是各自独立控制）

\- 图片元素 resize 过程中不再频繁生成 pattern

\- Text 元素可通过 [content 包围盒](/reference/display/Text.md#获取-content-包围盒) 获取到实际内容的宽高

\- 🌸 加强 Debug 调试重绘区域 [showRepaint](/reference/debug/basic.md#显示重绘区域) 的效果，可快速、明确看出变化的局部渲染区域。

#### 🌷 感谢反馈

[@xhq2025](https://github.com/xhq2025) [@bedphp](https://github.com/bedphp) [@johnnhan](https://github.com/johnnhan) [@跃升](https://www.zhihu.com/people/wang-xue-jun-78-2) @Y @xiaou @hhzzcc @dev_chen @ozar @索鸟 @beyond @Jerry @流云思水

## 2025 / 04 / 03

> v1.5.3

#### 🌱 新增

\- 🌸 编辑器配置增加事件钩子 [beforeSelect](/plugin/in/editor/config/event.md#beforeselect-ieditorbeforeselect)，可改变选择数据

#### 🪲 修复

\- 锁定元素不能再次被选中的问题

#### 🌷 感谢反馈

@李维亮

## 2025 / 03 / 31

> v1.5.2

#### 🌱 新增

\- 🌸 [导出图片](/reference/UI/export.md#export)、[图片填充](/reference/UI/paint/image.md#size-number-ioptionsizedata) 的 size 参数支持单独设置宽或高，另一边自适应比例

\- 🌸 编辑器配置增加事件钩子 [beforeMove](/plugin/in/editor/config/event.md#beforemove-ieditorbeforemove)、[beforeScale](/plugin/in/editor/config/event.md#beforescale-ieditorbeforescale)、[beforeRotate](/plugin/in/editor/config/event.md#beforerotate-ieditorbeforerotate) 等，可改变操作数据

\- 🌸 编辑器控制点增加 [skew 类型](/plugin/in/editor/config/style.md#point-iboxinputdata-iboxinputdata)，支持指定中间控制点用于倾斜元素

\- 编辑器配置增加 [multipleSelect](/plugin/in/editor/config/select.md#multipleselect-boolean) 多选开关

\- 可通过 width / height 属性直接获取 Box / Group / Text 等元素的实际宽高

\- 文本 [textDecoration](/reference/display/Text.md#textdecoration-itextdecoration) 增加 'under-delete' 类型，支持下划线与删除线共存

\- 文本 [textDecoration](/reference/display/Text.md#textdecoration-itextdecoration) 支持设置下划线的颜色 `{type: 'under', color: 'red'}`

#### 🪲 修复

\- 🌸 虚线 dashOffset 相交会互相影响的问题 [#398](https://github.com/leaferjs/leafer-ui/issues/398)

\- 🌸 Text 元素设置 padding 后，拖拽时计算异常 [#403](https://github.com/leaferjs/leafer-ui/issues/403)

\- 🌸 Flow 布局 authHeight 下得子元素不符合预期 [#问题](https://www.zhihu.com/question/1888507312550942686/answer/1888523770962092757)

\- 修复默认值类型为 object（如 data 属性），导出 json 不符合预期问题

\- filter 插件使用不了的问题

\- 修复非折线路径使用圆角的循环问题

#### 🌷 感谢反馈

[@ZackFair5185034](https://github.com/ZackFair5185034) [@Xdy1579883916](https://github.com/leaferjs/leafer-ui/issues/403) [@xingzheng7](https://github.com/xingzheng7) @goosen @hhzzcc @Y @江万江 @毛豆花生 @Ethan @Bob.Chen @索鸟

## 2025 / 03 / 24

> v1.5.1

<!-- #### 2025 / 03 / 22

v1.5.0 -->

#### 🍇 社区

\- 🌸 更新大量文档及示例，并支持在线调试示例代码，方便初学者理解 LeaferJS 🎉🎉🎉

\- 🌸 [趣设计小程序支持编辑、生成 GIF 动画 - LeaferJS 首个动图产品案例](https://www.leaferjs.com/ui/guide/install/ui/miniapp/start.html#%E9%87%87%E7%94%A8%E5%B0%8F%E7%A8%8B%E5%BA%8F-web-view-%E7%BB%84%E4%BB%B6%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A1%88%E4%BE%8B) @BO

\- 🌸 [棋盘格示例代码](https://github.com/leaferjs/leafer-ui/blob/main/contributor/code/Checkerboard.ts) [@崮生](https://github.com/2234839)

#### 🌱 新增

\- 🌸 编辑器控制点增加 [resize-rotate 类型](/plugin/in/editor/config/style.md#point-iboxinputdata-iboxinputdata)，支持同时旋转和缩放功能

\- 🌸 编辑器配置增加 [selectedStyle](/plugin/in/editor/config/style.md#selectedstyle-ipathinputdata)，用于区分 hoverStyle

\- 🌸 元素支持直接设置 [editConfig](/reference/UI/editable.md#editconfig-ieditorconfig)、[editOuter](/reference/UI/editable.md#editconfig-ieditorconfig)、[editInner](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，并支持导出到 JSON 中

\- 🌸 编辑器支持给控制点配置 editConfig 实现 [拖拽控制点修改字体大小，拖拽边框控制文本宽高](/plugin/in/editor/config/style.md#拖拽控制点修改字体大小-拖拽边框控制文本宽高)

\- 🌸 增加 [syncExport()](/reference/UI/export.md) 同步导出方法

\- 图形编辑器大部分操作事件统一增加 before 前置事件

\- 编辑器支持配置隐藏 [editBox](/plugin/in/editor/config/select.md#editbox-boolean) 编辑框，满足部分只需要选择元素的场景（如脑图）

\- 元素 [addAttr()](/reference/UI/custom/changeAttr.md) 、[changeAttr()](/reference/UI/custom/changeAttr.md) 静态方法，属性默认值支持函数返回

\- 增加 [自定义异步任务示例](/reference/resource/Resource.md#添加一个自定义异步任务)，导出图片时会等待此任务执行完再导出

#### 🪲 修复

\- 🌸 文本编辑器多次换行不符合预期的问题 [#390](https://github.com/leaferjs/leafer-ui/issues/390)

\- [Pen](/reference/display/Pen.md) 元素的 drawPoints() 方法参数类型不支持 IPointData[] 的问题 [#387](https://github.com/leaferjs/leafer-ui/issues/387)

\- 🌸 在执行过缩放 zoom('fit') 之后，后续的放大缩小异常 [#385](https://github.com/leaferjs/leafer-ui/issues/385)

\- 当可编辑文本的文字全部删除后，输入光标会变大 [#384](https://github.com/leaferjs/leafer-ui/issues/384)

\- 🌸 引擎 scaleY 为 负数时，缩放效果不正确 [#378](https://github.com/leaferjs/leafer-ui/issues/378)

\- 锁定元素的限制问题 [#374](https://github.com/leaferjs/leafer-ui/issues/374)

\- 箭头样式互换设置后，再次互换设置失败 [#373](https://github.com/leaferjs/leafer-ui/issues/373)

\- 🌸 运动路径 loop 为 false 有问题

\- 修复文本强制不换行时，溢出效果不符合预期的问题

\- 🌸 自动布局多行对齐时，未将行间距计算进去的问题

\- 🌸 微信拉伸图片一直增长内存

\- 编辑多条直线来回镜像会偶发偏移的问题

\- Canvas 内部监听 resize 事件时 pixelRatio 的更新逻辑问题

#### 🌿 优化

\- 🌸 优化编辑器旋转吸附体验

\- 编辑器中间控制点关联 hideOnSmall 逻辑，并优化体验

\- 🌸 未添加到 leafer 中的元素也支持直接导出

\- 优化 clone() 引用问题

#### 🌷 感谢反馈

[@QmagicianEX](https://github.com/QmagicianEX) [@johnnhan](https://github.com/johnnhan) [@youyeke](https://github.com/youyeke) [@PineSongCN](https://github.com/PineSongCN) [@sufangyu](https://github.com/leaferjs/leafer-ui/issues/373) [@Xdy1579883916](https://github.com/Xdy1579883916) [@nbgzc](https://github.com/nbgzc) [@Xdy1579883916](https://github.com/Xdy1579883916) [@瓜尔佳子夜](https://www.zhihu.com/people/gua-er-jia-zi-ye) [@skywalker512](https://github.com/skywalker512) @哟 @bulabala @杨凯 @胡春东 @南 @第一生产力 @蘑菇君 @xiaou @BO @Ethan @黄某人 @伍超 @毛豆花生 @do

## 2025 / 02 / 24

> v1.4.2

#### 🍇 社区

\- 🌸 [俄罗斯方块小游戏](https://bgyh2003.github.io/tetris_page/) [@小唐](https://github.com/bgyh2003)

\- 🌸 [luminous 在线画板](https://luminous.xjq.icu/) [@xjq7](https://github.com/xjq7)

#### 🌱 新增

\- 🌸 [图形编辑器](/plugin/in/editor/index.md) 的 resize 控制点支持关联 [dragBounds](/reference/UI/dragBounds.md)，用于限制拖动范围

\- 🌸 [视图控制](/plugin/in/view/index.md) 插件的 [zoom()](/plugin/in/view/index.md) 方法支持动画过渡参数

\- 🌸 增加 [资源库功能](/reference/resource/Resource.md)，可预加载图片，原始图片对象、画布对象可转为 url

\- 🌸 增加 [自定义滤镜](/plugin/in/filter/index.md) 插件，目前只支持自定义滤镜，后续会有官方的标准滤镜

#### 🪲 修复

\- 🌸 部分苹果浏览器渲染阴影的问题

\- 🌸 Line 绘制多折线在 cornerRadius 较大会出现毛刺

\- 🌸 [pick()](/reference/UI/pick.md) 方法和 [模拟交互](/reference/event/simulation.md) 及时更新布局

\- 修复多选横线时，没有高度导致 resize 出错的问题

#### 🌷 感谢反馈

[@ysyes](https://github.com/ysyes) [@bgyh2003](https://github.com/xixiaa) [@xixiaa](https://github.com/xixiaa) @hhzzcc @ozar @流云思水 @伍超 @毛豆花生 @黄某人 @表单设计 @do @王进元

## 2025 / 01 / 26

> v1.4.0

#### 🍇 社区

\- 🌸 [截图工具 Plus](https://www.u.tools/plugins/detail/%E6%88%AA%E5%9B%BE%E5%B7%A5%E5%85%B7%20Plus/) <badge>截图与美化一站式的截图插件</badge> @xiaou

\- 🌸 [leafer-x-spine](https://www.npmjs.com/package/leafer-x-spine) <badge>骨骼动画插件</badge> [@小羽](https://github.com/sulgweb)

\- 🌸 [贪吃蛇小游戏](https://yh4922.github.io/leafer-greedy-snake/) @杨 🐑🐑

\- 🌸 [信息学基础知识交互课件](http://cqyc.com:8888/files/grass/index.html) @zhk

#### 🌱 新增

\- 🌸 [setTransform()](/reference/UI/transform.md#关键方法)、[transform()](/reference/UI/transform.md#关键方法)、[scaleOf()](/reference/UI/scale.md#关键方法)、[rotateOf()](/reference/UI/rotation.md#关键方法)、[skewOf()](/reference/UI/skew.md#关键方法)、[transformWorld()](/reference/UI/transform.md#关键方法)、[scaleOfWorld()](/reference/UI/scale.md#关键方法)、[rotateOfWorld()](/reference/UI/rotation.md#关键方法)、[skewOfWorld()](/reference/UI/skew.md#关键方法)、[flip()](/reference/UI/flip.md) 等方法支持动画过渡参数

#### 🪲 修复

\- 🌸 离开画布没有触发 leave 事件

\- 🌸 文本 both 对齐和删除线共存的时候超出预期

\- 🌸 切换 [flow](/plugin/in/flow/#flow-boolean-iflowtype) 类型未重新布局

\- 导出 base64, 浏览器 bmp 文件头未更改

\- 固定宽高的引擎销毁后，存在一个画布 resize 事件未移除

#### 🌿 优化

\- 🌸 npm 包默认引用 min + sourceMap 的 bundle，调试体验更好

\- 🌸 leafer-ui 子包的依赖改为 workspace:\*，自动获取对应版本

#### 🌷 感谢反馈

[@xingzheng7](https://github.com/xingzheng7) [@wzjiscode](https://github.com/wzjiscode) [@colinyao](https://github.com/colinyao) @Ethan @钮钴禄丶葛

## 2025 / 01 / 20

> v1.3.3

#### 🍇 社区

\- 🌸 [边框水印精灵](https://frameelf.com) <badge>快速为您的照片添加水印</badge> @ozar

\- 🌸 骨骼动画插件（已完成，待发布） [@小羽](https://github.com/sulgweb)

#### 🌱 新增

\- 🌸 导出图片增加 [padding](/reference/UI/export.md) 参数

\- 🌸 导出图片增加 bmp 格式，需平台自身支持

#### 🪲 修复

\- 🌸 动画参数 loop 偶数循环的终点不正确

\- 🌸 交互状态 [state](/reference/UI/state/state.md) 无法传递给子元素

\- 🌸 Box 的长宽未设置时，其内部元素移动后，Box 渲染错误

\- 阴影 中的 color 使用对象形式时不生效

#### 🌿 优化

\- 🌸 提供元素当前形状转路径 [path](/reference/UI/path.md#path-ipathstring-ipathcommanddata) 属性的示例

\- 🌸 提供保持原位不动，切换 [origin](/reference/UI/origin.md#origin-ialign-iunitpointdata) / [around](/reference/UI/around.md#around-ialign-iunitpointdata) 点的示例

\- 从 [图形编辑器插件](/plugin/in/editor/index.md) 中剥离出 [查找元素插件](/plugin/in/find/index.md) 依赖

#### 🌷 感谢反馈

[@zhangsh666](https://github.com/zhangsh666) [@gavinkeh](https://github.com/gavinkeh) [@wzjiscode](https://github.com/wzjiscode) [@RJM1996](https://github.com/RJM1996) @BO @xiaou @Ethan @流云思水 @上了理想的当 @理直气壮张宝华

## 2025 / 01 / 09

> v1.3.2

#### 🍇 社区

\- 🌸 [fig2leafer - leafer 渲染 figma 文件](https://fig2leafer.netlify.app) [@jianghanyue](https://github.com/jianghanyue)

\- 🌸 [音乐律动的背光键盘](https://canvas.xjq.icu/marching-music) [@xjq7](https://github.com/xjq7)

\- 🌸 [模拟丰富多样的雪花效果](https://canvas.xjq.icu/snowflake) [@xjq7](https://github.com/xjq7)

\- 🌸 [TO NORTH 在线标注工具](https://tonorth.netlify.app/) @tonorth.netlify.app

\- 🌸 [不一样的动态时钟 React+Leafer 实现火车动态时钟](https://juejin.cn/post/7454109404122562597) @火树银花

\- 🌸 [可快速实时预览的在线 playground 环境（初步完成）](https://www.leaferjs.com/playground/) [@leafer ](https://github.com/leaferjs)

#### 🌱 新增

\- 🌸 引擎配置增加 [grow](/guide/basic/leafer.md#创建自动生长的-leafer) 参数, 可以创建 [自动生长](/reference/config/app/canvas.md#自动生长) 的画布，自动贴合实际内容大小

\- 🌸 Text 元素的 [textAlign](/reference/display/Text.md#textalign-itextalign) 属性支持设置 'both' 来强制两端对齐文本

\- 🌸 [animation](/reference/UI/animation.md) 及其他动画参数中的 单个关键帧 支持 单独设置循环、摇摆次数

\- 摇摆动画参数 swing 支持设置摇摆次数 (每到达 to 算一次)

\- 元素的 [animation](/reference/UI/animation.md) 属性支持多个动画叠加

#### 🪲 修复

\- 🌸 元素锁定后，双击还能进入编辑的问题

#### 🌿 优化

\- 🌸 元素过渡动画方法会中断 animation 的问题，改为只在有动画样式冲突时才中断

\- 🌸 通过 Platform.origin.Image 保留原始 Image 对象，防止被全局覆盖造成图片无法显示

#### 🌷 感谢反馈

@BO @周明 @王进元

## 2025 / 01 / 06

> v1.3.1

:::tip 升级操作

为让核心包可以作为其他框架的底层库（进一步减小尺寸），本次升级将查找、导出元素功能，迁移至 [查找元素插件](/plugin/in/find/index.md)、[导出元素插件](/plugin/in/export/index.md)， 或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) 场景包（已集成相关插件）。

本轮调整核心包尺寸工作已完毕，后续不会有太大变动。

:::

#### 🍇 社区

\- 🌸 [趣设计 - PS 海报头像拼图 LOGO（补发）](https://www.leaferjs.com/ui/guide/install/ui/miniapp/start.html#%E9%87%87%E7%94%A8%E5%B0%8F%E7%A8%8B%E5%BA%8F-web-view-%E7%BB%84%E4%BB%B6%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A1%88%E4%BE%8B) @BO

\- 🌸 [创意表情 - DIY 有趣的微信表情（补发）](https://www.leaferjs.com/ui/guide/install/ui/miniapp/start.html#%E9%87%87%E7%94%A8-uniapp-%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8E%9F%E7%94%9F%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%A1%88%E4%BE%8B) @goosen

#### 🌱 新增

\- 🌸 Text 增加 [打字机](/reference/display/Text.md#打字机动画) / [删除文字](/reference/display/Text.md#删除文字动画) 动画效果，只需将 text 属性作为动画样式即可

\- 🌸 Animate 类增加 [style](/plugin/in/animate/index.md#style-iuiinputdata) 属性，获取当前动画状态的样式

\- 🌸 Animate 类初始化 [target](/plugin/in/animate/index.md#target-ui-object) 参数支持普通对象。

#### 🌿 优化

\- 🌸 find() / export() 功能迁移至插件，未安装插件时，控制台会有安装提示

\- 🌸 set() 方法传 入无效数据时进行屏蔽

#### 🌷 感谢反馈

@火树银花 @BO

## 2024 / 12 / 31

> v1.2.2

#### 🍇 社区

\- 🌸 文档易用性继续提升，重构快速入门教程的体验

#### 🪲 修复

\- 🌸 小程序端首次没有触发渲染，需要手动触发的问题

\- 🌸 design 视口类型下初始化 zoom 配置不生效的问题

\- 🌸 选中多个 origin 为 center 的 Rect，进行放大缩小等操作时出现位置偏离

\- 监听键盘按下事件同时取消元素造成的报错问题

#### 🌿 优化

\- 🌸 [Canvas](/reference/display/Canvas.md) 元素 调整大小比原生慢的问题，并增加 [safeResize](/reference/display/Canvas.md#saferesize-boolean) 开关

#### 🌷 感谢反馈

[@bgyh2003](https://github.com/bgyh2003) [@1L2018](https://github.com/1L2018) @小唐 @赵 @何苦傲世 @- @自来也

## 2024 / 12 / 26

> v1.2.1

:::tip 升级操作

1. 为让核心包支持更多的场景，同时减小尺寸，本次升级将 [缩放平移视图](/guide/advanced/viewport.md) 功能 移动到了 **viewport 视口插件** 中（不影响运行），需安装引入 [视口插件](/plugin/in/viewport/index.md) 才能使用， 或安装 [leafer-editor](/guide/install/editor/start.md)（已集成此插件）。

2. 监听 RenderEvent.NEXT 事件的代码，需改用 [nextRender()](/reference/UI/nextRender.md) 或 [Platform.requestRender()](/reference/event/basic/Render.md#请求渲染-动画帧) 方法。

3. [图形编辑器](/plugin/in/editor/index.md#通过-script-标签引入)、[动画](/plugin/in/animate/index.md#通过-script-标签引入) 插件，需额外引入 [resize 插件](/plugin/in/resize/index.md) 、[color 插件](/plugin/in/color/index.md)，控制台会有警告。
   :::

#### 🍇 社区

\- 🌸 [leaferjs 高性能 canvas 引擎](https://www.bilibili.com/video/BV1jFkbYREB3/) @前端刘小灰

\- 🌸 文档易用性提升，创建 App、视口交互文档改版，引擎配置增加 App 场景示例代码

#### 🌱 新增

\- 🌸 [config.move.scroll](/reference/config/app/move.md#move-scroll-boolean-x-y-limit-x-limit-y-limit) 支持设置仅横向 或 纵向滚动

\- 🌸 [config.move.dragAnimate](/reference/config/app/move.md#move-draganimate-boolean) 手机端支持更流畅的滑动页面惯性动画

\- 🌸 [config.move.dragOut](/reference/config/app/move.md#move-dragout-boolean-number) 支持设置一个数字，表示距离边界多少像素触发自动平移

\- Leafer 的 [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata-sync-boolean) 方法增加 sync 参数，立即同步渲染

#### 🪲 修复

\- 🌸 leafer.zoom('fit', 0) 不能得到想要的边距为 0，要写成 [0]

\- 🌸 Box 元素 overflow 为 'hide' 时，内阴影未能遮住子元素

\- 遮罩元素的 visible 为 false 时，父级 Box 元素 的 overflow 属性失效

\- 子元素 visible 为 0，导致 flowAlign 报错

#### 🌿 优化

\- 🌸 将 [缩放平移视图](/guide/advanced/viewport.md) 功能移动到 [视口插件](/plugin/in/viewport/index.md) 中，默认改为 [block 场景类型](/reference/config/app/type.md#block-场景类型)，[右键菜单](/reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean) 不再阻止。

\- 🌸 编辑器的 sky 层已开启局部渲染功能，如需关闭，请配置 [局部渲染参数](/guide/advanced/partRender.md)。

\- 🌸 移除一直监听渲染动画帧的功能，改为按需监听，节省性能开销

\- 已销毁的元素不能被添加，并在控制台进行警告

#### 🌷 感谢反馈

@懒画作者 @南 @子凡 @周明 @李维亮 @Jerry

## 2024 / 12 / 07

> v1.1.0

#### 🍇 社区

\- 🌸 [leafer-x-guide-line](http://afdian.com/item/d2f62a74b13611ef99b75254001e7c00) <badge>吸附线插件</badge> [@毛豆花生](http://afdian.com/a/huaisheng)

\- 🌸 [leafer-x-path-editor](https://www.npmjs.com/package/leafer-x-path-editor) <badge>路径编辑器插件</badge> [@xjq7](https://github.com/xjq7)

\- 🌸 [leafer-x-snap](https://www.npmjs.com/package/leafer-x-snap) <badge>吸附插件</badge> [@tuntun](https://github.com/tuntun0609)

\- 🌸 [LeaferJS：牛坏啦，这个开源项目，绚丽多彩的 HTML5 Canvas 2D ...](https://mp.weixin.qq.com/s/CWixEL03ARY3gsbkrWvGew) @小华同学 ai

\- 🌸 [leaferjs 随可视宽度变化垂直居中缩放画板](https://juejin.cn/post/7443093138922389514) @前端雾恋

\- 🌸 [leaferjs 添加元素垂直居中在画板](https://mp.weixin.qq.com/s/pdGFZUbbTgqU70U95z1LRg) @前端雾恋

#### 🌱 新增

\- 🌸 文本支持 [count 动画](/reference/display/Text.md#文本-count-动画)，text 属性传入数字即可

\- 🌸 元素 move() 方法增加 [动画过渡参数](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)

\- 🌸 元素 set() 方法增加 [动画过渡参数](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion)

\- Robot 元素的 actions 属性增加 [IRobotAnimation 类型](/plugin/in/robot/#actions-irobotactions) ，支持单独配置 loop / FPS 参数

\- 运动路径增加 [motionPrecision](/reference/UI/motionPath.md#motionprecision-number) 属性， 用于控制运动精度

\- 编辑器配置增加 [textEditor](/plugin/in/editor/config/innerEditor.md) / [pathEditor](/plugin/in/editor/config/innerEditor.md) 配置对象用于自定义内部编辑器，并支持依次扩展

#### 🪲 修复

\- 虚线箭头显示的问题

\- 运动路径的精度问题

\- Robot 元素 的 loop 属性设为 false 不生效的问题

#### 🌷 感谢反馈

[@sperains](https://github.com/sperains) [@Ronbb](https://github.com/Ronbb) [@xjq7](https://github.com/xjq7) @Max @火树银花

## 2024 / 11 / 26

> v1.0.10

#### 🍊 博客

[LeaferJS 启动社区：像 Vue 一样在全球流行起来，惠及 1000 万+开发者](/blog/2024-11-20.md)

#### 🍇 社区

\- 🌸 [figma 初步转 leafer 元素](https://figrender-leafer.netlify.app) 🎉🎉🎉 （[@jianghanyue](https://github.com/jianghanyue) 提供）

\- 🌸 [leafer-x-dot-matrix](https://www.npmjs.com/package/leafer-x-dot-matrix) 点阵背景插件 🎉🎉🎉 （[@tuntun](https://github.com/tuntun0609)提供）

\- 🌸 [[开源]一款好用的 Canvas 引擎，革新的开发体验，可结合 AI 绘图、生成界面](https://mp.weixin.qq.com/s/KyQrgMDlzkKOEIY7k0VLcQ) @一飞开源

\- 🌸 [我将 fabricjs 换为了 leaferjs](https://juejin.cn/post/7440830008123310132) @前端雾恋

\- 🌸 [leaferjs 元素的基本使用](https://juejin.cn/post/7440830008123310132) @前端雾恋

#### 🌱 新增

\- 🌸 遮罩增加 [clipping-path](/reference/UI/mask.md) 类型，用于制作高性能剪贴路径遮罩。

\- 🌸 遮罩增加 [grayscale](/reference/UI/mask.md) 类型，用于制作灰度（明度）遮罩。

#### 🪲 修复

\- 修复小程序 view 报错的问题

\- 🌸 图形元素设置半透明时，如果同时存在 fill 与 stroke，显示效果和 figma 不一致

\- 🌸 编辑器的控制点 配置 offset，切换不同编辑工具不会还原的问题

\- 画布宽高为 0 时报错（改为警告，并能继续运行）

\- leafer-editor 旧版安装有问题（v1.0.9 之后已修复）

\- App 的 view 为 canvas 的情况下，选中元素会不断触发渲染的问题

\- App 的 view 为 canvas 的情况下，文本编辑框不会随浏览器滚动条滚动的问题

\- 🌸 HMR 下无法更新注册组件并提示组件重复

#### 🌿 优化

\- 🌸 Box 设置了 textBox 属性后， 子文本不需设置 editable 也能直接编辑

\- 🌸 Group/Box 元素若设置了内部编辑工具，双击时将直接打开

\- 创建未注册的元素时提供有效的报错提示

\- lockRatio 增加默认值

#### 🌷 感谢反馈

[@前端西瓜哥](https://github.com/F-star) [@jianghanyue](https://github.com/jianghanyue) [@Ronbb](https://github.com/Ronbb) [@bran-nie](https://github.com/bran-nie) [@qing-yu-an](https://github.com/qing-yu-an) @Max @伍超 @吞吞 @黄某人 @do @SaltedFish @吴下阿蒙丶 @小白杨

## 2024 / 11 / 07

> v1.0.9

#### 🍊 博客

[LeaferJS 亮相 AI 大赛，百万博主"小华“爆笑作品夺奖](/blog/2024-11-06.md)

#### 🌱 新增

\- 插件对核心包的依赖改为 peerDependencies 方式，防止安装多个核心包

#### 🪲 修复

\- 特殊情况下控制台存在打印日志未移除（后续增加自动检测功能）

#### 🌷 感谢反馈

[@Ronbb](https://github.com/Ronbb) [@kooriookami](https://github.com/kooriookami)

## 2024 / 11 / 05

> v1.0.8

#### 🍍 社区

\- 🌸 **[Leafer + vue3 实现的画板](https://github.com/WHSnhcZDYRZC/drawingBoard)** [@WHSnhcZDYRZC](https://github.com/WHSnhcZDYRZC)

#### 🌱 新增

\- 🌸 [leafer-game](/guide/install/game/start.md) 游戏开发场景包发布，集成常用插件 🎉🎉🎉

\- 🌸 元素 [getPathString()](/reference/UI/getPathString.md) 方法支持设置保留小数位长度

\- 图片填充增加渲染优化开关 [fill.sync](/reference/UI/paint/image.md#sync-boolean)，可让图片缩放过程中不模糊

#### 🪲 修复

\- leafer-editor 在选中元素的情况下销毁报错 [#239](https://github.com/leaferjs/leafer-ui/issues/239)

\- Text 将 moveable 设为 false，无法触发编辑效果 [#237](https://github.com/leaferjs/leafer-ui/issues/237)

\- 修复微信小游戏 wx.createOffscreenCanvas() 兼容性问题

\- blob url 的透明图片阴影有问题

#### 🌷 感谢反馈

[@Ronbb](https://github.com/Ronbb) [@MellowCo](https://github.com/MellowCo) @黄某人 @TDAD @9kg @蓝色

## 2024 / 10 / 23

> v1.0.7

#### 🍊 官方插件

\- 🌸 **[运动路径插件](/plugin/in/motion-path/index.md) 正式上线** 🎉🎉🎉

#### 🌱 新增

\- 🌸 阴影/内阴影支持动画过渡效果

#### 🌿 优化

\- 未添加到页面中的组元素支持 find()、pick() 方法查找元素

#### 🌷 感谢反馈

[@kooriookami](https://github.com/kooriookami) [@stitch007](https://github.com/stitch007) @glk

## 2024 / 10 / 20

> v1.0.6

#### 🍍 社区

\- 🌸 **[扫雷小游戏](https://canvas.xjq.icu/minesweeper)** [@xjq7](https://github.com/xjq7)

\- 🌸 **[创意表情制作器](https://www.leaferjs.com/ui/guide/install/ui/miniapp/start.html#%E9%87%87%E7%94%A8-uniapp-%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8E%9F%E7%94%9F%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%A1%88%E4%BE%8B)** <badge>DIY 有趣的微信表情</badge> @goosen

#### 🌱 新增

\- 🌸 组元素的 add()、addAt()、addBefore()、addAfter() 方法支持添加数组（多个元素）

\- Line/ Polygon 元素及 路径的 drawPoints() 的 points 属性支持 point 对象数组，可读性更高

\- Path 元素的 path 属性支持 路径命令对象数组， 可读性更高

#### 🪲 修复

\- Image、Canvas、Leafer 导出 JSON 的 matrix 可选项不生效

\- 特定情况下 resize Canvas 报错

\- 特定情况下 销毁 Editor 报错

#### 🌿 优化

\- 优化 Box / Canvas 的 drawAfterFill 绘制

#### 🌷 感谢反馈

[@daLeiStrive](https://github.com/daLeiStrive) [@kooriookami](https://github.com/kooriookami) [@zhangsai521314](https://github.com/zhangsai521314) [@leidao](https://github.com/leidao) [@yurande](https://github.com/yurande) @岁月 @黄某人 @测试用户 @goosen

## 2024 / 10 / 10

> v1.0.5

#### 🍍 社区

\- 🌸 **[leafer-vue](https://github.com/FliPPeDround/leafer-vue)** 组件式开发框架全新上线 🎉🎉🎉 （[@FliPPeDround](https://github.com/FliPPeDround) 提供）

#### 🌱 新增

\- 🌸 图形编辑器支持在多个 leafer 层中选择元素

\- 🌸 图形编辑器多选时，也能使用 [element](/plugin/in/editor/index.md#element-ui) 元素的属性方法直接移动、调整编辑框

\- 组元素 [add()](/guide/basic/display.md#使用-tag) 方法支持传入 JSON 创建元素

\- 组元素 [remove()](/guide/basic/remove.md#条件移除) 方法支持传入条件移除元素

\- 🌸 Box 元素增加 [textBox](/reference/display/Box.md#textbox-boolean) 文本框属性，可在编辑器中双击 Box 元素直接编辑 [editable](/reference/UI/editable.md) 子文本

\- Text 元素增加 [autoSizeAlign](/reference/display/Text.md#autosizealign-boolean) 属性， 当文本没有宽高且有对齐属性时，是否对齐起始坐标

\- 引擎配置增加 [touch.preventDefault](/reference/config/app/touch.md), 自由控制移动端触屏交互体验

\- 引擎配置增加 [multiTouch.disabled](/reference/config/app/multiTouch.md), 控制是否禁用多点触屏产生的缩放/平移/旋转事件

#### 🪲 修复

\- 🌸 [箭头元素](/plugin/in/arrow/) 为曲线路径且在编辑器中 resize 到比较小时会跑偏

\- 🌸 图形编辑器多选元素不会触发 [drag.enter](/reference/event/ui/Drag.md)、[drop](/reference/event/ui/Drop.md) 事件

\- 图形编辑器多选元素未显示移动光标

\- 自定义编辑工具示例 onCreate 报错的问题

\- 多选元素时，app.editor 会监听两次交互事件的问题

\- [animation](/reference/UI/animation.md) 初始化 [event](/plugin/in/animate/index.md#event-ianimateevents) 监听未生效的问题

\- 🌸 Box 元素有背景图片没加载完时，内部子元素动画不渲染

\- Box 元素会穿透事件的问题

\- Box 元素只存在宽或高时包围盒定位不准确，导致内部元素显示位置有问题

\- Text 元素只存在宽或高且有 Padding 时， 在 Box 中显示有问题

\- Flow 元素只存在宽或高且有 Padding 时，排版不准确

\- 没有宽度的文本设置了文本对齐，在进行文本编辑时定位不正确

#### 🌿 优化

\- [Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 元素不再支持 [解组](/plugin/in/editor/index.md#ungroup-ui)，防止产生问题，如需编组/解组，请使用 Group 元素代替

#### 🌷 感谢反馈

[@leidao](https://github.com/leidao) [@ZhuFaRuHuan](https://github.com/ZhuFaRuHuan) [@yy8z7](https://github.com/yy8z7) [@maxfrees](https://github.com/maxfrees) [@i255979](https://github.com/i255979) [@fundgao](https://github.com/fundgao) @岁月 @ozar @周明 @xiaou @黄某人 @9kg @江万江 @风之影 @BO @Curapica

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

\- 元素增加 [animation](/reference/UI/animation.md) 动画属性、[transition](/reference/UI/transition.md) 过渡属性、[animate() ](/reference/UI/animate.md) 动画方法

\- 元素增加 [state](/reference/UI/state/state.md) 状态属性，可预设复杂多样的状态

\- [Box](/reference/display/Box.md) / [Group ](/reference/display/Group.md)可通过设置 [button](/reference/UI/state/state.md#button-boolean) 属性，使子元素自动同步交互状态。

\- 增加 box 坐标系 [getBoxPoint()](/reference/UI/point/index.md#box-坐标) / [getBoxPointByInner](/reference/UI/point/index.md#box-坐标) / [getInnerPointByBox()](/reference/UI/point/index.md#内部坐标) / [getWorldPointByBox()](/reference/UI/point/index.md#box-坐标)， UIEvent 增加 [getBoxPoint](/reference/event/ui/UIEvent.md#转换坐标方法) 方法

\- 元素增加 [created](/reference/event/basic/Child.md#仅派发给元素自身的事件) / [mounted](/reference/event/basic/Child.md#仅派发给元素自身的事件) / [unmounted](/reference/event/basic/Child.md#仅派发给元素自身的事件) 事件，可通过 event 初始化对象监听

\- clone() 方法增加 [data](/reference/UI/clone.md) 参数覆盖旧数据

#### 🌿 优化

\- UIEvent 的 getPage() / getInner() / getLocal() 方法改为 [getPagePoint()](/reference/event/ui/UIEvent.md#转换坐标方法) / [getInnerPoint()](/reference/event/ui/UIEvent.md#转换坐标方法) / [getLocalPoint()](/reference/event/ui/UIEvent.md#转换坐标方法)，仍兼容之前

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

\- 🌸 增加 [block](/reference/config/app/type.md#block-类型) 视口类型， 可以像 HTML 的普通块状元素一样融入到浏览器页面中

\- 🌸 图形编辑器 editSize 配置正式支持 [font-size](/plugin/in/editor/config/base.md) 类型

\- 🌸 微信小程序增加 [uniapp](/guide/install/ui/miniapp/start.md#其他平台) / [taro](/guide/install/ui/miniapp/start.md#其他平台) 示例代码，并提供了 [原生构建 npm 包](/guide/install/ui/miniapp/start.md#微信开发工具中使用-npm-包) 的问题解决方案

\- [HTMLText](/plugin/in/html/index.md) 支持 [文本编辑功能](/plugin/in/text-editor/index.md)

\- 没有宽高的自动布局元素支持 padding

\- 增加 [touch](/reference/config/app/touch.md) 引擎配置, 用于配置触摸屏事件

\- [config.move.drag](/reference/config/app/move.md#move-drag-boolean-auto) 配置增加 'auto' 类型，整体拖拽平移页面时，仍保留元素交互属性

\- Leafer 增加 [updateClientBounds()](/reference/display/Leafer.md#updateclientbounds) 方法， 用于手动更新引擎的 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)

\- Leafer 增加 [getPagePointByClient()](/reference/display/Leafer.md#getpagepointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) 方法用于转换浏览器 client 坐标到引擎中

\- 元素增加 [moveInner()](/reference/UI/transform.md#moveinner-x-number-ipointdata-y-0) 方法，可在内部坐标系中移动元素

\- [Canvas](/reference/display/Canvas.md#json) 元素支持导出 [JSON](/reference/UI/json.md) 数据

\- 导出图片增加 [size](/reference/UI/export.md#export) 导出选项，用于限制导出宽高

\- [script 标签引入](/guide/install/ui/start.md#通过-script-标签引入) 添加别名 [MyImage](/reference/display/Image.md) / [MyPointerEvent](/reference/event/ui/Pointer.md) / [MyDragEvent](/reference/event/ui/Drag.md)，防止命名冲突

#### 🌿 优化

\- 🌸 [Pen](/reference/display/Pen.md) 元素绘制路径，不再需要手动 paint()， 会自动处理

\- canvas 默认 [pixelRatio](/reference/display/Canvas.md#pixelratio-number) 改为 1， 同 Image 一致，可自行修改 [#175](https://github.com/leaferjs/leafer-ui/issues/175)

\- 优化图形编辑器的 [lockRatio](/plugin/in/editor/config/control.md) 体验（拉伸四条边时不跟手）

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

\- 🌸 [文本编辑插件](/plugin/in/text-editor/index.md) 已开放 🎉🎉🎉

\- 🌸 [iOS 小程序版](/guide/install/ui/miniapp/start.md#注意) 已支持，增加 [App 结构示例](/guide/install/ui/miniapp/start.md#app-结构-图形编辑器)，并支持 [扩展 uniapp 等平台](/guide/install/ui/miniapp/start.md#在其他平台中使用) 🎉🎉🎉

\- 🌸 引擎增加 [app.config.mobile](/reference/config/app/base.md#mobile-boolean) 配置，用于优化手机端交互体验

\- 元素增加 [event](/reference/UI/on.md) 属性，用于初始化时传入事件进行监听

\- PointerEvent 事件 增加 [multiTouch](/reference/event/ui/Pointer.md#multitouch-boolean) 属性， 用来判断是否多点触屏

\- MoveEvent 增加 [moveType](/reference/event/ui/Move.md#movetype-move-drag)， 区分鼠标滚动 / 拖拽产生的视图移动

\- 元素增加 [flip()](/reference/UI/transform.md#flip-axis-x-y) 方法，用于在世界坐标轴中 镜像/翻转元素

#### 🪴 图形编辑器插件

\- 如使用了 editSize 为 font-size， 请暂缓升级，还有部分适配工作需完成

\- 🌸 编辑器控制点支持设置 [pointType](/plugin/in/editor/config/style.md#point-iboxinputdata-iboxinputdata) 属性自定义按钮功能

\- 🌸 支持限制元素的宽高 [widthRange](/reference/UI/editable.md#widthrange-irangesize)、 [heightRange](/reference/UI/editable.md#widthrange-irangesize)

\- 🌸 支持混合使用 origin 、around 属性元素， 并会取其作为旋转点

\- 增加 [flipable](/plugin/in/editor/config/enable.md#flipable-boolean) 配置, 控制是否启用镜像/翻转元素功能

\- 增加 [flip()](/plugin/in/editor/index.md#flip-axis-x-y) 方法，用于手动镜像/翻转元素

\- moveable 配置增加 [`'move'`](/plugin/in/editor/config/enable.md) 类型， 用于手机端双指移动选中元素

\- mask 配置增加 [`'true'`](/plugin/in/editor/config/style.md#mask-string-boolean) 类型，用于快速设置编辑器遮罩

\- 配置 rotatePoint（仍可用）改为 [circle](/plugin/in/editor/config/style.md#旋转按钮), 并增加 [circleMargin](/plugin/in/editor/config/style.md#旋转按钮)、[circleDirection](/plugin/in/editor/config/style.md#旋转按钮)

\- [旋转控制点](/plugin/in/editor/config/style.md#旋转按钮) 和 [buttons](/plugin/in/editor/index.md#buttons-group) 进行分离，并可独立设置方向

#### 🌿 优化

\- Matrix 的 [setLayout()](/reference/math/Matrix.md#setlayout-layout-ilayoutdata-origin-ipointdata-around-ipointdata-matrix) / [getLayout()](/reference/math/Matrix.md#setlayout-layout-ilayoutdata-origin-ipointdata-around-ipointdata-matrix) 方法增加 around 参数

\- [export()](/reference/UI/export.md) 导出切片时，自动隐藏切片(当前导出元素)

\- [rotateOf()](/reference/UI/rotation.md#rotateof-origin-ialign-ipointdata-addrotation-number-transition-itranstion)、[skewOf()](/reference/UI/skew.md#skewof-origin-ialign-ipointdata-addskewx-number-addskewy-0-resize-boolean-transition-itranstion) 的 origin 参数由 [inner 坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 改为 [box 坐标](/guide/advanced/coordinate.md#box-坐标系)

#### 🪲 修复

\- 浏览器放大页面，字体模糊

\- 导出 leafer 层图片缓存造成的清晰度问题（加大 pixelRatio 图片会模糊）

<!-- \- [leafer-editor](/guide/install/editor/start.md) 在小程序中运行报错的问题 -->

\- [flow 自动布局](/plugin/in/flow/index.md) 插件通过全局方式引入没有变量的问题

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

\- 引擎配置增加 [app.config.wheel.disabled](/reference/config/app/wheel.md#wheeldisabled-boolean) 可禁用滚轮事件

\- [export()](/reference/UI/export.md#关键方法)、[toJSON()](/reference/UI/json.md#tojson-iuiinputdata)、[toString()](/reference/UI/json.md#tostring-options-ijsonoptions-string) 支持 JSON 导出选项（可导出元素本地矩阵）

\- 图形编辑器增加遮罩配置 [editor.config.mask](/plugin/in/editor/config/style.md#mask-string)，适用于裁剪图片场景。

#### 🪲 修复

\- 元素被销毁时交互事件不能向上传递的问题

\- pointer.menu_tap 事件触发一次后，点左键也会触发的问题

\- App 被销毁后，图形编辑器再选择元素会报错

\- 修复文本 textOverflow 为`...`时偶尔超出编辑框的问题

#### 🌿 优化

\- 优化 Group 的 [resizeWidth()](/reference/UI/resize.md) / [resizeHeight()](/reference/UI/resize.md) 定位准确性

\- 当最终创建的画布没有宽高时，控制台打印警告提示

#### 正式移除 API （已预告过）

\- 正式移除元素的 getWorld()方法， 请使用 [getLayoutBounds()](/reference/UI/bounds.md#关键方法)

#### 🌷 感谢反馈

[@canbaoSama](https://github.com/canbaoSama) [@zzzz-bang](https://github.com/zzzz-bang) @Nevermore @南 @黄某人 @周游 @笑 @鸭梨 @do @王进元

## 2024 / 06 / 21

> v1.0.0-rc.28

#### 🌱 新增 🎉🎉🎉

\- 🌸 官方文档重大改版，方便新手入门（插图、示例）、查找内容 🎉🎉🎉

\- 🌸 [leafer-editor](/guide/install/editor/start.md) 图形编辑场景包发布，集成常用插件 🎉🎉🎉

\- 🌸 [Flow 自动布局插件](/plugin/in/flow/index.md) 、 [文本编辑插件](/plugin/in/text-editor/index.md) 开始公测 🎉🎉🎉

\- App 支持 [addAt()](/reference/display/App.md#addat-child-leafer-index-number)、 [addBefore()](/reference/display/App.md#addat-child-leafer-index-number)、[addAfter()](/reference/display/App.md#addat-child-leafer-index-number) 方法添加子 Leafer

\- App 结构下支持修改 Leafer 的 [zIndex](/reference/display/Leafer.md#zindex-number) 属性调整层叠顺序 [#70](https://github.com/leaferjs/leafer-ui/issues/70)

\- 图形编辑器增加 [updateEditBox()](/plugin/in/editor/index.md#updateeditbox) 方法，用于多选元素对齐后，手动更新编辑框大小

\- [export()](/reference/UI/export.md#export) 支持导出懒加载的图片，并增加 smooth、contextSetting 画布设置。

#### 🪲 修复

\- 🌸 图形编辑器配置没有实时更新的问题 [#150](https://github.com/leaferjs/leafer-ui/issues/150)

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

\- 🌸 元素增加 [setAttr()](/reference/UI/data.md#setattr-name-string-value-any) 、 [getAttr()](/reference/UI/data.md#setattr-name-string-value-any) 、[getComputedAttr()](/reference/UI/data.md#setattr-name-string-value-any) 方法用于便捷获取数据

\- 🌸 元素增加 [data](/reference/UI/data.md) 自定义数据对象，预留给用户使用

\- 🌸 [Canvas](/reference/display/Canvas.md) 元素 支持 hitFill 像素碰撞检测

#### 🪲 修复

\- 🌸 hitFill 像素碰撞检测的问题

\- 🌸 [dragBounds](/reference/UI/draggable.md#dragbounds-iboundsdata-parent) 为 parent 且拖拽元素比父容器大时，拖拽闪烁的问题

#### 🌷 感谢反馈

@xiaou @陈随易 @.. @开始学习开始

## 2024 / 06 / 12

> v1.0.0-rc.26

#### 🌱 新增 🎉🎉🎉

\- 🌸 元素/组元素增加 [lockRatio](/reference/UI/editable.md#lockratio-boolean) 属性，可单独锁定宽高比例

\- 🌸 元素/组元素增加 [resizeWidth()](/reference/UI/resize.md) / [resizeHeight()](/reference/UI/resize.md) 方法

\- Box 增加 [resizeChildren](/reference/UI/resize.md#resizechildren-boolean) 属性，可以控制子元素是否跟随 resize

\- Text 增加 [resizeFontSize](/reference/UI/resize.md#resizefontsize-boolean) 属性，可单独控制 resize 字体大小

\- 引擎增加 [config.keyEvent](/reference/config/app/base.md#keyevent-boolean) 配置， 用来设置是否接收键盘事件

\- DragEvent 增加 [getPageBounds()](/reference/event/ui/Drag.md#getpagebounds-iboundsdata) 方法，获取拖拽形成的边界，可用于快速 [创建图形](/plugin/in/editor/index.md#创建图形模式)

\- Bounds 增加 [setPoint()](/reference/math/Bounds.md#setpoint-point-ipointdata-bounds) 方法

#### 🪴 图形编辑器插件

\- 🌸 增加 [创建图形](/plugin/in/editor/index.md#创建图形模式)、[手动旋转元素](/plugin/in/editor/index.md#手动旋转元素) 代码示例

\- 🌸 可通过监听 editor 的 [`drag.start`](/reference/event/ui/Drag.md) 和 [`drag.end`](/reference/event/ui/Drag.md) 事件作为 [记录历史状态](/plugin/in/editor/index.md#历史记录) 的时机

\- 🌸 增加 [InnerEditorEvent](/plugin/in/editor/event/InnerEditorEvent.md)、[EditorGroupEvent](/plugin/in/editor/event/EditorGroupEvent.md) 事件

\- [openInnerEditor()](/plugin/in/editor/index.md#openinnereditor-target-ui) 支持直接传入一个 target

\- 支持在侧边栏直接选中组内元素并操作

\- 设置 [resizeable](/plugin/in/editor/config/enable.md#resizeable-boolean-zoom) 为 zoom，可支持移动端手势缩放操作

\- 设置 [rotateable](/plugin/in/editor/config/enable.md#rotateable-boolean-rotate) 为 rotate，可支持移动端手势旋转操作

\- 修复调整自动宽高的文本宽度后，高度被同时固定住的问题

\- 修复锁定功能，并自动取消编辑框

#### 🪴 自动布局插件

\- 增加 [lockRatio](/plugin/in/flow/#lockratio-boolean) 属性，采用自动宽高时，可锁定元素原始宽高比例

\- 优化 resize 元素控制

#### 🪴 文本编辑插件

\- 增加打开、关闭事件 [InnerEditorEvent](/plugin/in/editor/event/InnerEditorEvent.md)

\- 增加 [config.selectAll](/plugin/in/text-editor/index.md) 配置是否双击后自动全选文本

\- 修复有 padding 的文本，编辑状态 bounds 不一致的问题

\- 修复文本为渐变色、对象颜色时，编辑文字为黑色的问题

\- 修复文本换行规则问题

\- 修复进入编辑文本后，引擎仍会响应键盘事件，造成误操作

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

\- 🌸 Leafer 增加 [clientBounds](/reference/display/Leafer.md#clientbounds-iboundsdata)，获引擎在浏览器窗口中的位置（client 坐标）及宽高

\- 🌸 Leafer 增加 [getWorldPointByClient()](/reference/display/Leafer.md#getworldpointbyclient-clientpoint-iclientpointdata-update-boolean-ipointdata) 方法， 用于转换浏览器原生事件坐标到引擎中

\- 🌸 元素 [visible](/reference/UI/visible.md) 属性增加 类似 css 的 [`display: none`](/reference/UI/visible.md) 设置

\- Image 增加 [load()](/reference/display/Image.md#load) 方法，当未添加到 Leafer 中时，可手动加载图片，获取图片自然宽高

\- Image 单独设置宽或高，整体仍会保持原始比例，不会产生变形

\- 渐变颜色的 [from](/reference/UI/paint/linear.md#from-ialign-iunitpointdata) / [to](/reference/UI/paint/linear.md#from-ialign-iunitpointdata) 属性 增加 语义化方位及精确像素设置

\- 渐变颜色的 [stops](/reference/UI/paint/linear.md#stops-colorstop-stringcolor) 属性 增加纯颜色字符串数组类型（自动 offset）

#### 🪲 修复

\- 🌸 app.tree.hittable 设为 false 后再设为 true， 元素监听 pointer.move 事件不触发的问题

\- 🌸 修复外描边笔触留的 renderBounds 不够，导致被截取的问题（文本阴影 bug）

\- Line 不能覆盖 editOuter 方法的问题

\- 多行文本裁剪后，空格字符被吃掉的问题

\- 矩形内描边大于元素宽高造成的渲染残留问题

\- Path 字符串路径解析报错（00、.123.12 没有拆分开）的问题

#### 🌿 优化

\- 🌸 只要检测到是直线路径就采用直线编辑工具

\- 🌸 resize 文本支持调整 fontSize , 需要给 [Text.editConfig](/reference/UI/editable.md#editconfig-ieditorconfig) 配置 [editSize = ‘font-size’](/plugin/in/editor/config/base.md)

\- 优化 box 的布局、渲染性能

\- 元素的 stroke 包围盒精确化，以 strokeWidth 为标准扩展数值，方便 flow 布局

\- long_press 与 tap 事件 [不再同时触发](/reference/event/ui/Pointer.md#多种点击事件同时只触发一个)，方便手机端长按产生菜单事件，轻点取消菜单事件

#### 🍃 API 变化 (重点关注)

\- 🌸 渐变颜色的 from / to 需增加 [type: 'percent'](/reference/UI/paint/linear.md#from-ialign-iunitpointdata) 属性设置百分比坐标

#### 🪴 作品分享

\- 🌸 [珠串设计](https://leaferjs.com/ui/guide/install/ui/miniapp/start.html#%E4%BD%93%E9%AA%8C%E4%BA%A7%E5%93%81%E6%A1%88%E4%BE%8B) <badge>微信小程序 DIY 精美珠串</badge> @&荷@逸…

#### 🌷 感谢反馈

[@826327700](https://github.com/826327700) @表单开发 @吗喽一号 @xiaou @黄某人 @晓荷 @Lauginwing @Misakey @胜行天下

## 2024 / 05 / 24

> v1.0.0-rc.23

#### 🌱 新增 🎉🎉🎉

\- 🌸 官方插件均添加 node 环境导入支持

\- 🌸 元素增加 [origin](/reference/UI/origin.md), 同 css 的 transform-origin， 作为缩放、旋转元素的原点

\- 元素增加 [offsetX](/reference/UI/offset.md)、[offsetY](/reference/UI/offset.md)，方便动画、交互状态中偏移元素

\- Box / Frame 增加 [scrollX](/reference/display/Box.md#滚动属性)、[scrollY](/reference/display/Box.md#滚动属性)，用于滚动内部元素，方便实现滚动条效果

\- 元素增加 [findId()](/reference/UI/findOne.md#findid-id-number-string-ui) 方法，可以查找数字类型的 id

\- 元素增加 [findTag()](/reference/UI/find.md#findtag-tag-number-number-ui) 方法，可以同时查找多个 tag

\- 元素 [eraser](/reference/UI/eraser.md) 橡皮擦属性支持 路径模式（性能更好）

\- 元素 [off()](/reference/UI/off.md) 支持关闭所有事件（不传 type 参数）， 关闭一类事件（不传 listener 函数）

#### 🪲 修复

\- 🌸 官方文档切换浏览器标签后，过段时间回来，画布会变空的问题（chrome 新版本 bug）

\- 🌸 当文本 textWrap 为 none 且 overflow 为 hide 时没有正确截取文字的问题

\- 高清屏上导出 App 截图不对的问题

\- 小数位分辨率的的屏幕底部有 1px 没清除掉的问题

\- 锁定比例缩放元素时，产生镜像后显示有问题

\- locked 的元素可以被拖拽的问题

\- resize 缩小画布后不会触发渲染事件的问题

#### 🍃 API 变化 (重点关注)

\- 🌸 设置 around 为百分比的坐标对象，需增加 [type: 'percent'](/reference/UI/around.md#around-ialign-iunitpointdata) 属性

\- 🌸 文本 [letterSpacing](/reference/display/Text.md#letterspacing-number-iunitdata) / [lineHeight](/reference/display/Text.md#lineheight-number-iunitdata) 等百分比单位的数值，由 0 ～ 100 统一调整为 0 ～ 1

\- 填充图片对齐位置的 around 属性 改为 [align](/reference/UI/paint/image.md#align-ialign)

\- 遮罩类型 maskType 合并到 [mask](/reference/UI/mask.md) 中，移除 maskType

\- 移除 image 后缀 ?leaf，需要时可以自行配置 [Platform.image.suffix](/reference/display/Image.md#图片缓存)

##### 正式移除 API

\- 移除 forceFullRender()， 请使用 [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata-sync-boolean)

\- 移除元素的 editSize 属性, 请使用 [editConfig](/reference/UI/editable.md#editconfig-ieditorconfig) 设置

\- 移除编辑器的 lockMove 设置， 请使用元素的 [draggable](/reference/UI/draggable.md) 锁定 x、y 轴

#### 🌷 感谢反馈

[@wr1688](https://github.com/wr1688) [@aston-fu](https://github.com/aston-fu) [@3400442579](https://github.com/3400442579) [@chenyuyu118](https://github.com/chenyuyu118) [@x-tropy](https://github.com/x-tropy) @表单开发 @吗喽一号 @xiaou @毛豆花生 @晓荷 @天地有雪 @Lauginwing @On the way

## 2024 / 04 / 30

> v1.0.0-rc.22

#### 🌱 新增 🎉🎉🎉

<!-- \- 🌸 文本编辑插件 初步开发完成，即将进入内测阶段。 -->

\- 🌸 元素增加 [dragBounds](/reference/UI/draggable.md#dragbounds-iboundsdata-parent) 属性， 可限制在指定范围、父元素中拖动 [#110](https://github.com/leaferjs/leafer-ui/issues/110)

\- 🌸 图片填充增加 [normal](/reference/UI/paint/image.md#mode-imagepaintmode) 模式 、 [around](/reference/UI/paint/image.md#around-idirection) 参数( 按方位自动定位图片) [#131](https://github.com/leaferjs/leafer-ui/issues/131)

\- 🌸 [export()](/reference/UI/export.md) 支持直接导出 json 文件

\- 元素 [draggable](/reference/UI/draggable.md) 可锁定在 x 或 y 轴移动

\- 元素 [move()](/reference/UI/transform.md#move-x-number-ipointdata-y-0) / [moveWorld()](/reference/UI/transform.md#moveworld-worldx-number-ipointdata-worldy-0) 支持直接传入 [坐标对象](/reference/interface/math/Math.md#ipointdata)

\- 元素增加 [editConfig](/reference/UI/editable.md#editconfig-ieditorconfig) / [editOuter](/reference/UI/editable.md#editouter-string) / [editInner](/reference/UI/editable.md#editinner-string) 独立编辑器属性

#### 🪴 图形编辑器

\- 🌸 单选元素时，编辑框不再阻挡元素自身事件，并可以同步接收元素事件

\- 🌸 增加自定义 [编辑工具](/plugin/in/editor/editOuter/register.md)、 [内部编辑器](/plugin/in/editor/editInner/register.md) 功能及教程，可扩展形状、路径、文本编辑功能

\- 🌸 支持双击进组, 可手动 [openGroup()](/plugin/in/editor/index.md#opengroup-igroup) / [closeGroup()](/plugin/in/editor/index.md#closegroup-igroup)

\- 支持双击元素打开内部编辑器, 可手动 [openInnerEditor()](/plugin/in/editor/index.md#openinnereditor) / [closeInnerEditor()](/plugin/in/editor/index.md#closeinnereditor)

\- 增加状态属性 [editing](/plugin/in/editor/index.md#editing-boolean) / [innerEditing](/plugin/in/editor/index.md#innerediting-boolean) / [groupOpening](/plugin/in/editor/index.md#groupopening-boolean)

\- 增加 [EditBox](/plugin/in/editor/EditBox.md) / [EditPoint](/plugin/in/editor/EditPoint.md) / [EditTool](/plugin/in/editor/EditTool.md) / [InnerEditor](/plugin/in/editor/InnerEditor.md) 文档。

\- 增加 [select()](/plugin/in/editor/index.md#select-target-ui-ui) 选中 / [cancel()](/plugin/in/editor/index.md#cancel) 取消选中方法

\- 增加 [config.hoverStyle](/plugin/in/editor/config/style.md#hover-boolean) 配置， 可以自定义 hover 效果

\- 框选笔触调整为 1px

#### 🪲 修复

\- 🌸 折线结束箭头显示方向不对的问题

\- 🌸 单张画布 App 的 render 问题

\- Frame 使用 [hitSelf](/reference/UI/hit.md#hitself-boolean) 没生效的问题

\- 微信电脑端浏览器 roundRect 不支持传数字圆角的问题

#### 🌿 优化

\- 编辑器固定比例缩放大小按对角线取缩放比例，更加自然

\- 编辑器移动元素，由偏移量改为补充距离到拖动位置，更加精准

\- App.zoomLayer 绑定 tree, 使 page 坐标系与 tree 一致

#### 🍃 API 变化

元素 editSize 属性即将移除， 请使用 [editConfig](/reference/UI/editable.md#editconfig-ieditorconfig) 设置

编辑器的 config.lockMove 即将移除，请使用 [draggable](/reference/UI/draggable.md) 锁定 x、y 轴

编辑器的 config.dualEvent 即将移除，改成了自动触发

[编辑工具](/plugin/in/editor/EditTool.md) 的 update() 方法，不再传入 editor 参数，变为内置属性

editor.hasTarget 改为 [editor.editing](/plugin/in/editor/index.md#editing-boolean) 状态属性

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

\- 🌸 SVG / PNG 透明图片支持像素拾取 [hitFill = 'pixel'](/reference/UI/hit.md#hitfill-ihittype)

\- 🌸 Leafer 增加 [document](/reference/config/app/type.md#document-类型) 视口类型，用于适配文档、网页类型的应用，需安装滚动条插件

\- Leafer 增加 [config.move.scroll](/reference/config/app/move.md#move-scroll-boolean-x-y-limit-x-limit-y-limit) 配置，限制横向或竖向滚动、有内容的区域滚动

\- 增加 [version](/reference/display/Leafer.md#版本号) 版本号

\- Leafer 增加 [FPS](/reference/display/Leafer.md#fps-number) 实时帧率属性

\- Leafer 增加 [waitInit()](/reference/display/Leafer.md#waitinit-item-function-bind-object) 初始化执行函数

\- Leafer / Canvas 增加 [config.contextSettings](/reference/config/app/canvas.md#contextsettings-icanvasrenderingcontext2dsettings) 用于设置原生画布的 willReadFrequently 等。

\- Leafer 增加 [config.pointer.hover](/reference/config/app/pointer.md#pointer-hover-boolean) 用于关闭 hover 事件 （一般用于手机端）

\- Leafer 增加 [config.move.disabled](/reference/config/app/move.md#move-disabled-boolean) 配置， 可禁用滚动功能

\- Leafer 增加 [config.zoom.disabled](/reference/config/app/move.md#zoom-disabled-boolean) 配置， 可禁用缩放功能

\- 🌸 图片填充的 fit 模式增加 [padding](/reference/UI/paint/image.md#padding-ifournumber) 选项，方便用于制作图标按钮

\- 🌸 [Path](/reference/display/Path.md#pen-pathcreator) / [Pen](/reference/display/Pen.md#clear) 增加 clearPath() 方法

\- 🌸 Line 的 points 模式增加 [closed](/reference/display/Line.md#closed-boolean) 选项，用于自动闭合路径

\- Bounds 增加 [addPoint()](/reference/math/Bounds.md#addpoint-point-ipointdata-bounds) 方法

\- PointerEvent.UP 增加 [isCancel](/reference/event/ui/Pointer.md#iscancel-boolean) 属性标记被取消的事件

\- 滚动条增加 [config.minSize](/plugin/in/scroll/#config-iscrollbarconfig) 配置，限制滚动条的最小尺寸

\- Debug 增加 [showWarn](/reference/debug/basic.md#showwarn-boolean) 配置，可关闭控制台警告信息

#### 🪴 图形编辑器

\- 🌸 增加 [config.lockRatio = 'corner'](/plugin/in/editor/config/control.md) 配置，只固定 4 个角的缩放比例，中间点可自由调整

\- 🌸 增加 [config.select](/plugin/in/editor/config/select.md#select-press-tap) 配置，支持 tap 选中（一般用于手机端）

\- 🌸 增加 [config.continuousSelect](/plugin/in/editor/config/select.md#continuousselect-boolean) 配置，点击可以连续多选元素

\- 🌸 增加 [config.lockMove](/plugin/in/editor/config/control.md) 配置，可锁定在 x 或 y 轴移动 [#124](https://github.com/leaferjs/leafer-ui/issues/124)

\- 增加 [config.hideOnSmall](/plugin/in/editor/config/base.md#hideonmove-boolean) 配置，控制元素太小时隐藏控制点

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

\- 导出 Box 元素，scale 设置存在问题 [#105](https://github.com/leaferjs/leafer-ui/issues/#105)

\- app 导出时 screenshot 的 x 和 y 设置无效 [#109](https://github.com/leaferjs/leafer-ui/issues/109)

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

\- 🌸 官网 [赞助我们，一起创造故事](/sponsor/index.md) 上线，4 月 8 号正式启动赞助

#### 🪴 作品分享

\- 🌸 [ikon 图标生成工具](https://github.com/ArcherGu/ikon) @ArcherGu

## 2024 / 03 / 05

> v1.0.0-rc.19

#### 🪴 图形编辑器新增 🎉🎉🎉

\- 🌸 增加 [config.keyEvent](/plugin/in/editor/config/event.md) 设置，用于控制是否接收键盘事件（如方向键移动）

\- 🌸 增加 [config.dualEvent](/plugin/in/editor/config/event.md) 设置，首次点击元素时，元素是否可以接收 tap 等鼠标事件

\- 🌸 增加 [config.moveable](/plugin/in/editor/config/enable.md) 设置，用于控制能否移动元素

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

\- 🌸 [视图插件](/plugin/in/view/index.md) 发布，支持放大、缩小、fit、fit-width 视图， 支持聚焦元素，聚焦区域

\- 🌸 [滚动条插件](/plugin/in/scroll/index.md) 发布，按需显示横向、竖向滚动条，支持切换暗黑主题或自定义样式

\- 🌸 [交互状态插件](/plugin/in/state/index.md) 发布，支持 [hover](/reference/UI/state/hover.md) 、 [press](/reference/UI/state/press.md) 、 [focus](/reference/UI/state/focus.md) 、 [selected](/reference/UI/state/selected.md) 、 [disabled](/reference/UI/state/disabled.md) 交互状态样式

\- 🌸 [Path](/reference/display/Path.md) / 元素 [路径模式](/reference/UI/path.md) 支持通过 pen 画笔 快速绘制路径

\- 元素 - [waitParent()](/reference/UI/parent.md) 、 [waitLeafer()](/reference/UI/leafer.md) 增加绑定 this 的参数

\- Leafer - [waitReady()](/reference/display/Leafer.md#关键方法) 、[waitViewReady()](/reference/display/Leafer.md#关键方法)、 [waitViewCompleted()](/reference/display/Leafer.md#关键方法) 增加绑定 this 的参数

\- 拖拽视图的惯性动画开关 [config.move.dragAnimate](/reference/config/app/move.md#move-draganimate-boolean)，手机端滑动页面需要用到

\- Bounds 增加 [shrink()](/reference/math/Bounds.md#spread-fournumber-ifournumber-bounds) 收缩方法，[spread()](/reference/math/Bounds.md#spread-fournumber-ifournumber-bounds) 支持设置四个方向的值

\- 元素增加 [getWorldBounds()](/reference/UI/bounds.md#边界转换) 转换自定义 bounds

\- 元素增加 [getTransform()](/reference/UI/transform.md#关键方法)， 可获取相对任何父元素的矩阵

\- 元素支持 [transformWorld()](/reference/UI/transform.md#相对世界坐标系)、[moveWorld()](/reference/UI/position.md#关键方法)、[scaleOfWorld()](/reference/UI/scale.md#关键方法)、[rotateOfWorld()](/reference/UI/rotation.md#关键方法) 等操作

\- 所有用到 [`ILocationType`](/api/modules.md#ilocationtype) 参数的方法，均已支持 [page 坐标系](/guide/advanced/coordinate.md#page-场景坐标系)

\- 元素增加 [zoomLayer](/reference/UI/leafer.md) 只读属性， 可直接访问 leafer 的缩放层

\- Group 创建时支持通过参数 [children](/reference/display/Group.md#通过-children-属性添加) 快速添加子元素实例

\- 🌸 导出图片支持 [options.relative](/reference/UI/export.md#export) 选项，可以相对任意父元素的比例进行导出。

#### 🪲 修复

\- 🌸 导出图片时四周偶尔存在 1px 空白空隙的问题

\- 🌸 导出图片时的原始图片清晰度问题

\- 笔触宽度修改后，箭头大小未跟随变化的问题

\- 当背景图片和路径元素一样大时，使用了 fit、cover 不生效的问题

\- 偶发从外部返回画布时产生自动拖拽的问题

\- 富文本元素添加到 Group 偶发性不显示，需其他元素触发刷新

\- 预览模式下，拖动视图结束时，控制台报错的问题

#### 🍃 API 变化

导出图片选项 options.location 改为 [options.relative](/reference/UI/export.md#export)

当拖拽元素到达界面边界时，默认关闭自动平移视图，可以自行打开 [config.move.dragOut](/reference/config/app/move.md#move-dragout-boolean-number)

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

\- 🌸 [箭头插件](/plugin/in/arrow/index.md) 发布，自带 12 种常用的箭头样式，并支持自定义

\- 🌸 自定义元素 [基础教程](/reference/display/custom/base/register.md) 完善， 包含 ts / js 示例

\- 🌸 元素支持 path 模式，同 [Path](/reference/display/Path.md) 属性一致，优先级最高

\- 元素增加 registerUI() / registerData() 静态方法 用于 js [自定义元素](/reference/display/custom/base/register.md)

\- 元素销毁事件 [ChildEvent.DESTROY](/reference/event/basic/Child.md#childevent-destroy)

\- 元素可以通过 [get(name)](/reference/UI/data.md#get-iuiinputdata) 获取输入属性值

\- 🌸 图片支持像素比 [pixelRatio](/reference/display/Image.md#pixelratio-number)（适配高清屏）、懒加载 [lazy](/reference/display/Image.md#lazy-boolean) 属性

\- 🌸 导出图片支持 [options.onCanvas()](/reference/UI/export.md#export) 选项方法，可以用于叠加绘制自定义内容。

#### 🪲 修复

\- [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata-sync-boolean) 不设置 bounds 不生效的问题

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

\- 🌸 [export()](/reference/UI/export.md) 导出单个元素，并支持丰富的导出配置

\- 支持组透明效果（同 HTML、Figma、Sketch 一致）

\- 🌸 增加 [page 坐标系](/guide/advanced/coordinate.md) 及转换方法 [getPagePoint()](/reference/UI/point/index.md) / [getPage()](/reference/event/ui/UIEvent.md#getpagepoint-ipointdata) / [getPageMove()](/reference/event/ui/Drag.md#getpagemove-ipointdata)

\- 🌸 遮罩增加 [maskType](/reference/UI/mask.md#masktype-imasktype)，可支持路径遮罩、PS 剪贴蒙版效果

\- 🌸 元素添加 [strokeWidthFixed](/reference/UI/stroke.md#strokewidth-number) 固定线宽属性，当元素放大时，线宽不会跟随放大

\- Group 支持 [pick()](/reference/UI/pick.md) 方法，可通过坐标点拾取元素

\- Leafer 支持 [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata-sync-boolean) 方法，可指定一个 bounds 进行局部重渲染

\- Leafer 支持手动更新光标样式 [updateCursor()](/reference/display/Leafer.md#updatecursor-cursor-icursortype)

\- 🌸 Leafer、Pen、Group 支持通过 [clear()](/reference/display/Group.md#clear) 方法清空所有子元素

\- Point 支持 [scale()](/reference/math/Point.md#缩放), [scaleOf()](/reference/math/Point.md#缩放) 方法

\- Image 全局跨域配置 [crossOrigin](/reference/display/Image.md#图片跨域)

\- 只监听 Leafer 自身属性变化的 [PropertyEvent.LEAFER_CHANGE](/reference/event/basic/Property.md) 事件

\- nextRender() 可通过 [removeNextRender()](/reference/UI/nextRender.md) 方法移除监听

\- 开启阻止默认右键事件 [config.pointer.preventDefaultMenu](/reference/config/app/pointer.md#pointer-preventdefaultmenu-boolean)

\- 右键移动画布功能 [config.move.holdRightKey](/reference/config/app/move.md#move-holdrightkey-boolean)

\- 右键 tap 弹出菜单事件 [PointerEvent.MENU_TAP](/reference/event/ui/Pointer.md#pointerevent-menu)，开启右键移动画布功能后需要用到

\- 鼠标拖拽画面结束时增加物理缓动。

\- 元素添加 [renderBounds](/reference/UI/bounds.md#renderbounds-iboundsdata) 属性

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

\- [group()](/plugin/in/editor/index.md#编组) 支持传入 json 或实例

\- 🌸 支持自定义可旋转角度的 resize、rotate、skew [光标](/plugin/in/editor/config/cursor.md)，默认内置了一套。

\- 修复父元素存在镜像时旋转错位问题

\- 修复旋转 90 度与 270 度的显示问题

\- 修复锁定后还可以移动的问题

\- 控制点改为居中描边

#### 🍃 API 变化

元素 isMask 属性 改为 [mask](/reference/UI/mask.md#mask)， 之前的快速设置遮罩方式另提供了[自定义函数](/reference/UI/mask.md#快速设置遮罩)

元素 isEraser 属性 改为 [eraser](/reference/UI/eraser.md#eraser)

Leafer 导出画面截图需添加 [screenshot](/reference/UI/export.md#画面截图) 参数

ImageManager.isPixel() 改为 hasOpacityPixel()

AnswerType 改为 Answer（需从 leafer-ui 中引入）

移除老版插件注册机制 @leafer/plugin

移除之前的 user 视口类型，改用 draw 类型

移除 LeaferCanvas.setCursor，改用 [updateCursor()](/reference/display/Leafer.md#updatecursor-cursor-icursortype)

移除 Matrix.multiplyParentLayout() 方法

forceFullRender 即将移除，请改用 [forceRender()](/reference/display/Leafer.md#forcerender-bounds-iboundsdata-sync-boolean) 方法代替

removeAll() 方法即将移除，请改用 clear()

#### 🌷 感谢反馈

[@毛豆花生](https://github.com/LvHuaiSheng)、[@霜序廿](https://shuangxunian.github.io)、[@mhrmsg](https://github.com/mhrmsg)、[@3400442579](https://github.com/3400442579)、[@ieleg](https://github.com/ieleg)、[@zhixiaotong](https://github.com/zhixiaotong)、[@hmwl](https://github.com/hmwl)、[@HeeChung](https://github.com/HeeChung)、[@rojer95](https://github.com/rojer95)、[@wermdany](https://github.com/wermdany) @黄某人 @do @南 @表单开发 @Moom🎶 @X @Knight @即兴 @普通人 @鲸要我保护海 @&荷@逸… @星星小夜曲 @dust @Lauginwing

## 2023 / 12 / 22

> v1.0.0-rc.9

#### 新增

\- 元素支持 [getPath()](/reference/UI/getPath.md) / [getPathString()](/reference/UI/getPathString.md)

\- 填充图案的 [clip](/reference/UI/paint/image.md#clip-裁剪模式属性) / [repeat](/reference/UI/paint/image.md#repeat-平铺模式属性) 模式支持拉伸图片 size

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

\- [around](/reference/UI/around.md) 属性支持 9 个方向的语义化设置

\- 填充图案的 [fit](/reference/UI/paint/image.md#fit-适应模式属性) / [repeat](/reference/UI/paint/image.md#repeat-平铺模式属性) 模式支持 repeat 详细参数

\- 图形编辑器 [group()](/plugin/in/editor/index.md#group-custom-igroup-igroup) 支持传入一个自定义的组元素

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

#### 新增 🎉🎉🎉

\- [HTMLText](/plugin/in/html/index.md) 富文本渲染

\- [Point](/reference/math/Point.md) / [Bounds](/reference/math/Bounds.md) / [Matrix](/reference/math/Matrix.md) 数学类

\- [LeafList](/reference/list/LeafList.md) 高性能元素列表

\- Box 不设置宽高时，支持自适应内容，如[自适应背景的文本](/reference/display/Box.md#创建自适应背景的文本)

\- Group、Path 支持 [around](/reference/UI/around.md) 属性

\- [setTransform()](/reference/UI/transform.md#关键方法) / [transform()](/reference/UI/transform.md#关键方法) / [skewOf](/reference/UI/transform.md#skewof-origin-ipointdata-skewx-number-skewy-0-resize-boolean) / [dropTo()](/reference/UI/dropTo.md) / [updateLayout()](/reference/UI/layout.md#updatelayout) 元素操作方法

\- [getLayoutBounds()](/reference/UI/bounds.md#关键方法) / [getLayoutPoints](/reference/UI/bounds.md#关键方法) 用于获取 OBB 包围盒

\- 元素通过 [app](/reference/UI/leafer.md) 属性快速访问根应用

\- [changeAttr()](/reference/UI/custom/changeAttr.md) / [addAttr()](/reference/UI/custom/addAttr.md) 自定义元素属性（支持收集变化、导出 JSON）

\- App、Leafer 支持 [lockLayout()](/reference/display/Leafer.md#布局方法) / [unlockLayout](/reference/display/Leafer.md#布局方法) 手动控制布局优化

\- [预览/移动模式](/reference/config/app/move.md#拖拽时直接平移视图-预览模式)，拖拽时直接平移视图

\- 文档目录更新为三层结构

#### 图形编辑器新增 🎉🎉🎉

\- hover / 选中描边效果

\- 多选 / 框选 [编辑功能](/plugin/in/editor/index.md)

\- 编组 / 解组功能

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

\- [find()](/reference/UI/find.md)、[findOne()](/reference/UI/findOne.md)，可通过 id、innerId、className、tag、函数查找元素

\- 元素支持 [响应式数据](/reference/UI/proxy.md)（Vue / React 等前端框架）

\- [textWrap](/reference/display/Text.md#textwrap-itextwrap) 属性，文本支持设置是否换行及 break 换行。

\- [hitBox](/reference/UI/hit.md#hitbox-boolean) 属性，使元素的 boxBounds 区域可以响应交互事件。

\- [Line](/reference/display/Line.md#圆角属性)、[Polygon](/reference/display/Polygon.md#圆角属性)、[Star](/reference/display/Star.md#圆角属性) 支持 cornerRadius 圆角属性

\- [wheel.zoomMode](/reference/config/app/wheel.md#wheel-zoommode-boolean-mouse) 支持设置 `'mouse'` 进行缩放

\- 自定义线条/图形 [案例](/reference/display/custom/index.md)

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

\- [插件开发模版](https://github.com/leaferjs/leafer-x/blob/main/template.md)

\- [config.cursor](/reference/config/app/base.md#cursor-boolean) 引擎配置，可停用光标功能。

#### 修复

\- 文本描边与阴影属性结合显示偏移的问题。

#### 感谢反馈

@OldGong @ieleg

## 2023 / 09 / 25

> v1.0.0-rc.3

#### 新增

\- 使用 [leaf.emit(`PointEvent.DOWN`)](/reference/UI/emit.md) 支持自动生成 UI 事件对象。

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

\- [图形编辑器插件](/plugin/in/editor/index.md) 🎉🎉🎉

\- [导入导出 JSON](/reference/UI/json.md)

\- [LeaferJS 运行、测试、打包环境开放](https://github.com/leaferjs/LeaferJS)

\- [官方插件中心代码库](https://github.com/leaferjs/leafer-in)

#### 其他新增

\- 文档搜索功能

\- [clone()](/reference/UI/clone.md) 方法，用于克隆元素

\- [键盘事件](/reference/event/ui/Key.md)，增加长按键盘只触发一次的 key.hold 事件

\- [addMany()](/reference/display/Group.md#批量操作) 方法，可一次添加多个元素

\- points 绘制属性 （[Line](/reference/display/Line.md)、[Polygon](/reference/display/Polygon.md)）, 并支持转为平滑曲线

\- [around](/reference/UI/around.md) 属性，围绕中心点绘制、旋转、缩放

\- [scale](/reference/UI/layout.md#计算属性) 属性快速设置 scaleX, scaleY

\- [cursor](/reference/UI/cursor.md) 属性设置光标，支持自定义系统光标

\- [hitRadius](/reference/UI/hit.md#hitradius-number) 属性，单独设置元素与光标的碰撞半径

\- [转换坐标](/reference/UI/point/index.md) 方法

\- [getInnerTotal()](/reference/event/ui/Drag.md#转换坐标方法) 方法 - DragEvent

\- [nextRender()](/reference/UI/nextRender.md) 方法，等待下一次渲染执行方法 - UI

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

\- 元素 width、height 为负数时，将使用 [镜像代替](/reference/UI/bounds.md#width-number)

\- 文本 letterSpacing 为负数渲染异常的情况

\- DragEvent 事件中引用 draggable 元素的 x,y 不跟手的情况

\- Firefox 离屏画布与 Dom 中画布默认字体不一致的问题

通过 url 无法识别出 svg 的情况下，可以通过 [图案填充](/reference/UI/paint/image.md#mode-imagepaintmode) 指定 format 为 svg。

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

\- 完善引擎与元素的 destroy 机制

#### 变更

\- 插件只支持 usePlugin() 一次

\- Leafer 移除 ImageManager 实例, ImageManager 变为静态类，全局共享图片资源

#### 感谢反馈

@kooriookami @hhzzcc_lm @Puppy @俊 @penguin0731 @ousiri

## 2023 / 08 / 05

> v1.0.0-beta.8

#### 新增

\- 小程序版初步开发完成

\- 添加事件转换坐标方法 [PointerEvent](/reference/event/ui/Pointer.md#转换坐标方法) / [DragEvent](/reference/event/ui/Drag.md#转换坐标方法) / [MoveEvent](/reference/event/ui/Move.md#转换坐标方法)

\- 自由宽高的文本也支持对齐功能

\- 插件增加 [获取 leafer 引擎的方法](/plugin/dev.md#关键方法)

#### 修复

\- 当 Image 的 url 修改后，图片尺寸没有自动调节

\- Text 中空格宽度为 0

\- leafer.export 调用有时不触发

\- Window 环境下多层结构闪烁

\- 创建元素时未设置坐标导致显示错位

\- Canvas 元素 draw 带有混合模式的 Group 定位不准确

\- 当 stroke 有值时，strokeWidth 为 0 不生效

#### 事件转换坐标示例

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

\- [围绕中心点缩放与旋转](../reference/UI/layout.md#关键方法)

\- 基础动画支持

\- [擦除功能](../reference/UI/eraser.md)

\- [导出图片](../reference/UI/export.md)

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
