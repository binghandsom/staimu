(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2947ba61"],{"684f":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/spmb"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-monitor-dashboard")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD SPMB")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-SOAL_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/soalpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-head-question-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" SOAL PMB ")])],1)],1):t._e(),e("v-subheader",[t._v("DATA MHS. BARU")]),t.CAN_ACCESS("SPMB-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/pendaftaranbaru"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-plus")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PENDAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/formulirpendaftaran"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIODATA ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-PERSYARATAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/persyaratan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERSYARATAN ")])],1)],1):t._e(),e("v-subheader",[t._v("UJIAN PMB")]),t.CAN_ACCESS("SPMB-PMB-JADWAL-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/jadwalujianpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" JADWAL UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-NILAI-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/nilaiujian"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" NILAI UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-subheader",[t._v("LAPORAN")]):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanfakultas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-PRODI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanprodi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN PRODI ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-KELULUSAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporankelulusan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN KELULUSAN ")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),e("v-footer",{attrs:{app:"",padless:"",fixed:""}},[e("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[e("v-divider"),e("v-card-text",{staticClass:"py-2 black--text text-center"},[e("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),e("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[e("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],n=e("5530"),r=(e("5319"),e("ac1f"),e("2f62")),o={name:"SPMBLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])(Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),c=e("6544"),u=e.n(c),v=e("40dc"),m=e("5bc1"),_=e("8212"),h=e("8336"),p=e("b0af"),f=e("99d9"),b=e("ce7e"),A=e("553a"),g=e("132d"),w=e("adda"),j=e("8860"),S=e("da13"),T=e("8270"),C=e("5d23"),x=e("34c3"),k=e("f6c4"),E=e("e449"),P=e("f774"),L=e("2fa4"),R=e("e0c7"),U=e("afd9"),N=e("2a7f"),M=Object(d["a"])(l,i,s,!1,null,null,null);a["a"]=M.exports;u()(M,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VAvatar:_["a"],VBtn:h["a"],VCard:p["a"],VCardText:f["d"],VDivider:b["a"],VFooter:A["a"],VIcon:g["a"],VImg:w["a"],VList:j["a"],VListItem:S["a"],VListItemAvatar:T["a"],VListItemContent:C["g"],VListItemIcon:x["a"],VListItemSubtitle:C["j"],VListItemTitle:C["k"],VMain:k["a"],VMenu:E["a"],VNavigationDrawer:P["a"],VSpacer:L["a"],VSubheader:R["a"],VSystemBar:U["a"],VToolbarTitle:N["c"]})},d3ef:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("SPMBLayout",{attrs:{showrightsidebar:!1}},[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-calendar-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" JADWAL UJIAN PMB ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN PENDAFTARAN "+t._s(t.tahun_pendaftaran)+" - SEMESTER "+t._s(t.nama_semester_pendaftaran)+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Berisi daftar dan pengelolaan jadwal ujian PMB. ")])]},proxy:!0}])}),t.jadwal_ujian_id&&t.data_jadwal?e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("DETAIL DATA JADWAL UJIAN")])]),e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("ID :")]),e("v-card-subtitle",[t._v(" "+t._s(t.data_jadwal.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("JUMLAH SOAL :")]),e("v-card-subtitle",[t._v(" "+t._s(t.data_jadwal.jumlah_soal)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NAMA UJIAN ONLINE :")]),e("v-card-subtitle",[t._v(" "+t._s(t.data_jadwal.nama_kegiatan)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("TANGGAL AKHIR DAFTAR :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.data_jadwal.tanggal_akhir_daftar).format("DD/MM/YYYY"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("TANGGAL UJIAN :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.data_jadwal.tanggal_ujian).format("DD/MM/YYYY"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("WAKTU UJIAN PMB :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.data_jadwal.tanggal_ujian).format("DD/MM/YYYY"))+" "+t._s(t.data_jadwal.jam_mulai_ujian)+" - "+t._s(t.data_jadwal.jam_selesai_ujian)+" ("+t._s(t.durasiUjian(t.data_jadwal))+" Menit) ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("STATUS PENDAFTARAN :")]),e("v-card-subtitle",[t._v(" "+t._s(0==t.data_jadwal.status_pendaftaran?"BUKA":"TUTUP")+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("CREATED :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.data_jadwal.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("STATUS UJIAN :")]),e("v-card-subtitle",[t._v(" "+t._s(t.StatusJadwanUjian)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("UPDATED :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.data_jadwal.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-bottom-navigation",{attrs:{color:"purple lighten-1"}},[0==t.data_jadwal.status_ujian?e("v-btn",{attrs:{disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.mulaiUjian(a)}}},[e("span",[t._v("MULAI UJIAN")]),e("v-icon",[t._v("mdi-play")])],1):1==t.data_jadwal.status_ujian?e("v-btn",{attrs:{disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.selesaiUjian(a)}}},[e("span",[t._v("SELESAI UJIAN")]),e("v-icon",[t._v("mdi-exit-run")])],1):t._e(),e("v-btn",{on:{click:function(a){return a.stopPropagation(),t.closedetail(a)}}},[e("span",[t._v("Keluar")]),e("v-icon",[t._v("mdi-close")])],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"user_id","sort-by":"nama_mhs","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR PESERTA UJIAN")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer")],1)]},proxy:!0},{key:"item.isfinish",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.getStatusUjianPeserta(e))+" ")]}},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-icon",{attrs:{small:"",disabled:t.btnLoading||0!=i.isfinish||null!=i.mulai_ujian},on:{click:function(a){return a.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"expanded-item",fn:function(a){var i=a.headers,s=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:i.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("ID:")]),t._v(t._s(s.id)+" "),e("strong",[t._v("Ruangan:")]),t._v(t._s(s.namaruang)+" "),e("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}],null,!1,2238417485)})],1)],1)],1):t._e()],1)},s=[],n=e("1da1"),r=(e("a434"),e("96cf"),e("684f")),o=e("e477"),l={name:"JadwalUjianPMBDetail",created:function(){this.jadwal_ujian_id=this.$route.params.jadwal_ujian_id,this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SPMB",disabled:!1,href:"/spmb"},{text:"JADWAL UJIAN PMB",disabled:!1,href:"/spmb/jadwalujianpmb"},{text:"DETAIL",disabled:!0,href:"#"}],this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"],this.semester_pendaftaran=this.$store.getters["uiadmin/getSemesterPendaftaran"],this.nama_semester_pendaftaran=this.$store.getters["uiadmin/getNamaSemester"](this.semester_pendaftaran)},mounted:function(){this.initialize()},data:function(){return{jadwal_ujian_id:null,data_jadwal:null,status_jadwan_ujian:null,breadcrumbs:[],dashboard:null,tahun_pendaftaran:null,semester_pendaftaran:null,nama_semester_pendaftaran:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"NO",value:"no_peserta",sortable:!0,width:70},{text:"NAMA",value:"nama_mhs",sortable:!0,width:250},{text:"JK",value:"jk",sortable:!0,width:50},{text:"STATUS",value:"isfinish",sortable:!0,width:100},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:""}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/spmb/jadwalujianpmb/"+this.jadwal_ujian_id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datatable=e.peserta,a.data_jadwal=e.jadwal_ujian,a.StatusJadwanUjian=a.data_jadwal.status_ujian,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),getStatusUjianPeserta:function(t){return 1==t.isfinish?"SELESAI":t.mulai_ujian?"SEDANG UJIAN":"BELUM MULAI"},dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},durasiUjian:function(t){var a=this.$date(t.tanggal_ujian+" "+t.jam_mulai_ujian),e=this.$date(t.tanggal_ujian+" "+t.jam_selesai_ujian);return e.diff(a,"minute")},mulaiUjian:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/spmb/jadwalujianpmb/updatestatusujian/"+this.jadwal_ujian_id,{_method:"PUT",status_ujian:1},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){a.btnLoading=!1,a.$router.go()})).catch((function(){a.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),selesaiUjian:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$root.$confirm.open("Delete","Apakah Anda ingin menyatakan ujian telah selesai ?",{color:"red"}).then((function(t){t&&(a.btnLoading=!0,a.$ajax.post("/spmb/jadwalujianpmb/updatestatusujian/"+a.jadwal_ujian_id,{_method:"PUT",status_ujian:2},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(){a.btnLoading=!1,a.$router.go()})).catch((function(){a.btnLoading=!1})))}));case 1:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),closedetail:function(){this.jadwal_ujian_id=null,this.data_jadwal=null,this.$router.push("/spmb/jadwalujianpmb")},deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus peserta ujian denga user_id "+t.user_id+" ?",{color:"red"}).then((function(e){e&&(a.btnLoading=!0,a.$ajax.post("/spmb/ujianonline/keluar",{_method:"DELETE",user_id:t.user_id},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(){var e=a.datatable.indexOf(t);a.datatable.splice(e,1),a.btnLoading=!1})).catch((function(){a.btnLoading=!1})))}))}},computed:{StatusJadwanUjian:{set:function(t){this.status_jadwan_ujian=t},get:function(){switch(this.status_jadwan_ujian){case 0:return"BELUM MULAI";case 1:return"BERJALAN";case 2:return"SELESAI";default:return""}}}},components:{SPMBLayout:r["a"],ModuleHeader:o["a"]}},d=l,c=e("2877"),u=e("6544"),v=e.n(u),m=e("0798"),_=e("b81c"),h=e("2bc5"),p=e("8336"),f=e("b0af"),b=e("99d9"),A=e("62ad"),g=e("a523"),w=e("8fea"),j=e("ce7e"),S=e("132d"),T=e("6b53"),C=e("0fd9"),x=e("2fa4"),k=e("8654"),E=e("71d9"),P=e("2a7f"),L=Object(c["a"])(d,i,s,!1,null,null,null);a["default"]=L.exports;v()(L,{VAlert:m["a"],VBottomNavigation:_["a"],VBreadcrumbs:h["a"],VBtn:p["a"],VCard:f["a"],VCardSubtitle:b["c"],VCardText:b["d"],VCardTitle:b["e"],VCol:A["a"],VContainer:g["a"],VDataTable:w["a"],VDivider:j["a"],VIcon:S["a"],VResponsive:T["a"],VRow:C["a"],VSpacer:x["a"],VTextField:k["a"],VToolbar:E["a"],VToolbarTitle:P["c"]})},e477:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:t.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=n,o=e("2877"),l=e("6544"),d=e.n(l),c=e("62ad"),u=e("a523"),v=e("132d"),m=e("0fd9"),_=Object(o["a"])(r,i,s,!1,null,null,null);a["a"]=_.exports;d()(_,{VCol:c["a"],VContainer:u["a"],VIcon:v["a"],VRow:m["a"]})}}]);