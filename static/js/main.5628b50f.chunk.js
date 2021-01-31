(this.webpackJsonpomdb=this.webpackJsonpomdb||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(0),c=a.n(n),s=a(71),i=a.n(s),o=a(151),u=a(149),l=(a(93),a(6)),j=a(129),b=a(147),h=a(136),d=a(137),p=a(82),O=a(28),f=a.n(O),g=a(42),x=a(140),m=a(141),y=a(150),v=a(142),w=a(154),C=a(144),F=a(145),k=a(143),M=a(146),P=Object(n.createContext)(),T=a(72),S=function(e){var t=e.onChangeDebouncedQuery,a=e.defaultQuery,r=Object(n.useState)(a||""),c=Object(l.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(a||""),u=Object(l.a)(o,2),j=u[0],b=u[1],h=Object(n.useRef)(Object(T.debounce)((function(e){return e()}),500)).current;return Object(n.useEffect)((function(){h((function(){b(s)}))}),[s,h]),Object(n.useEffect)((function(){t&&t(j)}),[t,j]),{query:s,setQuery:i}},E=a(73),D=a(74),R=a(75),q=a(76),z=a.n(q),Q=function(){function e(t){Object(D.a)(this,e),this.id=t.imdbID,this.type=t.Type,this.title=t.Title,this.poster=t.Poster,this.year=t.Year}return Object(R.a)(e,[{key:"getType",value:function(){return this.type}},{key:"getTitle",value:function(){return this.title||""}},{key:"getPoster",value:function(){return"N/A"!==this.poster?this.poster:"https://via.placeholder.com/600x900/000000/FFFFFF?text=".concat(this.getTitle())}},{key:"getYear",value:function(){return this.year}}]),e}();Q.fetchAll=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,r,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.params,r={s:a.query||"",page:a.page||1,apikey:"938231c8"},e.next=4,z.a.get("http://www.omdbapi.com",{params:r});case 4:if(n=e.sent,"False"!==(c=n.data).Response){e.next=8;break}throw new Error(c.Error);case 8:return e.abrupt("return",[(c.Search||[]).map((function(e){return new Q(e)})),c.totalResults]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var I=Q,L=a(152),N=a(138),A=a(139),Y=function(e){var t=e.movie,a=Object(j.b)().colorMode;return Object(r.jsxs)(h.a,{bg:"light"===a?"gray.100":"gray.900",shadow:"md",borderRadius:"sm",overflow:"hidden",flexDir:"column",children:[Object(r.jsx)(h.a,{h:360,children:Object(r.jsx)(L.a,{src:t.getPoster(),objectFit:"contain",w:"full"})}),Object(r.jsxs)(h.a,{p:3,flex:1,flexDir:"column",justifyContent:"space-between",children:[Object(r.jsx)(d.a,{as:"h2",size:"sm",mb:2,children:t.getTitle()}),Object(r.jsxs)(h.a,{justifyContent:"space-between",children:[Object(r.jsx)(N.a,{children:t.getYear()}),Object(r.jsx)(A.a,{alignSelf:"center",children:t.getType()})]})]})]})},B=c.a.memo(Y),J=a(153),G=function(e){var t=e.children;return Object(r.jsxs)(h.a,{justifyContent:"center",children:[Object(r.jsx)(J.a,{thickness:2,speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"lg",mr:3}),Object(r.jsx)(h.a,{alignItems:"center",children:Object(r.jsx)(N.a,{children:t})})]})},U=a(80),W=a.n(U),H=function(){var e=Object(n.useContext)(P),t=Object(l.a)(e,2),a=t[0],c=a.data,s=a.isFetching,i=a.params,o=a.totalResults,u=a.errorMsg,j=t[1],b=S({onChangeDebouncedQuery:Object(n.useCallback)((function(e){j(e?{type:"setParams",payload:{query:e,page:1}}:{type:"clear"})}),[j]),defaultQuery:W.a.parse(window.location.search).query||""}),h=b.query,d=b.setQuery,p=Object(E.a)({loading:s,hasNextPage:o>c.length,threshold:200,onLoadMore:function(){return j({type:"setNextPage"})}});return Object(n.useEffect)((function(){var e=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.fetchAll({params:i});case 3:t=e.sent,a=Object(l.a)(t,2),r=a[0],n=a[1],j({type:"add",payload:{data:r,total:n}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),j({type:"setError",payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();i.query&&e()}),[i,j]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{py:4,mb:4,children:Object(r.jsxs)(m.a,{size:"lg",variant:"filled",children:[Object(r.jsx)(y.a,{placeholder:"Search movie by name...",value:h,onChange:function(e){return d(e.target.value)}}),Object(r.jsx)(v.a,{children:Object(r.jsx)(k.a,{color:"gray.300"})})]})}),u&&Object(r.jsx)(w.a,{status:"info",children:u}),s&&0===c.length&&Object(r.jsx)(G,{children:"Searching ..."}),Object(r.jsx)(C.a,{ref:p,templateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"],gap:5,mb:4,children:c.map((function(e){return Object(r.jsx)(B,{movie:e},e.id)}))}),s&&c.length>0&&Object(r.jsx)(G,{children:"Searching ..."}),Object(r.jsx)(F.a,{"aria-label":"Go up",icon:Object(r.jsx)(M.a,{}),size:"lg",pos:"fixed",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})},bottom:6,right:6})]})},K=a(14),V=a(16),X={data:[],isFetching:!1,params:{query:"",page:1},errorMsg:null,totalResults:0},Z=function(e,t){var a=t.type,r=t.payload;switch(a){case"add":return Object(V.a)(Object(V.a)({},e),{},{data:[].concat(Object(K.a)(e.data),Object(K.a)(r.data)),totalResults:parseInt(r.total,10),isFetching:!1});case"setNextPage":return Object(V.a)(Object(V.a)({},e),{},{isFetching:!0,params:Object(V.a)(Object(V.a)({},e.params),{},{page:e.params.page+1})});case"setParams":return Object(V.a)(Object(V.a)({},X),{},{isFetching:!0,params:Object(V.a)(Object(V.a)({},e.params),r)});case"setError":return Object(V.a)(Object(V.a)({},e),{},{isFetching:!1,errorMsg:r});case"clear":return X;default:throw new Error("Unknown action in Movies reducer","unknown-action")}};var $=function(){var e=c.a.useReducer(Z,X),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(j.b)(),i=s.colorMode,o=s.toggleColorMode;return Object(r.jsx)(P.Provider,{value:[a,n],children:Object(r.jsxs)(b.a,{maxW:"6xl",my:4,children:[Object(r.jsxs)(h.a,{justifyContent:"space-between",children:[Object(r.jsx)(d.a,{as:"h1",size:"lg",mb:4,children:"OMDb"}),Object(r.jsxs)(p.a,{onClick:o,size:"sm",children:["Toggle ","light"===i?"Dark":"Light"]})]}),Object(r.jsx)(H,{})]})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,155)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},ee=a(148),te=Object(ee.a)({config:{initialColorMode:"light",useSystemColorMode:!0}});i.a.render(Object(r.jsxs)(o.a,{children:[Object(r.jsx)(u.a,{initialColorMode:te.config.initialColorMode}),Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)($,{})})]}),document.getElementById("root")),_()},93:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.5628b50f.chunk.js.map