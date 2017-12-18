## react 性能

* 1. 在 constructor 里调用 bind 或者 箭头函数，确保函数调用时 this 指针有正确的上下文。

[bind](../原理/bind.js) 通过创建新函数封装旧函数，jsx 每次渲染时都会创建一个新函数。

* 2. ref 属性使用回调函数代替字符串

* [Implement Better Refs API](https://github.com/facebook/react/issues/1373)

- 可以引用并被链式的传递。
- 异步处理
- 传入回调函数拥有更多的使用场景
