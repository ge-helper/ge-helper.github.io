(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["courses"],{"1a2f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("courses-search"),s("courses-filter"),s("courses-list")],1)},a=[],n=(s("cadf"),s("551c"),s("097d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-jumbotron",{style:{height:t.$vuetify.breakpoint.xs?"80px":"100px"},attrs:{color:"primary",gradient:"220deg,#4568dc -10%,#12c2e9 70%"}},[s("v-container",{staticStyle:{"max-width":"1000px"},attrs:{"fill-height":""}},[s("v-layout",{staticStyle:{"max-width":"700px"},attrs:{"align-center":""}},[s("v-flex",[s("v-text-field",{attrs:{label:"課名／時間／老師／科號",solo:"","hide-details":"","append-icon":"search"},on:{"click:append":t.doSearch,keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSearch(e):null}},model:{value:t.preSearch,callback:function(e){t.preSearch=e},expression:"preSearch"}})],1)],1)],1)],1)}),r=[],l=(s("386d"),s("c93e")),c=s("2f62"),o={name:"CoursesSearch",data:function(){return{preSearch:""}},computed:Object(l["a"])({},Object(c["e"])(["search"])),methods:Object(l["a"])({},Object(c["d"])(["setSearch"]),{doSearch:function(){FB.AppEvents.logEvent("search"),this.preSearch.trim()!==this.search.trim()&&(this.setSearch(this.preSearch),this.$store.dispatch("doSearch"))}})},u=o,p=s("2877"),d=Object(p["a"])(u,n,r,!1,null,null,null);d.options.__file="Search.vue";var v=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blue-grey lighten-5"},[s("v-container",{staticStyle:{"max-width":"1000px"}},[s("h3",{staticClass:"subheading"},[s("span",[t._v(t._s(t.results.length+" 個搜尋"))]),s("span",{staticClass:"font-weight-medium",class:{"mx-1":!!t.search}},[t._v(t._s(t.search))]),t._v("結果\n    ")]),s("div",[s("filter-dialog",{attrs:{color:t.$vuetify.breakpoint.xs&&t.chips.length?"primary":"secondary"}})],1),t.$vuetify.breakpoint.xs?t._e():s("div",[t._l(t.chips,function(e,i){return s("v-chip",{key:i,staticClass:"grey darken-1 white--text",class:{"ml-0":0===i}},[t._v("\n        "+t._s(e.text)+"\n        "),s("v-icon",{staticStyle:{color:"rgba(255,255,255,.7)"},attrs:{right:""},on:{click:function(s){t.closeChip(e)}}},[t._v("highlight_off")])],1)}),t.chips.length>1?s("v-btn",{staticClass:"mx-0",attrs:{small:"",flat:"",color:"primary"},on:{click:t.clearAll}},[t._v("清除全部")]):t._e()],2)])],1)},h=[],f=(s("6762"),s("2fdb"),s("8afe")),g=(s("6b54"),s("55dd"),s("456d"),s("ac6a"),s("6c7b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{scrollable:"",fullscreen:t.$vuetify.breakpoint.xs,width:"600"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[s("v-btn",{staticClass:"ml-0 my-3",attrs:{slot:"activator",outline:"",color:t.color},on:{click:t.openFilterDialog},slot:"activator"},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("filter_list")]),t._v("\n    篩選器\n  ")],1),s("v-card",[s("v-card-title",[t._v("篩選器")]),s("v-divider"),s("v-card-text",{staticClass:"pa-0",staticStyle:{"min-height":"calc(100% - 107px)","-webkit-overflow-scrolling":"touch"}},[s("v-tabs",{attrs:{grow:"",color:"cyan","slider-color":"yellow",dark:""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[s("v-tab",[t._v("一般")]),s("v-tab",[t._v("時間")]),s("v-tab-item",[s("v-container",{staticClass:"pb-0"},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",sm6:""}},[s("h4",{staticClass:"mb-2"},[t._v("類別")]),t._l(t.categoryOptions,function(e){return s("v-checkbox",{key:e[0],staticClass:"mt-0",attrs:{value:e[0],"hide-details":"",label:e[0]+" ("+e[1]+")"},model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}})})],2),s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",sm6:""}},[s("h4",{staticClass:"mb-2"},[t._v("開課單位")]),t._l(t.departmentOptions.slice(0,t.departmentOptionLimit),function(e){return s("v-checkbox",{key:e[0],staticClass:"mt-0",attrs:{value:e[0],"hide-details":"",label:e[0]+" ("+e[1]+")"},model:{value:t.departments,callback:function(e){t.departments=e},expression:"departments"}})}),t.departmentOptionLimit<t.departmentOptions.length?s("v-btn",{staticClass:"mx-0",attrs:{small:"",flat:"",color:"primary"},on:{click:function(e){t.departmentOptionLimit+=4}}},[t._v("更多")]):t._e()],2),s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",sm6:""}},[s("h4",{staticClass:"mb-2"},[t._v("學分")]),t._l(t.creditOptions,function(e){return s("v-checkbox",{key:e[0],staticClass:"mt-0",attrs:{value:e[0],"hide-details":"",label:e[0]+" ("+e[1]+")"},model:{value:t.credits,callback:function(e){t.credits=e},expression:"credits"}})})],2),s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",sm6:""}},[s("h4",{staticClass:"mb-2"},[t._v("授課語言")]),t._l(t.languageOptions,function(e){return s("v-checkbox",{key:e[0],staticClass:"mt-0",attrs:{value:e[0],"hide-details":"",label:e[0]+" ("+e[1]+")"},model:{value:t.languages,callback:function(e){t.languages=e},expression:"languages"}})})],2)],1)],1)],1),s("v-tab-item",[s("v-container",[s("h4",{staticClass:"mb-2"},[t._v("空堂時間")]),t._l(14,function(e){return s("v-layout",{key:e,staticClass:"time-table",attrs:{wrap:""}},t._l(6,function(i){return s("v-flex",{key:i,attrs:{xs1:1===i,"text-xs-center":""}},[1===e||1===i?s("span",{staticStyle:{"line-height":"32px"}},[t._v("\n                  "+t._s(1===e?t.columnHeaders[i-1]:t.rowHeaders[e-1])+"\n                ")]):s("v-checkbox",{staticClass:"mt-0",attrs:{value:""+t.columnHeaders[i-1]+t.rowHeaders[e-1],"hide-details":""},model:{value:t.times,callback:function(e){t.times=e},expression:"times"}})],1)}))})],2)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),s("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.applyFilter}},[t._v("套用")])],1)],1)],1)}),b=[],_=["","M","T","W","R","F"],x=["","1","2","3","4","n","5","6","7","8","9","a","b","c"],y={name:"CoursesFilterDialog",props:{color:{type:String,default:"secondary"}},data:function(){return{dialog:!1,tabs:null,departmentOptionLimit:3,columnHeaders:_,rowHeaders:x,categories:[],credits:[],languages:[],departments:[],times:[]}},computed:Object(l["a"])({},Object(c["e"])(["filter"]),Object(c["c"])(["option"]),["categoryOptions","creditOptions","languageOptions","departmentOptions"].reduce(function(t,e){return t[e]=function(){return this.option[e]},t},{}),{dialogVisible:{get:function(){return this.dialog},set:function(t){if(t){var e=this.filter,s=e.categories,i=e.credits,a=e.languages,n=e.departments,r=e.times;this.categories=s.slice(),this.credits=i.slice(),this.languages=a.slice(),this.departments=n.slice(),this.times=r.slice()}else this.departmentOptionLimit=3;this.dialog=t}}}),methods:Object(l["a"])({},Object(c["b"])(["doFilter"]),Object(c["d"])(["setFilter"]),{openFilterDialog:function(){FB.AppEvents.logEvent("filterStart")},applyFilter:function(){FB.AppEvents.logEvent("filterEnd");var t=this.categories,e=this.credits,s=this.languages,i=this.departments,a=this.times;this.setFilter({categories:t,credits:e,languages:s,departments:i,times:a}),this.doFilter(),this.dialogVisible=!1}})},C=y,w=(s("8906"),Object(p["a"])(C,g,b,!1,null,null,null));w.options.__file="FilterDialog.vue";var k=w.exports,O=["M","T","W","R","F"],S=["1","2","3","4","n","5","6","7","8","9","a","b","c"],j=new Array(65).fill(0).map(function(t,e){return"".concat(O[e/13>>0]).concat(S[e%13])}).reduce(function(t,e,s){return t[e]=s,t},{}),F={name:"CoursesFilter",components:{"filter-dialog":k},computed:Object(l["a"])({},Object(c["e"])(["search","filter","results"]),Object(c["c"])(["option"]),{chips:function(){var t=[],e=this.filter;return Object.keys(e).forEach(function(s){if("times"===s){var i=e.times;i.length&&(i.sort(function(t,e){return j[t]-j[e]}),t.push({filter:"times",text:i.toString(),value:i}))}else"credits"===s?t.push.apply(t,Object(f["a"])(e[s].map(function(t){return{filter:s,text:"".concat(t," 學分"),value:t}}))):t.push.apply(t,Object(f["a"])(e[s].map(function(t){return{filter:s,text:t,value:t}})))}),t}}),methods:Object(l["a"])({},Object(c["b"])(["doFilter"]),Object(c["d"])(["clearFilter","setFilter"]),{closeChip:function(t){var e={};e[t.filter]=Array.isArray(t.value)?this.filter[t.filter].filter(function(e){return!t.value.includes(e)}):this.filter[t.filter].filter(function(e){return t.value!==e}),this.setFilter(e),this.doFilter()},clearAll:function(){this.clearFilter(),this.doFilter()}})},E=F,$=Object(p["a"])(E,m,h,!1,null,null,null);$.options.__file="Filter.vue";var A=$.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticStyle:{"max-width":"1000px"},attrs:{id:"courses-list"}},[i("courses-sort"),i("v-data-iterator",{staticStyle:{"max-width":"700px"},attrs:{pagination:t.pagination,"hide-actions":"","rows-per-page-text":"每頁筆數","no-data-text":"沒有符合的課程，換個關鍵字試試？",items:t.results},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return i("v-card",{staticClass:"my-3 transparent",staticStyle:{cursor:"pointer"},attrs:{flat:""},nativeOn:{click:function(s){t.openViewDialog(e.item.course_no)}}},[i("v-layout",[i("v-flex",{staticStyle:{flex:"0 0 auto",width:"20%","max-width":"48px",margin:"4px"}},[i("v-card-media",{attrs:{src:s("03e5")("./"+t.mapDept2Img[e.item.course_no.slice(5,9)]),width:"48px",height:"48px",contain:""}})],1),i("v-flex",[i("v-card-title",{staticClass:"py-0"},[i("div",{staticStyle:{width:"100%"}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm8:""}},[i("span",{staticClass:"subheading font-weight-medium"},[i("v-chip",{staticClass:"chip caption",class:t.chipColors[e.item.category],attrs:{label:"",small:""}},[t._v(t._s(e.item.category))]),t._v("\n                    "+t._s(e.item.course_title_zh)+"\n                  ")],1),i("div",{staticClass:"body-1 mt-2"},[t._v("\n                    "+t._s(e.item.credit+" 學分．"+e.item.time+"．人數 "+e.item.enrollment+"/"+e.item.size_limit)+"\n                  ")]),i("div",{staticClass:"body-1 grey--text"},[t._v(t._s(e.item.teachers))])]),t.$vuetify.breakpoint.smAndUp?i("v-flex",{attrs:{sm4:""}},[i("v-layout",{attrs:{"align-end":"",column:""}},[i("span",{staticClass:"subheading"},[t._v(t._s(""+t.mapScore(e.item.averageGrade)))]),i("span",{staticClass:"caption grey--text"},[t._v(t._s("("+e.item.totalStudent+" 人平均成績)"))])])],1):i("v-flex",{staticClass:"mt-1",attrs:{xs12:""}},[i("v-layout",{attrs:{"align-center":"","justify-end":""}},[i("span",{staticClass:"body-1"},[t._v(t._s(""+t.mapScore(e.item.averageGrade)))]),i("span",{staticClass:"ml-2 caption grey--text"},[t._v(t._s("("+e.item.totalStudent+")"))])])],1)],1),e.item.reco?i("v-layout",{staticClass:"grey lighten-3 mt-2 mb-1 pa-2",staticStyle:{"border-radius":"3px"},attrs:{"align-center":""}},[i("v-icon",{staticClass:"amber--text mr-1",attrs:{small:""}},[t._v("star")]),i("span",{staticClass:"caption",staticStyle:{"margin-top":"2px"}},[t._v("\n                  "+t._s("修過"+e.item.recoReasons.join("、")+"的同學在本門課都考不錯")+"\n                ")])],1):t._e()],1)])],1)],1),i("v-divider",{staticClass:"my-2"})],1)}}])}),i("div",{staticClass:"text-xs-center pt-2",staticStyle:{"max-width":"700px"}},[i("v-pagination",{attrs:{length:t.pages},on:{input:function(e){t.$vuetify.goTo("#courses-list")}},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)],1)},D=[],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{"offset-y":""}},[s("v-btn",{staticClass:"ml-0",attrs:{slot:"activator",outline:""},slot:"activator"},[t._v("\n    "+t._s("排序方式："+t.sort)+"\n    "),s("v-icon",{attrs:{right:""}},[t._v("arrow_drop_down")])],1),s("v-list",t._l(["相關性","分數甜度","熱門程度"],function(e,i){return s("v-list-tile",{key:i,on:{click:function(s){t.select(e)}}},[s("v-list-tile-title",[t._v(t._s(e))])],1)}))],1)},H=[],L={"相關性":"sortRelevance","分數甜度":"sortSweet","熱門程度":"sortHot"},P={name:"CoursesSort",computed:{sort:{get:function(){return this.$store.state.sort},set:function(t){this.setSort(t)}}},methods:Object(l["a"])({},Object(c["d"])(["setSort"]),{select:function(t){FB.AppEvents.logEvent(L[t]),this.sort=t}})},I=P,R=(s("737c"),Object(p["a"])(I,B,H,!1,null,null,null));R.options.__file="Sort.vue";var M=R.exports,T=s("431d"),z={name:"CoursesList",data:function(){return{mapDept2Img:T["a"],chipColors:{"人文":"","社會":"","自然":"","核通 1":"primary white--text","核通 2":"primary white--text","核通 3":"primary white--text","核通 4":"primary white--text","核通 5":"primary white--text","核通 6":"primary white--text","核通 7":"primary white--text"}}},components:{"courses-sort":M},computed:Object(l["a"])({},Object(c["c"])(["results"]),{pagination:{get:function(){return this.setPagination(Object(l["a"])({},this.$store.state.pagination,{totalItems:this.results.length})),this.$store.state.pagination},set:function(t){this.setPagination(t)}},pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage)}}),methods:Object(l["a"])({},Object(c["d"])(["setView","setViewDialog","setPagination"]),{openViewDialog:function(t){FB.AppEvents.logEvent("viewCourse"),this.setView(t),this.setViewDialog(!0)},mapScore:function(t){for(var e=[90,85,80,77,73,70,67,63,60,50,1,0],s=["A+","A","A-","B+","B","B-","C+","C","C-","D","E","資料不足"],i=0;i<e.length;i++)if(t>=e[i])return s[i]}})},G=z,J=(s("a032"),Object(p["a"])(G,V,D,!1,null,null,null));J.options.__file="List.vue";var W=J.exports,U={name:"Courses",components:{"courses-search":v,"courses-filter":A,"courses-list":W}},q=U,K=Object(p["a"])(q,i,a,!1,null,null,null);K.options.__file="Courses.vue";e["default"]=K.exports},"6c32":function(t,e,s){},"737c":function(t,e,s){"use strict";var i=s("d326"),a=s.n(i);a.a},8906:function(t,e,s){"use strict";var i=s("6c32"),a=s.n(i);a.a},a032:function(t,e,s){"use strict";var i=s("fb6e"),a=s.n(i);a.a},d326:function(t,e,s){},fb6e:function(t,e,s){}}]);
//# sourceMappingURL=courses.44044057.js.map