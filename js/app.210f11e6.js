(function(t){function e(e){for(var a,o,s=e[0],i=e[1],u=e[2],l=0,b=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);p&&p(e);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/password_generator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"1ca2":function(t,e,n){},"200d":function(t,e,n){},"2c73":function(t,e,n){},3228:function(t,e,n){"use strict";n("200d")},4959:function(t,e,n){"use strict";n("c795")},"4b7e":function(t,e,n){"use strict";n("1ca2")},"66c7":function(t,e,n){"use strict";n("c543")},"73e6":function(t,e,n){},"85ec":function(t,e,n){},"89ba":function(t,e,n){"use strict";n("73e6")},"8a9e":function(t,e,n){"use strict";n("2c73")},c543:function(t,e,n){},c795:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("3c43"),c=n("064b"),o=n("0a59"),s=n("f2d9"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],p=n("d4ec"),l=n("262e"),b=n("2caf"),h=n("9ab4"),d=n("1b40"),f=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(d["e"]);f=Object(h["a"])([d["a"]],f);var v=f,y=v,g=(n("034f"),n("2877")),O=Object(g["a"])(y,i,u,!1,null,null,null),j=O.exports,m=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"fillHeight"},[n("div",{staticClass:"centered"},[n("CopyableTextInput",{attrs:{value:t.App.password},on:{input:t.App.setPassword}}),n("ImgButton",{staticClass:"generateButton",on:{click:t.generatePassword}},[n("LockOpenOutline"),n("span",{staticClass:"tooltip"},[t._v("Generate new password")])],1),n("ImgButton",{staticClass:"settingsButton",on:{click:t.goToSettings}},[n("CogOutline"),n("span",{staticClass:"tooltip"},[t._v("Settings")])],1)],1)])},k=[],A=n("1da1"),C=n("bee2"),S=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyableTextInputComponent"},[n("input",{staticClass:"input",attrs:{type:"text"},domProps:{value:t.value},on:{input:t.onInput}}),n("button",{staticClass:"copyButton",attrs:{disabled:t.copyDisabled},on:{click:function(e){return t.clipboardCopy(t.value)}}},[n("ContentCopy"),n("span",{staticClass:"tooltip"},[t._v("Copy")])],1)])}),x=[],_=n("6fc5"),L=n("2f62"),P=n("0e44"),I=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.lowercaseAlphabet=!0,t.uppercaseAlphabet=!0,t.digitsAlphabet=!0,t.symbolsAlphabet=!1,t.passwordLength=16,t}return Object(C["a"])(n,[{key:"switchLowercaseAlphabet",value:function(t){this.lowercaseAlphabet=t}},{key:"switchUppercaseAlphabet",value:function(t){this.uppercaseAlphabet=t}},{key:"switchDigitsAlphabet",value:function(t){this.digitsAlphabet=t}},{key:"switchSymbolsAlphabet",value:function(t){this.symbolsAlphabet=t}},{key:"setPasswordLength",value:function(t){this.passwordLength=t}}]),n}(_["c"]);Object(h["a"])([_["b"]],I.prototype,"switchLowercaseAlphabet",null),Object(h["a"])([_["b"]],I.prototype,"switchUppercaseAlphabet",null),Object(h["a"])([_["b"]],I.prototype,"switchDigitsAlphabet",null),Object(h["a"])([_["b"]],I.prototype,"switchSymbolsAlphabet",null),Object(h["a"])([_["b"]],I.prototype,"setPasswordLength",null),I=Object(h["a"])([Object(_["a"])({name:"settings"})],I);var B=I,$=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.password="",t}return Object(C["a"])(n,[{key:"setPassword",value:function(t){this.password=t}}]),n}(_["c"]);Object(h["a"])([_["b"]],$.prototype,"setPassword",null),$=Object(h["a"])([Object(_["a"])({name:"app"})],$);var E=$;a["a"].use(L["a"]);var R=new L["a"].Store({modules:{app:E,settings:B},plugins:[Object(P["a"])({paths:["settings.lowercaseAlphabet","settings.uppercaseAlphabet","settings.digitsAlphabet","settings.symbolsAlphabet","settings.passwordLength"]})]}),U=Object(_["d"])(E,R),D=Object(_["d"])(B,R),T=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"App",get:function(){return U}},{key:"Settings",get:function(){return D}}]),n}(d["e"]);T=Object(h["a"])([d["a"]],T);var M=T,N=0,G=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"generateId",value:function(){return N++}}]),n}(d["e"]);G=Object(h["a"])([d["a"]],G);var z=G,q=function(){function t(){Object(p["a"])(this,t)}return Object(C["a"])(t,[{key:"RequestPermission",value:function(){return navigator.permissions.query({name:"clipboard-write"}).then((function(t){return"granted"===t.state||"prompt"===t.state})).catch((function(t){return!1}))}},{key:"Copy",value:function(t){return navigator.clipboard.writeText(t).then((function(t){return!0})).catch((function(t){return!1}))}}]),t}(),H=new q,J=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.copyDisabled=!0,t}return Object(C["a"])(n,[{key:"created",value:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H.RequestPermission();case 2:this.copyDisabled=!t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"clipboardCopyEnabled",get:function(){return!this.copyDisabled}},{key:"clipboardCopy",value:function(t){return H.Copy(t)}}]),n}(d["e"]);J=Object(h["a"])([d["a"]],J);var K=J,V=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"onInput",value:function(t){var e;this.$emit("input",null===(e=t.target)||void 0===e?void 0:e.value)}}]),n}(Object(d["b"])(K));Object(h["a"])([Object(d["c"])("input")],V.prototype,"value",void 0),V=Object(h["a"])([d["a"]],V);var F=V,Q=F,W=(n("3228"),Object(g["a"])(Q,S,x,!1,null,"75d3085d",null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g({staticClass:"imgButtonComponent",attrs:{disabled:t.disabled,type:"button"}},t.$listeners),[t._t("default")],2)},Z=[],tt=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return n}(d["e"]);Object(h["a"])([Object(d["d"])({type:Boolean,default:!1})],tt.prototype,"disabled",void 0),tt=Object(h["a"])([d["a"]],tt);var et=tt,nt=et,at=(n("4b7e"),Object(g["a"])(nt,Y,Z,!1,null,"64cb2a78",null)),rt=at.exports,ct=n("2909"),ot=(n("d3b7"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("6062"),n("3ca3"),n("ddb0"),n("a15b"),n("159b"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;Object(p["a"])(this,t),this.poolSize=e,this.pool=new Uint8Array(this.poolSize),this.nextRandom=this.poolSize}return Object(C["a"])(t,[{key:"generate",value:function(t){if(0===t.alphabet.length)return"";for(var e="",n=0;n<t.length;++n)e+=t.alphabet[this.generateUntilMax(t.alphabet.length)];return e}},{key:"generateRandomU8",value:function(){return this.nextRandom>=this.poolSize&&(window.crypto.getRandomValues(this.pool),this.nextRandom=0),this.pool[this.nextRandom++]}},{key:"generateUntilMax",value:function(t){var e=0;while((e=this.generateRandomU8())>=256-256%t);return e%t}}]),t}()),st=function(){function t(){Object(p["a"])(this,t),this.length=16,this.alphabet=new Set}return Object(C["a"])(t,[{key:"addLowercase",value:function(){return this.populateAlphabet(t.lowercase)}},{key:"addUppercase",value:function(){return this.populateAlphabet(t.uppercase)}},{key:"addDigits",value:function(){return this.populateAlphabet(t.numbers)}},{key:"addSymbols",value:function(){return this.populateAlphabet(t.symbols)}},{key:"addAlphabet",value:function(t){return this.populateAlphabet(t)}},{key:"setLength",value:function(t){return this.length=t,this}},{key:"options",value:function(){return{length:this.length,alphabet:Object(ct["a"])(this.alphabet).join("")}}},{key:"forEach",value:function(t,e){for(var n=0;n<t.length;++n)e(t[n])}},{key:"populateAlphabet",value:function(t){var e=this;return this.forEach(t,(function(t){return e.alphabet.add(t)})),this}}]),t}();st.lowercase="abcdefghijklmnopqrstuvwxyz",st.uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ",st.numbers="0123456789",st.symbols='!@#$%^&*()+_-=}{[]|:;"/?.><,`~';var it=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(p["a"])(this,n),t=e.apply(this,arguments),t.onShortcuts=function(e){"Enter"===e.code&&t.generatePassword(),!e.ctrlKey||"KeyC"!==e.code&&"Insert"!==e.code||t.clipboardCopy(t.password())},t}return Object(C["a"])(n,[{key:"created",value:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.gen=new ot;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){document.addEventListener("keydown",this.onShortcuts)}},{key:"destroyed",value:function(){document.removeEventListener("keydown",this.onShortcuts)}},{key:"goToSettings",value:function(){this.$router.push({name:"Settings"})}},{key:"generatePassword",value:function(){this.App.setPassword(this.gen.generate(this.generatorOptions))}},{key:"generatorOptions",get:function(){var t=new st;return this.Settings.lowercaseAlphabet&&t.addLowercase(),this.Settings.uppercaseAlphabet&&t.addUppercase(),this.Settings.digitsAlphabet&&t.addDigits(),this.Settings.symbolsAlphabet&&t.addSymbols(),t.setLength(this.Settings.passwordLength),t.options()}},{key:"password",value:function(){return this.App.password}}]),n}(Object(d["b"])(K,M));it=Object(h["a"])([Object(d["a"])({components:{CopyableTextInput:X,ImgButton:rt}})],it);var ut=it,pt=ut,lt=(n("66c7"),Object(g["a"])(pt,w,k,!1,null,"77f8464e",null)),bt=lt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"fillHeight"},[n("form",{staticClass:"settings"},[n("CheckBox",{attrs:{checked:t.Settings.lowercaseAlphabet,caption:"lowercase"},on:{checked:t.Settings.switchLowercaseAlphabet}}),n("CheckBox",{attrs:{checked:t.Settings.uppercaseAlphabet,caption:"uppercase"},on:{checked:t.Settings.switchUppercaseAlphabet}}),n("CheckBox",{attrs:{checked:t.Settings.digitsAlphabet,caption:"digits"},on:{checked:t.Settings.switchDigitsAlphabet}}),n("CheckBox",{attrs:{checked:t.Settings.symbolsAlphabet,caption:"symbols"},on:{checked:t.Settings.switchSymbolsAlphabet}}),n("div",{staticClass:"passwordLength"},[n("NumberInput",{staticClass:"passwordLengthInput",attrs:{min:3,max:2048,value:t.Settings.passwordLength},on:{input:t.Settings.setPasswordLength}}),n("span",[t._v("length")])],1),n("ImgButton",{staticClass:"backButton",on:{click:t.gotoGenerator}},[n("ArrowLeftCircleOutline")],1)],1)])},dt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{staticClass:"checkbox",attrs:{id:t.id,type:"checkbox"},domProps:{checked:t.checked},on:{input:t.onInput}}),n("label",{staticClass:"checkboxLabel",attrs:{for:t.id}},[t._v(t._s(t.caption))])])},vt=[],yt=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"created",value:function(){this.id="checkbox_".concat(this.generateId())}},{key:"onInput",value:function(t){var e;this.$emit("checked",null===(e=t.target)||void 0===e?void 0:e.checked)}}]),n}(Object(d["b"])(z));Object(h["a"])([Object(d["c"])("checked")],yt.prototype,"checked",void 0),Object(h["a"])([Object(d["d"])({type:String})],yt.prototype,"caption",void 0),yt=Object(h["a"])([d["a"]],yt);var gt=yt,Ot=gt,jt=(n("8a9e"),Object(g["a"])(Ot,ft,vt,!1,null,"2fe428d8",null)),mt=jt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{min:t.min,max:t.max,type:"number"},domProps:{value:t.value},on:{input:t.onInput}})},kt=[],At=(n("a9e3"),function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"onInput",value:function(t){var e;this.$emit("input",null===(e=t.target)||void 0===e?void 0:e.valueAsNumber)}}]),n}(d["e"]));Object(h["a"])([Object(d["c"])("input",{type:Number})],At.prototype,"value",void 0),Object(h["a"])([Object(d["d"])({type:Number,default:0})],At.prototype,"min",void 0),Object(h["a"])([Object(d["d"])({type:Number,default:100})],At.prototype,"max",void 0),At=Object(h["a"])([d["a"]],At);var Ct=At,St=Ct,xt=(n("4959"),Object(g["a"])(St,wt,kt,!1,null,"0699382e",null)),_t=xt.exports,Lt=function(t){Object(l["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(p["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"gotoGenerator",value:function(){this.$router.push({name:"Generator"})}}]),n}(Object(d["b"])(M));Lt=Object(h["a"])([Object(d["a"])({components:{CheckBox:mt,ImgButton:rt,NumberInput:_t}})],Lt);var Pt=Lt,It=Pt,Bt=(n("89ba"),Object(g["a"])(It,ht,dt,!1,null,"0ce4b954",null)),$t=Bt.exports;a["a"].use(m["a"]);var Et=[{path:"/",name:"Generator",component:bt},{path:"/settings",name:"Settings",component:$t}],Rt=new m["a"]({mode:"history",base:"/password_generator/",routes:Et}),Ut=Rt;a["a"].config.productionTip=!1,a["a"].component("ContentCopy",r["a"]),a["a"].component("LockOpenOutline",c["a"]),a["a"].component("CogOutline",o["a"]),a["a"].component("ArrowLeftCircleOutline",s["a"]),new a["a"]({router:Ut,store:R,render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.210f11e6.js.map