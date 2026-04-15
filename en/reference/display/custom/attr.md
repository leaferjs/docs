# Properties

UI data properties are reactive. By monitoring property changes, features such as automatic layout and partial rendering are implemented.

### Force Update Property

You can force-update a specific property by calling the `__updateAttr()` method to notify changes.

```ts
public __updateAttr(attrName: string): void {
  if (this.root) {
    const value = this.__.__getInput(attrName)
    this.root.emitEvent(
      new AttrEvent(AttrEvent.CHANGE, this, attrName, value, value)
    )
  }
}
```

### Accessing Properties

To support future extensible semantic properties, data is divided into input data, intermediate data, and computed data.

##### Input Data

```ts
this.width = '10px'

console.log(this.width) // '10px'
console.log(this.__.__input.width) // '10px'
```

##### Intermediate Data

Mainly used for percentage units, etc., which depend on parent object computation results.

```ts
this.width = '70%'

console.log(this.width) // '70%'
console.log(this.__.__middle.width) // { percent: 0.7 }
```

##### Computed Data

The final numeric converted data.

```ts
console.log(this.__.width) // 10  You can access computed data via this.__[attrName]
```

##### Data Proxy

After setting a graphic’s properties, the process goes through [data proxy](https://github.com/leaferjs/leafer/blob/main/packages/display-module/src/LeafDataProxy.ts), and is finally processed and stored by a [DataProcessor](https://github.com/leaferjs/leafer-ui/blob/main/packages/data/src/UIData.ts) instance.

```ts
this.__ = new this.__DataProcessor(this) // A data processing instance is created when initializing the UI
```

### Property Processing Types

Determining processing types allows fine-grained updates and improves performance.

You can read the source code of [decorator](https://github.com/leaferjs/leafer/blob/main/packages/decorator/src/data.ts) and [LeafLayout](https://github.com/leaferjs/leafer/blob/main/packages/layout/src/LeafLayout.ts) to understand the detailed processing logic.

##### aliasType

Alias type, used to define an alias for a property. For example, setting `alpha` as an alias of `opacity`:

```ts
  @aliasType('opacity')
  public alpha: number
```

##### dataType

Data type, generally used for properties like `id`, `name`, etc., which do not affect UI rendering.

```ts
  @dataType()
  public name: number
```

##### positionType

Position type, generally used for positioning properties such as `x`, `y`.

```ts
  @positionType(0)
  public x: number
```

##### boundsType

Bounds type, generally used for properties like `width`, `height` that affect the size of a shape. Based on `positionType`.

##### affectEventBoundsType

Event-bounds-affecting type, generally used for properties like `strokeWidth` that expand the `boxBounds`. Based on `boundsType`.

##### affectRenderBoundsType

Render-bounds-affecting type, generally used for effects such as shadows. Based on `boundsType`.

##### scaleType

Scale type, generally used for `scaleX`, `scaleY`.

##### rotationType

Rotation type, generally used for `rotation`.

##### surfaceType

Surface type. Affects the appearance of the shape but not layout, generally used for properties like `fill`.

##### opacityType

Opacity type, generally used for `opacity`, `visible`, based on `surfaceType`.

##### sortType

Sorting type, generally used for `zIndex`.

##### pathType

Path type, generally used for properties that affect path geometry, based on `boundsType`.

## Decorators

Decorators are mainly used to simplify code.

```ts
@registerUI()
export class Star extends UI implements IStar {
  @boundsType(100)
  public width: __Number

  @boundsType(100)
  public height: __Number
  // ...
}
```

In JavaScript, it can be used like this:

```js
registerUI()(Star) // class
boundsType(100)(Star.prototype, 'width') // class property
boundsType(100)(Star.prototype, 'height')
```
