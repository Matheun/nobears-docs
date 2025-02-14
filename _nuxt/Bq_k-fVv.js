import{d as w,af as z,z as B,A as n,i as t,c as g,G as i,w as P,e as m,H as S,f as s,n as a,S as V,t as A,aC as h,ba as N,aj as j,ae as L}from"./BaTQ5LD-.js";import{r as U}from"./CoPfyVsu.js";import"./BmlbPuZL.js";const $={slots:{base:["group relative block p-4 sm:p-6 border border-[var(--ui-border)] rounded-[calc(var(--ui-radius)*1.5)] bg-[var(--ui-bg)]","transition-colors"],icon:"size-6 mb-2 block",title:"text-[var(--ui-text-highlighted)] font-semibold",description:"text-[15px] text-[var(--ui-text-muted)]",externalIcon:["size-4 align-top absolute right-2 top-2 text-[var(--ui-text-dimmed)] pointer-events-none","transition-colors"]},variants:{color:{primary:{icon:"text-[var(--ui-primary)]"},secondary:{icon:"text-[var(--ui-secondary)]"},success:{icon:"text-[var(--ui-success)]"},info:{icon:"text-[var(--ui-info)]"},warning:{icon:"text-[var(--ui-warning)]"},error:{icon:"text-[var(--ui-error)]"},neutral:{icon:"text-[var(--ui-text-highlighted)]"}},to:{true:""},title:{true:{description:"mt-1"}}},compoundVariants:[{color:"primary",to:!0,class:{base:"hover:bg-[var(--ui-primary)]/10 hover:border-[var(--ui-primary)]",externalIcon:"group-hover:text-[var(--ui-primary)]"}},{color:"secondary",to:!0,class:{base:"hover:bg-[var(--ui-secondary)]/10 hover:border-[var(--ui-secondary)]",externalIcon:"group-hover:text-[var(--ui-secondary)]"}},{color:"success",to:!0,class:{base:"hover:bg-[var(--ui-success)]/10 hover:border-[var(--ui-success)]",externalIcon:"group-hover:text-[var(--ui-success)]"}},{color:"info",to:!0,class:{base:"hover:bg-[var(--ui-info)]/10 hover:border-[var(--ui-info)]",externalIcon:"group-hover:text-[var(--ui-info)]"}},{color:"warning",to:!0,class:{base:"hover:bg-[var(--ui-warning)]/10 hover:border-[var(--ui-warning)]",externalIcon:"group-hover:text-[var(--ui-warning)]"}},{color:"error",to:!0,class:{base:"hover:bg-[var(--ui-error)]/10 hover:border-[var(--ui-error)]",externalIcon:"group-hover:text-[var(--ui-error)]"}},{color:"neutral",to:!0,class:{base:"hover:bg-[var(--ui-bg-elevated)]/50 hover:border-[var(--ui-border-inverted)]",externalIcon:"group-hover:text-[var(--ui-text-highlighted)]"}}],defaultVariants:{color:"primary"}},D=L;var x,f;const E=h({extend:h($),...((f=(x=D.uiPro)==null?void 0:x.prose)==null?void 0:f.card)||{}}),G=w({inheritAttrs:!1,__name:"Card",props:{to:{},target:{},icon:{},title:{},color:{},class:{},ui:{}},setup(y){const e=y,C=z(),_=B(),o=n(()=>E({color:e.color,to:!!e.to,title:!!e.title})),c=n(()=>e.target||(e.to&&typeof e.to=="string"&&e.to.startsWith("http")?"_blank":void 0)),k=n(()=>(e.title||"Card link").trim());return(r,l)=>{var v,d,p,b;const I=N,u=j;return t(),g("div",{class:a(o.value.base({class:e.class}))},[r.to?(t(),i(I,S({key:0,"aria-label":k.value},{to:r.to,target:c.value,...r.$attrs},{class:"focus:outline-none",tabindex:"-1"}),{default:P(()=>l[0]||(l[0]=[m("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):s("",!0),r.icon?(t(),i(u,{key:1,name:r.icon,class:a(o.value.icon({class:(v=e.ui)==null?void 0:v.icon}))},null,8,["name","class"])):s("",!0),r.to&&c.value==="_blank"?(t(),i(u,{key:2,name:V(_).ui.icons.external,class:a(o.value.externalIcon({class:(d=e.ui)==null?void 0:d.externalIcon}))},null,8,["name","class"])):s("",!0),m("p",{class:a(o.value.title({class:(p=e.ui)==null?void 0:p.title}))},A(r.title),3),C.default?(t(),g("p",{key:3,class:a(o.value.description({class:(b=e.ui)==null?void 0:b.description}))},[U(r.$slots,"default",{mdcUnwrap:"p"})],2)):s("",!0)],2)}}}),q=Object.assign(G,{__name:"ProseCard"});export{q as default};
