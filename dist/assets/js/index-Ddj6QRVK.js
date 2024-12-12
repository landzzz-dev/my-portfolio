const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/HomeView-DezVuocT.js","assets/js/@vue-DmcnfZN5.js","assets/js/pinia-Bz2fLqKw.js","assets/js/vue-router-gGaajhlr.js","assets/js/AboutView-B1uUFEb1.js","assets/js/ExperienceView-oJnVLaG3.js","assets/js/ContactView-D1X6NXOI.js","assets/js/emailjs-com-DpmFZVTh.js","assets/js/ProjectView-BWLXipCd.js","assets/js/CButton-BRXXH9vI.js","assets/js/CIcon-Ct7Y2mAb.js","assets/js/CInput-DaCVBzHq.js","assets/css/CInput-BoNBZWcw.css","assets/js/CTextarea--n53roZU.js"])))=>i.map(i=>d[i]);
import{r as c,v as X,x as Z,y as ee,z as te,A as f,B as y,C as s,D as v,E as P,F as E,T as N,G as $,H,I as q,u as k,J as F,K as oe,L as U,M as B,N as ne,O as w,P as L,Q as se}from"./@vue-DmcnfZN5.js";import{d as re,s as ae,c as ie}from"./pinia-Bz2fLqKw.js";import{u as le,R as G,c as ce,a as ue}from"./vue-router-gGaajhlr.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))x(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&x(n)}).observe(document,{childList:!0,subtree:!0});function _(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function x(o){if(o.ep)return;o.ep=!0;const a=_(o);fetch(o.href,a)}})();const de="modulepreload",me=function(b){return"/my-portfolio/"+b},K={},u=function(m,_,x){let o=Promise.resolve();if(_&&_.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.allSettled(_.map(l=>{if(l=me(l),l in K)return;K[l]=!0;const p=l.endsWith(".css"),T=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${T}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":de,p||(d.as="script"),d.crossOrigin="",d.href=l,i&&d.setAttribute("nonce",i),document.head.appendChild(d),p)return new Promise((O,R)=>{d.addEventListener("load",O),d.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return o.then(n=>{for(const i of n||[])i.status==="rejected"&&a(i.reason);return m().catch(a)})},pe=re("store",()=>{const b=c(""),m=c(!0);return{page:b,isObserverActive:m}}),fe=(b,m)=>{const _=b.__vccOpts||b;for(const[x,o]of m)_[x]=o;return _},ve={class:"sticky top-0 z-10 backdrop-blur-md dark:bg-transparent border-b border-slate-800 border-opacity-20"},_e={class:"h-16 container mx-auto sm:px-5 flex justify-between items-center dark:text-white"},he={class:"font-bold text-3xl"},be={key:0,class:"landz",style:{"transition-delay":"400ms"}},ye={key:1,class:"dev",style:{"transition-delay":"200ms"}},we={class:"slide-to-left flex"},xe={class:"xs:block md:hidden w-full"},ge={class:"h-full dark:bg-transparent border-b border-slate-800 border-opacity-20"},Ee={class:"relative flex flex-col"},ke={class:"section",id:"home"},Te={class:"section",id:"about"},Pe={key:0,class:"slide-up"},Ce={class:"section",id:"experience"},Ae={key:0,class:"slide-up"},Ie={class:"section",id:"contact"},Le={key:0,class:"slide-up"},Oe={class:"w-full h-64 text-slate-400 content-center text-center bg-slate-800 grid gap-5"},Re={class:"flex justify-center gap-5"},Ve={__name:"App",setup(b){const m=w({loader:()=>u(()=>import("./HomeView-DezVuocT.js"),__vite__mapDeps([0,1,2,3])),hydrate:L()}),_=w({loader:()=>u(()=>import("./AboutView-B1uUFEb1.js"),__vite__mapDeps([4,1])),hydrate:L()}),x=w({loader:()=>u(()=>import("./ExperienceView-oJnVLaG3.js"),__vite__mapDeps([5,1,2,3])),hydrate:L()}),o=w({loader:()=>u(()=>import("./ContactView-D1X6NXOI.js"),__vite__mapDeps([6,1,7,2,3])),hydrate:L()}),a=pe(),{page:n,isObserverActive:i}=ae(a),l=le(),p=c(!1),T=c({landz:!1,dev:!1}),d=c([]),O=c([{id:"home",name:"Home"},{id:"about",name:"About"},{id:"experience",name:"Experience"},{id:"contact",name:"Contact"}]),R=c(!1),V=c(!1),D=c(!1),W=c(!1),z=c(!1),C=c(""),J=c(!1);X(async()=>{l.push("/"),await new Promise(t=>setTimeout(t,100)),l.push("home"),window.scrollTo({top:0}),history.scrollRestoration="manual",M(),R.value=!0,setTimeout(()=>{d.value=O.value,T.value={landz:!0,dev:!0}},100),await new Promise(t=>setTimeout(t,250)),J.value=!0});let A;Z(()=>{A&&A.disconnect()}),ee(async()=>{n.value&&document.getElementById(n.value).scrollIntoView({block:"center",behavior:"smooth"}),n.value=="home"&&window.scrollTo({top:0}),await new Promise(t=>setTimeout(t,200)),n.value=""});async function j(t){i.value=!1,C.value=t,t=="home"?window.scrollTo({top:0,behavior:"smooth"}):document.getElementById(t).scrollIntoView({block:"center",behavior:"smooth"}),await new Promise(e=>setTimeout(e,450)),i.value=!0,await new Promise(e=>setTimeout(e,200)),t=="about"&&(V.value=!0),t=="experience"&&(D.value=!0),t=="project"&&(W.value=!0),t=="contact"&&(z.value=!0)}function M(){const t=document.querySelectorAll("section");A=new IntersectionObserver(e=>{e.forEach(async h=>{i.value&&h.isIntersecting&&(C.value=h.target.id,await new Promise(r=>setTimeout(r,200)),h.target.id=="about"&&(V.value=!0,l.push("/about")),h.target.id=="experience"&&(D.value=!0,l.push("/experience")),h.target.id=="contact"&&(z.value=!0,l.push("/contact")))})},{threshold:.5}),t.forEach(e=>A.observe(e))}async function Q(){l.push("/"),i.value=!1,await new Promise(t=>setTimeout(t,450)),i.value=!0,location.reload()}function S(t){t=="facebook"?window.open("https://web.facebook.com/john.o.villanueva.jr","_blank"):t=="gmail"?window.location.href="mailto:landzzz.dev@gmail.com":t=="linkedin"&&window.open("https://linkedin.com/in/rolando-villanueva-1a194321a","_blank")}return(t,e)=>{const h=te("CIcon");return f(),y($,null,[s("header",ve,[s("nav",_e,[s("div",he,[v(N,{name:"left-to-right",tag:"ul",class:"flex"},{default:P(()=>[T.value.landz?(f(),y("span",be,"Landz")):E("",!0),T.value.dev?(f(),y("span",ye,e[6]||(e[6]=[s("b",null,"Dev",-1)]))):E("",!0)]),_:1})]),s("div",we,[v(N,{name:"right-to-left",tag:"ul",class:"flex"},{default:P(()=>[(f(!0),y($,null,H(d.value,(r,I)=>(f(),q(k(G),{key:I,to:`/${r.id}`,class:F([{"text-green-500":C.value==r.id},"p-3 duration-500 hover:text-green-500 xs:hidden md:block"]),style:oe({transitionDelay:`${I*200}ms`}),onClick:Y=>j(r.id)},{default:P(()=>[U(B(r.name),1)]),_:2},1032,["to","class","style","onClick"]))),128))]),_:1}),s("div",xe,[v(h,{onClick:e[0]||(e[0]=r=>p.value=!p.value),icon:p.value?"close":"menu"},null,8,["icon"])])])])]),v(ne,{name:"slide-fade"},{default:P(()=>[p.value?(f(),y("div",{key:0,onClick:e[1]||(e[1]=r=>p.value=!p.value),class:"xs:block md:hidden z-10 w-full backdrop-blur-md fixed"},[s("div",ge,[s("div",Ee,[(f(!0),y($,null,H(d.value,(r,I)=>(f(),q(k(G),{key:I,to:`/${r.id}`,class:F([{"text-green-500":C.value==r.id},"p-3 px-6 duration-500 hover:text-green-500 flex"]),onClick:Y=>j(r.id)},{default:P(()=>[U(B(r.name),1)]),_:2},1032,["to","class","onClick"]))),128))])])])):E("",!0)]),_:1}),s("section",ke,[s("div",null,[v(k(m))])]),s("section",Te,[V.value?(f(),y("div",Pe,[v(k(_))])):E("",!0)]),s("section",Ce,[D.value?(f(),y("div",Ae,[v(k(x))])):E("",!0)]),s("section",Ie,[z.value?(f(),y("div",Le,[v(k(o))])):E("",!0)]),s("div",Oe,[s("p",{onClick:e[2]||(e[2]=r=>Q()),class:"text-2xl font-bold hover:cursor-pointer"},e[7]||(e[7]=[s("span",{class:"hover:text-white duration-500"},"Rolando Villanueva",-1)])),s("p",Re,[v(h,{class:"hover:text-white duration-500",onClick:e[3]||(e[3]=r=>S("facebook")),icon:"facebook"}),v(h,{class:"hover:text-white duration-500",onClick:e[4]||(e[4]=r=>S("gmail")),icon:"gmail"}),v(h,{class:"hover:text-white duration-500",onClick:e[5]||(e[5]=r=>S("linkedin")),icon:"linkedin"})]),s("p",null,"Copyright © "+B(new Date().getFullYear())+" Landz. All Rights Reserved",1),e[8]||(e[8]=s("p",{class:"text-xs text-slate-600"},"Build with Vue 3.5 and Tailwind 3.4",-1))])],64)}}},De=fe(Ve,[["__scopeId","data-v-2709fadd"]]),ze=ce({history:ue("/my-portfolio/"),routes:[{path:"/home",name:"Home",component:()=>u(()=>import("./HomeView-DezVuocT.js"),__vite__mapDeps([0,1,2,3]))},{path:"/about",name:"About",component:()=>u(()=>import("./AboutView-B1uUFEb1.js"),__vite__mapDeps([4,1]))},{path:"/experience",name:"Experience",component:()=>u(()=>import("./ExperienceView-oJnVLaG3.js"),__vite__mapDeps([5,1,2,3]))},{path:"/project",name:"Project",component:()=>u(()=>import("./ProjectView-BWLXipCd.js"),__vite__mapDeps([8,1,2,3]))},{path:"/contact",name:"Contact",component:()=>u(()=>import("./ContactView-D1X6NXOI.js"),__vite__mapDeps([6,1,7,2,3]))}]}),Se=ie(),$e=w({loader:()=>u(()=>import("./CButton-BRXXH9vI.js"),__vite__mapDeps([9,1]))}),Be=w({loader:()=>u(()=>import("./CIcon-Ct7Y2mAb.js"),__vite__mapDeps([10,1]))}),je=w({loader:()=>u(()=>import("./CInput-DaCVBzHq.js"),__vite__mapDeps([11,1,2,3,12]))}),Ne=w({loader:()=>u(()=>import("./CTextarea--n53roZU.js"),__vite__mapDeps([13,1]))}),g=se(De);g.component("CButton",$e);g.component("CIcon",Be);g.component("CInput",je);g.component("CTextarea",Ne);g.use(ze);g.use(Se);g.mount("#app");export{fe as _,pe as u};
