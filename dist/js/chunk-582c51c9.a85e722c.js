(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-582c51c9"],{"149b":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"role"},[e("header",{staticClass:"page-header"},[a._v(" "+a._s(a.roleName)+"角色权限 "),e("div",{staticStyle:{float:"right",position:"relative"}},[e("a-button",{on:{click:function(t){return a.$router.go(-1)}}},[a._v("返回")]),1!==a.id&&2!==a.id?e("a-button",{attrs:{type:"primary"},on:{click:a.setData}},[a._v("确定")]):a._e()],1)]),e("div",{staticClass:"split-box"}),e("div",{staticClass:"role-content"},[e("div",{staticClass:"role-type"},[a._v(" 功能权限 "),e("a-icon",{staticClass:"tips-icon",class:a.actionTipsShow?"tips-blue":"",attrs:{type:"info-circle"},on:{mouseenter:function(t){a.actionTipsShow=!0},mouseleave:function(t){a.actionTipsShow=!1}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:a.actionTipsShow,expression:"actionTipsShow"}],staticClass:"tips"},[e("p",[a._v("勾选“发起”则给角色拥有发起任务")]),e("p",[a._v("的权限")])])],1),e("div",{staticClass:"split-box split-box-thin"}),e("div",{staticClass:"role-bar typeAct"},[e("a-checkbox-group",{model:{value:a.actionVal,callback:function(t){a.actionVal=t},expression:"actionVal"}},[e("a-checkbox",{attrs:{value:1}},[a._v("发起")])],1)],1)]),e("div",{staticClass:"split-box"}),e("div",{staticClass:"role-content"},[e("div",{staticClass:"role-type"},[a._v("协作权限 "),e("a-icon",{staticClass:"tips-icon",class:a.helpTipsShow?"tips-blue":"",attrs:{type:"info-circle"},on:{mouseenter:function(t){a.helpTipsShow=!0},mouseleave:function(t){a.helpTipsShow=!1}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:a.helpTipsShow,expression:"helpTipsShow"}],staticClass:"tips"},[e("p",[a._v("发起任务时，任务接收人与抄送人的选择范围：")]),e("p",[a._v("部门--所在部门的全部成员")]),e("p",[a._v("公司--所在公司的全部成员")])])],1),e("div",{staticClass:"split-box split-box-thin"}),e("div",{staticClass:"role-bar typeDem"},[e("a-radio-group",{model:{value:a.helpVal,callback:function(t){a.helpVal=t},expression:"helpVal"}},[e("a-radio",{attrs:{value:1}},[a._v("部门")]),e("a-radio",{attrs:{value:2}},[a._v("公司")])],1)],1)]),e("div",{staticClass:"split-box"}),e("div",{staticClass:"role-content"},[e("div",{staticClass:"role-type"},[a._v("任务统计查看范围 "),e("a-icon",{staticClass:"tips-icon",class:a.areaTipsShow?"tips-blue":"",attrs:{type:"info-circle"},on:{mouseenter:function(t){a.areaTipsShow=!0},mouseleave:function(t){a.areaTipsShow=!1}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:a.areaTipsShow,expression:"areaTipsShow"}],staticClass:"tips",staticStyle:{left:"190px"}},[e("p",[a._v("个人--可查看与自己相关的任务统计")]),e("p",[a._v("部门--可查看所在部门的任务统计")]),e("p",[a._v("公司--查看所在公司的任务统计")]),e("p",{staticClass:"remark"},[a._v("*注：所有人均默认有“个人任务统计”的查看权限")])])],1),e("div",{staticClass:"split-box split-box-thin"}),e("div",{staticClass:"role-bar typeDem"},[e("a-radio-group",{model:{value:a.areaVal,callback:function(t){a.areaVal=t},expression:"areaVal"}},[e("a-radio",{attrs:{value:0}},[a._v("个人")]),e("a-radio",{attrs:{value:1}},[a._v("部门")]),e("a-radio",{attrs:{value:2}},[a._v("公司")])],1)],1)]),e("div",{staticClass:"split-box"})])},i=[],o=(e("b0c0"),e("96cf"),e("1da1")),n=e("365c"),r={name:"setRole",data:function(){return{actionTipsShow:!1,helpTipsShow:!1,areaTipsShow:!1,actionVal:[1],helpVal:1,areaVal:1,id:parseInt(this.$route.query.id),is_system:0,roleName:""}},created:function(){this.getData()},methods:{getData:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].getPower({id:a.id});case 2:e=t.sent,s=e.code,i=e.data,s&&(a.actionVal[0]=i.is_initiate,a.helpVal=i.cooperation,a.areaVal=i.type,a.roleName=i.name);case 6:case"end":return t.stop()}}),t)})))()},setData:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={id:a.id,type:a.areaVal,is_initiate:a.actionVal[0]?a.actionVal[0]:0,cooperation:a.helpVal,name:a.roleName,is_query:0,is_system:a.is_system},t.next=3,n["a"].editRole(e);case 3:s=t.sent,i=s.code,o=s.msg,i?(a.$message.success(o,2),a.$router.push({path:"/backManage/role"})):a.$message.error(o,2);case 7:case"end":return t.stop()}}),t)})))()}}},c=r,l=(e("3bf2"),e("2877")),p=Object(l["a"])(c,s,i,!1,null,"74924abe",null);t["default"]=p.exports},"3bf2":function(a,t,e){"use strict";var s=e("7ffa"),i=e.n(s);i.a},"7ffa":function(a,t,e){},b0c0:function(a,t,e){var s=e("83ab"),i=e("9bf2").f,o=Function.prototype,n=o.toString,r=/^\s*function ([^ (]*)/,c="name";s&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(a){return""}}})}}]);