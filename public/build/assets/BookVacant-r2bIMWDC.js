import{_ as x}from"./_plugin-vue_export-helper-x3n3nnut.js";import{h as s,o as k,c as y,w as a,b as l,f as d}from"./app-J_pDJic5.js";const R={data(){return{tenant_id:this.$page.props.auth.user.id,dialog:!1,number_of_units:"",valid:!0,date:null,message:"",id:null,dateRules:[o=>!!o||"Date is required"],number_of_unitsRules:[o=>!!o||"Number of units is required"],messageRules:[o=>o&&o.length<=200||"Message must be less than 200 characters"]}},computed:{tenant_id(){return this.$page.props.auth.user?this.$page.props.auth.user.id:null}},methods:{show(o){this.dialog=!0,this.id=o.id,this.date=o.date,this.property_id=o.property_id},bookVacant(o){const e="book"+this.id,u={date:this.date,message:this.message,vacant_id:this.id,property_id:this.property_id,tenant_id:this.tenant_id,number_of_units:this.number_of_units};axios.post(e,u).then(r=>{console.log(" created:",r.data),this.bookVacant=r.data}).catch(r=>{console.error("Error creating :",r)})},resetForm(){this.date=null,this.message=""}}};function U(o,e,u,r,t,m){const c=s("v-card-title"),i=s("v-text-field"),p=s("v-textarea"),f=s("v-form"),v=s("v-card-text"),b=s("v-spacer"),_=s("v-btn"),g=s("v-card-actions"),V=s("v-card"),h=s("v-dialog");return k(),y(h,{modelValue:t.dialog,"onUpdate:modelValue":e[5]||(e[5]=n=>t.dialog=n),"max-width":"500px"},{default:a(()=>[l(V,null,{default:a(()=>[l(c,{class:"headline"},{default:a(()=>[d("Book Vacant")]),_:1}),l(v,null,{default:a(()=>[l(f,{ref:"form",modelValue:t.valid,"onUpdate:modelValue":e[3]||(e[3]=n=>t.valid=n),"lazy-validation":""},{default:a(()=>[l(i,{modelValue:t.date,"onUpdate:modelValue":e[0]||(e[0]=n=>t.date=n),type:"date",label:"Select Date",rules:t.dateRules,required:"",outlined:""},null,8,["modelValue","rules"]),l(i,{modelValue:t.number_of_units,"onUpdate:modelValue":e[1]||(e[1]=n=>t.number_of_units=n),type:"number",label:"Enter Number of Unit(s)",rules:t.dateRules,required:"",outlined:""},null,8,["modelValue","rules"]),l(p,{modelValue:t.message,"onUpdate:modelValue":e[2]||(e[2]=n=>t.message=n),label:"Message",hint:"Optional",rules:t.messageRules},null,8,["modelValue","rules"])]),_:1},8,["modelValue"])]),_:1}),l(g,null,{default:a(()=>[l(b),l(_,{color:"blue darken-1",text:"",onClick:e[4]||(e[4]=n=>t.dialog=!1)},{default:a(()=>[d("Cancel")]),_:1}),l(_,{color:"blue darken-1",text:"",onClick:m.bookVacant},{default:a(()=>[d("Book Vacant")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}const w=x(R,[["render",U]]);export{w as default};
