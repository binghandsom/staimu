(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cca2282"],{6135:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),i("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-identifier")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/variables"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-variable")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" VARIABLES ")])],1)],1):t._e(),i("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-page-layout-header")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),i("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/cache"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-cached")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CACHE ")])],1)],1):t._e(),i("v-subheader",[t._v("PLUGIN")]),t.CAN_ACCESS("PLUGINS-H2H-ZOOMAPI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-setting/zoom"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-desktop-mac-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" ZOOM ")])],1)],1):t._e()],1)],1),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:""}},[i("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 black--text text-center"},[i("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),i("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],r=(i("ac1f"),i("5319"),i("5530")),n=i("2f62"),o={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=i("2877"),d=i("6544"),v=i.n(d),u=i("40dc"),m=i("5bc1"),f=i("8212"),p=i("8336"),h=i("b0af"),_=i("99d9"),g=i("ce7e"),T=i("553a"),b=i("132d"),E=i("adda"),A=i("8860"),S=i("da13"),C=i("8270"),y=i("5d23"),I=i("34c3"),k=i("f6c4"),V=i("e449"),R=i("f774"),N=i("2fa4"),x=i("e0c7"),L=i("afd9"),O=i("2a7f"),P=Object(c["a"])(l,a,s,!1,null,null,null);e["a"]=P.exports;v()(P,{VAppBar:u["a"],VAppBarNavIcon:m["a"],VAvatar:f["a"],VBtn:p["a"],VCard:h["a"],VCardText:_["d"],VDivider:g["a"],VFooter:T["a"],VIcon:b["a"],VImg:E["a"],VList:A["a"],VListItem:S["a"],VListItemAvatar:C["a"],VListItemContent:y["g"],VListItemIcon:I["a"],VListItemSubtitle:y["j"],VListItemTitle:y["k"],VMain:k["a"],VMenu:V["a"],VNavigationDrawer:R["a"],VSpacer:N["a"],VSubheader:x["a"],VSystemBar:L["a"],VToolbarTitle:O["c"]})},b746:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SystemConfigLayout",[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-google-circles-group ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" CAPTCHA ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Setting pengaman dari spammer menggunakan captcha ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[i("v-card",[i("v-card-title",[t._v(" Google Recaptcha ")]),i("v-card-text",[i("v-text-field",{attrs:{label:"SITE KEY",outlined:"",rules:t.rule_site_key},model:{value:t.formdata.siteKey,callback:function(e){t.$set(t.formdata,"siteKey",e)},expression:"formdata.siteKey"}}),i("v-text-field",{attrs:{label:"PRIVATE KEY",outlined:"",rules:t.rule_private_key},model:{value:t.formdata.privateKey,callback:function(e){t.$set(t.formdata,"privateKey",e)},expression:"formdata.privateKey"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},s=[],r=i("5530"),n=(i("96cf"),i("1da1")),o=i("2f62"),l=i("6135"),c=i("e477"),d={name:"Captcha",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"SERVER - CAPTCHA",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,form_valid:!0,formdata:{siteKey:"",privateKey:""},rule_site_key:[function(t){return!!t||"Mohon untuk di isi site key !!!"}],rule_private_key:[function(t){return!!t||"Mohon untuk di isi private key !!!"}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var i=t.data,a=i.setting;e.formdata.siteKey=a.CAPTCHA_SITE_KEY,e.formdata.privateKey=a.CAPTCHA_PRIVATE_KEY}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"captcha google",setting:JSON.stringify({901:this.formdata.siteKey,902:this.formdata.privateKey})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:l["a"],ModuleHeader:c["a"]}},v=d,u=i("2877"),m=i("6544"),f=i.n(m),p=i("0798"),h=i("2bc5"),_=i("8336"),g=i("b0af"),T=i("99d9"),b=i("62ad"),E=i("a523"),A=i("4bd4"),S=i("132d"),C=i("0fd9"),y=i("2fa4"),I=i("8654"),k=Object(u["a"])(v,a,s,!1,null,null,null);e["default"]=k.exports;f()(k,{VAlert:p["a"],VBreadcrumbs:h["a"],VBtn:_["a"],VCard:g["a"],VCardActions:T["b"],VCardText:T["d"],VCardTitle:T["e"],VCol:b["a"],VContainer:E["a"],VForm:A["a"],VIcon:S["a"],VRow:C["a"],VSpacer:y["a"],VTextField:I["a"]})},e477:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:t.isReportPage}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("h1",{staticClass:"subheading grey--text"},[i("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},n=r,o=i("2877"),l=i("6544"),c=i.n(l),d=i("62ad"),v=i("a523"),u=i("132d"),m=i("0fd9"),f=Object(o["a"])(n,a,s,!1,null,null,null);e["a"]=f.exports;c()(f,{VCol:d["a"],VContainer:v["a"],VIcon:u["a"],VRow:m["a"]})}}]);