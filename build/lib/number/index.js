!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).number=n()}(this,function(){"use strict";function l(t,n){return void 0===n?t:Number(Math.round(t+"e"+(n||0))+"e-"+(n||0))}function u(t,n,r,e){var o,u;try{o=n.toString().split(".")[1].length}catch(t){o=0}try{u=r.toString().split(".")[1].length}catch(t){u=0}var i=Math.pow(10,Math.max(o,u)),d=[l((Math.round(i*n)+Math.round(i*r))/i,e),l((Math.round(i*n)-Math.round(i*r))/i,e),l(Math.round(i*n)*Math.round(i*r)/(i*i),e),l(Math.round(i*n)/Math.round(i*r),e)],i=String(l(d[t],e||0));return e?i.includes(".")?i.split(".")[0]+"."+i.split(".")[1].padEnd(e,0):(i+".").padEnd((i+".").length+e,0):d[t]}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"symbol"!=n(t)&&(!isNaN(parseFloat(t))&&isFinite(t))}return{add:function r(t,e,n){return Array.isArray(t)?t.length?t.reduce(function(t,n){return r(t,n,e)},0):0:u(0,t,e,n)},calc:u,devide:function r(t,e,n){return Array.isArray(t)?2<=t.length?t.reduce(function(t,n){return r(t,n,e)}):"":t&&e?u(3,t,e,n):""},fmtNum:function(t,n,r){var e=1<arguments.length&&void 0!==n&&n,o=2<arguments.length?r:void 0;if(void 0===t||null==t)return"";if(!i(n=t+""))return"";r=!n.includes("."),t=0==(o=void 0===o?r?0:n.split(".")[1].length:o)?Math.round(n)+"":(r?n:round(+n+"",o)+"").split(".")[0],n=round(+n+"",o)+"",n=((n=0==o||r?"":n.split(".")[1])||"").padEnd(o,0);return(e?t.replace(/(?=(?!\b)(\d{3})+$)/g,","):t)+(n.length?"."+n:"")},isNum:i,multiply:function r(t,e,n){return Array.isArray(t)?t.length?t.reduce(function(t,n){return r(t,n,e)},1):0:u(2,t,e,n)},round:l,subtract:function r(t,n,e){var t=0<arguments.length&&void 0!==t?t:0,o=1<arguments.length&&void 0!==n?n:0,e=2<arguments.length?e:void 0;return Array.isArray(t)?t.length?t.reduce(function(t,n){return r(t,n,o)}):0:u(1,t,o,e)},isInteger:function(t){return"number"==typeof t&&!isNaN(t)&&t%1==0}}});
//# sourceMappingURL=index.js.map
