import{_ as w}from"./AppLayout-RfRyHH1_.js";import{m as r,h as d,o as A,c as U,w as l,b as e,q as S,f as n,s as N,a as O,t as P}from"./app-9BzRjj2Q.js";import{_ as z}from"./_plugin-vue_export-helper-x3n3nnut.js";const R={components:{AppLayout:w},data:()=>({dialog:!1,loading:!1,dialogDelete:!1,headers:[{title:"Landlord Name",align:"start",sortable:!1,key:"landlord_name"},{title:"Email",key:"email"},{title:"Phone",key:"phone"},{title:"Actions",key:"actions",sortable:!1}],landlords:[],searchQuery:"",editedIndex:-1,editedItem:{landlord_name:"",email:"",phone:""},defaultItem:{landlord_name:"",email:"",phone:""}}),computed:{formTitle(){return this.editedIndex===-1?"New Landlord":"Edit Landlord"}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},created(){this.initialize()},methods:{initialize(){r.get("/landlords").then(a=>{console.log("API Response:",a.data),this.landlords=a.data}).catch(a=>{console.error("API Error:",a)})},editItem(t){this.editedIndex=this.landlords.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.editedIndex=this.landlords.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){r.delete(`/landlord/${this.editedItem.id}`).then(()=>{this.landlords.splice(this.editedIndex,1),this.closeDelete()}).catch(t=>console.error("Deletion error:",t))},close(){this.dialog=!1,this.resetForm()},closeDelete(){this.dialogDelete=!1,this.resetForm()},resetForm(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},save(){let t;this.editedIndex>-1?t=r.put(`/landlord/${this.editedItem.id}`,this.editedItem):t=r.post("/landlord",this.editedItem),t.then(a=>{this.editedIndex>-1?Object.assign(this.landlords[this.editedIndex],a.data.data):this.landlords.push(a.data.data),this.close()}).catch(a=>console.error("Saving error:",a)),this.close()},performSearch(){this.loading=!0;const t="/landlords/search?query="+this.searchQuery;r.get(t).then(a=>{console.log("Search response:",a.data),this.landlords=a.data,this.loading=!1}).catch(a=>{console.error("Search error:",a),this.loading=!1})}}},j={class:"text-h5"};function E(t,a,K,Q,q,s){const c=d("v-text-field"),_=d("v-container"),h=d("VCard"),k=d("v-toolbar-title"),b=d("v-divider"),m=d("v-spacer"),i=d("v-btn"),f=d("v-card-title"),u=d("v-col"),y=d("v-row"),V=d("v-card-text"),p=d("v-card-actions"),v=d("v-card"),I=d("v-dialog"),C=d("v-toolbar"),g=d("v-icon"),x=d("v-data-table"),L=d("AppLayout");return A(),U(L,null,{default:l(()=>[e(h,{class:"my-card"},{default:l(()=>[e(_,null,{default:l(()=>[e(c,{modelValue:t.searchQuery,"onUpdate:modelValue":a[0]||(a[0]=o=>t.searchQuery=o),label:"Search",onKeyup:S(s.performSearch,["enter"]),variant:"outlined"},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),e(h,{class:"my-card",outlined:""},{default:l(()=>[e(x,{headers:t.headers,loading:t.loading,items:t.landlords,"sort-by":[{key:"landlord_name",order:"asc"}]},{top:l(()=>[e(C,{flat:""},{default:l(()=>[e(k,null,{default:l(()=>[n("Landlord")]),_:1}),e(b,{class:"mx-4",inset:"",vertical:""}),e(m),e(I,{modelValue:t.dialog,"onUpdate:modelValue":a[4]||(a[4]=o=>t.dialog=o),"max-width":"500px"},{activator:l(({props:o})=>[e(i,N({color:"primary",dark:"",class:"mb-2"},o),{default:l(()=>[n(" New Landlord ")]),_:2},1040)]),default:l(()=>[e(v,null,{default:l(()=>[e(f,null,{default:l(()=>[O("span",j,P(s.formTitle),1)]),_:1}),e(V,null,{default:l(()=>[e(_,null,{default:l(()=>[e(y,null,{default:l(()=>[e(u,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(c,{modelValue:t.editedItem.landlord_name,"onUpdate:modelValue":a[1]||(a[1]=o=>t.editedItem.landlord_name=o),label:"Landlord Name"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(c,{modelValue:t.editedItem.email,"onUpdate:modelValue":a[2]||(a[2]=o=>t.editedItem.email=o),label:"Email"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(c,{modelValue:t.editedItem.phone,"onUpdate:modelValue":a[3]||(a[3]=o=>t.editedItem.phone=o),label:"phone"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(m),e(i,{color:"blue-darken-1",variant:"text",onClick:s.close},{default:l(()=>[n(" Cancel ")]),_:1},8,["onClick"]),e(i,{color:"blue-darken-1",variant:"text",onClick:s.save},{default:l(()=>[n(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(I,{modelValue:t.dialogDelete,"onUpdate:modelValue":a[5]||(a[5]=o=>t.dialogDelete=o),"max-width":"500px"},{default:l(()=>[e(v,null,{default:l(()=>[e(f,{class:"text-h5"},{default:l(()=>[n("Are you sure you want to delete this item?")]),_:1}),e(p,null,{default:l(()=>[e(m),e(i,{color:"blue-darken-1",variant:"text",onClick:s.closeDelete},{default:l(()=>[n("Cancel")]),_:1},8,["onClick"]),e(i,{color:"blue-darken-1",variant:"text",onClick:s.deleteItemConfirm},{default:l(()=>[n("OK")]),_:1},8,["onClick"]),e(m)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":l(({item:o})=>[e(g,{size:"small",class:"me-2",onClick:D=>s.editItem(o)},{default:l(()=>[n(" mdi-pencil ")]),_:2},1032,["onClick"]),e(g,{size:"small",onClick:D=>s.deleteItem(o)},{default:l(()=>[n(" mdi-delete ")]),_:2},1032,["onClick"])]),"no-data":l(()=>[e(i,{color:"primary",onClick:s.initialize},{default:l(()=>[n(" Reset ")]),_:1},8,["onClick"])]),_:1},8,["headers","loading","items"])]),_:1})]),_:1})}const G=z(R,[["render",E],["__scopeId","data-v-2f254700"]]);export{G as default};
