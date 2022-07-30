function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = {};
    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      });
    }
    n['default'] = e;
    return n;
  }
}

var react = require('react');

var useSound = function useSound(props) {
  var src = props.src,
      _props$volume = props.volume,
      volume = _props$volume === void 0 ? 1 : _props$volume;

  var _useState = react.useState(null),
      howler = _useState[0],
      setHowler = _useState[1];

  var play = react.useCallback(function (options) {

    if (!howler) {
      return;
    }

    howler.play();
  }, [howler]);
  react.useEffect(function () {
    var initHowler = function initHowler() {
      try {
        return Promise.resolve(new Promise(function (resolve) { resolve(_interopNamespace(require('howler'))); })).then(function (mod) {
          var howler = new mod.Howl({
            src: [src],
            volume: volume
          });
          setHowler(howler);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    initHowler();
  }, []);
  react.useEffect(function () {
    if (howler === null) {
      return;
    }

    howler.volume(volume);
  }, [volume]);
  var returnValue = [play];
  return returnValue;
};

exports.default = useSound;
exports.useSound = useSound;
//# sourceMappingURL=index.js.map
