(this["webpackJsonpgracies-gloria"]=this["webpackJsonpgracies-gloria"]||[]).push([[0],{161:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(1),r=n.n(o),c=(n(95),n(5)),l=(n(96),n(97),n(98),n(68)),u=n.n(l),s=n(69),d=n.n(s),m=n(70),f=n.n(m),b=n(71),p=n.n(b),g=n(72),h=n.n(g),v=n(73),O=n.n(v),w=[{id:0,img:u.a,url:"ISnY3CujF2E",xPos:110,yPos:1148},{id:1,img:d.a,url:"8iLJL5QhBYM",xPos:703,yPos:1484},{id:2,img:f.a,url:"glAoQRCGT8E",xPos:1705,yPos:1301},{id:3,img:p.a,url:"Zs0bWn4LKjI",xPos:2365,yPos:1041},{id:4,img:h.a,url:"NynePjXVMUk",xPos:3596,yPos:940},{id:5,img:O.a,url:"7-nmhbdGcIQ",xPos:3503,yPos:1230}],j=n(8),E=n(34),y=n(74),S=n.n(y),x=n(75),M=n.n(x),k=n(76),P=n.n(k),T=n(162),N=3869,q=2080,C=function(e){var t=e.screenSize,n=e.bgNaturalSize,o=e.bgDim,r=e.convertXToScreenRes,l=e.convertYToScreenRes,u=Object(a.useState)({}),s=Object(c.a)(u,2),d=s[0],m=s[1],f=Object(a.useState)(!1),b=Object(c.a)(f,2),p=b[0],g=b[1],h=Object(a.useState)(null),v=Object(c.a)(h,2),O=v[0],w=v[1],E=Object(a.useState)({opacity:0}),y=Object(c.a)(E,2),S=y[0],x=y[1];return Object(a.useEffect)((function(){n&&w({left:r(N),top:l(q),height:d.h*t.h/o.h})}),[n,t,d]),i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{key:"INFO_BUTTON",src:M.a,onLoad:function(e){var t=e.target;return m({h:t.naturalHeight,w:t.naturalWidth})},style:Object(j.a)({position:"absolute",cursor:"pointer"},O),alt:"info Button"}),i.a.createElement("img",{key:"INFO_BUTTON_HOVER",src:P.a,style:Object(j.a)(Object(j.a)({position:"absolute",cursor:"pointer"},O),S),alt:"info Button hover",onClick:function(){return g(!0)},onMouseOver:function(){return x({opacity:1})},onMouseLeave:function(){return x({opacity:0})}}),i.a.createElement(T.a,{title:"",visible:p,onCancel:function(){return g(!1)},width:600,footer:null},i.a.createElement("p",null,"Aquesta web ha estat creada com a recull de tots els v\xeddeos que ens han anat arribant `com a agra\xefment a la Gl\xf2ria ara que es jubila"),i.a.createElement("h5",null,"Cr\xe8dits"),i.a.createElement("p",null,"Idea original: Nil i Marina Gavin"),i.a.createElement("p",null,"Il\xb7lustraci\xf3, web i edici\xf3 de v\xeddeos: Marina Gavin"),i.a.createElement("p",null,"Mil gr\xe0cies a tots els que ho heu fet possible :)")))},L={w:4e3,h:2250},I=function(e){var t=e.setModalVisible,n=Object(a.useState)({w:window.innerWidth,h:window.innerHeight}),o=Object(c.a)(n,2),r=o[0],l=o[1],u=Object(a.useState)([]),s=Object(c.a)(u,2),d=s[0],m=s[1],f=Object(a.useState)(null),b=Object(c.a)(f,2),p=b[0],g=b[1],h=Object(a.useState)([]),v=Object(c.a)(h,2),O=v[0],y=v[1],x=Object(a.useState)([]),M=Object(c.a)(x,2),k=M[0],P=M[1],T=Object(a.useState)([]),N=Object(c.a)(T,2),q=N[0],I=N[1],R=function(){l({w:window.innerWidth,h:window.innerHeight})};Object(a.useEffect)((function(){return window.addEventListener("resize",R)}),[d,p]);Object(a.useEffect)((function(){p&&I(w.map((function(e){return{left:W(e.xPos),top:B(e.yPos),height:d[e.id].h*r.h/L.h}})))}),[p,r,d]);var W=function(e){var t,n=(t=p)&&r.h*t.w/t.h;if(n<r.w){var a=(r.w-n)/2;return e*n/p.w+a}return-(n-r.w)/2+e*n/p.w},B=function(e){return e*r.h/p.h},G={position:"absolute",cursor:"pointer",opacity:0},H=function(e,t){var n=Object(E.a)(O);n[e]={opacity:t?1:0},y(n)};return console.log("naaaat",p),i.a.createElement("div",{className:"h-100 d-flex flex-column"},w.map((function(e){var n=e.id,a=e.img;return i.a.createElement("img",{key:n,src:a,onLoad:function(e){var t=e.target;return function(e,t){var n=d&&Object(E.a)(d);n[e]={h:t.naturalHeight,w:t.naturalWidth},m(n)}(n,t)},style:Object(j.a)(Object(j.a)(Object(j.a)({},G),q[n]),O[n]),alt:"button",onClick:function(){t(n),void 0===k.find((function(e){return e===n}))&&(H(n,!0),P([].concat(Object(E.a)(k),[n])))},onMouseOver:function(){void 0===k.find((function(e){return e===n}))&&H(n,!0)},onMouseLeave:function(){void 0===k.find((function(e){return e===n}))&&(H(n,!1),console.log("false",k,n,k.find((function(e){return e===n}))))}})})),i.a.createElement(C,{bgNaturalSize:p,bgDim:L,convertXToScreenRes:W,convertYToScreenRes:B,screenSize:r}),i.a.createElement("img",{src:S.a,onLoad:function(e){var t=e.target;g({h:t.naturalHeight,w:t.naturalWidth})},className:"h-100 align-self-center",alt:"backgound image"}))},R=function(e){var t=e.visible,n=e.key,a=e.videoUrl,o=e.setModalVisible;return i.a.createElement(T.a,{key:n,title:"",visible:t,onCancel:function(){return o(null)},width:600,footer:null},i.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(a),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},W=function(e){var t=e.visible,n=e.closeModal;return i.a.createElement(T.a,{title:"",visible:t,onCancel:n,width:600,footer:null},i.a.createElement("h1",null,"Gr\xe0cies Gl\xf2ria!"),i.a.createElement("p",null,"Son molts els que t'han volgut donar les gr\xe0cies... aix\xed que busca en aquest espai que tant b\xe9 coneixes i trobar\xe0s petits regals!"),i.a.createElement("p",null,"Com que sabem que aix\xf2 dels enigmes t'agraden..."),i.a.createElement("p",null,"No ser\xe0 tant f\xe0cil!"),i.a.createElement("p",null,"Tanca aquesta finestra i comen\xe7a a jugar!"),i.a.createElement("p",null,"Anar omplint de colors la teva aula"))};var B=function(){var e=Object(a.useState)("ON_START"),t=Object(c.a)(e,2),n=t[0],o=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{setModalVisible:o}),w.map((function(e){return i.a.createElement(R,{key:e.id,videoUrl:e.url,visible:n===e.id,setModalVisible:o})})),i.a.createElement(W,{visible:"ON_START"===n,closeModal:function(){return o(null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,n){e.exports=n.p+"static/media/01.a266e785.png"},69:function(e,t,n){e.exports=n.p+"static/media/02.3a9ab7b7.png"},70:function(e,t,n){e.exports=n.p+"static/media/03.93f415a8.png"},71:function(e,t,n){e.exports=n.p+"static/media/04.64c5d6aa.png"},72:function(e,t,n){e.exports=n.p+"static/media/05.fb3ab8b4.png"},73:function(e,t,n){e.exports=n.p+"static/media/06.914ea944.png"},74:function(e,t,n){e.exports=n.p+"static/media/background.7e9ba548.png"},75:function(e,t,n){e.exports=n.p+"static/media/info button.1290a477.png"},76:function(e,t,n){e.exports=n.p+"static/media/info button hover.7cd905ca.png"},90:function(e,t,n){e.exports=n(161)},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.924826b7.chunk.js.map