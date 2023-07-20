"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(t),m=r,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return t?o.createElement(b,l(l({ref:n},p),{},{components:t})):o.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const a={},l="Running a local development environment",i={unversionedId:"tutorials/running-a-local-development-environment",id:"tutorials/running-a-local-development-environment",title:"Running a local development environment",description:"Install and start the entire opbnb system locally, including L1 (BNB Smart Chain) and L2 development nodes. Running a local development environment is a great way to test the behavior of your code and contracts.",source:"@site/docs/tutorials/running-a-local-development-environment.md",sourceDirName:"tutorials",slug:"/tutorials/running-a-local-development-environment",permalink:"/opbnb-docs/docs/tutorials/running-a-local-development-environment",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/tutorials/running-a-local-development-environment.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Running a testnet node",permalink:"/opbnb-docs/docs/tutorials/running-a-testnet-node"},next:{title:"Create a Full Stack dapp",permalink:"/opbnb-docs/docs/tutorials/full-stack-dapp"}},c={},d=[],p={toc:d};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-local-development-environment"},"Running a local development environment"),(0,r.kt)("p",null,"Install and start the entire opbnb system locally, including L1 (BNB Smart Chain) and L2 development nodes. Running a local development environment is a great way to test the behavior of your code and contracts."),(0,r.kt)("h1",{id:"how-to-do-it"},"How to do it"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure the following software is installed: golang, node, yarn, make, python3, docker."),(0,r.kt)("li",{parentName:"ol"},"Clone opbnb monorepo and checkout release/testnet branch:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," git clone git@github.com:bnb-chain/opbnb.git\n cd opbnb\n git checkout release/testnet\n"))),(0,r.kt)("li",{parentName:"ol"},"Running ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," and then running ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn build"),"."),(0,r.kt)("li",{parentName:"ol"},"Running ",(0,r.kt)("inlineCode",{parentName:"li"},"make devnet-up")," and wait for the docker container to start.(The first run will be relatively slow because it needs to download the image and deploy the contract, and then it will be fast)"),(0,r.kt)("li",{parentName:"ol"},"Through the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker ps")," command, you can see that 5 containers have been started: ops-bedrock_l1_1, ops-bedrock_l2_1, ops-bedrock_op-node_1, ops-bedrock_op-batcher_1, ops-bedrock_op-proposer_1")),(0,r.kt)("p",null,"Now L1 is accessible at http://localhost:8545, and L2 is accessible at http://localhost:9545"),(0,r.kt)("h1",{id:"stop-or-clean"},"Stop or clean"),(0,r.kt)("p",null,"To stop, run (in the root directory of the monorepo) ",(0,r.kt)("inlineCode",{parentName:"p"},"make devnet-down"),".",(0,r.kt)("br",{parentName:"p"}),"\n","To clean everything, run (in the root directory of the monorepo) ",(0,r.kt)("inlineCode",{parentName:"p"},"make devnet-clean"),"."),(0,r.kt)("h1",{id:"additional-information"},"Additional information"),(0,r.kt)("p",null,"L1 chain ID is 900.",(0,r.kt)("br",{parentName:"p"}),"\n","L2 chain ID is 901."),(0,r.kt)("p",null,"L1 test account:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"address: 0x04d63aBCd2b9b1baa327f2Dda0f873F197ccd186"),(0,r.kt)("li",{parentName:"ul"},"Private key: 59ba8068eb256d520179e903f43dacf6d8d57d72bd306e1bd603fdb8c8da10e8")),(0,r.kt)("p",null,"L2 test account:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Address: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"),(0,r.kt)("li",{parentName:"ul"},"Private key: ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80")))}s.isMDXComponent=!0}}]);