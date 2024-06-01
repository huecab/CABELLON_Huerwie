"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5825],{5825:(_,p,o)=>{o.r(p),o.d(p,{UpdatePageModule:()=>C});var h=o(177),d=o(4341),a=o(1075),g=o(9858),m=o(467),c=o(7310),e=o(4438),f=o(355);function M(s,r){if(1&s&&(e.j41(0,"ion-select-option",16),e.EFF(1),e.k0s()),2&s){const l=r.$implicit;e.Y8G("value",l),e.R7$(),e.JRh(l)}}const P=[{path:"",component:(()=>{var s;class r{constructor(i,t,u){this.route=i,this.auth=t,this.router=u,this.users=new c.K,this.genres=["Pop","Rock","Hip-hop","R&B","Country","Electronic","Jazz","Blues","Reggae","Classical","Alternative","Indie","Metal","Punk","Soul"]}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.synchUpdate(this.auth.newUserList)}updateUser(){var i=this;return(0,m.A)(function*(){i.validation()&&(i.users.id&&(i.auth.updateUser(i.users),i.auth.presentAlert("Success","Song updated successfully!")),i.users=new c.K,i.router.navigate(["home"]))})()}home(){this.router.navigate(["home"])}validation(){return this.users.title?this.users.artist?this.users.streams?this.users.releaseDate?this.users.isExplicit?!!this.users.genres||(this.auth.presentToast("Please fill in the Genre.",3e3),!1):(this.auth.presentToast("Please fill in the Explicit.",3e3),!1):(this.auth.presentToast("Please fill in the Released Date.",3e3),!1):(this.auth.presentToast("Please fill in the Stream Count.",3e3),!1):(this.auth.presentToast("Please fill in the Artist.",3e3),!1):(this.auth.presentToast("Please fill in the Title.",3e3),!1)}synchUpdate(i){i.forEach(t=>{this.id==t.id&&(this.users.id=t.id,this.users.title=t.title,this.users.artist=t.artist,this.users.streams=t.streams,this.users.releaseDate=t.releaseDate,this.users.genres=t.genres,this.users.isExplicit=t.isExplicit)})}}return(s=r).\u0275fac=function(i){return new(i||s)(e.rXU(g.nX),e.rXU(f.k),e.rXU(g.Ix))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-update"]],decls:39,vars:9,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"container"],["position","floating"],["type","text","required","",3,"ngModelChange","ngModel"],["type","number","required","",3,"ngModelChange","ngModel"],["type","date",3,"ngModelChange","ngModel"],["label","Explicit","interface","popover","placeholder","Select",3,"ngModelChange","ngModel"],["value","true"],["value","false"],["label","Genre","multiple","true",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"nav"],[3,"click"],["name","home-sharp"],[3,"value"]],template:function(i,t){1&i&&(e.j41(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title",2),e.EFF(4,"Update"),e.k0s()()(),e.j41(5,"ion-content",0)(6,"div",3)(7,"h1"),e.EFF(8,"Update a Song"),e.k0s(),e.j41(9,"ion-item")(10,"ion-label",4),e.EFF(11,"Title"),e.k0s(),e.j41(12,"ion-input",5),e.mxI("ngModelChange",function(n){return e.DH7(t.users.title,n)||(t.users.title=n),n}),e.k0s()(),e.j41(13,"ion-item")(14,"ion-label",4),e.EFF(15,"Artist"),e.k0s(),e.j41(16,"ion-input",5),e.mxI("ngModelChange",function(n){return e.DH7(t.users.artist,n)||(t.users.artist=n),n}),e.k0s()(),e.j41(17,"ion-item")(18,"ion-label",4),e.EFF(19,"Stream Count"),e.k0s(),e.j41(20,"ion-input",6),e.mxI("ngModelChange",function(n){return e.DH7(t.users.streams,n)||(t.users.streams=n),n}),e.k0s()(),e.j41(21,"ion-item")(22,"ion-label"),e.EFF(23,"Released Date"),e.k0s(),e.j41(24,"input",7),e.mxI("ngModelChange",function(n){return e.DH7(t.users.releaseDate,n)||(t.users.releaseDate=n),n}),e.k0s()(),e.j41(25,"ion-item")(26,"ion-select",8),e.mxI("ngModelChange",function(n){return e.DH7(t.users.isExplicit,n)||(t.users.isExplicit=n),n}),e.j41(27,"ion-select-option",9),e.EFF(28,"True"),e.k0s(),e.j41(29,"ion-select-option",10),e.EFF(30,"False"),e.k0s()()(),e.j41(31,"ion-item")(32,"ion-select",11),e.mxI("ngModelChange",function(n){return e.DH7(t.users.genres,n)||(t.users.genres=n),n}),e.DNE(33,M,2,2,"ion-select-option",12),e.k0s()(),e.j41(34,"div",13)(35,"ion-button",14),e.bIt("click",function(){return t.updateUser()}),e.EFF(36,"Update"),e.k0s(),e.j41(37,"ion-button",14),e.bIt("click",function(){return t.home()}),e.nrm(38,"ion-icon",15),e.k0s()()()()()),2&i&&(e.Y8G("fullscreen",!0),e.R7$(5),e.Y8G("fullscreen",!0),e.R7$(7),e.R50("ngModel",t.users.title),e.R7$(4),e.R50("ngModel",t.users.artist),e.R7$(4),e.R50("ngModel",t.users.streams),e.R7$(4),e.R50("ngModel",t.users.releaseDate),e.R7$(2),e.R50("ngModel",t.users.isExplicit),e.R7$(6),e.R50("ngModel",t.users.genres),e.R7$(),e.Y8G("ngForOf",t.genres))},dependencies:[h.Sq,d.me,d.BC,d.YS,d.vS,a.Jm,a.W9,a.eU,a.iq,a.$w,a.uz,a.he,a.Nm,a.Ip,a.BC,a.ai,a.su,a.Je,a.Gw],styles:[".container[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;text-align:center}ion-content[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;--background: #f0f0f0}h1[_ngcontent-%COMP%]{font-size:300%;margin-bottom:20px;color:#121212}ion-item[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;--inner-padding-end: 10px;--inner-padding-start: 10px;--background: #121212;margin-bottom:10px;width:50%}ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-bottom:2px solid #00d856;padding:5px 10px;font-size:1rem}ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{border-bottom:2px solid #00d856;padding:5px 10px;font-size:1rem}.nav[_ngcontent-%COMP%]{display:flex;justify-content:center}.button[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;--ion-color-primary: #00d856}"]}),r})()}];let U=(()=>{var s;class r{}return(s=r).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[g.iI.forChild(P),g.iI]}),r})(),C=(()=>{var s;class r{}return(s=r).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[h.MD,d.YN,a.bv,U]}),r})()}}]);