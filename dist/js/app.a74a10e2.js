(function(t){function e(e){for(var n,s,r=e[0],a=e[1],d=e[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(f.length)f.shift()();return l.push.apply(l,d||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],n=!0,r=1;r<o.length;r++){var a=o[r];0!==i[a]&&(n=!1)}n&&(l.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},l=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=a;l.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"05f0":function(t,e,o){},"18af":function(t,e,o){"use strict";o("05f0")},4923:function(t,e,o){"use strict";o("fc22")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"},on:{click:t.handleOutsideClick}},[o("main",[o("Header",{on:{onSubmit:t.handleSubmit}}),o("Todos",{key:t.filter,attrs:{todos:t.todos},on:{onDblClick:t.handleDblClick,onEditSubmit:t.handleEditSubmit,onToggleAll:t.handleToggleAll,onDeleteClick:t.handleDeleteClick,onClick:t.handleCompletedClick}}),t.todos.length>0?o("Footer",{attrs:{filter:t.filter,todos:t.todos},on:{onClearCompletedClick:t.handleClearCompletedClick}}):t._e()],1),t._m(0)])},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{attrs:{id:"footer"}},[o("p",[t._v("Double-click to edit a todo")]),o("p",[t._v(" Written by "),o("a",{attrs:{href:"https://github.com/johnalexanderberg"}},[t._v("Alexander")]),t._v(" and "),o("a",{attrs:{href:"https://github.com/AThomasBring"}},[t._v("Anton")])]),o("p",[t._v("Part of "),o("a",{attrs:{href:"https://todomvc.com/"}},[t._v("TodoMVC")])])])}],s=(o("159b"),o("4de4"),o("498a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("todos")]),o("form",{on:{submit:[function(e){return t.$emit("onSubmit",t.text)},function(e){return e.preventDefault(),t.preventDefault.apply(null,arguments)}]}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"todo",attrs:{type:"text",placeholder:"What needs to be done?"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])])}),r=[],a={name:"Header",data:function(){return{text:""}},methods:{preventDefault:function(){this.text=""}},emits:["onSubmit"]},d=a,c=(o("fd47"),o("2877")),u=Object(c["a"])(d,s,r,!1,null,"ac946b54",null),f=u.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[t.todos.length>0?o("div",{class:[t.todos.filter((function(t){return!0===t.isCompleted})).length===t.todos.length?"checked":"","toggleAllContainer"]},[o("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},on:{change:function(e){return t.$emit("onToggleAll")}}}),o("label",{attrs:{for:"toggle-all"}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}}),o("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"}})])])]):t._e(),t._l(t.filteredTodos,(function(e){return o("li",{key:e.id},[o("Todo",{attrs:{isEditing:t.isEditing,todo:e},on:{onSubmit:function(o){return t.$emit("onEditSubmit",e.id)},onDblClick:function(o){return t.$emit("onDblClick",e.id)},onDeleteClick:function(o){return t.$emit("onDeleteClick",e.id)},onClick:function(o){return t.$emit("onClick",e.id)}}})],1)}))],2)},p=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{class:[t.todo.isCompleted?"isCompleted":""]},[o("div",[o("button",{class:[t.todo.isCompleted?"isCompleted":"","completedButton",t.todo.isEditing?"editing":""],on:{click:function(e){return t.$emit("onClick",t.todo.id)}}},[o("svg",{staticClass:"completedIcon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),o("path",{attrs:{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}})])])]),o("form",{class:[t.todo.isEditing?"editing":""],on:{submit:[function(e){return t.$emit("onSubmit",t.todo.id)},function(e){return e.preventDefault(),t.preventDefault.apply(null,arguments)}]}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.text,expression:"todo.text"}],staticClass:"edit",attrs:{type:"text",autofocus:""},domProps:{value:t.todo.text},on:{input:function(e){e.target.composing||t.$set(t.todo,"text",e.target.value)}}})]),o("h2",{class:[t.todo.isEditing?"editing":""],on:{dblclick:function(e){return t.$emit("onDblClick",t.todo.id)}}},[t._v(" "+t._s(t.todo.text)+" ")]),o("div",{class:[t.todo.isEditing?"editing":"","deleteContainer"]},[o("button",{class:[t.todo.isEditing?"editing":"","deleteButton"],on:{click:function(e){return t.$emit("onDeleteClick",t.todo.id)}}},[o("svg",{staticClass:"deleteButton",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),o("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}})])])]),o("div",{staticClass:"border"})])},g=[],v={name:"Todo",props:{todo:Object,isEditing:Boolean},methods:{preventDefault:function(){}},emits:["onClick","onDeleteClick"]},C=v,b=(o("18af"),Object(c["a"])(C,m,g,!1,null,"0ed28a26",null)),k=b.exports,E={name:"Todos",props:{todos:Array,isEditing:Boolean},components:{Todo:k},methods:{},computed:{filteredTodos:function(){return this.todos.filter((function(t){switch(location.hash){case"#active":return!t.isCompleted;case"#completed":return t.isCompleted;default:return!0}}))}},emits:["onClick","onToggleAll","onEditSubmit"]},_=E,x=(o("4923"),Object(c["a"])(_,h,p,!1,null,"2939e8a8",null)),w=x.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{attrs:{id:"navigation"}},[o("span",{attrs:{id:"todo-count"}},[t._v(" "+t._s(t.todos.filter((function(t){return!1===t.isCompleted})).length)+" "+t._s(1===t.todos.filter((function(t){return!1===t.isCompleted})).length?"item":"items")+" left")]),o("div",{staticClass:"buttons"},[o("button",{class:t.currentView,attrs:{id:"all"},on:{click:t.handleAllClick}},[t._v("All")]),o("button",{class:t.currentView,attrs:{id:"active"},on:{click:t.handleActiveClick}},[t._v("Active")]),o("button",{class:t.currentView,attrs:{id:"completed"},on:{click:t.handleCompletedClick}},[t._v("Completed")])]),t.todos.filter((function(t){return!0===t.isCompleted})).length>0?o("button",{attrs:{id:"clearCompleted"},on:{click:function(e){return t.$emit("onClearCompletedClick")}}},[t._v("Clear Completed")]):t._e()])},S=[],T=(o("a9e3"),{name:"Footer",props:{filter:String,todos:Array,counter:Number},methods:{handleAllClick:function(){location.hash=""},handleCompletedClick:function(){location.hash="#completed"},handleActiveClick:function(){location.hash="#active"}},computed:{currentView:function(){switch(this.filter){case"#active":return"active";case"#completed":return"completed";default:return"all"}}}}),O=T,D=(o("eb23"),Object(c["a"])(O,y,S,!1,null,"4f35ed27",null)),$=D.exports,A={name:"App",components:{Header:f,Todos:w,Footer:$},data:function(){return{filter:String,todos:[],toggleState:Boolean,isEditing:Boolean}},methods:{handleDblClick:function(t){!0===this.isEditing?this.todos.forEach((function(t){t.isEditing=!1})):this.isEditing=!0,this.todos.forEach((function(e){e.id===t&&(e.isEditing=!0)}))},handleEditSubmit:function(t){this.isEditing=!1,this.todos.forEach((function(e){e.id===t&&(e.isEditing=!1)})),this.saveTodos()},handleOutsideClick:function(t){for(var e=0;e<this.todos.length;e++)!0!==this.todos[e].isEditing||t.target.classList.contains("edit")||(this.todos[e].isEditing=!1,this.isEditing=!1,this.saveTodos())},handleToggleAll:function(){this.todos.filter((function(t){return!0===t.isCompleted})).length===this.todos.length?this.todos.forEach((function(t){t.isCompleted=!1})):this.todos.forEach((function(t){t.isCompleted=!0})),this.saveTodos()},handleCounter:function(){var t=this;this.todos.forEach((function(e){!1===e.isCompleted?t.counter++:t.counter--}))},handleClearCompletedClick:function(){this.todos=this.todos.filter((function(t){return!1===t.isCompleted})),this.saveTodos()},handleCompletedClick:function(t){this.todos.forEach((function(e){e.id===t&&(e.isCompleted=!e.isCompleted)})),this.toggleState=!1,this.todos.filter((function(t){return t.isCompleted})).length===this.todos.length&&(this.toggleState=!0),this.saveTodos()},handleDeleteClick:function(t){this.todos=this.todos.filter((function(e){return e.id!==t})),this.saveTodos()},handleSubmit:function(t){var e=t.trim();if(0!==e.length){var o={id:Math.round(1e5*Math.random()),text:e,isCompleted:!1,isEditing:!1};this.todos.push(o),this.saveTodos()}},saveTodos:function(){var t=JSON.stringify(this.todos);localStorage.setItem("todos",t)}},mounted:function(){var t=this;this.filter="";var e=function(){t.filter=location.hash};if(window.addEventListener("hashchange",e),localStorage.getItem("todos"))try{this.todos=JSON.parse(localStorage.getItem("todos"))}catch(o){localStorage.removeItem("todos")}this.todos.forEach((function(t){t.isEditing=!1}))}},j=A,M=(o("034f"),Object(c["a"])(j,i,l,!1,null,null,null)),B=M.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"85ec":function(t,e,o){},"916a":function(t,e,o){},"9c43":function(t,e,o){},eb23:function(t,e,o){"use strict";o("916a")},fc22:function(t,e,o){},fd47:function(t,e,o){"use strict";o("9c43")}});
//# sourceMappingURL=app.a74a10e2.js.map