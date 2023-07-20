"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"Why OP Stack as the Foundation of opBNB",icon:"code",index:"yes",dir:{order:1}},i=void 0,s={unversionedId:"intro/why-opstack",id:"intro/why-opstack",title:"Why OP Stack as the Foundation of opBNB",description:"This is a living document and is susceptible to changes.",source:"@site/docs/intro/why-opstack.md",sourceDirName:"intro",slug:"/intro/why-opstack",permalink:"/opbnb-docs/docs/intro/why-opstack",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/intro/why-opstack.md",tags:[],version:"current",frontMatter:{title:"Why OP Stack as the Foundation of opBNB",icon:"code",index:"yes",dir:{order:1}},sidebar:"guideSidebar",previous:{title:"Gas and Fees",permalink:"/opbnb-docs/docs/economics/gas-and-fees"},next:{title:"Differences between opBNB and Layer1 Networks",permalink:"/opbnb-docs/docs/core-concepts/difference-BSC-Eth"}},c={},l=[{value:"Our goals were to:",id:"our-goals-were-to",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("p",null,"Our team had extensive discussions and research before we embarked on the mission of creating a high performance optimistic rollup for BNB Smart Chain. "),(0,r.kt)("h3",{id:"our-goals-were-to"},"Our goals were to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Achieve a remarkable capacity of 100M gas per second. We conducted thorough research and optimization work for the BSC client, covering various aspects such as storage, execution and security. We applied these enhancements to the opBNB project as well, aiming to set a new standard for the layer 2 solution performance at 100M per second."),(0,r.kt)("li",{parentName:"ul"},"Provide a truly low cost layer 2 solution. Ethereum upgrades such as Proto-Danksharding and eventually full Danksharding will significantly lower the cost of posting data to Ethereum. However, until ethereum upgrades become a reality, we needed to find a flexible solution to reduce the calldata cost as posting data to Layer-1 is the main bottleneck for fees on rollups."),(0,r.kt)("li",{parentName:"ul"},"Contribute to the open source community. All research and optimization we introduced to the opBNB can be traced back to the Ethereum community to boost the ecosystem.")),(0,r.kt)("p",null,"The OP Stack is a framework for building scalable and interoperable layer-2 solutions based on the utility, simplicity and extensibility principles. By choosing OP Stack as the bedrock of opBNB, we can achieve several benefits, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Flexible execution client options for decentralisation and performance optimization: opBNB can execute smart contracts using different client options, thanks to its modular replaceable execution design. This design allows opBNB to interact with the blockchain network in various ways, and increases the platform's decentralisation. opBNB can not only build the execution layer on top of the BSC execution client, but also does not depend on a single client implementation, which strengthens the decentralisation of the opBNB network. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replaceable DA for lower gas fee: One of the key issues for layer-2 solutions is to guarantee that the data of the transactions can be accessed and verified by anyone. OP Stack addresses this issue by separating the DA layer from the execution layer, and enabling us to select from various DA options. With OP Stack, we can seamlessly switch between different DA schemes based on our security and performance needs. As a member of the BNB ecosystem, we can leverage BNB greenfield as a DA layer, which will bring down the cost even further. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open ecosystem: OP Stack also fosters an open and collaborative ecosystem where different projects can work together and benefit from each other. By using OP Stack, we can join a network of chains that share the same tech stack and interoperate with each other. For example, we can connect with Optimism, which is another layer-2 platform based on OP Stack that supports EVM and Solidity. By being part of this ecosystem, we can increase our network effects, security and innovation."))))}u.isMDXComponent=!0}}]);