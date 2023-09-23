// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var f=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,w,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,d,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):u.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var _=String.fromCharCode,E=isNaN,F=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,a,o,f,u,p,s;if(!F(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,p=0;p<r.length;p++)if(l(n=r[p]))f+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(a=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),f+=n.arg||"",u+=1}return f}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=N.exec(r);n;)(e=r.slice(i,N.lastIndex-n[0].length)).length&&t.push(e),t.push(j(n)),i=N.lastIndex,n=N.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){return"string"==typeof r}function O(r){var e,t,n;if(!k(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var U=Object.prototype,P=U.toString,M=U.__defineGetter__,R=U.__defineSetter__,V=U.__lookupGetter__,C=U.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&M&&M.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};function L(r,e,t){$(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G="function"==typeof Math.fround?Math.fround:null;function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var B,Z=X(),K=Object.prototype.toString,W=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";B=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return K.call(r);t=r[z],a=z,e=null!=(i=r)&&W.call(i,a);try{r[z]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[z]=t:delete r[z],n}:function(r){return K.call(r)};var D,Q=B,q="function"==typeof Float32Array,H=Number.POSITIVE_INFINITY,J="function"==typeof Float32Array?Float32Array:null,rr="function"==typeof Float32Array?Float32Array:void 0,er=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J([1,3.14,-3.14,5e40]),t=e,r=(q&&t instanceof Float32Array||"[object Float32Array]"===Q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===H}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")},tr=new er(1),nr="function"==typeof G?G:function(r){return tr[0]=r,tr[0]},ir=nr(.004921566601151848),ar=nr(1.1920928955078125e-7),or=X(),cr=Object.prototype.toString,lr=Object.prototype.hasOwnProperty,fr="function"==typeof Symbol?Symbol.toStringTag:"";D=or&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return cr.call(r);t=r[fr],a=fr,e=null!=(i=r)&&lr.call(i,a);try{r[fr]=void 0}catch(e){return cr.call(r)}return n=cr.call(r),e?r[fr]=t:delete r[fr],n}:function(r){return cr.call(r)};var ur=D,pr="function"==typeof Float32Array,sr=Number.POSITIVE_INFINITY,yr="function"==typeof Float32Array?Float32Array:null,dr="function"==typeof Float32Array?Float32Array:void 0,gr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr([1,3.14,-3.14,5e40]),t=e,r=(pr&&t instanceof Float32Array||"[object Float32Array]"===ur(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===sr}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")},hr="function"==typeof Uint32Array,br="function"==typeof Uint32Array?Uint32Array:null,wr="function"==typeof Uint32Array?Uint32Array:void 0,vr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(hr&&t instanceof Uint32Array||"[object Uint32Array]"===ur(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")},mr=new gr(1);new vr(mr.buffer)[0]=4286578688;var Ar=mr[0],Sr="function"==typeof Uint32Array,_r="function"==typeof Uint32Array?Uint32Array:null,Er="function"==typeof Uint32Array?Uint32Array:void 0,Fr=function(){var r,e,t;if("function"!=typeof _r)return!1;try{e=new _r(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Sr&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Er:function(){throw new Error("not implemented")},Ir=new er(1);new Fr(Ir.buffer)[0]=2139095040;var Tr=Ir[0],Nr=nr(.0003452669770922512),jr={};return L(jr,"ABS_MASK",2147483647),L(jr,"CBRT_EPS",ir),L(jr,"EPS",ar),L(jr,"EXPONENT_BIAS",127),L(jr,"EXPONENT_MASK",2139095040),L(jr,"MAX",34028234663852886e22),L(jr,"MAX_SAFE_INTEGER",16777215),L(jr,"MIN_SAFE_INTEGER",-16777215),L(jr,"NINF",Ar),L(jr,"NUM_BYTES",4),L(jr,"PINF",Tr),L(jr,"PRECISION",24),L(jr,"SIGN_MASK",2147483648),L(jr,"SIGNIFICAND_MASK",8388607),L(jr,"SMALLEST_NORMAL",11754943508222875e-54),L(jr,"SMALLEST_SUBNORMAL",1401298464324817e-60),L(jr,"SQRT_EPS",Nr),jr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).constants=e();
//# sourceMappingURL=index.js.map
