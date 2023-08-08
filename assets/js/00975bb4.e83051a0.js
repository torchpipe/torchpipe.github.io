"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"context",title:"context: \u81ea\u52a8map\u8bed\u6cd5\u7cd6",type:"explainer"},c=void 0,i={unversionedId:"Inter-node/context",id:"Inter-node/context",title:"context: \u81ea\u52a8map\u8bed\u6cd5\u7cd6",description:"\u5728\u4e0a\u8282\u7684\u591a\u5206\u652f\u793a\u4f8b\u4e2d\uff0c\u4e24\u4e2a\u5206\u652f\u90fd\u53ef\u80fd\u88ab\u8df3\u8fc7\u3002\u4e3a\u4e86\u8bb0\u5f55\u6bcf\u4e2a\u5206\u652f\u7684\u72b6\u6001\uff0c\u4ee5\u53ca\u5c06\u7ed3\u679c\u90fd\u6c47\u603b\u5230\u6700\u7ec8\u7684\u7ed3\u679c\uff0c\u9700\u8981\u5f88\u591a\u7684\u952e\u503c\u548c\u590d\u6742\u7684map\u914d\u7f6e\u3002",source:"@site/docs/Inter-node/context.mdx",sourceDirName:"Inter-node",slug:"/Inter-node/context",permalink:"/docs/Inter-node/context",draft:!1,editUrl:"https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/docs/Inter-node/context.mdx",tags:[],version:"current",lastUpdatedBy:"zhangshiyang",lastUpdatedAt:1691479968,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"context",title:"context: \u81ea\u52a8map\u8bed\u6cd5\u7cd6",type:"explainer"},sidebar:"main",previous:{title:"filter: \u6709\u5411\u65e0\u73af\u56fe\u4e2d\u7684\u6761\u4ef6\u63a7\u5236\u6d41",permalink:"/docs/Inter-node/filter"},next:{title:"\u56fe\u7684\u8df3\u8f6c",permalink:"/docs/Inter-node/graphtraversal"}},p={},l=[{value:"\u81ea\u5b9a\u4e49\u5168\u5c40\u5171\u4eab\u7ed3\u6784\u4f53",id:"\u81ea\u5b9a\u4e49\u5168\u5c40\u5171\u4eab\u7ed3\u6784\u4f53",level:2},{value:"map\u4e2d\u7684context\u8bed\u6cd5\u7cd6",id:"map\u4e2d\u7684context\u8bed\u6cd5\u7cd6",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u4e0a\u8282\u7684\u591a\u5206\u652f\u793a\u4f8b\u4e2d\uff0c\u4e24\u4e2a\u5206\u652f\u90fd\u53ef\u80fd\u88ab\u8df3\u8fc7\u3002\u4e3a\u4e86\u8bb0\u5f55\u6bcf\u4e2a\u5206\u652f\u7684\u72b6\u6001\uff0c\u4ee5\u53ca\u5c06\u7ed3\u679c\u90fd\u6c47\u603b\u5230\u6700\u7ec8\u7684\u7ed3\u679c\uff0c\u9700\u8981\u5f88\u591a\u7684\u952e\u503c\u548c\u590d\u6742\u7684map\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5728\u5b9e\u9645\u4e1a\u52a1\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u8fd9\u6837\u4f1a\u5f88\u9ebb\u70e6\u3002 \u672c\u8282\u4ecb\u7ecd\u4e00\u79cd\u5171\u4eab\u4e0a\u4e0b\u6587\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5168\u5c40\u5171\u4eab\u7ed3\u6784\u4f53"},"\u81ea\u5b9a\u4e49\u5168\u5c40\u5171\u4eab\u7ed3\u6784\u4f53"),(0,o.kt)("mermaid",{value:"flowchart TD\n    r_1 --\x3e a_1\n    r_1 --\x3e b_1\n    a_1 --\x3e a_2_1\n    a_1 --\x3e a_2_2\n    a_2_1 --\x3e r_2\n    a_2_2 --\x3e r_2\n    b_1 --\x3e b_2\n    b_2 --\x3e r_2"}),(0,o.kt)("p",null,'\u5728r_1\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u53ef\u4ee5\u8bb0\u5f55\u6240\u6709\u5206\u652f\u7ed3\u679c\u7684\u7ed3\u6784\u4f53, \u5199\u5165\u6570\u636e\u7684"context"\u952e\u503c\u4e2d\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'struct OurStruct{\n    bool a_skiped = false;\n    bool b_skiped = false;\n    std::vector<float> a_result;\n    at::Tensor b_result;\n}\n\n(*input)["context"] = std::make_shared<OurStruct>(); //input is a dict\n\n')),(0,o.kt)("p",null,'\u5728\u6bcf\u4e2a\u5206\u652f\u4e2d\uff0c\u53ea\u5904\u7406\u81ea\u5df1\u90a3\u90e8\u5206\u7684\u6570\u636e\u3002\u8fd9\u6837\uff0c\u6211\u4eec\u4ec5\u9700\u8981\u4e00\u4e2a\u952e\u503c"context"\u5c31\u53ef\u4ee5\u5bb9\u7eb3\u6240\u6709\u6570\u636e\u3002'),(0,o.kt)("admonition",{title:"\u6570\u636e\u7ade\u4e89",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u9664\u975e\u53ea\u8bfb\uff0c\u591a\u5206\u652f\u7981\u6b62\u8bbf\u95ee\u540c\u4e00\u4e2acontext\u76f8\u540c\u90e8\u5206\u3002")),(0,o.kt)("h2",{id:"map\u4e2d\u7684context\u8bed\u6cd5\u7cd6"},"map\u4e2d\u7684context\u8bed\u6cd5\u7cd6"),(0,o.kt)("p",null,"\u4e0a\u56fe\u4e2d\uff0c\u5982\u679cb_2\u6ca1\u6709\u914d\u7f6emap\uff0c\u90a3\u4e48\u5b83\u5c06\u4e0eb_1\u5171\u4eab\u540c\u4e00\u4e2a\u6570\u636e(dict)\u3002\u5982\u679ca_2_1\u6ca1\u6709\u914d\u7f6emap\uff0c\u5b83\u5c06\u83b7\u5f97a_1\u6570\u636e\u7684\u62f7\u8d1d\u3002\u53ea\u8981\u6ca1\u6709\u914d\u7f6emap\uff0c\u8282\u70b9\u603b\u80fd\u8bbf\u95ee\u5230context. \u7136\u800c\u5f53\u4f7f\u7528\u4e86map\u65f6\uff0c\u4f1a\u65b0\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684dict\u5e76\u5c06\u6307\u5b9a\u952e\u503c\u590d\u5236\u8fc7\u6765\uff0c\u6b64\u65f6\u4e0d\u4e00\u5b9a\u4f1a\u542b\u6709context\u9879\u3002"),(0,o.kt)("admonition",{title:"\u8bed\u6cd5\u7cd6",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8emap\u914d\u7f6e\uff0c\u5982\u679c\u6570\u636e\u6e90\u4e2d\u6709context\u5c5e\u6027\uff0c\u800cmap\u6ca1\u6709\u914d\u7f6econtext\u7684\u6620\u5c04\uff0c\u90a3\u4e48map\u5c06\u81ea\u52a8\u6dfb\u52a0context\u7684\u6620\u5c04\u3002")),(0,o.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"))}d.isMDXComponent=!0}}]);