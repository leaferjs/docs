# Interface: IAnimate

## Hierarchy

- [`IAnimateOptions`](IAnimateOptions.md)

- [`IEventer`](IEventer.md)

  ↳ **`IAnimate`**

  ↳↳ [`IAnimateList`](IAnimateList.md)

## Implemented by

- [`Animate`](../classes/Animate.md)

## Table of contents

### Properties

- [easing](IAnimate.md#easing)
- [delay](IAnimate.md#delay)
- [duration](IAnimate.md#duration)
- [ending](IAnimate.md#ending)
- [reverse](IAnimate.md#reverse)
- [swing](IAnimate.md#swing)
- [loop](IAnimate.md#loop)
- [loopDelay](IAnimate.md#loopdelay)
- [speed](IAnimate.md#speed)
- [join](IAnimate.md#join)
- [jump](IAnimate.md#jump)
- [autoplay](IAnimate.md#autoplay)
- [attrs](IAnimate.md#attrs)
- [innerId](IAnimate.md#innerid)
- [\_\_captureMap](IAnimate.md#__capturemap)
- [\_\_bubbleMap](IAnimate.md#__bubblemap)
- [\_\_hasLocalEvent](IAnimate.md#__haslocalevent)
- [\_\_hasWorldEvent](IAnimate.md#__hasworldevent)
- [syncEventer](IAnimate.md#synceventer)
- [target](IAnimate.md#target)
- [parent](IAnimate.md#parent)
- [keyframes](IAnimate.md#keyframes)
- [config](IAnimate.md#config)
- [event](IAnimate.md#event)
- [frames](IAnimate.md#frames)
- [style](IAnimate.md#style)
- [fromStyle](IAnimate.md#fromstyle)
- [toStyle](IAnimate.md#tostyle)
- [endingStyle](IAnimate.md#endingstyle)
- [started](IAnimate.md#started)
- [running](IAnimate.md#running)
- [completed](IAnimate.md#completed)
- [destroyed](IAnimate.md#destroyed)
- [time](IAnimate.md#time)
- [looped](IAnimate.md#looped)
- [realEnding](IAnimate.md#realending)

### Methods

- [destroyEventer](IAnimate.md#destroyeventer)
- [on](IAnimate.md#on)
- [off](IAnimate.md#off)
- [on\_](IAnimate.md#on_)
- [off\_](IAnimate.md#off_)
- [once](IAnimate.md#once)
- [emit](IAnimate.md#emit)
- [emitEvent](IAnimate.md#emitevent)
- [hasEvent](IAnimate.md#hasevent)
- [init](IAnimate.md#init)
- [play](IAnimate.md#play)
- [pause](IAnimate.md#pause)
- [stop](IAnimate.md#stop)
- [seek](IAnimate.md#seek)
- [kill](IAnimate.md#kill)
- [destroy](IAnimate.md#destroy)

## Properties

### easing

• `Optional` **easing**: [`IAnimateEasing`](../modules.md#ianimateeasing)

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[easing](IAnimateOptions.md#easing)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L6)

___

### delay

• `Optional` **delay**: `number`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[delay](IAnimateOptions.md#delay)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L8)

___

### duration

• `Optional` **duration**: `number`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[duration](IAnimateOptions.md#duration)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L9)

___

### ending

• `Optional` **ending**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[ending](IAnimateOptions.md#ending)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L10)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[reverse](IAnimateOptions.md#reverse)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L12)

___

### swing

• `Optional` **swing**: `number` \| `boolean`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[swing](IAnimateOptions.md#swing)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L13)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[loop](IAnimateOptions.md#loop)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L15)

___

### loopDelay

• `Optional` **loopDelay**: `number`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[loopDelay](IAnimateOptions.md#loopdelay)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L16)

___

### speed

• `Optional` **speed**: `number`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[speed](IAnimateOptions.md#speed)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L18)

___

### join

• `Optional` **join**: `boolean`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[join](IAnimateOptions.md#join)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L20)

___

### jump

• `Optional` **jump**: `boolean`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[jump](IAnimateOptions.md#jump)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L21)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[autoplay](IAnimateOptions.md#autoplay)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L22)

___

### attrs

• `Optional` **attrs**: `string`[]

#### Inherited from

[IAnimateOptions](IAnimateOptions.md).[attrs](IAnimateOptions.md#attrs)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L24)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IEventer](IEventer.md).[innerId](IEventer.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEventer](IEventer.md).[__captureMap](IEventer.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEventer](IEventer.md).[__bubbleMap](IEventer.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IEventer](IEventer.md).[__hasLocalEvent](IEventer.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IEventer](IEventer.md).[__hasWorldEvent](IEventer.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L45)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](IEventer.md)

#### Inherited from

[IEventer](IEventer.md).[syncEventer](IEventer.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L46)

___

### target

• **target**: [`IObject`](IObject.md) \| [`IUI`](IUI.md)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L58)

___

### parent

• `Optional` **parent**: [`IAnimateList`](IAnimateList.md)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L59)

___

### keyframes

• **keyframes**: [`IKeyframe`](../modules.md#ikeyframe)[]

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L61)

___

### config

• `Optional` **config**: [`IAnimateOptions`](IAnimateOptions.md)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:62](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L62)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Overrides

[IEventer](IEventer.md).[event](IEventer.md#event)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:63](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L63)

___

### frames

• `Readonly` **frames**: [`IComputedKeyframe`](IComputedKeyframe.md)[]

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L65)

___

### style

• `Readonly` **style**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:67](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L67)

___

### fromStyle

• `Readonly` **fromStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L68)

___

### toStyle

• `Readonly` **toStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:69](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L69)

___

### endingStyle

• `Readonly` **endingStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:70](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L70)

___

### started

• `Readonly` **started**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:72](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L72)

___

### running

• `Readonly` **running**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:73](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L73)

___

### completed

• `Readonly` **completed**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L74)

___

### destroyed

• `Readonly` **destroyed**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L75)

___

### time

• `Readonly` **time**: `number`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L77)

___

### looped

• `Readonly` **looped**: `number`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L78)

___

### realEnding

• `Readonly` **realEnding**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L80)

## Methods

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[destroyEventer](IEventer.md#destroyeventer)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/display/module/ILeafEventer.ts#L18)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name        | Type                                                                                                                                                                                                                              |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string` \\| `string`[] \\| [`IEventParamsMap`](IEventParamsMap.md) \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md)                                                                                                                                                                                                       |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                                                                      |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[on](IEventer.md#on)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L49)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name        | Type                                                                         |
| :---------- | :--------------------------------------------------------------------------- |
| `type?`     | `string` \\| `string`[] |
| `listener?` | [`IFunction`](IFunction.md)                                                  |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                 |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[off](IEventer.md#off)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L50)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name        | Type                                                                                                                                                                                 |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md)                                                                                                                                                          |
| `bind?`     | [`IObject`](IObject.md)                                                                                                                                                              |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                         |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Inherited from

[IEventer](IEventer.md).[on_](IEventer.md#on_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L51)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type                                                                                                                                           |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` | [`IEventListenerId`](IEventListenerId.md) \\| [`IEventListenerId`](IEventListenerId.md)[] |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[off_](IEventer.md#off_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L52)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name             | Type                                                                                                                                                                                 |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`           | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?`      | [`IFunction`](IFunction.md)                                                                                                                                                          |
| `captureOrBind?` | `boolean` \\| [`IObject`](IObject.md)                                                                                                                                               |
| `capture?`       | `boolean`                                                                                                                                                                            |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[once](IEventer.md#once)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L53)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `type`     | `string`                                           |
| `event?`   | [`IObject`](IObject.md) \\| [`IEvent`](IEvent.md) |
| `capture?` | `boolean`                                          |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[emit](IEventer.md#emit)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L54)

___

### emitEvent

▸ **emitEvent**(`event?`, `capture?`): `void`

#### Parameters

| Name       | Type                  |
| :--------- | :-------------------- |
| `event?`   | [`IEvent`](IEvent.md) |
| `capture?` | `boolean`             |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[emitEvent](IEventer.md#emitevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L55)

___

### hasEvent

▸ **hasEvent**(`type`, `capture?`): `boolean`

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `type`     | `string`  |
| `capture?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[IEventer](IEventer.md).[hasEvent](IEventer.md#hasevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L56)

___

### init

▸ **init**(`target`, `keyframe`, `options?`, `isTemp?`): `void`

#### Parameters

| Name       | Type                                                                                                                                |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `target`   | [`IObject`](IObject.md) \\| [`IUI`](IUI.md)                                                                                        |
| `keyframe` | [`IUIInputData`](IUIInputData.md) \\| [`IKeyframe`](../modules.md#ikeyframe)[] |
| `options?` | [`ITransition`](../modules.md#itransition)                                                                                          |
| `isTemp?`  | `boolean`                                                                                                                           |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:82](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L82)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L84)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L85)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:86](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L86)

___

### seek

▸ **seek**(`time`, `includeDelay?`): `void`

#### Parameters

| Name            | Type                                            |
| :-------------- | :---------------------------------------------- |
| `time`          | `number` \\| [`IPercentData`](IPercentData.md) |
| `includeDelay?` | `boolean`                                       |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:87](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L87)

___

### kill

▸ **kill**(`complete?`, `killStyle?`): `void`

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `complete?`  | `boolean`                         |
| `killStyle?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:88](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L88)

___

### destroy

▸ **destroy**(`complete?`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `complete?` | `boolean` |

#### Returns

`void`

#### Overrides

[IEventer](IEventer.md).[destroy](IEventer.md#destroy)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:90](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L90)
