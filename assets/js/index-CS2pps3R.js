const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/CButton-Dxklkbar.js","assets/js/@vue-DqVehMUS.js","assets/js/CIcon-CqlttFMr.js","assets/js/CInput-CC2CB2dU.js","assets/js/pinia-BtJadFAk.js","assets/js/emailjs-com-DpmFZVTh.js","assets/css/CInput-BoNBZWcw.css","assets/js/CTextarea-CY5r1vQT.js"])))=>i.map(i=>d[i]);
import{r as g,k as A,l as k,p as n,q as o,s as e,u as i,v as w,x as d,T as h,y as I,z as V,A as j,B as K,d as Q,C as X,D as ee,E as te,F as z,G as F,H as O,I as se,J as le,K as S}from"./@vue-DqVehMUS.js";import{d as ne,s as H,c as oe}from"./pinia-BtJadFAk.js";import{e as ae}from"./emailjs-com-DpmFZVTh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function f(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=f(l);fetch(l.href,r)}})();const ie="modulepreload",re=function(x){return"/my-portfolio/"+x},R={},P=function(t,f,s){let l=Promise.resolve();if(f&&f.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),p=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));l=Promise.allSettled(f.map(c=>{if(c=re(c),c in R)return;R[c]=!0;const y=c.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${b}`))return;const m=document.createElement("link");if(m.rel=y?"stylesheet":ie,y||(m.as="script"),m.crossOrigin="",m.href=c,p&&m.setAttribute("nonce",p),document.head.appendChild(m),y)return new Promise((T,$)=>{m.addEventListener("load",T),m.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=a,window.dispatchEvent(p),!p.defaultPrevented)throw a}return l.then(a=>{for(const p of a||[])p.status==="rejected"&&r(p.reason);return t().catch(r)})},N=ne("store",()=>{const x=g(""),t=g(!0);return{page:x,isObserverActive:t}}),U="/my-portfolio/assets/img/profile-B9Q2KkcJ.jpg",ce=U,de={class:"sm:-mt-10 container mx-auto content-center sm:px-5"},ue={class:"lg:flex gap-10 justify-items-center"},fe={class:"w-full content-center"},pe={key:"hello",style:{"transition-delay":"200ms"},class:"text-2xl font-bold mb-2"},me={key:"rolandoVillanueva",style:{"transition-delay":"400ms"},class:"text-5xl xl:text-6xl mb-2 text-green-500 font-bold"},ve={key:"fullStackDeveloper",style:{"transition-delay":"600ms"},class:"text-slate-600 font-bold text-4xl mb-2"},xe={__name:"HomeView",setup(x){const t=N(),{page:f,isObserverActive:s}=H(t),l=g({hello:!1,rolandoVillanueva:!1,fullStackDeveloper:!1,button1:!1,button2:!1});A(async()=>{l.value={hello:!0,rolandoVillanueva:!0,fullStackDeveloper:!0,button1:!0,button2:!0}});async function r(){f.value="#contact",s.value=!1,await new Promise(p=>setTimeout(p,450)),s.value=!0}async function a(){window.open("https://drive.google.com/file/d/1Ntcjna3FRctB2jllu1OO7mjq5ebSmJuq/view?usp=sharing","_blank")}return(p,c)=>{const y=k("CButton");return n(),o("div",de,[e("div",ue,[c[4]||(c[4]=e("picture",{class:"profile sm:w-full md:w-3/4 lg:w-3/5"},[e("source",{srcset:ce,type:"image/jpeg"}),e("img",{src:U,width:"100%",height:"100%",alt:"profile.jpg",loading:"lazy"})],-1)),e("div",fe,[i(h,{name:"down-to-up",tag:"ul"},{default:w(()=>[l.value.hello?(n(),o("p",pe,"Hello, I'm")):d("",!0),l.value.rolandoVillanueva?(n(),o("p",me,"Rolando Villanueva")):d("",!0),l.value.fullStackDeveloper?(n(),o("p",ve,"A Full Stack Developer")):d("",!0),i(h,{key:"buttons",name:"down-to-up",tag:"ul",class:"flex gap-x-4 pt-2"},{default:w(()=>[l.value.button1?(n(),I(y,{key:"button1",style:{"transition-delay":"800ms"},onClick:c[0]||(c[0]=b=>r())},{default:w(()=>c[2]||(c[2]=[V("Get in touch")])),_:1})):d("",!0),l.value.button2?(n(),I(y,{key:"button2",style:{"transition-delay":"1000ms"},onClick:c[1]||(c[1]=b=>a()),color:"green"},{default:w(()=>c[3]||(c[3]=[V("Download CV")])),_:1})):d("",!0)]),_:1})]),_:1})])])])}}},ge={class:"container grid gap-10 mx-auto content-center sm:px-5"},ye={key:0,style:{"transition-delay":"200ms"},class:"p-5 justify-items-center lg:w-1/2 rounded-xl border-2 border-slate-500"},_e={class:"text-slate-400"},we={key:1,style:{"transition-delay":"400ms"},class:"p-5 justify-items-center lg:w-1/2 rounded-xl border-2 border-slate-500"},he={key:"welcome",style:{"transition-delay":"600ms"}},be={__name:"AboutView",setup(x){const t=g({experience:!1,education:!1,welcome:!1}),f=g({});return A(()=>{t.value={aboutMe:!0,experience:!0,education:!0,welcome:!0};const s=new Date("12/06/2022, 06:30:00 AM"),l=new Date;let r=l.getFullYear()-s.getFullYear(),a=l.getDate()-s.getDate(),p=l.getMonth()-s.getMonth();p<0&&(r--,p=p+12),f.value={years:r,months:p,days:a}}),(s,l)=>{const r=k("CIcon");return n(),o("div",ge,[l[6]||(l[6]=e("p",{class:"text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold"},"About Me",-1)),i(h,{name:"down-to-up",tag:"ul",class:"grid gap-10"},{default:w(()=>[i(h,{key:"experienceEducation",name:"down-to-up",tag:"ul",class:"grid lg:flex gap-8"},{default:w(()=>[t.value.experience?(n(),o("div",ye,[e("p",null,[i(r,{icon:"licence"})]),l[0]||(l[0]=e("p",{class:"xs:text-xl text-2xl font-bold"},"Real-time Experience",-1)),e("p",_e,j(f.value.years)+" year(s), "+j(f.value.months)+" month(s)",1),l[1]||(l[1]=e("p",{class:"text-slate-400"},"Full Stack Developer",-1))])):d("",!0),t.value.experience?(n(),o("div",we,[e("p",null,[i(r,{icon:"school"})]),l[2]||(l[2]=e("p",{class:"xs:text-xl text-2xl font-bold"},"Education",-1)),l[3]||(l[3]=e("p",{class:"text-slate-400"},"BS Computer Engineering",-1)),l[4]||(l[4]=e("p",{class:"text-slate-400"},"2022",-1))])):d("",!0)]),_:1}),t.value.welcome?(n(),o("div",he,l[5]||(l[5]=[e("p",{class:"text-justify text-slate-400"},[V("           Welcome to my web developer portfolio! With a passion for coding and over a year of hands-on experience in web development, I specialize in creating dynamic and responsive single-page applications (SPAs) using "),e("b",{class:"text-green-500"},"Vue"),V(" and "),e("b",{class:"text-green-500"},"Laravel"),V(". I am dedicated to crafting innovative and user-friendly digital experiences that seamlessly blend the power of the Laravel PHP framework with the elegant design capabilities of Vue Vuetify. Whether you're looking to enhance an existing application, create a new SPA from scratch, or need a developer who can seamlessly integrate Laravel and Vue Vuetify into your project, I'm here to help. Explore my work and see how my expertise can elevate your next project. If you're seeking a dedicated and adaptable web developer, please don't hesitate to reach out. ")],-1)]))):d("",!0)]),_:1})])}}},L=(x,t)=>{const f=x.__vccOpts||x;for(const[s,l]of t)f[s]=l;return f},Ce={},Le={class:"w-10 lg:w-16 lg:h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 261.76 226.69"};function ke(x,t){return n(),o("svg",Le,t[0]||(t[0]=[e("path",{d:"M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z",fill:"#41b883"},null,-1),e("path",{d:"M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z",fill:"#34495e"},null,-1)]))}const $e=L(Ce,[["render",ke]]),Ee={},Ve={class:"w-10 lg:w-16",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"};function Me(x,t){return n(),o("svg",Ve,t[0]||(t[0]=[e("title",null,"file_type_typescript_official",-1),e("rect",{x:"2",y:"2",width:"28",height:"28",rx:"1.312",style:{fill:"#3178c6"}},null,-1),e("path",{d:"M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z",style:{fill:"#ffffff","fill-rule":"evenodd"}},null,-1)]))}const q=L(Ee,[["render",Me]]),Te={},Ie={class:"w-10 lg:w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 296 300",fill:"none"};function je(x,t){return n(),o("svg",Ie,t[0]||(t[0]=[K('<path fill-rule="evenodd" clip-rule="evenodd" d="M147.868 292.803C225.635 292.803 288.677 228.86 288.677 149.982C288.677 71.1036 225.635 7.16023 147.868 7.16023C70.1017 7.16023 7.05935 71.1036 7.05935 149.982C7.05935 228.86 70.1017 292.803 147.868 292.803ZM147.868 295.648C227.183 295.648 291.482 230.43 291.482 149.982C291.482 69.5323 227.183 4.31519 147.868 4.31519C68.5525 4.31519 4.25439 69.5323 4.25439 149.982C4.25439 230.43 68.5525 295.648 147.868 295.648Z" fill="#AEDDFF"></path><path d="M214.874 31.2974C219.428 31.2974 223.12 27.5525 223.12 22.9329C223.12 18.3133 219.428 14.5684 214.874 14.5684C210.319 14.5684 206.627 18.3133 206.627 22.9329C206.627 27.5525 210.319 31.2974 214.874 31.2974Z" fill="#1697F6"></path><path d="M80.8627 285.4C85.4172 285.4 89.1093 281.655 89.1093 277.036C89.1093 272.416 85.4172 268.671 80.8627 268.671C76.3081 268.671 72.616 272.416 72.616 277.036C72.616 281.655 76.3081 285.4 80.8627 285.4Z" fill="#1697F6"></path><path d="M150.169 129.52L107.191 205.042L147.887 276.58L201.788 181.885L255.665 87.1897H174.248L150.169 129.52Z" fill="#1697F6"></path><path d="M94.0094 181.885L96.8321 186.865L137.037 116.198L153.556 87.1897H147.886H40.1079L94.0094 181.885Z" fill="#AEDDFF"></path><path d="M174.248 87.1897C194.621 155.192 147.887 276.58 147.887 276.58L107.191 205.042L174.248 87.1897Z" fill="#1867C0"></path><path d="M153.557 87.1897C67.7217 87.1897 96.8324 186.865 96.8324 186.865L153.557 87.1897Z" fill="#7BC6FF"></path>',7)]))}const Ae=L(Te,[["render",je]]),De={},Se={class:"w-10 lg:w-16 xs:h-10 lg:h-16",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 54 33"};function Pe(x,t){return n(),o("svg",Se,t[0]||(t[0]=[e("g",{"clip-path":"url(#prefix__clip0)"},[e("path",{fill:"#38bdf8","fill-rule":"evenodd",d:"M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z","clip-rule":"evenodd"})],-1),e("defs",null,[e("clipPath",{id:"prefix__clip0"},[e("path",{fill:"#fff",d:"M0 0h54v32.4H0z"})])],-1)]))}const Be=L(De,[["render",Pe]]),ze={},Ze={class:"w-10 lg:w-16",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"};function Fe(x,t){return n(),o("svg",Ze,t[0]||(t[0]=[e("title",null,"file_type_sass",-1),e("path",{d:"M26.11,17.572a5.8,5.8,0,0,0-2.537.588,5.345,5.345,0,0,1-.568-1.314,3.53,3.53,0,0,1-.051-1.1,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256a6.171,6.171,0,0,0-.235.834,19.686,19.686,0,0,1-1.713,3.294,3.186,3.186,0,0,1-.44-2.066,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256-.118.5-.235.834-1.483,3.386-1.841,4.173c-.184.4-.343.726-.455.946h0a.233.233,0,0,1-.02.041c-.1.189-.153.292-.153.292v.005c-.077.138-.159.266-.2.266a1.711,1.711,0,0,1,.01-.869c.2-1.059.69-2.705.685-2.762,0-.031.092-.317-.317-.465a.508.508,0,0,0-.578.1c-.036,0-.061.087-.061.087s.445-1.851-.849-1.851a3.855,3.855,0,0,0-2.475,1.683c-.348.189-1.089.593-1.882,1.028-.3.169-.614.338-.905.5-.02-.02-.041-.046-.061-.066C6.87,17.6,3.975,16.416,4.1,14.171c.046-.818.327-2.966,5.559-5.575,4.306-2.122,7.733-1.534,8.326-.23.849,1.862-1.836,5.319-6.285,5.82a3.351,3.351,0,0,1-2.813-.711c-.235-.256-.271-.271-.358-.22-.143.077-.051.307,0,.44a2.626,2.626,0,0,0,1.606,1.263,8.55,8.55,0,0,0,5.217-.517c2.7-1.043,4.8-3.943,4.184-6.372-.619-2.465-4.71-3.278-8.582-1.9A19.5,19.5,0,0,0,4.359,9.952c-2.133,1.995-2.47,3.728-2.332,4.455.5,2.578,4.051,4.255,5.472,5.5-.072.041-.138.077-.194.107-.711.353-3.421,1.77-4.1,3.268-.767,1.7.123,2.915.711,3.079a4.374,4.374,0,0,0,4.71-1.908A4.725,4.725,0,0,0,9.049,20.1a.107.107,0,0,0-.02-.031l.557-.327c.363-.215.721-.414,1.028-.578a6.74,6.74,0,0,0-.363,1.862,3.886,3.886,0,0,0,.834,2.7.921.921,0,0,0,.675.22c.6,0,.875-.5,1.176-1.094.368-.726.7-1.57.7-1.57s-.414,2.281.711,2.281c.409,0,.823-.532,1.008-.8v.005s.01-.015.031-.051l.066-.107v-.01c.164-.286.532-.936,1.079-2.015.706-1.391,1.386-3.13,1.386-3.13a8.888,8.888,0,0,0,.271,1.13,10.643,10.643,0,0,0,.583,1.309c-.164.23-.266.358-.266.358l.005.005c-.133.174-.276.363-.435.547a16.3,16.3,0,0,0-1.314,1.647.447.447,0,0,0,.123.6,1.116,1.116,0,0,0,.685.113,3.147,3.147,0,0,0,1.028-.235,3.45,3.45,0,0,0,.885-.465,1.98,1.98,0,0,0,.849-1.744,3.521,3.521,0,0,0-.322-1.233c.051-.072.1-.143.148-.215a23.428,23.428,0,0,0,1.534-2.649,8.888,8.888,0,0,0,.271,1.13,7.57,7.57,0,0,0,.5,1.125A4.861,4.861,0,0,0,20.965,20.8c-.322.931-.072,1.35.4,1.447a1.425,1.425,0,0,0,.747-.153,3.4,3.4,0,0,0,.946-.486,2.126,2.126,0,0,0,1.043-1.729,3.268,3.268,0,0,0-.235-1.023,5.356,5.356,0,0,1,2.716-.312c2.434.286,2.915,1.805,2.823,2.445a1.618,1.618,0,0,1-.772,1.094c-.169.107-.225.143-.21.22.02.113.1.107.245.087A1.9,1.9,0,0,0,30,20.7c.077-1.5-1.355-3.145-3.887-3.13ZM7.33,23.9c-.808.88-1.933,1.212-2.419.931-.522-.3-.317-1.6.675-2.532a12.884,12.884,0,0,1,1.9-1.417c.118-.072.292-.174.5-.3l.056-.031h0l.123-.077A3.493,3.493,0,0,1,7.33,23.9Zm5.881-4c-.281.685-.869,2.44-1.227,2.342-.307-.082-.5-1.412-.061-2.726a6.193,6.193,0,0,1,.956-1.754c.44-.491.926-.655,1.043-.455a9.062,9.062,0,0,1-.711,2.593Zm4.853,2.322c-.118.061-.23.1-.281.072-.036-.02.051-.1.051-.1s.609-.655.849-.951c.138-.174.3-.378.476-.609V20.7c0,.782-.757,1.309-1.094,1.524Zm3.744-.854c-.087-.061-.072-.266.22-.905a3.408,3.408,0,0,1,.834-1.074,1.448,1.448,0,0,1,.082.471,1.547,1.547,0,0,1-1.135,1.509Z",style:{fill:"#cd6799"}},null,-1)]))}const Oe=L(ze,[["render",Fe]]),Re={},qe={class:"w-10 lg:w-16",viewBox:"-4 0 264 264",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"};function He(x,t){return n(),o("svg",qe,t[0]||(t[0]=[e("g",null,[e("path",{d:"M255.855641,59.619717 C255.950565,59.9710596 256,60.3333149 256,60.6972536 L256,117.265345 C256,118.743206 255.209409,120.108149 253.927418,120.843385 L206.448786,148.178786 L206.448786,202.359798 C206.448786,203.834322 205.665123,205.195421 204.386515,205.937838 L105.27893,262.990563 C105.05208,263.119455 104.804608,263.201946 104.557135,263.289593 C104.464333,263.320527 104.376687,263.377239 104.278729,263.403017 C103.585929,263.58546 102.857701,263.58546 102.164901,263.403017 C102.051476,263.372083 101.948363,263.310215 101.840093,263.26897 C101.613244,263.186479 101.376082,263.1143 101.159544,262.990563 L2.07258227,205.937838 C0.7913718,205.201819 0,203.837372 0,202.359798 L0,32.6555248 C0,32.2843161 0.0515567729,31.9234187 0.144358964,31.5728326 C0.175293028,31.454252 0.24747251,31.3459828 0.288717928,31.2274022 C0.366053087,31.0108638 0.438232569,30.7891697 0.55165747,30.5880982 C0.628992629,30.4540506 0.742417529,30.3457814 0.83521972,30.2220451 C0.953800298,30.0570635 1.06206952,29.8869261 1.20127281,29.7425672 C1.31985339,29.6239866 1.4745237,29.5363401 1.60857131,29.4332265 C1.75808595,29.3094903 1.89213356,29.1754427 2.06227091,29.0774848 L2.06742659,29.0774848 L51.6134853,0.551122364 C52.8901903,-0.183535768 54.4613221,-0.183535768 55.7380271,0.551122364 L105.284086,29.0774848 L105.294397,29.0774848 C105.459379,29.1805983 105.598582,29.3094903 105.748097,29.4280708 C105.882144,29.5311844 106.031659,29.6239866 106.15024,29.7374115 C106.294599,29.8869261 106.397712,30.0570635 106.521448,30.2220451 C106.609095,30.3457814 106.727676,30.4540506 106.799855,30.5880982 C106.918436,30.7943253 106.985459,31.0108638 107.06795,31.2274022 C107.109196,31.3459828 107.181375,31.454252 107.212309,31.5779883 C107.307234,31.9293308 107.355765,32.2915861 107.356668,32.6555248 L107.356668,138.651094 L148.643332,114.878266 L148.643332,60.6920979 C148.643332,60.3312005 148.694889,59.9651474 148.787691,59.619717 C148.823781,59.4959808 148.890804,59.3877116 148.93205,59.269131 C149.014541,59.0525925 149.08672,58.8308984 149.200145,58.629827 C149.27748,58.4957794 149.390905,58.3875102 149.478552,58.2637739 C149.602288,58.0987922 149.705401,57.9286549 149.84976,57.7842959 C149.968341,57.6657153 150.117856,57.5780688 150.251903,57.4749553 C150.406573,57.351219 150.540621,57.2171714 150.705603,57.1192136 L150.710758,57.1192136 L200.261973,28.5928511 C201.538395,27.8571345 203.110093,27.8571345 204.386515,28.5928511 L253.932573,57.1192136 C254.107866,57.2223271 254.241914,57.351219 254.396584,57.4697996 C254.525476,57.5729132 254.674991,57.6657153 254.793572,57.7791402 C254.93793,57.9286549 255.041044,58.0987922 255.16478,58.2637739 C255.257582,58.3875102 255.371007,58.4957794 255.443187,58.629827 C255.561767,58.8308984 255.628791,59.0525925 255.711282,59.269131 C255.757683,59.3877116 255.824707,59.4959808 255.855641,59.619717 Z M247.740605,114.878266 L247.740605,67.8378666 L230.402062,77.8192579 L206.448786,91.6106946 L206.448786,138.651094 L247.745761,114.878266 L247.740605,114.878266 Z M198.194546,199.97272 L198.194546,152.901386 L174.633101,166.357704 L107.351512,204.757188 L107.351512,252.27191 L198.194546,199.97272 Z M8.25939501,39.7961379 L8.25939501,199.97272 L99.0921175,252.266755 L99.0921175,204.762344 L51.6392637,177.906421 L51.6237967,177.89611 L51.603174,177.885798 C51.443348,177.792996 51.3093004,177.658949 51.1597857,177.545524 C51.0308938,177.44241 50.8813791,177.359919 50.7679542,177.246494 L50.7576429,177.231027 C50.6235953,177.102135 50.5307931,176.942309 50.4173682,176.79795 C50.3142546,176.658747 50.1905184,176.540167 50.1080276,176.395808 L50.1028719,176.380341 C50.0100697,176.22567 49.9533572,176.040066 49.8863334,175.864773 C49.8193096,175.710103 49.7316631,175.565744 49.6904177,175.400762 L49.6904177,175.395606 C49.6388609,175.19969 49.6285496,174.993463 49.6079269,174.792392 C49.5873041,174.637722 49.5460587,174.483051 49.5460587,174.328381 L49.5460587,174.31807 L49.5460587,63.5689658 L25.5979377,49.7723734 L8.25939501,39.8012935 L8.25939501,39.7961379 Z M53.6809119,8.89300821 L12.3994039,32.6555248 L53.6706006,56.4180414 L94.9469529,32.6503692 L53.6706006,8.89300821 L53.6809119,8.89300821 Z M75.1491521,157.19091 L99.0972731,143.404629 L99.0972731,39.7961379 L81.7587304,49.7775291 L57.8054537,63.5689658 L57.8054537,167.177457 L75.1491521,157.19091 Z M202.324244,36.934737 L161.047891,60.6972536 L202.324244,84.4597702 L243.59544,60.6920979 L202.324244,36.934737 Z M198.194546,91.6106946 L174.24127,77.8192579 L156.902727,67.8378666 L156.902727,114.878266 L180.850848,128.664547 L198.194546,138.651094 L198.194546,91.6106946 Z M103.216659,197.616575 L163.759778,163.052915 L194.023603,145.781396 L152.778185,122.034346 L105.289242,149.374903 L62.0073307,174.292291 L103.216659,197.616575 Z",fill:"#FF2D20"})],-1)]))}const Ne=L(Re,[["render",He]]),Ue={},Ye={class:"w-10 lg:w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",preserveAspectRatio:"xMidYMid",fill:"#8cc84b"};function We(x,t){return n(),o("svg",Ye,t[0]||(t[0]=[e("path",{d:"M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"},null,-1)]))}const Ge=L(Ue,[["render",We]]),Je={class:"container grid gap-10 mx-auto content-center sm:px-5"},Ke={key:"experience",class:"grid lg:flex gap-8"},Qe={class:"lg:w-1/2"},Xe={key:0,style:{"transition-delay":"200ms"},class:"xs:text-xl sm:text-2xl font-bold"},e1={key:"frontEndChild",class:"xs:w-full sm:w-full content-center w-1/2 mt-4 grid gap-2"},t1={key:0,style:{"transition-delay":"400ms"},class:"flex gap-3"},s1={class:"p-2"},l1={key:1,style:{"transition-delay":"500ms"},class:"flex gap-3"},n1={class:"p-2"},o1={key:2,style:{"transition-delay":"600ms"},class:"flex gap-3"},a1={class:"p-2"},i1={key:3,style:{"transition-delay":"700ms"},class:"flex gap-3"},r1={class:"p-2"},c1={key:4,style:{"transition-delay":"800ms"},class:"flex gap-3"},d1={class:"p-2"},u1={class:"justify-items-center lg:w-1/2"},f1={key:0,style:{"transition-delay":"1000ms"},class:"xs:text-xl sm:text-2xl font-bold"},p1={key:"backEndChild",class:"xs:w-full sm:w-full content-center w-1/2 mt-2 grid gap-2"},m1={key:0,style:{"transition-delay":"1100ms"},class:"flex gap-3"},v1={class:"p-2"},x1={key:1,style:{"transition-delay":"1200ms"},class:"flex gap-3"},g1={class:"p-2"},y1={key:2,style:{"transition-delay":"1300ms"},class:"flex gap-3"},_1={class:"p-2"},w1={__name:"ExperienceView",setup(x){const t=g({frontEnd:!1,vue:!1,vuetify:!1,backEnd:!1,sass:!1,tailwind:!1,typescript:!1,laravel:!1,express:!1,expressTs:!1});return A(async()=>{t.value={frontEnd:!0,vue:!0,vuetify:!0,sass:!0,tailwind:!0,typescript:!0,backEnd:!0,laravel:!0,express:!0,expressTs:!0}}),(f,s)=>(n(),o("div",Je,[s[8]||(s[8]=e("p",{class:"text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold"},"My Experience",-1)),i(h,{name:"down-to-up",tag:"ul"},{default:w(()=>[e("div",Ke,[e("div",Qe,[i(h,{key:"frontEnd",name:"left-to-right",tag:"ul",class:"justify-items-center w-full"},{default:w(()=>[t.value.frontEnd?(n(),o("p",Xe,"Frontend Development")):d("",!0),e("div",e1,[i(h,{key:"frontEndTools",name:"left-to-right",tag:"ul"},{default:w(()=>[t.value.vue?(n(),o("div",t1,[e("div",s1,[i($e)]),s[0]||(s[0]=e("div",{class:"w-full content-center"},[e("div",{class:"flex justify-between text-slate-300"},[e("p",null,"Vue.js")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"91%"}})])],-1))])):d("",!0),t.value.vuetify?(n(),o("div",l1,[e("div",n1,[i(Ae)]),s[1]||(s[1]=e("div",{class:"w-full content-center"},[e("div",{class:"flex justify-between text-slate-300"},[e("p",null,"Vuetify")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"90%"}})])],-1))])):d("",!0),t.value.sass?(n(),o("div",o1,[e("div",a1,[i(Oe)]),s[2]||(s[2]=e("div",{class:"w-full content-center text-slate-300"},[e("div",{class:"flex justify-between"},[e("p",null,"Sass")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"84%"}})])],-1))])):d("",!0),t.value.tailwind?(n(),o("div",i1,[e("div",r1,[i(Be)]),s[3]||(s[3]=e("div",{class:"w-full content-center text-slate-300"},[e("div",{class:"flex justify-between"},[e("p",null,"Tailwind")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"82%"}})])],-1))])):d("",!0),t.value.typescript?(n(),o("div",c1,[e("div",d1,[i(q)]),s[4]||(s[4]=e("div",{class:"w-full content-center"},[e("div",{class:"flex justify-between text-slate-300"},[e("p",null,"Typescript")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"80%"}})])],-1))])):d("",!0)]),_:1})])]),_:1})]),e("div",u1,[i(h,{key:"backEnd",name:"right-to-left",tag:"ul",class:"justify-items-center w-full"},{default:w(()=>[t.value.backEnd?(n(),o("p",f1,"Backend Development")):d("",!0),e("div",p1,[i(h,{key:"backEndTools",name:"right-to-left",tag:"ul"},{default:w(()=>[t.value.laravel?(n(),o("div",m1,[e("div",v1,[i(Ne)]),s[5]||(s[5]=e("div",{class:"w-full content-center"},[e("div",{class:"flex justify-between text-slate-300"},[e("p",null,"Laravel")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"91%"}})])],-1))])):d("",!0),t.value.express?(n(),o("div",x1,[e("div",g1,[i(Ge)]),s[6]||(s[6]=e("div",{class:"w-full content-center"},[e("div",{class:"flex justify-between text-slate-300"},[e("p",null,"Express.js")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"90%"}})])],-1))])):d("",!0),t.value.expressTs?(n(),o("div",y1,[e("div",_1,[i(q)]),s[7]||(s[7]=e("div",{class:"w-full content-center"},[e("div",{class:"flex justify-between text-slate-300"},[e("p",null,"Express.ts")]),e("div",{class:"w-full rounded-full bg-gray-700"},[e("div",{class:"bg-green-500 xs:h-3 sm:h-4 rounded-full",style:{width:"80%"}})])],-1))])):d("",!0)]),_:1})])]),_:1})])])]),_:1})]))}},h1={class:"container grid gap-10 mx-auto content-center sm:px-5"},b1={class:"text-slate-900"},C1={key:1,style:{"transition-delay":"800ms"},class:"pt-10 w-full justify-items-center"},L1={__name:"ContactView",setup(x){const t=g({name:!1,email:!1,message:!1,button:!1});A(()=>{t.value={name:!0,email:!0,message:!0,button:!0}});const f=g(!1),s=Q({name:null,email:null,message:null});async function l(){const r="service_l7se67g",a="template_pnkt415",p="IdIk01FVZs1V_Vt1d";f.value=!0;let c="",y="",b=!1;try{if(s.name||(c+=`* Name is required.
`),s.email||(c+=`* Email is required.
`),s.email&&(/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(s.email)?b=!0:c+=`* Please provide a valid email address.
`),s.message||(c+=`* Message is required.
`),!s.name||!s.email||!s.message||!b)return f.value=!1,alert(c),!1;const m=ae.send(r,a,s,p);console.log("SUCCESS",m),y="Email sent successfully!",s.name=null,s.email=null,s.message=null}catch(m){console.error("FAILED...",m),y="Failed to send email, Please try again."}finally{setTimeout(()=>{f.value=!1,y&&alert(y)},1e3)}}return(r,a)=>{const p=k("CInput"),c=k("CTextarea"),y=k("CIcon"),b=k("CButton");return n(),o("div",h1,[a[5]||(a[5]=e("p",{class:"text-center text-green-500 xs:text-4xl text-5xl xl:text-6xl font-bold"},"Contact Me",-1)),e("div",b1,[i(h,{name:"down-to-up",tag:"ul"},{default:w(()=>[i(h,{key:"nameEmail",name:"down-to-up",tag:"ul",class:"lg:flex gap-8"},{default:w(()=>[t.value.name?(n(),I(p,{key:0,style:{"transition-delay":"200ms"},label:"Name *",type:"text",modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=m=>s.name=m)},null,8,["modelValue"])):d("",!0),t.value.email?(n(),I(p,{key:1,style:{"transition-delay":"400ms"},label:"Email *",placeholder:"example@email.com",type:"email",modelValue:s.email,"onUpdate:modelValue":a[1]||(a[1]=m=>s.email=m)},null,8,["modelValue"])):d("",!0)]),_:1}),t.value.message?(n(),I(c,{key:0,style:{"transition-delay":"600ms"},label:"Message *",modelValue:s.message,"onUpdate:modelValue":a[2]||(a[2]=m=>s.message=m)},null,8,["modelValue"])):d("",!0),t.value.button?(n(),o("div",C1,[i(b,{onClick:a[3]||(a[3]=m=>l()),loading:f.value,color:"green",class:"xs:w-full sm:w-full lg:w-1/4"},{default:w(()=>[i(y,{icon:"email"}),a[4]||(a[4]=V("Send "))]),_:1},8,["loading"])])):d("",!0)]),_:1})])])}}},k1={class:"sticky top-0 z-10 backdrop-blur-md bg-transparent border-b border-slate-800 border-opacity-20"},$1={class:"h-16 container mx-auto sm:px-5 flex justify-between items-center text-white"},E1={class:"font-bold text-3xl"},V1={key:0,class:"landz",style:{"transition-delay":"400ms"}},M1={key:1,class:"dev",style:{"transition-delay":"200ms"}},T1={class:"slide-to-left flex"},I1=["href","onClick"],j1={class:"xs:block md:hidden w-full"},A1={class:"h-full bg-transparent border-b border-slate-800 border-opacity-20"},D1={class:"relative flex flex-col"},S1=["href","onClick"],P1={id:"#home"},B1={class:"slide-up"},z1={id:"#about"},Z1={key:0,class:"slide-up"},F1={id:"#experience"},O1={key:0,class:"slide-up"},R1={id:"#contact"},q1={key:0,class:"slide-up"},H1={class:"w-full h-64 text-slate-400 content-center text-center bg-slate-800 grid gap-5"},N1={class:"flex justify-center gap-5"},U1={__name:"App",setup(x){const t=N(),{page:f,isObserverActive:s}=H(t),l=g(!1),r=g({landz:!1,dev:!1}),a=g([]),p=g([{id:"#home",name:"Home"},{id:"#about",name:"About"},{id:"#experience",name:"Experience"},{id:"#contact",name:"Contact"}]),c=g(!1),y=g(!1),b=g(!1),m=g(!1),T=g(!1),$=g(""),Y=g(!1);A(async()=>{window.scrollTo({top:0}),history.scrollRestoration="manual",W(),c.value=!0,setTimeout(()=>{a.value=p.value,r.value={landz:!0,dev:!0}},100),await new Promise(v=>setTimeout(v,250)),Y.value=!0});let D;X(()=>{D&&D.disconnect()}),ee(async()=>{f.value&&document.getElementById(f.value).scrollIntoView({block:"center",behavior:"smooth"}),await new Promise(v=>setTimeout(v,200)),f.value=""});async function Z(v){s.value=!1,$.value=v,v=="#home"?window.scrollTo({top:0,behavior:"smooth"}):document.getElementById(v).scrollIntoView({block:"center",behavior:"smooth"}),await new Promise(u=>setTimeout(u,450)),s.value=!0,await new Promise(u=>setTimeout(u,200)),v=="#about"&&(y.value=!0),v=="#experience"&&(b.value=!0),v=="#project"&&(m.value=!0),v=="#contact"&&(T.value=!0)}function W(){const v=document.querySelectorAll("section");D=new IntersectionObserver(u=>{u.forEach(async C=>{if(s.value&&C.isIntersecting){$.value=C.target.id,await new Promise(E=>setTimeout(E,200)),C.target.id=="#about"&&(y.value=!0),C.target.id=="#experience"&&(b.value=!0),C.target.id=="#contact"&&(T.value=!0);const _=document.createElement("a");_.href=C.target.id,_.click()}})},{threshold:.5}),v.forEach(u=>D.observe(u))}async function G(){s.value=!1,await new Promise(v=>setTimeout(v,450)),s.value=!0,location.reload()}function B(v){v=="facebook"?window.open("https://web.facebook.com/john.o.villanueva.jr","_blank"):v=="gmail"?window.location.href="mailto:landzzz.dev@gmail.com":v=="linkedin"&&window.open("https://linkedin.com/in/rolando-villanueva-1a194321a","_blank")}return(v,u)=>{const C=k("CIcon");return n(),o(z,null,[e("header",k1,[e("nav",$1,[e("div",E1,[i(h,{name:"left-to-right",tag:"ul",class:"flex"},{default:w(()=>[r.value.landz?(n(),o("span",V1,"Landz")):d("",!0),r.value.dev?(n(),o("span",M1,u[6]||(u[6]=[e("b",null,"Dev",-1)]))):d("",!0)]),_:1})]),e("div",T1,[i(h,{name:"right-to-left",tag:"ul",class:"flex"},{default:w(()=>[(n(!0),o(z,null,F(a.value,(_,E)=>(n(),o("a",{key:E,href:`${_.id}`,class:O([{"text-green-500":$.value==_.id},"p-3 duration-500 hover:text-green-500 xs:hidden md:block"]),style:se({transitionDelay:`${E*200}ms`}),onClick:J=>Z(_.id)},j(_.name),15,I1))),128))]),_:1}),e("div",j1,[i(C,{onClick:u[0]||(u[0]=_=>l.value=!l.value),icon:l.value?"close":"menu"},null,8,["icon"])])])])]),i(te,{name:"slide-fade"},{default:w(()=>[l.value?(n(),o("div",{key:0,onClick:u[1]||(u[1]=_=>l.value=!l.value),class:"xs:block md:hidden z-10 w-full backdrop-blur-md fixed"},[e("div",A1,[e("div",D1,[(n(!0),o(z,null,F(a.value,(_,E)=>(n(),o("a",{key:E,href:`${_.id}`,class:O([{"text-green-500":$.value==_.id},"p-3 px-6 duration-500 hover:text-green-500 flex"]),onClick:J=>Z(_.id)},j(_.name),11,S1))),128))])])])):d("",!0)]),_:1}),e("section",P1,[e("div",B1,[i(xe)])]),e("section",z1,[y.value?(n(),o("div",Z1,[i(be)])):d("",!0)]),e("section",F1,[b.value?(n(),o("div",O1,[i(w1)])):d("",!0)]),e("section",R1,[T.value?(n(),o("div",q1,[i(L1)])):d("",!0)]),e("div",H1,[e("p",{onClick:u[2]||(u[2]=_=>G()),class:"text-2xl font-bold hover:cursor-pointer"},u[7]||(u[7]=[e("span",{class:"hover:text-white duration-500"},"Rolando Villanueva",-1)])),e("p",N1,[i(C,{class:"hover:text-white duration-500",onClick:u[3]||(u[3]=_=>B("facebook")),icon:"facebook"}),i(C,{class:"hover:text-white duration-500",onClick:u[4]||(u[4]=_=>B("gmail")),icon:"gmail"}),i(C,{class:"hover:text-white duration-500",onClick:u[5]||(u[5]=_=>B("linkedin")),icon:"linkedin"})]),e("p",null,"Copyright © "+j(new Date().getFullYear())+" Landz. All Rights Reserved",1),u[8]||(u[8]=e("p",{class:"text-xs text-slate-600"},"Build with Vue 3.5 and Tailwind 3.4",-1))])],64)}}},Y1=L(U1,[["__scopeId","data-v-81f63944"]]),W1=oe(),G1=S({loader:()=>P(()=>import("./CButton-Dxklkbar.js"),__vite__mapDeps([0,1]))}),J1=S({loader:()=>P(()=>import("./CIcon-CqlttFMr.js"),__vite__mapDeps([2,1]))}),K1=S({loader:()=>P(()=>import("./CInput-CC2CB2dU.js"),__vite__mapDeps([3,1,4,5,6]))}),Q1=S({loader:()=>P(()=>import("./CTextarea-CY5r1vQT.js"),__vite__mapDeps([7,1]))}),M=le(Y1);M.component("CButton",G1);M.component("CIcon",J1);M.component("CInput",K1);M.component("CTextarea",Q1);M.use(W1);M.mount("#app");export{L as _};
