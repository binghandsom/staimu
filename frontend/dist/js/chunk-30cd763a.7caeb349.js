(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30cd763a"],{"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),s=i("58df"),n=i("7e2b"),r=i("3206");e["a"]=Object(s["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,e,i){"use strict";var a=i("5607"),s=i("2b0e");e["a"]=s["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"9d01":function(t,e,i){},"9f67":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SystemUserLayout",[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" USERS DOSEN ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" User dengan role DOSEN bertanggungjawab terhadap proses pembelajaran mahasiswa. ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_users,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v("DAFTAR USERS DOSEN")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.showDialogTambahUserDosen(e)}}},[t._v(" TAMBAH ")]),i("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-text-field",{attrs:{label:"NAMA DOSEN",outlined:"",rules:t.rule_user_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),i("v-text-field",{attrs:{label:"NIDN (NOMOR INDUK DOSEN NASIONAL)",outlined:""},model:{value:t.editedItem.nidn,callback:function(e){t.$set(t.editedItem,"nidn",e)},expression:"editedItem.nidn"}}),i("v-text-field",{attrs:{label:"NIPY (NOMOR INDUK PEGAWAI YAYASAN)",outlined:"",rules:t.rule_nipy},model:{value:t.editedItem.nipy,callback:function(e){t.$set(t.editedItem,"nipy",e)},expression:"editedItem.nipy"}}),i("v-text-field",{attrs:{label:"EMAIL",outlined:"",rules:t.rule_user_email},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),i("v-text-field",{attrs:{label:"NOMOR HP",outlined:"",rules:t.rule_user_nomorhp},model:{value:t.editedItem.nomor_hp,callback:function(e){t.$set(t.editedItem,"nomor_hp",e)},expression:"editedItem.nomor_hp"}}),i("v-text-field",{attrs:{label:"USERNAME",outlined:"",rules:t.rule_user_username},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}}),i("v-text-field",{attrs:{label:"PASSWORD",type:"password",outlined:"",rules:t.rule_user_password},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}}),i("v-switch",{attrs:{label:"SEBAGAI DOSEN WALI"},model:{value:t.editedItem.is_dw,callback:function(e){t.$set(t.editedItem,"is_dw",e)},expression:"editedItem.is_dw"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogEdit,callback:function(e){t.dialogEdit=e},expression:"dialogEdit"}},[i("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-text-field",{attrs:{label:"NAMA DOSEN",outlined:"",rules:t.rule_user_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),i("v-text-field",{attrs:{label:"NIDN (NOMOR INDUK DOSEN NASIONAL)",outlined:""},model:{value:t.editedItem.nidn,callback:function(e){t.$set(t.editedItem,"nidn",e)},expression:"editedItem.nidn"}}),i("v-text-field",{attrs:{label:"NIPY (NOMOR INDUK PEGAWAI YAYASAN)",outlined:"",rules:t.rule_nipy},model:{value:t.editedItem.nipy,callback:function(e){t.$set(t.editedItem,"nipy",e)},expression:"editedItem.nipy"}}),i("v-text-field",{attrs:{label:"EMAIL",outlined:"",rules:t.rule_user_email},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),i("v-text-field",{attrs:{label:"NOMOR HP",outlined:"",rules:t.rule_user_nomorhp},model:{value:t.editedItem.nomor_hp,callback:function(e){t.$set(t.editedItem,"nomor_hp",e)},expression:"editedItem.nomor_hp"}}),i("v-text-field",{attrs:{label:"USERNAME",outlined:"",rules:t.rule_user_username},model:{value:t.editedItem.username,callback:function(e){t.$set(t.editedItem,"username",e)},expression:"editedItem.username"}}),i("v-text-field",{attrs:{label:"PASSWORD",type:"password",outlined:"",rules:t.rule_user_passwordEdit},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}}),i("v-switch",{attrs:{label:"SEBAGAI DOSEN WALI"},model:{value:t.editedItem.is_dw,callback:function(e){t.$set(t.editedItem,"is_dw",e)},expression:"editedItem.is_dw"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.nidn",fn:function(e){var i=e.item;return[t._v(" "+t._s((i.nidn&&i.nidn.length>0)>0?i.nidn:"N.A")+" ")]}},{key:"item.is_dw",fn:function(e){var i=e.item;return[t._v(" "+t._s(0==i.is_dw?"BUKAN":"YA")+" ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.editItem(a)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.deleteItem(a)}}},[t._v(" mdi-delete ")])]}},{key:"item.foto",fn:function(e){var a=e.item;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",{attrs:{src:t.$api.url+"/"+a.foto}})],1)]}},{key:"expanded-item",fn:function(e){var a=e.headers,s=e.item;return[i("td",{staticClass:"text-center",attrs:{colspan:a.length}},[i("v-col",{attrs:{cols:"12"}},[i("strong",[t._v("ID:")]),t._v(t._s(s.id)+" "),i("strong",[t._v("Email:")]),t._v(t._s(s.email)+" "),i("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),i("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])}),i("p",{staticClass:"text--secondary"},[t._v("DW : Dosen Wali")])],1)],1)],1)],1)},s=[],n=(i("c975"),i("a434"),i("b0c0"),i("5530")),r=(i("96cf"),i("1da1")),o=i("2f62"),l=i("e0b6"),d=i("e477"),c={name:"UsersDosen",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"USER SISTEM",disabled:!1,href:"system-users"},{text:"USERS DOSEN",disabled:!0,href:"#"}],this.initialize()},data:function(){return{role_id:0,datatableLoading:!1,btnLoading:!1,headers:[{text:"",value:"foto"},{text:"USERNAME",value:"username",sortable:!0},{text:"NAMA DOSEN",value:"name",sortable:!0},{text:"NIDN",value:"nidn",sortable:!0},{text:"NIPY",value:"nipy",sortable:!0},{text:"NOMOR HP",value:"nomor_hp",sortable:!0},{text:"DW",value:"is_dw",sortable:!0},{text:"AKSI",value:"actions",sortable:!1,width:100}],expanded:[],search:"",daftar_users:[],form_valid:!0,dialog:!1,dialogEdit:!1,editedIndex:-1,editedItem:{id:0,username:"",password:"",name:"",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},defaultItem:{id:0,username:"",password:"",name:"",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},rule_user_name:[function(t){return!!t||"Mohon untuk di isi nama Dosen !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama Dosen hanya boleh string dan spasi"}],rule_nipy:[function(t){return!!t||"Mohon untuk di isi Nomor Induk Pegawai Yayasan (NIPY) dari User ini !!!"}],rule_user_email:[function(t){return!!t||"Mohon untuk di isi email User !!!"},function(t){return/.+@.+\..+/.test(t)||"Format E-mail harus benar"}],rule_user_nomorhp:[function(t){return!!t||"Nomor HP mohon untuk diisi !!!"},function(t){return/^\+[1-9]{1}[0-9]{1,14}$/.test(t)||"Nomor HP hanya boleh angka dan gunakan kode negara didepan seperti +6281214553388"}],rule_user_username:[function(t){return!!t||"Mohon untuk di isi username User !!!"},function(t){return/^[A-Za-z_]*$/.test(t)||"Username hanya boleh string dan underscore"}],rule_user_password:[function(t){return!!t||"Mohon untuk di isi password User !!!"},function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}],rule_user_passwordEdit:[function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}]}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/usersdosen",{headers:{Authorization:this.TOKEN}}).then((function(t){var i=t.data;e.daftar_users=i.users,e.role_id=i.role.id,e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},showDialogTambahUserDosen:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dialog=!0;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editItem:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.editedIndex=this.daftar_users.indexOf(e),e.password="",this.editedItem=Object.assign({},e),this.dialogEdit=!0;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this;this.btnLoading=!1,this.dialog=!1,this.dialogEdit=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.$refs.frmdata.resetValidation()}),300)},save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.editedIndex>-1?this.$ajax.post("/system/usersdosen/"+this.editedItem.id,{_method:"PUT",name:this.editedItem.name,nidn:this.editedItem.nidn,nipy:this.editedItem.nipy,email:this.editedItem.email,nomor_hp:this.editedItem.nomor_hp,username:this.editedItem.username,password:this.editedItem.password,is_dw:this.editedItem.is_dw},{headers:{Authorization:this.TOKEN}}).then((function(){t.initialize(),t.close()})).catch((function(){t.btnLoading=!1})):this.$ajax.post("/system/usersdosen/store",{name:this.editedItem.name,nidn:this.editedItem.nidn,nipy:this.editedItem.nipy,email:this.editedItem.email,nomor_hp:this.editedItem.nomor_hp,username:this.editedItem.username,password:this.editedItem.password,is_dw:this.editedItem.is_dw},{headers:{Authorization:this.TOKEN}}).then((function(e){var i=e.data;t.daftar_users.push(i.user),t.close()})).catch((function(){t.btnLoading=!1})))},deleteItem:function(t){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus username "+t.username+" ?",{color:"red"}).then((function(i){i&&(e.btnLoading=!0,e.$ajax.post("/system/usersdosen/"+t.id,{_method:"DELETE"},{headers:{Authorization:e.TOKEN}}).then((function(){var i=e.daftar_users.indexOf(t);e.daftar_users.splice(i,1),e.btnLoading=!1})).catch((function(){e.btnLoading=!1})))}))}},computed:Object(n["a"])({formTitle:function(){return-1===this.editedIndex?"TAMBAH USER DOSEN":"EDIT USER DOSEN"}},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),watch:{dialog:function(t){t||this.close()},dialogEdit:function(t){t||this.close()}},components:{SystemUserLayout:l["a"],ModuleHeader:d["a"]}},u=c,m=i("2877"),v=i("6544"),h=i.n(v),p=i("0798"),f=i("8212"),_=i("2bc5"),g=i("8336"),b=i("b0af"),S=i("99d9"),I=i("62ad"),E=i("a523"),A=i("8fea"),C=i("169a"),w=i("ce7e"),k=i("4bd4"),y=i("132d"),x=i("adda"),T=i("0fd9"),N=i("2fa4"),O=i("b73d"),R=i("8654"),V=i("71d9"),D=i("2a7f"),M=Object(m["a"])(u,a,s,!1,null,null,null);e["default"]=M.exports;h()(M,{VAlert:p["a"],VAvatar:f["a"],VBreadcrumbs:_["a"],VBtn:g["a"],VCard:b["a"],VCardActions:S["a"],VCardText:S["c"],VCardTitle:S["d"],VCol:I["a"],VContainer:E["a"],VDataTable:A["a"],VDialog:C["a"],VDivider:w["a"],VForm:k["a"],VIcon:y["a"],VImg:x["a"],VRow:T["a"],VSpacer:N["a"],VSwitch:O["a"],VTextField:R["a"],VToolbar:V["a"],VToolbarTitle:D["a"]})},b73d:function(t,e,i){"use strict";i("0481"),i("4069");var a=i("5530"),s=(i("ec29"),i("9d01"),i("fe09")),n=i("c37a"),r=i("c3f0"),o=i("0789"),l=i("490a"),d=i("80d2");e["a"]=s["a"].extend({name:"v-switch",directives:{Touch:r["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])({},n["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(o["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===d["y"].left&&this.isActive||t.keyCode===d["y"].right&&!this.isActive)&&this.onChange()}}})},e0b6:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?i("v-menu",{attrs:{"close-on-content-click":!1,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{icon:""}},a),[i("v-icon",[t._v("mdi-cogs")])],1)]}}],null,!1,501191807)},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-cogs")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" KONFIGURASI SISTEM ")]),i("v-list-item-subtitle")],1)],1),i("v-divider"),i("v-list-item",{staticClass:"teal lighten-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("PERGURUAN TINGGI")])],1)],1),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?i("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),i("v-list-item",{staticClass:"teal lighten-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("USER")])],1)],1),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?i("v-list-item",{attrs:{link:"",to:"/system-setting/permissions"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/roles"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),i("v-list-item",{staticClass:"teal lighten-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-server-network")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("SERVER")])],1)],1),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?i("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e()],1)],1):t._e(),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.isReportPage,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("DASHBOARD USERS")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e()],1)],1),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],n=(i("b0c0"),i("ac1f"),i("5319"),i("5530")),r=i("2f62"),o={name:"DataMasterLayout",data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},isReportPage:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=i("2877"),c=i("6544"),u=i.n(c),m=i("40dc"),v=i("5bc1"),h=i("8212"),p=i("8336"),f=i("ce7e"),_=i("132d"),g=i("adda"),b=i("8860"),S=i("da13"),I=i("8270"),E=i("5d23"),A=i("34c3"),C=i("f6c4"),w=i("e449"),k=i("f774"),y=i("2fa4"),x=i("afd9"),T=i("2a7f"),N=Object(d["a"])(l,a,s,!1,null,null,null);e["a"]=N.exports;u()(N,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:h["a"],VBtn:p["a"],VDivider:f["a"],VIcon:_["a"],VImg:g["a"],VList:b["a"],VListItem:S["a"],VListItemAvatar:I["a"],VListItemContent:E["a"],VListItemIcon:A["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VMain:C["a"],VMenu:w["a"],VNavigationDrawer:k["a"],VSpacer:y["a"],VSystemBar:x["a"],VToolbarTitle:T["a"]})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return o}));i("4de4"),i("45fc"),i("d3b7"),i("25f0");var a=i("c37a"),s=i("5311"),n=i("8547"),r=i("58df");function o(t){t.preventDefault()}e["a"]=Object(r["a"])(a["a"],s["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);