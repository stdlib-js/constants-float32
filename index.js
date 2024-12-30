// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,_=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,A=/(\..*[^0])0*e/;function E(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,A,"$1e"),n=f.call(n,h,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,u,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,_,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):s.call(n)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var w=String.fromCharCode,b=Array.isArray;function N(e){return e!=e}function v(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,l,s,p,f,u,g,d,_;if(!b(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,p=0;p<e.length;p++)if("string"==typeof(n=e[p]))l+=n;else{if(r=void 0!==n.precision,!(n=v(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,N(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):w(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(u=n.arg,g=n.width,d=n.padRight,_=void 0,(_=g-u.length)<0?u:u=d?u+S(_):S(_)+u)),l+=n.arg||"",s+=1}return l}var m=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=m.exec(e);n;)(r=e.slice(i,m.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=m.lastIndex,n=m.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var P=Object.prototype,M=P.toString,R=P.__defineGetter__,L=P.__defineSetter__,X=P.__lookupGetter__,x=P.__lookupSetter__,B=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||x.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};function k(e,r,t){B(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var U,C="function"==typeof Math.fround?Math.fround:null,j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),H=Object.prototype.toString,V=Object.prototype.hasOwnProperty,$="function"==typeof Symbol?Symbol:void 0,W="function"==typeof $?$.toStringTag:"";U=j&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n,i,a;if(null==e)return H.call(e);t=e[W],a=W,r=null!=(i=e)&&V.call(i,a);try{e[W]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[W]=t:delete e[W],n}:function(e){return H.call(e)};var G=U,Q="function"==typeof Float32Array,Z=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null,Y="function"==typeof Float32Array?Float32Array:void 0,z=function(){var e,r,t;if("function"!=typeof K)return!1;try{r=new K([1,3.14,-3.14,5e40]),t=r,e=(Q&&t instanceof Float32Array||"[object Float32Array]"===G(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Z}catch(r){e=!1}return e}()?Y:function(){throw new Error("not implemented")},D=new z(1),q="function"==typeof C?C:function(e){return D[0]=e,D[0]},J=q(.004921566601151848),ee=q(2.718281828459045),re=q(1.1920928955078125e-7),te=q(.7853981633974483),ne=q(1.5707963267948966),ie=q(-.6931471805599453),ae=q(2.302585092994046),oe="function"==typeof Uint32Array,ce="function"==typeof Uint32Array?Uint32Array:null,le="function"==typeof Uint32Array?Uint32Array:void 0,se=function(){var e,r,t;if("function"!=typeof ce)return!1;try{r=new ce(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(oe&&t instanceof Uint32Array||"[object Uint32Array]"===G(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?le:function(){throw new Error("not implemented")},pe=new z(1);new se(pe.buffer)[0]=4286578688;var fe=pe[0],ue=q(1.618033988749895),ge=q(3.141592653589793),de=new z(1);new se(de.buffer)[0]=2139095040;var _e=de[0],ye=q(.0003452669770922512),he=q(1.772453850905516),Ae=q(1.4142135623730951),Ee=q(2.5066282746310007),Se=q(6.283185307179586),we={};return k(we,"ABS_MASK",2147483647),k(we,"CBRT_EPS",J),k(we,"E",ee),k(we,"EPS",re),k(we,"EXPONENT_BIAS",127),k(we,"EXPONENT_MASK",2139095040),k(we,"FOURTH_PI",te),k(we,"HALF_LN_TWO",.3465735912322998),k(we,"HALF_PI",ne),k(we,"LN_HALF",ie),k(we,"LN_PI",1.1447298526763916),k(we,"LN_TEN",ae),k(we,"LN_TWO",.6931471824645996),k(we,"MAX",34028234663852886e22),k(we,"MAX_BASE2_EXPONENT",127),k(we,"MAX_BASE2_EXPONENT_SUBNORMAL",-127),k(we,"MAX_BASE10_EXPONENT",38),k(we,"MAX_BASE10_EXPONENT_SUBNORMAL",-38),k(we,"MAX_SAFE_FIBONACCI",14930352),k(we,"MAX_SAFE_INTEGER",16777215),k(we,"MAX_SAFE_NTH_FACTORIAL",34),k(we,"MAX_SAFE_NTH_FIBONACCI",36),k(we,"MAX_SAFE_NTH_LUCAS",34),k(we,"MIN_BASE2_EXPONENT",-126),k(we,"MIN_BASE2_EXPONENT_SUBNORMAL",-149),k(we,"MIN_BASE10_EXPONENT",-37),k(we,"MIN_BASE10_EXPONENT_SUBNORMAL",-45),k(we,"MIN_SAFE_INTEGER",-16777215),k(we,"NAN",NaN),k(we,"NINF",fe),k(we,"NUM_BYTES",4),k(we,"PHI",ue),k(we,"PI",ge),k(we,"PINF",_e),k(we,"PRECISION",24),k(we,"SIGN_MASK",2147483648),k(we,"SIGNIFICAND_MASK",8388607),k(we,"SMALLEST_NORMAL",11754943508222875e-54),k(we,"SMALLEST_SUBNORMAL",1401298464324817e-60),k(we,"SQRT_EPS",ye),k(we,"SQRT_HALF",.7071067690849304),k(we,"SQRT_HALF_PI",1.2533141374588013),k(we,"SQRT_PHI",1.272019624710083),k(we,"SQRT_PI",he),k(we,"SQRT_THREE",1.7320507764816284),k(we,"SQRT_TWO",Ae),k(we,"SQRT_TWO_PI",Ee),k(we,"TWO_PI",Se),we},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).constants=r();
//# sourceMappingURL=index.js.map
