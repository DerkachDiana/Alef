(function(e){function t(t){for(var c,i,o=t[0],u=t[1],l=t[2],s=0,p=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Alef/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a38":function(e,t,n){"use strict";n("1d2c")},"18ea":function(e,t,n){},"18fd":function(e,t,n){},"1cf0":function(e,t,n){},"1d2c":function(e,t,n){},"1f8b":function(e,t,n){"use strict";n("ed7b")},"28c1":function(e,t,n){"use strict";n("b864")},"31d5":function(e,t,n){},"38c2":function(e,t,n){},"3e50":function(e,t,n){},"42a5":function(e,t,n){"use strict";n("31d5")},"53e8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={class:"app"};function r(e,t,n,r,i,o){var u=Object(c["z"])("HeaderComponent"),l=Object(c["z"])("router-view"),d=Object(c["z"])("FooterComponent");return Object(c["s"])(),Object(c["f"])("div",a,[Object(c["i"])(u),Object(c["i"])(l,{class:"content"}),Object(c["i"])(d,{class:"footer"})])}var i=n("5935"),o=n.n(i),u=function(e){return Object(c["v"])("data-v-0cd79888"),e=e(),Object(c["t"])(),e},l={class:"header"},d=u((function(){return Object(c["g"])("div",{class:"header__logo-block"},[Object(c["g"])("img",{src:o.a,class:"header__logo"})],-1)})),s={class:"header__nav"},p=Object(c["h"])("Форма"),b=Object(c["h"])("Превью"),f=u((function(){return Object(c["g"])("div",{class:"header__third-block"},null,-1)}));function m(e,t,n,a,r,i){var o=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["f"])("div",l,[d,Object(c["g"])("div",s,[Object(c["i"])(o,{to:"/",class:"header__nav__text"},{default:Object(c["F"])((function(){return[p]})),_:1}),Object(c["i"])(o,{to:"/Preview",class:"header__nav__text"},{default:Object(c["F"])((function(){return[b]})),_:1})]),f])}var h={name:"HeaderComponent"},g=(n("28c1"),n("6b0d")),O=n.n(g);const j=O()(h,[["render",m],["__scopeId","data-v-0cd79888"]]);var v=j,_=function(e){return Object(c["v"])("data-v-0cd0f8a0"),e=e(),Object(c["t"])(),e},C={class:"footer"},y=_((function(){return Object(c["g"])("div",{class:"footer__text"},"all rights reserved",-1)})),x=[y];function A(e,t,n,a,r,i){return Object(c["s"])(),Object(c["f"])("div",C,x)}var N={name:"FooterComponent"};n("7330");const w=O()(N,[["render",A],["__scopeId","data-v-0cd0f8a0"]]);var P=w,S={components:{FooterComponent:P,HeaderComponent:v}};n("6437");const T=O()(S,[["render",r]]);var k=T,B=n("6c02"),I=(n("b0c0"),{class:"container"}),F={class:"container__constraint"},z={class:"personal-info"},V={key:0,class:"container__child"};function D(e,t,n,a,r,i){var o=Object(c["z"])("TitleComponent"),u=Object(c["z"])("ListComponent");return Object(c["s"])(),Object(c["f"])("div",I,[Object(c["g"])("div",F,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.families,(function(t,n){return Object(c["s"])(),Object(c["f"])("div",{key:n},[Object(c["g"])("div",z,[Object(c["i"])(o,{title:"Персональные данные"}),Object(c["i"])(u,{"person-name":t.parentName,age:t.parentAge,"bg-color":"white","my-padding":"unset"},null,8,["person-name","age"])]),0!==t.children.length?(Object(c["s"])(),Object(c["f"])("div",V,[Object(c["i"])(o,{title:"Дети"}),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.families[n].children,(function(e){return Object(c["s"])(),Object(c["f"])("div",{key:e.name},[Object(c["i"])(u,{"person-name":e.childName,age:e.childAge,"bg-color":"#F1F1F1","my-padding":"10px 20px"},null,8,["person-name","age"])])})),128))])):Object(c["e"])("",!0)])})),128))])])}var G=n("5530"),$={class:"title"};function M(e,t,n,a,r,i){return Object(c["s"])(),Object(c["f"])("div",$,Object(c["B"])(n.title),1)}var L={name:"TitleComponent",props:{title:String}};n("e8ee");const H=O()(L,[["render",M],["__scopeId","data-v-fe8be7f2"]]);var U=H;function J(e,t,n,a,r,i){return Object(c["s"])(),Object(c["f"])("div",{class:"list",style:Object(c["o"])({"background-color":n.bgColor,padding:n.myPadding})},Object(c["B"])(n.personName)+", "+Object(c["B"])(n.age)+" "+Object(c["B"])(i.ageString),5)}var E={name:"ListComponent",props:{personName:String,age:String,bgColor:String,myPadding:{type:String,default:"10px 20px"}},data:function(){return{ageYear:""}},computed:{ageString:function(){return""===this.age?"количество лет не указано":this.age>4&this.age<21||this.age%10===0?"лет":this.age%10===1?"год":this.age%10>0&&this.age%10<5?"года":""}}};n("d93f");const Y=O()(E,[["render",J],["__scopeId","data-v-2beb5a52"]]);var q=Y,K=n("5502"),Q={name:"Preview",components:{ListComponent:q,TitleComponent:U},computed:Object(G["a"])({},Object(K["c"])({families:function(e){return e.preview.families}}))};n("e7c5");const R=O()(Q,[["render",D],["__scopeId","data-v-ba9afe9e"]]);var W=R,X={class:"container"},Z={class:"content-constraint"},ee={class:"container__content-constraint__formOne"},te={class:"content-constraint__childCard"},ne={class:"content-constraint__childCard__row"},ce={class:"content-constraint__childCard__childCard-SaveButton"};function ae(e,t,n,a,r,i){var o=Object(c["z"])("TitleComponent"),u=Object(c["z"])("InputComponent"),l=Object(c["z"])("AddButtonComponent"),d=Object(c["z"])("ChildCard"),s=Object(c["z"])("SaveButton");return Object(c["s"])(),Object(c["f"])("div",X,[Object(c["g"])("div",Z,[Object(c["g"])("div",ee,[Object(c["i"])(o,{title:"Персональные данные",style:{"margin-top":"30px"}}),Object(c["i"])(u,{width:"594px",inputValue:"Имя","input-type":"text",onGetText:e.setParentName},null,8,["onGetText"]),Object(c["i"])(u,{width:"594px","input-value":"Возраст","input-type":"text",onGetText:e.setParentAge},null,8,["onGetText"])]),Object(c["g"])("div",te,[Object(c["g"])("div",ne,[0!==e.children.length?(Object(c["s"])(),Object(c["d"])(o,{key:0,title:"Дети (макс. 5)"})):Object(c["e"])("",!0),e.children.length<=4?(Object(c["s"])(),Object(c["d"])(l,{key:1,onClick:e.addChild,text:"Добавить ребенка"},null,8,["onClick"])):Object(c["e"])("",!0)]),Object(c["g"])("div",ce,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.children,(function(t,n){return Object(c["s"])(),Object(c["f"])("div",{key:n},[Object(c["i"])(d,{"child-age":t.childAge,"child-name":t.childName,onDeleteCard:function(n){return e.needToDelete(t)},onNewName:function(t){return e.setChildName({i:n,myName:t})},onNewAge:function(t){return e.setChildAge({ind:n,myAge:t})}},null,8,["child-age","child-name","onDeleteCard","onNewName","onNewAge"])])})),128)),Object(c["i"])(s,{text:"Сохранить",onClick:i.handleClick},null,8,["onClick"])])])])])}var re={class:"base-input"},ie={class:"textAboveTheInput"},oe=["type"];function ue(e,t,n,a,r,i){return Object(c["s"])(),Object(c["f"])("div",re,[Object(c["g"])("div",ie,Object(c["B"])(n.inputValue),1),Object(c["G"])(Object(c["g"])("input",{type:n.inputType,class:"my-input-text",style:Object(c["o"])({width:n.width}),"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.text=e})},null,12,oe),[[c["D"],i.text]])])}var le={name:"InputComponent",emits:["getText","update:modelValue"],props:{width:String,modelValue:String,inputValue:String,inputType:{type:String,default:"text"}},computed:{text:{get:function(){return this.modelValue},set:function(e){this.$emit("update:modelValue",e),this.$emit("getText",e)}}}};n("96b9");const de=O()(le,[["render",ue],["__scopeId","data-v-4c398bba"]]);var se=de,pe=n("8a37"),be=n.n(pe),fe=function(e){return Object(c["v"])("data-v-325954a8"),e=e(),Object(c["t"])(),e},me={class:"button"},he=fe((function(){return Object(c["g"])("div",{class:"button__plus"},[Object(c["g"])("img",{src:be.a})],-1)})),ge={class:"button__text"};function Oe(e,t,n,a,r,i){return Object(c["s"])(),Object(c["f"])("div",me,[he,Object(c["g"])("div",ge,Object(c["B"])(n.text),1)])}var je={name:"AddButtonComponent",props:{text:String}};n("1f8b");const ve=O()(je,[["render",Oe],["__scopeId","data-v-325954a8"]]);var _e=ve,Ce={class:"button"};function ye(e,t,n,a,r,i){return Object(c["s"])(),Object(c["f"])("div",Ce,Object(c["B"])(n.text),1)}var xe={name:"SaveButton",props:{text:String}};n("87ae");const Ae=O()(xe,[["render",ye],["__scopeId","data-v-810facda"]]);var Ne=Ae,we={class:"container"},Pe={class:"container__title-button"},Se={class:"container__form"},Te={class:"container__form__row"};function ke(e,t,n,a,r,i){var o=Object(c["z"])("InputComponent"),u=Object(c["z"])("DeleteButtonComponent");return Object(c["s"])(),Object(c["f"])("div",we,[Object(c["g"])("div",Pe,[Object(c["g"])("div",Se,[Object(c["g"])("div",Te,[Object(c["i"])(o,{"input-type":"text","input-value":"Имя",width:"238px",modelValue:i.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.name=e}),onGetText:i.changeName},null,8,["modelValue","onGetText"]),Object(c["i"])(o,{"input-type":"text","input-value":"Возраст",width:"238px",modelValue:i.age,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.age=e}),onGetText:i.changeAge},null,8,["modelValue","onGetText"]),Object(c["i"])(u,{onClick:i.deleteChild},null,8,["onClick"])])])])])}var Be={class:"button"};function Ie(e,t,n,a,r,i){return Object(c["s"])(),Object(c["f"])("div",Be,"Удалить")}var Fe={name:"DeleteButtonComponent"};n("9125");const ze=O()(Fe,[["render",Ie],["__scopeId","data-v-9019d99c"]]);var Ve=ze,De={name:"ChildCard",emits:["deleteCard","newName","newAge"],components:{DeleteButtonComponent:Ve,InputComponent:se},props:{childName:String,childAge:String},computed:{name:{get:function(){return this.childName},set:function(e){this.$emit("newName",e)}},age:{get:function(){return this.childAge},set:function(e){this.$emit("newAge",e)}}},methods:{deleteChild:function(){this.$emit("deleteCard",!0)},changeName:function(e){this.getName=e},changeAge:function(e){this.getAge=e}},data:function(){return{textFromInput:"",getName:"",getAge:0}},watch:{getName:function(e){this.$emit("newName",e)},getAge:function(e){this.$emit("newAge",e)}}};n("42a5");const Ge=O()(De,[["render",ke],["__scopeId","data-v-2a0bfe26"]]);var $e=Ge,Me={components:{ChildCard:$e,SaveButton:Ne,AddButtonComponent:_e,InputComponent:se,TitleComponent:U},data:function(){return{nName:""}},methods:Object(G["a"])(Object(G["a"])({},Object(K["b"])({setParentName:"parent/setParentName",setParentAge:"parent/setParentAge",addChild:"children/addChildr",needToDelete:"children/needToDelete",setChildName:"children/setChildName",setChildAge:"children/setChildAge",createFamily:"createFamily",clearParentsArea:"parent/clearParentArea"})),{},{handleClick:function(){this.createFamily({parentName:this.parentName,parentAge:this.parentAge,children:this.children}),this.clearParentsArea()}}),computed:Object(G["a"])({},Object(K["c"])({children:function(e){return e.children.children},parentName:function(e){return e.parent.parent.parentName},parentAge:function(e){return e.parent.parent.parentAge}})),watch:{}};n("0a38");const Le=O()(Me,[["render",ae]]);var He=Le,Ue=[{path:"/",name:"FormPage",component:He},{path:"/Preview",name:"Preview",component:W}],Je=Object(B["a"])({history:Object(B["b"])("/Alef/"),routes:Ue}),Ee=Je,Ye=(n("4de4"),n("d3b7"),{state:function(){return{children:[],availabilityAddButton:!0}},getters:{},mutations:{textMutation:function(e,t){e.text=t},setChildAge:function(e,t){var n=t.ind,c=t.myAge;try{e.children[n].childAge=c}catch(a){console.log("there is a undefined problem with age")}},setChildName:function(e,t){var n=t.i,c=t.myName;try{e.children[n].childName=c}catch(a){console.log("there is a undefined problem with name")}},addChildr:function(e){var t={childName:"",childAge:""};e.children.length<5&&e.children.push(t)},needToDelete:function(e,t){e.children=e.children.filter((function(e){return e!==t}))},getName:function(e,t){e.parent.parentName=t}},namespaced:!0}),qe={state:function(){return{parent:{parentName:"",parentAge:""},parents:[],textFromInput:""}},mutations:{setParentName:function(e,t){e.parent.parentName=t},setParentAge:function(e,t){e.parent.parentAge=t},clearParentArea:function(e){e.parent.parentName="",e.parent.parentAge=""}},namespaced:!0},Ke=(n("159b"),{state:function(){return{families:[]}},mutations:{createFamily:function(e,t){var n=t.parentName,c=t.parentAge,a=t.children,r={parentName:"",parentAge:0,children:[]};a.forEach((function(e){var t={childName:"",childAge:0};t.childName=e.childName,t.childAge=e.childAge,r.children.push(t)})),r.parentName=n,r.parentAge=c,e.families.push(r),alert("Данные успешно внесены!")}},namespace:!0}),Qe=Object(K["a"])({modules:{children:Ye,parent:qe,preview:Ke}});Object(c["c"])(k).use(Qe).use(Ee).mount("#app")},5935:function(e,t,n){e.exports=n.p+"img/Logo_imi_horizontal.2fbec90b.svg"},6437:function(e,t,n){"use strict";n("1cf0")},7330:function(e,t,n){"use strict";n("9ca5")},"87ae":function(e,t,n){"use strict";n("38c2")},"8a37":function(e,t,n){e.exports=n.p+"img/plus.4c60219f.svg"},9125:function(e,t,n){"use strict";n("d080")},"96b9":function(e,t,n){"use strict";n("3e50")},"9ca5":function(e,t,n){},b864:function(e,t,n){},d080:function(e,t,n){},d93f:function(e,t,n){"use strict";n("18ea")},e7c5:function(e,t,n){"use strict";n("53e8")},e8ee:function(e,t,n){"use strict";n("18fd")},ed7b:function(e,t,n){}});
//# sourceMappingURL=app.7952e030.js.map