// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,_=/\.0$/,E=/\.0*e/,b=/(\..*[^0])0*e/;function y(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,b,"$1e"),n=f.call(n,E,"e"),n=f.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,g,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):c.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var m=String.fromCharCode,S=isNaN,w=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function R(e){var r,t,n,a,o,s,c,l,f,p,d,g,h;if(!w(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",c=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))s+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,S(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):m(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=y(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,g=n.padRight,h=void 0,(h=d-p.length)<0?p:p=g?p+v(h):v(h)+p)),s+=n.arg||"",c+=1}return s}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(N(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function C(e){var r,t;if("string"!=typeof e)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return R.apply(null,r)}var U=Object.prototype,L=U.toString,V=U.__defineGetter__,F=U.__defineSetter__,x=U.__lookupGetter__,k=U.__lookupSetter__,j=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(x.call(e,r)||k.call(e,r)?(n=e.__proto__,e.__proto__=U,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(e,r,t.get),o&&F&&F.call(e,r,t.set),e};function A(e,r,t){j(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(e,r,t){j(e,r,{configurable:!1,enumerable:!1,get:t})}function D(e){return"number"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function P(){return B&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,G=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,W="function"==typeof Z?Z.toStringTag:"",M=P()?function(e){var r,t,n,i,a;if(null==e)return Q.call(e);t=e[W],a=W,r=null!=(i=e)&&G.call(i,a);try{e[W]=void 0}catch(r){return Q.call(e)}return n=Q.call(e),r?e[W]=t:delete e[W],n}:function(e){return Q.call(e)},z=Number,X=z.prototype.toString,Y=P();function q(e){return"object"==typeof e&&(e instanceof z||(Y?function(e){try{return X.call(e),!0}catch(e){return!1}}(e):"[object Number]"===M(e)))}function J(e){return D(e)||q(e)}A(J,"isPrimitive",D),A(J,"isObject",q);var H=Number.POSITIVE_INFINITY,K=z.NEGATIVE_INFINITY,ee=Math.floor;function re(e){return e<H&&e>K&&ee(r=e)===r;var r}function te(e){return D(e)&&re(e)}function ne(e){return q(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function ae(e){return te(e)||function(e){return null===e}(e)||function(e){return void 0===e}(e)}function oe(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof oe))return new oe(r,t,n);if(!ae(r))throw new TypeError(C("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!ae(t))throw new TypeError(C("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!ae(n))throw new TypeError(C("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(C("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}A(ie,"isPrimitive",te),A(ie,"isObject",ne),A(oe,"name","Slice"),$(oe.prototype,"start",(function(){return this._start})),$(oe.prototype,"stop",(function(){return this._stop})),$(oe.prototype,"step",(function(){return this._step})),A(oe.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),A(oe.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var ue=void 0!==String.prototype.trim,se=String.prototype.trim,ce=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,le=ue&&""===se.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===se.call("᠎")?function(e){return se.call(e)}:function(e){return function(e,r,t){return e.replace(r,t)}(e,ce,"$1")},fe=/(?:\s*-\s*)(?=\d+)(\d+)$/,pe=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function de(e,r,t,n){var i;if("end"===e)return r;if(i=e.match(fe)){if((e=r-parseInt(i[1],10))<0){if(n)return-2;e=0}return e}return(i=e.match(pe))?(e=parseFloat(i[1]))<1?n?-2:-1:ee(t&&r>0&&1!==e?(r-1)/e:r/e):-1}var ge=/\s*:\s*/,he=/^[-+]?[0-9]+$/,_e=/^end/;return function(e,r,t){var n,i,a;if((i=(n=le(e).split(ge)).length)<2||i>3)return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(3===i)if(0===(a=n[2]).length)n[2]=1;else{if(!1===he.test(a))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(0===(a=parseInt(a,10)))return{code:"ERR_SLICE_INVALID_INCREMENT"};n[2]=a}else n.push(1);if(0===(a=n[0]).length)n[2]<0&&r>0?n[0]=r-1:n[0]=0;else if(_e.test(a)){if((a=de(a,r,n[2]<0,t))<0)return-2===a?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[2]<0&&a>=r&&(a-=1),n[0]=a}else{if(!he.test(a))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((a=parseInt(a,10))<0){if((a=r+a)<0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};a=0}}else if(a>=r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};a=n[2]<0?r-1:r}n[0]=a}if(0===(a=n[1]).length)n[2]<0?n[1]=null:n[1]=r;else if(_e.test(a)){if((a=de(a,r,n[2]<0,t))<0)return-2===a?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};n[1]=a}else{if(!he.test(a))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((a=parseInt(a,10))<0){if((a=r+a)<0)if(n[2]>0){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};a=0}else{if(t&&a<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};a=null}}else if(a>r){if(t)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};a=r}n[1]=a}return 0===r?new oe(0,0,n[2]):new oe(n[0],n[1],n[2])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).seq2slice=r();
//# sourceMappingURL=browser.js.map
