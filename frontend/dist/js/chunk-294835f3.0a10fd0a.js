(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-294835f3"],{"684f":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/spmb"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-monitor-dashboard")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD SPMB")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-SOAL_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/soalpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-head-question-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" SOAL PMB ")])],1)],1):t._e(),e("v-subheader",[t._v("DATA MHS. BARU")]),t.CAN_ACCESS("SPMB-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/pendaftaranbaru"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-plus")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PENDAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/formulirpendaftaran"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIODATA ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-PERSYARATAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/persyaratan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERSYARATAN ")])],1)],1):t._e(),e("v-subheader",[t._v("UJIAN PMB")]),t.CAN_ACCESS("SPMB-PMB-JADWAL-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/jadwalujianpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" JADWAL UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-NILAI-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/nilaiujian"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" NILAI UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-subheader",[t._v("LAPORAN")]):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanfakultas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-PRODI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanprodi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN PRODI ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-KELULUSAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporankelulusan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN KELULUSAN ")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),e("v-footer",{attrs:{app:"",padless:"",fixed:""}},[e("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[e("v-divider"),e("v-card-text",{staticClass:"py-2 black--text text-center"},[e("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),e("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[e("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},n=[],s=e("5530"),r=(e("5319"),e("ac1f"),e("2f62")),o={name:"SPMBLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),c=e("6544"),u=e.n(c),m=e("40dc"),v=e("5bc1"),p=e("8212"),h=e("8336"),_=e("b0af"),f=e("99d9"),b=e("ce7e"),A=e("553a"),g=e("132d"),S=e("adda"),C=e("8860"),w=e("da13"),k=e("8270"),R=e("5d23"),E=e("34c3"),T=e("f6c4"),P=e("e449"),x=e("f774"),I=e("2fa4"),N=e("e0c7"),L=e("afd9"),B=e("2a7f"),j=Object(d["a"])(l,i,n,!1,null,null,null);a["a"]=j.exports;u()(j,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:p["a"],VBtn:h["a"],VCard:_["a"],VCardText:f["d"],VDivider:b["a"],VFooter:A["a"],VIcon:g["a"],VImg:S["a"],VList:C["a"],VListItem:w["a"],VListItemAvatar:k["a"],VListItemContent:R["g"],VListItemIcon:E["a"],VListItemSubtitle:R["j"],VListItemTitle:R["k"],VMain:T["a"],VMenu:P["a"],VNavigationDrawer:x["a"],VSpacer:I["a"],VSubheader:N["a"],VSystemBar:L["a"],VToolbarTitle:B["c"]})},e477:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:t.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},n=[],s={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=s,o=e("2877"),l=e("6544"),d=e.n(l),c=e("62ad"),u=e("a523"),m=e("132d"),v=e("0fd9"),p=Object(o["a"])(r,i,n,!1,null,null,null);a["a"]=p.exports;d()(p,{VCol:c["a"],VContainer:u["a"],VIcon:m["a"],VRow:v["a"]})},e5d6:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("SPMBLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-calendar-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" PASSING GRADE NILAI UJIAN ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" "+t._s(t.jadwal_ujian.nama_kegiatan)+" - TAHUN PENDAFTARAN "+t._s(t.jadwal_ujian.ta)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.jadwal_ujian.idsmt))+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Berisi informasi passing grade nilai dari sebuah jadwal ujian ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id","sort-by":"id","show-expand":"","disable-pagination":!0,"hide-default-footer":!0,expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR NILAI PASSING GRADE")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-btn",{staticClass:"mb-2",attrs:{color:"primary",disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.loadprodi(a)}}},[t._v(" GENERATE ")])],1)]},proxy:!0},{key:"item.kjur",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$store.getters["uiadmin/getProdiName"](e.kjur))+" ")]}},{key:"item.nilai",fn:function(a){return[e("v-edit-dialog",{attrs:{"return-value":a.item.nilai,large:""},on:{"update:returnValue":function(e){return t.$set(a.item,"nilai",e)},"update:return-value":function(e){return t.$set(a.item,"nilai",e)},save:function(e){return t.saveItem({id:a.item.id,nilai:a.item.nilai})},cancel:t.cancelItem,open:t.openItem,close:t.closeItem},scopedSlots:t._u([{key:"input",fn:function(){return[e("div",{staticClass:"mt-4 title"},[t._v("Update Nilai")]),e("v-text-field",{attrs:{label:"NILAI PASSING GRADE",rules:t.rule_angka,outlined:"",autofocus:""},model:{value:a.item.nilai,callback:function(e){t.$set(a.item,"nilai",e)},expression:"props.item.nilai"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(a.item.nilai)+" ")])]}},{key:"expanded-item",fn:function(a){var i=a.headers,n=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:i.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("ID:")]),t._v(t._s(n.id)+" "),e("strong",[t._v("created_at:")]),t._v(t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],s=e("1da1"),r=(e("96cf"),e("684f")),o=e("e477"),l={name:"PassingGrade",created:function(){this.jadwal_ujian_id=this.$route.params.idjadwalujian,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SPMB",disabled:!1,href:"#"},{text:"JADWAL UJIAN PMB",disabled:!1,href:"/spmb/jadwalujianpmb"},{text:"PASSING GRADE",disabled:!0,href:"#"}],this.initialize()},data:function(){return{jadwal_ujian_id:null,jadwal_ujian:{id:0,nama_kegiatan:"",ta:"",idsmt:""},breadcrumbs:[],dashboard:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"PROGRAM STUDI",value:"kjur",sortable:!0},{text:"NILAI",value:"nilai",sortable:!1,width:100}],search:"",rule_angka:[function(t){return/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/.test(t)||"Isi dengan nilai antara 0.00 s.d 100.00"}]}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/spmb/passinggrade",{jadwal_ujian_id:this.jadwal_ujian_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datatableLoading=!1,a.jadwal_ujian=e.jadwal_ujian,a.datatable=e.passing_grade})).catch((function(){a.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},loadprodi:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/spmb/passinggrade/loadprodi",{jadwal_ujian_id:this.jadwal_ujian_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){a.btnLoading=!1,a.initialize()})).catch((function(){a.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),saveItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var e,i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.id,i=a.nilai,this.btnLoading=!0,t.next=4,this.$ajax.post("/spmb/passinggrade/"+e,{_method:"put",id:e,nilai:i},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){n.btnLoading=!1,n.initialize()}));case 4:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),cancelItem:function(){},openItem:function(){},closeItem:function(){}},computed:{},components:{SPMBLayout:r["a"],ModuleHeader:o["a"]}},d=l,c=e("2877"),u=e("6544"),m=e.n(u),v=e("0798"),p=e("2bc5"),h=e("8336"),_=e("62ad"),f=e("a523"),b=e("8fea"),A=e("ce7e"),g=e("7679"),S=e("132d"),C=e("0fd9"),w=e("2fa4"),k=e("8654"),R=e("71d9"),E=e("2a7f"),T=Object(c["a"])(d,i,n,!1,null,null,null);a["default"]=T.exports;m()(T,{VAlert:v["a"],VBreadcrumbs:p["a"],VBtn:h["a"],VCol:_["a"],VContainer:f["a"],VDataTable:b["a"],VDivider:A["a"],VEditDialog:g["a"],VIcon:S["a"],VRow:C["a"],VSpacer:w["a"],VTextField:k["a"],VToolbar:R["a"],VToolbarTitle:E["c"]})}}]);