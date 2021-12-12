(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(19),o=n.n(i),c=n(13),r=(n(30),n(24)),l=n(3),u=n(2),d=n.p+"static/media/logo.c7581985.svg",p=n(0);function j(e){var t=e.link,n=e.text,a=e.loggedIn,s=e.email,i=void 0===s?"":s;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{className:"header__logo",src:d,alt:"around the u.s. logo"}),Object(p.jsxs)("div",{className:"header__container",children:[a&&Object(p.jsx)("p",{className:"header__email",children:i}),Object(p.jsx)("a",{className:"header__link",href:t,children:n})]})]})}var b=s.a.createContext();function h(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,i=e.onDeletePostClick,o=s.a.useContext(b);var c=t.owner._id===o._id,r="gallery__trash-button ".concat(c?"gallery__trash-button_visible":"gallery__trash-button_hidden"),l=t.likes.some((function(e){return e._id===o._id})),u="gallery__like-button ".concat(l&&"gallery__like-button_active");return Object(p.jsxs)("li",{className:"gallery__item",children:[Object(p.jsx)("button",{className:r,type:"button","aria-label":"delete button",onClick:function(){i(t)}}),Object(p.jsx)("div",{className:"gallery__photo",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){n(t)}}),Object(p.jsxs)("div",{className:"gallery__description",children:[Object(p.jsx)("h2",{className:"gallery__text",children:t.name}),Object(p.jsxs)("div",{className:"gallery__like-container",children:[Object(p.jsx)("button",{className:u,type:"button","aria-label":"like button",onClick:function(){a(t)}}),Object(p.jsx)("p",{className:"gallery__like-counter",children:t.likes.length})]})]})]})}function m(e){var t=e.onEditProfileClick,n=e.onAddPlaceClick,a=e.onEditAvatarClick,i=e.onDeletePostClick,o=e.onCardClick,c=e.cards,r=e.onCardLike,l=s.a.useContext(b);return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{className:"profile__avatar-container",style:{backgroundImage:'url("'.concat(l.avatar,'")')},children:Object(p.jsx)("button",{className:"profile__avatar-edit",onClick:a})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__info-title",children:[Object(p.jsx)("h1",{className:"profile__name",children:l.name}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"edit button",onClick:t})]}),Object(p.jsx)("p",{className:"profile__job-description",children:l.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"add button",onClick:n})]}),Object(p.jsx)("section",{className:"gallery",children:Object(p.jsx)("ul",{className:"gallery__list",children:c.map((function(e){return Object(p.jsx)(h,{card:e,onCardClick:o,onCardLike:r,onDeletePostClick:i},e._id)}))})})]})}function f(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copyrights",children:"\xa9 2021 Neta Hadar Itzhak"})})}function _(e){var t=e.card,n=e.onClose;return Object(p.jsx)("div",{className:"popup popup_type_photo ".concat(t.name?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container popup__container_type_photo",children:[Object(p.jsx)("button",{className:"popup__close-button popup__close-button_type_photo",type:"button",onClick:n}),Object(p.jsx)("div",{className:"popup__photo",style:{backgroundImage:"url(".concat(t.link,")")}}),Object(p.jsx)("h3",{className:"popup__text",children:t.name})]})})}var g=n(20),O=n(21),v=function(e,t){return fetch(e,t).then((function(e){if(e.ok)return e.json();Promise.reject("ERROR: ".concat(e.statusText))}))},x=new(function(){function e(t,n){Object(g.a)(this,e),this._baseUrl=t,this._headers=n}return Object(O.a)(e,[{key:"getUserInfo",value:function(){return v("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"setUserAvatar",value:function(e){return v("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})})}},{key:"getInitialCards",value:function(){return v("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"setUserInfo",value:function(e){return v("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"createNewCard",value:function(e){return v("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return v("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"_addLike",value:function(e){return v("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers})}},{key:"_dislike",value:function(e){return v("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._dislike(e):this._addLike(e)}}]),e}())("https://around.nomoreparties.co/v1/group-12",{authorization:"12be1991-4f28-449f-a9a9-71d4704b25a2","Content-Type":"application/json"});function k(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(p.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[Object(p.jsx)("h2",{className:"popup__form-title",children:e.title}),e.children,Object(p.jsx)("button",{className:"popup__form-submit-button",type:"submit",children:e.buttonTitle})]})]})})}function C(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,i=s.a.useState(""),o=Object(l.a)(i,2),c=o[0],r=o[1],u=s.a.useState(""),d=Object(l.a)(u,2),j=d[0],h=d[1];var m=s.a.useContext(b);return s.a.useEffect((function(){r(m.name),h(m.about)}),[m]),Object(p.jsxs)(k,{name:"profile",title:"Edit Profile",buttonTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c,about:j})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"name-input",type:"text",name:"name",value:c,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");r(t)},placeholder:"full name",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{id:"name-input-error"}),Object(p.jsx)("input",{className:"popup__form-input",id:"job-input",type:"text",name:"about",value:j,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");h(t)},placeholder:"job title",minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{id:"job-input-error"})]})}function N(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,i=s.a.useRef();return Object(p.jsxs)(k,{name:"avatar",title:"Change profile picture",buttonTitle:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault();var t=i.current.value.replace(/[*|\"<>[\]{}`;&$]+/," ");a({avatar:t})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"avatar-link",type:"url",name:"link",placeholder:"avatar link",ref:i,required:!0}),Object(p.jsx)("span",{id:"avatar-link-error"})]})}function y(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlaceSubmit,i=s.a.useState(""),o=Object(l.a)(i,2),c=o[0],r=o[1],u=s.a.useState(""),d=Object(l.a)(u,2),j=d[0],b=d[1];return Object(p.jsxs)(k,{name:"post",title:"New place",buttonTitle:"Create",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c,link:j})},children:[Object(p.jsx)("input",{className:"popup__form-input",id:"title-input",type:"text",name:"name",value:c,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");r(t)},placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(p.jsx)("span",{id:"title-input-error"}),Object(p.jsx)("input",{className:"popup__form-input",id:"link-input",type:"url",name:"link",value:j,onChange:function(e){var t=e.target.value.replace(/[*|\"<>[\]{}`;&$]+/," ");b(t)},placeholder:"Image link",required:!0}),Object(p.jsx)("span",{id:"link-input-error"})]})}function S(e){var t=e.isOpen,n=e.onClose,a=e.onDeletePostSubmit;return Object(p.jsx)(k,{name:"delete",title:"Are you sure?",buttonTitle:"Yes",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a()}})}var w=n(10),P=n(8);function I(e){return Object(p.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__frame",children:[Object(p.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(p.jsx)("img",{src:e.src,className:"popup__status-image"}),Object(p.jsx)("h2",{className:"popup__title",children:e.title})]})})}var U=n.p+"static/media/fail.df8eddf6.svg";function L(e){var t=e.onLogin,n=e.onClose,a=e.isOpen,i=s.a.useState({email:"",password:""}),o=Object(l.a)(i,2),c=o[0],r=o[1];function u(e){var t=e.target,n=t.name,a=t.value.replace(/[*|\"<>[\]{}`;&$]+/," ");r(Object(P.a)(Object(P.a)({},c),{},Object(w.a)({},n,a)))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"signing",children:[Object(p.jsx)("h1",{className:"signing__title",children:"Log In"}),Object(p.jsxs)("form",{className:"signing__form",onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(p.jsx)("input",{className:"signing__form-input",name:"email",placeholder:"Email",required:!0,type:"email",value:c.email,onChange:u}),Object(p.jsx)("input",{className:"signing__form-input",name:"password",placeholder:"Password",required:!0,type:"password",value:c.password,onChange:u}),Object(p.jsx)("button",{className:"signing__form-submit-button",type:"submit",children:"Log In"})]}),Object(p.jsx)("a",{className:"signing__link",href:"/signup",children:"Not a member yet? Sign up here!"})]}),Object(p.jsx)(I,{isOpen:a,name:"info",title:"Oops, something went wrong! Please try again.",src:U,onClose:n})]})}var E=n.p+"static/media/success.1b6082f8.svg";function T(e){var t=e.onRegister,n=e.onClose,a=e.isOpen,i=e.isSuccess,o=s.a.useState({email:"",password:""}),c=Object(l.a)(o,2),r=c[0],u=c[1];function d(e){var t=e.target,n=t.name,a=t.value.replace(/[*|\"<>[\]{}`;&$]+/," ");u(Object(P.a)(Object(P.a)({},r),{},Object(w.a)({},n,a)))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"signing",children:[Object(p.jsx)("h1",{className:"signing__title",children:"Sign Up"}),Object(p.jsxs)("form",{className:"signing__form",onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(p.jsx)("input",{className:"signing__form-input",name:"email",placeholder:"Email",required:!0,type:"email",value:r.email,onChange:d}),Object(p.jsx)("input",{className:"signing__form-input",name:"password",placeholder:"Password",required:!0,type:"password",value:r.password,onChange:d}),Object(p.jsx)("button",{className:"signing__form-submit-button",type:"submit",children:"Sign Up"})]}),Object(p.jsx)("a",{className:"signing__link",href:"/signin",children:"Already a member? Log in here!"})]}),Object(p.jsx)(I,{isOpen:a,name:"info",title:i?"Success! You have now been registered.":"Oops, something went wrong! Please try again.",src:i?E:U,onClose:n})]})}var A=n(25),D=["children","loggedIn"];var q=function(e){var t=e.children,n=e.loggedIn,a=Object(A.a)(e,D);return Object(p.jsx)(u.b,Object(P.a)(Object(P.a)({},a),{},{children:n?t:Object(p.jsx)(u.a,{to:"/signin"})}))},F="https://register.nomoreparties.co";var J=function(){var e=Object(u.g)(),t=s.a.useState(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],o=s.a.useState(!1),c=Object(l.a)(o,2),d=c[0],h=c[1],g=s.a.useState(!1),O=Object(l.a)(g,2),v=O[0],k=O[1],w=s.a.useState(!1),P=Object(l.a)(w,2),I=P[0],U=P[1],E=s.a.useState(!1),A=Object(l.a)(E,2),D=A[0],J=A[1],$=s.a.useState(!1),R=Object(l.a)($,2),z=R[0],B=R[1],H=s.a.useState({name:"",link:""}),Y=Object(l.a)(H,2),G=Y[0],M=Y[1],K=s.a.useState({name:"",about:"",avatar:"",_id:""}),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=s.a.useState([]),Z=Object(l.a)(X,2),ee=Z[0],te=Z[1],ne=s.a.useState({_id:""}),ae=Object(l.a)(ne,2),se=ae[0],ie=ae[1],oe=s.a.useState(!1),ce=Object(l.a)(oe,2),re=ce[0],le=ce[1],ue=s.a.useState(""),de=Object(l.a)(ue,2),pe=de[0],je=de[1];function be(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");(n=t,fetch("".concat(F,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()}))).then((function(t){t&&(le(!0),je(t.data.email),e.push("/"))})).catch(console.log)}var n}function he(){i(!1),h(!1),k(!1),U(!1),J(!1),M({name:"",link:""})}return s.a.useEffect((function(){x.getInitialCards().then((function(e){te(e)})).catch(console.log)}),[]),s.a.useEffect((function(){x.getUserInfo().then((function(e){W({name:e.name,about:e.about,avatar:e.avatar,_id:e._id})})).catch(console.log)}),[]),s.a.useEffect((function(){be()})),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.Provider,{value:V,children:Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(u.d,{children:[Object(p.jsxs)(u.b,{path:"/signup",children:[Object(p.jsx)(j,{link:"/signin",text:"Log In",loggedIn:re}),Object(p.jsx)(T,{onRegister:function(t){console.log(t),function(e){var t=e.email,n=e.password;return fetch("".concat(F,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){return e.json()})).then((function(e){if(e.error)throw new Error("User with this email address already exists")}))}(t).then((function(){e.push("/.signin"),B(!0),J(!0)})).catch((function(e){console.log(e),J(!0),B(!1)}))},onClose:he,isOpen:D,isSuccess:z})]}),Object(p.jsxs)(u.b,{path:"/signin",children:[Object(p.jsx)(j,{link:"/signup",text:"Sign Up",loggedIn:re}),Object(p.jsx)(L,{onLogin:function(e){(function(e){var t=e.email,n=e.password;return fetch("".concat(F,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){return e.json()})).then((function(e){if(!e.token)throw new Error("the user with the specified email not found");localStorage.setItem("jwt",e.token)}))})(e).then(be()).catch((function(e){console.log(e),J(!0)}))},onClose:he,isOpen:D})]}),Object(p.jsxs)(q,{path:"/",loggedIn:re,children:[Object(p.jsx)(j,{link:"/signin",text:"Log Out",loggedIn:re,email:pe}),Object(p.jsx)(m,{onEditProfileClick:function(){h(!0)},onAddPlaceClick:function(){k(!0)},onEditAvatarClick:function(){i(!0)},onDeletePostClick:function(e){U(!0),ie({_id:e._id})},onCardClick:function(e){M({name:e.name,link:e.link})},cards:ee,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===V._id}));x.changeLikeCardStatus(e._id,t).then((function(t){te((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch(console.log)}}),Object(p.jsx)(f,{}),Object(p.jsxs)("section",{children:[Object(p.jsx)(C,{isOpen:d,onClose:he,onUpdateUser:function(e){x.setUserInfo(e).then((function(e){W({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),he()})).catch(console.log)}}),Object(p.jsx)(y,{isOpen:v,onClose:he,onAddPlaceSubmit:function(e){x.createNewCard(e).then((function(e){te([e].concat(Object(r.a)(ee))),he()})).catch(console.log)}}),Object(p.jsx)(_,{card:G,onClose:he}),Object(p.jsx)(S,{isOpen:I,onClose:he,onDeletePostSubmit:function(){x.deleteCard(se._id).then((function(){var e=ee.filter((function(e){return e._id!==se._id}));te(e),he()})).catch(console.log)}}),Object(p.jsx)(N,{isOpen:a,onClose:he,onUpdateAvatar:function(e){x.setUserAvatar(e).then((function(e){W({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),he()})).catch(console.log)}})]})]})]})})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(c.a,{children:Object(p.jsx)(J,{})})}),document.getElementById("root")),$()}},[[37,1,2]]]);
//# sourceMappingURL=main.72eb67b5.chunk.js.map