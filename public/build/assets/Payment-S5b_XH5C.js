import{_ as L}from"./AppLayout-vZTwtaw0.js";import{h as m,i as a,o as w,c as x,w as o,b as t,j as N,f as i,a as S,t as O}from"./app-RLePnpkL.js";import{_ as R}from"./_plugin-vue_export-helper-x3n3nnut.js";const j={components:{AppLayout:L},data:()=>({dialog:!1,loading:!1,dialogDelete:!1,headers:[{title:"Property Name",align:"start",sortable:!1,key:"property_name"},{title:"Address",key:"address"},{title:"Email",key:"email"},{title:"Phone Number",key:"phone"},{title:"Description",key:"description"},{title:"Landlord",key:"landlord.landlord_name"},{title:"Units",key:"number_of_units"},{title:"Actions",key:"actions",sortable:!1}],properties:[],landlords:[],editedIndex:-1,searchQuery:"",editedItem:{property_name:"",email:"",phone:"",description:"",number_of_units:"",address:""},defaultItem:{property_name:"",email:"",phone:"",landlord_id:"",number_of_units:"",description:""}}),computed:{formTitle(){return this.editedIndex===-1?"New Property":"Edit Property"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.initialize(),this.fetchlandlord()},methods:{initialize(){m.get("/property").then(l=>{console.log("API Response:",l.data),this.properties=l.data}).catch(l=>{console.error("API Error:",l)})},editItem(e){this.editedIndex=this.properties.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.properties.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){m.delete(`/property/${this.editedItem.id}`).then(()=>{this.properties.splice(this.editedIndex,1),this.closeDelete()}).catch(e=>console.error("Deletion error:",e))},close(){this.dialog=!1,this.resetForm()},closeDelete(){this.dialogDelete=!1,this.resetForm()},resetForm(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},save(){let e;this.editedIndex>-1?e=m.put(`/property/${this.editedItem.id}`,this.editedItem):e=m.post("/property",this.editedItem),e.then(l=>{this.editedIndex>-1?Object.assign(this.properties[this.editedIndex],l.data.data):this.properties.push(l.data.data),this.close()}).catch(l=>console.error("Saving error:",l))},performSearch(){this.loading=!0;const e="/property/search?query="+this.searchQuery;m.get(e).then(l=>{console.log("Search response:",l.data),this.properties=l.data,this.loading=!1}).catch(l=>{console.error("Search error:",l),this.loading=!1})},fetchlandlord(){m.get("/landlords").then(l=>{console.log("Landlords response:",l.data),this.landlords=l.data}).catch(l=>{console.error("failed to load landlords:",l)})}}},z={class:"text-h5"};function E(e,l,K,Q,T,n){const s=a("v-text-field"),p=a("v-container"),_=a("VCard"),V=a("v-toolbar-title"),b=a("v-divider"),c=a("v-spacer"),f=a("v-card-title"),r=a("v-col"),g=a("v-select"),k=a("v-row"),C=a("v-card-text"),u=a("v-btn"),h=a("v-card-actions"),v=a("v-card"),I=a("v-dialog"),U=a("v-toolbar"),y=a("v-icon"),A=a("v-data-table"),D=a("AppLayout");return w(),x(D,null,{default:o(()=>[t(_,{class:"my-card"},{default:o(()=>[t(p,null,{default:o(()=>[t(s,{modelValue:e.searchQuery,"onUpdate:modelValue":l[0]||(l[0]=d=>e.searchQuery=d),label:"Search",onKeyup:N(n.performSearch,["enter"]),variant:"outlined"},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),t(_,{class:"my-card",outlined:""},{default:o(()=>[t(A,{headers:e.headers,loading:e.loading,items:e.properties,"sort-by":[{key:"property_name",order:"asc"}]},{top:o(()=>[t(U,{flat:""},{default:o(()=>[t(V,null,{default:o(()=>[i("Transactions")]),_:1}),t(b,{class:"mx-4",inset:"",vertical:""}),t(c),t(I,{modelValue:e.dialog,"onUpdate:modelValue":l[8]||(l[8]=d=>e.dialog=d),"max-width":"500px"},{default:o(()=>[t(v,null,{default:o(()=>[t(f,null,{default:o(()=>[S("span",z,O(n.formTitle),1)]),_:1}),t(C,null,{default:o(()=>[t(p,null,{default:o(()=>[t(k,null,{default:o(()=>[t(r,{cols:"12",sm:"6",md:"4"},{default:o(()=>[t(s,{modelValue:e.editedItem.property_name,"onUpdate:modelValue":l[1]||(l[1]=d=>e.editedItem.property_name=d),label:"Property Name"},null,8,["modelValue"])]),_:1}),t(r,{cols:"12",sm:"6",md:"4"},{default:o(()=>[t(s,{modelValue:e.editedItem.email,"onUpdate:modelValue":l[2]||(l[2]=d=>e.editedItem.email=d),label:"Email"},null,8,["modelValue"])]),_:1}),t(r,{cols:"12",sm:"6",md:"4"},{default:o(()=>[t(s,{modelValue:e.editedItem.phone,"onUpdate:modelValue":l[3]||(l[3]=d=>e.editedItem.phone=d),label:"phone"},null,8,["modelValue"])]),_:1}),t(r,{cols:"12",sm:"6",md:"4"},{default:o(()=>[t(s,{modelValue:e.editedItem.address,"onUpdate:modelValue":l[4]||(l[4]=d=>e.editedItem.address=d),label:"Address"},null,8,["modelValue"])]),_:1}),t(r,{cols:"12",sm:"6",md:"4"},{default:o(()=>[t(s,{modelValue:e.editedItem.description,"onUpdate:modelValue":l[5]||(l[5]=d=>e.editedItem.description=d),label:"Description"},null,8,["modelValue"])]),_:1}),t(r,{cols:"12",sm:"6",md:"4"},{default:o(()=>[t(s,{modelValue:e.editedItem.number_of_units,"onUpdate:modelValue":l[6]||(l[6]=d=>e.editedItem.number_of_units=d),label:"Units"},null,8,["modelValue"])]),_:1}),t(r,{cols:"12",sm:"6",md:"4"},{default:o(()=>[t(g,{modelValue:e.editedItem.landlord_id,"onUpdate:modelValue":l[7]||(l[7]=d=>e.editedItem.landlord_id=d),items:e.landlords,"item-title":"landlord_name",label:"Landlord Name","item-value":"id"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1})]),_:1}),t(h,null,{default:o(()=>[t(c),t(u,{color:"blue-darken-1",variant:"text",onClick:n.close},{default:o(()=>[i(" Cancel ")]),_:1},8,["onClick"]),t(u,{color:"blue-darken-1",variant:"text",onClick:n.save},{default:o(()=>[i(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(I,{modelValue:e.dialogDelete,"onUpdate:modelValue":l[9]||(l[9]=d=>e.dialogDelete=d),"max-width":"500px"},{default:o(()=>[t(v,null,{default:o(()=>[t(f,{class:"text-h5"},{default:o(()=>[i("Are you sure you want to delete this item?")]),_:1}),t(h,null,{default:o(()=>[t(c),t(u,{color:"blue-darken-1",variant:"text",onClick:n.closeDelete},{default:o(()=>[i("Cancel")]),_:1},8,["onClick"]),t(u,{color:"blue-darken-1",variant:"text",onClick:n.deleteItemConfirm},{default:o(()=>[i("OK")]),_:1},8,["onClick"]),t(c)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":o(({item:d})=>[t(y,{size:"small",class:"me-2",onClick:P=>n.editItem(d)},{default:o(()=>[i(" mdi-pencil ")]),_:2},1032,["onClick"]),t(y,{size:"small",onClick:P=>n.deleteItem(d)},{default:o(()=>[i(" mdi-delete ")]),_:2},1032,["onClick"])]),"no-data":o(()=>[t(u,{color:"primary",onClick:n.initialize},{default:o(()=>[i(" Reset ")]),_:1},8,["onClick"])]),_:1},8,["headers","loading","items"])]),_:1})]),_:1})}const G=R(j,[["render",E],["__scopeId","data-v-719f2837"]]);export{G as default};
