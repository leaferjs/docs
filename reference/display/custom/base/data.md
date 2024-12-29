# 注册数据

自定义元素的第 2 步是： **注册数据处理类**。

元素 `ui.__` 属性是通过数据处理类自动创建的实例，用来计算、存储数据属性的多种状态。

## 注册步骤

### 1. 定义数据接口

需要为输入数据、数据处理（计算数据）定义接口（js 可忽略）。

**命名规范：**

输入数据接口： I + 元素名 + InputData, 如 `IRectInputData`

数据处理接口： I + 元素名 + Data, 如 `IRectData`

### 2. 定义数据处理类

需要继承之前的数据类定义。

**命名规范：** 元素名 + Data, 如 `RectData`

### 3. 注册数据处理类

记住必须在其他数据属性的前面注册，元素创建的时候会自动创建数据实例。

### 4. 定义初始化输入数据

主要用于创建元素时 ts 类型校验和提示（js 可忽略）。

## 了解数据结构

### [数据分层结构](/reference/property/data.md#数据分层结构)

## 示例

::: code-group

<<< @/code/display/Custom/base/data/index.ts

<<< @/code/display/Custom/base/data/index.js
:::

## 下一步

### [添加属性](/reference/display/custom/base/attr.md)
