import{h as u,j as d,k as m,m as s,av as l,am as r,an as c,q as i,_ as p}from"./nav-6966c6fa.js";const f=["innerHTML"],k=["textContent"],v=["textContent"],y=u({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return d(m),(o,e)=>t.noteHtml?(i(),s("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=a=>o.$emit("click")),innerHTML:t.noteHtml},null,10,f)):t.note?(i(),s("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=a=>o.$emit("click"))},[r("p",{textContent:c(t.note)},null,8,k)],2)):(i(),s("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=a=>o.$emit("click"))},[r("p",{textContent:c(n.placeholder||"No notes.")},null,8,v)],2))}}),D=p(y,[["__file","/home/runner/work/DiffusER/DiffusER/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{D as N};
