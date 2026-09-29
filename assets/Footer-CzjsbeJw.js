import{a as c,p as e,v as i}from"./chunk-EPOLDU6W-BJBJZBMd.js";import{u as j}from"./consent-C7ILcp24.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,t,a)=>a?a.toUpperCase():t.toLowerCase()),n=s=>{const r=N(s);return r.charAt(0).toUpperCase()+r.slice(1)},m=(...s)=>s.filter((r,t,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=c.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:o="",children:l,iconNode:x,...h},p)=>c.createElement("svg",{ref:p,...w,width:r,height:r,stroke:s,strokeWidth:a?Number(t)*24/Number(r):t,className:m("lucide",o),...h},[...x.map(([u,g])=>c.createElement(u,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(s,r)=>{const t=c.forwardRef(({className:a,...o},l)=>c.createElement(v,{ref:l,iconNode:r,className:m(`lucide-${f(n(s))}`,`lucide-${s}`,a),...o}));return t.displayName=n(s),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],d=y("shield",b),C="mailto:info@bullfrogsec.com";function L(){return e.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-8 py-4",children:e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsxs(i,{to:"/",className:"flex items-center gap-3 min-w-0",children:[e.jsx("div",{className:"w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0",children:e.jsx(d,{className:"w-6 h-6 text-white"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:"text-xl",children:"Bullfrog Security"}),e.jsx("p",{className:"text-xs text-gray-600 truncate",children:"Egress filtering for AI agents"})]})]}),e.jsx("a",{href:C,className:"px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap",children:"Contact us"})]})})})}function S(){const{reopen:s}=j();return e.jsx("footer",{className:"bg-gray-900 text-gray-400 py-12 px-4 md:px-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center",children:e.jsx(d,{className:"w-5 h-5 text-white"})}),e.jsx("span",{className:"text-white",children:"Bullfrog Security"})]}),e.jsx("p",{className:"text-sm",children:"HTTPS egress filtering for AI agents, anywhere Linux runs"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white mb-4",children:"Company"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:e.jsx(i,{to:"/compare/mitm-proxy",className:"hover:text-emerald-400",children:"Bullfrog vs MITM proxies"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto:info@bullfrogsec.com",className:"hover:text-emerald-400",children:"Contact"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white mb-4",children:"Legal"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:e.jsx(i,{to:"/privacy",className:"hover:text-emerald-400",children:"Privacy Policy"})}),e.jsx("li",{children:e.jsx(i,{to:"/terms",className:"hover:text-emerald-400",children:"Terms of Service"})}),e.jsx("li",{children:e.jsx("button",{type:"button",onClick:s,className:"hover:text-emerald-400 cursor-pointer",children:"Cookie settings"})})]})]})]}),e.jsx("div",{className:"border-t border-gray-800 pt-8",children:e.jsx("p",{className:"text-sm",children:"© 2026 Bullfrog Security. All rights reserved."})})]})})}export{C,S as F,L as N,d as S,y as c};
