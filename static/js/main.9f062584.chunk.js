(this["webpackJsonpsimple-react-homeworks-from-ignat"]=this["webpackJsonpsimple-react-homeworks-from-ignat"]||[]).push([[0],[,,,function(e,a,t){e.exports={container:"Affairs_container__2Zm5V",all:"Affairs_all__2zMwD",high:"Affairs_high__35Vgp",middle:"Affairs_middle__bmkZb",low:"Affairs_low__1tkKH",closeBtn:"Affairs_closeBtn__2yBrX",filterBtn:"Affairs_filterBtn__1IyMn",gray:"Affairs_gray__GWm0g",red:"Affairs_red__2d_T3",orange:"Affairs_orange__2u1Ju",green:"Affairs_green__19PV5"}},,function(e,a,t){e.exports={link:"Header_link__2KhCm",active:"Header_active__3exQG",block:"Header_block__7uByy",header:"Header_header__m_U-_"}},,function(e,a,t){e.exports={container:"Message_container__C6YcV",ava:"Message_ava__lCeN4",messageItem:"Message_messageItem__47vBj",name:"Message_name__2Tz5b",message:"Message_message__e0FJu",time:"Message_time__3_H_u"}},,,function(e,a,t){e.exports={container:"Greeting_container__2rEwv",input:"Greeting_input__2tmmW",error:"Greeting_error__3m4hu",skewBtn:"Greeting_skewBtn__3tw4O",purple:"Greeting_purple__2-ugi"}},,function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__10XLF",input:"SuperCheckbox_input__1X79W"}},function(e,a,t){e.exports={input:"SuperInputText_input__3t67D",errorInput:"SuperInputText_errorInput__3qTSv",error:"SuperInputText_error__2bIry"}},function(e,a,t){e.exports={default:"SuperButton_default__188lN",red:"SuperButton_red__3_Gf5",skewBtn:"SuperButton_skewBtn__NC72P"}},,,function(e,a,t){e.exports={App:"App_App__3b23q"}},function(e,a,t){e.exports={blue:"HW4_blue__1axgr",column:"HW4_column__3Wd3V"}},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),i=(t(25),t(17)),o=t.n(i),u=t(1),s=t(7),m=t.n(s);var _=function(e){return r.a.createElement("div",{className:m.a.container},r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,alt:"",className:m.a.ava})),r.a.createElement("div",{className:m.a.messageItem},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.message},e.message),r.a.createElement("div",{className:m.a.time},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Victoria",p="Hello! How are you?",E="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:f,message:p,name:d,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=t(2),g=t(3),b=t.n(g);var k=function(e){var a="high"===e.affair.priority?b.a.high:"middle"===e.affair.priority?b.a.middle:"low"===e.affair.priority?b.a.low:b.a.all,t="".concat(b.a.closeBtn," ").concat(b.a.gray);return r.a.createElement("div",{className:b.a.container},r.a.createElement("div",{className:a},e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:t},"X")))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t="".concat(b.a.gray," ").concat(b.a.filterBtn," "),n="".concat(b.a.red," ").concat(b.a.filterBtn," "),l="".concat(b.a.orange," ").concat(b.a.filterBtn," "),c="".concat(b.a.green," ").concat(b.a.filterBtn," ");return r.a.createElement("div",null,a,r.a.createElement("button",{className:t,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:n,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:l,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:c,onClick:function(){return e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(n.useState)(C),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(v.a)(c,2),o=i[0],u=i[1],s=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"==e.priority})):"middle"===a?e.filter((function(e){return"middle"==e.priority})):"low"===a?e.filter((function(e){return"low"==e.priority})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(19),j=t(10),A=t.n(j),O=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=l?A.a.error:A.a.input,o="".concat(A.a.skewBtn," ").concat(A.a.purple);return r.a.createElement("div",{className:A.a.container},r.a.createElement("input",{value:a,onChange:t,className:i}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:o},"add"),r.a.createElement("span",null,c))},x=t(28),B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),i=c[0],o=c[1],u=Object(n.useState)(null),s=Object(v.a)(u,2),m=s[0],_=s[1],f=a.length,d=function(){var e=i.trim();e?(alert("Hello,  ".concat(i,"  !")),t(Object(x.a)(),e)):_("Name is required"),o("")};return r.a.createElement(O,{name:i,setNameCallback:function(e){_(null),o(e.currentTarget.value)},addUser:d,error:m,totalUsers:f})};var S=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(B,{users:t,addUserCallback:function(e,a){l([{_id:e,name:a}].concat(Object(y.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(9),H=t(13),I=t.n(H),M=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=(e.className,e.spanClassName),o=Object(T.a)(e,M),u="".concat(I.a.error," ").concat(i||""),s="".concat(c?I.a.errorInput:""," ").concat(I.a.input);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:s},o)),c&&r.a.createElement("span",{className:u},c))},F=t(18),G=t.n(F),P=t(14),U=t.n(P),V=["red","className"],J=function(e){var a=e.red,t=(e.className,Object(T.a)(e,V)),n="".concat(a?U.a.red:U.a.default," ").concat(U.a.skewBtn," ");return r.a.createElement("button",Object.assign({className:n},t))},K=t(12),X=t.n(K),q=["type","onChange","onChangeChecked","className","spanClassName","children"],Z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=(e.className,e.spanClassName,e.children),l=Object(T.a)(e,q),c="".concat(X.a.checkbox," ").concat(X.a.input?X.a.input:"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:X.a.spanClassName},n))};var z=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(v.a)(o,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:i,error:c}),r.a.createElement(J,{red:!0,onClick:i},"delete "),r.a.createElement(Z,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(Z,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var D=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(w,null),r.a.createElement(S,null),r.a.createElement(z,null))};var L=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var Y=function(){return r.a.createElement("div",null)};var Q=function(){return r.a.createElement("div",null)},R="/pre-junior",$="/junior",ee="/junior+";var ae=function(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",element:r.a.createElement(u.a,{to:R})}),r.a.createElement(u.b,{path:R,element:r.a.createElement(D,null)}),r.a.createElement(u.b,{path:$,element:r.a.createElement(Y,null)}),r.a.createElement(u.b,{path:ee,element:r.a.createElement(Q,null)}),"// add routes",r.a.createElement(u.b,{path:"/*",element:r.a.createElement(L,null)})))},te=t(5),ne=t.n(te),re=t(6);var le=function(){return r.a.createElement("div",{className:ne.a.header},r.a.createElement(re.b,{to:R,className:function(e){return e.isActive?ne.a.active:ne.a.link}},"pre-junior"),r.a.createElement(re.b,{to:$,className:function(e){return e.isActive?ne.a.active:ne.a.link}},"junior"),r.a.createElement(re.b,{to:ee,className:function(e){return e.isActive?ne.a.active:ne.a.link}},"junior+"),r.a.createElement("div",{className:ne.a.block}))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(re.a,null,r.a.createElement(le,null),r.a.createElement(ae,null)))};var ie=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.9f062584.chunk.js.map