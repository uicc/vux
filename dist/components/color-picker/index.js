!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxColorPicker=t():e.vuxColorPicker=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(12)},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(15),i=r(s),n=o(14),l=r(n),p=o(13),u=r(p),c={large:40,middle:30,small:20};t["default"]={components:{Icon:i["default"],Flexbox:l["default"],FlexboxItem:u["default"]},props:{colors:{type:Array,required:!0},size:{type:String,"default":"large"},value:{type:String,twoWay:!0}},computed:{width:function(){return c[this.size]}},methods:{change:function(e){this.value=e,this.$emit("on-change",e)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=["-moz-box-","-webkit-box-",""];t["default"]={props:{span:{type:[Number,String]}},methods:{buildWidth:function(e){return"number"==typeof e?1>e?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={},t="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(e[t]=this.$parent.gutter+"px",this.span)for(var r=0;r<o.length;r++)e[o[r]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return e}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{gutter:{type:Number,"default":8},orient:{type:String,"default":"horizontal"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports="<div class=vux-color-picker> <flexbox> <flexbox-item v-for=\"color in colors\" class=vux-color-box> <span class=vux-color-item :style=\"{borderRadius: width/2 + 'px',backgroundColor: color, width: width + 'px', height: width + 'px'}\" @click=change(color) :class=\"{'vux-color-white': color === '#fff' || color === '#fff', 'vux-color-picker-small': size === 'small', 'vux-color-picker-middle': size === 'middle'}\"> <icon v-if=\"color === value\" class=vux-color-checked :style=\"{lineHeight: width + 'px'}\" type=success_no_circle></icon> </span> </flexbox-item> </flexbox> </div>"},function(e,t){e.exports="<div class=vux-flexbox-item :style=style> <slot></slot> </div>"},function(e,t){e.exports="<div class=vux-flexbox :class=\"{'flex-col': orient === 'vertical', 'flex-row': orient === 'horizontal'}\"> <slot></slot> </div>"},function(e,t){e.exports="<i class={{className}}></i>"},function(e,t,o){var r,s;o(6),r=o(1),s=o(8),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;r=o(2),s=o(9),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;o(5),r=o(3),s=o(10),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;o(7),r=o(4),s=o(11),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});