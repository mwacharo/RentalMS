import{d as m,o as i,b as s,u as a,w as r,a as o,e as d,t as f,k as c,n as p,f as _,F as w}from"./app-Cdoi5j0A.js";import{T as g,Z as y}from"./index.esm-CggUAtJP.js";import{A as b}from"./AuthenticationCard-Bk22fzTo.js";import{_ as x}from"./AuthenticationCardLogo-C25qHvOe.js";import{_ as k}from"./InputError-CEQ0tigv.js";import{_ as V}from"./InputLabel-Bsa1UDMX.js";import{_ as v}from"./PrimaryButton-BBDTOwub.js";import{_ as F}from"./TextInput-BoXcd9Ci.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(l){const e=g({email:""}),n=()=>{e.post(route("password.email"))};return(C,t)=>(i(),m(w,null,[s(a(y),{title:"Forgot Password"}),s(b,null,{logo:r(()=>[s(x)]),default:r(()=>[t[2]||(t[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(i(),m("div",N,f(l.status),1)):d("",!0),o("form",{onSubmit:c(n,["prevent"])},[o("div",null,[s(V,{for:"email",value:"Email"}),s(F,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":t[0]||(t[0]=u=>a(e).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(k,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),o("div",$,[s(v,{class:p({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:r(()=>t[1]||(t[1]=[_(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{z as default};
