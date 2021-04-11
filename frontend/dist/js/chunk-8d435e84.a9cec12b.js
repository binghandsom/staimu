(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d435e84"],{d68c:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("AkademikLayout",{attrs:{showrightsidebar:!1}},[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-run-fast ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" UJIAN MUNAQASAH ")]},proxy:!0},"mahasiswa"!=t.$store.getters["uiadmin/getDefaultDashboard"]?{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk melakukan tambah ujian munaqasah ")])]},proxy:!0}],null,!0)}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[i("v-card",[i("v-card-title",[t._v(" CEK PERSYARATAN ")]),i("v-card-text",[i("v-alert",{attrs:{type:"info"}},[t._v(" sebelum menambah ujian munaqasah sistem akan melakukan pengecekan persyaratan. Silahkan masukan NIM, kemudian tekan tombol "),i("v-icon",[t._v("mdi-send")]),t._v(" untuk memproses. ")],1),i("v-text-field",{attrs:{label:"NIM",rules:t.rule_nim,outlined:""},model:{value:t.formdata.nim,callback:function(e){t.$set(t.formdata,"nim",e)},expression:"formdata.nim"}}),i("v-btn",{staticClass:"ma-2",attrs:{disabled:!t.form_valid||t.btnLoading,color:"primary",icon:""},on:{click:function(e){return e.stopPropagation(),t.cekPersyaratan(e)}}},[i("v-icon",[t._v("mdi-send")])],1),i("v-data-table",{attrs:{headers:t.headers,items:t.datatable,"item-key":"id","disable-pagination":!0,"hide-default-footer":!0}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogfrm(e)}}},[t._v(" BATAL ")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!t.form_valid||t.btnLoading||t.iscomplete},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" BUAT ")])],1)],1)],1)],1)],1)],1)],1)},s=[],r=i("1da1"),n=(i("96cf"),i("e60c")),o=i("e477"),l={name:"PerkuliahanUjianMunaqasahTambah",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"PERKULIAHAN",disabled:!1,href:"#"},{text:"UJIAN MUNAQASAH",disabled:!1,href:"/akademik/perkuliahan/ujianmunaqasah"},{text:"TAMBAH",disabled:!0,href:"#"}];var t=this.$store.getters["uiadmin/getProdiID"];this.prodi_id=t,this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.ta_matkul=this.tahun_akademik,"mahasiswa"==this.$store.getters["uiadmin/getDefaultDashboard"]&&(this.formdata.nim=this.$store.getters["auth/AttributeUser"]("username"))},data:function(){return{firstloading:!0,prodi_id:null,nama_prodi:null,tahun_akademik:null,ta_matkul:null,btnLoading:!1,dialogdetailitem:!1,datatable:[],headers:[{text:"NAMA PERSYARATAN",value:"nama_persyaratan",sortable:!0,width:400},{text:"KETERANGAN",value:"group_alias",sortable:!0,width:120},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",form_valid:!0,iscomplete:!0,formdata:{nim:"",persyaratan:[]},rule_nim:[function(t){return!!t||"Nomor Induk Mahasiswa (NIM) mohon untuk diisi !!!"},function(t){return/^[0-9]+$/.test(t)||"Nomor Induk Mahasiswa (NIM) hanya boleh angka"}]}},methods:{cekPersyaratan:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$refs.frmdata.validate()){e.next=4;break}return t.btnLoading=!0,e.next=4,t.$ajax.post("/akademik/perkuliahan/ujianmunaqasah/cekpersyaratan",{nim:t.formdata.nim},{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(e){var i=e.data;t.datatable=i.daftar_persyaratan,t.btnLoading=!1})).catch((function(){t.btnLoading=!1}));case 4:case"end":return e.stop()}}),e)})))()},save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/akademik/perkuliahan/ujianmunaqasah/store",{nim:this.formdata.nim},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;e.$router.push("/akademik/perkuliahan/ujianmunaqasah/"+i.ujian.id+"/detail"),e.btnLoading=!1})).catch((function(){e.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),closedialogfrm:function(){var t=this;setTimeout((function(){t.formdata=Object.assign({},{}),t.$router.push("/akademik/perkuliahan/ujianmunaqasah")}),300)}},components:{AkademikLayout:n["a"],ModuleHeader:o["a"]}},m=l,c=i("2877"),d=i("6544"),v=i.n(d),u=i("0798"),A=i("2bc5"),h=i("8336"),S=i("b0af"),_=i("99d9"),E=i("62ad"),k=i("a523"),C=i("8fea"),g=i("4bd4"),p=i("132d"),I=i("0fd9"),T=i("2fa4"),f=i("8654"),b=Object(c["a"])(m,a,s,!1,null,null,null);e["default"]=b.exports;v()(b,{VAlert:u["a"],VBreadcrumbs:A["a"],VBtn:h["a"],VCard:S["a"],VCardActions:_["b"],VCardText:_["d"],VCardTitle:_["e"],VCol:E["a"],VContainer:k["a"],VDataTable:C["a"],VForm:g["a"],VIcon:p["a"],VRow:I["a"],VSpacer:T["a"],VTextField:f["a"]})},e477:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:t.isReportPage}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("h1",{staticClass:"subheading grey--text"},[i("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},n=r,o=i("2877"),l=i("6544"),m=i.n(l),c=i("62ad"),d=i("a523"),v=i("132d"),u=i("0fd9"),A=Object(o["a"])(n,a,s,!1,null,null,null);e["a"]=A.exports;m()(A,{VCol:c["a"],VContainer:d["a"],VIcon:v["a"],VRow:u["a"]})},e60c:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{class:this.$store.getters["uiadmin/getTheme"]("V-APP-BAR-NAV-ICON-CSS-CLASS"),on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" [ "+t._s(t.DEFAULT_ROLE)+" ] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[i("v-icon",[t._v("mdi-menu-open")])],1)],1),i("v-navigation-drawer",{class:this.$store.getters["uiadmin/getTheme"]("V-NAVIGATION-DRAWER-CSS-CLASS"),attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v("[ "+t._s(t.DEFAULT_ROLE)+" ]")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")?i("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-CSS-CLASS"),attrs:{to:{path:"/akademik"},link:"",color:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-COLOR")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-monitor-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD AKADEMIK")])],1)],1):t._e(),i("v-subheader",[t._v("PERWALIAN")]),t.CAN_ACCESS("SYSTEM-USERS-DOSEN-WALI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-teach")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")||t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?i("v-subheader",[t._v(" DAFTAR ULANG ")]):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mhsbelumpunyanim","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-alert")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" BELUM PUNYA NIM ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-arrow-left")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswalama","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-box-multiple")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MAHASISWA LAMA ")])],1)],1):t._e(),i("v-subheader",[t._v("PERKULIAHAN")]),t.CAN_ACCESS("AKADEMIK-MATAKULIAH_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?i("v-list-group",{attrs:{group:"/akademik/perkuliahan/penyelenggaraan","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-home-floor-b")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("PENYELENGGARAAN")])],1)]},proxy:!0}],null,!1,2791626149)},[i("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/penyelenggaraan/daftar",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/penyelenggaraan/tambah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/penyelenggaraan/"+t.paramid+"/dosenpengampu"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DOSEN PENGAMPU ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?i("v-list-group",{attrs:{group:"/akademik/perkuliahan/krs","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-format-columns")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("KRS")])],1)]},proxy:!0}],null,!1,2196385036)},[i("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/krs/daftar",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/krs/tambah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_SHOW")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/detail"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DETAIL KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/tambahmatkul"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-VERIFIKASI-KRS_STORE")?i("v-list-item",{attrs:{link:"",to:{path:"/akademik/perkuliahan/krs/verifikasi"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" VERIFIKASI KRS ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?i("v-list-group",{attrs:{group:"/akademik/perkuliahan/pembagiankelas","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-google-classroom")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("PEMBAGIAN KELAS")])],1)]},proxy:!0}],null,!1,3897047730)},[i("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/pembagiankelas/daftar",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/pembagiankelas/tambah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TAMBAH KELAS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/pembagiankelas/"+t.paramid+"/peserta"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PESERTA ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-UJIAN-MUNAQASAH_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/akademik/perkuliahan/ujianmunaqasah","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-run-fast")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" UJIAN MUNAQASAH ")])],1)],1):t._e(),i("v-subheader",[t._v("NILAI")]),!t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_BROWSE")||"puslahta"!=t.dashboard&&"dosen"!=t.dashboard?t._e():i("v-list-group",{attrs:{group:"/akademik/nilai/matakuliah","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-format-columns")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("ISI NILAI")])],1)]},proxy:!0}],null,!1,927400214)},[i("div",[t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"dosen"==t.dashboard?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperdosen",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PER KELAS MHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkelasmhs",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PER KELAS MHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkrs",color:"white"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PER KRS ")])],1)],1):t._e()],1)]),t.CAN_ACCESS("AKADEMIK-NILAI-KONVERSI_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/konversi"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KONVERSI NILAI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-KHS_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/khs"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-TRANSKRIP-KURIKULUM_BROWSE")?i("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/transkripkurikulum"}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TRANSKRIP KURIKULUM ")])],1)],1):t._e()],1)],1),t.showrightsidebar?i("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-menu-open")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),i("v-divider"),i("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-filter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:""}},[i("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 black--text text-center"},[i("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM ITSTAI Miftahul 'Ulum Tanjungpinang "),i("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],r=i("5530"),n=(i("b0c0"),i("5319"),i("ac1f"),i("2f62")),o={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},paramid:function(){var t="empty";switch(this.$route.name){case"PerkuliahanPenyelenggaraanDosenPengampu":t=this.$route.params.idpenyelenggaraan;break;case"PerkuliahanKRSDetail":t=this.$route.params.krsid;break;case"PerkuliahanKRSTambahMatkul":t=this.$route.params.krsid;break;case"PerkuliahanPembagianKelasPeserta":t=this.$route.params.kelas_mhs_id;break}return t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,m=i("2877"),c=i("6544"),d=i.n(c),v=i("40dc"),u=i("5bc1"),A=i("8212"),h=i("8336"),S=i("b0af"),_=i("99d9"),E=i("ce7e"),k=i("553a"),C=i("132d"),g=i("adda"),p=i("8860"),I=i("56b0"),T=i("da13"),f=i("8270"),b=i("5d23"),L=i("34c3"),N=i("f6c4"),R=i("e449"),K=i("f774"),M=i("2fa4"),V=i("e0c7"),w=i("afd9"),U=i("2a7f"),P=Object(m["a"])(l,a,s,!1,null,null,null);e["a"]=P.exports;d()(P,{VAppBar:v["a"],VAppBarNavIcon:u["a"],VAvatar:A["a"],VBtn:h["a"],VCard:S["a"],VCardText:_["d"],VDivider:E["a"],VFooter:k["a"],VIcon:C["a"],VImg:g["a"],VList:p["a"],VListGroup:I["a"],VListItem:T["a"],VListItemAvatar:f["a"],VListItemContent:b["g"],VListItemIcon:L["a"],VListItemSubtitle:b["j"],VListItemTitle:b["k"],VMain:N["a"],VMenu:R["a"],VNavigationDrawer:K["a"],VSpacer:M["a"],VSubheader:V["a"],VSystemBar:w["a"],VToolbarTitle:U["c"]})}}]);