import M from"./AuPH1iHl.js";import{d as L,a6 as z,a7 as D,a8 as P,r as E,A as F,o as N,bg as U,E as S,bc as j,i as u,G as m,w as f,g,S as t,n as c,c as k,J as w,F as G,aD as $,af as A,e as J,t as K,bd as O}from"./K9G66Qqn.js";import{_ as q,a as H,b as Q,c as R,d as T}from"./Zk-6QNrq.js";import"./T9OIwmKT.js";const W={slots:{root:"relative group *:not-first:!my-0 *:not-first:!static my-5",list:"relative flex items-center gap-1 border border-(--ui-border-muted) bg-(--ui-bg) border-b-0 rounded-t-[calc(var(--ui-radius)*1.5)] overflow-x-auto p-2",indicator:"absolute left-0 inset-y-2 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[translate,width] duration-200 bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*1.5)] shadow-xs",trigger:["relative inline-flex items-center gap-1.5 text-(--ui-text) data-[state=active]:text-(--ui-text-highlighted) hover:bg-(--ui-bg-elevated)/50 px-2 py-1.5 text-sm rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary) focus:outline-none","transition-colors"],triggerIcon:"size-4 shrink-0",triggerLabel:"truncate"}},X=A;var B,I;const Y=$({extend:$(W),...((I=(B=X.uiPro)==null?void 0:B.prose)==null?void 0:I.codeGroup)||{}}),Z=L({__name:"CodeGroup",props:z({defaultValue:{default:"0"},sync:{},class:{},ui:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const s=v,p=D(),r=P(v,"modelValue"),n=Y(),b=E(1),y=F(()=>{var e,a;return b.value,((a=(e=p.default)==null?void 0:e.call(p))==null?void 0:a.flatMap(_).filter(Boolean))||[]});function _(e,a){var d,l,i,o;return typeof e.type=="symbol"?(d=e.children)==null?void 0:d.map(_):{label:((l=e.props)==null?void 0:l.filename)||((i=e.props)==null?void 0:i.label)||`${a}`,icon:(o=e.props)==null?void 0:o.icon,component:e}}return N(()=>{if(s.sync){const e=`code-group-${s.sync}`,a=U(e,()=>localStorage.getItem(e));S(a,()=>{a.value&&(r.value=a.value)},{immediate:!0}),S(r,()=>{r.value&&(a.value=r.value,localStorage.setItem(e,r.value))})}}),j(()=>b.value++),(e,a)=>{var d;return u(),m(t(Q),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),"default-value":e.defaultValue,"unmount-on-hide":!1,class:c(t(n).root({class:[s.class,(d=s.ui)==null?void 0:d.root]}))},{default:f(()=>{var l;return[g(t(H),{class:c(t(n).list({class:(l=s.ui)==null?void 0:l.list}))},{default:f(()=>{var i;return[g(t(q),{class:c(t(n).indicator({class:(i=s.ui)==null?void 0:i.indicator}))},null,8,["class"]),(u(!0),k(G,null,w(y.value,(o,h)=>{var x;return u(),m(t(R),{key:h,value:String(h),class:c(t(n).trigger({class:(x=s.ui)==null?void 0:x.trigger}))},{default:f(()=>{var C,V;return[g(M,{icon:o.icon,filename:o.label,class:c(t(n).triggerIcon({class:(C=s.ui)==null?void 0:C.triggerIcon}))},null,8,["icon","filename","class"]),J("span",{class:c(t(n).triggerLabel({class:(V=s.ui)==null?void 0:V.triggerLabel}))},K(o.label),3)]}),_:2},1032,["value","class"])}),128))]}),_:1},8,["class"]),(u(!0),k(G,null,w(y.value,(i,o)=>(u(),m(t(T),{key:o,value:String(o),"as-child":""},{default:f(()=>[(u(),m(O(i.component),{"hide-header":"",tabindex:"-1"}))]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue","default-value","class"])}}}),oe=Object.assign(Z,{__name:"ProseCodeGroup"});export{oe as default};
