import{j as c,z as u,A as s,B as l,C as i,D as g,L as d,R as p,J as b}from"./@vue-DmcnfZN5.js";const h={key:0,class:"flex gap-1"},m={__name:"CButton",props:{block:Boolean,color:String,height:String,loading:Boolean},setup(r){const o=r,n=c(()=>{let e=[];return o.block&&(console.log(o.block),e.push("w-full")),o.loading&&e.push("bg-slate-700 text-white hover:bg-slate-700 hover:text-white"),o.color=="green"?e.push("bg-green-500 text-slate-900 hover:bg-green-600 duration-500"):o.color=="blue"?e.push("bg-blue-500 text-slate-900 hover:bg-blue-600 duration-500"):e.push("border-2 border-green-500 dark:text-green-500 hover:text-slate-900 hover:bg-green-500 duration-500"),e});return(e,t)=>{const a=u("CIcon");return s(),l("div",null,[i("button",{class:b([n.value,"h-10 w-full px-5 rounded-md flex gap-1 items-center justify-center"])},[o.loading?(s(),l("div",h,[g(a,{icon:"loading"}),t[0]||(t[0]=d("Processing... "))])):p(e.$slots,"default",{key:1})],2)])}}};export{m as default};