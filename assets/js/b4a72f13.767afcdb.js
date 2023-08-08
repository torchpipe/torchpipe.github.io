"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"graphtraversal",title:"\u56fe\u7684\u8df3\u8f6c",type:"explainer"},i=void 0,p={unversionedId:"Inter-node/graphtraversal",id:"Inter-node/graphtraversal",title:"\u56fe\u7684\u8df3\u8f6c",description:"\u591a\u7ea7\u7ed3\u6784\u5316",source:"@site/docs/Inter-node/graphtraversal.mdx",sourceDirName:"Inter-node",slug:"/Inter-node/graphtraversal",permalink:"/docs/Inter-node/graphtraversal",draft:!1,editUrl:"https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/docs/Inter-node/graphtraversal.mdx",tags:[],version:"current",lastUpdatedBy:"zhangshiyang",lastUpdatedAt:1691479968,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"graphtraversal",title:"\u56fe\u7684\u8df3\u8f6c",type:"explainer"},sidebar:"main",previous:{title:"context: \u81ea\u52a8map\u8bed\u6cd5\u7cd6",permalink:"/docs/Inter-node/context"},next:{title:"\u903b\u8f91\u8282\u70b9",permalink:"/docs/Inter-node/logical_nodes"}},d={},u=[{value:"\u591a\u7ea7\u7ed3\u6784\u5316",id:"\u591a\u7ea7\u7ed3\u6784\u5316",level:2},{value:"\u56fe\u7684\u62c6\u5206",id:"\u56fe\u7684\u62c6\u5206",level:2},{value:"Jump",id:"jump",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"min()/max()",id:"minmax",level:3},{value:"MapReduce",id:"mapreduce",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316-1",level:3},{value:"\u524d\u5411\u8ba1\u7b97",id:"\u524d\u5411\u8ba1\u7b97",level:3},{value:"map",id:"map",level:4},{value:"reduce",id:"reduce",level:4},{value:"min()/max()",id:"minmax-1",level:3},{value:"split\u548cmerge\u81ea\u5b9a\u4e49\u6269\u5c55",id:"split\u548cmerge\u81ea\u5b9a\u4e49\u6269\u5c55",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],o={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u591a\u7ea7\u7ed3\u6784\u5316"},"\u591a\u7ea7\u7ed3\u6784\u5316"),(0,r.kt)("p",null,"\u8003\u8651\u5728\u8ba1\u7b97\u673a\u89c6\u89c9\u4e2d\u7684\u5982\u4e0b\u4efb\u52a1\uff1a"),(0,r.kt)("mermaid",{value:"flowchart LR\n    A[\u89e3\u7801] --\x3e B[\u76ee\u6807\u68c0\u6d4b]\n    B --\x3e C[\u5206\u7c7bC]\n    subgraph \u4e8c\u7ea7\u5b50\u56fe\n    C --\x3e D1[\u5176\u4ed6D1]\n    C --\x3e D2[\u5176\u4ed6D2]\n    D1 --\x3e E\n    D2 --\x3e E\n    end\n    E --\x3e F[\u5408\u5e76\u7ed3\u679cF]\n    "}),(0,r.kt)("p",null,"\u4e4d\u770b\u4e4b\u4e0b\u4f3c\u4e4e\u5b83\u5f62\u6210\u4e86\u5b8c\u6574\u7684\u6709\u5411\u65e0\u73af\u56fe\uff0c\u7136\u800c\u5b9e\u9645\u4e2d\u5b58\u5728\u5982\u4e0b\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A. \u76ee\u6807\u68c0\u6d4b\u4ea7\u751f\u4e86\u591a\u4e2a\u5b50\u76ee\u6807\uff08\u5b50\u4e0a\u4e0b\u6587\uff09\u8fdb\u5165\u4e86CDE\uff0c\u591a\u4e2a\u5b50\u76ee\u6807\u53c8\u5728F\u4e2d\u53d1\u751f\u4e86\u5408\u5e76"),(0,r.kt)("li",{parentName:"ul"},"B. \u5b50\u76ee\u6807\u5728CDE\u4e2d\u5e94\u8be5\u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u4e0d\u5e94\u8be5\u76f8\u4e92\u7b49\u5f85\u8dd1\u5b8c\u67d0\u4e2a\u8282\u70b9\u518d\u53bb\u8dd1\u4e0b\u4e00\u4e2a\u8282\u70b9")),(0,r.kt)("p",null,"\u5173\u4e8eA\uff0c\u6211\u4eec\u8ba4\u4e3a\u662f\u4e0a\u4e0b\u6587\u53d1\u751f\u4e86\u53d8\u5316\uff1b\u5b50\u4e0a\u4e0b\u6587\u6d41\u7ecf\u4e86CED\u6784\u6210\u7684\u72ec\u7acb\u7684\u56fe\u3002\u5173\u4e8eB\uff0c\u6211\u4eec\u8ba4\u4e3a\u540c\u7ea7\u522b\u7684\u591a\u4e2a\u4e0a\u4e0b\u6587\u5728\u8282\u70b9\u4e0a\u4e0d\u4e00\u5b9a\u9700\u8981\u8fdb\u884c\u540c\u6b65\u3002"),(0,r.kt)("p",null,"CDE\u5f62\u6210\u4e86\u4e8b\u5b9e\u4e0a\u7684\u5b50\u56fe\uff0c\u7136\u800c\u6211\u4eec\u53d1\u73b0\u5f88\u96be\u7528\u5b50\u56fe\u7684\u89c6\u89d2\u8fdb\u884c\u901a\u7528\u7684\u8bbe\u8ba1\u3002\u672c\u8d28\u4e0a\u6211\u4eec\u8981\u5904\u7406\u4e00\u4e2a\u4ee5\u6709\u5411\u65e0\u73af\u56fe\u4e3a\u8282\u70b9\u7684\u6709\u5411\u65e0\u73af\u56fe\uff0c\u5e76\u4e14\u53ef\u4ee5\u662f\u9012\u5f52\u7684\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7528\u6237\u5c06\u56fe\u62c6\u4e3a\u591a\u4e2a\u90e8\u5206\uff0c\u8fdb\u884c\u56fe\u95f4\u8df3\u8f6c\u3002"),(0,r.kt)("h2",{id:"\u56fe\u7684\u62c6\u5206"},"\u56fe\u7684\u62c6\u5206"),(0,r.kt)("p",null,"\u539f\u59cb\u56fe\u53ef\u4ee5\u62c6\u6210\u4e24\u90e8\u5206\u3002\n\u4e3b\u5e72\uff1a"),(0,r.kt)("mermaid",{value:"flowchart LR\n    A[\u89e3\u7801] --\x3e B[\u76ee\u6807\u68c0\u6d4b]\n    B --\x3e MapReduce[MapReduce\u540e\u7aef]\n    MapReduce --\x3e F"}),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("a",{parentName:"p",href:"#mapreduce"},"MapReduce"),"\u662f\u4e00\u4e2a\u529f\u80fd\u6027\u7684\u540e\u7aef\uff0c\u5b83\u5c06\u6570\u636e\u5206\u88c2\u4e3a\u5b50\u4e0a\u4e0b\u6587\uff0c\u9001\u5165\u4ee5\u4e0b\u56fe\uff1a"),(0,r.kt)("mermaid",{value:"flowchart LR\n    C[\u5206\u7c7bC] --\x3e D1[\u5176\u4ed6D1]\n    C[\u5206\u7c7bC] --\x3e D2[\u5176\u4ed6D2]\n    D1 --\x3e E\n    D2 --\x3e E"}),(0,r.kt)("p",null,"\u7136\u540e\u5c06E\u4e2d\u7684\u591a\u4e2a\u5b50\u4e0a\u4e0b\u6587\u5408\u5e76\u8d77\u6765\u3002"),(0,r.kt)("p",null,"\u6574\u4f53\u5982\u4e0b\u6240\u793a\uff0c\u8df3\u8f6c\u76ee\u6807\u88ab\u5f53\u4f5c\u4e86\u4e00\u4e2a\u8282\u70b9\uff1a"),(0,r.kt)("mermaid",{value:"flowchart LR\n    A[\u89e3\u7801] --\x3e B[\u76ee\u6807\u68c0\u6d4b]\n    B --\x3e MapReduce\n    MapReduce --\x3e F\n\n   \n\n    subgraph MapReduce [MapReduce\u8282\u70b9]\n    C[\u5206\u7c7bC] --\x3e D1[\u5176\u4ed6D1]\n    C[\u5206\u7c7bC] --\x3e D2[\u5176\u4ed6D2]\n    D1 --\x3e E\n    D2 --\x3e E\n    end\n\n   \n\n    "}),(0,r.kt)("h2",{id:"jump"},"Jump"),(0,r.kt)("p",null,"\u8df3\u8f6c\u5230\u53e6\u5916\u4e00\u4e2a\u8282\u70b9\uff08\u9700\u8981\u662f\u6839\u8282\u70b9\uff09"),(0,r.kt)("admonition",{title:"\u4e0a\u4e0b\u6587\u5207\u6362",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u4e0d\u8fde\u901a\u7684\u4e24\u4e2a\u56fe\uff0c\u591a\u8282\u70b9\u8c03\u5ea6\u7cfb\u7edf\u4e0d\u5171\u4eab\u8282\u70b9\u7684\u6570\u636e\u4e0a\u4e0b\u6587\u3002")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jump")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u8df3\u8f6c\u5230\u7684\u76ee\u6807\u56fe\u7684\u6839\u8282\u70b9\u8282\u70b9\u540d\uff1b\u53ea\u80fd\u6709\u4e00\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"minmax"},"min()/max()"),(0,r.kt)("p",null,"[1, UINT32_MAX]"),(0,r.kt)("h2",{id:"mapreduce"},"MapReduce"),(0,r.kt)("p",null,"MapReduce\u662fJump\u7684\u5b50\u7c7b\uff0c\u91cd\u65b0\u5b9e\u73b0\u4e86split\u548cmerge\u64cd\u4f5c\u3002\nMapReduce\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a"),"\u8f93\u5165\u6570\u636e\u62c6\u5206\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u591a\u4e2a"),"\uff08split\u64cd\u4f5c\uff09, \u8df3\u8f6c\u5230\u5176\u4ed6\u56fe\u540e\u8fdb\u884c\u8ba1\u7b97\uff0c\u5f85\u6240\u6709\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"\u591a\u4e2a"),"\u6570\u636e\u5408\u5e76\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a"),"(merge\u64cd\u4f5c)\u3002 "),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316-1"},"\u521d\u59cb\u5316"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"split")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f85\u5206\u88c2\u7684\u952e\u503c\uff0c\u591a\u4e2a\u4ee5\u9017\u53f7\u5206\u5f00"),(0,r.kt)("td",{parentName:"tr",align:null},'\u9ed8\u8ba4\u503c: "data", \u4e3a\u7a7a\u65f6\u628a\u81ea\u8eab\u4f5c\u4e3a\u5206\u88c2\u540e\u7684\u5bf9\u8c61')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"merge")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f85\u5408\u5e76\u7684\u952e\u503c\uff0c\u591a\u4e2a\u4ee5\u9017\u53f7\u5206\u5f00"),(0,r.kt)("td",{parentName:"tr",align:null},'\u9ed8\u8ba4\u503c: "result"\uff0c\u4e0d\u80fd\u4e3a\u7a7a')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jump")),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u8df3\u8f6c\u5230\u7684\u76ee\u6807\u56fe\u7684\u6839\u8282\u70b9\uff1b\u53ea\u80fd\u6709\u4e00\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ee7\u627f\u81ea\u57fa\u7c7bJump")))),(0,r.kt)("h3",{id:"\u524d\u5411\u8ba1\u7b97"},"\u524d\u5411\u8ba1\u7b97"),(0,r.kt)("h4",{id:"map"},"map"),(0,r.kt)("p",null,"\u62f7\u8d1d\u8f93\u5165\u6570\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"dict"),"\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"split\u952e\u503c"),"\u5bf9\u5e94\u7684\u6570\u636e\u8fdb\u884c\u62c6\u5206\u3002\u8981\u6c42\u539f\u59cb\u6570\u636e\u4e2dsplit\u952e\u503c\u5bf9\u5e94\u7684\u6570\u636e\u7c7b\u578b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"std::vector<T>"),"."),(0,r.kt)("h4",{id:"reduce"},"reduce"),(0,r.kt)("p",null,"\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"merge"),"\u53c2\u6570\u8fdb\u884c\u7ed3\u679c\u5408\u5e76\uff0c\u5408\u5e76\u540e\u7684\u7c7b\u578b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"std::vector<any>")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e00\u4e2a\u5b50\u4efb\u52a1\u5931\u8d25\uff08\u7ed3\u679c\u4e2d\u6ca1\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"result"),"\uff09,\u90a3\u4e48\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u8fdb\u884c\u5408\u5e76",(0,r.kt)("inlineCode",{parentName:"p"},"result"),"\u65f6\uff0c\u5c06\u629b\u51fa\u5f02\u5e38\uff0c\u5bfc\u81f4\u76f8\u5173\u8054\u7684\u5b50\u4efb\u52a1\u90fd\u5f02\u5e38\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u8fd9\u79cd\u884c\u4e3a\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff1b\u4f46\u662f\u5982\u679c\u9700\u8981\u5141\u8bb8\u5b50\u4efb\u52a1\u65e0",(0,r.kt)("inlineCode",{parentName:"p"},"result"),"\u65f6\uff0c\u4e0d\u5f71\u54cd\u5173\u8054\u5b50\u4efb\u52a1\uff0c\u53ef\u4ee5\u8003\u8651\u5982\u4e0b\u63aa\u65bd\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u540e\u7aef\u91cd\u65b0\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"li"},"merge"),"\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528context\u8bed\u6cd5\u7cd6\uff08MapReduce\u4e0d\u4f1a\u5728\u6267\u884csplit/merge\u65f6\u81ea\u52a8\u62f7\u8d1dcontext\uff09"))),(0,r.kt)("h3",{id:"minmax-1"},"min()/max()"),(0,r.kt)("p",null,"[1, UINT32_MAX]"),(0,r.kt)("h2",{id:"split\u548cmerge\u81ea\u5b9a\u4e49\u6269\u5c55"},"split\u548cmerge\u81ea\u5b9a\u4e49\u6269\u5c55"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u7684split\u548cmerge\u64cd\u4f5c\u4e0d\u4e00\u5b9a\u80fd\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u53ef\u7ee7\u627fJump\u8fdb\u884c\u81ea\u5b9a\u4e49\u6269\u5c55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Jump.hpp"\n\nclass YourMapReduce : public ipipe::Jump{\n\n  virtual std::vector<dict> split(dict data) override{\n    // highlight-next-line\n    return {data}; // <== Revise this implementation.\n  }\n  virtual dict merge(const std::vector<dict>& data) override{\n    // highlight-next-line\n    return data[0];// <== Revise this implementation.\n  }\n\n  // \u5982\u679c\u6709\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u53c2\u6570\u9700\u8981\u63a5\u6536\uff0c\u5b9e\u73b0\u4ee5\u4e0b\u51fd\u6570\uff1a\n  virtual bool post_init(const std::unordered_map<std::string, std::string>& config,\n                         dict dict_config) override{\n    return true;\n  }\n};\n')),(0,r.kt)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),(0,r.kt)("p",null,"\u76ee\u524d\u8df3\u8f6c\u5230\u591a\u4e2a\u8282\u70b9\u662f\u4e0d\u652f\u6301\u7684\uff0c\u591a\u4e2a\u8282\u70b9\u5408\u5e76\u4e5f\u662f\u4e0d\u652f\u6301\u7684\uff0c\u4e5f\u5c31\u662f\u76ee\u6807\u56fe\u7684\u6839\u8282\u70b9\u548c\u53f6\u5b50\u8282\u70b9\u6570\u91cf\u90fd\u9700\u8981\u662f1."),(0,r.kt)("p",null,"\u4ee5\u4e0b\u56fe\u5982\u679c\u7528\u6237\u4e0d\u589e\u52a0\u4e2d\u95f4\u8282\u70b9\uff0c\u662f\u6ca1\u6cd5\u5904\u7406\u7684\u3002"),(0,r.kt)("mermaid",{value:"flowchart LR\n    A[\u89e3\u7801] --\x3e B[\u76ee\u6807\u68c0\u6d4b]\n    B --\x3e E\n    B --\x3e C[\u5206\u7c7bC]\n    subgraph \u591a\u6839/\u53f6\u5b50\u8282\u70b9\u7684\u4e8c\u7ea7\u5b50\u56fe\n    C --\x3e D[\u5176\u4ed6D]\n    E\n    end\n    E --\x3e F[\u5408\u5e76\u7ed3\u679cF]\n    D --\x3e F"}),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"))}c.isMDXComponent=!0}}]);