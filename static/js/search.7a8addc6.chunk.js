webpackJsonp([3],{"/KFX":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=null,a={name:"Search",data:function(){return{allLoaded:!0,progress:!1}},mixins:[s("5jRo").a],computed:{search:function(){return this.$root.search}},watch:{search:function(t){var e=this;clearTimeout(r),r=setTimeout(function(){e.getLists()},600)}},methods:{getLists:function(){var t=this;return this.progress=!0,this.$jsonp("https://api.douban.com/v2/movie/search",{count:18,q:this.search}).then(function(e){t.lists=e.subjects,t.progress=!1}).catch(function(t){document.write(t.statusText)})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mu-container",{staticStyle:{padding:"70px 10px 0"}},[s("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.progress,expression:"progress"}],staticStyle:{margin:"0 auto",display:"block"},attrs:{size:46,color:"success"}}),t._v(" "),s("mu-load-more",{attrs:{loading:t.loading,"loaded-all":t.allLoaded},on:{load:t.load}},[s("mu-grid-list",{attrs:{cols:3}},t._l(t.lists,function(e,r){return s("mu-grid-tile",{key:r,staticStyle:{height:"auto"},on:{click:function(s){t.$router.push({name:"detail",query:{id:e.id}})}}},[s("img",{attrs:{src:e.images.small}}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),t._v(" "),s("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[s("b",[t._v(t._s(t._f("zero")(e.rating.average)))])])])}))],1)],1)},staticRenderFns:[]},o=s("VU/8")(a,i,!1,null,null,null);e.default=o.exports}});