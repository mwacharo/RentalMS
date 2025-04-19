import{r as U,i as n,o as g,d as h,b as e,u as a,w as t,F as E,a as s,f as i,t as M,e as x,c as N,k as q}from"./app-4ka3Qwr3.js";import{T as z,Z as I,i as b}from"./index.esm-ud6nLysP.js";const L={class:"mb-12"},D={class:"d-flex align-center"},A=s("span",{class:"text-h4 font-weight-bold text-white"},"PropertyPulse",-1),W=s("div",{class:"text-subtitle-1 text-medium-emphasis mt-2"}," Professional Rental Management System ",-1),Z={class:"flex-grow-1 d-flex align-center justify-center"},$={class:"mt-12 d-flex justify-space-between"},G={class:"d-flex d-md-none justify-center mb-6"},H={class:"d-flex align-center"},J=s("span",{class:"text-h5 font-weight-bold text-primary"},"PropertyPulse",-1),K=s("div",{class:"text-center mb-6"},[s("h1",{class:"text-h4 text-primary font-weight-bold"},"Welcome Back"),s("p",{class:"text-body-1 text-medium-emphasis"},"Sign in to your account to continue")],-1),O={key:0,class:"mb-4 text-success text-center"},Q={class:"d-flex align-center justify-space-between mb-6"},X={class:"text-center"},Y=s("span",{class:"text-medium-emphasis"},"Don't have an account?",-1),ee=s("p",{class:"text-caption text-medium-emphasis mb-0"},[i(" By logging in, you agree to our "),s("a",{href:"#",class:"text-decoration-none text-primary"},"Terms of Service"),i(" and "),s("a",{href:"#",class:"text-decoration-none text-primary"},"Privacy Policy")],-1),oe={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const c=U(!1),o=z({email:"",password:"",user_type:"",remember:!1}),w=["Tenant","Landlord","Company","User"],V=()=>{o.transform(d=>({...d,remember:o.remember?"on":""})).post(route("login"),{onFinish:()=>o.reset("password")})};return(d,l)=>{const u=n("v-icon"),k=n("v-progress-circular"),p=n("v-row"),P=n("v-img"),_=n("v-chip"),S=n("v-sheet"),f=n("v-col"),j=n("v-select"),v=n("v-text-field"),B=n("v-checkbox"),R=n("v-btn"),y=n("v-card"),C=n("v-card-text"),T=n("v-container"),F=n("v-layout");return g(),h(E,null,[e(a(I),{title:"PropertyPulse | Login"}),e(F,{class:"fill-height"},{default:t(()=>[e(p,{"no-gutters":"",class:"fill-height"},{default:t(()=>[e(f,{cols:"12",md:"6",class:"position-relative d-none d-md-block"},{default:t(()=>[e(S,{color:"primary",class:"fill-height d-flex flex-column justify-start pa-8"},{default:t(()=>[s("div",L,[s("div",D,[e(u,{color:"secondary",icon:"mdi-home-city",size:"x-large",class:"mr-3"}),A]),W]),s("div",Z,[e(P,{src:"/assets/img/rentalms.png",alt:"Real Estate Management",cover:"",class:"rounded-lg elevation-10","max-height":"500"},{placeholder:t(()=>[e(p,{class:"fill-height",align:"center",justify:"center"},{default:t(()=>[e(k,{indeterminate:"",color:"secondary"})]),_:1})]),_:1})]),s("div",$,[e(_,{color:"secondary",class:"mr-2"},{default:t(()=>[i("Easy Rent Collection")]),_:1}),e(_,{color:"secondary",class:"mr-2"},{default:t(()=>[i("Maintenance Tracking")]),_:1}),e(_,{color:"secondary"},{default:t(()=>[i("Financial Reports")]),_:1})])]),_:1})]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(T,{class:"fill-height"},{default:t(()=>[e(p,{justify:"center",align:"center"},{default:t(()=>[e(f,{cols:"12",sm:"8",md:"10",lg:"8"},{default:t(()=>[e(y,{class:"mx-auto px-6 py-8 elevation-10 rounded-lg"},{default:t(()=>[s("div",G,[s("div",H,[e(u,{color:"primary",icon:"mdi-home-city",size:"large",class:"mr-2"}),J])]),K,m.status?(g(),h("div",O,M(m.status),1)):x("",!0),s("form",{onSubmit:q(V,["prevent"])},[e(j,{modelValue:a(o).user_type,"onUpdate:modelValue":l[0]||(l[0]=r=>a(o).user_type=r),items:w,label:"I am a...",variant:"outlined","prepend-inner-icon":"mdi-account-group",class:"mb-4",density:"comfortable"},null,8,["modelValue"]),e(v,{id:"email",modelValue:a(o).email,"onUpdate:modelValue":l[1]||(l[1]=r=>a(o).email=r),label:"Email Address",type:"email",variant:"outlined","prepend-inner-icon":"mdi-email-outline","error-messages":a(o).errors.email,required:"",density:"comfortable",class:"mb-2"},null,8,["modelValue","error-messages"]),e(v,{id:"password",modelValue:a(o).password,"onUpdate:modelValue":l[2]||(l[2]=r=>a(o).password=r),label:"Password",type:c.value?"text":"password",variant:"outlined","prepend-inner-icon":"mdi-lock-outline","append-inner-icon":c.value?"mdi-eye-off":"mdi-eye","onClick:appendInner":l[3]||(l[3]=r=>c.value=!c.value),"error-messages":a(o).errors.password,required:"",density:"comfortable",class:"mb-2"},null,8,["modelValue","type","append-inner-icon","error-messages"]),s("div",Q,[e(B,{modelValue:a(o).remember,"onUpdate:modelValue":l[4]||(l[4]=r=>a(o).remember=r),label:"Remember me",color:"primary","hide-details":"",density:"compact"},null,8,["modelValue"]),m.canResetPassword?(g(),N(a(b),{key:0,href:d.route("password.request"),class:"text-decoration-none text-primary"},{default:t(()=>[i(" Forgot password? ")]),_:1},8,["href"])):x("",!0)]),e(R,{block:"",color:"primary",size:"large",loading:a(o).processing,disabled:a(o).processing,type:"submit",class:"mb-4"},{default:t(()=>[i(" Sign In "),e(u,{end:"",icon:"mdi-login",class:"ml-1"})]),_:1},8,["loading","disabled"]),s("div",X,[Y,e(a(b),{href:d.route("register"),class:"text-decoration-none font-weight-bold text-primary ml-2"},{default:t(()=>[i(" Sign up now ")]),_:1},8,["href"])])],32)]),_:1}),e(y,{class:"mt-4 bg-grey-lighten-4",variant:"flat",border:""},{default:t(()=>[e(C,{class:"text-center"},{default:t(()=>[ee]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{oe as default};
