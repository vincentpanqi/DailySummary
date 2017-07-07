<!-- ---
title: 函数节流
date: 2017-06-09 13:46
tags:
--- -->

### 简单的函数节流

```
function throttle(method, context) {
    clearTimeout(method.tid);
    method.tid = setTimeout(function () {
      method.call(context);
    }, 1000);
  }
  window.onresize = function() {
    throttle(myFunc);
  }
  function myFunc() {
  }
```

### 多行文本垂直居中 **伪元素**

vertical-align 的对齐是需要有参照物的，如素锦般，就用伪元素给 <p> 元素创造一个兄弟👬。

```
.vertical-line-multi-i {
  height: 120px;
}

.vertical-line-multi-i::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
}

.vertical-line-multi-i p {
  display: inline-block;
  vertical-align: middle;
}
```

### 多行文本垂直居中 **transform**

这种方式就是宝宝一贯的作风啦～

```
.vertical-line-multi-ii {
  position: relative;
  height: 120px;
}

.vertical-line-multi-ii p {
  position: absolute;
  display: inline-block;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);
}
```

### 多行文本垂直居中 **flex**

如何能漏掉我们的宠儿，奈何还未得到所有浏览器的青睐，坐等 UC 支持，crying～

```
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
```

### 多行文本垂直居中 **transform** && **伪元素**

这番思考，总算有创新了，使用 transform 与 伪元素相结合，大抵前辈们已经用过了！

```
.vertical-line-multi-iiii {
  height: 120px;
}

.vertical-line-multi-iiii::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 50%;
}

.vertical-line-multi-iiii p {
  margin: 0;
  transform: translateY(-50%);
}
```

### 参考文献：

[浅谈javascript的函数节流][vertical-align-middle]

[javascript-throttle]: http://www.alloyteam.com/2012/11/javascript-throttle/
