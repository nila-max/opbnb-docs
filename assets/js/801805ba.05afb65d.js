"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[180],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82555:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Differences between opBNB and other Layer2 Networks",icon:"code",index:"yes",dir:{order:2}},o=void 0,i={unversionedId:"core-concepts/difference-L2",id:"core-concepts/difference-L2",title:"Differences between opBNB and other Layer2 Networks",description:"This is a living document and is susceptible to changes.",source:"@site/docs/core-concepts/difference-L2.md",sourceDirName:"core-concepts",slug:"/core-concepts/difference-L2",permalink:"/opbnb-docs/docs/core-concepts/difference-L2",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/core-concepts/difference-L2.md",tags:[],version:"current",frontMatter:{title:"Differences between opBNB and other Layer2 Networks",icon:"code",index:"yes",dir:{order:2}},sidebar:"guideSidebar",previous:{title:"Differences between opBNB and Layer1 Networks",permalink:"/opbnb-docs/docs/core-concepts/difference-BSC-Eth"},next:{title:"Running a testnet node",permalink:"/opbnb-docs/docs/tutorials/running-a-testnet-node"}},p={},s=[],m={toc:s};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("p",null,"Compared with other L2 solutions on the Ethereum, like ",(0,r.kt)("strong",{parentName:"p"},"OP Mainnet")," and ",(0,r.kt)("strong",{parentName:"p"},"Arbitrum"),", ",(0,r.kt)("strong",{parentName:"p"},"opBNB")," has lower gas fee, and higher block gas limit, which means the gas fee will be more stable when traffic of Layer 2 increases. I listed the Ethereum EIP-1559 parameters as a reference. Arbitrum gas mechnism is based on the ArbOS, it is not applicable here. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gas Parameter Differences")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"opBNB value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Optimism value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block gas limit"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000,000 gas"),(0,r.kt)("td",{parentName:"tr",align:null},"30,000,000 gas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block gas target"),(0,r.kt)("td",{parentName:"tr",align:null},"50,000,000  gas"),(0,r.kt)("td",{parentName:"tr",align:null},"5,000,000 gas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EIP-1559 elasticity multiplier"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EIP-1559 denominator"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum base fee increase (per block)"),(0,r.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,r.kt)("td",{parentName:"tr",align:null},"10%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum base fee decrease (per block)"),(0,r.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,r.kt)("td",{parentName:"tr",align:null},"2%")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metrics Differences")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"opBNB")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Optimism")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Arbitrum")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Gas Token")),(0,r.kt)("td",{parentName:"tr",align:null},"BNB"),(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},"ETH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"VM")),(0,r.kt)("td",{parentName:"tr",align:null},"EVM"),(0,r.kt)("td",{parentName:"tr",align:null},"EVM"),(0,r.kt)("td",{parentName:"tr",align:null},"EVM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Gas Fee")),(0,r.kt)("td",{parentName:"tr",align:null},"$0.005"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"$0.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Block Gas Limit")),(0,r.kt)("td",{parentName:"tr",align:null},"100M"),(0,r.kt)("td",{parentName:"tr",align:null},"30M"),(0,r.kt)("td",{parentName:"tr",align:null},"32M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Block time")),(0,r.kt)("td",{parentName:"tr",align:null},"1s"),(0,r.kt)("td",{parentName:"tr",align:null},"2s"),(0,r.kt)("td",{parentName:"tr",align:null},"0.25s(Min)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Withdraw/ Finality")),(0,r.kt)("td",{parentName:"tr",align:null},"7 days"),(0,r.kt)("td",{parentName:"tr",align:null},"7 days"),(0,r.kt)("td",{parentName:"tr",align:null},"7 days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"TPS (Transfer)")),(0,r.kt)("td",{parentName:"tr",align:null},"4500+"),(0,r.kt)("td",{parentName:"tr",align:null},"700+"),(0,r.kt)("td",{parentName:"tr",align:null},"4000+")))),(0,r.kt)("p",null,"OP Stack has some minor differences, so does opBNB. I just listed the differences here for your reference, for details you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://stack.optimism.io/docs/releases/bedrock/differences/#opcode-differences"},"OP Stack documents"),". "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Unlike opBNB and OP Mainnet, which have fixed blocktimes, Arbitrum has a variable blocktime that depends on the number and gas of transactions in a block. The more transactions and gas a block contains, the longer it takes to mine. The minimum blocktime on Arbitrum is 0.25 seconds, which means that the fastest block can be mined in a quarter of a second.")))}c.isMDXComponent=!0}}]);