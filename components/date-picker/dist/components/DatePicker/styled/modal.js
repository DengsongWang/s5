"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Modal = _interopRequireDefault(require("../../Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: auto !important;\n    height: fit-content !important;\n\n    @media (max-width: 600px) {\n        border-radius: 0 0 0.975rem 0.975rem !important;\n        align-self: flex-start;\n        width: 100% !important;\n        max-width: 100% !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledModal = (0, _styledComponents["default"])(_Modal["default"])(_templateObject());
var _default = StyledModal;
exports["default"] = _default;

//# sourceMappingURL=modal.js.map