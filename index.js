// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=u.call(n,v,"$1e"),n=u.call(n,b,"e"),n=u.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=u.call(n,g,"e+0$1"),n=u.call(n,d,"e-0$1"),e.alternate&&(n=u.call(n,y,"$1."),n=u.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):p.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var A=String.fromCharCode,E=isNaN,N=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,s,p,f,u;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,f=0;f<e.length;f++)if(l(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,E(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),s+=n.arg||"",p+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function j(e){return"string"==typeof e}function M(e){var r,t,n;if(!j(e))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=k(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var O=Object.prototype,P=O.toString,R=O.__defineGetter__,V=O.__defineSetter__,U=O.__lookupGetter__,C=O.__lookupSetter__,$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(e,r,t.get),o&&V&&V.call(e,r,t.set),e};function L(e,r,t){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G,X="function"==typeof Math.fround?Math.fround:null,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,K=Object.prototype.hasOwnProperty,W="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof W?W.toStringTag:"";G=B&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n,i,a;if(null==e)return Z.call(e);t=e[Y],a=Y,r=null!=(i=e)&&K.call(i,a);try{e[Y]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return Z.call(e)};var z=G,D="function"==typeof Float32Array,Q=Number.POSITIVE_INFINITY,q="function"==typeof Float32Array?Float32Array:null,H="function"==typeof Float32Array?Float32Array:void 0,J=function(){var e,r,t;if("function"!=typeof q)return!1;try{r=new q([1,3.14,-3.14,5e40]),t=r,e=(D&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Q}catch(r){e=!1}return e}()?H:function(){throw new Error("not implemented")},ee=new J(1),re="function"==typeof X?X:function(e){return ee[0]=e,ee[0]},te=re(.004921566601151848),ne=re(1.1920928955078125e-7),ie="function"==typeof Uint32Array,ae="function"==typeof Uint32Array?Uint32Array:null,oe="function"==typeof Uint32Array?Uint32Array:void 0,ce=function(){var e,r,t;if("function"!=typeof ae)return!1;try{r=new ae(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ie&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")},le=new J(1);new ce(le.buffer)[0]=4286578688;var se=le[0],pe=new J(1);new ce(pe.buffer)[0]=2139095040;var fe=pe[0],ue=re(.0003452669770922512),ge={};return L(ge,"ABS_MASK",2147483647),L(ge,"CBRT_EPS",te),L(ge,"EPS",ne),L(ge,"EXPONENT_BIAS",127),L(ge,"EXPONENT_MASK",2139095040),L(ge,"MAX",34028234663852886e22),L(ge,"MAX_SAFE_INTEGER",16777215),L(ge,"MIN_SAFE_INTEGER",-16777215),L(ge,"NAN",NaN),L(ge,"NINF",se),L(ge,"NUM_BYTES",4),L(ge,"PINF",fe),L(ge,"PRECISION",24),L(ge,"SIGN_MASK",2147483648),L(ge,"SIGNIFICAND_MASK",8388607),L(ge,"SMALLEST_NORMAL",11754943508222875e-54),L(ge,"SMALLEST_SUBNORMAL",1401298464324817e-60),L(ge,"SQRT_EPS",ue),ge},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).constants=r();
//# sourceMappingURL=index.js.map
