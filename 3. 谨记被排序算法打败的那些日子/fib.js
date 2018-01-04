function fib(n) {
  var fib_n = function(curr, next, n) {
    if (n == 0) {
      return curr;
    }
    else {
      const temp = fib_n(next, curr+next, n-1);
      return temp;
    }
  }
  return fib_n(0, 1, n);
}

// 0, 1, 1, 2, 3, 5, 8 ....
fib(10);
