### 编程范式

常见的编程范式有 **命令式编程（Imperative programming）**、**函数式编程**、**逻辑式编程**，常见的面向对象编程语言有着命令式的风格，但增添了支持对象的功能。

### 函数式编程

命令式编程是一种面向计算机硬件的抽象，有变量（对应着存储单元），赋值语句（获取、存储指令），表达式（内存饮用和算数运算）和控制语句（跳转指令），换句话说，命令式程序就是一个冯诺依曼机的指令序列。

函数式编程是面向数学的抽象，将计算描述为一种表达式求值。

函数式编程中的函数指的是数学中的函数，即自变量的映射。一个函数的值仅取决于函数参数的值，避免使用程序状态以及易变对象。

函数式语言中，函数作为一等公民，可以在任何地方定义，在函数内或函数外，可以作为函数的参数和返回值，可以对函数进行组合。

#### 组合子逻辑

Haskell Books Curry 和 Moses Schönfinkel 的一种符号系统，用来消除数理逻辑中对变量的需要。

#### 柯里化（Curry）

柯里化是把接受多个参数的函数变换成接受一个单一参数的函数，并返回接受余下的参数而且返回结果的新函数的技术。

```
var foo = function(a) {
  return function(b) {
    return a * a + b * b;
  }
}

foo(1)(2) // => 5
```

```
// ant-design/blob/master/components/form/Form.tsx
static create = function<TOwnProps>(options: FormCreateOption<TOwnProps> = {}): ComponentDecorator<TOwnProps> {
  return createDOMForm({
    fieldNameProp: 'id',
    ...options,
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP,
  });
};

// react-component/form/blob/master/src/createDOMForm.js
// createDOMForm enhancement, support props.form.validateFieldsAndScroll
function createDOMForm(option) {
  return createBaseForm({
    ...option,
  }, [mixin]);
}

// react-component/form/blob/master/src/createBaseForm.js
function createBaseForm(option = {}, mixins = []) {
  const { ... } = option;

  return function decorate(WrappedComponent) {
    const Form = createReactClass({
      mixins,
      ...
      render() {
        const { wrappedComponentRef, ...restProps } = this.props;
        const formProps = {
          [formPropName]: this.getForm(),
        };
        ...
        const props = mapProps.call(this, {
          ...formProps,
          ...restProps,
        });
        return <WrappedComponent {...props}/>;
      }
    }
  }
}
```

```
// react-component/form/blob/master/src/createForm.js
function createForm(options) {
  return createBaseForm(options, [mixin]);
}
```
