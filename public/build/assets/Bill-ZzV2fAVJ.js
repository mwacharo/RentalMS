import{h as f,i as n,o as _,c as y,w as s,b as e,f as r,a as l,d as b,g as I,F,t as N}from"./app-z5ZoritH.js";import{_ as T}from"./_plugin-vue_export-helper-x3n3nnut.js";const L={data(){return{dialog:!1,id:null,bills:[],billAssignment:{}}},methods:{watch(a){bill.amount=unit_cost*number_of_units},show(a){this.dialog=!0,this.id=a.id,this.assignBills()},assignBills(){const a=`bills/${this.id}`;f.get(a).then(i=>{this.bills=i.data}).catch(i=>{console.error("Failed to load bills:",i)})},close(){this.dialog=!1,this.bills=this.bills.map(a=>({...a,clicked:!1,amount:""}))},submitBillAssignment(){const a=this.bills.filter(o=>o.clicked).map(o=>({billId:o.id,amount:o.amount}));if(a.length===0){alert("Please select at least one bill to assign.");return}const i={tenantId:this.billAssignment.tenantId,bills:a},m=`submitBill/${this.id}`;f.post(m,i).then(o=>{console.log("Assignment response:",o.data)}).catch(o=>{console.error("Failed to assign bills:",o)}),this.dialog=!1,this.bills=this.bills.map(o=>({...o,clicked:!1,amount:""}))}}},P=l("thead",null,[l("tr",null,[l("th",null,"Select"),l("th",null,"Bill"),l("th",null,"Unit Cost"),l("th",null,"Number of Units"),l("th",null,"Total Amount")])],-1);function R(a,i,m,o,c,p){const g=n("v-card-title"),v=n("v-checkbox"),u=n("v-text-field"),V=n("v-table"),k=n("v-container"),x=n("v-card-text"),U=n("v-spacer"),h=n("v-btn"),B=n("v-card-actions"),A=n("v-card"),C=n("v-dialog"),w=n("v-row");return _(),y(w,{justify:"center"},{default:s(()=>[e(C,{modelValue:c.dialog,"onUpdate:modelValue":i[0]||(i[0]=t=>c.dialog=t),"max-width":"700px"},{default:s(()=>[e(A,null,{default:s(()=>[e(g,null,{default:s(()=>[r("Assign Bills to Tenant")]),_:1}),e(x,null,{default:s(()=>[e(k,null,{default:s(()=>[e(V,{dense:""},{default:s(()=>[P,l("tbody",null,[(_(!0),b(F,null,I(c.bills,t=>(_(),b("tr",{key:t.id},[l("td",null,[e(v,{modelValue:t.clicked,"onUpdate:modelValue":d=>t.clicked=d},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,N(t.bill),1),l("td",null,[e(u,{modelValue:t.unit_cost,"onUpdate:modelValue":d=>t.unit_cost=d,dense:"","hide-details":"",label:"Unit Cost"},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(u,{modelValue:t.number_of_units,"onUpdate:modelValue":d=>t.number_of_units=d,dense:"","hide-details":"",label:"Units"},null,8,["modelValue","onUpdate:modelValue"])]),l("td",null,[e(u,{modelValue:t.amount,"onUpdate:modelValue":d=>t.amount=d,dense:"","hide-details":"",label:"Total"},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1}),e(B,null,{default:s(()=>[e(U),e(h,{color:"blue-darken-1",variant:"text",onClick:p.close},{default:s(()=>[r(" Cancel ")]),_:1},8,["onClick"]),e(h,{color:"primary",onClick:p.submitBillAssignment},{default:s(()=>[r(" Assign ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const j=T(L,[["render",R]]);export{j as default};
