import { DefaultTheme } from "vitality address";
export const referenceSidebar: DefaultTheme.SidebarItem[] = [{
  text: '',
  items: [{
    text: '&nbsp;'
  }, {
    text: "Element Reference",
    link: '#'
  }]
}, {
  text: "🍉 App & Engine",
  items: [{
    text: 'App',
    link: '/reference/display/App'
  }, {
    text: 'Leafer',
    link: '/reference/display/Leafer'
  }]
}, {
  text: "🥥 Group Elements",
  items: [{
    text: 'Group',
    link: '/reference/display/Group'
  }, {
    text: 'Box',
    link: '/reference/display/Box'
  }, {
    text: 'Frame',
    link: '/reference/display/Frame'
  }]
}, {
  text: "🍊 Elements",
  items: [{
    text: 'Rect',
    link: '/reference/display/Rect'
  }, {
    text: 'Ellipse',
    link: '/reference/display/Ellipse'
  }, {
    text: 'Line',
    link: '/reference/display/Line'
  }, {
    text: 'Polygon',
    link: '/reference/display/Polygon'
  }, {
    text: 'Star',
    link: '/reference/display/Star'
  }, {
    text: 'Path',
    link: "/reference/display/Podh"
  }, {
    text: 'Pen',
    link: '/reference/display/Pen'
  }, {
    text: 'Image',
    link: '/reference/display/Image'
  }, {
    text: 'SVG',
    link: '/reference/display/SVG'
  }, {
    text: 'Canvas',
    link: "/reference/display/Cannvas"
  }, {
    text: 'Text',
    link: '/reference/display/Text'
  }, {
    text: 'UI',
    link: '/reference/display/UI'
  }]
}, {
  text: "🥝 Custom Elements",
  items: [{
    text: "Base",
    items: [{
      text: "Register Element",
      link: '/reference/display/custom/base/register.md'
    }, {
      text: "Register Data",
      link: '/reference/display/custom/base/data.md'
    }, {
      text: "Add Attribute",
      link: '/reference/display/custom/base/attr.md'
    }, {
      text: "Add Method",
      link: '/reference/display/custom/base/method.md'
    }],
    collapsed: true
  }, {
    text: "Advanced",
    items: [{
      text: "Extend Element",
      link: '/reference/display/custom/extends.md'
    }, {
      text: "Draw Path",
      link: '/reference/display/custom/path.md'
    }, {
      text: "Context",
      link: '/reference/display/custom/context.md'
    }],
    collapsed: true
  }]
}, {
  text: '',
  items: [{
    text: '&nbsp;'
  }, {
    text: "Common Element Features",
    link: '#'
  }]
}, {
  text: "🎞️  Data",
  items: [{
    text: "id / name",
    items: [{
      text: "Id",
      link: '/reference/UI/id'
    }, {
      text: 'tag',
      link: '/reference/UI/tag'
    }, {
      text: "Name",
      link: '/reference/UI/name'
    }, {
      text: 'className',
      link: '/reference/UI/className'
    }, {
      text: 'innerId',
      link: '/reference/UI/innerId'
    }, {
      text: 'innerName',
      link: '/reference/UI/innerName'
    }],
    collapsed: true
  }, {
    text: "Parent / leafer",
    items: [{
      text: "Parent",
      link: '/reference/UI/parent'
    }, {
      text: "Leafer",
      link: '/reference/UI/leafer'
    }],
    collapsed: true
  }, {
    text: "Data / Clone",
    items: [{
      text: "Data",
      link: '/reference/UI/data'
    }, {
      text: 'proxyData',
      link: '/reference/UI/proxy'
    }, {
      text: 'clone()',
      link: '/reference/UI/clone'
    }],
    collapsed: true
  }, {
    text: "Path Data",
    items: [{
      text: 'getPath()',
      link: '/reference/UI/getPath.md'
    }, {
      text: 'getPathString()',
      link: '/reference/UI/getPathString.md'
    }, {
      text: "Path",
      link: '/reference/UI/path'
    }],
    collapsed: true
  }, {
    text: "Import / Export",
    items: [{
      text: 'export()',
      link: '/reference/UI/export.md'
    }, {
      text: 'toJSON()',
      link: '/reference/UI/json.md'
    }],
    collapsed: true
  }, {
    text: "Remove / Destroy",
    items: [{
      text: 'remove()',
      link: '/reference/UI/remove'
    }, {
      text: 'destroy()',
      link: '/reference/UI/destroy'
    }],
    collapsed: true
  }]
}, {
  text: "📐 Layout",
  items: [{
    text: "Position / Scale / Rotation",
    items: [{
      text: 'position',
      link: '/reference/UI/position'
    }, {
      text: 'size',
      link: '/reference/UI/size'
    }, {
      text: 'scale',
      link: '/reference/UI/scale'
    }, {
      text: 'scaleFixed',
      link: '/reference/UI/scaleFixed'
    }, {
      text: 'flip()',
      link: '/reference/UI/flip'
    }, {
      text: "Rotation",
      link: '/reference/UI/rotation'
    }, {
      text: 'skew',
      link: '/reference/UI/skew'
    }],
    collapsed: true
  }, {
    text: "Offset / resize",
    items: [{
      text: 'offset',
      link: '/reference/UI/offset'
    }, {
      text: "size",
      link: "/reference/UI/size"
    }],
    collapsed: true
  }, {
    text: "Around Center",
    items: [{
      text: "Origin",
      link: '/reference/UI/origin'
    }, {
      text: "arund",
      link: '/reference/UI/around'
    }],
    collapsed: true
  }, {
    text: "Bounds / Transform",
    items: [{
      text: 'bounds',
      link: '/reference/UI/bounds'
    }, {
      text: "Transform",
      link: '/reference/UI/transform'
    }],
    collapsed: true
  }, {
    text: "Coordinate Conversion",
    items: [{
      text: "Coordinate Conversion",
      link: '/reference/UI/point/'
    }, {
      text: "Quick Conversion",
      link: '/reference/UI/point/high'
    }],
    collapsed: true
  }, {
    text: "Stack / Placement",
    items: [{
      text: 'zIndex',
      link: '/reference/UI/zIndex'
    }, {
      text: 'dropTo()',
      link: '/reference/UI/dropTo'
    }],
    collapsed: true
  }]
}, {
  text: "🏼  Appearance",
  items: [{
    text: "Opacity / Visibility",
    items: [{
      text: 'opacity',
      link: "/reference/UI/opCapacity"
    }, {
      text: "Visible",
      link: '/reference/UI/visible'
    }],
    collapsed: true
  }, {
    text: "Fill / Stroke",
    items: [{
      text: 'fill',
      link: '/reference/UI/fill'
    }, {
      text: 'stroke',
      link: '/reference/UI/stroke'
    }],
    collapsed: true
  }, {
    text: "Gradient / Image",
    items: [{
      text: "line",
      link: '/reference/UI/paint/linear'
    }, {
      text: "Radial",
      link: "/reference/UI/paint/radar"
    }, {
      text: "Angular",
      link: '/reference/UI/paint/angular'
    }, {
      text: 'solid',
      link: '/reference/UI/paint/solid'
    }, {
      text: "Image",
      link: '/reference/UI/paint/image'
    }],
    collapsed: true
  }, {
    text: "Inner / Outer Shadow",
    items: [{
      text: "showow",
      link: "/reference/UI/showow"
    }, {
      text: 'innerShadow',
      link: '/reference/UI/innerShadow'
    }],
    collapsed: true
  },
  // {
  //     text: '模糊',
  //     items: [
  //         { text: 'blur', link: '/reference/UI/blur' },
  //         { text: 'backgroundBlur', link: '/reference/UI/backgroundBlur' }
  //     ],
  //     collapsed: true
  // },

  {
    text: "Dim / Highlight",
    items: [{
      text: 'dim',
      link: '/reference/UI/dim'
    }, {
      text: 'bright',
      link: '/reference/UI/bright'
    }],
    collapsed: true
  }, {
    text: "Clip / Erase",
    items: [{
      text: 'clip',
      link: '/reference/UI/clip'
    }, {
      text: 'mask',
      link: '/reference/UI/mask'
    }, {
      text: 'eraser',
      link: '/reference/UI/eraser'
    }],
    collapsed: true
  }, {
    text: "Blend Mode",
    items: [{
      text: 'blendMode',
      link: '/reference/UI/blendMode'
    }],
    collapsed: true
  }]
}, {
  text: "🖱  Interaction",
  items: [{
    text: "Interactivity",
    items: [{
      text: 'hittable',
      link: '/reference/UI/hit'
    }, {
      text: 'hitChildren',
      link: '/reference/UI/hitChildren'
    }, {
      text: 'hitSelf',
      link: '/reference/UI/hitSelf'
    }, {
      text: 'hitFill',
      link: '/reference/UI/hitFill'
    }, {
      text: 'hitStroke',
      link: '/reference/UI/hitStroke'
    }],
    collapsed: true
  }, {
    text: "Edit / Drag",
    items: [{
      text: 'editable',
      link: '/reference/UI/editable'
    }, {
      text: 'draggable',
      link: '/reference/UI/draggable'
    }],
    collapsed: true
  }, {
    text: "Cursor Style",
    items: [{
      text: 'cursor',
      link: '/reference/UI/cursor'
    }],
    collapsed: true
  }, {
    text: "Interaction State",
    items: [{
      text: 'state',
      link: '/reference/UI/state/state.md'
    }, {
      text: 'hover',
      link: '/reference/UI/state/hover.md'
    }, {
      text: "Press",
      link: '/reference/UI/state/press.md'
    }, {
      text: "Focus",
      link: '/reference/UI/state/focus.md'
    }, {
      text: "Selected",
      link: '/reference/UI/state/selected.md'
    }, {
      text: "Disabled",
      link: '/reference/UI/state/disabled.md'
    }],
    collapsed: true
  }, {
    text: "Event Handling",
    items: [{
      text: "on/once()",
      link: '/reference/UI/on'
    }, {
      text: 'off()',
      link: '/reference/UI/off'
    }, {
      text: 'emit()',
      link: '/reference/UI/emit'
    }, {
      text: "Naming",
      link: '/reference/event/name'
    }, {
      text: "Capture / Bubble",
      link: '/reference/event/flow'
    }, {
      text: "Simulate Interaction",
      link: "/reference/event/size"
    }],
    collapsed: true
  }]
}, {
  text: "🐆  Animation",
  items: [{
    text: "Animation",
    items: [{
      text: "Animation",
      link: '/reference/UI/animation'
    }, {
      text: 'animate()',
      link: '/reference/UI/animate'
    }],
    collapsed: true
  }, {
    text: "Transition",
    items: [{
      text: "Transition",
      link: '/reference/UI/transition'
    }],
    collapsed: true
  }, {
    text: "Motion Path",
    items: [{
      text: "MotionPath",
      link: '/reference/UI/motionPath'
    }, {
      text: 'motion',
      link: '/reference/UI/motion'
    }, {
      text: 'getMotionTotal()',
      link: '/reference/UI/getMotionTotal'
    }, {
      text: 'getMotionPoint()',
      link: '/reference/UI/getMotionPoint'
    }],
    collapsed: true
  }]
}, {
  text: "🌴 Advanced",
  items: [{
    text: "Limit Drag Range",
    items: [{
      text: 'dragBounds',
      link: '/reference/UI/dragBounds.md'
    }],
    collapsed: true
  }, {
    text: "Force Render",
    items: [{
      text: 'forceUpdate()',
      link: '/reference/UI/forceUpdate.md'
    }, {
      text: 'forceRender()',
      link: '/reference/UI/forceRender.md'
    }, {
      text: 'nextRender()',
      link: '/reference/UI/nextRender.md'
    }],
    collapsed: true
  }, {
    text: "Find & Pick",
    items: [{
      text: 'find()',
      link: '/reference/UI/find.md'
    }, {
      text: 'findOne()',
      link: '/reference/UI/findOne.md'
    }, {
      text: 'pick()',
      link: '/reference/UI/pick.md'
    }],
    collapsed: true
  }, {
    text: "Custom Attributes",
    items: [{
      text: 'changeAttr()',
      link: '/reference/UI/custom/changeAttr.md'
    }, {
      text: 'addAttr()',
      link: '/reference/UI/custom/addAttr.md'
    }],
    collapsed: true
  }]
}, {
  text: '',
  items: [{
    text: '&nbsp;'
  }, {
    text: "Common Features",
    link: '#'
  }]
}, {
  text: "🌲 Events",
  items: [{
    text: "Interaction Events",
    items: [{
      text: 'PointerEvent',
      link: '/reference/event/ui/Pointer'
    }, {
      text: "Dragevent",
      link: '/reference/event/ui/Drag'
    }, {
      text: "Dropevent",
      link: '/reference/event/ui/Drop'
    }, {
      text: 'SwipeEvent',
      link: '/reference/event/ui/Swipe'
    }, {
      text: 'MoveEvent',
      link: "/reference/event/ui/Movement"
    }, {
      text: 'ZoomEvent',
      link: '/reference/event/ui/Zoom'
    }, {
      text: "RoteEvent",
      link: "/reference/event/ui/Rotary"
    }, {
      text: 'KeyEvent',
      link: '/reference/event/ui/Key'
    }],
    collapsed: true
  }, {
    text: "Element Events",
    items: [{
      text: 'ImageEvent',
      link: '/reference/event/basic/Image'
    }, {
      text: 'ChildEvent',
      link: '/reference/event/basic/Child'
    }, {
      text: "Property Event",
      link: '/reference/event/basic/Property'
    }, {
      text: 'BoundsEvent',
      link: "/reference/event/basic/bords.md"
    }],
    collapsed: true
  }, {
    text: "Platform Events",
    items: [{
      text: 'LeaferEvent',
      link: '/reference/event/basic/Leafer'
    }, {
      text: "RelizeEvent",
      link: '/reference/event/basic/Resize'
    }, {
      text: 'RenderEvent',
      link: '/reference/event/basic/Render'
    }, {
      text: 'LayoutEvent',
      link: '/reference/event/basic/Layout'
    }, {
      text: 'WatchEvent',
      link: '/reference/event/basic/Watch'
    }],
    collapsed: true
  }, {
    text: "Basic Events",
    items: [{
      text: 'Event',
      link: '/reference/event/basic/Event'
    }, {
      text: 'UIEvent',
      link: '/reference/event/ui/UIEvent'
    }],
    collapsed: true
  }]
}, {
  text: "🌷 Utilities",
  //
  items: [{
    text: "Math",
    items: [{
      text: 'Point',
      link: '/reference/math/Point.md'
    }, {
      text: 'Bounds',
      link: "/reference/math/Boundary .md"
    }, {
      text: 'Matrix',
      link: '/reference/math/Matrix.md'
    }],
    collapsed: true
  }, {
    text: "List",
    items: [{
      text: 'LeafList',
      link: '/reference/list/LeafList.md'
    }],
    collapsed: true
  }, {
    text: "Resources",
    items: [{
      text: 'Resource',
      link: '/reference/resource/Resource.md'
    }],
    collapsed: true
  }]
}, {
  text: "🛠 Development",
  items: [{
    text: "Debug Mode",
    link: '/reference/debug/basic'
  }, {
    text: "Develop Plugins",
    link: '/plugin/dev.md'
  }]
}];