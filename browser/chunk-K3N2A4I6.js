import{A as n,B as o,Ba as h,C as x,Ca as T,D as M,Da as k,E as S,Ea as R,Fa as N,G as g,Ga as O,Ha as P,I as b,Ia as A,J as v,Ja as F,K as D,Ka as H,M as a,N as w,Sa as j,Ta as I,Ua as Q,Va as z,Wa as $,Xa as q,Ya as B,Za as L,_a as V,aa as E,eb as Y,g as f,j as m,k as u,ka as y,t as p,w as C,y as l}from"./chunk-DQTREYVQ.js";function X(t,d){t&1&&(n(0,"th",22),a(1,"Sr No."),o())}function Z(t,d){if(t&1&&(n(0,"td",23),a(1),o()),t&2){let i=d.$implicit;p(),w(i.SrNo)}}function tt(t,d){t&1&&(n(0,"th",22),a(1,"State Name"),o())}function et(t,d){if(t&1&&(n(0,"td",23),a(1),o()),t&2){let i=d.$implicit;p(),w(i.Statename)}}function nt(t,d){t&1&&x(0,"tr",24)}function ot(t,d){t&1&&x(0,"tr",25)}var _=[{SrNo:1,Statename:"Maharashtra"},{SrNo:2,Statename:"Hydrabad"}],G=(()=>{class t{stateName="";displayedColumns=["SrNo","Statename"];dataSource=[..._];table;addData(){let i=Math.floor(Math.random()*_.length);this.dataSource.push(_[i]),this.table.renderRows()}removeData(){this.dataSource.pop(),this.table.renderRows()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-state"]],viewQuery:function(e,r){if(e&1&&b(h,5),e&2){let s;v(s=D())&&(r.table=s.first)}},decls:35,vars:4,consts:[[1,"row"],[1,"col-md-12"],["appearance","outlined",1,"example-card"],["appearance","outlined",1,"center-card"],[1,"row","justify-content-center","text-center"],[1,"form-container"],[1,"mat-label-custom"],[1,"full-width"],["matInput",""],[1,"demo-button-container","mt-4"],["mat-raised-button","",1,"demo-button",3,"click"],["mat-raised-button","",1,"demo-button",3,"click","disabled"],["mat-table","",1,"mat-elevation-z8","demo-table",3,"dataSource"],["matColumnDef","SrNo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Statename"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"row","justify-content-center"],[1,"example-card-footer"],["aria-label","Actions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,r){e&1&&(n(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card",3)(4,"div",4)(5,"mat-card-header")(6,"div",5)(7,"label",6),a(8,"State:"),o(),n(9,"mat-form-field",7),x(10,"input",8),o()()()()(),n(11,"mat-card-content")(12,"div",9)(13,"button",10),g("click",function(){return r.addData()}),a(14," Add State "),o(),n(15,"button",11),g("click",function(){return r.removeData()}),a(16," Show "),o()(),n(17,"table",12),M(18,13),C(19,X,2,0,"th",14)(20,Z,2,1,"td",15),S(),M(21,16),C(22,tt,2,0,"th",14)(23,et,2,1,"td",15),S(),C(24,nt,1,0,"tr",17)(25,ot,1,0,"tr",18),o()(),n(26,"div",19)(27,"mat-card-footer",20)(28,"mat-chip-set",21)(29,"mat-chip"),a(30,"Delete"),o(),n(31,"mat-chip"),a(32,"Details"),o(),n(33,"mat-chip"),a(34,"Close"),o()()()()()()()),e&2&&(p(15),l("disabled",!r.dataSource.length),p(2),l("dataSource",r.dataSource),p(7),l("matHeaderRowDef",r.displayedColumns),p(),l("matRowDefColumns",r.displayedColumns))},dependencies:[j,I,Q,h,k,P,R,T,A,N,O,F,H,z,$,B,q,L,V],styles:[".example-card[_ngcontent-%COMP%]{max-width:100%;padding:16px;border-radius:12px;box-shadow:0 4px 8px #0003;background-color:#fff;transition:all .3s ease-in-out}.example-card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 6px 12px #0000004d}.center-card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:3px;height:auto;min-height:80px;max-width:100%}.form-container[_ngcontent-%COMP%]{width:100%;text-align:center}.full-width[_ngcontent-%COMP%]{width:100%;max-width:600px}mat-label[_ngcontent-%COMP%]{font-size:16px;font-weight:500;margin-bottom:4px}.demo-table[_ngcontent-%COMP%]{width:100%}.demo-button-container[_ngcontent-%COMP%]{padding-bottom:16px;text-align:center}.demo-button[_ngcontent-%COMP%] + .demo-button[_ngcontent-%COMP%]{margin-left:8px}.example-card-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:8px;flex-wrap:wrap;padding:12px}mat-chip[_ngcontent-%COMP%]{background:#96a4b4!important;color:#fff!important;font-weight:700;border-radius:16px;padding:6px 12px}mat-chip[_ngcontent-%COMP%]:hover{background:#0056b3!important;cursor:pointer}"],changeDetection:0})}return t})();var J=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-district"]],decls:2,vars:0,template:function(e,r){e&1&&(n(0,"p"),a(1,"district works!"),o())}})}return t})();var K=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-taluka"]],decls:2,vars:0,template:function(e,r){e&1&&(n(0,"p"),a(1,"taluka works!"),o())}})}return t})();var U=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-city"]],decls:2,vars:0,template:function(e,r){e&1&&(n(0,"p"),a(1,"city works!"),o())}})}return t})();var at=[{path:"state",component:G},{path:"district",component:J},{path:"taluka",component:K},{path:"city",component:U}],W=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=u({type:t});static \u0275inj=f({imports:[y.forChild(at),y]})}return t})();var Ht=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=u({type:t});static \u0275inj=f({imports:[E,W,Y]})}return t})();export{Ht as AddressModule};
