(this["webpackJsonpproyecto-de-ceci"]=this["webpackJsonpproyecto-de-ceci"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c(2),n=c.n(a),s=c(29),o=c.n(s),r=(c(36),c.p,c.p+"static/media/loading-02.45df2d82.gif"),l=(c(27),c(37),c(3)),d=c(5),j=c(12),u=c(19),m=c(6),b=Object(a.createContext)(),x=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(m.a)(c,2),s=n[0],o=n[1];console.log(s);var r=function(){return s.map((function(e){return e.cantidad})).reduce((function(e,t){return e+t}),0)};return console.log("qCart",r),Object(i.jsx)(b.Provider,{value:{product:s,addCart:function(e){console.log(e);var t,c=(t=e.item.id,console.log("id",t),s.findIndex((function(e){return e.item.id===t})));if(-1===c)o([].concat(Object(u.a)(s),[e])),console.log("La cantidad de items id:",e.item.id," en el carrito es de ",e.cantidad);else{var i=Object(j.a)(Object(j.a)({},s[c]),{},{cantidad:s[c].cantidad+e.cantidad}),a=s.filter((function(t){return e.item.id!==t.item.id}));o([].concat(Object(u.a)(a),[i])),console.log("La cantidad de items total id:",e.item.id," en el carrito es de ",i.cantidad)}},qCart:r,pTotal:function(){return s.map((function(e){return e.price*e.cantidad})).reduce((function(e,t){return e+t}),0)}},children:t})},h=function(){var e=Object(a.useContext)(b).qCart;return Object(i.jsx)(i.Fragment,{children:function(){if(e()>0)return Object(i.jsx)(l.b,{to:"/cart",children:Object(i.jsxs)("div",{className:"carritoicon d-flex flex-row",children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVESURBVHic7ZpNbFRVFMd/04q22hZGJQyKkoq4qB8khED8TFTQGNkQDW4MMRqDGxduXJroRoXE+BHjwhAFV7L1I4ImKlpsFanxgyhRwACxWsHWDxTrzLi485zzzvuYd9+7b97U9p/c9J0355573uk9955z7oU5zGFWowScC9wPlGP4TgIjwJ52KNVuvAfUE7bdwEAhWuaIKZIboA7sKkbN/PAodgaoA9cUomkOKDX+LgXOj+HbCDws6KeBh/JSqhOxAPiH5gz4olh1isEoTQPUgMXFquMGXRa8b4vnErDWsS6FIK0BANa5VGQm4EzgN5pu8APNRXTW4A382+EVxaqTHTYuAP9DN7CdwpcDXwr6NHDKon8V+NVyTI0/gL8z9J/C5DVPASdsO5eA49hHjp3YvgeWdNtaAFjRaDMd84FKmlX8buAVQZ8AjkTw9gI9mFDbM/Y0cLTFGBcB8xrPNcy0jcOAkF8HJsVvPQ09wjAZ8T4WlYZS3lT6JEGfrwX/Lwn4Dwr+4wn4fxL837Xg/VbwTtruAgDj+BfClcQnUgCHxPMCTBHGFfqBhYKOM0AFWCboz9IYAPzbYRdwYwv+Q4q+JOW4YdCyDsfwXqfoYRcGgNbxgFaqKANcq+jUBtiDiQE83NKCv50zQI8lIQ1QB0bSGuAUsFfQS4FLY/i1UoMpxw2DlhVlgF782/cB4GRaA4CdG+iFqYgZsAaT0HkYBvtcQMLGAL8DE4J2aQA5A6YwJfwwBPwf4IwMA+/HBEHnNeh1wM4Yfmn9i1vwympTuQWvNGZ3DO9qRe8N5bLEToqP6dO0ce8DsrgABN1gpuBD7yGrAXZn7F8Uhl0Kk3H7NMa/yyHtdvzT8JkIvjJm15Cltyi+LUrmHRF82lXXeMpnWQQ9vAMsF/KuAl4P4dNnCYuJToyq4rkWw1cJGSOMd5V4/hMY84isLgDBdSCqXH4Mf/ToYiuUMmqYIodGBf9WOYqoKLkwwLuYUyMPUfGAVnBZBJ8NpAG0gT1cr2if/7swwCSwT9BDwJIIXp0Wx91JaIVe/C4QlQSFBkAeXBgAgm5wcwSfy6RoEH9RNyoE1gnQqPwxLwNEuYHLtDhJGnwO/gToK1So7MoAI5hTIw9radb0JFwmRUmywKuVHoHw18U2eCVwE6be3994twh4E/hU8V6g6DsJXwdkiW0AeCKE5wZFr2/o4qEL2KB43g+RkxoLgdcoPq5P2n4mujpsjTL+Sm+ntyrmloszbOuAj0raDmDC8FCkORgpY+rw3vpRBZ7E+PxfKeTliWPAj66F3orfwi+5HqCdSLMN9iv6GxeKzCSsxj8D9uFwdW030qwB3Zik5kLx7ggmKZp2oJNrTADPY+oKzrCJ4ld3myaTNWd4vAM+LGk7jbuw34f1mDxAHpd3WqsBj0V9gKtrbvMxNYCehsxd+I/APwC2YvKFDcCD+P8jmwnmDVEYAnYIug68gKn79WHuMMt0fLyhmyyz5YpV+P8DYwQzQ31DPSzZicIjqu8W9Xs38JHi0VWh/5CHX1ym6B0Ed4dtil5Ocmj5WlYVeDmp/DwMUFd02EUs/U73ySo/cZqfhwF0ZHgPcJZ6t1nRBy3ka94HFD0PuK+FTrmihP8iUh1zkeouzEWKFwnuGist5A+F9N8O3IZJebX/HyV8luSKjQS3o6j2agr52y3kb8rwHZmwNYFyY5gt1BZ9wMcJ5D+X6Qsc4F5MPq4Vm8bs3X0ZZJ8NPIs55dHyJwiuM6Fox33/XkxgsgKzGB4G3sJdcrII4/+DGMN+jjmvtLnEPYc5zFb8Czj4yvcL4+ghAAAAAElFTkSuQmCC",alt:"Carrito",className:"carritoicon"}),Object(i.jsx)("p",{children:e()})]})})}()})},O=function(){return Object(i.jsx)("header",{children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-bordeaux",children:[Object(i.jsx)("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)(l.b,{to:"/",className:"navbar-brand",children:Object(i.jsx)("h2",{className:"logo",children:"Cisum Evil"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:[Object(i.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsx)(l.b,{to:"/",className:"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{to:"/artistas",className:"nav-link",children:"Artistas"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{to:"/productos",className:"nav-link",children:"Productos"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{to:"/categoria/".concat("merch"),className:"nav-link",children:"Merch"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{to:"/categoria/".concat("vip"),className:"nav-link",children:"Entradas y paquetes VIP"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{to:"/contactanos",className:"nav-link",children:"Contacto"})})]}),Object(i.jsx)(h,{})]})]})})},p=function(e){var t=e.stock,c=e.onAdd,a=e.onSub,n=e.onBuy,s=e.contador,o=e.btnCompra;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"contadorBox",children:[Object(i.jsxs)("div",{className:"operBox",children:[Object(i.jsx)("button",{className:"oper",onClick:a,disabled:1==s,children:"-"}),Object(i.jsx)("b",{children:s}),Object(i.jsx)("button",{className:"oper",onClick:c,disabled:s==t||s>t,children:"+"})]}),Object(i.jsxs)("p",{children:["Stock:",t]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"confirmar",onClick:n,disabled:0==t,children:o})})]})},g=[{id:0,name:"Videollamada M&G",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem velit culpa aut! Nisi in sapiente necessitatibus, alias tempore iusto.",foto:"https://picsum.photos/id/1/420/300",price:3e3,stock:10,categoria:"vip"},{id:1,name:"Taza Cisum Evil",foto:"https://picsum.photos/id/30/420/300",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem velit culpa aut! Nisi in sapiente necessitatibus, alias tempore iusto.",price:600,stock:100,categoria:"merch"},{id:2,name:"Bundle Cuore di Belladonna",foto:"https://picsum.photos/id/452/420/300",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem velit culpa aut! Nisi in sapiente necessitatibus, alias tempore iusto.",price:2500,stock:100,categoria:"merch"},{id:3,name:"Bundle Ractzon",foto:"https://picsum.photos/id/453/420/300",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem velit culpa aut! Nisi in sapiente necessitatibus, alias tempore iusto.",price:2500,stock:100,categoria:"merch"},{id:4,name:"Bundle Dawn to Midday",foto:"https://picsum.photos/id/777/420/300",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem velit culpa aut! Nisi in sapiente necessitatibus, alias tempore iusto.",price:2500,stock:100,categoria:"merch"},{id:5,name:"Early entry + soundcheck Cisum Fest",foto:"https://picsum.photos/id/158/420/300",descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem velit culpa aut! Nisi in sapiente necessitatibus, alias tempore iusto.",price:2e3,stock:50,categoria:"vip"}],f=function(e){var t=e.product;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h5",{children:t.name}),Object(i.jsxs)("p",{children:["$ ",t.price]}),Object(i.jsxs)("p",{children:["Stock: ",t.stock]}),Object(i.jsx)(l.b,{to:"/productos/".concat(t.id),children:Object(i.jsx)("button",{children:"Comprar"})})]})},v=function(e){var t=e.products;return Object(i.jsx)("div",{className:"listProd",children:t.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(f,{product:e},e.id)})}))})},A=c(26),C=(c(42),A.a.initializeApp({apiKey:"AIzaSyB1IJSdUWXRzixOFJh70S7wDZw5Fnn5bGw",authDomain:"proyecto-react-cisum-evil.firebaseapp.com",projectId:"proyecto-react-cisum-evil",storageBucket:"proyecto-react-cisum-evil.appspot.com",messagingSenderId:"622419449604",appId:"1:622419449604:web:33a0263a0c5c75a5866251",measurementId:"G-3KETGHBL1Y"})),N=function(){return A.a.firestore(C)},w=function(e){e.servicios;var t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];return a.useEffect((function(){N().collection("item").get().then((function(e){var t=e.docs.map((function(e){return Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id})}));console.log(t),s(t)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("section",{id:"hero",class:"d-flex flex-column justify-content-center align-items-start",children:Object(i.jsx)("h2",{children:"Adquir\xed nuestros productos"})}),Object(i.jsx)("div",{className:"listContainer",children:Object(i.jsx)(v,{products:n})})]})},q=function(e){var t=e.item,c=Object(a.useState)(1),n=Object(m.a)(c,2),s=n[0],o=n[1],r=Object(a.useState)(1),d=Object(m.a)(r,2),j=d[0],u=d[1],x=Object(a.useState)("Comprar"),h=Object(m.a)(x,2),O=h[0],g=h[1],f=Object(a.useState)(0),v=Object(m.a)(f,2),A=v[0],C=v[1],N=Object(a.useContext)(b),w=N.addCart,q=N.product;return console.log([q]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{product:t,onLoad:function(){u(t.stock)},children:[Object(i.jsx)("h2",{children:t.name}),Object(i.jsx)("img",{src:t.foto}),Object(i.jsxs)("p",{children:["Descripcion: ",t.descripcion]}),Object(i.jsxs)("p",{children:["Precio: $",t.price]}),Object(i.jsx)(p,{contador:s,onAdd:function(){s<j&&o(s+1)},onSub:function(){s>1&&o(s-1)},onBuy:function(){u(t.stock),C(s),u(j-s),o(1),j==s&&g("Sin Stock"),console.log("Se agregaron ",s," productos al carrito"),w({item:t,cantidad:s,price:t.price,name:t.name,id:t.id}),document.getElementById("terminarCompra").style.visibility="visible"},btnCompra:O,stock:j}),Object(i.jsxs)("div",{id:"terminarCompra",children:[Object(i.jsxs)("p",{children:["Se han agregado exitosamente ",A," ",t.name," al carrito"]}),Object(i.jsx)(l.b,{to:"/cart",quantity:A,children:Object(i.jsx)("button",{className:"confirmar",children:"Terminar compra"})})]})]},t.id)})};console.log(g);var F=function(){var e=Object(d.f)().id,t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)([]),r=Object(m.a)(o,2);r[0],r[1];return a.useEffect((function(){N().collection("item").doc(e).get().then((function(e){e.exists?(console.log("item encontrado"),s(Object(j.a)({id:e.id},e.data()))):console.log("No existe el item")})).catch((function(e){console.log("Error en la busqueda de items",e)}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(q,{item:n})})},B=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{id:"hero",class:"d-flex flex-column justify-content-center align-items-start",children:[Object(i.jsx)("h1",{children:"Cisum Evil"}),Object(i.jsx)("h3",{children:"Booking & Management"})]}),Object(i.jsxs)("section",{id:"aboutUs",children:[Object(i.jsx)("h2",{class:"blur titulo",children:"Sobre nosotros"}),Object(i.jsx)("h4",{class:"blur",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid. Officiis, excepturi illum debitis sint quia veniam nostrum quas tenetur consequuntur facilis neque obcaecati quidem veritatis architecto laborum dolorum commodi? Quod sunt illum iste animi maxime quos eius! Hic odit culpa saepe sit, aspernatur molestias beatae obcaecati ratione dolorem quam commodi facere aperiam recusandae natus totam cupiditate consectetur sed fuga deleniti cum. Hic dicta nihil repudiandae quisquam, consequatur, iste id recusandae, consectetur numquam accusantium ad expedita. Deserunt quam dolorem doloremque aut vitae omnis, blanditiis numquam quaerat sit? Velit sequi ea expedita maxime reprehenderit accusamus voluptatum earum aut odio, nam aliquam? In aliquam vero modi velit sint esse nemo laudantium illum eveniet doloribus, dicta enim totam repellendus amet! Illo esse amet tempora eligendi quisquam fugiat, dignissimos sequi voluptas quam voluptates modi minus officia dolorum iure ab nostrum numquam! Aut, doloremque necessitatibus?"})]}),Object(i.jsx)("section",{id:"productos",children:Object(i.jsx)(w,{})})]})},k=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{children:Object(i.jsx)("h3",{children:"No tenemos artistas para mostrar"})})})},y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"O nos pueden encontrar en:"}),Object(i.jsxs)("div",{className:" d-flex justify-content-center flex-column",children:[Object(i.jsxs)("div",{className:"d-flex flex-column col-12 col-md-12 contact-block",children:[Object(i.jsx)("h4",{children:"Representaci\xf3n"}),Object(i.jsxs)("p",{children:["C. Alvarez  ",Object(i.jsx)("br",{}),"Domicilio: Lorem ipsum dolor 1234, of:1, CABA, Argentina",Object(i.jsx)("br",{}),"Tel\xe9fono: +(123)4567890 int. 1",Object(i.jsx)("br",{}),"E-mail: ",Object(i.jsx)("a",{href:"mailto:management@cisumevil.com",children:"management@cisumevil.com"})]})]}),Object(i.jsxs)("div",{className:"d-flex flex-column col-12 col-md-12 contact-block",children:[Object(i.jsx)("h4",{children:"Contrataciones"}),Object(i.jsxs)("p",{children:["J. Alvarez  ",Object(i.jsx)("br",{}),"Domicilio: Lorem ipsum dolor 1234, of:1, CABA, Argentina",Object(i.jsx)("br",{}),"Tel\xe9fono: +(123)4567890 int. 2",Object(i.jsx)("br",{}),"E-mail: ",Object(i.jsx)("a",{href:"mailto:booking@cisumevil.com",children:"booking@cisumevil.com"})]})]}),Object(i.jsxs)("div",{class:"d-flex flex-column col-12 col-md-12 contact-block",children:[Object(i.jsx)("h4",{children:"Servicios profesionales"}),Object(i.jsxs)("p",{children:["N. Alvarez  ",Object(i.jsx)("br",{}),"Domicilio: Lorem ipsum dolor 1234, of:2, CABA, Argentina",Object(i.jsx)("br",{}),"Tel\xe9fono: +(123)4567890 int. 3",Object(i.jsx)("br",{}),"E-mail: ",Object(i.jsx)("a",{href:"mailto:services@cisumevil.com",children:"services@cisumevil.com"})]})]})]})]})},S=function(){var e=Object(d.f)().idCat,t=Object(a.useState)([]),c=Object(m.a)(t,2),n=c[0],s=c[1];return N().collection("item").where("categoria","==",e).get().then((function(e){0===e.size&&console.log("No hubo resultados"),s(e.docs.map((function(e){return Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id})})))})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h2",{children:["Adquir\xed nuestros productos de ",e]}),Object(i.jsx)(v,{products:n})]})},E=function(e){var t=e.cartProd,c=Object(a.useContext)(b);c.pTotal,c.product,c.qCart;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"d-flex flex-row cardCart justify-content-between",children:[Object(i.jsxs)("div",{className:"d-flex flex-column",children:[Object(i.jsx)("h3",{className:"titleCart",children:t.name}),Object(i.jsxs)("div",{className:"d-flex flex-row",children:[Object(i.jsxs)("h4",{className:"dato-compra",children:["Cantidad: ",t.cantidad]}),Object(i.jsxs)("h4",{className:"dato-compra",children:["Precio unitario: $",t.price]})]}),Object(i.jsx)("h4",{className:"delete-item",children:"Eliminar producto"})]}),Object(i.jsxs)("div",{className:"d-flex flex-column",children:[Object(i.jsx)("h4",{children:"Subtotal"}),Object(i.jsxs)("h3",{className:"totalProd d-flex align-self-center",children:["$",t.price*t.cantidad]})]})]})})},D=function(e){var t=e.cartProds,c=Object(a.useContext)(b);c.pTotal,c.product,c.qCart;return Object(i.jsx)("div",{className:"listProd",children:t.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(E,{cartProd:e},e.id)})}))})},P=function(e){e.servicios;var t=Object(a.useContext)(b),c=(t.pTotal,t.product),n=(t.qCart,Object(a.useState)([])),s=Object(m.a)(n,2),o=s[0],r=s[1];return a.useEffect((function(){new Promise((function(e,t){setTimeout((function(){return e(c)}),200)})).then((function(e){return r(e)}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"listContainerCart",children:Object(i.jsx)(D,{cartProds:o})})})},T=function(e){var t=Object(a.useContext)(b),c=t.pTotal,n=t.product,s=t.qCart,o=Object(a.useState)(!0),d=Object(m.a)(o,2),j=d[0],x=d[1],h=Object(a.useState)([]),O=Object(m.a)(h,2),p=O[0],g=O[1],f=Object(a.useState)([]),v=Object(m.a)(f,2),A=v[0],C=v[1],w=Object(a.useState)([]),q=Object(m.a)(w,2),F=q[0],B=q[1];a.useEffect((function(){setTimeout((function(){x(!1)}),2e3)}),[]);var k=function(){return s()>=1?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Su compra"}),Object(i.jsx)(P,{}),Object(i.jsxs)("h3",{children:["Precio total: $",c()]}),Object(i.jsx)("button",{onClick:function(){document.getElementById("confirmarCompra").style.visibility="visible"},children:"Confirmar Compra"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"No hay items en su carrito"}),Object(i.jsxs)(l.b,{to:"/productos",children:[Object(i.jsx)("h3",{children:"Volver a lista de productos"})," "]}),Object(i.jsx)(l.b,{to:"/categoria/vip",children:Object(i.jsx)("h3",{children:"Comprar paquetes VIP"})}),Object(i.jsx)(l.b,{to:"/categoria/merch",children:Object(i.jsx)("h3",{children:"Comprar Merchandising"})})]})};return Object(i.jsx)(i.Fragment,{children:j?Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Estamos cargando sus productos..."}),Object(i.jsx)("img",{src:r,alt:""})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{}),Object(i.jsxs)("div",{id:"confirmarCompra",className:"d-flex flex-column align-items-center",children:[Object(i.jsxs)("form",{className:"d-flex flex-column align-items-center",action:"",children:[Object(i.jsx)("input",{type:"text",placeholder:"Nombre Completo",required:!0,className:"datoContacto",onBlur:function(e){g(e.target.value)}}),Object(i.jsx)("input",{type:"email",placeholder:"Correo Electr\xf3nico",required:!0,className:"datoContacto",onBlur:function(e){C(e.target.value)}}),Object(i.jsx)("input",{type:"text",placeholder:"Tel\xe9fono",required:!0,className:"datoContacto",onBlur:function(e){B(e.target.value)}})]}),Object(i.jsx)("button",{onClick:function(){!function(){console.log(n);var e={buyer:{name:p,email:A,telefono:F},items:Object(u.a)(n),total:[c()]};N().collection("ordenes").add(e).then((function(e){console.log("nro de orden",e.id)}))}()},children:"Terminar Pedido"})]})]})})},L=Object(a.createContext)(),I=function(){return Object(i.jsx)(L.Provider,{children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(x,{children:[Object(i.jsx)(O,{}),Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{exact:!0,path:"/",children:Object(i.jsx)(B,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/proyecto-react",children:Object(i.jsx)(B,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/productos",children:Object(i.jsx)(w,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/artistas",children:Object(i.jsx)(k,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/productos/:id",children:Object(i.jsx)(F,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/categoria/:idCat",children:Object(i.jsx)(S,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/contactanos",children:Object(i.jsx)(y,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/cart",children:Object(i.jsx)(T,{})}),Object(i.jsx)(d.a,{exact:!0,path:"/pruebacart",children:Object(i.jsx)(E,{})}),Object(i.jsx)(d.a,{path:"*",children:Object(i.jsxs)("div",{children:["No encontramos la p\xe1gina que est\xe1 buscando. ",Object(i.jsx)("img",{src:"../src/mocks/productList/img/logo.png",alt:""})]})})]})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),i(e),a(e),n(e),s(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root")),H()}},[[44,1,2]]]);
//# sourceMappingURL=main.71444e9c.chunk.js.map