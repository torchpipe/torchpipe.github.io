"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8259],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=c(n),s=r,h=d["".concat(l,".").concat(s)]||d[s]||u[s]||o;return n?a.createElement(h,p(p({ref:e},m),{},{components:n})):a.createElement(h,p({ref:e},m))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=s;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2575:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"quantization",title:"\u91cf\u5316\u4e0e\u90e8\u7f72",type:"explainer"},p=void 0,i={unversionedId:"faq/quantization",id:"faq/quantization",title:"\u91cf\u5316\u4e0e\u90e8\u7f72",description:"\u672c\u6587\u4ece\u4e1a\u52a1\u89d2\u5ea6\u4ecb\u7ecd\u91cf\u5316\u96c6\u6210\u6b65\u9aa4\u3002",source:"@site/docs/faq/quantization.mdx",sourceDirName:"faq",slug:"/faq/quantization",permalink:"/docs/faq/quantization",draft:!1,editUrl:"https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/docs/faq/quantization.mdx",tags:[],version:"current",lastUpdatedBy:"zhangshiyang",lastUpdatedAt:1691479968,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"quantization",title:"\u91cf\u5316\u4e0e\u90e8\u7f72",type:"explainer"}},l={},c=[{value:"\u57fa\u7840\u5de5\u5177",id:"\u57fa\u7840\u5de5\u5177",level:2},{value:"\u901a\u7528\u5de5\u5177",id:"\u901a\u7528\u5de5\u5177",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}],m={toc:c},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ece\u4e1a\u52a1\u89d2\u5ea6\u4ecb\u7ecd\u91cf\u5316\u96c6\u6210\u6b65\u9aa4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u91cf\u5316\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u539f\u7406"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4f18\u7f3a\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u9002\u7528\u573a\u666f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"PTQ"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8bad\u7ec3\u540e\u91cf\u5316"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6d41\u7a0b\u7b80\u5355\uff0c\u7cbe\u5ea6\u964d\u4f4e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5bf9\u96be\u4f8b\u4e0d\u654f\u611f\uff0c\u8f93\u51fa\u5206\u6570\u4e0d\u5728\u9608\u503c\u9644\u8fd1\u7684\u573a\u666f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"QAT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u91cf\u5316\u611f\u77e5\u8bad\u7ec3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6d41\u7a0b\u590d\u6742\uff0c\u8017\u65f6\u957f\uff0c\u7cbe\u5ea6\u66f4\u9ad8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7cbe\u5ea6\u654f\u611f")))),(0,r.kt)("p",null,"\u53c2\u8003\u94fe\u63a5\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://deci.ai/quantization-and-quantization-aware-training/"},"PTQ && QAT"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/548174416"},"QAT"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/blog/accelerating-quantized-networks-with-qat-toolkit-and-tensorrt/"},"tensorrt-qat"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/TensorRT/_notebooks/vgg-qat.html#1"},"pytorch-TensorRT")),(0,r.kt)("h2",{id:"\u57fa\u7840\u5de5\u5177"},"\u57fa\u7840\u5de5\u5177"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u4f18\u7f3a\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5168\u94fe\u8def\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pytorch_quantization"),(0,r.kt)("td",{parentName:"tr",align:"center"},"PTQ/QAT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"nvidia\u5b98\u65b9\u5de5\u5177\uff0c\u6210\u719f\u5168\u94fe\u8def\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://docs.nvidia.com/deeplearning/tensorrt/pytorch-quantization-toolkit/docs/tutorials/quant_resnet50.html#further-optimization"},"resnet50"),",",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openppl-public/ppq/blob/master/ppq/samples/TensorRT/Example_QAT.py"},"ppl-resnet50"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ppq"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u91cf\u5316\u611f\u77e5\u8bad\u7ec3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6d41\u7a0b\u590d\u6742\uff0c\u8017\u65f6\u957f\uff0c\u7cbe\u5ea6\u66f4\u9ad8"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"TensorRT's native PTQ"),(0,r.kt)("td",{parentName:"tr",align:"center"},"PTQ"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u64cd\u4f5c\u7b80\u5355\uff0c\u964d\u4f4e\u66f4\u591a\u7cbe\u5ea6\uff0c\u4f46\u7ed3\u5408",(0,r.kt)("a",{parentName:"td",href:"https://github.com/maggiez0138/yolov5_quant_sample/blob/236613d87bfc6d5f73bb39e73ccd217adfe7bce1/trt/onnx_to_trt_partialquant.py#LL193C12-L193C12"},"Partial Quantization"),"\u53ef\u80fd\u964d\u4f4e\u7cbe\u5ea6\u5e76\u4e0d\u591a"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"\u901a\u7528\u5de5\u5177"},"\u901a\u7528\u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/554633773"},"torch.fx"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openppl-public/ppq#%E9%87%8F%E5%8C%96%E9%83%A8%E7%BD%B2%E6%95%99%E7%A8%8B,"},"PPL \u91cf\u5316\u5de5\u5177"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/TensorRT/_notebooks/vgg-qat.html"},"INT8 USING Torch-TensorRT"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sony/model_optimization"},"sony MCT")),(0,r.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/meituan/YOLOv6/blob/main/docs/Tutorial%20of%20Quantization.md"},"YOLOv6-QAT"),": yolov6\u56e0\u4e3a\u5927\u91cf\u7528\u4e86\u91cd\u53c2\u6570\u5316\u5757\u6784\u5efa\u7ed3\u6784\uff0c\u9700\u8981\u7279\u6b8a\u7684\u91cf\u5316\u6b65\u9aa4\u53bb\u5b9e\u73b0\u9ad8\u7cbe\u5ea6QAT,\u8fc7\u4e8e\u590d\u6742"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA-AI-IOT/yolo_deepstream/blob/main/yolov7_qat/doc/Guidance_of_QAT_performance_optimization.md"},"NVIDIA-AI-IOT/yolov7")," \u63a8\u8350\uff0c\u4f7f\u7528yolov7\uff0c\u6700\u5b8c\u6574"))}u.isMDXComponent=!0}}]);