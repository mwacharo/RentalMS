import{h as r,o as u,c as b,w as c,b as m,a as e,l as d,U as s,d as v,g as y,F as V,t as g}from"./app-SrON79WU.js";import{_ as U}from"./_plugin-vue_export-helper-x3n3nnut.js";const I={data(){return{dialog:!1,invoice:{number:"",date:"",items:[]}}},computed:{total(){return this.invoice.items.reduce((n,o)=>n+o.quantity*o.price,0)}},methods:{show(n){console.log(n),this.dialog=!0,this.id=n.id},addItem(){this.invoice.items.push({description:"",quantity:1,price:0})},removeItem(n){this.invoice.items.splice(n,1)}}},x={class:"invoice"},k=e("h1",null,"Invoice",-1),w=e("label",{for:"invoice-number"},"Invoice Number:",-1),C=e("label",{for:"invoice-date"},"Date:",-1),q=e("h2",null,"Items",-1),B=["onUpdate:modelValue"],D=["onUpdate:modelValue"],N=["onUpdate:modelValue"],F=["onClick"];function T(n,o,j,A,i,a){const _=r("v-card"),h=r("v-dialog"),f=r("v-row");return u(),b(f,{justify:"center"},{default:c(()=>[m(h,{modelValue:i.dialog,"onUpdate:modelValue":o[3]||(o[3]=t=>i.dialog=t),"max-width":"500px"},{default:c(()=>[m(_,null,{default:c(()=>[e("div",x,[k,e("div",null,[w,d(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>i.invoice.number=t),type:"text",id:"invoice-number"},null,512),[[s,i.invoice.number]])]),e("div",null,[C,d(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>i.invoice.date=t),type:"date",id:"invoice-date"},null,512),[[s,i.invoice.date]])]),q,(u(!0),v(V,null,y(i.invoice.items,(t,p)=>(u(),v("div",{key:p},[d(e("input",{"onUpdate:modelValue":l=>t.description=l,type:"text",placeholder:"Description"},null,8,B),[[s,t.description]]),d(e("input",{"onUpdate:modelValue":l=>t.quantity=l,type:"number",placeholder:"Quantity"},null,8,D),[[s,t.quantity]]),d(e("input",{"onUpdate:modelValue":l=>t.price=l,type:"number",placeholder:"Price"},null,8,N),[[s,t.price]]),e("button",{onClick:l=>a.removeItem(p)},"Remove",8,F)]))),128)),e("button",{onClick:o[2]||(o[2]=(...t)=>a.addItem&&a.addItem(...t))},"Add Item"),e("h3",null,"Total: "+g(a.total),1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})}const M=U(I,[["render",T]]);export{M as default};
