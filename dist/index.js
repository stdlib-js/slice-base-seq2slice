"use strict";var f=function(i,t){return function(){try{return t||i((t={exports:{}}).exports,t),t.exports}catch(s){throw t=0,s}}};var _=f(function(X,o){"use strict";var M=/(?:\s*-\s*)(?=\d+)(\d+)$/;o.exports=M});var p=f(function(Y,I){"use strict";var $=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;I.exports=$});var c=f(function(Z,R){"use strict";var N=require("@stdlib/math-base-special-floor"),w=_(),A=p();function F(i,t,s,e){var u;if(i==="end")return t;if(u=i.match(w),u){if(i=t-parseInt(u[1],10),i<0){if(e)return-2;i=0}return i}return u=i.match(A),u?(i=parseFloat(u[1]),i<1?e?-2:-1:s&&t>0&&i!==1?N((t-1)/i):N(t/i)):-1}R.exports=F});var v=f(function(rr,d){"use strict";var G=/\s*:\s*/;d.exports=G});var q=f(function(er,l){"use strict";var P=/^[-+]?[0-9]+$/;l.exports=P});var S=f(function(tr,D){"use strict";var b=/^end/;D.exports=b});var O=f(function(ir,x){"use strict";function Q(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}x.exports=Q});var C=f(function(sr,h){"use strict";function j(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}h.exports=j});var m=f(function(ur,L){"use strict";function k(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}L.exports=k});var B=f(function(fr,V){"use strict";var U=require("@stdlib/slice-ctor"),y=require("@stdlib/string-base-trim"),g=c(),z=v(),a=q(),T=S(),E=O(),n=C(),H=m();function J(i,t,s){var e,u,r;if(e=y(i).split(z),u=e.length,u<2||u>3)return E();if(u===3)if(r=e[2],r.length===0)e[2]=1;else{if(a.test(r)===!1)return E();if(r=parseInt(r,10),r===0)return H();e[2]=r}else e.push(1);if(r=e[0],r.length===0)e[2]<0&&t>0?e[0]=t-1:e[0]=0;else if(T.test(r)){if(r=g(r,t,e[2]<0,s),r<0)return r===-2?n():E();e[2]<0&&r>=t&&(r-=1),e[0]=r}else if(a.test(r)){if(r=parseInt(r,10),r<0){if(r=t+r,r<0){if(s)return n();r=0}}else if(r>=t){if(s)return n();e[2]<0?r=t-1:r=t}e[0]=r}else return E();if(r=e[1],r.length===0)e[2]<0?e[1]=null:e[1]=t;else if(T.test(r)){if(r=g(r,t,e[2]<0,s),r<0)return r===-2?n():E();e[1]=r}else if(a.test(r)){if(r=parseInt(r,10),r<0){if(r=t+r,r<0)if(e[2]>0){if(s)return n();r=0}else{if(s&&r<-1)return n();r=null}}else if(r>t){if(s)return n();r=t}e[1]=r}else return E();return t===0?new U(0,0,e[2]):new U(e[0],e[1],e[2])}V.exports=J});var K=B();module.exports=K;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
