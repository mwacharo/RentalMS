import{T as f}from"./index.esm-Q6p6ZMEQ.js";import{_}from"./ActionMessage-G5A67fbZ.js";import{_ as V}from"./FormSection-SVSv_jCK.js";import{_ as l}from"./InputError-kpIthsdT.js";import{_ as d}from"./InputLabel-0BV9lwmF.js";import{_ as g}from"./PrimaryButton-fLpuOfQV.js";import{_ as p}from"./TextInput-9_0nU28A.js";import{r as i,o as v,c as y,w as e,f as n,a as c,b as r,u as o,n as P}from"./app-SrON79WU.js";import"./SectionTitle-uTH-Qa9V.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},q={__name:"UpdatePasswordForm",setup($){const u=i(null),m=i(null),s=f({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(U,a)=>(v(),y(V,{onSubmitted:w},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[c("div",b,[r(d,{for:"current_password",value:"Current Password"}),r(p,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(l,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),c("div",k,[r(d,{for:"password",value:"New Password"}),r(p,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(l,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),c("div",S,[r(d,{for:"password_confirmation",value:"Confirm Password"}),r(p,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(l,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(_,{on:o(s).recentlySuccessful,class:"me-3"},{default:e(()=>[n(" Saved. ")]),_:1},8,["on"]),r(g,{class:P({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{q as default};
