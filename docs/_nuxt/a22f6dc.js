(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{381:function(t,e,o){var content=o(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("85078a82",content,!0,{sourceMap:!1})},391:function(t,e,o){"use strict";o(381)},392:function(t,e,o){var r=o(134)(!1);r.push([t.i,".flex-column[data-v-6a477006],.flex-row[data-v-6a477006]{display:flex}.middle-center[data-v-6a477006]{justify-content:center;align-items:center}.stretch-center[data-v-6a477006]{justify-content:center;align-items:stretch}.fill-screen[data-v-6a477006]{width:100%;height:100vh}.fill-box[data-v-6a477006]{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen[data-v-6a477006]{width:100vw;height:100vh;top:0;left:0;position:fixed}.video-item .card[data-v-6a477006]{background-color:hsla(0,0%,100%,.8)}.video-item .card-body[data-v-6a477006]{padding:.5rem 1rem}.video-item .subtype[data-v-6a477006],.video-item .type[data-v-6a477006]{font-size:1rem}.video-item .tag[data-v-6a477006]{font-size:.8rem}",""]),t.exports=r},410:function(t,e,o){"use strict";o.r(e);var r=o(133),n=Object(r.b)({props:{videoInfo:{type:Object,required:!0}},setup:function(t){var e=Object(r.g)(t).videoInfo;return{time:Object(r.a)((function(){return new Date(Date.parse(e.value.time)).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}))}}}),d=(o(391),o(94)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"video-item"},[o("b-card",{attrs:{"img-src":"https://img.youtube.com/vi/"+t.videoInfo.ID+"/mqdefault.jpg","img-left":""}},[o("b-card-title",[o("div",[o("b-badge",{staticClass:"type mr-2",attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.videoInfo.type))]),o("b-badge",{staticClass:"subtype mr-2",attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.videoInfo.subtype))])],1),o("div",[t._v(t._s(t.videoInfo.title))])]),o("b-card-text",[o("p",[t._v(t._s(t.time)),o("br"),t._l(t.videoInfo.customTags,(function(e,i){return[o("b-badge",{key:i,staticClass:"tag mr-2",attrs:{pill:"",variant:"secondary"}},[t._v(t._s(e))])]}))],2)]),o("a",{staticClass:"stretched-link",attrs:{href:t.videoInfo.url,target:"_blank"}})],1)],1)}),[],!1,null,"6a477006",null);e.default=component.exports}}]);