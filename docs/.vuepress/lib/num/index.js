!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).num=n()}(this,function(){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(n,t){var e,r=Object.keys(n);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(n),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,e)),r}function i(r){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var n,e;n=r,t=i[e=t],e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(i,t))})}return r}function f(t,n){return void 0===n?t:Number(Math.round(t+"e"+(n||0))+"e-"+(n||0))}function r(t,n,e,r){var i,o;try{i=n.toString().split(".")[1].length}catch(t){i=0}try{o=e.toString().split(".")[1].length}catch(t){o=0}var u=Math.pow(10,Math.max(i,o)),l=[f((Math.round(u*n)+Math.round(u*e))/u,r),f((Math.round(u*n)-Math.round(u*e))/u,r),f(Math.round(u*n)*Math.round(u*e)/(u*u),r),f(Math.round(u*n)/Math.round(u*e),r)],u=String(f(l[t],r||0));return r?u.includes(".")?u.split(".")[0]+"."+u.split(".")[1].padEnd(r,0):(u+".").padEnd((u+".").length+r,0):l[t]}function u(t,n,e){return r(0,t,n,e)}function o(t,n){var e=0<arguments.length&&void 0!==t?t:[],r=1<arguments.length?n:void 0;if(!e.length)return 0;if(1==e.length)return u(e[0],0,r);if(2==e.length)return u(e[0],e[1],r);for(;2<e.length;)if(e.splice(0,2,u(e[0],e[1])),2==e.length)return u(e[0],e[1],r)}function l(t,n,e){return r(1,t,n,e)}function c(t,n){var e=0<arguments.length&&void 0!==t?t:[],r=1<arguments.length?n:void 0;if(!e.length)return 0;if(1==e.length)return l(e[0],0,r);if(2==e.length)return l(e[0],e[1],r);for(;2<e.length;)if(e.splice(0,2,l(e[0],e[1])),2==e.length)return l(e[0],e[1],r)}function a(t,n,e){return r(2,t,n,e)}function s(t,n){var e=0<arguments.length&&void 0!==t?t:[],r=1<arguments.length?n:void 0;if(!e.length)return 0;if(1==e.length)return a(e[0],1,r);if(2==e.length)return a(e[0],e[1],r);for(;2<e.length;)if(e.splice(0,2,a(e[0],e[1])),2==e.length)return a(e[0],e[1],r)}function p(t,n,e){return r(3,t,n,e)}function g(t,n){var e=0<arguments.length&&void 0!==t?t:[],r=1<arguments.length?n:void 0;if(!e.length)return 0;if(1==e.length)return p(e[0],0,r);if(2==e.length)return p(e[0],e[1],r);for(;2<e.length;)if(e.splice(0,2,p(e[0],e[1])),2==e.length)return p(e[0],e[1],r)}function h(t){return"symbol"!=n(t)&&(!isNaN(parseFloat(t))&&isFinite(t))}function d(t,n,e,r,i){var o=2<arguments.length&&void 0!==e&&e,u=3<arguments.length&&void 0!==r&&r,e=4<arguments.length&&void 0!==i&&i;return void 0===t||null==t?"":((-1<(i=t+(r="")).indexOf("￥")||-1<i.indexOf("¥"))&&(r="￥",i=i.substr(1)),h(i)?(u&&(r=""),t=-1===i.indexOf("."),u=0==(n=void 0===n?t?0:i.split(".")[1].length:n)?Math.round(i)+"":(t?i:f(+i+"",n)+"").split(".")[0],i=f(+i+"",n)+"",i=((i=0==n||t?"":i.split(".")[1])||"").padEnd(n,0),i=(o?u.replace(/(?=(?!\b)(\d{3})+$)/g,","):u)+(i.length?"."+i:""),r+(i=e?Number(i):i)):"")}function y(t,n){var e={};"string"==typeof n?e[n]=0:Array.isArray(n)&&(e=n.reduce(function(t,n){return t[n]=0,t},{}));for(var r=Object.values(t),i=0;i<r.length;i++)for(var o in e)o in r[i]&&(e[o]=u(e[o],Number(r[i][o])||0));return e}function t(){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function")}return t.prototype=Object.freeze({__proto__:null,round:f,plus:u,plusMore:o,minus:l,minusMore:c,multiply:a,multiplyMore:s,devide:p,devideMore:g,isNum:h,longitudinalStatistics:function(t){new Array(t[0].length).toString().split(",").fill(0);for(var n=0;n<t.length;n++)for(var e=0;e<t[n].length;e++)resArr[e]+=t[n][e];return resArr},horizontalStatistics:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return[].concat(n).reduce(function(t,n){return t+n},0)},previeNum:function(t,n){return void 0===t?"":0==t?n?"0":"":99<t?"99+":t},fmtAmt:d,filterMoney:function(t){var n=t(),t=n.value,n=void 0===(n=n.num)?2:n;return(t=t+""||"").replace(/-/g,"").slice(0,t.indexOf(".")+1+n)},sum:y,arrSum:function(t,n,e){var t=JSON.parse(JSON.stringify(t)),r={},e=o(t.map(function(e){return n.reduce(function(t,n){return r[n]?r[n]=u(r[n],Number(e[n])||0):r[n]=Number(e[n])||0,t=a(t,e[n]||0)},1)}),e);return{totalInfo:r,total:e}},objSum:function(t,n){var r=1<arguments.length&&void 0!==n?n:{};t=JSON.parse(JSON.stringify(t));n=y(t,r.keys),t=Object.values(t).reduce(function(t,n){var e=r.keys.map(function(t){return r.zero||0==n[t]&&(n[t]=1),n[t]}),e=(3==r.type?s:1==r.type?o:2==r.type?c:4==r.type?g:s)(e,r.len);return t=u(t,e)},0);return i({total:d(t,r.len)},n)},filterSum:function(t,n,e){var r,i={};for(r in"string"==typeof e?i[e]=0:Array.isArray(e)&&(i=e.reduce(function(t,n){return t[n]=0,t},{})),t)if(new RegExp("^"+n,"g").test(r))for(var o in i)i[o]=u(i[o],t[r][o]);return i},percentNum:function(t){t=0<arguments.length&&void 0!==t?t:"";return(t+="").trim().length?h(t)?a(t,100)+"%":"string"==typeof t&&t.includes("%")&&h(t.slice(0,-1))?p(t.slice(0,-1),100):"":""}}),new t});
//# sourceMappingURL=index.js.map
