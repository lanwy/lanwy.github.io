webpackJsonp([39],{"17fl":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.example-btn[data-v-02f9ea3e] {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);\n  transition: all .3s cubic-bezier(.645, .045, .355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, .65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n}\n.example-btn[data-v-02f9ea3e]:hover {\n  color: #4AB7BD;\n  background-color: #fff;\n  border-color: #4AB7BD;\n}\n.example[data-v-02f9ea3e] {\n  font-size: 50px;\n  color: #F6416C;\n  display: block;\n  margin: 10px 0;\n  text-align: center;\n  font-size: 80px;\n  font-weight: 500;\n}\n.label[data-v-02f9ea3e] {\n  color: #2f4f4f;\n  font-size: 16px;\n  display: inline-block;\n  margin: 15px 30px 15px 0;\n}\ninput[data-v-02f9ea3e] {\n  position: relative;\n  display: inline-block;\n  padding: 4px 7px;\n  width: 70px;\n  height: 28px;\n  cursor: text;\n  font-size: 12px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, .65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.startBtn[data-v-02f9ea3e] {\n  margin-left: 20px;\n  font-size: 20px;\n  color: #30B08F;\n  background-color: #fff;\n}\n.startBtn[data-v-02f9ea3e]:hover {\n  background-color: #30B08F;\n  color: #fff;\n  border-color: #30B08F;\n}\n.pause-resume-btn[data-v-02f9ea3e] {\n  font-size: 20px;\n  color: #E65D6E;\n  background-color: #fff;\n}\n.pause-resume-btn[data-v-02f9ea3e]:hover {\n  background-color: #E65D6E;\n  color: #fff;\n  border-color: #E65D6E;\n}\n",""])},"G/2s":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("WBHA"),r={name:"countTo-demo",components:{countTo:n.n(a).a},data:function(){return{setStartVal:0,setEndVal:2017,setDuration:4e3,setDecimals:0,setSeparator:",",setSuffix:" rmb",setPrefix:"¥ "}},computed:{_startVal:function(){return this.setStartVal?this.setStartVal:0},_endVal:function(){return this.setEndVal?this.setEndVal:0},_duration:function(){return this.setDuration?this.setDuration:100},_decimals:function(){return this.setDecimals?this.setDecimals<0||this.setDecimals>20?(alert("digits argument must be between 0 and 20"),0):this.setDecimals:0},_separator:function(){return this.setSeparator},_suffix:function(){return this.setSuffix},_prefix:function(){return this.setPrefix}},methods:{start:function(){this.$refs.example.start()},pauseResume:function(){this.$refs.example.pauseResume()}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"components-container"},[e._m(0),e._v(" "),n("count-to",{ref:"example",staticClass:"example",attrs:{"start-val":e._startVal,"end-val":e._endVal,duration:e._duration,decimals:e._decimals,separator:e._separator,prefix:e._prefix,suffix:e._suffix,autoplay:!1}}),e._v(" "),n("div",{staticStyle:{"margin-left":"25%","margin-top":"40px"}},[n("label",{staticClass:"label",attrs:{for:"startValInput"}},[e._v("startVal:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.setStartVal,expression:"setStartVal",modifiers:{number:!0}}],attrs:{type:"number",name:"startValInput"},domProps:{value:e.setStartVal},on:{input:function(t){t.target.composing||(e.setStartVal=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("label",{staticClass:"label",attrs:{for:"endValInput"}},[e._v("endVal:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.setEndVal,expression:"setEndVal",modifiers:{number:!0}}],attrs:{type:"number",name:"endVaInput"},domProps:{value:e.setEndVal},on:{input:function(t){t.target.composing||(e.setEndVal=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("label",{staticClass:"label",attrs:{for:"durationInput"}},[e._v("duration:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.setDuration,expression:"setDuration",modifiers:{number:!0}}],attrs:{type:"number",name:"durationInput"},domProps:{value:e.setDuration},on:{input:function(t){t.target.composing||(e.setDuration=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("div",{staticClass:"startBtn example-btn",on:{click:e.start}},[e._v("开始")]),e._v(" "),n("div",{staticClass:"pause-resume-btn example-btn",on:{click:e.pauseResume}},[e._v("暂停/恢复")]),e._v(" "),n("br"),e._v(" "),n("label",{staticClass:"label",attrs:{for:"decimalsInput"}},[e._v("decimals:\n      "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.setDecimals,expression:"setDecimals",modifiers:{number:!0}}],attrs:{type:"number",name:"decimalsInput"},domProps:{value:e.setDecimals},on:{input:function(t){t.target.composing||(e.setDecimals=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("label",{staticClass:"label",attrs:{for:"separatorInput"}},[e._v("separator:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.setSeparator,expression:"setSeparator"}],attrs:{name:"separatorInput"},domProps:{value:e.setSeparator},on:{input:function(t){t.target.composing||(e.setSeparator=t.target.value)}}})]),e._v(" "),n("label",{staticClass:"label",attrs:{for:"prefixInput"}},[e._v("prefix:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.setPrefix,expression:"setPrefix"}],attrs:{name:"prefixInput"},domProps:{value:e.setPrefix},on:{input:function(t){t.target.composing||(e.setPrefix=t.target.value)}}})]),e._v(" "),n("label",{staticClass:"label",attrs:{for:"suffixInput"}},[e._v("suffix:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.setSuffix,expression:"setSuffix"}],attrs:{name:"suffixInput"},domProps:{value:e.setSuffix},on:{input:function(t){t.target.composing||(e.setSuffix=t.target.value)}}})])]),e._v(" "),n("code",[e._v("<count-to :start-val='"+e._s(e._startVal)+"' :end-val='"+e._s(e._endVal)+"' :duration='"+e._s(e._duration)+"'\n    :decimals='"+e._s(e._decimals)+"' :separator='"+e._s(e._separator)+"' :prefix='"+e._s(e._prefix)+"' :suffix='"+e._s(e._suffix)+"'\n    :autoplay=false>")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"warn-content"},[t("a",{attrs:{href:"https://github.com/PanJiaChen/vue-countTo",target:"_blank"}},[this._v("countTo-component")])])}]},o=n("VU/8")(r,s,!1,function(e){n("aEYS")},"data-v-02f9ea3e",null);t.default=o.exports},aEYS:function(e,t,n){var a=n("17fl");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("262245ed",a,!0)}});