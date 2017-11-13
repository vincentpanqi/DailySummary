1. input 设置 readonly 存在有光标

- focus 时调用 `blur()`，键盘唤起与隐藏存在闪动问题
- 蒙层遮罩，不触发 input 的 focus 事件

2. 聚焦不同 input 时，类型不同的键盘不能自动切换，部分键盘存在，如百度键盘

- 模拟实现 input 和 键盘
