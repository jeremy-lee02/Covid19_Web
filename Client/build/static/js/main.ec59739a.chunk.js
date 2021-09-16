(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,a){},129:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},231:function(e,t,a){},250:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(11),i=a.n(r),o=(a(129),a(53),a(22)),l=a(14),j=a(17),d=a.n(j),u=a(23),b=a(7),h=(a(81),a(290)),x=a(294),O=a(296),p=a(281),m=a(285),f=a(24),v=a(286);a(82);var g=function(e){var t=e.title,a=e.isRed,n=e.isGrey,s=e.active,r=e.cases,i=e.total,o=Object(f.a)(e,["title","isRed","isGrey","active","cases","total"]);return Object(c.jsx)(p.a,{onClick:o.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(a&&"infoBox--red"," ").concat(n&&"infoBox--grey"," bg-dark text-light"),children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(v.a,{className:"infoBox__title text-light",children:t}),Object(c.jsx)("h2",{className:"infoBox__cases ".concat(!a&&"infoBox__cases--green"," ").concat(n&&"infoBox__cases--grey"),children:o.isloading?Object(c.jsx)("i",{className:"fa fa-cog fa-spin fa-fw"}):r}),Object(c.jsxs)(v.a,{className:"infoBox__total text-info",children:[i," Total"]})]})})},y=a(288),N=a(289),C=a(299),k=(a(134),a(117)),w=a(25),S=a.n(w),I=a(298),T=a(287),_={cases:{hex:"#CC1034",mulitiplier:800},recovered:{hex:"#7DD71D",mulitiplier:1200},deaths:{hex:"#C0C0C0",mulitiplier:2e3}},F=function(e){var t=Object(k.a)(e);return t.sort((function(e,t){return t.cases-e.cases})),t},L=function(e){return e?"+".concat(S()(e).format("0.0a")):"+0"},D=function(e,t){return e.map((function(e){return Object(c.jsx)(I.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,pathOptions:{color:_[t].hex,fillColor:_[t].hex},radius:Math.sqrt(e[t]/10)*_[t].mulitiplier,children:Object(c.jsx)(T.a,{children:Object(c.jsxs)("div",{className:"info-container",children:[Object(c.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(c.jsx)("div",{className:"info-name",children:e.country}),Object(c.jsxs)("div",{className:"info-confirmed",children:["Cases: ",S()(e.cases).format("0,0")]}),Object(c.jsxs)("div",{className:"info-recovered",children:["Recovered: ",S()(e.recovered).format("0,0")]}),Object(c.jsxs)("div",{className:"info-deaths",children:["Deaths: ",S()(e.deaths).format("0,0")]})]})})})}))};var G=function(e){var t=e.countries,a=e.casesType,n=e.center,s=e.zoom;function r(e){var t=e.center,a=e.zoom;return Object(y.a)().setView(t,a),null}return Object(c.jsxs)(N.a,{casesType:a,className:"map",center:n,zoom:s,scrollWheelZoom:!1,children:[Object(c.jsx)(r,{center:n,zoom:s}),Object(c.jsx)(C.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),D(t,a)]})};a(135);var E=function(e){var t=e.countries;return Object(c.jsx)("div",{className:"table",children:Object(c.jsxs)("table",{className:"table table-dark table-striped table-hover",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Country"}),Object(c.jsx)("th",{children:"Live Cases"})]})}),Object(c.jsx)("tbody",{children:t.map((function(e){var t=e.country,a=e.cases;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:t}),Object(c.jsx)("th",{children:Object(c.jsx)("strong",{children:S()(a).format("000,000")})})]})}))})]})})},B=a(114),R={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return S()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return S()(e).format("0a")}}}]}},P=function(e,t){var a,c=[];for(var n in e.cases){if(a){var s={x:n,y:e[t][n]-a};c.push(s)}a=e[t][n]}return c};var A=function(e){var t=e.casesType,a=Object(f.a)(e,["casesType"]),s=Object(n.useState)({}),r=Object(b.a)(s,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=P(e,t);o(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(c.jsx)("div",{className:a.className,children:(null===i||void 0===i?void 0:i.length)>0&&Object(c.jsx)(B.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:i}]},options:R})})};a(230);var H=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)("worldwide"),i=Object(b.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)({}),f=Object(b.a)(j,2),v=f[0],y=f[1],N=Object(n.useState)([]),C=Object(b.a)(N,2),k=C[0],w=C[1],S=Object(n.useState)([34.80746,-40.4796]),I=Object(b.a)(S,2),T=I[0],_=I[1],D=Object(n.useState)(3),B=Object(b.a)(D,2),R=B[0],P=B[1],H=Object(n.useState)([]),M=Object(b.a)(H,2),W=M[0],Y=M[1],z=Object(n.useState)("cases"),q=Object(b.a)(z,2),J=q[0],Z=q[1],V=Object(n.useState)(!1),K=Object(b.a)(V,2),Q=K[0],U=K[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=F(e);w(a),Y(e),s(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var X=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),a=t.target.value,l(a),c="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=6,fetch(c).then((function(e){return e.json()})).then((function(e){l(a),y(e),U(!1),_("worldwide"===a?[34.81,-40.4783]:[e.countryInfo.lat,e.countryInfo.long]),P(4)}));case 6:console.log(v);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"app__left",children:[Object(c.jsxs)("div",{className:"app__header",children:[Object(c.jsx)("h1",{className:"text-warning",children:"Covid-19 tracker"}),Object(c.jsx)(h.a,{className:"app__dropdown bg-light",children:Object(c.jsxs)(x.a,{variant:"outlined",onChange:X,value:o,children:[Object(c.jsx)(O.a,{value:"worldwide",children:"Worldwide"}),a.map((function(e){return Object(c.jsx)(O.a,{value:e.value,children:e.name})}))]})})]}),Object(c.jsxs)("div",{className:"app__stats",children:[Object(c.jsx)(g,{isRed:!0,active:"cases"===J,className:"infoBox__cases",onClick:function(e){return Z("cases")},title:"Coronavirus Cases",total:L(v.cases),cases:L(v.todayCases),isloading:Q}),Object(c.jsx)(g,{active:"recovered"===J,className:"infoBox__recovered",onClick:function(e){return Z("recovered")},title:"Recovered",total:L(v.recovered),cases:L(v.todayRecovered),isloading:Q}),Object(c.jsx)(g,{isGrey:!0,active:"deaths"===J,className:"infoBox__deaths",onClick:function(e){return Z("deaths")},title:"Deaths",total:L(v.deaths),cases:L(v.todayDeaths),isloading:Q})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(G,{countries:W,center:T,zoom:R,casesType:J})]}),Object(c.jsx)(p.a,{className:"app__right",children:Object(c.jsxs)(m.a,{className:"bg-dark text-light",children:[Object(c.jsx)("h1",{className:"text-danger",children:"Live Cases by Country"}),Object(c.jsx)(E,{countries:k}),Object(c.jsxs)("h1",{className:"app__graphTitle text-danger",children:["WorldWide new ",J]}),Object(c.jsx)(A,{className:"app__graph",casesType:J})]})})]})},M=a(291);a(231);function W(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1];return s.a.useEffect((function(){fetch("/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(c.jsxs)("div",{className:"container",style:{background:"#292b2c"},children:[Object(c.jsxs)(M.a,{sm:"1",children:[Object(c.jsx)("h3",{children:"Full Name:"}),a.map((function(e){if(e.email===localStorage.getItem("email"))return Object(c.jsx)("p",{className:"information",children:e.name})}))]}),Object(c.jsxs)(M.a,{sm:"1",children:[Object(c.jsx)("h3",{children:"Date of birth:"}),a.map((function(e){if(e.email===localStorage.getItem("email"))return Object(c.jsx)("p",{className:"information",children:e.dob})}))]}),Object(c.jsxs)(M.a,{sm:"1",children:[Object(c.jsx)("h3",{children:"Email:"}),a.map((function(e){if(e.email===localStorage.getItem("email"))return Object(c.jsx)("p",{className:"information",children:e.email})}))]}),Object(c.jsxs)(M.a,{sm:"1",children:[Object(c.jsx)("h3",{children:"Phone:"}),a.map((function(e){if(e.email===localStorage.getItem("email"))return Object(c.jsx)("p",{className:"information",children:e.phone})}))]}),Object(c.jsxs)(M.a,{sm:"1",children:[Object(c.jsx)("h3",{children:"Address:"}),a.map((function(e){if(e.email===localStorage.getItem("email"))return Object(c.jsx)("p",{className:"information",children:e.address})}))]})]})}a(100);var Y=a(38);function z(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),h=Object(b.a)(j,2),x=h[0],O=h[1];Object(n.useEffect)((function(){localStorage.getItem("authToken")&&(window.location="/")}),[]);var p=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,Y.post("/login",{email:a,password:o},c);case 5:n=e.sent,r=n.data,localStorage.setItem("authToken",r.token),localStorage.setItem("email",a),window.location="/",e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),O(e.t0.response.data.error),s(""),l(""),setTimeout((function(){O("")}),6e3);case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"app",children:Object(c.jsx)("div",{className:"containerr",children:Object(c.jsxs)("div",{className:"loginForm",children:[Object(c.jsx)("h2",{className:"text-center",style:{color:"blue"},children:"Login"}),x&&Object(c.jsxs)("p",{style:{color:"red"},children:["*",x]}),Object(c.jsx)("input",{placeholder:"Email",type:"text",className:"inputField input",value:a,onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Password",type:"password",className:"inputField input",value:o,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("div",{className:"submitButton",children:Object(c.jsx)("button",{className:"button",onClick:p,children:"Login"})})]})})})}var q=a(38),J=a.n(q);function Z(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),h=Object(b.a)(j,2),x=h[0],O=h[1],p=Object(n.useState)(""),m=Object(b.a)(p,2),f=m[0],v=m[1],g=Object(n.useState)(""),y=Object(b.a)(g,2),N=y[0],C=y[1],k=Object(n.useState)(""),w=Object(b.a)(k,2),S=w[0],I=w[1],T=Object(n.useState)(""),_=Object(b.a)(T,2),F=_[0],L=_[1],D=Object(n.useState)(""),G=Object(b.a)(D,2),E=G[0],B=G[1],R=Object(n.useState)(""),P=Object(b.a)(R,2),A=P[0],H=P[1];Object(n.useEffect)((function(){localStorage.getItem("authToken")&&(window.location="/singIn")}),[]);var M=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c={header:{"Content-Type":"application/json"}},o===x){e.next=7;break}return l(""),O(""),setTimeout((function(){H("")}),5e3),e.abrupt("return",H("Passwords do not match!!"));case 7:return e.prev=7,e.next=10,J.a.post("/register",{email:a,password:o,firstName:f,lastName:N,dob:S,phone:F,address:E},c);case 10:n=e.sent,r=n.data,localStorage.setItem("authToken",r.token),window.location="/singIn",e.next=23;break;case 16:e.prev=16,e.t0=e.catch(7),H(e.t0.response.data.error),s(""),l(""),O(""),setTimeout((function(){H("")}),5e3);case 23:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsx)("div",{className:"containerr",children:Object(c.jsxs)("form",{className:"loginForm",children:[Object(c.jsx)("h2",{className:"text-center",style:{color:"blue"},children:"Register"}),A&&Object(c.jsxs)("p",{style:{color:"red"},children:["*",A]}),Object(c.jsx)("input",{placeholder:"Email",type:"text",className:"inputField input",value:a,onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Password",type:"password",className:"inputField input",value:o,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("input",{placeholder:"Re-type Password",type:"password",className:"inputField input",value:x,onChange:function(e){return O(e.target.value)}}),Object(c.jsx)("input",{placeholder:"First Name",type:"text",className:"inputField input",value:f,onChange:function(e){return v(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Last Name",type:"text",className:"inputField input",value:N,onChange:function(e){return C(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Date Of Birth (DD//MM//YY)",type:"text",className:"inputField input",value:S,onChange:function(e){return I(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Address",type:"text",className:"inputField input",value:E,onChange:function(e){return B(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"Phone",type:"text",className:"inputField input",value:F,onChange:function(e){return L(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"submitButton",children:Object(c.jsx)("button",{className:"button",onClick:M,children:"Register"})})]})})})})}a(250);var V=a(292),K=a(115),Q=a(293),U=a(295),X=a(297);a(251);function $(){var e=s.a.useState(""),t=Object(b.a)(e,2),a=t[0],n=t[1],r=s.a.useState(""),i=Object(b.a)(r,2),o=i[0],l=i[1],j=s.a.useState(""),h=Object(b.a)(j,2),x=h[0],O=h[1],p=s.a.useState(""),m=Object(b.a)(p,2),f=m[0],v=m[1],g=s.a.useState(""),y=Object(b.a)(g,2),N=y[0],C=y[1],k=s.a.useState(""),w=Object(b.a)(k,2),S=w[0],I=w[1],T=s.a.useState(""),_=Object(b.a)(T,2),F=_[0],L=_[1],D=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,J.a.post("http://localhost:4000/forms",{email:a,idNum:o,country:x,symptoms:f,beenCountry:N,isolated:S},c);case 5:n=e.sent,n.data,window.location="/success",e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),L(e.t0.response.data.error),setTimeout((function(){L("")}),5e3);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(V.a,{className:"container",children:Object(c.jsx)(M.a,{children:Object(c.jsx)(K.a,{md:{span:6,offset:3},children:Object(c.jsxs)(Q.a,{children:[Object(c.jsx)("h1",{children:"MEDICAL REPORT FORM"}),Object(c.jsxs)(U.a,{children:[Object(c.jsxs)(U.a.Group,{children:[Object(c.jsx)("h4",{children:"Personal information, Disease - Isolation - Exposure History"}),F&&Object(c.jsxs)("p",{style:{color:"red"},children:["*",F]}),Object(c.jsxs)(U.a.Label,{children:["First Name",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsxs)(U.a.Row,{children:[Object(c.jsx)(K.a,{children:Object(c.jsx)(U.a.Control,{type:"text",name:"firstName"})}),Object(c.jsxs)(U.a.Label,{children:["Last Name",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(K.a,{children:Object(c.jsx)(U.a.Control,{type:"text",name:"lastName"})})]})]}),Object(c.jsxs)(U.a.Row,{children:[Object(c.jsxs)(U.a.Group,{as:K.a,controlId:"formGridEmail",children:[Object(c.jsxs)(U.a.Label,{children:["Email",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(U.a.Control,{type:"email",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(c.jsxs)(U.a.Group,{as:K.a,controlId:"formGridTel",children:[Object(c.jsxs)(U.a.Label,{children:["Contact phone number",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(U.a.Control,{type:"telephone"})]}),Object(c.jsxs)(U.a.Group,{as:K.a,controlId:"formGridTel",children:[Object(c.jsxs)(U.a.Label,{children:["Your ID number",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(U.a.Control,{type:"text",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(c.jsxs)(U.a.Group,{children:[Object(c.jsxs)(U.a.Label,{children:["Enter your country",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)("br",{}),Object(c.jsx)(U.a.Control,{type:"text",value:x,onChange:function(e){return O(e.target.value)}})]})]}),Object(c.jsxs)(U.a.Group,{controlId:"formGridAddress1",children:[Object(c.jsxs)(U.a.Label,{children:["Contact address",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(U.a.Control,{placeholder:""})]}),Object(c.jsxs)(U.a.Row,{children:[Object(c.jsxs)(U.a.Group,{as:K.a,controlId:"formGridCityZip",children:[Object(c.jsxs)(U.a.Label,{children:["Which symptoms have you experienced within the past 14 days?",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(U.a.Control,{type:"text",value:f,onChange:function(e){return v(e.target.value)}})]}),Object(c.jsxs)(U.a.Group,{children:[Object(c.jsxs)(U.a.Label,{children:["Have you recently been directed to self-isolate or quarantine (Yes or No):",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(U.a.Control,{placeholder:"",value:S,onChange:function(e){return I(e.target.value)}})]})]}),Object(c.jsxs)(U.a.Group,{as:K.a,controlId:"formGridArrive",children:[Object(c.jsxs)(U.a.Label,{children:["Which country have you been to for the last 14 days?",Object(c.jsx)("span",{children:" (*)"})]}),Object(c.jsx)(U.a.Control,{type:"text",value:N,onChange:function(e){return C(e.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsx)(X.a,{variant:"primary",type:"submit",onClick:D,children:"Submit"})]})]})})})})}var ee=function(){var e=s.a.useState(!1),t=Object(b.a)(e,2),a=t[0],n=t[1];return s.a.useEffect((function(){if(localStorage.getItem("authToken"))return n(!0)}),[]),Object(c.jsx)(c.Fragment,{children:a?Object(c.jsx)(o.b,{className:"btn btn-primary rounded-pill me-3",onClick:function(){localStorage.clear(),window.location="/signIn"},children:"Log Out"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.b,{className:"btn btn-primary rounded-pill me-3",to:"/signIn",children:"Sign In"}),Object(c.jsx)(o.b,{className:"btn btn-primary rounded-pill",to:"/register",children:"Register"})]})})};var te=function(){return Object(c.jsxs)("div",{className:"container-fluid text-center bg-secondary",style:{paddingTop:"2em"},children:[Object(c.jsx)("h1",{children:"Success"}),Object(c.jsx)("a",{href:"/",children:"Back to Home page"})]})};var ae=function(){var e=s.a.useState([]),t=Object(b.a)(e,2),a=t[0],n=t[1];return s.a.useEffect((function(){fetch("/api/forms").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(c.jsxs)("div",{className:"container",style:{marginTop:"16px",background:"#6c757d"},children:[Object(c.jsx)("h1",{className:"text-center",children:"History"}),Object(c.jsx)("div",{style:{paddingTop:"16px"},children:Object(c.jsx)(M.a,{sm:"3",style:{paddingLeft:"10px"},children:a.map((function(e){if(e.email===localStorage.getItem("email"))return Object(c.jsx)("div",{style:{paddingLeft:"50px"},children:Object(c.jsx)("div",{className:"card",style:{width:"18rem",background:"#292b2c"},children:Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h3",{class:"card-title text-center",children:"Date:"}),Object(c.jsx)("p",{className:"text-center",children:e.date}),Object(c.jsx)("h4",{class:"card-title text-center",children:"Summary:"}),Object(c.jsxs)("ul",{className:"card-text ",children:[Object(c.jsxs)("p",{children:["Symptoms: ",e.symptoms]}),Object(c.jsxs)("p",{children:["Isolated: ",e.isolated]})]})]})})})}))})}),a.map((function(e){if(e.email!==localStorage.getItem("email"))return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("h3",{style:{color:"black"},children:"You have not submitted any Health Declaration"}),Object(c.jsx)("a",{href:"/form",children:"Fill in the Health Declaration Form"})]})}))]})};function ce(){return Object(c.jsx)("div",{className:"bg-light",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-secondary fixed-top",children:Object(c.jsxs)("div",{className:"collapse navbar-collapse",children:[Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item ",children:Object(c.jsx)(o.b,{className:"nav-link",to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:localStorage.getItem("authToken")?Object(c.jsx)(o.b,{className:"nav-link",to:"/profile",children:"Profile"}):Object(c.jsx)(o.b,{className:"nav-link",to:"/signIn",children:"Profile"})}),Object(c.jsx)("li",{className:"nav-item ",children:Object(c.jsx)(o.b,{className:"nav-link",to:"/form",children:"Form"})}),Object(c.jsx)("li",{className:"nav-item",children:localStorage.getItem("authToken")?Object(c.jsx)(o.b,{className:"nav-link",to:"/history",children:"History"}):Object(c.jsx)(o.b,{className:"nav-link",to:"/signIn",children:"History"})})]}),Object(c.jsx)("div",{class:"d-flex position-absolute end-0 me-4",children:Object(c.jsx)(ee,{})})]})}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(ne,{})}),Object(c.jsx)(l.a,{path:"/form",children:Object(c.jsx)(se,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/profile",children:Object(c.jsx)(re,{})}),Object(c.jsx)(l.a,{path:"/signIn",children:Object(c.jsx)(ie,{})}),Object(c.jsx)(l.a,{path:"/register",children:Object(c.jsx)(oe,{})}),Object(c.jsx)(l.a,{path:"/success",children:Object(c.jsx)(te,{})}),Object(c.jsx)(l.a,{path:"/history",children:Object(c.jsx)(le,{})})]})]})})}function ne(){return Object(c.jsxs)("div",{className:"bg-secondary",children:[Object(c.jsxs)("div",{className:"backGroundImg",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"text-center text-danger",children:"Welcome to Our Covid Tracker App"}),Object(c.jsx)("h6",{className:"text-center text-body",children:"Educated your self better using this application"}),Object(c.jsx)("h6",{className:"formstyle text-center text-light",children:Object(c.jsx)("button",{children:"For protected yourself, using the Tracker below to learn more about Covid cases!"})})]}),Object(c.jsx)("div",{children:Object(c.jsx)(H,{})})]})}function se(){return Object(c.jsx)("div",{className:"bg-secondary",children:Object(c.jsx)($,{})})}function re(){return Object(c.jsxs)("div",{className:"bg-secondary",children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"text-center",children:"Profile"}),Object(c.jsx)("br",{}),Object(c.jsx)(W,{})]})}function ie(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"backGroundImg2"}),Object(c.jsx)("div",{className:"bg-secondary",children:Object(c.jsx)(z,{})})]})}function oe(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"backGroundImg2"}),Object(c.jsx)("div",{className:"bg-secondary",children:Object(c.jsx)(Z,{})})]})}function le(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"bg-secondary",children:Object(c.jsx)(ae,{})})})}i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ce,{})}),document.getElementById("root"))},81:function(e,t,a){},82:function(e,t,a){}},[[254,1,2]]]);
//# sourceMappingURL=main.ec59739a.chunk.js.map