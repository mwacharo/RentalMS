import{i as l,o as c,c as f,w as r,b as s,u as e,d as C,t as S,e as v,a as d,V as I,f as m,n as B,k as L,p as U,l as A}from"./app-bwZBa8wZ.js";import{T as N,Z as T,i as b}from"./index.esm-FtpNarlo.js";import{A as q}from"./AuthenticationCard-_PwmaF2w.js";import{_ as E}from"./Checkbox-9E8-Tr2s.js";import{_ as x}from"./InputError-Rh-Pzwai.js";import{_ as P}from"./_plugin-vue_export-helper-x3n3nnut.js";const h=i=>(U("data-v-0d359cb8"),i=i(),A(),i),R={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=h(()=>d("div",{class:"text-h6 text-medium-emphasis"},"Account",-1)),z={class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"},F={class:"block mt-4"},j={class:"flex items-center"},D=h(()=>d("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1)),M={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const t=N({email:"",password:"",user_type:"",remember:!1}),p=()=>{t.transform(a=>({...a,remember:t.remember?"on":""})).post(route("login"),{onFinish:()=>t.reset("password")})};return(a,o)=>{const u=l("v-text-field"),_=l("v-card"),g=l("v-btn"),w=l("v-icon"),y=l("v-card-text"),V=l("v-responsive"),k=l("v-sheet");return c(),f(k,{class:"pa-12",color:"white"},{default:r(()=>[s(_,{class:"mx-auto px-6 py-8","max-width":"344"},{default:r(()=>[s(V,{class:"mx-auto","max-width":"344"},{default:r(()=>[s(e(T),{title:"Log in"}),s(q,null,{default:r(()=>[i.status?(c(),C("div",R,S(i.status),1)):v("",!0),d("form",{onSubmit:L(p,["prevent"])},[s(e(I),{modelValue:e(t).user_type,"onUpdate:modelValue":o[0]||(o[0]=n=>e(t).user_type=n),items:["Landlord","Tenant","Company","User"],label:"Account Type",required:"",variant:"outlined"},null,8,["modelValue"]),$,s(u,{id:"email",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=n=>e(t).email=n),type:"email",required:"",density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue"]),s(x,{class:"mt-2",message:e(t).errors.email},null,8,["message"]),d("div",z,[m(" Password "),i.canResetPassword?(c(),f(e(b),{key:0,href:a.route("password.request"),class:"text-caption text-decoration-none text-blue hover:underline"},{default:r(()=>[m(" Forgot login password? ")]),_:1},8,["href"])):v("",!0)]),s(u,{id:"password",modelValue:e(t).password,"onUpdate:modelValue":o[2]||(o[2]=n=>e(t).password=n),"append-inner-icon":a.visible?"mdi-eye-off":"mdi-eye",type:a.visible?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":o[3]||(o[3]=n=>a.visible=!a.visible)},null,8,["modelValue","append-inner-icon","type"]),s(x,{class:"mt-2",message:e(t).errors.password},null,8,["message"]),d("div",F,[d("label",j,[s(E,{checked:e(t).remember,"onUpdate:checked":o[4]||(o[4]=n=>e(t).remember=n),name:"remember"},null,8,["checked"]),D])]),s(_,{class:"mb-12",color:"surface-variant",variant:"tonal"}),s(g,{block:"",class:B(["mb-8",{"opacity-25":e(t).processing}]),color:"blue",size:"large",variant:"tonal",disabled:e(t).processing,onClick:p},{default:r(()=>[m(" Log In ")]),_:1},8,["disabled","class"]),s(y,{class:"text-center"},{default:r(()=>[s(e(b),{href:a.route("register"),class:"text-caption text-decoration-none text-blue hover:underline"},{default:r(()=>[m(" Sign up now "),s(w,{icon:"mdi-chevron-right"})]),_:1},8,["href"])]),_:1})],32)]),_:1})]),_:1})]),_:1})]),_:1})}}},Q=P(M,[["__scopeId","data-v-0d359cb8"]]);export{Q as default};
