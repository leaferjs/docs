# Interface: IAnimateList

## Hierarchy

- [`IAnimate`](IAnimate.md)

  ↳ **`IAnimateList`**

## Implemented by

- [`AnimateList`](../classes/AnimateList.md)

## Table of contents

### Properties

- [easing](IAnimateList.md#easing)
- [delay](IAnimateList.md#delay)
- [duration](IAnimateList.md#duration)
- [ending](IAnimateList.md#ending)
- [reverse](IAnimateList.md#reverse)
- [swing](IAnimateList.md#swing)
- [loop](IAnimateList.md#loop)
- [loopDelay](IAnimateList.md#loopdelay)
- [speed](IAnimateList.md#speed)
- [join](IAnimateList.md#join)
- [jump](IAnimateList.md#jump)
- [autoplay](IAnimateList.md#autoplay)
- [attrs](IAnimateList.md#attrs)
- [innerId](IAnimateList.md#innerid)
- [\_\_captureMap](IAnimateList.md#__capturemap)
- [\_\_bubbleMap](IAnimateList.md#__bubblemap)
- [\_\_hasLocalEvent](IAnimateList.md#__haslocalevent)
- [\_\_hasWorldEvent](IAnimateList.md#__hasworldevent)
- [syncEventer](IAnimateList.md#synceventer)
- [target](IAnimateList.md#target)
- [parent](IAnimateList.md#parent)
- [keyframes](IAnimateList.md#keyframes)
- [config](IAnimateList.md#config)
- [event](IAnimateList.md#event)
- [frames](IAnimateList.md#frames)
- [style](IAnimateList.md#style)
- [fromStyle](IAnimateList.md#fromstyle)
- [toStyle](IAnimateList.md#tostyle)
- [endingStyle](IAnimateList.md#endingstyle)
- [started](IAnimateList.md#started)
- [running](IAnimateList.md#running)
- [completed](IAnimateList.md#completed)
- [destroyed](IAnimateList.md#destroyed)
- [time](IAnimateList.md#time)
- [looped](IAnimateList.md#looped)
- [realEnding](IAnimateList.md#realending)
- [list](IAnimateList.md#list)

### Methods

- [destroyEventer](IAnimateList.md#destroyeventer)
- [on](IAnimateList.md#on)
- [off](IAnimateList.md#off)
- [on\_](IAnimateList.md#on_)
- [off\_](IAnimateList.md#off_)
- [once](IAnimateList.md#once)
- [emit](IAnimateList.md#emit)
- [emitEvent](IAnimateList.md#emitevent)
- [hasEvent](IAnimateList.md#hasevent)
- [init](IAnimateList.md#init)
- [play](IAnimateList.md#play)
- [pause](IAnimateList.md#pause)
- [stop](IAnimateList.md#stop)
- [seek](IAnimateList.md#seek)
- [kill](IAnimateList.md#kill)
- [destroy](IAnimateList.md#destroy)
- [updateList](IAnimateList.md#updatelist)
- [onChildEvent](IAnimateList.md#onchildevent)

## Properties

### easing

• `Optional` **easing**: [`IAnimateEasing`](../modules.md#ianimateeasing)

#### Inherited from

[IAnimate](IAnimate.md).[easing](IAnimate.md#easing)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:6](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L6)

___

### delay

• `Optional` **delay**: `number`

#### Inherited from

[IAnimate](IAnimate.md).[delay](IAnimate.md#delay)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:8](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L8)

___

### duration

• `Optional` **duration**: `number`

#### Inherited from

[IAnimate](IAnimate.md).[duration](IAnimate.md#duration)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:9](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L9)

___

### ending

• `Optional` **ending**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Inherited from

[IAnimate](IAnimate.md).[ending](IAnimate.md#ending)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:10](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L10)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[reverse](IAnimate.md#reverse)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:12](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L12)

___

### swing

• `Optional` **swing**: `number` \| `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[swing](IAnimate.md#swing)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L13)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[loop](IAnimate.md#loop)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L15)

___

### loopDelay

• `Optional` **loopDelay**: `number`

#### Inherited from

[IAnimate](IAnimate.md).[loopDelay](IAnimate.md#loopdelay)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:16](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L16)

___

### speed

• `Optional` **speed**: `number`

#### Inherited from

[IAnimate](IAnimate.md).[speed](IAnimate.md#speed)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:18](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L18)

___

### join

• `Optional` **join**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[join](IAnimate.md#join)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L20)

___

### jump

• `Optional` **jump**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[jump](IAnimate.md#jump)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:21](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L21)

___

### autoplay

• `Optional` **autoplay**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[autoplay](IAnimate.md#autoplay)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L22)

___

### attrs

• `Optional` **attrs**: `string`[]

#### Inherited from

[IAnimate](IAnimate.md).[attrs](IAnimate.md#attrs)

#### Defined in

[src/leafer/packages/interface/src/animate/ITransition.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/animate/ITransition.ts#L24)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IAnimate](IAnimate.md).[innerId](IAnimate.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IAnimate](IAnimate.md).[__captureMap](IAnimate.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IAnimate](IAnimate.md).[__bubbleMap](IAnimate.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[__hasLocalEvent](IAnimate.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[__hasWorldEvent](IAnimate.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L45)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](IEventer.md)

#### Inherited from

[IAnimate](IAnimate.md).[syncEventer](IAnimate.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/interface/src/event/IEventer.ts#L46)

___

### target

• **target**: [`IObject`](IObject.md) \| [`IUI`](IUI.md)

#### Inherited from

[IAnimate](IAnimate.md).[target](IAnimate.md#target)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:58](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L58)

___

### parent

• `Optional` **parent**: [`IAnimateList`](IAnimateList.md)

#### Inherited from

[IAnimate](IAnimate.md).[parent](IAnimate.md#parent)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:59](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L59)

___

### keyframes

• **keyframes**: [`IKeyframe`](../modules.md#ikeyframe)[]

#### Inherited from

[IAnimate](IAnimate.md).[keyframes](IAnimate.md#keyframes)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:61](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L61)

___

### config

• `Optional` **config**: [`IAnimateOptions`](IAnimateOptions.md)

#### Inherited from

[IAnimate](IAnimate.md).[config](IAnimate.md#config)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:62](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L62)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IAnimate](IAnimate.md).[event](IAnimate.md#event)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:63](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L63)

___

### frames

• `Readonly` **frames**: [`IComputedKeyframe`](IComputedKeyframe.md)[]

#### Inherited from

[IAnimate](IAnimate.md).[frames](IAnimate.md#frames)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:65](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L65)

___

### style

• `Readonly` **style**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IAnimate](IAnimate.md).[style](IAnimate.md#style)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:67](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L67)

___

### fromStyle

• `Readonly` **fromStyle**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IAnimate](IAnimate.md).[fromStyle](IAnimate.md#fromstyle)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:68](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L68)

___

### toStyle

• `Readonly` **toStyle**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IAnimate](IAnimate.md).[toStyle](IAnimate.md#tostyle)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:69](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L69)

___

### endingStyle

• `Readonly` **endingStyle**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IAnimate](IAnimate.md).[endingStyle](IAnimate.md#endingstyle)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:70](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L70)

___

### started

• `Readonly` **started**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[started](IAnimate.md#started)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:72](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L72)

___

### running

• `Readonly` **running**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[running](IAnimate.md#running)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:73](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L73)

___

### completed

• `Readonly` **completed**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[completed](IAnimate.md#completed)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:74](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L74)

___

### destroyed

• `Readonly` **destroyed**: `boolean`

#### Inherited from

[IAnimate](IAnimate.md).[destroyed](IAnimate.md#destroyed)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:75](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L75)

___

### time

• `Readonly` **time**: `number`

#### Inherited from

[IAnimate](IAnimate.md).[time](IAnimate.md#time)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:77](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L77)

___

### looped

• `Readonly` **looped**: `number`

#### Inherited from

[IAnimate](IAnimate.md).[looped](IAnimate.md#looped)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:78](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L78)

___

### realEnding

• `Readonly` **realEnding**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Inherited from

[IAnimate](IAnimate.md).[realEnding](IAnimate.md#realending)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:80](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L80)

___

### list

• **list**: [`IAnimate`](IAnimate.md)[]

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:94](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L94)

## Methods

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IAnimate](IAnimate.md).[destroyEventer](IAnimate.md#destroyeventer)

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

[IAnimate](IAnimate.md).[on](IAnimate.md#on)

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

[IAnimate](IAnimate.md).[off](IAnimate.md#off)

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

[IAnimate](IAnimate.md).[on_](IAnimate.md#on_)

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

[IAnimate](IAnimate.md).[off_](IAnimate.md#off_)

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

[IAnimate](IAnimate.md).[once](IAnimate.md#once)

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

[IAnimate](IAnimate.md).[emit](IAnimate.md#emit)

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

[IAnimate](IAnimate.md).[emitEvent](IAnimate.md#emitevent)

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

[IAnimate](IAnimate.md).[hasEvent](IAnimate.md#hasevent)

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

#### Inherited from

[IAnimate](IAnimate.md).[init](IAnimate.md#init)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:82](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L82)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Inherited from

[IAnimate](IAnimate.md).[play](IAnimate.md#play)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:84](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L84)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Inherited from

[IAnimate](IAnimate.md).[pause](IAnimate.md#pause)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:85](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L85)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IAnimate](IAnimate.md).[stop](IAnimate.md#stop)

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

#### Inherited from

[IAnimate](IAnimate.md).[seek](IAnimate.md#seek)

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

#### Inherited from

[IAnimate](IAnimate.md).[kill](IAnimate.md#kill)

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

#### Inherited from

[IAnimate](IAnimate.md).[destroy](IAnimate.md#destroy)

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:90](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L90)

___

### updateList

▸ **updateList**(`animation?`, `isTemp?`): `void`

#### Parameters

| Name         | Type                                                                                                                                                                                |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animation?` | [`IAnimate`](IAnimate.md)[] \\| [`IAnimation`](../modules.md#ianimation)[] |
| `isTemp?`    | `boolean`                                                                                                                                                                           |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:95](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L95)

___

### onChildEvent

▸ **onChildEvent**(`type`, `_animate`): `void`

#### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `type`     | `string`                  |
| `_animate` | [`IAnimate`](IAnimate.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IAnimation.ts:96](https://github.com/leaferjs/leafer-ui/blob/88373cdd6f1051b44f1295f2d1866778d0675b15/packages/interface/src/IAnimation.ts#L96)
