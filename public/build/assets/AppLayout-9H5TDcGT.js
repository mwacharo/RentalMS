import{i as o,o as v,d as $,b as e,w as n,m as D,f as a,t as f,a as _,k as I,A as M,r as k,s as w,B as x,c as V,g as T,F as A,z as N,L as R,u as F}from"./app-RXBFpgqh.js";import{_ as z}from"./_plugin-vue_export-helper-x3n3nnut.js";const E=()=>{M.Inertia.post(route("logout"))},O={data:()=>({fav:!0,menu:!1,message:!1,hints:!0}),methods:{logout:E}},j={class:"text-center"},q={class:"font-medium text-base text-gray-800"},G={class:"font-medium text-sm text-gray-500"};function H(l,t,c,L,P,u){const s=o("v-icon"),m=o("v-btn"),d=o("v-divider"),p=o("v-list"),b=o("v-spacer"),g=o("v-card-actions"),y=o("v-card"),h=o("v-menu");return v(),$("div",j,[e(h,{modelValue:l.menu,"onUpdate:modelValue":t[2]||(t[2]=i=>l.menu=i),"close-on-content-click":!1,location:"top"},{activator:n(({props:i})=>[e(m,D({color:"indigo"},i),{default:n(()=>[e(s,{left:""},{default:n(()=>[a("mdi-account")]),_:1})]),_:2},1040)]),default:n(()=>[e(y,{"min-width":"300"},{default:n(()=>[e(d),e(p,null,{default:n(()=>[_("div",null,[_("div",q,f(l.$page.props.auth.user.name),1),_("div",G,f(l.$page.props.auth.user.email),1)])]),_:1}),e(g,null,{default:n(()=>[e(b),e(m,{variant:"text",onClick:t[0]||(t[0]=i=>l.menu=!1)},{default:n(()=>[a("Close")]),_:1}),_("form",{method:"POST",onSubmit:t[1]||(t[1]=I((...i)=>u.logout&&u.logout(...i),["prevent"]))},[e(m,{color:"primary",variant:"text",type:"submit"},{default:n(()=>[e(s,{left:""},{default:n(()=>[a("mdi-exit-to-app")]),_:1}),a(" Sign out ")]),_:1})],32)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const J=z(O,[["render",H]]),W={__name:"AppLayout",setup(l){const t=k(!0);k(!1);const c=w(()=>x().props.value.user.roles||[]),L=w(()=>x().props.value.user.permissions||[]);console.log("userRoles:",c.value),console.log("userPermissions:",L.value);const P=w(()=>c.value.includes("tenant")?[{name:"Dashboard",icon:"mdi-view-dashboard",route:"tenant-dashboard"},{name:"Unit",icon:"mdi-home-floor-a",route:"unit"},{name:"Invoices",icon:"mdi-receipt",route:"invoice"},{name:"Maintenance",icon:"mdi-wrench",route:"maintenance"},{name:"Payments",icon:"mdi-currency-usd",route:"payments"},{name:"Lease",icon:"mdi-file-document-edit",route:"lease"}]:c.value.includes("landlord")?[{name:"Dashboard",icon:"mdi-view-dashboard",route:"landlord-dashboard"},{name:"Property",icon:"mdi-domain",route:"property"},{name:"Unit",icon:"mdi-home-floor-a",route:"unit"},{name:"Bills",icon:"mdi-currency-usd",route:"bill"},{name:"Invoices",icon:"mdi-receipt",route:"invoice"},{name:"Maintenance",icon:"mdi-wrench",route:"maintenance"},{name:"Payments",icon:"mdi-currency-usd",route:"payments"},{name:"Lease",icon:"mdi-file-document-edit",route:"lease"},{name:"Tenant",icon:"mdi-account",route:"tenant"}]:c.value.includes("company")?[{name:"Dashboard",icon:"mdi-view-dashboard",route:"dashboard"},{name:"Property",icon:"mdi-domain",route:"property"},{name:"Unit",icon:"mdi-home-floor-a",route:"unit"},{name:"Tenant",icon:"mdi-account",route:"tenant"},{name:"Landlord",icon:"mdi-account-multiple",route:"landlord"}]:c.value.includes("user")?[{name:"Dashboard",icon:"mdi-view-dashboard",route:"dashboard"},{name:"Property",icon:"mdi-domain",route:"property"},{name:"Unit",icon:"mdi-home-floor-a",route:"unit"},{name:"Bills",icon:"mdi-currency-usd",route:"bill"},{name:"Invoices",icon:"mdi-receipt",route:"invoice"},{name:"Maintenance",icon:"mdi-wrench",route:"maintenance"},{name:"Payments",icon:"mdi-currency-usd",route:"payments"},{name:"Lease",icon:"mdi-file-document-edit",route:"lease"},{name:"Admin",icon:"mdi-account-multiple",route:"admin"},{name:"Company",icon:"mdi-account-multiple",route:"company"},{name:"Tenant",icon:"mdi-account",route:"tenant"},{name:"Landlord",icon:"mdi-account-multiple",route:"landlord"}]:[]);return(u,s)=>{const m=o("v-img"),d=o("v-list-item"),p=o("v-icon"),b=o("v-list-item-title"),g=o("v-navigation-drawer"),y=o("v-app-bar-nav-icon"),h=o("v-toolbar-title"),i=o("v-spacer"),B=o("v-btn"),C=o("v-app-bar"),S=o("v-main"),U=o("v-app");return v(),V(U,null,{default:n(()=>[e(g,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=r=>t.value=r),app:"",color:"black"},{default:n(()=>[e(d,null,{default:n(()=>[e(m,{src:"path/to/logo.png",alt:"Logo",height:"60",contain:""})]),_:1}),(v(!0),$(A,null,T(P.value,r=>(v(),V(F(R),{key:r.name,href:u.route(r.route),class:"text-decoration-none"},{default:n(()=>[e(d,{color:"info",value:r.route},{prepend:n(()=>[e(p,null,{default:n(()=>[a(f(r.icon),1)]),_:2},1024)]),default:n(()=>[e(b,null,{default:n(()=>[a(f(r.name),1)]),_:2},1024)]),_:2},1032,["value"])]),_:2},1032,["href"]))),128)),a(" - ")]),_:1},8,["modelValue"]),e(C,{app:""},{default:n(()=>[e(y,{onClick:s[1]||(s[1]=r=>t.value=!t.value)}),e(h,null,{default:n(()=>[a("Rental Management System")]),_:1}),e(i),e(B,{icon:"mdi-bell"},{default:n(()=>[e(J)]),_:1}),e(p,{class:"mx-2"},{default:n(()=>[a("mdi-bell")]),_:1})]),_:1}),e(S,null,{default:n(()=>[N(u.$slots,"default")]),_:3})]),_:3})}}};export{W as _};
