import{_ as x}from"./_plugin-vue_export-helper-x3n3nnut.js";import{h as l,o as r,d as u,b as o,w as e,c as I,e as p,f as _,p as k,j as V,a as c}from"./app-5VpZBQ26.js";const C={data(){return{dialog:!1,showPhoneIcon:!0}},methods:{show(t){console.log(t),this.dialog=!0,this.id=t.id},close(){this.dialog=!1},toggleIcons(){this.loading=!0,this.showPhoneIcon=!this.showPhoneIcon}}},a=t=>(k("data-v-27cd7b2b"),t=t(),V(),t),P={class:"text-center pa-4"},y=a(()=>c("br",null,null,-1)),B=a(()=>c("br",null,null,-1)),N=a(()=>c("br",null,null,-1)),S=a(()=>c("br",null,null,-1)),T=a(()=>c("br",null,null,-1)),j={key:1};function E(t,d,H,U,n,h){const f=l("v-text-field"),g=l("v-responsive"),s=l("v-icon"),i=l("v-card"),v=l("v-btn"),w=l("space"),b=l("v-dialog");return r(),u("div",P,[o(b,{modelValue:n.dialog,"onUpdate:modelValue":d[1]||(d[1]=m=>n.dialog=m),width:"auto"},{default:e(()=>[o(i,{width:"600",height:"400","input-type":"text"},{actions:e(()=>[n.showPhoneIcon?(r(),I(v,{key:0,loading:t.loading,class:"ms-auto",text:"",onClick:h.toggleIcons},{default:e(()=>[o(s,{class:"mdi mdi-phone",color:"success"})]),_:1},8,["loading","onClick"])):p("",!0),o(w),n.showPhoneIcon?p("",!0):(r(),u("div",j,[o(s,{class:"mdi mdi-phone-hangup",color:"error",onClick:d[0]||(d[0]=m=>n.dialog=!1)},{default:e(()=>[_("hangup")]),_:1}),o(s,{class:"mdi mdi-pause",color:"warning"},{default:e(()=>[_("Hold")]),_:1}),o(s,{class:"mdi mdi-phone-forward",color:"info"},{default:e(()=>[_("Transfer")]),_:1})]))]),default:e(()=>[o(i,null,{default:e(()=>[o(g,{class:"mx-auto","max-width":"600"},{default:e(()=>[o(f,{"hide-details":"auto",placeholder:"enter  phone number",type:"text","bg-color":"success"})]),_:1}),o(i,{class:"px-4"},{default:e(()=>[o(s,{class:"mdi mdi-account ml-2",color:"error"}),y,o(s,{class:"mdi mdi-email ml-2",color:"info"}),B,o(s,{class:"mdi mdi-phone ml-2",color:"success"}),N,o(s,{class:"mdi mdi-phone ml-2",color:"warning"}),S,o(s,{class:"mdi mdi-map-marker ml-2"}),T]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const A=x(C,[["render",E],["__scopeId","data-v-27cd7b2b"]]);export{A as default};
