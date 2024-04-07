import{h as o,o as C,d as S,b as t,w as e,s as P,f as l,t as w,a as m,i as U,D,r as $,c as N,u as s,L as _,y as T}from"./app-5VpZBQ26.js";import{_ as I}from"./_plugin-vue_export-helper-x3n3nnut.js";const M=()=>{D.Inertia.post(route("logout"))},A={data:()=>({fav:!0,menu:!1,message:!1,hints:!0}),methods:{logout:M}},E={class:"text-center"},O={class:"font-medium text-base text-gray-800"},R={class:"font-medium text-sm text-gray-500"};function j(p,r,v,d,f,n){const a=o("v-icon"),u=o("v-btn"),h=o("v-divider"),b=o("v-list"),g=o("v-spacer"),y=o("v-card-actions"),k=o("v-card"),V=o("v-menu");return C(),S("div",E,[t(V,{modelValue:p.menu,"onUpdate:modelValue":r[2]||(r[2]=i=>p.menu=i),"close-on-content-click":!1,location:"top"},{activator:e(({props:i})=>[t(u,P({color:"indigo"},i),{default:e(()=>[t(a,{left:""},{default:e(()=>[l("mdi-account")]),_:1})]),_:2},1040)]),default:e(()=>[t(k,{"min-width":"300"},{default:e(()=>[t(h),t(b,null,{default:e(()=>[m("div",null,[m("div",O,w(p.$page.props.auth.user.name),1),m("div",R,w(p.$page.props.auth.user.email),1)])]),_:1}),t(y,null,{default:e(()=>[t(g),t(u,{variant:"text",onClick:r[0]||(r[0]=i=>p.menu=!1)},{default:e(()=>[l("Close")]),_:1}),m("form",{method:"POST",onSubmit:r[1]||(r[1]=U((...i)=>n.logout&&n.logout(...i),["prevent"]))},[t(u,{color:"primary",variant:"text",type:"submit"},{default:e(()=>[t(a,{left:""},{default:e(()=>[l("mdi-exit-to-app")]),_:1}),l(" Sign out ")]),_:1})],32)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const q=I(A,[["render",j]]),G={__name:"AppLayout",setup(p){const r=$(!0),v=$(!1);return(d,f)=>{const n=o("v-list-item"),a=o("v-icon"),u=o("v-list-item-title"),h=o("v-list"),b=o("v-navigation-drawer"),g=o("v-app-bar-nav-icon"),y=o("v-toolbar-title"),k=o("v-spacer"),V=o("v-btn"),i=o("v-app-bar"),B=o("v-main"),L=o("v-app");return C(),N(L,null,{default:e(()=>[t(b,{modelValue:r.value,"onUpdate:modelValue":f[1]||(f[1]=c=>r.value=c),app:"",color:"black"},{default:e(()=>[l(" - "),t(h,{density:"compact",modelValue:v.value,"onUpdate:modelValue":f[0]||(f[0]=c=>v.value=c),id:"layout"},{default:e(()=>[t(n),t(s(_),{href:d.route("dashboard")},{default:e(()=>[t(n,{color:"info",value:"home"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-view-dashboard")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Dashboard")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("tenant")},{default:e(()=>[t(n,{color:"info",value:"home"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-account-tie")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Tenant")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("landlord")},{default:e(()=>[t(n,{color:"info",value:"landlords"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-account-multiple")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Landlord")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("property")},{default:e(()=>[t(n,{color:"info",value:"properties"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-domain")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Property")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("unit")},{default:e(()=>[t(n,{color:"info",value:"unit"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-home-floor-a")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Unit")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("bill")},{default:e(()=>[t(n,{color:"info",value:"bill"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-currency-usd")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Bill")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("booking")},{default:e(()=>[t(n,{color:"info",value:"bookings"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-calendar-check")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Booking")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("lease")},{default:e(()=>[t(n,{color:"info",value:"leases"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-file-document-edit")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Lease")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("invoice")},{default:e(()=>[t(n,{color:"info",value:`invoice
       `},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-receipt")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Invoice")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("payment")},{default:e(()=>[t(n,{color:"info",value:"payments"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-currency-usd")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Payment")]),_:1})]),_:1})]),_:1},8,["href"]),t(s(_),{href:d.route("phone")},{default:e(()=>[t(n,{color:"success",value:"phone"},{prepend:e(()=>[t(a,null,{default:e(()=>[l("mdi-phone")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[l("Call Centre")]),_:1})]),_:1})]),_:1},8,["href"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(i,{app:""},{default:e(()=>[t(g,{onClick:f[2]||(f[2]=c=>r.value=!r.value)}),t(y,null,{default:e(()=>[l("Rental Management System")]),_:1}),t(k),t(V,{icon:"mdi-bell"},{default:e(()=>[t(q)]),_:1}),t(a,{class:"mx-2"},{default:e(()=>[l("mdi-bell")]),_:1})]),_:1}),t(B,null,{default:e(()=>[T(d.$slots,"default")]),_:3})]),_:3})}}};export{G as _};
