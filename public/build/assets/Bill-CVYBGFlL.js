import{j as b,h as o,c as y,o as r,w as i,b as t,f as m,a as e,d as h,F as I,g as F,t as N}from"./app-Cdoi5j0A.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L={data(){return{dialog:!1,id:null,bills:[],billAssignment:{}}},methods:{watch(a){bill.amount=unit_cost*number_of_units},show(a){this.dialog=!0,this.id=a.id,this.assignBills()},assignBills(){const a=`bills/${this.id}`;b.get(a).then(l=>{this.bills=l.data}).catch(l=>{console.error("Failed to load bills:",l)})},close(){this.dialog=!1,this.bills=this.bills.map(a=>({...a,clicked:!1,amount:""}))},submitBillAssignment(){const a=this.bills.filter(s=>s.clicked).map(s=>({billId:s.id,amount:s.amount}));if(a.length===0){alert("Please select at least one bill to assign.");return}const l={tenantId:this.billAssignment.tenantId,bills:a},_=`submitBill/${this.id}`;b.post(_,l).then(s=>{console.log("Assignment response:",s.data)}).catch(s=>{console.error("Failed to assign bills:",s)}),this.dialog=!1,this.bills=this.bills.map(s=>({...s,clicked:!1,amount:""}))}}};function P(a,l,_,s,u,p){const g=o("v-card-title"),v=o("v-checkbox"),c=o("v-text-field"),V=o("v-table"),k=o("v-container"),x=o("v-card-text"),U=o("v-spacer"),f=o("v-btn"),B=o("v-card-actions"),A=o("v-card"),C=o("v-dialog"),w=o("v-row");return r(),y(w,{justify:"center"},{default:i(()=>[t(C,{modelValue:u.dialog,"onUpdate:modelValue":l[0]||(l[0]=n=>u.dialog=n),"max-width":"700px"},{default:i(()=>[t(A,null,{default:i(()=>[t(g,null,{default:i(()=>l[1]||(l[1]=[m("Assign Bills to Tenant")])),_:1}),t(x,null,{default:i(()=>[t(k,null,{default:i(()=>[t(V,{dense:""},{default:i(()=>[l[2]||(l[2]=e("thead",null,[e("tr",null,[e("th",null,"Select"),e("th",null,"Bill"),e("th",null,"Unit Cost"),e("th",null,"Number of Units"),e("th",null,"Total Amount")])],-1)),e("tbody",null,[(r(!0),h(I,null,F(u.bills,n=>(r(),h("tr",{key:n.id},[e("td",null,[t(v,{modelValue:n.clicked,"onUpdate:modelValue":d=>n.clicked=d},null,8,["modelValue","onUpdate:modelValue"])]),e("td",null,N(n.bill),1),e("td",null,[t(c,{modelValue:n.unit_cost,"onUpdate:modelValue":d=>n.unit_cost=d,dense:"","hide-details":"",label:"Unit Cost"},null,8,["modelValue","onUpdate:modelValue"])]),e("td",null,[t(c,{modelValue:n.number_of_units,"onUpdate:modelValue":d=>n.number_of_units=d,dense:"","hide-details":"",label:"Units"},null,8,["modelValue","onUpdate:modelValue"])]),e("td",null,[t(c,{modelValue:n.amount,"onUpdate:modelValue":d=>n.amount=d,dense:"","hide-details":"",label:"Total"},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1}),t(B,null,{default:i(()=>[t(U),t(f,{color:"blue-darken-1",variant:"text",onClick:p.close},{default:i(()=>l[3]||(l[3]=[m(" Cancel ")])),_:1},8,["onClick"]),t(f,{color:"primary",onClick:p.submitBillAssignment},{default:i(()=>l[4]||(l[4]=[m(" Assign ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const S=T(L,[["render",P]]);export{S as default};
