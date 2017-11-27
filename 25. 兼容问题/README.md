1. input 设置 readonly 存在有光标

- focus 时调用 `blur()`，键盘唤起与隐藏存在闪动问题
- 蒙层遮罩，不触发 input 的 focus 事件

2. 聚焦不同 input 时，类型不同的键盘不能自动切换，部分键盘存在，如百度键盘

- 模拟实现 input 和 键盘

3. 通过 flex 实现的高度，子元素设置为 height: 100% 将失效
设置父元素高度为非 auto

4. 键盘唤起挡住输入框
- Element.scrollIntoView
- 获取输入框的位置，Window.scrollTo(x, y)
