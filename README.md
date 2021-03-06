# react-es6-classy-mixins
Mixer for ES6 React classes
## Overview
I love ES6 classes, but when I started to use ES6 with React I was missing mixin ability.

I needed simple yet easy to apply and (mostly) compatible with old plain object mixins (as I had many mixins in my library) way of applying mixins, but with nice ES6 syntax.

I said "mostly" because React seals `props` property in classes thus preventing it's mutation. And I really don't want to fight against that, it's cool.

## Live sandbox example
See the Pen <a href='http://codepen.io/HitoriSensei/pen/RWmaqm/'>React ES6 classes with mixins</a> by Piotr "Hitori" Bosak (<a href='http://codepen.io/HitoriSensei'>@HitoriSensei</a>) on <a href='http://codepen.io'>CodePen</a>.
## NPM
`npm install react-es6-classy-mixins`
## Mixins
Mixins stay the same plain objects as of before ES6 class syntax, eg.
```js
var MixinA = {
  getInitialState: function () {
    return {
      mixinA: 1
    }
  }
}

var MixinB = {
  getInitialState: function () {
    return {
      mixinB: false
    }
  },
  activateMixinB: function() {
    this.setState({mixinB: true})
  },
  deactivateMixinB: function() {
    this.setState({mixinB: false})
  },
  componentDidMount: function(){
    console.log("MixinB.componentDidMount()")
  },
  x: function(){
    return 1
  }
}

var MixinC = {
  componentDidMount: function(){
    console.log("MixinC.componentDidMount()")
  },
  x: function(){
    return 2
  }
}

var MixinD = {
  componentDidMount: function(){
    console.log("MixinD.componentDidMount()")
  },
  getInitialState: function () {
    return {
      mixinB: true
    }
  },
  x: function(){
    return 4
  }
}

```
## Usage
instead of
```js
class YourComponent extends BaseClass{...}
```
write
```js
import ReactComponentWithMixins from "react-es6-classy-mixins"
class YourComponent extends ReactComponentWithMixins(mixins..., BaseClass){...}
```
for example
```js
import ReactComponentWithMixins from "react-es6-classy-mixins"
class YourComponent extends ReactComponentWithMixins(MixinC, MixinB, MixinA, React.Component){
  componentDidMount(){
    console.log("YourComponent.componentDidMount()")
    super()
  }
  ...
}
```
You have to call `super()` if you want to execute mixin methods of the same name.

## Execution order
Mixins are executed from left to right.

If there are more than one mixin with method of the same name returning a value (like this.x()) , only leftmost value will be returned but ALL methods will be executed in left to right order!

```js
import ReactComponentWithMixins from "react-es6-classy-mixins"
class WithMixins extends ReactComponentWithMixins(MixinC, MixinB, MixinA, React.Component){
  componentDidMount(){
    console.log("WithMixins.componentDidMount()")
    super()
  }
  ...
}
```

```js
/* Order of execution (left to right): */

WithMixins.componentDidMount()
MixinC.componentDidMount()
MixinB.componentDidMount()
```
---
```js
import ReactComponentWithMixins from "react-es6-classy-mixins"
class WithExtendAndMixins extends ReactComponentWithMixins(MixinD, MixinB, WithMixins){
  componentDidMount(){
    console.log("WithMixins.componentDidMount()")
    super()
  }
  ...
}
```

```js
/* Order of execution (left to right): */
WithExtendAndMixins.componentDidMount()
MixinD.componentDidMount()
MixinB.componentDidMount()
WithMixins.componentDidMount()
MixinC.componentDidMount()
MixinB.componentDidMount()
```
note that `MixinB.componentDidMount()` is executed twice
