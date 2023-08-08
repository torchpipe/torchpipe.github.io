"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1951],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5045:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"torch",title:"torch\u76f8\u5173\u540e\u7aef",type:"reference",displayed_sidebar:"api"},i="torch\u76f8\u5173\u540e\u7aef",o={unversionedId:"backend-reference/torch",id:"backend-reference/torch",title:"torch\u76f8\u5173\u540e\u7aef",description:"\u901f\u89c8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/backend-reference/torch.mdx",sourceDirName:"backend-reference",slug:"/backend-reference/torch",permalink:"/zh/docs/backend-reference/torch",draft:!1,editUrl:"https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/i18n/zh/docusaurus-plugin-content-docs/current/backend-reference/torch.mdx",tags:[],version:"current",lastUpdatedBy:"zhangshiyang",lastUpdatedAt:1691479968,formattedLastUpdatedAt:"2023\u5e748\u67088\u65e5",frontMatter:{id:"torch",title:"torch\u76f8\u5173\u540e\u7aef",type:"reference",displayed_sidebar:"api"},sidebar:"api",previous:{title:"opencv\u76f8\u5173\u540e\u7aef",permalink:"/zh/docs/backend-reference/opencv"},next:{title:"\u65e5\u5fd7",permalink:"/zh/docs/backend-reference/log"}},p={},d=[{value:"\u901f\u89c8",id:"\u901f\u89c8",level:2},{value:"DecodeTensor",id:"decodetensor",level:2},{value:"cvtColorTensor",id:"cvtcolortensor",level:2},{value:"ResizeTensor",id:"resizetensor",level:2},{value:"PillowResizeTensor",id:"pillowresizetensor",level:2},{value:"ResizePadTensor",id:"resizepadtensor",level:2},{value:"Tensor2Mat",id:"tensor2mat",level:2},{value:"SyncTensor",id:"synctensor",level:2},{value:"Torch",id:"torch",level:2},{value:"SaveTensor",id:"savetensor",level:2},{value:"TensorrtTensor",id:"tensorrttensor",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u524d\u5411\u8ba1\u7b97",id:"\u524d\u5411\u8ba1\u7b97",level:3},{value:"min()/max()",id:"minmax",level:3},{value:"\u540e\u5904\u7406\u6269\u5c55",id:"\u540e\u5904\u7406\u6269\u5c55",level:3},{value:"LoadTensor",id:"loadtensor",level:2}],s={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"torch\u76f8\u5173\u540e\u7aef"},"torch\u76f8\u5173\u540e\u7aef"),(0,r.kt)("h2",{id:"\u901f\u89c8"},"\u901f\u89c8"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u521d\u59cb\u5316\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u5165","[\u7c7b\u578b]"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8f93\u51fa","[\u7c7b\u578b]"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#decodetensor"},"DecodeTensor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color(default=rgb)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data[str/bytes]")),(0,r.kt)("td",{parentName:"tr",align:null},"result","[at::Tensor]",(0,r.kt)("br",null)," color","[str]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cvtcolortensor"},"cvtColorTensor")),(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"data","[at::Tensor]",(0,r.kt)("br",null)," color","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"result","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#resizetensor"},"ResizeTensor")),(0,r.kt)("td",{parentName:"tr",align:null},"resize_h,resize_w"),(0,r.kt)("td",{parentName:"tr",align:null},"data","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null},"result","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#pillowresizetensor"},"PillowResizeTensor")),(0,r.kt)("td",{parentName:"tr",align:null},"resize_h,resize_w"),(0,r.kt)("td",{parentName:"tr",align:null},"data","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null},"result","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null},"CV_8UC3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#resizepadtensor"},"ResizePadTensor")),(0,r.kt)("td",{parentName:"tr",align:null},"max_h,max_w,pad_value"),(0,r.kt)("td",{parentName:"tr",align:null},"data","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null},"- result","[at::Tensor]",(0,r.kt)("br",null),"- inverse_trans",(0,r.kt)("br",null),"[std::function<std::pair<float, float>(float x, float y)>]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tensorrttensor"},"TensorrtTensor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"model"),",",(0,r.kt)("inlineCode",{parentName:"td"},"instance_num"),",",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"max"),",",(0,r.kt)("inlineCode",{parentName:"td"},"precision"),",",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"mean"),",",(0,r.kt)("inlineCode",{parentName:"td"},"std"),",",(0,r.kt)("inlineCode",{parentName:"td"},"model::cache")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"tensorrt\u63a8\u7406\u5f15\u64ce")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tensor2mat"},"Tensor2Mat")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"data","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null},"result","[cv::Mat]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#synctensor"},"SyncTensor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"device_id")," ",(0,r.kt)("inlineCode",{parentName:"td"},"SyncTensor::backend")),(0,r.kt)("td",{parentName:"tr",align:null},"data","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null},"result","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#savetensor"},"SaveTensor")),(0,r.kt)("td",{parentName:"tr",align:null},"save_dir"),(0,r.kt)("td",{parentName:"tr",align:null},"data","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null},"result","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#loadtensor"},"LoadTensor")),(0,r.kt)("td",{parentName:"tr",align:null},"tensor_name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"result","[at::Tensor]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C10Exception"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u629b\u51fac10::Error\u5f02\u5e38,\u7528\u4e8e\u6a21\u62dftorch\u5185\u90e8\u5f02\u5e38")))),(0,r.kt)("h2",{id:"decodetensor"},"DecodeTensor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"nvjpeg"),"\u8fdb\u884cgpu\u89e3\u7801\uff0c\u957f\u5bbd\u9650\u5236\u4e3a(",(0,r.kt)("inlineCode",{parentName:"li"},"h*w<5000*5000"),"). \u8f93\u51fa\u6570\u636e\u7684\u5f62\u72b6\u4e3a13hw."),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u89e3\u7801\u51fa\u7684\u56fe\u7247\u4e3a\u7a7a\uff0c\u5219\u8f93\u51fa\u65e0",(0,r.kt)("inlineCode",{parentName:"li"},"result"),"\u952e\u503c\uff1b")),(0,r.kt)("h2",{id:"cvtcolortensor"},"cvtColorTensor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u65f6\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"color"),"\u4e3a\u76ee\u6807\u989c\u8272\u7a7a\u95f4\uff1b\u8f93\u5165\u4e2d\u8bfb\u53d6\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"color"),"\u4e3a\u6570\u636e\u7684\u989c\u8272\u7a7a\u95f4\uff1b\u4e24\u8005\u4e0d\u540c\u65f6\uff0c\u5c06\u8fdb\u884c\u989c\u8272\u7a7a\u95f4\u8f6c\u6362, \u5426\u5219\uff0c\u8fd4\u56de\u8f93\u5165\u503c\uff1b"),(0,r.kt)("li",{parentName:"ul"},"color \u76ee\u524d\u652f\u6301\u201crgb\u201d \u548c \u201cbgr\u201d"),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u8981\u6c42\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"13hw"),".")),(0,r.kt)("h2",{id:"resizetensor"},"ResizeTensor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"at::upsample_bilinear2d"),"\u8fdb\u884cresize\u64cd\u4f5c\uff1b"),(0,r.kt)("li",{parentName:"ul"},"resize_h \u548c resize_w \u9700\u8981\u4e3a\u6574\u6570\uff0c\u6709\u6548\u8303\u56f4\u4e3a","[1, 1024 * 1024]"),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u8981\u6c42\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"13hw"),"."),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u51fa",(0,r.kt)("inlineCode",{parentName:"li"},"13hw"),", float\u578b\u6570\u636e.")),(0,r.kt)("h2",{id:"pillowresizetensor"},"PillowResizeTensor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"at::Tensor"),"\u7c7b\u578b\u9700\u8981\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"at::kByte"),"\uff0c\u5f62\u72b6\u4e3a13hw"),(0,r.kt)("li",{parentName:"ul"},"resize_h \u548c resize_w \u9700\u8981\u4e3a\u6574\u6570\uff0c\u6709\u6548\u8303\u56f4\u4e3a","[1, 1024 * 1024]"),(0,r.kt)("li",{parentName:"ul"},"\u4e25\u683c\u4fdd\u6301\u548cpillow\u7684\u53cc\u7ebf\u6027\u63d2\u503c\u7ed3\u679c\u4e00\u81f4\uff08\u5728\u5927\u91cf\u6570\u636e\u4e0a\u8fdb\u884c\u4e86\u9a8c\u8bc1\uff09")),(0,r.kt)("h2",{id:"resizepadtensor"},"ResizePadTensor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u6301\u957f\u5bbd\u6bd4resize, \u5de6\u4e0a\u89d2\u5bf9\u9f50\uff0c\u4ee5\u5e38\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"pad_value"),"\u8fdb\u884cpad."),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"at::Tensor"),"\u7c7b\u578b\u662ffloat\uff0c\u5f62\u72b613hw"),(0,r.kt)("li",{parentName:"ul"},"max_h \u548c max_w \u9700\u8981\u4e3a\u6574\u6570\uff0c\u6709\u6548\u8303\u56f4\u4e3a","[1, 1024 * 1024]"),(0,r.kt)("li",{parentName:"ul"},"pad_value \u652f\u6301\u6574\u6570,\u6d6e\u70b9\u6570\uff0c\u591a\u4e2a\u6570\u503c\u4ee5\u9017\u53f7\u5206\u5f00\u3002"),(0,r.kt)("li",{parentName:"ul"},"inverse_trans: \u7528\u4e8e\u5c06\u65b0\u5750\u6807\u6620\u5c04\u5230\u539f\u59cb\u5750\u6807.")),(0,r.kt)("h2",{id:"tensor2mat"},"Tensor2Mat"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"at::Tensor"),"\u8f6c\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"cv::Mat"),"\uff0c\u4fdd\u6301\u6570\u636e\u7c7b\u578b\u4e0d\u53d8"),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u5f62\u72b6hw3\u6216\u800513hw"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e",(0,r.kt)("a",{parentName:"li",href:"#SyncTensor"},"SyncTensor"),", \u4f1a\u540c\u6b65\u5f53\u524d\u6d41",(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u63d2\u5165\u6d41\u7ba1\u7406\u64cd\u4f5c\uff1a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Sequential[Tensor2Mat,SyncTensor]")," \u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"SyncTensor[Tensor2Mat]"),"\uff0c\n\u5426\u5219",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor2Mat"),"\u5c06\u4f7f\u7528\u9ed8\u8ba4cuda\u6d41\u3002")))),(0,r.kt)("h2",{id:"synctensor"},"SyncTensor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SyncTensor::backend: default=Identity"),(0,r.kt)("li",{parentName:"ul"},"device_id: \u9ed8\u8ba4\u4e3a-1\uff1b\u8868\u793a\u5c06\u5f53\u524d\u8bbe\u5907\u8bbe\u7f6e\u4e3a\u8fd9\u4e2aid. \u5185\u90e8\u76f8\u5f53\u4e8e\u8c03\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"c10::cuda::set_device(device_id)")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"li"},"torch.cuda.set_device(device_id)"),"."),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u65b9\u5f0f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SyncTensor[BackendTensor]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./basic#sequential"},"Sequential"),"[ATensor,BTensor,SyncTensor]"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u7684\u5d4c\u5957\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"SyncTensor[Sequential[ATensor,SyncTensor[BTensor],CTensor,SyncTensor]]")))),(0,r.kt)("li",{parentName:"ul"},"\u5d4c\u5957\u6a21\u5f0f\u4e0b\u4ec5\u6709\u4e00\u6b21\u6d41\u540c\u6b65\u771f\u6b63\u88ab\u6267\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728pytorch\u73af\u5883\u76f4\u63a5\u4f7f\u7528\uff08\u4e0d\u7ecf\u8fc7\u8c03\u5ea6\u540e\u7aef\uff09\u65f6\uff0c\u672c\u540e\u7aef\u5c06\u4e0d\u751f\u6548\uff0c\u4ee5\u4fbf\u517c\u5bb9",(0,r.kt)("a",{parentName:"li",href:"../preliminaries/pytorch_libtorch"},"pytorch cuda\u8bed\u4e49"),"\u3002\u7ecf\u8fc7\u9ed8\u8ba4\u8c03\u5ea6\u540e\u7aef\u65f6\uff0c\u521d\u59cb\u5316\u548c\u524d\u5411\u53ef\u8ba4\u4e3a\u5728\u540c\u4e00\u4e2a\u72ec\u7acb\u7ebf\u7a0b\u4e2d\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u522b\u540d: ",(0,r.kt)("strong",{parentName:"li"},"TensorSync"),", ",(0,r.kt)("strong",{parentName:"li"},"Torch"),"\uff08\u4ece0.3.1b2\u7248\u672c\u5f00\u59cb\u751f\u6548\uff09")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u5b9e\u73b0\u7ec6\u8282"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/Intra-node/schedule"},"\u8c03\u5ea6\u7cfb\u7edf"),"\u5c06\u786e\u4fdd\u540e\u7aef\u5b9e\u4f8b\u7684\u521d\u59cb\u5316\u548c\u524d\u5411\u5728\u540c\u4e00\u4e2a\u72ec\u7acb\u7684\u7ebf\u7a0b\u4e2d\u6267\u884c\u3002Torch\u611f\u77e5\u5230\u5904\u4e8e\u6b64\u72ec\u7acb\u7ebf\u7a0b\u6a21\u5f0f\uff0c\u624d\u4f1a\u6fc0\u6d3b\u81ea\u8eab\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"Torch\u4f1a\u5728\u521d\u59cb\u5316\u65f6\u5224\u65ad\u5f53\u524d\u7ebf\u7a0b\u662f\u5426",(0,r.kt)("a",{parentName:"li",href:"../preliminaries/pytorch_libtorch"},"\u7ed1\u5b9a\u5230\u4e86\u9ed8\u8ba4\u6d41"),"\u3002\u662f\u7684\u8bdd\uff0c\u5c06\u6fc0\u6d3b\u81ea\u8eab\u529f\u80fd\uff1a\u5728\u521d\u59cb\u5316\u65f6\u5c06\u8be5\u7ebf\u7a0b\u5207\u6362\u5230\u72ec\u7acb\u7684\u6d41\uff0c\u5e76\u5728\u524d\u5411\u65f6\u8fdb\u884c\u6d41\u540c\u6b65\u3002"),(0,r.kt)("li",{parentName:"ul"},"Sequential \u5bb9\u5668\u53ef\u786e\u4fdd\u5176\u5b50\u540e\u7aef\u521d\u59cb\u5316\u7684\u987a\u5e8f\u548c\u524d\u5411\u7684\u987a\u5e8f\u76f8\u53cd\uff0c \u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"Sequential[Torch[A],Torch[B]]"),", \u4f1a\u5012\u5e8f\u521d\u59cb\u5316, \u6b63\u5e8f\u524d\u5411\uff1a ")),(0,r.kt)("mermaid",{value:'flowchart LR\n  BI["Torch[B].init"] --\x3e AI["Torch[A].init"]\n  AI --\x3e AF["Torch[A].forward"]\n  AF --\x3e BF["Torch[B].forward "]'}),(0,r.kt)("p",null,"  Torch","[A]"," \u5728 \u521d\u59cb\u5316\u65f6\u5df2\u7ecf\u4e0d\u662f\u9ed8\u8ba4\u6d41\uff0c\u5219\u5b83\u4e0d\u7528\u8bbe\u7f6e\u65b0\u7684\u6d41\uff0c forward\u65f6\u4e5f\u4e0d\u7528\u8d1f\u8d23\u6d41\u7684\u540c\u6b65, \u6b64\u65f6 Torch","[B]"," \u8bbe\u7f6e\u4e86\u65b0\u7684\u6d41\uff0c\u5219\u7531 Torch","[B]"," \u8d1f\u8d23\u6d41\u7684\u540c\u6b65;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mat2Tensor, Tensor2Mat \u540e\u7aef\u81ea\u5e26\u5f53\u524d\u6d41\u7684\u540c\u6b65\u529f\u80fd\uff1b\u7136\u800c\u5176\u65e0\u6cd5\u6539\u53d8\u7ebf\u7a0b\u7ed1\u5b9a\u7684\u6d41\uff0c\u4ecd\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"S[Tensor2Mat,...,Torch]")," \u5207\u6362\u5230\u72ec\u7acb\u6d41\uff0c\u5426\u5219\u4f1a\u5f71\u54cd\u6027\u80fd\u3002"))),(0,r.kt)("h2",{id:"torch"},"Torch"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#synctensor"},"SyncTensor"),"\u7684\u522b\u540d\u3002 \u4ece0.3.1b2\u7248\u672c\u5f00\u59cb\u751f\u6548\u3002"),(0,r.kt)("h2",{id:"savetensor"},"SaveTensor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"save_dir\uff1a\u6587\u4ef6\u4fdd\u5b58\u76ee\u5f55\uff0c\u9700\u8981\u63d0\u524d\u521b\u5efa\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u540e\u7f00\u662f",(0,r.kt)("inlineCode",{parentName:"li"},".pt"),"\uff0c\u540d\u79f0\u552f\u4e00")),(0,r.kt)("h2",{id:"tensorrttensor"},"TensorrtTensor"),(0,r.kt)("p",null,"tensorrt\u63a8\u7406\u5f15\u64ce"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u521d\u59cb\u5316\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u578b\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301 ",(0,r.kt)("br",null),"- \u4ee5 .onnx \u7ed3\u5c3e\u7684onnx\u6587\u4ef6",(0,r.kt)("br",null),"- \u4ee5 .trt \u7ed3\u5c3e\u7684tensorrt engine\u6587\u4ef6 ",(0,r.kt)("br",null),"- \u4ee5 .onnx.encrypted \u548c .trt.encrypted \u7ed3\u5c3e\u7684",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/tools/encrypt"},"\u52a0\u5bc6"),"\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance_num"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u6570\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679ctensorrt engine\u7684profile\u6570\u76ee\u4e0d\u8db3\u4ee5\u5efa\u7acb\u8db3\u591f\u7684\u5b9e\u4f8b\u6570\uff0c\u5c06\u53cd\u5e8f\u5217\u5316\u591a\u4e2aengine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E5%90%8E%E5%A4%84%E7%90%86%E6%89%A9%E5%B1%95"},"postprocessor")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u540e\u5904\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7f51\u7edc\u8f93\u51fac++\u6279\u540e\u5904\u7406;\u9ed8\u8ba4\u64cd\u4f5c\u662f\u62c6\u5206batch\u7ef4\u5ea6\uff1b \u9700\u8981\u5b9e\u73b0\u4e3a PostProcessor \u7684\u5b50\u7c7b\u5e76\u6ce8\u518c")))),(0,r.kt)("p",null,"\u5bf9\u4e8eonnx\u6a21\u578b\uff0c\u6709\u4ee5\u4e0b\u989d\u5916\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min/max"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u578b\u6700\u5c0f/\u6700\u5927\u8f93\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f62\u5f0f\u4e0a\uff0c \u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1x3x224x224"),",\u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"td"},"1,1"),"(\u591a\u8f93\u5165\u7f51\u7edc)\u3002 \u5b57\u5178\u5e8f\u6392\u5e8f;",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"instance_num > 1"),"\u65f6\uff0c\u53ef\u4ee5\u662f\u4ee5",(0,r.kt)("inlineCode",{parentName:"td"},";"),"\u9694\u5f00\u7684\u591a\u7ec4\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"precision"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u578b\u7cbe\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"[fp32,fp16,int8,best]",". \u7248\u672c<=0.3.1b1\u65f6\u9ed8\u8ba4\u503c\u4e3afp16\uff0c\u7248\u672c>0.3.1b1\u65f6\u9ed8\u8ba4\u4e3a","[fp16(SM>6.1), fp32(SM<=6.1)]","; \u5982\u679c\u7cbe\u5ea6\u4e0d\u88ab\u652f\u6301\uff0c\u5c06\u81ea\u52a8\u9000\u5316\u5230\u53d7\u652f\u6301\u7684\u7cbe\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"precision::fp32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u90e8\u5206\u5c42\u7684\u7cbe\u5ea6\u4e3afp32\uff08\u8986\u76d6precision\u7684\u8bbe\u7f6e\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c42\u7684\u540d\u79f0\uff0c\u4ee5\u9017\u53f7\u5206\u5f00(\u5efa\u8bae\u5c06\u68c0\u6d4b/\u5206\u7c7b\u6700\u540e\u4e00\u5c42\u8bbe\u7f6e\u4e3afp32\u6216\u8005fp16)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"precision::fp16"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u90e8\u5206\u5c42\u7684\u7cbe\u5ea6\u4e3afp16\uff08\u8986\u76d6precision\u7684\u8bbe\u7f6e\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c42\u7684\u540d\u79f0\uff0c\u4ee5\u9017\u53f7\u5206\u5f00(\u5efa\u8bae\u5c06\u68c0\u6d4b/\u5206\u7c7b\u6700\u540e\u4e00\u5c42\u8bbe\u7f6e\u4e3afp32\u6216\u8005fp16)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mean/std"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fe\u50cf\u524d\u5904\u7406\u4e2d\u7684\u51cf\u5747\u503c\u9664\u65b9\u5dee\u64cd\u4f5c\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u64cd\u4f5c\u5c06\u63d2\u5165tensorrt\u7f51\u7edc\u3002\u9700\u8981\u5927\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"1+1e-5"),"\uff08>0.3.1b2\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model::cache"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u7f13\u5b58\u6a21\u578b\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301 .trt \u548c .trt.encrypted \u540e\u7f00\u7684\u6587\u4ef6\u540d\u3002 \u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u5c06\u81ea\u52a8\u4fdd\u5b58\u8be5\u6587\u4ef6\uff1b\u5426\u5219\u5c06\u76f4\u63a5\u52a0\u8f7d\u6b64\u6587\u4ef6\u3002")))),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528tensorrt\u91cf\u5316onnx\u6a21\u578b\uff0c\u6709\u5982\u4e0b\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8d77\u59cb\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calibrate_input"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6821\u51c6\u7684\u8f93\u5165\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528torch.save \u6216\u8005SaveTensor\u540e\u7aef\u4fdd\u5b58\u7684tensor\uff0c\u5f62\u72b6\u4e3a1chw"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calibrate_cache"),(0,r.kt)("td",{parentName:"tr",align:null},'\u53ef\u9009\u3002\u6821\u51c6\u7f13\u5b58\uff0c\u4f8b\u5982"resnet18.cache"\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5c06\u8df3\u8fc7calibrate_input'),(0,r.kt)("td",{parentName:"tr",align:null},"\u6821\u51c6\u53ef\u80fd\u5f88\u6602\u8d35\uff0c\u53ef\u7f13\u5b58\u4e8e\u6587\u4ef6\u3002\u5982\u679c\u7f51\u7edc\u7ed3\u6784\u53d1\u751f\u53d8\u5316\u6216\u8f93\u5165\u6570\u636e\u96c6\u53d1\u751f\u53d8\u5316\uff0c\u5219\u8fd8\u5e94\u91cd\u65b0\u6821\u51c6\u7f51\u7edc\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},">=0.3.0b4")))),(0,r.kt)("p",null,"\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://g.hz.netease.com/deploy/torchpipe/-/tree/master/examples/int8"},"\u793a\u4f8b"),"."),(0,r.kt)("h3",{id:"\u524d\u5411\u8ba1\u7b97"},"\u524d\u5411\u8ba1\u7b97"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TASK_DATA_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u4e3a\u5355\u8f93\u5165\u8f93\u51fa\u65f6\uff0c\u7c7b\u578b\u4e3aat::Tensor/torch.Tensor, \u7f51\u7edc\u4e3a\u591a\u8f93\u5165\u8f93\u51fa\u65f6\uff0c \u7c7b\u578b\u4e3avector/List."),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u5178\u5e8f\u6392\u5217")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TASK_RESULT_KEY(\u8f93\u51fa)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u7c7b\u578b\u53c2\u7167\u8f93\u5165\u7c7b\u578b\uff0c  postprocessor \u53ef\u81ea\u5b9a\u4e49\u8f93\u51fa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u5178\u5e8f\u6392\u5217")))),(0,r.kt)("h3",{id:"minmax"},"min()/max()"),(0,r.kt)("p",null,"\u8f93\u5165\u8303\u56f4\u5c06\u4ecetensorrt\u6a21\u578b\u4e2d\u8bfb\u53d6\u3002"),(0,r.kt)("h3",{id:"\u540e\u5904\u7406\u6269\u5c55"},"\u540e\u5904\u7406\u6269\u5c55"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8ebatch\u5316\u540e\u5904\u7406\uff0cTensorrtTensor\u5f15\u5165\u4e86\u540e\u5904\u7406\u6269\u5c55\u3002\u57fa\u7c7b\u4e3a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T=at::Tensor>\nclass PostProcessor {\n public:\n  virtual bool init(const std::unordered_map<std::string, std::string>& /*config*/,\n                    dict /*dict_config*/) {\n    return true;\n  };\n\n  virtual void forward(std::vector<T> net_batched_outputs, std::vector<dict> inputs,\n                       const std::vector<T>& net_batched_inputs) {\n    if (inputs.size() == 1) {\n      if (net_outputs.size() == 1)\n        (*inputs[0])[TASK_RESULT_KEY] = net_outputs[0];\n      else\n        (*inputs[0])[TASK_RESULT_KEY] = net_outputs;\n      return;\n    }\n    for (std::size_t i = 0; i < inputs.size(); ++i) {\n      std::vector<T> single_result;\n      for (const auto& item : net_outputs) {\n        single_result.push_back(item[i].unsqueeze(0));\n      }\n      if (single_result.size() == 1) {\n        (*inputs[i])[TASK_RESULT_KEY] = single_result[0];  // batch=1 \u7684\u65f6\u5019\uff0c\u8fd4\u56de\u5355\u4e2a\u503c\n      } else\n        (*inputs[i])[TASK_RESULT_KEY] = single_result;\n    }\n  }\n\n  virtual ~PostProcessor() = default;\n};\n")),(0,r.kt)("p",null,"\u7528\u6237\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"p"},"PostProcessor<at::Tensor>"),"\u5e76\u5b9e\u73b0\u524d\u5411\u63a5\u53e3\u540e\uff0c\u53ef\u91c7\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/Intra-node/extensible_backend#%E7%BC%96%E8%AF%91"},"AOT\u7f16\u8bd1"),"\u7684\u65b9\u5f0f\u7f16\u8bd1\u540e\u4f7f\u7528\u3002\n\u5185\u7f6e\u540e\u5904\u7406\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpu"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u6570\u636e\u62f7\u8d1d\u5230cpu\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"softmaxcpu"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8c\u7ef4tensor\u8fdb\u884csoftmax\u64cd\u4f5c\u540e\uff0c\u5c06\u6570\u636e\u62f7\u8d1d\u5230cpu\u4e0a"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"softmaxcpu"),"\u7684\u53c2\u8003\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'class BatchingPostProcSoftmaxCpu : public PostProcessor<at::Tensor> {\n public:\n  void forward(std::vector<at::Tensor> net_outputs, std::vector<dict> input,\n               const std::vector<at::Tensor>& net_inputs) {\n    for (auto& item : net_outputs) {\n      if (item.dim() == 2) {\n        item = item.softmax(1).cpu();  // \u9690\u5f0f\u540c\u6b65\n      }\n    }\n    PostProcessor<at::Tensor>::forward(net_outputs, input, net_inputs);\n  }\n};\n\nIPIPE_REGISTER(PostProcessor<at::Tensor>, BatchingPostProcSoftmaxCpu, "softmaxcpu");\n')),(0,r.kt)("h2",{id:"loadtensor"},"LoadTensor"),(0,r.kt)("p",null,"\u7528\u4e8e\u52a0\u8f7d\u78c1\u76d8\u4e2d\u7684tensor(.pt\u6587\u4ef6)\u5230\u6587\u4ef6\uff0c\u53ef\u52a0\u8f7d\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"torch.save()")," \u4fdd\u5b58\u7684\u6587\u4ef6. \u5982\u679c\u60f3\u52a0\u8f7d\u4e3a\u56fe\u7247\uff0c\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"S[LoadTensor,Tensor2Mat, SyncTensor]"),"."))}m.isMDXComponent=!0}}]);