"use strict";(self.webpackChunkmobile_docs=self.webpackChunkmobile_docs||[]).push([[5762],{5246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(5893),i=r(1151),s=r(2991);const c={sidebar_label:"Server",sidebar_position:4,toc_max_heading_level:3},o="Serveur",a={id:"server/index",title:"Serveur",description:"",source:"@site/docs/server/index.md",sourceDirName:"server",slug:"/server/",permalink:"/docs/server/",draft:!1,unlisted:!1,editUrl:"https://github.com/docs/server/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Server",sidebar_position:4,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting_started/"},next:{title:"Config",permalink:"/docs/server/Config/"}},d={},l=[];function u(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"serveur",children:"Serveur"}),"\n","\n","\n",(0,n.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2991:(e,t,r)=>{r.d(t,{Z:()=>v});r(7294);var n=r(6010),i=r(3438),s=r(9960),c=r(3919),o=r(5999),a=r(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=r(5893);function u(e){let{href:t,children:r}=e;return(0,l.jsx)(s.Z,{href:t,className:(0,n.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,l.jsx)("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const r=(0,i.LM)(t);return r?(0,l.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.jA)();return(0,l.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,l.jsx)(x,{...e});const s=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,n.Z)("row",r),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(p,{item:e})},t)))})}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>c});var n=r(7294);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);