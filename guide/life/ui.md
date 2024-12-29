# 生命周期

元素从创建、添加、挂载，到移除、解除挂载、销毁的全过程，可在初始化事件中监听。

<br/>

![生命周期](/svg/ui_life.svg)

<br/>

## 示例

生命周期中的不同状态会通过 [ChildEvent](/reference/event/basic/Child)、 [PropertyEvent](/reference/event/basic/Property) 进行通知。

### 监听元素生命周期事件

初始化方式监听

<<< @/code/life/ui/index.ts

通过 on 监听

<<< @/code/life/ui/on.ts

## 下一步

### [应用周期](/guide/life/app)
