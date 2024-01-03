import{g as N,r as _,o as i,c as r,a as e,f as y,b as T,w as k,t as u,F as w,h as x,i as c,j as g,d as C,p as I,e as Q}from"./index-ee5b6e2e.js";import j from"./TrueFalseGame-0bf1b18d.js";import P from"./SelectGame-b35abfb1.js";import z from"./NumberInputGame-20406e4f.js";import{_ as D}from"./logo-63b3c80a.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import"./VirtualNumPad-06011cca.js";function S(s,a=""){const b=new Date,v=String(b.getMonth()+1).padStart(2,"0"),t=String(b.getDate()).padStart(2,"0"),l=v+t;var m=(d=>d.map(G=>G.join(",")).join(`
`))(s);m="\uFEFF"+m;var p=new Blob([m],{type:"text/csv;charset=utf-8;"});const h=URL.createObjectURL(p),n=document.createElement("a");n.href=h,n.download=`${a}_${l}.csv`,document.body.appendChild(n),n.click()}const q="/ptwa/assets/previous-3dde6022.png",B="/ptwa/assets/next-6472dbad.png",F="/ptwa/assets/submit-a28a6feb.png",L="/ptwa/assets/start-975a6cab.png",M="/ptwa/assets/restart-71a84adc.png",A="/ptwa/assets/hint-246d1e79.png",E="/ptwa/assets/download-ee878fd7.png",R="/ptwa/assets/info-3a0296c2.png",U="/ptwa/assets/calculator-0f73568e.png",H="/ptwa/assets/record-055dff9a.png",J="/ptwa/assets/elephant-ed934cfa.gif";const O={data(){return{GameType:"",GameStatus:"NotStart",download_data:[],GameID:"",Subject:"",Grade:"",Name:"",Nowlevel:1,Subjects:{Math:"數學",Chinese:"國語",Technology:"多元科技"},GameConfig:{},time:0,intervalId:null}},created(){this.GameID=this.$route.params.id,this.Subject=this.$route.params.Subject,this.Grade=this.$route.params.Grade,this.Name=this.$route.params.GameName,(async()=>{const s=await N("/Grade"+this.Grade+"/"+this.GameID+".json");this.GameConfig=s.data,this.GameType=this.GameConfig.GameType})()},methods:{dataPreprocess(){for(var s in this.GameConfig.Questions);console.log(levelname),S(levelname)},StartGame(){this.GameStatus="Progressing",this.startTimer(),this.dataPreprocess()},tocsv(s){console.log(s),S(s)},reloadPage(){location.reload()},changelevel(s){this.Nowlevel=s,this.pauseTimer(),this.resetTimer()},NextQuestion(){this.Nowlevel<this.GameConfig.TotalLevel&&this.Nowlevel++,this.pauseTimer(),this.resetTimer()},PreviousQuestion(){this.Nowlevel>1&&this.Nowlevel--,this.pauseTimer(),this.resetTimer()},startTimer(){console.log("timer is started"),!this.intervalId&&(this.intervalId=setInterval(()=>{this.time++},1e3))},pauseTimer(){clearInterval(this.intervalId),this.intervalId=null},resetTimer(){this.pauseTimer(),this.time=0}},components:{TrueFalseGame:j,SelectGame:P,NumberInputGame:z}},o=s=>(I("data-v-fe842b3b"),s=s(),Q(),s),K={class:"container navbar navbar-expand-lg navbar-light sticky-top justify-content-center",style:{"justify-content":"flex-start !important"}},W=o(()=>e("a",{class:"navbar-brand mt-2 mb-2",href:"#",alt:"Home"},[e("img",{src:D,class:"img-fluid"})],-1)),X={class:"container sticky-top",style:{"--bs-breadcrumb-divider":"'>'"}},Y={class:"breadcrumb mb-0"},Z=o(()=>e("li",{class:"breadcrumb-item"},[e("i",{class:"bi bi-house"}),e("a",{href:"#"}," 主頁")],-1)),$={class:"breadcrumb-item","aria-current":"page"},ee=o(()=>e("i",{class:"bi bi-book-half"},null,-1)),te={class:"breadcrumb-item active","aria-current":"page"},se=o(()=>e("i",{class:"bi bi-pen"},null,-1)),oe={class:"container-fluid"},ae={class:"row mt-3 justify-content-center"},ie={class:"col-8 GameArea"},ne={class:"row levelbutton"},re={class:"d-grid gap-2 d-md-flex justify-content-center mb-3 levebar",style:{width:"100"}},le=o(()=>e("button",{type:"button",class:"btn btn-primary",disabled:""},"關卡",-1)),ce=["onClick"],me={key:0,type:"button",class:"btn btn-primary",disabled:""},de={class:"row Game_Component"},ue={class:"col-3 card SideBar"},_e=o(()=>e("p",{class:"card-title h4 mt-3"},"功能區",-1)),be={class:"card-body",style:{"border-style":"none"}},pe={class:"list-group mt-1"},he=o(()=>e("img",{src:q,class:"img-hover-zoom"},null,-1)),ge=[he],ve=o(()=>e("img",{src:B,class:"img-hover-zoom"},null,-1)),fe=[ve],Ge={key:0,class:"list-group-item"},ye=o(()=>e("img",{src:F,class:"img-hover-zoom"},null,-1)),we=[ye],Se=o(()=>e("img",{src:L,class:"img-hover-zoom"},null,-1)),Ce=[Se],Ne=o(()=>e("img",{src:M,class:"img-hover-zoom"},null,-1)),Te=[Ne],ke={key:3,class:"list-group-item"},xe=o(()=>e("img",{src:A,class:"img-hover-zoom"},null,-1)),Ie=[xe],Qe=o(()=>e("img",{src:E,class:"img-hover-zoom"},null,-1)),je=[Qe],Pe=C('<a class="list-group-item" data-bs-toggle="modal" data-bs-target="#exampleModal" data-v-fe842b3b><img src="'+R+'" class="img-hover-zoom" data-v-fe842b3b></a><a class="list-group-item" data-v-fe842b3b><img src="'+U+'" class="img-hover-zoom" data-v-fe842b3b></a><a class="list-group-item" data-v-fe842b3b><img src="'+H+'" class="img-hover-zoom" data-v-fe842b3b></a>',3),ze=C('<div class="fade modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-v-fe842b3b><div class="modal-dialog modal-xl" data-v-fe842b3b><div class="modal-content" data-v-fe842b3b><div class="modal-header" data-v-fe842b3b><h1 class="modal-title fs-5" id="exampleModalLabel" data-v-fe842b3b>不會玩嗎?請看教學影片:</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-fe842b3b></button></div><div class="modal-body justify-content-center" data-v-fe842b3b><img src="'+J+'" data-v-fe842b3b></div><div class="modal-footer" data-v-fe842b3b><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-fe842b3b>我知道了!</button></div></div></div></div>',1);function De(s,a,b,v,t,l){const f=_("router-link"),m=_("TrueFalseGame"),p=_("SelectGame"),h=_("NumberInputGame");return i(),r(w,null,[e("header",null,[e("nav",K,[W,e("div",X,[e("ol",Y,[Z,e("li",$,[ee,y(),T(f,{to:{name:"GameSelect",params:{id:this.Grade}}},{default:k(()=>[y(u(this.Grade)+" 年級 "+u(t.Subjects[t.Subject]),1)]),_:1},8,["to"])]),e("li",te,[se,e("a",null,u(this.Name),1)])])])])]),e("section",null,[e("div",oe,[e("div",ae,[e("div",ie,[e("div",ne,[e("div",re,[le,(i(!0),r(w,null,x(t.GameConfig.Questions,(n,d)=>(i(),r("div",{key:d,class:"grid-item"},[e("button",{type:"button",class:"btn btn-primary w-auto",onClick:G=>l.changelevel(d+1)},u(d+1),9,ce)]))),128)),t.GameStatus=="Progressing"?(i(),r("button",me,"時間 : "+u(t.time),1)):c("",!0)])]),e("div",de,[t.GameConfig.GameType=="TrueFalse"?(i(),g(m,{key:0,question:t.GameConfig.Questions[t.Nowlevel-1].Question,answer:t.GameConfig.Questions[t.Nowlevel-1].Answer,imgsrc:t.GameConfig.Questions[t.Nowlevel-1].img},null,8,["question","answer","imgsrc"])):c("",!0),t.GameConfig.GameType=="SelectGame"?(i(),g(p,{key:1,question:t.GameConfig.Questions[1].Question,imgsrc:t.GameConfig.Questions[1].img,answer:t.GameConfig.Questions[1].Answer},null,8,["question","imgsrc","answer"])):c("",!0),t.GameConfig.GameType=="NumberInputGame"?(i(),g(h,{key:2,question:t.GameConfig.Questions[t.Nowlevel-1].Question,answer:t.GameConfig.Questions[t.Nowlevel-1].Answer,imgsrc:t.GameConfig.Questions[t.Nowlevel-1].img},null,8,["question","answer","imgsrc"])):c("",!0)])]),e("div",ue,[_e,e("div",be,[e("div",pe,[e("a",{class:"list-group-item",onClick:a[0]||(a[0]=n=>l.PreviousQuestion())},ge),e("a",{class:"list-group-item",onClick:a[1]||(a[1]=n=>l.NextQuestion())},fe),t.GameStatus=="Progressing"?(i(),r("a",Ge,we)):c("",!0),t.GameStatus=="NotStart"?(i(),r("a",{key:1,class:"list-group-item",onClick:a[2]||(a[2]=n=>l.StartGame())},Ce)):c("",!0),(t.GameStatus=="Progressing",i(),r("a",{key:2,class:"list-group-item",onClick:a[3]||(a[3]=n=>l.reloadPage())},Te)),t.GameStatus=="Progressing"?(i(),r("a",ke,Ie)):c("",!0),t.GameStatus=="Done"?(i(),r("a",{key:4,class:"list-group-item",onClick:a[4]||(a[4]=n=>l.tocsv(this.download_data))},je)):c("",!0),Pe])])]),ze])])])],64)}const Ee=V(O,[["render",De],["__scopeId","data-v-fe842b3b"]]);export{Ee as default};
