webpackJsonp([1],{"15Bb":function(e,s){},"8biZ":function(e,s){},NEUO:function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("7+uW"),r={name:"App",data:function(){return{items:{2019027:{red:[2,6,8,10,11,17],blue:13},2019026:{red:[3,13,15,19,20,27],blue:14},2019025:{red:[15,16,21,27,30,33],blue:4},2019024:{red:[1,8,23,25,28,29],blue:10},2019023:{red:[1,10,14,15,18,31],blue:13},2019022:{red:[3,7,11,21,30,33],blue:7},2019021:{red:[2,5,7,8,20,27],blue:4},2019020:{red:[2,12,13,23,27,28],blue:12},2019019:{red:[3,11,17,18,24,25],blue:6},2019018:{red:[4,11,18,19,26,32],blue:4},2019017:{red:[4,5,24,28,30,33],blue:9},2019016:{red:[5,7,9,11,19,25],blue:5},2019015:{red:[11,15,16,20,24,31],blue:4},2019014:{red:[1,2,3,14,19,25],blue:3},2019013:{red:[5,7,14,16,18,21],blue:1},2019012:{red:[7,10,21,23,31,33],blue:14},2019011:{red:[10,13,19,21,24,30],blue:7},2019010:{red:[2,4,5,8,11,30],blue:2},2019009:{red:[1,7,10,22,31,32],blue:15},2019008:{red:[2,6,9,13,28,32],blue:12},2019007:{red:[6,10,14,15,19,23],blue:15},2019006:{red:[1,5,10,19,26,28],blue:12},2019005:{red:[21,22,26,28,31,32],blue:12},2019004:{red:[8,12,16,19,26,32],blue:12},2019003:{red:[13,17,20,21,22,27],blue:12},2019002:{red:[4,5,6,8,9,18],blue:12},2019001:{red:[6,10,13,15,32,33],blue:12}},zhishu:[1,2,3,5,7,11,13,17,19,23,29,31],all:[1,2,3,4,5,6,"",7,8,9,10,11,"",12,13,14,15,16,17,"",18,19,20,21,22,"",23,24,25,26,27,28,"",29,30,31,32,33],nine:[1,4,7,10,"",13,16,19,22,"",25,28,31,"",2,5,8,11,"",14,17,20,"",23,26,29,32,"",3,6,9,"",12,15,18,21,"",24,27,30,33],number:2019026,max:2019027,min:2019005,not:[1,7,11,13,17,19,23,29,31],three:[3,6,9,12,15,18,21,24,27,30,33],two:[2,4,6,8,14,16,22,26,28,32],five:[5,10,20,25],head0:[1,2,3,4,5,6,7,8,9],head1:[10,11,12,13,14,15,16,17,18,19],head2:[20,21,22,23,24,25,26,27,28,29],head3:[30,31,32,33]}},methods:{prev:function(){console.log(this.number),this.number!=this.min&&this.number--},next:function(){this.number!=this.max&&this.number++},back:function(e){var s="";return this.items[this.number+1]?s=this.items[this.number].red.includes(e)&&this.items[this.number+1].red.includes(e)?"green":this.items[this.number].red.includes(e)?"f5e":this.items[this.number+1].red.includes(e)?"yellow":"":this.items[this.number].red.includes(e)&&(s="f5e"),s},hi:function(e){return this.items[this.number+1]?this.items[this.number+1].red.includes(e)&&this.zhishu.includes(e)?"red next":this.items[this.number+1].red.includes(e)?"next":this.zhishu.includes(e)?"red":"":this.zhishu.includes(e)?"red":""},top:function(e){return this.items[this.number+1]?this.zhishu.includes(e)&&this.items[this.number].red.includes(e)&&this.items[this.number+1].red.includes(e)?"red top-green":this.zhishu.includes(e)&&this.items[this.number].red.includes(e)?"red top":this.items[this.number].red.includes(e)&&this.items[this.number+1].red.includes(e)?"top-green":this.zhishu.includes(e)&&this.items[this.number+1].red.includes(e)?"red top-yellow":this.zhishu.includes(e)?"red":this.items[this.number].red.includes(e)?"top":this.items[this.number+1].red.includes(e)?"top-yellow":"":this.zhishu.includes(e)&&this.items[this.number].red.includes(e)?"red top":this.zhishu.includes(e)?"red":this.items[this.number].red.includes(e)?"top":""}},computed:{datas0:function(){return this.items[this.number].red},datas1:function(){for(var e=this.items[this.number].red,s=this.items[this.number-1].red,t=[].concat(s),i=0;i<6;i++)for(var r=0;r<6;r++)t[i]==e[r]&&(t[i]="");return t},datas2:function(){var e=this.items[this.number].red,s=this.items[this.number-1].red,t=this.items[this.number-2].red,i=[].concat(t);i.concat(t);for(var r=0;r<6;r++)for(var n=0;n<6;n++)i[r]==e[n]&&(i[r]="");for(var a=0;a<6;a++)for(var d=0;d<6;d++)i[a]==s[d]&&(i[a]="");return i},datas3:function(){for(var e=this.items[this.number].red,s=this.items[this.number-1].red,t=this.items[this.number-2].red,i=this.items[this.number-3].red,r=[].concat(i),n=0;n<6;n++)for(var a=0;a<6;a++)r[n]==e[a]&&(r[n]="");for(var d=0;d<6;d++)for(var u=0;u<6;u++)r[d]==s[u]&&(r[d]="");for(var c=0;c<6;c++)for(var l=0;l<6;l++)r[c]==t[l]&&(r[c]="");return r},datas4:function(){for(var e=this.items[this.number].red,s=this.items[this.number-1].red,t=this.items[this.number-2].red,i=this.items[this.number-3].red,r=this.items[this.number-4].red,n=[].concat(r),a=0;a<6;a++)for(var d=0;d<6;d++)n[a]==e[d]&&(n[a]="");for(var u=0;u<6;u++)for(var c=0;c<6;c++)n[u]==s[c]&&(n[u]="");for(var l=0;l<6;l++)for(var v=0;v<6;v++)n[l]==t[v]&&(n[l]="");for(var h=0;h<6;h++)for(var _=0;_<6;_++)n[h]==i[_]&&(n[h]="");return n},datas5:function(){for(var e=[],s=1;s<34;s++)this.datas0.includes(s)||this.datas1.includes(s)||this.datas2.includes(s)||this.datas3.includes(s)||this.datas4.includes(s)||e.push(s);return e},datas6:function(){for(var e=[],s=0;s<6;s++){var t=this.items[this.number].red[s]+this.items[this.number-1].red[s]+this.items[this.number-2].red[s]+this.items[this.number-3].red[s]+this.items[this.number-4].red[s];e.push(Math.round(t/5))}return console.log(e),e}}},n={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var a=t("VU/8")(r,n,!1,function(e){t("8biZ")},null,null).exports,d=t("/ocq"),u={name:"App",data:function(){return{items:{2019033:{red:[9,15,19,21,23,29],blue:15},2019032:{red:[4,8,9,13,28,33],blue:4},2019031:{red:[3,13,15,18,21,33],blue:16},2019030:{red:[4,5,7,10,12,22],blue:16},2019029:{red:[8,11,17,23,32,33],blue:10},2019028:{red:[4,19,22,26,29,30],blue:11},2019027:{red:[2,6,8,10,11,17],blue:13},2019026:{red:[3,13,15,19,20,27],blue:14},2019025:{red:[15,16,21,27,30,33],blue:4},2019024:{red:[1,8,23,25,28,29],blue:10},2019023:{red:[1,10,14,15,18,31],blue:13},2019022:{red:[3,7,11,21,30,33],blue:7},2019021:{red:[2,5,7,8,20,27],blue:4},2019020:{red:[2,12,13,23,27,28],blue:12},2019019:{red:[3,11,17,18,24,25],blue:6},2019018:{red:[4,11,18,19,26,32],blue:4},2019017:{red:[4,5,24,28,30,33],blue:9},2019016:{red:[5,7,9,11,19,25],blue:5},2019015:{red:[11,15,16,20,24,31],blue:4},2019014:{red:[1,2,3,14,19,25],blue:3},2019013:{red:[5,7,14,16,18,21],blue:1},2019012:{red:[7,10,21,23,31,33],blue:14},2019011:{red:[10,13,19,21,24,30],blue:7},2019010:{red:[2,4,5,8,11,30],blue:2},2019009:{red:[1,7,10,22,31,32],blue:15},2019008:{red:[2,6,9,13,28,32],blue:12},2019007:{red:[6,10,14,15,19,23],blue:15},2019006:{red:[1,5,10,19,26,28],blue:12},2019005:{red:[21,22,26,28,31,32],blue:12},2019004:{red:[8,12,16,19,26,32],blue:12},2019003:{red:[13,17,20,21,22,27],blue:12},2019002:{red:[4,5,6,8,9,18],blue:12},2019001:{red:[6,10,13,15,32,33],blue:12}},zhishu:[1,2,3,5,7,11,13,17,19,23,29,31],all:[1,2,3,4,5,6,"",7,8,9,10,11,"",12,13,14,15,16,17,"",18,19,20,21,22,"",23,24,25,26,27,28,"",29,30,31,32,33],nine:[1,4,7,10,"",13,16,19,22,"",25,28,31,"",2,5,8,11,"",14,17,20,"",23,26,29,32,"",3,6,9,"",12,15,18,21,"",24,27,30,33],number:2019032,max:2019033,min:2019005,not:[1,7,11,13,17,19,23,29,31],three:[3,6,9,12,15,18,21,24,27,30,33],two:[2,4,6,8,14,16,22,26,28,32],five:[5,10,20,25],head0:[1,2,3,4,5,6,7,8,9],head1:[10,11,12,13,14,15,16,17,18,19],head2:[20,21,22,23,24,25,26,27,28,29],head3:[30,31,32,33]}},methods:{prev:function(){console.log(this.number),this.number!=this.min&&this.number--},next:function(){this.number!=this.max&&this.number++},back:function(e){var s="";return this.items[this.number+1]?s=this.items[this.number].red.includes(e)&&this.items[this.number+1].red.includes(e)?"green":this.items[this.number].red.includes(e)?"f5e":this.items[this.number+1].red.includes(e)?"yellow":"":this.items[this.number].red.includes(e)&&(s="f5e"),s},hi:function(e){return this.items[this.number+1]?this.items[this.number+1].red.includes(e)&&this.zhishu.includes(e)?"red next":this.items[this.number+1].red.includes(e)?"next":this.zhishu.includes(e)?"red":"":this.zhishu.includes(e)?"red":""},top:function(e){return this.items[this.number+1]?this.zhishu.includes(e)&&this.items[this.number].red.includes(e)&&this.items[this.number+1].red.includes(e)?"red top-green":this.zhishu.includes(e)&&this.items[this.number].red.includes(e)?"red top":this.items[this.number].red.includes(e)&&this.items[this.number+1].red.includes(e)?"top-green":this.zhishu.includes(e)&&this.items[this.number+1].red.includes(e)?"red top-yellow":this.zhishu.includes(e)?"red":this.items[this.number].red.includes(e)?"top":this.items[this.number+1].red.includes(e)?"top-yellow":"":this.zhishu.includes(e)&&this.items[this.number].red.includes(e)?"red top":this.zhishu.includes(e)?"red":this.items[this.number].red.includes(e)?"top":""}},computed:{datas0:function(){return this.items[this.number].red},datas1:function(){for(var e=this.items[this.number].red,s=this.items[this.number-1].red,t=[].concat(s),i=0;i<6;i++)for(var r=0;r<6;r++)t[i]==e[r]&&(t[i]="");return t},datas2:function(){var e=this.items[this.number].red,s=this.items[this.number-1].red,t=this.items[this.number-2].red,i=[].concat(t);i.concat(t);for(var r=0;r<6;r++)for(var n=0;n<6;n++)i[r]==e[n]&&(i[r]="");for(var a=0;a<6;a++)for(var d=0;d<6;d++)i[a]==s[d]&&(i[a]="");return i},datas3:function(){for(var e=this.items[this.number].red,s=this.items[this.number-1].red,t=this.items[this.number-2].red,i=this.items[this.number-3].red,r=[].concat(i),n=0;n<6;n++)for(var a=0;a<6;a++)r[n]==e[a]&&(r[n]="");for(var d=0;d<6;d++)for(var u=0;u<6;u++)r[d]==s[u]&&(r[d]="");for(var c=0;c<6;c++)for(var l=0;l<6;l++)r[c]==t[l]&&(r[c]="");return r},datas4:function(){for(var e=this.items[this.number].red,s=this.items[this.number-1].red,t=this.items[this.number-2].red,i=this.items[this.number-3].red,r=this.items[this.number-4].red,n=[].concat(r),a=0;a<6;a++)for(var d=0;d<6;d++)n[a]==e[d]&&(n[a]="");for(var u=0;u<6;u++)for(var c=0;c<6;c++)n[u]==s[c]&&(n[u]="");for(var l=0;l<6;l++)for(var v=0;v<6;v++)n[l]==t[v]&&(n[l]="");for(var h=0;h<6;h++)for(var _=0;_<6;_++)n[h]==i[_]&&(n[h]="");return n},datas5:function(){for(var e=[],s=1;s<34;s++)this.datas0.includes(s)||this.datas1.includes(s)||this.datas2.includes(s)||this.datas3.includes(s)||this.datas4.includes(s)||e.push(s);return e},datas6:function(){for(var e=[],s=0;s<6;s++){var t=this.items[this.number].red[s]+this.items[this.number-1].red[s]+this.items[this.number-2].red[s]+this.items[this.number-3].red[s]+this.items[this.number-4].red[s];e.push(Math.round(t/5))}return console.log(e),e}}},c={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"t f1"},[t("span",{staticStyle:{width:"80px"}},[e._v(e._s(e.number))]),e._v(":"),e._l(e.items[e.number].red,function(s){return t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))])}),t("span",[e._v("/")]),t("span",{class:e.zhishu.includes(e.item)?"red":""},[e._v(e._s(e.items[e.number].blue))])],2),e._v(" "),t("div",{staticClass:"t"},[t("span"),e._v("冷号: "),e._l(e.datas5,function(s){return t("span",{class:e.hi(s)},[e._v(e._s(s))])}),t("span",[e._v("----"+e._s(e.datas5.length)+"个")])],2),e._v(" "),t("div",{staticClass:"t"},[t("span"),e._v("推号: "),e._l(e.datas4,function(s){return t("span",{class:e.hi(s)},[e._v(e._s(s))])})],2),e._v(" "),t("div",{staticClass:"t"},[t("span"),e._v("备号: "),e._l(e.datas3,function(s){return t("span",{class:e.hi(s)},[e._v(e._s(s))])})],2),e._v(" "),t("div",{staticClass:"t"},[t("span"),e._v("中号: "),e._l(e.datas2,function(s){return t("span",{class:e.hi(s)},[e._v(e._s(s))])})],2),e._v(" "),t("div",{staticClass:"t"},[t("span"),e._v("隔号: "),e._l(e.datas1,function(s){return t("span",{class:e.hi(s)},[e._v(e._s(s))])})],2),e._v(" "),t("div",{staticClass:"t"},[t("span"),e._v("复号: "),e._l(e.datas0,function(s){return t("span",{class:e.hi(s)},[e._v(e._s(s))])})],2),e._v(" "),t("div",{staticClass:"six",staticStyle:{"margin-top":"50px"}},e._l(e.all,function(s){return t("span",{class:e.top(s),style:s?"":"display:inline-block;width:4px;height:30px;background:#000"},[e._v(e._s(s))])}),0),e._v(" "),t("div",{staticClass:"six",staticStyle:{"margin-top":"50px"}},e._l(e.nine,function(s){return t("span",{class:e.top(s),style:s?"":"display:inline-block;width:4px;height:30px;background:#000"},[e._v(e._s(s))])}),0),e._v(" "),t("div",{staticStyle:{height:"180px","margin-top":"50px"}},[t("table",{staticStyle:{float:"left"}},[t("tr",[t("td",{class:e.back(1)},[e._v("1")]),e._v(" "),t("td",{class:e.back(2)},[e._v("2")]),e._v(" "),t("td",{class:e.back(3)},[e._v("3")]),e._v(" "),t("td",{class:e.back(4)},[e._v("4")]),e._v(" "),t("td",{class:e.back(5)},[e._v("5")]),e._v(" "),t("td",{class:e.back(6)},[e._v("6")])]),e._v(" "),t("tr",[t("td",{class:e.back(7)},[e._v("7")]),e._v(" "),t("td",{class:e.back(8)},[e._v("8")]),e._v(" "),t("td",{class:e.back(9)},[e._v("9")]),e._v(" "),t("td",{class:e.back(10)},[e._v("10")]),e._v(" "),t("td",{class:e.back(11)},[e._v("11")]),e._v(" "),t("td",{class:e.back(12)},[e._v("12")])]),e._v(" "),t("tr",[t("td",{class:e.back(13)},[e._v("13")]),e._v(" "),t("td",{class:e.back(14)},[e._v("14")]),e._v(" "),t("td",{class:e.back(15)},[e._v("15")]),e._v(" "),t("td",{class:e.back(16)},[e._v("16")]),e._v(" "),t("td",{class:e.back(17)},[e._v("17")]),e._v(" "),t("td",{class:e.back(18)},[e._v("18")])]),e._v(" "),t("tr",[t("td",{class:e.back(19)},[e._v("19")]),e._v(" "),t("td",{class:e.back(20)},[e._v("20")]),e._v(" "),t("td",{class:e.back(21)},[e._v("21")]),e._v(" "),t("td",{class:e.back(22)},[e._v("22")]),e._v(" "),t("td",{class:e.back(23)},[e._v("23")]),e._v(" "),t("td",{class:e.back(24)},[e._v("24")])]),e._v(" "),t("tr",[t("td",{class:e.back(25)},[e._v("25")]),e._v(" "),t("td",{class:e.back(26)},[e._v("26")]),e._v(" "),t("td",{class:e.back(27)},[e._v("27")]),e._v(" "),t("td",{class:e.back(28)},[e._v("28")]),e._v(" "),t("td",{class:e.back(29)},[e._v("29")]),e._v(" "),t("td",{class:e.back(30)},[e._v("30")])]),e._v(" "),t("tr",[t("td",{class:e.back(31)},[e._v("31")]),e._v(" "),t("td",{class:e.back(32)},[e._v("32")]),e._v(" "),t("td",{class:e.back(33)},[e._v("33")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")])]),e._v(" "),t("table",{staticStyle:{float:"left","margin-left":"200px"}},[t("tr",[t("td",{class:e.back(31)},[e._v("31")]),e._v(" "),t("td",{class:e.back(32)},[e._v("32")]),e._v(" "),t("td",{class:e.back(33)},[e._v("33")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",{class:e.back(30)},[e._v("30")]),e._v(" "),t("td",{class:e.back(13)},[e._v("13")]),e._v(" "),t("td",{class:e.back(14)},[e._v("14")]),e._v(" "),t("td",{class:e.back(15)},[e._v("15")]),e._v(" "),t("td",{class:e.back(16)},[e._v("16")]),e._v(" "),t("td",{class:e.back(17)},[e._v("17")])]),e._v(" "),t("tr",[t("td",{class:e.back(29)},[e._v("29")]),e._v(" "),t("td",{class:e.back(12)},[e._v("12")]),e._v(" "),t("td",{class:e.back(3)},[e._v("3")]),e._v(" "),t("td",{class:e.back(4)},[e._v("4")]),e._v(" "),t("td",{class:e.back(5)},[e._v("5")]),e._v(" "),t("td",{class:e.back(18)},[e._v("18")])]),e._v(" "),t("tr",[t("td",{class:e.back(28)},[e._v("28")]),e._v(" "),t("td",{class:e.back(11)},[e._v("11")]),e._v(" "),t("td",{class:e.back(2)},[e._v("2")]),e._v(" "),t("td",{class:e.back(1)},[e._v("1")]),e._v(" "),t("td",{class:e.back(6)},[e._v("6")]),e._v(" "),t("td",{class:e.back(19)},[e._v("19")])]),e._v(" "),t("tr",[t("td",{class:e.back(27)},[e._v("27")]),e._v(" "),t("td",{class:e.back(10)},[e._v("10")]),e._v(" "),t("td",{class:e.back(9)},[e._v("9")]),e._v(" "),t("td",{class:e.back(8)},[e._v("8")]),e._v(" "),t("td",{class:e.back(7)},[e._v("7")]),e._v(" "),t("td",{class:e.back(20)},[e._v("20")])]),e._v(" "),t("tr",[t("td",{class:e.back(26)},[e._v("26")]),e._v(" "),t("td",{class:e.back(25)},[e._v("25")]),e._v(" "),t("td",{class:e.back(24)},[e._v("24")]),e._v(" "),t("td",{class:e.back(23)},[e._v("23")]),e._v(" "),t("td",{class:e.back(22)},[e._v("22")]),e._v(" "),t("td",{class:e.back(21)},[e._v("21")])])])]),e._v(" "),t("div",{staticStyle:{"margin-top":"50px"}},[t("div",{staticClass:"t"},[e._v("非倍数"),e._l(e.items[e.number].red,function(s){return e.not.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2),e._v(" "),t("div",{staticClass:"t"},[e._v("三倍数"),e._l(e.items[e.number].red,function(s){return e.three.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2),e._v(" "),t("div",{staticClass:"t"},[e._v("二倍数"),e._l(e.items[e.number].red,function(s){return e.two.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2),e._v(" "),t("div",{staticClass:"t"},[e._v("五倍数"),e._l(e.items[e.number].red,function(s){return e.five.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2)]),e._v(" "),t("div",{staticStyle:{"margin-top":"20px"}},[t("div",{staticClass:"t"},[e._v("0字头"),e._l(e.items[e.number].red,function(s){return e.head0.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2),e._v(" "),t("div",{staticClass:"t"},[e._v("1字头"),e._l(e.items[e.number].red,function(s){return e.head1.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2),e._v(" "),t("div",{staticClass:"t"},[e._v("2字头"),e._l(e.items[e.number].red,function(s){return e.head2.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2),e._v(" "),t("div",{staticClass:"t"},[e._v("3字头"),e._l(e.items[e.number].red,function(s){return e.head3.includes(s)?t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))]):e._e()})],2)]),e._v(" "),t("div",[t("div",{staticClass:"t"},[e._v("五期均值 "),e._l(e.datas6,function(s){return t("span",{class:e.zhishu.includes(s)?"red":""},[e._v(e._s(s))])})],2)]),e._v(" "),t("div",{staticStyle:{"margin-top":"50px"}},[t("button",{on:{click:e.prev}},[e._v("上一期")]),e._v(" "),t("button",{on:{click:e.next}},[e._v("下一期")])])])},staticRenderFns:[]};t("VU/8")(u,c,!1,function(e){t("NEUO")},null,null).exports;var l={name:"swiper",data:function(){return{navList:[{name:"热门答疑"},{name:"北清状元"}],nowIndex:0}},components:{},mounted:function(){var e=this;e.mySwiper=new Swiper(".swiper-container",{initialSlide:0,autoplay:!1,keyboardControl:!0,autoHeight:!0,observer:!0,observeParents:!0,onSlideChangeStart:function(){e.nowIndex=e.mySwiper.activeIndex}})},methods:{tabClick:function(e){this.nowIndex=e,this.mySwiper.slideTo(e,1e3,!1)}},created:function(e){}},v={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"hello"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{name:"email",type:"text"}}),e._v(" "),t("span",[e._v(e._s(e.errors.first("email")))]),e._v(" "),t("swipe",{staticClass:"my-swipe"},[t("swipe-item",{staticClass:"slide1"},[e._v("123")]),e._v(" "),t("swipe-item",{staticClass:"slide2"},[e._v("456")]),e._v(" "),t("swipe-item",{staticClass:"slide3"},[e._v("789")])],1),e._v(" "),t("div",[t("div",{staticClass:"navlist"},[t("ul",e._l(e.navList,function(s,i){return t("li",{staticClass:"navli",class:{activeT:e.nowIndex===i},on:{click:function(s){e.tabClick(i)}}},[t("i",[e._v(e._s(s.name))])])}),0)]),e._v(" "),t("div",{staticClass:"swiper-container swiper_con"},[t("div",{staticClass:"swiper-wrapper"},[t("div",{ref:"viewBox",staticClass:"swiper-slide"},[e._v("1111\n        ")]),e._v(" "),t("div",{staticClass:"swiper-slide"},[e._v("2222\n        ")])])])])],1)},staticRenderFns:[]};var h=t("VU/8")(l,v,!1,function(e){t("PQaS")},"data-v-5cbb9812",null).exports,_=t("bHfy"),o=t.n(_),m={data:function(){return{}},mounted:function(){var e=this;this.$nextTick(function(){new o.a(e.$refs.wrap,{scrollX:!0,freeScroll:!0})},200)}},b={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("div",{ref:"wrap",attrs:{id:"wrapper"}},[this._m(0)])])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",{staticClass:"clear lines"},[t("li",[e._v(" 1233")]),e._v(" "),t("li",[e._v(" 1233")]),e._v(" "),t("li",[e._v(" 1233")]),e._v(" "),t("li",[e._v(" 1233")]),e._v(" "),t("li",[e._v(" 1233")]),e._v(" "),t("li",[e._v(" 1233")])])}]};var f=t("VU/8")(m,b,!1,function(e){t("W05Y")},"data-v-ebae3c2a",null).exports,p=t("BO1k"),k=t.n(p),w=t("woOf"),x=t.n(w),C=t("Gu7T"),z=t.n(C),y=t("Xxa5"),g=t.n(y),S=t("Zzip"),E=t.n(S),U=t("NnIC"),$=t.n(U),I={data:function(){return{}},mounted:function(){console.log(!1),console.log(Math.abs(.1+.2-.3)<=$.a);var e=new Object;e[E.a]=function(){var e=0;return{next:function(){return{value:e++,done:e>10}}}};var s=!0,t=!1,i=void 0;try{for(var r,n=k()(e);!(s=(r=n.next()).done);s=!0){var a=r.value;console.log(a)}}catch(e){t=!0,i=e}finally{try{!s&&n.return&&n.return()}finally{if(t)throw i}}var d={};d[E.a]=g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,1;case 2:return e.next=4,2;case 4:return e.next=6,3;case 6:return e.next=8,5;case 8:return e.next=10,666;case 10:case"end":return e.stop()}},e,this)}),console.log([].concat(z()(d))),console.log(x()([],d))}},N={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var O=t("VU/8")(I,N,!1,function(e){t("15Bb")},"data-v-18853b70",null).exports;i.a.use(d.a);var T=new d.a({routes:[{path:"/",name:"double",component:O},{path:"/test",name:"test",component:h},{path:"/iscroll",name:"iscroll",component:f},{path:"/relearn/one",name:"one",component:O}]}),F=t("sUu7"),R=t("+8+3"),V=t.n(R),A=t("GKTo");i.a.use(F.b),i.a.component("swipe",A.Swipe),i.a.component("swipe-item",A.SwipeItem),F.a.localize("ar",V.a),i.a.use(F.b,{}),i.a.config.productionTip=!1,new i.a({el:"#app",router:T,components:{App:a},template:"<App/>"})},PQaS:function(e,s){},W05Y:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.97c5afa39bb239636a2f.js.map