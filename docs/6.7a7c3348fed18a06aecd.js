(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8Uj0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c={HH:"(2[0-3]|[01]\\d)",H:"(2[0-3]|[01]?\\d)",mm:"([0-5]\\d)",m:"([0-5]?\\d)",MM:"(0\\d|1[0-2]|\\d)",M:"([1-9]|1[0-2])",ss:"([0-5]\\d)",s:"([0-5]?\\d)",YYYY:"([1-9]\\d{3,3})",YY:"(\\d{2,2})",DD:"([0-3]\\d)"},r=function(){function e(){}return e.isCamelCase=function(e){return new RegExp("^[A-Z]?[a-z]+([A-Z][a-z]*)*$","g").test(e)},e.isUpperCamelCase=function(e){return new RegExp("^([A-Z][a-z]*)*$","g").test(e)},e.isLowerCamelCase=function(e){return new RegExp("^[a-z]+([A-Z][a-z]*)*$","g").test(e)},e.isLowerSnakeCase=function(e){return new RegExp("^[a-z]*(_[a-z]*)*$","g").test(e)},e.isUpperSnakeCase=function(e){return new RegExp("^[A-Z]*(_[A-Z]*)*$","g").test(e)},e.isSnakeCase=function(e){return new RegExp("^([a-z]*|[A-Z]*)(_[a-zA-Z]*)*$","g").test(e)},e.isTimeFormat=function(e,t){for(var n in c)c.hasOwnProperty(n)&&(t=t.replace(n,c[n]));return new RegExp("^"+t+"$").test(e)},e}();t.StringCheckers=r},o7GM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n("8Uj0"),r="ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž"+"ąàáäâãåæăćčĉďęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž".toUpperCase(),a="aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz"+"aaaaaaaaacccdeeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz".toUpperCase(),i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,o=/^([+]|00)?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{2,3}[-\s.]?[0-9]{2,6}([-\s.]?[0-9]{3})?$/im,s=function(){function e(){}return e.removeAccentedCharacters=function(e){return e&&e.replace?e.replace(/./g,(function(e){var t=r.indexOf(e);return t>=0?a[t]:e})):e},e.join=function(e,t,n,c){return void 0===t&&(t=" "),void 0===n&&(n=""),void 0===c&&(c=""),Array.isArray(e)?""+n+e.join(t)+c:n+e+c},e.toUpperSnakeCase=function(e){return c.StringCheckers.isCamelCase(e)?e.replace(/([a-z])([A-Z])/g,"$1_$2").replace(/([A-Z])([A-Z])/g,"$1_$2").toUpperCase():c.StringCheckers.isUpperSnakeCase(e)?e:e.replace(/(-|_| |\s)+(.)?/g,(function(e,t,n){return n?"_"+n:""})).replace(/^_/,"").toUpperCase()},e.toLowerSnakeCase=function(e){return c.StringCheckers.isCamelCase(e)?e.replace(/([a-z])([A-Z])/g,"$1_$2").replace(/([A-Z])([A-Z])/g,"$1_$2").toLowerCase():c.StringCheckers.isLowerSnakeCase(e)?e:e.replace(/(-|_| |\s)+(.)?/g,(function(e,t,n){return n?"_"+n:""})).replace(/^_/,"").toLowerCase()},e.toLowerCamelCase=function(e){return c.StringCheckers.isLowerCamelCase(e)?e:e.trim().replace(/([a-z])([A-Z])([A-Z])/g,"$1$2_$3").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase().replace(/(-|_| |\s)+(.)?/g,(function(e,t,n){return n?n.toUpperCase():""})).replace(/^./,(function(e){return e.toLowerCase()}))},e.toUpperCamelCase=function(t){return c.StringCheckers.isUpperCamelCase(t)?t:e.toCapital(e.toLowerCamelCase(t))},e.toCapital=function(e){return e.replace(/./,(function(e){return e.toUpperCase()}))},e.getLastPart=function(e,t){if(void 0===t&&(t=" "),!e||!e.split)return e;var n=e.split(t);return n[n.length-1]},e.count=function(e,t){return(e.match(new RegExp(t,"g"))||[]).length},e.repeat=function(e,t){return new Array(t+1).join(e)},e.removeAll=function(e,t){return e.replace(new RegExp("("+t.join("|")+")","g"),"")},e.template=function(e,t,n,c){void 0===n&&(n="{{"),void 0===c&&(c="}}"),n=n.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$"),c=c.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$");var r=new RegExp(n+"(.+?)'"+c,"g");return(e.match(r)||[]).forEach((function(r){var a=r.substring(n.length,r.length-c.length).trim(),i=t[a];i&&(e=e.replace(r,i))})),e},e.removeEmptyLines=function(e){return e.replace(/^\s*$(?:\r\n?|\n)/gm,"")},e.between=function(e,t,n){var c=e.indexOf(t),r=e.indexOf(n);return c<0&&r>=0?e.substring(0,r):e.substring(c+t.length,r<0&&c>=0?e.length:r)},e.occurrences=function(e,t){return(e.match(new RegExp(t,"g"))||[]).length},e.collapseWhitespace=function(e){return e.replace(/[\s\uFEFF\xA0]{2,}/g," ")},e.capitalize=function(e){return e.toLowerCase().replace(/^./,(function(e){return e.toUpperCase()}))},e.isEmpty=function(e){return!e||/^[\s\xa0]*$/.test(e)},e.swapCase=function(e){return e.replace(/\S/g,(function(e){var t=e.toLowerCase();return t===e?e.toUpperCase():t}))},e.transformToBasicFormat=function(t){return e.collapseWhitespace(e.removeAccentedCharacters(t).toLowerCase()).trim()},e.isValidEmail=function(e){return!!e&&i.test(e.trim())},e.getAsciiArray=function(e){for(var t=[],n=0,c=e;n<c.length;n++)t[t.length]=c[n].charCodeAt(0);return t},e.isValidPhoneNumber=function(e){return!!e&&o.test(e.trim())},e.toBasicForm=function(t){return e.removeAccentedCharacters(t.toLowerCase())},e.contains=function(t,n){return!!t&&e.removeAccentedCharacters(t.toLowerCase()).indexOf(n)>=0},e.joinSingle=function(e,t,n){return n.startsWith(t)&&e.endsWith(t)?e+n.substring(t.length):n.startsWith(t)||e.endsWith(t)?e+n:e+t+n},e.getFormattedNumber=function(e,t){return void 0===t&&(t="+421"),(e=e.replace(/[( )/-]/g,"")).startsWith("+")?e:e.startsWith("00")?e.substring(2):e.startsWith("09")||e.startsWith("02")?t+e.substring(1):e},e}();t.StringUtils=s},vUrZ:function(e,t,n){"use strict";n.r(t);var c=n("TYT/"),r=n("krJt"),a=n("PCNd"),i=n("pd6a"),o=n("IYfF"),s=n("mrSG"),u=n("F/XL"),l=n("9Z1F"),p=n("aR35"),f=n("o0vB"),d=n("9nlD"),g=n("cUzu"),m=p.a.BASE_URL+"/menus/restaurant",h=function(e){function t(t,n,c){return e.call(this,t,n,c)||this}return Object(s.__extends)(t,e),t.prototype.getDailyMenuFor=function(e){return this.http.get(m+"/"+e).pipe(Object(l.a)((function(){return Object(u.a)(null)})))},t.ngInjectableDef=c.Tb({token:t,factory:function(e){return new(e||t)(c.ic(g.c),c.ic(o.a),c.ic(d.a))},providedIn:null}),t}(f.a),v=n("67Y/"),b=n("26FU"),y=function(){function e(){var e=this;this.coordinates=new b.a({}),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.coordinates.next({latitude:t.coords.latitude,longitude:t.coords.longitude})}),(function(t){return e.coordinates.error(t)})):this.coordinates.error("Geolocation is not supported by this browser.")}return e.prototype.cleanUp=function(){this.id&&navigator.geolocation.clearWatch(this.id)},e.prototype.distanceAsync=function(e){var t=this;return e?this.coordinates.pipe(Object(v.a)((function(n){return n?t.calcCrow(Number(n.latitude),Number(n.longitude),Number(e.latitude),Number(e.longitude)):0}))):Object(u.a)(0)},e.prototype.distanceFrom=function(e){return this.distance(e,this.coordinates.value)},e.prototype.distance=function(e,t){return e&&t?this.calcCrow(Number(t.latitude),Number(t.longitude),Number(e.latitude),Number(e.longitude)):0},e.prototype.calcCrow=function(e,t,n,c){var r=function(e){return e*Math.PI/180},a=r(n-e),i=r(c-t);e=r(e),n=r(n);var o=Math.sin(a/2)*Math.sin(a/2)+Math.sin(i/2)*Math.sin(i/2)*Math.cos(e)*Math.cos(n);return 2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))*6371},e.ngInjectableDef=c.Tb({token:e,factory:function(t){return new(t||e)},providedIn:"root"}),e}(),w=n("o8Qb"),C=function(e){function t(t,n,c,r,a){var i=e.call(this,c,r,a)||this;return i.geoLocationService=t,i.translateService=n,i.restaurants=i.loadRestaurants(),i}return Object(s.__extends)(t,e),t.prototype.openFoodImages=function(e){window.open(this.getGoogleImagesLinkFor(e),"_blank")},t.prototype.getDistance=function(e){var t=this.geoLocationService.distanceFrom(e);return t?t<1?(1e3*t).toFixed(0)+" m ":t.toFixed(2)+" km ":this.translateService.instant("shared.distance")},t.prototype.getRestaurants=function(){return this.restaurants.pipe(Object(v.a)((function(e){return Object.values(e)})))},t.prototype.openHomepage=function(e){window.open(e.homepage,"__blank")},t.prototype.getRestaurantByKey=function(e){return this.restaurants.pipe(Object(v.a)((function(t){return t[e]})),Object(l.a)((function(){return Object(u.a)(null)})))},t.prototype.getGoogleImagesLinkFor=function(e){return"https://www.google.sk/search?q="+encodeURIComponent(e)+"&tbm=isch"},t.prototype.loadRestaurants=function(){return this.http.get("https://g43riko.github.io/foods/assets/data/restaurantsData.json").pipe(Object(l.a)(this.handleError("getRestaurants"))).pipe(Object(v.a)((function(e){var t={};return e.filter((function(e){return e.key})).forEach((function(e){t[e.key]=e})),t})))},t.ngInjectableDef=c.Tb({token:t,factory:function(e){return new(e||t)(c.ic(y),c.ic(w.e),c.ic(g.c),c.ic(o.a),c.ic(d.a))},providedIn:null}),t}(f.a),S=n("j+lW"),k=n("uXrp"),x=n("M+/Y"),M=n("utYi"),I=n("2mMm"),U=n("L7w6"),F=n("rta0"),O=n("lAl6"),R=n("FgbW"),J=n("Valr"),A=n("15JJ"),L=n("XjUc"),$=function(){function e(){}return e.prototype.transform=function(e,t){if(!t)return e;var n=t.toLowerCase().trim();return e.filter((function(e){return!(!e.key||!e.key.toLowerCase().includes(n))||e.name&&e.name.toLowerCase().includes(n)}))},e.ngPipeDef=c.Wb({name:"searchRestaurant",type:e,factory:function(t){return new(t||e)},pure:!0}),e}(),_=["class","restaurant-selector-wrapper",4,"ngIf","ngIfElse"],j=["onlyRestaurantList",""],P=[1,"restaurant-selector-wrapper"],H=["class","loader-wrapper",4,"ngIf"],z=[2,"padding","0 0.5rem 0 0.5rem","box-shadow","0 0 5px rgba(0, 0, 0, 0.4)","height","60px"],D=["matInput","",3,"placeholder"],E=["searchRestaurant",""],T=["matSuffix",""],Y=[3,"selectionChange"],q=[3,"selected","value",4,"ngFor","ngForOf"],Z=[1,"loader-wrapper"];function W(e,t){1&e&&(c.ec(0,"div",Z),c.Yb(1,"mat-spinner"),c.cc())}var N=[3,"selected","value"];function X(e,t){if(1&e&&(c.ec(0,"mat-list-option",N),c.Uc(1),c.cc()),2&e){var n=t.$implicit,r=c.pc().ngIf,a=c.pc();c.vc("selected",a.isSelected(n,r))("value",n.key),c.Jc(1),c.Wc(" ",n.name," ")}}function V(e,t){if(1&e){var n=c.fc();c.ec(0,"div",P),c.Sc(1,W,2,0,"div",H),c.ec(2,"mat-form-field",z),c.Yb(3,"input",D,E),c.qc(5,"translate"),c.ec(6,"mat-icon",T),c.Uc(7,"search"),c.cc(),c.cc(),c.ec(8,"mat-selection-list",Y),c.kc("selectionChange",(function(e){c.Fc(n);var r=t.ngIf;return c.pc().change(e,r)})),c.Sc(9,X,2,3,"mat-list-option",q),c.qc(10,"searchRestaurant"),c.cc(),c.cc()}if(2&e){var r=c.Dc(4),a=c.pc();c.Jc(1),c.vc("ngIf",a.loading),c.Jc(3),c.wc("placeholder",c.rc(5,3,"common.search")),c.Jc(9),c.vc("ngForOf",c.sc(10,5,a.allRestaurants,r.value))}}var G=[3,"disabled"],B=[4,"ngFor","ngForOf"];function K(e,t){if(1&e&&(c.ec(0,"mat-list-option"),c.Uc(1),c.cc()),2&e){var n=t.$implicit;c.Jc(1),c.Wc(" ",n.name," ")}}function Q(e,t){if(1&e&&(c.ec(0,"div",P),c.ec(1,"mat-selection-list",G),c.Sc(2,K,2,1,"mat-list-option",B),c.cc(),c.cc()),2&e){var n=c.pc();c.Jc(1),c.vc("disabled",!0),c.Jc(2),c.vc("ngForOf",n.allRestaurants)}}var ee=function(){function e(e,t){this.restaurantHttpService=e,this.authService=t,this.loading=!1,this.allRestaurants=[]}return e.prototype.ngOnInit=function(){var e=this;this.restaurantHttpService.getRestaurants().pipe(Object(A.a)((function(t){return e.allRestaurants=t,e.authService.user$}))).subscribe((function(t){var n;if(e.selectionList.deselectAll(),t&&Array.isArray(t.favoriteRestaurants)){var c=t.favoriteRestaurants;(n=e.selectionList.selectedOptions).select.apply(n,e.selectionList.options.filter((function(e){return c.includes(e.value)})))}}))},e.prototype.isSelected=function(e,t){return Boolean(e.key&&Array.isArray(t.favoriteRestaurants)&&t.favoriteRestaurants.includes(e.key))},e.prototype.change=function(e,t){var n=this;this.loading=!0,this.authService.updateFavouriteRestaurant(t,e.option.value,e.option.selected?"add":"remove").subscribe((function(){n.loading=!1}))},e.ngComponentDef=c.Rb({type:e,selectors:[["app-restaurant-selector"]],factory:function(t){return new(t||e)(c.Xb(C),c.Xb(o.a))},viewQuery:function(e,t){var n;1&e&&c.Zc(O.i,!0),2&e&&c.Cc(n=c.mc())&&(t.selectionList=n.first)},consts:4,vars:4,template:function(e,t){if(1&e&&(c.Sc(0,V,11,8,"div",_),c.qc(1,"async"),c.Sc(2,Q,3,2,"ng-template",null,j,c.Tc)),2&e){var n=c.Dc(3);c.vc("ngIf",c.rc(1,2,t.authService.user$))("ngIfElse",n)}},directives:[J.t,R.b,x.b,M.a,R.i,O.i,J.s,L.c,O.f],pipes:[J.b,w.d,$],styles:[".restaurant-selector-wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.restaurant-selector-wrapper[_ngcontent-%COMP%]   mat-selection-list[_ngcontent-%COMP%]{overflow:auto}.loader-wrapper[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;background:rgba(0,0,0,.2);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2}"]}),e}(),te=n("j2Vq"),ne=n("o7GM"),ce=n("GlzI"),re=n("Y0mc"),ae=n("QrbZ"),ie=n("P11e"),oe=n("S8bm"),se=n("sDCv"),ue=new RegExp('(<span class="searched">|</span>)',"g"),le=function(){function e(){}return e.prototype.transform=function(e,t){if(!e)return[null];if(e.forEach((function(e){return e.name&&(e.name=e.name.replace(ue,""))})),!t)return e;var n=ne.StringUtils.removeAccentedCharacters(t.toLowerCase()),c=e.filter((function(e){var t=ne.StringUtils.removeAccentedCharacters(e.name.toLowerCase()).indexOf(n);return t>=0&&(e.nameHTML=e.name.substr(0,t)+'<span class="searched">'+e.name.substr(t,n.length)+"</span>"+e.name.substr(t+n.length,e.name.length-(t+n.length))),t>=0}));return c.length>0?c:[null]},e.ngPipeDef=c.Wb({name:"searchFoodPipe",type:e,factory:function(t){return new(t||e)},pure:!0}),e}(),pe=["mat-subheader","","style","position: sticky;top: 0;background: #fafafa;z-index:1",4,"ngIf"],fe=[4,"ngIf"],de=["mat-subheader","",2,"position","sticky","top","0","background","#fafafa","z-index","1"],ge=[3,"matTooltip","click",4,"ngIf"],me=[3,"matTooltip","click"];function he(e,t){if(1&e){var n=c.fc();c.ec(0,"mat-icon",me),c.kc("click",(function(e){c.Fc(n);var t=c.pc(2);return t.showMap(t.restaurant)})),c.qc(1,"translate"),c.Uc(2,"map "),c.cc()}2&e&&c.wc("matTooltip",c.rc(1,1,"shared.showMap"))}function ve(e,t){if(1&e){var n=c.fc();c.ec(0,"mat-icon",me),c.kc("click",(function(e){c.Fc(n);var t=c.pc(2);return t.restaurantHttpService.openHomepage(t.restaurant)})),c.qc(1,"translate"),c.Uc(2,"home "),c.cc()}2&e&&c.wc("matTooltip",c.rc(1,1,"foods.showHomePage"))}function be(e,t){if(1&e&&(c.ec(0,"h2",de),c.ec(1,"span"),c.Qc(),c.Uc(2),c.cc(),c.ec(3,"small"),c.Uc(4),c.qc(5,"translate"),c.cc(),c.Sc(6,he,3,3,"mat-icon",ge),c.Sc(7,ve,3,3,"mat-icon",ge),c.cc()),2&e){var n=c.pc();c.Jc(1),c.Nb("searched",n.restaurantMatch),c.Rc(),c.Jc(2),c.Vc(n.restaurant.name),c.Jc(4),c.Xc(" - ",n.restaurantHttpService.getDistance(n.restaurant.address)," ",c.rc(5,6,"foods.fromYou"),""),c.Jc(6),c.vc("ngIf",n.restaurant.address),c.Jc(7),c.vc("ngIf",n.restaurant.homepage)}}var ye=["mat-line","",1,"centered-vertically"];function we(e,t){if(1&e){var n=c.fc();c.bc(0),c.Uc(1),c.qc(2,"translate"),c.ec(3,"mat-icon",me),c.kc("click",(function(e){c.Fc(n);var t=c.pc(2);return t.restaurantHttpService.openHomepage(t.restaurant)})),c.qc(4,"translate"),c.Uc(5,"home "),c.cc(),c.ac()}2&e&&(c.Jc(1),c.Wc(" ",c.rc(2,2,"foods.tryHomepage")," "),c.Jc(3),c.wc("matTooltip",c.rc(4,4,"foods.showHomePage")))}function Ce(e,t){if(1&e&&(c.ec(0,"mat-list-item"),c.ec(1,"small",ye),c.Uc(2),c.qc(3,"translate"),c.Sc(4,we,6,6,"ng-container",fe),c.cc(),c.cc()),2&e){var n=c.pc();c.Jc(2),c.Wc(" ",c.rc(3,2,"foods.cannotGetDailyMenu"),". "),c.Jc(4),c.vc("ngIf",n.restaurant.homepage)}}var Se=[4,"ngFor","ngForOf"];function ke(e,t){if(1&e){var n=c.fc();c.bc(0),c.Uc(1),c.qc(2,"translate"),c.ec(3,"mat-icon",me),c.kc("click",(function(e){c.Fc(n);var t=c.pc(3);return t.restaurantHttpService.openHomepage(t.restaurant)})),c.qc(4,"translate"),c.Uc(5,"home "),c.cc(),c.ac()}2&e&&(c.Jc(1),c.Wc(" ",c.rc(2,2,"foods.tryHomepage")," "),c.Jc(3),c.wc("matTooltip",c.rc(4,4,"foods.showHomePage")))}function xe(e,t){if(1&e&&(c.ec(0,"mat-list-item"),c.ec(1,"small",ye),c.Uc(2),c.qc(3,"translate"),c.Sc(4,ke,6,6,"ng-container",fe),c.cc(),c.Uc(5,". "),c.cc()),2&e){var n=c.pc(2);c.Jc(2),c.Wc(" ",c.rc(3,2,"foods.restaurantHasNoPublicMenu"),". "),c.Jc(4),c.vc("ngIf",n.restaurant.homepage)}}var Me=[3,"hoverable",4,"ngIf","ngIfElse"],Ie=["noFilterResults",""],Ue=["defaultIcon","restaurant","mat-list-icon","","type","food",3,"keys",4,"ngIf"],Fe=["mat-list-icon","","style","order:2",3,"click",4,"ngIf"],Oe=["mat-line","",3,"innerHTML",4,"ngIf","ngIfElse"],Re=["showTitle",""],Je=["class","additional-info",4,"ngIf"],Ae=["defaultIcon","restaurant","mat-list-icon","","type","food",3,"keys"],Le=function(e){return[e]};function $e(e,t){if(1&e&&c.Yb(0,"app-icon-list",Ae),2&e){var n=c.pc(2).$implicit;c.vc("keys",c.yc(1,Le,n.type))}}var _e=["mat-list-icon","",2,"order","2",3,"click"];function je(e,t){if(1&e){var n=c.fc();c.ec(0,"mat-icon",_e),c.kc("click",(function(e){c.Fc(n);var t=c.pc(2).$implicit;return c.pc(2).restaurantHttpService.openFoodImages(t.name)})),c.Uc(1,"image "),c.cc()}}var Pe=["mat-line","",3,"innerHTML"];function He(e,t){if(1&e&&c.Yb(0,"h4",Pe),2&e){var n=c.pc(2).$implicit,r=c.pc(2);c.vc("innerHTML",!r.restaurantMatch&&r.localSearchedMath&&n.nameHTML||n.name,c.Gc)}}var ze=["mat-line",""];function De(e,t){if(1&e&&(c.ec(0,"h4",ze),c.ec(1,"strong"),c.Uc(2),c.cc(),c.cc()),2&e){var n=c.pc(2).$implicit;c.Jc(2),c.Vc(n.name)}}var Ee=[1,"additional-info"];function Te(e,t){if(1&e&&(c.ec(0,"span",Ee),c.Uc(1),c.cc()),2&e){var n=c.pc(2).$implicit;c.Jc(1),c.Vc(n.price)}}function Ye(e,t){if(1&e&&(c.ec(0,"span",Ee),c.Uc(1),c.cc()),2&e){var n=c.pc(2).$implicit;c.Jc(1),c.Vc(n.weight)}}function qe(e,t){if(1&e&&(c.ec(0,"mat-list-item"),c.Qc(),c.Sc(1,$e,1,3,"app-icon-list",Ue),c.Sc(2,je,2,0,"mat-icon",Fe),c.Sc(3,He,1,1,"h4",Oe),c.Sc(4,De,3,1,"ng-template",null,Re,c.Tc),c.Sc(6,Te,2,1,"span",Je),c.Sc(7,Ye,2,1,"span",Je),c.cc()),2&e){var n=c.Dc(5),r=c.pc().$implicit;c.Nb("hoverable",r&&"special"!==r.type),c.Rc(),c.Jc(1),c.vc("ngIf","special"!==r.type),c.Jc(2),c.vc("ngIf","special"!==r.type),c.Jc(3),c.vc("ngIf","special"!==r.type)("ngIfElse",n),c.Jc(6),c.vc("ngIf",r.price),c.Jc(7),c.vc("ngIf",r.weight)}}function Ze(e,t){1&e&&(c.ec(0,"mat-list-item"),c.ec(1,"h4",ze),c.Uc(2),c.qc(3,"translate"),c.cc(),c.cc()),2&e&&(c.Jc(2),c.Vc(c.rc(3,1,"shared.noFilterResults")))}function We(e,t){if(1&e&&c.Sc(0,Ze,4,3,"mat-list-item",fe),2&e){var n=c.pc(3);c.vc("ngIf",n.dailyMenu.dishes.length)}}function Ne(e,t){if(1&e&&(c.bc(0),c.Sc(1,qe,8,7,"mat-list-item",Me),c.Sc(2,We,1,1,"ng-template",null,Ie,c.Tc),c.ac()),2&e){var n=t.$implicit,r=c.Dc(3);c.Jc(1),c.vc("ngIf",n)("ngIfElse",r)}}function Xe(e,t){if(1&e&&(c.bc(0),c.Sc(1,xe,6,4,"mat-list-item",fe),c.Sc(2,Ne,4,2,"ng-container",Se),c.qc(3,"searchFoodPipe"),c.ac()),2&e){var n=c.pc();c.Jc(1),c.vc("ngIf",!n.dailyMenu.dishes.length),c.Jc(2),c.vc("ngForOf",n.restaurantMatch?n.dailyMenu.dishes:c.sc(3,2,n.dailyMenu.dishes,n.localSearchedMath))}}var Ve=["mode","indeterminate"];function Ge(e,t){1&e&&(c.ec(0,"mat-list-item"),c.Yb(1,"mat-progress-bar",Ve),c.cc())}var Be=function(){function e(e,t,n,c,r){this.dailyMenuHttpService=e,this.restaurantHttpService=t,this.changeDetectorRef=n,this.mapService=c,this.dialog=r,this.loading=!1,this.restaurantMatch=!1}return Object.defineProperty(e.prototype,"searchedFood",{set:function(e){this.localSearchedMath=e,this.restaurantMatch=this.isRestaurantMatch(),this.changeDetectorRef.markForCheck()},enumerable:!0,configurable:!0}),e.prototype.isRestaurantMatch=function(){if(!this.restaurant||!this.localSearchedMath||this.localSearchedMath.length<3)return!1;var e=ne.StringUtils.removeAccentedCharacters(this.localSearchedMath.toLowerCase());return ne.StringUtils.removeAccentedCharacters(this.restaurant.name).toLowerCase().indexOf(e)>=0||ne.StringUtils.removeAccentedCharacters(this.restaurant.key).toLowerCase().indexOf(e)>=0},Object.defineProperty(e.prototype,"restaurantKey",{set:function(e){var t=this;e&&(this.loading=!0,this.restaurantHttpService.getRestaurantByKey(e).pipe(Object(A.a)((function(n){return n?(t.restaurant=n,t.dailyMenuHttpService.getDailyMenuFor(e)):Object(u.a)(null)}))).subscribe((function(e){t.dailyMenu=e,t.loading=!1})))},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){},e.prototype.showMap=function(e){e.address&&this.dialog.open(ce.a,{width:"95%",height:"95%",data:this.mapService.getLocationEmbedUrlFromLatAndLong(Number(e.address.latitude),Number(e.address.longitude))})},e.prototype.getIconByType=function(e){switch(e){case"pizza":return"local_pizza";case"burger":return"hamburger";case"fish":return"fish";case"salad":return"salad";default:return"restaurant"}},e.ngComponentDef=c.Rb({type:e,selectors:[["app-restaurant-row"]],factory:function(t){return new(t||e)(c.Xb(h),c.Xb(C),c.Xb(c.j),c.Xb(re.a),c.Xb(ae.b))},inputs:{searchedFood:"searchedFood",restaurantKey:"restaurantKey"},consts:4,vars:4,template:function(e,t){1&e&&(c.Sc(0,be,8,8,"h2",pe),c.Sc(1,Ce,5,4,"mat-list-item",fe),c.Sc(2,Xe,4,5,"ng-container",fe),c.Sc(3,Ge,2,0,"mat-list-item",fe)),2&e&&(c.vc("ngIf",t.restaurant),c.Jc(1),c.vc("ngIf",null===t.dailyMenu),c.Jc(2),c.vc("ngIf",t.dailyMenu),c.Jc(3),c.vc("ngIf",t.loading))},directives:[J.t,O.g,M.a,U.a,O.d,oe.k,J.s,se.a,O.c,ie.a],pipes:[w.d,le],styles:[".mat-icon[_ngcontent-%COMP%]{display:inline-block!important;margin-left:.2em;cursor:pointer}.mat-icon[_ngcontent-%COMP%]:hover{color:#000}.hoverable[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.04)}.additional-info[_ngcontent-%COMP%]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;white-space:nowrap;margin:0 1em}@media only screen and (max-width:767px){.additional-info[_ngcontent-%COMP%]{margin:0 .1em}}.centered-vertically[_ngcontent-%COMP%]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;color:#000;font-weight:bolder}"]}),e}(),Ke=n("lZIM"),Qe=[1,"wrapper"],et=["color","primary"],tt=[2,"height","100%"],nt=["matInput","",3,"placeholder"],ct=["searchFood",""],rt=["matSuffix",""],at=[1,"divider"],it=["class","one-row-warning",4,"ngIf"],ot=["mat-icon-button","",3,"matTooltip","click"],st=[4,"ngIf"],ut=[1,"example-sidenav-container"],lt=["mode","over","fixedTopGap","56","position","end"],pt=["snav",""],ft=[3,"min-height",4,"ngIf"],dt=[1,"one-row-warning"];function gt(e,t){1&e&&(c.ec(0,"span",dt),c.Uc(1),c.qc(2,"translate"),c.ec(3,"mat-icon"),c.Uc(4,"account_circle"),c.cc(),c.cc()),2&e&&(c.Jc(1),c.Wc(" ",c.rc(2,1,"foods.forSpecificRestaurantsClickOn")," "))}function mt(e,t){1&e&&c.Yb(0,"app-login-screen")}var ht=[4,"ngFor","ngForOf"],vt=[3,"searchedFood","restaurantKey"];function bt(e,t){1&e&&c.Yb(0,"mat-divider")}function yt(e,t){if(1&e&&(c.bc(0),c.Sc(1,bt,1,0,"mat-divider",st),c.Yb(2,"app-restaurant-row",vt),c.ac()),2&e){var n=t.$implicit,r=t.index;c.pc(2);var a=c.Dc(5);c.Jc(1),c.vc("ngIf",r>0),c.Jc(2),c.vc("searchedFood",a.value)("restaurantKey",n)}}function wt(e,t){1&e&&(c.ec(0,"span",dt),c.Uc(1),c.qc(2,"translate"),c.ec(3,"mat-icon"),c.Uc(4,"menu"),c.cc(),c.cc()),2&e&&(c.Jc(1),c.Wc(" ",c.rc(2,1,"foods.forRestaurantSelectionClickOn")," "))}function Ct(e,t){if(1&e&&(c.ec(0,"mat-sidenav-content"),c.Qc(),c.ec(1,"mat-list"),c.Sc(2,yt,3,3,"ng-container",ht),c.cc(),c.Sc(3,wt,5,3,"span",it),c.cc()),2&e){var n=c.pc();c.Pc("min-height",n.minHeight),c.Rc(),c.Jc(2),c.vc("ngForOf",n.selectedRestaurants),c.Jc(3),c.vc("ngIf",n.selectedRestaurants&&0===n.selectedRestaurants.length)}}var St=function(){function e(e,t,n,c){this.dailyMenuHttpService=e,this.bottomSheet=t,this.restaurantHttpService=n,this.authService=c,this.standAlone=!1}return Object.defineProperty(e.prototype,"minHeight",{get:function(){return"calc(100vh - "+(this.standAlone?64:128)+"px)"},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;this.authService.user$.subscribe((function(t){t?e.selectedRestaurants=t.favoriteRestaurants||[]:e.restaurantHttpService.getRestaurants().subscribe((function(t){e.selectedRestaurants=t.map((function(e){return e.key+""}))}))}))},e.prototype.openFeedback=function(){this.bottomSheet.open(i.a,{data:{screen:"Foods"}})},e.ngComponentDef=c.Rb({type:e,selectors:[["app-overview"]],factory:function(t){return new(t||e)(c.Xb(h),c.Xb(S.b),c.Xb(C),c.Xb(o.a))},consts:27,vars:14,template:function(e,t){if(1&e){var n=c.fc();c.ec(0,"div",Qe),c.ec(1,"mat-toolbar",et),c.ec(2,"mat-toolbar-row"),c.ec(3,"mat-form-field",tt),c.Yb(4,"input",nt,ct),c.qc(6,"translate"),c.ec(7,"mat-icon",rt),c.Uc(8,"search"),c.cc(),c.cc(),c.Yb(9,"span",at),c.Sc(10,gt,5,3,"span",it),c.qc(11,"async"),c.Yb(12,"span",at),c.ec(13,"button",ot),c.kc("click",(function(e){return c.Fc(n),c.Dc(24).toggle()})),c.qc(14,"translate"),c.ec(15,"mat-icon"),c.Uc(16,"menu"),c.cc(),c.cc(),c.ec(17,"button",ot),c.kc("click",(function(e){return t.openFeedback()})),c.qc(18,"translate"),c.ec(19,"mat-icon"),c.Uc(20,"feedback"),c.cc(),c.cc(),c.Sc(21,mt,1,0,"app-login-screen",st),c.cc(),c.cc(),c.ec(22,"mat-sidenav-container",ut),c.ec(23,"mat-sidenav",lt,pt),c.Yb(25,"app-restaurant-selector"),c.cc(),c.Sc(26,Ct,4,3,"mat-sidenav-content",ft),c.cc(),c.cc()}2&e&&(c.Jc(4),c.wc("placeholder",c.rc(6,6,"common.search")),c.Jc(10),c.vc("ngIf",!c.rc(11,8,t.authService.user$)),c.Jc(13),c.wc("matTooltip",c.rc(14,10,"foods.restaurantSelection")),c.Jc(17),c.wc("matTooltip",c.rc(18,12,"shared.feedbackPanel")),c.Jc(21),c.vc("ngIf",t.standAlone),c.Jc(26),c.vc("ngIf",t.authService.user$))},directives:[k.a,k.c,R.b,x.b,M.a,R.i,J.t,I.b,U.a,F.e,F.d,ee,te.a,F.f,O.a,J.s,Be,Ke.a],pipes:[w.d,J.b],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.one-row-warning[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:1rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"]}),e}(),kt=n("DUip"),xt=[{path:"",children:[{path:"",pathMatch:"full",component:St}]}],Mt=function(){function e(){}return e.ngModuleDef=c.Vb({type:e}),e.ngInjectorDef=c.Ub({factory:function(t){return new(t||e)},imports:[[kt.l.forChild(xt)],kt.l]}),e}();kt.l.forChild(xt),n.d(t,"FoodsModule",(function(){return It}));var It=function(){function e(){}return e.ngModuleDef=c.Vb({type:e}),e.ngInjectorDef=c.Ub({factory:function(t){return new(t||e)},providers:[C,h],imports:[[a.a,Mt,r.a]]}),e}()}}]);