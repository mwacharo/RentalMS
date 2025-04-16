import{_ as A}from"./AppLayout-DLV5K9WW.js";import{h as i,c as O,o as M,w as l,b as n,i as j,f as s,a as z,t as N,m as k,q as Q,j as r}from"./app-Cdoi5j0A.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K={components:{AppLayout:A},data:()=>({dialog:!1,loading:!1,dialogDelete:!1,headers:[{title:"Description",key:"description"},{title:"Unit Number",key:"unit.unit_number"},{title:"Request Date",key:"request_date"},{title:"Actions",key:"actions",sortable:!1}],searchQuery:"",maintenanceRequests:[],units:[],menu:!1,editedIndex:-1,editedItem:{description:"",request_date:new Date().toISOString().substr(0,10),unit_id:null},defaultItem:{description:"",request_date:"",unit_id:null}}),computed:{formTitle(){return this.editedIndex===-1,"Maintenance Request"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},created(){this.initialize(),this.fetchUnits()},methods:{initialize(){r.get("/v1/maintenance-requests").then(e=>{this.maintenanceRequests=e.data}).catch(e=>{console.error("API Error:",e)})},editItem(t){this.editedIndex=this.maintenanceRequests.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.editedIndex=this.maintenanceRequests.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){r.delete(`/v1/maintenance-request/${this.editedItem.id}`).then(()=>{this.maintenanceRequests.splice(this.editedIndex,1),this.closeDelete()}).catch(t=>console.error("Deletion error:",t))},close(){this.dialog=!1,this.resetForm()},closeDelete(){this.dialogDelete=!1,this.resetForm()},resetForm(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},save(){let t;this.editedIndex>-1?t=r.put(`/v1/maintenance-request/${this.editedItem.id}`,this.editedItem):t=r.post("/v1/maintenance-request",this.editedItem),t.then(e=>{this.editedIndex>-1?Object.assign(this.maintenanceRequests[this.editedIndex],e.data):this.maintenanceRequests.push(e.data),this.close()}).catch(e=>console.error("Saving error:",e))},performSearch(){if(this.loading=!0,this.searchQuery.trim()==="")this.filteredMaintenanceRequests=this.maintenanceRequests;else{const t=this.searchQuery.toLowerCase();this.filteredMaintenanceRequests=this.maintenanceRequests.filter(e=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.status.toLowerCase().includes(t))}this.loading=!1},fetchUnits(){r.get("/units").then(t=>{this.units=t.data}).catch(t=>{console.error("Failed to load units:",t)})}}},P={class:"text-h5"};function B(t,e,T,E,H,o){const m=i("v-text-field"),p=i("v-container"),_=i("VCard"),V=i("v-toolbar-title"),b=i("v-divider"),u=i("v-spacer"),d=i("v-btn"),v=i("v-card-title"),c=i("v-col"),y=i("v-select"),C=i("v-date-picker"),R=i("v-menu"),D=i("v-row"),w=i("v-card-text"),h=i("v-card-actions"),I=i("v-card"),q=i("v-dialog"),U=i("v-toolbar"),g=i("v-icon"),x=i("v-data-table"),L=i("AppLayout");return M(),O(L,null,{default:l(()=>[n(_,{class:"my-card"},{default:l(()=>[n(p,null,{default:l(()=>[n(m,{modelValue:t.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=a=>t.searchQuery=a),label:"Search Maintenance Requests",onKeyup:j(o.performSearch,["enter"]),variant:"outlined"},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),n(_,{class:"my-card",outlined:""},{default:l(()=>[n(x,{headers:t.headers,loading:t.loading,items:t.maintenanceRequests,"sort-by":[{key:"request_date",order:"asc"}],responsive:t.responsive},{top:l(()=>[n(U,{flat:""},{default:l(()=>[n(V,null,{default:l(()=>e[9]||(e[9]=[s("Maintenance Requests")])),_:1}),n(b,{class:"mx-4",inset:"",vertical:""}),n(u),n(q,{modelValue:t.dialog,"onUpdate:modelValue":e[7]||(e[7]=a=>t.dialog=a),"max-width":"700px"},{activator:l(({props:a})=>[n(d,k({color:"primary",dark:"",class:"mb-2"},a),{default:l(()=>e[10]||(e[10]=[s(" New Request ")])),_:2},1040)]),default:l(()=>[n(I,null,{default:l(()=>[n(v,null,{default:l(()=>[z("span",P,N(o.formTitle),1)]),_:1}),n(w,null,{default:l(()=>[n(p,null,{default:l(()=>[n(D,null,{default:l(()=>[n(c,{cols:"12"},{default:l(()=>[n(m,{modelValue:t.editedItem.description,"onUpdate:modelValue":e[1]||(e[1]=a=>t.editedItem.description=a),label:"Description",required:""},null,8,["modelValue"])]),_:1}),n(c,{cols:"12"},{default:l(()=>[n(y,{modelValue:t.editedItem.unit_id,"onUpdate:modelValue":e[2]||(e[2]=a=>t.editedItem.unit_id=a),items:t.units,"item-title":"unit_number",label:"Select Unit","item-value":"id"},null,8,["modelValue","items"])]),_:1}),n(c,{cols:"12"},{default:l(()=>[n(R,{ref:"menu",modelValue:t.menu,"onUpdate:modelValue":e[6]||(e[6]=a=>t.menu=a),"close-on-content-click":!1,"nudge-right":40,"return-value":t.editedItem.request_date,transition:"scale-transition","offset-y":"","min-width":"290px"},{activator:l(({on:a,attrs:f})=>[n(m,k({modelValue:t.editedItem.request_date,"onUpdate:modelValue":e[3]||(e[3]=S=>t.editedItem.request_date=S),label:"Request Date",readonly:""},f,Q(a)),null,16,["modelValue"])]),default:l(()=>[n(C,{modelValue:t.editedItem.request_date,"onUpdate:modelValue":e[4]||(e[4]=a=>t.editedItem.request_date=a),"no-title":"",onInput:e[5]||(e[5]=a=>t.menu=!1)},null,8,["modelValue"])]),_:1},8,["modelValue","return-value"])]),_:1})]),_:1})]),_:1})]),_:1}),n(h,null,{default:l(()=>[n(u),n(d,{color:"blue-darken-1",variant:"text",onClick:o.close},{default:l(()=>e[11]||(e[11]=[s(" Cancel ")])),_:1},8,["onClick"]),n(d,{color:"blue-darken-1",variant:"text",onClick:o.save},{default:l(()=>e[12]||(e[12]=[s(" Save ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(q,{modelValue:t.dialogDelete,"onUpdate:modelValue":e[8]||(e[8]=a=>t.dialogDelete=a),"max-width":"500px"},{default:l(()=>[n(I,null,{default:l(()=>[n(v,{class:"text-h5"},{default:l(()=>e[13]||(e[13]=[s("Are you sure you want to delete this request?")])),_:1}),n(h,null,{default:l(()=>[n(u),n(d,{color:"blue-darken-1",variant:"text",onClick:o.closeDelete},{default:l(()=>e[14]||(e[14]=[s("Cancel")])),_:1},8,["onClick"]),n(d,{color:"blue-darken-1",variant:"text",onClick:o.deleteItemConfirm},{default:l(()=>e[15]||(e[15]=[s("OK")])),_:1},8,["onClick"]),n(u)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":l(({item:a})=>[n(g,{size:"small",class:"me-2",onClick:f=>o.editItem(a)},{default:l(()=>e[16]||(e[16]=[s(" mdi-pencil ")])),_:2},1032,["onClick"]),n(g,{size:"small",onClick:f=>o.deleteItem(a)},{default:l(()=>e[17]||(e[17]=[s(" mdi-delete ")])),_:2},1032,["onClick"])]),"no-data":l(()=>[n(d,{color:"primary",onClick:o.initialize},{default:l(()=>e[18]||(e[18]=[s(" Reset ")])),_:1},8,["onClick"])]),_:1},8,["headers","loading","items","responsive"])]),_:1})]),_:1})}const W=F(K,[["render",B],["__scopeId","data-v-7788707a"]]);export{W as default};
