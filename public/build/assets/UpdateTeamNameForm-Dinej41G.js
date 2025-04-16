import{T as u}from"./index.esm-CggUAtJP.js";import{_ as p}from"./ActionMessage-CfRE6ckj.js";import{_}from"./FormSection-BlxMVyx1.js";import{_ as v}from"./InputError-CEQ0tigv.js";import{_ as l}from"./InputLabel-Bsa1UDMX.js";import{_ as g}from"./PrimaryButton-BBDTOwub.js";import{_ as T}from"./TextInput-BoXcd9Ci.js";import{c as b,o as w,S as x,w as m,b as o,u as n,f as r,n as N,a as t,t as d}from"./app-Cdoi5j0A.js";import"./SectionTitle-DAT1SSeX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={class:"col-span-6"},y={class:"flex items-center mt-2"},V=["src","alt"],$={class:"ms-4 leading-tight"},k={class:"text-gray-900"},B={class:"text-gray-700 text-sm"},U={class:"col-span-6 sm:col-span-4"},H={__name:"UpdateTeamNameForm",props:{team:Object,permissions:Object},setup(a){const i=a,s=u({name:i.team.name}),c=()=>{s.put(route("teams.update",i.team),{errorBag:"updateTeamName",preserveScroll:!0})};return(h,e)=>(w(),b(_,{onSubmitted:c},x({title:m(()=>[e[1]||(e[1]=r(" Team Name "))]),description:m(()=>[e[2]||(e[2]=r(" The team's name and owner information. "))]),form:m(()=>[t("div",S,[o(l,{value:"Team Owner"}),t("div",y,[t("img",{class:"w-12 h-12 rounded-full object-cover",src:a.team.owner.profile_photo_url,alt:a.team.owner.name},null,8,V),t("div",$,[t("div",k,d(a.team.owner.name),1),t("div",B,d(a.team.owner.email),1)])])]),t("div",U,[o(l,{for:"name",value:"Team Name"}),o(T,{id:"name",modelValue:n(s).name,"onUpdate:modelValue":e[0]||(e[0]=f=>n(s).name=f),type:"text",class:"mt-1 block w-full",disabled:!a.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),o(v,{message:n(s).errors.name,class:"mt-2"},null,8,["message"])])]),_:2},[a.permissions.canUpdateTeam?{name:"actions",fn:m(()=>[o(p,{on:n(s).recentlySuccessful,class:"me-3"},{default:m(()=>e[3]||(e[3]=[r(" Saved. ")])),_:1},8,["on"]),o(g,{class:N({"opacity-25":n(s).processing}),disabled:n(s).processing},{default:m(()=>e[4]||(e[4]=[r(" Save ")])),_:1},8,["class","disabled"])]),key:"0"}:void 0]),1024))}};export{H as default};
