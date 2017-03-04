<!-- ---
title: 文本截断
date: 2017-03-02 10:05
tags:
--- -->

知乎里看到一句，90% 的前端工程师都被冒泡排序打败了，心里不由一凉，今儿复习下～



```
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
        // [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
```
```

### 参考文献：

[文字垂直居中][vertical-align-middle]

[vertical-align-middle]: https://github.com/kaola-fed/blog/issues/1
