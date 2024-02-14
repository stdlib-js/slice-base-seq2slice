// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";var s=/(?:\s*-\s*)(?=\d+)(\d+)$/,_=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;function i(e,t,i,E){var n;if("end"===e)return t;if(n=e.match(s)){if((e=t-parseInt(n[1],10))<0){if(E)return-2;e=0}return e}return(n=e.match(_))?(e=parseFloat(n[1]))<1?E?-2:-1:r(i&&t>0&&1!==e?(t-1)/e:t/e):-1}var E=/\s*:\s*/,n=/^[-+]?[0-9]+$/,f=/^end/;function d(r,s,_){var d,I,S;if((I=(d=t(r).split(E)).length)<2||I>3)return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(3===I)if(0===(S=d[2]).length)d[2]=1;else{if(!1===n.test(S))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if(0===(S=parseInt(S,10)))return{code:"ERR_SLICE_INVALID_INCREMENT"};d[2]=S}else d.push(1);if(0===(S=d[0]).length)d[2]<0&&s>0?d[0]=s-1:d[0]=0;else if(f.test(S)){if((S=i(S,s,d[2]<0,_))<0)return-2===S?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};d[2]<0&&S>=s&&(S-=1),d[0]=S}else{if(!n.test(S))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((S=parseInt(S,10))<0){if((S=s+S)<0){if(_)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};S=0}}else if(S>=s){if(_)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};S=d[2]<0?s-1:s}d[0]=S}if(0===(S=d[1]).length)d[2]<0?d[1]=null:d[1]=s;else if(f.test(S)){if((S=i(S,s,d[2]<0,_))<0)return-2===S?{code:"ERR_SLICE_OUT_OF_BOUNDS"}:{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};d[1]=S}else{if(!n.test(S))return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"};if((S=parseInt(S,10))<0){if((S=s+S)<0)if(d[2]>0){if(_)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};S=0}else{if(_&&S<-1)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};S=null}}else if(S>s){if(_)return{code:"ERR_SLICE_OUT_OF_BOUNDS"};S=s}d[1]=S}return 0===s?new e(0,0,d[2]):new e(d[0],d[1],d[2])}export{d as default};
//# sourceMappingURL=index.mjs.map