* [CSS之BFC详解](http://www.html-js.com/article/1866)

触发条件：
1. float: 除 none 以外的值
2. overflow: 除 visible 以外的值
3. display: table-cell、table-caption、inline-block、flex、inline-flex
4. position: absolute、fixed
5. fieldset

特性：
1. 元素的左外边距会触碰到包含块容器(BFC)的左外边框
2. BFC 不会与浮动盒子叠加 -- 实现两栏布局
3. BFC 高度的计算，浮动元素也会参与 -- 清除浮动

* [margin collapsing 的问题](http://www.html-js.com/topic/473)
* [OVERFLOW – A SECRET BENEFIT](http://www.stubbornella.org/content/2009/07/23/overflow-a-secret-benefit/)
