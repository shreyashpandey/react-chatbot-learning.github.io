(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),r=n.n(i),c=n(7),s=n.n(c),o=(n(14),n(15),n(3)),u=n.n(o),l=n(8),d=n(2),h=n(4),p=n(5),j=function(){function t(e,n){var a=this;Object(h.a)(this,t),this.handleJavascriptList=function(){var t=a.createChatBotMessage("Fantastic, I've got the following resources for you on Javascript:",{widget:"javascriptLinks"});a.updateChatbotState(t)},this.createChatBotMessage=e,this.setState=n}return Object(p.a)(t,[{key:"updateChatbotState",value:function(t){this.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[t])})}))}}]),t}(),b=function(){function t(e,n){Object(h.a)(this,t),this.actionProvider=e,this.state=n}return Object(p.a)(t,[{key:"parse",value:function(t){console.log(t)}}]),t}(),f=(n(18),function(t){var e=[{text:"Javascript",handler:t.actionProvider.handleJavascriptList,id:1},{text:"Data visualization",handler:function(){},id:2},{text:"APIs",handler:function(){},id:3},{text:"Security",handler:function(){},id:4},{text:"Interview prep",handler:function(){},id:5}].map((function(t){return Object(a.jsx)("button",{className:"learning-option-button",onClick:t.handler,children:t.text},t.id)}));return Object(a.jsx)("div",{className:"learning-options-container",children:e})}),g=(n(19),function(t){var e=t.options.map((function(t){return Object(a.jsx)("li",{className:"link-list-item",children:Object(a.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"link-list-item-url",children:t.text})},t.id)}));return Object(a.jsx)("ul",{className:"link-list",children:e})}),v={initialMessages:[Object(o.createChatBotMessage)("Hi, I'm here to help. What do you want to \t\tlearn?",{widget:"learningOptions"})],widgets:[{widgetName:"learningOptions",widgetFunc:function(t){return Object(a.jsx)(f,Object(d.a)({},t))}},{widgetName:"javascriptLinks",widgetFunc:function(t){return Object(a.jsx)(g,Object(d.a)({},t))},props:{options:[{text:"Introduction to JS",url:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",id:1},{text:"Mozilla JS Guide",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",id:2},{text:"Frontend Masters",url:"https://frontendmasters.com",id:3}]}}]};var m=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(u.a,{config:v,actionProvider:j,messageParser:b})})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),O()}},[[20,1,2]]]);
//# sourceMappingURL=main.663b71ee.chunk.js.map