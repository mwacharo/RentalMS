import{h as m,i as o,o as y,d as F,b as e,w as s,f as i,a as V}from"./app-RLePnpkL.js";import{_ as C}from"./_plugin-vue_export-helper-x3n3nnut.js";const U={data(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1,properties:[],property_id:[],selectedFile:null}},created(){this.fetchProperties()},methods:{show(l){console.log(l),this.dialog=!0,this.id=l.id},fetchProperties(){m.get("property").then(t=>{this.properties=t.data}).catch(t=>{console.log(t)})},selectFile(l){this.selectedFile=l.target.files[0]},uploadFile(){const l=new FormData;l.append("property_id",this.property_id),l.append("file",this.selectedFile),m.post("upload",l,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t.data),this.dialog=!1}).catch(t=>{console.error(t)})}}},w={class:"text-center pa-4"};function k(l,t,P,I,n,r){const d=o("v-btn"),f=o("v-toolbar-title"),c=o("v-spacer"),p=o("v-toolbar"),_=o("v-list-subheader"),v=o("v-divider"),h=o("v-select"),g=o("v-file-input"),b=o("v-list"),u=o("v-card"),x=o("v-dialog");return y(),F("div",w,[e(x,{modelValue:n.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>n.dialog=a),transition:"dialog-bottom-transition",fullscreen:""},{default:s(()=>[e(u,null,{default:s(()=>[e(p,{color:"info"},{default:s(()=>[e(d,{icon:"mdi-close",onClick:t[0]||(t[0]=a=>n.dialog=!1)}),e(f,null,{default:s(()=>[i("Upload")]),_:1}),e(c)]),_:1}),e(u,{class:"my-card"},{default:s(()=>[e(b,{lines:"two",subheader:""},{default:s(()=>[e(_,{color:"blue"},{default:s(()=>[i("Import Tenants")]),_:1}),e(v),V("div",null,[e(h,{modelValue:n.property_id,"onUpdate:modelValue":t[1]||(t[1]=a=>n.property_id=a),items:n.properties,"item-title":"property_name",label:"Property Name","item-value":"id"},null,8,["modelValue","items"]),e(_,null,{default:s(()=>[i("Upload from Excel file")]),_:1}),e(g,{label:"Select Excel file",accept:".xlsx, .xls",onChange:r.selectFile},null,8,["onChange"])])]),_:1}),e(p,null,{default:s(()=>[e(c),e(d,{text:"",onClick:r.uploadFile,disabled:!n.property_id||!n.selectedFile},{default:s(()=>[i(" Upload ")]),_:1},8,["onClick","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const E=C(U,[["render",k],["__scopeId","data-v-235310a8"]]);export{E as default};
