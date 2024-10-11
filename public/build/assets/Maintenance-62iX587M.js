import{_ as A}from"./AppLayout-9H5TDcGT.js";import{h as r,i,o as O,c as M,w as n,b as t,j,f as s,m as k,a as z,t as N,v as Q}from"./app-RXBFpgqh.js";import{_ as F}from"./_plugin-vue_export-helper-x3n3nnut.js";const K={components:{AppLayout:A},data:()=>({dialog:!1,loading:!1,dialogDelete:!1,headers:[{title:"Description",key:"description"},{title:"Unit Number",key:"unit.unit_number"},{title:"Request Date",key:"request_date"},{title:"Actions",key:"actions",sortable:!1}],searchQuery:"",maintenanceRequests:[],units:[],menu:!1,editedIndex:-1,editedItem:{description:"",request_date:new Date().toISOString().substr(0,10),unit_id:null},defaultItem:{description:"",request_date:"",unit_id:null}}),computed:{formTitle(){return this.editedIndex===-1,"Maintenance Request"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.initialize(),this.fetchUnits()},methods:{initialize(){r.get("/v1/maintenance-requests").then(a=>{this.maintenanceRequests=a.data}).catch(a=>{console.error("API Error:",a)})},editItem(e){this.editedIndex=this.maintenanceRequests.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.maintenanceRequests.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){r.delete(`/v1/maintenance-request/${this.editedItem.id}`).then(()=>{this.maintenanceRequests.splice(this.editedIndex,1),this.closeDelete()}).catch(e=>console.error("Deletion error:",e))},close(){this.dialog=!1,this.resetForm()},closeDelete(){this.dialogDelete=!1,this.resetForm()},resetForm(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},save(){let e;this.editedIndex>-1?e=r.put(`/v1/maintenance-request/${this.editedItem.id}`,this.editedItem):e=r.post("/v1/maintenance-request",this.editedItem),e.then(a=>{this.editedIndex>-1?Object.assign(this.maintenanceRequests[this.editedIndex],a.data):this.maintenanceRequests.push(a.data),this.close()}).catch(a=>console.error("Saving error:",a))},performSearch(){if(this.loading=!0,this.searchQuery.trim()==="")this.filteredMaintenanceRequests=this.maintenanceRequests;else{const e=this.searchQuery.toLowerCase();this.filteredMaintenanceRequests=this.maintenanceRequests.filter(a=>a.title.toLowerCase().includes(e)||a.description.toLowerCase().includes(e)||a.status.toLowerCase().includes(e))}this.loading=!1},fetchUnits(){r.get("/units").then(e=>{this.units=e.data}).catch(e=>{console.error("Failed to load units:",e)})}}},P={class:"text-h5"};function B(e,a,T,E,H,o){const c=i("v-text-field"),f=i("v-container"),p=i("VCard"),V=i("v-toolbar-title"),b=i("v-divider"),u=i("v-spacer"),d=i("v-btn"),v=i("v-card-title"),m=i("v-col"),y=i("v-select"),C=i("v-date-picker"),R=i("v-menu"),D=i("v-row"),w=i("v-card-text"),h=i("v-card-actions"),I=i("v-card"),q=i("v-dialog"),U=i("v-toolbar"),g=i("v-icon"),x=i("v-data-table"),L=i("AppLayout");return O(),M(L,null,{default:n(()=>[t(p,{class:"my-card"},{default:n(()=>[t(f,null,{default:n(()=>[t(c,{modelValue:e.searchQuery,"onUpdate:modelValue":a[0]||(a[0]=l=>e.searchQuery=l),label:"Search Maintenance Requests",onKeyup:j(o.performSearch,["enter"]),variant:"outlined"},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),t(p,{class:"my-card",outlined:""},{default:n(()=>[t(x,{headers:e.headers,loading:e.loading,items:e.maintenanceRequests,"sort-by":[{key:"request_date",order:"asc"}],responsive:e.responsive},{top:n(()=>[t(U,{flat:""},{default:n(()=>[t(V,null,{default:n(()=>[s("Maintenance Requests")]),_:1}),t(b,{class:"mx-4",inset:"",vertical:""}),t(u),t(q,{modelValue:e.dialog,"onUpdate:modelValue":a[7]||(a[7]=l=>e.dialog=l),"max-width":"700px"},{activator:n(({props:l})=>[t(d,k({color:"primary",dark:"",class:"mb-2"},l),{default:n(()=>[s(" New Request ")]),_:2},1040)]),default:n(()=>[t(I,null,{default:n(()=>[t(v,null,{default:n(()=>[z("span",P,N(o.formTitle),1)]),_:1}),t(w,null,{default:n(()=>[t(f,null,{default:n(()=>[t(D,null,{default:n(()=>[t(m,{cols:"12"},{default:n(()=>[t(c,{modelValue:e.editedItem.description,"onUpdate:modelValue":a[1]||(a[1]=l=>e.editedItem.description=l),label:"Description",required:""},null,8,["modelValue"])]),_:1}),t(m,{cols:"12"},{default:n(()=>[t(y,{modelValue:e.editedItem.unit_id,"onUpdate:modelValue":a[2]||(a[2]=l=>e.editedItem.unit_id=l),items:e.units,"item-title":"unit_number",label:"Select Unit","item-value":"id"},null,8,["modelValue","items"])]),_:1}),t(m,{cols:"12"},{default:n(()=>[t(R,{ref:"menu",modelValue:e.menu,"onUpdate:modelValue":a[6]||(a[6]=l=>e.menu=l),"close-on-content-click":!1,"nudge-right":40,"return-value":e.editedItem.request_date,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:n(({on:l,attrs:_})=>[t(c,k({modelValue:e.editedItem.request_date,"onUpdate:modelValue":a[3]||(a[3]=S=>e.editedItem.request_date=S),label:"Request Date",readonly:""},_,Q(l)),null,16,["modelValue"])]),default:n(()=>[t(C,{modelValue:e.editedItem.request_date,"onUpdate:modelValue":a[4]||(a[4]=l=>e.editedItem.request_date=l),"no-title":"",onInput:a[5]||(a[5]=l=>e.menu=!1)},null,8,["modelValue"])]),_:1},8,["modelValue","return-value"])]),_:1})]),_:1})]),_:1})]),_:1}),t(h,null,{default:n(()=>[t(u),t(d,{color:"blue-darken-1",variant:"text",onClick:o.close},{default:n(()=>[s(" Cancel ")]),_:1},8,["onClick"]),t(d,{color:"blue-darken-1",variant:"text",onClick:o.save},{default:n(()=>[s(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(q,{modelValue:e.dialogDelete,"onUpdate:modelValue":a[8]||(a[8]=l=>e.dialogDelete=l),"max-width":"500px"},{default:n(()=>[t(I,null,{default:n(()=>[t(v,{class:"text-h5"},{default:n(()=>[s("Are you sure you want to delete this request?")]),_:1}),t(h,null,{default:n(()=>[t(u),t(d,{color:"blue-darken-1",variant:"text",onClick:o.closeDelete},{default:n(()=>[s("Cancel")]),_:1},8,["onClick"]),t(d,{color:"blue-darken-1",variant:"text",onClick:o.deleteItemConfirm},{default:n(()=>[s("OK")]),_:1},8,["onClick"]),t(u)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":n(({item:l})=>[t(g,{size:"small",class:"me-2",onClick:_=>o.editItem(l)},{default:n(()=>[s(" mdi-pencil ")]),_:2},1032,["onClick"]),t(g,{size:"small",onClick:_=>o.deleteItem(l)},{default:n(()=>[s(" mdi-delete ")]),_:2},1032,["onClick"])]),"no-data":n(()=>[t(d,{color:"primary",onClick:o.initialize},{default:n(()=>[s(" Reset ")]),_:1},8,["onClick"])]),_:1},8,["headers","loading","items","responsive"])]),_:1})]),_:1})}const W=F(K,[["render",B],["__scopeId","data-v-7788707a"]]);export{W as default};
