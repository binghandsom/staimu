(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-522fd0d9"],{"641f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("SystemUserLayout",[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" USER PROFILE ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" berisi informasi profile user. ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4"},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{attrs:{color:"grey lighten-4"}},[e("v-toolbar",{attrs:{elevation:"2"}},[e("v-toolbar-title",[t._v("DATA USER")])],1),e("v-card-text",[e("v-row",[e("v-col",{attrs:{xs:"12",sm:"6",md:"3"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-img",{attrs:{src:t.$api.url+"/"+t.formdata.foto}})],1)],1),"mahasiswa"==t.dashboard?e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NIM / NIRM")]),e("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.nim)+" / "+t._s(t.data_mhs.nirm)+" ")])],1):t._e(),"mahasiswa"==t.dashboard?e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("PROGRAM STUDI")]),e("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.nama_prodi)+" ")])],1):t._e(),"mahasiswa"==t.dashboard?e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("KELAS")]),e("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.nama_kelas)+" ")])],1):t._e(),"mahasiswa"==t.dashboard?e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("DOSEN WALI")]),e("v-card-subtitle",[t._v(" "+t._s(t.data_mhs.dosen_wali)+" ")])],1):t._e()],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"9"}},[e("v-row",[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("ID:")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("EMAIL:")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.email)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("USERNAME:")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.username)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("ROLE:")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.default_role)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NOMOR HP:")]),e("v-card-subtitle",[t._v(" "+t._s(t.formdata.nomor_hp)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("STATUS:")]),e("v-card-subtitle",[e("v-chip",{attrs:{color:t.userstatus,label:"",outlined:""}},[t._v(" "+t._s(1==t.formdata.active?"AKTIF":"TIDAK AKTIF")+" ")])],1)],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",[e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("CREATED_AT:")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.formdata.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("UPDATED_AT:")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.formdata.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),e("v-row",["mahasiswa"==t.dashboard?e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}}):t._e(),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("GANTI PASSWORD")])]),e("v-card-text",[e("v-text-field",{attrs:{label:"PASSWORD BARU",type:"password",outlined:"",rules:t.rule_user_password},model:{value:t.formdata.password,callback:function(a){t.$set(t.formdata,"password",a)},expression:"formdata.password"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v("SIMPAN")])],1)],1)],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)},i=[],r=(e("96cf"),e("1da1")),o=e("e0b6"),n=e("e477"),l={name:"UsersProfile",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.formdata=this.$store.getters["auth/User"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SYSTEM",disabled:!1,href:"#"},{text:"PROFILE USER",disabled:!0,href:"#"}],"mahasiswa"==this.dashboard&&this.fetchMahasiswa()},data:function(){return{dashboard:null,btnLoading:!1,datatable:[],avatar:null,data_mhs:{nim:"N.A",nirm:"N.A",nama_prodi:"N.A",nama_kelas:"N.A",dosen_wali:"N.A"},form_valid:!0,formdata:{id:0,username:"",password:"",name:"",email:"",nomor_hp:"",theme:"",foto:"",active:"",default_role:"",locked:"",created_at:"",updated_at:""},formdefault:{id:0,username:"",password:"",name:"",email:"",nomor_hp:"",theme:"",foto:"",active:"",default_role:"",locked:"",created_at:"",updated_at:""},rule_foto:[function(t){return!!t||"Mohon pilih gambar !!!"},function(t){return!t||t.size<2e6||"File foto harus kurang dari 2MB."}],rule_user_password:[function(t){return!!t||"Mohon untuk di isi password User !!!"},function(t){return!(t&&"undefined"!==typeof t&&t.length>0)||(t.length>=8||"Minimial Password 8 karaketer")}]}},methods:{save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/users/updatepassword/"+this.$store.getters["auth/AttributeUser"]("id"),{_method:"PUT",password:this.formdata.password},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.$refs.frmdata.reset(),t.formdata.foto=e.foto,t.formdata=t.formdefault,t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))},previewImage:function(t){var a=this;if("undefined"===typeof t)this.avatar=null;else{var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){a.photoUser=t.target.result}}},uploadFoto:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a,e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmuploadfoto.validate()){t.next=8;break}if(!this.formdata.foto){t.next=8;break}return this.btnLoading=!0,a=new FormData,a.append("foto",this.formdata.foto),t.next=7,this.$ajax.post("/setting/users/uploadfoto/"+this.$store.getters.User.id,a,{headers:{Authorization:this.$store.getters["auth/Token"],"Content-Type":"multipart/form-data"}}).then((function(t){var a=t.data;e.btnLoading=!1,e.$store.dispatch("updateFoto",a.user.foto)})).catch((function(){e.btnLoading=!1}));case 7:this.$refs.frmdata.reset();case 8:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),resetFoto:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/setting/users/resetfoto/"+this.$store.getters.User.id,{},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.btnLoading=!1,a.$store.dispatch("updateFoto",e.user.foto)})).catch((function(){a.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),fetchMahasiswa:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax.get("/akademik/kemahasiswaan/biodatamhs1/"+t.$store.getters["auth/AttributeUser"]("id"),{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.data_mhs=e.mahasiswa}));case 2:case"end":return a.stop()}}),a)})))()}},computed:{photoUser:{get:function(){if(null==this.avatar){var t=this.$api.url+"/"+this.$store.getters.User.foto;return t}return this.avatar},set:function(t){this.avatar=t}},userstatus:function(){return 1==this.formdata.active?"green":"red"}},components:{SystemUserLayout:o["a"],ModuleHeader:n["a"]}},d=l,c=e("2877"),v=e("6544"),u=e.n(v),m=e("0798"),f=e("2bc5"),h=e("8336"),_=e("b0af"),p=e("99d9"),b=e("cc20"),S=e("62ad"),A=e("a523"),g=e("4bd4"),E=e("132d"),T=e("adda"),C=e("6b53"),k=e("0fd9"),w=e("2fa4"),y=e("8654"),R=e("71d9"),x=e("2a7f"),U=Object(c["a"])(d,s,i,!1,null,null,null);a["default"]=U.exports;u()(U,{VAlert:m["a"],VBreadcrumbs:f["a"],VBtn:h["a"],VCard:_["a"],VCardActions:p["b"],VCardSubtitle:p["c"],VCardText:p["d"],VCardTitle:p["e"],VChip:b["a"],VCol:S["a"],VContainer:A["a"],VForm:g["a"],VIcon:E["a"],VImg:T["a"],VResponsive:C["a"],VRow:k["a"],VSpacer:w["a"],VTextField:y["a"],VToolbar:R["a"],VToolbarTitle:x["c"]})},e0b6:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},s))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD USERS")])],1)],1):t._e(),e("v-list-item",{attrs:{link:"",to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROFIL USER ")])],1)],1),e("v-divider"),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?e("v-list-item",{attrs:{link:"",to:"/system-users/permissions"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-key")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?e("v-list-item",{attrs:{link:"",to:"/system-users/roles"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-group")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?e("v-divider"):t._e(),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PUSLAHTA_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/puslahta"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PUSLAHTA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e(),"dosen"==t.dashboard?e("v-list-item",{attrs:{link:"",to:"/system-users/biodatadiridosen"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e(),"mahasiswa"==t.dashboard?e("v-list-item",{attrs:{link:"",to:"/system-users/biodatadirimahasiswa"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e()],1)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),e("v-footer",{attrs:{app:"",padless:"",fixed:""}},[e("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[e("v-divider"),e("v-card-text",{staticClass:"py-2 black--text text-center"},[e("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),e("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[e("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},i=[],r=(e("ac1f"),e("5319"),e("5530")),o=e("2f62"),n={name:"SystemUserLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=n,d=e("2877"),c=e("6544"),v=e.n(c),u=e("40dc"),m=e("5bc1"),f=e("8212"),h=e("8336"),_=e("b0af"),p=e("99d9"),b=e("ce7e"),S=e("553a"),A=e("132d"),g=e("adda"),E=e("8860"),T=e("da13"),C=e("8270"),k=e("5d23"),w=e("34c3"),y=e("f6c4"),R=e("e449"),x=e("f774"),U=e("2fa4"),O=e("afd9"),$=e("2a7f"),I=Object(d["a"])(l,s,i,!1,null,null,null);a["a"]=I.exports;v()(I,{VAppBar:u["a"],VAppBarNavIcon:m["a"],VAvatar:f["a"],VBtn:h["a"],VCard:_["a"],VCardText:p["d"],VDivider:b["a"],VFooter:S["a"],VIcon:A["a"],VImg:g["a"],VList:E["a"],VListItem:T["a"],VListItemAvatar:C["a"],VListItemContent:k["g"],VListItemIcon:w["a"],VListItemSubtitle:k["j"],VListItemTitle:k["k"],VMain:y["a"],VMenu:R["a"],VNavigationDrawer:x["a"],VSpacer:U["a"],VSystemBar:O["a"],VToolbarTitle:$["c"]})},e477:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:t.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},i=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},o=r,n=e("2877"),l=e("6544"),d=e.n(l),c=e("62ad"),v=e("a523"),u=e("132d"),m=e("0fd9"),f=Object(n["a"])(o,s,i,!1,null,null,null);a["a"]=f.exports;d()(f,{VCol:c["a"],VContainer:v["a"],VIcon:u["a"],VRow:m["a"]})}}]);