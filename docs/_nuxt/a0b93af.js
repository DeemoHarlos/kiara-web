/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{276:function(t,e,r){"use strict";r.d(e,"a",(function(){return R})),r.d(e,"c",(function(){return n.default})),r.d(e,"b",(function(){return E}));var n=r(21);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function l(t,e){v(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){v(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){v(t,e,r)}))}function v(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var y={__proto__:[]}instanceof Array;function h(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(e){return t(e,r,n)}))}}function m(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}var w=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(w.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),v=f instanceof n.default?f.constructor:n.default,y=v.extend(e);return _(y,t,v),d()&&l(y,t),y}var x={prototype:!0,arguments:!0,callee:!0,caller:!0};function _(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!x[n]){var c=Object.getOwnPropertyDescriptor(t,n);if(!c||c.configurable){var f,d,l=Object.getOwnPropertyDescriptor(e,n);if(!y){if("cid"===n)return;var v=Object.getOwnPropertyDescriptor(r,n);if(f=l.value,d=o(f),null!=f&&("object"===d||"function"===d)&&v&&v.value===l.value)return}0,Object.defineProperty(t,n,l)}}}))}function j(t){return"function"==typeof t?O(t):function(e){return O(e,t)}}j.registerHooks=function(t){w.push.apply(w,f(t))};var R=j;var P="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function M(t,e,r){if(P&&!Array.isArray(t)&&"function"!=typeof t&&!t.hasOwnProperty("type")&&void 0===t.type){var n=Reflect.getMetadata("design:type",e,r);n!==Object&&(t.type=n)}}function E(t){return void 0===t&&(t={}),function(e,r){M(t,e,r),h((function(e,r){(e.props||(e.props={}))[r]=t}))(e,r)}}},295:function(t,e,r){var content=r(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(106).default)("9d0ad4fa",content,!0,{sourceMap:!1})},324:function(t,e,r){"use strict";r(295)},325:function(t,e,r){var n=r(105)(!1);n.push([t.i,"a[data-v-1d5e0fac]{text-decoration:none;color:inherit}.flex-row-center[data-v-1d5e0fac]{align-items:center;justify-content:center}.flex-row-avg[data-v-1d5e0fac],.flex-row-center[data-v-1d5e0fac]{display:flex;flex-direction:row}.flex-row-avg[data-v-1d5e0fac]{align-items:stretch}.flex-row-avg div[data-v-1d5e0fac]{flex:1 1 0}.fill-box[data-v-1d5e0fac]{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen[data-v-1d5e0fac]{width:100vw;height:100vh;top:0;left:0;position:fixed}.page-container .page-title[data-v-1d5e0fac]{font-size:2rem;margin:1rem 0}#cover[data-v-1d5e0fac]{transition:height .3s,padding .3s}#cover #title-text[data-v-1d5e0fac]{padding-top:50vh}#cover #title-text.scroll-index[data-v-1d5e0fac]{opacity:1}#cover #title-text.scroll-intro[data-v-1d5e0fac],#cover #title-text.scroll-pages[data-v-1d5e0fac]{opacity:0}#cover #title-text[data-v-1d5e0fac]{font-family:Noto Sans;text-shadow:0 0 10px #000}#cover #title-text #title[data-v-1d5e0fac]{font-size:6rem;font-weight:300}#cover #title-text #subtitle[data-v-1d5e0fac]{font-size:3rem;font-weight:300}#cover #scroll-down[data-v-1d5e0fac]{font-size:9rem;bottom:0;transition:opacity .3s}#cover #scroll-down.scroll-intro[data-v-1d5e0fac],#cover #scroll-down.scroll-pages[data-v-1d5e0fac]{z-index:-10}",""]),t.exports=n},338:function(t,e,r){"use strict";r.r(e);r(166);var n=r(36),o=r(74),c=r(107),f=r(58),d=r(57),l=(r(14),r(276)),v=r(0);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t){Object(o.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(l.c),w=m=h([Object(l.a)({components:{BIconChevronCompactDown:v.Vg}})],m),O=(r(324),r(78)),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"full-screen d-flex flex-column",attrs:{id:"cover"}},[t._m(0),r("div",{staticClass:"w-100 text-center text-white",attrs:{id:"scroll-down"}},[r("NuxtLink",{attrs:{to:"/kiara/intro"}},[r("BIconChevronCompactDown")],1)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center text-white",attrs:{id:"title-text"}},[r("div",{attrs:{id:"title"}},[t._v("Takanashi Kiara")]),r("div",{attrs:{id:"subtitle"}},[t._v("The Majestic Phoenix")])])}],!1,null,"1d5e0fac",null);e.default=component.exports}}]);