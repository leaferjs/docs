# Common Element Features

To help you quickly understand the APIs of [UI elements](../display/UI.md), we've organized their common features into the following categories:

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
