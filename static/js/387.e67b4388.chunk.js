"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,r){r.r(t),r.d(t,{default:function(){return y}});var e,a,c,i,s,u=r(439),o=r(791),p=r(689),f=r(678),h=r(168),l=r(444),d=l.ZP.ul(e||(e=(0,h.Z)(["\nlist-style: none;\nmargin: 0;\npadding: 0;\n"]))),m=l.ZP.li(a||(a=(0,h.Z)(["\ncolor: #001F54;\nfont-size: 16px;\nfont-family: 'Abel', sans-serif;\n"]))),v=l.ZP.img(c||(c=(0,h.Z)(["\nwidth: 150px;\nheight:200px;\nobject-fit: cover;\nborder-radius: 5px;\n"]))),x=l.ZP.p(i||(i=(0,h.Z)(["\ncolor:black;\nfont-weight: 600;\n"]))),Z=l.ZP.span(s||(s=(0,h.Z)(["\nfont-family: 'Abel', sans-serif;\ncolor: blue;\nfont-weight: 500;\n"]))),w=r(184),y=function(){var n=(0,o.useState)(null),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,p.UO)().id;return(0,o.useEffect)((function(){a&&(0,f.h4)(a).then(e).catch(console.log)}),[a]),(0,w.jsx)("div",{children:r&&r.length>0?(0,w.jsx)(d,{children:r.map((function(n){return(0,w.jsxs)(m,{children:[n.profile_path?(0,w.jsx)(v,{src:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:n.character,width:"100"}):(0,w.jsx)(v,{src:"https://i.stack.imgur.com/YaL3s.jpg",alt:n.character,width:"100"}),(0,w.jsxs)(x,{children:["Original name: ",(0,w.jsx)(Z,{children:n.original_name})]}),(0,w.jsxs)(x,{children:["Character: ",(0,w.jsxs)(Z,{children:[" ",n.character]})]})]},n.id)}))}):(0,w.jsx)(Z,{children:"No cast in this movie"})})}},678:function(n,t,r){r.d(t,{Up:function(){return h},Wn:function(){return d},h4:function(){return v},it:function(){return Z},yF:function(){return p}});var e=r(861),a=r(757),c=r.n(a),i=r(263),s="47a16356b4a0b318c8bcd78a4994c971";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="search/movie",o="trending/movie/day";function p(){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(o),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u),{params:{api_key:s,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(t),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.e67b4388.chunk.js.map