'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emojioneList = require('../../utils/emojioneList');

var _emojioneList2 = _interopRequireDefault(_emojioneList);

var _convertShortNameToUnicode = require('../../utils/convertShortNameToUnicode');

var _convertShortNameToUnicode2 = _interopRequireDefault(_convertShortNameToUnicode);

var _escapeMap = require('../../utils/escapeMap');

var _escapeMap2 = _interopRequireDefault(_escapeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Showcases a sticker one can then pick to add to the editor
 */

var StickerOption = function (_Component) {
    _inherits(StickerOption, _Component);

    function StickerOption() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, StickerOption);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(StickerOption)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClick = function () {
            _this.props.onEmojiSelect(_this.props.emoji);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(StickerOption, [{
        key: 'render',
        value: function render() {
            var _props$theme = this.props.theme;
            var theme = _props$theme === undefined ? {} : _props$theme;

            var unicode = _emojioneList2.default[this.props.emoji][0].toUpperCase();
            var emoji = (0, _convertShortNameToUnicode2.default)(unicode);
            var unicodeForImage = _escapeMap2.default[emoji];
            var imagePathSVG = '//cdn.jsdelivr.net/emojione/assets/svg/';
            var cacheBustParam = '?v=2.1.2';
            var imagePath = '' + imagePathSVG + unicodeForImage + '.svg' + cacheBustParam;
            return _react2.default.createElement(
                'button',
                {
                    onClick: this.onClick,
                    type: 'button',
                    className: theme.selectSticker
                },
                _react2.default.createElement('img', {
                    src: imagePath,
                    className: theme.emojiSuggestionsEntryIcon,
                    role: 'presentation'
                })
            );
        }
    }]);

    return StickerOption;
}(_react.Component);

exports.default = StickerOption;