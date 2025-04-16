import{_ as L}from"./AppLayout-DLV5K9WW.js";import{h as o,c as N,o as O,w as d,b as t,i as S,f as i,a as j,t as z,j as r}from"./app-Cdoi5j0A.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A={components:{AppLayout:L},data:()=>({dialog:!1,dialogDelete:!1,headers:[{text:"Landlord Name",value:"landlord_name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Actions",value:"actions",sortable:!1}],landlords:[],editedIndex:-1,editedItem:{id:null,landlord_name:"",email:"",phone:""},defaultItem:{id:null,landlord_name:"",email:"",phone:""},searchQuery:""}),computed:{formTitle(){return this.editedIndex===-1?"New Landlord":"Edit Landlord"}},methods:{initialize(){r.get("/landlords").then(l=>{this.landlords=l.data}).catch(l=>console.error("Initialization error:",l))},openNewLandlordDialog(){this.editedIndex=-1,this.editedItem=Object.assign({},this.defaultItem),this.dialog=!0},editItem(l){this.editedIndex=this.landlords.indexOf(l),this.editedItem=Object.assign({},l),this.dialog=!0},deleteItem(l){this.editedIndex=this.landlords.indexOf(l),this.editedItem=Object.assign({},l),this.dialogDelete=!0},deleteItemConfirm(){r.delete(`/landlord/${this.editedItem.id}`).then(()=>{this.landlords.splice(this.editedIndex,1),this.closeDelete()}).catch(l=>console.error("Deletion error:",l))},close(){this.dialog=!1,this.resetForm()},closeDelete(){this.dialogDelete=!1,this.resetForm()},resetForm(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1},save(){let l;this.editedIndex>-1?l=r.put(`/landlord/${this.editedItem.id}`,this.editedItem):l=r.post("/landlord",this.editedItem),l.then(e=>{this.editedIndex>-1?Object.assign(this.landlords[this.editedIndex],e.data.data):this.landlords.push(e.data.data),this.close()}).catch(e=>console.error("Saving error:",e))},performSearch(){r.get(`/landlords/search?query=${this.searchQuery}`).then(l=>{this.landlords=l.data}).catch(l=>console.error("Search error:",l))}},created(){this.initialize()}},K={class:"text-h5"};function Q(l,e,T,B,E,n){const m=o("v-text-field"),c=o("v-container"),_=o("VCard"),b=o("v-toolbar-title"),g=o("v-divider"),u=o("v-spacer"),s=o("v-btn"),k=o("v-toolbar"),f=o("v-icon"),C=o("v-data-table"),p=o("v-card-title"),x=o("v-col"),V=o("v-row"),y=o("v-card-text"),v=o("v-card-actions"),h=o("v-card"),I=o("v-dialog"),w=o("AppLayout");return O(),N(w,null,{default:d(()=>[t(_,{class:"my-card"},{default:d(()=>[t(c,null,{default:d(()=>[t(m,{modelValue:l.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=a=>l.searchQuery=a),label:"Search",onKeyup:S(n.performSearch,["enter"]),variant:"outlined"},null,8,["modelValue","onKeyup"])]),_:1})]),_:1}),t(_,{class:"my-card",outlined:""},{default:d(()=>[t(C,{headers:l.headers,items:l.landlords,"sort-by":[{key:"landlord_name",order:"asc"}]},{top:d(()=>[t(k,{flat:""},{default:d(()=>[t(b,null,{default:d(()=>e[6]||(e[6]=[i("Landlords")])),_:1}),t(g,{class:"mx-4",inset:"",vertical:""}),t(u),t(s,{color:"primary",dark:"",class:"mb-2",onClick:n.openNewLandlordDialog},{default:d(()=>e[7]||(e[7]=[i(" New Landlord ")])),_:1},8,["onClick"])]),_:1})]),"item.actions":d(({item:a})=>[t(f,{size:"small",class:"me-2",onClick:D=>n.editItem(a)},{default:d(()=>e[8]||(e[8]=[i(" mdi-pencil ")])),_:2},1032,["onClick"]),t(f,{size:"small",onClick:D=>n.deleteItem(a)},{default:d(()=>e[9]||(e[9]=[i(" mdi-delete ")])),_:2},1032,["onClick"])]),"no-data":d(()=>[t(s,{color:"primary",onClick:n.initialize},{default:d(()=>e[10]||(e[10]=[i("Reset")])),_:1},8,["onClick"])]),_:1},8,["headers","items"])]),_:1}),t(I,{modelValue:l.dialog,"onUpdate:modelValue":e[4]||(e[4]=a=>l.dialog=a),"max-width":"500px"},{default:d(()=>[t(h,null,{default:d(()=>[t(p,null,{default:d(()=>[j("span",K,z(n.formTitle),1)]),_:1}),t(y,null,{default:d(()=>[t(c,null,{default:d(()=>[t(V,null,{default:d(()=>[t(x,{cols:"12"},{default:d(()=>[t(m,{modelValue:l.editedItem.landlord_name,"onUpdate:modelValue":e[1]||(e[1]=a=>l.editedItem.landlord_name=a),label:"Landlord Name"},null,8,["modelValue"]),t(m,{modelValue:l.editedItem.email,"onUpdate:modelValue":e[2]||(e[2]=a=>l.editedItem.email=a),label:"Email"},null,8,["modelValue"]),t(m,{modelValue:l.editedItem.phone,"onUpdate:modelValue":e[3]||(e[3]=a=>l.editedItem.phone=a),label:"Phone"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(v,null,{default:d(()=>[t(u),t(s,{color:"blue-darken-1",text:"",onClick:n.close},{default:d(()=>e[11]||(e[11]=[i("Cancel")])),_:1},8,["onClick"]),t(s,{color:"blue-darken-1",text:"",onClick:n.save},{default:d(()=>e[12]||(e[12]=[i("Save")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(I,{modelValue:l.dialogDelete,"onUpdate:modelValue":e[5]||(e[5]=a=>l.dialogDelete=a),"max-width":"500px"},{default:d(()=>[t(h,null,{default:d(()=>[t(p,{class:"text-h5"},{default:d(()=>e[13]||(e[13]=[i("Are you sure you want to delete this item?")])),_:1}),t(v,null,{default:d(()=>[t(u),t(s,{color:"blue-darken-1",text:"",onClick:n.closeDelete},{default:d(()=>e[14]||(e[14]=[i("Cancel")])),_:1},8,["onClick"]),t(s,{color:"blue-darken-1",text:"",onClick:n.deleteItemConfirm},{default:d(()=>e[15]||(e[15]=[i("OK")])),_:1},8,["onClick"]),t(u)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const R=U(A,[["render",Q],["__scopeId","data-v-9791ef24"]]);export{R as default};
