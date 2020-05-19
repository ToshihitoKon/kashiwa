(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],p=0,f=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/kashiwa/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"335e":function(t,e,s){"use strict";var n=s("a0fb"),i=s.n(n);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),s("router-view")],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pos-f-t"},[s("nav",{staticClass:"navbar navbar-dark bg-dark"},[t._m(0),s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Kashiwa")]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sidebartoggle"}},[s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/music"}},[t._v("music")])],1),s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/daifuku"}},[t._v("daifuku")])],1)])],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebartoggle"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],c=s("2877"),l={},u=Object(c["a"])(l,o,r,!1,null,null,null),p=u.exports,f=(s("38cf"),s("2f62")),d={namespaced:!0,state:{apiUrl:"http://192.168.10.101:5000/api/v2"}},b={namespaced:!0,state:{player:{title:"loading...",isSleepTimer:!1,total:0,duration:0,playlistPosition:0,volume:0,isPlaying:!1,random:!1,single:!1,repeat:!1,consume:!1},fetchTimer:0},mutations:{setPlayerState:function(t,e){t.player={title:e.title,artist:e.artist,isPlaying:e.isplaying,volume:e.volume,random:e.random,single:e.single,repeat:e.repeat,consume:e.consume,total:e.total,duration:e.duration,playlistPosition:e.playlist_position}},setFetchTimer:function(t,e){t.fetchTimer=e}}},m={namespaced:!0,state:{list:[]},mutations:{setList:function(t,e){t.list=e}},getters:{getSortedList:function(t){return t.list.sort((function(t,e){e.position,t.position}))}}};n["a"].use(f["a"]);var h=new f["a"].Store({modules:{constants:d,music:b,queuelist:m}}),v=h,y={name:"app",store:v,components:{Header:p}},g=y,O=Object(c["a"])(g,i,a,!1,null,null,null),_=O.exports,j=s("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container w-75"},[n("div",{staticClass:"top"},[n("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),n("h1",[t._v(t._s(t.msg))])]),n("div",{staticClass:"mt-4"},[n("Player")],1)])},P=[],w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-2 mx-auto"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"text-center"},[s("p",[s("strong",[t._v(t._s(t.player.title)+" / "+t._s(t.player.artist))])])]),s("div",{staticClass:"text-center mt-2"},[s("button",{staticClass:"btn btn-info mx-1",on:{click:t.prev}},[s("font-awesome-icon",{attrs:{icon:t.icon.prev}})],1),s("button",{staticClass:"btn btn-info mx-1",on:{click:t.toggle}},[s("font-awesome-icon",{attrs:{icon:t.togglePlay}})],1),s("button",{staticClass:"btn btn-info mx-1",on:{click:t.next}},[s("font-awesome-icon",{attrs:{icon:t.icon.next}})],1)]),s("div",{staticClass:"text-center mt-2"},[s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.random?"btn-info":"btn-outline-info"]},[s("font-awesome-icon",{attrs:{icon:t.icon.random}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.single?"btn-info":"btn-outline-info"]},[s("font-awesome-icon",{attrs:{icon:t.icon.single}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.repeat?"btn-info":"btn-outline-info"]},[s("font-awesome-icon",{attrs:{icon:t.icon.repeat}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.consume?"btn-info":"btn-outline-info"]},[s("font-awesome-icon",{attrs:{icon:t.icon.consume}})],1)]),s("div",{staticClass:"mt-2 mx-auto",staticStyle:{"max-width":"500px"}},[s("span",[t._v("volume: "+t._s(t.volume))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99"},domProps:{value:t.volume},on:{change:t.postMusicVolume,__r:function(e){t.volume=e.target.value}}})])])])},x=[],k=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),S=s("bc3a"),U=s.n(S),E=s("c074"),M=s("ad3d");function $(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?$(Object(s),!0).forEach((function(e){Object(k["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):$(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var T={data:function(){return{volume:0,icon:{play:E["c"],pause:E["b"],next:E["g"],prev:E["f"],random:E["d"],repeat:E["e"],single:E["h"],consume:E["a"]}}},components:{FontAwesomeIcon:M["a"]},computed:D({},Object(f["c"])("music",{player:function(t){return t.player},fetchTimer:function(t){return t.fetchTimer}}),{},Object(f["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{togglePlay:function(){return this.player.isPlaying?this.icon.pause:this.icon.play}}),created:function(){this.getMusicStatus()},methods:{setMusicStatus:function(t){if(clearTimeout(this.fetchTimer),this.$store.commit("music/setPlayerState",t),this.volume=t.volume,t.isplaying){var e=t.total-t.duration,s=setTimeout(this.getMusicStatus,1e3*(e+2));console.log("setTimeout ",s),this.$store.commit("music/setFetchTimer",s)}},getMusicStatus:function(){U.a.get("".concat(this.apiUrl,"/status")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},toggle:function(){U.a.post("".concat(this.apiUrl,"/toggle")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},next:function(){U.a.post("".concat(this.apiUrl,"/next")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},prev:function(){U.a.post("".concat(this.apiUrl,"/prev")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},postMusicVolume:function(){U.a.post("".concat(this.apiUrl,"/volume"),{volume:this.volume}).then(function(t){this.setMusicStatus(t.data)}.bind(this))}}},L=T,q=Object(c["a"])(L,w,x,!1,null,null,null),Q=q.exports,F={name:"Top",components:{Player:Q},props:{msg:String}},V=F,A=(s("335e"),Object(c["a"])(V,C,P,!1,null,"5f52efe5",null)),H=A.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 w-75"},[s("Chocho"),s("Player"),s("Queuelist"),s("Playlist")],1)},J=[],K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-2 mx-auto"},[s("div",{staticClass:"card-body mx-2"},[s("h5",{staticClass:"card-title"},[t._v("queue list")]),s("div",[s("button",{staticClass:"btn btn-light",on:{click:t.getMusicQueueList}},[t._v(" load ")]),s("button",{staticClass:"btn btn-light",on:{click:t.crop}},[t._v(" crop ")])]),s("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{height:"300px"}},t._l(t.queuelist,(function(e){return s("li",{key:e.title,staticClass:"list-group-item"},[s("div",{staticClass:"float-left"},[e.position===t.playpos?s("span",{staticClass:"spinner-border"},[s("span",{staticClass:"sr-only"},[t._v("Playing")])]):s("button",{staticClass:"btn btn-sm btn-info",on:{click:function(s){return t.playPosition(e.position)}}},[s("font-awesome-icon",{attrs:{icon:t.icon.play}})],1)]),s("div",{staticClass:"float-left h-100"},[s("span",{staticClass:"ml-2"},[t._v(t._s(e.position))]),s("span",{staticClass:"ml-2"},[t._v(t._s(e.title))])])])})),0)])])},N=[];function W(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function z(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?W(Object(s),!0).forEach((function(e){Object(k["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var B={data:function(){return{icon:{play:E["c"]}}},components:{FontAwesomeIcon:M["a"]},computed:z({},Object(f["b"])("queuelist",{queuelist:"getSortedList"}),{},Object(f["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{},Object(f["c"])("music",{playpos:function(t){return t.player.playlistPosition}})),methods:{getMusicQueueList:function(){U.a.get("".concat(this.apiUrl,"/playlist/current")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},crop:function(){U.a.post("".concat(this.apiUrl,"/crop")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},playPosition:function(t){U.a.post("".concat(this.apiUrl,"/play/position"),{position:t}).then(function(t){this.$store.commit("music/setPlayerState",t.data),this.getMusicQueueList()}.bind(this))}}},G=B,R=Object(c["a"])(G,K,N,!1,null,null,null),X=R.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-2 mx-auto"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" Playlist ")]),s("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{"max-height":"300px"}},t._l(t.playlists,(function(e){return s("li",{key:e,staticClass:"list-group-item"},[s("div",{staticClass:"float-left"},[s("button",{staticClass:"btn btn-sm btn-info",on:{click:function(s){return t.selectPlaylist(e)}}},[t._v(" load ")])]),s("div",{staticClass:"float-left"},[s("span",{staticClass:"ml-2"},[t._v(t._s(e))])])])})),0)])])},Z=[];function tt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function et(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(s),!0).forEach((function(e){Object(k["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):tt(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var st={data:function(){return{playlists:[]}},mounted:function(){this.getPlaylists()},computed:et({},Object(f["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{getPlaylists:function(){U.a.get("".concat(this.apiUrl,"/playlist/list")).then(function(t){this.playlists=t.data}.bind(this))},selectPlaylist:function(t){U.a.post("".concat(this.apiUrl,"/playlist/select"),{name:t}).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))}}},nt=st,it=Object(c["a"])(nt,Y,Z,!1,null,null,null),at=it.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-2 mx-auto"},[s("button",{staticClass:"btn btn-success",on:{click:t.chocho}},[t._v(" ひつじをかぞえるちょうちょ ")])])},rt=[];function ct(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function lt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(s),!0).forEach((function(e){Object(k["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ct(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var ut={data:function(){return{playlists:[]}},mounted:function(){this.getPlaylists()},computed:lt({},Object(f["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{chocho:function(){U.a.post("".concat(this.apiUrl,"/playlist/select"),{name:"chocho"}).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))}}},pt=ut,ft=Object(c["a"])(pt,ot,rt,!1,null,null,null),dt=ft.exports,bt={components:{Chocho:dt,Player:Q,Queuelist:X,Playlist:at}},mt=bt,ht=Object(c["a"])(mt,I,J,!1,null,null,null),vt=ht.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 w-75"},[s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("daifuku")]),s("button",{staticClass:"btn btn-light",on:{click:t.mochi_pull}},[t._v(" mochi pull ")]),s("button",{staticClass:"btn btn-light",on:{click:t.kashiwa_pull}},[t._v(" kashiwa pull ")])])]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("result")]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-title"},[t._v("status")]),t._v(" "+t._s(t.result.exit_status)+" ")])]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-title"},[t._v("stdout")]),t._v(" "+t._s(t.result.stdout)+" ")])]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-title"},[t._v("stderr")]),t._v(" "+t._s(t.result.stderr)+" ")])])])])])},gt=[],Ot={data:function(){return{apiUrl:"http://192.168.10.101:5000",result:{exit_status:"",stdout:"",stderr:""}}},methods:{set_result:function(t){this.result={exit_status:t.status,stdout:t.stdout,stderr:t.stderr}},mochi_pull:function(){U.a.post("".concat(this.apiUrl,"/daifuku/mochi/pull")).then(function(t){this.set_result(t.data)}.bind(this))},kashiwa_pull:function(){U.a.post("".concat(this.apiUrl,"/daifuku/kashiwa/pull")).then(function(t){this.set_result(t.data)}.bind(this))}}},_t=Ot,jt=Object(c["a"])(_t,yt,gt,!1,null,null,null),Ct=jt.exports;n["a"].use(j["a"]);var Pt=[{path:"/",component:H,props:{msg:"Welcome to Kashiwa"}},{path:"/music",component:vt},{path:"/daifuku",component:Ct}],wt=new j["a"]({base:"/kashiwa/dist/",routes:Pt}),xt=wt;n["a"].config.productionTip=!1,new n["a"]({router:xt,store:v,el:"#app",render:function(t){return t(_)}})},a0fb:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a4f1b813.js.map