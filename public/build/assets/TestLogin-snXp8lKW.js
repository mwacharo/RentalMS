import{h as i,c as b,o as p,w as a,b as s,u as o,d as k,e as x,a as l,t as V,k as h,f as m,n as C}from"./app-Cdoi5j0A.js";import{T as B,Z as A,i as L}from"./index.esm-CggUAtJP.js";import{A as N}from"./AuthenticationCard-Bk22fzTo.js";import{_ as T}from"./Checkbox-uYD1C-c5.js";import{_}from"./InputError-CEQ0tigv.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={key:0,class:"mb-4 font-medium text-sm text-green-600"},P={class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"},R={class:"block mt-4"},S={class:"flex items-center"},U={__name:"TestLogin",props:{canResetPassword:Boolean,status:String},setup(d){const t=B({email:"",password:"",remember:!1}),u=()=>{t.transform(n=>({...n,remember:t.remember?"on":""})).post(route("login"),{onFinish:()=>t.reset("password")})};return(n,e)=>{const c=i("v-text-field"),f=i("v-card-text"),v=i("v-card"),g=i("v-btn"),w=i("v-responsive"),y=i("v-sheet");return p(),b(y,{class:"pa-12",color:"blue"},{default:a(()=>[s(v,{class:"mx-auto px-6 py-8","max-width":"344"},{default:a(()=>[s(w,{class:"mx-auto","max-width":"344"},{default:a(()=>[s(o(A),{title:"Log in"}),s(N,null,{default:a(()=>[d.status?(p(),k("div",I,V(d.status),1)):x("",!0),l("form",{onSubmit:h(u,["prevent"])},[e[9]||(e[9]=l("div",{class:"text-h6 text-medium-emphasis"},"Account",-1)),s(c,{id:"email",modelValue:o(t).email,"onUpdate:modelValue":e[0]||(e[0]=r=>o(t).email=r),type:"email",required:"",density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue"]),s(_,{class:"mt-2",message:o(t).errors.email},null,8,["message"]),l("div",P,[e[5]||(e[5]=m(" Password ")),d.canResetPassword?(p(),b(o(L),{key:0,href:n.route("password.request"),class:"text-caption text-decoration-none text-blue hover:underline"},{default:a(()=>e[4]||(e[4]=[m(" Forgot login password? ")])),_:1},8,["href"])):x("",!0)]),s(c,{id:"password",modelValue:o(t).password,"onUpdate:modelValue":e[1]||(e[1]=r=>o(t).password=r),"append-inner-icon":n.visible?"mdi-eye-off":"mdi-eye",type:n.visible?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":e[2]||(e[2]=r=>n.visible=!n.visible)},null,8,["modelValue","append-inner-icon","type"]),s(_,{class:"mt-2",message:o(t).errors.password},null,8,["message"]),l("div",R,[l("label",S,[s(T,{checked:o(t).remember,"onUpdate:checked":e[3]||(e[3]=r=>o(t).remember=r),name:"remember"},null,8,["checked"]),e[6]||(e[6]=l("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),s(v,{class:"mb-12",color:"surface-variant",variant:"tonal"},{default:a(()=>[s(f,{class:"text-medium-emphasis text-caption"},{default:a(()=>e[7]||(e[7]=[m(" Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. ")])),_:1})]),_:1}),s(g,{block:"",class:C(["mb-8",{"opacity-25":o(t).processing}]),color:"blue",size:"large",variant:"tonal",disabled:o(t).processing,onClick:u},{default:a(()=>e[8]||(e[8]=[m(" Log In100 ")])),_:1},8,["disabled","class"]),s(f,{class:"text-center"})],32)]),_:1})]),_:1})]),_:1})]),_:1})}}},M=E(U,[["__scopeId","data-v-f112b9ca"]]);export{M as default};
