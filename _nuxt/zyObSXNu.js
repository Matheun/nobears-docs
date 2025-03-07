import{d as k,b6 as R,b7 as G,a2 as J,i as r,G as p,w as u,R as b,S as o,U as L,ae as P,a7 as O,z as M,ai as T,aj as q,A as E,c as S,J as Q,F as W,H as X,b8 as Y,af as K,b9 as Z,n as c,g as C,ba as aa,ac as x,f as A,ao as j,ap as D,t as U,bb as ea,e as sa,r as oa,bc as ta,bd as na,be as la,aD as z}from"./K9G66Qqn.js";const ca=k({__name:"AccordionHeader",props:{asChild:{type:Boolean},as:{default:"h3"}},setup(m){const f=m,e=R(),i=G();return J(),(l,_)=>(r(),p(o(L),{as:f.as,"as-child":f.asChild,"data-orientation":o(e).orientation,"data-state":o(i).dataState.value,"data-disabled":o(i).dataDisabled.value},{default:u(()=>[b(l.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),ra={slots:{root:"w-full",item:"border-b border-(--ui-border) last:border-b-0",header:"flex",trigger:"group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-(--ui-primary) min-w-0",content:"data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",body:"text-sm pb-3.5",leadingIcon:"shrink-0 size-5",trailingIcon:"shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",label:"text-start break-words"},variants:{disabled:{true:{trigger:"cursor-not-allowed opacity-75"}}}},ia=K;var F;const da=P({extend:P(ra),...((F=ia.ui)==null?void 0:F.accordion)||{}}),ua=k({__name:"Accordion",props:{as:{},items:{},trailingIcon:{},labelKey:{default:"label"},class:{},ui:{},collapsible:{type:Boolean,default:!0},defaultValue:{},modelValue:{},type:{default:"single"},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(m,{emit:f}){const e=m,i=f,l=O(),_=M(),t=T(q(e,"as","collapsible","defaultValue","disabled","modelValue","type","unmountOnHide"),i),s=E(()=>da({disabled:e.disabled}));return(n,g)=>{var y;return r(),p(o(Y),X(o(t),{class:s.value.root({class:[e.class,(y=e.ui)==null?void 0:y.root]})}),{default:u(()=>[(r(!0),S(W,null,Q(n.items,(a,d)=>{var w;return r(),p(o(Z),{key:d,value:a.value||String(d),disabled:a.disabled,class:c(s.value.item({class:(w=e.ui)==null?void 0:w.item}))},{default:u(({open:v})=>{var I,B;return[C(o(ca),{class:c(s.value.header({class:(I=e.ui)==null?void 0:I.header}))},{default:u(()=>{var h;return[C(o(aa),{class:c(s.value.trigger({class:(h=e.ui)==null?void 0:h.trigger,disabled:a.disabled}))},{default:u(()=>{var V;return[b(n.$slots,"leading",{item:a,index:d,open:v},()=>{var $;return[a.icon?(r(),p(x,{key:0,name:a.icon,class:c(s.value.leadingIcon({class:($=e.ui)==null?void 0:$.leadingIcon}))},null,8,["name","class"])):A("",!0)]}),o(j)(a,e.labelKey)||l.default?(r(),S("span",{key:0,class:c(s.value.label({class:(V=e.ui)==null?void 0:V.label}))},[b(n.$slots,"default",{item:a,index:d,open:v},()=>[D(U(o(j)(a,e.labelKey)),1)])],2)):A("",!0),b(n.$slots,"trailing",{item:a,index:d,open:v},()=>{var $;return[C(x,{name:a.trailingIcon||n.trailingIcon||o(_).ui.icons.chevronDown,class:c(s.value.trailingIcon({class:($=e.ui)==null?void 0:$.trailingIcon}))},null,8,["name","class"])]})]}),_:2},1032,["class"])]}),_:2},1032,["class"]),a.content||l.content||a.slot&&l[a.slot]||l.body||a.slot&&l[`${a.slot}-body`]?(r(),p(o(ea),{key:0,class:c(s.value.content({class:(B=e.ui)==null?void 0:B.content}))},{default:u(()=>[b(n.$slots,a.slot||"content",{item:a,index:d,open:v},()=>{var h;return[sa("div",{class:c(s.value.body({class:(h=e.ui)==null?void 0:h.body}))},[b(n.$slots,a.slot?`${a.slot}-body`:"body",{item:a,index:d,open:v},()=>[D(U(a.content),1)])],2)]})]),_:2},1032,["class"])):A("",!0)]}),_:2},1032,["value","disabled","class"])}),128))]),_:3},16,["class"])}}}),pa=Object.assign(ua,{__name:"UAccordion"}),fa={slots:{root:"my-5",trigger:"text-base"}},ba=K;var H,N;const ma=z({extend:z(fa),...((N=(H=ba.uiPro)==null?void 0:H.prose)==null?void 0:N.accordion)||{}}),_a=k({__name:"Accordion",props:{type:{default:"multiple"},class:{}},setup(m){const f=m,e=O(),i=oa(1),l=E(()=>{var t,s;return i.value,((s=(t=e.default)==null?void 0:t.call(e))==null?void 0:s.flatMap(_).filter(Boolean))||[]});function _(t,s){var n,g,y;return typeof t.type=="symbol"?(n=t.children)==null?void 0:n.map(_):{index:s,label:((g=t.props)==null?void 0:g.label)||`${s}`,icon:(y=t.props)==null?void 0:y.icon,component:t}}return ta(()=>i.value++),(t,s)=>{const n=pa;return r(),p(n,{type:t.type,items:l.value,"unmount-on-hide":!1,class:c(f.class),ui:o(la)(o(ma)())},{content:u(({item:g})=>[(r(),p(na(g.component)))]),_:1},8,["type","items","class","ui"])}}}),ya=Object.assign(_a,{__name:"ProseAccordion"});export{ya as default};
