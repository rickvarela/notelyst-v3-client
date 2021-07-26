(this["webpackJsonpnotelyst-v3"]=this["webpackJsonpnotelyst-v3"]||[]).push([[0],{47:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,d,s,l,u,j,b,h,p,O,f,x,g,E,m,v,y,w,_,S,U=t(0),N=t.n(U),T=t(24),C=t.n(T),k=(t(47),t(5)),D=t(6),M=t(17),L=t(9),P=t(7),F=t(2),I=t(3),A=function(e){return"https://api.rickvarela.com"+e},R=Object(U.createContext)(),J=function(e){var n=e.children,t=Object(U.useState)({isLoaded:!1,authUser:null}),i=Object(F.a)(t,2),c=i[0],a=i[1],r={authState:c,actions:{checkAuth:function(){fetch(A("/api/checkAuth")).then((function(e){return e.json()})).then((function(e){e.authUser?a({isLoaded:!0,authUser:e.authUser}):a({isLoaded:!0,authUser:null})}))},login:function(e,n){fetch(A("/api/auth"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(){n()}))},signUp:function(e,n){fetch(A("/api/signup"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(){n()}))},signOut:function(){fetch(A("/api/delete"),{method:"POST",credentials:"include"}).then((function(){a((function(e){return Object(P.a)(Object(P.a)({},e),{},{authUser:null})}))}))}}};return Object(I.jsx)(R.Provider,{value:r,children:n})},q=function(){return Object(U.useContext)(R)},G=t(13),W=t(35),z=Object(U.createContext)(),B=function(e,n){switch(n.type){case"UPDATE_NOTE_UNDER_EDIT":return Object(P.a)(Object(P.a)({},e),{},{editorFocus:!1,data:e.data.map((function(t){return t._id===e._idUnderEdit?Object(P.a)(Object(P.a)({},t),n.payload.note):t}))});case"CHANGE_NOTE_UNDER_EDIT":return Object(P.a)(Object(P.a)({},e),{},{editorFocus:!0,_idUnderEdit:n.payload._idUnderEdit});case"CREATE_NEW_NOTE":var t=Object(W.a)();return Object(P.a)(Object(P.a)({},e),{},{editorFocus:!0,_idUnderEdit:t,data:[H(t)].concat(Object(G.a)(e.data))});case"DELETE_NOTE":return 1===e.data.length?e:e._idUnderEdit===n.payload._idToDelete?(c=e.data.filter((function(e,t){return e._id!==n.payload._idToDelete||(i=t,!1)})),a=i===c.length?c[c.length-1]._id:c[i]._id,Object(P.a)(Object(P.a)({},e),{},{_idUnderEdit:a,data:c})):Object(P.a)(Object(P.a)({},e),{},{data:e.data.filter((function(e){return e._id!==n.payload._idToDelete}))});var i,c,a;default:return e}},H=function(e){return{_id:e,editorState:[{type:"paragraph",children:[{text:""}]}],selection:{anchor:{path:[0,0],offset:0},focus:{path:[0,0],offset:0}}}},X=function(e){var n=e.children,t=Object(U.useReducer)(B,function(){var e=sessionStorage.getItem("noteLyst-data");if(e=JSON.parse(sessionStorage.getItem("noteLyst-data")))return{_idUnderEdit:(e=e.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{selection:{anchor:{path:[0,0],offset:0},focus:{path:[0,0],offset:0}}})})))[0]._id,editorFocus:!0,data:e};var n=Object(W.a)();return{_idUnderEdit:n,editorFocus:!0,data:[H(n)]}}()),i=Object(F.a)(t,2),c=i[0],a=i[1];Object(U.useEffect)((function(){sessionStorage.setItem("noteLyst-data",JSON.stringify(c.data.map((function(e){return{_id:e._id,editorState:e.editorState}}))))}),[c.data]);var r={noteState:c,dispatchNoteState:a};return Object(I.jsx)(z.Provider,{value:r,children:n})},$=function(){return Object(U.useContext)(z)},K=t(1),Q=t.p+"static/media/site-logo.fbbde1f3.svg",V=t.p+"static/media/close-x.b49d62b8.svg",Y=D.a.div(i||(i=Object(k.a)(["\n  background-color: #e7ebee;\n  width: ",";\n  overflow-x: hidden;\n  opacity: ",";\n  transition: opacity 700ms;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.screenState;return n.expandMenu?0:n.isMobile?"100%":"400px"}),(function(e){return e.screenState.expandMenu?0:"100%"})),Z=function(e){var n=e.handelExpand,t=e.screenState;return Object(I.jsxs)(Y,{handelExpand:n,screenState:t,children:[Object(I.jsx)(ie,{handelExpand:n,screenState:t}),Object(I.jsx)(ae,{handelExpand:n,screenState:t})]})},ee=D.a.div(c||(c=Object(k.a)(["\n  background-color: #324a5f;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n"]))),ne=D.a.img(a||(a=Object(k.a)(["\n  height: 25px;\n  margin: auto 5px;\n"]))),te=D.a.button(r||(r=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  background-color: #ced6df;\n  line-height: 35px;\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n\n  &:hover {\n    background-color: #bbc6d3;\n  }\n"]))),ie=function(e){var n=e.handelExpand,t=e.screenState,i=$().dispatchNoteState;return Object(I.jsxs)(ee,{children:[Object(I.jsx)(ne,{src:Q}),Object(I.jsxs)("div",{children:[t.isMobile&&Object(I.jsx)(te,{onClick:n,children:"CLOSE MENU"}),Object(I.jsx)(te,{onClick:function(){i({type:"CREATE_NEW_NOTE"})},children:"NEW NOTE"})]})]})},ce=D.a.div(o||(o=Object(k.a)(["\n  overflow-y: auto;\n"]))),ae=function(e){var n=e.handelExpand,t=e.screenState,i=$(),c=i.noteState;i.dispatchNoteState;return Object(I.jsx)(ce,{children:c.data.map((function(e){return Object(I.jsx)(le,{note:e,_idUnderEdit:c._idUnderEdit,handelExpand:n,screenState:t},e._id)}))})},re=D.a.div(d||(d=Object(k.a)(["\n  background-color: ",";\n  padding: 5px;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #bbc6d3;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  img {\n    opacity: 0;\n    height: 15px;\n  }\n\n  &:hover img {\n    opacity: 1;\n  }\n"])),(function(e){return e.isCurrent?"#A1B9CE":"none"}),(function(e){return e.isCurrent?"none":"#CED6DF"})),oe=D.a.div(s||(s=Object(k.a)(["\n  width: 20px;\n  width: 20px;\n"]))),de=D.a.div(l||(l=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding-left: 5px;\n"]))),se=D.a.div(u||(u=Object(k.a)(["\n  font-weight: ",";\n  margin: auto 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 1.5em;\n"])),(function(e){return e.bold?"bold":"normal"})),le=function(e){var n=e.note,t=e._idUnderEdit,i=e.handelExpand,c=e.screenState,a=$(),r=(a.noteState,a.dispatchNoteState),o=n.editorState;return Object(I.jsxs)(re,{isCurrent:n._id===t,children:[Object(I.jsx)(oe,{children:Object(I.jsx)("img",{onClick:function(){r({type:"DELETE_NOTE",payload:{_idToDelete:n._id}})},src:V})}),Object(I.jsxs)(de,{onClick:function(){r({type:"CHANGE_NOTE_UNDER_EDIT",payload:{_idUnderEdit:n._id}}),c.isMobile&&i()},children:[Object(I.jsx)(se,{bold:!0,children:o.length<=1&&""===K.c.string(o[0])?"New note...":K.c.string(o[0])}),o.length>1&&Object(I.jsx)(se,{children:o.slice(1).filter((function(e){return""!==K.c.string(e)})).map((function(e){return K.c.string(e).trim()})).join(" ")})]})]})},ue=t(23),je=t.p+"static/media/user-icon.e4431ccb.svg",be=D.a.div(j||(j=Object(k.a)(["\n  //background-color: none;\n  flex: 1;\n  display: flex;\n  width: ",";\n  overflow: hidden;\n  flex-direction: column;\n"])),(function(e){var n=e.screenState;return n.isMobile&&n.expandMenu?"100%":0})),he=function(e){var n=e.handelExpand;e.screenState;return Object(I.jsxs)(be,{screenState:!0,children:[Object(I.jsx)(me,{handelExpand:n}),Object(I.jsx)(ye,{})]})},pe=D.a.div(b||(b=Object(k.a)(["\n  background-color: #324a5f;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),Oe=D.a.button(h||(h=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  background-color: #ced6df;\n  line-height: 35px;\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n\n  &:hover {\n    background-color: #bbc6d3;\n  }\n"]))),fe=D.a.nav(p||(p=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),xe=Object(D.a)(M.b)(O||(O=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  background-color: #ced6df;\n  line-height: 35px;\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #bbc6d3;\n  }\n"]))),ge=D.a.img(f||(f=Object(k.a)(["\n  height: 20px;\n"]))),Ee=D.a.div(x||(x=Object(k.a)(["\n  margin: 0 40px 0 10px;\n"]))),me=function(e){var n=e.handelExpand,t=q(),i=t.authState,c=t.actions;return Object(I.jsxs)(pe,{children:[Object(I.jsx)(Oe,{onClick:n,children:"EXPAND MENU"}),Object(I.jsx)(fe,{children:i.authUser?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ge,{src:je}),Object(I.jsx)(Ee,{children:i.authUser.username}),Object(I.jsx)(Oe,{onClick:c.signOut,children:"SIGN OUT"})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(xe,{to:"/signup",role:"button",children:"SIGN UP"}),Object(I.jsx)(xe,{to:"/login",role:"button",children:"LOGIN"})]})})]})},ve=D.a.div(g||(g=Object(k.a)(["\n  flex: 1;\n  padding: 40px;\n"]))),ye=function(){var e=Object(U.useMemo)((function(){return Object(ue.d)(Object(K.h)())}),[]),n=$(),t=n.noteState,i=n.dispatchNoteState;Object(U.useEffect)((function(){t.editorFocus&&(K.g.select(e,c()),ue.b.focus(e))}),[t]);var c=function(){return t.data.filter((function(e){return e._id===t._idUnderEdit}))[0].selection};return Object(I.jsx)(ve,{children:Object(I.jsx)(ue.c,{editor:e,value:t.data.filter((function(e){return e._id===t._idUnderEdit}))[0].editorState,onChange:function(e){i({type:"UPDATE_NOTE_UNDER_EDIT",payload:{note:{editorState:e}}})},children:Object(I.jsx)(ue.a,{placeholder:"Enter some text...",autoFocus:!0,onBlur:function(){i({type:"UPDATE_NOTE_UNDER_EDIT",payload:{note:{selection:e.selection}}})}})})})},we=D.a.div(E||(E=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]))),_e=function(){var e=Object(U.useState)({isMobile:window.innerWidth<800,expandMenu:!1}),n=Object(F.a)(e,2),t=n[0],i=n[1],c=q().actions;Object(U.useEffect)((function(){c.checkAuth();var e=function(){i((function(e){return Object(P.a)(Object(P.a)({},e),{},{isMobile:window.innerWidth<800})}))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var a=function(){i((function(e){return Object(P.a)(Object(P.a)({},e),{},{expandMenu:!e.expandMenu})}))};return Object(I.jsx)(X,{children:Object(I.jsxs)(we,{children:[Object(I.jsx)(Z,{handelExpand:a,screenState:t}),Object(I.jsx)(he,{handelExpand:a,screenState:t})]})})},Se=t(10),Ue=D.a.div(m||(m=Object(k.a)(["\n  background-color: #324a5f;\n  color: white;\n  height: 35px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Ne=D.a.img(v||(v=Object(k.a)(["\n  height: 25px;\n  margin-left: 5px;\n"]))),Te=function(){return Object(I.jsx)(Ue,{children:Object(I.jsx)(Ne,{src:Q})})},Ce=D.a.form(y||(y=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  margin: auto;\n  border: 1px solid black;\n  padding: 40px;\n  border-radius: 5px;\n\n  > input {\n    font-size: 1.25rem;\n  }\n\n  > input:-webkit-autofill::first-line {\n    font-family: $body-font;\n    font-size: 1.25rem;\n  }\n\n  input[type='submit'] {\n    margin-top: 20px;\n  }\n"]))),ke=D.a.div(w||(w=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),De=function(){var e=Object(U.useState)({username:"",email:"",password:""}),n=Object(F.a)(e,2),t=n[0],i=n[1],c=Object(L.f)(),a=q().actions,r=function(e){var n=e.target,t=n.value,c=n.name;i((function(e){return Object(P.a)(Object(P.a)({},e),{},Object(Se.a)({},c,t))}))};return Object(I.jsxs)(ke,{children:[Object(I.jsx)(Te,{}),Object(I.jsxs)(Ce,{onSubmit:function(e){e.preventDefault(),a.signUp(t,(function(){c.push("/")}))},children:[Object(I.jsx)("h2",{children:"Create a new account"}),Object(I.jsx)("label",{children:"UserName"}),Object(I.jsx)("input",{type:"text",name:"username",placeholder:"Enter Username",value:t.username,onChange:r,required:!0}),Object(I.jsx)("label",{children:"Email"}),Object(I.jsx)("input",{type:"text",name:"email",placeholder:"Enter Email",value:t.email,onChange:r,required:!0}),Object(I.jsx)("label",{children:"Password"}),Object(I.jsx)("input",{type:"text",name:"password",placeholder:"Enter Password",value:t.password,onChange:r,required:!0}),Object(I.jsx)("input",{type:"submit"})]})]})},Me=D.a.div(_||(_=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),Le=function(){var e=Object(L.f)(),n=Object(U.useState)({username:"",password:""}),t=Object(F.a)(n,2),i=t[0],c=t[1],a=q().actions,r=function(e){var n=e.target,t=n.value,i=n.name;c((function(e){return Object(P.a)(Object(P.a)({},e),{},Object(Se.a)({},i,t))}))};return Object(I.jsxs)(Me,{children:[Object(I.jsx)(Te,{}),Object(I.jsxs)(Ce,{onSubmit:function(n){n.preventDefault(),a.login(i,(function(){e.push("/")}))},children:[Object(I.jsx)("h2",{children:"Login"}),Object(I.jsx)("label",{children:"UserName"}),Object(I.jsx)("input",{type:"text",name:"username",placeholder:"Enter Username",value:i.username,onChange:r,required:!0}),Object(I.jsx)("label",{children:"Password"}),Object(I.jsx)("input",{type:"password",name:"password",placeholder:"Enter Username",value:i.password,onChange:r,required:!0}),Object(I.jsx)("input",{type:"submit",value:"submit"})]})]})},Pe=D.a.div(S||(S=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Nunito', sans-serif;\n"])));var Fe=function(){return Object(I.jsx)(Pe,{children:Object(I.jsx)(M.a,{children:Object(I.jsxs)(L.c,{children:[Object(I.jsx)(L.a,{path:"/",exact:!0,children:Object(I.jsx)(_e,{})}),Object(I.jsx)(L.a,{path:"/signup",children:Object(I.jsx)(De,{})}),Object(I.jsx)(L.a,{path:"/login",children:Object(I.jsx)(Le,{})})]})})})},Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};C.a.render(Object(I.jsx)(N.a.StrictMode,{children:Object(I.jsx)(J,{children:Object(I.jsx)(Fe,{})})}),document.getElementById("root")),Ie()}},[[67,1,2]]]);
//# sourceMappingURL=main.13eee454.chunk.js.map