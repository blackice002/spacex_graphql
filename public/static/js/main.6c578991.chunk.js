(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,n,c){},133:function(e,n,c){},134:function(e,n,c){},144:function(e,n,c){},146:function(e,n,c){"use strict";c.r(n);var t=c(4),a=c(2),i=c.n(a),s=c(80),r=c.n(s),l=(c(92),c(93),c(94),c.p+"static/media/logo.8ea28c8d.png"),o=c(32),d=c(9),j=c(51),u=c.n(j),b=c(81),h=c(45),p=c(82),O=c.n(p),x=c(83),m=c.n(x),g=(c(132),function(){var e=Object(a.useState)({}),n=Object(h.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://api.nasa.gov/planetary/apod?api_key=BsLuuv59dAjQFwut1nCBjwCFlmXaXMBKUNiOJYQA");case 2:n=e.sent,i(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(c),console.log(c.url),Object(t.jsxs)("div",{className:"banner_container",style:{backgroundImage:"url(".concat(c.url,")")},children:["video"===c.media_type?Object(t.jsx)(m.a,{url:c.url,loop:"true",width:"100%",playing:"true",config:{youtube:{playerVars:{disablekb:1}}}}):Object(t.jsx)("img",{src:c.url,alt:c.copyright}),Object(t.jsxs)("div",{className:"banner_row",children:[Object(t.jsx)("h4",{children:c.title}),Object(t.jsxs)("p",{className:"date_para",children:[c.date," \xa9 ",c.copyright," "]})]}),Object(t.jsx)("p",{className:"nasaData_explanation",children:c.explanation})]})}),f=c(40),v=c(24),k=(c(133),c(134),function(e){for(var n=e.previousPage,c=e.nextPage,a=e.paginate,i=e.totalPages,s=[],r=1;r<=i;r++)s.push(r);return Object(t.jsx)("div",{className:"pagination",children:Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{onClick:n,children:"\xab"}),s.map((function(e,n){return Object(t.jsx)("li",{onClick:function(){return a(e)},children:e},e)})),Object(t.jsx)("li",{onClick:c,children:"\xbb"})]})})}),y=c(41),_=c.n(y);function N(){var e=Object(f.a)(["\n  query LaunchesQuery {\n    launches {\n      id\n      name\n      success\n      date_local\n      details\n      links {\n        patch{\n          small\n        }\n        flickr {\n          original\n        }\n      }\n    }\n  }\n"]);return N=function(){return e},e}var w=Object(v.gql)(N()),M=function(){var e=Object(a.useState)(1),n=Object(h.a)(e,2),c=n[0],i=n[1],s=Object(v.useQuery)(w,{}),r=s.loading,l=s.error,d=s.data;if(!d&&r)return Object(t.jsx)("p",{children:"Loading..."});if(l)return Object(t.jsx)("p",{children:l});var j=d.launches,u=j.slice().sort((function(e,n){return n.date_local-e.date_local})),b=15*c,p=b-15,O=u.slice(p,b),x=Math.ceil(j.length/15);return Object(t.jsxs)("div",{className:"main_container",children:[Object(t.jsx)("h4",{children:"List of satelite launches"}),Object(t.jsx)("div",{className:"card_wrapper",children:O.map((function(e,n){return Object(t.jsxs)("div",{className:"display_card",children:[Object(t.jsxs)("div",{className:"first_row",children:[Object(t.jsxs)("div",{className:"mission_name",children:[Object(t.jsx)("p",{children:"Mission Name:"}),Object(t.jsxs)("h2",{children:[" ",e.name]}),Object(t.jsxs)("h4",{style:{color:e.success?"#05a005":"#ff0066",borderRadius:"8px"},children:[Object(t.jsx)("span",{children:"\u2022"})," ",e.success?"Success":"Failure"]})]}),Object(t.jsx)("div",{className:"logo_size",children:e.links.patch.small?Object(t.jsx)("img",{src:e.links.patch.small,alt:"rocket-logo"}):Object(t.jsx)("h4",{children:"No-Image"})})]}),Object(t.jsxs)("p",{children:["Launch Date: ",Object(t.jsx)(_.a,{format:"MMMM-DD, YYYY HH:mm a, dddd",children:e.date_local})]}),Object(t.jsx)("div",{className:"more_details",children:Object(t.jsx)(o.b,{to:"/details/".concat(e.id),className:"more_detail_button",children:"More details"})})]},e.id)}))}),Object(t.jsx)(k,{paginate:function(e){i(e)},totalPages:x,nextPage:function(){c<x&&i(c+1)},previousPage:function(){c>1&&i(c-1)}})]})},C=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(g,{}),Object(t.jsx)(M,{})]})};c(144);function D(){var e=Object(f.a)(["\n  query LUNCH_DETAILS($id: String!) {\n    launch(id: $id) {\n      id\n      name\n      details\n      date_local\n      success\n      links {\n        wikipedia\n        patch {\n          small\n        }\n        flickr {\n          original\n        }\n      }\n      getRocket {\n        id\n        name\n        country\n        company\n        description\n      }\n    }\n  }\n"]);return D=function(){return e},e}var P=Object(v.gql)(D()),L=function(e){var n=e.match.params.id,c=Object(v.useQuery)(P||[],{variables:{id:n},fetchPolicy:"cache-and-network"}),a=c.loading,i=c.error,s=c.data;if(!s&a)return Object(t.jsx)("p",{children:"Loading ..."});if(i)return Object(t.jsx)("p",{children:i});var r=s.launch,l=function(e,n,c){return Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{children:e}),Object(t.jsxs)("td",{style:{color:c},children:[" ",n]})]})};return Object(t.jsxs)("div",{className:"detail_main_container",style:{height:"100vh",backgroundImage:"linear-gradient(rgba(255,255,255, .8), rgb(255,255,255)), url(".concat(r.links.flickr.original[0],")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"img_col",children:Object(t.jsx)("img",{src:r.links.patch.small,alt:"rocket_image"})}),Object(t.jsx)("div",{className:"info_col",children:Object(t.jsx)("table",{children:Object(t.jsxs)("tbody",{children:[l("Mission name :",r.name),l("Date :",Object(t.jsx)(_.a,{format:"MMMM-DD, YYYY HH:mm a, dddd",children:r.date_local})),l("Mission Status :",r.success?"Success":"Failure",r.success?"#05a005":"#ff0066"),l("Wikipedia :",Object(t.jsxs)(o.b,{style:{color:"blue"},to:{pathname:r.links.wikipedia},target:"_blank",children:[" ",r.links.wikipedia]}))]})})})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("h2",{children:"Mission Details"}),Object(t.jsx)("p",{children:r.details})]}),Object(t.jsxs)("div",{className:"rocket_details row",children:[Object(t.jsx)("h2",{children:"Rocket Details"}),Object(t.jsxs)("table",{width:"100%",children:[l("Rocket name",r.getRocket.name),l("Country",r.getRocket.country),l("Company",r.getRocket.company),l("Description",r.getRocket.description)]})]})]})};var S=function(){return Object(t.jsxs)("div",{className:"App bg-primary",children:[Object(t.jsx)("img",{src:l,alt:"space x logo",style:{width:"200px",display:"block",margin:"auto"}}),Object(t.jsx)(o.a,{children:Object(t.jsxs)(d.c,{children:[Object(t.jsx)(d.a,{path:"/",exact:!0,component:C}),Object(t.jsx)(d.a,{path:"/details/:id",exact:!0,component:L})]})})]})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,147)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;c(e),t(e),a(e),i(e),s(e)}))},Y=new v.ApolloClient({uri:"/graphql",cache:new v.InMemoryCache});r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(v.ApolloProvider,{client:Y,children:Object(t.jsx)(S,{})})}),document.getElementById("root")),R()},92:function(e,n,c){},93:function(e,n,c){},94:function(e,n,c){}},[[146,1,2]]]);
//# sourceMappingURL=main.6c578991.chunk.js.map