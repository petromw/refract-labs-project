(this["webpackJsonprefract-labs-project"]=this["webpackJsonprefract-labs-project"]||[]).push([[0],{135:function(e,a,t){},148:function(e,a,t){"use strict";t.r(a);var i=t(6),n=t(0),c=t.n(n),r=t(13),o=t.n(r),l=(t(135),t(53)),s=t(54),d=t(69),m=t(68),j=t(79),h=t(59),u=t(95),p=[{field:"id",headerName:"ID",width:50},{field:"productName",headerName:"Product",width:180},{field:"price",headerName:"Price",width:90},{field:"quantity",headerName:"Quantity",type:"number",width:90}],b=[{id:1,productName:"Tires",price:"$25",quantity:30},{id:2,productName:"Handlebars",price:"$30",quantity:35},{id:3,productName:"Chains",price:"$15",quantity:65},{id:4,productName:"Brakes",price:"$10",quantity:120},{id:5,productName:"Seats",price:"$40",quantity:45},{id:6,productName:"Air Pumps",price:"$20",quantity:15},{id:7,productName:"Bells",price:"$5",quantity:135},{id:8,productName:"Bike Locks",price:"$18",quantity:80},{id:9,productName:"Helmets",price:"$45",quantity:50}],g=Object(h.a)({root:{height:"80vh",marginTop:95,marginLeft:15},container:{height:"100%",maxHeight:450},h3:{paddingTop:5,paddingLeft:5,flexGrow:"1"}});function O(){var e=g();return Object(i.jsxs)(j.a,{className:e.root,children:[Object(i.jsx)("h3",{className:e.h3,children:"Inventory"}),Object(i.jsx)("div",{className:e.container,children:Object(i.jsx)(u.a,{rows:b,columns:p})})]})}var x=t(8),f=t(198),v=t(67),N=(t(94),t(200)),k=t(203),y=t(195),T=t(199),C=t(201),w=t(202),P=t(156),S=t(50),B=t(197),D=t(208),R=t(108),W=t(81);function L(e){var a=e.onClose,t=e.selectedValue,c=e.open,r=function(){a(t)},o=Object(h.a)((function(){return{root:{marginTop:25,marginLeft:10,flexGrow:1},descriptionTextField:{width:"25ch",marginLeft:"auto",marginRight:"auto",paddingTop:"1vh",paddingBottom:"2vh"}}}))(),l=Object(n.useState)(new Date),s=Object(x.a)(l,2),d=s[0],m=s[1];return Object(i.jsxs)(D.a,{onClose:r,"aria-labelledby":"simple-dialog-title",open:c,children:[Object(i.jsx)(B.a,{id:"simple-dialog-title",children:"Schedule a repair here:"}),Object(i.jsx)(v.a,{onChange:m,value:d}),Object(i.jsx)("form",{className:o.descriptionTextField,noValidate:!0,autoComplete:"off",children:Object(i.jsx)(R.a,{id:"standard-basic",label:"Description"})}),Object(i.jsx)(S.a,{variant:"outlined",color:"primary",onClick:r,children:"Submit"})]})}function F(){var e=c.a.useState(!1),a=Object(x.a)(e,2),t=a[0],n=a[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(W.a,{title:"Open modal to shcedule a repair",arrow:!0,children:Object(i.jsx)(S.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Schedule Repair"})}),Object(i.jsx)(L,{open:t,onClose:function(){n(!1)}})]})}var H=Object(h.a)((function(e){return{root:{marginTop:25,marginLeft:10},gridContainer:{justifyContent:"center",alignItems:"center"},paper:{height:"50vh",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},container:{maxHeight:"90%"},scheduleRepairDialogButton:{paddingTop:"1vh"}}})),J=[{id:"date",label:"Date",minWidth:50},{id:"time",label:"Time",minWidth:100},{id:"description",label:"Description",minWidth:100}];function I(e,a,t){return{date:e,time:a,description:t}}var q=[I("Sun Dec 20 2020","4:00pm","Repair Mark's Bike"),I("Sun Dec 20 2020","5:00pm","Repair John's Bike"),I("Mon Dec 21 2020","3:00pm","Repair Jack's Bike"),I("Tue Dec 22 2020","11:00am","Repair Harry's Bike"),I("Wed Dec 23 2020","9:00am","Repair Jake's Bike"),I("Thu Dec 24 2020","8:00am","Repair Thad's Bike"),I("Thu Dec 24 2020","9:30am","Repair Trisha's Bike"),I("Thu Dec 24 2020","11:00am","Repair Tom's Bike"),I("Fri Dec 25 2020","9:15am","Repair Benjamin's Bike"),I("Fri Dec 23 2020","11:45am","Repair Jake's Bike")];function $(){var e=H(),a=Object(n.useState)(new Date),t=Object(x.a)(a,2),r=t[0],o=t[1],l=c.a.useState(0),s=Object(x.a)(l,2),d=s[0],m=s[1],h=c.a.useState(10),u=Object(x.a)(h,2),p=u[0],b=u[1],g=c.a.useState(!1),O=Object(x.a)(g,2);O[0],O[1];return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)("h2",{children:"Appointments"}),Object(i.jsxs)(f.a,{container:!0,spacing:8,className:e.gridContainer,children:[Object(i.jsx)(f.a,{item:!0,md:4,children:Object(i.jsxs)(j.a,{className:e.paper,children:[Object(i.jsx)(v.a,{onChange:o,value:r}),Object(i.jsx)("div",{className:e.scheduleRepairDialogButton,children:Object(i.jsx)(F,{})})]})}),Object(i.jsx)(f.a,{item:!0,children:Object(i.jsxs)(j.a,{className:e.paper,children:[Object(i.jsx)(T.a,{className:e.container,children:Object(i.jsxs)(N.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(i.jsx)(C.a,{children:Object(i.jsx)(w.a,{children:J.map((function(e){return Object(i.jsx)(y.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(i.jsx)(k.a,{children:q.slice(d*p,d*p+p).map((function(e){return Object(i.jsx)(w.a,{hover:!0,role:"checkbox",tabIndex:-1,children:J.map((function(a){var t=e[a.id];return Object(i.jsx)(y.a,{align:a.align,children:a.format&&"number"===typeof t?a.format(t):t},a.id)}))},e.code)}))})]})}),Object(i.jsx)(P.a,{rowsPerPageOptions:[10,25,100],component:"div",count:q.length,rowsPerPage:p,page:d,onChangePage:function(e,a){m(a)},onChangeRowsPerPage:function(e){b(+e.target.value),m(0)}})]})})]})]})}var A=[{id:"fullName",label:"Full Name",minWidth:100},{id:"email",label:"Email",minWidth:100},{id:"phoneNumber",label:"Phone",minWidth:100}];function M(e,a,t,i){return{fullName:e+" "+a,email:t,phoneNumber:i}}var G=[M("Mark","Petro","petromw@mail.uc.edu","(440) 554-3745"),M("John","Smith","johnsmith@gmail.com","(440) 123-4566"),M("Jack","Torrence","jacktorrence@gmail.com","(440) 345-3785"),M("Harry","Potter","harrypotter@gmail.com","(440) 850-7749"),M("John","McClane","johnmcclane@gmail.com","(440) 602-5503"),M("Jake","Peralta","jakeperalta@gmail.com","(440) 406-6724"),M("Thad","Beaumont","thadbeaumont@gmail.com","(440) 997-4573"),M("Leland","Gaunt","lelandgaunt@gmail.com","(440) 693-9086"),M("Trisha","McFarland","trishamcfarland@gmail.com","(440) 583-5632"),M("Tom","Gordon","tomgordon@gmail.com","(440) 444-6424"),M("Benjamin","Button","benjaminbutton@gmail.com","(440) 425-8767"),M("Dolores","Claiborne","doloresclaiborne@gmail.com","(440) 131-2343"),M("Jack","London","jacklondon@gmail.com","(440) 324-6300"),M("Holden","Caulfield","holdencaulfield@gmail.com","(440) 779-8896"),M("Percy","Jackson","percyjackson@gmail.com","(440) 034-6753"),M("Louis","Creed","louiscreed@gmail.com","(440) 900-8394"),M("Carrie","White","carriewhite@gmail.com","(440) 875-5352"),M("Paul","Sheldon","paulsheldon@gmail.com","(440) 881-5332")],E=Object(h.a)({root:{marginTop:95,marginLeft:15},container:{height:450,maxHeight:450},h3:{paddingTop:5,paddingLeft:5}});function z(){var e=E(),a=c.a.useState(0),t=Object(x.a)(a,2),n=t[0],r=t[1],o=c.a.useState(10),l=Object(x.a)(o,2),s=l[0],d=l[1];return Object(i.jsxs)(j.a,{className:e.root,children:[Object(i.jsx)("h3",{className:e.h3,children:"Customers"}),Object(i.jsx)(T.a,{className:e.container,children:Object(i.jsxs)(N.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(i.jsx)(C.a,{children:Object(i.jsx)(w.a,{children:A.map((function(e){return Object(i.jsx)(y.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(i.jsx)(k.a,{children:G.slice(n*s,n*s+s).map((function(e){return Object(i.jsx)(w.a,{hover:!0,role:"checkbox",tabIndex:-1,children:A.map((function(a){var t=e[a.id];return Object(i.jsx)(y.a,{align:a.align,children:a.format&&"number"===typeof t?a.format(t):t},a.id)}))},e.code)}))})]})}),Object(i.jsx)(P.a,{rowsPerPageOptions:[10,20,25,50],component:"div",count:G.length,rowsPerPage:s,page:n,onChangePage:function(e,a){r(a)},onChangeRowsPerPage:function(e){d(+e.target.value),r(0)}})]})}var V=t(77),Q=t(204),K=t(196),U=t(43),X=t(101),Y=t.n(X),Z=t(205),_=Object(h.a)((function(){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},appbar:{background:"#333",height:"9vh"},appbarTitle:{flexGrow:"1",fontFamily:"Nunito"},appbarWrapper:{width:"80%",margin:"0 auto"},welcomeText:{color:"#fff",fontFamily:"Nunito",fontSize:"4rem"},icon:{color:"#fff",fontSize:"2rem"},coloredText:{color:"#5AFF3D"}}}));function ee(){var e=_(),a=Object(n.useState)(!1),t=Object(x.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){r(!0)}),[]),Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(Q.a,{className:e.appbar,elevation:0,children:Object(i.jsxs)(K.a,{className:e.appbarWrapper,children:[Object(i.jsxs)("h1",{className:e.appbarTitle,children:["bike",Object(i.jsx)("span",{className:e.coloredText,children:"Shop"})]}),Object(i.jsx)(W.a,{title:"No functionality yet",arrow:!0,children:Object(i.jsx)(U.a,{children:Object(i.jsx)(Y.a,{className:e.icon})})})]})}),Object(i.jsx)(Z.a,Object(V.a)(Object(V.a)({in:c},c?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(i.jsx)("div",{className:e.welcomeTextWrapper,children:Object(i.jsxs)("h1",{className:e.welcomeText,children:["Welcome to the employee page for bike",Object(i.jsx)("span",{className:e.coloredText,children:"Shop"})]})})}))]})}var ae=t.p+"static/media/bikeShopAssett.cc12d7a0.jpg",te=t(206),ie=Object(h.a)((function(e){return{root:{minHeight:"110vh",backgroundImage:"url(".concat(ae,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},title:{paddingLeft:10,justifyContent:"center"}}}));function ne(){var e=ie();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(te.a,{}),Object(i.jsx)(ee,{})]})}t(144);var ce=Object(h.a)((function(){return{root:{display:"flex",width:"100%",height:"20vh",color:"#fff",backgroundColor:"#333"},contactInfo:{marginLeft:"2%"}}}));function re(){var e=ce();return Object(i.jsx)("footer",{className:e.root,children:Object(i.jsxs)("div",{className:e.contactInfo,children:[Object(i.jsx)("h3",{children:"Contact Me"}),Object(i.jsx)("p",{children:"Email: petromw@mail.uc.edu"}),Object(i.jsx)("p",{children:"Phone: (440) 554-3745"})]})})}var oe=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(ne,{}),Object(i.jsx)($,{}),Object(i.jsxs)(f.a,{container:!0,spacing:1,children:[Object(i.jsx)(f.a,{item:!0,md:4,children:Object(i.jsx)(O,{})}),Object(i.jsx)(f.a,{item:!0,md:8,children:Object(i.jsx)(z,{})})]}),Object(i.jsx)(re,{})]})}}]),t}(n.Component),le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,210)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),i(e),n(e),c(e),r(e)}))};o.a.render(Object(i.jsx)(oe,{}),document.getElementById("root")),le()}},[[148,1,2]]]);
//# sourceMappingURL=main.78b25d3a.chunk.js.map