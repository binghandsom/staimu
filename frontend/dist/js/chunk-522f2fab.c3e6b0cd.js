(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-522f2fab"],{"3f3e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("SystemUserLayout",{attrs:{showrightsidebar:!1}},[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-file-document-edit-outline ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" BIODATA DIRI ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini digunakan untuk merubah informasi biodata diri. ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",{staticClass:"mb-4"},[e("v-card-title",[t._v(" IDENTITAS DIRI ")]),e("v-card-text",[e("v-text-field",{attrs:{label:"NAMA LENGKAP",rules:t.rule_nama_mhs,filled:""},model:{value:t.formdata.nama_mhs,callback:function(a){t.$set(t.formdata,"nama_mhs",a)},expression:"formdata.nama_mhs"}}),e("v-text-field",{attrs:{label:"TEMPAT LAHIR",rules:t.rule_tempat_lahir,filled:""},model:{value:t.formdata.tempat_lahir,callback:function(a){t.$set(t.formdata,"tempat_lahir",a)},expression:"formdata.tempat_lahir"}}),e("v-menu",{ref:"menuTanggalLahir",attrs:{"close-on-content-click":!1,"return-value":t.formdata.tanggal_lahir,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(a){return t.$set(t.formdata,"tanggal_lahir",a)},"update:return-value":function(a){return t.$set(t.formdata,"tanggal_lahir",a)}},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-text-field",t._g({attrs:{label:"TANGGAL LAHIR",readonly:"",filled:"",rules:t.rule_tanggal_lahir},model:{value:t.formdata.tanggal_lahir,callback:function(a){t.$set(t.formdata,"tanggal_lahir",a)},expression:"formdata.tanggal_lahir"}},i))]}}]),model:{value:t.menuTanggalLahir,callback:function(a){t.menuTanggalLahir=a},expression:"menuTanggalLahir"}},[e("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.formdata.tanggal_lahir,callback:function(a){t.$set(t.formdata,"tanggal_lahir",a)},expression:"formdata.tanggal_lahir"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){t.menuTanggalLahir=!1}}},[t._v("Cancel")]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return t.$refs.menuTanggalLahir.save(t.formdata.tanggal_lahir)}}},[t._v("OK")])],1)],1),e("v-radio-group",{attrs:{row:""},model:{value:t.formdata.jk,callback:function(a){t.$set(t.formdata,"jk",a)},expression:"formdata.jk"}},[t._v(" JENIS KELAMIN : "),e("v-radio",{attrs:{label:"LAKI-LAKI",value:"L"}}),e("v-radio",{attrs:{label:"PEREMPUAN",value:"P"}})],1),e("v-text-field",{attrs:{label:"NOMOR HP",filled:"",rules:t.rule_nomorhp},model:{value:t.formdata.nomor_hp,callback:function(a){t.$set(t.formdata,"nomor_hp",a)},expression:"formdata.nomor_hp"}}),e("v-text-field",{attrs:{label:"EMAIL",rules:t.rule_email,filled:""},model:{value:t.formdata.email,callback:function(a){t.$set(t.formdata,"email",a)},expression:"formdata.email"}}),e("v-text-field",{attrs:{label:"NAMA IBU KANDUNG",rules:t.rule_nama_ibu_kandung,filled:""},model:{value:t.formdata.nama_ibu_kandung,callback:function(a){t.$set(t.formdata,"nama_ibu_kandung",a)},expression:"formdata.nama_ibu_kandung"}})],1)],1),e("v-card",{staticClass:"mb-4"},[e("v-card-title",[t._v(" ALAMAT ")]),e("v-card-text",[e("v-select",{attrs:{label:"PROVINSI",items:t.daftar_provinsi,"item-text":"nama","item-value":"id","return-object":"",loading:t.btnLoadingProv,filled:""},model:{value:t.provinsi_id,callback:function(a){t.provinsi_id=a},expression:"provinsi_id"}}),e("v-select",{attrs:{label:"KABUPATEN/KOTA",items:t.daftar_kabupaten,"item-text":"nama","item-value":"id","return-object":"",loading:t.btnLoadingKab,filled:""},model:{value:t.kabupaten_id,callback:function(a){t.kabupaten_id=a},expression:"kabupaten_id"}}),e("v-select",{attrs:{label:"KECAMATAN",items:t.daftar_kecamatan,"item-text":"nama","item-value":"id","return-object":"",filled:""},model:{value:t.kecamatan_id,callback:function(a){t.kecamatan_id=a},expression:"kecamatan_id"}}),e("v-select",{attrs:{label:"DESA/KELURAHAN",items:t.daftar_desa,"item-text":"nama","item-value":"id","return-object":"",rules:t.rule_desa,filled:""},model:{value:t.desa_id,callback:function(a){t.desa_id=a},expression:"desa_id"}}),e("v-text-field",{attrs:{label:"ALAMAT RUMAH",rules:t.rule_alamat_rumah,filled:""},model:{value:t.formdata.alamat_rumah,callback:function(a){t.$set(t.formdata,"alamat_rumah",a)},expression:"formdata.alamat_rumah"}})],1)],1),e("v-card",{staticClass:"mb-4"},[e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},r=[],n=e("1da1"),s=(e("96cf"),e("e0b6")),o=e("e477"),l={name:"BiodataDiriMahasiswa",created:function(){this.user_id=this.$store.getters["auth/AttributeUser"]("id"),this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SYSTEM",disabled:!1,href:"#"},{text:"BIODATA DIRI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],dashboard:null,btnLoading:!1,btnLoadingProv:!1,btnLoadingKab:!1,btnLoadingKec:!1,btnLoadingFakultas:!1,user_id:null,kode_billing:"N.A",form_valid:!0,menuTanggalLahir:!1,daftar_provinsi:[],provinsi_id:0,daftar_kabupaten:[],kabupaten_id:0,daftar_kecamatan:[],kecamatan_id:0,daftar_desa:[],desa_id:0,daftar_fakultas:[],kode_fakultas:"",daftar_prodi:[],daftar_kelas:[],formdata:{nama_mhs:"",tempat_lahir:"",tanggal_lahir:"",jk:"L",nomor_hp:"",email:"",alamat_rumah:"",nama_ibu_kandung:"",kjur1:"",idkelas:""},rule_nama_mhs:[function(t){return!!t||"Nama Mahasiswa mohon untuk diisi !!!"},function(t){return/^[A-Za-z\s\\,\\.]*$/.test(t)||"Nama Mahasiswa hanya boleh string dan spasi"}],rule_tempat_lahir:[function(t){return!!t||"Tempat Lahir mohon untuk diisi !!!"}],rule_tanggal_lahir:[function(t){return!!t||"Tanggal Lahir mohon untuk diisi !!!"}],rule_nomorhp:[function(t){return!!t||"Nomor HP mohon untuk diisi !!!"},function(t){return/^\+[1-9]{1}[0-9]{1,14}$/.test(t)||"Nomor HP hanya boleh angka dan gunakan kode negara didepan seperti +6281214553388"}],rule_email:[function(t){return!!t||"Email mohon untuk diisi !!!"},function(t){return/.+@.+\..+/.test(t)||"Format E-mail mohon di isi dengan benar"}],rule_nama_ibu_kandung:[function(t){return!!t||"Nama Ibu Kandung mohon untuk diisi !!!"},function(t){return/^[A-Za-z\s\\,\\.]*$/.test(t)||"Nama Ibu Kandung hanya boleh string dan spasi"}],rule_desa:[function(t){return!!t||"Mohon Desa mohon untuk diisi !!!"}],rule_alamat_rumah:[function(t){return!!t||"Alamat Rumah mohon untuk diisi !!!"}],rule_kelas:[function(t){return!!t||"Kelas mohon untuk dipilih !!!"}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a,e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.$store.getters["uifront/getBentukPT"],this.$ajax.get("/datamaster/provinsi").then((function(t){var a=t.data;e.daftar_provinsi=a.provinsi})),"universitas"!=a){t.next=7;break}return t.next=5,this.$ajax.get("/datamaster/fakultas").then((function(t){var a=t.data;e.daftar_fakultas=a.fakultas}));case 5:t.next=9;break;case 7:return t.next=9,this.$ajax.get("/datamaster/programstudi").then((function(t){var a=t.data;e.daftar_prodi=a.prodi}));case 9:return this.$ajax.get("/datamaster/kelas").then((function(t){var a=t.data;e.daftar_kelas=a.kelas})),t.next=12,this.$ajax.get("/spmb/formulirpendaftaran/"+this.user_id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;e.formdata.nama_mhs=i.formulir.nama_mhs,e.formdata.tempat_lahir=i.formulir.tempat_lahir,e.formdata.tanggal_lahir=i.formulir.tanggal_lahir,e.formdata.jk=i.formulir.jk,e.formdata.nomor_hp="+"+i.formulir.nomor_hp,e.formdata.email=i.formulir.email,e.formdata.nama_ibu_kandung=i.formulir.nama_ibu_kandung,e.provinsi_id={id:""+i.formulir.address1_provinsi_id,nama:""+i.formulir.address1_provinsi},e.kabupaten_id={id:""+i.formulir.address1_kabupaten_id,nama:""+i.formulir.address1_kabupaten},e.kecamatan_id={id:""+i.formulir.address1_kecamatan_id,nama:""+i.formulir.address1_kecamatan},e.desa_id={id:""+i.formulir.address1_desa_id,nama:""+i.formulir.address1_kelurahan},e.formdata.alamat_rumah=i.formulir.alamat_rumah,"universitas"==a&&null!=i.formulir.kode_fakultas&&(e.kode_fakultas=i.formulir.kode_fakultas),e.formdata.kjur1=i.formulir.kjur1,e.formdata.idkelas=i.formulir.idkelas}));case 12:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),save:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/kemahasiswaan/biodata/"+this.user_id+"/update",{_method:"put",nama_mhs:this.formdata.nama_mhs,tempat_lahir:this.formdata.tempat_lahir,tanggal_lahir:this.formdata.tanggal_lahir,jk:this.formdata.jk,nomor_hp:this.formdata.nomor_hp,email:this.formdata.email,nama_ibu_kandung:this.formdata.nama_ibu_kandung,address1_provinsi_id:this.provinsi_id.id,address1_provinsi:this.provinsi_id.nama,address1_kabupaten_id:this.kabupaten_id.id,address1_kabupaten:this.kabupaten_id.nama,address1_kecamatan_id:this.kecamatan_id.id,address1_kecamatan:this.kecamatan_id.nama,address1_desa_id:this.desa_id.id,address1_kelurahan:this.desa_id.nama,alamat_rumah:this.formdata.alamat_rumah},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){a.$router.go(),a.btnLoading=!1})).catch((function(){a.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},watch:{provinsi_id:function(t){var a=this;null!=t.id&&""!=t.id&&(this.btnLoadingProv=!0,this.$ajax.get("/datamaster/provinsi/"+t.id+"/kabupaten").then((function(t){var e=t.data;a.daftar_kabupaten=e.kabupaten,a.btnLoadingProv=!1})),this.daftar_kecamatan=[])},kabupaten_id:function(t){var a=this;null!=t.id&&""!=t.id&&(this.btnLoadingKab=!0,this.$ajax.get("/datamaster/kabupaten/"+t.id+"/kecamatan").then((function(t){var e=t.data;a.daftar_kecamatan=e.kecamatan,a.btnLoadingKab=!1})))},kecamatan_id:function(t){var a=this;null!=t.id&&""!=t.id&&(this.btnLoadingKec=!0,this.$ajax.get("/datamaster/kecamatan/"+t.id+"/desa").then((function(t){var e=t.data;a.daftar_desa=e.desa,a.btnLoadingKec=!1})))},kode_fakultas:function(t){var a=this;this.btnLoadingFakultas=!0,this.$ajax.get("/datamaster/fakultas/"+t+"/programstudi").then((function(t){var e=t.data;a.daftar_prodi=e.programstudi,a.btnLoadingFakultas=!1}))}},components:{SystemUserLayout:s["a"],ModuleHeader:o["a"]}},d=l,u=e("2877"),m=e("6544"),c=e.n(m),v=e("0798"),_=e("2bc5"),f=e("8336"),h=e("b0af"),p=e("99d9"),b=e("62ad"),k=e("a523"),g=e("2e4b"),S=e("4bd4"),A=e("132d"),E=e("e449"),T=e("67b6"),C=e("43a6"),x=e("0fd9"),R=e("b974"),L=e("2fa4"),I=e("8654"),y=Object(u["a"])(d,i,r,!1,null,null,null);a["default"]=y.exports;c()(y,{VAlert:v["a"],VBreadcrumbs:_["a"],VBtn:f["a"],VCard:h["a"],VCardActions:p["b"],VCardText:p["d"],VCardTitle:p["e"],VCol:b["a"],VContainer:k["a"],VDatePicker:g["a"],VForm:S["a"],VIcon:A["a"],VMenu:E["a"],VRadio:T["a"],VRadioGroup:C["a"],VRow:x["a"],VSelect:R["a"],VSpacer:L["a"],VTextField:I["a"]})},e0b6:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD USERS")])],1)],1):t._e(),e("v-list-item",{attrs:{link:"",to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROFIL USER ")])],1)],1),e("v-divider"),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?e("v-list-item",{attrs:{link:"",to:"/system-users/permissions"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-key")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?e("v-list-item",{attrs:{link:"",to:"/system-users/roles"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-group")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?e("v-divider"):t._e(),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PUSLAHTA_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/puslahta"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PUSLAHTA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e(),"dosen"==t.dashboard?e("v-list-item",{attrs:{link:"",to:"/system-users/biodatadiridosen"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e(),"mahasiswa"==t.dashboard?e("v-list-item",{attrs:{link:"",to:"/system-users/biodatadirimahasiswa"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e()],1)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),e("v-footer",{attrs:{app:"",padless:"",fixed:""}},[e("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[e("v-divider"),e("v-card-text",{staticClass:"py-2 black--text text-center"},[e("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),e("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[e("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},r=[],n=e("5530"),s=(e("5319"),e("ac1f"),e("2f62")),o={name:"SystemUserLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])(Object(n["a"])({},Object(s["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),u=e("6544"),m=e.n(u),c=e("40dc"),v=e("5bc1"),_=e("8212"),f=e("8336"),h=e("b0af"),p=e("99d9"),b=e("ce7e"),k=e("553a"),g=e("132d"),S=e("adda"),A=e("8860"),E=e("da13"),T=e("8270"),C=e("5d23"),x=e("34c3"),R=e("f6c4"),L=e("e449"),I=e("f774"),y=e("2fa4"),N=e("afd9"),$=e("2a7f"),M=Object(d["a"])(l,i,r,!1,null,null,null);a["a"]=M.exports;m()(M,{VAppBar:c["a"],VAppBarNavIcon:v["a"],VAvatar:_["a"],VBtn:f["a"],VCard:h["a"],VCardText:p["d"],VDivider:b["a"],VFooter:k["a"],VIcon:g["a"],VImg:S["a"],VList:A["a"],VListItem:E["a"],VListItemAvatar:T["a"],VListItemContent:C["g"],VListItemIcon:x["a"],VListItemSubtitle:C["j"],VListItemTitle:C["k"],VMain:R["a"],VMenu:L["a"],VNavigationDrawer:I["a"],VSpacer:y["a"],VSystemBar:N["a"],VToolbarTitle:$["c"]})},e477:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:t.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},r=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},s=n,o=e("2877"),l=e("6544"),d=e.n(l),u=e("62ad"),m=e("a523"),c=e("132d"),v=e("0fd9"),_=Object(o["a"])(s,i,r,!1,null,null,null);a["a"]=_.exports;d()(_,{VCol:u["a"],VContainer:m["a"],VIcon:c["a"],VRow:v["a"]})}}]);