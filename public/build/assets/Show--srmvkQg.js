import{_ as c}from"./AppLayout-DLV5K9WW.js";import l from"./DeleteUserForm-D-CKAuy8.js";import f from"./LogoutOtherBrowserSessionsForm-BoJJ7Fpj.js";import{S as s}from"./SectionBorder-CsZk32o3.js";import u from"./TwoFactorAuthenticationForm-YuFVFMOU.js";import d from"./UpdatePasswordForm-RATV-Bhi.js";import _ from"./UpdateProfileInformationForm-CxAm4a9p.js";import{c as h,o as e,w as p,a as i,d as r,e as a,b as t,F as g}from"./app-Cdoi5j0A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index.esm-CggUAtJP.js";import"./Modal-AXUO1mBF.js";import"./SectionTitle-DAT1SSeX.js";import"./DangerButton-BswoR3au.js";import"./DialogModal-DDoKXm4I.js";import"./InputError-CEQ0tigv.js";import"./SecondaryButton-B8H3wlhO.js";import"./TextInput-BoXcd9Ci.js";import"./ActionMessage-CfRE6ckj.js";import"./PrimaryButton-BBDTOwub.js";import"./InputLabel-Bsa1UDMX.js";import"./FormSection-BlxMVyx1.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,n)=>(e(),h(c,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1)])),default:p(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(d,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(f,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(g,{key:3},[t(s),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};
