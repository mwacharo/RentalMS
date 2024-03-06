import{_ as K}from"./AppLayout-mX0rh2PH.js";import{s as r,h as l,o as Q,c as z,w as o,b as e,x as F,f as i,y as c,a as p,t as q,p as $,j as G}from"./app-SrON79WU.js";import H from"./Bill-1FU9y71H.js";import J from"./TenantInvoice-gb83PLnf.js";import M from"./Excel-vvylFC0P.js";import{_ as W}from"./_plugin-vue_export-helper-x3n3nnut.js";const X={components:{AppLayout:K,bill:H,tenantinvoice:J,excel:M},data:()=>({dialog:!1,loading:!1,dialogDelete:!1,headers:[{title:"Tenant Name",align:"start",sortable:!1,key:"tenant_name"},{title:"Email",key:"email"},{title:"Phone",key:"phone"},{title:"Property ",key:"property.property_name"},{title:"Actions",key:"actions",sortable:!1}],invoiceData:null,landlords:[],searchQuery:"",properties:[],tenants:[],tenant_name:[],property_id:[],units:[],bills:[],unit_id:"",editedIndex:-1,editedItem:{landlord_name:"",email:"",phone:""},defaultItem:{landlord_name:"",email:"",phone:"",tenant_name:"",property_id:""}}),computed:{formTitle(){return this.editedIndex===-1?"New Tenant":"Edit Tenant"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},created(){this.initialize(),this.fetchProperties(),this.fetchUnits()},methods:{initialize(){r.get("/api/tenants").then(a=>{console.log("API Response:",a.data),this.tenants=a.data}).catch(a=>{console.error("API Error:",a)})},openBill(t){this.$refs.bill.show(t)},openTenantInvoice(t){this.$refs.tenantinvoice.show(t)},openExcel(t){this.$refs.excel.show(t)},tenantInvoice(t){const a="api/tenantInvoice/"+t.id,k={tenantId:this.tenantId};r.post(a,k).then(u=>{console.log("Invoice created:",u.data),this.invoiceData=u.data}).catch(u=>{console.error("Error creating invoice:",u)})},editItem(t){this.editedIndex=this.tenants.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.editedIndex=this.tenants.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){r.delete(`/api/tenant/${this.editedItem.id}`).then(()=>{this.tenants.splice(this.editedIndex,1),this.closeDelete()}).catch(t=>console.error("Deletion error:",t))},close(){this.dialog=!1,this.resetForm()},closeDelete(){this.dialogDelete=!1,this.resetForm()},resetForm(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},save(){let t;this.editedIndex>-1?t=r.put(`/api/tenant/${this.editedItem.id}`,this.editedItem):t=r.post("/api/tenant",this.editedItem),t.then(a=>{this.editedIndex>-1?Object.assign(this.tenants[this.editedIndex],a.data.data):this.tenants.push(a.data.data),this.close()}).catch(a=>console.error("Saving error:",a))},performSearch(){this.loading=!0;const t="/api/landlords/search?query="+this.searchQuery;r.get(t).then(a=>{console.log("Search response:",a.data),this.tenants=a.data,this.loading=!1}).catch(a=>{console.error("Search error:",a),this.loading=!1})},fetchUnits(){r.get("api/units").then(a=>{console.log("units response:",a.data),this.units=a.data}).catch(a=>{console.error("failed to load units:",a)})},fetchProperties(){r.get("api/property").then(a=>{console.log("properties response:",a.data),this.properties=a.data}).catch(a=>{console.error("failed to load properties:",a)})}}},b=t=>($("data-v-12cb7d95"),t=t(),G(),t),Y={class:"text-h5"},Z=b(()=>p("span",null," Create Invoice",-1)),ee=b(()=>p("span",null,"Edit",-1)),te=b(()=>p("span",null,"Assign Bills",-1)),oe=b(()=>p("span",null,"Delete",-1));function ae(t,a,k,u,ne,s){const f=l("v-text-field"),y=l("v-container"),V=l("VCard"),P=l("v-toolbar-title"),w=l("v-divider"),h=l("v-spacer"),d=l("v-btn"),C=l("v-card-title"),_=l("v-col"),x=l("v-select"),D=l("v-row"),L=l("v-card-text"),U=l("v-card-actions"),S=l("V-card"),A=l("v-dialog"),T=l("v-card"),R=l("v-toolbar"),v=l("v-icon"),I=l("v-tooltip"),E=l("v-data-table"),N=l("bill"),O=l("tenantinvoice"),B=l("excel"),j=l("AppLayout");return Q(),z(j,null,{default:o(()=>[e(V,{class:"my-card"},{default:o(()=>[e(y,null,{default:o(()=>[e(f,{modelValue:t.searchQuery,"onUpdate:modelValue":a[0]||(a[0]=n=>t.searchQuery=n),label:"Search",onKeyup:F(s.performSearch,["enter"]),variant:"outlined"},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),e(V,{class:"my-card",outlined:""},{default:o(()=>[e(E,{"show-select":"",headers:t.headers,loading:t.loading,items:t.tenants,"sort-by":[{key:"tenant_name",order:"asc"}]},{top:o(()=>[e(R,{flat:""},{default:o(()=>[e(P,null,{default:o(()=>[i("Tenant")]),_:1}),e(w,{class:"mx-4",inset:"",vertical:""}),e(h),e(A,{modelValue:t.dialog,"onUpdate:modelValue":a[6]||(a[6]=n=>t.dialog=n),"max-width":"700px"},{activator:o(({props:n})=>[e(d,c({color:"success",dark:"",class:"mb-2 mr-2"},n,{onClick:s.openExcel,"prepend-icon":"mdi-file-excel",variant:"outlined"}),{default:o(()=>[i(" Import ")]),_:2},1040,["onClick"]),e(d,c({color:"info",dark:"",class:"mb-2"},n,{"prepend-icon":"mdi-send",variant:"outlined"}),{default:o(()=>[i(" Invoice ")]),_:2},1040),e(d,c({color:"primary",dark:"",class:"mb-2"},n,{"prepend-icon":"mdi-email"}),{default:o(()=>[i(" Invoice ")]),_:2},1040),e(d,c({color:"primary",dark:"",class:"mb-2"},n,{"prepend-icon":"mdi-plus",variant:"outlined"}),{default:o(()=>[i(" Tenant ")]),_:2},1040)]),default:o(()=>[e(S,null,{default:o(()=>[e(C,null,{default:o(()=>[p("span",Y,q(s.formTitle),1)]),_:1}),e(L,null,{default:o(()=>[e(y,null,{default:o(()=>[e(D,null,{default:o(()=>[e(_,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(f,{modelValue:t.editedItem.tenant_name,"onUpdate:modelValue":a[1]||(a[1]=n=>t.editedItem.tenant_name=n),label:"Tanant Name"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(f,{modelValue:t.editedItem.email,"onUpdate:modelValue":a[2]||(a[2]=n=>t.editedItem.email=n),label:"Email"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(f,{modelValue:t.editedItem.phone,"onUpdate:modelValue":a[3]||(a[3]=n=>t.editedItem.phone=n),label:"phone"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(x,{modelValue:t.editedItem.property_id,"onUpdate:modelValue":a[4]||(a[4]=n=>t.editedItem.property_id=n),items:t.properties,"item-title":"property_name",label:"Property Name","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(x,{modelValue:t.editedItem.unit_id,"onUpdate:modelValue":a[5]||(a[5]=n=>t.editedItem.unit_id=n),items:t.units,"item-title":"unit_number",label:"Account Number","item-value":"id"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U,null,{default:o(()=>[e(h),e(d,{color:"blue-darken-1",variant:"text",onClick:s.close},{default:o(()=>[i(" Cancel ")]),_:1},8,["onClick"]),e(d,{color:"blue-darken-1",variant:"text",onClick:s.save},{default:o(()=>[i(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(A,{modelValue:t.dialogDelete,"onUpdate:modelValue":a[7]||(a[7]=n=>t.dialogDelete=n),"max-width":"500px"},{default:o(()=>[e(T,null,{default:o(()=>[e(C,{class:"text-h5"},{default:o(()=>[i("Are you sure you want to delete this item?")]),_:1}),e(U,null,{default:o(()=>[e(h),e(d,{color:"blue-darken-1",variant:"text",onClick:s.closeDelete},{default:o(()=>[i("Cancel")]),_:1},8,["onClick"]),e(d,{color:"blue-darken-1",variant:"text",onClick:s.deleteItemConfirm},{default:o(()=>[i("OK")]),_:1},8,["onClick"]),e(h)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":o(({item:n})=>[e(I,{location:"bottom"},{activator:o(({props:m})=>[e(d,c({icon:""},m,{onClick:g=>s.tenantInvoice(n),variant:"text"}),{default:o(()=>[e(v,{color:"info"},{default:o(()=>[i(" mdi-book ")]),_:1})]),_:2},1040,["onClick"])]),default:o(()=>[Z]),_:2},1024),e(I,{location:"bottom"},{activator:o(({props:m})=>[e(d,c({icon:""},m,{onClick:g=>s.editItem(n),variant:"text"}),{default:o(()=>[e(v,{color:"info"},{default:o(()=>[i(" mdi-pencil ")]),_:1})]),_:2},1040,["onClick"])]),default:o(()=>[ee]),_:2},1024),e(I,{location:"bottom"},{activator:o(({props:m})=>[e(d,c({icon:""},m,{onClick:g=>s.openBill(n),variant:"text"}),{default:o(()=>[e(v,{color:"info"},{default:o(()=>[i(" mdi-cog ")]),_:1})]),_:2},1040,["onClick"])]),default:o(()=>[te]),_:2},1024),e(I,{location:"bottom"},{activator:o(({props:m})=>[e(d,c({icon:""},m,{onClick:g=>s.deleteItem(n),variant:"text"}),{default:o(()=>[e(v,{color:"error"},{default:o(()=>[i(" mdi-delete ")]),_:1})]),_:2},1040,["onClick"])]),default:o(()=>[oe]),_:2},1024)]),"no-data":o(()=>[e(d,{color:"primary",onClick:s.initialize},{default:o(()=>[i(" Reset ")]),_:1},8,["onClick"])]),_:1},8,["headers","loading","items"]),e(N,{ref:"bill"},null,512),e(O,{ref:"tenantinvoice"},null,512),e(B,{ref:"excel"},null,512)]),_:1})]),_:1})}const me=W(X,[["render",ae],["__scopeId","data-v-12cb7d95"]]);export{me as default};
