// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var o=t,i=n;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===t||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(r){try{return o.call(null,e,0)}catch(r){return o.call(this,e,0)}}}"function"==typeof r.setTimeout&&(o=setTimeout),"function"==typeof r.clearTimeout&&(i=clearTimeout);var a,c=[],f=!1,l=-1;function s(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&m())}function m(){if(!f){var e=u(s);f=!0;for(var r=c.length;r;){for(a=c,c=[];++l<r;)a&&a[l].run();l=-1,r=c.length}a=null,f=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===n||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(r){try{return i.call(null,e)}catch(r){return i.call(this,e)}}}(e)}}function d(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new h(e,r)),1!==c.length||f||u(m)}function h(e,r){this.fun=e,this.array=r}h.prototype.run=function(){this.fun.apply(null,this.array)};var w={},p=[],v={},g={},b={};function T(){}var y=T,_=T,k=T,L=T,O=T,j=T,E=T;function D(e){throw new Error("process.binding is not supported")}function M(){return"/"}function N(e){throw new Error("process.chdir is not supported")}function x(){return 0}var A=r.performance||{},P=A.now||A.mozNow||A.msNow||A.oNow||A.webkitNow||function(){return(new Date).getTime()};function z(e){var r=.001*P.call(A),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var q=new Date;function B(){return(new Date-q)/1e3}var C={nextTick:d,title:"browser",browser:true,env:w,argv:p,version:"",versions:v,on:y,addListener:_,once:k,off:L,removeListener:O,removeAllListeners:j,emit:E,binding:D,cwd:M,chdir:N,umask:x,hrtime:z,platform:"browser",release:g,config:b,uptime:B},F="darwin"===e(Object.freeze({__proto__:null,addListener:_,argv:p,binding:D,browser:true,chdir:N,config:b,cwd:M,default:C,emit:E,env:w,hrtime:z,nextTick:d,off:L,on:y,once:k,platform:"browser",release:g,removeAllListeners:j,removeListener:O,title:"browser",umask:x,uptime:B,version:"",versions:v})).platform;export{F as default};
//# sourceMappingURL=mod.js.map
