import{a as i}from"./Modal-JnknoYPD.js";import{o as n,c as d,w as r,a as e,q as o}from"./app-SrON79WU.js";const m={class:"px-6 py-4"},f={class:"text-lg font-medium text-gray-900"},h={class:"mt-4 text-sm text-gray-600"},x={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-end"},w={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:a}){const l=a,c=()=>{l("close")};return(s,_)=>(n(),d(i,{show:t.show,"max-width":t.maxWidth,closeable:t.closeable,onClose:c},{default:r(()=>[e("div",m,[e("div",f,[o(s.$slots,"title")]),e("div",h,[o(s.$slots,"content")])]),e("div",x,[o(s.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{w as _};
