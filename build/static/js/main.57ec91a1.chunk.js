(this["webpackJsonpwebpack-react-tutorial"]=this["webpackJsonpwebpack-react-tutorial"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),l=n.n(c),s=(n(50),n(3)),i=(n(51),n(8)),o=n(4),u=n(6),d=(n(52),n(1)),b=function(e){var t=e.qty,n=e.win,r=Object(a.useState)(new Array(t).fill(0)),c=Object(s.a)(r,1)[0],l=function(e){return e<n?"star win":"star"};return Object(d.jsx)("div",{className:"shadow-md rounded-md border-2 border-black pt-2",children:c&&c.map((function(e,t){return Object(d.jsx)("i",{className:l(t)},t)}))})},j=[{id:1,title:"Level 1",figure:"circle",answers:[{num:"3",den:"3"},{num:"1",den:"3"},{num:"2",den:"3"}],options:[{num:"1",den:"1"},{num:"1",den:"2"},{num:"1",den:"3"}],stars:3},{id:2,title:"Level 2",figure:"square",answers:[{num:"3",den:"3"},{num:"1",den:"2"},{num:"2",den:"2"}],options:[{num:"1",den:"1"},{num:"1",den:"2"},{num:"1",den:"3"}],stars:3},{id:3,title:"Level 3",figure:"triangle",stars:3,answers:[{num:"1",den:"2"},{num:"1",den:"4"},{num:"2",den:"3"}],options:[{num:"1",den:"4"},{num:"1",den:"2"},{num:"1",den:"3"}]},{id:4,title:"Level 4",figure:"square",stars:3},{id:5,title:"Level 5",figure:"pentagon",stars:3}],m=[{title:"Level 1",number:"1",stars:3},{title:"Level 2",number:"2",stars:3},{title:"Level 3",number:"3",stars:3},{title:"Level 4",number:"4",stars:3},{title:"Level 5",number:"5",stars:3}],f={edit:[{label:"Title: ",type:"text",placeholder:"",required:!0,name:"title"},{label:"Nivel: ",type:"text",placeholder:"",required:!0,name:"figure"},{label:"Nominador 1: ",type:"number",placeholder:"",required:!0,name:"num1"},{label:"Nominador 2: ",type:"number",placeholder:"",required:!0,name:"num2"},{label:"Nominador 3: ",type:"number",placeholder:"",required:!0,name:"num3"},{label:"Denominador 1: ",type:"number",placeholder:"",required:!0,name:"den1"},{label:"Denominador 2: ",type:"number",placeholder:"",required:!0,name:"den2"},{label:"Denominador 3: ",type:"number",placeholder:"",required:!0,name:"den3"},{label:"Opciones nominador 1: ",type:"number",placeholder:"",required:!0,name:"OPnum1"},{label:"Opciones nominador 2: ",type:"number",placeholder:"",required:!0,name:"OPnum2"},{label:"Opciones nominador 3: ",type:"number",placeholder:"",required:!0,name:"OPnum3"},{label:"Opciones denominador 1: ",type:"number",placeholder:"",required:!0,name:"OPden1"},{label:"Opciones denominador 2: ",type:"number",placeholder:"",required:!0,name:"OPden2"},{label:"Opciones denominador 3: ",type:"number",placeholder:"",required:!0,name:"OPden3"}]},p=n(21),h=n.n(p),O=r.a.createContext(void 0),x=function(e){var t=e.children,n=Object(a.useState)({levelsF:j,levelsN:m,actualLevel:{}}),r=Object(s.a)(n,2),c=r[0],l=r[1],i=function(e){var t=new FormData;return Object.keys(e).map((function(n){return t.append(n,e[n])})),t},o=function(){h.a.get("http://localhost:8080/CrudFracciones/GameInfo").then((function(e){var t=e.data;e.status;u({levelsF:t,levelsN:m,actualLevel:{}})})).catch((function(e){console.log("Hay ocurrido un problema, pero a\xfan puedes utilizar los niveles por default",e),u({levelsF:j,levelsN:m,actualLevel:{}})}))};Object(a.useEffect)((function(){o()}),[]);var u=function(e){l(e)},b=[{game:c},{setGame:u,createGame:function(e){var t=i(e);h()({method:"post",url:"http://localhost:8080/CrudFracciones/NuevoNivel",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data,n=e.status;o(),console.log(t,n)})).catch((function(e){console.log("Hay ocurrido un problema",e)}))},editGame:function(e,t){var n=i(e);h()({method:"post",url:"http://localhost:8080/CrudFracciones/UpdateLevel?id="+t,data:n,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data,n=e.status;o(),console.log(t,n)})).catch((function(e){console.log("Hay ocurrido un problema",e)}))},deleteGame:function(e){h()({method:"post",url:"http://localhost:8080/CrudFracciones/DeleteLevel?id="+e,data:{},headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data,n=e.status;o(),console.log(t,n)})).catch((function(e){console.log("Hay ocurrido un problema",e)}))}}];return Object(d.jsx)(O.Provider,{value:b,children:t})},v=function(){var e=Object(a.useContext)(O);if(void 0===e)throw new Error("usegame can only be used inside gameContext");return e},g=n(15),y=function(e){var t=e.id,n=e.title,a=e.figure,r=e.numberl,c=e.stars,l=e.answers,i=e.options,j=v(),m=Object(s.a)(j,2),f=m[0].game,p=m[1].setGame,h=Object(o.f)();return Object(d.jsxs)("div",{className:"shadow-lg rounded-md bg-gray-50 w-40 h-56 p-5 m-2",onClick:function(){p(Object(u.a)(Object(u.a)({},f),{},{actualLevel:{id:t,title:n,figure:a,numberl:r,stars:c,answers:l,options:i}})),h.push("/level")},children:[Object(d.jsx)("p",{className:"text-xl",children:n}),Object(d.jsx)("div",{className:"flex content-center justify-center",children:Object(d.jsx)("div",{className:"flex justify-center items-center bg-gray-50 w-24 h-28 text-xl",children:Object(d.jsx)("p",{children:a||r})})}),Object(d.jsx)("div",{children:Object(d.jsx)(b,{qty:c,win:2*Math.random()+1})})]})},w=function(){var e=v(),t=Object(s.a)(e,1)[0].game,n=t.levelsF;t.levelsN;return Object(d.jsx)("div",{className:"grid grid-rows-2 grid-flow-col",children:Object(d.jsx)("div",{className:"flex justify-around flex-wrap",children:n&&n.map((function(e){return Object(d.jsx)(y,{id:e.id,title:e.title,figure:e.figure,stars:e.stars,answers:e.answers,options:e.options},e.title)}))})})},N=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"text-gray-900",children:"Choose Your Level"}),Object(d.jsx)(w,{}),Object(d.jsx)(i.b,{to:"/level/new",children:Object(d.jsx)("p",{className:"text-base",children:"Crear un nuevo nivel"})})]})},I=function(e){var t=e.num,n=e.deno;return Object(d.jsxs)("div",{className:"w-10 flex flex-col justify-center text-4xl p-2",children:[Object(d.jsx)("p",{className:"ring-offset-4\tborder-gray-700 border-b-4",children:t}),Object(d.jsx)("p",{children:n})]})},C=n(14),k=n(87),L=n(86),S=(n(79),function(e){var t=e.c,n=e.b,r=(e.type,e.id),c=e.cantidad,l=e.cantidadColoreada,i=Object(a.useRef)(null),o=Object(L.a)((function(){return{type:"figure",item:{name:r},end:function(e,t){t.getDropResult()},collect:function(e){return{isDragging:e.isDragging(),handlerId:e.getHandlerId()}}}})),u=Object(s.a)(o,2),b=(u[0].isDragging,u[1]),j=function(e){return e*Math.PI/180},m=function(e,t){return Math.floor(Math.random()*e)};return Object(a.useEffect)((function(){var e=i.current.getContext("2d");!function(e,a,r,c){e.fillStyle=t||"#e7de98",e.strokeStyle=n||"#000000",e.lineWidth=1,e.beginPath(),e.arc(a,r,c,0,j(360)),e.fill(),e.stroke(),e.closePath()}(e,42,42,40),c&&function(e,t,n,a){for(var r=0;r<c;r++){e.fillStyle=r<l?"#"+m(9)+m(9)+m(9):"#ffffff",e.beginPath(),e.moveTo(t,n);var s=360/c,i=s*r;e.arc(t,n,a,j(i),j(i+s)),e.fill(),e.stroke(),e.closePath()}}(e,42,42,40)})),Object(d.jsx)("div",{ref:b,children:Object(d.jsx)("canvas",{ref:i,width:"84",height:"84"})})}),F=function(e){var t=e.id,n=e.setW,r=e.name,c=v(),l=Object(s.a)(c,1)[0].game,i=Object(a.useState)(!1),o=Object(s.a)(i,2),u=o[0],b=o[1],j=Object(a.useState)(!1),m=Object(s.a)(j,2),f=m[0],p=m[1],h=Object(k.a)((function(){return{accept:"answer",drop:function(e,n,a){return p(!f),{name:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),O=Object(s.a)(h,2),x=O[0],g=x.canDrop,y=x.isOver,w=O[1];Object(a.useEffect)((function(){if(f){var e=l.currentAnswer,n=t.split("-"),a=Object(s.a)(n,2),r=a[0],c=a[1];parseInt(e.num)/parseInt(e.den)===parseInt(c)/parseInt(r)&&b(!0)}}),[f]),Object(a.useEffect)((function(){u&&n(Object(C.a)({},r,!0))}),[u]);var N=g&&y;return Object(d.jsx)("div",{ref:w,className:"w-20 h-24 rounded-md border-2 ".concat(N?"bg-gray":"bg-white"," border-gray-600 m-1"),children:u?Object(d.jsx)(S,{cantidad:t.split("-")[0],cantidadColoreada:t.split("-")[1],id:t.split("-")[0]+"-"+t.split("-")[1]+"-option"},t.split("-")[0]+"-"+t.split("-")[1]+"-option"):""})},D=function(e){var t=e.answers,n=e.answer,r=Object(o.f)(),c=Object(a.useState)({"answ-0":!1,"answ-1":!1,"answ-2":!1}),l=Object(s.a)(c,2),i=l[0],b=l[1],j=function(e){b(Object(u.a)(Object(u.a)({},i),e))};return Object(a.useEffect)((function(){i&&Object.values(i).every((function(e){return!0===e}))&&setTimeout((function(){alert("Ganaste :D"),b({"answ-0":!1,"answ-1":!1,"answ-2":!1}),r.push("/")}),300)}),[i]),Object(d.jsx)("div",{className:"flex flex-col items-start",children:t&&t.map((function(e,t){return Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)(F,{setW:j,answer:n,name:"answ-"+t,id:e.den+"-"+e.num+"-option"},"answ"+t),Object(d.jsx)(I,{num:e.num,deno:e.den},"frac"+t)]},e+t)}))})},q=function(e){e.children;var t=v(),n=Object(s.a)(t,2),r=n[0].game,c=n[1].setGame,l=Object(a.useState)({}),i=Object(s.a)(l,2),o=i[0],b=i[1],j=Object(a.useState)(0),m=Object(s.a)(j,2),f=m[0],p=m[1],h=Object(a.useState)(0),O=Object(s.a)(h,2),x=O[0],y=O[1],w=Object(a.useState)(0),N=Object(s.a)(w,2),I=N[0],S=N[1],F=Object(a.useState)(null),D=Object(s.a)(F,2),q=D[0],P=D[1],E=Object(a.useRef)(null),G=Object(L.a)((function(){return{type:"answer",accept:"figure",item:{name:"container-box"},end:function(e,t){var n=t.getDropResult();e&&n&&console.log(e,n)},collect:function(e){return{isDragging:e.isDragging(),handlerId:e.getHandlerId()}}}})),T=Object(s.a)(G,2),M=T[0].isDragging,A=T[1],B=Object(k.a)((function(){return{accept:"figure",drop:function(e){return J(e),{name:f+"-"+x}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),H=Object(s.a)(B,2),R=H[0],W=(R.canDrop,R.isOver,H[1]),J=function(e){P(e)},V=function(e){return e*Math.PI/180},z=function(e){e.fillStyle="#FFFFFF",e.strokeStyle="#000000",e.lineWidth=1,e.beginPath(),e.arc(42,42,40,0,V(360)),e.fill(),e.stroke(),e.closePath()},U=function(e,t){return Math.floor(Math.random()*e)};Object(a.useEffect)((function(){var e=E.current.getContext("2d");z(e)}),[]),Object(a.useEffect)((function(){if(q){var e=q.name.split("-"),t=Object(s.a)(e,2),n=t[0],a=t[1],l=parseInt(n),i=parseInt(a),d=f*l+i*x,j=x*l;(0===x?i/l:d/j)<=1&&(b(Object(u.a)(Object(u.a)({},o),{},Object(C.a)({},I,{den:l,num:i}))),S((function(){return I+1})),0===x&&(d=i,j=l),p(d),y(j),c(Object(u.a)(Object(u.a)({},r),{},{currentAnswer:{num:d,den:j}})),P(null))}}),[q]),Object(a.useEffect)((function(){o&&I>0&&function(e){var t=0;for(var n in o){var a=parseInt(n),r=o[a];e.fillStyle="#"+U(9)+U(9)+U(9),e.beginPath(),e.moveTo(42,42);var c=360/r.den;r.num,e.arc(42,42,40,V(t),V(t+c)),e.fill(),e.stroke(),e.closePath(),t+=c}}(E.current.getContext("2d"))}),[I]);var Y=M?0:1;return Object(d.jsxs)("div",{ref:W,className:"flex flex-col items-end",children:[Object(d.jsx)("div",{ref:A,role:"Box",className:"bg-white w-18 h-18 border border-black rounded-full pt-0 mt-0",style:{opacity:Y},children:Object(d.jsx)("canvas",{ref:E,width:"84",height:"84"})}),Object(d.jsx)(g.d,{onClick:function(){var e=E.current.getContext("2d");z(e),b({}),p(0),y(0),S(0),P(null)},className:"h-10 w-10 full-fill text-gray-900"})]})},P=function(e){var t=e.options;return Object(d.jsx)("div",{className:"w-3/5 h-32 rounded-md border-2 bg-white border-gray-600 flex content-evenly items-center justify-evenly m-5",children:t&&t.map((function(e){return Object(d.jsx)(S,{cantidad:e.den,cantidadColoreada:e.num,id:e.den+"-"+e.num+"-option"},e.den+"-"+e.num+"-option")}))})},E=function(e){var t=e.path,n=e.children;return Object(d.jsx)(i.b,{to:t,children:Object(d.jsx)("div",{className:"m-3 w-12 h-12 bg-yellow-300 rounded-md shadow-lg border-black border-2",children:n})})},G=function(){return Object(d.jsxs)("div",{className:"flex flex-col items-end",children:[Object(d.jsx)(E,{path:"/",children:Object(d.jsx)(g.a,{className:"h-10 w-10 text-gray-900"})}),Object(d.jsx)(E,{path:"/",children:Object(d.jsx)(g.c,{className:"h-10 w-10 text-gray-900"})})]})},T=function(e){e.id;var t=e.title,n=(e.figure,e.options),a=e.answers;return Object(d.jsxs)("div",{className:"flex w-screen px-5",children:[Object(d.jsx)("div",{className:"w-2/12 pl-5",children:Object(d.jsx)(G,{})}),Object(d.jsxs)("div",{className:"w-5/6",children:[Object(d.jsx)("p",{className:"",children:t}),Object(d.jsxs)("div",{className:"flex flex-wrap",children:[Object(d.jsx)("div",{className:"min-w-full h-72 my-5 flex items-center\tjustify-center",children:Object(d.jsx)(q,{})}),Object(d.jsx)("div",{className:"min-w-full h-36 my-5 flex items-center\tjustify-center",children:Object(d.jsx)(P,{options:n})})]})]}),Object(d.jsx)("div",{className:"w-3/12 pr-5",children:Object(d.jsx)(D,{answers:a})})]})},M=function(){var e=Object(o.f)(),t=v(),n=Object(s.a)(t,2),a=n[0].game,r=n[1].deleteGame;return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{title:a.actualLevel.title,figure:a.actualLevel.figure,answers:a.actualLevel.answers,options:a.actualLevel.options}),Object(d.jsx)("div",{className:"flex content-center justify-center",children:Object(d.jsxs)("div",{className:"flex justify-center items-center bg-gray-50 w-24 h-28 text-xl",children:[Object(d.jsx)(i.b,{to:"/edit/"+a.actualLevel.id,children:Object(d.jsx)(g.b,{className:"h-10 w-10 fill-current text-gray-600"})}),Object(d.jsx)(g.e,{onClick:function(){return window.confirm("\xbfSeguro que quieres borrar el nivel?")&&r(a.actualLevel.id),void e.push("/")},className:"h-10 w-10 fill-current text-red-600"})]})})]})};function A(e){var t=e.click,n=void 0===t?function(){}:t,a=e.styling,r=e.type,c=e.text;return Object(d.jsx)("button",{onClick:n,type:r,className:"".concat(a),children:c})}var B=function(e){var t=e.label,n=e.type,a=e.placeholder,r=e.change,c=e.value,l=e.required,s=e.name,i=e.stylingI,o=e.styleInput;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:i,children:[Object(d.jsx)("label",{className:"block text-sm text-gray-600",children:t}),Object(d.jsx)("input",{name:s,id:s,type:n,onChange:r,value:c,className:o,placeholder:a,required:l}),Object(d.jsx)("p",{className:"help-block text-danger"})]})})};function H(e){var t=e.submit,n=e.inputsData,r=e.textBtn,c=e.children,l=e.styling,i=e.stylingF,o=e.stylingI,b=e.styleInput,j=function(e,t){var n=Object(a.useState)(t),r=Object(s.a)(n,2),c=r[0],l=r[1];return{inputs:c,handleInputs:function(e){console.log("Inputs",c),console.log("Event",e.target.value),console.log("Event",e.target.id),l(Object(u.a)(Object(u.a)({},c),{},Object(C.a)({},e.target.id,e.target.value))),console.log("Inputs",c)},handleSubmit:function(t){t.preventDefault(),e(c)},handlePhotos:function(e,t){console.log("Inputs",c),console.log("Event",t),console.log("Event",e),l(Object(u.a)(Object(u.a)({},c),{},Object(C.a)({},t,e))),console.log("Inputs",c)}}}(t,{}),m=j.inputs,f=j.handleSubmit,p=j.handleInputs;return Object(d.jsxs)("form",{onSubmit:f,className:"container",children:[Object(d.jsxs)("div",{className:i||"max-w-xl m-4 p-10 bg-white rounded shadow-xl",children:[n?n.map((function(e,t){return Object(d.jsx)(B,{label:e.label,type:e.type,placeholder:e.placeholder,change:p,value:m[e.value],required:e.required,name:e.name,stylingI:o,styleInput:b},e.name)})):"",c]}),Object(d.jsx)(A,{type:"submit",styling:l,text:r})]})}var R=function(){var e=v(),t=Object(s.a)(e,2),n=(t[0].game,t[1].editGame);return Object(d.jsxs)("div",{className:"overflow-auto",children:[Object(d.jsx)("p",{className:"h1",children:"Editar nivel"}),Object(d.jsx)(H,{submit:function(e){n(e)},styling:"px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded",textBtn:"Siguiente",stylingI:"inline-block mt-2 w-1/2 pr-1",styleInput:"w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",inputsData:f.edit}),Object(d.jsx)(i.b,{to:"/",children:"Volver"})]})},W=function(e){var t=e.children;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"layout",children:t}),Object(d.jsxs)("div",{className:"footer bg-black min-h-full text-gray-100 flex flex-wrap justify-between p-3",children:[Object(d.jsx)("p",{children:"FRACTIONS"}),Object(d.jsx)("p",{children:"TECNOLOG\xcdAS PARA LA WEB: 2CM15"})]})]})},J=n(85),V=n(44),z=function(){var e=Object(o.f)(),t=v(),n=Object(s.a)(t,2),a=(n[0].game,n[1].createGame);return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"h1",children:"Nuevo nivel"}),Object(d.jsx)(H,{submit:function(t){a(t),e.push("/")},styling:"px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded",textBtn:"Siguiente",stylingI:"inline-block mt-2 w-1/2 pr-1",styleInput:"w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",inputsData:f.edit}),Object(d.jsx)(i.b,{to:"/",children:"Volver"})]})};var U=function(){var e=Object(a.useState)({name:"Mali",levels:[{k:1,s:2,t:"F"},{k:1,s:2,t:"F"},{k:1,s:2,t:"N"}]});return Object(s.a)(e,1)[0],Object(d.jsx)(x,{children:Object(d.jsx)(i.a,{basename:"CrudFracciones",children:Object(d.jsx)(W,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/level",children:Object(d.jsx)(J.a,{debugMode:!0,backend:V.a,children:Object(d.jsx)(M,{})})}),Object(d.jsx)(o.a,{exact:!0,path:"/edit/:id",children:Object(d.jsx)(R,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/level/new",children:Object(d.jsx)(z,{})})]})})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)}))},K=document.getElementById("root");K&&l.a.render(Object(d.jsx)(U,{}),K),Y()}},[[80,1,2]]]);
//# sourceMappingURL=main.57ec91a1.chunk.js.map