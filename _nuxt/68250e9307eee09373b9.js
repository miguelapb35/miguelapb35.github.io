(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},163:function(e,t,r){e.exports=r.p+"img/cadaf6d.jpg"},164:function(e,t,r){var content=r(178);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("1a0cff3c",content,!0,{sourceMap:!1})},177:function(e,t,r){"use strict";var n=r(164);r.n(n).a},178:function(e,t,r){t=e.exports=r(15)(!1);var n=r(159)(r(163));t.push([e.i,"body[data-v-6d1006f3],html[data-v-6d1006f3]{font-family:Open Sans,sans-serif;font-size:14px;background:#eee}.navbar.is-white[data-v-6d1006f3]{background:#f0f2f4}.navbar-brand .brand-text[data-v-6d1006f3]{font-size:1.11rem;font-weight:700}.lista[data-v-6d1006f3]{font-size:2rem;margin-top:1rem}.hero-body[data-v-6d1006f3]{background-image:url("+n+");background-position:50%;background-size:cover;background-repeat:no-repeat;height:500px}.white[data-v-6d1006f3]{color:#ffebcd}.card article[data-v-6d1006f3]{border-radius:6px;box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.articles[data-v-6d1006f3]{margin:-200px 0 5rem}.articles .content p[data-v-6d1006f3]{line-height:1.9;margin:15px 0}.author-image[data-v-6d1006f3]{position:absolute;top:-30px;left:50%;width:60px;height:60px;margin-left:-30px;border:3px solid #ccc;border-radius:50%}.media-center[data-v-6d1006f3]{display:block;margin-bottom:1rem}.article[data-v-6d1006f3],.promo-block[data-v-6d1006f3]{margin-top:6rem}div.column.is-8[data-v-6d1006f3]:first-child{padding-top:0;margin-top:0}.article-subtitle[data-v-6d1006f3]{color:#909aa0;margin-bottom:3rem}.article-body[data-v-6d1006f3]{line-height:1.4;margin:0}.promo-block .container[data-v-6d1006f3]{margin:1rem 5rem}.title[data-v-6d1006f3]{line-height:unset}input[data-v-6d1006f3]{width:50%}@media (max-width:768px){.title[data-v-6d1006f3]{line-height:unset}.lista[data-v-6d1006f3]{font-size:1.5rem}input[data-v-6d1006f3]{width:50%}}@media (max-width:500px){.title[data-v-6d1006f3]{line-height:unset}.lista[data-v-6d1006f3]{font-size:1rem}input[data-v-6d1006f3]{width:60%}}",""])},182:function(e,t,r){"use strict";r.r(t);var n={head:function(){return{title:"Visos Beauty Salon",meta:[{hid:"description",name:"description",content:"The best place for haircuts, Mens hair cut, Mens hair cut, Women hair cut, Women color, Women high light, Face Waxing of eye brows, Make up, Bikini, Legs, Eyelash, Eye brows, lip"}]}},components:{},data:function(){return{query:"",list:[{Service:"Kids hair cut",Price:"$ 12 and up"},{Service:"Mens hair cut",Price:"$ 14 and up"},{Service:"Women hair cut",Price:"$ 16 and up"},{Service:"Women color",Price:"$ 58 and up"},{Service:"Women high light",Price:"$ 55 and up"},{Service:"Face Waxing of eye brows",Price:"$ 10"},{Service:"Lip",Price:"$ 8"},{Service:"Eye brows & lip",Price:"$ 15"},{Service:"Total face",Price:"$ 45"},{Service:"Body waxing : Armpits",Price:"$ 20 and up"},{Service:"Bikini",Price:"$ 20 and up"},{Service:"Legs",Price:"$ 50"},{Service:"Half Legs",Price:"$ 25"},{Service:"Feet",Price:"$ 15"},{Service:"Make up",Price:"$ 30"},{Service:"Eyelash",Price:"$ 15"}]}},methods:{beforeEnter:function(e){e.style.opacity=0,e.style.height=0},enter:function(e,t){var r=150*e.dataset.index;setTimeout((function(){Velocity(e,{opacity:1,height:"1.6em"},{complete:t})}),r)},leave:function(e,t){var r=150*e.dataset.index;setTimeout((function(){Velocity(e,{opacity:0,height:0},{complete:t})}),r)}},computed:{computedList:function(){var e=this;return this.list.filter((function(t){return-1!==t.Service.toLowerCase().indexOf(e.query.toLowerCase())}))}}},c=(r(177),r(12)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"container"},[r("section",{staticClass:"articles"},[r("div",{staticClass:"column is-10 is-offset-1"},[r("div",{staticClass:"card article"},[r("div",{staticClass:"card-content"},[e._m(1),e._v(" "),r("div",{staticClass:"has-text-centered",attrs:{id:"staggered-list-demo"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"input is-rounded is-primary is-small",attrs:{placeholder:"Type service here..."},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),r("transition-group",{attrs:{name:"staggered-fade",tag:"ul",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter,leave:e.leave}},e._l(e.computedList,(function(t,n){return r("li",{key:t.Service,staticClass:"lista",attrs:{"data-index":n}},[e._v(e._s(t.Service)+" "+e._s(t.Price))])})),0)],1)])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"is-medium is-bold"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container has-text-centered white"},[t("h1",{staticClass:"title title is-1 white"},[this._v("Visos Beauty Salon")]),this._v(" "),t("h2",{staticClass:"subtitle has-text-white"},[this._v("Hair cuts, color, wax & more ")]),this._v(" "),t("h3",[this._v("15433A E. Hampden Av. Aurora, Co, 80013")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"media"},[t("div",{staticClass:"media-content title title is-3 has-text-centered"},[this._v("\n                            Our Services\n                          ")])])}],!1,null,"6d1006f3",null);t.default=component.exports}}]);