import{_ as P}from"./AppLayout-DLV5K9WW.js";import{h as i,c as w,o as R,w as o,b as t,i as L,f as n,a as S,t as N,m as O,j as r}from"./app-Cdoi5j0A.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const z={components:{AppLayout:P},data:()=>({dialog:!1,loading:!1,dialogDelete:!1,headers:[{title:"Unit Number",align:"start",sortable:!1,key:"unit_number"},{title:"Rent",key:"rent"},{title:"Deposit",key:"deposit"},{title:"Property ",key:"property.property_name"},{title:"Actions",key:"actions",sortable:!1}],unit_number:"",searchQuery:"",properties:[],rent:[],deposit:[],units:[],property_name:"",property_id:"",editedIndex:-1,editedItem:{unit_number:"",rent:"",deposit:""},defaultItem:{email:"",phone:"",property_id:""}}),computed:{formTitle(){return this.editedIndex===-1?"New Unit":"Edit Unit"}},watch:{dialog(l){l||this.close()},dialogDelete(l){l||this.closeDelete()}},created(){this.initialize(),this.fetchProperties()},methods:{initialize(){r.get("/units").then(e=>{console.log("API Response:",e.data),this.units=e.data}).catch(e=>{console.error("API Error:",e)})},editItem(l){this.editedIndex=this.units.indexOf(l),this.editedItem=Object.assign({},l),this.dialog=!0},deleteItem(l){this.editedIndex=this.units.indexOf(l),this.editedItem=Object.assign({},l),this.dialogDelete=!0},deleteItemConfirm(){r.delete(`/unit/${this.editedItem.id}`).then(()=>{this.units.splice(this.editedIndex,1),this.closeDelete()}).catch(l=>console.error("Deletion error:",l))},close(){this.dialog=!1,this.resetForm()},closeDelete(){this.dialogDelete=!1,this.resetForm()},resetForm(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},save(){let l;this.editedIndex>-1?l=r.put(`/unit/${this.editedItem.id}`,this.editedItem):l=r.post("/unit",this.editedItem),l.then(e=>{this.editedIndex>-1?Object.assign(this.units[this.editedIndex],e.data.data):this.units.push(e.data.data),this.close()}).catch(e=>console.error("Saving error:",e))},performSearch(){this.loading=!0;const l="/unit/search?query="+this.searchQuery;r.get(l).then(e=>{console.log("Search response:",e.data),this.units=e.data,this.loading=!1}).catch(e=>{console.error("Search error:",e),this.loading=!1})},fetchProperties(){r.get("properties").then(e=>{console.log("properties response:",e.data),this.properties=e.data}).catch(e=>{console.error("failed to load properties:",e)})}}},K={class:"text-h5"};function Q(l,e,B,F,T,d){const u=i("v-text-field"),c=i("v-container"),_=i("VCard"),y=i("v-toolbar-title"),b=i("v-divider"),m=i("v-spacer"),s=i("v-btn"),f=i("v-card-title"),p=i("v-col"),k=i("v-select"),V=i("v-row"),C=i("v-card-text"),v=i("v-card-actions"),h=i("v-card"),I=i("v-dialog"),U=i("v-toolbar"),g=i("v-icon"),x=i("v-data-table"),D=i("AppLayout");return R(),w(D,null,{default:o(()=>[t(_,{class:"my-card"},{default:o(()=>[t(c,null,{default:o(()=>[t(u,{modelValue:l.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=a=>l.searchQuery=a),label:"Search",onKeyup:L(d.performSearch,["enter"]),variant:"outlined"},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),t(_,{class:"my-card",outlined:""},{default:o(()=>[t(x,{headers:l.headers,loading:l.loading,items:l.units,"sort-by":[{key:"unit_number",order:"asc"}]},{top:o(()=>[t(U,{flat:""},{default:o(()=>[t(y,null,{default:o(()=>e[7]||(e[7]=[n("Unit")])),_:1}),t(b,{class:"mx-4",inset:"",vertical:""}),t(m),t(I,{modelValue:l.dialog,"onUpdate:modelValue":e[5]||(e[5]=a=>l.dialog=a),"max-width":"700px"},{activator:o(({props:a})=>[t(s,O({color:"primary",dark:"",class:"mb-2"},a),{default:o(()=>e[8]||(e[8]=[n(" New Unit ")])),_:2},1040)]),default:o(()=>[t(h,null,{default:o(()=>[t(f,null,{default:o(()=>[S("span",K,N(d.formTitle),1)]),_:1}),t(C,null,{default:o(()=>[t(c,null,{default:o(()=>[t(V,null,{default:o(()=>[t(p,{cols:"12"},{default:o(()=>[t(u,{modelValue:l.editedItem.unit_number,"onUpdate:modelValue":e[1]||(e[1]=a=>l.editedItem.unit_number=a),label:"Unit Number"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(u,{modelValue:l.editedItem.rent,"onUpdate:modelValue":e[2]||(e[2]=a=>l.editedItem.rent=a),label:"Rent"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(u,{modelValue:l.editedItem.deposit,"onUpdate:modelValue":e[3]||(e[3]=a=>l.editedItem.deposit=a),label:"Deposit"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12"},{default:o(()=>[t(k,{modelValue:l.editedItem.property_id,"onUpdate:modelValue":e[4]||(e[4]=a=>l.editedItem.property_id=a),items:l.properties,"item-title":"property_name",label:"Property","item-value":"id"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1})]),_:1}),t(v,null,{default:o(()=>[t(m),t(s,{color:"blue-darken-1",variant:"text",onClick:d.close},{default:o(()=>e[9]||(e[9]=[n(" Cancel ")])),_:1},8,["onClick"]),t(s,{color:"blue-darken-1",variant:"text",onClick:d.save},{default:o(()=>e[10]||(e[10]=[n(" Save ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(I,{modelValue:l.dialogDelete,"onUpdate:modelValue":e[6]||(e[6]=a=>l.dialogDelete=a),"max-width":"500px"},{default:o(()=>[t(h,null,{default:o(()=>[t(f,{class:"text-h5"},{default:o(()=>e[11]||(e[11]=[n("Are you sure you want to delete this item?")])),_:1}),t(v,null,{default:o(()=>[t(m),t(s,{color:"blue-darken-1",variant:"text",onClick:d.closeDelete},{default:o(()=>e[12]||(e[12]=[n("Cancel")])),_:1},8,["onClick"]),t(s,{color:"blue-darken-1",variant:"text",onClick:d.deleteItemConfirm},{default:o(()=>e[13]||(e[13]=[n("OK")])),_:1},8,["onClick"]),t(m)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":o(({item:a})=>[t(g,{size:"small",class:"me-2",onClick:A=>d.editItem(a)},{default:o(()=>e[14]||(e[14]=[n(" mdi-pencil ")])),_:2},1032,["onClick"]),t(g,{size:"small",onClick:A=>d.deleteItem(a)},{default:o(()=>e[15]||(e[15]=[n(" mdi-delete ")])),_:2},1032,["onClick"])]),"no-data":o(()=>[t(s,{color:"primary",onClick:d.initialize},{default:o(()=>e[16]||(e[16]=[n(" Reset ")])),_:1},8,["onClick"])]),_:1},8,["headers","loading","items"])]),_:1})]),_:1})}const H=j(z,[["render",Q],["__scopeId","data-v-a49ff874"]]);export{H as default};
