(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/test2.ddc5748d.jpg"},39:function(e,a,t){e.exports=t(71)},47:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),s=t(8),o=(t(44),t(10)),i=t(11),m=t(13),u=t(12),d=t(20),p=t(26),E=t.n(p),h=(t(47),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h3",null,"I'm a ".concat(a,". ").concat(t,".")),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},n))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),f=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 Bryan Martirez"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.country,r=this.props.data.address.city,c=this.props.data.address.state,s=this.props.data.address.zip,o=this.props.data.email,i=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Bryan Martirez Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"Hi, I'm Bryan. Nice to meet you."),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,r," ",c,", ",s,l.a.createElement("br",null),n),l.a.createElement("br",null),l.a.createElement("span",null,o))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),N=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("em",{onClick:function(){return window.open("https://www.google.com/search?q=".concat(e.searchq),"_blank")}},e.name))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.country,t=this.props.data.address.city,n=this.props.data.address.state,r=this.props.data.address.zip,c=this.props.data.email,s=this.props.data.contactmessage;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},s))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),t,", ",n," ",r,l.a.createElement("br",null),a,l.a.createElement("br",null),l.a.createElement("span",null,c))))))}}]),t}(n.Component),g=t(19),w=t(27),y=t.n(w),k=t(28),j=t(29),O=t(30);function C(){var e=Object(j.a)(["\n  {\n    viewer {\n      login\n      name\n      pinnedItems(types: REPOSITORY, first: 7) {\n        totalCount\n        nodes {\n          ... on Repository {\n            id\n            name\n            createdAt\n            description\n            resourcePath\n            url\n          }\n        }\n      }\n    }\n  }\n"]);return C=function(){return e},e}var D=t.n(O)()(C()),S=t(31),x=t.n(S),z=function(){var e=Object(g.a)(D),a=e.data,t=e.loading,n=Object(k.get)(a,"viewer.pinnedItems.nodes",[]);return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),t&&l.a.createElement(y.a,{type:"Bars",color:"#00BFFF",height:50,width:50}),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},n.map((function(e){return l.a.createElement("div",{key:e.name,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.name},l.a.createElement("img",{alt:e.name,src:x.a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}))))))},B=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),n}return Object(i.a)(t,[{key:"getResumeData",value:function(){E.a.ajax({url:"/react-portfolio/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.resume}),l.a.createElement(z,{data:this.state.resumeData.portfolio}),l.a.createElement(b,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),t}(n.Component),F=t(21),I=t(15),M=t(38),R=t(36),q=t(37),W=Object(M.a)({uri:"https://api.github.com/graphql"}),A=Object(R.a)((function(e,a){var t=a.headers;return{headers:Object(F.a)(Object(F.a)({},t),{},{authorization:"Bearer ".concat("d48b35ae4b83c5ef685a7fcba9252b651b4648c0")})}})),P=new I.a({link:A.concat(W),cache:new q.a}),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(){return l.a.createElement(s.a,{client:P},l.a.createElement(B,null))};c.a.render(l.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-portfolio","/service-worker.js");H?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):T(e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.f9e51e94.chunk.js.map