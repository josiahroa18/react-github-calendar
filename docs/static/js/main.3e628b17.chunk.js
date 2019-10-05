!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var a=t();for(var n in a)("object"===typeof exports?exports:e)[n]=a[n]}}(window,(function(){return(window["webpackJsonpreact-github-calendar"]=window["webpackJsonpreact-github-calendar"]||[]).push([[0],{195:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),c=a(70),i=a.n(c),s=a(71),u=(a(194),a(195),a(72)),m=a(73),h=a(76),d=a(74),f=a(78),E=a(2),b=a.n(E),p=a(31),g=a.n(p),y={background:"transparent",text:"#000",grade4:"#196127",grade3:"#239a3b",grade2:"#7bc96f",grade1:"#c6e48b",grade0:"#ebedf0"},v=a(33),w=a.n(v),k=a(75),S=a(6),C=a.n(S),x=a(16),j=a.n(x),z=a(30),M=a.n(z),Y=a(32),H=a.n(Y),N=a(15),D=a.n(N),T=a(1),G=a.n(T),B=a(17),L=a.n(B),A=a(18),O=a.n(A),F="https://grubersjoe-github-contributions-api.now.sh/v1/",I="YYYY-MM-DD";function W(e,t){return e.contributions.find((function(e){return e.date===t}))}function J(e,t,a){var n=function(e,t,a){var n=new Date,r=a?O()(n,1):G()("".concat(e,"-01-01")),l=a?n:G()("".concat(e,"-12-31")),o=r;0!==j()(r)&&(o=C()(r,j()(r)));for(var c=[];o<=l;){var i=b()(o,I);c.push({date:i,info:W(t,i)}),o=L()(o,7)}return c.map((function(e){for(var a=[],n=0;n<=6;n+=1){var r=b()(L()(e.date,n),I);if(H()(r,l))break;a.push({date:r,info:W(t,r)})}return a}))}(e,t,a),r=function(e,t){var a=0,n=e.length;return e.slice(0,t?n-1:n).reduce((function(e,t,n){var r=G()(t[0].date),l=M()(r)+1;return l!==a&&!(0===n&&12===l)&&(e.push({x:n,label:b()(r,"MMM")}),a=l),e}),[])}(n,a);return{year:e,blocks:n,monthLabels:r,totalCount:a?function(e){var t=e.contributions,a=new Date,n=t.findIndex((function(e){return e.date===b()(a,I)}));if(-1===n)return 0;var r=t.findIndex((function(e){return e.date===b()(O()(a,1),I)}));return-1===r&&(r=t.length-1),t.slice(n,r).reduce((function(e,t){return e+t.count}),0)}(t):function(e,t){var a=e.years.find((function(e){return e.year===String(t)}));return a?a.total:0}(t,e)}}function R(){return(R=Object(k.a)(w.a.mark((function e(t){var a,n,r,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.years,n=t.fullYear,r=t.username,e.next=3,fetch(F+r);case 3:return e.next=5,e.sent.json();case 5:if((l=e.sent).years.length){e.next=8;break}throw new Error("No data available");case 8:return e.abrupt("return",a.map((function(e){var t=D()(G()(String(e)),new Date);return J(e,l,t&&n)})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=a(10),P=a.n(V);var Z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={graphs:null,error:null},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props;(function(e){return R.apply(this,arguments)})({years:t.years,username:t.username,fullYear:t.fullYear}).then((function(t){return e.setState({graphs:t})})).catch((function(t){return e.setState({error:t})}))}},{key:"getTheme",value:function(){var e=this.props,t=e.color,a=e.theme;return"string"===typeof t?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"inherit",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P()("white").darken(8).toHslString(),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"transparent",r=P()(e);return r.isValid()?{background:n,text:P()(t).isValid()?P()(t):y.text,grade4:r.setAlpha(.92).toHslString(),grade3:r.setAlpha(.76).toHslString(),grade2:r.setAlpha(.6).toHslString(),grade1:r.setAlpha(.44).toHslString(),grade0:a}:y}(t):a?Object.assign({},y,a):y}},{key:"getStyles",value:function(){var e=this.props,t=e.fontSize;return{anchor:{color:"inherit"},chart:{marginBottom:"1rem"},calendar:{maxWidth:"100%",height:"auto",marginBottom:"0.25rem",backgroundColor:e.theme.background,overflow:"visible"},meta:{fontSize:t},title:{marginBottom:"0.5rem",paddingBottom:"0.25rem",borderBottom:"2px solid ".concat(this.getTheme().grade0),fontSize:"".concat(Math.round(1.25*t),"px")}}}},{key:"getClassNameFor",value:function(e){return"".concat("react-github-calendar","__").concat(e)}},{key:"getDimensions",value:function(){var e=this.props,t=e.blockMargin,a=e.blockSize,n=e.fontSize;return{width:53*(a+t)-t,height:Math.round(1.5*n)+7*(a+t)-t}}},{key:"getTooltipMessage",value:function(e){var t=this.props.dateFormat;return"<strong>".concat(e.info.count," contributions</strong> on ").concat(b()(e.date,t))}},{key:"renderTitle",value:function(){var e=this.props.username;return r.a.createElement("div",{className:this.getClassNameFor("title"),style:this.getStyles().title},r.a.createElement("a",{href:"https://github.com/".concat(e),title:"GitHub profile",style:this.getStyles().anchor},"@",e," on GitHub"))}},{key:"renderMonthLabels",value:function(e){var t=this,a=this.props,n=a.blockSize,l=a.blockMargin,o=a.fontSize;return e[1].x-e[0].x<=2&&e.shift(),e.map((function(e){return r.a.createElement("text",{x:(n+l)*e.x,y:o,key:e.x,style:{fill:t.getTheme().text,fontSize:o}},e.label)}))}},{key:"renderBlocks",value:function(e){var t=this,a=this.props,n=a.blockSize,l=a.blockMargin,o=a.fontSize,c=this.getTheme(),i=Math.round(1.5*o);return e.map((function(e){return e.map((function(e,a){return r.a.createElement("rect",{x:"0",y:i+(n+l)*a,width:n,height:n,fill:c["grade".concat(e.info?e.info.intensity:0)],"data-tip":e.info&&e.info.count?t.getTooltipMessage(e):null,key:e.date})}))})).map((function(e,t){return r.a.createElement("g",{key:t,transform:"translate(".concat((n+l)*t,", 0)")},e)}))}},{key:"renderMeta",value:function(e,t){var a=this.props.fullYear,n=g()(new Date)===e;return r.a.createElement("div",{className:this.getClassNameFor("meta"),style:this.getStyles().meta},n&&a?"Last year":e," \u2013 ",n&&!a?"So far ":null,t," contributions")}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.style,l=this.state,o=l.error,c=l.graphs,i=this.getStyles(),s=this.getDimensions(),u=s.width,m=s.height;return o?r.a.createElement("p",null,"Error :("):c?r.a.createElement("article",{className:"react-github-calendar",style:n},this.renderTitle(),c.map((function(t,n){var l=t.year,o=t.blocks,s=t.monthLabels,h=t.totalCount;return r.a.createElement("div",{key:l,className:e.getClassNameFor("chart"),style:n<c.length-1?i.chart:null},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:u,height:m,viewBox:"0 0 ".concat(u," ").concat(m),textRendering:"optimizeLegibility",className:e.getClassNameFor("calendar"),style:i.calendar},e.renderMonthLabels(s),e.renderBlocks(o)),e.renderMeta(l,h),a)}))):r.a.createElement("div",{className:this.getClassNameFor("loading")},"Loading \u2026")}}]),t}(n.Component);Z.defaultProps={blockSize:12,blockMargin:2,color:null,dateFormat:"MMM D, YYYY",fontSize:14,fullYear:!0,theme:y,tooltips:!0,years:[Number(b()(new Date,"YYYY"))]};var _=Z,q=a(77),X=function(e){var t=e.children,a=Object(q.a)(e,["children"]);return r.a.createElement("pre",Object.assign({className:"code-block"},a),r.a.createElement("code",null,t))},$={position:"absolute",top:0,right:0,border:0,fill:"#fff",color:"#151513"},K=function(){return r.a.createElement("a",{href:"https://github.com/grubersjoe/react-github-calendar",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:$,"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"hsl(313, 78%, 20%)",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"hsl(313, 78%, 20%)",className:"octo-body"})))},Q=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(K,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"GitHub Contributions Calendar"),r.a.createElement("div",null,"A React component to display a GitHub contributions graph"))),r.a.createElement("main",{className:"container"},r.a.createElement(_,{username:"grubersjoe"}),r.a.createElement("section",null,r.a.createElement("h2",null,"Installation"),r.a.createElement(X,{style:{marginTop:"0.5rem"}},"yarn install react-github-calendar"),r.a.createElement("p",null,"Then in your code:"),r.a.createElement(X,null,"import GitHubCalendar from 'react-github-calendar'")),r.a.createElement("section",null,r.a.createElement("h2",null,"Component properties"),r.a.createElement("div",{style:{overflowX:"auto"}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Property"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Default"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"username"),r.a.createElement("td",null,"String"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"A GitHub username (",r.a.createElement("em",null,"required, obviously"),")")),r.a.createElement("tr",null,r.a.createElement("td",null,"blockMargin"),r.a.createElement("td",null,"Number"),r.a.createElement("td",null,"2"),r.a.createElement("td",null,"Margin between blocks")),r.a.createElement("tr",null,r.a.createElement("td",null,"blockSize"),r.a.createElement("td",null,"Number"),r.a.createElement("td",null,"12"),r.a.createElement("td",null,"Size of one block (one day)")),r.a.createElement("tr",null,r.a.createElement("td",null,"color"),r.a.createElement("td",null,"String|",r.a.createElement("a",{href:"https://www.npmjs.com/package/color"},"Color")),r.a.createElement("td",null,"null"),r.a.createElement("td",null,"Base color to compute graph intensity colors (see below)")),r.a.createElement("tr",null,r.a.createElement("td",null,"dateFormat"),r.a.createElement("td",null,"String"),r.a.createElement("td",null,"'MMM D, YYYY'"),r.a.createElement("td",null,"A"," ",r.a.createElement("code",null,r.a.createElement("a",{href:"https://date-fns.org/v1.29.0/docs/format"},"date-fns/format"))," ","compatible date string")),r.a.createElement("tr",null,r.a.createElement("td",null,"fontSize"),r.a.createElement("td",null,"Number"),r.a.createElement("td",null,"14"),r.a.createElement("td",null,"Base font size for text in chart. The title above (@user) is 25% larger.")),r.a.createElement("tr",null,r.a.createElement("td",null,"fullYear"),r.a.createElement("td",null,"Boolean"),r.a.createElement("td",null,"true"),r.a.createElement("td",null,"Whether to show the whole last year starting now or this year only (starting in January).")),r.a.createElement("tr",null,r.a.createElement("td",null,"theme"),r.a.createElement("td",null,"Object"),r.a.createElement("td",null,r.a.createElement("em",null,"GitHub theme")),r.a.createElement("td",null,"A object specifying all theme colors explicitly (see below)")),r.a.createElement("tr",null,r.a.createElement("td",null,"tooltips"),r.a.createElement("td",null,"Boolean"),r.a.createElement("td",null,"true"),r.a.createElement("td",null,"Whether to add ",r.a.createElement("code",null,"data-tip")," attributes to the blocks. Add"," ",r.a.createElement("code",null,"react-tooltip")," and use it as child of this component. See below example.")),r.a.createElement("tr",null,r.a.createElement("td",null,"years"),r.a.createElement("td",null,"Number[]"),r.a.createElement("td",null,"[",Object(s.format)(new Date,"YYYY"),"]"),r.a.createElement("td",null,"List of to be rendered years. Defaults to the current year. If no data is available the chart for this year will be ommited.")))))),r.a.createElement("section",null,r.a.createElement("h2",null,"Examples"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#show-contributions-of-last-year"},"Show contributions of last year")),r.a.createElement("li",null,r.a.createElement("a",{href:"#display-this-year-only"},"Display this year only")),r.a.createElement("li",null,r.a.createElement("a",{href:"#show-several-years"},"Show several years")),r.a.createElement("li",null,r.a.createElement("a",{href:"#set-the-color-theme"},"Set the color theme")),r.a.createElement("li",null,r.a.createElement("a",{href:"#add-tooltips"},"Add tooltips")),r.a.createElement("li",null,r.a.createElement("a",{href:"#different-block-size"},"Different block size")),r.a.createElement("li",null,r.a.createElement("a",{href:"#different-block-margin"},"Different block margin")),r.a.createElement("li",null,r.a.createElement("a",{href:"#chart-font-size"},"Chart font size"))),r.a.createElement("hr",null),r.a.createElement("h3",{id:"show-contributions-of-last-year"},"Show contributions of last year"),r.a.createElement("p",null,"By default the last whole year is shown."),r.a.createElement(X,null,"<GitHubCalendar username=".concat("grubersjoe"," />")),r.a.createElement(_,{username:"grubersjoe"}),r.a.createElement("hr",null),r.a.createElement("h3",{id:"display-this-year-only"},"Display this year only"),r.a.createElement("p",null,"You might prefer the calendar for the current year to start in January (instead of showing the last twelve months)."),r.a.createElement(X,null,"<GitHubCalendar username=".concat("grubersjoe"," fullYear={false} />")),r.a.createElement(_,{username:"grubersjoe",fullYear:!1}),r.a.createElement("hr",null),r.a.createElement("h3",{id:"show-several-years"},"Show several years"),r.a.createElement("p",null,"To display multiple years, pass an array into the component:"),r.a.createElement(X,null,"<GitHubCalendar username=".concat("grubersjoe"," years={[2018, 2017]} fullYear={false}/>")),r.a.createElement(_,{username:"grubersjoe",years:[2018,2017],fullYear:!1}),r.a.createElement("hr",null),r.a.createElement("h3",{id:"set-the-color-theme"},"Set the color theme"),r.a.createElement("p",null,"Either set a base color (any valid CSS color) to calculate the color hues for the contribution intensity automatically or specify the different theme colors explicitly. If a color is set, the theme will be ignored. If neither color or theme is set, the standard GitHub colors will be used (as in these examples)."),r.a.createElement(X,null,"<GitHubCalendar username=".concat("grubersjoe",' color="hsl(203, 82%, 33%)" />')),r.a.createElement(_,{username:"grubersjoe",color:"hsl(203, 82%, 33%)"}),r.a.createElement("p",null,"Set the colors explicitly like this:"),r.a.createElement(X,null,"const defaultTheme = {\n  background: 'transparent',\n  text: '#000',\n  grade4: '#196127',\n  grade3: '#239a3b',\n  grade2: '#7bc96f',\n  grade1: '#c6e48b',\n  grade0: '#ebedf0',\n};\n\n<GitHubCalendar username=".concat("grubersjoe"," theme={defaultTheme} />")),r.a.createElement(_,{username:"grubersjoe"}),r.a.createElement("hr",null),r.a.createElement("h3",{id:"add-tooltips"},"Add tooltips"),r.a.createElement("p",null,"In order to show tooltips on hover, you need to add another dependency"," ",r.a.createElement("code",null,"react-tooltip"),". Add this component then as child of the calendar. Make sure to enable the `html` property in the ",r.a.createElement("code",null,"ReactTooltip")," component to display the message correctly."),r.a.createElement(X,null,"<div>\n  <GitHubCalendar username=".concat("grubersjoe",">\n    <ReactTooltip delayShow={50} html />\n  </GitHubCalendar>\n</div>")),r.a.createElement("div",null,r.a.createElement(_,{username:"grubersjoe"},r.a.createElement(i.a,{delayShow:50,html:!0}))),r.a.createElement("hr",null),r.a.createElement("h3",{id:"different-block-size"},"Different block size"),r.a.createElement("p",null,"The block size (12 per default) is configurable:"),r.a.createElement(X,null,"<GitHubCalendar username=".concat("grubersjoe"," blockSize={10} />")),r.a.createElement(_,{username:"grubersjoe",blockSize:10}),r.a.createElement("hr",null),r.a.createElement("h3",{id:"different-block-margin"},"Different block margin (and size)"),r.a.createElement("p",null,"Analogously the block margin can be adjusted."),r.a.createElement(X,null,"<GitHubCalendar username=".concat("grubersjoe"," blockSize={10} blockMargin={4} />")),r.a.createElement(_,{username:"grubersjoe",blockSize:10,blockMargin:4}),r.a.createElement("hr",null),r.a.createElement("h3",{id:"chart-font-size"},"Chart font size"),r.a.createElement("p",null,"Finally, there is a property to set the fontsize of the text inside the chart. This comes in handy, if a large block size or margin is set. The default base font size is 14px."),r.a.createElement(X,null,"<GitHubCalendar username=".concat("grubersjoe"," fontSize={14} blockSize={12} />")),r.a.createElement(_,{username:"grubersjoe",fontSize:14,blockSize:12}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,t,a){e.exports=a(197)}},[[79,1,2]]])}));
//# sourceMappingURL=main.3e628b17.chunk.js.map