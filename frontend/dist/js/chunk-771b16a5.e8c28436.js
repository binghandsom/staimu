(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-771b16a5"],{d68c8:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AkademikLayout",{attrs:{showrightsidebar:!1}},[e("ModuleHeader",{scopedSlots:a._u([{key:"icon",fn:function(){return[a._v(" mdi-run-fast ")]},proxy:!0},{key:"name",fn:function(){return[a._v(" UJIAN MUNAQASAH ")]},proxy:!0},{key:"subtitle",fn:function(){return[a._v(" TAHUN AKADEMIK "+a._s(a.tahun_akademik)+" - "+a._s(a.nama_prodi)+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:a.breadcrumbs},scopedSlots:a._u([{key:"divider",fn:function(){return[e("v-icon",[a._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[a._v(" Halaman untuk melakukan tambah ujian munaqasah ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:a.form_valid,callback:function(t){a.form_valid=t},expression:"form_valid"}},[e("v-card",[e("v-card-title",[a._v(" CEK PERSYARATAN ")]),e("v-card-text",[e("v-alert",{attrs:{type:"info"}},[a._v(" sebelum menambah ujian munaqasah sistem akan melakukan pengecekan persyaratan. Silahkan masukan NIM, kemudian tekan tombol "),e("v-icon",[a._v("mdi-send")]),a._v(" untuk memproses. ")],1),e("v-text-field",{attrs:{label:"NIM",rules:a.rule_nim,outlined:"",disabled:"mahasiswa"==a.dashboard},model:{value:a.nim,callback:function(t){a.nim=t},expression:"nim"}}),e("v-btn",{staticClass:"ma-2",attrs:{disabled:!a.form_valid||a.btnLoading,color:"primary",icon:""},on:{click:function(t){return t.stopPropagation(),a.cekPersyaratan(t)}}},[e("v-icon",[a._v("mdi-send")])],1)],1),e("v-card-text",[e("div",{staticClass:"v-data-table theme--light"},[e("div",{staticClass:"v-data-table__wrapper"},[e("table",[e("thead",{staticClass:"v-data-table-header"},[e("tr",[e("th",{staticClass:"text-start",staticStyle:{width:"400px","min-width":"400px"}},[a._v(" NAMA PERSYARATAN ")]),e("th",{staticClass:"text-start",staticStyle:{width:"120px","min-width":"120px"}},[a._v(" KETERANGAN ")]),e("th",{staticClass:"text-start",staticStyle:{width:"120px","min-width":"120px"}},[a._v(" STATUS ")]),e("th",{staticClass:"text-start",staticStyle:{width:"100px","min-width":"100px"}},[a._v(" AKSI ")])])]),e("tbody",a._l(a.datatable,(function(t,i){return e("tr",{key:t.id},[e("td",{staticClass:"text-start"},[a._v(" "+a._s(t.nama_persyaratan)+" "),"2021-ujian-munaqasah-5"==t.persyaratan_id||"2021-ujian-munaqasah-6"==t.persyaratan_id||"2021-ujian-munaqasah-7"==t.persyaratan_id||"2021-ujian-munaqasah-8"==t.persyaratan_id||"2021-ujian-munaqasah-9"==t.persyaratan_id?e("div",[e("FileUpload",{attrs:{persyaratan_ujian_munaqasah_id:t.id,item:t,index:i}})],1):a._e()]),e("td",{staticClass:"text-start"},[a._v(" "+a._s(t.keterangan)+" ")]),e("td",{staticClass:"text-start"},[a._v(" "+a._s(t.nama_status)+" ")]),"2021-ujian-munaqasah-5"==t.persyaratan_id||"2021-ujian-munaqasah-6"==t.persyaratan_id||"2021-ujian-munaqasah-7"==t.persyaratan_id||"2021-ujian-munaqasah-8"==t.persyaratan_id||"2021-ujian-munaqasah-9"==t.persyaratan_id?e("td",[e("v-btn",{attrs:{small:"",icon:"",disabled:!t.file},on:{click:function(e){return e.stopPropagation(),a.previewImagePersyaratan(t)}}},[e("v-icon",[a._v(" mdi-eye ")])],1)],1):e("td",[a._v(" N.A ")])])})),0)]),e("v-dialog",{attrs:{"max-width":"700px",persistent:""},model:{value:a.dialogfrm,callback:function(t){a.dialogfrm=t},expression:"dialogfrm"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:a.form_valid,callback:function(t){a.form_valid=t},expression:"form_valid"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[a._v("TAMBAH DATA SKRIPSI")])]),e("v-card-text",[e("v-text-field",{attrs:{label:"JUDUL SKRIPSI:",outlined:"",rules:a.rule_judul_skripsi},model:{value:a.formdata.judul_skripsi,callback:function(t){a.$set(a.formdata,"judul_skripsi",t)},expression:"formdata.judul_skripsi"}}),e("v-textarea",{attrs:{label:"ABSTRAK:",outlined:"",rules:a.rule_abstrak},model:{value:a.formdata.abstrak,callback:function(t){a.$set(a.formdata,"abstrak",t)},expression:"formdata.abstrak"}}),e("v-autocomplete",{attrs:{label:"DOSEN PEMBIMBING I:",items:a.daftar_dosen,"item-text":"nama_dosen","item-value":"id",rules:a.rule_dosen_pembimbing,outlined:""},model:{value:a.formdata.pembimbing_1,callback:function(t){a.$set(a.formdata,"pembimbing_1",t)},expression:"formdata.pembimbing_1"}}),e("v-autocomplete",{attrs:{label:"DOSEN PEMBIMBING II:",items:a.daftar_dosen,"item-text":"nama_dosen","item-value":"id",rules:a.rule_dosen_pembimbing,outlined:""},model:{value:a.formdata.pembimbing_2,callback:function(t){a.$set(a.formdata,"pembimbing_2",t)},expression:"formdata.pembimbing_2"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return t.stopPropagation(),a.closedialogfrm(t)}}},[a._v("BATAL")]),e("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!a.form_valid||a.btnLoading},on:{click:function(t){return t.stopPropagation(),a.save(t)}}},[a._v(" SIMPAN ")])],1)],1)],1)],1),e("v-dialog",{model:{value:a.dialogpreviewpersyaratan,callback:function(t){a.dialogpreviewpersyaratan=t},expression:"dialogpreviewpersyaratan"}},[e("v-carousel",{attrs:{height:"auto"}},a._l(a.slides,(function(t,i){return e("v-carousel-item",{key:i,attrs:{src:t.path}},[e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"display-3"},[a._v(" "+a._s(t.nama_persyaratan)+" ")])])],1)})),1)],1)],1)])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return t.stopPropagation(),a.exit(t)}}},[a._v(" BATAL ")]),e("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!a.form_valid||a.btnLoading||!a.iscomplete},on:{click:function(t){return t.stopPropagation(),a.addItem(t)}}},[a._v(" BUAT ")])],1)],1)],1)],1)],1)],1)],1)},n=[],r=e("1da1"),s=(e("96cf"),e("b64b"),e("e60c")),d=e("e477"),o=e("d396"),u={name:"PerkuliahanUjianMunaqasahTambah",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"PERKULIAHAN",disabled:!1,href:"#"},{text:"UJIAN MUNAQASAH",disabled:!1,href:"/akademik/perkuliahan/ujianmunaqasah"},{text:"TAMBAH",disabled:!0,href:"#"}];var a=this.$store.getters["uiadmin/getProdiID"];this.prodi_id=a,this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](a),this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],"mahasiswa"==this.dashboard&&(this.data_mhs=this.$store.getters["auth/User"],this.data_mhs["user_id"]=this.data_mhs.id,this.data_mhs["nim"]=this.data_mhs.username,this.nim=this.$store.getters["auth/AttributeUser"]("username"));var t=this.$store.getters["uiadmin/Page"]("perkuliahanujianmunaqasah");"undefined"===typeof t?this.$store.dispatch("uiadmin/addToPages",{name:"perkuliahanujianmunaqasah",data_mhs:{nim:this.nim}}):Object.keys(t.data_mhs).length>1&&(this.data_mhs=t.data_mhs,this.nim=t.data_mhs.nim)},mounted:function(){this.fetchPersyaratanMhs()},data:function(){return{dashboard:null,firstloading:!0,prodi_id:null,nama_prodi:null,tahun_akademik:null,btnLoading:!1,datatableLoading:!1,dialogdetailitem:!1,datatable:[],headers:[{text:"NAMA PERSYARATAN",value:"nama_persyaratan",sortable:!0,width:400},{text:"KETERANGAN",value:"keterangan",sortable:!1,width:120},{text:"STATUS",value:"status",sortable:!1,width:120},{text:"AKSI",value:"actions",sortable:!1,width:100}],slides:[],dialogpreviewpersyaratan:!1,nim:"",dialogfrm:!1,data_mhs:[],form_valid:!0,iscomplete:!0,daftar_dosen:[],formdata:{id:null,user_id:null,judul_skripsi:"",abstrak:"",pembimbing_1:null,pembimbing_2:null,keterangan:""},formdefault:{id:null,user_id:null,judul_skripsi:"",abstrak:"",pembimbing_1:null,pembimbing_2:null,keterangan:""},rule_nim:[function(a){return!!a||"Nomor Induk Mahasiswa (NIM) mohon untuk diisi !!!"},function(a){return/^[0-9]+$/.test(a)||"Nomor Induk Mahasiswa (NIM) hanya boleh angka"}],rule_judul_skripsi:[function(a){return!!a||"Mohon untuk di isi judul skrispi !!!"}],rule_abstrak:[function(a){return!!a||"Mohon untuk di isi abstrak skrispi !!!"}],rule_dosen_pembimbing:[function(a){return!!a||"Mohon untuk di pilih dosen pembimbing ke 1 dan 2 !!!"}]}},methods:{fetchPersyaratanMhs:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("undefined"===typeof a.data_mhs.nim){t.next=4;break}return a.datatableLoading=!0,t.next=4,a.$ajax.get("/akademik/perkuliahan/ujianmunaqasah/"+a.data_mhs.nim,{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datatable=e.daftar_persyaratan,a.datatableLoading=!1,a.iscomplete=e.iscomplete}));case 4:case"end":return t.stop()}}),t)})))()},cekPersyaratan:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.$refs.frmdata.validate()){t.next=5;break}return a.btnLoading=!0,a.datatableLoading=!0,t.next=5,a.$ajax.post("/akademik/perkuliahan/ujianmunaqasah/cekpersyaratan",{nim:a.nim},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.iscomplete=e.iscomplete;var i=a.$store.getters["uiadmin/Page"]("perkuliahanujianmunaqasah");a.data_mhs=e.mahasiswa,i.data_mhs=a.data_mhs,a.$store.dispatch("uiadmin/updatePage",i),a.datatable=e.daftar_persyaratan,a.btnLoading=!1,a.datatableLoading=!1})).catch((function(){a.btnLoading=!1,a.datatableLoading=!1}));case 5:case"end":return t.stop()}}),t)})))()},save:function(){var a=Object(r["a"])(regeneratorRuntime.mark((function a(){var t=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!this.$refs.frmdata.validate()){a.next=4;break}return this.btnLoading=!0,a.next=4,this.$ajax.post("/akademik/perkuliahan/ujianmunaqasah/store",{user_id:this.data_mhs.user_id,judul_skripsi:this.formdata.judul_skripsi,abstrak:this.formdata.abstrak,pembimbing_1:this.formdata.pembimbing_1,pembimbing_2:this.formdata.pembimbing_2,ta:this.tahun_akademik},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.$router.push("/akademik/perkuliahan/ujianmunaqasah/"+e.ujian.id+"/detail"),t.btnLoading=!1})).catch((function(){t.btnLoading=!1}));case 4:case"end":return a.stop()}}),a,this)})));function t(){return a.apply(this,arguments)}return t}(),previewImagePersyaratan:function(a){null==a.file?this.dialogpreviewpersyaratan=!1:(this.slides.push({path:this.$api.url+"/"+a.file,nama_persyaratan:a.nama_persyaratan}),this.dialogpreviewpersyaratan=!0)},addItem:function(){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.$ajax.get("/system/usersdosen",{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.daftar_dosen=e.users,a.dialogfrm=!0}));case 2:case"end":return t.stop()}}),t)})))()},closedialogfrm:function(){var a=this;this.dialogfrm=!1,setTimeout((function(){a.formdata=Object.assign({},a.formdefault),a.editedIndex=-1,a.$refs.frmdata.reset()}),300)},exit:function(){var a=this;setTimeout((function(){var t=a.$store.getters["uiadmin/Page"]("perkuliahanujianmunaqasah");t.data_mhs={nim:""},a.$store.dispatch("uiadmin/updatePage",t),a.$router.push("/akademik/perkuliahan/ujianmunaqasah")}),300)}},components:{AkademikLayout:s["a"],ModuleHeader:d["a"],FileUpload:o["a"]}},l=u,m=e("2877"),c=e("6544"),h=e.n(c),p=e("0798"),b=e("c6a6"),f=e("2bc5"),_=e("8336"),v=e("b0af"),k=e("99d9"),g=e("5e66"),x=e("3e35"),y=e("62ad"),A=e("a523"),w=e("169a"),j=e("4bd4"),I=e("132d"),$=e("0fd9"),T=e("2fa4"),P=e("8654"),M=e("a844"),N=Object(m["a"])(l,i,n,!1,null,null,null);t["default"]=N.exports;h()(N,{VAlert:p["a"],VAutocomplete:b["a"],VBreadcrumbs:f["a"],VBtn:_["a"],VCard:v["a"],VCardActions:k["b"],VCardText:k["d"],VCardTitle:k["e"],VCarousel:g["a"],VCarouselItem:x["a"],VCol:y["a"],VContainer:A["a"],VDialog:w["a"],VForm:j["a"],VIcon:I["a"],VRow:$["a"],VSpacer:T["a"],VTextField:P["a"],VTextarea:M["a"]})}}]);