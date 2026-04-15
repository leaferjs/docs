# UI Element

The base element (root class of all elements), exposing all common properties and methods shared by every UI component.

In addition to the API list, we also provide a simple [categorization system](#categories) to help you quickly understand the structure of the API.

## 📃 API

### All Properties

| Name                                                                        | Description                                                               |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Identity**                                                                |                                                                           |
| [id](../UI/id.md)                                                           | Unique element id                                                         |
| [tag](../UI/tag.md)                                                         | Element tag name (class name of the element)                              |
| [name](../UI/name.md)                                                       | Element name                                                              |
| [className](../UI/className.md)                                             | Category name, currently supports only one value                          |
| [innerId](../UI/innerId.md)                                                 | Runtime-generated temporary id (incremental), not for persistent storage  |
| [innerName](../UI/innerName.md)                                             | Runtime-generated temporary name for quick element identification         |
| **Layout**                                                                  |                                                                           |
| [x](../UI/position.md#x-number)                                             | X-axis position                                                           |
| [y](../UI/position.md#y-number)                                             | Y-axis position                                                           |
| [width](../UI/size.md#width-number)                                         | Width                                                                     |
| [height](../UI/size.md#height-number)                                       | Height                                                                    |
| [isAutoWidth](../UI/size.md#isautowidth-boolean)                            | Whether width is auto-calculated                                          |
| [isAutoHeight](../UI/size.md#isautoheight-boolean)                          | Whether height is auto-calculated                                         |
| [lockRatio](../UI/resize.md#lockratio-boolean)                              | Lock aspect ratio (requires resize plugin)                                |
| [scaleX](../UI/scale.md#scalex-number)                                      | X-axis scale (negative = mirror X)                                        |
| [scaleY](../UI/scale.md#scaley-number)                                      | Y-axis scale (negative = mirror Y)                                        |
| [scaleFixed](../UI/scaleFixed.md)                                           | Fixed global scale (not affected by zoom)                                 |
| [scale](../UI/scale.md#scale)                                               | Get/set scaleX and scaleY together                                        |
| [rotation](../UI/rotation.md)                                               | Rotation angle (see [Math rotation](../interface/math/Math.md#rotation))  |
| [skewX](../UI/skew.md#skewx-number)                                         | X-axis skew angle                                                         |
| [skewY](../UI/skew.md#skewy-number)                                         | Y-axis skew angle                                                         |
| [offsetX](../UI/offset.md#offsetx-number)                                   | X-axis offset                                                             |
| [offsetY](../UI/offset.md#offsety-number)                                   | Y-axis offset                                                             |
| [origin](../UI/origin.md)                                                   | Transform origin (same as CSS transform-origin)                           |
| [around](../UI/around.md)                                                   | Anchor-based positioning (similar to game engine anchors)                 |
| **Bounds**                                                                  |                                                                           |
| [boxBounds](../UI/bounds.md#boxbounds-iboundsdata)                          | Basic bounds in inner coordinate system (OBB)                             |
| [renderBounds](../UI/bounds.md#renderbounds-iboundsdata)                    | Render bounds in inner coordinate system (AABB)                           |
| [worldBoxBounds](../UI/bounds.md#worldboxbounds-iboundsdata)                | Basic bounds in world coordinates (AABB)                                  |
| [worldRenderBounds](../UI/bounds.md#worldrenderbounds-iboundsdata)          | Render bounds in world coordinates (AABB)                                 |
| [renderSpread](../UI/bounds.md#renderspread-ifournumber)                    | Expands render bounds to prevent rendering artifacts (e.g. text glitches) |
| **Transform**                                                               |                                                                           |
| [worldTransform](../UI/transform.md#worldtransform-imatrixwithscaledata)    | World transformation matrix (includes scale)                              |
| [localTransform](../UI/transform.md#localtransform-imatrixdata)             | Local transformation matrix relative to parent                            |
| **Appearance**                                                              |                                                                           |
| [zIndex](../UI/zIndex.md)                                                   | Stacking order within parent                                              |
| [opacity](../UI/opacity.md)                                                 | Opacity                                                                   |
| [worldOpacity](../UI/opacity.md)                                            | Global opacity (affected by parent)                                       |
| [visible](../UI/visible.md)                                                 | Visibility toggle                                                         |
| [fill](../UI/fill.md)                                                       | Fill color/style (supports solid, gradient, image, etc.)                  |
| [stroke](../UI/stroke.md)                                                   | Stroke style (supports multiple types and stacking)                       |
| [strokeAlign](../UI/stroke.md#strokealign-strokealign)                      | Stroke alignment                                                          |
| [strokeWidth](../UI/stroke.md#strokewidth-number)                           | Stroke width                                                              |
| [strokeScaleFixed](../UI/stroke.md#strokescalefixed-zoom-in-number-boolean) | Fix stroke width during zoom                                              |
| [strokeCap](../UI/stroke.md#strokecap-strokecap)                            | Stroke line cap style                                                     |
| [strokeJoin](../UI/stroke.md#strokejoin-strokejoin)                         | Stroke join style                                                         |
| [dashPattern](../UI/stroke.md#dashpattern-number)                           | Dashed line pattern                                                       |
| [dashOffset](../UI/stroke.md#dashoffset-number)                             | Dash offset                                                               |
| [shadow](../UI/shadow.md)                                                   | Outer shadow (supports multiple shadows)                                  |
| [innerShadow](../UI/innerShadow.md)                                         | Inner shadow (supports multiple shadows)                                  |
| [dim](../UI/dim.md)                                                         | Dim effect (requires bright plugin)                                       |
| [dimskip](../UI/dim.md)                                                     | Skip dimming (highlight element)                                          |
| [bright](../UI/bright.md)                                                   | Highlight and bring element to front                                      |
| [mask](../UI/mask.md)                                                       | Set element as mask                                                       |
| [eraser](../UI/eraser.md)                                                   | Set element as eraser                                                     |
| [blendMode](../UI/blendMode.md)                                             | Blend mode                                                                |
| **Interaction**                                                             |                                                                           |
| [hittable](../UI/hit.md)                                                    | Whether element responds to pointer events                                |
| [hitChildren](../UI/hitChildren.md)                                         | Control child hit behavior                                                |
| [hitSelf](../UI/hitSelf.md)                                                 | Control self hit behavior                                                 |
| [hitFill](../UI/hitFill.md)                                                 | Hit detection for fill (supports pixel-level detection)                   |
| [hitStroke](../UI/hitStroke.md)                                             | Hit detection for stroke                                                  |
| [editable](../UI/editable.md)                                               | Enable editing (requires editor plugin)                                   |
| [draggable](../UI/draggable.md)                                             | Enable dragging                                                           |
| [dragBounds](../UI/dragBounds.md)                                           | Drag constraint area                                                      |
| [dragBoundsType](../UI/dragBounds.md#dragboundstype-idragboundstype)        | Drag constraint type                                                      |
| [cursor](../UI/cursor.md)                                                   | Cursor style on hover (CSS cursor supported)                              |
| **State**                                                                   |                                                                           |
| [states](../UI/state/state.md#states-istates)                               | Predefined states (requires state plugin)                                 |
| [state](../UI/state/state.md#state-string)                                  | Current state                                                             |
| [button](../UI/state/state.md#button-boolean)                               | Enable button behavior (auto sync states)                                 |
| [hoverStyle](../UI/state/hover.md#hoverstyle-iuiinputdata)                  | Hover style                                                               |
| [pressStyle](../UI/state/press.md#pressstyle-iuiinputdata)                  | Press style                                                               |
| [focusStyle](../UI/state/focus.md#focusstyle-iuiinputdata)                  | Focus style                                                               |
| [selected](../UI/state/selected.md#selected-boolean)                        | Selected state                                                            |
| [selectedStyle](../UI/state/selected.md#selectedstyle-iuiinputdata)         | Selected style                                                            |
| [disabled](../UI/state/disabled.md#disabled-boolean)                        | Disabled state                                                            |
| [disabledStyle](../UI/state/disabled.md#disabledstyle-iuiinputdata)         | Disabled style                                                            |
| **Animation**                                                               |                                                                           |
| [animation](../UI/animation.md)                                             | Animation system (timeline, keyframes, etc.)                              |
| [transition](../UI/transition.md)                                           | Enter transition                                                          |
| [transitionOut](../UI/transition.md)                                        | Exit transition                                                           |
| [motionPath](../UI/motionPath.md)                                           | Motion path                                                               |
| [motionPrecision](../UI/motionPath.md)                                      | Motion sampling precision                                                 |
| [motion](../UI/motion.md)                                                   | Position on motion path                                                   |
| [motionRotation](../UI/motion.md)                                           | Rotation offset along motion path                                         |
| **Relation**                                                                |                                                                           |
| [parent](../UI/parent.md)                                                   | Parent element                                                            |
| [leafer](../UI/leafer.md)                                                   | Leafer engine instance                                                    |
| [app](../UI/leafer.md#app-app-leafer)                                       | App instance (root)                                                       |
| [isLeafer](../UI/leafer.md#isleafer-boolean)                                | Whether element is Leafer root                                            |
| [leaferIsCreated](../UI/leafer.md#leaferiscreated-boolean)                  | Engine creation completed                                                 |
| [leaferIsReady](../UI/leafer.md#leaferisready-boolean)                      | Engine ready (first layout done)                                          |
| [zoomLayer](../UI/leafer.md#zoomlayer-group)                                | Zoom/pan layer                                                            |
| **Data**                                                                    |                                                                           |
| [data](../UI/data.md)                                                       | User-defined data object                                                  |
| [\_\_](../UI/data.md#iuiinputdata)                                          | Internal data instance                                                    |
| [proxyData](../UI/proxy.md)                                                 | Reactive proxy for frameworks                                             |
| [path](../UI/path.md)                                                       | Path data (SVG/Canvas commands supported)                                 |

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
