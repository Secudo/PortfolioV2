"use strict";(globalThis["webpackChunkportfolio"]=globalThis["webpackChunkportfolio"]||[]).push([[621],{621:(a,e,l)=>{l.r(e),l.d(e,{default:()=>z});var n=l(9835);const o={class:"q-pa-md q-gutter-sm q-ml-md",style:{"font-family":"Prata"}},t=(0,n._)("div",{class:"text-h3 q-ml-md q-mb-lg"},"QTree API:",-1),d=(0,n._)("div",{class:"text-h3 q-ml-md q-mb-lg"},"Evolution:",-1);function r(a,e,l,r,s,p){const b=(0,n.up)("BackButton"),c=(0,n.up)("q-tree",!0),i=(0,n.up)("q-card-section"),m=(0,n.up)("q-card");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(b),(0,n._)("div",o,[t,(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"bg-blue-2"},{default:(0,n.w5)((()=>[d,(0,n.Wm)(c,{nodes:r.lazy,"default-expand-all":"","node-key":"label",onLazyLoad:r.onLazyLoad},null,8,["nodes","onLazyLoad"])])),_:1})])),_:1})])],64)}var s=l(499),p=l(6941);const b=[{label:"Evee",avatar:"https://i.pinimg.com/originals/6b/38/db/6b38dbc82c1d7dc2fdd587cb103b5334.jpg",children:[{label:"Flareon",avatar:"https://www.freeiconspng.com/thumbs/flareon-png/flareon-png-5.png",lazy:!0},{label:"Vaporeon",avatar:"https://www.pinpng.com/pngs/m/166-1669891_all-thse-years-ive-been-wrong-pokemon-vaporeon.png",lazy:!0}]},{label:"Node 2",lazy:!0},{label:"Lazy load empty",lazy:!0},{label:"Node is not expandable",expandable:!1,children:[{label:"Some node"}]}],c={setup(){return{lazy:(0,s.iH)(b),onLazyLoad({node:a,key:e,done:l,fail:n}){setTimeout((()=>{if(e.indexOf("Lazy load empty")>-1)return void l([]);const n=a.label;l([{label:`${n}.1`},{label:`${n}.2`,lazy:!0},{label:`${n}.3`,children:[{label:`${n}.3.1`,lazy:!0},{label:`${n}.3.2`,lazy:!0}]}])}),1e3)}}},components:{BackButton:p.Z}};var i=l(1639),m=l(4458),u=l(3190),y=l(4749),g=l(9984),f=l.n(g);const h=(0,i.Z)(c,[["render",r]]),z=h;f()(c,"components",{QCard:m.Z,QCardSection:u.Z,QTree:y.Z})}}]);