webpackJsonp([2],{2:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _JSXButton = __webpack_require__(5);\n\nvar _JSXButton2 = _interopRequireDefault(_JSXButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  components: { JsxButton: _JSXButton2.default }\n}; //\n//\n//\n//\n//\n//\n//\n//\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/About/index.vue\n ** module id = 2\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/js/components/About/index.vue?./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0")},5:function(module,exports){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = {\n  data: function data() {\n    return {\n      show: false\n    };\n  },\n\n\n  methods: {\n    toggleText: function toggleText() {\n      this.show = !this.show;\n    }\n  },\n\n  render: function render(h) {\n    return h(\n      "div",\n      null,\n      [h(\n        "div",\n        null,\n        [h(\n          "button",\n          {\n            on: {\n              click: this.toggleText\n            }\n          },\n          ["Click Me!"]\n        )]\n      ), h(\n        "br",\n        null,\n        []\n      ), this.show ? h(\n        "div",\n        null,\n        [h(\n          "p",\n          null,\n          ["Hi! I\'m Rendered By Vue Render Function With JSX! :D. You will get:"]\n        ), h(\n          "ul",\n          null,\n          [h(\n            "li",\n            null,\n            ["Self Closing Tags"]\n          ), h(\n            "li",\n            null,\n            ["Simple Data Binding, no need double brackets"]\n          ), h(\n            "li",\n            null,\n            ["No Needs Register Component"]\n          ), h(\n            "li",\n            null,\n            ["Write Your Code In JS file!"]\n          ), h(\n            "li",\n            null,\n            ["Nice Approach For React Developer"]\n          ), h(\n            "li",\n            null,\n            ["No Need \\"bind(this)\\" in the every local event, It\'s autobinding!"]\n          ), h(\n            "li",\n            null,\n            ["But You Still Need \\"bind(this, arg)\\" When you want to pass some arguments~"]\n          ), h(\n            "li",\n            null,\n            ["You Still Have Native DOM Event!"]\n          )]\n        )]\n      ) : null]\n    );\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/components/About/JSXButton.js\n ** module id = 5\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/js/components/About/JSXButton.js?')},12:function(module,exports,__webpack_require__){eval('var __vue_exports__, __vue_options__\n\n/* script */\n__vue_exports__ = __webpack_require__(2)\n\n/* template */\nvar __vue_template__ = __webpack_require__(17)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === "object" ||\n  typeof __vue_exports__.default === "function"\n) {\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === "function") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n\nmodule.exports = __vue_exports__\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/js/components/About/index.vue\n ** module id = 12\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/js/components/About/index.vue?')},17:function(module,exports){eval("module.exports={render:function (){with(this) {\n  return _h('div', [_m(0), \" \", _h('jsx-button')])\n}},staticRenderFns: [function (){with(this) {\n  return _h('h1', [\"About Page\"])\n}}]}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/vue-loader/lib/template-compiler.js?id=data-v-3!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/About/index.vue\n ** module id = 17\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/js/components/About/index.vue?./~/vue-loader/lib/template-compiler.js?id=data-v-3!./~/vue-loader/lib/selector.js?type=template&index=0")}});