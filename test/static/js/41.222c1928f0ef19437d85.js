(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{60:function(t,e){},EqDS:function(t,e,n){},RAt8:function(t,e,n){"use strict";n.r(e);n("H1Ta"),n("sRa1");var i=n("6/sb"),a=n.n(i),o={name:"simplemde-md",props:{value:String,id:{type:String},autofocus:{type:Boolean,default:!1},placeholder:{type:String,default:""},height:{type:Number,default:150},zIndex:{type:Number,default:10},toolbar:{type:Array}},data:function(){return{simplemde:null,hasChange:!1}},watch:{value:function(t){(t!==this.simplemde.value()||this.hasChange)&&this.simplemde.value(t)}},mounted:function(){var t=this;this.simplemde=new a.a({element:document.getElementById(this.id||"markdown-editor-"+ +new Date),autoDownloadFontAwesome:!1,autofocus:this.autofocus,toolbar:this.toolbar,spellChecker:!1,insertTexts:{link:["[","]( )"]},placeholder:this.placeholder}),this.value&&this.simplemde.value(this.value),this.simplemde.codemirror.on("change",function(){t.hasChange&&(t.hasChange=!0),t.$emit("input",t.simplemde.value())})},destroyed:function(){this.simplemde.toTextArea(),this.simplemde=null}},s=n("JFUb");var r=function(t){n("EqDS")},l={name:"markdown-demo",components:{MarkdownEditor:Object(s.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simplemde-container",style:{height:this.height+"px",zIndex:this.zIndex}},[e("textarea",{attrs:{id:this.id}})])},[],!1,r,"data-v-15052e13",null).exports},data:function(){return{content:"\n**this is test**\n\n* vue\n* element\n* webpack\n\n## Simplemde\n",html:""}},methods:{markdown2Html:function(){var t=this;n.e("vendors").then(n.t.bind(null,"M55E",7)).then(function(e){var n=new e.Converter;t.html=n.makeHtml(t.content)})}}},d=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("div",{staticClass:"editor-container"},[n("markdown-editor",{ref:"contentEditor",attrs:{id:"contentEditor",height:300,zIndex:20},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("el-button",{staticStyle:{"margin-top":"80px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:t.markdown2Html}},[t._v("To HTML")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.html)}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("code",[this._v("Markdown is based on\n    "),e("a",{attrs:{href:"https://github.com/sparksuite/simplemde-markdown-editor",target:"_blank"}},[this._v("simplemde-markdown-editor")]),this._v(" ，Simply encapsulated in Vue.\n    "),e("a",{attrs:{target:"_blank",href:"https://segmentfault.com/a/1190000009762198#articleHeader14"}},[this._v("\n      相关文章 ")])])}],!1,null,null,null);e.default=d.exports}}]);