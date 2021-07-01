(this["webpackJsonpreact-cv-builder"]=this["webpackJsonpreact-cv-builder"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),s=(n(93),n(106)),o=n(139),l=n(141),j=n(136),d=n(142),u=n(152),b=n(8),O=n(1),m=Object(a.createContext)(),x=function(e){var t=Object(a.useState)(!0),n=Object(b.a)(t,2),c=n[0],r=n[1];return Object(O.jsx)(m.Provider,{value:{build:c,toggleBuild:function(){return r(!c)}},children:e.children})},f=Object(j.a)((function(e){return{title:{flexGrow:1}}})),g=function(){var e=f(),t=Object(a.useContext)(m).toggleBuild;return Object(O.jsx)("div",{children:Object(O.jsx)(o.a,{color:"secondary",position:"static",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(s.a,{align:"center",variant:"h5",className:e.title,children:"Create Your Personal CV"}),Object(O.jsx)(d.a,{className:e.switch,onChange:t,control:Object(O.jsx)(u.a,{color:"primary"}),label:"Preview"})]})})})},h=n(144),p=n(153),v=n(151),y=function(e){var t=e.name,n=e.biography,a=e.setName,c=e.setBiography;return Object(O.jsxs)(h.a,{container:!0,direction:"column",justify:"center",children:[Object(O.jsx)(v.a,{value:t,onChange:function(e){return a(e.target.value)},label:"Full Name",variant:"filled",color:"secondary",size:"small",multiline:!0,rows:2,required:!0}),Object(O.jsx)(v.a,{value:n,onChange:function(e){return c(e.target.value)},label:"Biography",variant:"filled",color:"secondary",multiline:!0,rows:4,margin:"dense",required:!0})]})},N=n(54),C=n.n(N),S=n(55),k=n.n(S),I=n(56),F=n.n(I),E=n(57),w=n.n(E),L=Object(j.a)({icon:{marginTop:15,marginRight:10}}),D=function(e){var t=e.address,n=e.phone,a=e.email,c=e.linkedIn,r=e.setAddress,i=e.setPhone,s=e.setEmail,o=e.setLinkedIn,l=L();return Object(O.jsxs)(h.a,{container:!0,direction:"column",children:[Object(O.jsxs)(h.a,{item:!0,children:[Object(O.jsx)(C.a,{className:l.icon}),Object(O.jsx)(v.a,{value:t,onChange:function(e){return r(e.target.value)},label:"Address",variant:"standard",color:"secondary",size:"small",required:!0})]}),Object(O.jsxs)(h.a,{item:!0,children:[Object(O.jsx)(k.a,{className:l.icon}),Object(O.jsx)(v.a,{value:n,onChange:function(e){return i(e.target.value)},label:"Phone Number",variant:"standard",size:"small",color:"secondary",required:!0})]}),Object(O.jsxs)(h.a,{item:!0,children:[Object(O.jsx)(F.a,{className:l.icon}),Object(O.jsx)(v.a,{value:a,onChange:function(e){return s(e.target.value)},label:"Email",variant:"standard",color:"secondary",size:"small",required:!0})]}),Object(O.jsxs)(h.a,{item:!0,children:[Object(O.jsx)(w.a,{className:l.icon}),Object(O.jsx)(v.a,{value:c,onChange:function(e){return o(e.target.value)},label:"LinkedIn",variant:"standard",color:"secondary",size:"small"})]})]})},T=Object(a.createContext)(),P=function(e){var t=Object(a.useState)({}),n=Object(b.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){r(JSON.parse(localStorage.getItem("personalInfo"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("personalInfo",JSON.stringify(c))}),[c]);return Object(O.jsx)(T.Provider,{value:{personalInfo:c,saveInput:function(e,t,n,a,c,i){r({name:e,biography:t,address:n,phone:a,email:c,linkedIn:i})},setPersonalInfo:r},children:e.children})},B=Object(j.a)((function(e){return{field:{padding:20},spacing:{marginLeft:100},large:{width:e.spacing(17),height:e.spacing(17),marginTop:20,marginRight:10},switch:{marginTop:20,marginLeft:11,marginBottom:20},icon:{margin:20}}})),z=function(){var e=B(),t=Object(a.useContext)(T).personalInfo;return Object(O.jsxs)(h.a,{container:!0,direction:"row",alignItems:"center",children:[Object(O.jsxs)(h.a,{item:!0,xs:6,md:6,lg:6,className:e.field,children:[Object(O.jsx)(s.a,{className:e.switch,variant:"h4",children:t.name}),Object(O.jsx)(s.a,{className:e.switch,variant:"body1",children:t.biography})]}),Object(O.jsxs)(h.a,{item:!0,xs:6,md:6,lg:6,className:e.field,children:[Object(O.jsxs)(h.a,{container:!0,className:e.icon,children:[Object(O.jsx)(C.a,{className:e.spacing}),Object(O.jsx)(s.a,{children:t.address})]}),Object(O.jsxs)(h.a,{container:!0,className:e.icon,children:[Object(O.jsx)(k.a,{className:e.spacing}),Object(O.jsx)(s.a,{children:t.phone})]}),Object(O.jsxs)(h.a,{container:!0,className:e.icon,children:[Object(O.jsx)(F.a,{className:e.spacing}),Object(O.jsx)(s.a,{children:t.email})]}),Object(O.jsxs)(h.a,{container:!0,className:e.icon,children:[Object(O.jsx)(w.a,{className:e.spacing}),Object(O.jsx)(s.a,{children:t.linkedIn})]})]})]})},q=n(145),J=Object(j.a)((function(e){return{field:{padding:10},spacing:{marginBottom:20},large:{width:e.spacing(17),height:e.spacing(17),marginTop:20,marginRight:10},switch:{marginTop:20,marginLeft:11}}})),W=function(){var e=J(),t=Object(a.useContext)(m).build,n=Object(a.useContext)(T),c=n.saveInput,r=n.personalInfo,i=Object(a.useState)(r.name),s=Object(b.a)(i,2),o=s[0],l=s[1],j=Object(a.useState)(""),d=Object(b.a)(j,2),u=d[0],x=d[1],f=Object(a.useState)(""),g=Object(b.a)(f,2),v=g[0],N=g[1],C=Object(a.useState)(""),S=Object(b.a)(C,2),k=S[0],I=S[1],F=Object(a.useState)(""),E=Object(b.a)(F,2),w=E[0],L=E[1],P=Object(a.useState)(""),B=Object(b.a)(P,2),W=B[0],A=B[1];return Object(a.useEffect)((function(){return t?null:c(o,u,v,k,w,W)}),[t]),t?Object(O.jsx)(q.a,{children:Object(O.jsxs)(h.a,{container:!0,direction:"row",children:[Object(O.jsx)(h.a,{item:!0,xs:"auto",md:"auto",lg:"auto",className:e.field,children:Object(O.jsx)(p.a,{className:e.large,children:"User"})}),Object(O.jsx)(h.a,{item:!0,xs:4,md:4,lg:6,className:e.field,children:Object(O.jsx)(y,{name:o,biography:u,setName:l,setBiography:x})}),Object(O.jsx)(h.a,{item:!0,xs:"auto",md:"auto",lg:"auto",className:e.field,children:Object(O.jsx)(D,{address:v,phone:k,email:w,linkedIn:W,setPhone:I,setAddress:N,setEmail:L,setLinkedIn:A})})]})}):Object(O.jsx)(z,{})},A=n(38),R=n(36),M=n.n(R),V=Object(a.createContext)(),G=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){r(JSON.parse(localStorage.getItem("forms"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("forms",JSON.stringify(c))}),[c]);return Object(O.jsx)(V.Provider,{value:{forms:c,addForm:function(){r([].concat(Object(A.a)(c),[{id:M()()}]))},deleteForm:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)},saveForm:function(e,t,n,a,i,s){var o=c;o.forEach((function(c){c.id===s&&(c.company=e,c.position=t,c.description=n,c.startDate=a,c.endDate=i)})),r(o)}},children:e.children})},U=n(143),Y=n(23),H=n.n(Y),K=n(58),Q=n.n(K),X=Object(j.a)({position:{paddingLeft:15},company:{paddingTop:7},date:{paddingLeft:5},icon:{marginLeft:30}}),Z=function(e){var t=e.form,n=e.toggleEdit,c=X(),r=Object(a.useContext)(V).deleteForm,i=Object(a.useContext)(m).build;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(h.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(s.a,{className:c.company,variant:"h6",gutterBottom:!0,children:t.company}),Object(O.jsx)(s.a,{className:c.position,children:"\u2014"}),Object(O.jsx)(s.a,{className:c.position,variant:"h6",color:"secondary",children:t.position}),i?Object(O.jsxs)("div",{children:[Object(O.jsx)(U.a,{children:Object(O.jsx)(Q.a,{className:c.icon,onClick:function(){return n()}})}),Object(O.jsx)(U.a,{color:"primary",onClick:function(){return r(t.id)},children:Object(O.jsx)(H.a,{})})]}):null]}),Object(O.jsxs)(h.a,{container:!0,children:[Object(O.jsx)(s.a,{gutterBottom:!0,children:t.startDate}),Object(O.jsx)(s.a,{className:c.date,children:"-"}),Object(O.jsx)(s.a,{className:c.date,gutterBottom:!0,children:t.endDate})]}),Object(O.jsx)(s.a,{variant:"subtitle1",color:"textSecondary",children:t.description})]})},$=n(146),_=n(147),ee=n(59),te=n.n(ee),ne=Object(j.a)({position:{marginLeft:15},company:{marginTop:15},date:{marginLeft:30,marginTop:15}}),ae=function(e){var t=e.form,n=e.toggleEdit,c=ne(),r=Object(a.useContext)(V),i=r.saveForm,s=r.deleteForm,o=Object(a.useState)(t.company),l=Object(b.a)(o,2),j=l[0],d=l[1],u=Object(a.useState)(t.position),m=Object(b.a)(u,2),x=m[0],f=m[1],g=Object(a.useState)(t.description),p=Object(b.a)(g,2),y=p[0],N=p[1],C=Object(a.useState)(t.startDate),S=Object(b.a)(C,2),k=S[0],I=S[1],F=Object(a.useState)(t.endDate),E=Object(b.a)(F,2),w=E[0],L=E[1];return Object(O.jsx)($.a,{variant:"Media",children:Object(O.jsxs)(_.a,{children:[Object(O.jsxs)(h.a,{container:!0,direction:"column",children:[Object(O.jsx)(v.a,{value:j,onChange:function(e){return d(e.target.value)},label:"Company",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"}),Object(O.jsx)(v.a,{value:x,onChange:function(e){return f(e.target.value)},label:"Position",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"}),Object(O.jsx)(v.a,{value:y,onChange:function(e){return N(e.target.value)},label:"Description",type:"text",variant:"outlined",color:"secondary",size:"small",margin:"dense",multiline:!0,rows:3,required:!0})]}),Object(O.jsx)(v.a,{className:c.company,onChange:function(e){return I(e.target.value)},value:k,id:"date",label:"Start Date: ",type:"date",InputLabelProps:{shrink:!0}}),Object(O.jsx)(v.a,{className:c.date,onChange:function(e){return L(e.target.value)},value:w,id:"date",label:"End Date: ",type:"date",defaultValue:"2021-06-29",InputLabelProps:{shrink:!0}}),Object(O.jsxs)(h.a,{container:!0,justify:"flex-end",children:[Object(O.jsx)(U.a,{children:Object(O.jsx)(te.a,{onClick:function(e){e.preventDefault(),i(j,x,y,k,w,t.id),n(t.id)}})}),Object(O.jsx)(U.a,{color:"primary",onClick:function(){return s(t.id)},children:Object(O.jsx)(H.a,{})})]})]})})},ce=function(e){var t=e.form,n=Object(a.useState)(!0),c=Object(b.a)(n,2),r=c[0],i=c[1],s=Object(a.useContext)(m).build;Object(a.useEffect)((function(){return i(!!s)}),[s]);var o=function(){return i(!r)};return r?Object(O.jsx)(ae,{form:t,toggleEdit:o}):Object(O.jsx)(Z,{form:t,toggleEdit:o})},re=function(){var e=Object(a.useContext)(V).forms;return Object(O.jsx)("div",{children:e.map((function(e){return Object(O.jsx)(ce,{form:e},e.id)}))})},ie=n(149),se=n(37),oe=n.n(se),le=n(74),je=n.n(le),de=n(148),ue=Object(j.a)({position:{marginTop:15},work:{marginRight:10},divider:{marginTop:20}}),be=function(){var e=ue(),t=Object(a.useContext)(V).addForm,n=Object(a.useContext)(m).build;return Object(O.jsxs)(q.a,{children:[Object(O.jsx)(de.a,{style:{background:"black"},variant:"fullWidth"}),Object(O.jsxs)(h.a,{className:e.position,container:!0,alignItems:"center",children:[Object(O.jsx)(je.a,{fontSize:"large",className:e.work}),Object(O.jsx)(s.a,{align:"left",variant:"h4",children:"Work Experience"})]}),Object(O.jsx)(de.a,{variant:"fullWidth"}),Object(O.jsx)(re,{}),n?Object(O.jsx)(ie.a,{className:e.position,type:"submit",onClick:function(){return t()},color:"secondary",variant:"contained",startIcon:Object(O.jsx)(oe.a,{}),children:"Add More"}):null,Object(O.jsx)(de.a,{style:{background:"black"},className:e.divider,variant:"fullWidth"})]})},Oe=Object(a.createContext)(),me=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){r(JSON.parse(localStorage.getItem("eduForms"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("eduForms",JSON.stringify(c))}),[c]);return Object(O.jsx)(Oe.Provider,{value:{eduForms:c,addForm:function(){r([].concat(Object(A.a)(c),[{id:M()()}]))},deleteForm:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)},saveForm:function(e,t,n,a,i){var s=c;s.forEach((function(c){c.id===i&&(c.school=e,c.degree=t,c.startDate=n,c.endDate=a)})),r(s)}},children:e.children})},xe=Object(j.a)({position:{paddingLeft:15},company:{paddingTop:7},date:{paddingLeft:5},icon:{marginLeft:30}}),fe=function(e){var t=e.form,n=e.toggleEdit,c=xe(),r=Object(a.useContext)(Oe).deleteForm,i=Object(a.useContext)(m).build;return Object(O.jsxs)("div",{children:[Object(O.jsxs)(h.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(s.a,{className:c.company,variant:"h6",gutterBottom:!0,children:t.school}),Object(O.jsx)(s.a,{className:c.position,children:"\u2014"}),Object(O.jsx)(s.a,{className:c.position,variant:"h6",color:"secondary",children:t.degree}),i?Object(O.jsxs)("div",{children:[Object(O.jsx)(U.a,{children:Object(O.jsx)(Q.a,{className:c.icon,onClick:function(){return n()}})}),Object(O.jsx)(U.a,{color:"primary",onClick:function(){return r(t.id)},children:Object(O.jsx)(H.a,{})})]}):null]}),Object(O.jsxs)(h.a,{container:!0,children:[Object(O.jsx)(s.a,{gutterBottom:!0,children:t.startDate}),Object(O.jsx)(s.a,{className:c.date,children:"-"}),Object(O.jsx)(s.a,{className:c.date,gutterBottom:!0,children:t.endDate})]})]})},ge=Object(j.a)({position:{marginLeft:15},company:{marginTop:15},date:{marginLeft:30,marginTop:15}}),he=function(e){var t=e.form,n=e.toggleEdit,c=ge(),r=Object(a.useContext)(Oe),i=r.saveForm,s=r.deleteForm,o=Object(a.useState)(t.school),l=Object(b.a)(o,2),j=l[0],d=l[1],u=Object(a.useState)(t.degree),m=Object(b.a)(u,2),x=m[0],f=m[1],g=Object(a.useState)(t.startDate),p=Object(b.a)(g,2),y=p[0],N=p[1],C=Object(a.useState)(t.endDate),S=Object(b.a)(C,2),k=S[0],I=S[1];return Object(O.jsx)($.a,{variant:"Media",children:Object(O.jsxs)(_.a,{children:[Object(O.jsxs)(h.a,{container:!0,direction:"column",children:[Object(O.jsx)(v.a,{value:j,onChange:function(e){return d(e.target.value)},label:"School",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"}),Object(O.jsx)(v.a,{value:x,onChange:function(e){return f(e.target.value)},label:"Degree",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"})]}),Object(O.jsx)(v.a,{className:c.company,onChange:function(e){return N(e.target.value)},value:y,id:"date",label:"Start Date: ",type:"date",InputLabelProps:{shrink:!0}}),Object(O.jsx)(v.a,{className:c.date,onChange:function(e){return I(e.target.value)},value:k,id:"date",label:"End Date: ",type:"date",defaultValue:"2021-06-29",InputLabelProps:{shrink:!0}}),Object(O.jsxs)(h.a,{container:!0,justify:"flex-end",children:[Object(O.jsx)(U.a,{children:Object(O.jsx)(te.a,{onClick:function(e){e.preventDefault(),i(j,x,y,k,t.id),n(t.id)}})}),Object(O.jsx)(U.a,{color:"primary",onClick:function(){return s(t.id)},children:Object(O.jsx)(H.a,{})})]})]})})},pe=function(e){var t=e.form,n=Object(a.useState)(!0),c=Object(b.a)(n,2),r=c[0],i=c[1],s=Object(a.useContext)(m).build;Object(a.useEffect)((function(){return i(!!s)}),[s]);var o=function(){return i(!r)};return r?Object(O.jsx)(he,{form:t,toggleEdit:o}):Object(O.jsx)(fe,{form:t,toggleEdit:o})},ve=function(){var e=Object(a.useContext)(Oe).eduForms;return Object(O.jsx)("div",{children:e.map((function(e){return Object(O.jsx)(pe,{form:e},e.id)}))})},ye=n(75),Ne=n.n(ye),Ce=Object(j.a)({position:{marginTop:15},work:{marginRight:10},divider:{marginTop:20}}),Se=function(){var e=Ce(),t=Object(a.useContext)(Oe).addForm,n=Object(a.useContext)(m).build;return Object(O.jsxs)(q.a,{children:[Object(O.jsxs)(h.a,{className:e.position,container:!0,alignItems:"center",children:[Object(O.jsx)(Ne.a,{fontSize:"large",className:e.work}),Object(O.jsx)(s.a,{align:"left",variant:"h4",children:"Education"})]}),Object(O.jsx)(de.a,{variant:"fullWidth"}),Object(O.jsx)(ve,{}),n?Object(O.jsx)(ie.a,{className:e.position,type:"submit",onClick:function(){return t()},color:"secondary",variant:"contained",startIcon:Object(O.jsx)(oe.a,{}),children:"Add More"}):null,Object(O.jsx)(de.a,{style:{background:"black"},className:e.divider,variant:"fullWidth"})]})},ke=Object(a.createContext)(),Ie=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){r(JSON.parse(localStorage.getItem("skillsForms"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("skillsForms",JSON.stringify(c))}),[c]);return Object(O.jsx)(ke.Provider,{value:{skillsForms:c,addForm:function(e){r([].concat(Object(A.a)(c),[{skill:e,id:M()()}]))},deleteForm:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)}},children:e.children})},Fe=n(76),Ee=n.n(Fe),we=Object(j.a)({list:{marginLeft:20}}),Le=function(e){var t=e.form,n=we(),c=Object(a.useContext)(ke).deleteForm,r=Object(a.useContext)(m).build;return Object(O.jsx)(h.a,{item:!0,xs:6,md:4,lg:4,children:Object(O.jsxs)("li",{className:n.list,children:[t.skill,r?Object(O.jsx)(U.a,{color:"primary",onClick:function(){return c(t.id)},children:Object(O.jsx)(Ee.a,{})}):null]})})},De=function(){var e=Object(a.useContext)(ke).skillsForms;return Object(O.jsx)(h.a,{container:!0,direction:"row",children:e.map((function(e){return Object(O.jsx)(Le,{form:e},e.id)}))})},Te=n(77),Pe=n.n(Te),Be=Object(j.a)({position:{marginTop:15},work:{marginRight:10},divider:{marginTop:20},button:{marginTop:12,marginLeft:20},items:{marginTop:10,marginBottom:20}}),ze=function(){var e=Be(),t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(ke).addForm,o=Object(a.useContext)(m).build;return Object(O.jsxs)(q.a,{children:[Object(O.jsxs)(h.a,{className:e.position,container:!0,alignItems:"center",children:[Object(O.jsx)(Pe.a,{fontSize:"large",className:e.work}),Object(O.jsx)(s.a,{align:"left",variant:"h4",children:"Skills"})]}),Object(O.jsx)(de.a,{variant:"fullWidth"}),Object(O.jsx)(h.a,{container:!0,direction:"row",alignItems:"center",children:o?Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(c),r("")},children:[Object(O.jsx)(v.a,{className:e.items,value:c,onChange:function(e){return r(e.target.value)},label:"Skills",type:"text",variant:"outlined",color:"secondary",multiline:!0,required:!0,margin:"dense"}),Object(O.jsx)(ie.a,{className:e.button,type:"submit",color:"secondary",variant:"contained",startIcon:Object(O.jsx)(oe.a,{}),children:"Add"})]}):null}),Object(O.jsx)(De,{}),Object(O.jsx)(de.a,{style:{background:"black"},className:e.divider,variant:"fullWidth"})]})},qe=n(78),Je=n(150),We=Object(qe.a)({palette:{primary:{main:"#e33371"},secondary:{main:"#115293"}}}),Ae=function(){return Object(O.jsx)(Je.a,{theme:We,children:Object(O.jsx)(q.a,{children:Object(O.jsxs)(x,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(P,{children:Object(O.jsx)(W,{})}),Object(O.jsx)(G,{children:Object(O.jsx)(be,{})}),Object(O.jsx)(me,{children:Object(O.jsx)(Se,{})}),Object(O.jsx)(Ie,{children:Object(O.jsx)(ze,{})})]})})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Ae,{})}),document.getElementById("root")),Re()},93:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.929dc5e5.chunk.js.map