"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FittedText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FittedText, _React$Component);

  function FittedText(props) {
    var _this;

    _classCallCheck(this, FittedText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FittedText).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getTextElement", function () {
      return _this.text.current;
    });

    _defineProperty(_assertThisInitialized(_this), "getTextParentElement", function () {
      return _this.text.current.parentElement;
    });

    _defineProperty(_assertThisInitialized(_this), "updateText", function () {
      var element = _this.getTextElement();

      var parent = _this.getTextParentElement();

      if (!element) return;
      var fontSize = _this.state.fontSize;
      element.style.fontSize = fontSize + "px";

      while (parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth) {
        fontSize = Math.floor(fontSize * 0.95);
        element.style.fontSize = fontSize + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.updateText();

      var windowObject = _this.props.windowObject;

      if (windowObject) {
        windowObject.addEventListener("resize", _this.updateText);
        return;
      }

      window.addEventListener("resize", _this.updateText);
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.updateText();
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      var windowObject = _this.props.windowObject;

      if (windowObject) {
        windowObject.removeEventListener("resize", _this.updateText);
        return;
      }

      window.removeEventListener("resize", _this.updateText);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var fontSize = _this.state.fontSize;
      var style = {
        fontSize: fontSize
      };
      return _react["default"].createElement("div", {
        ref: _this.text,
        style: style
      }, _this.props.children);
    });

    var defaultFontSize = _this.props.defaultFontSize;
    _this.state = {
      fontSize: !defaultFontSize ? 200 : defaultFontSize
    };
    _this.text = _react["default"].createRef();
    return _this;
  }

  return FittedText;
}(_react["default"].Component);

exports["default"] = FittedText;
