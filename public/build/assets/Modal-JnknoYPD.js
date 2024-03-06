import{S as w}from"./SectionTitle-uTH-Qa9V.js";import{o as y,d as f,b as l,w as o,q as n,a as t,A as h,N as x,O as _,k as g,c as b,T as i,B as d,l as r,n as k,e as $,P as B}from"./app-SrON79WU.js";const S={class:"md:grid md:grid-cols-3 md:gap-6"},C={class:"mt-5 md:mt-0 md:col-span-2"},E={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},L={__name:"ActionSection",setup(e){return(a,s)=>(y(),f("div",S,[l(w,null,{title:o(()=>[n(a.$slots,"title")]),description:o(()=>[n(a.$slots,"description")]),_:3}),t("div",C,[t("div",E,[n(a.$slots,"content")])])]))}},N={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},T=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),V=[T],M={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const s=e,p=a;h(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const m=()=>{s.closeable&&p("close")},u=c=>{c.key==="Escape"&&s.show&&m()};x(()=>document.addEventListener("keydown",u)),_(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=null});const v=g(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(c,W)=>(y(),b(B,{to:"body"},[l(i,{"leave-active-class":"duration-200"},{default:o(()=>[r(t("div",N,[l(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[r(t("div",{class:"fixed inset-0 transform transition-all",onClick:m},V,512),[[d,e.show]])]),_:1}),l(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[r(t("div",{class:k(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",v.value])},[e.show?n(c.$slots,"default",{key:0}):$("",!0)],2),[[d,e.show]])]),_:3})],512),[[d,e.show]])]),_:3})]))}};export{L as _,M as a};
