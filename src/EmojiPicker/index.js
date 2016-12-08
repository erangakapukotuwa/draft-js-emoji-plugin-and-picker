'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmojiOption = require('./EmojiOption');

var _EmojiOption2 = _interopRequireDefault(_EmojiOption);

var _addEmoji = require('../modifiers/addEmoji');

var _addEmoji2 = _interopRequireDefault(_addEmoji);

var _shortNames = require('../utils/shortNames');

var _shortNames2 = _interopRequireDefault(_shortNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Sets the CSS overflow value to newValue
 * Use like this: setOverflow('auto', document.body);
 */

function setOverflow(newValue, element) {
    element.style.overflow = newValue; // eslint-disable-line no-param-reassign
}

var EmojiPicker = function (_Component) {
    _inherits(EmojiPicker, _Component);

    function EmojiPicker() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, EmojiPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EmojiPicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            open: false
        }, _this.onMouseEnter = function () {
            setOverflow('hidden', document.body);
        }, _this.onMouseLeave = function () {
            setOverflow('auto', document.body);
        }, _this.openPopover = function () {
            if (!_this.state.open) {
                _this.preventNextClose = true;
                _this.setState({
                    open: true
                });
            }
        }, _this.closePopover = function () {
            if (!_this.preventNextClose && _this.state.open) {
                _this.setState({
                    open: false
                });
            }

            _this.preventNextClose = false;
        }, _this.onEmojiSelect = function (emoji) {
            var newEditorState = (0, _addEmoji2.default)(_this.props.store.getEditorState(), emoji);
            _this.props.store.setEditorState(newEditorState);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // Start the selector closed


    _createClass(EmojiPicker, [{
        key: 'componentDidMount',


        // When the selector is open and users click anywhere on the page,
        // the selector should close
        value: function componentDidMount() {
            document.addEventListener('click', this.closePopover);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.closePopover);
        }

        // When users are scrolling the popover, the page shouldn't scroll when
        // they reach the end of it


        // Open the popover


        // Close the popover


        // Add a sticker to the editor

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // Create the sticker selection elements

            var _props$theme = this.props.theme;
            var theme = _props$theme === undefined ? {} : _props$theme;

            var popoverClassName = this.state.open ? theme.selectPopover : theme.selectClosedPopover;
            var buttonClassName = this.state.open ? theme.selectPressedButton : theme.selectButton;

            return _react2.default.createElement(
                'div',
                { className: theme.select },
                _react2.default.createElement(
                    'button',
                    {
                        className: buttonClassName,
                        onMouseUp: this.openPopover,
                        type: 'button'
                    },
                    this.props.selectButtonContent
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: popoverClassName,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    },
                    _react2.default.createElement(
                        'div',
                        { className: theme.selectStickerList },
                        _shortNames2.default.map(function (emoji, index) {
                            return _react2.default.createElement(_EmojiOption2.default, {
                                theme: _this2.props.theme,
                                onEmojiSelect: _this2.onEmojiSelect,
                                emoji: emoji,
                                index: index,
                                id: 'emoji-option-' + _this2.key + '-' + index
                            });
                        })
                    ),
                    _react2.default.createElement('div', { className: theme.selectBottomGradient })
                )
            );
        }
    }]);

    return EmojiPicker;
}(_react.Component);

exports.default = EmojiPicker;