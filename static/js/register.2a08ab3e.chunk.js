(this["webpackJsonppwa-react-typescript"]=this["webpackJsonppwa-react-typescript"]||[]).push([[2],{290:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(281);a.a=function(e){var a=e.setHeight;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{style:{height:a}}))}},291:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(281),m=t(282),i=t(318),s=t(295),c=t.n(s),o=t(73),u=t(290);a.a=function(e){var a=e.onBackLink;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(m.a,{xs:2,lg:0,style:{padding:"12px 0px 0px 0px"}},r.a.createElement(o.b,{to:a},r.a.createElement(i.a,{style:{fontSize:"20px",color:"#566477"}}))),r.a.createElement(m.a,{xs:22,lg:24,style:{textAlign:"center"}},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:c.a,width:"120px",alt:"Logo Icon"})))),r.a.createElement(u.a,{setHeight:"50px"}))}},292:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(281),m=t(282);a.a=function(e){var a=e.title,t=e.subtitle,n=e.alignment;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(m.a,{xs:24},r.a.createElement("h2",null,a),"center"===n?r.a.createElement("p",{style:{color:"#9DA8B7",textAlign:"center"}},t):r.a.createElement("p",{style:{color:"#9DA8B7",textAlign:"justify"}},t))))}},293:function(e,a,t){e.exports=t.p+"static/media/bg-empty.4aa0e24f.png"},295:function(e,a,t){e.exports=t.p+"static/media/ic-mekar.b31d24f7.svg"},296:function(e,a,t){"use strict";a.a=function(e,a){return new URLSearchParams(e).get(a)}},311:function(e,a,t){e.exports=t.p+"static/media/ic-register-as-lender.a084e3b3.svg"},312:function(e,a,t){e.exports=t.p+"static/media/ic-register-as-borrower.c607ec63.svg"},319:function(e,a,t){"use strict";t.r(a);var n=t(281),r=t(282),l=t(0),m=t.n(l),i=t(24),s=t(317),c=t(293),o=t.n(c),u=function(){return m.a.createElement(s.a,{width:"100%",height:"100%",src:o.a})},p=t(73),d=t(291),g=t(292),E=t(311),k=t.n(E),h=t(312),b=t.n(h),f=t(290),x=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{onBackLink:"/"}),m.a.createElement(g.a,{title:"Buat akun baru",subtitle:"Sebagai apakah Anda ingin mendaftar?",alignment:"left"}),m.a.createElement(f.a,{setHeight:"40px"}),m.a.createElement(n.a,{style:{textAlign:"center"}},m.a.createElement(r.a,{xs:24},m.a.createElement(p.b,{to:"register?user=lender",style:{color:"#556376"}},m.a.createElement("img",{src:k.a,alt:"LenderIcon"}),m.a.createElement(f.a,{setHeight:"10px"}),"Pemberi pinjaman"))),m.a.createElement(f.a,{setHeight:"50px"}),m.a.createElement(n.a,{style:{textAlign:"center"}},m.a.createElement(r.a,{xs:24},m.a.createElement(p.b,{to:"register?user=borrower",style:{color:"#556376"}},m.a.createElement("img",{src:b.a,alt:"BorrowerIcon"}),m.a.createElement(f.a,{setHeight:"10px"}),"Penerima pinjaman"))),m.a.createElement(f.a,{setHeight:"40px"}))},y=t(32),A=t(284),v=t(287),w=t(289),F=t(101),B=t(21),j={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},K={wrapperCol:{xs:{span:24,offset:0}}},I=function(){var e=A.a.useForm(),a=Object(y.a)(e,1)[0],t=Object(B.f)(),i=Object(l.useState)(!0),s=Object(y.a)(i,2),c=s[0],o=s[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{onBackLink:"register"}),m.a.createElement(g.a,{title:"Buat akun baru sebagai lender",subtitle:"Buat akun Anda untuk melihat daftar pinjaman dan dapatkan imbal hasil dari pendanaan Anda",alignment:"left"}),m.a.createElement(A.a,Object.assign({},j,{form:a,layout:"vertical",name:"register",onFinish:function(e){t.push("thankyou?topic=lender")},onFinishFailed:function(){},scrollToFirstError:!0}),m.a.createElement(A.a.Item,{name:"name",label:"Nama Lengkap",rules:[{required:!0,message:"Mohon masukkan nama lengkap Anda"}]},m.a.createElement(v.a,{placeholder:"Ketik nama lengkap Anda"})),m.a.createElement(A.a.Item,{name:"phone_number",label:"Nomor Telepon",rules:[{required:!0,message:"Mohon masukkan nomor handphone Anda"}]},m.a.createElement(v.a,{placeholder:"Ketik nomor handphone Anda",addonBefore:"+62"})),m.a.createElement(A.a.Item,{name:"email",label:"Alamat Email",rules:[{type:"email",message:"Alamat email tidak valid"},{required:!0,message:"Mohon masukkan email yang ingin didaftarkan"}]},m.a.createElement(v.a,{placeholder:"Ketik alamat email Anda"})),m.a.createElement(A.a.Item,{name:"password",label:"Kata Sandi",rules:[{required:!0,message:"Mohon masukkan kata sandi Anda"}],hasFeedback:!0},m.a.createElement(v.a.Password,{placeholder:"Ketik kata sandi Anda"})),m.a.createElement(A.a.Item,{name:"password_confirm",label:"Konfirmasi Kata Sandi",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Mohon konfirmasi kata sandi Anda"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("Konfirmasi kata sandi yang Anda masukkan tidak sesuai"):Promise.resolve()}}}]},m.a.createElement(v.a.Password,{placeholder:"Ketik ulang kata sandi Anda"})),m.a.createElement(n.a,null,m.a.createElement(r.a,null,m.a.createElement(w.a,{onChange:function(e){o(!e.target.checked)}},"Saya telah membaca dan menyetujui"," ",m.a.createElement("a",{href:"https://policies.google.com/privacy "},"kebijakan privasi")," ","dan"," ",m.a.createElement("a",{href:"https://policies.google.com/terms"},"syarat ketentuan")))),m.a.createElement(f.a,{setHeight:"40px"}),m.a.createElement(A.a.Item,K,m.a.createElement(F.a,{type:"primary",htmlType:"submit",block:!0,disabled:c},"Buat Akun"),m.a.createElement(f.a,{setHeight:"20px"}),m.a.createElement(F.a,{block:!0},m.a.createElement(p.b,{to:"/"},"Kembali ke homepage")))))},M=t(285),H=M.a.Option,L={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},O={wrapperCol:{xs:{span:24,offset:0}}},q=function(){var e=A.a.useForm(),a=Object(y.a)(e,1)[0],t=Object(B.f)();return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{onBackLink:"register"}),m.a.createElement(g.a,{title:"Mendaftar sebagai borrower",subtitle:"Lorem ipsum dolor sit amet, has facer noluisse in. Ut cum commodo virtute. Vix no omnis iudicabit sadipscing.",alignment:"left"}),m.a.createElement(A.a,Object.assign({},L,{form:a,layout:"vertical",name:"register",onFinish:function(e){t.push("thankyou?topic=borrower")},scrollToFirstError:!0}),m.a.createElement(A.a.Item,{name:"name",label:"Nama Lengkap",rules:[{required:!0,message:"Mohon masukkan nama lengkap Anda"}]},m.a.createElement(v.a,{placeholder:"Ketik nama lengkap Anda"})),m.a.createElement(A.a.Item,{name:"phone",label:"Nomor Telepon",rules:[{required:!0,message:"Mohon masukkan nomor handphone Anda"}]},m.a.createElement(v.a,{placeholder:"Ketik nomor handphone Anda",addonBefore:"+62"})),m.a.createElement(A.a.Item,{name:"email",label:"Alamat Email",rules:[{type:"email",message:"Alamat email tidak valid"},{required:!0,message:"Mohon masukkan email yang terdaftar"}]},m.a.createElement(v.a,{placeholder:"Ketik alamat email Anda"})),m.a.createElement(A.a.Item,{name:"cityy",label:"Kota Domisili",rules:[{required:!0,message:"Mohon mencari kota domisili Anda"}]},m.a.createElement(M.a,{showSearch:!0,placeholder:"Ketik alamat email Anda",optionFilterProp:"children"},m.a.createElement(H,{value:"Jakarta"},"Jakarta"),m.a.createElement(H,{value:"Bogor"},"Bogor"),m.a.createElement(H,{value:"Depok"},"Depok"),m.a.createElement(H,{value:"Tangerang"},"Tangerang"),m.a.createElement(H,{value:"Bekasi"},"Bekasi"))),m.a.createElement(f.a,{setHeight:"40px"}),m.a.createElement(A.a.Item,O,m.a.createElement(F.a,{type:"primary",htmlType:"submit",block:!0},"Daftarkan"))))},P=t(296);a.default=function(e){var a=e.location,t=Object(P.a)(null===a||void 0===a?void 0:a.search,"user"),l=m.a.createElement(x,null);switch(t){case"lender":l=m.a.createElement(I,null);break;case"borrower":l=m.a.createElement(q,null);break;default:l=m.a.createElement(x,null)}return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.a,null,m.a.createElement("title",null,"Mekar.id - Register")),m.a.createElement(n.a,null,m.a.createElement(r.a,{xs:0,sm:0,lg:12},m.a.createElement(u,null)),m.a.createElement(r.a,{xs:24,sm:24,lg:12},m.a.createElement("div",{style:{margin:"24px 16px",padding:24}},l))))}}}]);
//# sourceMappingURL=register.2a08ab3e.chunk.js.map