"use strict";var u=function(i,t){return function(){return t||i((t={exports:{}}).exports,t),t.exports}};var _=u(function(X,o){
var M=/(?:\s*-\s*)(?=\d+)(\d+)$/;o.exports=M
});var p=u(function(Y,I){
var $=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;I.exports=$
});var c=u(function(Z,R){
var N=require('@stdlib/math-base-special-floor/dist'),w=_(),A=p();function F(i,t,f,e){var s;if(i==="end")return t;if(s=i.match(w),s){if(i=t-parseInt(s[1],10),i<0){if(e)return-2;i=0}return i}return s=i.match(A),s?(i=parseFloat(s[1]),i<1?e?-2:-1:f&&t>0&&i!==1?N((t-1)/i):N(t/i)):-1}R.exports=F
});var v=u(function(rr,d){
var G=/\s*:\s*/;d.exports=G
});var q=u(function(er,l){
var P=/^[-+]?[0-9]+$/;l.exports=P
});var S=u(function(tr,D){
var b=/^end/;D.exports=b
});var O=u(function(ir,x){
function Q(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}x.exports=Q
});var C=u(function(sr,h){
function j(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}h.exports=j
});var m=u(function(ur,L){
function k(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}L.exports=k
});var B=u(function(fr,V){
var U=require('@stdlib/slice-ctor/dist'),y=require('@stdlib/string-base-trim/dist'),g=c(),z=v(),a=q(),T=S(),E=O(),n=C(),H=m();function J(i,t,f){var e,s,r;if(e=y(i).split(z),s=e.length,s<2||s>3)return E();if(s===3)if(r=e[2],r.length===0)e[2]=1;else{if(a.test(r)===!1)return E();if(r=parseInt(r,10),r===0)return H();e[2]=r}else e.push(1);if(r=e[0],r.length===0)e[2]<0&&t>0?e[0]=t-1:e[0]=0;else if(T.test(r)){if(r=g(r,t,e[2]<0,f),r<0)return r===-2?n():E();e[2]<0&&r>=t&&(r-=1),e[0]=r}else if(a.test(r)){if(r=parseInt(r,10),r<0){if(r=t+r,r<0){if(f)return n();r=0}}else if(r>=t){if(f)return n();e[2]<0?r=t-1:r=t}e[0]=r}else return E();if(r=e[1],r.length===0)e[2]<0?e[1]=null:e[1]=t;else if(T.test(r)){if(r=g(r,t,e[2]<0,f),r<0)return r===-2?n():E();e[1]=r}else if(a.test(r)){if(r=parseInt(r,10),r<0){if(r=t+r,r<0)if(e[2]>0){if(f)return n();r=0}else{if(f&&r<-1)return n();r=null}}else if(r>t){if(f)return n();r=t}e[1]=r}else return E();return t===0?new U(0,0,e[2]):new U(e[0],e[1],e[2])}V.exports=J
});var K=B();module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
