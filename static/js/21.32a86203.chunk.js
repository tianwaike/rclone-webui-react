(this["webpackJsonp@rclone/rclone-webui"]=this["webpackJsonp@rclone/rclone-webui"]||[]).push([[21],{696:function(e,n,t){"use strict";t.r(n);var a=t(3),o=t(159),r=t(32),l=t(33),c=t(69),i=t(68),u=t(70),s=t(0),m=t.n(s),p=t(43),d=t(320),h=t(77),f=t(53),g=t(4),b=t(443),E=[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Configs",url:"/showconfig",icon:"icon-note"},{name:"Explorer",url:"/remoteExplorer",icon:"icon-screen-desktop"},{name:"Backend",url:"/rcloneBackend",icon:"icon-star"},{name:"Log Out",url:"/login",icon:"icon-logout"}],y=m.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(16)]).then(t.bind(null,699))})),v=m.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(15)]).then(t.bind(null,701))})),k=m.a.lazy((function(){return t.e(17).then(t.bind(null,702))})),x=m.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8),t.e(14)]).then(t.bind(null,695))})),w=[{path:"/",exact:!0,name:"Home"},{path:"/newdrive/edit/:drivePrefix",name:"Edit Remote",component:y},{path:"/newdrive",exact:!0,name:"New Remote",component:y},{path:"/login",exact:!0,name:"Login Page",component:m.a.lazy((function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,697))}))},{path:"/dashboard",name:"Dashboard",component:v},{path:"/showconfig",name:"Configs",component:k},{path:"/remoteExplorer/:remoteName/:remotePath",exact:!0,name:"Explorer",component:x},{path:"/remoteExplorer",name:"Explorer",component:x},{path:"/rcloneBackend",name:"Rclone Backend",component:m.a.lazy((function(){return t.e(11).then(t.bind(null,694))}))}],z=t(102),O=t(44),j=t(103),C=m.a.lazy((function(){return t.e(19).then(t.bind(null,683))})),P=m.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(18)]).then(t.bind(null,684))})),N={attributes:{target:"_blank"},class:"mt-auto",icon:"cui-cog",url:"https://rclone.org/changelog",variant:"success"},L=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem(O.a)?this.props.getVersion():this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"app","data-test":"defaultLayout"},m.a.createElement(j.a,null,m.a.createElement(b.c,{fixed:!0},m.a.createElement(s.Suspense,{fallback:this.loading()},m.a.createElement(P,{onLogout:function(n){return e.signOut(n)}}))),m.a.createElement("div",{className:"app-body"},m.a.createElement(b.e,{fixed:!0,display:"lg"},m.a.createElement(b.h,null),m.a.createElement(b.g,null),m.a.createElement(s.Suspense,{fallback:this.loading()},m.a.createElement(b.j,{navConfig:this.navConfig})),m.a.createElement(b.f,null),m.a.createElement(b.i,null)),m.a.createElement("main",{className:"main"},m.a.createElement(b.a,{appRoutes:w}),m.a.createElement(d.a,{fluid:!0},m.a.createElement(s.Suspense,{fallback:this.loading()},m.a.createElement(p.d,null,w.map((function(e,n){return e.component?m.a.createElement(p.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return m.a.createElement(e.component,n)}}):null})),m.a.createElement(p.a,{from:"/",to:"/login"})))))),m.a.createElement(b.b,null,m.a.createElement(s.Suspense,{fallback:this.loading()},m.a.createElement(C,null)))))}},{key:"navConfig",get:function(){return{items:[].concat(Object(o.a)(E),[Object(a.a)({name:this.props.version.version},N)])}}}]),n}(s.Component);n.default=Object(z.b)((function(e){return{isConnected:e.status.isConnected,version:e.version}}),{getVersion:function(){return function(e){h.a.post(f.a.getRcloneVersion).then((function(n){return e({type:g.z,status:g.I,payload:n.data})}),(function(n){return e({type:g.z,status:g.G,payload:n})}))}}})(L)}}]);
//# sourceMappingURL=21.32a86203.chunk.js.map