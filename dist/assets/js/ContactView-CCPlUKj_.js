import{r as x,v as _,d as k,B as y,C as v,D as u,E as p,T as C,A as o,I as f,F as d,L as I,z as c}from"./@vue-DmcnfZN5.js";import{u as E}from"./index-B7b8PAME.js";import{e as b}from"./emailjs-com-DpmFZVTh.js";import"./pinia-Bz2fLqKw.js";import"./vue-router-gGaajhlr.js";const w={class:"container grid gap-10 mx-auto content-center sm:px-5"},B={class:"text-slate-900"},N={key:1,style:{"transition-delay":"800ms"},class:"pt-10 w-full justify-items-center"},F={__name:"ContactView",setup(T){E();const n=x({name:!1,email:!1,message:!1,button:!1});_(()=>{n.value={name:!0,email:!0,message:!0,button:!0}});const m=x(!1),e=k({name:null,email:null,message:null});async function V(){const g="service_l7se67g",a="template_pnkt415",i="IdIk01FVZs1V_Vt1d";m.value=!0;let l="",s="",r=!1;try{if(e.name||(l+=`* Name is required.
`),e.email||(l+=`* Email is required.
`),e.email&&(/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(e.email)?r=!0:l+=`* Please provide a valid email address.
`),e.message||(l+=`* Message is required.
`),!e.name||!e.email||!e.message||!r)return m.value=!1,alert(l),!1;const t=b.send(g,a,e,i);console.log("SUCCESS",t),s="Email sent successfully!",e.name=null,e.email=null,e.message=null}catch(t){console.error("FAILED...",t),s="Failed to send email, Please try again."}finally{setTimeout(()=>{m.value=!1,s&&alert(s)},1e3)}}return(g,a)=>{const i=c("CInput"),l=c("CTextarea"),s=c("CIcon"),r=c("CButton");return o(),y("div",w,[a[5]||(a[5]=v("p",{class:"text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold"},"Contact Me",-1)),v("div",B,[u(C,{name:"down-to-up",tag:"ul"},{default:p(()=>[u(C,{key:"nameEmail",name:"down-to-up",tag:"ul",class:"lg:flex gap-8"},{default:p(()=>[n.value.name?(o(),f(i,{key:0,style:{"transition-delay":"200ms"},label:"Name *",type:"text",modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.name=t)},null,8,["modelValue"])):d("",!0),n.value.email?(o(),f(i,{key:1,style:{"transition-delay":"400ms"},label:"Email *",placeholder:"example@email.com",type:"email",modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=t=>e.email=t)},null,8,["modelValue"])):d("",!0)]),_:1}),n.value.message?(o(),f(l,{key:0,style:{"transition-delay":"600ms"},label:"Message *",modelValue:e.message,"onUpdate:modelValue":a[2]||(a[2]=t=>e.message=t)},null,8,["modelValue"])):d("",!0),n.value.button?(o(),y("div",N,[u(r,{onClick:a[3]||(a[3]=t=>V()),loading:m.value,color:"green",class:"sm:w-full lg:w-1/4"},{default:p(()=>[u(s,{icon:"email"}),a[4]||(a[4]=I("Send "))]),_:1},8,["loading"])])):d("",!0)]),_:1})])])}}};export{F as default};