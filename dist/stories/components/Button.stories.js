"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("../../components/Button");
exports.default = {
    title: 'atoms/Button',
    component: Button_1.PrimaryButton,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Button_1.PrimaryButton, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    label: 'Button',
    disabled: false
};
