(this["webpackJsonpwebpack-react-tutorial"]=this["webpackJsonpwebpack-react-tutorial"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(42),s=n.n(c),l=(n(52),n(53),n(7)),i=n(4),o=n(3),u=n(6),d=(n(54),n(1)),j=function(e){var t=e.qty,n=e.win,a=Object(r.useState)(new Array(t).fill(0)),c=Object(o.a)(a,1)[0],s=function(e){return e<n?"star win":"star"};return Object(d.jsx)("div",{className:"shadow-md rounded-md border-2 border-black pt-2",children:c&&c.map((function(e,t){return Object(d.jsx)("i",{className:s(t)},t)}))})},b=[{id:1,title:"Level 1",figure:"circle",answers:[{num:"3",den:"3"},{num:"1",den:"3"},{num:"2",den:"3"}],options:[{num:"1",den:"1"},{num:"1",den:"2"},{num:"1",den:"3"}],stars:3},{id:2,title:"Level 2",figure:"square",answers:[{num:"3",den:"3"},{num:"1",den:"2"},{num:"2",den:"2"}],options:[{num:"1",den:"1"},{num:"1",den:"2"},{num:"1",den:"3"}],stars:3},{id:3,title:"Level 3",figure:"triangle",stars:3,answers:[{num:"1",den:"2"},{num:"1",den:"4"},{num:"2",den:"3"}],options:[{num:"1",den:"4"},{num:"1",den:"2"},{num:"1",den:"3"}]},{id:4,title:"Level 4",figure:"square",stars:3},{id:5,title:"Level 5",figure:"pentagon",stars:3}],m=[{title:"Level 1",number:"1",stars:3},{title:"Level 2",number:"2",stars:3},{title:"Level 3",number:"3",stars:3},{title:"Level 4",number:"4",stars:3},{title:"Level 5",number:"5",stars:3}],p={edit:[{label:"Title: ",type:"text",placeholder:"",required:!0,name:"title"},{label:"Nivel: ",type:"text",placeholder:"",required:!0,name:"figure"},{label:"Nominador 1: ",type:"number",placeholder:"",required:!0,name:"num1"},{label:"Nominador 2: ",type:"number",placeholder:"",required:!0,name:"num2"},{label:"Nominador 3: ",type:"number",placeholder:"",required:!0,name:"num3"},{label:"Denominador 1: ",type:"number",placeholder:"",required:!0,name:"den1"},{label:"Denominador 2: ",type:"number",placeholder:"",required:!0,name:"den2"},{label:"Denominador 3: ",type:"number",placeholder:"",required:!0,name:"den3"},{label:"Opciones nominador 1: ",type:"number",placeholder:"",required:!0,name:"OPnum1"},{label:"Opciones nominador 2: ",type:"number",placeholder:"",required:!0,name:"OPnum2"},{label:"Opciones nominador 3: ",type:"number",placeholder:"",required:!0,name:"OPnum3"},{label:"Opciones denominador 1: ",type:"number",placeholder:"",required:!0,name:"OPden1"},{label:"Opciones denominador 2: ",type:"number",placeholder:"",required:!0,name:"OPden2"},{label:"Opciones denominador 3: ",type:"number",placeholder:"",required:!0,name:"OPden3"},{label:"Archivo: ",type:"file",placeholder:"",required:!0,name:"file"}],login:[{label:"Email: ",type:"text",placeholder:"",required:!0,name:"email"},{label:"Pasword: ",type:"password",placeholder:"",required:!0,name:"password"}]},f=n(16),h=n.n(f),O=a.a.createContext(void 0),x=function(e){var t=e.children,n=Object(r.useState)({levelsF:b,levelsN:m,actualLevel:{}}),a=Object(o.a)(n,2),c=a[0],s=a[1],l=function(e){var t=new FormData;return Object.keys(e).map((function(n){return t.append(n,e[n])})),t},i=function(){h.a.get("http://localhost:8080/CrudFracciones/GameInfo").then((function(e){var t=e.data;e.status;u({levelsF:t,levelsN:m,actualLevel:{}})})).catch((function(e){console.log("Hay ocurrido un problema, pero a\xfan puedes utilizar los niveles por default",e),u({levelsF:b,levelsN:m,actualLevel:{}})}))};Object(r.useEffect)((function(){i()}),[]);var u=function(e){s(e)},j=[{game:c},{setGame:u,createGame:function(e){var t=l(e);h()({method:"post",url:"http://localhost:8080/CrudFracciones/NuevoNivel",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data,n=e.status;i(),console.log(t,n)})).catch((function(e){console.log("Hay ocurrido un problema",e)}))},editGame:function(e,t){var n=l(e);h()({method:"post",url:"http://localhost:8080/CrudFracciones/UpdateLevel?id="+t,data:n,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data,n=e.status;i(),console.log(t,n)})).catch((function(e){console.log("Hay ocurrido un problema",e)}))},deleteGame:function(e){h()({method:"post",url:"http://localhost:8080/CrudFracciones/DeleteLevel?id="+e,data:{},headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data,n=e.status;i(),console.log(t,n)})).catch((function(e){console.log("Hay ocurrido un problema",e)}))}}];return Object(d.jsx)(O.Provider,{value:j,children:t})},g=function(){var e=Object(r.useContext)(O);if(void 0===e)throw new Error("usegame can only be used inside gameContext");return e},v=n(15),y=function(e){var t,n,r=e.id,a=e.title,c=e.figure,s=e.numberl,l=e.stars,b=e.answers,m=e.options,p=e.type,f=e.file,h=g(),O=Object(o.a)(h,2),x=O[0].game,v=O[1].setGame,y=Object(i.f)();return Object(d.jsxs)("div",{className:"shadow-lg rounded-md bg-gray-50 w-40 h-56 p-5 m-2",onClick:function(){v(Object(u.a)(Object(u.a)({},x),{},{actualLevel:{id:r,title:a,figure:c,numberl:s,stars:l,answers:b,options:m}})),y.push("/level")},children:[Object(d.jsx)("p",{className:"text-xl",children:a}),Object(d.jsx)("div",{className:"flex content-center justify-center",children:Object(d.jsxs)("div",{className:"flex justify-center items-center bg-gray-50 w-24 h-28 text-xl",children:[Object(d.jsx)("p",{children:c||s}),Object(d.jsx)("div",{children:(t=p,n=f,"png"===t||"jpg"===t||"PNG"===t||"JPG"===t?Object(d.jsx)("img",{alt:"f",src:n}):"mp4"===t?Object(d.jsxs)("video",{width:"100",height:"100",controls:!0,children:[Object(d.jsx)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]}):"mp3"===t?Object(d.jsxs)("audio",{width:"50",height:"50",controls:!0,children:[Object(d.jsx)("source",{src:n,type:"audio/mpeg"}),"Your browser does not support the video tag."]}):Object(d.jsxs)("p",{children:[Object(d.jsx)("p",{children:t}),Object(d.jsx)("p",{children:n}),Object(d.jsx)("div",{children:"Hay un problema con la carga de tu contenido"})]}))})]})}),Object(d.jsx)("div",{children:Object(d.jsx)(j,{qty:l,win:2*Math.random()+1})})]})},w=function(){var e=g(),t=Object(o.a)(e,1)[0].game,n=t.levelsF;t.levelsN;return Object(d.jsx)("div",{className:"grid grid-rows-2 grid-flow-col",children:Object(d.jsx)("div",{className:"flex justify-around flex-wrap",children:n&&n.map((function(e){return Object(d.jsx)(y,{id:e.id,title:e.title,figure:e.figure,stars:e.stars,answers:e.answers,options:e.options,type:e.tipoArchivo,file:e.archivo},e.title)}))})})};function N(e){var t=e.click,n=void 0===t?function(){}:t,r=e.styling,a=e.type,c=e.text;return Object(d.jsx)("button",{onClick:n,type:a,className:"".concat(r),children:c})}var I=function(){var e=Object(i.f)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"text-gray-900",children:"Choose Your Level"}),Object(d.jsx)(w,{}),Object(d.jsx)(l.b,{to:"/level/new",children:Object(d.jsx)("p",{className:"text-base",children:"Crear un nuevo nivel"})}),Object(d.jsx)(N,{click:function(){window.sessionStorage.removeItem("user"),e.push("/")},text:"Cerrar sesi\xf3n"})]})},C=function(e){var t=e.num,n=e.deno;return Object(d.jsxs)("div",{className:"w-10 flex flex-col justify-center text-4xl p-2",children:[Object(d.jsx)("p",{className:"ring-offset-4\tborder-gray-700 border-b-4",children:t}),Object(d.jsx)("p",{children:n})]})},S=n(13),k=n(90),q=n(89),L=(n(81),function(e){var t=e.c,n=e.b,a=(e.type,e.id),c=e.cantidad,s=e.cantidadColoreada,l=Object(r.useRef)(null),i=Object(q.a)((function(){return{type:"figure",item:{name:a},end:function(e,t){t.getDropResult()},collect:function(e){return{isDragging:e.isDragging(),handlerId:e.getHandlerId()}}}})),u=Object(o.a)(i,2),j=(u[0].isDragging,u[1]),b=function(e){return e*Math.PI/180},m=function(e,t){return Math.floor(Math.random()*e)};return Object(r.useEffect)((function(){var e=l.current.getContext("2d");!function(e,r,a,c){e.fillStyle=t||"#e7de98",e.strokeStyle=n||"#000000",e.lineWidth=1,e.beginPath(),e.arc(r,a,c,0,b(360)),e.fill(),e.stroke(),e.closePath()}(e,42,42,40),c&&function(e,t,n,r){for(var a=0;a<c;a++){e.fillStyle=a<s?"#"+m(9)+m(9)+m(9):"#ffffff",e.beginPath(),e.moveTo(t,n);var l=360/c,i=l*a;e.arc(t,n,r,b(i),b(i+l)),e.fill(),e.stroke(),e.closePath()}}(e,42,42,40)})),Object(d.jsx)("div",{ref:j,children:Object(d.jsx)("canvas",{ref:l,width:"84",height:"84"})})}),D=function(e){var t=e.id,n=e.setW,a=e.name,c=g(),s=Object(o.a)(c,1)[0].game,l=Object(r.useState)(!1),i=Object(o.a)(l,2),u=i[0],j=i[1],b=Object(r.useState)(!1),m=Object(o.a)(b,2),p=m[0],f=m[1],h=Object(k.a)((function(){return{accept:"answer",drop:function(e,n,r){return f(!p),{name:t}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),O=Object(o.a)(h,2),x=O[0],v=x.canDrop,y=x.isOver,w=O[1];Object(r.useEffect)((function(){if(p){var e=s.currentAnswer,n=t.split("-"),r=Object(o.a)(n,2),a=r[0],c=r[1];parseInt(e.num)/parseInt(e.den)===parseInt(c)/parseInt(a)&&j(!0)}}),[p]),Object(r.useEffect)((function(){u&&n(Object(S.a)({},a,!0))}),[u]);var N=v&&y;return Object(d.jsx)("div",{ref:w,className:"w-20 h-24 rounded-md border-2 ".concat(N?"bg-gray":"bg-white"," border-gray-600 m-1"),children:u?Object(d.jsx)(L,{cantidad:t.split("-")[0],cantidadColoreada:t.split("-")[1],id:t.split("-")[0]+"-"+t.split("-")[1]+"-option"},t.split("-")[0]+"-"+t.split("-")[1]+"-option"):""})},F=function(e){var t=e.answers,n=e.answer,a=Object(i.f)(),c=Object(r.useState)({"answ-0":!1,"answ-1":!1,"answ-2":!1}),s=Object(o.a)(c,2),l=s[0],j=s[1],b=function(e){j(Object(u.a)(Object(u.a)({},l),e))};return Object(r.useEffect)((function(){l&&Object.values(l).every((function(e){return!0===e}))&&setTimeout((function(){alert("Ganaste :D"),j({"answ-0":!1,"answ-1":!1,"answ-2":!1}),a.push("/")}),300)}),[l]),Object(d.jsx)("div",{className:"flex flex-col items-start",children:t&&t.map((function(e,t){return Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)(D,{setW:b,answer:n,name:"answ-"+t,id:e.den+"-"+e.num+"-option"},"answ"+t),Object(d.jsx)(C,{num:e.num,deno:e.den},"frac"+t)]},e+t)}))})},P=function(e){e.children;var t=g(),n=Object(o.a)(t,2),a=n[0].game,c=n[1].setGame,s=Object(r.useState)({}),l=Object(o.a)(s,2),i=l[0],j=l[1],b=Object(r.useState)(0),m=Object(o.a)(b,2),p=m[0],f=m[1],h=Object(r.useState)(0),O=Object(o.a)(h,2),x=O[0],y=O[1],w=Object(r.useState)(0),N=Object(o.a)(w,2),I=N[0],C=N[1],L=Object(r.useState)(null),D=Object(o.a)(L,2),F=D[0],P=D[1],E=Object(r.useRef)(null),G=Object(q.a)((function(){return{type:"answer",accept:"figure",item:{name:"container-box"},end:function(e,t){var n=t.getDropResult();e&&n&&console.log(e,n)},collect:function(e){return{isDragging:e.isDragging(),handlerId:e.getHandlerId()}}}})),A=Object(o.a)(G,2),T=A[0].isDragging,R=A[1],M=Object(k.a)((function(){return{accept:"figure",drop:function(e){return W(e),{name:p+"-"+x}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}})),B=Object(o.a)(M,2),H=B[0],U=(H.canDrop,H.isOver,B[1]),W=function(e){P(e)},J=function(e){return e*Math.PI/180},V=function(e){e.fillStyle="#FFFFFF",e.strokeStyle="#000000",e.lineWidth=1,e.beginPath(),e.arc(42,42,40,0,J(360)),e.fill(),e.stroke(),e.closePath()},Y=function(e,t){return Math.floor(Math.random()*e)};Object(r.useEffect)((function(){var e=E.current.getContext("2d");V(e)}),[]),Object(r.useEffect)((function(){if(F){var e=F.name.split("-"),t=Object(o.a)(e,2),n=t[0],r=t[1],s=parseInt(n),l=parseInt(r),d=p*s+l*x,b=x*s;(0===x?l/s:d/b)<=1&&(j(Object(u.a)(Object(u.a)({},i),{},Object(S.a)({},I,{den:s,num:l}))),C((function(){return I+1})),0===x&&(d=l,b=s),f(d),y(b),c(Object(u.a)(Object(u.a)({},a),{},{currentAnswer:{num:d,den:b}})),P(null))}}),[F]),Object(r.useEffect)((function(){i&&I>0&&function(e){var t=0;for(var n in i){var r=parseInt(n),a=i[r];e.fillStyle="#"+Y(9)+Y(9)+Y(9),e.beginPath(),e.moveTo(42,42);var c=360/a.den;a.num,e.arc(42,42,40,J(t),J(t+c)),e.fill(),e.stroke(),e.closePath(),t+=c}}(E.current.getContext("2d"))}),[I]);var z=T?0:1;return Object(d.jsxs)("div",{ref:U,className:"flex flex-col items-end",children:[Object(d.jsx)("div",{ref:R,role:"Box",className:"bg-white w-18 h-18 border border-black rounded-full pt-0 mt-0",style:{opacity:z},children:Object(d.jsx)("canvas",{ref:E,width:"84",height:"84"})}),Object(d.jsx)(v.d,{onClick:function(){var e=E.current.getContext("2d");V(e),j({}),f(0),y(0),C(0),P(null)},className:"h-10 w-10 full-fill text-gray-900"})]})},E=function(e){var t=e.options;return Object(d.jsx)("div",{className:"w-3/5 h-32 rounded-md border-2 bg-white border-gray-600 flex content-evenly items-center justify-evenly m-5",children:t&&t.map((function(e){return Object(d.jsx)(L,{cantidad:e.den,cantidadColoreada:e.num,id:e.den+"-"+e.num+"-option"},e.den+"-"+e.num+"-option")}))})},G=function(e){var t=e.path,n=e.children;return Object(d.jsx)(l.b,{to:t,children:Object(d.jsx)("div",{className:"m-3 w-12 h-12 bg-yellow-300 rounded-md shadow-lg border-black border-2",children:n})})},A=function(){return Object(d.jsxs)("div",{className:"flex flex-col items-end",children:[Object(d.jsx)(G,{path:"/",children:Object(d.jsx)(v.a,{className:"h-10 w-10 text-gray-900"})}),Object(d.jsx)(G,{path:"/",children:Object(d.jsx)(v.c,{className:"h-10 w-10 text-gray-900"})})]})},T=function(e){e.id;var t=e.title,n=(e.figure,e.options),r=e.answers;return Object(d.jsxs)("div",{className:"flex w-screen px-5",children:[Object(d.jsx)("div",{className:"w-2/12 pl-5",children:Object(d.jsx)(A,{})}),Object(d.jsxs)("div",{className:"w-5/6",children:[Object(d.jsx)("p",{className:"",children:t}),Object(d.jsxs)("div",{className:"flex flex-wrap",children:[Object(d.jsx)("div",{className:"min-w-full h-72 my-5 flex items-center\tjustify-center",children:Object(d.jsx)(P,{})}),Object(d.jsx)("div",{className:"min-w-full h-36 my-5 flex items-center\tjustify-center",children:Object(d.jsx)(E,{options:n})})]})]}),Object(d.jsx)("div",{className:"w-3/12 pr-5",children:Object(d.jsx)(F,{answers:r})})]})},R=function(){var e=Object(i.f)(),t=g(),n=Object(o.a)(t,2),r=n[0].game,a=n[1].deleteGame;return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{title:r.actualLevel.title,figure:r.actualLevel.figure,answers:r.actualLevel.answers,options:r.actualLevel.options}),Object(d.jsx)("div",{className:"flex content-center justify-center",children:Object(d.jsxs)("div",{className:"flex justify-center items-center bg-gray-50 w-24 h-28 text-xl",children:[Object(d.jsx)(l.b,{to:"/edit/"+r.actualLevel.id,children:Object(d.jsx)(v.b,{className:"h-10 w-10 fill-current text-gray-600"})}),Object(d.jsx)(v.e,{onClick:function(){return window.confirm("\xbfSeguro que quieres borrar el nivel?")&&a(r.actualLevel.id),void e.push("/")},className:"h-10 w-10 fill-current text-red-600"})]})})]})};var M=function(e){var t=e.label,n=e.type,r=e.placeholder,a=e.change,c=e.value,s=e.required,l=e.name,i=e.stylingI,o=e.styleInput;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:i,children:[Object(d.jsx)("label",{className:"block text-sm text-gray-600",children:t}),Object(d.jsx)("input",{name:l,id:l,type:n,onChange:a,value:c,className:o,placeholder:r,required:s}),Object(d.jsx)("p",{className:"help-block text-danger"})]})})};function B(e){var t=e.submit,n=e.inputsData,a=e.textBtn,c=e.children,s=e.styling,l=e.stylingF,i=e.stylingI,j=e.styleInput,b=function(e,t){var n=Object(r.useState)(t),a=Object(o.a)(n,2),c=a[0],s=a[1];return{inputs:c,handleInputs:function(e){console.log("Inputs",c),console.log("Event",e.target.value),console.log("Event",e.target.id),console.log(e.target.type),"file"===e.target.type?s(Object(u.a)(Object(u.a)({},c),{},Object(S.a)({},e.target.id,e.target.files[0]))):s(Object(u.a)(Object(u.a)({},c),{},Object(S.a)({},e.target.id,e.target.value))),console.log("Inputs",c)},handleSubmit:function(t){t.preventDefault(),e(c)},handlePhotos:function(e,t){console.log("Inputs",c),console.log("Event",t),console.log("Event",e),s(Object(u.a)(Object(u.a)({},c),{},Object(S.a)({},t,e))),console.log("Inputs",c)}}}(t,{}),m=b.inputs,p=b.handleSubmit,f=b.handleInputs;return Object(d.jsxs)("form",{onSubmit:p,className:"container",children:[Object(d.jsxs)("div",{className:l||"max-w-xl m-4 p-10 bg-white rounded shadow-xl",children:[n?n.map((function(e,t){return"file"===e.type?Object(d.jsx)(M,{label:e.label,type:e.type,placeholder:e.placeholder,change:f,value:m[e.value],required:e.required,name:e.name,stylingI:i,styleInput:j},e.name):Object(d.jsxs)("div",{className:i,children:[Object(d.jsx)("label",{className:"block text-sm text-gray-600",children:e.label}),Object(d.jsx)("input",Object(S.a)({type:e.type,placeholder:e.placeholder,onChange:f,value:m[e.value],required:e.required,accept:".jpg, .jpeg, .png",name:e.name,id:e.name,className:j},"accept","image/*"),e.name),Object(d.jsx)("p",{className:"help-block text-danger"})]})})):"",c]}),Object(d.jsx)(N,{type:"submit",styling:s,text:a})]})}var H=function(){var e=g(),t=Object(o.a)(e,2),n=(t[0].game,t[1].editGame);return Object(d.jsxs)("div",{className:"overflow-auto",children:[Object(d.jsx)("p",{className:"h1",children:"Editar nivel"}),Object(d.jsx)(B,{submit:function(e){n(e)},styling:"px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded",textBtn:"Siguiente",stylingI:"inline-block mt-2 w-1/2 pr-1",styleInput:"w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",inputsData:p.edit}),Object(d.jsx)(l.b,{to:"/",children:"Volver"})]})},U=function(e){var t=e.children;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"layout",children:t}),Object(d.jsxs)("div",{className:"footer bg-black min-h-full text-gray-100 flex flex-wrap justify-between p-3",children:[Object(d.jsx)("p",{children:"FRACTIONS"}),Object(d.jsx)("p",{children:"TECNOLOG\xcdAS PARA LA WEB: 2CM15"})]})]})},W=n(32),J=n.n(W),V=n(45),Y=a.a.createContext(void 0),z=function(e){var t=e.children,n=Object(r.useState)(null),a=Object(o.a)(n,2),c=a[0],s=a[1],l=Object(r.useState)(!1),i=Object(o.a)(l,2),u=(i[0],i[1]);Object(r.useEffect)((function(){}),[]);var j=[{user:c},{setUser:s,getUser:function(e){var t=function(e){var t=new FormData;return e&&Object.keys(e).map((function(n){return"file"===n?t.append(n,e[n],e[n].name):t.append(n,e[n])})),t}(e);h()({method:"post",url:"http://localhost:8080/CrudFracciones/loginUser",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e.data;e.status;return console.log(t.password),console.log(typeof t.password),"true"==t.password&&(window.sessionStorage.setItem("user",t),u(!0),s(t)),t})).catch((function(e){console.log("Hay ocurrido un problema",e),window.sessionStorage.removeItem("user"),u(!1)}))}}];return Object(d.jsx)(Y.Provider,{value:j,children:t})},K=function(){var e=function(){var e=Object(r.useContext)(Y);if(void 0===e)throw new Error("usegame can only be used inside gameContext");return e}(),t=Object(o.a)(e,2),n=t[0].user,a=t[1].getUser,c=Object(i.f)(),s=function(){var e=Object(V.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t),u();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){u()}),[n]);var u=function(){window.sessionStorage.getItem("user")?c.push("/levels"):alert("ERROR AL INICIAR SESI\xd3N")};return Object(d.jsxs)("div",{className:"overflow-auto",children:[Object(d.jsx)("p",{className:"h1",children:"Login"}),Object(d.jsx)(B,{submit:s,styling:"px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded",textBtn:"Siguiente",stylingI:"inline-block mt-2 w-1/2 pr-1",styleInput:"w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",inputsData:p.login}),Object(d.jsx)(l.b,{to:"/",children:"Volver"})]})},Q=n(88),X=n(46),Z=function(){var e=Object(i.f)(),t=g(),n=Object(o.a)(t,2),r=(n[0].game,n[1].createGame);return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"h1",children:"Nuevo nivel"}),Object(d.jsx)(B,{submit:function(t){r(t),e.push("/")},styling:"px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded",textBtn:"Siguiente",stylingI:"inline-block mt-2 w-1/2 pr-1",styleInput:"w-full px-5 py-1 text-gray-700 bg-gray-200 rounded",inputsData:p.edit}),Object(d.jsx)(l.b,{to:"/",children:"Volver"})]})};var $=function(){return Object(d.jsx)(z,{children:Object(d.jsx)(x,{children:Object(d.jsx)(l.a,{basename:"CrudFracciones",children:Object(d.jsx)(U,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(K,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/levels",children:Object(d.jsx)(I,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/level",children:Object(d.jsx)(Q.a,{debugMode:!0,backend:X.a,children:Object(d.jsx)(R,{})})}),Object(d.jsx)(i.a,{exact:!0,path:"/edit/:id",children:Object(d.jsx)(H,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/level/new",children:Object(d.jsx)(Z,{})})]})})})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},ee=document.getElementById("root");ee&&s.a.render(Object(d.jsx)($,{}),ee),_()}},[[83,1,2]]]);
//# sourceMappingURL=main.2f5a923e.chunk.js.map