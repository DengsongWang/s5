"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../../styles/colors");

var _fontSizes = require("../../../styles/fontSizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n    font-weight: 500;\n    text-transform: capitalize;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeaderTitle = _styledComponents["default"].h1(_templateObject(), _colors.COLOR_BRAND, _fontSizes.FONT_SIZE_HEADING_LARGE);

var _default = StyledHeaderTitle;
exports["default"] = _default;

//# sourceMappingURL=headerTitle.js.map