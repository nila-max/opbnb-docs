"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||b[u]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Withdraw Tokens from opBNB",icon:"code",index:"yes",dir:{order:2}},i=void 0,l={unversionedId:"build-on-opbnb/withdraw-from-opbnb",id:"build-on-opbnb/withdraw-from-opbnb",title:"Withdraw Tokens from opBNB",description:"This is a living document and is susceptible to changes.",source:"@site/docs/build-on-opbnb/withdraw-from-opbnb.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/withdraw-from-opbnb",permalink:"/opbnb-docs/docs/build-on-opbnb/withdraw-from-opbnb",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/build-on-opbnb/withdraw-from-opbnb.md",tags:[],version:"current",frontMatter:{title:"Withdraw Tokens from opBNB",icon:"code",index:"yes",dir:{order:2}},sidebar:"guideSidebar",previous:{title:"Deposit Tokens to opBNB",permalink:"/opbnb-docs/docs/build-on-opbnb/deposit-to-opbnb"},next:{title:"opBNB Ecosystem",permalink:"/opbnb-docs/docs/build-on-opbnb/ecosystem"}},c={},s=[],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("p",null,"If you want to transfer your tokens from opBNB to BSC network, you can do so by using the ",(0,r.kt)("a",{parentName:"p",href:"https://opbnb-testnet-bridge.bnbchain.org/"},"opBNB bridge"),", which is a tool that allows you to move your tokens across different networks."),(0,r.kt)("p",null,"Before you initiate the withdrawal process, you need to make sure that you have connected your wallet and switched to the opBNB network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230627173117461",src:n(43461).Z,width:"1182",height:"1510"})),(0,r.kt)("p",null,"Click withdraw button and confirm the transaction with your wallet. It will take a while to confirm."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230627173904354",src:n(70698).Z,width:"1110",height:"834"})),(0,r.kt)("p",null,"There are 2 steps after you submit your withdrawal request. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your withdrawal will be part of a Layer 2 transaction that will be submitted to the Layer 1 BSC network. This means that your tokens will be locked on the opBNB network and unlocked on the BSC network. Then your withdrawal status will change to ",(0,r.kt)("em",{parentName:"li"},"Waiting for Proof"),", which indicates that the transaction is pending verification."),(0,r.kt)("li",{parentName:"ol"},"You need to wait until the transaction is ready to be collected after the challenge window. The challenge window is a period of time during which anyone can challenge the validity of the transaction. If no one challenges the transaction, it will be finalized and you can collect your tokens on the BSC network.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230627174136393",src:n(55968).Z,width:"2334",height:"732"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Then you can collect your token. ")),(0,r.kt)("admonition",{title:":",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The challenge window is shorter on the testnet of opBNB, so you can test the withdrawal process faster. On the mainnet of opBNB, the challenge window will be 7 days long.")))}d.isMDXComponent=!0},70698:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/withdraw-confirm-bdb677c8e87aacc322a751a3195b909a.png"},55968:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/withdraw-status-e6d7db6cdb1e86c67fc9a2be5a5b90da.png"},43461:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/withdraw-4e499e371cca7762592032e3880a9b21.png"}}]);