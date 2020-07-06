(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/kashiwa/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"335e":function(t,e,n){"use strict";var a=n("a0fb"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pos-f-t"},[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[t._m(0),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Kashiwa")]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sidebartoggle"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col col-3"},[n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/music"}},[t._v("music")])],1),n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/daifuku"}},[t._v("daifuku")])],1),n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/okonomi"}},[t._v("okonomi")])],1),n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/cookie"}},[t._v("cookie")])],1),n("div",[n("router-link",{staticClass:"navbar-text",attrs:{to:"/tako"}},[t._v("tako")])],1)]),n("div",{staticClass:"col col-md-auto"},[n("Player")],1)])])],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebartoggle"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-light"},[n("div",{staticClass:"text-center"},[n("p",[n("strong",[t._v(t._s(t.player.title))])])]),n("div",{staticClass:"text-center mt-2"},[n("button",{staticClass:"btn btn-info mx-1",on:{click:t.prev}},[n("font-awesome-icon",{attrs:{icon:t.icon.prev}})],1),n("button",{staticClass:"btn btn-info mx-1",on:{click:t.toggle}},[n("font-awesome-icon",{attrs:{icon:t.togglePlay}})],1),n("button",{staticClass:"btn btn-info mx-1",on:{click:t.next}},[n("font-awesome-icon",{attrs:{icon:t.icon.next}})],1)]),n("div",{staticClass:"mt-2 mx-auto",staticStyle:{"max-width":"500px"}},[n("span",[t._v("volume: "+t._s(t.volume))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99"},domProps:{value:t.volume},on:{change:t.postMusicVolume,__r:function(e){t.volume=e.target.value}}})])])},l=[],u=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),p=n("2f62"),d=n("bc3a"),f=n.n(d),v=n("c074"),m=n("ad3d");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={data:function(){return{volume:0,icon:{play:v["c"],pause:v["b"],next:v["g"],prev:v["f"]}}},components:{FontAwesomeIcon:m["a"]},computed:h({},Object(p["c"])("music",{player:function(t){return t.player},fetchTimer:function(t){return t.fetchTimer}}),{},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{togglePlay:function(){return this.player.isPlaying?this.icon.pause:this.icon.play}}),created:function(){this.getMusicStatus()},methods:{setMusicStatus:function(t){if(clearTimeout(this.fetchTimer),this.$store.commit("music/setPlayerState",t),this.volume=t.volume,t.isplaying){var e=t.total-t.duration,n=setTimeout(this.getMusicStatus,1e3*(e+2));console.log("setTimeout ",n),this.$store.commit("music/setFetchTimer",n)}},getMusicStatus:function(){f.a.get("".concat(this.apiUrl,"/status")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},toggle:function(){f.a.post("".concat(this.apiUrl,"/toggle")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},next:function(){f.a.post("".concat(this.apiUrl,"/next")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},prev:function(){f.a.post("".concat(this.apiUrl,"/prev")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},postMusicVolume:function(){f.a.post("".concat(this.apiUrl,"/volume"),{volume:this.volume}).then(function(t){this.setMusicStatus(t.data)}.bind(this))}}},g=y,O=n("2877"),_=Object(O["a"])(g,c,l,!1,null,null,null),j=_.exports,P={components:{Player:j}},C=P,w=Object(O["a"])(C,r,o,!1,null,null,null),k=w.exports,S=(n("38cf"),{namespaced:!0,state:{apiUrl:"http://192.168.10.101:5000/api/v2"}}),x={namespaced:!0,state:{player:{title:"loading...",isSleepTimer:!1,total:0,duration:0,playlistPosition:0,volume:0,isPlaying:!1,random:!1,single:!1,repeat:!1,consume:!1},fetchTimer:0},mutations:{setPlayerState:function(t,e){t.player={title:e.title,artist:e.artist,isPlaying:e.isplaying,volume:e.volume,random:e.random,single:e.single,repeat:e.repeat,consume:e.consume,total:e.total,duration:e.duration,playlistPosition:e.playlist_position}},setFetchTimer:function(t,e){t.fetchTimer=e}}},U={namespaced:!0,state:{list:[]},mutations:{setList:function(t,e){t.list=e}},getters:{getSortedList:function(t){return t.list.sort((function(t,e){e.position,t.position}))}}};a["a"].use(p["a"]);var E=new p["a"].Store({modules:{constants:S,music:x,queuelist:U}}),D=E,M={name:"app",store:D,components:{Header:k}},T=M,$=Object(O["a"])(T,s,i,!1,null,null,null),A=$.exports,z=n("8c4f"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container w-75"},[a("div",{staticClass:"top"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("h1",[t._v(t._s(t.msg))])]),a("div",{staticClass:"mt-4"},[a("Player")],1)])},L=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card my-2 mx-auto"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"text-center"},[n("p",[n("strong",[t._v(t._s(t.player.title)+" / "+t._s(t.player.artist))])])]),n("div",{staticClass:"text-center mt-2"},[n("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.prev}},[n("font-awesome-icon",{attrs:{icon:t.icon.prev}})],1),n("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.toggle}},[n("font-awesome-icon",{attrs:{icon:t.togglePlay}})],1),n("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.next}},[n("font-awesome-icon",{attrs:{icon:t.icon.next}})],1)]),n("div",{staticClass:"text-center mt-2"},[n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.random?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("random")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.random}})],1),n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.single?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("single")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.single}})],1),n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.repeat?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("repeat")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.repeat}})],1),n("button",{staticClass:"btn btn-sm mx-1",class:[t.player.consume?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("consume")}}},[n("font-awesome-icon",{attrs:{icon:t.icon.consume}})],1)]),n("div",{staticClass:"mt-2 mx-auto",staticStyle:{"max-width":"500px"}},[n("span",[t._v("volume: "+t._s(t.volume))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99"},domProps:{value:t.volume},on:{change:t.postMusicVolume,__r:function(e){t.volume=e.target.value}}})])])])},G=[];function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var q={data:function(){return{volume:0,icon:{play:v["c"],pause:v["b"],next:v["g"],prev:v["f"],random:v["d"],repeat:v["e"],single:v["h"],consume:v["a"]}}},components:{FontAwesomeIcon:m["a"]},computed:V({},Object(p["c"])("music",{player:function(t){return t.player},fetchTimer:function(t){return t.fetchTimer}}),{},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{togglePlay:function(){return this.player.isPlaying?this.icon.pause:this.icon.play}}),created:function(){this.getMusicStatus()},methods:{setMusicStatus:function(t){if(clearTimeout(this.fetchTimer),this.$store.commit("music/setPlayerState",t),this.volume=t.volume,t.isplaying){var e=t.total-t.duration,n=setTimeout(this.getMusicStatus,1e3*(e+2));console.log("setTimeout ",n),this.$store.commit("music/setFetchTimer",n)}},getMusicStatus:function(){f.a.get("".concat(this.apiUrl,"/status")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},toggle:function(){f.a.post("".concat(this.apiUrl,"/toggle")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},next:function(){f.a.post("".concat(this.apiUrl,"/next")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},prev:function(){f.a.post("".concat(this.apiUrl,"/prev")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},changeMode:function(t){f.a.post("".concat(this.apiUrl,"/mode"),{mode:t,state:!this.player[t]}).then(function(t){this.setMusicStatus(t.data)}.bind(this))},postMusicVolume:function(){f.a.post("".concat(this.apiUrl,"/volume"),{volume:this.volume}).then(function(t){this.setMusicStatus(t.data)}.bind(this))}}},J=q,K=Object(O["a"])(J,F,G,!1,null,null,null),Q=K.exports,H={name:"Top",components:{Player:Q},props:{msg:String}},Z=H,B=(n("335e"),Object(O["a"])(Z,N,L,!1,null,"5f52efe5",null)),R=B.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4 w-75"},[n("Player"),n("Queuelist"),n("Playlist")],1)},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card my-2 mx-auto"},[n("div",{staticClass:"card-body mx-2"},[n("h5",{staticClass:"card-title"},[t._v("queue list")]),n("div",[n("button",{staticClass:"btn btn-light",on:{click:t.getMusicQueueList}},[t._v(" load ")]),n("button",{staticClass:"btn btn-light",on:{click:t.crop}},[t._v(" crop ")])]),n("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{height:"300px"}},t._l(t.queuelist,(function(e){return n("li",{key:e.title,staticClass:"list-group-item"},[n("div",{staticClass:"float-left"},[e.position===t.playpos?n("span",{staticClass:"spinner-border"},[n("span",{staticClass:"sr-only"},[t._v("Playing")])]):n("button",{staticClass:"btn btn-sm btn-info",on:{click:function(n){return t.playPosition(e.position)}}},[n("font-awesome-icon",{attrs:{icon:t.icon.play}})],1)]),n("div",{staticClass:"float-left h-100"},[n("span",{staticClass:"ml-2"},[t._v(t._s(e.position))]),n("span",{staticClass:"ml-2"},[t._v(t._s(e.title))])])])})),0)])])},tt=[];function et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?et(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var at={data:function(){return{icon:{play:v["c"]}}},components:{FontAwesomeIcon:m["a"]},computed:nt({},Object(p["b"])("queuelist",{queuelist:"getSortedList"}),{},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{},Object(p["c"])("music",{playpos:function(t){return t.player.playlistPosition}})),methods:{getMusicQueueList:function(){f.a.get("".concat(this.apiUrl,"/playlist/current")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},crop:function(){f.a.post("".concat(this.apiUrl,"/crop")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},playPosition:function(t){f.a.post("".concat(this.apiUrl,"/play/position"),{position:t}).then(function(t){this.$store.commit("music/setPlayerState",t.data),this.getMusicQueueList()}.bind(this))}}},st=at,it=Object(O["a"])(st,Y,tt,!1,null,null,null),rt=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card my-2 mx-auto"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(" Playlist ")]),n("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{"max-height":"300px"}},t._l(t.playlists,(function(e){return n("li",{key:e,staticClass:"list-group-item"},[n("div",{staticClass:"float-left"},[n("button",{staticClass:"btn btn-sm btn-info",on:{click:function(n){return t.selectPlaylist(e)}}},[t._v(" load ")])]),n("div",{staticClass:"float-left"},[n("span",{staticClass:"ml-2"},[t._v(t._s(e))])])])})),0)])])},ct=[];function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var pt={data:function(){return{playlists:[]}},mounted:function(){this.getPlaylists()},computed:ut({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{getPlaylists:function(){f.a.get("".concat(this.apiUrl,"/playlist/list")).then(function(t){this.playlists=t.data}.bind(this))},selectPlaylist:function(t){f.a.post("".concat(this.apiUrl,"/playlist/select"),{name:t}).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))}}},dt=pt,ft=Object(O["a"])(dt,ot,ct,!1,null,null,null),vt=ft.exports,mt={components:{Player:Q,Queuelist:rt,Playlist:vt}},bt=mt,ht=Object(O["a"])(bt,W,X,!1,null,null,null),yt=ht.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-4 w-75"},[n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("h6",{staticClass:"card-title"},[t._v("daifuku")]),n("button",{staticClass:"btn btn-light",on:{click:t.mochi_pull}},[t._v(" mochi pull ")]),n("button",{staticClass:"btn btn-light",on:{click:t.kashiwa_pull}},[t._v(" kashiwa pull ")])])]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("h6",{staticClass:"card-title"},[t._v("result")]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title"},[t._v("status")]),t._v(" "+t._s(t.result.exit_status)+" ")])]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title"},[t._v("stdout")]),t._v(" "+t._s(t.result.stdout)+" ")])]),n("div",{staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title"},[t._v("stderr")]),t._v(" "+t._s(t.result.stderr)+" ")])])])])])},Ot=[],_t={data:function(){return{apiUrl:"http://192.168.10.101:5000",result:{exit_status:"",stdout:"",stderr:""}}},methods:{set_result:function(t){this.result={exit_status:t.status,stdout:t.stdout,stderr:t.stderr}},mochi_pull:function(){f.a.post("".concat(this.apiUrl,"/daifuku/mochi/pull")).then(function(t){this.set_result(t.data)}.bind(this))},kashiwa_pull:function(){f.a.post("".concat(this.apiUrl,"/daifuku/kashiwa/pull")).then(function(t){this.set_result(t.data)}.bind(this))}}},jt=_t,Pt=Object(O["a"])(jt,gt,Ot,!1,null,null,null),Ct=Pt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2"},[n("button",{staticClass:"btn btn-light",on:{click:t.toggle_ziho}},[t._v(" toggle genkai ")]),t._v(" "+t._s(t.zihouStatus)+" "),n("Entries"),n("NewEntryForm")],1)},kt=[],St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card m-2"},[n("div",{staticClass:"card-body"},[n("ul",{staticClass:"nav nav-tabs"},t._l(t.groupList,(function(e){return n("li",{key:e,staticClass:"nav-item"},[n("button",{staticClass:"btn nav-link",class:[t.isSelectedGroup(e)?"active":""],on:{click:function(n){return t.selectGroup(e)}}},[t._v(" "+t._s(e)+" ")])])})),0),n("div",{staticClass:"tab-conntents"},[n("ul",{staticClass:"list-group list-group-flush m-2"},t._l(t.entries,(function(e){return n("li",{key:e.key,staticClass:"list-group-item"},[n("span",{staticClass:"badge badge-info"},[t._v(" "+t._s(e.key)+" ")]),n("span",[t._v(" "+t._s(e.value)+" ")])])})),0)])])])},xt=[];n("d3b7"),n("ddb0");function Ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ut(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ut(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Dt={data:function(){return{selectedGroup:"",groupList:[],entries:[]}},filters:{},computed:Et({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),created:function(){this.fetchGroups()},methods:{selectGroup:function(t){this.selectedGroup=t,this.getGroupEntries(t)},isSelectedGroup:function(t){return t===this.selectedGroup},fetchGroups:function(){f.a.get("".concat(this.apiUrl,"/okonomi/group/list")).then(function(t){this.groupList=t.data}.bind(this))},getGroupEntries:function(t){f.a.get("".concat(this.apiUrl,"/okonomi/group/get"),{params:{group:t}}).then(function(t){this.entries=t.data}.bind(this))}}},Mt=Dt,Tt=Object(O["a"])(Mt,St,xt,!1,null,null,null),$t=Tt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card m-2"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"formGroup"}},[t._v("group")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.group,expression:"group"}],staticClass:"form-text",attrs:{id:"formGroup",type:"text"},domProps:{value:t.group},on:{input:function(e){e.target.composing||(t.group=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"formKey"}},[t._v("key")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"form-text",attrs:{id:"formKey",type:"text"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"formValue"}},[t._v("value")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-text",attrs:{id:"formValue",type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),n("button",{staticClass:"btn",on:{click:t.regist}},[t._v(" regist ")])])])},zt=[];function Nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Nt(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Ft={data:function(){return{group:"",key:"",value:""}},computed:Lt({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{regist:function(){f.a.post("".concat(this.apiUrl,"/okonomi/set"),{key:this.key,value:this.value,group:this.group}).then(function(){this.key="",this.value=""}.bind(this))}}},Gt=Ft,It=Object(O["a"])(Gt,At,zt,!1,null,null,null),Vt=It.exports;function qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?qt(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Kt={components:{Entries:$t,NewEntryForm:Vt},data:function(){return{response:{}}},computed:Jt({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{zihouStatus:function(){return 0==this.response.value?"有効":"無効"}}),created:function(){this.get_ziho()},methods:{toggle_ziho:function(){f.a.post("".concat(this.apiUrl,"/okonomi/toggle"),{key:"ZIHOU"}).then(function(t){this.response=t.data}.bind(this))},get_ziho:function(){f.a.get("".concat(this.apiUrl,"/okonomi/get"),{params:{key:"ZIHOU"}}).then(function(t){this.response=t.data[0]}.bind(this))}}},Qt=Kt,Ht=Object(O["a"])(Qt,wt,kt,!1,null,null,null),Zt=Ht.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"card mt-3"},[t._m(0),n("div",{staticClass:"card-body"},[n("div",[n("span",[t._v("CpS")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cps,expression:"cps"}],attrs:{type:"number",step:"1"},domProps:{value:t.cps},on:{input:function(e){e.target.composing||(t.cps=e.target.value)}}}),n("button",{on:{click:t.cpsSevenTimes}},[t._v(" x7 ")]),n("button",{on:{click:t.cpsSevenDivide}},[t._v(" x1/7 ")])]),n("div",[n("span",[t._v("Frenzy中")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.frenzied,expression:"frenzied"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.frenzied)?t._i(t.frenzied,null)>-1:t.frenzied},on:{change:function(e){var n=t.frenzied,a=e.target,s=!!a.checked;if(Array.isArray(n)){var i=null,r=t._i(n,i);a.checked?r<0&&(t.frenzied=n.concat([i])):r>-1&&(t.frenzied=n.slice(0,r).concat(n.slice(r+1)))}else t.frenzied=s}}})]),n("div",[t._m(1),n("div",[n("span",[t._v(" "+t._s(t._f("fix")(t.obj)))])])]),n("div",[t._m(2),n("div",[n("span",[t._v(t._s(t._f("fix")(t.canget)))])])])])]),n("div",{staticClass:"card mt-3"},[t._m(3),n("div",{staticClass:"card-body"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.savedata,expression:"savedata"}],staticStyle:{width:"100%"},attrs:{type:"textarea"},domProps:{value:t.savedata},on:{input:function(e){e.target.composing||(t.savedata=e.target.value)}}})]),n("div",[n("div",[t._v(" version: "+t._s(t.currentSavedata.version)+" ")]),n("div",[t._v(" 保存日: "+t._s(t._f("toJST")(t.currentSavedata.exportedAt))+" ")]),n("div",[t._v(" 最終転生: "+t._s(t._f("toJST")(t.currentSavedata.lastAscendedAt))+" ")]),n("div",[t._v(" 開始日: "+t._s(t._f("toJST")(t.currentSavedata.startedAt))+" ")])]),n("div",[n("button",{on:{click:t.uploadSavedata}},[t._v("upload")]),n("button",{on:{click:t.clearSavedataForm}},[t._v("clear")])]),n("div",{staticClass:"mt-2"},[t._v(" stored data ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.stored,expression:"stored"}],staticStyle:{width:"100%"},attrs:{type:"textarea",readonly:"",id:"stored-savedata"},domProps:{value:t.stored},on:{input:function(e){e.target.composing||(t.stored=e.target.value)}}}),n("div",[t._v(" 保存日: "+t._s(t._f("toJST")(t.storedSavedata.exportedAt))+" ")]),n("button",{on:{click:t.copyClipboardStoredSavedata}},[t._v("copy")]),n("button",{on:{click:t.fetchStoredSavedata}},[t._v("reload")])])])])},Rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("span",[t._v("貯蔵計算")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("最低貯クッキー")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("最大FrenzyLucky")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("span",[t._v("セーブデータ")])])}],Wt=(n("a9e3"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("53ca"));function Xt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Yt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Xt(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var te={data:function(){return{cps:"",frenzied:!1,savedata:"",stored:""}},computed:Yt({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{canget:function(){var t=this.cps;return this.frenzied||(t*=7),900*t+13},obj:function(){var t=this.canget/15*100;return t},currentSavedata:function(){return this.parseSavedata(this.savedata)},storedSavedata:function(){return this.parseSavedata(this.stored)}}),mounted:function(){localStorage.cps&&(this.cps=localStorage.cps)},watch:{cps:function(t){localStorage.cps=t}},filters:{fix:function(t){return t.toLocaleString()},toJST:function(t){return"object"!==Object(Wt["a"])(t)?"":t.toLocaleString({timeZone:"Asia/Tokyo"})}},methods:{cpsSevenTimes:function(){var t=this.cps;this.cps=ee(7*t),this.frenzied=!0},cpsSevenDivide:function(){var t=this.cps;this.cps=ee(t/7),this.frenzied=!1},parseSavedata:function(t){var e=decodeURIComponent(t),n=atob(e.replace("!END!","")),a=n.split(";");return{version:a[0].split("||")[0],lastAscendedAt:new Date(Number(a[0].split("||")[1])),startedAt:new Date(Number(a[1])),exportedAt:new Date(Number(a[2])),bakeryName:a[3]}},uploadSavedata:function(){"Invalid Date"!==this.currentSavedata.exportedAt.toString()&&f.a.post("".concat(this.apiUrl,"/okonomi/set"),{key:"COOKIE_SAVEDATA",value:this.savedata,group:"Cookie"}).then(function(t){this.stored=t.data.value,this.clearSavedataForm()}.bind(this))},clearSavedataForm:function(){this.savedata=""},fetchStoredSavedata:function(){f.a.get("".concat(this.apiUrl,"/okonomi/get"),{params:{key:"COOKIE_SAVEDATA"}}).then(function(t){this.stored=t.data[0].value}.bind(this))},copyClipboardStoredSavedata:function(){var t=document.getElementById("stored-savedata");t.select(),document.execCommand("copy")}}};function ee(t){return Math.round(1e3*t)/1e3}var ne=te,ae=Object(O["a"])(ne,Bt,Rt,!1,null,null,null),se=ae.exports,ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container w-75"},[n("Uploader")],1)},re=[],oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:t.path,method:"post",enctype:"multipart/form-data"}},[n("input",{attrs:{type:"file",name:"uploadFile"}}),n("input",{attrs:{type:"submit",value:"Upload"}})])},ce=[];function le(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ue(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?le(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var pe={data:function(){return{actionPath:""}},computed:ue({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}}),{path:function(){return"".concat(this.apiUrl,"/tako/data/upload")}})},de=pe,fe=Object(O["a"])(de,oe,ce,!1,null,null,null),ve=fe.exports,me={components:{Uploader:ve}},be=me,he=Object(O["a"])(be,ie,re,!1,null,null,null),ye=he.exports;a["a"].use(z["a"]);var ge=[{path:"/",component:R,props:{msg:"Welcome to Kashiwa"}},{path:"/music",component:yt},{path:"/daifuku",component:Ct},{path:"/okonomi",component:Zt},{path:"/cookie",component:se},{path:"/tako",component:ye}],Oe=new z["a"]({base:"/kashiwa/dist/",routes:ge}),_e=Oe;a["a"].config.productionTip=!1,new a["a"]({router:_e,store:D,el:"#app",render:function(t){return t(A)}})},a0fb:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e5a8e160.js.map