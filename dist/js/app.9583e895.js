(function(e){function t(t){for(var n,i,s=t[0],a=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],c[i]&&p.push(c[i][0]),c[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,s=1;s<o.length;s++){var a=o[s];0!==c[a]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},c={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=a;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("dac5"),o("6e26"),o("9604"),o("df67");var n=o("6e6d"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.todo,expression:"todo"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.todo},on:{keydown:function(t){return e.press(t)},input:function(t){t.target.composing||(e.todo=t.target.value)}}}),o("button",{staticClass:"btn1",on:{click:e.add}},[e._v("添加")]),o("button",{staticClass:"btn3",on:{click:e.removeAll}},[e._v("清空")])]),o("h3",[e._v("未完成")]),o("ul",e._l(e.todoList,function(t,n){return o("li",{key:n,staticClass:"item"},[t.checked?e._e():o("div",{staticClass:"row"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(o){var n=t.checked,c=o.target,r=!!c.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);c.checked?s<0&&e.$set(t,"checked",n.concat([i])):s>-1&&e.$set(t,"checked",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(t,"checked",r)},function(t){return e.save()}]}}),o("span",[e._v(e._s(t.text))]),o("button",{staticClass:"btn2",on:{click:function(t){return e.remove(n)}}},[e._v("删除")])])])}),0),o("h3",[e._v("已完成")]),o("ul",e._l(e.todoList,function(t,n){return o("li",{key:n,staticClass:"item"},[t.checked?o("div",{staticClass:"row"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(o){var n=t.checked,c=o.target,r=!!c.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);c.checked?s<0&&e.$set(t,"checked",n.concat([i])):s>-1&&e.$set(t,"checked",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(t,"checked",r)},function(t){return e.save()}]}}),o("span",{staticClass:"span_done"},[e._v(e._s(t.text))]),o("button",{staticClass:"btn2",on:{click:function(t){return e.remove(n)}}},[e._v("删除")])]):e._e()])}),0)])},r=[],i={set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(localStorage.getItem(e))},remove:function(e){localStorage.removeItem(e)}},s=i,a={name:"app",data:function(){return{todo:"",todoList:[]}},methods:{add:function(){this.todoList.push({checked:!1,text:this.todo}),this.todo="",s.set("todoList",this.todoList)},press:function(e){13==e.which&&this.add()},remove:function(e){this.todoList.splice(e,1),s.set("todoList",this.todoList)},save:function(){s.set("todoList",this.todoList)},removeAll:function(){s.remove("todoList"),location.reload()}},mounted:function(){var e=s.get("todoList");e&&(this.todoList=e)}},u=a,d=o("17cc"),l=Object(d["a"])(u,c,r,!1,null,null,null),p=l.exports;o("6672");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(p)}}).$mount("#app")},6672:function(e,t,o){}});
//# sourceMappingURL=app.9583e895.js.map