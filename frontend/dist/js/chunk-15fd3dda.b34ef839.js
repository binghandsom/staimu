(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15fd3dda"],{"4bd4":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),n=a("58df"),r=a("7e2b"),s=a("3206");e["a"]=Object(n["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},c40b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AkademikLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" DOSEN WALI ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini berisi daftar DOSEN WALI / PENDAMPING AKADEMIK yang bertanggungjawab untuk membantu pembelajaran mahasiswa. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_users,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR DOSEN WALI")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogAlihkan,callback:function(e){t.dialogAlihkan=e},expression:"dialogAlihkan"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Alihkan Mahasiswa")])]),a("v-card-subtitle",[t._v(" Alihkan Mahasiswa dari Dosen wali ini ke Dosen wali lain. ")]),a("v-card-text"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.alihkan(e)}}},[t._v("ALIHKAN")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.nidn",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.nidn.length>0?a.nidn:"N.A")+" ")]}},{key:"item.is_dw",fn:function(e){var a=e.item;return[t._v(" "+t._s(0==a.is_dw?"BUKAN":"YA")+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"item.foto",fn:function(e){var i=e.item;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",{attrs:{src:t.$api.url+"/"+i.foto}})],1)]}},{key:"expanded-item",fn:function(e){var i=e.headers,n=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(n.id)+" "),a("strong",[t._v("Email:")]),t._v(t._s(n.email)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])}),a("p",{staticClass:"text--secondary"},[t._v("DW : Dosen Wali")])],1)],1)],1)],1)},n=[],r=(a("c975"),a("a434"),a("5530")),s=(a("96cf"),a("1da1")),o=a("2f62"),d=a("e60c"),l=a("e477"),c={name:"DosenWali",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"DOSEN WALI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{role_id:0,datatableLoading:!1,btnLoading:!1,headers:[{text:"",value:"foto"},{text:"USERNAME",value:"username",sortable:!0},{text:"NAMA DOSEN",value:"name",sortable:!0},{text:"NIDN",value:"nidn",sortable:!0},{text:"NIPY",value:"nipy",sortable:!0},{text:"NOMOR HP",value:"nomor_hp",sortable:!0},{text:"DW",value:"is_dw",sortable:!0},{text:"AKSI",value:"actions",sortable:!1,width:100}],expanded:[],search:"",daftar_users:[],form_valid:!0,dialog:!1,dialogAlihkan:!1,editedIndex:-1,editedItem:{id:0,username:"",password:"",name:"",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},defaultItem:{id:0,username:"",password:"",name:"",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},rule_user_name:[function(t){return!!t||"Mohon untuk di isi nama Dosen !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama Dosen hanya boleh string dan spasi"}],rule_nipy:[function(t){return!!t||"Mohon untuk di isi Nomor Induk Pegawai Yayasan (NIPY) dari User ini !!!"}],rule_user_email:[function(t){return!!t||"Mohon untuk di isi email User !!!"},function(t){return/.+@.+\..+/.test(t)||"Format E-mail harus benar"}],rule_user_nomorhp:[function(t){return!!t||"Nomor HP mohon untuk diisi !!!"},function(t){return/^\+[1-9]{1}[0-9]{1,14}$/.test(t)||"Nomor HP hanya boleh angka dan gunakan kode negara didepan seperti +6281214553388"}],rule_user_username:[function(t){return!!t||"Mohon untuk di isi username User !!!"},function(t){return/^[A-Za-z_]*$/.test(t)||"Username hanya boleh string dan underscore"}],rule_user_password:[function(t){return!!t||"Mohon untuk di isi password User !!!"},function(t){return t.length>=8||"Minimial Password 8 karaketer"}],rule_user_passwordEdit:[function(t){return!("undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}]}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/akademik/dosenwali",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data;e.daftar_users=a.users,e.role_id=a.role.id,e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},showDialogTambahUserDosen:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dialog=!0;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.editedIndex=this.daftar_users.indexOf(e),e.password="",this.editedItem=Object.assign({},e),this.dialogAlihkan=!0;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this;this.btnLoading=!1,this.dialog=!1,this.dialogAlihkan=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,t.$refs.frmdata.resetValidation()}),300)},alihkan:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/akademik/dosenwali/"+this.editedItem.id,{_method:"PUT",user_id:this.editedItem.id,pid:"alihkan_mhs"},{headers:{Authorization:this.TOKEN}}).then((function(){t.initialize(),t.close()})).catch((function(){t.btnLoading=!1})))},deleteItem:function(t){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus dosen wali "+t.username+" ?",{color:"red"}).then((function(a){a&&(e.btnLoading=!0,e.$ajax.post("/akademik/dosenwali/"+t.id,{_method:"DELETE"},{headers:{Authorization:e.TOKEN}}).then((function(){var a=e.daftar_users.indexOf(t);e.daftar_users.splice(a,1),e.btnLoading=!1})).catch((function(){e.btnLoading=!1})))}))}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),watch:{dialog:function(t){t||this.close()},dialogAlihkan:function(t){t||this.close()}},components:{AkademikLayout:d["a"],ModuleHeader:l["a"]}},u=c,m=a("2877"),h=a("6544"),v=a.n(h),f=a("0798"),p=a("8212"),_=a("2bc5"),b=a("8336"),g=a("b0af"),k=a("99d9"),A=a("62ad"),w=a("a523"),x=a("8fea"),T=a("169a"),E=a("ce7e"),y=a("4bd4"),I=a("132d"),C=a("adda"),V=a("0fd9"),D=a("2fa4"),L=a("8654"),O=a("71d9"),N=a("2a7f"),$=Object(m["a"])(u,i,n,!1,null,null,null);e["default"]=$.exports;v()($,{VAlert:f["a"],VAvatar:p["a"],VBreadcrumbs:_["a"],VBtn:b["a"],VCard:g["a"],VCardActions:k["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"],VCol:A["a"],VContainer:w["a"],VDataTable:x["a"],VDialog:T["a"],VDivider:E["a"],VForm:y["a"],VIcon:I["a"],VImg:C["a"],VRow:V["a"],VSpacer:D["a"],VTextField:L["a"],VToolbar:O["a"],VToolbarTitle:N["a"]})},e60c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.isReportPage,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/akademik"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("DASHBOARD AKADEMIK")])],1)],1):t._e(),a("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-teach")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1),a("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1),a("v-subheader",[t._v("DAFTAR ULANG")]),a("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-book")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1)],1)],1),a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{staticClass:"teal lighten-5 mb-5"},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],r=(a("b0c0"),a("ac1f"),a("5319"),a("5530")),s=a("2f62"),o={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(s["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},isReportPage:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},d=o,l=a("2877"),c=a("6544"),u=a.n(c),m=a("40dc"),h=a("5bc1"),v=a("8212"),f=a("ce7e"),p=a("132d"),_=a("adda"),b=a("8860"),g=a("da13"),k=a("8270"),A=a("5d23"),w=a("34c3"),x=a("f6c4"),T=a("e449"),E=a("f774"),y=a("2fa4"),I=a("e0c7"),C=a("afd9"),V=a("2a7f"),D=Object(l["a"])(d,i,n,!1,null,null,null);e["a"]=D.exports;u()(D,{VAppBar:m["a"],VAppBarNavIcon:h["a"],VAvatar:v["a"],VDivider:f["a"],VIcon:p["a"],VImg:_["a"],VList:b["a"],VListItem:g["a"],VListItemAvatar:k["a"],VListItemContent:A["a"],VListItemIcon:w["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VMain:x["a"],VMenu:T["a"],VNavigationDrawer:E["a"],VSpacer:y["a"],VSubheader:I["a"],VSystemBar:C["a"],VToolbarTitle:V["a"]})}}]);