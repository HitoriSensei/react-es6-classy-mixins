export default function ReactComponentWithMixins(...args){
  let BaseClass = args.pop()
  let mixins = args
  
  // create base mixing class
  class MixedComponent extends BaseClass {}

  // find mixins that extend state
  let mixinsWithState = mixins.filter((mixin)=>mixin.getInitialState)

  // add state mixer to other mixins
  let mixinsWithHelper = mixins.reverse().concat({
    componentWillMount: function(){
      for( let mixin of mixinsWithState) {
        let mixinState = mixin.getInitialState()
        for( let stateKey in mixinState) {
          // overwrite state field only if class hasn't already set the key. 
          // mixins overwrite their states in order of applying
          if(this.state[stateKey] === undefined) {
            this.state[stateKey] = mixinState[stateKey]
          }
        }
      }
    }
  })
  
  // extend our mixed base class with mixins
  for( let mixin of mixinsWithHelper ) {
    for( let name in mixin ) if (name != 'getInitialState') {
      let f = MixedComponent.prototype[name]
      MixedComponent.prototype[name] = function(){
        // take the result from the rightmost mixin
        let r = mixin[name].apply(this,arguments)
        // then call the rest if any
        ;(f && f.apply(this,arguments))
        return  r
      }
    }
  }
  
  return MixedComponent
}