# UI Element

The base element (root class of all elements), exposing all common properties and methods shared by every UI component.

In addition to the API list, we also provide a simple [categorization system](#categories) to help you quickly understand the structure of the API.

## 📃 API

### All Properties

#### Data Properties

Properties used for element creation, modification, and JSON serialization (Schema reference).

| Name                                                                        | Description                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identification                                                              |                                                                                                                                                                                                                                                                                                                             |
| [id](../UI/id.md)                                                           | Unique ID of the element                                                                                                                                                                                                                                                                                                    |
| [tag](../UI/tag.md)                                                         | Element tag name (i.e., the class name)                                                                                                                                                                                                                                                                                     |
| [name](../UI/name.md)                                                       | Name of the element                                                                                                                                                                                                                                                                                                         |
| [className](../UI/className.md)                                             | Classification name, currently supports only one                                                                                                                                                                                                                                                                            |
| Layout                                                                      |                                                                                                                                                                                                                                                                                                                             |
| [x](../UI/position.md#x-number)                                             | Position on the x-axis                                                                                                                                                                                                                                                                                                      |
| [y](../UI/position.md#y-number)                                             | Position on the y-axis                                                                                                                                                                                                                                                                                                      |
| [position](../UI/position.md#position-ialign-iinset)                        | Position relative to the parent using directional alignment or edge positioning. Requires the [position plugin](../../plugin/in/position/index.md)                                                                                                                                                                          |
| [width](../UI/size.md#width-number)                                         | Width, supported by certain elements only                                                                                                                                                                                                                                                                                   |
| [height](../UI/size.md#height-number)                                       | Height, supported by certain elements only                                                                                                                                                                                                                                                                                  |
| [lockRatio](../UI/resize.md#lockratio-boolean)                              | Whether to lock the element's aspect ratio. Requires the [resize plugin](../../plugin/in/resize/index.md)                                                                                                                                                                                                                   |
| [scaleX](../UI/scale.md#scalex-number)                                      | Scale factor on the x-axis. A negative value flips the element horizontally                                                                                                                                                                                                                                                 |
| [scaleY](../UI/scale.md#scaley-number)                                      | Scale factor on the y-axis. A negative value flips the element vertically                                                                                                                                                                                                                                                   |
| [scaleFixed](../UI/scaleFixed.md)                                           | Keeps the element's global scale fixed, unaffected by viewport zooming                                                                                                                                                                                                                                                      |
| [scale](../UI/scale.md#scale)                                               | Quickly set or get scaleX and scaleY                                                                                                                                                                                                                                                                                        |
| [rotation](../UI/rotation.md)                                               | [Rotation angle](../interface/math/Math.md#rotation)                                                                                                                                                                                                                                                                        |
| [skewX](../UI/skew.md#skewx-number)                                         | Skew angle on the x-axis                                                                                                                                                                                                                                                                                                    |
| [skewY](../UI/skew.md#skewy-number)                                         | Skew angle on the y-axis                                                                                                                                                                                                                                                                                                    |
| [offsetX](../UI/offset.md#offsetx-number)                                   | Offset on the x-axis                                                                                                                                                                                                                                                                                                        |
| [offsetY](../UI/offset.md#offsety-number)                                   | Offset on the y-axis                                                                                                                                                                                                                                                                                                        |
| [origin](../UI/origin.md)                                                   | Rotate and scale the element around an origin, similar to CSS [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)                                                                                                                                                                         |
| [around](../UI/around.md)                                                   | Draw the element around a specified point, similar to the anchor point in game engines                                                                                                                                                                                                                                      |
| Bounds                                                                      |                                                                                                                                                                                                                                                                                                                             |
| [renderSpread](../UI/bounds.md#renderspread-ifournumber)                    | Explicitly expands the rendering bounds to prevent rendering artifacts caused by inaccurate bounds calculations, such as with text                                                                                                                                                                                          |
| Appearance                                                                  |                                                                                                                                                                                                                                                                                                                             |
| [zIndex](../UI/zIndex.md)                                                   | Stacking order within the parent element                                                                                                                                                                                                                                                                                    |
| [opacity](../UI/opacity.md)                                                 | Opacity                                                                                                                                                                                                                                                                                                                     |
| [visible](../UI/visible.md)                                                 | Visibility of the element, used to show or hide it                                                                                                                                                                                                                                                                          |
| [fill](../UI/fill.md)                                                       | Fill, similar to background-color or text color in HTML5. Supports [solid colors](../UI/paint/solid.md), [linear gradients](../UI/paint/linear.md), [radial gradients](../UI/paint/radial.md), [angular gradients](../UI/paint/angular.md), [image patterns](../UI/paint/image.md), and more. Multiple fills can be layered |
| [stroke](../UI/stroke.md)                                                   | Stroke, similar to border-color in HTML5. Supports [solid colors](../UI/paint/solid.md), [linear gradients](../UI/paint/linear.md), [radial gradients](../UI/paint/radial.md), [angular gradients](../UI/paint/angular.md), [image patterns](../UI/paint/image.md), and more. Multiple strokes can be layered               |
| [strokeAlign](../UI/stroke.md#strokealign-strokealign)                      | Stroke alignment                                                                                                                                                                                                                                                                                                            |
| [strokeWidth](../UI/stroke.md#strokewidth-number)                           | Stroke width                                                                                                                                                                                                                                                                                                                |
| [strokeScaleFixed](../UI/stroke.md#strokescalefixed-zoom-in-number-boolean) | Whether to keep the stroke width fixed, unaffected by viewport zooming                                                                                                                                                                                                                                                      |
| [strokeCap](../UI/stroke.md#strokecap-strokecap)                            | Stroke line cap style                                                                                                                                                                                                                                                                                                       |
| [strokeJoin](../UI/stroke.md#strokejoin-strokejoin)                         | Stroke line join style                                                                                                                                                                                                                                                                                                      |
| [dashPattern](../UI/stroke.md#dashpattern-number)                           | Dashed stroke pattern                                                                                                                                                                                                                                                                                                       |
| [dashOffset](../UI/stroke.md#dashoffset-number)                             | Starting offset of the dashed stroke pattern                                                                                                                                                                                                                                                                                |
| [shadow](../UI/shadow.md)                                                   | Outer shadow. Supports multiple layered shadows and boxShadow effects                                                                                                                                                                                                                                                       |
| [innerShadow](../UI/innerShadow.md)                                         | Inner shadow. Supports multiple layered inner shadows                                                                                                                                                                                                                                                                       |
| [dim](../UI/dim.md)                                                         | Dim the element. Can be used with [bright](../UI/bright.md). Requires the [highlight plugin](../../plugin/in/bright/index.md)                                                                                                                                                                                               |
| [dimskip](../UI/dim.md)                                                     | Skip dimming to highlight the element. Used with [dim](../UI/dim.md). Requires the [highlight plugin](../../plugin/in/bright/index.md)                                                                                                                                                                                      |
| [bright](../UI/bright.md)                                                   | Highlight the element by rendering it on top. Can be used with [dim](../UI/dim.md). Requires the [highlight plugin](../../plugin/in/bright/index.md)                                                                                                                                                                        |
| [mask](../UI/mask.md)                                                       | Set the element as a mask                                                                                                                                                                                                                                                                                                   |
| [eraser](../UI/eraser.md)                                                   | Set the element as an eraser                                                                                                                                                                                                                                                                                                |
| [blendMode](../UI/blendMode.md)                                             | Blend mode                                                                                                                                                                                                                                                                                                                  |
| Interaction                                                                 |                                                                                                                                                                                                                                                                                                                             |
| [hittable](../UI/hit.md)                                                    | Whether the element responds to mouse, touch, or other pointer events, similar to the CSS pointer-events property                                                                                                                                                                                                           |
| [hitChildren](../UI/hitChildren.md)                                         | Further control the interactivity of child elements                                                                                                                                                                                                                                                                         |
| [hitSelf](../UI/hitSelf.md)                                                 | Further control the interactivity of the element itself (excluding its children)                                                                                                                                                                                                                                            |
| [hitFill](../UI/hitFill.md)                                                 | Further control hit testing for the element's [fill](../UI/fill.md). Setting it to pixel enables pixel-level hit testing for PNG / SVG images, ignoring transparent pixels                                                                                                                                                  |
| [hitStroke](../UI/hitStroke.md)                                             | Further control hit testing for the element's [stroke](../UI/stroke.md)                                                                                                                                                                                                                                                     |
| [editable](../UI/editable.md)                                               | Whether the element can be edited. Requires the [editor plugin](../../plugin/in/editor/index.md)                                                                                                                                                                                                                            |
| [draggable](../UI/draggable.md)                                             | Whether the element can be dragged                                                                                                                                                                                                                                                                                          |
| [dragBounds](../UI/dragBounds.md)                                           | Restrict the element's dragging range                                                                                                                                                                                                                                                                                       |
| [dragBoundsType](../UI/dragBounds.md#dragboundstype-idragboundstype)        | Drag bounds type, determining whether the element is constrained inside or outside the bounds                                                                                                                                                                                                                               |
| [cursor](../UI/cursor.md)                                                   | Cursor style displayed when hovering over the element. Supports all [CSS cursor values](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)                                                                                                                                                                            |
| States                                                                      |                                                                                                                                                                                                                                                                                                                             |
| [states](../UI/state/state.md#states-istates)                               | List of predefined states for creating complex element or game states that can be switched at any time. Supports [transition effects](../UI/transition.md). Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                     |
| [state](../UI/state/state.md#state-string)                                  | Current state. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                                                                                                                  |
| [button](../UI/state/state.md#button-boolean)                               | Set the element as a button. Child elements automatically synchronize interaction states such as state, hover, press, etc. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                      |
| [hoverStyle](../UI/state/hover.md#hoverstyle-iuiinputdata)                  | Interactive style applied when the pointer enters the element, automatically restored when it leaves. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                           |
| [pressStyle](../UI/state/press.md#pressstyle-iuiinputdata)                  | Interactive style applied when the pointer is pressed, automatically restored when released. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                                    |
| [focusStyle](../UI/state/focus.md#focusstyle-iuiinputdata)                  | Focus style applied when the element receives focus via focus(), automatically restored when focus is lost. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                     |
| [selected](../UI/state/selected.md#selected-boolean)                        | Whether the element is selected. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                                                                                                |
| [selectedStyle](../UI/state/selected.md#selectedstyle-iuiinputdata)         | Selection style applied when `selected` is true, automatically restored when `selected` becomes false. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                          |
| [disabled](../UI/state/disabled.md#disabled-boolean)                        | Whether the element is disabled. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                                                                                                |
| [disabledStyle](../UI/state/disabled.md#disabledstyle-iuiinputdata)         | Disabled style applied when `disabled` is true, automatically restored when `disabled` becomes false. Requires the [state plugin](../../plugin/in/state/index.md)                                                                                                                                                           |
| Animation                                                                   |                                                                                                                                                                                                                                                                                                                             |
| [animation](../UI/animation.md)                                             | Animation properties supporting delays, loops, and seeking. Can create transition, swing, keyframe, and path animations. Requires the [animation plugin](../../plugin/in/animate/index.md)                                                                                                                                  |
| [transition](../UI/transition.md)                                           | Transition effect when switching to or entering a state. Requires the [animation plugin](../../plugin/in/animate/index.md)                                                                                                                                                                                                  |
| [transitionOut](../UI/transition.md)                                        | Transition effect when exiting a state. Uses transition if not specified. Requires the [animation plugin](../../plugin/in/animate/index.md)                                                                                                                                                                                 |
| [motionPath](../UI/motionPath.md)                                           | Set the element as a motion path. Requires the [motion path plugin](../../plugin/in/motion-path/index.md)                                                                                                                                                                                                                   |
| [motionPrecision](../UI/motionPath.md)                                      | Set the precision of the motion path, controlling the accuracy of extracting points along the path. Requires the [motion path plugin](../../plugin/in/motion-path/index.md)                                                                                                                                                 |
| [motion](../UI/motion.md)                                                   | Position the element along a [motion path](../UI/motionPath.md). Supports percentage values. Requires the [motion path plugin](../../plugin/in/motion-path/index.md)                                                                                                                                                        |
| [motionRotation](../UI/motion.md)                                           | Apply an angular offset to the automatic rotation generated by the [motion path](../UI/motionPath.md). Requires the [motion path plugin](../../plugin/in/motion-path/index.md)                                                                                                                                              |
| Data                                                                        |                                                                                                                                                                                                                                                                                                                             |
| [path](../UI/path.md)                                                       | Path data supporting SVG and Canvas [drawing commands](../interface/ui/PathData.md). Elements can enter path-first mode                                                                                                                                                                                                     |

Learn more: [Setting Styles](../../guide/basic/style.md), [JSON Import and Export](../../reference/UI/json.md).

```ts
// Create an element
const rect = new Rect({
  x: 100,
  y: 100,
  width: 200,
  height: 100,
  fill: '#32cd79',
})

// Modify the element
rect.set({ x: 200, fill: 'red' })

// Modify properties directly
rect.x = 300
rect.fill = 'blue'

// Serialize to JSON
const json = rect.toJSON()

// Create an element from JSON
leafer.add(json)
```

#### Runtime Properties

Runtime state, computed results, and associated objects of an element.

| Name                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identification                                                           |                                                                                                                                                              |
| [innerId](../UI/innerId.md)                                              | Temporary ID generated at runtime (incremental). Not suitable for remote storage                                                                             |
| [innerName](../UI/innerName.md)                                          | Temporary name generated at runtime for quickly identifying the element                                                                                      |
| Layout                                                                   |                                                                                                                                                              |
| [isAutoWidth](../UI/size.md#isautowidth-boolean)                         | Whether the element has automatic width                                                                                                                      |
| [isAutoHeight](../UI/size.md#isautoheight-boolean)                       | Whether the element has automatic height                                                                                                                     |
| Bounds                                                                   |                                                                                                                                                              |
| [boxBounds](../UI/bounds.md#boxbounds-iboundsdata)                       | Basic bounds of the element in the [inner coordinate system](../../guide/advanced/coordinate.md) ([OBB](../UI/bounds.md) bounding box)                       |
| [renderBounds](../UI/bounds.md#renderbounds-iboundsdata)                 | Rendering bounds of the element in the [inner coordinate system](../../guide/advanced/coordinate.md) ([AABB](../UI/bounds.md) bounding box)                  |
| [worldBoxBounds](../UI/bounds.md#worldboxbounds-iboundsdata)             | Basic bounds of the element in the [world coordinate system](../../guide/advanced/coordinate.md#world-世界坐标系) ([AABB](../UI/bounds.md) bounding box)     |
| [worldRenderBounds](../UI/bounds.md#worldrenderbounds-iboundsdata)       | Rendering bounds of the element in the [world coordinate system](../../guide/advanced/coordinate.md#world-世界坐标系) ([AABB](../UI/bounds.md) bounding box) |
| Transform                                                                |                                                                                                                                                              |
| [worldTransform](../UI/transform.md#worldtransform-imatrixwithscaledata) | Transformation matrix relative to world coordinates, including scaleX and scaleY properties                                                                  |
| [localTransform](../UI/transform.md#localtransform-imatrixdata)          | Transformation matrix relative to the parent element                                                                                                         |
| References                                                               |                                                                                                                                                              |
| [parent](../UI/parent.md)                                                | Parent element                                                                                                                                               |
| [leafer](../UI/leafer.md)                                                | Leafer engine containing the element                                                                                                                         |
| [app](../UI/leafer.md#app-app-leafer)                                    | App instance (root application) containing the element. Returns Leafer when not using an App structure                                                       |
| [isLeafer](../UI/leafer.md#isleafer-boolean)                             | Whether the element is a Leafer engine                                                                                                                       |
| [leaferIsCreated](../UI/leafer.md#leaferiscreated-boolean)               | Whether the Leafer engine and its child elements have been [created](./Leafer.md#created-boolean) (initial creation completed)                               |
| [leaferIsReady](../UI/leafer.md#leaferisready-boolean)                   | Whether the Leafer engine is [ready](./Leafer.md#ready-boolean) (initial layout completed)                                                                   |
| [zoomLayer](../UI/leafer.md#zoomlayer-group)                             | [Zoom and pan viewport layer](./Leafer.md#zoomlayer-group) of the Leafer engine                                                                              |
| Data                                                                     |                                                                                                                                                              |
| [data](../UI/data.md)                                                    | Custom data object reserved for users. LeaferJS will never use this property internally. Defaults to an empty object {}                                      |
| [\_\_](../UI/data.md#iuiinputdata)                                       | Internal data processing instance (property name with two underscores)                                                                                       |
| [proxyData](../UI/proxy.md)                                              | Enables reactive data support for elements in frontend frameworks such as Vue and React                                                                      |

### All Methods

| Name                                                                                                                                                             | Description                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layout                                                                                                                                                           |                                                                                                                                                                                                                                       |
| [move()](../UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)                                                                             | Translate the element <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition                                                                                                   |
| [moveInner()](../UI/position.md#moveinner-addx-number-ipointdata-addy-0-transition-itranstion)                                                                   | Move the element in the [inner coordinate system](../../guide/advanced/coordinate.md) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition                                   |
| [moveWorld()](../UI/position.md#moveworld-addworldx-number-ipointdata-addworldy-0-transition-itranstion)                                                         | Move the element in the [world coordinate system](../../guide/advanced/coordinate.md#world-世界坐标系) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition                  |
| [resizeWidth()](../UI/resize.md#resizewidth-width-number)                                                                                                        | Resize the width of an element/group bounding box, requires [resize plugin](../../plugin/in/resize/index.md)                                                                                                                          |
| [resizeHeight()](../UI/resize.md#resizeheight-height-number)                                                                                                     | Resize the height of an element/group bounding box, requires [resize plugin](../../plugin/in/resize/index.md)                                                                                                                         |
| [scaleResize()](../UI/resize.md#scaleresize-scalex-number-scaley-scalex)                                                                                         | Convert scale operation into width/height changes <badge>incremental operation</badge>, requires [resize plugin](../../plugin/in/resize/index.md)                                                                                     |
| [scaleOf()](../UI/scale.md#scaleof-origin-ialign-ipointdata-multiplyscalex-number-multiplyscaley-number-itranstion-resize-boolean-transition-itranstion)         | Scale the element around the origin ( [box coordinates](../../guide/advanced/coordinate.md#box-坐标系) ) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition                |
| [scaleOfWorld()](../UI/scale.md#scaleofworld-worldorigin-ipointdata-multiplyscalex-number-multiplyscaley-number-itranstion-resize-boolean-transition-itranstion) | Scale the element around the world origin ( [world coordinates](../../guide/advanced/coordinate.md#world-世界坐标系) ) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition  |
| [flip()](../UI/flip.md)                                                                                                                                          | Flip/mirror the element in the [world coordinate system](../../guide/advanced/coordinate.md#world-世界坐标系), supports optional [animation](../../guide/plugin/animate.md) transition                                                |
| [rotateOf()](../UI/rotation.md#rotateof-origin-ialign-ipointdata-addrotation-number-transition-itranstion)                                                       | Rotate the element around the origin ( [box coordinates](../../guide/advanced/coordinate.md#box-坐标系) ) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition               |
| [rotateOfWorld()](../UI/rotation.md#rotateofworld-worldorigin-ipointdata-addrotation-number-transition-itranstion)                                               | Rotate the element around the world origin ( [world coordinates](../../guide/advanced/coordinate.md#world-世界坐标系) ) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition |
| [skewOf()](../UI/skew.md#skewof-origin-ialign-ipointdata-addskewx-number-addskewy-0-resize-boolean-transition-itranstion)                                        | Skew the element around the origin ( [box coordinates](../../guide/advanced/coordinate.md#box-坐标系) ) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition                 |
| [skewOfWorld()](../UI/skew.md#skewofworld-worldorigin-ipointdata-addskewx-number-addskewy-0-resize-boolean-transition-itranstion)                                | Skew the element around the world origin ( [world coordinates](../../guide/advanced/coordinate.md#world-世界坐标系) ) <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition   |
| Bounds                                                                                                                                                           |                                                                                                                                                                                                                                       |
| [getBounds()](../UI/bounds.md#getbounds-type-iboundstype-box-relative-ilocationtype-ui-world-iboundsdata)                                                        | Get the [AABB](../UI/bounds.md) bounding box                                                                                                                                                                                          |
| [getLayoutBounds()](../UI/bounds.md#getlayoutbounds-type-iboundstype-box-relative-ilocationtype-ui-world-unscale-boolean-ilayoutboundsdata)                      | Get the [OBB](../UI/bounds.md) bounding box, including scale/rotation/layout transforms                                                                                                                                               |
| [getLayoutPoints()](../UI/bounds.md#getlayoutpoints-type-iboundstype-box-relative-ilocationtype-ui-world-ipointdata)                                             | Get the four corner points of the [OBB](../UI/bounds.md) bounding box                                                                                                                                                                 |
| Transform                                                                                                                                                        |                                                                                                                                                                                                                                       |
| [setTransform()](../UI/transform.md#settransform-matrix-imatrixdata-resize-boolean-transition-itranstion)                                                        | Set local transform matrix, automatically decomposed into layout properties, supports optional [animation](../../guide/plugin/animate.md) transition                                                                                  |
| [getTransform()](../UI/transform.md#gettransform-relative-ilocationtype-ui-local-imatrixdata)                                                                    | Get transform matrix, supports relative matrices to any parent via `relative`                                                                                                                                                         |
| [transform()](../UI/transform.md#transform-matrix-imatrixdata-resize-boolean-transition-itranstion)                                                              | Apply transform operation and decompose into layout properties <badge>incremental operation</badge>, supports optional [animation](../../guide/plugin/animate.md) transition                                                          |
| [transformWorld()](../UI/transform.md#transformworld-worldtransform-imatrixdata-resize-boolean-transition-itranstion)                                            | Same as transform(), but in [world coordinate system](../../guide/advanced/coordinate.md#world-世界坐标系), supports optional animation transition                                                                                    |
| Coordinate Conversion                                                                                                                                            |                                                                                                                                                                                                                                       |
| [getPagePoint()](../UI/point/index.md#转换世界坐标)                                                                                                              | Convert world coordinates to page coordinates (supports delta movement)                                                                                                                                                               |
| [getLocalPoint()](../UI/point/index.md#转换世界坐标)                                                                                                             | Convert world coordinates to local coordinates (supports delta movement)                                                                                                                                                              |
| [getInnerPoint()](../UI/point/index.md#转换世界坐标)                                                                                                             | Convert world coordinates to inner coordinates (supports delta movement)                                                                                                                                                              |
| [getBoxPoint()](../UI/point/index.md#转换世界坐标)                                                                                                               | Convert world coordinates to box coordinates (supports delta movement)                                                                                                                                                                |
| [getWorldPointByPage()](../UI/point/index.md#转换-page-坐标)                                                                                                     | Convert page coordinates to world coordinates (supports delta movement)                                                                                                                                                               |
| [getWorldPointByLocal()](../UI/point/index.md#转换本地坐标)                                                                                                      | Convert local coordinates to world coordinates (supports delta movement)                                                                                                                                                              |
| [getInnerPointByLocal()](../UI/point/index.md#转换本地坐标)                                                                                                      | Convert local coordinates to inner coordinates (supports delta movement)                                                                                                                                                              |
| [getWorldPoint()](../UI/point/index.md#转换内部坐标)                                                                                                             | Convert inner coordinates to world coordinates (supports delta movement)                                                                                                                                                              |
| [getLocalPointByInner()](../UI/point/index.md#转换内部坐标)                                                                                                      | Convert inner coordinates to local coordinates (supports delta movement)                                                                                                                                                              |
| [getBoxPointByInner()](../UI/point/index.md#转换内部坐标)                                                                                                        | Convert inner coordinates to box coordinates (supports delta movement)                                                                                                                                                                |
| [getWorldPointByBox()](../UI/point/index.md#转换内部坐标)                                                                                                        | Convert box coordinates to world coordinates (supports delta movement)                                                                                                                                                                |
| [getInnerPointByBox()](../UI/point/index.md#转换内部坐标)                                                                                                        | Convert box coordinates to inner coordinates (supports delta movement)                                                                                                                                                                |
| Actions                                                                                                                                                          |                                                                                                                                                                                                                                       |
| [dropTo()](../UI/dropTo.md)                                                                                                                                      | Drag and drop the element into another parent container                                                                                                                                                                               |
| [focus()](../UI/state/focus.md#focus-value-boolean)                                                                                                              | Focus the element. Only one element can be focused per App. Requires [state plugin](../../plugin/in/state/index.md)                                                                                                                   |
| Animation                                                                                                                                                        |                                                                                                                                                                                                                                       |
| [animate()](../UI/animate.md)                                                                                                                                    | Run animation and return an animation instance, requires [animation plugin](../../plugin/in/animate/index.md)                                                                                                                         |
| [getMotionTotal()](../UI/getMotionTotal.md)                                                                                                                      | Get total length of motion path, requires [motion path plugin](../../plugin/in/motion-path/index.md)                                                                                                                                  |
| [getMotionPoint()](../UI/getMotionPoint.md)                                                                                                                      | Get a point on the motion path (includes rotation), requires [motion path plugin](../../plugin/in/motion-path/index.md)                                                                                                               |
| Events                                                                                                                                                           |                                                                                                                                                                                                                                       |
| [on()](../UI/on.md#on-type-string-string-listener-ieventlistener-options-ieventoption)                                                                           | Listen to events                                                                                                                                                                                                                      |
| [on\_()](../UI/on.md#on-type-string-string-listener-ieventlistener-bind-iobject-options-ieventoption-ieventlistenerid)                                           | Listen to events with bound `this`, returns event id (used with `off_()`)                                                                                                                                                             |
| [once()](../UI/on.md#once-type-string-string-listener-ieventlistener-capture-boolean)                                                                            | Listen to event once                                                                                                                                                                                                                  |
| [off()](../UI/off.md)                                                                                                                                            | Remove event listener                                                                                                                                                                                                                 |
| [off\_()](../UI/off.md)                                                                                                                                          | Remove event listener (paired with `on_()`)                                                                                                                                                                                           |
| [emit()](../UI/emit.md)                                                                                                                                          | Manually dispatch event                                                                                                                                                                                                               |
| [emitEvent()](../UI/emit.md)                                                                                                                                     | Manually dispatch event (must be IEvent object)                                                                                                                                                                                       |
| Update                                                                                                                                                           |                                                                                                                                                                                                                                       |
| [forceUpdate()](../UI/forceUpdate.md)                                                                                                                            | Force update element (async), updates layout and rendering                                                                                                                                                                            |
| [updateLayout()](../UI/forceUpdate.md#updatelayout)                                                                                                              | Request layout update; ignored if no changes                                                                                                                                                                                          |
| [forceRender()](../UI/forceRender.md)                                                                                                                            | Force render only (async), does not update layout                                                                                                                                                                                     |
| [nextRender()](../UI/nextRender.md)                                                                                                                              | Execute callback on next render frame                                                                                                                                                                                                 |
| [removeNextRender()](../UI/nextRender.md)                                                                                                                        | Remove next render callback                                                                                                                                                                                                           |
| Search                                                                                                                                                           |                                                                                                                                                                                                                                       |
| [find()](../UI/find.md)                                                                                                                                          | Find elements by id/innerId/className/tag/function condition, returns array, requires [find plugin](../../plugin/in/find/index.md)                                                                                                    |
| [findTag()](../UI/find.md)                                                                                                                                       | Find elements by tag                                                                                                                                                                                                                  |
| [findOne()](../UI/findOne.md)                                                                                                                                    | Find single element by id/innerId/className/tag/function, requires [find plugin](../../plugin/in/find/index.md)                                                                                                                       |
| [findId()](../UI/findOne.md)                                                                                                                                     | Find element by id                                                                                                                                                                                                                    |
| [pick()](../UI/pick.md)                                                                                                                                          | Pick element by world coordinate point                                                                                                                                                                                                |
| Relation                                                                                                                                                         |                                                                                                                                                                                                                                       |
| [waitParent()](../UI/parent.md#waitparent-item-function-bind-object)                                                                                             | Wait until element has a parent                                                                                                                                                                                                       |
| [waitLeafer()](../UI/leafer.md#waitleafer-item-function-bind-object)                                                                                             | Wait until element has a Leafer instance                                                                                                                                                                                              |
| Data                                                                                                                                                             |                                                                                                                                                                                                                                       |
| [set()](../UI/data.md#set-data-iuiinputdata-transition-itranstion)                                                                                               | Set element style with optional animation transition                                                                                                                                                                                  |
| [reset()](../UI/data.md#reset-data-iuiinputdata)                                                                                                                 | Reset element style                                                                                                                                                                                                                   |
| [get()](../UI/data.md#get-iuiinputdata)                                                                                                                          | Get stored attribute data                                                                                                                                                                                                             |
| [setAttr()](../UI/data.md#setattr-name-string-value-any)                                                                                                         | Set attribute value                                                                                                                                                                                                                   |
| [getAttr()](../UI/data.md#getattr-name-string-any)                                                                                                               | Get attribute value                                                                                                                                                                                                                   |
| [getComputedAttr()](../UI/data.md#getcomputedattr-name-string-any)                                                                                               | Get computed attribute value                                                                                                                                                                                                          |
| [clone()](../UI/clone.md)                                                                                                                                        | Clone element, optionally with new styles                                                                                                                                                                                             |
| Path                                                                                                                                                             |                                                                                                                                                                                                                                       |
| [getPath()](../UI/getPath.md)                                                                                                                                    | Get numeric path (Canvas drawing commands)                                                                                                                                                                                            |
| [getPathString()](../UI/getPathString.md)                                                                                                                        | Get string path (Canvas commands, including non-SVG commands)                                                                                                                                                                         |
| Export                                                                                                                                                           |                                                                                                                                                                                                                                       |
| [export()](../UI/export.md)                                                                                                                                      | Async export element as image/json/canvas, supports screenshot/slicing, requires export plugin                                                                                                                                        |
| [syncExport()](../UI/export.md#syncexport)                                                                                                                       | Sync export element                                                                                                                                                                                                                   |
| [toJSON()](../UI/json.md)                                                                                                                                        | Export JSON object                                                                                                                                                                                                                    |
| [toString()](../UI/json.md#tostring-options-ijsonoptions-string)                                                                                                 | Export JSON string                                                                                                                                                                                                                    |
| Remove                                                                                                                                                           |                                                                                                                                                                                                                                       |
| [remove()](../UI/remove.md)                                                                                                                                      | Remove current element                                                                                                                                                                                                                |
| [destroy()](../UI/destroy.md)                                                                                                                                    | Destroy current element                                                                                                                                                                                                               |

### Static Methods

| Name                                       | Description                              |
| ------------------------------------------ | ---------------------------------------- |
| [changeAttr()](../UI/custom/changeAttr.md) | Modify default attribute values globally |
| [addAttr()](../UI/custom/addAttr.md)       | Add new attributes globally              |

##

# Classification

We also provide a simple classification system to help you quickly understand the structure of the API, as shown below:

## 🎞️ Data

### id / name

[id](../UI/id.md)     [tag](../UI/tag.md)     [name](../UI/name.md)     [className](../UI/className.md)     [innerId](../UI/innerId.md)     [innerName](../UI/innerName.md)

### parent / leafer

[parent](../UI/parent.md)     [leafer](../UI/leafer.md)

### Data / Clone

[data](../UI/data.md)     [proxyData](../UI/proxy.md)     [clone()](../UI/clone.md)

### Path data

[getPath()](../UI/getPath.md)     [getPathString()](../UI/getPathString.md)     [path](../UI/path.md)

### Import / Export

[export()](../UI/export.md)     [toJSON()](../UI/json.md)     [toString](../UI/json.md#tostring-string)

### Remove / Destroy

[remove()](../UI/remove.md)     [destroy()](../UI/destroy.md)

## 📐 Layout

### Position / Scale / Rotation

[position](../UI/position.md)     [size](../UI/size.md)     [scale](../UI/scale.md)     [flip()](../UI/flip.md)     [rotation](../UI/rotation.md)     [skew](../UI/skew.md)

### Offset / resize

[offset](../UI/offset.md)     [resize](../UI/resize.md)

### Pivot / Center

[origin](../UI/origin.md)     [around](../UI/around.md)

### Bounds / Transform

[bounds](../UI/bounds.md)     [transform](../UI/transform.md)

### Coordinate conversion

[Coordinate conversion](../UI/point/index.md)     [Fast conversion](../UI/point/high.md)

### Layering / Placement

[zIndex](../UI/zIndex.md)     [dropTo()](../UI/dropTo.md)

## 🏼 Appearance

### Opacity / Visibility

[opacity](../UI/opacity.md)     [visible](../UI/visible.md)

### Fill / Stroke

[fill](../UI/fill.md)     [stroke](../UI/stroke.md)

### Gradients / Images

[linear](../UI/paint/linear.md)     [radial](../UI/paint/radial.md)     [angular](../UI/paint/angular.md)     [solid](../UI/paint/solid.md)     [image](../UI/paint/image.md)

### Inner / Outer Shadow

[shadow](../UI/shadow.md)     [innerShadow](../UI/innerShadow.md)

### Dim / Highlight

[dim](../UI/dim.md)     [bright](../UI/bright.md)

### Clip / Erase

[clip](../UI/clip.md)     [mask](../UI/mask.md)     [eraser](../UI/eraser.md)

### Blend mode

[blendMode](../UI/blendMode.md)

## 🖱 Interaction

### Interactivity

[hittable](../UI/hit.md)     [hitChildren](../UI/hitChildren.md)     [hitSelf](../UI/hitSelf.md)     [hitFill](../UI/hitFill.md)     [hitStroke](../UI/hitStroke.md)

### Edit / Drag

[editable](../UI/editable.md)     [draggable](../UI/draggable.md)

### Cursor style

[cursor](../UI/cursor.md)

### Interaction states

[state](../UI/state/state.md)     [hover](../UI/state/hover.md)     [press](../UI/state/press.md)     [focus](../UI/state/focus.md)     [selected](../UI/state/selected.md)     [disabled](../UI/state/disabled.md)

### Event handling

[on() / once()](../UI/on.md)     [off()](../UI/off.md)     [emit()](../UI/emit.md)     [Naming](../event/name.md)     [Capture / Bubble](../event/flow.md)     [Simulated interaction](../event/simulation.md)

## 🐆 Animation

### Animation

[animation](../UI/animation.md)     [animate()](../UI/animate.md)

### Transition

[transition](../UI/transition.md)

### Motion path

[motionPath](../UI/motionPath.md)     [motion](../UI/motion.md)     [getMotionTotal()](../UI/getMotionTotal.md)     [getMotionPoint()](../UI/getMotionPoint.md)

## 🌴 Advanced

### Drag constraints

[dragBounds](../UI/dragBounds.md)

### Force rendering

[forceUpdate()](../UI/forceUpdate.md)     [updateLayout()](../UI/forceUpdate.md#updatelayout)     [forceRender()](../UI/forceRender.md)     [nextRender()](../UI/nextRender.md)

### Search / Picking

[find()](../UI/find.md)     [findOne()](../UI/findOne.md)     [pick()](../UI/pick.md)

### Custom properties

[changeAttr()](../UI/custom/changeAttr.md)     [addAttr()](../UI/custom/addAttr.md)
