"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Calendar = _interopRequireDefault(require("../../Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 420px;\n    height: 400px;\n    padding: 0 8px;\n    margin: 20px 0 0 0;\n\n    @media (max-width: 600px) {\n        width: 100%;\n        padding: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledCalendar = (0, _styledComponents["default"])(_Calendar["default"])(_templateObject());
var _default = StyledCalendar;
exports["default"] = _default;

//# sourceMappingURL=calendar.js.map