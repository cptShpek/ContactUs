!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l={isEmpty(){let e=document.body.getElementsByTagName("input");for(let t of e)if(!t.value)return alert(`${t.id} is empty!`),!1;return!!l.nameField()},nameField:()=>"string"!=typeof document.getElementById("name").value?alert('Only letters at "First Name" field!'):!!l.lastNameField(),lastNameField:()=>"string"!=typeof document.getElementById("nameSecond").value?alert('Only letters at "Last Name" field!'):!!l.emailField(),emailField:()=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)?!!l.numberField():(alert("You have entered an invalid email address!"),!1),numberField:()=>"number"!=typeof+document.getElementById("number").value?(alert('Only letters at "Number" field!'),!1):!!l.mesageField(),mesageField:()=>"string"==typeof document.getElementById("textarea").value||(alert('Only letters at "Your Message" field!'),!1)},r={startValidating(e){if(e.preventDefault(),!l.isEmpty())return alert("Information is incorrect!");var t=document.getElementsByTagName("input");for(let e of t)console.log(e.value);return alert("Data received")},listCreatingMethod(e,t){for(let n of t){let t=document.createTextNode(`${n.id} : ${n.value}`),l=document.createElement("br");e.append(t),e.append(l)}return e},createList(e){e.preventDefault();var t=document.getElementsByTagName("input"),n=document.createElement("div");r.listCreatingMethod(n,t),document.getElementById("tablesArea").append(n),r.showClearButton(e)},createTableMethode(e){var t=document.createElement("table"),n="<tbody>";if(e.user||e.pass)return n+=`<tr><td>LOG:  ${e.user} </td><td>PASS:  ${e.pass}</td></tr>`,t.innerHTML=n,t.style.border="4px double black",t;for(let t of e)n+=`<tr><td>${t.id} </td><td> ${t.value}</td></tr>`;return t.innerHTML=n,t.style.border="4px double black",t},createTable(e){e.preventDefault();var t=document.getElementsByTagName("input"),n=r.createTableMethode(t);document.getElementById("tablesArea").append(n),r.showClearButton(e)},showClearButton(e){e.preventDefault();let t=document.getElementById("clear");"none"!=t.style.display||(t.style.display="inline")},HideClearButton(e){e.preventDefault();let t=document.getElementById("clear");"inline"!=t.style.display||(t.style.display="none")},clear(e){e.preventDefault(),document.getElementById("tablesArea").innerHTML="",r.HideClearButton(e)},switch(e){e.preventDefault();let t=document.getElementById("wrapperContactUs"),n=document.getElementById("loginPageId");if(r.clear(e),"none"==t.style.display){document.getElementById("tablesArea").remove();let e=document.createElement("div");e.id="tablesArea",n.style.display="none",t.style.display="inline",t.append(e)}else{document.getElementById("tablesArea").remove();let e=document.createElement("div");e.id="tablesArea",n.style.display="inline",t.style.display="none",t.append(e)}},init(){document.getElementById("btn").addEventListener("click",r.startValidating),document.getElementById("list").addEventListener("click",r.createList),document.getElementById("table").addEventListener("click",r.createTable),document.getElementById("clear").addEventListener("click",r.clear);let e=document.getElementsByClassName("switch");for(let t of e)t.addEventListener("click",r.switch)}};const a=new Map;var d={generator(){let e={};return e.user=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),e.pass=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),a.set(e.user,e.pass),e},logOutput(e){e.preventDefault();let t=d.generator(),n=r.createTableMethode(t);document.getElementById("tablesArea").append(n)},validating(e){e.preventDefault();let t=document.getElementById("userLog").value,n=document.getElementById("userPass").value;for(let e of a)if(e==`${t},${n}`)return alert("Login Success!"),r.clear(),void r.switch();return alert("Invalid Access Data")},init(){document.getElementById("generator").addEventListener("click",d.logOutput),document.getElementById("goIn").addEventListener("click",d.validating)}};r.init(),d.init();n(1)},function(e,t){}]);