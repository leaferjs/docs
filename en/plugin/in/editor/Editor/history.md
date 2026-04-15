# History

Interactive operations can be recorded by listening to the editor’s [`drag.start`](../../../../reference/event/ui/Drag.md) and [`drag.end`](../../../../reference/event/ui/Drag.md) events as the timing points for saving history states.

When manipulating graphics, multiple property changes may occur at the same time. You can listen on [app.tree](../../../../reference/display/App.md#tree-leafer) to collect changes of elements and use them for history tracking.

### [ChildEvent](../../../../reference/event/basic/Child.md)

### [PropertyEvent](../../../../reference/event/basic/Property.md)

### [DragEvent](../../../../reference/event/ui/Drag.md)
