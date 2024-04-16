import{h as o,o as C,d as L,b as t,w as e,s as S,f as l,t as w,a as m,i as P,A as U,r as $,c as N,u as r,L as i,z as T}from"./app-9BzRjj2Q.js";import{_ as D}from"./_plugin-vue_export-helper-x3n3nnut.js";const I=()=>{U.Inertia.post(route("logout"))},M={data:()=>({fav:!0,menu:!1,message:!1,hints:!0}),methods:{logout:I}},z={class:"text-center"},E={class:"font-medium text-base text-gray-800"},O={class:"font-medium text-sm text-gray-500"};function R(p,_,v,d,s,n){const a=o("v-icon"),u=o("v-btn"),h=o("v-divider"),b=o("v-list"),g=o("v-spacer"),y=o("v-card-actions"),V=o("v-card"),k=o("v-menu");return C(),L("div",z,[t(k,{modelValue:p.menu,"onUpdate:modelValue":_[2]||(_[2]=f=>p.menu=f),"close-on-content-click":!1,location:"top"},{activator:e(({props:f})=>[t(u,S({color:"indigo"},f),{default:e(()=>[t(a,{left:""},{default:e(()=>[l("mdi-account")]),_:1})]),_:2},1040)]),default:e(()=>[t(V,{"min-width":"300"},{default:e(()=>[t(h),t(b,null,{default:e(()=>[m("div",null,[m("div",E,w(p.$page.props.auth.user.name),1),m("div",O,w(p.$page.props.auth.user.email),1)])]),_:1}),t(y,null,{default:e(()=>[t(g),t(u,{variant:"text",onClick:_[0]||(_[0]=f=>p.menu=!1)},{default:e(()=>[l("Close")]),_:1}),m("form",{method:"POST",onSubmit:_[1]||(_[1]=P((...f)=>n.logout&&n.logout(...f),["prevent"]))},[t(u,{color:"primary",variant:"text",type:"submit"},{default:e(()=>[t(a,{left:""},{default:e(()=>[l("mdi-exit-to-app")]),_:1}),l(" Sign out ")]),_:1})],32)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const j=D(M,[["render",R]]),G={__name:"AppLayout",setup(p){const _=$(!0),v=$(!1);return(d,s)=>{const n=o("v-list-item"),a=o("v-icon"),u=o("v-list-item-title"),h=o("v-list"),b=o("v-navigation-drawer"),g=o("v-app-bar-nav-icon"),y=o("v-toolbar-title"),V=o("v-spacer"),k=o("v-btn"),f=o("v-app-bar"),A=o("v-main"),B=o("v-app");return C(),N(B,null,{default:e(()=>[t(b,{modelValue:_.value,"onUpdate:modelValue":s[1]||(s[1]=c=>_.value=c),app:"",color:"black"},{default:e(()=>[l(" - "),t(h,{density:"compact",modelValue:v.value,"onUpdate:modelValue":s[0]||(s[0]=c=>v.value=c),id:"layout"},{default:e(()=>[t(n),t(r(i),{href:d.route("dashboard")},{default:e(()=>[t(n,{color:"info",value:"home"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-view-dashboard")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Dashboard")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("tenant")},{default:e(()=>[t(n,{color:"info",value:"home"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-account-tie")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Tenant")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("landlord")},{default:e(()=>[t(n,{color:"info",value:"landlords"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-account-multiple")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Landlord")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("property")},{default:e(()=>[t(n,{color:"info",value:"properties"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-domain")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Property")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("unit")},{default:e(()=>[t(n,{color:"info",value:"unit"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-home-floor-a")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Unit")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("bill")},{default:e(()=>[t(n,{color:"info",value:"bill"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-currency-usd")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Bill")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("booking")},{default:e(()=>[t(n,{color:"info",value:"bookings"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-calendar-check")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Booking")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("lease")},{default:e(()=>[t(n,{color:"info",value:"leases"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-file-document-edit")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Lease")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("invoice")},{default:e(()=>[t(n,{color:"info",value:`invoice
       `},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-receipt")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Invoice")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("payment")},{default:e(()=>[t(n,{color:"info",value:"payments"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-currency-usd")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Payment")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("admin")},{default:e(()=>[t(n,{color:"info",value:"admins"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-account-multiple")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Admin")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("phone")},{default:e(()=>[t(n,{color:"success",value:"phone"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-phone")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Call Centre")]),_:1})]),_:1})]),_:1},8,["href"]),t(r(i),{href:d.route("vacantAd")},{default:e(()=>[t(n,{value:"vacantAd"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-home-outline")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Vacancies Ad")]),_:1})]),_:1})]),_:1},8,["href"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(f,{app:""},{default:e(()=>[t(g,{onClick:s[2]||(s[2]=c=>_.value=!_.value)}),t(y,null,{default:e(()=>[l("Rental Management System")]),_:1}),t(V),t(k,{icon:"mdi-bell"},{default:e(()=>[t(j)]),_:1}),t(a,{class:"mx-2"},{default:e(()=>[l("mdi-bell")]),_:1})]),_:1}),t(A,null,{default:e(()=>[T(d.$slots,"default")]),_:3})]),_:3})}}};export{G as _};
