import{h as m,i as s,o as d,c as u,w as t,b as o,f as _,d as w,g as F,F as I,a as U}from"./app-37DS2Gtf.js";import{_ as y}from"./_plugin-vue_export-helper-x3n3nnut.js";const L={data(){return{mainDialog:!1,permissions:[],selectedPermissions:[],selectedRoleId:""}},methods:{fetchPermissions(){m.get("/v1/permissions").then(e=>{this.permissions=e.data}).catch(e=>{console.error("Error fetching permissions:",e),this.$toastr.error("Failed to fetch permissions")})},showDialog(n){this.fetchPermissions(),this.selectedRoleId=n,console.log("Role ID passed to showDialog:",n),this.mainDialog=!0;const e=`/v1/roles/${n}/permissions`;console.log("Fetching permissions from:",e),m.get(e).then(l=>{console.log("Permissions fetched:",l.data),this.selectedPermissions=l.data.permissions}).catch(l=>{console.error("Error fetching role permissions:",l),this.$toastr.error("Failed to fetch role permissions")})},closeDialog(){this.mainDialog=!1},updatePermissions(){const n=`/v1/roles/${this.selectedRoleId}/permissions`,e={permissions:this.selectedPermissions};m.put(n,e).then(()=>{this.closeDialog(),this.$toastr.success("Permissions updated successfully")}).catch(l=>{console.error("Error updating permissions:",l),this.$toastr.error("Failed to update permissions")})}}},A=U("span",{class:"text-h5"},"Permissions",-1);function B(n,e,l,E,i,r){const p=s("v-spacer"),h=s("v-icon"),a=s("v-btn"),f=s("v-card-title"),v=s("v-checkbox"),g=s("v-col"),P=s("v-row"),x=s("v-container"),k=s("v-card-text"),D=s("v-card-actions"),C=s("v-card"),R=s("v-dialog");return d(),u(R,{modelValue:i.mainDialog,"onUpdate:modelValue":e[1]||(e[1]=c=>i.mainDialog=c),"max-width":"800"},{default:t(()=>[o(C,{class:"my-card",outlined:""},{default:t(()=>[o(f,null,{default:t(()=>[A,o(p),o(a,{icon:"",onClick:r.closeDialog},{default:t(()=>[o(h,null,{default:t(()=>[_("mdi-close")]),_:1})]),_:1},8,["onClick"])]),_:1}),o(k,null,{default:t(()=>[o(x,null,{default:t(()=>[o(P,null,{default:t(()=>[(d(!0),w(I,null,F(i.permissions,(c,V)=>(d(),u(g,{key:V,cols:"12",md:"3"},{default:t(()=>[o(v,{modelValue:i.selectedPermissions,"onUpdate:modelValue":e[0]||(e[0]=b=>i.selectedPermissions=b),label:c.name,value:c.name},null,8,["modelValue","label","value"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),o(D,null,{default:t(()=>[o(p),o(a,{color:"error",text:"",onClick:r.closeDialog},{default:t(()=>[_("Close")]),_:1},8,["onClick"]),o(a,{color:"primary",onClick:r.updatePermissions},{default:t(()=>[_("Save")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}const S=y(L,[["render",B]]);export{S as default};
