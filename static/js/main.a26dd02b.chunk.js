(this["webpackJsonpnotelyst-v3"]=this["webpackJsonpnotelyst-v3"]||[]).push([[0],{47:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,d,s,l,u,j,b,h,p,O,x,f,g,E,m,v,y,w,S,_,U=t(0),N=t.n(U),T=t(24),C=t.n(T),k=(t(47),t(5)),D=t(6),M=t(17),L=t(9),P=t(7),F=t(2),I=t(3),A=Object(U.createContext)(),R=function(e){var n=e.children,t=Object(U.useState)({isLoaded:!1,authUser:null}),i=Object(F.a)(t,2),c=i[0],a=i[1],r={authState:c,actions:{checkAuth:function(){fetch("/api/checkAuth").then((function(e){return e.json()})).then((function(e){e.authUser?a({isLoaded:!0,authUser:e.authUser}):a({isLoaded:!0,authUser:null})}))},login:function(e,n){fetch("api/auth",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(){n()}))},signUp:function(e,n){fetch("/api/signup",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(){n()}))},signOut:function(){fetch("/api/delete",{method:"POST",credentials:"include"}).then((function(){a((function(e){return Object(P.a)(Object(P.a)({},e),{},{authUser:null})}))}))}}};return Object(I.jsx)(A.Provider,{value:r,children:n})},J=function(){return Object(U.useContext)(A)},q=t(13),G=t(35),W=Object(U.createContext)(),z=function(e,n){switch(n.type){case"UPDATE_NOTE_UNDER_EDIT":return Object(P.a)(Object(P.a)({},e),{},{editorFocus:!1,data:e.data.map((function(t){return t._id===e._idUnderEdit?Object(P.a)(Object(P.a)({},t),n.payload.note):t}))});case"CHANGE_NOTE_UNDER_EDIT":return Object(P.a)(Object(P.a)({},e),{},{editorFocus:!0,_idUnderEdit:n.payload._idUnderEdit});case"CREATE_NEW_NOTE":var t=Object(G.a)();return Object(P.a)(Object(P.a)({},e),{},{editorFocus:!0,_idUnderEdit:t,data:[B(t)].concat(Object(q.a)(e.data))});case"DELETE_NOTE":return 1===e.data.length?e:e._idUnderEdit===n.payload._idToDelete?(c=e.data.filter((function(e,t){return e._id!==n.payload._idToDelete||(i=t,!1)})),a=i===c.length?c[c.length-1]._id:c[i]._id,Object(P.a)(Object(P.a)({},e),{},{_idUnderEdit:a,data:c})):Object(P.a)(Object(P.a)({},e),{},{data:e.data.filter((function(e){return e._id!==n.payload._idToDelete}))});var i,c,a;default:return e}},B=function(e){return{_id:e,editorState:[{type:"paragraph",children:[{text:""}]}],selection:{anchor:{path:[0,0],offset:0},focus:{path:[0,0],offset:0}}}},H=function(e){var n=e.children,t=(J().authState,Object(U.useReducer)(z,function(){var e=sessionStorage.getItem("noteLyst-data");if(e=JSON.parse(sessionStorage.getItem("noteLyst-data")))return{_idUnderEdit:(e=e.map((function(e){return Object(P.a)(Object(P.a)({},e),{},{selection:{anchor:{path:[0,0],offset:0},focus:{path:[0,0],offset:0}}})})))[0]._id,editorFocus:!0,data:e};var n=Object(G.a)();return{_idUnderEdit:n,editorFocus:!0,data:[B(n)]}}())),i=Object(F.a)(t,2),c=i[0],a=i[1];Object(U.useEffect)((function(){sessionStorage.setItem("noteLyst-data",JSON.stringify(c.data.map((function(e){return{_id:e._id,editorState:e.editorState}}))))}),[]);var r={noteState:c,dispatchNoteState:a};return Object(I.jsx)(W.Provider,{value:r,children:n})},X=function(){return Object(U.useContext)(W)},$=t(1),K=t.p+"static/media/site-logo.fbbde1f3.svg",Q=t.p+"static/media/close-x.b49d62b8.svg",V=D.a.div(i||(i=Object(k.a)(["\n  background-color: #e7ebee;\n  width: ",";\n  overflow-x: hidden;\n  opacity: ",";\n  transition: opacity 700ms;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.screenState;return n.expandMenu?0:n.isMobile?"100%":"400px"}),(function(e){return e.screenState.expandMenu?0:"100%"})),Y=function(e){var n=e.handelExpand,t=e.screenState;return Object(I.jsxs)(V,{handelExpand:n,screenState:t,children:[Object(I.jsx)(te,{handelExpand:n,screenState:t}),Object(I.jsx)(ce,{handelExpand:n,screenState:t})]})},Z=D.a.div(c||(c=Object(k.a)(["\n  background-color: #324a5f;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n"]))),ee=D.a.img(a||(a=Object(k.a)(["\n  height: 25px;\n  margin: auto 5px;\n"]))),ne=D.a.button(r||(r=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  background-color: #ced6df;\n  line-height: 35px;\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n\n  &:hover {\n    background-color: #bbc6d3;\n  }\n"]))),te=function(e){var n=e.handelExpand,t=e.screenState,i=X().dispatchNoteState;return Object(I.jsxs)(Z,{children:[Object(I.jsx)(ee,{src:K}),Object(I.jsxs)("div",{children:[t.isMobile&&Object(I.jsx)(ne,{onClick:n,children:"CLOSE MENU"}),Object(I.jsx)(ne,{onClick:function(){i({type:"CREATE_NEW_NOTE"})},children:"NEW NOTE"})]})]})},ie=D.a.div(o||(o=Object(k.a)(["\n  overflow-y: auto;\n"]))),ce=function(e){var n=e.handelExpand,t=e.screenState,i=X(),c=i.noteState;i.dispatchNoteState;return Object(I.jsx)(ie,{children:c.data.map((function(e){return Object(I.jsx)(se,{note:e,_idUnderEdit:c._idUnderEdit,handelExpand:n,screenState:t},e._id)}))})},ae=D.a.div(d||(d=Object(k.a)(["\n  background-color: ",";\n  padding: 5px;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #bbc6d3;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  img {\n    opacity: 0;\n    height: 15px;\n  }\n\n  &:hover img {\n    opacity: 1;\n  }\n"])),(function(e){return e.isCurrent?"#A1B9CE":"none"}),(function(e){return e.isCurrent?"none":"#CED6DF"})),re=D.a.div(s||(s=Object(k.a)(["\n  width: 20px;\n  width: 20px;\n"]))),oe=D.a.div(l||(l=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding-left: 5px;\n"]))),de=D.a.div(u||(u=Object(k.a)(["\n  font-weight: ",";\n  margin: auto 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 1.5em;\n"])),(function(e){return e.bold?"bold":"normal"})),se=function(e){var n=e.note,t=e._idUnderEdit,i=e.handelExpand,c=e.screenState,a=X(),r=(a.noteState,a.dispatchNoteState),o=n.editorState;return Object(I.jsxs)(ae,{isCurrent:n._id===t,children:[Object(I.jsx)(re,{children:Object(I.jsx)("img",{onClick:function(){r({type:"DELETE_NOTE",payload:{_idToDelete:n._id}})},src:Q})}),Object(I.jsxs)(oe,{onClick:function(){r({type:"CHANGE_NOTE_UNDER_EDIT",payload:{_idUnderEdit:n._id}}),c.isMobile&&i()},children:[Object(I.jsx)(de,{bold:!0,children:o.length<=1&&""===$.c.string(o[0])?"New note...":$.c.string(o[0])}),o.length>1&&Object(I.jsx)(de,{children:o.slice(1).filter((function(e){return""!==$.c.string(e)})).map((function(e){return $.c.string(e).trim()})).join(" ")})]})]})},le=t(23),ue=t.p+"static/media/user-icon.e4431ccb.svg",je=D.a.div(j||(j=Object(k.a)(["\n  //background-color: none;\n  flex: 1;\n  display: flex;\n  width: ",";\n  overflow: hidden;\n  flex-direction: column;\n"])),(function(e){var n=e.screenState;return n.isMobile&&n.expandMenu?"100%":0})),be=function(e){var n=e.handelExpand;e.screenState;return Object(I.jsxs)(je,{screenState:!0,children:[Object(I.jsx)(Ee,{handelExpand:n}),Object(I.jsx)(ve,{})]})},he=D.a.div(b||(b=Object(k.a)(["\n  background-color: #324a5f;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),pe=D.a.button(h||(h=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  background-color: #ced6df;\n  line-height: 35px;\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n\n  &:hover {\n    background-color: #bbc6d3;\n  }\n"]))),Oe=D.a.nav(p||(p=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),xe=Object(D.a)(M.b)(O||(O=Object(k.a)(["\n  text-decoration: none;\n  color: black;\n  background-color: #ced6df;\n  line-height: 35px;\n  padding: 0 10px;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #bbc6d3;\n  }\n"]))),fe=D.a.img(x||(x=Object(k.a)(["\n  height: 20px;\n"]))),ge=D.a.div(f||(f=Object(k.a)(["\n  margin: 0 40px 0 10px;\n"]))),Ee=function(e){var n=e.handelExpand,t=J(),i=t.authState,c=t.actions;return Object(I.jsxs)(he,{children:[Object(I.jsx)(pe,{onClick:n,children:"EXPAND MENU"}),Object(I.jsx)(Oe,{children:i.authUser?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(fe,{src:ue}),Object(I.jsx)(ge,{children:i.authUser.username}),Object(I.jsx)(pe,{onClick:c.signOut,children:"SIGN OUT"})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(xe,{to:"/signup",role:"button",children:"SIGN UP"}),Object(I.jsx)(xe,{to:"/login",role:"button",children:"LOGIN"})]})})]})},me=D.a.div(g||(g=Object(k.a)(["\n  flex: 1;\n  padding: 40px;\n"]))),ve=function(){var e=Object(U.useMemo)((function(){return Object(le.d)(Object($.h)())}),[]),n=X(),t=n.noteState,i=n.dispatchNoteState;Object(U.useEffect)((function(){t.editorFocus&&($.g.select(e,c()),le.b.focus(e))}),[t]);var c=function(){return t.data.filter((function(e){return e._id===t._idUnderEdit}))[0].selection};return Object(I.jsx)(me,{children:Object(I.jsx)(le.c,{editor:e,value:t.data.filter((function(e){return e._id===t._idUnderEdit}))[0].editorState,onChange:function(e){i({type:"UPDATE_NOTE_UNDER_EDIT",payload:{note:{editorState:e}}})},children:Object(I.jsx)(le.a,{placeholder:"Enter some text...",autoFocus:!0,onBlur:function(){i({type:"UPDATE_NOTE_UNDER_EDIT",payload:{note:{selection:e.selection}}})}})})})},ye=D.a.div(E||(E=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]))),we=function(){var e=Object(U.useState)({isMobile:window.innerWidth<800,expandMenu:!1}),n=Object(F.a)(e,2),t=n[0],i=n[1],c=J().actions;Object(U.useEffect)((function(){c.checkAuth();var e=function(){i((function(e){return Object(P.a)(Object(P.a)({},e),{},{isMobile:window.innerWidth<800})}))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var a=function(){i((function(e){return Object(P.a)(Object(P.a)({},e),{},{expandMenu:!e.expandMenu})}))};return Object(I.jsx)(H,{children:Object(I.jsxs)(ye,{children:[Object(I.jsx)(Y,{handelExpand:a,screenState:t}),Object(I.jsx)(be,{handelExpand:a,screenState:t})]})})},Se=t(10),_e=D.a.div(m||(m=Object(k.a)(["\n  background-color: #324a5f;\n  color: white;\n  height: 35px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Ue=D.a.img(v||(v=Object(k.a)(["\n  height: 25px;\n  margin-left: 5px;\n"]))),Ne=function(){return Object(I.jsx)(_e,{children:Object(I.jsx)(Ue,{src:K})})},Te=D.a.form(y||(y=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  margin: auto;\n  border: 1px solid black;\n  padding: 40px;\n  border-radius: 5px;\n\n  > input {\n    font-size: 1.25rem;\n  }\n\n  > input:-webkit-autofill::first-line {\n    font-family: $body-font;\n    font-size: 1.25rem;\n  }\n\n  input[type='submit'] {\n    margin-top: 20px;\n  }\n"]))),Ce=D.a.div(w||(w=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),ke=function(){var e=Object(U.useState)({username:"",email:"",password:""}),n=Object(F.a)(e,2),t=n[0],i=n[1],c=Object(L.f)(),a=J().actions,r=function(e){var n=e.target,t=n.value,c=n.name;i((function(e){return Object(P.a)(Object(P.a)({},e),{},Object(Se.a)({},c,t))}))};return Object(I.jsxs)(Ce,{children:[Object(I.jsx)(Ne,{}),Object(I.jsxs)(Te,{onSubmit:function(e){e.preventDefault(),a.signUp(t,(function(){c.push("/")}))},children:[Object(I.jsx)("h2",{children:"Create a new account"}),Object(I.jsx)("label",{children:"UserName"}),Object(I.jsx)("input",{type:"text",name:"username",placeholder:"Enter Username",value:t.username,onChange:r,required:!0}),Object(I.jsx)("label",{children:"Email"}),Object(I.jsx)("input",{type:"text",name:"email",placeholder:"Enter Email",value:t.email,onChange:r,required:!0}),Object(I.jsx)("label",{children:"Password"}),Object(I.jsx)("input",{type:"text",name:"password",placeholder:"Enter Password",value:t.password,onChange:r,required:!0}),Object(I.jsx)("input",{type:"submit"})]})]})},De=D.a.div(S||(S=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),Me=function(){var e=Object(L.f)(),n=Object(U.useState)({username:"",password:""}),t=Object(F.a)(n,2),i=t[0],c=t[1],a=J().actions,r=function(e){var n=e.target,t=n.value,i=n.name;c((function(e){return Object(P.a)(Object(P.a)({},e),{},Object(Se.a)({},i,t))}))};return Object(I.jsxs)(De,{children:[Object(I.jsx)(Ne,{}),Object(I.jsxs)(Te,{onSubmit:function(n){n.preventDefault(),a.login(i,(function(){e.push("/")}))},children:[Object(I.jsx)("h2",{children:"Login"}),Object(I.jsx)("label",{children:"UserName"}),Object(I.jsx)("input",{type:"text",name:"username",placeholder:"Enter Username",value:i.username,onChange:r,required:!0}),Object(I.jsx)("label",{children:"Password"}),Object(I.jsx)("input",{type:"password",name:"password",placeholder:"Enter Username",value:i.password,onChange:r,required:!0}),Object(I.jsx)("input",{type:"submit",value:"submit"})]})]})},Le=D.a.div(_||(_=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  width: 100vw;\n  font-family: 'Nunito', sans-serif;\n"])));var Pe=function(){return Object(I.jsx)(Le,{children:Object(I.jsx)(M.a,{children:Object(I.jsxs)(L.c,{children:[Object(I.jsx)(L.a,{path:"/",exact:!0,children:Object(I.jsx)(we,{})}),Object(I.jsx)(L.a,{path:"/signup",children:Object(I.jsx)(ke,{})}),Object(I.jsx)(L.a,{path:"/login",children:Object(I.jsx)(Me,{})})]})})})},Fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};C.a.render(Object(I.jsx)(N.a.StrictMode,{children:Object(I.jsx)(R,{children:Object(I.jsx)(Pe,{})})}),document.getElementById("root")),Fe()}},[[67,1,2]]]);
//# sourceMappingURL=main.a26dd02b.chunk.js.map