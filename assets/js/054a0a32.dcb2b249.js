"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,h=m["".concat(s,".").concat(f)]||m[f]||d[f]||n;return a?l.createElement(h,i(i({ref:t},c),{},{components:a})):l.createElement(h,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var l=a(7462),r=a(3366),n=(a(7294),a(3905)),i=a(4996),o=["components"],s={id:"safepal",title:"SafePal"},p=void 0,c={unversionedId:"basics/guides/crypto wallets/safepal",id:"basics/guides/crypto wallets/safepal",title:"SafePal",description:"Download and Install",source:"@site/docs/basics/guides/crypto wallets/safepal.md",sourceDirName:"basics/guides/crypto wallets",slug:"/basics/guides/crypto wallets/safepal",permalink:"/docs/basics/guides/crypto wallets/safepal",draft:!1,editUrl:"https://github.com/nervosnetwork/docs-new/tree/develop/website/docs/basics/guides/crypto wallets/safepal.md",tags:[],version:"current",frontMatter:{id:"safepal",title:"SafePal"},sidebar:"defaultSidebar",previous:{title:"Portal Wallet",permalink:"/docs/basics/guides/crypto wallets/portalwallet"},next:{title:"Run a CKB Dev Blockchain",permalink:"/docs/basics/guides/devchain"}},d={},m=[{value:"Download and Install",id:"download-and-install",level:2},{value:"Hardware Wallet",id:"hardware-wallet",level:2},{value:"Software Wallet",id:"software-wallet",level:2},{value:"Set Up a SafePal Wallet",id:"set-up-a-safepal-wallet",level:3},{value:"Create a New SafePal Wallet",id:"create-a-new-safepal-wallet",level:4},{value:"Import an Existing Wallet",id:"import-an-existing-wallet",level:4},{value:"Add CKB to Asset List",id:"add-ckb-to-asset-list",level:3},{value:"Receive CKB",id:"receive-ckb",level:3},{value:"Send CKB",id:"send-ckb",level:3}],f={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"download-and-install"},"Download and Install"),(0,n.kt)("p",null,"Download ",(0,n.kt)("a",{parentName:"p",href:"https://safepal.io/download"},"SafePal")," from iOS or Android App Store. It provides both software wallet and hardware wallet. "),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_01.png"),width:"30%"}),(0,n.kt)("h2",{id:"hardware-wallet"},"Hardware Wallet"),(0,n.kt)("p",null,"To order SafePal hardware wallet online, visit ",(0,n.kt)("a",{parentName:"p",href:"https://safepal.io/"},"https://safepal.io/"),"."),(0,n.kt)("p",null,"To use SafePal hardware wallet:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use SafePal hardware wallet to scan the QRCode which will be displayed by tapping the ",(0,n.kt)("strong",{parentName:"p"},"Next")," button. "),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_02.png"),width:"30%"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the instructions on the hardware wallet and finish pairing. "))),(0,n.kt)("h2",{id:"software-wallet"},"Software Wallet"),(0,n.kt)("h3",{id:"set-up-a-safepal-wallet"},"Set Up a SafePal Wallet"),(0,n.kt)("p",null,"Here are two ways to set up a SafePal wallet:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new SafePal wallet."),(0,n.kt)("li",{parentName:"ul"},"Import an existing wallet. ")),(0,n.kt)("h4",{id:"create-a-new-safepal-wallet"},"Create a New SafePal Wallet"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Create Wallet")," to set the wallet's name and the mnemonic phrase that can be 12 or 24 mnemonic words. "),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_03.png"),width:"30%"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Back up my phrase")," immediately after having successfully created the wallet."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_04.png"),width:"30%"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the instructions and write the mnemonics in the given order on a piece of physical paper. Store it offline safely."),(0,n.kt)("p",{parentName:"li"},"To protect user data, SafePal disables screenshot for mnemonics setting. "))),(0,n.kt)("h4",{id:"import-an-existing-wallet"},"Import an Existing Wallet"),(0,n.kt)("p",null,"SafePal provides four options to ",(0,n.kt)("strong",{parentName:"p"},"Import wallet"),". Choose a preferred one, follow the guidance and enter the corresponding information correctly."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_05.png"),width:"30%"}),(0,n.kt)("p",null,"Once the wallet has been successfully imported, click the wallet icon in the top left to view the wallet in the ",(0,n.kt)("strong",{parentName:"p"},"Wallet")," list."),(0,n.kt)("p",null,"To add another existing wallet simply tap on the ",(0,n.kt)("strong",{parentName:"p"},"+")," icon."),(0,n.kt)("h3",{id:"add-ckb-to-asset-list"},"Add CKB to Asset List"),(0,n.kt)("p",null,"SafePal lists 5 coins by default on the Asset page. "),(0,n.kt)("p",null,"To add CKB to Asset list:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter CKB in the ",(0,n.kt)("strong",{parentName:"p"},"Search")," bar."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_06.png"),width:"30%"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("strong",{parentName:"p"},"CKB (Nervos)")," to the list."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Note"),": The search results show such tokens as ",(0,n.kt)("strong",{parentName:"p"},"CKB (Godwoken)"),", ",(0,n.kt)("strong",{parentName:"p"},"CKB(ERC20)")," and ",(0,n.kt)("strong",{parentName:"p"},"CKB(BEP20)"),", all of which serve different purposes here. Do NOT add them to the asset list."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_07.png"),width:"30%"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now CKB (Nervos) is successfully added. It's time to create the first transaction. "),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_08.png"),width:"30%"}))),(0,n.kt)("h3",{id:"receive-ckb"},"Receive CKB"),(0,n.kt)("p",null,"Two ways to receive money: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By text: Tap ",(0,n.kt)("strong",{parentName:"p"},"Copy"),' to get the CKB address in the format of a series of letters and numbers, starting with "ckb". ')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By QRCode: Tap ",(0,n.kt)("strong",{parentName:"p"},"Share")," to get a QRCode image. "),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_09.png"),width:"30%"}))),(0,n.kt)("p",null,"Share either form of the address information with the sender.\nOnce the transaction is completed and verified, the related transaction information will appear in the CKB transaction history. "),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_10.png"),width:"30%"}),(0,n.kt)("h3",{id:"send-ckb"},"Send CKB"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Send"),", then fill in the address of the recipient and the desired transfer amount. Tap ",(0,n.kt)("strong",{parentName:"p"},"Next"),"."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_11.png"),width:"30%"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Recheck the information to make sure the information is correct. If so, tap ",(0,n.kt)("strong",{parentName:"p"},"Send"),"."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_12.png"),width:"30%"}),(0,n.kt)("p",{parentName:"li"},"Once the payment is completed, the transaction ",(0,n.kt)("strong",{parentName:"p"},"Status")," turns to ",(0,n.kt)("strong",{parentName:"p"},"Pending"),". That means the transaction has been broadcast to the network for verification. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"More Details")," to see the on-chain confirmation information of the transaction."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_13.png"),width:"30%"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be redirected to ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"Nervos Explorer")," where the transaction details are displayed."),(0,n.kt)("img",{src:(0,i.Z)("img/wallet/safepal_14.png"),width:"30%"}),(0,n.kt)("p",{parentName:"li"},"Once the transaction is verified by the entire network, an overview will be available in the CKB transaction history."))))}h.isMDXComponent=!0}}]);