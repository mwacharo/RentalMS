import{r as h,l as O,i,o as x,d as S,b as t,u as o,w as l,F as z,a as e,t as p,g as H,c as A,e as U,f as c,n as K,k as Q}from"./app-4ka3Qwr3.js";import{T as X,Z as ee,i as te}from"./index.esm-ud6nLysP.js";import{_ as se}from"./InputError-zvYpjBCn.js";const oe={class:"mb-8"},ae={class:"d-flex align-center"},le=e("span",{class:"text-h4 font-weight-bold text-white"},"PropertyPulse",-1),ne=e("div",{class:"text-subtitle-1 text-medium-emphasis mt-2"}," Professional Rental Management System ",-1),ie={class:"d-flex flex-column justify-center flex-grow-1"},re=e("h2",{class:"text-h3 text-white font-weight-bold mb-6"},"Manage Your Properties With Confidence",-1),ce={class:"mb-10"},de=e("p",{class:"text-h6 text-white-darken-2 mb-8"}," Join thousands of property owners and managers who use PropertyPulse to streamline their rental business. ",-1),me={class:"d-flex mb-4"},ue=e("p",{class:"text-body-1 font-italic mb-4"},' "PropertyPulse transformed how I manage my rental properties. The automated payments and maintenance tracking save me hours every week." ',-1),pe={class:"d-flex align-center"},_e=e("div",null,[e("p",{class:"text-body-2 font-weight-bold mb-0"},"David Reynolds"),e("p",{class:"text-caption text-white-darken-1"},"Property Owner, 12 Units")],-1),ve={class:"mt-8"},he={class:"d-flex align-center mb-4"},fe=e("span",{class:"text-white text-body-1"},"Streamlined rent collection & tracking",-1),ye={class:"d-flex align-center mb-4"},ge=e("span",{class:"text-white text-body-1"},"Digital lease management",-1),xe={class:"d-flex align-center mb-4"},be=e("span",{class:"text-white text-body-1"},"Maintenance request system",-1),we={class:"d-flex align-center"},ke=e("span",{class:"text-white text-body-1"},"Financial reporting & analytics",-1),Ve={class:"d-flex d-md-none justify-center mb-6 mt-4"},Ce={class:"d-flex align-center"},Pe=e("span",{class:"text-h5 font-weight-bold text-primary"},"PropertyPulse",-1),Se=e("div",{class:"text-center mb-6"},[e("h1",{class:"text-h4 text-primary font-weight-bold"},"Create Your Account"),e("p",{class:"text-body-1 text-medium-emphasis mt-1"}," Start managing your properties today ")],-1),ze={class:"mb-6"},Ae={class:"d-flex justify-space-between mt-1"},Ue={class:"text-caption"},Ne={class:"text-caption text-primary"},je={class:"mb-4"},Fe=e("label",{class:"text-subtitle-2 text-medium-emphasis mb-2 d-block"},"I am a...",-1),Te={class:"d-flex align-center"},Ze={class:"mb-4"},Be={class:"d-flex justify-space-between mt-1"},Ie=e("small",{class:"text-caption text-medium-emphasis"},"Password strength",-1),Me={class:"text-caption"},qe=e("div",{class:"font-weight-bold mb-1"},"Strong password should include:",-1),De={class:"d-flex align-center mb-1"},Re={class:"d-flex align-center mb-1"},$e={class:"d-flex align-center mb-1"},Ee={class:"d-flex align-center"},Le=e("div",null,[c(" I agree to the "),e("a",{href:"#",class:"text-decoration-none text-primary"},"Terms of Service"),c(" and "),e("a",{href:"#",class:"text-decoration-none text-primary"},"Privacy Policy")],-1),We={class:"d-flex gap-4 mt-6"},Ye={class:"text-center mt-6"},Ge=e("span",{class:"text-medium-emphasis"},"Already have an account?",-1),Je={class:"d-flex flex-column align-center justify-center mt-6"},Oe={class:"d-flex align-center justify-center mb-2"},He=e("span",{class:"text-caption text-medium-emphasis"},"Secure & Encrypted",-1),Ke=e("span",{class:"text-caption text-medium-emphasis"},"GDPR Compliant",-1),V=2,ot={__name:"Register",setup(Qe){const f=h(!1),y=h(!1),m=h(0),v=h(""),u=h(1),s=X({name:"",email:"",password:"",password_confirmation:"",user_type:"Tenant",phone_number:"",company_name:"",terms:!1}),N=[{title:"Landlord",icon:"mdi-home-city"},{title:"Tenant",icon:"mdi-clipboard-account"},{title:"User",icon:"mdi-account-tie"},{title:"Company",icon:"mdi-domain"}],j=d=>{if(!d){m.value=0,v.value="";return}let a=0;d.length>=8&&(a+=1),d.length>=12&&(a+=1),/[A-Z]/.test(d)&&(a+=1),/[a-z]/.test(d)&&(a+=1),/[0-9]/.test(d)&&(a+=1),/[^A-Za-z0-9]/.test(d)&&(a+=1),m.value=Math.min(5,a),a<2?v.value="Weak password":a<4?v.value="Moderate password":v.value="Strong password"};O(()=>s.password,d=>{j(d)});const F=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})},T=()=>{u.value<V&&u.value++},Z=()=>{u.value>1&&u.value--},B=()=>s.name&&s.email&&s.user_type;return(d,a)=>{const r=i("v-icon"),I=i("v-rating"),M=i("v-avatar"),q=i("v-card-text"),b=i("v-card"),D=i("v-sheet"),g=i("v-col"),C=i("v-progress-linear"),R=i("v-radio"),w=i("v-row"),$=i("v-radio-group"),_=i("v-text-field"),k=i("v-btn"),P=i("v-window-item"),E=i("v-alert"),L=i("v-checkbox"),W=i("v-window"),Y=i("v-divider"),G=i("v-container"),J=i("v-layout");return x(),S(z,null,[t(o(ee),{title:"PropertyPulse | Create Account"}),t(J,{class:"fill-height bg-grey-lighten-4"},{default:l(()=>[t(w,{"no-gutters":"",class:"fill-height"},{default:l(()=>[t(g,{cols:"12",md:"6",class:"position-relative d-none d-md-block"},{default:l(()=>[t(D,{color:"primary",class:"fill-height d-flex flex-column pa-10"},{default:l(()=>[e("div",oe,[e("div",ae,[t(r,{color:"secondary",icon:"mdi-home-city",size:"x-large",class:"mr-3"}),le]),ne]),e("div",ie,[re,e("div",ce,[de,t(b,{color:"primary-darken-1",class:"mb-6 pa-4 rounded-lg border border-white-opacity-25"},{default:l(()=>[t(q,{class:"text-white pa-2"},{default:l(()=>[e("div",me,[t(I,{"model-value":"5",color:"amber",density:"compact",size:"small",readonly:""})]),ue,e("div",pe,[t(M,{color:"secondary",size:"36",class:"mr-3"},{default:l(()=>[t(r,{icon:"mdi-account"})]),_:1}),_e])]),_:1})]),_:1}),e("div",ve,[e("div",he,[t(r,{color:"secondary",icon:"mdi-check-circle",class:"mr-3"}),fe]),e("div",ye,[t(r,{color:"secondary",icon:"mdi-check-circle",class:"mr-3"}),ge]),e("div",xe,[t(r,{color:"secondary",icon:"mdi-check-circle",class:"mr-3"}),be]),e("div",we,[t(r,{color:"secondary",icon:"mdi-check-circle",class:"mr-3"}),ke])])])])]),_:1})]),_:1}),t(g,{cols:"12",md:"6"},{default:l(()=>[t(G,{class:"fill-height"},{default:l(()=>[t(w,{justify:"center",align:"center"},{default:l(()=>[t(g,{cols:"12",sm:"10",md:"11",lg:"9"},{default:l(()=>[e("div",Ve,[e("div",Ce,[t(r,{color:"primary",icon:"mdi-home-city",size:"large",class:"mr-2"}),Pe])]),t(b,{class:"mx-auto px-6 py-8 elevation-4 rounded-lg"},{default:l(()=>[Se,e("div",ze,[t(C,{"model-value":u.value/V*100,color:"primary",height:"8",rounded:""},null,8,["model-value"]),e("div",Ae,[e("span",Ue,"Step "+p(u.value)+" of "+p(V),1),e("span",Ne,p(u.value===1?"Basic Information":"Security & Confirmation"),1)])]),e("form",{onSubmit:Q(F,["prevent"])},[t(W,{modelValue:u.value,"onUpdate:modelValue":a[10]||(a[10]=n=>u.value=n)},{default:l(()=>[t(P,{value:1},{default:l(()=>[e("div",je,[Fe,t($,{modelValue:o(s).user_type,"onUpdate:modelValue":a[0]||(a[0]=n=>o(s).user_type=n),inline:!1,"hide-details":""},{default:l(()=>[t(w,null,{default:l(()=>[(x(),S(z,null,H(N,n=>t(g,{key:n.title,cols:"6"},{default:l(()=>[t(b,{color:o(s).user_type===n.title?"primary-lighten-5":"",variant:o(s).user_type===n.title?"outlined":"flat",class:"pa-4 cursor-pointer",onClick:Xe=>o(s).user_type=n.title,hover:""},{default:l(()=>[e("div",Te,[t(r,{icon:n.icon,color:o(s).user_type===n.title?"primary":"",size:"large",class:"mr-2"},null,8,["icon","color"]),t(R,{label:n.title,value:n.title,color:"primary",density:"compact","hide-details":""},null,8,["label","value"])])]),_:2},1032,["color","variant","onClick"])]),_:2},1024)),64))]),_:1})]),_:1},8,["modelValue"]),t(se,{class:"mt-1",message:o(s).errors.user_type},null,8,["message"])]),t(_,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":a[1]||(a[1]=n=>o(s).name=n),label:"Full Name",type:"text",variant:"outlined","prepend-inner-icon":"mdi-account","error-messages":o(s).errors.name,required:"",autofocus:"",autocomplete:"name",density:"comfortable",class:"mb-4"},null,8,["modelValue","error-messages"]),t(_,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[2]||(a[2]=n=>o(s).email=n),label:"Email Address",type:"email",variant:"outlined","prepend-inner-icon":"mdi-email-outline","error-messages":o(s).errors.email,required:"",autocomplete:"username",density:"comfortable",class:"mb-4"},null,8,["modelValue","error-messages"]),t(_,{id:"phone_number",modelValue:o(s).phone_number,"onUpdate:modelValue":a[3]||(a[3]=n=>o(s).phone_number=n),label:"Phone Number",type:"tel",variant:"outlined","prepend-inner-icon":"mdi-phone-outline","error-messages":o(s).errors.phone_number,density:"comfortable",class:"mb-4"},null,8,["modelValue","error-messages"]),o(s).user_type==="Company"?(x(),A(_,{key:0,id:"company_name",modelValue:o(s).company_name,"onUpdate:modelValue":a[4]||(a[4]=n=>o(s).company_name=n),label:"Company Name",type:"text",variant:"outlined","prepend-inner-icon":"mdi-domain","error-messages":o(s).errors.company_name,density:"comfortable",class:"mb-4"},null,8,["modelValue","error-messages"])):U("",!0),t(k,{block:"",color:"primary",size:"large",class:"mt-4",disabled:!B(),onClick:T},{default:l(()=>[c(" Continue "),t(r,{end:"",icon:"mdi-arrow-right",class:"ml-1"})]),_:1},8,["disabled"])]),_:1}),t(P,{value:2},{default:l(()=>[t(_,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[5]||(a[5]=n=>o(s).password=n),label:"Create Password",type:f.value?"text":"password",variant:"outlined","prepend-inner-icon":"mdi-lock-outline","append-inner-icon":f.value?"mdi-eye-off":"mdi-eye","onClick:appendInner":a[6]||(a[6]=n=>f.value=!f.value),"error-messages":o(s).errors.password,required:"",autocomplete:"new-password",density:"comfortable",class:"mb-2"},null,8,["modelValue","type","append-inner-icon","error-messages"]),e("div",Ze,[t(C,{"model-value":m.value*20,color:m.value<2?"error":m.value<4?"warning":"success",height:"8",rounded:""},null,8,["model-value","color"]),e("div",Be,[Ie,e("small",{class:K({"text-error":m.value<2,"text-warning":m.value>=2&&m.value<4,"text-success":m.value>=4})},p(v.value),3)])]),o(s).password?(x(),A(E,{key:0,density:"comfortable",type:"info",variant:"tonal",class:"mb-4"},{default:l(()=>[e("div",Me,[qe,e("div",De,[t(r,{size:"x-small",color:o(s).password.length>=8?"success":"",class:"mr-2"},{default:l(()=>[c(p(o(s).password.length>=8?"mdi-check-circle":"mdi-circle-outline"),1)]),_:1},8,["color"]),c(" At least 8 characters ")]),e("div",Re,[t(r,{size:"x-small",color:/[A-Z]/.test(o(s).password)?"success":"",class:"mr-2"},{default:l(()=>[c(p(/[A-Z]/.test(o(s).password)?"mdi-check-circle":"mdi-circle-outline"),1)]),_:1},8,["color"]),c(" Uppercase letters ")]),e("div",$e,[t(r,{size:"x-small",color:/[0-9]/.test(o(s).password)?"success":"",class:"mr-2"},{default:l(()=>[c(p(/[0-9]/.test(o(s).password)?"mdi-check-circle":"mdi-circle-outline"),1)]),_:1},8,["color"]),c(" Numbers ")]),e("div",Ee,[t(r,{size:"x-small",color:/[^A-Za-z0-9]/.test(o(s).password)?"success":"",class:"mr-2"},{default:l(()=>[c(p(/[^A-Za-z0-9]/.test(o(s).password)?"mdi-check-circle":"mdi-circle-outline"),1)]),_:1},8,["color"]),c(" Special characters ")])])]),_:1})):U("",!0),t(_,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[7]||(a[7]=n=>o(s).password_confirmation=n),label:"Confirm Password",type:y.value?"text":"password",variant:"outlined","prepend-inner-icon":"mdi-lock-check","append-inner-icon":y.value?"mdi-eye-off":"mdi-eye","onClick:appendInner":a[8]||(a[8]=n=>y.value=!y.value),"error-messages":o(s).errors.password_confirmation,required:"",autocomplete:"new-password",density:"comfortable",class:"mb-4"},null,8,["modelValue","type","append-inner-icon","error-messages"]),t(L,{modelValue:o(s).terms,"onUpdate:modelValue":a[9]||(a[9]=n=>o(s).terms=n),color:"primary","error-messages":o(s).errors.terms,class:"mb-4","hide-details":""},{label:l(()=>[Le]),_:1},8,["modelValue","error-messages"]),e("div",We,[t(k,{variant:"outlined",size:"large",width:"120",onClick:Z},{default:l(()=>[t(r,{start:"",icon:"mdi-arrow-left",class:"mr-1"}),c(" Back ")]),_:1}),t(k,{block:"",color:"primary",size:"large",loading:o(s).processing,disabled:o(s).processing||!o(s).password||!o(s).password_confirmation||!o(s).terms,type:"submit"},{default:l(()=>[c(" Create Account "),t(r,{end:"",icon:"mdi-check",class:"ml-1"})]),_:1},8,["loading","disabled"])])]),_:1})]),_:1},8,["modelValue"])],32),e("div",Ye,[Ge,t(o(te),{href:d.route("login"),class:"text-decoration-none font-weight-bold text-primary ml-2"},{default:l(()=>[c(" Sign in ")]),_:1},8,["href"])])]),_:1}),e("div",Je,[e("div",Oe,[t(r,{icon:"mdi-shield-check",color:"primary",size:"small",class:"mr-2"}),He,t(Y,{vertical:"",class:"mx-3",style:{height:"12px"}}),t(r,{icon:"mdi-check-decagram",color:"primary",size:"small",class:"mr-2"}),Ke])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{ot as default};
