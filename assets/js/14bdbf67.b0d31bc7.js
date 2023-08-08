"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,s=g["".concat(p,".").concat(m)]||g[m]||u[m]||l;return r?n.createElement(s,o(o({ref:t},d),{},{components:r})):n.createElement(s,o({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={id:"log",title:"\u65e5\u5fd7",type:"reference",displayed_sidebar:"api"},o=void 0,i={unversionedId:"backend-reference/log",id:"backend-reference/log",title:"\u65e5\u5fd7",description:"\u672c\u8282\u6587\u6863\u9a8c\u8bc1\u4e2d\u3002",source:"@site/docs/backend-reference/log.mdx",sourceDirName:"backend-reference",slug:"/backend-reference/log",permalink:"/docs/backend-reference/log",draft:!1,editUrl:"https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/docs/backend-reference/log.mdx",tags:[],version:"current",lastUpdatedBy:"zhangshiyang",lastUpdatedAt:1691479968,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"log",title:"\u65e5\u5fd7",type:"reference",displayed_sidebar:"api"},sidebar:"api",previous:{title:"torch\u76f8\u5173\u540e\u7aef",permalink:"/docs/backend-reference/torch"},next:{title:"\u5355\u8282\u70b9\u8c03\u5ea6\u7cfb\u7edf",permalink:"/docs/Intra-node/schedule"}},p={},c=[{value:"\u901f\u89c8",id:"\u901f\u89c8",level:2},{value:"Logger",id:"logger",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3}],d={toc:c},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u8282\u6587\u6863\u9a8c\u8bc1\u4e2d\u3002"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u5728\u8fdb\u7a0b\u4e2d\u53ea\u521d\u59cb\u5316\u4e00\u6b21"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u914d\u7f6e\u53c2\u6570\u76f4\u63a5\u5199\u5728\u5168\u5c40\u53c2\u6570\u4e2d"))),(0,a.kt)("h2",{id:"\u901f\u89c8"},"\u901f\u89c8"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u521d\u59cb\u5316\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#logger"},"Logger")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Logger::path"),",",(0,a.kt)("inlineCode",{parentName:"td"},"Logger::maxBytes"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"Logger::backupCount"),",",(0,a.kt)("inlineCode",{parentName:"td"},"Logger::flush_every"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"Logger::pattern")),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5b58\u5728\u4e8e\u89e3\u91ca\u5668\u7684\u73af\u5883\u521d\u59cb\u5316\u4e2d(Interpreter::env)\uff0c\u4f1a\u5728\u89e3\u91ca\u5668\u521d\u59cb\u5316\u65f6\u521d\u59cb\u5316\u4e00\u6b21."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"logger"},"Logger"),(0,a.kt)("p",null,"\u5b9e\u73b0\u65e5\u5fd7\u8f93\u51fa\u529f\u80fd\uff08\u5305\u62ec\uff1a\u63a7\u5236\u53f0\u8f93\u51fa\u3001\u6587\u4ef6\u8f93\u51fa\uff09\u3002\n\u6b64\u540e\u7aef\u9ed8\u8ba4\u91c7\u7528\u63a7\u5236\u53f0\u8f93\u51fa\uff0c\u5982\u679c\u914d\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Logger::path"),"\u53c2\u6570\uff0c\u5c06\u540c\u65f6\u8f93\u51fa\u5230path\u5bf9\u5e94\u7684\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("admonition",{title:"\u53c2\u6570",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logger::path")," - \u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u8def\u5f84\uff0c\u9ed8\u8ba4\u63a7\u5236\u53f0\u8f93\u51fa\u65e5\u5fd7\uff0c\u6307\u5b9a\u540e\uff0c\u65e5\u5fd7\u5c06\u540c\u65f6\u5728\u65e5\u5fd7\u6587\u4ef6\u4ee5\u53ca\u63a7\u5236\u53f0\u8f93\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logger::maxBytes")," - \u6307\u5b9a\u6bcf\u4e2a\u65e5\u5fd7\u6587\u4ef6\u5b58\u50a8\u7684\u6700\u5927\u7a7a\u95f4\uff0c \u5355\u4f4d\u662f Byte\uff0c\u4ec5\u5f53\u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\u540e\u751f\u6548\uff0c\u53d6\u503c\u8303\u56f4\uff1a 1 - 1073741824 (1G)\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logger::backupCount")," - \u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u7684\u6700\u5927\u5b58\u50a8\u6570\u91cf\uff0c\u914d\u5408Logger::maxBytes\u53c2\u6570\u4f7f\u7528\uff0c\u53d6\u503c\u8303\u56f4\uff1a0 - 1024\u3002\u5f53\u53d6\u503c\u4e3a0\u7684\u65f6\u5019\uff0c\u4ee3\u8868\u53ea\u5728\u6307\u5b9a\u6587\u4ef6\u4e2d\u5faa\u73af\u5b58\u50a8\uff0c\u65e0\u5907\u4efd\u3002\u53d6\u503c\u4e3a1\u7684\u65f6\u5019\uff0c\u5b58\u50a8\u6587\u4ef6\u4e3a\uff1alog.txt,log.1.txt\uff0c\u5b58\u5728\u4e00\u4e2a\u5907\u4efd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logger::pattern")," \u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"li",href:"https://internal.dunescience.org/doxygen/classspdlog_1_1pattern__formatter.html"},"logger\u7684\u6253\u5370\u6a21\u5f0f"),"\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"debug\u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"[%l][%m/%d %H:%M:%S][%s:%#%!]: %v"),"."),(0,a.kt)("li",{parentName:"ul"},"release \u4e0b\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"[%l][%m/%d %H:%M:%S][%s:%#]: %v")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logger::flush_every")," - \u5237\u65b0\u65e5\u5fd7\u5230\u6587\u4ef6\u7684\u9891\u7387\uff0c\u9ed8\u8ba4\u4e3a5\uff0c\u5355\u4f4d\u79d2\uff1b\u8bbe\u7f6e\u4e3a0\u4ee3\u8868\u4f1a\u5237\u65b0\u6bcf\u6761\u65e5\u5fd7\u3002"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'"Logger::path" = "./torchpipe.log"  \n# \u53ef\u9009\u53c2\u6570\uff0c\u4fdd\u5b58\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u63a7\u5236\u53f0\u8f93\u51fa\u65e5\u5fd7 \n"Logger::maxBytes" = 1048576 #\n# \u53ef\u9009\u53c2\u6570\uff0c\u8bbe\u7f6e\u540e\u542f\u7528\u5faa\u73af\u4fdd\u5b58\u529f\u80fd\uff0c\u8bbe\u7f6e\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u5b58\u50a8\u6700\u5927\u7a7a\u95f4\uff0c\u9ed8\u8ba4\u503c\uff1a\u65e0\u7a77\u5927\u3002\u53d6\u503c\u8303\u56f4\uff1a 1 - 1073741824 (1G)\u3002 \n"Logger::backupCount" = 20                           \n# \u53ef\u9009\u53c2\u6570\uff0c\u914d\u5408Logger::maxBytes\u53c2\u6570\uff0c\u65e5\u5fd7\u6587\u4ef6\u7684\u6700\u5927\u4fdd\u5b58\u6570\u91cf\uff0c\u53d6\u503c\u8303\u56f4\uff1a 0 - 1024\u3002\n'))))}u.isMDXComponent=!0}}]);