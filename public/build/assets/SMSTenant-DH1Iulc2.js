import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{h as l,c as N,o as k,w as s,b as o,a as w,f as i}from"./app-Cdoi5j0A.js";const C={data(){return{dialog:!1,phoneNumber:"",selectedTemplate:"",message:"",senderId:"",timeToSend:"now",templates:["Template 1","Template 2","Template 3"],senderIds:["JuaMobile","AnotherSenderID"]}},methods:{show(d){console.log(d),this.dialog=!0,this.id=d.id},close(){this.dialog=!1},sendSMS(){console.log("SMS Sent:",{phoneNumber:this.phoneNumber,selectedTemplate:this.selectedTemplate,message:this.message,senderId:this.senderId,timeToSend:this.timeToSend})}}};function M(d,e,y,U,t,r){const a=l("v-btn"),u=l("v-spacer"),c=l("v-card-title"),_=l("v-card-subtitle"),p=l("v-text-field"),v=l("v-textarea"),f=l("v-select"),m=l("v-radio"),S=l("v-radio-group"),b=l("v-form"),g=l("v-card-text"),V=l("v-card-actions"),T=l("v-card"),x=l("v-container"),h=l("v-dialog");return k(),N(h,{modelValue:t.dialog,"onUpdate:modelValue":e[5]||(e[5]=n=>t.dialog=n),width:"800"},{default:s(()=>[o(x,{class:"mt-5"},{default:s(()=>[o(T,null,{default:s(()=>[o(a,{icon:"mdi-close",onClick:e[0]||(e[0]=n=>t.dialog=!1)}),o(u),o(c,null,{default:s(()=>e[6]||(e[6]=[w("h4",null,"Send Bulk SMS",-1)])),_:1}),o(_),o(g,null,{default:s(()=>[o(b,null,{default:s(()=>[o(p,{modelValue:t.phoneNumber,"onUpdate:modelValue":e[1]||(e[1]=n=>t.phoneNumber=n),label:"Phone Numbers",placeholder:"e.g 0719133270",outlined:"",clearable:""},null,8,["modelValue"]),o(v,{modelValue:t.message,"onUpdate:modelValue":e[2]||(e[2]=n=>t.message=n),label:"Compose Message",placeholder:"Type your message",hint:"15 characters are automatically added for opt-out","persistent-hint":"",outlined:"",rows:"5",maxlength:"145",counter:""},null,8,["modelValue"]),o(f,{modelValue:t.senderId,"onUpdate:modelValue":e[3]||(e[3]=n=>t.senderId=n),items:t.senderIds,label:"Sender ID",outlined:"",clearable:""},null,8,["modelValue","items"]),o(S,{modelValue:t.timeToSend,"onUpdate:modelValue":e[4]||(e[4]=n=>t.timeToSend=n),label:"Time to Send"},{default:s(()=>[o(m,{label:"Send Now",value:"now"}),o(m,{label:"Send Later",value:"later"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(V,null,{default:s(()=>[o(a,{color:"primary",onClick:r.sendSMS},{default:s(()=>e[7]||(e[7]=[i(" Send SMS ")])),_:1},8,["onClick"]),o(a,{color:"primary",onClick:r.sendSMS},{default:s(()=>e[8]||(e[8]=[i(" close ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}const A=I(C,[["render",M],["__scopeId","data-v-db3d82f6"]]);export{A as default};
