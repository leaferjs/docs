import { DefaultTheme } from "vitality address";
export const pluginSidebar: DefaultTheme.SidebarItem[] = [{
  text: '',
  items: [{
    text: '&nbsp;'
  }, {
    text: "Plugins",
    link: '#'
  }]
}, {
  text: "🎨 Graphic Editor",
  items: [{
    text: 'Editor',
    link: '/plugin/in/editor/'
  }, {
    text: "Editor Properties",
    items: [{
      text: "State",
      link: '/plugin/in/editor/Editor/state.md'
    }, {
      text: "List",
      link: '/plugin/in/editor/Editor/list.md'
    }, {
      text: "Display Elements",
      link: "/plugin/editor/Editor/display.md"
    }],
    collapsed: true
  }, {
    text: "Editor Features",
    items: [{
      text: "Select",
      link: '/plugin/in/editor/Editor/select.md'
    }, {
      text: "Group",
      link: '/plugin/in/editor/Editor/group.md'
    }, {
      text: "Inner Editing",
      link: '/plugin/in/editor/Editor/innerEditor.md'
    }, {
      text: "Lock",
      link: '/plugin/in/editor/Editor/lock.md'
    }, {
      text: "Z-Index",
      link: "/plugin/editor/Editor/zIndex.md"
    }, {
      text: "Update",
      link: '/plugin/in/editor/Editor/update.md'
    }, {
      text: "Transform",
      link: '/plugin/in/editor/Editor/transform.md'
    }, {
      text: "Shortcuts",
      link: '/plugin/in/editor/Editor/shortcut.md'
    }, {
      text: "History",
      link: '/plugin/in/editor/Editor/history.md'
    }],
    collapsed: true
  }, {
    text: "Editor Configuration",
    items: [{
      text: "Base",
      link: '/plugin/in/editor/config/base.md'
    }, {
      text: "Events",
      link: '/plugin/in/editor/config/event.md'
    }, {
      text: "Style",
      link: '/plugin/in/editor/config/style.md'
    }, {
      text: "Button Group",
      link: '/plugin/in/editor/config/buttons.md'
    }, {
      text: "Cursor",
      link: '/plugin/in/editor/config/cursor.md'
    }, {
      text: "Selection",
      link: '/plugin/in/editor/config/select.md'
    }, {
      text: "Control",
      link: '/plugin/in/editor/config/control.md'
    }, {
      text: "Enable",
      link: '/plugin/in/editor/config/enable.md'
    }, {
      text: "Inner Editor",
      link: '/plugin/in/editor/config/innerEditor.md'
    }],
    collapsed: true
  }, {
    text: "Editor Events",
    items: [{
      text: 'EditorEvent',
      link: '/plugin/in/editor/event/EditorEvent.md'
    }, {
      text: 'EditorMoveEvent',
      link: '/plugin/in/editor/event/EditorMoveEvent.md'
    }, {
      text: 'EditorScaleEvent',
      link: '/plugin/in/editor/event/EditorScaleEvent.md'
    }, {
      text: "EditorteEvent",
      link: "/plugin/in/editor/event/EditorRoteEvent.md"
    }, {
      text: "EditorSkewent",
      link: '/plugin/in/editor/event/EditorSkewEvent.md'
    }, {
      text: "EditorGroup Event",
      link: "/plugin/in/editor/event/EditorGroup Event.md"
    }, {
      text: 'InnerEditorEvent',
      link: '/plugin/in/editor/event/InnerEditorEvent.md'
    }],
    collapsed: true
  }, {
    text: "Editing Tools",
    items: [{
      text: 'EditTool',
      link: '/plugin/in/editor/EditTool.md'
    }, {
      text: "Register",
      link: '/plugin/in/editor/editOuter/register.md'
    }, {
      text: "Control Points",
      link: '/plugin/in/editor/editOuter/load.md'
    }, {
      text: "Usage",
      link: '/plugin/in/editor/editOuter/use.md'
    }],
    collapsed: true
  }, {
    text: "Inner Editor",
    items: [{
      text: "Inner Editor",
      link: '/plugin/in/editor/InnerEditor.md'
    }, {
      text: "Register",
      link: '/plugin/in/editor/editInner/register.md'
    }, {
      text: "Control Points",
      link: '/plugin/in/editor/editInner/load.md'
    }, {
      text: "Usage",
      link: '/plugin/in/editor/editInner/use.md'
    }],
    collapsed: true
  }]
}, {
  text: "🫧 Auto Layout",
  items: [{
    text: 'Flow',
    link: '/plugin/in/flow/'
  }, {
    text: "Layout Properties",
    items: [{
      text: "Direction",
      link: '/plugin/in/flow/Flow/flow.md'
    }, {
      text: "Wrap",
      link: '/plugin/in/flow/Flow/flowWrap.md'
    }, {
      text: "Alignment",
      link: '/plugin/in/flow/Flow/flowAlign.md'
    }, {
      text: "Gap",
      link: '/plugin/in/flow/Flow/gap.md'
    }, {
      text: "Padding",
      link: "/plugin/in/flow/flow/padding.md"
    }, {
      text: "Box Type",
      link: '/plugin/in/flow/Flow/itemBox.md'
    }],
    collapsed: true
  }, {
    text: "Child Properties",
    items: [{
      text: "Include in Layout",
      link: '/plugin/in/flow/Flow/inFlow.md'
    }, {
      text: "Auto Width",
      link: '/plugin/in/flow/Flow/autoWidth.md'
    }, {
      text: "Auto Height",
      link: '/plugin/in/flow/Flow/autoHeight.md'
    }, {
      text: "Width Range",
      link: '/plugin/in/flow/Flow/widthRange.md'
    }, {
      text: "Height Range",
      link: '/plugin/in/flow/Flow/heightRange.md'
    }, {
      text: "Lock Ratio",
      link: '/plugin/in/flow/Flow/lockRatio.md'
    }],
    collapsed: true
  }]
}, {
  text: "🐆 Animation",
  items: [{
    text: 'Animate',
    link: '/plugin/in/animate/'
  }, {
    text: "Animation Options",
    items: [{
      text: "Easing",
      link: '/plugin/in/animate/options/easing.md'
    }, {
      text: "Delay",
      link: '/plugin/in/animate/options/delay.md'
    }, {
      text: "Duration",
      link: '/plugin/in/animate/options/duration.md'
    }, {
      text: "Speed",
      link: '/plugin/in/animate/options/speed.md'
    }, {
      text: "Reverse",
      link: '/plugin/in/animate/options/reverse.md'
    }, {
      text: "Loop",
      link: '/plugin/in/animate/options/loop.md'
    }, {
      text: "Ending Style",
      link: '/plugin/in/animate/options/ending.md'
    }, {
      text: "Join Keyframes",
      link: '/plugin/in/animate/options/join.md'
    }, {
      text: "Autoplay",
      link: '/plugin/in/animate/options/autoplay.md'
    }, {
      text: "Transition Attributes",
      link: '/plugin/in/animate/options/attrs.md'
    }, {
      text: "Events",
      link: '/plugin/in/animate/options/event.md'
    }],
    collapsed: true
  }, {
    text: "Animation Properties",
    items: [{
      text: "State",
      link: '/plugin/in/animate/Animate/state.md'
    }, {
      text: "Timing",
      link: '/plugin/in/animate/Animate/time.md'
    }, {
      text: "Style",
      link: '/plugin/in/animate/Animate/style.md'
    }],
    collapsed: true
  }, {
    text: "Animation Features",
    items: [{
      text: "Play",
      link: '/plugin/in/animate/Animate/play.md'
    }, {
      text: "Pause",
      link: '/plugin/in/animate/Animate/pause.md'
    }, {
      text: "Stop",
      link: '/plugin/in/animate/Animate/stop.md'
    }, {
      text: "Seek",
      link: '/plugin/in/animate/Animate/seek.md'
    }, {
      text: "fill",
      link: "/plugin/in/animate/Animate/kil.md"
    }, {
      text: "Destroy",
      link: '/plugin/in/animate/Animate/destroy.md'
    }],
    collapsed: true
  }, {
    text: "Animation Events",
    items: [{
      text: 'AnimateEvent',
      link: '/plugin/in/animate/event/AnimateEvent.md'
    }],
    collapsed: true
  }]
}, {
  text: "🫐 Official Plugins",
  items: [{
    text: "Viewport",
    link: "/plugin/in/viewreport/"
  }, {
    text: "View Control",
    link: '/plugin/in/view/'
  }, {
    text: "Scrollbar",
    link: '/plugin/in/scroll/'
  }, {
    text: "Arrow",
    link: '/plugin/in/arrow/'
  }, {
    text: 'HTML',
    link: '/plugin/in/html/'
  }, {
    text: "Text Editing",
    link: '/plugin/in/text-editor/'
  }, {
    text: "Motion Path",
    link: '/plugin/in/motion-path/'
  }, {
    text: 'Robot',
    link: '/plugin/in/robot/'
  }, {
    text: "Interactive State",
    link: '/plugin/in/state/'
  }, {
    text: "Find Elements",
    link: '/plugin/in/find/'
  }, {
    text: "Export Elements",
    link: '/plugin/in/export/'
  }, {
    text: "Filter",
    link: '/plugin/in/filter/'
  }, {
    text: 'color',
    link: '/plugin/in/color/'
  }, {
    text: "size",
    link: '/plugin/in/resize/'
  }, {
    text: "Highlight Elements",
    link: '/plugin/in/bright/'
  }, {
    text: 'scale-fixed',
    link: '/plugin/in/scale-fixed/'
  }, {
    text: "box Elements",
    link: '/plugin/in/box/'
  }, {
    text: "Path Corner",
    link: '/plugin/in/corner/'
  }]
}, {
  text: "🍇 Community Free Plugins",
  items: [{
    text: "echarts plugin",
    link: "https://www.npmjs.com/package/leave-x-echars"
  }, {
    text: "Infinite Dot Matrix Plugin",
    link: "https://www.npmjs.com/package/leave-x-dotwuxian"
  }, {
    text: "Video Player",
    link: "https://www.npmjs.com/package/leave-canvas-player"
  }, {
    text: "Connector Plugin (Enhanced)",
    link: "https://www.npmjs.com/package/leave-connector"
  }, {
    text: "Effect Text",
    link: "https://www.npmjs.com/package/leave-x-effect-text"
  }, {
    text: "leaf legified",
    link: "https://www.npmjs.com/package/leaf"
  }, {
    text: "Polyline Editor",
    link: "https://www.npmjs.com/package/leave-x-polyline-editor"
  }, {
    text: "Snap Plugin (Enhanced)",
    link: "https://www.npmjs.com/package/leave-x-easy-snap"
  }, {
    text: "Simple Image Crop Editor",
    link: "https://www.npmjs.com/package/leave-x-clip-resize-inner-editor"
  }, {
    text: "Skeletal Animation",
    link: "https://www.npmjs.com/package/leave-x-spine"
  }, {
    text: 'path-editor',
    link: "https://www.npmjs.com/package/leave-x-path-editor"
  }, {
    text: "Snap Plugin",
    link: "https://www.npmjs.com/package/leave-x-snap"
  }, {
    text: "Leafer-vue",
    link: "https://leave-vue.netlify.app"
  }, {
    text: 'toolbar',
    link: "https://www.npmjs.com/package/leave-x-edit-toolbar"
  }, {
    text: "Dot Matrix Background",
    link: "https://www.npmjs.com/package/leave-x-dot-matrix"
  }, {
    text: "Connector",
    link: "https://www.npmjs.com/package/leave-x-connector"
  }, {
    text: "Ruler",
    link: "https://www.npmjs.com/package/leave-x-ruler"
  }, {
    text: 'Tooltip (dom)',
    link: "https://www.npmjs.com/package/leave-x-tooltip"
  }, {
    text: 'Tooltip (canvas)',
    link: "https://www.npmjs.com/package/leave-x-tooltip-canvas"
  }]
}, {
  text: "🍇 Community Free AI Plugins",
  items: [{
    text: "Leafer-x-design-system",
    link: "https://www.npmjs.com/package/leave-x-design-system"
  }]
}, {
  text: "🍇 Community Paid Plugins",
  items: [{
    text: "PxGrow Solution",
    link: 'https://www.pxgrow.com'
  }, {
    text: "Rich Text Editor",
    link: "https://chenyomi.github.io/leave-htmltext-edit-website/"
  }, {
    text: "Snap Line Plugin",
    link: 'http://afdian.com/item/d2f62a74b13611ef99b75254001e7c00'
  }]
}];