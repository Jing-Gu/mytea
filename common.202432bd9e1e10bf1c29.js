"use strict";(self.webpackChunkteaguru=self.webpackChunkteaguru||[]).push([[8592],{6633:(p,m,u)=>{u.d(m,{c:()=>o});var d=u(3150),f=u(2954),a=u(7279);const o=(c,s)=>{let e,t;const n=(r,_,h)=>{if("undefined"==typeof document)return;const g=document.elementFromPoint(r,_);g&&s(g)?g!==e&&(l(),i(g,h)):l()},i=(r,_)=>{e=r,t||(t=e);const h=e;(0,d.c)(()=>h.classList.add("ion-activated")),_()},l=(r=!1)=>{if(!e)return;const _=e;(0,d.c)(()=>_.classList.remove("ion-activated")),r&&t!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>n(r.currentX,r.currentY,f.a),onMove:r=>n(r.currentX,r.currentY,f.b),onEnd:()=>{l(!0),(0,f.h)(),t=void 0}})}},7330:(p,m,u)=>{u.d(m,{a:()=>a,d:()=>o});var d=u(8239),f=u(2377);const a=function(){var c=(0,d.Z)(function*(s,e,t,n,i){if(s)return s.attachViewToDom(e,t,i,n);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const l="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t;return n&&n.forEach(r=>l.classList.add(r)),i&&Object.assign(l,i),e.appendChild(l),yield new Promise(r=>(0,f.c)(l,r)),l});return function(e,t,n,i,l){return c.apply(this,arguments)}}(),o=(c,s)=>{if(s){if(c)return c.removeViewFromDom(s.parentElement,s);s.remove()}return Promise.resolve()}},2954:(p,m,u)=>{u.d(m,{a:()=>a,b:()=>o,c:()=>f,d:()=>s,h:()=>c});const d={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},f=()=>{d.selection()},a=()=>{d.selectionStart()},o=()=>{d.selectionChanged()},c=()=>{d.selectionEnd()},s=e=>{d.impact(e)}},6575:(p,m,u)=>{u.d(m,{s:()=>d});const d=t=>{try{if(t instanceof class{constructor(n){this.value=n}})return t.value;if(!o()||"string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),i=document.createElement("div");n.appendChild(i),i.innerHTML=t,s.forEach(h=>{const g=n.querySelectorAll(h);for(let y=g.length-1;y>=0;y--){const E=g[y];E.parentNode?E.parentNode.removeChild(E):n.removeChild(E);const v=a(E);for(let C=0;C<v.length;C++)f(v[C])}});const l=a(n);for(let h=0;h<l.length;h++)f(l[h]);const r=document.createElement("div");r.appendChild(n);const _=r.querySelector("div");return null!==_?_.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},f=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let i=t.attributes.length-1;i>=0;i--){const l=t.attributes.item(i),r=l.name;if(!c.includes(r.toLowerCase())){t.removeAttribute(r);continue}const _=l.value;null!=_&&_.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const n=a(t);for(let i=0;i<n.length;i++)f(n[i])},a=t=>null!=t.children?t.children:t.childNodes,o=()=>{const t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},c=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},408:(p,m,u)=>{u.d(m,{S:()=>f});const f={bubbles:{dur:1e3,circles:9,fn:(a,o,c)=>{const s=a*o/c-a+"ms",e=2*Math.PI*o/c;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(a,o,c)=>{const s=o/c,e=a*s-a+"ms",t=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,o)=>({r:6,style:{left:9-9*o+"px","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:12,fn:(a,o,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/c-a+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(a,o,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":a*o/c-a+"ms"}})}}},1269:(p,m,u)=>{u.d(m,{c:()=>a,g:()=>c,h:()=>f,o:()=>e});var d=u(8239);const f=(t,n)=>null!==n.closest(t),a=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},n):n,c=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(t).forEach(i=>n[i]=!0),n},s=/^[a-z][a-z0-9+\-.]*:/,e=function(){var t=(0,d.Z)(function*(n,i,l,r){if(null!=n&&"#"!==n[0]&&!s.test(n)){const _=document.querySelector("ion-router");if(_)return null!=i&&i.preventDefault(),_.push(n,l,r)}return!1});return function(i,l,r,_){return t.apply(this,arguments)}}()}}]);