(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5c6e8d0"],{"632e":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-app-bar",{attrs:{app:""}},[e("v-toolbar-title",[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.namaPTAlias))])]),e("v-spacer"),e("v-btn",{staticClass:"mr-2",attrs:{to:"/",color:"primary",text:"",large:""}},[t._v(" Home ")]),e("v-btn",{staticClass:"mr-2",attrs:{to:"/pmb",color:"primary",text:"",large:""}},[t._v(" PENDAFTARAN ")]),e("v-btn",{attrs:{to:"/login",color:"primary",text:"",large:""}},[t._v(" Login ")])],1),e("v-main",[t._t("default")],2),e("v-footer",{attrs:{app:"",padless:"",fixed:""}},[e("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[e("v-divider"),e("v-card-text",{staticClass:"py-2 black--text text-center"},[e("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),e("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[e("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},n=[],o=e("5530"),s=e("2f62"),i={name:"FrontLayout",created:function(){this.$store.dispatch("uifront/init",this.$ajax)},computed:Object(o["a"])({APP_NAME:function(){return"PortalEkampus v3"}},Object(s["b"])("uifront",{namaPTAlias:"getNamaPTAlias"}))},l=i,c=e("2877"),u=e("6544"),d=e.n(u),m=e("40dc"),f=e("8336"),p=e("b0af"),v=e("99d9"),h=e("ce7e"),g=e("553a"),b=e("132d"),_=e("f6c4"),k=e("2fa4"),x=e("2a7f"),w=Object(c["a"])(l,r,n,!1,null,null,null);a["a"]=w.exports;d()(w,{VAppBar:m["a"],VBtn:f["a"],VCard:p["a"],VCardText:v["d"],VDivider:h["a"],VFooter:g["a"],VIcon:b["a"],VMain:_["a"],VSpacer:k["a"],VToolbarTitle:x["c"]})},a56a:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("FrontLayout",[e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"4"}},[e("h1",{staticClass:"text-center display-1 font-weight-black primary--text"},[t._v("LOGIN")]),e("v-alert",{attrs:{outlined:"",dense:"",type:"error",value:t.form_error,icon:"mdi-close-octagon-outline"}},[t._v(" Username atau Password tidak dikenal !. ")]),e("v-form",{ref:"frmlogin",attrs:{"lazy-validation":""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.doLogin(a)}}},[e("v-card",{attrs:{outlined:""}},[e("v-card-text",[e("v-text-field",{attrs:{label:"Username",rules:t.rule_username,outlined:"",dense:""},model:{value:t.formlogin.username,callback:function(a){t.$set(t.formlogin,"username",a)},expression:"formlogin.username"}}),e("v-text-field",{attrs:{label:"Password",type:"password",rules:t.rule_password,outlined:"",dense:""},model:{value:t.formlogin.password,callback:function(a){t.$set(t.formlogin,"password",a)},expression:"formlogin.password"}})],1),e("v-card-actions",{staticClass:"justify-center"},[e("v-btn",{attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading,block:""},on:{click:t.doLogin}},[t._v(" Login ")])],1)],1)],1)],1)],1)],1)],1)},n=[],o=e("1da1"),s=(e("96cf"),e("632e")),i={name:"Login",created:function(){this.$store.getters["auth/Authenticated"]&&this.$router.push("/dashboard/"+this.$store.getters["auth/AccessToken"])},data:function(){return{btnLoading:!1,form_error:!1,formlogin:{username:"",password:""},rule_username:[function(t){return!!t||"Kolom Username mohon untuk diisi !!!"}],rule_password:[function(t){return!!t||"Kolom Password mohon untuk diisi !!!"}]}},methods:{doLogin:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmlogin.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/auth/login",{username:this.formlogin.username,password:this.formlogin.password}).then((function(t){var e=t.data;a.$ajax.get("/auth/me",{headers:{Authorization:e.token_type+" "+e.access_token}}).then((function(t){var r={token:e,user:t.data};a.$store.dispatch("auth/afterLoginSuccess",r)})),a.btnLoading=!1,a.form_error=!1,a.$router.push("/dashboard/"+e.access_token)})).catch((function(){a.form_error=!0,a.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},components:{FrontLayout:s["a"]}},l=i,c=e("2877"),u=e("6544"),d=e.n(u),m=e("0798"),f=e("8336"),p=e("b0af"),v=e("99d9"),h=e("62ad"),g=e("a523"),b=e("4bd4"),_=e("0fd9"),k=e("8654"),x=Object(c["a"])(l,r,n,!1,null,null,null);a["default"]=x.exports;d()(x,{VAlert:m["a"],VBtn:f["a"],VCard:p["a"],VCardActions:v["b"],VCardText:v["d"],VCol:h["a"],VContainer:g["a"],VForm:b["a"],VRow:_["a"],VTextField:k["a"]})}}]);