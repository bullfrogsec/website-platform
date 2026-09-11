import{a as l,p as e,v as o}from"./chunk-EPOLDU6W-BK8S5wzv.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,a)=>a?a.toUpperCase():r.toLowerCase()),x=t=>{const s=N(t);return s.charAt(0).toUpperCase()+s.slice(1)},m=(...t)=>t.filter((s,r,a)=>!!s&&s.trim()!==""&&a.indexOf(s)===r).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:n,iconNode:g,...u},p)=>l.createElement("svg",{ref:p,...b,width:s,height:s,stroke:t,strokeWidth:a?Number(r)*24/Number(s):r,className:m("lucide",c),...u},[...g.map(([j,f])=>l.createElement(j,f)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(t,s)=>{const r=l.forwardRef(({className:a,...c},n)=>l.createElement(v,{ref:n,iconNode:s,className:m(`lucide-${y(x(t))}`,`lucide-${t}`,a),...c}));return r.displayName=x(t),r};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],C=d("menu",w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],h=d("shield",k);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],I=d("x",A),i="mailto:contact@bullfrogsec.com",L=i+"?subject="+encodeURIComponent("Bullfrog waitlist")+"&body="+encodeURIComponent(`Hi, please add me to the Bullfrog waitlist.

Company:
What I would run Bullfrog on (agent sandboxes, CI runners, servers, containers):
What I am trying to stop or see:
`);function _({waitlistUrl:t=L}){const[s,r]=l.useState(!1);return e.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-8 py-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(o,{to:"/",className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center",children:e.jsx(h,{className:"w-6 h-6 text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl",children:"Bullfrog Security"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Egress filtering for AI agents"})]})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[e.jsx("a",{href:i,className:"text-gray-700 hover:text-emerald-600 transition-colors",children:"Contact"}),e.jsx("a",{href:t,className:"px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors",children:"Join the waitlist"})]}),e.jsx("button",{onClick:()=>r(!s),className:"md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors","aria-label":"Toggle menu",children:s?e.jsx(I,{className:"w-6 h-6"}):e.jsx(C,{className:"w-6 h-6"})})]}),s&&e.jsx("div",{className:"md:hidden border-t border-gray-200 py-4 px-4",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("a",{href:i,onClick:()=>r(!1),className:"text-left text-gray-700 hover:text-emerald-600 transition-colors py-2",children:"Contact"}),e.jsx("a",{href:t,onClick:()=>r(!1),className:"w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-center",children:"Join the waitlist"})]})})]})})}function B(){return e.jsx("footer",{className:"bg-gray-900 text-gray-400 py-12 px-4 md:px-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center",children:e.jsx(h,{className:"w-5 h-5 text-white"})}),e.jsx("span",{className:"text-white",children:"Bullfrog Security"})]}),e.jsx("p",{className:"text-sm",children:"HTTPS egress filtering for AI agents, anywhere Linux runs"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white mb-4",children:"Company"}),e.jsx("ul",{className:"space-y-2 text-sm",children:e.jsx("li",{children:e.jsx("a",{href:"mailto:contact@bullfrogsec.com",className:"hover:text-emerald-400",children:"Contact"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white mb-4",children:"Legal"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:e.jsx(o,{to:"/privacy",className:"hover:text-emerald-400",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(o,{to:"/terms",className:"hover:text-emerald-400",children:"Terms of Service"})})]})]})]}),e.jsx("div",{className:"border-t border-gray-800 pt-8",children:e.jsx("p",{className:"text-sm",children:"© 2026 Bullfrog Security. All rights reserved."})})]})})}export{B as F,_ as N,h as S,L as W,d as c};
