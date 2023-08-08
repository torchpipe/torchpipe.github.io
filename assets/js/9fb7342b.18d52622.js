"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6775),p=n(1980),u=n(7392),s=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[p,u]=k({queryString:n,groupId:a}),[m,N]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=p??m;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),N(e)}),[u,N,l]),tabValues:l}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:p,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==o&&(m(t),p(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:c,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},7145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={id:"pipe",title:"\u63a8\u7406",type:"reference",displayed_sidebar:"api"},p="\u63a8\u7406",u={unversionedId:"python/pipe",id:"python/pipe",title:"\u63a8\u7406",description:"torchpipe.pipe",source:"@site/docs/python/pipe.mdx",sourceDirName:"python",slug:"/python/pipe",permalink:"/docs/python/pipe",draft:!1,editUrl:"https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/docs/python/pipe.mdx",tags:[],version:"current",lastUpdatedBy:"zhangshiyang",lastUpdatedAt:1691479968,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"pipe",title:"\u63a8\u7406",type:"reference",displayed_sidebar:"api"},sidebar:"api",next:{title:"\u7f16\u8bd1",permalink:"/docs/python/compile"}},s={},m=[{value:"<em>torchpipe.pipe</em>",id:"pipe",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u524d\u5411",id:"\u524d\u5411",level:3},{value:"\u7cfb\u7edf\u4fdd\u7559\u952e\u503c",id:"system-keep",level:3}],d={toc:m},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63a8\u7406"},"\u63a8\u7406"),(0,r.kt)("h2",{id:"pipe"},(0,r.kt)("em",{parentName:"h2"},"torchpipe.pipe")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("admonition",{title:"torchpipe.pipe \u7684\u521d\u59cb\u5316\u63a5\u53e3\u4e3a",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import torchpipe as tp\nmodels = tp.pipe(config: Union[Dict[str, str] |  Dict[str, Dict[str, str]] | str])\n"))),(0,r.kt)(l.Z,{groupId:"pipe_init",className:"pipe_init-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"str",label:"\u4ece\u5b57\u5178",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class torchpipe.pipe(config: Dict[str, str])\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u53c2\u6570")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config: Dict[str, str]"),": \u914d\u7f6e\u53c2\u6570\u4f1a\u4f20\u5165\u9014\u5f84\u7684\u540e\u7aef\u8fdb\u884c\u89e3\u6790\u3002\u7279\u5b9a\u7684\u540e\u7aef\u53ef\u80fd\u4f1a\u5bf9\u914d\u7f6e\u8fdb\u884c",(0,r.kt)("a",{parentName:"li",href:"../backend-reference/basic#backend-spread"},"\u53c2\u6570\u5c55\u5f00"),"."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u793a\u4f8b")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'config = {"backend":"DecodeMat"};\n')))),(0,r.kt)(i.Z,{value:"double_str",label:"\u4ece\u53cc\u5c42\u5b57\u5178",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class torchpipe.pipe(config: Dict[str, Dict[str, str]])\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7528\u4e8e\u591a\u4e2a\u8282\u70b9\u914d\u7f6e: ",(0,r.kt)("inlineCode",{parentName:"p"},"{\u8282\u70b9\u540d: Dict[str, str]}"),". \u8282\u70b9\u540d\u4e0d\u53ef\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"global"),"\u6216\u8005\u7a7a\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u53c2\u6570")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config: Dict[str, Dict[str, str]]"),": \u914d\u7f6e\u53c2\u6570\u4f1a\u4f20\u5165\u9014\u5f84\u7684\u540e\u7aef\u8fdb\u884c\u89e3\u6790\u3002\u7279\u5b9a\u7684\u540e\u7aef\u53ef\u80fd\u4f1a\u5bf9\u914d\u7f6e\u8fdb\u884c",(0,r.kt)("a",{parentName:"li",href:"../backend-reference/basic#backend-spread"},"\u53c2\u6570\u5c55\u5f00"),". \u53ef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"global"),"\u8bbe\u7f6e\u5168\u5c40\u9ed8\u8ba4\u53c2\u6570\u3002"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u793a\u4f8b")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'config = {"decoder":{"backend":"DecodeMat"},\n          "decoder_gpu":{"backend":"SyncTensor[DecodeTensor]"},\n          "global":{"instance_num":"2"}};\n')))),(0,r.kt)(i.Z,{value:"from_toml",label:"\u4ecetoml\u6587\u4ef6",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class torchpipe.pipe(config: str)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ece\u6587\u4ef6\u89e3\u6790\u53c2\u6570\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u53c2\u6570")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config: str"),": \u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},".toml"),"\u4e3a\u540e\u7f00\u7684",(0,r.kt)("a",{parentName:"li",href:"https://toml.io/en/"},"toml"),"\u683c\u5f0f\u6587\u4ef6\u3002"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u793a\u4f8b")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# \u503c\u4e3astr\uff0c\u6216\u8005\u53ef\u4ee5\u8f6c\u5316\u4e3astr\uff0c\u5982 int, float. \u4e0d\u63a5\u53d7\u5e03\u5c14\u503c\u3002\ninstance_num=2\n[decoder]\nbackend="DecodeMat"\n\n[decoder_gpu]\nbackend="SyncTensor[DecodeTensor]"\n'))))),(0,r.kt)("h3",{id:"\u524d\u5411"},"\u524d\u5411"),(0,r.kt)("admonition",{title:"torchpipe.pipe \u7684\u524d\u5411\u63a5\u53e3\u4e3a",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class torchpipe.pipe\n  def __call__(self, data: Dict[str, Any] | List[Dict[str, Any]]) -> None\n"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7ebf\u7a0b\u5b89\u5168\u7684\u524d\u5411\u8ba1\u7b97")),(0,r.kt)(l.Z,{groupId:"pipe_call",className:"pipe_call-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"dict",label:"\u5355\u4e2a\u6570\u636e",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __call__(self, data: Dict[str, Any]) -> None\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u53c2\u6570")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"data": Any'),": \u5fc5\u987b\u5b58\u5728\u7684\u8f93\u5165\uff0c\u8ba1\u7b97\u540e\u7aef\u9700\u8981\u4ece\u6b64\u952e\u503c\u83b7\u53d6\u6570\u636e, \u7136\u540e\u8fdb\u884c",(0,r.kt)("a",{parentName:"li",href:"../Intra-node/extensible_backend#py2any"},"\u89e3\u6790"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"result": Any'),": \u7528\u4e8e\u8f93\u51fa\uff0c\u4e0d\u5b58\u5728\u65f6\u4ee3\u8868\u6ca1\u6709\u8ba1\u7b97\u7ed3\u679c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"node_name": str'),": \u5f53\u6709\u591a\u4e2a\u6839\u8282\u70b9\u65f6\uff0c\u7528\u4e8e\u6307\u5b9a\u8282\u70b9\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u952e\u503c\uff08",(0,r.kt)("a",{parentName:"li",href:"#system-keep"},(0,r.kt)("em",{parentName:"a"},"\u7cfb\u7edf\u4fdd\u7559\u952e\u503c")),"\u9664\u5916\uff09\u5373\u53ef\u4f5c\u4e3a\u8f93\u5165\uff0c\u4e5f\u53ef\u4f5c\u4e3a\u8f93\u51fa\uff0c\u7531\u540e\u7aef\u51b3\u5b9a\u3002")))),(0,r.kt)(i.Z,{value:"list",label:"\u591a\u4e2a\u6570\u636e",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def __call__(self, data: List[Dict[str, Any]]) -> None\n")),(0,r.kt)("p",null,"\u5f53\u5176\u4e2d\u4e00\u4e2a\u6570\u636e\u8ba1\u7b97\u8fc7\u7a0b\u629b\u51fa\u5f02\u5e38\u65f6\uff0c\u6240\u6709\u7ed3\u679c\u90fd\u4e0d\u53ef\u7528\u3002\u5f53\u90e8\u5206\u7ed3\u679c\u6ca1\u6709'result'\u65f6\uff0c\u5176\u4ed6\u7ed3\u679c\u4ecd\u7136\u53ef\u7528\u3002"),(0,r.kt)("p",null,"\u4e00\u822c\u6765\u8bb2\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4e0d\u5efa\u8bae\u7528\u5728\u9664\u4e86\u5728python\u4e2d\u4e00\u6b21\u6027\u5904\u7406\u8d85\u5927\u91cf\u6570\u636e\u4ee5\u5916\u7684\u5176\u4ed6\u573a\u666f\u3002"),(0,r.kt)("admonition",{title:"\u6279\u91cf\u5904\u7406\u6570\u636e\u7684\u66ff\u4ee3\u65b9\u5f0f",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u6d41\u6c34\u7ebf\u4fdd\u6301\u7b80\u5355\uff0c\u901a\u8fc7\u7ebf\u7a0b\u6c60\u7684\u65b9\u5f0f\u53bb\u5904\u7406\u591a\u8f93\u5165\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"self.executor =ThreadPoolExecutor(max_workers=15) \n# forward pass\nfuture_tasks = self.executor.map(self.forward_for_single_input, data)\n")),"\u6bcf\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"forward_for_single_input"),"\u51fd\u6570\u5b9a\u4e49\u4e86\u6570\u636e\u4ece\u8f93\u5165\u5230\u6700\u7ec8\u7ed3\u679c\u7684\u591a\u4e2a\u8ba1\u7b97\u6b65\u9aa4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6d89\u53ca\u5230\u68c0\u6d4b\u7b49\u4e0a\u4e0b\u6587\u5206\u88c2\u7684\u60c5\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"li",href:"/docs/Inter-node/graphtraversal#mapreduce"},"MapReduce"),"\u8fdb\u884c\u8c03\u5ea6\u3002"))))),(0,r.kt)("h3",{id:"system-keep"},"\u7cfb\u7edf\u4fdd\u7559\u952e\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b9a\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TASK_DATA_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8f93\u5165\u4e4b\u4e00\u952e\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TASK_RESULT_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"result")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8f93\u51fa\u4e4b\u4e00\u952e\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TASK_CONTEXT_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5168\u5c40\u5171\u4eab\u4e0a\u4e0b\u6587\u8bed\u6cd5\u7cd6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TASK_EVENT_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"_*"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u4ee5\u4e0b\u5212\u7ebf\u5f00\u59cb\u7684\u5b57\u7b26\u4e32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TASK_NODE_NAME_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"node_name")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"global"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u76ee\u524d\u7528\u4e8e\u8868\u793a\u5168\u5c40\u8bbe\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"default"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"TASK_*_KEY"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5",(0,r.kt)("inlineCode",{parentName:"td"},"TASK_"),"\u5f00\u5934\u4ee5",(0,r.kt)("inlineCode",{parentName:"td"},"_KEY"),"\u7ed3\u675f\u7684\u5b57\u7b26\u4e32")))))}k.isMDXComponent=!0}}]);