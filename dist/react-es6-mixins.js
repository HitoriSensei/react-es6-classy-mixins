'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.reactEs6Mixins = mod.exports;
  }
})(this, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ReactComponentWithMixins;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function ReactComponentWithMixins() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var BaseClass = args.pop();
    var mixins = args;

    var MixedComponent = (function (_BaseClass) {
      _inherits(MixedComponent, _BaseClass);

      function MixedComponent() {
        _classCallCheck(this, MixedComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MixedComponent).apply(this, arguments));
      }

      return MixedComponent;
    })(BaseClass);

    var mixinsWithState = mixins.filter(function (mixin) {
      return mixin.getInitialState;
    });
    var mixinsWithHelper = mixins.reverse().concat({
      componentWillMount: function componentWillMount() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = mixinsWithState[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var mixin = _step.value;
            var mixinState = mixin.getInitialState();

            for (var stateKey in mixinState) {
              if (this.state[stateKey] === undefined) {
                this.state[stateKey] = mixinState[stateKey];
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    });
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var mixin = _step2.value;

        var _loop2 = function _loop2(name) {
          if (name != 'getInitialState') {
            (function () {
              var f = MixedComponent.prototype[name];

              MixedComponent.prototype[name] = function () {
                var r = mixin[name].apply(this, arguments);
                f && f.apply(this, arguments);
                return r;
              };
            })();
          }
        };

        for (var name in mixin) {
          _loop2(name);
        }
      };

      for (var _iterator2 = mixinsWithHelper[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return MixedComponent;
  }
});