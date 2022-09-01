// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,l=e.__lookupGetter__,i=e.__lookupSetter__;var u=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,u){var c,f,y,_;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===n.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((f="value"in u)&&(l.call(t,r)||i.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=u.value,t.__proto__=c):t[r]=u.value),y="get"in u,_="set"in u,f&&(y||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,u.get),_&&a&&a.call(t,r,u.set),t};function c(t,r,e){u(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}var f="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var _=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var S,E="function"==typeof Symbol?Symbol.toStringTag:"";S=y&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,o,a;if(null==t)return _.call(t);e=t[E],a=E,r=null!=(o=t)&&p.call(o,a);try{t[E]=void 0}catch(r){return _.call(t)}return n=_.call(t),r?t[E]=e:delete t[E],n}:function(t){return _.call(t)};var A=S,v="function"==typeof Float32Array;var b=Number.POSITIVE_INFINITY,s="function"==typeof Float32Array?Float32Array:null;var N="function"==typeof Float32Array?Float32Array:void 0;var T=function(){var t,r,e;if("function"!=typeof s)return!1;try{r=new s([1,3.14,-3.14,5e40]),e=r,t=(v&&e instanceof Float32Array||"[object Float32Array]"===A(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===b}catch(r){t=!1}return t}()?N:function(){throw new Error("not implemented")},d=new T(1);var m="function"==typeof f?f:function(t){return d[0]=t,d[0]},w=m(.004921566601151848),I=m(1.1920928955078125e-7),M=127,P=34028234663852886e22,O=16777215,F=-16777215,j="function"==typeof Uint32Array;var R="function"==typeof Uint32Array?Uint32Array:null;var g="function"==typeof Uint32Array?Uint32Array:void 0;var h=function(){var t,r,e;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,4294967296,4294967297]),e=r,t=(j&&e instanceof Uint32Array||"[object Uint32Array]"===A(e))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")},L=new T(1);new h(L.buffer)[0]=4286578688;var U=L[0],B=4,G=new T(1);new h(G.buffer)[0]=2139095040;var X=G[0],C=24,V=11754943508222875e-54,Y=1401298464324817e-60,k=m(.0003452669770922512),x={};c(x,"CBRT_EPS",w),c(x,"EPS",I),c(x,"EXPONENT_BIAS",127),c(x,"MAX",P),c(x,"MAX_SAFE_INTEGER",16777215),c(x,"MIN_SAFE_INTEGER",-16777215),c(x,"NINF",U),c(x,"NUM_BYTES",4),c(x,"PINF",X),c(x,"PRECISION",24),c(x,"SMALLEST_NORMAL",11754943508222875e-54),c(x,"SMALLEST_SUBNORMAL",1401298464324817e-60),c(x,"SQRT_EPS",k);export{w as CBRT_EPS,I as EPS,M as EXPONENT_BIAS,P as MAX,O as MAX_SAFE_INTEGER,F as MIN_SAFE_INTEGER,U as NINF,B as NUM_BYTES,X as PINF,C as PRECISION,V as SMALLEST_NORMAL,Y as SMALLEST_SUBNORMAL,k as SQRT_EPS,x as default};
//# sourceMappingURL=mod.js.map
