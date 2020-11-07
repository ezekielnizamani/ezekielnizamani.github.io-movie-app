(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{28:function(t,e,c){},29:function(t,e,c){},30:function(t,e,c){},36:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c(0),i=c(21),s=c.n(i),r=(c(28),c(29),c(10)),o=c(8),j=c(14);c(30);var d=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),c=e[0],i=e[1];return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)(o.b,{className:"a logo",to:"/movie-app",children:"My Movies"}),Object(a.jsxs)("ul",{className:"".concat(c&&"open"),children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{className:"a",to:"/movie-app",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{className:"a",to:"/movie-app/watched",children:"Watched"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{className:"a",to:"/movie-app/watchList",children:"Watch list"})}),Object(a.jsx)("i",{className:"icon",onClick:function(){return i(!c)},children:!0!==c?Object(a.jsx)(j.a,{}):Object(a.jsx)(j.b,{})})]})]})},h=c(2);c(36),c(37);var l=function(t){var e=t.movie;return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"image",children:[Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path,"\n"),width:"100%",alt:e.title}),Object(a.jsx)("div",{className:"name",children:e.title})]})})},b=(c(38),c(15)),O=c(7),u=function(t,e){switch(e.type){case"ADD_MOVIE_TO_WATCHlIST":return Object(O.a)(Object(O.a)({},t),{},{watchList:[e.payload].concat(Object(b.a)(t.watchList))});case"ADD_MOVIE_TO_WATCHED":return Object(O.a)(Object(O.a)({},t),{},{watchList:t.watchList.filter((function(t){return t.id!==e.payload.id})),watched:[e.payload].concat(Object(b.a)(t.watched))});case"REMOVE_FROM_WATCHLIST":return Object(O.a)(Object(O.a)({},t),{},{watchList:t.watchList.filter((function(t){return t.id!==e.payload.id}))});case"MOVE_TO_WATCHLIST":return Object(O.a)(Object(O.a)({},t),{},{watched:t.watched.filter((function(t){return t.id!==e.payload.id})),watchList:[e.payload].concat(Object(b.a)(t.watchList))});default:return t}},m=Object(n.createContext)(),p=function(t){var e=t.children,c=Object(n.useState)(""),i=Object(r.a)(c,2),s=i[0],o=i[1],j=Object(n.useState)({}),d=Object(r.a)(j,2),h=d[0],l=d[1],b={watchList:localStorage.getItem("watchList")?JSON.parse(localStorage.getItem("watchList")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},O=Object(n.useReducer)(u,b),p=Object(r.a)(O,2),v=p[0],x=p[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=05da570c81e1d19508559c663d8cb88e&language=en-US&query=".concat(s,"&page=1&include_adult=false")).then((function(t){return t.json()})).then((function(t){return l(t.results)})).catch((function(t){return console.error(t)}))}),[s]),Object(n.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(v.watchList)),localStorage.setItem("watched",JSON.stringify(v.watched))}),[v]);return Object(a.jsx)(m.Provider,{value:{movies:h,watchList:v.watchList,watched:v.watched,addMovieToWatchList:function(t){x({type:"ADD_MOVIE_TO_WATCHlIST",payload:t})},addMovieToWatched:function(t){x({type:"ADD_MOVIE_TO_WATCHED",payload:t})},moveToWatchList:function(t){x({type:"MOVE_TO_WATCHLIST",payload:t})},handleChange:function(t){o(t.target.value.trim())},removeFromWatchList:function(t){x({type:"REMOVE_FROM_WATCHLIST",payload:t})}},children:e})},v=function(t){var e=t.movie,c=t.type,i=Object(n.useContext)(m),s=i.addMovieToWatchList,r=i.addMovieToWatched,o=i.moveToWatchList,j=i.removeFromWatchList,d=!!i.watchList.find((function(t){return t.id===e.id}));return Object(a.jsxs)("div",{children:["add"===c&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"btn",onClick:function(){return s(e)},disabled:d,children:"Add to watch list"})}),"watchList"===c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){return r(e)},children:"Add to watched"}),Object(a.jsx)("button",{className:"btn",onClick:function(){return j(e)},children:"Remove"})]}),"watched"===c&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"btn",onClick:function(){return o(e)},children:"Move to WatchList"})})]})};var x=function(t){var e=t.movies,c=t.type;return Object(a.jsx)("ul",{className:"card-list",children:void 0!==e?e.length?e.map((function(t){return Object(a.jsxs)("li",{children:[Object(a.jsx)(l,{movie:t}),Object(a.jsx)(v,{movie:t,type:c})]},t.id.toString())})):Object(a.jsx)("h1",{children:"No movies"}):Object(a.jsx)("h1",{children:"Serach for movie"})})};var f=function(){var t=Object(n.useContext)(m),e=t.movies,c=t.handleChange;return Object(a.jsxs)("div",{className:"add",children:[Object(a.jsxs)("div",{className:"serach",children:[Object(a.jsx)("label",{htmlFor:"serach",children:"Serach Movie: "}),Object(a.jsx)("input",{type:"serach",onChange:c,name:"search"})]}),Object(a.jsx)(x,{movies:e,type:"add"})]})};var w=function(){var t=Object(n.useContext)(m).watchList;return Object(a.jsxs)("div",{className:"watch-list",children:[Object(a.jsx)("h1",{style:{marginLeft:"1em",marginTop:"1em"},children:"Watch List"}),Object(a.jsx)(x,{movies:t,type:"watchList"})]})};var g=function(){var t=Object(n.useContext)(m).watched;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{marginLeft:"1em",marginTop:"1em"},children:"Watched"}),Object(a.jsx)(x,{movies:t,type:"watched"})]})};var L=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{}),Object(a.jsx)(p,{children:Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{exact:!0,path:"/movie-app",component:f}),Object(a.jsx)(h.a,{path:"/movie-app/watched",component:g}),Object(a.jsx)(h.a,{path:"/movie-app/watchlist",component:w})]})})]})};s.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.81028aca.chunk.js.map