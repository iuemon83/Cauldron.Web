_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(c.default.useContext(o.AmpStateContext))};var r,c=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,c=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||c&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("nKUr");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("rePB"),a=n("g4pe"),u=n.n(a),l=n("vRNQ"),s=n.n(l),d=n("q1tI"),j=["creature","artifact","sorcery"],b=["cover","stealth"],f=["none","cardPool","youField","opponentField"],p=["all","random","choose"],O=function(){return{how:p[0],numPicks:0,cardCondition:void 0,playerCondition:void 0}},h=["none","all","others"],v=function(){return{context:h[0],costCondition:void 0,nameCondition:void 0,powerCondition:void 0,toughnessCondition:void 0,typeCondition:void 0,zoneCondition:void 0}},g=["none","all"],y=["none","all","opponent"],x=function(){return{context:g[0],type:y[0]}},m=function(){return{value:[j[0]],not:!1}},C=["=",">","<"],w=function(){return{value:0,compare:C[0],not:!1}},P=["=","like"],k=function(){return{value:{pureValue:"",textValueCalculator:void 0},compare:P[0],not:!1}},_=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"\u5024"}),Object(r.jsx)("select",{value:j.indexOf(t.value[0]),onChange:function(e){return n({value:[j[Number(e.target.value)]]})},children:j.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"not"}),Object(r.jsx)("input",{type:"checkbox",checked:t.not,onChange:function(e){return n({not:e.target.checked})}})]})]})},S=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"\u5024"}),Object(r.jsx)("input",{type:"number",value:t.value,onChange:function(e){return n({value:Number(e.target.value)})}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"\u6bd4\u8f03\u65b9\u6cd5"}),Object(r.jsx)("select",{value:C.indexOf(t.compare),onChange:function(e){return n({compare:C[Number(e.target.value)]})},children:C.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"not"}),Object(r.jsx)("input",{type:"checkbox",checked:t.not,onChange:function(e){return n({not:e.target.checked})}})]})]})},D=["cardName"];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{children:["\u52d5\u7684?:",Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.textValueCalculator,onChange:function(e){var t=e.target.checked?{type:D[0],cardsChoice:O()}:void 0;n({textValueCalculator:t})}})]}),Object(r.jsx)("div",{children:t.textValueCalculator?t.textValueCalculator?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{children:["value:",Object(r.jsx)("select",{value:D.indexOf(t.textValueCalculator.type),onChange:function(e){if(t.textValueCalculator){var r=N(N({},t.textValueCalculator),{},{type:D[Number(e.target.value)]});n({textValueCalculator:r})}},children:D.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]}),Object(r.jsx)(Z,{detail:t.textValueCalculator.cardsChoice,onChanged:function(e){if(t.textValueCalculator){var r,c=N(N({},null!==(r=t.textValueCalculator.cardsChoice)&&void 0!==r?r:O()),e),o=N(N({},t.textValueCalculator),{},{cardChoice:c});n({textValueCalculator:o})}}})]}):null:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("label",{children:["\u5024:",Object(r.jsx)("input",{type:"text",value:t.pureValue,onChange:function(e){return n({pureValue:e.target.value})}})]})})})]})};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(A,{detail:t.value,onChanged:function(e){return n({value:T(T({},t.value),e)})}}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"\u6bd4\u8f03\u65b9\u6cd5"}),Object(r.jsx)("select",{value:P.indexOf(t.compare),onChange:function(e){return n({compare:P[Number(e.target.value)]})},children:P.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"not"}),Object(r.jsx)("input",{type:"checkbox",checked:t.not,onChange:function(e){return n({not:e.target.checked})}})]})]})};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(e){var t=e.detail,n=e.onChanged,c=Object(d.useState)(!1),i=c[0],a=c[1],u=function(e){var r=Number(e.currentTarget.value);if(e.currentTarget.checked){var c=[].concat(o(t.pureValue),[f[r]]);n({pureValue:c})}else{var i=t.pureValue.filter((function(e){return e!==f[r]}));n({pureValue:i})}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{children:["\u52d5\u7684?:",Object(r.jsx)("input",{type:"checkbox",checked:i,onChange:function(e){var t=e.target.checked?O():void 0;n({choice:t}),a(e.target.checked)}})]}),Object(r.jsx)("div",{children:t.choice?t.choice?Object(r.jsx)(Z,{detail:t.choice,onChanged:function(e){var r;n({choice:V(V({},null!==(r=t.choice)&&void 0!==r?r:O()),e)})}}):null:Object(r.jsxs)(r.Fragment,{children:["\u5024:",f.map((function(e,n){return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",readOnly:!0,value:n,checked:-1!==t.pureValue.indexOf(e),onClick:u}),e]},n)}))]})})]})};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["not?:",Object(r.jsx)("input",{type:"checkbox",checked:t.not,onChange:function(e){return n({not:e.target.checked})}})]})}),Object(r.jsx)(H,{detail:t.value,onChanged:function(e){return n({value:R(R({},t.value),e)})}})]})};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"condition context:"}),Object(r.jsx)("select",{value:h.indexOf(t.context),onChange:function(e){return n({context:h[Number(e.target.value)]})},children:h.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.costCondition,onChange:function(e){var t=e.target.checked?w():void 0;n({costCondition:t})}}),"\u30b3\u30b9\u30c8\u306e\u6761\u4ef6"]})}),t.costCondition&&Object(r.jsx)(S,{detail:t.costCondition,onChanged:function(e){var r;return n({costCondition:L(L({},null!==(r=t.costCondition)&&void 0!==r?r:w()),e)})}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.nameCondition,onChange:function(e){var t=e.target.checked?k():void 0;n({nameCondition:t})}}),"\u540d\u524d\u306e\u6761\u4ef6"]})}),t.nameCondition&&Object(r.jsx)(F,{detail:t.nameCondition,onChanged:function(e){var r;return n({nameCondition:L(L({},null!==(r=t.nameCondition)&&void 0!==r?r:k()),e)})}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.powerCondition,onChange:function(e){var t=e.target.checked?w():void 0;n({powerCondition:t})}}),"\u30d1\u30ef\u30fc\u306e\u6761\u4ef6"]})}),t.powerCondition&&Object(r.jsx)(S,{detail:t.powerCondition,onChanged:function(e){var r;return n({powerCondition:L(L({},null!==(r=t.powerCondition)&&void 0!==r?r:w()),e)})}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.toughnessCondition,onChange:function(e){var t=e.target.checked?w():void 0;n({toughnessCondition:t})}}),"\u30bf\u30d5\u30cd\u30b9\u306e\u6761\u4ef6"]})}),t.toughnessCondition&&Object(r.jsx)(S,{detail:t.toughnessCondition,onChanged:function(e){var r;return n({toughnessCondition:L(L({},null!==(r=t.toughnessCondition)&&void 0!==r?r:w()),e)})}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.typeCondition,onChange:function(e){var t=e.target.checked?m():void 0;n({typeCondition:t})}}),"\u30ab\u30fc\u30c9\u30bf\u30a4\u30d7\u306e\u6761\u4ef6"]})}),t.typeCondition&&Object(r.jsx)("section",{children:Object(r.jsx)(_,{detail:t.typeCondition,onChanged:function(e){var r;return n({typeCondition:L(L({},null!==(r=t.typeCondition)&&void 0!==r?r:m()),e)})}})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.zoneCondition,onChange:function(e){var t=e.target.checked?{value:{choice:void 0,pureValue:[]},not:!1}:void 0;n({zoneCondition:t})}}),"\u9818\u57df\u306e\u6761\u4ef6"]})}),t.zoneCondition&&Object(r.jsx)("section",{children:Object(r.jsx)(W,{detail:t.zoneCondition,onChanged:function(e){var r;n({zoneCondition:L(L({},null!==(r=t.zoneCondition)&&void 0!==r?r:{value:{choice:void 0,pureValue:[]},not:!1}),e)})}})})]})]})},U=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["condition context:",Object(r.jsx)("select",{value:g.indexOf(t.context),onChange:function(e){return n({context:g[Number(e.target.value)]})},children:g.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["condition type:",Object(r.jsx)("select",{value:y.indexOf(t.type),onChange:function(e){return n({type:y[Number(e.target.value)]})},children:y.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]})})]})};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u9078\u629e\u65b9\u5f0f:",Object(r.jsx)("select",{value:p.indexOf(t.how),onChange:function(e){return n({how:p[Number(e.target.value)]})},children:p.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u5bfe\u8c61\u306e\u6570:",Object(r.jsx)("input",{type:"number",value:t.numPicks,onChange:function(e){return n({numPicks:Number(e.target.value)})}})]})}),Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.playerCondition,onChange:function(e){var t=e.target.checked?x():void 0;n({playerCondition:t})}}),"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u9078\u629e\u6761\u4ef6"]})})}),t.playerCondition?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(U,{detail:t.playerCondition,onChanged:function(e){var r;return n({playerCondition:K(K({},null!==(r=t.playerCondition)&&void 0!==r?r:x()),e)})}})}):null,Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.cardCondition,onChange:function(e){var t=e.target.checked?v():void 0;n({cardCondition:t})}}),"\u30ab\u30fc\u30c9\u306e\u9078\u629e\u6761\u4ef6"]})})}),t.cardCondition?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(J,{detail:t.cardCondition,onChanged:function(e){var r;return n({cardCondition:K(K({},null!==(r=t.cardCondition)&&void 0!==r?r:v()),e)})}})}):null]})};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u30c0\u30e1\u30fc\u30b8\u5024:",Object(r.jsx)("input",{type:"number",value:t.value,onChange:function(e){return n({value:Number(e.target.value)})},required:!0})]})}),Object(r.jsx)(Z,{detail:t.choice,onChanged:function(e){return n({choice:Q(Q({},t.choice),e)})}})]})};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(e){var t=e.detail,n=e.onChanged,c=["","damage","addcard"],o=Object(d.useState)(0),i=o[0],a=o[1],u=function(e){var r;n({damage:G(G({},null!==(r=t.damage)&&void 0!==r?r:{value:0,choice:O()}),e)})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("select",{value:i,onChange:function(e){var t=Number(e.target.value);if(a(t),"damage"===c[t]){var r={damage:{value:0,choice:O()}};n(r)}},children:c.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})}),t.damage?Object(r.jsx)(X,{detail:t.damage,onChanged:u}):null]})},te=["this","other"],ne=function(){return{source:te[0]}},re=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["source:",Object(r.jsx)("select",{value:te.indexOf(t.source),onChange:function(e){var t=Number(e.target.value);n({source:te[t]})},children:te.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]})})})};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=function(e){var t=e.detail,n=e.onChanged,c=["","play","startturn"],o=Object(d.useState)(0),i=o[0],a=o[1],u=function(e){var r;n({play:oe(oe({},null!==(r=t.play)&&void 0!==r?r:ne()),e)})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("select",{value:i,onChange:function(e){var t=Number(e.target.value);a(t),"play"===c[t]&&n({play:ne()})},children:c.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})}),t.play?Object(r.jsx)(re,{detail:t.play,onChanged:u}):null]})};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(ie,{detail:t.timing,onChanged:function(e){return n({timing:ue(ue({},t.timing),e)})}})})};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=function(e){var t=e.detail,n=e.onChanged,c=Object(d.useState)(!1),o=c[0],i=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:o,onChange:function(e){var t=e.target.checked?{timing:{play:void 0,startTurn:void 0}}:void 0;n({when:t}),i(e.target.checked)}}),"when"]})})}),t.when?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("label",{children:["\u9818\u57df:",Object(r.jsx)("select",{value:f.indexOf(t.zonePrettyName),onChange:function(e){return n({zonePrettyName:f[Number(e.target.value)]})},children:f.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]}),Object(r.jsx)(le,{detail:t.when,onChanged:function(e){var r;return n({when:de(de({},null!==(r=t.when)&&void 0!==r?r:{timing:{play:void 0,startTurn:void 0}}),e)})}})]}):null]})};function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=function(e){var t=e.detail,n=e.onChanged;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(je,{detail:t.condition,onChanged:function(e){n(fe(fe({},t),{},{condition:fe(fe({},t.condition),e)}))}}),Object(r.jsx)(ee,{detail:t.actions[0],onChanged:function(e){var r=o(t.actions);r[0]=fe(fe({},t.actions[0]),e),n(fe(fe({},t),{},{actions:r}))}})]})};function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=function(e){var t=e.detail,n=e.onChanged,c=function(){var e={condition:{zonePrettyName:f[0],when:void 0,while:void 0,if:void 0},actions:[{damage:void 0}]};n({effects:[].concat(o(t.effects),[e])})},i=function(e,r){var c=o(t.effects);c.splice(r,1,e),n({effects:c})},a=function(e){var r=Number(e.target.value);if(e.target.checked){var c=[].concat(o(t.abilities),[b[r]]);n({abilities:c})}else{var i=t.abilities.filter((function(e){return e!==b[r]}));n({abilities:i})}};return Object(r.jsxs)("section",{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u30b3\u30b9\u30c8:",Object(r.jsx)("input",{type:"number",required:!0,value:t.cost,onChange:function(e){return n({cost:Number(e.target.value)})}})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u540d\u524d:",Object(r.jsx)("input",{type:"text",required:!0,value:t.name,onChange:function(e){return n({name:e.target.value})}})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u30d5\u30ec\u30fc\u30d0\u30fc\u30c6\u30ad\u30b9\u30c8:",Object(r.jsx)("textarea",{value:t.flavorText,onChange:function(e){return n({flavorText:e.target.value})}})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u30c8\u30fc\u30af\u30f3:",Object(r.jsx)("input",{type:"checkbox",checked:t.isToken,onChange:function(e){return n({isToken:e.target.checked})}})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u7a2e\u985e:",Object(r.jsx)("select",{required:!0,value:j.indexOf(t.type),onChange:function(e){return n({type:j[Number(e.target.value)]})},children:j.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e},t)}))})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u30d1\u30ef\u30fc:",Object(r.jsx)("input",{type:"number",required:!0,value:t.power,onChange:function(e){return n({power:Number(e.target.value)})}})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["\u30bf\u30d5\u30cd\u30b9:",Object(r.jsx)("input",{type:"number",required:!0,value:t.toughness,onChange:function(e){return n({toughness:Number(e.target.value)})}})]})}),Object(r.jsxs)("div",{children:["\u30a2\u30d3\u30ea\u30c6\u30a3:",b.map((function(e,n){return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:n,checked:-1!==t.abilities.indexOf(e),onChange:a}),e]},n)}))]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.numTurnsToCanAttack,onChange:function(e){return n({numTurnsToCanAttack:e.target.checked?0:void 0})}}),"\u653b\u6483\u53ef\u80fd\u3068\u306a\u308b\u307e\u3067\u306e\u30bf\u30fc\u30f3\u6570:"]}),void 0!==t.numTurnsToCanAttack&&Object(r.jsx)("input",{type:"number",value:t.numTurnsToCanAttack,onChange:function(e){return n({cost:Number(e.target.value)})}})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:void 0!==t.numAttacksLimitInTurn,onChange:function(e){return n({numAttacksLimitInTurn:e.target.checked?0:void 0})}}),"1\u30bf\u30fc\u30f3\u4e2d\u306b\u653b\u6483\u53ef\u80fd\u306a\u56de\u6570:"]}),void 0!==t.numAttacksLimitInTurn&&Object(r.jsx)("input",{type:"number",value:t.numAttacksLimitInTurn,onChange:function(e){return n({numAttacksLimitInTurn:Number(e.target.value)})}})]}),Object(r.jsxs)("h2",{children:["\u52b9\u679c",Object(r.jsx)("button",{onClick:function(){return c()},children:"+"}),Object(r.jsx)("button",{onClick:function(){n({effects:[]})},children:"clear"})]}),t.effects.map((function(e,c){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return function(e){var r=o(t.effects);r.splice(e,1),n({effects:r})}(c)},children:"-"}),Object(r.jsx)(pe,{detail:e,onChanged:function(t){return i(he(he({},e),t),c)}})]},c)}))]})};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=function(e){var t={cost:0,name:"",flavorText:"",type:j[0],power:0,toughness:0,isToken:!1,abilities:[],effects:[],numAttacksLimitInTurn:void 0,numTurnsToCanAttack:void 0};return t.name="\u30ab\u30fc\u30c9".concat(e),t},t=Object(d.useState)(0),n=t[0],c=t[1],i=Object(d.useState)({name:"",cards:[e(n)]}),a=i[0],l=i[1],b=function(){return Object(r.jsx)("input",{type:"text",value:a.name,onChange:function(e){l((function(t){return ye(ye({},t),{},{name:e.target.value})}))}})},f=function(){return Object(r.jsx)("select",{value:n,onChange:function(e){c(Number(e.target.value))},children:a.cards.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e.name},t)}))})},p=function(){return Object(r.jsx)("button",{onClick:function(){l((function(t){return ye(ye({},t),{},{cards:[].concat(o(t.cards),[e(a.cards.length)])})})),c(a.cards.length)},children:"+"})},O=function(){return Object(r.jsx)("button",{onClick:function(){if(1!==a.cards.length){var e=n;e===a.cards.length-1&&c(e-1),l((function(t){var n=o(t.cards);return n.splice(e,1),ye(ye({},t),{},{cards:n})}))}},children:"-"})},h=function(){var e=function(e){return function(e,t){var n=JSON.stringify(t),r=document.createElement("a");r.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(n)),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}("cardset.json",e)};return Object(r.jsx)("button",{onClick:function(){return e(a)},children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})},v=function(){return Object(r.jsx)("input",{type:"file",onChange:function(e){if(e.target.files&&0!==e.target.files.length){var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.result;if("string"===typeof n){console.log(n);var r=JSON.parse(n);l(r)}},n.readAsText(t)}}})};return Object(r.jsxs)("div",{className:s.a.container,children:[Object(r.jsxs)(u.a,{children:[Object(r.jsx)("title",{children:"Cauldron - \u30ab\u30fc\u30c9\u4f5c\u6210\u30c4\u30fc\u30eb"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("main",{className:s.a.main,children:[Object(r.jsx)("h1",{className:s.a.title,children:"Cauldron - \u30ab\u30fc\u30c9\u4f5c\u6210\u30c4\u30fc\u30eb"}),Object(r.jsxs)("span",{children:[Object(r.jsx)(h,{}),Object(r.jsx)(v,{})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)(b,{}),Object(r.jsx)(f,{}),Object(r.jsx)(p,{}),Object(r.jsx)(O,{})]}),Object(r.jsx)(ve,{detail:a.cards[n],onChanged:function(e){console.log(e),l((function(t){return t.cards[n]=ye(ye({},t.cards[n]),e),ye(ye({},t),{},{cards:o(t.cards)})}))}})]}),Object(r.jsx)("footer",{className:s.a.footer,children:Object(r.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",Object(r.jsx)("img",{src:"/vercel.svg",alt:"Vercel Logo",className:s.a.logo})]})})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var o=r?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(n,c,o):n[c]=e[c]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),a=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var j=["name","httpEquiv","charSet","itemProp"];function b(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(c){var o=!0,i=!1;if(c.key&&"number"!==typeof c.key&&c.key.indexOf("$")>0){i=!0;var a=c.key.slice(c.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(c.type){case"title":case"base":t.has(c.type)?o=!1:t.add(c.type);break;case"meta":for(var u=0,l=j.length;u<l;u++){var s=j[u];if(c.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var d=c.props[s],b=r[s]||new Set;"name"===s&&i||!b.has(d)?(b.add(d),r[s]=b):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return c.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,c.useContext)(i.AmpStateContext),r=(0,c.useContext)(a.HeadManagerContext);return c.default.createElement(o.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}f.rewind=function(){};var p=f;t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=c},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),c=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||c(e)||o(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),c=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),a=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var c=u(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){i(n,e);var t=l(n);function n(e){var o;return c(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),c=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?c(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=c},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},[["/EDR",0,1]]]);