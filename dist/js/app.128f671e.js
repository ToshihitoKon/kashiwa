(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/kashiwa/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e623"),s("e379"),s("5dc8"),s("37e1");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("Header"),s("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pos-f-t"},[a("nav",{staticClass:"navbar navbar-dark bg-dark"},[t._m(0),a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{staticStyle:{"max-height":"1em"},attrs:{alt:"Vue logo",src:s("cf05")}}),t._v(" Kashiwa ")]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sidebartoggle"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-3"},[a("div",[a("router-link",{staticClass:"navbar-text",attrs:{to:"/music"}},[t._v("music")])],1),a("div",[a("router-link",{staticClass:"navbar-text",attrs:{to:"/daifuku"}},[t._v("daifuku")])],1),a("div",[a("router-link",{staticClass:"navbar-text",attrs:{to:"/okonomi"}},[t._v("okonomi")])],1),a("div",[a("router-link",{staticClass:"navbar-text",attrs:{to:"/cookie"}},[t._v("cookie")])],1),a("div",[a("router-link",{staticClass:"navbar-text",attrs:{to:"/tako"}},[t._v("tako")])],1)]),a("div",{staticClass:"col col-md-auto mx-auto"},[a("Player"),a("Ziho")],1),a("div",{staticClass:"col col-3"})])])],1)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebartoggle"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-light"},[s("div",{staticClass:"text-center"},[s("p",[s("strong",[t._v(t._s(t.player.title))])])]),s("div",{staticClass:"text-center mt-2"},[s("button",{staticClass:"btn btn-info mx-1",on:{click:t.prev}},[s("font-awesome-icon",{attrs:{icon:t.icon.prev}})],1),s("button",{staticClass:"btn btn-info mx-1",on:{click:t.toggle}},[s("font-awesome-icon",{attrs:{icon:t.togglePlay}})],1),s("button",{staticClass:"btn btn-info mx-1",on:{click:t.next}},[s("font-awesome-icon",{attrs:{icon:t.icon.next}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.sleeptimer?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"}},[s("font-awesome-icon",{attrs:{icon:t.icon.sleep}})],1)]),s("div",{staticClass:"mt-2 mx-auto",staticStyle:{"max-width":"500px"}},[s("span",[t._v("volume: "+t._s(t.volume))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99"},domProps:{value:t.volume},on:{change:t.postMusicVolume,__r:function(e){t.volume=e.target.value}}})])])},l=[],u=s("5530"),p=s("2f62"),d=s("bc3a"),m=s.n(d),f=s("c074"),v=s("ad3d"),h={data:function(){return{volume:0,icon:{play:f["d"],pause:f["c"],next:f["h"],prev:f["g"],sleep:f["a"]}}},components:{FontAwesomeIcon:v["a"]},computed:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(p["c"])("music",{player:function(t){return t.player},fetchTimer:function(t){return t.fetchTimer}})),Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),{},{togglePlay:function(){return this.player.isPlaying?this.icon.pause:this.icon.play}}),created:function(){this.getMusicStatus()},methods:{setMusicStatus:function(t){if(clearTimeout(this.fetchTimer),this.$store.commit("music/setPlayerState",t),this.volume=t.volume,t.isplaying){var e=t.total-t.duration,s=setTimeout(this.getMusicStatus,1e3*(e+2));console.log("setTimeout ",s),this.$store.commit("music/setFetchTimer",s)}},getMusicStatus:function(){m.a.get("".concat(this.apiUrl,"/status")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},toggle:function(){m.a.post("".concat(this.apiUrl,"/toggle")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},next:function(){m.a.post("".concat(this.apiUrl,"/next")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},prev:function(){m.a.post("".concat(this.apiUrl,"/prev")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},postMusicVolume:function(){m.a.post("".concat(this.apiUrl,"/volume"),{volume:this.volume}).then(function(t){this.setMusicStatus(t.data)}.bind(this))}}},b=h,g=s("2877"),_=Object(g["a"])(b,r,l,!1,null,null,null),y=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("button",{staticClass:"btn btn-light",on:{click:t.toggle_ziho}},[t._v(" 限界時報 ")]),s("span",{staticClass:"badge",class:[1==t.response.value?"badge-dark":"badge-danger"]},[t._v(" "+t._s(t.zihoStatus)+" ")])])},x=[],k={data:function(){return{response:{}}},computed:Object(u["a"])(Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),{},{zihoStatus:function(){return 0==this.response.value?"有効":"無効"}}),created:function(){this.get_ziho()},methods:{toggle_ziho:function(){m.a.post("".concat(this.apiUrl,"/okonomi/toggle"),{key:"ZIHOU"}).then(function(t){this.response=t.data}.bind(this))},get_ziho:function(){m.a.get("".concat(this.apiUrl,"/okonomi/get"),{params:{key:"ZIHOU"}}).then(function(t){this.response=t.data[0]}.bind(this))}}},S=k,O=Object(g["a"])(S,C,x,!1,null,null,null),j=O.exports,w={components:{Player:y,Ziho:j}},U=w,P=Object(g["a"])(U,o,c,!1,null,null,null),E=P.exports,M=(s("99af"),s("4de4"),s("45fc"),s("b64b"),s("07ac"),s("38cf"),{namespaced:!0,state:{apiUrl:"http://192.168.10.101:5000/api/v2"}}),$={namespaced:!0,state:{player:{title:"loading...",isSleepTimer:!1,total:0,duration:0,playlistPosition:0,volume:0,isPlaying:!1,random:!1,single:!1,repeat:!1,consume:!1,sleeptimer:!1},fetchTimer:0},mutations:{setPlayerState:function(t,e){t.player={title:e.title,artist:e.artist,isPlaying:e.isplaying,volume:e.volume,random:e.random,single:e.single,repeat:e.repeat,consume:e.consume,total:e.total,duration:e.duration,playlistPosition:e.playlist_position,sleeptimer:e.sleeptimer}},setFetchTimer:function(t,e){t.fetchTimer=e}}},T={namespaced:!0,state:{list:[]},mutations:{setList:function(t,e){t.list=e}},getters:{getSortedList:function(t){return t.list.sort((function(t,e){e.position,t.position}))}}},A={namespaced:!0,state:{data:{loading:{}},path:[]},mutations:{setData:function(t,e){t.data=e},setPath:function(t,e){t.path=e}},getters:{getCurrentList:function(t){var e=t.data,s=[Object.keys(e)];return t.path.some((function(t){var a=[];if(!(t in e))return!0;a=a.concat(Object.keys(e[t]).filter((function(t){return"_files"!=t}))),e=e[t],"_files"in e&&(a=a.concat(Object.values(e["_files"]))),s.push(a)})),s}}};a["a"].use(p["a"]);var z=new p["a"].Store({modules:{constants:M,music:$,queuelist:T,musiclist:A}}),L=z,N={name:"app",store:L,components:{Header:E}},F=N,I=Object(g["a"])(F,n,i,!1,null,null,null),G=I.exports,D=s("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container w-75"},[a("div",{staticClass:"top"},[a("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),a("h1",[t._v(t._s(t.msg))])]),a("div",{staticClass:"mt-4 text-right"},[a("Player"),a("router-link",{staticClass:"btn btn-link",attrs:{to:"/music"}},[t._v(" music ")]),a("div",{staticClass:"mt-2 text-center"},[a("Ziho")],1),a("router-link",{staticClass:"btn btn-link",attrs:{to:"/music"}},[t._v(" okonomi ")])],1)])},Z=[],q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-2 mx-auto"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"text-center"},[s("p",[s("strong",[t._v(t._s(t.player.title)+" / "+t._s(t.player.artist))])])]),s("div",{staticClass:"text-center mt-2"},[s("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.prev}},[s("font-awesome-icon",{attrs:{icon:t.icon.prev}})],1),s("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.toggle}},[s("font-awesome-icon",{attrs:{icon:t.togglePlay}})],1),s("button",{staticClass:"btn btn-info mx-1",attrs:{unselectable:"on"},on:{click:t.next}},[s("font-awesome-icon",{attrs:{icon:t.icon.next}})],1)]),s("div",{staticClass:"text-center mt-2"},[s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.random?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("random")}}},[s("font-awesome-icon",{attrs:{icon:t.icon.random}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.single?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("single")}}},[s("font-awesome-icon",{attrs:{icon:t.icon.single}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.repeat?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("repeat")}}},[s("font-awesome-icon",{attrs:{icon:t.icon.repeat}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.consume?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:function(e){return t.changeMode("consume")}}},[s("font-awesome-icon",{attrs:{icon:t.icon.consume}})],1),s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.sleeptimer?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:t.sleeptimer}},[s("font-awesome-icon",{attrs:{icon:t.icon.sleep}})],1),t.player.sleeptimer?s("button",{staticClass:"btn btn-sm mx-1",class:[t.player.sleeptimer?"btn-info":"btn-outline-info"],attrs:{unselectable:"on"},on:{click:t.sleeptimercancel}},[s("font-awesome-icon",{attrs:{icon:t.icon.sleepcancel}})],1):t._e()]),s("div",{staticClass:"mt-2 mx-auto",staticStyle:{"max-width":"500px"}},[s("span",[t._v("volume: "+t._s(t.volume))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"99"},domProps:{value:t.volume},on:{change:t.postMusicVolume,__r:function(e){t.volume=e.target.value}}})])])])},J=[],K={data:function(){return{volume:0,icon:{play:f["d"],pause:f["c"],next:f["h"],prev:f["g"],random:f["e"],repeat:f["f"],single:f["i"],consume:f["b"],sleep:f["a"],sleepcancel:f["j"]}}},components:{FontAwesomeIcon:v["a"]},computed:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(p["c"])("music",{player:function(t){return t.player},fetchTimer:function(t){return t.fetchTimer}})),Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),{},{togglePlay:function(){return this.player.isPlaying?this.icon.pause:this.icon.play}}),created:function(){this.getMusicStatus()},methods:{setMusicStatus:function(t){if(clearTimeout(this.fetchTimer),this.$store.commit("music/setPlayerState",t),this.volume=t.volume,t.isplaying){var e=t.total-t.duration,s=setTimeout(this.getMusicStatus,1e3*(e+2));console.log("setTimeout ",s),this.$store.commit("music/setFetchTimer",s)}},getMusicStatus:function(){m.a.get("".concat(this.apiUrl,"/status")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},toggle:function(){m.a.post("".concat(this.apiUrl,"/toggle")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},next:function(){m.a.post("".concat(this.apiUrl,"/next")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},prev:function(){m.a.post("".concat(this.apiUrl,"/prev")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},changeMode:function(t){m.a.post("".concat(this.apiUrl,"/mode"),{mode:t,state:!this.player[t]}).then(function(t){this.setMusicStatus(t.data)}.bind(this))},postMusicVolume:function(){m.a.post("".concat(this.apiUrl,"/volume"),{volume:this.volume}).then(function(t){this.setMusicStatus(t.data)}.bind(this))},sleeptimer:function(){m.a.post("".concat(this.apiUrl,"/sleeptimer/reset")).then(function(t){this.setMusicStatus(t.data)}.bind(this))},sleeptimercancel:function(){m.a.post("".concat(this.apiUrl,"/sleeptimer/cancel")).then(function(t){this.setMusicStatus(t.data)}.bind(this))}}},Q=K,H=Object(g["a"])(Q,q,J,!1,null,null,null),B=H.exports,R={name:"Top",components:{Ziho:j,Player:B},props:{msg:String}},W=R,X=(s("c33f"),Object(g["a"])(W,V,Z,!1,null,"4fdb4363",null)),Y=X.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 w-75"},[s("div",[s("Player"),s("Queuelist"),s("PlaylistSelectView")],1),s("div",[s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/music/list"}},[t._v("list")])],1),s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/music/playlists"}},[t._v("playlists")])],1),s("div",[s("router-link",{staticClass:"navbar-text",attrs:{to:"/music/search"}},[t._v("search")])],1)])])},et=[],st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-2 mx-auto"},[s("div",{staticClass:"card-body mx-2"},[s("h5",{staticClass:"card-title"},[t._v("queue list")]),s("div",[s("button",{staticClass:"btn btn-light",on:{click:t.getMusicQueueList}},[t._v(" load ")]),s("button",{staticClass:"btn btn-light",on:{click:t.crop}},[t._v(" crop ")])]),s("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{height:"300px"}},t._l(t.queuelist,(function(e){return s("li",{key:e.position+e.title,staticClass:"list-group-item"},[s("div",{staticClass:"float-left"},[e.position===t.playpos?s("span",{staticClass:"spinner-border"},[s("span",{staticClass:"sr-only"},[t._v("Playing")])]):s("button",{staticClass:"btn btn-sm btn-info",on:{click:function(s){return t.playPosition(e.position)}}},[s("font-awesome-icon",{attrs:{icon:t.icon.play}})],1)]),s("div",{staticClass:"float-left h-100"},[s("span",{staticClass:"ml-2"},[t._v(t._s(e.position))]),s("span",{staticClass:"ml-2"},[t._v(t._s(e.title))])])])})),0)])])},at=[],nt={data:function(){return{icon:{play:f["d"]}}},components:{FontAwesomeIcon:v["a"]},computed:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(p["b"])("queuelist",{queuelist:"getSortedList"})),Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),Object(p["c"])("music",{playpos:function(t){return t.player.playlistPosition}})),methods:{getMusicQueueList:function(){m.a.get("".concat(this.apiUrl,"/playlist/current")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},crop:function(){m.a.post("".concat(this.apiUrl,"/crop")).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))},playPosition:function(t){m.a.post("".concat(this.apiUrl,"/play/position"),{position:t}).then(function(t){this.$store.commit("music/setPlayerState",t.data),this.getMusicQueueList()}.bind(this))}}},it=nt,ot=Object(g["a"])(it,st,at,!1,null,null,null),ct=ot.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-2 mx-auto"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" Playlist ")]),s("ul",{staticClass:"list-group list-group-flush overflow-auto",staticStyle:{"max-height":"300px"}},t._l(t.playlists,(function(e){return s("li",{key:e,staticClass:"list-group-item"},[s("div",{staticClass:"float-left"},[s("button",{staticClass:"btn btn-sm btn-info",on:{click:function(s){return t.selectPlaylist(e)}}},[t._v(" load ")])]),s("div",{staticClass:"float-left"},[s("span",{staticClass:"ml-2"},[t._v(t._s(e))])])])})),0)])])},lt=[],ut={data:function(){return{playlists:[]}},mounted:function(){this.getPlaylists()},computed:Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{getPlaylists:function(){m.a.get("".concat(this.apiUrl,"/playlist/list")).then(function(t){this.playlists=t.data}.bind(this))},selectPlaylist:function(t){m.a.post("".concat(this.apiUrl,"/playlist/select"),{name:t}).then(function(t){this.$store.commit("queuelist/setList",t.data)}.bind(this))}}},pt=ut,dt=Object(g["a"])(pt,rt,lt,!1,null,null,null),mt=dt.exports,ft={components:{Player:B,Queuelist:ct,PlaylistSelectView:mt}},vt=ft,ht=Object(g["a"])(vt,tt,et,!1,null,null,null),bt=ht.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 w-75"},[s("pre",[t._v("    作成中\n    持ってる音源一覧が出ます\n    キュー追加、プレイリスト追加、タグ編集、検索など\n  ")]),s("div",{staticClass:"btn btn-light",on:{click:t.fetchAll}},[t._v(" 押せ！ ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("ul",{staticStyle:{"overflow-x":"auto","white-space":"nowrap"}},t._l(t.list,(function(t,e){return s("PlaylistItem",{key:e+t,attrs:{entries:t,index:e}})})),1)])])])},_t=[],yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticStyle:{display:"inline-block"}},[s("div",{staticClass:"list-group",staticStyle:{"min-width":"180px"}},t._l(t.entries,(function(e,a){return s("button",{key:t.index+a+e,staticClass:"list-group-item list-group-item-action",class:{active:t.isSelectedItem(e)},attrs:{href:"#"},on:{click:function(s){return t.selectItem(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])},Ct=[],xt=(s("fb6a"),s("a9e3"),{props:{entries:Array,index:Number},computed:Object(u["a"])({},Object(p["c"])("musiclist",{data:function(t){return t.data},path:function(t){return t.path}})),methods:{selectItem:function(t){var e=this.path.slice(0,this.index);e.push(t),this.$store.commit("musiclist/setPath",e)},isSelectedItem:function(t){return this.path[this.index]==t}}}),kt=xt,St=Object(g["a"])(kt,yt,Ct,!1,null,null,null),Ot=St.exports,jt={components:{PlaylistItem:Ot},mounted:function(){this.fetchAll()},computed:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),Object(p["c"])("musiclist",{data:function(t){return t.data},path:function(t){return t.path}})),Object(p["b"])("musiclist",{list:"getCurrentList"})),methods:{fetchAll:function(){m.a.get("".concat(this.apiUrl,"/search/fetchall")).then(function(t){this.$store.commit("musiclist/setData",t.data)}.bind(this))}}},wt=jt,Ut=Object(g["a"])(wt,gt,_t,!1,null,null,null),Pt=Ut.exports,Et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 w-75"},[s("pre",[t._v("    作成中\n    プレイリスト一覧が出ます\n    並び替え、削除など\n    DAPに入れる音源リストも作ります\n  ")])])}],$t={},Tt=$t,At=Object(g["a"])(Tt,Et,Mt,!1,null,null,null),zt=At.exports,Lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 w-75"},[s("pre",[t._v("    作成中\n    音源検索画面が出ます\n    テキスト、タグ検索、結果にまとめてタグ付け、プレイリスト化など\n  ")])])}],Ft={},It=Ft,Gt=Object(g["a"])(It,Lt,Nt,!1,null,null,null),Dt=Gt.exports,Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4 w-75"},[s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("daifuku")]),s("button",{staticClass:"btn btn-light",on:{click:t.mochi_pull}},[t._v(" mochi pull ")]),s("button",{staticClass:"btn btn-light",on:{click:t.kashiwa_pull}},[t._v(" kashiwa pull ")])])]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("result")]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-title"},[t._v("status")]),t._v(" "+t._s(t.result.exit_status)+" ")])]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-title"},[t._v("stdout")]),t._v(" "+t._s(t.result.stdout)+" ")])]),s("div",{staticClass:"card my-2"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-title"},[t._v("stderr")]),t._v(" "+t._s(t.result.stderr)+" ")])])])])])},Zt=[],qt={data:function(){return{apiUrl:"http://192.168.10.101:5000",result:{exit_status:"",stdout:"",stderr:""}}},methods:{set_result:function(t){this.result={exit_status:t.status,stdout:t.stdout,stderr:t.stderr}},mochi_pull:function(){m.a.post("".concat(this.apiUrl,"/daifuku/mochi/pull")).then(function(t){this.set_result(t.data)}.bind(this))},kashiwa_pull:function(){m.a.post("".concat(this.apiUrl,"/daifuku/kashiwa/pull")).then(function(t){this.set_result(t.data)}.bind(this))}}},Jt=qt,Kt=Object(g["a"])(Jt,Vt,Zt,!1,null,null,null),Qt=Kt.exports,Ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-2"},[s("Ziho"),s("Entries"),s("NewEntryForm")],1)},Bt=[],Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card m-2"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"nav nav-tabs"},t._l(t.groupList,(function(e){return s("li",{key:e,staticClass:"nav-item"},[s("button",{staticClass:"btn nav-link",class:[t.isSelectedGroup(e)?"active":""],on:{click:function(s){return t.selectGroup(e)}}},[t._v(" "+t._s(e)+" ")])])})),0),s("div",{staticClass:"tab-conntents"},[s("ul",{staticClass:"list-group list-group-flush m-2"},t._l(t.entries,(function(e){return s("li",{key:e.key,staticClass:"list-group-item"},[s("span",{staticClass:"badge badge-info"},[t._v(" "+t._s(e.key)+" ")]),s("span",[t._v(" "+t._s(e.value)+" ")])])})),0)])])])},Wt=[],Xt=(s("d3b7"),s("ddb0"),{data:function(){return{selectedGroup:"",groupList:[],entries:[]}},filters:{},computed:Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),created:function(){this.fetchGroups()},methods:{selectGroup:function(t){this.selectedGroup=t,this.getGroupEntries(t)},isSelectedGroup:function(t){return t===this.selectedGroup},fetchGroups:function(){m.a.get("".concat(this.apiUrl,"/okonomi/group/list")).then(function(t){this.groupList=t.data}.bind(this))},getGroupEntries:function(t){m.a.get("".concat(this.apiUrl,"/okonomi/group/get"),{params:{group:t}}).then(function(t){this.entries=t.data}.bind(this))}}}),Yt=Xt,te=Object(g["a"])(Yt,Rt,Wt,!1,null,null,null),ee=te.exports,se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card m-2"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formGroup"}},[t._v("group")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.group,expression:"group"}],staticClass:"form-text",attrs:{id:"formGroup",type:"text"},domProps:{value:t.group},on:{input:function(e){e.target.composing||(t.group=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formKey"}},[t._v("key")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"form-text",attrs:{id:"formKey",type:"text"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"formValue"}},[t._v("value")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-text",attrs:{id:"formValue",type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),s("button",{staticClass:"btn",on:{click:t.regist}},[t._v(" regist ")])])])},ae=[],ne={data:function(){return{group:"",key:"",value:""}},computed:Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),methods:{regist:function(){m.a.post("".concat(this.apiUrl,"/okonomi/set"),{key:this.key,value:this.value,group:this.group}).then(function(){this.key="",this.value=""}.bind(this))}}},ie=ne,oe=Object(g["a"])(ie,se,ae,!1,null,null,null),ce=oe.exports,re={components:{Ziho:j,Entries:ee,NewEntryForm:ce}},le=re,ue=Object(g["a"])(le,Ht,Bt,!1,null,null,null),pe=ue.exports,de=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"card mt-3"},[t._m(0),s("div",{staticClass:"card-body"},[s("div",[s("span",[t._v("CpS")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.cps,expression:"cps"}],attrs:{type:"number",step:"1"},domProps:{value:t.cps},on:{input:function(e){e.target.composing||(t.cps=e.target.value)}}}),s("button",{on:{click:t.cpsSevenTimes}},[t._v(" x7 ")]),s("button",{on:{click:t.cpsSevenDivide}},[t._v(" x1/7 ")])]),s("div",[s("span",[t._v("Frenzy中")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.frenzied,expression:"frenzied"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.frenzied)?t._i(t.frenzied,null)>-1:t.frenzied},on:{change:function(e){var s=t.frenzied,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);a.checked?o<0&&(t.frenzied=s.concat([i])):o>-1&&(t.frenzied=s.slice(0,o).concat(s.slice(o+1)))}else t.frenzied=n}}})]),s("div",[t._m(1),s("div",[s("span",[t._v(" "+t._s(t._f("fix")(t.obj)))])])]),s("div",[t._m(2),s("div",[s("span",[t._v(t._s(t._f("fix")(t.canget)))])])])])]),s("div",{staticClass:"card mt-3"},[t._m(3),s("div",{staticClass:"card-body"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.savedata,expression:"savedata"}],staticStyle:{width:"100%"},attrs:{type:"textarea"},domProps:{value:t.savedata},on:{input:function(e){e.target.composing||(t.savedata=e.target.value)}}})]),s("div",[s("div",[t._v(" version: "+t._s(t.currentSavedata.version)+" ")]),s("div",[t._v(" 保存日: "+t._s(t._f("toJST")(t.currentSavedata.exportedAt))+" ")]),s("div",[t._v(" 最終転生: "+t._s(t._f("toJST")(t.currentSavedata.lastAscendedAt))+" ")]),s("div",[t._v(" 開始日: "+t._s(t._f("toJST")(t.currentSavedata.startedAt))+" ")])]),s("div",[s("button",{on:{click:t.uploadSavedata}},[t._v("upload")]),s("button",{on:{click:t.clearSavedataForm}},[t._v("clear")])]),s("div",{staticClass:"mt-2"},[t._v(" stored data ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.stored,expression:"stored"}],staticStyle:{width:"100%"},attrs:{type:"textarea",readonly:"",id:"stored-savedata"},domProps:{value:t.stored},on:{input:function(e){e.target.composing||(t.stored=e.target.value)}}}),s("div",[t._v(" 保存日: "+t._s(t._f("toJST")(t.storedSavedata.exportedAt))+" ")]),s("button",{on:{click:t.copyClipboardStoredSavedata}},[t._v("copy")]),s("button",{on:{click:t.fetchStoredSavedata}},[t._v("reload")])])])])},me=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header"},[s("span",[t._v("貯蔵計算")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("最低貯クッキー")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("最大FrenzyLucky")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header"},[s("span",[t._v("セーブデータ")])])}],fe=(s("ac1f"),s("25f0"),s("5319"),s("1276"),s("53ca")),ve={data:function(){return{cps:"",frenzied:!1,savedata:"",stored:""}},computed:Object(u["a"])(Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),{},{canget:function(){var t=this.cps;return this.frenzied||(t*=7),900*t+13},obj:function(){var t=this.canget/15*100;return t},currentSavedata:function(){return this.parseSavedata(this.savedata)},storedSavedata:function(){return this.parseSavedata(this.stored)}}),mounted:function(){localStorage.cps&&(this.cps=localStorage.cps)},watch:{cps:function(t){localStorage.cps=t}},filters:{fix:function(t){return t.toLocaleString()},toJST:function(t){return"object"!==Object(fe["a"])(t)?"":t.toLocaleString({timeZone:"Asia/Tokyo"})}},methods:{cpsSevenTimes:function(){var t=this.cps;this.cps=he(7*t),this.frenzied=!0},cpsSevenDivide:function(){var t=this.cps;this.cps=he(t/7),this.frenzied=!1},parseSavedata:function(t){var e=decodeURIComponent(t),s=atob(e.replace("!END!","")),a=s.split(";");return{version:a[0].split("||")[0],lastAscendedAt:new Date(Number(a[0].split("||")[1])),startedAt:new Date(Number(a[1])),exportedAt:new Date(Number(a[2])),bakeryName:a[3]}},uploadSavedata:function(){"Invalid Date"!==this.currentSavedata.exportedAt.toString()&&m.a.post("".concat(this.apiUrl,"/okonomi/set"),{key:"COOKIE_SAVEDATA",value:this.savedata,group:"Cookie"}).then(function(t){this.stored=t.data.value,this.clearSavedataForm()}.bind(this))},clearSavedataForm:function(){this.savedata=""},fetchStoredSavedata:function(){m.a.get("".concat(this.apiUrl,"/okonomi/get"),{params:{key:"COOKIE_SAVEDATA"}}).then(function(t){this.stored=t.data[0].value}.bind(this))},copyClipboardStoredSavedata:function(){var t=document.getElementById("stored-savedata");t.select(),document.execCommand("copy")}}};function he(t){return Math.round(1e3*t)/1e3}var be=ve,ge=Object(g["a"])(be,de,me,!1,null,null,null),_e=ge.exports,ye=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-sm"},[s("pre",[t._v("    作成中\n    デスクトップの背景にする画像を置いて、rsyncでまとめて持ってこれる場所\n    一覧をバーっと並べたい、のためにthumbnail生成したい\n    画像にタグ付けして整理したい\n  ")]),s("div",{staticClass:"btn btn-light",on:{click:t.getFiles}},[t._v(" 押せ！ ")]),t._l(t.files_split_row,(function(e,a){return s("div",{key:a+e,staticClass:"row no-gutters"},t._l(e,(function(e,n){return s("div",{key:a+n+e,staticClass:"col-sm"},[s("div",{staticClass:"text-center"},[t._v(t._s(e))]),""!=e?s("img",{staticClass:"img-fluid",staticStyle:{height:"300px"},attrs:{src:t.image_path(e),alt:""}}):t._e()])})),0)})),s("Uploader")],2)},Ce=[],xe=(s("a15b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{attrs:{action:t.path,method:"post",enctype:"multipart/form-data"}},[s("input",{attrs:{type:"file",name:"uploadFile"}}),s("input",{attrs:{type:"submit",value:"Upload"}})])])}),ke=[],Se={data:function(){return{actionPath:""}},computed:Object(u["a"])(Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),{},{path:function(){return"".concat(this.apiUrl,"/tako/data/upload")}})},Oe=Se,je=Object(g["a"])(Oe,xe,ke,!1,null,null,null),we=je.exports,Ue=s("2ef0"),Pe=s.n(Ue),Ee={components:{Uploader:we},data:function(){return{columns:3,files:[""]}},computed:Object(u["a"])(Object(u["a"])({},Object(p["c"])("constants",{apiUrl:function(t){return t.apiUrl}})),{},{files_split_row:function(){for(var t=Pe.a.chunk(this.files,this.columns),e=this.columns-t[t.length-1].length,s=0;s<e;s++)t[t.length-1].push("");return t}}),methods:{getFiles:function(){m.a.get("".concat(this.apiUrl,"/tako/list")).then(function(t){this.files=t.data}.bind(this))},image_path:function(t){return[this.apiUrl,"tako","data","get",t].join("/")}}},Me=Ee,$e=Object(g["a"])(Me,ye,Ce,!1,null,null,null),Te=$e.exports;a["a"].use(D["a"]);var Ae=[{path:"/",component:Y,props:{msg:"Welcome to Kashiwa"}},{path:"/music",component:bt},{path:"/music/list",component:Pt},{path:"/music/playlists",component:zt},{path:"/music/search",component:Dt},{path:"/daifuku",component:Qt},{path:"/okonomi",component:pe},{path:"/cookie",component:_e},{path:"/tako",component:Te}],ze=new D["a"]({base:"/kashiwa/dist/",routes:Ae}),Le=ze;a["a"].config.productionTip=!1,new a["a"]({router:Le,store:L,el:"#app",render:function(t){return t(G)}})},"5dc7":function(t,e,s){},c33f:function(t,e,s){"use strict";s("5dc7")},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.128f671e.js.map