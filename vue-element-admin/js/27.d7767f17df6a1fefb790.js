webpackJsonp([27],{310:function(t,e,n){var a=n(1)(n(580),n(759),null,null,null);t.exports=a.exports},470:function(t,e,n){"use strict";function a(){return n.i(l.a)({url:"/article/list",method:"get"})}function i(){return n.i(l.a)({url:"/article/detail",method:"get"})}e.b=a,e.a=i;var l=n(107)},580:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(470);e.default={data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,n.i(a.b)(this.listQuery).then(function(e){t.list=e.data,t.listLoading=!1})},handleDownload:function(){var t=this;n.e(36).then(function(){var e=n(527),a=e.export_json_to_excel,i=["序号","文章标题","作者","阅读数","发布时间"],l=["id","title","author","pageviews","display_time"],o=t.list;a(i,t.formatJson(l,o),"列表excel")}.bind(null,n)).catch(n.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}}}},759:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticStyle:{"margin-bottom":"20px",float:"right"},attrs:{type:"primary",icon:"document"},on:{click:t.handleDownload}},[t._v("导出excel")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"作者",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"阅读数",width:"105",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"发布时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.display_time))])]}}])})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=27.d7767f17df6a1fefb790.js.map