(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8dc3dbe"],{"0639":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-list-item",[i("v-list-item-content",[i("v-select",{attrs:{item:t.daftar_prodi,"item-text":"text","item-value":"id",label:"PROGRAM STUDI",outlined:""},model:{value:t.prodi_id,callback:function(a){t.prodi_id=a},expression:"prodi_id"}}),i("v-select",{attrs:{item:t.daftar_ta,label:"TAHUN PENDAFTARAN",outlined:""},model:{value:t.tahun_pendaftaran,callback:function(a){t.tahun_pendaftaran=a},expression:"tahun_pendaftaran"}})],1)],1)},n=[],s={name:"FilterMode7",created:function(){this.daftar_prodi=this.$store.getters["uiadmin/getDaftarProdi"],this.prodi_id=this.$store.getters["uiadmin/getProdiID"],this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"]},data:function(){return{firstloading:!0,daftar_prodi:[],prodi_id:null,daftar_ta:[],tahun_pendaftaran:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_pendaftaran:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunPendaftaran",t),this.$emit("changeTahunPendaftaran",t))},prodi_id:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateProdi",t),this.$emit("changeProdi",t))}}},r=s,o=i("2877"),l=i("6544"),c=i.n(l),d=i("da13"),u=i("5d23"),m=i("b974"),v=Object(o["a"])(r,e,n,!1,null,null,null);a["a"]=v.exports;c()(v,{VListItem:d["a"],VListItemContent:u["g"],VSelect:m["a"]})},7636:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("KeuanganLayout",{scopedSlots:t._u([{key:"filtersidebar",fn:function(){return[i("Filter7",{ref:"filter7",on:{changeTahunPendaftaran:t.changeTahunPendaftaran,changeProdi:t.changeProdi}})]},proxy:!0}])},[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-video-input-component ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" TRANSAKSI DAFTAR ULANG MAHASISWA BARU ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN PENDAFTARAN "+t._s(t.tahun_pendaftaran)+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini digunakan untuk melakukan transaksi daftar ulang mahasiswa baru. ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),i("v-switch",{staticClass:"font-weight-bold",attrs:{label:"ABAIKAN FILTER"},model:{value:t.filter_ignore,callback:function(a){t.filter_ignore=a},expression:"filter_ignore"}})],1)],1)],1)],1),i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","sort-by":"nama_mhs","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v("DAFTAR TRANSAKSI")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:""},on:{click:function(a){return a.stopPropagation(),t.addItem(a)}}},[i("v-icon",[t._v("mdi-plus")])],1),i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:"",disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.printtoexcel(a)}}},[i("v-icon",[t._v("mdi-printer")])],1),i("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogfrm,callback:function(a){t.dialogfrm=a},expression:"dialogfrm"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(" TAMBAH TRANSAKSI T.A "+t._s(t.tahun_pendaftaran)+" ")])]),i("v-card-text",[i("v-text-field",{attrs:{label:"NOMOR FORMULIR",outlined:"",rules:t.rule_no_formulir},model:{value:t.formdata.no_formulir,callback:function(a){t.$set(t.formdata,"no_formulir",a)},expression:"formdata.no_formulir"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogfrm(a)}}},[t._v(" BATAL ")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v(" BUAT ")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.idsmt",fn:function(a){var i=a.item;return[t._v(" "+t._s(i.ta)+" "+t._s(t.$store.getters["uiadmin/getNamaSemester"](i.idsmt))+" ")]}},{key:"item.tanggal",fn:function(a){var i=a.item;return[t._v(" "+t._s(t.$date(i.tanggal).format("DD/MM/YYYY"))+" ")]}},{key:"item.sub_total",fn:function(a){var i=a.item;return[t._v(" "+t._s(t._f("formatUang")(i.sub_total))+" ")]}},{key:"item.nama_status",fn:function(a){var e=a.item;return[i("v-chip",{attrs:{color:e.style,dark:""}},[t._v(t._s(e.nama_status))])]}},t.datatable.length>0?{key:"body.append",fn:function(){return[i("tr",{staticClass:"grey lighten-4 font-weight-black"},[i("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI PAID")]),i("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("formatUang")(t.totaltransaksi_paid))+" ")]),i("td"),i("td")]),i("tr",{staticClass:"grey lighten-4 font-weight-black"},[i("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI UNPAID")]),i("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("formatUang")(t.totaltransaksi_unpaid))+" ")]),i("td"),i("td")]),i("tr",{staticClass:"grey lighten-4 font-weight-black"},[i("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI CANCELED")]),i("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("formatUang")(t.totaltransaksi_canceled))+" ")]),i("td"),i("td")]),i("tr",{staticClass:"grey lighten-4 font-weight-black"},[i("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI")]),i("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("formatUang")(t.totaltransaksi_canceled+t.totaltransaksi_paid+t.totaltransaksi_unpaid))+" ")]),i("td"),i("td")])]},proxy:!0}:null,{key:"expanded-item",fn:function(a){var e=a.headers,n=a.item;return[i("td",{staticClass:"text-center",attrs:{colspan:e.length}},[i("v-col",{attrs:{cols:"12"}},[i("strong",[t._v("TRANS.DETAIL ID:")]),t._v(t._s(n.id)+" "),i("strong",[t._v("created_at:")]),t._v(" "+t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),i("strong",[t._v("updated_at:")]),t._v(" "+t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"item.actions",fn:function(a){var e=a.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.viewItem(e)}}},[t._v(" mdi-eye ")]),0==e.status?i("v-icon",{attrs:{small:"",disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.deleteItem(e)}}},[t._v(" mdi-delete ")]):t._e()]}},{key:"no-data",fn:function(){return[t._v(" Data transaksi daftar ulang mahasiswa baru belum tersedia ")]},proxy:!0}],null,!0)})],1)],1)],1)],1)},n=[],s=i("1da1"),r=(i("2b3d"),i("d3b7"),i("3ca3"),i("ddb0"),i("a434"),i("159b"),i("841c"),i("ac1f"),i("96cf"),i("c8b0")),o=i("e477"),l=i("0639"),c={name:"TransaksiDulangMHSBaru",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KEUANGAN",disabled:!1,href:"/keuangan"},{text:"TRANSAKSI DAFTAR ULANG MAHASISWA BARU",disabled:!0,href:"#"}];var t=this.$store.getters["uiadmin/getProdiID"];this.prodi_id=t,this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"]},mounted:function(){this.initialize()},data:function(){return{dashboard:null,firstloading:!0,breadcrumbs:[],prodi_id:null,nama_prodi:null,tahun_pendaftaran:0,filter_ignore:!1,awaiting_search:!1,btnLoading:!1,datatableLoading:!1,datatable:[],headers:[{text:"KODE BILLING",value:"no_transaksi",width:100,sortable:!0},{text:"TANGGAL",value:"tanggal",width:90,sortable:!0},{text:"NO. FORMULIR",value:"no_formulir",sortable:!0,width:100},{text:"NAMA MAHASISWA",value:"nama_mhs",sortable:!0,width:250},{text:"SMT",value:"idsmt",width:100,sortable:!1},{text:"JUMLAH",value:"sub_total",width:100,sortable:!1,align:"right"},{text:"STATUS",value:"nama_status",width:100,sortable:!1},{text:"AKSI",value:"actions",sortable:!1,width:100}],expanded:[],search:"",dialogfrm:!1,form_valid:!0,formdata:{no_formulir:""},formdefault:{no_formulir:""},rule_no_formulir:[function(t){return!!t||"Nomor Formulir mohon untuk diisi !!!"},function(t){return/^[0-9]+$/.test(t)||"Nomor Formulir hanya boleh angka"}]}},methods:{changeTahunPendaftaran:function(t){this.tahun_pendaftaran=t},changeProdi:function(t){this.prodi_id=t},initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/keuangan/transaksi-dulangmhsbaru",{TA:this.tahun_pendaftaran,PRODI_ID:this.prodi_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;a.datatable=i.transaksi,a.datatableLoading=!1}));case 3:this.firstloading=!1,this.$refs.filter7.setFirstTimeLoading(this.firstloading);case 5:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},addItem:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.dialogfrm=!0;case 1:case"end":return a.stop()}}),a)})))()},viewItem:function(t){this.$router.push("/keuangan/transaksi-dulangmhsbaru/"+t.transaksi_id)},save:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/keuangan/transaksi-dulangmhsbaru/store",{no_formulir:this.formdata.no_formulir,TA:this.tahun_pendaftaran},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){a.closedialogfrm(),a.btnLoading=!1,a.initialize()})).catch((function(){a.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),showDialogPrintout:function(){this.$refs.dialogprint.open()},printtoexcel:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/keuangan/transaksi-dulangmhsbaru/printtoexcel1",{TA:this.tahun_pendaftaran,PRODI_ID:this.prodi_id,NAMA_PRODI:this.nama_prodi},{headers:{Authorization:this.$store.getters["auth/Token"]},responseType:"arraybuffer"}).then((function(t){var i=t.data,e=window.URL.createObjectURL(new Blob([i])),n=document.createElement("a");n.href=e,n.setAttribute("download","dulang_mhs_baru_"+Date.now()+".xlsx"),n.setAttribute("id","download_laporan"),document.body.appendChild(n),n.click(),document.body.removeChild(n),a.btnLoading=!1})).catch((function(){a.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.$refs.frmdata.reset()}),300)},deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data transaksi daftar ulang mahasiswa baru dengan ID "+t.id+" ?",{color:"red",width:"500px"}).then((function(i){i&&(a.btnLoading=!0,a.$ajax.post("/keuangan/transaksi-dulangmhsbaru/"+t.transaksi_id,{_method:"DELETE"},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(){var i=a.datatable.indexOf(t);a.datatable.splice(i,1),a.btnLoading=!1})).catch((function(){a.btnLoading=!1})))}))}},computed:{totaltransaksi_paid:function(){var t=0;return this.datatable.forEach((function(a){1==a.status&&(t+=a.total)})),t},totaltransaksi_unpaid:function(){var t=0;return this.datatable.forEach((function(a){0==a.status&&(t+=a.total)})),t},totaltransaksi_canceled:function(){var t=0;return this.datatable.forEach((function(a){2==a.status&&(t+=a.total)})),t}},watch:{tahun_pendaftaran:function(){this.firstloading||this.initialize()},prodi_id:function(t){this.firstloading||(this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.initialize())},search:function(){var t=this;this.awaiting_search||setTimeout(Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(t.search.length>0&&t.filter_ignore)){a.next=4;break}return t.datatableLoading=!0,a.next=4,t.$ajax.post("/keuangan/transaksi-dulangmhsbaru",{PRODI_ID:t.prodi_id,TA:t.tahun_pendaftaran,search:t.search},{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(a){var i=a.data;t.datatable=i.transaksi,t.datatableLoading=!1}));case 4:t.awaiting_search=!1;case 5:case"end":return a.stop()}}),a)}))),1e3),this.awaiting_search=!0}},components:{KeuanganLayout:r["a"],ModuleHeader:o["a"],Filter7:l["a"]}},d=c,u=i("2877"),m=i("6544"),v=i.n(m),h=i("0798"),f=i("2bc5"),A=i("8336"),_=i("b0af"),p=i("99d9"),g=i("cc20"),b=i("62ad"),k=i("a523"),S=i("8fea"),N=i("169a"),T=i("ce7e"),R=i("4bd4"),C=i("132d"),E=i("0fd9"),x=i("2fa4"),I=i("b73d"),w=i("8654"),P=i("71d9"),U=i("2a7f"),O=Object(u["a"])(d,e,n,!1,null,null,null);a["default"]=O.exports;v()(O,{VAlert:h["a"],VBreadcrumbs:f["a"],VBtn:A["a"],VCard:_["a"],VCardActions:p["b"],VCardText:p["d"],VCardTitle:p["e"],VChip:g["a"],VCol:b["a"],VContainer:k["a"],VDataTable:S["a"],VDialog:N["a"],VDivider:T["a"],VForm:R["a"],VIcon:C["a"],VRow:E["a"],VSpacer:x["a"],VSwitch:I["a"],VTextField:w["a"],VToolbar:P["a"],VToolbarTitle:U["c"]})},c8b0:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},e))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[i("v-icon",[t._v("mdi-menu-open")])],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v("["+t._s(t.DEFAULT_ROLE)+"]")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("KEUANGAN-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/keuangan"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-monitor-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD KEUANGAN")])],1)],1):t._e(),i("v-subheader",[t._v("DAFTAR ULANG")]),i("v-list-item",{attrs:{link:"",to:"/keuangan/channelpembayaran"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-triforce")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CHANNEL PEMBAYARAN ")])],1)],1),t.CAN_ACCESS("KEUANGAN-STATUS-TRANSAKSI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/statustransaksi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-triforce")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" STATUS TRANSAKSI ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-KOMPONEN-BIAYA_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponen"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-video-input-component")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" BIAYA KOMPONEN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponenperiode"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-triforce")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" BIAYA KOMPONEN PERIODE ")])],1)],1):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-subheader",[t._v(" METODE PEMBAYARAN ")]):t._e(),t.CAN_ACCESS("KEUANGAN-METODE-TRANSFER-BANK_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transferbank"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TRANSFER BANK ")])],1)],1):t._e(),i("v-subheader",[t._v("TRANSAKSI")]),t.CAN_ACCESS("KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/konfirmasipembayaran"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KONFIRMASI PEMBAYARAN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR TRANSAKSI ")])],1)],1):t._e(),i("v-divider"),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-dulangmhsbaru"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ULANG MHS. BARU ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-REGISTRASIKRS_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-registrasikrs"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" REGISTRASI KRS ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-SPP_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-spp"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" SPP ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-KKN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-kkn"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KKN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-ujianmunaqasah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" UJIAN MUNAQASAH ")])],1)],1):t._e(),i("v-subheader",[t._v("LAPORAN PENERIMAAN")]),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-DULANG-MHS-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporandulangmhsbaru"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ULANG MHS. BARU ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-REGISTRASI-KRS_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanregistrasikrs"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" REGISTRASI KRS ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-SPP_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanspp"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" SPP ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-UJIAN-MUNAQASAH_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanujianmunaqasah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" UJIAN MUNAQASAH ")])],1)],1):t._e()],1)],1),t.showrightsidebar?i("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-menu-open")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"teal lighten-5 mb-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-filter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:""}},[i("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 black--text text-center"},[i("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),i("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},n=[],s=i("5530"),r=(i("5319"),i("ac1f"),i("2f62")),o={name:"KeuanganLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])(Object(s["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=i("2877"),d=i("6544"),u=i.n(d),m=i("40dc"),v=i("5bc1"),h=i("8212"),f=i("8336"),A=i("b0af"),_=i("99d9"),p=i("ce7e"),g=i("553a"),b=i("132d"),k=i("adda"),S=i("8860"),N=i("da13"),T=i("8270"),R=i("5d23"),C=i("34c3"),E=i("f6c4"),x=i("e449"),I=i("f774"),w=i("2fa4"),P=i("e0c7"),U=i("afd9"),O=i("2a7f"),L=Object(c["a"])(l,e,n,!1,null,null,null);a["a"]=L.exports;u()(L,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:h["a"],VBtn:f["a"],VCard:A["a"],VCardText:_["d"],VDivider:p["a"],VFooter:g["a"],VIcon:b["a"],VImg:k["a"],VList:S["a"],VListItem:N["a"],VListItemAvatar:T["a"],VListItemContent:R["g"],VListItemIcon:C["a"],VListItemSubtitle:R["j"],VListItemTitle:R["k"],VMain:E["a"],VMenu:x["a"],VNavigationDrawer:I["a"],VSpacer:w["a"],VSubheader:P["a"],VSystemBar:U["a"],VToolbarTitle:O["c"]})}}]);