import{h as f,i as o,o as u,c as C,w as s,b as e,f as r,d as g,g as w,F as I}from"./app-RXBFpgqh.js";import{_ as y}from"./_plugin-vue_export-helper-x3n3nnut.js";const F={data(){return{dialogm1:"",dialog:!1,id:null,bills:{},billAssignment:{}}},methods:{show(n){console.log(n),this.dialog=!0,this.id=n.id,this.assignBills()},assignBills(){const n="bills/"+this.id;f.get(n).then(a=>{console.log("bills response:",a.data),this.bills=a.data}).catch(a=>{console.error("failed to load bills:",a)})},close(){this.dialog=!1,this.bills=this.bills.map(n=>({...n,clicked:!1,amount:""}))},submitBillAssignment(){const n=this.bills.filter(t=>t.clicked).map(t=>({billId:t.id,amount:t.amount}));if(n.length===0){alert("Please select at least one bill to assign.");return}const a={tenantId:this.billAssignment.tenantId,bills:n},_="submitBill/"+this.id;f.post(_,a).then(t=>{console.log("Assignment response:",t.data)}).catch(t=>{console.error("Failed to assign bills:",t)}),this.dialog=!1,this.bills=this.bills.map(t=>({...t,clicked:!1,amount:""}))}}};function L(n,a,_,t,c,m){const h=o("v-card-title"),v=o("v-checkbox"),d=o("v-text-field"),b=o("v-container"),V=o("v-card-text"),k=o("v-spacer"),p=o("v-btn"),x=o("v-card-actions"),U=o("v-card"),B=o("v-dialog"),A=o("v-row");return u(),C(A,{justify:"center"},{default:s(()=>[e(B,{modelValue:c.dialog,"onUpdate:modelValue":a[0]||(a[0]=l=>c.dialog=l),"max-width":"500px"},{default:s(()=>[e(U,null,{default:s(()=>[e(h,null,{default:s(()=>[r("Assign Bills to Tenant")]),_:1}),e(V,null,{default:s(()=>[e(b,null,{default:s(()=>[(u(!0),g(I,null,w(c.bills,l=>(u(),g("div",{key:l.id},[e(v,{modelValue:l.clicked,"onUpdate:modelValue":i=>l.clicked=i,label:l.bill},null,8,["modelValue","onUpdate:modelValue","label"]),e(d,{modelValue:l.unit_cost,"onUpdate:modelValue":i=>l.unit_cost=i},null,8,["modelValue","onUpdate:modelValue"]),e(d,{modelValue:l.number_of_units,"onUpdate:modelValue":i=>l.number_of_units=i},null,8,["modelValue","onUpdate:modelValue"]),e(d,{modelValue:l.amount,"onUpdate:modelValue":i=>l.amount=i},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),_:1})]),_:1}),e(x,null,{default:s(()=>[e(k),e(p,{color:"blue-darken-1",variant:"text",onClick:m.close},{default:s(()=>[r(" Cancel ")]),_:1},8,["onClick"]),e(p,{color:"primary",onClick:m.submitBillAssignment},{default:s(()=>[r("Assign")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const R=y(F,[["render",L]]);export{R as default};
