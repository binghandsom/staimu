(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e8836e6"],{c8b0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v("["+t._s(t.DEFAULT_ROLE)+"]")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("KEUANGAN-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/keuangan"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KEUANGAN")])],1)],1):t._e(),a("v-subheader",[t._v("DAFTAR ULANG")]),a("v-list-item",{attrs:{link:"",to:"/keuangan/channelpembayaran"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CHANNEL PEMBAYARAN ")])],1)],1),t.CAN_ACCESS("KEUANGAN-STATUS-TRANSAKSI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/statustransaksi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" STATUS TRANSAKSI ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-KOMPONEN-BIAYA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponen"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-video-input-component")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIAYA KOMPONEN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponenperiode"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIAYA KOMPONEN PERIODE ")])],1)],1):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-subheader",[t._v(" METODE PEMBAYARAN ")]):t._e(),t.CAN_ACCESS("KEUANGAN-METODE-TRANSFER-BANK_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transferbank"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TRANSFER BANK ")])],1)],1):t._e(),a("v-subheader",[t._v("TRANSAKSI")]),t.CAN_ACCESS("KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/konfirmasipembayaran"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KONFIRMASI PEMBAYARAN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR TRANSAKSI ")])],1)],1):t._e(),a("v-divider"),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-dulangmhsbaru"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR ULANG MHS. BARU ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-REGISTRASIKRS_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-registrasikrs"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" REGISTRASI KRS ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-SPP_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-spp"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" SPP ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-KKN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-kkn"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KKN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-ujianmunaqasah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" UJIAN MUNAQASAH ")])],1)],1):t._e(),a("v-subheader",[t._v("LAPORAN")]),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-REGISTRASI-KRS_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanregistrasikrs"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PENERIMAAN REG. KRS ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-SPP_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanspp"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" PENERIMAAN SPP ")])],1)],1):t._e()],1)],1),t.showrightsidebar?a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{staticClass:"teal lighten-5 mb-5"},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),a("v-footer",{attrs:{app:"",padless:"",fixed:""}},[a("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[a("v-divider"),a("v-card-text",{staticClass:"py-2 black--text text-center"},[a("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),a("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],n=a("5530"),r=(a("5319"),a("ac1f"),a("2f62")),o={name:"KeuanganLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])(Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=a("2877"),u=a("6544"),v=a.n(u),d=a("40dc"),m=a("5bc1"),A=a("8212"),_=a("8336"),p=a("b0af"),h=a("99d9"),f=a("ce7e"),S=a("553a"),g=a("132d"),b=a("adda"),N=a("8860"),E=a("da13"),k=a("8270"),C=a("5d23"),T=a("34c3"),R=a("f6c4"),I=a("e449"),y=a("f774"),x=a("2fa4"),w=a("e0c7"),U=a("afd9"),K=a("2a7f"),O=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=O.exports;v()(O,{VAppBar:d["a"],VAppBarNavIcon:m["a"],VAvatar:A["a"],VBtn:_["a"],VCard:p["a"],VCardText:h["d"],VDivider:f["a"],VFooter:S["a"],VIcon:g["a"],VImg:b["a"],VList:N["a"],VListItem:E["a"],VListItemAvatar:k["a"],VListItemContent:C["g"],VListItemIcon:T["a"],VListItemSubtitle:C["j"],VListItemTitle:C["k"],VMain:R["a"],VMenu:I["a"],VNavigationDrawer:y["a"],VSpacer:x["a"],VSubheader:w["a"],VSystemBar:U["a"],VToolbarTitle:K["c"]})},d63e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KeuanganLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-video-input-component ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" STATUS TRANSAKSI ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini berisi informasi status transaksi. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id_status","sort-by":"id_status","show-expand":"","disable-pagination":!0,"hide-default-footer":!0,expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR STATUS TRANSAKSI")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer")],1)]},proxy:!0},{key:"item.style",fn:function(e){return[a("v-edit-dialog",{attrs:{"return-value":e.item.style,large:""},on:{"update:returnValue":function(a){return t.$set(e.item,"style",a)},"update:return-value":function(a){return t.$set(e.item,"style",a)},save:function(a){return t.saveItem({id:e.item.id_status,style:e.item.style})},cancel:t.cancelItem,open:t.openItem,close:t.closeItem},scopedSlots:t._u([{key:"input",fn:function(){return[a("div",{staticClass:"mt-4 title"},[t._v("Update Style")]),a("v-text-field",{attrs:{label:"STYLE STATUS TRANSAKSI",outlined:"",autofocus:""},model:{value:e.item.style,callback:function(a){t.$set(e.item,"style",a)},expression:"props.item.style"}})]},proxy:!0}],null,!0)},[a("v-chip",{attrs:{color:e.item.style,dark:""}},[t._v(t._s(e.item.style))])],1)]}},{key:"expanded-item",fn:function(e){var i=e.headers,s=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(s.id_status)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},s=[],n=a("1da1"),r=(a("96cf"),a("c8b0")),o=a("e477"),l={name:"StatusTransaksi",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KEUANGAN",disabled:!1,href:"/keuangan"},{text:"STATUS TRANSAKSI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{firstloading:!0,breadcrumbs:[],btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"ID",value:"id_status",width:10,sortable:!1},{text:"NAMA STATUS",value:"nama_status",sortable:!1},{text:"STYLE",value:"style",width:200,sortable:!1}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/keuangan/statustransaksi",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.datatable=a.status,e.datatableLoading=!1}));case 3:this.firstloading=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},saveItem:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,i,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,i=e.style,t.next=3,this.$ajax.post("/keuangan/statustransaksi/"+a,{_method:"put",id_status:a,style:i},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){s.initialize()}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancelItem:function(){},openItem:function(){},closeItem:function(){}},components:{KeuanganLayout:r["a"],ModuleHeader:o["a"]}},c=l,u=a("2877"),v=a("6544"),d=a.n(v),m=a("0798"),A=a("2bc5"),_=a("cc20"),p=a("62ad"),h=a("a523"),f=a("8fea"),S=a("ce7e"),g=a("7679"),b=a("132d"),N=a("0fd9"),E=a("2fa4"),k=a("8654"),C=a("71d9"),T=a("2a7f"),R=Object(u["a"])(c,i,s,!1,null,null,null);e["default"]=R.exports;d()(R,{VAlert:m["a"],VBreadcrumbs:A["a"],VChip:_["a"],VCol:p["a"],VContainer:h["a"],VDataTable:f["a"],VDivider:S["a"],VEditDialog:g["a"],VIcon:b["a"],VRow:N["a"],VSpacer:E["a"],VTextField:k["a"],VToolbar:C["a"],VToolbarTitle:T["c"]})},e477:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:t.isReportPage}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"subheading grey--text"},[a("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=n,o=a("2877"),l=a("6544"),c=a.n(l),u=a("62ad"),v=a("a523"),d=a("132d"),m=a("0fd9"),A=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=A.exports;c()(A,{VCol:u["a"],VContainer:v["a"],VIcon:d["a"],VRow:m["a"]})}}]);