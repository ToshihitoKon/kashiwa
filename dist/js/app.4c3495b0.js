(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/kashiwa/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Header"),n("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pos-f-t"},[s("nav",{staticClass:"navbar navbar-dark bg-dark"},[t._m(0),s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("img",{staticStyle:{"max-height":"1em"},attrs:{alt:"Vue logo",src:n("cf05")}}),t._v(" Kashiwa ")]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sidebartoggle"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-3"},[s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/music"}},[t._v("music")])],1),s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/daifuku"}},[t._v("daifuku")])],1),s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/okonomi"}},[t._v("okonomi")])],1),s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/cookie"}},[t._v("cookie")])],1),s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/tako"}},[t._v("tako")])],1)]),s("div",{staticClass:"col col-md-auto mx-auto"},[s("Player"),s("Ziho")],1),s("div",{staticClass:"col col-3"})])])],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebartoggle"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-light"},[n("div",{staticClass:"text-center"},[n("p",[n("strong",[t._v(t._s(t.player.title))])])]),n("div",{staticClass:"text-center mt-2"},[n("button",{staticClass:"btn btn-info mx-1",on:{click:t.prev}},[n("font-awesome-icon",{attrs:{icon:t.icon.prev}})],1),n("button",{staticClass:"btn btn-info mx-1",on:{click:t.toggle}},[n("font-awesome-icon",{attrs:{icon:t.togglePlay}})],1),n("button",{staticClass:"btn btn-info mx-1",on:{click:t.next}},[n("font-awesome-icon",{attrs:{icon:t.icon.next}})],1)]),n("div",{staticClass:"mt-2 mx-auto",staticStyle:{"max-width":"500px"}},[n("span",[t._v("volume: "+t._s(t.volume))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99"},domProps:{value:t.volume},on:{change:t.postMusicVolume,__r:function(e){t.volume=e.target.value}}})])])},l=[],u=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),p=n("2f62"),d=n("bc3a"),f=n.n(d),v=n("c074"),m=n("ad3d");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={data:function(){return{volume:0,icon:{play:v["c"],pause:v["b"],next:v["g"],prev:v["f"]}}},components:{FontAwesomeIcon:m["a"]},computed:h({},Object(p["c"])("music",{player:function(t){return t.player},fetchTimer:function(t){return t.fetchTimer}}),{},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{togglePlay:function(){return this.player.isPlaying?this.icon.pause:this.icon.play}}),created:function(){this.getMusicStatus()},methods:{setMusicStatus:function(t){if(clearTimeout(this.fetchTimer),this.$store.commit("music/setPlayerState",t),this.volume=t.volume,t.isplaying){var e=t.total-t.duration,n=setTimeout(this.getMusicStatus,1e3*(e+2));console.log("setTimeout ",n),this.$store.commit("music/setFetchTimer",n)}},getMusicStatus:function(){f.a.get("".concat(this.apiUrl,"/status")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},toggle:function(){f.a.post("".concat(this.apiUrl,"/toggle")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},next:function(){f.a.post("".concat(this.apiUrl,"/next")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},prev:function(){f.a.post("".concat(this.apiUrl,"/prev")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},postMusicVolume:function(){f.a.post("".concat(this.apiUrl,"/volume"),{volume:this.volume}).then(function(t){this.setMusicStatus(t.data)}.bind(this))}}},g=y,O=n("2877"),_=Object(O["a"])(g,c,l,!1,null,null,null),j=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("button",{staticClass:"btn btn-light",on:{click:t.toggle_ziho}},[t._v(" 限界時報 ")]),n("span",{staticClass:"badge",class:[1==t.response.value?"badge-dark":"badge-danger"]},[t._v(" "+t._s(t.zihoStatus)+" ")])])},w=[];function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={data:function(){return{response:{}}},computed:k({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{zihoStatus:function(){return 0==this.response.value?"有効":"無効"}}),created:function(){this.get_ziho()},methods:{toggle_ziho:function(){f.a.post("".concat(this.apiUrl,"/okonomi/toggle"),{key:"ZIHOU"}).then(function(t){this.response=t.data}.bind(this))},get_ziho:function(){f.a.get("".concat(this.apiUrl,"/okonomi/get"),{params:{key:"ZIHOU"}}).then(function(t){this.response=t.data[0]}.bind(this))}}},S=x,E=Object(O["a"])(S,C,w,!1,null,null,null),U=E.exports,D={components:{Player:j,Ziho:U}},M=D,$=Object(O["a"])(M,r,o,!1,null,null,null),T=$.exports,A=(n("38cf"),{namespaced:!0,state:{apiUrl:"http://192.168.10.101:5000/api/v2"}}),z={namespaced:!0,state:{player:{title:"loading...",isSleepTimer:!1,total:0,duration:0,playlistPosition:0,volume:0,isPlaying:!1,random:!1,single:!1,repeat:!1,consume:!1},fetchTimer:0},mutations:{setPlayerState:function(t,e){t.player={title:e.title,artist:e.artist,isPlaying:e.isplaying,volume:e.volume,random:e.random,single:e.single,repeat:e.repeat,consume:e.consume,total:e.total,duration:e.duration,playlistPosition:e.playlist_position}},setFetchTimer:function(t,e){t.fetchTimer=e}}},L={namespaced:!0,state:{list:[]},mutations:{setList:function(t,e){t.list=e}},getters:{getSortedList:function(t){return t.list.sort((function(t,e){e.position,t.position}))}}};s["a"].use(p["a"]);var N=new p["a"].Store({modules:{constants:A,music:z,queuelist:L}}),G=N,F={name:"app",store:G,components:{Header:T}},I=F,V=Object(O["a"])(I,a,i,!1,null,null,null),q=V.exports,J=n("8c4f"),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container w-75"},[s("div",{staticClass:"top"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),s("h1",[t._v(t._s(t.msg))])]),s("div",{staticClass:"mt-4 text-right"},[s("Player"),s("router-link",{staticClass:"btn btn-link",attrs:{to:"/music"}},[t._v(" music ")]),s("Player"),s("router-link",{staticClass:"btn btn-link",attrs:{to:"/music"}},[t._v(" okonomi ")])],1)])},K=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card my-2 mx-auto"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"text-center"},[n("p",[n("strong",[t._v(t._s(t.player.title)+" / "+t._s(t.player.artist))])])]),n("div",{staticClass:"text-center mt-2"},[n("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.prev}},[n("font-awesome-icon",{attrs:{icon:t.icon.prev}})],1),n("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.toggle}},[n("font-awesome-icon",{attrs:{icon:t.togglePlay}})],1),n("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.next}},[n("font-awesome-icon",{attrs:{icon:t.icon.next}})],1)]),n("div",{staticClass:"text-center mt-2"},[n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.random?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("random")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.random}})],1),n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.single?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("single")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.single}})],1),n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.repeat?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("repeat")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.repeat}})],1),n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.consume?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("consume")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.consume}})],1)]),n("div",{staticClass:"mt-2 mx-auto",staticStyle:{"max-width":"500px"}},[n("span",[t._v("volume: "+t._s(t.volume))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99"},domProps:{value:t.volume},on:{change:t.postMusicVolume,__r:function(e){t.volume=e.target.value}}})])])])},Q=[];function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W={data:function(){return{volume:0,icon:{play:v["c"],pause:v["b"],next:v["g"],prev:v["f"],random:v["d"],repeat:v["e"],single:v["h"],consume:v["a"]}}},components:{FontAwesomeIcon:m["a"]},computed:B({},Object(p["c"])("music",{player:function(t){return t.player},fetchTimer:function(t){return t.fetchTimer}}),{},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{togglePlay:function(){return this.player.isPlaying?this.icon.pause:this.icon.play}}),created:function(){this.getMusicStatus()},methods:{setMusicStatus:function(t){if(clearTimeout(this.fetchTimer),this.$store.commit("music/setPlayerState",t),this.volume=t.volume,t.isplaying){var e=t.total-t.duration,n=setTimeout(this.getMusicStatus,1e3*(e+2));console.log("setTimeout ",n),this.$store.commit("music/setFetchTimer",n)}},getMusicStatus:function(){f.a.get("".concat(this.apiUrl,"/status")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},toggle:function(){f.a.post("".concat(this.apiUrl,"/toggle")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},next:function(){f.a.post("".concat(this.apiUrl,"/next")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},prev:function(){f.a.post("".concat(this.apiUrl,"/prev")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},changeMode:function(t){f.a.post("".concat(this.apiUrl,"/mode"),{mode:t,state:!this.player[t]}).then(function(t){this.setMusicStatus(t.data)}.bind(this))},postMusicVolume:function(){f.a.post("".concat(this.apiUrl,"/volume"),{volume:this.volume}).then(function(t){this.setMusicStatus(t.data)}.bind(this))}}},X=W,Y=Object(O["a"])(X,H,Q,!1,null,null,null),tt=Y.exports,et={name:"Top",components:{Player:tt},props:{msg:String}},nt=et,st=(n("f8a1"),Object(O["a"])(nt,Z,K,!1,null,"2225b0ca",null)),at=st.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4 w-75"},[n("div",[n("Player"),n("Queuelist"),n("PlaylistSelectView")],1),n("div",[n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/music/list"}},[t._v("list")])],1),n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/music/playlists"}},[t._v("playlists")])],1),n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/music/search"}},[t._v("search")])],1)])])},rt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card my-2 mx-auto"},[n("div",{staticClass:"card-body mx-2"},[n("h5",{staticClass:"card-title"},[t._v("queue list")]),n("div",[n("button",{staticClass:"btn btn-light",on:{click:t.getMusicQueueList}},[t._v(" load ")]),n("button",{staticClass:"btn btn-light",on:{click:t.crop}},[t._v(" crop ")])]),n("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{height:"300px"}},t._l(t.queuelist,(function(e){return n("li",{key:e.title,staticClass:"list-group-item"},[n("div",{staticClass:"float-left"},[e.position===t.playpos?n("span",{staticClass:"spinner-border"},[n("span",{staticClass:"sr-only"},[t._v("Playing")])]):n("button",{staticClass:"btn btn-sm btn-info",on:{click:function(n){return t.playPosition(e.position)}}},[n("font-awesome-icon",{attrs:{icon:t.icon.play}})],1)]),n("div",{staticClass:"float-left h-100"},[n("span",{staticClass:"ml-2"},[t._v(t._s(e.position))]),n("span",{staticClass:"ml-2"},[t._v(t._s(e.title))])])])})),0)])])},ct=[];function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var pt={data:function(){return{icon:{play:v["c"]}}},components:{FontAwesomeIcon:m["a"]},computed:ut({},Object(p["b"])("queuelist",{queuelist:"getSortedList"}),{},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{},Object(p["c"])("music",{playpos:function(t){return t.player.playlistPosition}})),methods:{getMusicQueueList:function(){f.a.get("".concat(this.apiUrl,"/playlist/current")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},crop:function(){f.a.post("".concat(this.apiUrl,"/crop")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},playPosition:function(t){f.a.post("".concat(this.apiUrl,"/play/position"),{position:t}).then(function(t){this.$store.commit("music/setPlayerState",t.data),this.getMusicQueueList()}.bind(this))}}},dt=pt,ft=Object(O["a"])(dt,ot,ct,!1,null,null,null),vt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card my-2 mx-auto"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(" Playlist ")]),n("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{"max-height":"300px"}},t._l(t.playlists,(function(e){return n("li",{key:e,staticClass:"list-group-item"},[n("div",{staticClass:"float-left"},[n("button",{staticClass:"btn btn-sm btn-info",on:{click:function(n){return t.selectPlaylist(e)}}},[t._v(" load ")])]),n("div",{staticClass:"float-left"},[n("span",{staticClass:"ml-2"},[t._v(t._s(e))])])])})),0)])])},bt=[];function ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function yt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var gt={data:function(){return{playlists:[]}},mounted:function(){this.getPlaylists()},computed:yt({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{getPlaylists:function(){f.a.get("".concat(this.apiUrl,"/playlist/list")).then(function(t){this.playlists=t.data}.bind(this))},selectPlaylist:function(t){f.a.post("".concat(this.apiUrl,"/playlist/select"),{name:t}).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))}}},Ot=gt,_t=Object(O["a"])(Ot,mt,bt,!1,null,null,null),jt=_t.exports,Ct={components:{Player:tt,Queuelist:vt,PlaylistSelectView:jt}},wt=Ct,Pt=Object(O["a"])(wt,it,rt,!1,null,null,null),kt=Pt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4 w-75"},[n("pre",[t._v("    作成中\n    持ってる音源一覧が出ます\n    キュー追加、プレイリスト追加、タグ編集、検索など\n  ")]),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("ul",{staticStyle:{"overflow-x":"auto","white-space":"nowrap"}},t._l(t.entries,(function(t){return n("PlaylistItem",{key:t,attrs:{entries:t}})})),1)])])])},St=[],Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticStyle:{display:"inline-block"}},[n("div",{staticClass:"list-group",staticStyle:{"min-width":"300px"}},t._l(t.entries,(function(e,s){return n("button",{key:s,staticClass:"list-group-item list-group-item-action",class:{active:e.selected},attrs:{href:"#"}},[t._v(" "+t._s(s)+" ")])})),0)])},Ut=[],Dt={props:{entries:Object}},Mt=Dt,$t=Object(O["a"])(Mt,Et,Ut,!1,null,null,null),Tt=$t.exports,At={components:{PlaylistItem:Tt},data:function(){return{entries:[{"夏川椎菜":{selected:!0},"DIALOGUE+":{},"THE_IDOLM@STER":{}},{"ログライン":{selected:!0},Ep01:{}},{"パレイド":{},"ステテクレバー":{},"ナイモノバカリ":{},"イエローフラッグ":{},Gravity:{},"キミトグライド":{},"フワリ、コロリ、カラン、コロン":{},"Daisy Days":{},"チアミーチアユー":{},"シマエバイイ":{},"ラブリルブラ":{},"グレープフルーツムーン":{},"ファーストプロット":{}}]}}},zt=At,Lt=Object(O["a"])(zt,xt,St,!1,null,null,null),Nt=Lt.exports,Gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4 w-75"},[n("pre",[t._v("    作成中\n    プレイリスト一覧が出ます\n    並び替え、削除など\n    DAPに入れる音源リストも作ります\n  ")])])}],It={},Vt=It,qt=Object(O["a"])(Vt,Gt,Ft,!1,null,null,null),Jt=qt.exports,Zt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Kt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4 w-75"},[n("pre",[t._v("    作成中\n    音源検索画面が出ます\n    テキスト、タグ検索、結果にまとめてタグ付け、プレイリスト化など\n  ")])])}],Ht={},Qt=Ht,Rt=Object(O["a"])(Qt,Zt,Kt,!1,null,null,null),Bt=Rt.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4 w-75"},[n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("h6",{staticClass:"card-title"},[t._v("daifuku")]),n("button",{staticClass:"btn btn-light",on:{click:t.mochi_pull}},[t._v(" mochi pull ")]),n("button",{staticClass:"btn btn-light",on:{click:t.kashiwa_pull}},[t._v(" kashiwa pull ")])])]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("h6",{staticClass:"card-title"},[t._v("result")]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title"},[t._v("status")]),t._v(" "+t._s(t.result.exit_status)+" ")])]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title"},[t._v("stdout")]),t._v(" "+t._s(t.result.stdout)+" ")])]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title"},[t._v("stderr")]),t._v(" "+t._s(t.result.stderr)+" ")])])])])])},Xt=[],Yt={data:function(){return{apiUrl:"http://192.168.10.101:5000",result:{exit_status:"",stdout:"",stderr:""}}},methods:{set_result:function(t){this.result={exit_status:t.status,stdout:t.stdout,stderr:t.stderr}},mochi_pull:function(){f.a.post("".concat(this.apiUrl,"/daifuku/mochi/pull")).then(function(t){this.set_result(t.data)}.bind(this))},kashiwa_pull:function(){f.a.post("".concat(this.apiUrl,"/daifuku/kashiwa/pull")).then(function(t){this.set_result(t.data)}.bind(this))}}},te=Yt,ee=Object(O["a"])(te,Wt,Xt,!1,null,null,null),ne=ee.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2"},[n("Ziho"),n("Entries"),n("NewEntryForm")],1)},ae=[],ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card m-2"},[n("div",{staticClass:"card-body"},[n("ul",{staticClass:"nav nav-tabs"},t._l(t.groupList,(function(e){return n("li",{key:e,staticClass:"nav-item"},[n("button",{staticClass:"btn nav-link",class:[t.isSelectedGroup(e)?"active":""],on:{click:function(n){return t.selectGroup(e)}}},[t._v(" "+t._s(e)+" ")])])})),0),n("div",{staticClass:"tab-conntents"},[n("ul",{staticClass:"list-group list-group-flush m-2"},t._l(t.entries,(function(e){return n("li",{key:e.key,staticClass:"list-group-item"},[n("span",{staticClass:"badge badge-info"},[t._v(" "+t._s(e.key)+" ")]),n("span",[t._v(" "+t._s(e.value)+" ")])])})),0)])])])},re=[];n("d3b7"),n("ddb0");function oe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function ce(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?oe(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var le={data:function(){return{selectedGroup:"",groupList:[],entries:[]}},filters:{},computed:ce({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),created:function(){this.fetchGroups()},methods:{selectGroup:function(t){this.selectedGroup=t,this.getGroupEntries(t)},isSelectedGroup:function(t){return t===this.selectedGroup},fetchGroups:function(){f.a.get("".concat(this.apiUrl,"/okonomi/group/list")).then(function(t){this.groupList=t.data}.bind(this))},getGroupEntries:function(t){f.a.get("".concat(this.apiUrl,"/okonomi/group/get"),{params:{group:t}}).then(function(t){this.entries=t.data}.bind(this))}}},ue=le,pe=Object(O["a"])(ue,ie,re,!1,null,null,null),de=pe.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card m-2"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"formGroup"}},[t._v("group")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.group,expression:"group"}],staticClass:"form-text",attrs:{id:"formGroup",type:"text"},domProps:{value:t.group},on:{input:function(e){e.target.composing||(t.group=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"formKey"}},[t._v("key")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"form-text",attrs:{id:"formKey",type:"text"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"formValue"}},[t._v("value")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-text",attrs:{id:"formValue",type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),n("button",{staticClass:"btn",on:{click:t.regist}},[t._v(" regist ")])])])},ve=[];function me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function be(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?me(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var he={data:function(){return{group:"",key:"",value:""}},computed:be({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{regist:function(){f.a.post("".concat(this.apiUrl,"/okonomi/set"),{key:this.key,value:this.value,group:this.group}).then(function(){this.key="",this.value=""}.bind(this))}}},ye=he,ge=Object(O["a"])(ye,fe,ve,!1,null,null,null),Oe=ge.exports,_e={components:{Ziho:U,Entries:de,NewEntryForm:Oe}},je=_e,Ce=Object(O["a"])(je,se,ae,!1,null,null,null),we=Ce.exports,Pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"card mt-3"},[t._m(0),n("div",{staticClass:"card-body"},[n("div",[n("span",[t._v("CpS")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cps,expression:"cps"}],attrs:{type:"number",step:"1"},domProps:{value:t.cps},on:{input:function(e){e.target.composing||(t.cps=e.target.value)}}}),n("button",{on:{click:t.cpsSevenTimes}},[t._v(" x7 ")]),n("button",{on:{click:t.cpsSevenDivide}},[t._v(" x1/7 ")])]),n("div",[n("span",[t._v("Frenzy中")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.frenzied,expression:"frenzied"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.frenzied)?t._i(t.frenzied,null)>-1:t.frenzied},on:{change:function(e){var n=t.frenzied,s=e.target,a=!!s.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);s.checked?r<0&&(t.frenzied=n.concat([i])):r>-1&&(t.frenzied=n.slice(0,r).concat(n.slice(r+1)))}else t.frenzied=a}}})]),n("div",[t._m(1),n("div",[n("span",[t._v(" "+t._s(t._f("fix")(t.obj)))])])]),n("div",[t._m(2),n("div",[n("span",[t._v(t._s(t._f("fix")(t.canget)))])])])])]),n("div",{staticClass:"card mt-3"},[t._m(3),n("div",{staticClass:"card-body"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.savedata,expression:"savedata"}],staticStyle:{width:"100%"},attrs:{type:"textarea"},domProps:{value:t.savedata},on:{input:function(e){e.target.composing||(t.savedata=e.target.value)}}})]),n("div",[n("div",[t._v(" version: "+t._s(t.currentSavedata.version)+" ")]),n("div",[t._v(" 保存日: "+t._s(t._f("toJST")(t.currentSavedata.exportedAt))+" ")]),n("div",[t._v(" 最終転生: "+t._s(t._f("toJST")(t.currentSavedata.lastAscendedAt))+" ")]),n("div",[t._v(" 開始日: "+t._s(t._f("toJST")(t.currentSavedata.startedAt))+" ")])]),n("div",[n("button",{on:{click:t.uploadSavedata}},[t._v("upload")]),n("button",{on:{click:t.clearSavedataForm}},[t._v("clear")])]),n("div",{staticClass:"mt-2"},[t._v(" stored data ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.stored,expression:"stored"}],staticStyle:{width:"100%"},attrs:{type:"textarea",readonly:"",id:"stored-savedata"},domProps:{value:t.stored},on:{input:function(e){e.target.composing||(t.stored=e.target.value)}}}),n("div",[t._v(" 保存日: "+t._s(t._f("toJST")(t.storedSavedata.exportedAt))+" ")]),n("button",{on:{click:t.copyClipboardStoredSavedata}},[t._v("copy")]),n("button",{on:{click:t.fetchStoredSavedata}},[t._v("reload")])])])])},ke=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("span",[t._v("貯蔵計算")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("最低貯クッキー")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("最大FrenzyLucky")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("span",[t._v("セーブデータ")])])}],xe=(n("a9e3"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("53ca"));function Se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function Ee(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Se(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Ue={data:function(){return{cps:"",frenzied:!1,savedata:"",stored:""}},computed:Ee({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{canget:function(){var t=this.cps;return this.frenzied||(t*=7),900*t+13},obj:function(){var t=this.canget/15*100;return t},currentSavedata:function(){return this.parseSavedata(this.savedata)},storedSavedata:function(){return this.parseSavedata(this.stored)}}),mounted:function(){localStorage.cps&&(this.cps=localStorage.cps)},watch:{cps:function(t){localStorage.cps=t}},filters:{fix:function(t){return t.toLocaleString()},toJST:function(t){return"object"!==Object(xe["a"])(t)?"":t.toLocaleString({timeZone:"Asia/Tokyo"})}},methods:{cpsSevenTimes:function(){var t=this.cps;this.cps=De(7*t),this.frenzied=!0},cpsSevenDivide:function(){var t=this.cps;this.cps=De(t/7),this.frenzied=!1},parseSavedata:function(t){var e=decodeURIComponent(t),n=atob(e.replace("!END!","")),s=n.split(";");return{version:s[0].split("||")[0],lastAscendedAt:new Date(Number(s[0].split("||")[1])),startedAt:new Date(Number(s[1])),exportedAt:new Date(Number(s[2])),bakeryName:s[3]}},uploadSavedata:function(){"Invalid Date"!==this.currentSavedata.exportedAt.toString()&&f.a.post("".concat(this.apiUrl,"/okonomi/set"),{key:"COOKIE_SAVEDATA",value:this.savedata,group:"Cookie"}).then(function(t){this.stored=t.data.value,this.clearSavedataForm()}.bind(this))},clearSavedataForm:function(){this.savedata=""},fetchStoredSavedata:function(){f.a.get("".concat(this.apiUrl,"/okonomi/get"),{params:{key:"COOKIE_SAVEDATA"}}).then(function(t){this.stored=t.data[0].value}.bind(this))},copyClipboardStoredSavedata:function(){var t=document.getElementById("stored-savedata");t.select(),document.execCommand("copy")}}};function De(t){return Math.round(1e3*t)/1e3}var Me=Ue,$e=Object(O["a"])(Me,Pe,ke,!1,null,null,null),Te=$e.exports,Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container w-75"},[n("pre",[t._v("    作成中\n    デスクトップの背景にする画像を置いて、rsyncでまとめて持ってこれる場所\n    一覧をバーっと並べたい、のためにthumbnail生成したい\n    画像にタグ付けして整理したい\n  ")]),n("Uploader")],1)},ze=[],Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{action:t.path,method:"post",enctype:"multipart/form-data"}},[n("input",{attrs:{type:"file",name:"uploadFile"}}),n("input",{attrs:{type:"submit",value:"Upload"}})])])},Ne=[];function Ge(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function Fe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ge(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Ie={data:function(){return{actionPath:""}},computed:Fe({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{path:function(){return"".concat(this.apiUrl,"/tako/data/upload")}})},Ve=Ie,qe=Object(O["a"])(Ve,Le,Ne,!1,null,null,null),Je=qe.exports,Ze={components:{Uploader:Je}},Ke=Ze,He=Object(O["a"])(Ke,Ae,ze,!1,null,null,null),Qe=He.exports;s["a"].use(J["a"]);var Re=[{path:"/",component:at,props:{msg:"Welcome to Kashiwa"}},{path:"/music",component:kt},{path:"/music/list",component:Nt},{path:"/music/playlists",component:Jt},{path:"/music/search",component:Bt},{path:"/daifuku",component:ne},{path:"/okonomi",component:we},{path:"/cookie",component:Te},{path:"/tako",component:Qe}],Be=new J["a"]({mode:"history",base:"/kashiwa/dist/",routes:Re}),We=Be;s["a"].config.productionTip=!1,new s["a"]({router:We,store:G,el:"#app",render:function(t){return t(q)}})},a58a:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},f8a1:function(t,e,n){"use strict";var s=n("a58a"),a=n.n(s);a.a}});
//# sourceMappingURL=app.4c3495b0.js.map