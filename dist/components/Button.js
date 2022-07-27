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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../utils");
var ButtonAtom = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    min-width: 343px ;\n    height: 60px;\n    padding: 18px 48px;\n    font-size:16px;\n    font-weight : bold ;\n    border-radius: 24px;\n    border:none;\n    color: white;\n"], ["\n    background-color: ", ";\n    min-width: 343px ;\n    height: 60px;\n    padding: 18px 48px;\n    font-size:16px;\n    font-weight : bold ;\n    border-radius: 24px;\n    border:none;\n    color: white;\n"])), function (props) { return (!props.disabled ? utils_1.primary[100] : utils_1.primary[300]); });
var Button = function (_a) {
    var label = _a.label, _b = _a.disabled, disabled = _b === void 0 ? true : _b, props = __rest(_a, ["label", "disabled"]);
    return (0, jsx_runtime_1.jsx)(ButtonAtom, __assign({ disabled: disabled }, props, { children: label }));
};
exports.Button = Button;
var templateObject_1;
