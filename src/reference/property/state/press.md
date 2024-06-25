<script setup>
import Case from '/component/Case.vue'
</script>

# press

pointer.down 状态，暂时不支持 Group。

需安装 [交互状态 插件](/plugin/in/state/index.md) 才能使用。

## 关键属性

### pressStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

光标按下时的交互样式， 抬起后自动还原。

## 归属

### [UI](/reference/display/UI.md#交互状态)

## 示例

<case name="PressStyle" index=0 editor="false" ></case>

### 鼠标按下颜色加深

<<< @/code/property/state/pressStyle.ts
