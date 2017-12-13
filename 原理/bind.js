// https://github.com/shhdgit/blogs/issues/1
function bind(that) {
  const target = this;
  const bindArgs = Array.prototype.slice.call(arguments, 1);

  function bound() {
    const callArgs = Array.prototype.slice.call(arguments);
    if (this instanceof bound) {
      return target.apply(this, callArgs.concat(callArgs))
    } else {
      return target.apply(that, callArgs.concat(callArgs))
    }
  }

  // 实现继承，让bound函数生成的实例通过原型链能追溯到target函数
  // 即 实例可以获取/调用target.prototype上的属性/方法
  const Empty = function () {};
  Empty.prototype = target.prototype;
  bound.prototype = new Empty();  // 这里如果不加入Empty，直接bound.prototype = target.prototype的话
                                 // 改变bound.prototype则会影响到target.prototype，原型继承基本都会加入这么一个中间对象做屏障
  return bound;
}
