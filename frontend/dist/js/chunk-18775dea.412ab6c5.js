(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18775dea"],{"94df":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[i("v-icon",[t._v("mdi-menu-open")])],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.hideleftnav,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("DMASTER-GROUP")?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/dmaster"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-home-floor-b")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD DATA MASTER")])],1)],1):t._e(),i("v-subheader",[t._v("FASILITAS")]),i("v-list-item",{attrs:{link:"",to:"/dmaster/ruangkelas"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-seat-legroom-extra")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" RUANG KELAS ")])],1)],1),i("v-subheader",[t._v("MAHASISWA")]),i("v-list-item",{attrs:{link:"",to:"/dmaster/statusmahasiswa"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-vertical-lock")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" STATUS MAHASISWA ")])],1)],1),t.CAN_ACCESS("DMASTER-KELAS_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/dmaster/kelas"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-google-classroom")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KELAS ")])],1)],1):t._e(),i("v-list-item",{attrs:{link:"",to:"/dmaster/jenjangstudi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-stairs-up")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" JENJANG STUDI ")])],1)],1),t.CAN_ACCESS("DMASTER-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?i("v-list-item",{attrs:{link:"",to:"/dmaster/fakultas"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-home")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("DMASTER-PRODI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/dmaster/programstudi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-home-assistant")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),i("v-subheader",[t._v("DOSEN")]),i("v-list-item",{attrs:{link:"",to:"/dmaster/jabatanakademik"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-chair-rolling")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" JABATAN AKADEMIK ")])],1)],1),i("v-subheader",[t._v("AKADEMIK")]),t.CAN_ACCESS("DMASTER-TA_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/dmaster/ta"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-calendar-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAHUN AKADEMIK ")])],1)],1):t._e()],1)],1),t.showrightsidebar?i("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-menu-open")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"teal lighten-5 mb-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-filter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],n=(i("b0c0"),i("ac1f"),i("5319"),i("5530")),r=i("2f62"),o={name:"DataMasterLayout",props:{showrightsidebar:{type:Boolean,default:!0}},data:function(){return{loginTime:0,drawer:null,drawerRight:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},hideleftnav:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=i("2877"),d=i("6544"),v=i.n(d),m=i("40dc"),u=i("5bc1"),h=i("8212"),p=i("ce7e"),f=i("132d"),_=i("adda"),A=i("8860"),g=i("da13"),b=i("8270"),T=i("5d23"),k=i("34c3"),S=i("f6c4"),C=i("e449"),E=i("f774"),w=i("2fa4"),R=i("e0c7"),x=i("afd9"),y=i("2a7f"),D=Object(c["a"])(l,a,s,!1,null,null,null);e["a"]=D.exports;v()(D,{VAppBar:m["a"],VAppBarNavIcon:u["a"],VAvatar:h["a"],VDivider:p["a"],VIcon:f["a"],VImg:_["a"],VList:A["a"],VListItem:g["a"],VListItemAvatar:b["a"],VListItemContent:T["a"],VListItemIcon:k["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMain:S["a"],VMenu:C["a"],VNavigationDrawer:E["a"],VSpacer:w["a"],VSubheader:R["a"],VSystemBar:x["a"],VToolbarTitle:y["a"]})},a05d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("DataMasterLayout",[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-stairs-up ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" JENJANG STUDI ")]},proxy:!0},{key:"subtitle",fn:function(){},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini berisi informasi jenjang studi. ID dan Nama Jenjang melekat ke sistem sehingga tidak bisa diubah. ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id","sort-by":"id","show-expand":"","disable-pagination":!0,"hide-default-footer":!0,expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"expanded-item",fn:function(e){var a=e.headers,s=e.item;return[i("td",{staticClass:"text-center",attrs:{colspan:a.length}},[i("v-col",{attrs:{cols:"12"}},[i("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),i("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},s=[],n=(i("96cf"),i("1da1")),r=i("94df"),o=i("e477"),l={name:"JenjangStudi",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"DATA MASTER",disabled:!1,href:"/dmaster"},{text:"JENJANG STUDI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"ID",value:"kode_jenjang",width:10,sortable:!1},{text:"NAMA JENJANG",value:"nama_jenjang",sortable:!1}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/datamaster/jenjangstudi",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;e.datatable=i.jenjang_studi,e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]}},components:{DataMasterLayout:r["a"],ModuleHeader:o["a"]}},c=l,d=i("2877"),v=i("6544"),m=i.n(v),u=i("0798"),h=i("2bc5"),p=i("62ad"),f=i("a523"),_=i("8fea"),A=i("132d"),g=i("0fd9"),b=Object(d["a"])(c,a,s,!1,null,null,null);e["default"]=b.exports;m()(b,{VAlert:u["a"],VBreadcrumbs:h["a"],VCol:p["a"],VContainer:f["a"],VDataTable:_["a"],VIcon:A["a"],VRow:g["a"]})}}]);