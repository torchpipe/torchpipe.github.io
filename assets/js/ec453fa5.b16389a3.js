"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={id:"vis",title:"\u914d\u7f6e\u6587\u4ef6\u53ef\u89c6\u5316",type:"explainer"},i=void 0,l={unversionedId:"tools/vis",id:"tools/vis",title:"\u914d\u7f6e\u6587\u4ef6\u53ef\u89c6\u5316",description:"\u9488\u5bf9\u914d\u7f6e\u6587\u4ef6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u7f51\u9875\u53ef\u89c6\u5316\u529f\u80fd\u3002",source:"@site/docs/tools/vis.mdx",sourceDirName:"tools",slug:"/tools/vis",permalink:"/docs/tools/vis",draft:!1,editUrl:"https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/docs/tools/vis.mdx",tags:[],version:"current",lastUpdatedBy:"zhangshiyang",lastUpdatedAt:1691479968,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"vis",title:"\u914d\u7f6e\u6587\u4ef6\u53ef\u89c6\u5316",type:"explainer"},sidebar:"main",previous:{title:"\u6d41\u6c34\u7ebf\u8c03\u5ea6\u7cfb\u7edf\u7684\u8c03\u8bd5",permalink:"/docs/tools/debug"},next:{title:"\u6027\u80fd\u62a5\u544a",permalink:"/docs/benchmark"}},p={},s=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"parameter",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9488\u5bf9\u914d\u7f6e\u6587\u4ef6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u7f51\u9875\u53ef\u89c6\u5316\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get update\napt install graphviz\npip install pydot gradio\n")),(0,o.kt)("h2",{id:"parameter"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"torchpipe.utils.vis [-h] [--port PORT] [--save] toml")),(0,o.kt)("admonition",{title:"\u53c2\u6570",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"--save")," - \u662f\u5426\u5c06\u56fe\u4fdd\u5b58\u4e3asvg\u56fe\u7247\u3002\u56fe\u7247\u5c06\u4fdd\u5b58\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u4e0etoml\u6587\u4ef6\uff08\u540e\u7f00\u4e0d\u540c\uff09"))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m torchpipe.utils.vis your.toml # --port 2211\n")))}d.isMDXComponent=!0}}]);