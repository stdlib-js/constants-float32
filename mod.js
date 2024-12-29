// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function a(r){return"number"==typeof r}function t(r){var e,a="";for(e=0;e<r;e++)a+="0";return a}function n(r,e,a){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=a?r+t(i):t(i)+r,n&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,t,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,s=parseInt(t,10),!isFinite(s)){if(!a(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(t=(-s).toString(e),r.precision&&(t=n(t,r.precision,r.padRight)),t="-"+t):(t=s.toString(e),s||r.precision?r.precision&&(t=n(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):i.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,l=String.prototype.toLowerCase,_=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,u=/e-(\d)$/,A=/^(\d+)$/,E=/^(\d+)e/,N=/\.0$/,S=/\.0*e/,g=/(\..*[^0])0*e/;function d(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":c(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=p.call(t,g,"$1e"),t=p.call(t,S,"e"),t=p.call(t,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,f,"e+0$1"),t=p.call(t,u,"e-0$1"),r.alternate&&(t=p.call(t,A,"$1."),t=p.call(t,E,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===_.call(r.specifier)?_.call(t):l.call(t)}function T(r){var e,a="";for(e=0;e<r;e++)a+=" ";return a}var y=String.fromCharCode,h=Array.isArray;function I(r){return r!=r}function v(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function w(r){var e,a,t,i,o,c,l,_,p,f,u,A,E;if(!h(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,_=0;_<r.length;_++)if(t=r[_],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=v(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+_+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),a=t.flags,p=0;p<a.length;p++)switch(i=a.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=a.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,I(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,I(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!I(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=I(o)?String(t.arg):y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=d(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(f=t.arg,u=t.width,A=t.padRight,E=void 0,(E=u-f.length)<0?f:f=A?f+T(E):T(E)+f)),c+=t.arg||"",l+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function b(r){var e,a,t,n;for(a=[],n=0,t=O.exec(r);t;)(e=r.slice(n,O.lastIndex-t[0].length)).length&&a.push(e),a.push(M(t)),n=O.lastIndex,t=O.exec(r);return(e=r.slice(n)).length&&a.push(e),a}function P(r){var e,a;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[b(r)],a=1;a<arguments.length;a++)e.push(arguments[a]);return w.apply(null,e)}var F=Object.prototype,R=F.toString,L=F.__defineGetter__,m=F.__defineSetter__,X=F.__lookupGetter__,B=F.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,a){var t,n,i,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof a||null===a||"[object Array]"===R.call(a))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",a));if((n="value"in a)&&(X.call(r,e)||B.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=a.value,r.__proto__=t):r[e]=a.value),i="get"in a,o="set"in a,n&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,e,a.get),o&&m&&m.call(r,e,a.set),r};function U(r,e,a){C(r,e,{configurable:!1,enumerable:!0,writable:!1,value:a})}var H=2147483647,k="function"==typeof Math.fround?Math.fround:null;var x="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var W,G="function"==typeof Symbol?Symbol:void 0,V="function"==typeof G?G.toStringTag:"";W=x&&"symbol"==typeof Symbol.toStringTag?function(r){var e,a,t,n,i;if(null==r)return Q.call(r);a=r[V],i=V,e=null!=(n=r)&&j.call(n,i);try{r[V]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[V]=a:delete r[V],t}:function(r){return Q.call(r)};var $=W,K="function"==typeof Float32Array;var Z=Number.POSITIVE_INFINITY,Y="function"==typeof Float32Array?Float32Array:null;var D="function"==typeof Float32Array?Float32Array:void 0;var z=function(){var r,e,a;if("function"!=typeof Y)return!1;try{e=new Y([1,3.14,-3.14,5e40]),a=e,r=(K&&a instanceof Float32Array||"[object Float32Array]"===$(a))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Z}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")},q=new z(1);var J="function"==typeof k?k:function(r){return q[0]=r,q[0]},rr=J(.004921566601151848),er=J(2.718281828459045),ar=J(1.1920928955078125e-7),tr=127,nr=2139095040,ir=J(.7853981633974483),or=.3465735912322998,sr=J(1.5707963267948966),cr=J(-.6931471805599453),lr=1.1447298526763916,_r=J(2.302585092994046),pr=.6931471824645996,fr=34028234663852886e22,ur=127,Ar=-127,Er=38,Nr=-38,Sr=14930352,gr=16777215,dr=34,Tr=36,yr=34,hr=-126,Ir=-149,vr=-37,wr=-45,Or=-16777215,Mr=NaN,br="function"==typeof Uint32Array;var Pr="function"==typeof Uint32Array?Uint32Array:null;var Fr="function"==typeof Uint32Array?Uint32Array:void 0;var Rr=function(){var r,e,a;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,4294967296,4294967297]),a=e,r=(br&&a instanceof Uint32Array||"[object Uint32Array]"===$(a))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},Lr=new z(1);new Rr(Lr.buffer)[0]=4286578688;var mr=Lr[0],Xr=4,Br=J(1.618033988749895),Cr=J(3.141592653589793),Ur=new z(1);new Rr(Ur.buffer)[0]=2139095040;var Hr=Ur[0],kr=24,xr=2147483648,Qr=8388607,jr=11754943508222875e-54,Wr=1401298464324817e-60,Gr=J(.0003452669770922512),Vr=.7071067690849304,$r=1.2533141374588013,Kr=1.272019624710083,Zr=J(1.772453850905516),Yr=1.7320507764816284,Dr=J(1.4142135623730951),zr=J(2.5066282746310007),qr=J(6.283185307179586),Jr={};U(Jr,"ABS_MASK",H),U(Jr,"CBRT_EPS",rr),U(Jr,"E",er),U(Jr,"EPS",ar),U(Jr,"EXPONENT_BIAS",127),U(Jr,"EXPONENT_MASK",nr),U(Jr,"FOURTH_PI",ir),U(Jr,"HALF_LN_TWO",or),U(Jr,"HALF_PI",sr),U(Jr,"LN_HALF",cr),U(Jr,"LN_PI",lr),U(Jr,"LN_TEN",_r),U(Jr,"LN_TWO",pr),U(Jr,"MAX",fr),U(Jr,"MAX_BASE2_EXPONENT",127),U(Jr,"MAX_BASE2_EXPONENT_SUBNORMAL",-127),U(Jr,"MAX_BASE10_EXPONENT",38),U(Jr,"MAX_BASE10_EXPONENT_SUBNORMAL",-38),U(Jr,"MAX_SAFE_FIBONACCI",Sr),U(Jr,"MAX_SAFE_INTEGER",gr),U(Jr,"MAX_SAFE_NTH_FACTORIAL",34),U(Jr,"MAX_SAFE_NTH_FIBONACCI",36),U(Jr,"MAX_SAFE_NTH_LUCAS",34),U(Jr,"MIN_BASE2_EXPONENT",-126),U(Jr,"MIN_BASE2_EXPONENT_SUBNORMAL",-149),U(Jr,"MIN_BASE10_EXPONENT",-37),U(Jr,"MIN_BASE10_EXPONENT_SUBNORMAL",-45),U(Jr,"MIN_SAFE_INTEGER",Or),U(Jr,"NAN",NaN),U(Jr,"NINF",mr),U(Jr,"NUM_BYTES",4),U(Jr,"PHI",Br),U(Jr,"PI",Cr),U(Jr,"PINF",Hr),U(Jr,"PRECISION",24),U(Jr,"SIGN_MASK",xr),U(Jr,"SIGNIFICAND_MASK",Qr),U(Jr,"SMALLEST_NORMAL",jr),U(Jr,"SMALLEST_SUBNORMAL",Wr),U(Jr,"SQRT_EPS",Gr),U(Jr,"SQRT_HALF",Vr),U(Jr,"SQRT_HALF_PI",$r),U(Jr,"SQRT_PHI",Kr),U(Jr,"SQRT_PI",Zr),U(Jr,"SQRT_THREE",Yr),U(Jr,"SQRT_TWO",Dr),U(Jr,"SQRT_TWO_PI",zr),U(Jr,"TWO_PI",qr);export{H as ABS_MASK,rr as CBRT_EPS,er as E,ar as EPS,tr as EXPONENT_BIAS,nr as EXPONENT_MASK,ir as FOURTH_PI,or as HALF_LN_TWO,sr as HALF_PI,cr as LN_HALF,lr as LN_PI,_r as LN_TEN,pr as LN_TWO,fr as MAX,Er as MAX_BASE10_EXPONENT,Nr as MAX_BASE10_EXPONENT_SUBNORMAL,ur as MAX_BASE2_EXPONENT,Ar as MAX_BASE2_EXPONENT_SUBNORMAL,Sr as MAX_SAFE_FIBONACCI,gr as MAX_SAFE_INTEGER,dr as MAX_SAFE_NTH_FACTORIAL,Tr as MAX_SAFE_NTH_FIBONACCI,yr as MAX_SAFE_NTH_LUCAS,vr as MIN_BASE10_EXPONENT,wr as MIN_BASE10_EXPONENT_SUBNORMAL,hr as MIN_BASE2_EXPONENT,Ir as MIN_BASE2_EXPONENT_SUBNORMAL,Or as MIN_SAFE_INTEGER,Mr as NAN,mr as NINF,Xr as NUM_BYTES,Br as PHI,Cr as PI,Hr as PINF,kr as PRECISION,Qr as SIGNIFICAND_MASK,xr as SIGN_MASK,jr as SMALLEST_NORMAL,Wr as SMALLEST_SUBNORMAL,Gr as SQRT_EPS,Vr as SQRT_HALF,$r as SQRT_HALF_PI,Kr as SQRT_PHI,Zr as SQRT_PI,Yr as SQRT_THREE,Dr as SQRT_TWO,zr as SQRT_TWO_PI,qr as TWO_PI,Jr as default};
//# sourceMappingURL=mod.js.map
