"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[736],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},d=Object.keys(t);for(n=0;n<d.length;n++)a=d[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(n=0;n<d.length;n++)a=d[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},b="mdxType",i={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,d=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),b=s(a),m=r,k=b["".concat(o,".").concat(m)]||b[m]||i[m]||d;return a?n.createElement(k,l(l({ref:e},c),{},{components:a})):n.createElement(k,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var d=a.length,l=new Array(d);l[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[b]="string"==typeof t?t:r,l[1]=p;for(var s=2;s<d;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74737:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const d={title:"Network Information",icon:"code",index:"yes",dir:{order:3}},l=void 0,p={unversionedId:"build-on-opbnb/opbnb-testnet-information",id:"build-on-opbnb/opbnb-testnet-information",title:"Network Information",description:"This is a living document and is susceptible to changes.",source:"@site/docs/build-on-opbnb/opbnb-testnet-information.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/opbnb-testnet-information",permalink:"/opbnb-docs/docs/build-on-opbnb/opbnb-testnet-information",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/build-on-opbnb/opbnb-testnet-information.md",tags:[],version:"current",frontMatter:{title:"Network Information",icon:"code",index:"yes",dir:{order:3}},sidebar:"guideSidebar",previous:{title:"Wallet Configuration",permalink:"/opbnb-docs/docs/build-on-opbnb/wallet-configuration"},next:{title:"Network Faucets",permalink:"/opbnb-docs/docs/build-on-opbnb/network-faucet"}},o={},s=[{value:"opBNB RPC Endpoints",id:"opbnb-rpc-endpoints",level:2},{value:"Public opBNB Testnet RPC Endpoints",id:"public-opbnb-testnet-rpc-endpoints",level:3},{value:"Private opBNB Testnet RPC Endpoints",id:"private-opbnb-testnet-rpc-endpoints",level:3},{value:"opBNB Testnet",id:"opbnb-testnet",level:2},{value:"opBNB Protocol addresses",id:"opbnb-protocol-addresses",level:3},{value:"L1 Contract Addresses",id:"l1-contract-addresses",level:3},{value:"L2 Contract Addresses",id:"l2-contract-addresses",level:3}],c={toc:s};function b(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("h2",{id:"opbnb-rpc-endpoints"},"opBNB RPC Endpoints"),(0,r.kt)("p",null,"We offer both public and private RPC endpoints to access opBNB. "),(0,r.kt)("h3",{id:"public-opbnb-testnet-rpc-endpoints"},"Public opBNB Testnet RPC Endpoints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opbnb-testnet-rpc.bnbchain.org/"},"https://opbnb-testnet-rpc.bnbchain.org/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3"},"https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opbnb-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5"},"https://opbnb-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5"))),(0,r.kt)("h3",{id:"private-opbnb-testnet-rpc-endpoints"},"Private opBNB Testnet RPC Endpoints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodereal.io/api-marketplace/opbnb-rpc"},"https://nodereal.io/api-marketplace/opbnb-rpc")," ")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use the above private RPC endpoint, make sure to login to ",(0,r.kt)("a",{parentName:"p",href:"https://nodereal.io/meganode"},"MegaNode service")," and create your private endpoints.")),(0,r.kt)("h2",{id:"opbnb-testnet"},"opBNB Testnet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("td",{parentName:"tr",align:null},"opBNB testnet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"The public testnet for opBNB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#opbnb-rpc-endpoints"},"See here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},"5611")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Currency Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"tBNB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/"},"https://opbnbscan.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnb-testnet-bridge.bnbchain.org"},"https://opbnb-testnet-bridge.bnbchain.org"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The opBNB testnet is the layer2 network on the BSC testnet. For BSC testnet RPC endpoints and related information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/rpc"},"BSC Testnet page")," to configure your wallet and developer tools. ")),(0,r.kt)("h3",{id:"opbnb-protocol-addresses"},"opBNB Protocol addresses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Sender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x1fd6a75cc72f39147756a663f3ef1fc95ef89495"},"0x1Fd6A75CC72f39147756A663f3eF1fc95eF89495"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Inbox"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xff00000000000000000000000000000000005611"},"0xfF00000000000000000000000000000000005611"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Proposer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x4ae49f1f57358c13a5732cb12e656cf8c8d986df"},"0x4aE49f1f57358c13A5732cb12e656Cf8C8D986DF"))))),(0,r.kt)("h3",{id:"l1-contract-addresses"},"L1 Contract Addresses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x5b0c605c707979e8bDc2Ad9271A0388b3fD4Af3E"},"0x5b0c605c707979e8bDc2Ad9271A0388b3fD4Af3E"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1ERC721Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xad39e2cfa7d8d8B6c2d56244Bfb88990EC31Bb79"},"0xad39e2cfa7d8d8B6c2d56244Bfb88990EC31Bb79"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1ERC721BridgeProxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x17e1454015bFb3377c75bE7b6d47B236fd2ddbE7"},"0x17e1454015bFb3377c75bE7b6d47B236fd2ddbE7"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xddB9EB847971DaA82e5dbe2745C429A3B2715B46"},"0xddB9EB847971DaA82e5dbe2745C429A3B2715B46"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2OutputOracle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xD92aEF4473093C67A7696e475858152D3b2acB7c"},"0xD92aEF4473093C67A7696e475858152D3b2acB7c"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2OutputOracleProxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xFf2394Bb843012562f4349C6632a0EcB92fC8810"},"0xFf2394Bb843012562f4349C6632a0EcB92fC8810"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lib_AddressManager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x4d07b9B1ffC70Fc824587573cfb6ef1Cc404AaD7"},"0x4d07b9B1ffC70Fc824587573cfb6ef1Cc404AaD7"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20Factory"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x1AD11eA5426bA3A11c0bA8c4B89fd1BCa732025E"},"0x1AD11eA5426bA3A11c0bA8c4B89fd1BCa732025E"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20FactoryProxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x182cE4305791744202BB4F802C155B94cb66163B"},"0x182cE4305791744202BB4F802C155B94cb66163B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismPortal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x2d5D7bEe8ebEf17DE14dd6ADAE8271507994a6E0"},"0x2d5D7bEe8ebEf17DE14dd6ADAE8271507994a6E0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismPortalProxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x4386C8ABf2009aC0c263462Da568DD9d46e52a31"},"0x4386C8ABf2009aC0c263462Da568DD9d46e52a31"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PortalSender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x02B668393Bc41415Dbb973C9dC144fDD42B8fA2D"},"0x02B668393Bc41415Dbb973C9dC144fDD42B8fA2D"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProxyAdmin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xE4925bD8Ac30b2d4e2bD7b8Ba495a5c92d4c5156"},"0xE4925bD8Ac30b2d4e2bD7b8Ba495a5c92d4c5156"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy__OVM_L1CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xD506952e78eeCd5d4424B1990a0c99B1568E7c2C"},"0xD506952e78eeCd5d4424B1990a0c99B1568E7c2C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy__OVM_L1StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840"},"0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemConfig"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x8Fc086Ec0ac912D5101Fec3E9ac6D910eBD5b611"},"0x8Fc086Ec0ac912D5101Fec3E9ac6D910eBD5b611"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemConfigProxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x406aC857817708eAf4ca3A82317eF4ae3D1EA23B"},"0x406aC857817708eAf4ca3A82317eF4ae3D1EA23B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemDictator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x281cc8F04AE5bb873bADc3D89059423E4c664834"},"0x281cc8F04AE5bb873bADc3D89059423E4c664834"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemDictatorProxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xB9Edfded1254ca07085920Af22BeCE0ce905F2AB"},"0xB9Edfded1254ca07085920Af22BeCE0ce905F2AB"))))),(0,r.kt)("h3",{id:"l2-contract-addresses"},"L2 Contract Addresses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WETH9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000006"},"0x4200000000000000000000000000000000000006"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000007"},"0x4200000000000000000000000000000000000007"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000010"},"0x4200000000000000000000000000000000000010"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SequencerFeeVault"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000011"},"0x4200000000000000000000000000000000000011"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20Factory"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000012"},"0x4200000000000000000000000000000000000012"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GasPriceOracle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x420000000000000000000000000000000000000F"},"0x420000000000000000000000000000000000000F"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1Block"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000015"},"0x4200000000000000000000000000000000000015"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2ToL1MessagePasser"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000016"},"0x4200000000000000000000000000000000000016"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2ERC721Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000014"},"0x4200000000000000000000000000000000000014"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC721Factory"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000017"},"0x4200000000000000000000000000000000000017"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProxyAdmin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000018"},"0x4200000000000000000000000000000000000018"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseFeeVault"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000019"},"0x4200000000000000000000000000000000000019"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1FeeVault"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x420000000000000000000000000000000000001a"},"0x420000000000000000000000000000000000001a"))))))}b.isMDXComponent=!0}}]);