(this.webpackJsonpessay_writing=this.webpackJsonpessay_writing||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"topic":["Independence Day","Ai is a threat or benefit?","Elon musk Vs jeff bezos","Social media has made it easier to misuse one\'s right to freedom of expression.","Violent video games affect children negatively.","Success comes to those who take risks.","People today are more materialistic and less satisfied as compared to previous generations.","Do you think progress is always good? Cite examples to support your view.","At least one form of physical training should be mandatory across education institutes.","Social media has made us less social.","The winner stands alone.","Do ethics or moral principles change with time? Cite examples to support your view.","First Campus Interview Experience","My Best Friend","Are we too dependent on Computers","Digitization and its benefits","My last vacation with Parents","Education \u2013 Importance in the development of the country","Your Favorite Sportsperson","Reservation in India","Effect of Mobile Phones on Teenagers","My Dream job","Is Climate change real?","Write an essay on corporate hospitals vs medical ethics","Write an essay on \u2018Learning vs Understanding\u2019.","Spending habits drifting away financial security","Child counseling place a vital role in student or children.","What are the effects of video games on teenagers these days","Give your views on the necessity of daily exercise and should it made compulsory in the Indian education system?","What do you think about social media websites like Facebook, Twitter, etc and their effects in making us less social","Success comes to those who take risks.","Should laptop replace textbooks in schools","Impact of social networking & social networking sites","How technology has connected people","Views on manual or automated work through software","Your view on \u2013 we are depending too much on loans","Education needs to be practical","Spirituality in the corporate world","A person\'s Education achievement depends upon family, friends, and society. give your views for or against this topic","Are citizens of India uses their voting power adequately."]}')},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),a=n.n(i),o=n(5),c=n.n(o),r=(n(11),n(12),n(13),n(2));var l=function(e){return Object(s.jsxs)("div",{children:[0===e.time.h?"":Object(s.jsx)("span",{children:e.time.h>=10?e.time.h:"0"+e.time.h}),"\xa0\xa0",Object(s.jsx)("span",{children:e.time.m>=10?e.time.m:"0"+e.time.m}),"\xa0:\xa0",Object(s.jsx)("span",{children:e.time.s>=10?e.time.s:"0"+e.time.s}),"\xa0:\xa0",Object(s.jsx)("span",{children:e.time.ms>=10?e.time.ms:"0"+e.time.ms})]})};var d=function(e){return Object(s.jsxs)("div",{children:[0===e.status?Object(s.jsx)("button",{className:"stopwatch-btn btn btn-outline-info",onClick:e.start,children:"Start"}):"",1===e.status?Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"stopwatch-btn btn btn-outline-danger",onClick:e.stop,children:"Stop"}),Object(s.jsx)("button",{className:"stopwatch-btn btn btn-outline-warning",onClick:e.reset,children:"Reset"})]}):"",2===e.status?Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"stopwatch-btn btn btn-outline-info",onClick:e.resume,children:"Resume"}),Object(s.jsx)("button",{className:"stopwatch-btn btn btn-outline-warning",onClick:e.reset,children:"Reset"})]}):""]})};n(14);var u=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)({ms:0,s:0,m:0,h:0}),c=Object(r.a)(o,2),u=c[0],h=c[1],m=Object(i.useState)(),b=Object(r.a)(m,2),j=b[0],p=b[1],f=Object(i.useState)(0),v=Object(r.a)(f,2),g=v[0],x=v[1],O=function(){N(),x(1),p(setInterval(N,10))},w=u.ms,y=u.s,k=u.m,C=u.h,N=function(){return 60===k&&(C++,k=0),60===y&&(k++,y=0),100===w&&(y++,w=0),w++,h({ms:w,s:y,m:k,h:C})},S=function(){var e=!1;return function(){e||(e=!0,1===n&&O())}}();return Object(s.jsxs)("div",{className:"text_time",children:[Object(s.jsxs)("div",{className:"text_area",children:[Object(s.jsx)("textarea",{onChange:function(e){S(),function(e){var t=e.target.value.split(" ").filter((function(e){return""!==e}));a(t.length)}(e)},class:"form-control",id:"exampleFormControlTextarea1 myinput",rows:"15"}),Object(s.jsx)("p",{children:n}),Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar bg-".concat(function(){var e="";return n<=25&&(e="warning"),n>25&&n<=50&&(e="info"),n>50&&n<=75&&(e="primary"),n>75&&n<=100&&(e="success"),e}()),"aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(n,"%")}})})]}),Object(s.jsx)("div",{className:"stop_watch",children:Object(s.jsx)("div",{className:"main-section",children:Object(s.jsx)("div",{className:"clock-holder",children:Object(s.jsxs)("div",{className:"stopwatch",children:[Object(s.jsx)(l,{time:u}),Object(s.jsx)(d,{status:g,resume:function(){return O()},reset:function(){clearInterval(j),x(0),h({ms:0,s:0,m:0,h:0})},stop:function(){clearInterval(j),x(2)},start:O})]})})})})]})},h=(n(15),n(4));function m(){var e,t=h.topic[(e=h.topic.length,Math.floor(Math.random()*e))];document.getElementById("change").innerHTML=t}var b=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto",children:[Object(s.jsx)("button",{onClick:m,className:"btn btn-warning",children:"Choose Random Topic"}),Object(s.jsx)("h1",{id:"change",children:"_________"})]})})};var j=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Essay Writing"}),Object(s.jsx)(b,{}),Object(s.jsx)(u,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),a(e),o(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),p()}],[[16,1,2]]]);
//# sourceMappingURL=main.13fd57e4.chunk.js.map