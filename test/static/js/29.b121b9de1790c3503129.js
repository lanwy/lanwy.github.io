(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{t5hZ:function(a,e,t){"use strict";t.r(e);var n=["apple","banana"],l={data:function(){return{tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],key:1,formTheadOptions:["apple","banana","orange"],checkboxVal:n,formThead:n}},watch:{checkboxVal:function(a){this.formThead=this.formTheadOptions.filter(function(e){return a.indexOf(e)>=0}),this.key=this.key+1}}},r=t("JFUb"),o={name:"dynamicTable",components:{fixedThead:Object(r.a)(l,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-checkbox-group",{model:{value:a.checkboxVal,callback:function(e){a.checkboxVal=e},expression:"checkboxVal"}},[t("el-checkbox",{attrs:{label:"apple"}},[a._v("apple")]),a._v(" "),t("el-checkbox",{attrs:{label:"banana"}},[a._v("banana")]),a._v(" "),t("el-checkbox",{attrs:{label:"orange"}},[a._v("orange")])],1)],1),a._v(" "),t("el-table",{key:a.key,staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),a._v(" "),a._l(a.formThead,function(e){return t("el-table-column",{key:e,attrs:{label:e},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row[e])+"\n      ")]}}])})})],2)],1)},[],!1,null,null,null).exports,unfixedThead:Object(r.a)({data:function(){return{tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],formThead:["apple","banana"]}}},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-checkbox-group",{model:{value:a.formThead,callback:function(e){a.formThead=e},expression:"formThead"}},[t("el-checkbox",{attrs:{label:"apple"}},[a._v("apple")]),a._v(" "),t("el-checkbox",{attrs:{label:"banana"}},[a._v("banana")]),a._v(" "),t("el-checkbox",{attrs:{label:"orange"}},[a._v("orange")])],1)],1),a._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),a._v(" "),a._l(a.formThead,function(e){return t("el-table-column",{key:e,attrs:{label:e},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row[e])+"\n      ")]}}])})})],2)],1)},[],!1,null,null,null).exports}},c=Object(r.a)(o,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticStyle:{margin:"0 0 5px 20px"}},[a._v(a._s(a.$t("table.dynamicTips1")))]),a._v(" "),t("fixed-thead"),a._v(" "),t("div",{staticStyle:{margin:"30px 0 5px 20px"}},[a._v(a._s(a.$t("table.dynamicTips2")))]),a._v(" "),t("unfixed-thead")],1)},[],!1,null,null,null);e.default=c.exports}}]);