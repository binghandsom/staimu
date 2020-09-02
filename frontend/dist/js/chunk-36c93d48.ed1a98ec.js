(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36c93d48"],{"4bd4":function(t,a,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var e=i("5530"),s=i("58df"),r=i("7e2b"),n=i("3206");a["a"]=Object(s["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,i=function(t){return t.$watch("hasError",(function(i){a.$set(a.errorBag,t._uid,i)}),{immediate:!0})},e={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(a.errorBag.hasOwnProperty(t._uid)||(e.valid=i(t)))})):e.valid=i(t),e},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var i=this.watchers.find((function(t){return t._uid===a._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(e["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,a,i){"use strict";var e=i("5607"),s=i("2b0e");a["a"]=s["a"].extend({name:"rippleable",directives:{ripple:e["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"9d01":function(t,a,i){},b73d:function(t,a,i){"use strict";i("0481"),i("4069");var e=i("5530"),s=(i("ec29"),i("9d01"),i("fe09")),r=i("c37a"),n=i("c3f0"),o=i("0789"),l=i("490a"),d=i("80d2");a["a"]=s["a"].extend({name:"v-switch",directives:{Touch:n["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(e["a"])({},r["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(e["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(e["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(e["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(o["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===d["y"].left&&this.isActive||t.keyCode===d["y"].right&&!this.isActive)&&this.onChange()}}})},e1f2:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("AkademikLayout",{scopedSlots:t._u([{key:"filtersidebar",fn:function(){return[i("Filter18",{ref:"filter18",on:{changeTahunAkademik:t.changeTahunAkademik,changeProdi:t.changeProdi}})]},proxy:!0}])},[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-book ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" MATAKULIAH ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk mengelola nama-nama matakuliah program studi setiap angkatannya. ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","show-expand":"",expanded:t.expanded,"single-expand":!0,"disable-pagination":!0,"hide-default-footer":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v("DAFTAR MATAKULIAH")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"primary",dark:""},on:{click:function(a){return a.stopPropagation(),t.showDialogCopyMatkul(a)}}},[t._v("SALIN MATAKULIAH")]),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(a){return a.stopPropagation(),t.tambahItem(a)}}},[t._v("TAMBAH")]),i("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogfrm,callback:function(a){t.dialogfrm=a},expression:"dialogfrm"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[t.group_matakuliah&&t.group_matakuliah.length>0?i("v-select",{attrs:{label:"KELOMPOK MATAKULIAH",items:t.group_matakuliah,"item-text":"group_alias","item-value":"id_group",outlined:"",rules:t.rule_group_matakuliah},model:{value:t.formdata.id_group,callback:function(a){t.$set(t.formdata,"id_group",a)},expression:"formdata.id_group"}}):t._e(),i("v-text-field",{attrs:{label:"KODE MATAKULIAH",outlined:"",rules:t.rule_kode_matkul},model:{value:t.formdata.kmatkul,callback:function(a){t.$set(t.formdata,"kmatkul",a)},expression:"formdata.kmatkul"}}),i("v-text-field",{attrs:{label:"NAMA MATAKULIAH",outlined:"",rules:t.rule_nama_matakuliah},model:{value:t.formdata.nmatkul,callback:function(a){t.$set(t.formdata,"nmatkul",a)},expression:"formdata.nmatkul"}}),i("v-select",{attrs:{label:"SKS",items:t.daftar_sks,outlined:"",rules:t.rule_sks},model:{value:t.formdata.sks,callback:function(a){t.$set(t.formdata,"sks",a)},expression:"formdata.sks"}}),i("v-select",{attrs:{label:"SKS TATAP MUKA",items:t.daftar_sks,outlined:"",rules:t.rule_sks_tatap_muka},model:{value:t.formdata.sks_tatap_muka,callback:function(a){t.$set(t.formdata,"sks_tatap_muka",a)},expression:"formdata.sks_tatap_muka"}}),i("v-select",{attrs:{label:"SKS PRAKTIKUM",clearable:!0,items:t.daftar_sks,outlined:""},model:{value:t.formdata.sks_praktikum,callback:function(a){t.$set(t.formdata,"sks_praktikum",a)},expression:"formdata.sks_praktikum"}}),i("v-select",{attrs:{label:"SKS PRAKTIK LAPANGAN",items:t.daftar_sks,clearable:!0,outlined:""},model:{value:t.formdata.sks_praktik_lapangan,callback:function(a){t.$set(t.formdata,"sks_praktik_lapangan",a)},expression:"formdata.sks_praktik_lapangan"}}),i("v-select",{attrs:{label:"SEMESTER",items:t.daftar_semester,outlined:"",rules:t.rule_semester},model:{value:t.formdata.semester,callback:function(a){t.$set(t.formdata,"semester",a)},expression:"formdata.semester"}}),i("v-select",{attrs:{label:"MIMIMAL NILAI",items:t.daftar_nilai,outlined:"",rules:t.rule_minimal_nilai},model:{value:t.formdata.minimal_nilai,callback:function(a){t.$set(t.formdata,"minimal_nilai",a)},expression:"formdata.minimal_nilai"}}),t.daftar_konsentrasi&&t.daftar_konsentrasi.length>0?i("v-select",{attrs:{label:"KONSENTRASI",items:t.group_matakuliah,"item-text":"nama_konsentrasi","item-value":"id_konsentrasi",outlined:""},model:{value:t.formdata.idkonsentrasi,callback:function(a){t.$set(t.formdata,"idkonsentrasi",a)},expression:"formdata.idkonsentrasi"}}):t._e(),i("v-switch",{attrs:{label:"MATAKULIAH PILIHAN"},model:{value:t.formdata.ispilihan,callback:function(a){t.$set(t.formdata,"ispilihan",a)},expression:"formdata.ispilihan"}}),i("v-switch",{attrs:{label:"MATAKULIAH LINTAS PROGRAM STUDI"},model:{value:t.formdata.islintas_prodi,callback:function(a){t.$set(t.formdata,"islintas_prodi",a)},expression:"formdata.islintas_prodi"}}),i("v-switch",{attrs:{label:"SYARAT SKRIPSI"},model:{value:t.formdata.syarat_skripsi,callback:function(a){t.$set(t.formdata,"syarat_skripsi",a)},expression:"formdata.syarat_skripsi"}}),i("v-switch",{attrs:{label:"STATUS"},model:{value:t.formdata.status,callback:function(a){t.$set(t.formdata,"status",a)},expression:"formdata.status"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogfrm(a)}}},[t._v("BATAL")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"750px",persistent:""},model:{value:t.dialogdetailitem,callback:function(a){t.dialogdetailitem=a},expression:"dialogdetailitem"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("DETAIL DATA")])]),i("v-card-text",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("ID :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("SKS :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.sks)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("KODE MATAKULIAH :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.kmatkul)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("SKS TATAP MUKA :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.sks_tatap_muka)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("NAMA MATAKULIAH :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.nmatkul)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("SKS PRAKTIKUM :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.sks_praktikum2)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("SEMESTER :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.semester)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("SKS PRAKTIK LAPANGAN :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.sks_praktik_lapangan2)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("MINIMAL NILAI :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.minimal_nilai)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("SYARAT SKRIPSI :")]),i("v-card-subtitle",[t._v(" "+t._s(1==t.formdata.syarat_skripsi?"YA":"TIDAK")+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("PRODI / TA :")]),i("v-card-subtitle",[t._v(" "+t._s(t.formdata.nama_prodi)+" - "+t._s(t.formdata.tahun_akademik)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e(),i("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("STATUS :")]),i("v-card-subtitle",[t._v(" "+t._s(1==t.formdata.status?"AKTIF":"NON-AKTIF")+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?i("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogdetailitem(a)}}},[t._v("KELUAR")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogcopymatkul,callback:function(a){t.dialogcopymatkul=a},expression:"dialogcopymatkul"}},[i("v-form",{ref:"frmdialogcopymatkul",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("SALIN MATAKULIAH")])]),i("v-card-subtitle",[t._v(" Program Studi "+t._s(t.nama_prodi)+" ")]),i("v-card-text",[i("v-alert",{staticClass:"info",attrs:{dark:""}},[t._v(" Salin matakuliah dari tahun akademik berikut ke tahun akademik "+t._s(t.tahun_akademik)+" ")]),i("v-select",{attrs:{items:t.daftar_ta,"item-text":"tahun_akademik","item-value":"tahun",label:"TAHUN AKADEMIK",rules:t.rule_dari_tahun_akademik,outlined:""},model:{value:t.dari_tahun_akademik,callback:function(a){t.dari_tahun_akademik=a},expression:"dari_tahun_akademik"}})],1),i("v-card-actions",[i("v-spacer"),i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogsalinmatkul(a)}}},[t._v("BATAL")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.salinmatkul(a)}}},[t._v(" SALIN ")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var e=a.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.viewItem(e)}}},[t._v(" mdi-eye ")]),i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.editItem(e)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.deleteItem(e)}}},[t._v(" mdi-delete ")])]}},{key:"expanded-item",fn:function(a){var e=a.headers,s=a.item;return[i("td",{staticClass:"text-center",attrs:{colspan:e.length}},[i("v-col",{attrs:{cols:"12"}},[i("strong",[t._v("ID:")]),t._v(t._s(s.id)+" "),i("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),i("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},t.datatable.length>0?{key:"body.append",fn:function(){return[i("tr",{staticClass:"grey lighten-4 font-weight-black"},[i("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("TOTAL")]),i("td",{staticClass:"text-center"},[t._v(t._s(t.totalSKS))]),i("td"),i("td")])]},proxy:!0}:null,{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}],null,!0)})],1)],1)],1)],1)},s=[],r=(i("c975"),i("a434"),i("5530")),n=(i("96cf"),i("1da1")),o=i("2f62"),l=i("e60c"),d=i("e477"),u=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-list-item",[i("v-list-item-content",[i("v-select",{attrs:{items:t.daftar_prodi,"item-text":"text","item-value":"id",label:"PROGRAM STUDI",outlined:""},model:{value:t.prodi_id,callback:function(a){t.prodi_id=a},expression:"prodi_id"}}),i("v-select",{attrs:{items:t.daftar_ta,"item-text":"tahun_akademik","item-value":"tahun",label:"TAHUN AKADEMIK",outlined:""},model:{value:t.tahun_akademik,callback:function(a){t.tahun_akademik=a},expression:"tahun_akademik"}})],1)],1)},c=[],m={name:"FilterMode7",created:function(){this.daftar_prodi=this.$store.getters["uiadmin/getDaftarProdi"],this.prodi_id=this.$store.getters["uiadmin/getProdiID"],this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"]},data:function(){return{firstloading:!0,daftar_prodi:[],prodi_id:null,daftar_ta:[],tahun_akademik:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_akademik:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunAkademik",t),this.$emit("changeTahunAkademik",t))},prodi_id:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateProdi",t),this.$emit("changeProdi",t))}}},h=m,v=i("2877"),f=i("6544"),p=i.n(f),k=i("da13"),_=i("5d23"),g=i("b974"),b=Object(v["a"])(h,u,c,!1,null,null,null),A=b.exports;p()(b,{VListItem:k["a"],VListItemContent:_["a"],VSelect:g["a"]});var x={name:"Matakuliah",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"MATAKULIAH",disabled:!0,href:"#"}];var t=this.$store.getters["uiadmin/getProdiID"];this.prodi_id=t,this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.initialize()},data:function(){return{firstloading:!0,prodi_id:null,nama_prodi:null,tahun_akademik:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"KODE",value:"kmatkul",sortable:!0,width:120},{text:"NAMA MATAKULIAH",value:"nmatkul",sortable:!0},{text:"KELOMPOK",value:"group_alias",sortable:!0,width:120},{text:"SKS",value:"sks",sortable:!0,width:80,align:"center"},{text:"SMT",value:"semester",sortable:!0,width:80},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",dialogfrm:!1,dialogdetailitem:!1,dialogcopymatkul:!1,form_valid:!0,daftar_ta:[],dari_tahun_akademik:null,group_matakuliah:[],daftar_konsentrasi:[],daftar_semester:[1,2,3,4,5,6,7,8],daftar_sks:[1,2,3,4,5,6,7,8,9,10,11,12],daftar_nilai:["A","A-","A/B","(B+)","B","B-","B/C","(C+)","C","C-","C/D","(D+)","D","E"],formdata:{id:"",id_group:null,nama_group:null,group_alias:null,kmatkul:"",nmatkul:"",sks:"",idkonsentrasi:null,ispilihan:!1,islintas_prodi:!1,semester:"",sks_tatap_muka:"",sks_praktikum:null,sks_praktik_lapangan:null,minimal_nilai:"C",syarat_skripsi:!0,status:!0,ta:"",kjur:""},formdefault:{id:"",id_group:null,nama_group:null,group_alias:null,kmatkul:"",nmatkul:"",sks:"",idkonsentrasi:null,ispilihan:!1,islintas_prodi:!1,semester:"",sks_tatap_muka:"",sks_praktikum:null,sks_praktik_lapangan:null,minimal_nilai:"C",syarat_skripsi:!0,status:!0,ta:"",kjur:""},editedIndex:-1,rule_group_matakuliah:[function(t){return!!t||"Mohon Group Matakuliah untuk dipilih !!!"}],rule_kode_matkul:[function(t){return!!t||"Kode Program Studi mohon untuk diisi !!!"}],rule_nama_matakuliah:[function(t){return!!t||"Mohon Nama Program Studi untuk diisi !!!"}],rule_sks:[function(t){return!!t||"Mohon SKS Matakuliah untuk dipilih !!!"}],rule_sks_tatap_muka:[function(t){return!!t||"Mohon SKS Matakuliah Tatap Muka untuk dipilih !!!"}],rule_semester:[function(t){return!!t||"Mohon Semester Matakuliah ini diselenggarakan untuk dipilih !!!"}],rule_minimal_nilai:[function(t){return!!t||"Mohon Minimal nilai kelulusan matakuliah untuk dipilih !!!"}],rule_dari_tahun_akademik:[function(t){return!!t||"Mohon Tahun Akademik sumber data matakuliah untuk dipilih !!!"}]}},methods:{changeTahunAkademik:function(t){this.tahun_akademik=t},changeProdi:function(t){this.prodi_id=t},initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/akademik/matakuliah",{prodi_id:this.prodi_id,ta:this.tahun_akademik},{headers:{Authorization:this.TOKEN}}).then((function(t){var i=t.data;a.datatable=i.matakuliah,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:this.firstloading=!1,this.$refs.filter18.setFirstTimeLoading(this.firstloading);case 5:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},tambahItem:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/akademik/groupmatakuliah",{headers:{Authorization:this.TOKEN}}).then((function(t){var i=t.data;a.group_matakuliah=i.group_matakuliah}));case 2:this.dialogfrm=!0;case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),viewItem:function(t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.formdata=t,i.next=3,a.$ajax.get("/akademik/matakuliah/"+t.id,{headers:{Authorization:a.TOKEN}}).then((function(t){var i=t.data;a.formdata=i.matakuliah}));case 3:a.dialogdetailitem=!0;case 4:case"end":return i.stop()}}),i)})))()},editItem:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.editedIndex=this.datatable.indexOf(a),t.next=3,this.$ajax.get("/akademik/groupmatakuliah",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data;i.group_matakuliah=a.group_matakuliah}));case 3:return t.next=5,this.$ajax.get("/akademik/matakuliah/"+a.id,{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data;i.formdata=a.matakuliah}));case 5:this.dialogfrm=!0;case 6:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),showDialogCopyMatkul:function(){for(var t=this.$store.getters["uiadmin/getDaftarTA"],a=0;a<t.length;a++){var i=t[a];this.tahun_akademik!=i.tahun&&this.daftar_ta.push({tahun:i.tahun,tahun_akademik:i.tahun_akademik})}this.dialogcopymatkul=!0},save:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=9;break}if(this.btnLoading=!0,!(this.editedIndex>-1)){t.next=7;break}return t.next=5,this.$ajax.post("/akademik/matakuliah/"+this.formdata.id,{_method:"PUT",id_group:this.formdata.id_group,nama_group:this.formdata.nama_group,group_alias:this.formdata.group_alias,kmatkul:this.formdata.kmatkul,nmatkul:this.formdata.nmatkul,sks:this.formdata.sks,idkonsentrasi:this.formdata.idkonsentrasi,ispilihan:this.formdata.ispilihan,islintas_prodi:this.formdata.islintas_prodi,semester:this.formdata.semester,sks_tatap_muka:this.formdata.sks_tatap_muka,sks_praktikum:this.formdata.sks_praktikum,sks_praktik_lapangan:this.formdata.sks_praktik_lapangan,minimal_nilai:this.formdata.minimal_nilai,syarat_skripsi:this.formdata.syarat_skripsi,status:this.formdata.status,ta:this.formdata.ta,kjur:this.formdata.kjur},{headers:{Authorization:this.TOKEN}}).then((function(){a.initialize(),a.btnLoading=!1,a.closedialogfrm()})).catch((function(){a.btnLoading=!1}));case 5:t.next=9;break;case 7:return t.next=9,this.$ajax.post("/akademik/matakuliah/store",{id_group:this.formdata.id_group,nama_group:this.formdata.nama_group,group_alias:this.formdata.group_alias,kmatkul:this.formdata.kmatkul,nmatkul:this.formdata.nmatkul,sks:this.formdata.sks,idkonsentrasi:this.formdata.idkonsentrasi,ispilihan:this.formdata.ispilihan,islintas_prodi:this.formdata.islintas_prodi,semester:this.formdata.semester,sks_tatap_muka:this.formdata.sks_tatap_muka,sks_praktikum:this.formdata.sks_praktikum,sks_praktik_lapangan:this.formdata.sks_praktik_lapangan,minimal_nilai:this.formdata.minimal_nilai,syarat_skripsi:this.formdata.syarat_skripsi,status:this.formdata.status,ta:this.tahun_akademik,kjur:this.prodi_id},{headers:{Authorization:this.TOKEN}}).then((function(){a.initialize(),a.btnLoading=!1,a.closedialogfrm()})).catch((function(){a.btnLoading=!1}));case 9:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),salinmatkul:function(){var t=this;this.$refs.frmdialogcopymatkul.validate()&&(this.btnLoading=!0,this.$ajax.post("/akademik/matakuliah/salinmatkul/"+this.tahun_akademik,{dari_tahun_akademik:this.dari_tahun_akademik,prodi_id:this.prodi_id},{headers:{Authorization:this.TOKEN}}).then((function(a){var i=a.data;t.datatable=i.matakuliah,t.btnLoading=!1,t.closedialogsalinmatkul()})).catch((function(){t.btnLoading=!1})))},deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus matakuliah "+t.nmatkul+" ?",{color:"red"}).then((function(i){i&&(a.btnLoading=!0,a.$ajax.post("/akademik/matakuliah/"+t.id,{_method:"DELETE"},{headers:{Authorization:a.TOKEN}}).then((function(){var i=a.datatable.indexOf(t);a.datatable.splice(i,1),a.btnLoading=!1})).catch((function(){a.btnLoading=!1})))}))},closedialogdetailitem:function(){var t=this;this.dialogdetailitem=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)},closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.$refs.frmdata.resetValidation(),t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1}),300)},closedialogsalinmatkul:function(){var t=this;this.dialogcopymatkul=!1,setTimeout((function(){t.$refs.frmdialogcopymatkul.reset(),t.editedIndex=-1}),300)}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"}),{formTitle:function(){return-1===this.editedIndex?"TAMBAH DATA":"UBAH DATA"},totalSKS:function(){for(var t=0,a=0;a<this.datatable.length;a++){var i=this.datatable[a];t+=i.sks}return t}}),watch:{tahun_akademik:function(){this.firstloading||this.initialize()},prodi_id:function(t){this.firstloading||(this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.initialize())}},components:{AkademikLayout:l["a"],ModuleHeader:d["a"],Filter18:A}},T=x,w=i("0798"),y=i("2bc5"),S=i("8336"),I=i("b0af"),C=i("99d9"),$=i("62ad"),K=i("a523"),L=i("8fea"),E=i("169a"),V=i("ce7e"),O=i("4bd4"),M=i("132d"),P=i("6b53"),D=i("0fd9"),R=i("2fa4"),N=i("b73d"),U=i("8654"),B=i("71d9"),j=i("2a7f"),H=Object(v["a"])(T,e,s,!1,null,null,null);a["default"]=H.exports;p()(H,{VAlert:w["a"],VBreadcrumbs:y["a"],VBtn:S["a"],VCard:I["a"],VCardActions:C["a"],VCardSubtitle:C["b"],VCardText:C["c"],VCardTitle:C["d"],VCol:$["a"],VContainer:K["a"],VDataTable:L["a"],VDialog:E["a"],VDivider:V["a"],VForm:O["a"],VIcon:M["a"],VResponsive:P["a"],VRow:D["a"],VSelect:g["a"],VSpacer:R["a"],VSwitch:N["a"],VTextField:U["a"],VToolbar:B["a"],VToolbarTitle:j["a"]})},e60c:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},e))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[i("v-icon",[t._v("mdi-menu-open")])],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.isReportPage,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/akademik"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-monitor-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("DASHBOARD AKADEMIK")])],1)],1):t._e(),i("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-teach")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1),i("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1),i("v-subheader",[t._v("DAFTAR ULANG")]),i("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-book")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1)],1)],1),i("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-menu-open")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"teal lighten-5 mb-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-filter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],r=(i("b0c0"),i("ac1f"),i("5319"),i("5530")),n=i("2f62"),o={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t},isReportPage:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=i("2877"),u=i("6544"),c=i.n(u),m=i("40dc"),h=i("5bc1"),v=i("8212"),f=i("ce7e"),p=i("132d"),k=i("adda"),_=i("8860"),g=i("da13"),b=i("8270"),A=i("5d23"),x=i("34c3"),T=i("f6c4"),w=i("e449"),y=i("f774"),S=i("2fa4"),I=i("e0c7"),C=i("afd9"),$=i("2a7f"),K=Object(d["a"])(l,e,s,!1,null,null,null);a["a"]=K.exports;c()(K,{VAppBar:m["a"],VAppBarNavIcon:h["a"],VAvatar:v["a"],VDivider:f["a"],VIcon:p["a"],VImg:k["a"],VList:_["a"],VListItem:g["a"],VListItemAvatar:b["a"],VListItemContent:A["a"],VListItemIcon:x["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VMain:T["a"],VMenu:w["a"],VNavigationDrawer:y["a"],VSpacer:S["a"],VSubheader:I["a"],VSystemBar:C["a"],VToolbarTitle:$["a"]})},ec29:function(t,a,i){},fe09:function(t,a,i){"use strict";i.d(a,"b",(function(){return o}));i("4de4"),i("45fc"),i("d3b7"),i("25f0");var e=i("c37a"),s=i("5311"),r=i("8547"),n=i("58df");function o(t){t.preventDefault()}a["a"]=Object(n["a"])(e["a"],s["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,a=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,a)})):void 0===this.trueValue||void 0===this.falseValue?a?this.valueComparator(a,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=e["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput:function(t,a){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},a),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var a=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var e=i.length;i=i.filter((function(i){return!t.valueComparator(i,a)})),i.length===e&&i.push(a)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:a?this.valueComparator(i,a)?null:a:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);