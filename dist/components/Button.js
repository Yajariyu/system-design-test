"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var AsistensiButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n    font-family: 'Poppins', sans-serif;   \n    font-size: 16px;\n    \n    position: absolute;\n    width: 343px;\n    height: 60px;\n\n    background-color: ", ";\n    color: ", ";\n    border-radius: 24px;\n    border: none;\n\n"], ["\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n    font-family: 'Poppins', sans-serif;   \n    font-size: 16px;\n    \n    position: absolute;\n    width: 343px;\n    height: 60px;\n\n    background-color: ", ";\n    color: ", ";\n    border-radius: 24px;\n    border: none;\n\n"])), function (props) { return (props.disabled ? 'rgba(255, 34, 82, 0.5)' : 'rgba(255, 34, 82, 1)'); }, 'rgba(255, 255, 255, 1)');
var PrimaryButton = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.label, label = _c === void 0 ? "call to action" : _c, onClick = _a.onClick;
    return (0, jsx_runtime_1.jsx)(AsistensiButton, __assign({ disabled: disabled, onClick: onClick }, { children: label }));
};
exports.PrimaryButton = PrimaryButton;
var templateObject_1;
