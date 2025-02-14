import{r as N,d as U,L as de,N as ce,O as fe,P as te,A,i as w,G as O,w as V,g as R,R as oe,S as a,Z as j,$ as M,U as ue,bm as pe,V as ve,W as he,bn as me,Q as ge,M as ye,H as be,a4 as le,af as xe,z as Ce,aH as ke,E as Te,bh as Ee,c as P,F as ne,J as Ie,e as F,n as S,bi as Ke,aC as ae,ae as Se,t as _e,f as se,aj as we}from"./BaTQ5LD-.js";import Ae from"./D1smNKpx.js";import{f as G}from"./Ct-IzB4k.js";import{_ as Be}from"./7hr1nxS9.js";function H(p){return p.reduce((o,t)=>(o.push(t),t.children&&o.push(...H(t.children)),o),[])}function Re(p,o){const t=N(),h=(n,v)=>{if(o.multiple&&Array.isArray(p.value))if(o.selectionBehavior==="replace")p.value=[n],t.value=n;else{const C=p.value.findIndex(u=>v(u));C!==-1?p.value.splice(C,1):p.value.push(n)}else o.selectionBehavior==="replace"?p.value={...n}:!Array.isArray(p.value)&&v(p.value)?p.value=void 0:p.value={...n};return p.value};function B(n,v,C,u){var I;if(!(t!=null&&t.value)||!o.multiple||!Array.isArray(p.value))return;const K=(I=C().filter(_=>_.ref.dataset.disabled!=="").find(_=>_.ref===v))==null?void 0:I.value;if(!K)return;let T=null;switch(n){case"prev":case"next":{T=G(u,t.value,K);break}case"first":{T=G(u,t.value,u==null?void 0:u[0]);break}case"last":{T=G(u,t.value,u==null?void 0:u[u.length-1]);break}}p.value=T}return{firstValue:t,onSelectItem:h,handleMultipleReplace:B}}const[Le,Ve]=ve("TreeRoot"),$e=U({__name:"TreeRoot",props:{modelValue:{},defaultValue:{},items:{},expanded:{},defaultExpanded:{},getKey:{},getChildren:{type:Function,default:p=>p.children},selectionBehavior:{default:"toggle"},multiple:{type:Boolean},dir:{},disabled:{type:Boolean},propagateSelect:{type:Boolean},asChild:{type:Boolean},as:{default:"ul"}},emits:["update:modelValue","update:expanded"],setup(p,{emit:o}){const t=p,h=o,{items:B,multiple:n,disabled:v,propagateSelect:C,dir:u}=de(t),{handleTypeaheadSearch:k}=ce(),K=fe(u),T=N(),I=N(!1),_=he(),m=te(t,"modelValue",h,{defaultValue:t.defaultValue??(n.value?[]:void 0),passive:t.modelValue===void 0,deep:!0}),s=te(t,"expanded",h,{defaultValue:t.defaultExpanded??[],passive:t.expanded===void 0,deep:!0}),{onSelectItem:c,handleMultipleReplace:e}=Re(m,t),i=A(()=>n.value&&Array.isArray(m.value)?m.value.map(l=>t.getKey(l)):[t.getKey(m.value??{})]);function r(l,d=1,b){return l.reduce((x,E,L)=>{const $=t.getKey(E),D=t.getChildren(E),W=s.value.includes($),z={_id:$,value:E,index:L,level:d,parentItem:b,hasChildren:!!D,bind:{value:E,level:d,"aria-setsize":l.length,"aria-posinset":L+1}};return x.push(z),D&&W&&x.push(...r(D,d+1,E)),x},[])}const f=A(()=>{const l=t.items;return s.value.map(d=>d),r(l??[])});function g(l){var d;if(I.value)_.trigger(l);else{const b=((d=T.value)==null?void 0:d.getItems())??[];k(l.key,b)}}function y(l){if(I.value)return;const d=me[l.key];ge(()=>{var b;e(d,document.activeElement,(b=T.value)==null?void 0:b.getItems,f.value.map(x=>x.value))})}return Ve({modelValue:m,selectedKeys:i,onSelect:l=>{var x;const d=E=>t.getKey(E??{})===t.getKey(l),b=t.multiple&&Array.isArray(m.value)?((x=m.value)==null?void 0:x.findIndex(d))!==-1:void 0;if(c(l,d),t.propagateSelect&&t.multiple&&Array.isArray(m.value)){const E=H(t.getChildren(l)??[]);b?m.value=[...m.value].filter(L=>!E.some($=>t.getKey(L??{})===t.getKey($))):m.value=[...m.value,...E]}},expanded:s,onToggle(l){if(!(l?t.getChildren(l):void 0))return;const b=t.getKey(l)??l;s.value.includes(b)?s.value=s.value.filter(x=>x!==b):s.value.push(b)},getKey:t.getKey,getChildren:t.getChildren,items:B,expandedItems:f,disabled:v,multiple:n,dir:K,propagateSelect:C,isVirtual:I,virtualKeydownHook:_,handleMultipleReplace:e}),(l,d)=>(w(),O(a(pe),{ref_key:"rovingFocusGroupRef",ref:T,"as-child":"",orientation:"vertical",dir:a(K)},{default:V(()=>[R(a(ue),{role:"tree",as:l.as,"as-child":l.asChild,"aria-multiselectable":a(n)?!0:void 0,onKeydown:[g,j(M(y,["shift"]),["up","down"])]},{default:V(()=>[oe(l.$slots,"default",{flattenItems:f.value,modelValue:a(m),expanded:a(s)})]),_:3},8,["as","as-child","aria-multiselectable","onKeydown"])]),_:3},8,["dir"]))}}),De="tree.select",Ne="tree.toggle",Pe=U({inheritAttrs:!1,__name:"TreeItem",props:{value:{},level:{},asChild:{type:Boolean},as:{default:"li"}},emits:["select","toggle"],setup(p,{expose:o,emit:t}){const h=p,B=t,n=Le(),{getItems:v}=ye(),C=A(()=>!!n.getChildren(h.value)),u=A(()=>{const e=n.getKey(h.value);return n.expanded.value.includes(e)}),k=A(()=>{const e=n.getKey(h.value);return n.selectedKeys.value.includes(e)}),K=A(()=>{if(n.propagateSelect.value&&k.value&&C.value&&Array.isArray(n.modelValue.value))return!H(n.getChildren(h.value)||[]).every(i=>n.modelValue.value.find(r=>n.getKey(r)===n.getKey(i)))});function T(e){if(C.value)if(u.value){const i=v().map(l=>l.ref),r=document.activeElement,f=i.indexOf(r),y=[...i].slice(f).find(l=>Number(l.getAttribute("data-indent"))===h.level+1);y&&y.focus()}else c(e)}function I(e){if(u.value)c(e);else{const i=v().map(l=>l.ref),r=document.activeElement,f=i.indexOf(r),y=[...i].slice(0,f).reverse().find(l=>Number(l.getAttribute("data-indent"))===h.level-1);y&&y.focus()}}async function _(e){B("select",e),!(e!=null&&e.defaultPrevented)&&n.onSelect(h.value)}async function m(e){B("toggle",e),!(e!=null&&e.defaultPrevented)&&n.onToggle(h.value)}async function s(e){if(!e)return;const i={originalEvent:e,value:h.value,isExpanded:u.value,isSelected:k.value};le(De,_,i)}async function c(e){if(!e)return;const i={originalEvent:e,value:h.value,isExpanded:u.value,isSelected:k.value};le(Ne,m,i)}return o({isExpanded:u,isSelected:k,isIndeterminate:K,handleToggle:()=>n.onToggle(h.value),handleSelect:()=>n.onSelect(h.value)}),(e,i)=>(w(),O(a(Be),{"as-child":"",value:e.value,"allow-shift-key":""},{default:V(()=>[R(a(ue),be(e.$attrs,{role:"treeitem",as:e.as,"as-child":e.asChild,"aria-selected":k.value,"aria-expanded":C.value?u.value:void 0,"aria-level":e.level,"data-indent":e.level,"data-selected":k.value?"":void 0,"data-expanded":u.value?"":void 0,onKeydown:[j(M(s,["self","prevent"]),["enter","space"]),i[0]||(i[0]=j(M(r=>a(n).dir.value==="ltr"?T(r):I(r),["prevent"]),["right"])),i[1]||(i[1]=j(M(r=>a(n).dir.value==="ltr"?I(r):T(r),["prevent"]),["left"]))],onClick:i[2]||(i[2]=M(r=>{s(r),c(r)},["stop"]))}),{default:V(()=>[oe(e.$slots,"default",{isExpanded:u.value,isSelected:k.value,isIndeterminate:K.value,handleSelect:()=>a(n).onSelect(e.value),handleToggle:()=>a(n).onToggle(e.value)})]),_:3},16,["as","as-child","aria-selected","aria-expanded","aria-level","data-indent","data-selected","data-expanded","onKeydown"])]),_:3},8,["value"]))}}),Me={slots:{root:"relative lg:h-[450px] my-5 grid lg:grid-cols-3 border border-[var(--ui-border-muted)] rounded-[calc(var(--ui-radius)*1.5)]",list:"isolate relative p-2 border-b lg:border-b-0 lg:border-e border-[var(--ui-border-muted)] overflow-y-auto",item:"",listWithChildren:"ms-4.5 border-s border-[var(--ui-border)]",itemWithChildren:"ps-1.5 -ms-px",link:"relative group peer w-full px-2.5 py-1.5 before:inset-y-px before:inset-x-0 flex items-center gap-1.5 text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",linkLeadingIcon:"size-4 shrink-0",linkLabel:"truncate",linkTrailing:"ms-auto inline-flex gap-1.5 items-center",linkTrailingIcon:"size-5 transform transition-transform duration-200 shrink-0 group-data-expanded:rotate-180",content:"overflow-hidden lg:col-span-2 flex flex-col [&>div]:my-0 [&>div]:flex-1 [&>div]:flex [&>div]:flex-col [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-s-0 [&>div>pre]:border-e-0 [&>div>pre]:rounded-l-none [&>div>pre]:flex-1 [&>div]:overflow-y-auto"},variants:{active:{true:{link:"text-[var(--ui-text-highlighted)] before:bg-[var(--ui-bg-elevated)]"},false:{link:["hover:text-[var(--ui-text-highlighted)] hover:before:bg-[var(--ui-bg-elevated)]/50","transition-colors before:transition-colors"]}}}},Oe=Se;var ie,re;const We=ae({extend:ae(Me),...((re=(ie=Oe.uiPro)==null?void 0:ie.prose)==null?void 0:re.codeTree)||{}}),ze=U({__name:"CodeTree",props:{defaultValue:{},class:{},ui:{}},setup(p){const o=p,t=xe(),h=Ce(),[B,n]=ke(),v=We(),C=N(o.defaultValue?{path:o.defaultValue}:void 0),u=N(),k=A(()=>{var s,c;return((c=(s=t.default)==null?void 0:s.call(t))==null?void 0:c.flatMap(I).filter(Boolean))||[]}),K=A(()=>T(k.value));function T(s){const c=new Map,e=[];s.forEach(r=>{const f=r.label.split("/");let g="";f.forEach((y,l)=>{var d,b;if(g=g?`${g}/${y}`:y,!c.has(g)){const x={label:y,path:g,...l<f.length-1&&{children:[]}};c.set(g,x),l===0?e.push(x):(b=(d=c.get(f.slice(0,l).join("/")))==null?void 0:d.children)==null||b.push(x)}})});const i=r=>r.sort((f,g)=>!!f.children==!!g.children?f.label.localeCompare(g.label):g.children?1:-1).map(f=>({...f,children:f.children&&i(f.children)}));return i(e)}function I(s,c){var e,i,r,f;return typeof s.type=="symbol"?(e=s.children)==null?void 0:e.map(I):{label:((i=s.props)==null?void 0:i.filename)||((r=s.props)==null?void 0:r.label)||`${c}`,icon:(f=s.props)==null?void 0:f.icon,component:s}}const _=A(()=>{var e;const s=(e=C.value)==null?void 0:e.path;if(!s)return[];const c=s.split("/");return c.map((i,r)=>c.slice(0,r+1).join("/"))});Te(C,s=>{const c=k.value.find(e=>(s==null?void 0:s.path)===e.label);c!=null&&c.component&&(u.value=c)},{immediate:!0});const m=N(1);return Ee(()=>m.value++),(s,c)=>{var i,r,f,g;const e=we;return w(),P(ne,null,[R(a(B),null,{default:V(({items:y,level:l})=>[(w(!0),P(ne,null,Ie(y,(d,b)=>{var x,E;return w(),P("li",{key:`${l}-${b}`,class:S(l>0?a(v).itemWithChildren({class:(x=o.ui)==null?void 0:x.itemWithChildren}):a(v).item({class:(E=o.ui)==null?void 0:E.item}))},[R(a(Pe),{"as-child":"",level:l,value:d},{default:V(({isExpanded:L,isSelected:$})=>{var D,W,z,J,Q,Y,Z,q,X,ee;return[F("button",{class:S(a(v).link({class:(D=o.ui)==null?void 0:D.link,active:$}))},[(W=d.children)!=null&&W.length?(w(),O(e,{key:0,name:L?a(h).ui.icons.folderOpen:a(h).ui.icons.folder,class:S(a(v).linkLeadingIcon({class:(z=o.ui)==null?void 0:z.linkLeadingIcon}))},null,8,["name","class"])):(w(),O(Ae,{key:1,filename:d.label,class:S(a(v).linkLeadingIcon({class:(J=o.ui)==null?void 0:J.linkLeadingIcon}))},null,8,["filename","class"])),F("span",{class:S(a(v).linkLabel({class:(Q=o.ui)==null?void 0:Q.linkLabel}))},_e(d.label),3),(Y=d.children)!=null&&Y.length?(w(),P("span",{key:2,class:S(a(v).linkTrailing({class:(Z=o.ui)==null?void 0:Z.linkTrailing}))},[R(e,{name:a(h).ui.icons.chevronDown,class:S(a(v).linkTrailingIcon({class:(q=o.ui)==null?void 0:q.linkTrailingIcon}))},null,8,["name","class"])],2)):se("",!0)],2),(X=d.children)!=null&&X.length&&L?(w(),P("ul",{key:0,class:S(a(v).listWithChildren({class:(ee=o.ui)==null?void 0:ee.listWithChildren}))},[R(a(n),{items:d.children,level:l+1},null,8,["items","level"])],2)):se("",!0)]}),_:2},1032,["level","value"])],2)}),128))]),_:1}),F("div",{class:S(a(v).root({class:[o.class,(i=o.ui)==null?void 0:i.root]}))},[R(a($e),{modelValue:C.value,"onUpdate:modelValue":c[0]||(c[0]=y=>C.value=y),class:S(a(v).list({class:(r=o.ui)==null?void 0:r.list})),items:K.value,"get-key":y=>y.path,"default-expanded":_.value},{default:V(()=>[R(a(n),{items:K.value,level:0},null,8,["items"])]),_:1},8,["modelValue","class","items","get-key","default-expanded"]),F("div",{class:S(a(v).content({class:(f=o.ui)==null?void 0:f.content}))},[(w(),O(Ke((g=u.value)==null?void 0:g.component)))],2)],2)],64)}}}),He=Object.assign(ze,{__name:"ProseCodeTree"});export{He as default};
