(function(){"use strict";var e={9836:function(e,t,s){var r=s(144),n=s(1096),o=s(3250),i=s(2469),a=s(3551),u=function(){var e=this,t=e._self._c;return t(n.Z,[t(o.Z,{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(i.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1)]),t(a.Z,[t("SearchUsers",{on:{update:e.updateSelectUser}}),t("UserRepos",{attrs:{reposURL:e.userReposURL}})],1)],1)},c=[],l=s(4177),p=s(3440),h=s(5223),d=s(4437),f=s(1200),g=s(7833),v=s(5294),m=function(){var e=this,t=e._self._c;return t(f.Z,[t(v.Z,{staticClass:"text-center"},[t(d.Z,{attrs:{cols:"12"}},[[t(p.Z,{attrs:{color:"blue text--lighten-2",dark:""}},[t(h.ZB,[t(l.Z,{attrs:{items:e.usersList,loading:e.userIsLoading,"search-input":e.searchUser,color:"white","hide-no-data":"","item-text":"login",label:"Usuarios GitHub",placeholder:"Digite para buscar","prepend-icon":"mdi-database-search","return-object":""},on:{"update:searchInput":function(t){e.searchUser=t},"update:search-input":function(t){e.searchUser=t}},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),t(g.Z,{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}]},[t("img",{attrs:{src:e.user.avatar_url}})])],1)]],2)],1)],1)},b=[];const R={async fetchUsers(e){const t=await fetch(`https://api.github.com/search/users?q=${e}`),s=await t.json();return s.items}},U={async userRepos(e){let t=1,s=!0,r=[];while(s){const n=await fetch(`${e}?page=${t}`),o=await n.json();o.length>0?r=r.concat(o):s=!1,t++}return r}};var w={data:()=>({user:"",searchUser:null,usersList:[],userIsLoading:!1}),watch:{searchUser(){if(this.userIsLoading=!0,this.clearUserList(),this.usersList.length>0)return this.userIsLoading=!1;this.fetchUsersDebounced()},user(){this.$emit("update",this.user)}},methods:{clearUserList(){this.usersList=[]},fetchUsersDebounced(){clearTimeout(this._searchTimerId),this._searchTimerId=setTimeout((()=>{R.fetchUsers(this.searchUser).then((e=>{this.usersList=e,this.userIsLoading=!1}))}),500)}}},L=w,y=s(1001),Z=(0,y.Z)(L,m,b,!1,null,null,null),_=Z.exports,x=s(48),j=function(){var e=this,t=e._self._c;return t(f.Z,{attrs:{fluid:""}},[t(v.Z,{attrs:{align:"center"}},[t(d.Z,{attrs:{cols:"12"}},[t(x.Z,{attrs:{items:e.userRepos,loading:e.reposIsLoading,"item-text":"name",label:"User Repos","persistent-hint":"","return-object":"","single-line":""},model:{value:e.selectedRepo,callback:function(t){e.selectedRepo=t},expression:"selectedRepo"}})],1)],1)],1)},O=[],I={props:["reposURL"],data:()=>({selectedRepo:{name:null},reposIsLoading:!1,userRepos:[{name:"Selecione um usuario"}]}),methods:{async getRepos(){this.reposIsLoading=!0;const e=await U.userRepos(this.reposURL);return this.reposIsLoading=!1,e}},watch:{async reposURL(){console.log(this.userRepos),this.userRepos=await this.getRepos()},selectedRepo(){console.log(this.selectedRepo.contents_url)}}},k=I,S=(0,y.Z)(k,j,O,!1,null,null,null),T=S.exports,P={name:"App",components:{SearchUsers:_,UserRepos:T},data:()=>({userReposURL:null}),methods:{updateSelectUser(e){this.userReposURL=e.repos_url}}},C=P,$=(0,y.Z)(C,u,c,!1,null,null,null),D=$.exports,M=s(2250);r.ZP.use(M.Z);var q=new M.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:q,render:e=>e(D)}).$mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[u])}))?r.splice(u--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],a=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(u)var l=u(s)}for(t&&t(r);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},r=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(9836)}));r=s.O(r)})();
//# sourceMappingURL=app.085be0d1.js.map