"use client";
import {
  require_createSvgIcon,
  require_interopRequireDefault
} from "./chunk-XETFNFWL.js";
import "./chunk-4EITEKXV.js";
import "./chunk-JA6TZ4PR.js";
import "./chunk-IZI7RPKJ.js";
import "./chunk-A77YNV5W.js";
import "./chunk-O4BBRANX.js";
import "./chunk-2UZSXGWM.js";
import "./chunk-C5VEH3Y6.js";
import "./chunk-WMIPCRZH.js";
import {
  require_jsx_runtime
} from "./chunk-QTD6UI2Q.js";
import "./chunk-IHY7PA36.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import "./chunk-O4IRVHH2.js";
import {
  __commonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/@mui/icons-material/Facebook.js
var require_Facebook = __commonJS({
  "node_modules/@mui/icons-material/Facebook.js"(exports) {
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var _default = (0, _createSvgIcon.default)((0, _jsxRuntime.jsx)("path", {
      d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
    }), "Facebook");
    exports.default = _default;
  }
});
export default require_Facebook();
//# sourceMappingURL=@mui_icons-material_Facebook.js.map
