### 网页生成过程

1. 处理 HTML 标记并构建 DOM 树。
2. 处理 CSS 标记并构建 CSSOM 树。
3. 将 DOM 与 CSSOM 合并成一个渲染树。
4. 根据渲染树来布局，以计算每个节点的几何信息。
5. 将各个节点绘制到屏幕上。

优化关键渲染路径，就是指最大限度缩短执行上述第 1 步至第 5 步耗费的总时间

### 重排和重绘

网页生成的时候，至少会渲染一次。用户访问的过程中，还会不断重新渲染。
以下三种情况，会导致网页重新渲染。

- 修改DOM
- 修改样式表
- 用户事件（比如鼠标悬停、页面滚动、输入框键入文字、改变窗口大小等等）

重新渲染，就需要重新生成布局和重新绘制。前者叫做"重排"（reflow），后者叫做"重绘"（repaint）。

### 提高性能

- 不要编写会强制浏览器重新计算布局的 JavaScript。将读取和写入功能分开，并首先执行读取。
- 不要使您的 CSS 过于复杂。减少使用 CSS 并保持 CSS 选择器简洁。
- 尽可能地避免布局。选择根本不会触发布局的 CSS。
- 绘制比任何其他渲染活动花费的时间都要多。请留意绘制瓶颈。
- 如果某个样式是通过重排得到的，那么最好缓存结果。避免下一次用到的时候，浏览器又要重排。
- 不要一条条地改变样式，而要通过改变class，或者csstext属性，一次性地改变样式
- 尽量使用离线DOM，而不是真实的网面DOM，来改变元素样式。比如，操作Document Fragment对象，完成后再把这个对象加入DOM。再比如，使用 cloneNode() 方法，在克隆的节点上进行操作，然后再用克隆的节点替换原始节点。
- 先将元素设为display: none（需要1次重排和重绘），然后对这个节点进行100次操作，最后再恢复显示（需要1次重排和重绘）。这样一来，你就用两次重新渲染，取代了可能高达100次的重新渲染。
- position属性为absolute或fixed的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响。
- 只在必要的时候，才将元素的display属性为可见，因为不可见的元素不影响重排和重绘。另外，visibility : hidden的元素只对重绘有影响，不影响重排。
- 使用虚拟DOM的脚本库，比如React等。
- 使用 window.requestAnimationFrame()、window.requestIdleCallback() 这两个方法调节重新渲染

### 优化应用

- 渐进式渲染和在后台执行一些工作，将非必需的加载推迟到空闲时间段
- 浏览器渲染页面前需要先构建 DOM 和 CSSOM 树。因此，我们需要确保尽快将 HTML 和 CSS 都提供给浏览器。

参考资料：
* [分析运行时性能](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/?hl=zh-cn)
* [避免大型、复杂的布局和布局抖动](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing?hl=zh-cn)
