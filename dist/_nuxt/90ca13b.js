(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4,8,9,10],{249:function(e,t,n){e.exports=n.p+"img/background.df48bff.png"},250:function(e,t,n){e.exports=n.p+"img/arrow.60f4e50.png"},251:function(e,t,n){e.exports=n.p+"img/avaxicon.fc1be02.png"},252:function(e,t,n){e.exports=n.p+"img/avaxicon.11256c5.svg"},253:function(e,t,n){e.exports=n.p+"img/bitcoinlogo.369eb07.png"},254:function(e,t,n){e.exports=n.p+"img/bitcoinlogo.9d519bc.svg"},255:function(e,t,n){e.exports=n.p+"img/buy-crypto.46d8692.png"},256:function(e,t){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n| \x3c!-- Created with Inkscape (http://www.inkscape.org/) --\x3e\n| ')},257:function(e,t,n){e.exports=n.p+"img/esclogo.c602981.png"},258:function(e,t,n){e.exports=n.p+"img/fund.93372b0.png"},259:function(e,t,n){e.exports=n.p+"img/percenticon.597fa98.png"},260:function(e,t,n){e.exports=n.p+"img/percenticon.24db332.svg"},261:function(e,t,n){e.exports=n.p+"img/sign-up.4afd242.png"},262:function(e,t,n){e.exports=n.p+"img/stakeicon.fa52385.png"},263:function(e,t,n){e.exports=n.p+"img/stakeicon.85c59ec.svg"},264:function(e,t,n){e.exports=n.p+"img/swapicon.f01e886.png"},265:function(e,t,n){e.exports=n.p+"img/swapicon.6b4fe91.svg"},266:function(e,t,n){e.exports=n.p+"img/clever.8a49f14.png"},267:function(e,t,n){e.exports=n.p+"img/diamon-cutts.05f2972.png"},268:function(e,t,n){e.exports=n.p+"img/gambio.da697ab.png"},269:function(e,t,n){e.exports=n.p+"img/swiss-finance.7281595.png"},405:function(e,t,n){e.exports=n.p+"img/industry-leading-security.16b398c.webp"},406:function(e,t,n){e.exports=n.p+"img/faq.05e12ee.webp"},407:function(e,t,n){var map={"./arrow.png":250,"./avaxicon.png":251,"./avaxicon.svg":252,"./bitcoinlogo.png":253,"./bitcoinlogo.svg":254,"./buy-crypto.png":255,"./esclogo":256,"./esclogo.png":257,"./fund.png":258,"./percenticon.png":259,"./percenticon.svg":260,"./sign-up.png":261,"./stakeicon.png":262,"./stakeicon.svg":263,"./swapicon.png":264,"./swapicon.svg":265};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=407},408:function(e,t,n){var map={"./background.png":249,"./clever.png":266,"./diamon-cutts.png":267,"./gambio.png":268,"./swiss-finance.png":269};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=408},423:function(e,t,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("5295c29e",content,!0,{sourceMap:!1})},426:function(e,t,n){"use strict";n.r(t);var o={name:"BaseSection"},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",e._b({staticClass:"relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden"},"div",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},427:function(e,t,n){"use strict";n.r(t);var o={name:"LandingStep",props:{step:{type:Object,required:!0}}},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"max-w-[200px] xl:max-w-[363px] mx-16 space-y-3 sm:space-y-3 text-center"},[o("h3",{staticClass:"text-[2em] text-[#373555ff] font-bold "},[e._v(e._s(e.step.title))]),e._v(" "),o("img",{staticClass:"max-w-[200px] mx-auto  alt=",attrs:{src:n(407)("./"+e.step.img)}}),e._v(" "),o("p",{staticClass:"text-sm/17 font-medium text-gray-700 leading-relaxed"},[e._v("\n    "+e._s(e.step.description)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},428:function(e,t,n){"use strict";n.r(t);var o={props:{img:{type:String,default:""}}},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{staticClass:"sm:w-1/2 lg:w-72 mx-auto",attrs:{src:n(408)("./"+e.img),alt:""}})])}),[],!1,null,null,null);t.default=component.exports},429:function(e,t,n){"use strict";n.r(t);var o={name:"LandingListItem",props:{title:{type:String,default:""}}},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"space-y-2"},[n("div",{staticClass:"flex items-center space-x-2"},[n("CheckCircleIcon",{staticClass:"text-[#0c66ee]",attrs:{size:20}}),e._v(" "),n("span",[e._v(e._s(e.title))])],1),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},430:function(e,t,n){"use strict";n.r(t);var o={name:"BaseAccordion",props:{accordion:{type:Object,required:!0}},data:function(){return{selected:!1}}},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"relative border-b-2 border-gray-200"},[n("button",{staticClass:"w-full py-4 text-left",attrs:{type:"button"},on:{click:function(t){e.selected=!e.selected}}},[n("div",{staticClass:"flex items-center justify-between"},[n("span",{staticClass:"font-medium"},[e._v(e._s(e.accordion.title))]),e._v(" "),e.selected?n("ChevronUpIcon",{attrs:{size:20}}):n("ChevronDownIcon",{attrs:{size:20}})],1)]),e._v(" "),n("transition",{attrs:{name:"slide"}},[e.selected?n("div",{staticClass:"relative overflow-hidden transition-all duration-700"},[n("div",{staticClass:"py-2"},[n("p",{staticClass:"text-sm text-gray-700 tracking-wide leading-relaxed"},[e._v("\n          "+e._s(e.accordion.description)+"\n        ")])])]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},433:function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(o(n(1)),n(6)),u=o(a),s=o(n(7)),r=o(n(8)),p=o(n(9)),b=o(n(10)),c=o(n(11)),l=o(n(14)),d=[],f=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return d=(0,c.default)(d,m),(0,b.default)(d,m.once),d},y=function(){d=(0,l.default)(),v()},x=function(){d.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},h=function(e){return!0===e||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){m=i(m,e),d=(0,l.default)();var t=document.all&&!window.atob;return h(m.disable)||t?x():(m.disableMutationObserver||r.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){v(!0)})):document.addEventListener(m.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)((function(){(0,b.default)(d,m.once)}),m.throttleDelay)),m.disableMutationObserver||r.default.ready("[data-aos]",y),d)};e.exports={init:w,refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,C=t,g=e.apply(o,n)}function r(e){return C=e,x=setTimeout(l,t),j?o(e):g}function a(e){var i=t-(e-h);return O?k(i,y-(e-C)):i}function c(e){var n=e-h;return void 0===h||n>=t||n<0||O&&e-C>=y}function l(){var e=_();return c(e)?d(e):void(x=setTimeout(l,a(e)))}function d(e){return x=void 0,S&&b?o(e):(b=v=void 0,g)}function f(){void 0!==x&&clearTimeout(x),C=0,b=h=v=x=void 0}function p(){return void 0===x?g:d(_())}function m(){var e=_(),n=c(e);if(b=arguments,v=this,h=e,n){if(void 0===x)return r(h);if(O)return x=setTimeout(l,t),o(h)}return void 0===x&&(x=setTimeout(l,t)),g}var b,v,y,g,x,h,C=0,j=!1,O=!1,S=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(j=!!n.leading,y=(O="maxWait"in n)?w(u(n.maxWait)||0,t):y,S="trailing"in n?!!n.trailing:S),m.cancel=f,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function a(e){return"symbol"==(void 0===e?"undefined":c(e))||r(e)&&h.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?l:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",l=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,x=y||g||Function("return this")(),h=Object.prototype.toString,w=Math.max,k=Math.min,_=function(){return x.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,C=t,g=e.apply(o,n)}function r(e){return C=e,x=setTimeout(l,t),j?i(e):g}function u(e){var i=t-(e-_);return O?w(i,y-(e-C)):i}function s(e){var n=e-_;return void 0===_||n>=t||n<0||O&&e-C>=y}function l(){var e=k();return s(e)?d(e):void(x=setTimeout(l,u(e)))}function d(e){return x=void 0,S&&b?i(e):(b=v=void 0,g)}function f(){void 0!==x&&clearTimeout(x),C=0,b=_=v=x=void 0}function p(){return void 0===x?g:d(k())}function m(){var e=k(),n=s(e);if(b=arguments,v=this,_=e,n){if(void 0===x)return r(_);if(O)return x=setTimeout(l,t),i(_)}return void 0===x&&(x=setTimeout(l,t)),g}var b,v,y,g,x,_,C=0,j=!1,O=!1,S=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(j=!!n.leading,y=(O="maxWait"in n)?h(a(n.maxWait)||0,t):y,S="trailing"in n?!!n.trailing:S),m.cancel=f,m.flush=p,m}function o(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function r(e){return"symbol"==(void 0===e?"undefined":u(e))||i(e)&&x.call(e)==l}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):f.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),x=Object.prototype.toString,h=Math.max,w=Math.min,k=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,r=new(o())(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return u()}))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,r){n(e,i+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(12)),a=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)})),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(13)),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},434:function(e,t,n){"use strict";n(423)},435:function(e,t,n){var o=n(54),r=n(436),c=n(249),l=o((function(i){return i[1]})),d=r(c);l.push([e.i,".text-header-gradient[data-v-20e788ab]{background:#3984f4;background:linear-gradient(169.4deg,#fda48c -6.01%,#f97871 103.77%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.bg-partner[data-v-20e788ab]{background:url("+d+");background-size:cover;background-position:50%}.bg-trading-tools[data-v-20e788ab]{background-position:50%;background-color:#ebdcb2}.max-h-0[data-v-20e788ab]{max-height:0}",""]),l.locals={},e.exports=l},436:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},450:function(e,t,n){"use strict";n.r(t);var o=n(433),r=n.n(o),c=(n(186),{name:"IndexPage",mixins:[{mounted:function(){r.a.init({disable:"phone"})}}],data:function(){return{selected:0,dropdownConcurency:!1,dropdownCrypto:!1,currencySelected:{img:"country-icon/eng.png",name:"USD"},currencies:[{img:"country-icon/eng.png",name:"USD"}],cryptoSelected:{img:"crypto-icon/bitcoin.png",name:"BTC"},cryptocurrencies:[{img:"crypto-icon/bitcoin.png",name:"BTC"}],trendings:[{id:1,name:"Bitcoin",price:43180.13,logo:"bitcoin.png",increase:!0,data:[40,35,60,75,60,75,50]},{id:2,name:"Ethereum",price:3480.65,logo:"ethereum.png",increase:!1,data:[25,30,60,50,80,55,80]},{id:3,name:"Solana",price:150.2,logo:"solana.png",increase:!0,data:[40,45,40,80,50,60,35]},{id:4,name:"Dogecoin",price:.1572,logo:"dogecoin.png",increase:!0,data:[35,70,60,80,50,60,40]}],topGainers:[{id:1,name:"PAPPAY",price:.00374,logo:"pappay.png",increase:!0,data:[30,50,45,60,70,40,45]},{id:2,name:"Bitcoin Asia",price:.02096,logo:"bitcoin-asia.png",increase:!0,data:[25,60,50,60,35,50,70]},{id:3,name:"MoonRock",price:.004907,logo:"moonrock.png",increase:!0,data:[40,35,40,25,50,70,45]},{id:4,name:"NinjaFloki",price:123e-6,logo:"ninjafloki.png",increase:!0,data:[45,35,40,30,25,45,35]}],recents:[{id:1,name:"MetaCraft",price:.0608,logo:"metacraft.png",increase:!1,data:[40,50,45,60,35,40,45]},{id:2,name:"Frog",price:.5875,logo:"frog.png",increase:!1,data:[25,50,45,48,40,60,45]},{id:3,name:"Musk Doge",price:.04041,logo:"musk-doge.png",increase:!0,data:[25,35,60,45,50,45,45]},{id:4,name:"2SHARE",price:1366.24,logo:"2share.png",increase:!0,data:[35,30,60,50,35,45,40]}],accordions:[{title:"Why should I choose NEFA?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."},{title:"How secure is NEFA?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."},{title:"Do I have to buy a whole Bitcoin?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."},{title:"How do I actually buy Bitcoin?",description:"We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."}],steps:[{img:"bitcoinlogo.png",title:"Deposit",description:"Deposit BTC.b as collateral and open a Trove."},{img:"percenticon.png",title:"Loan",description:"Take a loan against your BTC.b in ESC for up to 90%."},{img:"esclogo.png",title:"Enjoy",description:"Enjoy a fully decentralized, overcollateralized stable ESC, and use in all parts of DeFi to invest, stake, or hold!"}]}}}),l=(n(434),n(4)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-full "},[o("section",{staticClass:"w-full mt-60",attrs:{id:"hero"}},[o("BaseSection",[o("div",{staticClass:"col-span-12 lg:col-span-12 items-center mt-25 xl:mt-30 space-y-8 sm:space-y-6 px-2 text-center sm:text-center"},[o("h1",{staticClass:"text-[2rem] text-center sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 sm:pl-8 xl:pr-5 text-yellow-100 mt-6",attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[e._v("\n          DeFi's First BTC \n        ")]),e._v(" "),o("span",{staticClass:"text-header-gradient text-[6rem] text-center xl:text-6xl font-bold leading-tight capitalize sm:pr-8 sm:pl-8 xl:pr-5"},[e._v("0% interest loans")]),e._v(" "),o("div",{staticClass:"flex flex-col items-center sm:space-y-0 sm:space-x-4 mt-2",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"200"}},[o("BaseButton",{staticClass:"max-w-full flex px-8 py-2 bg-gradient-to-r from-[#f97871ff] to-[#c24524ff] text-lg text-yellow-100"},[e._v("\n            Enter App\n          ")])],1),e._v(" "),o("div",{staticClass:"items-center sm:space-x-4 capitalize"},[o("p",{staticClass:"paragraph uppercase font-semibold mt-40 text-yellow-100",attrs:{"data-aos":"fade-down","data-aos-once":"true","data-aos-delay":"700"}})]),e._v(" "),o("div",{staticClass:"items-center"},[o("h1",{staticClass:"items-center sm:text-4xl xl:text-6xl font-bold leading-tight mt-0",attrs:{"data-aos":"fade-up","data-aos-delay":"1000","data-aos-once":"true"}})])])])],1),e._v(" "),o("section",{staticClass:"relative max-w-full shadow overflow-hidden mt-5 bg-[#f8efd3] items-stretch"},[o("div",{staticClass:"w-full  pt-3 pb-8 flex flex-col px-48 "},[o("div",{staticClass:"w-full flex flex-col lg:flex-row space-y-12 justify-center lg:space-y-0 px-10 xl:px-5 sm:mt-3",attrs:{"data-aos":"fade-up"}},e._l(e.steps,(function(e){return o("LandingStep",{key:e.title,attrs:{step:e}})})),1)])]),e._v(" "),o("section",{staticClass:"bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden"},[o("div",{staticClass:"w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center"},[o("h3",{staticClass:"text-2xl text-neutral-800 font-semibold",attrs:{"data-aos":"flip-down"}},[e._v("Trusted Partners Worldwide")]),e._v(" "),o("p",{staticClass:"paragraph",attrs:{"data-aos":"flip-down"}},[e._v("We're partners with countless major organisations around the globe")]),e._v(" "),o("div",{staticClass:"flex flex-wrap items-center justify-center",attrs:{"data-aos":"fade-up"}},e._l(["clever.png","diamon-cutts.png","swiss-finance.png","gambio.png"],(function(img){return o("LandingPartnerImage",{key:img,attrs:{img:img}})})),1)])]),e._v(" "),o("section",{staticClass:"w-full my-24"},[o("div",{staticClass:"relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6"},[o("div",{staticClass:"col-span-12 lg:col-span-6",attrs:{"data-aos":"fade-right"}},[o("div",{staticClass:"w-full"},[o("img",{staticClass:"w-full",attrs:{src:n(405),alt:""}})])]),e._v(" "),o("div",{staticClass:"col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8",attrs:{"data-aos":"fade-left"}},[o("h2",{staticClass:"text-4xl font-semibold"},[e._v("Industry-leading security from day one")]),e._v(" "),o("ul",{staticClass:"space-y-8 sm:space-y-4"},[o("LandingListItem",{attrs:{title:"Safety, security and compliance"}},[o("p",{staticClass:"text-sm text-gray-700 leading-relaxed"},[e._v("\n              NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the\n              cybersecurity audits conducted by the New York Department of Financial Services.\n              "),o("span",{staticClass:"underline"},[e._v("Learn more")]),e._v(" about our commitment to security.\n            ")])]),e._v(" "),o("LandingListItem",{attrs:{title:"Hardware security keys"}},[o("p",{staticClass:"text-sm text-gray-700 leading-relaxed"},[e._v("\n              With NEFA you can secure your account with a hardware security key via WebAuthn.\n            ")])]),e._v(" "),o("LandingListItem",{attrs:{title:"SOC Certifications"}},[o("p",{staticClass:"text-sm text-gray-700 leading-relaxed"},[e._v("\n              NEFA is "),o("span",{staticClass:"underline"},[e._v("SOC 1 Type 2")]),e._v(" and\n              "),o("span",{staticClass:"underline"},[e._v("SOC 2 Type 2")]),e._v(" compliant. We are the world’s first cryptocurrency exchange\n              and custodian to complete these exams.\n            ")])])],1)])])]),e._v(" "),o("section",{staticClass:"w-full my-24"},[o("BaseSection",[o("div",{staticClass:"col-span-12 lg:col-span-6",attrs:{"data-aos":"fade-right","data-aos-delay":"150"}},[o("div",{staticClass:"w-full"},[o("img",{staticClass:"w-full",attrs:{src:n(406),alt:""}})])]),e._v(" "),o("div",{staticClass:"col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8",attrs:{"data-aos":"fade-left","data-aos-delay":"150"}},[o("span",{staticClass:"text-base text-gradient font-semibold uppercase mb-4 sm:mb-2"},[e._v("Support")]),e._v(" "),o("h2",{staticClass:"text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6"},[e._v("Frequently asked questions")]),e._v(" "),o("ul",{staticClass:"shadow-box"},e._l(e.accordions,(function(e,t){return o("BaseAccordion",{key:t,attrs:{accordion:e}})})),1)])])],1),e._v(" "),o("div",{staticClass:"w-full my-10 flex justify-center"},[o("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700",attrs:{"data-aos":"flip-down","data-aos-delay":"150",href:"#navbar"}},[o("span",[e._v("Back to top")]),e._v(" "),o("ArrowUpIcon",{attrs:{size:20}})],1)])])}),[],!1,null,"20e788ab",null);t.default=component.exports;installComponents(component,{BaseButton:n(189).default,BaseSection:n(426).default,LandingStep:n(427).default,LandingPartnerImage:n(428).default,LandingListItem:n(429).default,BaseAccordion:n(430).default})}}]);