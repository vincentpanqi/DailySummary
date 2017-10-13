CSS 模块化遇到的问题：
1. 全局污染：全局选择器机制来设置样式
2. 依赖
3.


### 1. [OOCSS](https://github.com/stubbornella/oocss/wiki) - Object Oriented CSS (Nicole Sullivan 2008)

(Nicole Sullivan 2008)

#### 1.1 用 class 管理方便复用

#### 1.2 分离 structure 和 skin

- 复用视觉上的特征作为 skin
- 通过 structure 的 class 实现 structure 语义化
- 引用 class 代替 HTML 标签

#### 1.3 分离 container 和 content

- 减少使用依赖位置的样式
- Classes over tags, 避免使用派生 selector
- 一个对象不论位置如何应该拥有相同的外表

```
<div class="media attribution">
  <a href="http://twitter.com/stubbornella" class="img">
    <img src="http://stubbornella.com/profile_image.jpg" alt="me" />
  </a>
  <div class="bd">
    @Stubbornella 14 minutes ago
  </div>
</div>
```

```
/* ====== media ====== */
.media {margin:10px;}
.media, .bd {overflow:hidden; _overflow:visible; zoom:1;}
.media .img {float:left; margin-right: 10px;}
.media .img img{display:block;}
.media .imgExt{float:right; margin-left: 10px;}
```

### 2. [SMACSS](https://smacss.com/) - Scalable And Modular Architecture For CSS

(Jonathan Snook 2012)

#### 2.1 为 CSS Rules 分类

Base, Layout, Module, State, Theme

#### 2.2 命名规则

#### 2.3 最小路径

### 3 预处理

- 变量(Variables)
- 嵌套(Nesting)
- 混淆(Minxins)
- 选择器继承(Selector inheritance)
- Language Enhancement

#### 3.1 [stylus](http://stylus-lang.com/)

(2010)

#### 3.2 [sass](http://sass-lang.com/)

(2006)

#### 3.3 [less](http://lesscss.org/)

(2009)

#### 3.4 [PostCSS](https://github.com/postcss/postcss)

(Since Sep 2013)

PostCSS 是用 JS 插件转化 CSS 的工具，支持变量、minxins、编译未来的 CSS 语法、内联图片等。

### 4. [Shadow DOM](http://www.w3.org/TR/shadow-dom/)

在 Web Component 中封装 CSS、JavaScript、templating。

### 5. BEM - Block Element Modifier

(2012)

```
/* .block__element--modifier */

.block{}
.block__element{}
.block--modifier{}
.block__element--modifier{}
```

```
/* 减少层叠样式 */
/* Bad */
.block .element{}        /* nesting */
.element.modifier{}     /* chained */

/* Good */
.block__element{}
.element--modifier{}
```

```
/* 预处理器的支持 */
.block{
    &__element{
        &--modifier{ color: red; }
    }
    &--modifier{ color: blue; }
}

// Generates
.block__element--modifier{ color: red; }
.block--modifier{ color: blue; }
```

### 6. SUIT CSS - Style For Component

### 7. [ATOMIC CSS](http://acss.io) - Better Inline Styling

(Thierry 2013)

```
// the plain way
<div class="fwb tar bd1"></div>
<div class="m-5 mt-10"></div>

// atomizer
<div class="Bgc(#0280ae.5) H(90px) IbBox W(50%) foo_W(100%)"></div>
<div class="Bgc(#0280ae) H(90px) IbBox W(50%) foo_W(100%)"></div>
```

### 8. CSS In JS

- Radium
- React Style
- JSX Style

### 9. [CSS Module](http://glenmaddern.com/articles/css-modules)

- local scope: `:local(.header) { ... }`
- class mapping: `{'header': '_1rJwx92-gmbvaLiDdzgXiJ'}`

#### 9.1 local is default

```
// Before CSS Modules
/* components/submit-button.css */
.Button { /* all styles for Normal */ }
.Button--disabled { /* overrides for Disabled */ }
.Button--error { /* overrides for Error */ }
.Button--in-progress { /* overrides for In Progress */
```

```
// With CSS Modules
/* components/submit-button.css */
.normal { /* all styles for Normal */ }
.disabled { /* all styles for Disabled */ }
.error { /* all styles for Error */ }
.inProgress { /* all styles for In Progress */
```

```
/* components/submit-button.js */
import styles from './submit-button.css';

buttonElem.outerHTML = `
  <button class=${styles.normal}>Submit</button>

// generate, HASHED classname
<button class="components_submit_button__normal__abc5436">
  Processing...
</button>
```

#### 9.2 composition is everything

通过 composes 所有状态共享样式。

```
/* BEM Style */
innerHTML = `<button class="Button Button--in-progress">`

/* CSS Modules */
innerHTML = `<button class="${styles.inProgress}">`
```

```
.common {
  /* all the common styles you want */
}
.inProgress {
  composes: common;    /* similar to Sass @extend */
  /* anything that only applies to In Progress */
}
```

#### 9.3 Sharing Between Files

```
/* colors.css */
.primary {
  color: #720;
}
.secondary {
  color: #777;
}
/* other helper classes... */
```

```
/* submit-button.css */
.common { /* font-sizes, padding, border-radius */ }
.normal {
  composes: common;
  composes: primary from "../shared/colors.css";
}
```

#### 9.4 Single Responsibility Modules

```
.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}
```

```
/* this short hand: */
.element {
  composes: padding-large margin-small from "./layout.css";
}

/* is equivalent to: */
.element {
  composes: padding-large from "./layout.css";
  composes: margin-small from "./layout.css";
}
```

### 10 Pages Override Components CSS

For component-based multi-entries SPA.

### 11. opinion

- 小、全栈的团队：CSS Modules/Inline CSS/Atomic CSS
- 大、传统的团队：BEM/SUIT/ECSS or make your own


* [CSS STILL SUCKS 2015](https://huangxuan.me/css-sucks-2015/#/)
