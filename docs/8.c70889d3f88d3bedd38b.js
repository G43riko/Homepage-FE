(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ZJtR:function(e,n,t){"use strict";t.r(n);var c=t("Valr"),o=t("TYT/"),i=t("QJY3"),a=t("mnDI"),r=t("NA4g"),l=t("aYsj"),s=t("3S9H"),p=t("IYfF"),u=t("Y5dU"),g=t("Ktk3"),d=[1,"image-container"],f=["class","image-holder",4,"ngFor","ngForOf"],h=[1,"image-holder"],m=[1,"wrapper"],b=["alt","",3,"src"],v=[1,"info"],w=[1,"title"],y=["href","https://unsplash.com/photos/zshyCr6HGw0","rel","noopener","target","_blank"],C=[1,"created"];function x(e,n){if(1&e&&(o.ec(0,"figure",h),o.ec(1,"div",m),o.Yb(2,"img",b),o.qc(3,"async"),o.ec(4,"div",v),o.ec(5,"span",w),o.ec(6,"a",y),o.Uc(7,"Lake Walchen"),o.cc(),o.cc(),o.ec(8,"span",C),o.Uc(9," 12.11.1993 "),o.cc(),o.cc(),o.cc(),o.cc()),2&e){var t=n.$implicit;o.Jc(2),o.vc("src",o.rc(3,1,t),o.Ic)}}var _=function(){function e(e,n){this.storage=e,this.authService=n,this.onNumberChange=new o.t}return e.prototype.ngOnInit=function(){var e=this;this.authService.user$.subscribe((function(n){n&&e.loadData(n)}))},e.prototype.loadData=function(e){var n=this;this.storage.storage.ref("images/"+this.type+"/"+e.uid+"/").listAll().then((function(e){n.onNumberChange.emit(e.items.length),n.files=e.items.map((function(e){return Object(u.a)(e.getDownloadURL())}))}))},e.ngComponentDef=o.Rb({type:e,selectors:[["app-my-files"]],factory:function(n){return new(n||e)(o.Xb(g.a),o.Xb(p.a))},inputs:{type:"type"},outputs:{onNumberChange:"onNumberChange"},consts:2,vars:1,template:function(e,n){1&e&&(o.ec(0,"div",d),o.Sc(1,x,10,3,"figure",f),o.cc()),2&e&&(o.Jc(1),o.vc("ngForOf",n.files))},directives:[c.s],pipes:[c.b],styles:[".image-container[_ngcontent-%COMP%]{position:relative;-webkit-column-count:4;-moz-column-count:4;column-count:4;-webkit-column-gap:0;-moz-column-gap:0;column-gap:0}@media only screen and (max-width:1023px){.image-container[_ngcontent-%COMP%]{-webkit-column-count:3;-moz-column-count:3;column-count:3}}@media only screen and (max-width:767px){.image-container[_ngcontent-%COMP%]{-webkit-column-count:2;-moz-column-count:2;column-count:2}}@media only screen and (max-width:320px){.image-container[_ngcontent-%COMP%]{-webkit-column-count:1;-moz-column-count:1;column-count:1}}.image-container[_ngcontent-%COMP%]   figure.image-holder[_ngcontent-%COMP%]{position:relative;display:inline-block;margin:0;overflow:hidden;border-radius:5px;padding:5px;width:100%}.image-container[_ngcontent-%COMP%]   figure.image-holder[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;border-radius:5px;box-sizing:border-box}.image-container[_ngcontent-%COMP%]   figure.image-holder[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:100%;-webkit-filter:grayscale(0);filter:grayscale(0);-webkit-transition:-webkit-filter .3s;transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s;border-radius:5px;overflow:hidden}.image-container[_ngcontent-%COMP%]   figure.image-holder[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{background:rgba(0,0,0,.8);position:absolute;width:100%;height:0;-webkit-transition:height .3s;transition:height .3s;line-height:40px;border-radius:0 0 5px 5px;padding:0 10px;box-sizing:border-box;bottom:5px;overflow:hidden}.image-container[_ngcontent-%COMP%]   figure.image-holder[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{float:right;color:#fff}.image-container[_ngcontent-%COMP%]   figure.image-holder[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%]{height:40px}.image-container[_ngcontent-%COMP%]   figure.image-holder[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-filter:grayscale(100%);filter:grayscale(100%)}"]}),e}(),k=t("YfVx"),O=t("Qo+n"),M=t("jjfr"),P=t("2WpN"),F=t("/yY+"),S=t("aR35"),I=function(){function e(e,n,t){this.ref=e,this.ownedImageTask=n,this.sharedImageTask=t}return Object.defineProperty(e.prototype,"percentageChanges",{get:function(){return this.ownedImageTask.percentageChanges()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"snapshotChanges",{get:function(){return this.ownedImageTask.snapshotChanges()},enumerable:!0,configurable:!0}),e}(),U=function(){function e(e,n){this.storage=e,this.authService=n}return e.prototype.checkFileFormat=function(e){if("image"!==e.type.split("/")[0])throw new Error("Unsupported file format")},e.prototype.getCustomMetadata=function(e,n){return{sharedWith:n,app:S.a.TITLE,uploadedBy:e.uid,active:"true"}},e.prototype.getUniqueFileNameFromFile=function(e){return(new Date).getTime()+"_"+e.name},e.prototype.uploadFile=function(e,n,t){this.checkFileFormat(e);var c,o=this.getUniqueFileNameFromFile(e),i="images/owned/"+n.uid+"/"+o,a=this.getCustomMetadata(n,t);return t&&(c=this.storage.upload("images/shared/"+t+"/"+o,e,{customMetadata:a})),new I(this.storage.ref(i),this.storage.upload(i,e,{customMetadata:a}),c)},e.ngInjectableDef=o.Tb({token:e,factory:function(n){return new(n||e)(o.ic(g.a),o.ic(p.a))},providedIn:"root"}),e}(),J=t("CgSc"),D=t("xtoW"),z=t("M+/Y"),N=t("pENn"),T=t("P11e"),W=t("qWDx"),Y=t("FgbW"),q=t("S8bm"),R=t("vyaW"),j=[4,"ngIf"],B=[1,"share-options-wrapper",2,"margin-bottom","1em"],A=[1,"share-enable",3,"ngModel","ngModelChange"],E=["class","full-width share-autocomplete",4,"ngIf"],Z=["appDropZone","",1,"box_input",3,"ngClass","dropped","hovered","click"],L=["height","43","viewBox","0 0 50 43","width","50","xmlns","http://www.w3.org/2000/svg",1,"box_icon"],X=["d","M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"],V=["id","file_input","multiple","","type","file",1,"box_file",3,"change"],$=["file_input",""],H=[1,"label"],Q=[3,"ngIfElse","ngIf"],G=["isEmpty",""],K=[1,"box_button",3,"disabled","click"],ee=["upload_button",""],ne=[1,"full-width","share-autocomplete"],te=["aria-label","State","matInput","","placeholder","Zdielať s",3,"formControl","matAutocomplete"],ce=[3,"displayWith"],oe=["auto","matAutocomplete"],ie=[3,"disabled","value",4,"ngFor","ngForOf"],ae=[3,"disabled","value"],re=["alt","account photo","aria-hidden","",1,"example-option-img",3,"src"];function le(e,n){if(1&e&&(o.ec(0,"mat-option",ae),o.Yb(1,"img",re),o.ec(2,"span"),o.Uc(3),o.cc(),o.Uc(4,"   &nbsp "),o.ec(5,"small"),o.Uc(6),o.cc(),o.cc()),2&e){var t=n.$implicit,c=o.pc(2).ngIf;o.vc("disabled",c.uid===t.uid)("value",t),o.Jc(1),o.vc("src",t.photoURL,o.Ic),o.Jc(3),o.Vc(t.displayName),o.Jc(6),o.Vc(t.email)}}function se(e,n){if(1&e&&(o.ec(0,"mat-form-field",ne),o.Yb(1,"input",te),o.ec(2,"mat-autocomplete",ce,oe),o.Sc(4,le,7,5,"mat-option",ie),o.qc(5,"async"),o.cc(),o.cc()),2&e){var t=o.Dc(3),c=o.pc(2);o.Jc(1),o.vc("formControl",c.shareWith)("matAutocomplete",t),o.Jc(2),o.vc("displayWith",c.mapper),o.Jc(4),o.vc("ngForOf",o.rc(5,4,c.accounts))}}function pe(e,n){}var ue=[4,"ngFor","ngForOf"];function ge(e,n){if(1&e&&(o.ec(0,"div"),o.Uc(1),o.cc()),2&e){var t=n.$implicit;o.Jc(1),o.Vc(t.name)}}function de(e,n){if(1&e&&o.Sc(0,ge,2,1,"div",ue),2&e){var t=o.pc(2);o.vc("ngForOf",t.files)}}var fe=[1,"box__dragndrop"];function he(e,n){1&e&&(o.ec(0,"strong"),o.Uc(1,"Choose a file"),o.cc(),o.ec(2,"span",fe),o.Uc(3," or drag it here"),o.cc(),o.Uc(4,". "))}var me=["class","progress-wrapper",3,"ngStyle",4,"ngIf"],be=[1,"progress-wrapper",3,"ngStyle"],ve=[1,"progress"],we=["mode","determinate",3,"value"],ye=function(e){return{display:e}};function Ce(e,n){if(1&e&&(o.ec(0,"div",be),o.ec(1,"span",ve),o.Uc(2),o.qc(3,"g43fileSize"),o.qc(4,"g43fileSize"),o.cc(),o.Yb(5,"mat-progress-bar",we),o.cc()),2&e){var t=n.ngIf,c=o.pc().ngIf,i=o.pc(2);o.vc("ngStyle",o.yc(8,ye,i.isActive(c)?"block":"none")),o.Jc(2),o.Xc("",o.rc(3,4,c.bytesTransferred)," of ",o.rc(4,6,c.totalBytes),""),o.Jc(5),o.vc("value",t)}}function xe(e,n){if(1&e&&(o.ec(0,"div"),o.Sc(1,Ce,6,10,"div",me),o.qc(2,"async"),o.cc()),2&e){var t=o.pc(2);o.Jc(1),o.vc("ngIf",o.rc(2,1,t.percentage))}}var _e=function(e){return{"is-dragover":e}};function ke(e,n){if(1&e){var t=o.fc();o.ec(0,"div"),o.ec(1,"div",B),o.ec(2,"mat-slide-toggle",A),o.kc("ngModelChange",(function(e){return o.Fc(t),o.pc().shared=e})),o.Uc(3,"Zdielať"),o.cc(),o.Sc(4,se,6,6,"mat-form-field",E),o.cc(),o.ec(5,"div",Z),o.kc("dropped",(function(e){return o.Fc(t),o.pc().files=e})),o.kc("hovered",(function(e){return o.Fc(t),o.pc().isHovering=e})),o.kc("click",(function(e){o.Fc(t);var n=o.Dc(9),c=o.Dc(16);return o.pc().checkClick(e,n,c)})),o.oc(),o.ec(6,"svg",L),o.Yb(7,"path",X),o.cc(),o.nc(),o.ec(8,"input",V,$),o.kc("change",(function(e){o.Fc(t);var n=o.Dc(9);return o.pc().files=n.files})),o.cc(),o.ec(10,"span",H),o.Sc(11,pe,0,0,"ng-template"),o.Sc(12,de,1,1,"ng-template",Q),o.Sc(13,he,5,0,"ng-template",null,G,o.Tc),o.cc(),o.ec(15,"button",K,ee),o.Qc(),o.kc("click",(function(e){o.Fc(t);var c=n.ngIf,i=o.pc();return i.files.length&&i.startUpload(i.files,c)})),o.Uc(17,"Upload "),o.cc(),o.Sc(18,xe,3,3,"div",j),o.qc(19,"async"),o.cc(),o.cc()}if(2&e){var c=o.Dc(14),i=o.pc();o.Jc(2),o.vc("ngModel",i.shared),o.Jc(4),o.vc("ngIf",i.shared),o.Jc(5),o.vc("ngClass",o.yc(10,_e,i.isHovering)),o.Jc(12),o.vc("ngIfElse",c)("ngIf",i.files.length>0),o.Jc(15),o.Nb("disabled",0==i.files.length),o.Rc(),o.vc("disabled",0==i.files.length),o.Jc(18),o.vc("ngIf",o.rc(19,8,i.snapshot))}}var Oe={length:0,item:function(e){return null}},Me=function(){function e(e,n,t,c){this.authService=e,this.snackBar=n,this.analyticsService=t,this.fileUploadService=c,this.uploadTasks=[],this.files=Oe,this.onFileUploaded=new o.t,this.shareWith=new i.g,this.mapper=function(e){return e?e.displayName:null}}return e.prototype.ngOnInit=function(){this.accounts=this.authService.getAccounts()},e.prototype.startUpload=function(e,n){for(var t=this,c=this.shared&&this.shareWith.value?this.shareWith.value.uid:null,o=function(o){var a=e.item(o);if(!a)return"continue";i.analyticsService.eventUploadFile(a.name);try{var r=i.fileUploadService.uploadFile(a,n,c),l=i.uploadTasks.length;i.uploadTasks.push(r),i.percentage=r.percentageChanges,i.snapshot=r.snapshotChanges.pipe(Object(P.a)((function(){t.downloadUrl=r.ref.getDownloadURL(),t.files=Oe,t.onFileUploaded.emit(n),t.snackBar.open("Súbor bol úspešne nahratý","Zavrieť"),t.uploadTasks.splice(l,1)})))}catch(s){i.snackBar.open("Pri uploade nastala chyba: "+s,"Zavrieť")}},i=this,a=0;a<e.length;a++)o(a)},e.prototype.isActive=function(e){return"running"===e.state&&e.bytesTransferred<e.totalBytes},e.prototype.checkClick=function(e,n,t){e.target!==t&&n.click()},e.ngComponentDef=o.Rb({type:e,selectors:[["app-file-upload"]],factory:function(n){return new(n||e)(o.Xb(p.a),o.Xb(J.b),o.Xb(F.a),o.Xb(U))},outputs:{onFileUploaded:"onFileUploaded"},consts:2,vars:3,template:function(e,n){1&e&&(o.Sc(0,ke,20,12,"div",j),o.qc(1,"async")),2&e&&o.vc("ngIf",o.rc(1,1,n.authService.user$))},directives:[c.t,D.a,i.r,i.v,W.a,c.q,Y.b,z.b,i.c,N.d,i.h,N.a,c.s,q.o,c.w,T.a],pipes:[c.b,R.b],styles:[".share-options-wrapper[_ngcontent-%COMP%]{padding:1em;box-sizing:border-box;height:4em}.share-options-wrapper[_ngcontent-%COMP%]   .share-enable[_ngcontent-%COMP%]{display:inline-block;margin:1em}.share-options-wrapper[_ngcontent-%COMP%]   .share-autocomplete[_ngcontent-%COMP%]{display:inline-block;width:calc(70% - 3em)}.example-option-img[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%;top:6px;margin-right:8px;position:relative}.box_input[_ngcontent-%COMP%]{outline:#92b0b3 dashed 2px;outline-offset:-10px;background-color:#c8dadf;font-size:1.25rem;position:relative;text-align:center;padding:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:420px;-webkit-transition:outline-offset .15s ease-in-out,background-color .15s linear;transition:outline-offset .15s ease-in-out,background-color .15s linear}.box_input.is-dragover[_ngcontent-%COMP%]{outline-offset:-20px;outline-color:#c8dadf;background-color:#fff}.box_input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.box_input[_ngcontent-%COMP%]   .box_icon[_ngcontent-%COMP%]{width:100%;height:80px;fill:#92b0b3;display:block;margin-bottom:40px}.box_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{max-width:100%;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;display:inline-block;overflow:hidden}.box_input[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]{width:100%}.box_input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#39bfd3;font-weight:700;color:#e5edf1;display:block;padding:8px 16px;width:100px;border:none;cursor:pointer}.box_input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0f3c4b}.box_input[_ngcontent-%COMP%]   button.disabled[_ngcontent-%COMP%]{background-color:#92b0b3;cursor:not-allowed}@media only screen and (max-height:556px){.box_input[_ngcontent-%COMP%]{height:calc(100vh - 136px - 4em)}.box_input[_ngcontent-%COMP%]   .box_icon[_ngcontent-%COMP%]{margin-bottom:10px}}"]}),e}(),Pe=["class","container",4,"ngIf"],Fe=[1,"container"],Se=["label","Nahrať obrázok",4,"ngIf"],Ie=["label","Nahraté obrázky"],Ue=["mat-tab-label",""],Je=[3,"type","onNumberChange"],De=["label","Zdielané so mnou"],ze=["label","Nahrať obrázok"],Ne=["matTabContent",""],Te=[3,"onFileUploaded"];function We(e,n){if(1&e){var t=o.fc();o.ec(0,"app-file-upload",Te),o.kc("onFileUploaded",(function(e){return o.Fc(t),o.pc(3).uploadComplete(e)})),o.cc()}}function Ye(e,n){1&e&&(o.ec(0,"mat-tab",ze),o.Sc(1,We,1,0,"ng-template",Ne),o.cc())}var qe=["matBadgeOverlap","false",3,"matBadge"];function Re(e,n){if(1&e&&(o.ec(0,"span",qe),o.Uc(1,"Nahraté obrázky"),o.cc()),2&e){var t=o.pc(2);o.wc("matBadge",t.owned)}}function je(e,n){if(1&e&&(o.ec(0,"span",qe),o.Uc(1,"Zdielané so mnou"),o.cc()),2&e){var t=o.pc(2);o.wc("matBadge",t.shared)}}function Be(e,n){if(1&e){var t=o.fc();o.ec(0,"div",Fe),o.ec(1,"mat-tab-group"),o.Sc(2,Ye,2,0,"mat-tab",Se),o.ec(3,"mat-tab",Ie),o.Sc(4,Re,2,1,"ng-template",Ue),o.ec(5,"app-my-files",Je),o.kc("onNumberChange",(function(e){return o.Fc(t),o.pc().owned=e})),o.cc(),o.cc(),o.ec(6,"mat-tab",De),o.Sc(7,je,2,1,"ng-template",Ue),o.ec(8,"app-my-files",Je),o.kc("onNumberChange",(function(e){return o.Fc(t),o.pc().shared=e})),o.cc(),o.cc(),o.cc(),o.cc()}if(2&e){var c=n.ngIf,i=o.pc();o.Jc(2),o.vc("ngIf",i.authService.checkAuthorization(c,i.Roles.ROLE_UPLOAD_FILES)),o.Jc(5),o.vc("type","owned"),o.Jc(8),o.vc("type","shared")}}var Ae=function(){function e(e){this.authService=e,this.owned=0,this.shared=0,this.Roles=s.a}return e.prototype.ngOnInit=function(){},e.prototype.uploadComplete=function(e){this.children.forEach((function(n){return n.loadData(e)}))},e.ngComponentDef=o.Rb({type:e,selectors:[["app-file-list"]],factory:function(n){return new(n||e)(o.Xb(p.a))},viewQuery:function(e,n){var t;1&e&&o.Zc(_,!0),2&e&&o.Cc(t=o.mc())&&(n.children=t)},consts:3,vars:3,template:function(e,n){1&e&&(o.ec(0,"mat-card"),o.Sc(1,Be,9,3,"div",Pe),o.qc(2,"async"),o.cc()),2&e&&(o.Jc(1),o.vc("ngIf",o.rc(2,1,n.authService.user$)))},directives:[k.a,c.t,O.c,O.a,O.d,_,O.b,Me,M.a],pipes:[c.b],styles:[".container[_ngcontent-%COMP%]{margin:0 auto;width:1024px}@media only screen and (max-width:1023px){.container[_ngcontent-%COMP%]{width:100%}}"]}),e}(),Ee=t("DUip"),Ze=[{path:"",children:[{path:"",pathMatch:"full",component:Ae}]}],Le=function(){function e(){}return e.ngModuleDef=o.Vb({type:e}),e.ngInjectorDef=o.Ub({factory:function(n){return new(n||e)},imports:[[Ee.l.forChild(Ze)],Ee.l]}),e}();Ee.l.forChild(Ze),t.d(n,"FilesModule",(function(){return Xe}));var Xe=function(){function e(){}return e.ngModuleDef=o.Vb({type:e}),e.ngInjectorDef=o.Ub({factory:function(n){return new(n||e)},imports:[[a.a,l.a,r.a,Le,c.c,i.l,i.C]]}),e}()}}]);