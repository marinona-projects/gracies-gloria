(this["webpackJsonpgracies-gloria"]=this["webpackJsonpgracies-gloria"]||[]).push([[0],{101:function(e,t,a){e.exports=a(190)},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),c=(a(106),a(3)),l=(a(107),a(108),a(109),a(79)),s=a.n(l),u=a(80),m=a.n(u),d=a(81),b=a.n(d),f=a(82),p=a.n(f),g=a(83),v=a.n(g),h=a(84),j=a.n(h),O=[{id:0,img:s.a,url:"ISnY3CujF2E",xPos:110,yPos:1148},{id:1,img:m.a,url:"8iLJL5QhBYM",xPos:703,yPos:1484},{id:2,img:b.a,url:"ZmKdKgzzn2k",xPos:1705,yPos:1301},{id:3,img:p.a,url:"Zs0bWn4LKjI",xPos:2365,yPos:1041},{id:4,img:v.a,url:"NynePjXVMUk",xPos:3596,yPos:940},{id:5,img:j.a,url:"7-nmhbdGcIQ",xPos:3503,yPos:1230}],w=a(6),E=a(45),y=a(85),x=a.n(y),S=a(35),N=a.n(S),k=a(86),M=a.n(k),L=a(191),P={playerVars:{color:"#660080",controls:1,modestbranding:1,rel:0}},T=Object(w.a)({height:"400",width:"100%"},P),I=Object(w.a)({height:"150",width:"70%"},P),V=a(15),R=function(e){var t=e.screenSize,a=e.bgNaturalSize,r=e.bgDim,o=(e.convertXToScreenRes,e.convertYToScreenRes,Object(n.useState)({})),l=Object(c.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(!1),d=Object(c.a)(m,2),b=d[0],f=d[1],p=Object(n.useState)(null),g=Object(c.a)(p,2),v=g[0],h=g[1],j=Object(n.useState)({opacity:0}),O=Object(c.a)(j,2),E=O[0],y=O[1],x=Object(n.useState)(null),S=Object(c.a)(x,2),k=S[0],P=S[1];return Object(n.useEffect)((function(){a&&h({right:20,top:20,width:s.w*t.w/r.w})}),[a,t,s]),Object(n.useEffect)((function(){k&&(b||k.pauseVideo())}),[b]),i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{key:"INFO_BUTTON",src:N.a,onLoad:function(e){var t=e.target;return u({h:t.naturalHeight,w:t.naturalWidth})},style:Object(w.a)({position:"absolute",cursor:"pointer"},v),alt:"info Button"}),i.a.createElement("img",{key:"INFO_BUTTON_HOVER",src:M.a,style:Object(w.a)(Object(w.a)({position:"absolute",cursor:"pointer",zIndex:1},v),E),alt:"info Button hover",onClick:function(){return f(!0)},onMouseOver:function(){return y({opacity:1})},onMouseLeave:function(){return y({opacity:0})}}),i.a.createElement(L.a,{title:"",visible:b,onCancel:function(){return f(!1)},width:600,footer:null},i.a.createElement("div",{className:"d-flex align-items-center p-2 my-3",style:{backgroundColor:"#e8e8e8",borderRadius:14}},i.a.createElement("p",{className:"flex-grow-2 mr-3"},"V\xeddeo d'agra\xefment de la Gl\xf2ria \ud83e\udd70"),i.a.createElement(V.a,{videoId:"zrKhetq7vf0",opts:I,className:"w-100 flex-grow-3",onReady:function(e){return P(e.target)}})),i.a.createElement("div",{className:"d-flex align-items-center p-2 mb-3",style:{backgroundColor:"#e8e8e8",borderRadius:14}},i.a.createElement(V.a,{videoId:"KX0pVohZA1c",opts:I,className:"w-100 flex-grow-3",onReady:function(e){return P(e.target)}}),i.a.createElement("p",{className:"flex-grow-2 ml-3"},"Moments divertits de la creaci\xf3 d'aquest projecte \ud83d\ude02")),i.a.createElement("h5",null,"Cr\xe8dits"),i.a.createElement("p",null,"Idea original: Nil i Marina Gavin"),i.a.createElement("p",null,"Il\xb7lustraci\xf3, web i edici\xf3 de v\xeddeos: Marina Gavin"),i.a.createElement("div",{className:"text-center"},i.a.createElement("strong",null,"Mil gr\xe0cies a tots els que ho heu fet possible \ud83e\udd70")),i.a.createElement("div",{className:"text-right"},i.a.createElement("small",null,"Juny, 2020"))))},q={w:4e3,h:2250},C=function(e){var t=e.setModalVisible,a=Object(n.useState)({w:window.innerWidth,h:window.innerHeight}),r=Object(c.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)([]),u=Object(c.a)(s,2),m=u[0],d=u[1],b=Object(n.useState)(null),f=Object(c.a)(b,2),p=f[0],g=f[1],v=Object(n.useState)([]),h=Object(c.a)(v,2),j=h[0],y=h[1],S=Object(n.useState)([]),N=Object(c.a)(S,2),k=N[0],M=N[1],L=Object(n.useState)([]),P=Object(c.a)(L,2),T=P[0],I=P[1],V=Object(n.useState)(!1),C=Object(c.a)(V,2),z=C[0],B=C[1],F=function(){l({w:window.innerWidth,h:window.innerHeight})};Object(n.useEffect)((function(){return window.addEventListener("resize",F)}),[m,p]);Object(n.useEffect)((function(){p&&(I(O.map((function(e){return{left:W(e.xPos),top:H(e.yPos),width:m[e.id].w*o.w/q.w}}))),G(p)<o.h&&B(!0))}),[p,o,m]);var G=function(e){return e&&o.w*e.h/e.w},W=function(e){return e*o.w/p.w},H=function(e){var t=G(p),a=0;return t>o.h&&(a=o.h-t),a+e*t/p.h},A={position:"absolute",cursor:"pointer",opacity:0,zIndex:1},K=function(e,t){var a=Object(E.a)(j);a[e]={opacity:t?1:0},y(a)},U=z?{top:0}:{bottom:0};return i.a.createElement("div",{className:"w-100 d-flex flex-row"},O.map((function(e){var a=e.id,n=e.img;return i.a.createElement("img",{key:a,src:n,onLoad:function(e){var t=e.target;return function(e,t){var a=m&&Object(E.a)(m);a[e]={h:t.naturalHeight,w:t.naturalWidth},d(a)}(a,t)},style:Object(w.a)(Object(w.a)(Object(w.a)({},A),T[a]),j[a]),alt:"button",onClick:function(){t(a),void 0===k.find((function(e){return e===a}))&&(K(a,!0),M([].concat(Object(E.a)(k),[a])))},onMouseOver:function(){void 0===k.find((function(e){return e===a}))&&K(a,!0)},onMouseLeave:function(){void 0===k.find((function(e){return e===a}))&&K(a,!1)}})})),i.a.createElement(R,{bgNaturalSize:p,bgDim:q,convertXToScreenRes:W,convertYToScreenRes:H,screenSize:o}),i.a.createElement("img",{src:x.a,onLoad:function(e){var t=e.target;g({h:t.naturalHeight,w:t.naturalWidth})},className:"w-100 align-self-center",alt:"backgound image",style:Object(w.a)({position:"absolute"},U)}))},z=function(e){var t=e.visible,a=(e.key,e.videoUrl),r=e.setModalVisible,o=Object(n.useState)(null),l=Object(c.a)(o,2),s=l[0],u=l[1];Object(n.useEffect)((function(){s&&(t?(s.seekTo(0),s.playVideo()):s.pauseVideo())}),[t]);return i.a.createElement(L.a,{title:"",visible:t,onCancel:function(){return r(null)},width:800,footer:null,style:{height:"90%"}},i.a.createElement(V.a,{videoId:a,opts:T,onReady:function(e){u(e.target),t&&(e.target.seekTo(0),e.target.playVideo())},onStateChange:function(e){0===e.data&&(r(!1),document.exitFullscreen())},className:"mt-3"}))},B=a(193),F=function(e){var t=e.visible,a=e.closeModal,r=(e.isTouchscreen,Object(n.useState)(null)),o=Object(c.a)(r,2),l=o[0],s=o[1];return Object(n.useEffect)((function(){l&&(t||l.pauseVideo())}),[t]),i.a.createElement(L.a,{title:"Gr\xe0cies Gl\xf2ria!",visible:t,onCancel:a,width:600,footer:null},i.a.createElement(B.a,{message:"Aquesta web est\xe0 pensada per veure's des d'un ordinador! \ud83d\udda5\ud83d\uddb1",description:"La il\xb7lustraci\xf3 t\xe9 molts detalls i els objectes s'il\xb7luminen al passar el ratol\xed per sobre (aquest efecte es perd amb la pantalla t\xe0ctil)",type:"warning",showIcon:!0,closable:!0,className:"mb-3"}),i.a.createElement("p",null,"La ",i.a.createElement("strong",null,"Gl\xf2ria")," acaba una etapa important de la seva vida i es jubila. \ud83c\udf93"),i.a.createElement("p",null,"Som molts els que sent\xedem la necessitat d'acompanyar-la en aquest moment i d'agrair-li haver format part del nostre cam\xed."),i.a.createElement("p",null,"Malgrat la situaci\xf3 estranya que estem vivint, i amb l'ajuda m\xe0gica de la Lluna Bruna \ud83c\udf19, hem trobat la manera de compartir amb ella\n                        aquest tancament i de dedicar-li tots unes paraules."),i.a.createElement("p",null,"Mira com ha comen\xe7at tot plegat:"),i.a.createElement(V.a,{videoId:"MjXFP3kpdbA",opts:T,onReady:function(e){return s(e.target)},onStateChange:function(e){0===e.data&&(a(),document.exitFullscreen())}}),i.a.createElement("p",{className:"my-2"},i.a.createElement("strong",null,"\ud83d\uddb1 Hi vols jugar tu tamb\xe9? "),"Busca a la classe de les llunes 6 objectes que s'il\xb7luminin i veur\xe0s com surt un munt de gent! \n                    De mica en mica la classe s'anir\xe0 omplint de colors \ud83c\udf08 "),i.a.createElement(B.a,{message:"La Gl\xf2ria us vol donar les gr\xe0cies!",description:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"m-0"},"Li ha fet tanta il\xb7lusi\xf3 aquest regal que ha fet un v\xeddeo d'agra\xefment. "),i.a.createElement("p",{className:"m-0"},"Aneu a la finestra d'informaci\xf3 per veure'l!",i.a.createElement("img",{src:N.a,className:"ml-2",style:{width:17}}))),type:"info",className:"mt-3"}))};var G=function(){var e=Object(n.useState)("ON_START"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),l=Object(c.a)(o,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){return window.addEventListener("touchstart",(function(){return u(!0)})),function(){return window.removeEventListener("touchstart",u)}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{setModalVisible:r}),O.map((function(e){return i.a.createElement(z,{key:e.id,videoUrl:e.url,visible:a===e.id,setModalVisible:r})})),i.a.createElement(F,{visible:"ON_START"===a,closeModal:function(){return r(null)},isTouchscreen:s}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){e.exports=a.p+"static/media/info button.833b12c4.png"},79:function(e,t,a){e.exports=a.p+"static/media/01.a266e785.png"},80:function(e,t,a){e.exports=a.p+"static/media/02.3a9ab7b7.png"},81:function(e,t,a){e.exports=a.p+"static/media/03.93f415a8.png"},82:function(e,t,a){e.exports=a.p+"static/media/04.64c5d6aa.png"},83:function(e,t,a){e.exports=a.p+"static/media/05.fb3ab8b4.png"},84:function(e,t,a){e.exports=a.p+"static/media/06.914ea944.png"},85:function(e,t,a){e.exports=a.p+"static/media/background.7e9ba548.png"},86:function(e,t,a){e.exports=a.p+"static/media/info button hover.8118df23.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.3f1f3600.chunk.js.map