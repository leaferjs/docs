# Class: Animate

## Hierarchy

- [`Eventer`](Eventer.md)

  ↳ **`Animate`**

  ↳↳ [`AnimateList`](AnimateList.md)

## Implements

- [`IAnimate`](../interfaces/IAnimate.md)

## Table of contents

### Constructors

- [constructor](Animate.md#constructor)

### Properties

- [target](Animate.md#target)
- [parent](Animate.md#parent)
- [keyframes](Animate.md#keyframes)
- [config](Animate.md#config)
- [style](Animate.md#style)
- [fromStyle](Animate.md#fromstyle)
- [toStyle](Animate.md#tostyle)
- [running](Animate.md#running)
- [destroyed](Animate.md#destroyed)
- [time](Animate.md#time)
- [looped](Animate.md#looped)
- [easing](Animate.md#easing)
- [delay](Animate.md#delay)
- [duration](Animate.md#duration)
- [ending](Animate.md#ending)
- [reverse](Animate.md#reverse)
- [swing](Animate.md#swing)
- [loop](Animate.md#loop)
- [loopDelay](Animate.md#loopdelay)
- [speed](Animate.md#speed)
- [autoplay](Animate.md#autoplay)
- [join](Animate.md#join)
- [jump](Animate.md#jump)
- [attrs](Animate.md#attrs)
- [killStyle](Animate.md#killstyle)
- [isTemp](Animate.md#istemp)
- [frames](Animate.md#frames)
- [nowIndex](Animate.md#nowindex)
- [frameLooped](Animate.md#framelooped)
- [frameReverse](Animate.md#framereverse)
- [easingFn](Animate.md#easingfn)
- [requestAnimateTime](Animate.md#requestanimatetime)
- [requestAnimatePageTime](Animate.md#requestanimatepagetime)
- [waitRequestRender](Animate.md#waitrequestrender)
- [playedTotalTime](Animate.md#playedtotaltime)
- [mainReverse](Animate.md#mainreverse)
- [timer](Animate.md#timer)
- [attrsMap](Animate.md#attrsmap)
- [innerId](Animate.md#innerid)
- [\_\_captureMap](Animate.md#__capturemap)
- [\_\_bubbleMap](Animate.md#__bubblemap)
- [\_\_hasLocalEvent](Animate.md#__haslocalevent)
- [\_\_hasWorldEvent](Animate.md#__hasworldevent)
- [syncEventer](Animate.md#synceventer)

### Accessors

- [endingStyle](Animate.md#endingstyle)
- [started](Animate.md#started)
- [completed](Animate.md#completed)
- [frame](Animate.md#frame)
- [frameTotalTime](Animate.md#frametotaltime)
- [nowReverse](Animate.md#nowreverse)
- [realEnding](Animate.md#realending)
- [event](Animate.md#event)

### Methods

- [init](Animate.md#init)
- [emitType](Animate.md#emittype)
- [play](Animate.md#play)
- [pause](Animate.md#pause)
- [stop](Animate.md#stop)
- [seek](Animate.md#seek)
- [kill](Animate.md#kill)
- [create](Animate.md#create)
- [changeDuration](Animate.md#changeduration)
- [setBefore](Animate.md#setbefore)
- [allocateTime](Animate.md#allocatetime)
- [startRequestAnimate](Animate.md#startrequestanimate)
- [requestAnimate](Animate.md#requestanimate)
- [animate](Animate.md#animate)
- [start](Animate.md#start)
- [begin](Animate.md#begin)
- [end](Animate.md#end)
- [complete](Animate.md#complete)
- [setFrom](Animate.md#setfrom)
- [setTo](Animate.md#setto)
- [nextFrame](Animate.md#nextframe)
- [reverseNextFrame](Animate.md#reversenextframe)
- [transition](Animate.md#transition)
- [setStyle](Animate.md#setstyle)
- [increaseTime](Animate.md#increasetime)
- [needLoop](Animate.md#needloop)
- [needStopLoop](Animate.md#needstoploop)
- [needLoopFrame](Animate.md#needloopframe)
- [clearTimer](Animate.md#cleartimer)
- [destroy](Animate.md#destroy)
- [on](Animate.md#on)
- [off](Animate.md#off)
- [on\_](Animate.md#on_)
- [off\_](Animate.md#off_)
- [once](Animate.md#once)
- [emit](Animate.md#emit)
- [emitEvent](Animate.md#emitevent)
- [hasEvent](Animate.md#hasevent)

## Constructors

### constructor

• **new Animate**(`target`, `keyframe`, `options?`, `isTemp?`): [`Animate`](Animate.md)

#### Parameters

| Name       | Type                                                                                                                                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target`   | [`IObject`](../interfaces/IObject.md) \\| [`IUI`](../interfaces/IUI.md)                                                                                                                        |
| `keyframe` | [`IAnimation`](../modules.md#ianimation) \\| [`IUIInputData`](../interfaces/IUIInputData.md) \\| [`IKeyframe`](../modules.md#ikeyframe)[] |
| `options?` | [`ITransition`](../modules.md#itransition)                                                                                                                                                      |
| `isTemp?`  | `boolean`                                                                                                                                                                                       |

#### Returns

[`Animate`](Animate.md)

#### Overrides

[Eventer](Eventer.md).[constructor](Eventer.md#constructor)

#### Defined in

[src/in/packages/animate/src/Animate.ts:114](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L114)

## Properties

### target

• **target**: [`IObject`](../interfaces/IObject.md) \| [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[target](../interfaces/IAnimate.md#target)

#### Defined in

[src/in/packages/animate/src/Animate.ts:14](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L14)

___

### parent

• `Optional` **parent**: [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[parent](../interfaces/IAnimate.md#parent)

#### Defined in

[src/in/packages/animate/src/Animate.ts:15](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L15)

___

### keyframes

• **keyframes**: [`IKeyframe`](../modules.md#ikeyframe)[]

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[keyframes](../interfaces/IAnimate.md#keyframes)

#### Defined in

[src/in/packages/animate/src/Animate.ts:17](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L17)

___

### config

• `Optional` **config**: [`IAnimateOptions`](../interfaces/IAnimateOptions.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[config](../interfaces/IAnimate.md#config)

#### Defined in

[src/in/packages/animate/src/Animate.ts:18](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L18)

___

### style

• **style**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[style](../interfaces/IAnimate.md#style)

#### Defined in

[src/in/packages/animate/src/Animate.ts:20](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L20)

___

### fromStyle

• **fromStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[fromStyle](../interfaces/IAnimate.md#fromstyle)

#### Defined in

[src/in/packages/animate/src/Animate.ts:21](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L21)

___

### toStyle

• **toStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[toStyle](../interfaces/IAnimate.md#tostyle)

#### Defined in

[src/in/packages/animate/src/Animate.ts:22](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L22)

___

### running

• **running**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[running](../interfaces/IAnimate.md#running)

#### Defined in

[src/in/packages/animate/src/Animate.ts:26](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L26)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[destroyed](../interfaces/IAnimate.md#destroyed)

#### Defined in

[src/in/packages/animate/src/Animate.ts:28](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L28)

___

### time

• **time**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[time](../interfaces/IAnimate.md#time)

#### Defined in

[src/in/packages/animate/src/Animate.ts:30](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L30)

___

### looped

• **looped**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[looped](../interfaces/IAnimate.md#looped)

#### Defined in

[src/in/packages/animate/src/Animate.ts:31](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L31)

___

### easing

• **easing**: [`IAnimateEasing`](../modules.md#ianimateeasing)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[easing](../interfaces/IAnimate.md#easing)

#### Defined in

[src/in/packages/animate/src/Animate.ts:35](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L35)

___

### delay

• **delay**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[delay](../interfaces/IAnimate.md#delay)

#### Defined in

[src/in/packages/animate/src/Animate.ts:39](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L39)

___

### duration

• **duration**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[duration](../interfaces/IAnimate.md#duration)

#### Defined in

[src/in/packages/animate/src/Animate.ts:42](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L42)

___

### ending

• **ending**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[ending](../interfaces/IAnimate.md#ending)

#### Defined in

[src/in/packages/animate/src/Animate.ts:45](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L45)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[reverse](../interfaces/IAnimate.md#reverse)

#### Defined in

[src/in/packages/animate/src/Animate.ts:49](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L49)

___

### swing

• `Optional` **swing**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[swing](../interfaces/IAnimate.md#swing)

#### Defined in

[src/in/packages/animate/src/Animate.ts:52](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L52)

___

### loop

• **loop**: `number` \| `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[loop](../interfaces/IAnimate.md#loop)

#### Defined in

[src/in/packages/animate/src/Animate.ts:55](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L55)

___

### loopDelay

• **loopDelay**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[loopDelay](../interfaces/IAnimate.md#loopdelay)

#### Defined in

[src/in/packages/animate/src/Animate.ts:58](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L58)

___

### speed

• **speed**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[speed](../interfaces/IAnimate.md#speed)

#### Defined in

[src/in/packages/animate/src/Animate.ts:62](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L62)

___

### autoplay

• **autoplay**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[autoplay](../interfaces/IAnimate.md#autoplay)

#### Defined in

[src/in/packages/animate/src/Animate.ts:65](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L65)

___

### join

• **join**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[join](../interfaces/IAnimate.md#join)

#### Defined in

[src/in/packages/animate/src/Animate.ts:68](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L68)

___

### jump

• **jump**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[jump](../interfaces/IAnimate.md#jump)

#### Defined in

[src/in/packages/animate/src/Animate.ts:71](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L71)

___

### attrs

• **attrs**: `string`[]

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[attrs](../interfaces/IAnimate.md#attrs)

#### Defined in

[src/in/packages/animate/src/Animate.ts:74](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L74)

___

### killStyle

• `Protected` **killStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Defined in

[src/in/packages/animate/src/Animate.ts:76](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L76)

___

### isTemp

• **isTemp**: `boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:78](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L78)

___

### frames

• **frames**: [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)[]

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[frames](../interfaces/IAnimate.md#frames)

#### Defined in

[src/in/packages/animate/src/Animate.ts:80](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L80)

___

### nowIndex

• `Protected` **nowIndex**: `number` = `0`

#### Defined in

[src/in/packages/animate/src/Animate.ts:82](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L82)

___

### frameLooped

• `Protected` **frameLooped**: `number`

#### Defined in

[src/in/packages/animate/src/Animate.ts:85](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L85)

___

### frameReverse

• `Protected` **frameReverse**: `boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:86](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L86)

___

### easingFn

• `Protected` **easingFn**: [`IFunction`](../interfaces/IFunction.md)

#### Defined in

[src/in/packages/animate/src/Animate.ts:88](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L88)

___

### requestAnimateTime

• `Protected` **requestAnimateTime**: `number`

#### Defined in

[src/in/packages/animate/src/Animate.ts:90](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L90)

___

### requestAnimatePageTime

• `Protected` **requestAnimatePageTime**: `number`

#### Defined in

[src/in/packages/animate/src/Animate.ts:91](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L91)

___

### waitRequestRender

• `Protected` **waitRequestRender**: `boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:92](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L92)

___

### playedTotalTime

• `Protected` **playedTotalTime**: `number` = `0`

#### Defined in

[src/in/packages/animate/src/Animate.ts:94](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L94)

___

### mainReverse

• `Protected` **mainReverse**: `boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:97](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L97)

___

### timer

• `Protected` **timer**: `any`

#### Defined in

[src/in/packages/animate/src/Animate.ts:98](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L98)

___

### attrsMap

• `Protected` **attrsMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md)

#### Defined in

[src/in/packages/animate/src/Animate.ts:99](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L99)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[innerId](../interfaces/IAnimate.md#innerid)

#### Inherited from

[Eventer](Eventer.md).[innerId](Eventer.md#innerid)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:13](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L13)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[__captureMap](../interfaces/IAnimate.md#__capturemap)

#### Inherited from

[Eventer](Eventer.md).[__captureMap](Eventer.md#__capturemap)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:15](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L15)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[__bubbleMap](../interfaces/IAnimate.md#__bubblemap)

#### Inherited from

[Eventer](Eventer.md).[__bubbleMap](Eventer.md#__bubblemap)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:17](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L17)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[__hasLocalEvent](../interfaces/IAnimate.md#__haslocalevent)

#### Inherited from

[Eventer](Eventer.md).[__hasLocalEvent](Eventer.md#__haslocalevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:19](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L19)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[__hasWorldEvent](../interfaces/IAnimate.md#__hasworldevent)

#### Inherited from

[Eventer](Eventer.md).[__hasWorldEvent](Eventer.md#__hasworldevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:20](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L20)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](../interfaces/IEventer.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[syncEventer](../interfaces/IAnimate.md#synceventer)

#### Inherited from

[Eventer](Eventer.md).[syncEventer](Eventer.md#synceventer)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:22](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L22)

## Accessors

### endingStyle

• `get` **endingStyle**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[endingStyle](../interfaces/IAnimate.md#endingstyle)

#### Defined in

[src/in/packages/animate/src/Animate.ts:23](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L23)

___

### started

• `get` **started**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[started](../interfaces/IAnimate.md#started)

#### Defined in

[src/in/packages/animate/src/Animate.ts:25](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L25)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[completed](../interfaces/IAnimate.md#completed)

#### Defined in

[src/in/packages/animate/src/Animate.ts:27](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L27)

___

### frame

• `get` **frame**(): [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Returns

[`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Defined in

[src/in/packages/animate/src/Animate.ts:83](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L83)

___

### frameTotalTime

• `get` **frameTotalTime**(): `number`

#### Returns

`number`

#### Defined in

[src/in/packages/animate/src/Animate.ts:84](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L84)

___

### nowReverse

• `get` **nowReverse**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:96](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L96)

___

### realEnding

• `get` **realEnding**(): [`IAnimateEnding`](../modules.md#ianimateending)

#### Returns

[`IAnimateEnding`](../modules.md#ianimateending)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[realEnding](../interfaces/IAnimate.md#realending)

#### Defined in

[src/in/packages/animate/src/Animate.ts:101](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L101)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name  | Type                                                  |
| :---- | :---------------------------------------------------- |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[event](../interfaces/IAnimate.md#event)

#### Inherited from

Eventer.event

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:24](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L24)

## Methods

### init

▸ **init**(`target`, `keyframe`, `options?`, `isTemp?`): `void`

#### Parameters

| Name       | Type                                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target`   | [`IObject`](../interfaces/IObject.md) \\| [`IUI`](../interfaces/IUI.md)                                                                          |
| `keyframe` | [`IUIInputData`](../interfaces/IUIInputData.md) \\| [`IKeyframe`](../modules.md#ikeyframe)[] |
| `options?` | [`ITransition`](../modules.md#itransition)                                                                                                        |
| `isTemp?`  | `boolean`                                                                                                                                         |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[init](../interfaces/IAnimate.md#init)

#### Defined in

[src/in/packages/animate/src/Animate.ts:123](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L123)

___

### emitType

▸ **emitType**(`type`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:147](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L147)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[play](../interfaces/IAnimate.md#play)

#### Defined in

[src/in/packages/animate/src/Animate.ts:152](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L152)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[pause](../interfaces/IAnimate.md#pause)

#### Defined in

[src/in/packages/animate/src/Animate.ts:161](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L161)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[stop](../interfaces/IAnimate.md#stop)

#### Defined in

[src/in/packages/animate/src/Animate.ts:169](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L169)

___

### seek

▸ **seek**(`time`, `includeDelay?`): `void`

#### Parameters

| Name            | Type                                                          |
| :-------------- | :------------------------------------------------------------ |
| `time`          | `number` \\| [`IPercentData`](../interfaces/IPercentData.md) |
| `includeDelay?` | `boolean`                                                     |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[seek](../interfaces/IAnimate.md#seek)

#### Defined in

[src/in/packages/animate/src/Animate.ts:176](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L176)

___

### kill

▸ **kill**(`complete?`, `killStyle?`): `void`

#### Parameters

| Name         | Type                                            | Default value |
| :----------- | :---------------------------------------------- | :------------ |
| `complete`   | `boolean`                                       | `true`        |
| `killStyle?` | [`IUIInputData`](../interfaces/IUIInputData.md) | `undefined`   |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[kill](../interfaces/IAnimate.md#kill)

#### Defined in

[src/in/packages/animate/src/Animate.ts:207](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L207)

___

### create

▸ **create**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:213](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L213)

___

### changeDuration

▸ **changeDuration**(`duration`): `void`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:277](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L277)

___

### setBefore

▸ **setBefore**(`item`, `data`, `before`): `void`

#### Parameters

| Name     | Type                                                      |
| :------- | :-------------------------------------------------------- |
| `item`   | [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md) |
| `data`   | [`IObject`](../interfaces/IObject.md)                     |
| `before` | [`IObject`](../interfaces/IObject.md)                     |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:282](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L282)

___

### allocateTime

▸ **allocateTime**(`partTime`): `void`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `partTime` | `number` |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:291](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L291)

___

### startRequestAnimate

▸ **startRequestAnimate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:303](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L303)

___

### requestAnimate

▸ **requestAnimate**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:309](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L309)

___

### animate

▸ **animate**(`pageTime?`, `seek?`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `pageTime?` | `number`  |
| `seek?`     | `boolean` |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:314](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L314)

___

### start

▸ **start**(`seek?`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `seek?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:384](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L384)

___

### begin

▸ **begin**(`seek?`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `seek?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:405](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L405)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:411](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L411)

___

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:415](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L415)

___

### setFrom

▸ **setFrom**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:429](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L429)

___

### setTo

▸ **setTo**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:434](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L434)

___

### nextFrame

▸ **nextFrame**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:440](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L440)

___

### reverseNextFrame

▸ **reverseNextFrame**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:447](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L447)

___

### transition

▸ **transition**(`t`): `void`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `t`  | `number` |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:454](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L454)

___

### setStyle

▸ **setStyle**(`style`): `void`

#### Parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `style` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:478](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L478)

___

### increaseTime

▸ **increaseTime**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:487](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L487)

___

### needLoop

▸ **needLoop**(`looped`, `loop`, `swing`): `boolean`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `looped` | `number`                |
| `loop`   | `number` \\| `boolean` |
| `swing`  | `number` \\| `boolean` |

#### Returns

`boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:491](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L491)

___

### needStopLoop

▸ **needStopLoop**(`looped`, `times`, `swing?`): `boolean`

#### Parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `looped` | `number`                |
| `times`  | `number` \\| `boolean` |
| `swing?` | `boolean`               |

#### Returns

`boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:495](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L495)

___

### needLoopFrame

▸ **needLoopFrame**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/in/packages/animate/src/Animate.ts:499](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L499)

___

### clearTimer

▸ **clearTimer**(`fn?`): `void`

#### Parameters

| Name  | Type                                      |
| :---- | :---------------------------------------- |
| `fn?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/animate/src/Animate.ts:511](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L511)

___

### destroy

▸ **destroy**(`complete?`): `void`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `complete?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[destroy](../interfaces/IAnimate.md#destroy)

#### Overrides

[Eventer](Eventer.md).[destroy](Eventer.md#destroy)

#### Defined in

[src/in/packages/animate/src/Animate.ts:518](https://github.com/leaferjs/leafer-in/blob/d97f6888a45310d40717e43f47796d4f7d0dce1d/packages/animate/src/Animate.ts#L518)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name        | Type                                                                                                                                                                                                                                            |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string` \\| `string`[] \\| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md)                                                                                                                                                                                                       |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                                                                                    |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[on](../interfaces/IAnimate.md#on)

#### Inherited from

[Eventer](Eventer.md).[on](Eventer.md#on)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:27](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L27)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name        | Type                                                                         |
| :---------- | :--------------------------------------------------------------------------- |
| `type?`     | `string` \\| `string`[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md)                                    |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                 |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[off](../interfaces/IAnimate.md#off)

#### Inherited from

[Eventer](Eventer.md).[off](Eventer.md#off)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:67](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L67)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name        | Type                                                                                                                                                                                 |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md)                                                                                                                                            |
| `bind?`     | [`IObject`](../interfaces/IObject.md)                                                                                                                                                |
| `options?`  | [`IEventOption`](../modules.md#ieventoption)                                                                                                                                         |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[on_](../interfaces/IAnimate.md#on_)

#### Inherited from

[Eventer](Eventer.md).[on_](Eventer.md#on_)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:111](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L111)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type                                                                                                                                                                       |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \\| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[off_](../interfaces/IAnimate.md#off_)

#### Inherited from

[Eventer](Eventer.md).[off_](Eventer.md#off_)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:117](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L117)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name             | Type                                                                                                                                                                                 |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`           | `string` \\| `string`[] \\| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?`      | [`IFunction`](../interfaces/IFunction.md)                                                                                                                                            |
| `captureOrBind?` | `boolean` \\| [`IObject`](../interfaces/IObject.md)                                                                                                                                 |
| `capture?`       | `boolean`                                                                                                                                                                            |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[once](../interfaces/IAnimate.md#once)

#### Inherited from

[Eventer](Eventer.md).[once](Eventer.md#once)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:129](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L129)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `type`     | `string`                                                                       |
| `event?`   | [`IObject`](../interfaces/IObject.md) \\| [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean`                                                                      |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[emit](../interfaces/IAnimate.md#emit)

#### Inherited from

[Eventer](Eventer.md).[emit](Eventer.md#emit)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:136](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L136)

___

### emitEvent

▸ **emitEvent**(`event`, `capture?`): `void`

#### Parameters

| Name       | Type                                |
| :--------- | :---------------------------------- |
| `event`    | [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean`                           |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[emitEvent](../interfaces/IAnimate.md#emitevent)

#### Inherited from

[Eventer](Eventer.md).[emitEvent](Eventer.md#emitevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:158](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L158)

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

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[hasEvent](../interfaces/IAnimate.md#hasevent)

#### Inherited from

[Eventer](Eventer.md).[hasEvent](Eventer.md#hasevent)

#### Defined in

[src/leafer/packages/event/src/Eventer.ts:163](https://github.com/leaferjs/leafer/blob/8dac52ce29ee7ff03f213df9764911396b4ad135/packages/event/src/Eventer.ts#L163)
