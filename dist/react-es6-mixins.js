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
    global.index = mod.exports;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUF3Qix3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQXhCLHdCQUF3QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlYWN0Q29tcG9uZW50V2l0aE1peGlucyguLi5hcmdzKXtcclxuICBsZXQgQmFzZUNsYXNzID0gYXJncy5wb3AoKVxyXG4gIGxldCBtaXhpbnMgPSBhcmdzXHJcbiAgXHJcbiAgLy8gY3JlYXRlIGJhc2UgbWl4aW5nIGNsYXNzXHJcbiAgY2xhc3MgTWl4ZWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2xhc3Mge31cclxuXHJcbiAgLy8gZmluZCBtaXhpbnMgdGhhdCBleHRlbmQgc3RhdGVcclxuICBsZXQgbWl4aW5zV2l0aFN0YXRlID0gbWl4aW5zLmZpbHRlcigobWl4aW4pPT5taXhpbi5nZXRJbml0aWFsU3RhdGUpXHJcblxyXG4gIC8vIGFkZCBzdGF0ZSBtaXhlciB0byBvdGhlciBtaXhpbnNcclxuICBsZXQgbWl4aW5zV2l0aEhlbHBlciA9IG1peGlucy5yZXZlcnNlKCkuY29uY2F0KHtcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKXtcclxuICAgICAgZm9yKCBsZXQgbWl4aW4gb2YgbWl4aW5zV2l0aFN0YXRlKSB7XHJcbiAgICAgICAgbGV0IG1peGluU3RhdGUgPSBtaXhpbi5nZXRJbml0aWFsU3RhdGUoKVxyXG4gICAgICAgIGZvciggbGV0IHN0YXRlS2V5IGluIG1peGluU3RhdGUpIHtcclxuICAgICAgICAgIC8vIG92ZXJ3cml0ZSBzdGF0ZSBmaWVsZCBvbmx5IGlmIGNsYXNzIGhhc24ndCBhbHJlYWR5IHNldCB0aGUga2V5LiBcclxuICAgICAgICAgIC8vIG1peGlucyBvdmVyd3JpdGUgdGhlaXIgc3RhdGVzIGluIG9yZGVyIG9mIGFwcGx5aW5nXHJcbiAgICAgICAgICBpZih0aGlzLnN0YXRlW3N0YXRlS2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVbc3RhdGVLZXldID0gbWl4aW5TdGF0ZVtzdGF0ZUtleV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gIC8vIGV4dGVuZCBvdXIgbWl4ZWQgYmFzZSBjbGFzcyB3aXRoIG1peGluc1xyXG4gIGZvciggbGV0IG1peGluIG9mIG1peGluc1dpdGhIZWxwZXIgKSB7XHJcbiAgICBmb3IoIGxldCBuYW1lIGluIG1peGluICkgaWYgKG5hbWUgIT0gJ2dldEluaXRpYWxTdGF0ZScpIHtcclxuICAgICAgbGV0IGYgPSBNaXhlZENvbXBvbmVudC5wcm90b3R5cGVbbmFtZV1cclxuICAgICAgTWl4ZWRDb21wb25lbnQucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyB0YWtlIHRoZSByZXN1bHQgZnJvbSB0aGUgcmlnaHRtb3N0IG1peGluXHJcbiAgICAgICAgbGV0IHIgPSBtaXhpbltuYW1lXS5hcHBseSh0aGlzLGFyZ3VtZW50cylcclxuICAgICAgICAvLyB0aGVuIGNhbGwgdGhlIHJlc3QgaWYgYW55XHJcbiAgICAgICAgOyhmICYmIGYuYXBwbHkodGhpcyxhcmd1bWVudHMpKVxyXG4gICAgICAgIHJldHVybiAgclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBNaXhlZENvbXBvbmVudFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
