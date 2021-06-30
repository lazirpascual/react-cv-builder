(this["webpackJsonpreact-cv-builder"]=this["webpackJsonpreact-cv-builder"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),s=(n(93),n(136)),o=n(153),l=n(151),j=n(2),d=function(){return Object(j.jsxs)(s.a,{container:!0,direction:"column",justify:"center",children:[Object(j.jsx)(l.a,{label:"Full Name",variant:"filled",color:"secondary",size:"small",multiline:!0,rows:2,required:!0}),Object(j.jsx)(l.a,{label:"Biography",variant:"filled",color:"secondary",multiline:!0,rows:4,margin:"dense",required:!0})]})},u=n(70),b=n.n(u),O=n(71),m=n.n(O),x=n(72),f=n.n(x),g=n(73),h=n.n(g),v=n(140),p=Object(v.a)({icon:{marginTop:15,marginRight:10}}),y=function(){var e=p();return Object(j.jsxs)(s.a,{container:!0,direction:"column",children:[Object(j.jsxs)(s.a,{item:!0,children:[Object(j.jsx)(b.a,{className:e.icon}),Object(j.jsx)(l.a,{label:"Address",variant:"standard",color:"secondary",size:"small",required:!0})]}),Object(j.jsxs)(s.a,{item:!0,children:[Object(j.jsx)(m.a,{className:e.icon}),Object(j.jsx)(l.a,{label:"Phone Number",variant:"standard",size:"small",color:"secondary",required:!0})]}),Object(j.jsxs)(s.a,{item:!0,children:[Object(j.jsx)(f.a,{className:e.icon}),Object(j.jsx)(l.a,{label:"Email",variant:"standard",color:"secondary",size:"small",required:!0})]}),Object(j.jsxs)(s.a,{item:!0,children:[Object(j.jsx)(h.a,{className:e.icon}),Object(j.jsx)(l.a,{label:"LinkedIn",variant:"standard",color:"secondary",size:"small"})]})]})},C=n(11),N=Object(a.createContext)(),k=function(e){var t=Object(a.useState)(!0),n=Object(C.a)(t,2),c=n[0],r=n[1];return Object(j.jsx)(N.Provider,{value:{build:c,toggleBuild:function(){return r(!c)}},children:e.children})},S=n(141),F=n(142),E=n(152),D=Object(v.a)((function(e){return{field:{padding:10},spacing:{marginBottom:20},large:{width:e.spacing(20),height:e.spacing(20)},switch:{marginTop:20,marginLeft:11}}})),I=function(){var e=D(),t=Object(a.useContext)(N).toggleBuild;return Object(j.jsx)(S.a,{children:Object(j.jsxs)(s.a,{container:!0,direction:"row",children:[Object(j.jsx)(s.a,{item:!0,xs:"auto",md:"auto",lg:"auto",className:e.field,children:Object(j.jsx)(o.a,{className:e.large,children:"User"})}),Object(j.jsx)(s.a,{item:!0,xs:4,md:6,lg:6,className:e.field,children:Object(j.jsx)(d,{})}),Object(j.jsx)(s.a,{item:!0,xs:"auto",md:"auto",lg:"auto",className:e.field,children:Object(j.jsx)(y,{})}),Object(j.jsx)(s.a,{item:!0,xs:"auto",md:"auto",lg:"auto",children:Object(j.jsx)(F.a,{className:e.switch,onChange:t,control:Object(j.jsx)(E.a,{}),label:"Preview"})})]})})},L=n(106),w=n(144),T=n(145),B=Object(v.a)((function(e){return{title:{flexGrow:1}}})),P=function(){var e=B();Object(a.useContext)(N).toggleBuild;return Object(j.jsx)("div",{children:Object(j.jsx)(w.a,{color:"secondary",position:"static",children:Object(j.jsx)(T.a,{children:Object(j.jsx)(L.a,{align:"center",variant:"h5",className:e.title,children:"Create Your Personal CV"})})})})},z=n(38),q=n(36),J=n.n(q),W=Object(a.createContext)(),M=function(e){var t=Object(a.useState)([]),n=Object(C.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){r(JSON.parse(localStorage.getItem("forms"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("forms",JSON.stringify(c))}),[c]);return Object(j.jsx)(W.Provider,{value:{forms:c,addForm:function(){r([].concat(Object(z.a)(c),[{id:J()()}]))},deleteForm:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)},saveForm:function(e,t,n,a,i,s){var o=c;o.forEach((function(c){c.id===s&&(c.company=e,c.position=t,c.description=n,c.startDate=a,c.endDate=i)})),r(o)}},children:e.children})},A=n(143),R=n(23),V=n.n(R),G=n(54),U=n.n(G),Y=Object(v.a)({position:{paddingLeft:15},company:{paddingTop:7},date:{paddingLeft:5},icon:{marginLeft:30}}),H=function(e){var t=e.form,n=e.toggleEdit,c=Y(),r=Object(a.useContext)(W).deleteForm,i=Object(a.useContext)(N).build;return Object(j.jsxs)("div",{children:[Object(j.jsxs)(s.a,{container:!0,alignItems:"center",children:[Object(j.jsx)(L.a,{className:c.company,variant:"h6",gutterBottom:!0,children:t.company}),Object(j.jsx)(L.a,{className:c.position,children:"\u2014"}),Object(j.jsx)(L.a,{className:c.position,variant:"h6",color:"secondary",children:t.position}),i?Object(j.jsxs)("div",{children:[Object(j.jsx)(A.a,{children:Object(j.jsx)(U.a,{className:c.icon,onClick:function(){return n()}})}),Object(j.jsx)(A.a,{color:"primary",onClick:function(){return r(t.id)},children:Object(j.jsx)(V.a,{})})]}):null]}),Object(j.jsxs)(s.a,{container:!0,children:[Object(j.jsx)(L.a,{gutterBottom:!0,children:t.startDate}),Object(j.jsx)(L.a,{className:c.date,children:"-"}),Object(j.jsx)(L.a,{className:c.date,gutterBottom:!0,children:t.endDate})]}),Object(j.jsx)(L.a,{variant:"subtitle1",color:"textSecondary",children:t.description})]})},K=n(146),Q=n(147),X=n(55),Z=n.n(X),$=Object(v.a)({position:{marginLeft:15},company:{marginTop:15},date:{marginLeft:30,marginTop:15}}),_=function(e){var t=e.form,n=e.toggleEdit,c=$(),r=Object(a.useContext)(W),i=r.saveForm,o=r.deleteForm,d=Object(a.useState)(t.company),u=Object(C.a)(d,2),b=u[0],O=u[1],m=Object(a.useState)(t.position),x=Object(C.a)(m,2),f=x[0],g=x[1],h=Object(a.useState)(t.description),v=Object(C.a)(h,2),p=v[0],y=v[1],N=Object(a.useState)(t.startDate),k=Object(C.a)(N,2),S=k[0],F=k[1],E=Object(a.useState)(t.endDate),D=Object(C.a)(E,2),I=D[0],L=D[1];return Object(j.jsx)(K.a,{variant:"Media",children:Object(j.jsxs)(Q.a,{children:[Object(j.jsxs)(s.a,{container:!0,direction:"column",children:[Object(j.jsx)(l.a,{value:b,onChange:function(e){return O(e.target.value)},label:"Company",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"}),Object(j.jsx)(l.a,{value:f,onChange:function(e){return g(e.target.value)},label:"Position",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"}),Object(j.jsx)(l.a,{value:p,onChange:function(e){return y(e.target.value)},label:"Description",type:"text",variant:"outlined",color:"secondary",size:"small",margin:"dense",multiline:!0,rows:3,required:!0})]}),Object(j.jsx)(l.a,{className:c.company,onChange:function(e){return F(e.target.value)},value:S,id:"date",label:"Start Date: ",type:"date",InputLabelProps:{shrink:!0}}),Object(j.jsx)(l.a,{className:c.date,onChange:function(e){return L(e.target.value)},value:I,id:"date",label:"End Date: ",type:"date",defaultValue:"2021-06-29",InputLabelProps:{shrink:!0}}),Object(j.jsxs)(s.a,{container:!0,justify:"flex-end",children:[Object(j.jsx)(A.a,{children:Object(j.jsx)(Z.a,{onClick:function(e){e.preventDefault(),i(b,f,p,S,I,t.id),n(t.id)}})}),Object(j.jsx)(A.a,{color:"primary",onClick:function(){return o(t.id)},children:Object(j.jsx)(V.a,{})})]})]})})},ee=function(e){var t=e.form,n=Object(a.useState)(!0),c=Object(C.a)(n,2),r=c[0],i=c[1],s=Object(a.useContext)(N).build;Object(a.useEffect)((function(){return i(!!s)}),[s]);var o=function(){return i(!r)};return r?Object(j.jsx)(_,{form:t,toggleEdit:o}):Object(j.jsx)(H,{form:t,toggleEdit:o})},te=function(){var e=Object(a.useContext)(W).forms;return Object(j.jsx)("div",{children:e.map((function(e){return Object(j.jsx)(ee,{form:e},e.id)}))})},ne=n(149),ae=n(37),ce=n.n(ae),re=n(74),ie=n.n(re),se=n(148),oe=Object(v.a)({position:{marginTop:15},work:{marginRight:10},divider:{marginTop:20}}),le=function(){var e=oe(),t=Object(a.useContext)(W).addForm,n=Object(a.useContext)(N).build;return Object(j.jsxs)(S.a,{children:[Object(j.jsx)(se.a,{style:{background:"black"},variant:"fullWidth"}),Object(j.jsxs)(s.a,{className:e.position,container:!0,alignItems:"center",children:[Object(j.jsx)(ie.a,{fontSize:"large",className:e.work}),Object(j.jsx)(L.a,{align:"left",variant:"h4",children:"Work Experience"})]}),Object(j.jsx)(se.a,{variant:"fullWidth"}),Object(j.jsx)(te,{}),n?Object(j.jsx)(ne.a,{className:e.position,type:"submit",onClick:function(){return t()},color:"secondary",variant:"contained",startIcon:Object(j.jsx)(ce.a,{}),children:"Add More"}):null,Object(j.jsx)(se.a,{style:{background:"black"},className:e.divider,variant:"fullWidth"})]})},je=Object(a.createContext)(),de=function(e){var t=Object(a.useState)([]),n=Object(C.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){r(JSON.parse(localStorage.getItem("eduForms"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("eduForms",JSON.stringify(c))}),[c]);return Object(j.jsx)(je.Provider,{value:{eduForms:c,addForm:function(){r([].concat(Object(z.a)(c),[{id:J()()}]))},deleteForm:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)},saveForm:function(e,t,n,a,i){var s=c;s.forEach((function(c){c.id===i&&(c.school=e,c.degree=t,c.startDate=n,c.endDate=a)})),r(s)}},children:e.children})},ue=Object(v.a)({position:{paddingLeft:15},company:{paddingTop:7},date:{paddingLeft:5},icon:{marginLeft:30}}),be=function(e){var t=e.form,n=e.toggleEdit,c=ue(),r=Object(a.useContext)(je).deleteForm,i=Object(a.useContext)(N).build;return Object(j.jsxs)("div",{children:[Object(j.jsxs)(s.a,{container:!0,alignItems:"center",children:[Object(j.jsx)(L.a,{className:c.company,variant:"h6",gutterBottom:!0,children:t.school}),Object(j.jsx)(L.a,{className:c.position,children:"\u2014"}),Object(j.jsx)(L.a,{className:c.position,variant:"h6",color:"secondary",children:t.degree}),i?Object(j.jsxs)("div",{children:[Object(j.jsx)(A.a,{children:Object(j.jsx)(U.a,{className:c.icon,onClick:function(){return n()}})}),Object(j.jsx)(A.a,{color:"primary",onClick:function(){return r(t.id)},children:Object(j.jsx)(V.a,{})})]}):null]}),Object(j.jsxs)(s.a,{container:!0,children:[Object(j.jsx)(L.a,{gutterBottom:!0,children:t.startDate}),Object(j.jsx)(L.a,{className:c.date,children:"-"}),Object(j.jsx)(L.a,{className:c.date,gutterBottom:!0,children:t.endDate})]})]})},Oe=Object(v.a)({position:{marginLeft:15},company:{marginTop:15},date:{marginLeft:30,marginTop:15}}),me=function(e){var t=e.form,n=e.toggleEdit,c=Oe(),r=Object(a.useContext)(je),i=r.saveForm,o=r.deleteForm,d=Object(a.useState)(t.school),u=Object(C.a)(d,2),b=u[0],O=u[1],m=Object(a.useState)(t.degree),x=Object(C.a)(m,2),f=x[0],g=x[1],h=Object(a.useState)(t.startDate),v=Object(C.a)(h,2),p=v[0],y=v[1],N=Object(a.useState)(t.endDate),k=Object(C.a)(N,2),S=k[0],F=k[1];return Object(j.jsx)(K.a,{variant:"Media",children:Object(j.jsxs)(Q.a,{children:[Object(j.jsxs)(s.a,{container:!0,direction:"column",children:[Object(j.jsx)(l.a,{value:b,onChange:function(e){return O(e.target.value)},label:"School",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"}),Object(j.jsx)(l.a,{value:f,onChange:function(e){return g(e.target.value)},label:"Degree",type:"text",variant:"outlined",color:"secondary",size:"small",required:!0,margin:"dense"})]}),Object(j.jsx)(l.a,{className:c.company,onChange:function(e){return y(e.target.value)},value:p,id:"date",label:"Start Date: ",type:"date",InputLabelProps:{shrink:!0}}),Object(j.jsx)(l.a,{className:c.date,onChange:function(e){return F(e.target.value)},value:S,id:"date",label:"End Date: ",type:"date",defaultValue:"2021-06-29",InputLabelProps:{shrink:!0}}),Object(j.jsxs)(s.a,{container:!0,justify:"flex-end",children:[Object(j.jsx)(A.a,{children:Object(j.jsx)(Z.a,{onClick:function(e){e.preventDefault(),i(b,f,p,S,t.id),n(t.id)}})}),Object(j.jsx)(A.a,{color:"primary",onClick:function(){return o(t.id)},children:Object(j.jsx)(V.a,{})})]})]})})},xe=function(e){var t=e.form,n=Object(a.useState)(!0),c=Object(C.a)(n,2),r=c[0],i=c[1],s=Object(a.useContext)(N).build;Object(a.useEffect)((function(){return i(!!s)}),[s]);var o=function(){return i(!r)};return r?Object(j.jsx)(me,{form:t,toggleEdit:o}):Object(j.jsx)(be,{form:t,toggleEdit:o})},fe=function(){var e=Object(a.useContext)(je).eduForms;return Object(j.jsx)("div",{children:e.map((function(e){return Object(j.jsx)(xe,{form:e},e.id)}))})},ge=n(75),he=n.n(ge),ve=Object(v.a)({position:{marginTop:15},work:{marginRight:10},divider:{marginTop:20}}),pe=function(){var e=ve(),t=Object(a.useContext)(je).addForm,n=Object(a.useContext)(N).build;return Object(j.jsxs)(S.a,{children:[Object(j.jsxs)(s.a,{className:e.position,container:!0,alignItems:"center",children:[Object(j.jsx)(he.a,{fontSize:"large",className:e.work}),Object(j.jsx)(L.a,{align:"left",variant:"h4",children:"Education"})]}),Object(j.jsx)(se.a,{variant:"fullWidth"}),Object(j.jsx)(fe,{}),n?Object(j.jsx)(ne.a,{className:e.position,type:"submit",onClick:function(){return t()},color:"secondary",variant:"contained",startIcon:Object(j.jsx)(ce.a,{}),children:"Add More"}):null,Object(j.jsx)(se.a,{style:{background:"black"},className:e.divider,variant:"fullWidth"})]})},ye=Object(a.createContext)(),Ce=function(e){var t=Object(a.useState)([]),n=Object(C.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){r(JSON.parse(localStorage.getItem("skillsForms"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("skillsForms",JSON.stringify(c))}),[c]);return Object(j.jsx)(ye.Provider,{value:{skillsForms:c,addForm:function(e){r([].concat(Object(z.a)(c),[{skill:e,id:J()()}]))},deleteForm:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)}},children:e.children})},Ne=n(76),ke=n.n(Ne),Se=Object(v.a)({list:{marginLeft:20}}),Fe=function(e){var t=e.form,n=Se(),c=Object(a.useContext)(ye).deleteForm,r=Object(a.useContext)(N).build;return Object(j.jsx)(s.a,{item:!0,xs:6,md:4,lg:4,children:Object(j.jsxs)("li",{className:n.list,children:[t.skill,r?Object(j.jsx)(A.a,{color:"primary",onClick:function(){return c(t.id)},children:Object(j.jsx)(ke.a,{})}):null]})})},Ee=function(){var e=Object(a.useContext)(ye).skillsForms;return Object(j.jsx)(s.a,{container:!0,direction:"row",children:e.map((function(e){return Object(j.jsx)(Fe,{form:e},e.id)}))})},De=n(77),Ie=n.n(De),Le=Object(v.a)({position:{marginTop:15},work:{marginRight:10},divider:{marginTop:20},button:{marginTop:12,marginLeft:20},items:{marginTop:10,marginBottom:20}}),we=function(){var e=Le(),t=Object(a.useState)(""),n=Object(C.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(ye).addForm,o=Object(a.useContext)(N).build;return Object(j.jsxs)(S.a,{children:[Object(j.jsxs)(s.a,{className:e.position,container:!0,alignItems:"center",children:[Object(j.jsx)(Ie.a,{fontSize:"large",className:e.work}),Object(j.jsx)(L.a,{align:"left",variant:"h4",children:"Skills"})]}),Object(j.jsx)(se.a,{variant:"fullWidth"}),Object(j.jsx)(s.a,{container:!0,direction:"row",alignItems:"center",children:o?Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(c),r("")},children:[Object(j.jsx)(l.a,{className:e.items,value:c,onChange:function(e){return r(e.target.value)},label:"Skills",type:"text",variant:"outlined",color:"secondary",multiline:!0,required:!0,margin:"dense"}),Object(j.jsx)(ne.a,{className:e.button,type:"submit",color:"secondary",variant:"contained",startIcon:Object(j.jsx)(ce.a,{}),children:"Add"})]}):null}),Object(j.jsx)(Ee,{}),Object(j.jsx)(se.a,{style:{background:"black"},className:e.divider,variant:"fullWidth"})]})},Te=n(78),Be=n(150),Pe=Object(Te.a)({palette:{primary:{main:"#e33371"},secondary:{main:"#115293"}}}),ze=function(){return Object(j.jsx)(Be.a,{theme:Pe,children:Object(j.jsx)(S.a,{children:Object(j.jsxs)(k,{children:[Object(j.jsx)(P,{}),Object(j.jsx)(I,{}),Object(j.jsx)(M,{children:Object(j.jsx)(le,{})}),Object(j.jsx)(de,{children:Object(j.jsx)(pe,{})}),Object(j.jsx)(Ce,{children:Object(j.jsx)(we,{})})]})})})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(ze,{})}),document.getElementById("root")),qe()},93:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.d03eab39.chunk.js.map