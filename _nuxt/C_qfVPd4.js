import{d as v,a6 as C,a8 as _,z as x,A as b,i as h,c as B,R as I,e as T,g as $,S as k,n as t,aD as c,an as M,af as P}from"./K9G66Qqn.js";const j={slots:{root:"relative [&_pre]:h-[200px]",footer:"h-16 absolute inset-x-px bottom-px rounded-b-[calc(var(--ui-radius)*1.5)] flex items-center justify-center",trigger:"group",triggerIcon:"group-data-[state=open]:rotate-180"},variants:{open:{true:{root:"[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12"},false:{root:"[&_pre]:overflow-hidden",footer:"bg-gradient-to-t from-(--ui-bg-muted)"}}}},w=P;var d,f;const y=c({extend:c(j),...((f=(d=w.uiPro)==null?void 0:d.prose)==null?void 0:f.codeCollapse)||{}}),z=v({__name:"CodeCollapse",props:C({icon:{},name:{default:"code"},openText:{default:"Expand"},closeText:{default:"Collapse"},class:{},ui:{}},{open:{type:Boolean,default:!1},openModifiers:{}}),emits:["update:open"],setup(n){const e=n,o=_(n,"open"),g=x(),s=b(()=>y({open:o.value}));return(a,l)=>{var r,p,i,u;const m=M;return h(),B("div",{class:t(s.value.root({class:[e.class,(r=e.ui)==null?void 0:r.root]}))},[I(a.$slots,"default"),T("div",{class:t(s.value.footer({class:(p=e.ui)==null?void 0:p.footer}))},[$(m,{icon:a.icon||k(g).ui.icons.chevronDown,color:"neutral",variant:"outline","data-state":o.value?"open":"closed",label:`${o.value?a.closeText:a.openText} ${a.name}`,class:t(s.value.trigger({class:(i=e.ui)==null?void 0:i.trigger})),ui:{leadingIcon:s.value.triggerIcon({class:(u=e.ui)==null?void 0:u.triggerIcon})},onClick:l[0]||(l[0]=A=>o.value=!o.value)},null,8,["icon","data-state","label","class","ui"])],2)],2)}}}),E=Object.assign(z,{__name:"ProseCodeCollapse"});export{E as default};
