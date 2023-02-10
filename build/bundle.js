var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t,n,s){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function c(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function l(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function $(){return m(" ")}function p(){return m("")}function d(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e,t,n,s){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let w;function b(e){w=e}function x(){const e=function(){if(!w)throw new Error("Function called outside component initialization");return w}();return(t,n,{cancelable:s=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=function(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,s,t),o}(t,n,{cancelable:s});return o.slice().forEach((t=>{t.call(e,r)})),!r.defaultPrevented}return!0}}const y=[],k=[],C=[],S=[],N=Promise.resolve();let _=!1;function D(e){C.push(e)}function T(e){S.push(e)}const M=new Set;let P=0;function E(){if(0!==P)return;const e=w;do{try{for(;P<y.length;){const e=y[P];P++,b(e),O(e.$$)}}catch(e){throw y.length=0,P=0,e}for(b(null),y.length=0,P=0;k.length;)k.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];M.has(t)||(M.add(t),t())}C.length=0}while(y.length);for(;S.length;)S.pop()();_=!1,M.clear(),b(e)}function O(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const q=new Set;let Q;function A(){Q={r:0,c:[],p:Q}}function L(){Q.r||s(Q.c),Q=Q.p}function I(e,t){e&&e.i&&(q.delete(e),e.i(t))}function G(e,t,n,s){if(e&&e.o){if(q.has(e))return;q.add(e),Q.c.push((()=>{q.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function R(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function H(e){e&&e.c()}function j(e,n,r,i){const{fragment:c,after_update:a}=e.$$;c&&c.m(n,r),i||D((()=>{const n=e.$$.on_mount.map(t).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...n):s(n),e.$$.on_mount=[]})),a.forEach(D)}function F(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(y.push(e),_||(_=!0,N.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(t,o,r,i,c,a,l,f=[-1]){const m=w;b(t);const $=t.$$={fragment:null,ctx:[],props:a,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(m?m.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||m.$$.root};l&&l($.root);let p=!1;if($.ctx=r?r(t,o.props||{},((e,n,...s)=>{const o=s.length?s[0]:n;return $.ctx&&c($.ctx[e],$.ctx[e]=o)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](o),p&&z(t,e)),n})):[],$.update(),p=!0,s($.before_update),$.fragment=!!i&&i($.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);$.fragment&&$.fragment.l(e),e.forEach(u)}else $.fragment&&$.fragment.c();o.intro&&I(t.$$.fragment),j(t,o.target,o.anchor,o.customElement),E()}b(m)}class B{$destroy(){F(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var J;function K(t){let n,s,o,r;return{c(){n=f("button"),s=m(t[0]),g(n,"class","svelte-19ga9zu")},m(e,i){a(e,n,i),c(n,s),o||(r=d(n,"click",t[1]),o=!0)},p(e,[t]){1&t&&h(s,e[0])},i:e,o:e,d(e){e&&u(n),o=!1,r()}}}function U(e,t,n){let{text:s}=t;const o=x();return e.$$set=e=>{"text"in e&&n(0,s=e.text)},[s,function(){o("click",{text:s})}]}!function(e){e[e.standard=0]="standard",e[e.timed=1]="timed",e[e.practice=2]="practice"}(J||(J={}));class V extends B{constructor(e){super(),Y(this,e,U,K,r,{text:0})}}function W(t){let n,o,r,i,l,m,p,h,v,w,b,x,y,k,C,S,N,_,D;return w=new V({props:{text:"Play"}}),w.$on("click",t[3]),y=new V({props:{text:"Timed"}}),y.$on("click",t[4]),S=new V({props:{text:"Practice"}}),S.$on("click",t[5]),{c(){n=f("div"),o=f("button"),o.textContent="🛈",r=$(),i=f("button"),i.textContent="📈",l=$(),m=f("h1"),m.textContent="numberSTAR",p=$(),h=f("ul"),v=f("li"),H(w.$$.fragment),b=$(),x=f("li"),H(y.$$.fragment),k=$(),C=f("li"),H(S.$$.fragment),g(n,"class","utility"),g(v,"class","svelte-6llhpa"),g(x,"class","svelte-6llhpa"),g(C,"class","svelte-6llhpa"),g(h,"class","svelte-6llhpa")},m(e,s){a(e,n,s),c(n,o),c(n,r),c(n,i),a(e,l,s),a(e,m,s),a(e,p,s),a(e,h,s),c(h,v),j(w,v,null),c(h,b),c(h,x),j(y,x,null),c(h,k),c(h,C),j(S,C,null),N=!0,_||(D=[d(o,"click",t[1]),d(i,"click",t[2])],_=!0)},p:e,i(e){N||(I(w.$$.fragment,e),I(y.$$.fragment,e),I(S.$$.fragment,e),N=!0)},o(e){G(w.$$.fragment,e),G(y.$$.fragment,e),G(S.$$.fragment,e),N=!1},d(e){e&&u(n),e&&u(l),e&&u(m),e&&u(p),e&&u(h),F(w),F(y),F(S),_=!1,s(D)}}}function X(e){const t=x();return[t,()=>t("help"),()=>t("stats"),()=>t("options",{gameType:J.standard}),()=>t("options",{gameType:J.timed}),()=>t("options",{gameType:J.practice})]}class Z extends B{constructor(e){super(),Y(this,e,X,W,r,{})}}function ee(t){let n,s,o;return{c(){n=f("button"),n.textContent="×",g(n,"class","svelte-1pkrx8")},m(e,r){a(e,n,r),s||(o=d(n,"click",t[1]),s=!0)},p:e,i:e,o:e,d(e){e&&u(n),s=!1,o()}}}function te(e){const t=x();return[t,()=>t("close")]}class ne extends B{constructor(e){super(),Y(this,e,te,ee,r,{})}}function se(t){let n,s,o,r,i,c,l,m,p,d,g,h;return n=new ne({}),n.$on("close",t[1]),{c(){H(n.$$.fragment),s=$(),o=f("h1"),o.textContent="How to play",r=$(),i=f("p"),i.textContent="Pick from one of the three available game modes: Standard, Timed and Practice.",c=$(),l=f("p"),l.textContent="Each mode presents a series of random questions and four possible answers. Select the correct answer before the time\r\n    runs out!",m=$(),p=f("p"),p.textContent="Both Standard and Timed allow you to select a difficulty level. Practice mode lets you choose the numbers and\r\n    operators you want to revise. This lets you practice your 7 times tables, for example.",d=$(),g=f("p"),g.textContent="Standard mode keeps going until you run out of lives. In timed and practice mode, answer as many questions as you\r\n    can within a minute."},m(e,t){j(n,e,t),a(e,s,t),a(e,o,t),a(e,r,t),a(e,i,t),a(e,c,t),a(e,l,t),a(e,m,t),a(e,p,t),a(e,d,t),a(e,g,t),h=!0},p:e,i(e){h||(I(n.$$.fragment,e),h=!0)},o(e){G(n.$$.fragment,e),h=!1},d(e){F(n,e),e&&u(s),e&&u(o),e&&u(r),e&&u(i),e&&u(c),e&&u(l),e&&u(m),e&&u(p),e&&u(d),e&&u(g)}}}function oe(e){const t=x();return[t,()=>t("close")]}class re extends B{constructor(e){super(),Y(this,e,oe,se,r,{})}}const ie=[];class ce{constructor(){this.gamesPlayed=0,this.maxStreak=0,this.currentStreak=0,this.stats=[]}}const ae=function(t,n=e){let s;const o=new Set;function i(e){if(r(t,e)&&(t=e,s)){const e=!ie.length;for(const e of o)e[1](),ie.push(e,t);if(e){for(let e=0;e<ie.length;e+=2)ie[e][0](ie[e+1]);ie.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(r,c=e){const a=[r,c];return o.add(a),1===o.size&&(s=n(i)||e),r(t),()=>{o.delete(a),0===o.size&&(s(),s=null)}}}}(JSON.parse(localStorage.getItem("numberStar_History")));function ue(e,t,n){const s=e.slice();return s[4]=t[n],s[6]=n,s}function le(t){let n,s,o=t[4]+"";return{c(){n=f("option"),s=m(o),n.__value=t[6],n.value=n.__value},m(e,t){a(e,n,t),c(n,s)},p:e,d(e){e&&u(n)}}}function fe(e){let t,n,s,o,r,i,p,d,v,w,b,x,y,k,C,S,N,_,D,T,M,P,E,O,q,Q,A=(e[0]?.gamesPlayed??0)+"",L=(e[0]?.maxStreak??0)+"",R=(e[0]?.currentStreak??0)+"";t=new ne({}),t.$on("close",e[3]);let z=e[2](),Y=[];for(let t=0;t<z.length;t+=1)Y[t]=le(ue(e,z,t));return{c(){H(t.$$.fragment),n=$(),s=f("h1"),s.textContent="Stats",o=$(),r=f("div"),i=f("div"),p=f("div"),d=m(A),v=$(),w=f("div"),w.textContent="Played",b=$(),x=f("div"),y=f("div"),k=m(L),C=$(),S=f("div"),S.textContent="Max Streak",N=$(),_=f("div"),D=f("div"),T=m(R),M=$(),P=f("div"),P.textContent="Current Streak",E=$(),O=f("div"),q=f("select");for(let e=0;e<Y.length;e+=1)Y[e].c();g(p,"class","value svelte-37oekf"),g(w,"class","text svelte-37oekf"),g(i,"class","stat svelte-37oekf"),g(y,"class","value svelte-37oekf"),g(S,"class","text svelte-37oekf"),g(x,"class","stat svelte-37oekf"),g(D,"class","value svelte-37oekf"),g(P,"class","text svelte-37oekf"),g(_,"class","stat svelte-37oekf"),g(r,"class","mainStats svelte-37oekf"),g(O,"class","chooser")},m(e,u){j(t,e,u),a(e,n,u),a(e,s,u),a(e,o,u),a(e,r,u),c(r,i),c(i,p),c(p,d),c(i,v),c(i,w),c(r,b),c(r,x),c(x,y),c(y,k),c(x,C),c(x,S),c(r,N),c(r,_),c(_,D),c(D,T),c(_,M),c(_,P),a(e,E,u),a(e,O,u),c(O,q);for(let e=0;e<Y.length;e+=1)Y[e].m(q,null);Q=!0},p(e,[t]){if((!Q||1&t)&&A!==(A=(e[0]?.gamesPlayed??0)+"")&&h(d,A),(!Q||1&t)&&L!==(L=(e[0]?.maxStreak??0)+"")&&h(k,L),(!Q||1&t)&&R!==(R=(e[0]?.currentStreak??0)+"")&&h(T,R),4&t){let n;for(z=e[2](),n=0;n<z.length;n+=1){const s=ue(e,z,n);Y[n]?Y[n].p(s,t):(Y[n]=le(s),Y[n].c(),Y[n].m(q,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=z.length}},i(e){Q||(I(t.$$.fragment,e),Q=!0)},o(e){G(t.$$.fragment,e),Q=!1},d(e){F(t,e),e&&u(n),e&&u(s),e&&u(o),e&&u(r),e&&u(E),e&&u(O),l(Y,e)}}}function me(e,t,n){let s;i(e,ae,(e=>n(0,s=e)));const o=x();return[s,o,function(){return Object.keys(J).filter((e=>!isNaN(Number(J[e]))))},()=>o("close")]}ae.subscribe((e=>localStorage.numberStar_History=JSON.stringify(e)));class $e extends B{constructor(e){super(),Y(this,e,me,fe,r,{})}}var pe;function de(t){let n,s,o,r,i,l,m,p,d,h,v,w,b,x,y;return i=new V({props:{text:"Easy"}}),i.$on("click",t[0]),p=new V({props:{text:"Medium"}}),p.$on("click",t[0]),v=new V({props:{text:"Hard"}}),v.$on("click",t[0]),x=new V({props:{text:"Insane"}}),x.$on("click",t[0]),{c(){n=f("h1"),n.textContent="Select Difficulty",s=$(),o=f("ul"),r=f("li"),H(i.$$.fragment),l=$(),m=f("li"),H(p.$$.fragment),d=$(),h=f("li"),H(v.$$.fragment),w=$(),b=f("li"),H(x.$$.fragment),g(n,"class","svelte-1qvfcl"),g(r,"class","svelte-1qvfcl"),g(m,"class","svelte-1qvfcl"),g(h,"class","svelte-1qvfcl"),g(b,"class","svelte-1qvfcl"),g(o,"class","svelte-1qvfcl")},m(e,t){a(e,n,t),a(e,s,t),a(e,o,t),c(o,r),j(i,r,null),c(o,l),c(o,m),j(p,m,null),c(o,d),c(o,h),j(v,h,null),c(o,w),c(o,b),j(x,b,null),y=!0},p:e,i(e){y||(I(i.$$.fragment,e),I(p.$$.fragment,e),I(v.$$.fragment,e),I(x.$$.fragment,e),y=!0)},o(e){G(i.$$.fragment,e),G(p.$$.fragment,e),G(v.$$.fragment,e),G(x.$$.fragment,e),y=!1},d(e){e&&u(n),e&&u(s),e&&u(o),F(i),F(p),F(v),F(x)}}}function ge(e,t,n){const s=x();let{game:o}=t;return e.$$set=e=>{"game"in e&&n(1,o=e.game)},[function(e){switch(e.detail.text){case"Easy":n(1,o.options.difficulty=pe.easy,o),n(1,o.options.numbers=[1,2,3],o),n(1,o.options.operators=["+"],o);break;case"Medium":n(1,o.options.difficulty=pe.medium,o),n(1,o.options.numbers=[1,2,3,4,5,6,7],o),n(1,o.options.operators=["+","-"],o);break;case"Hard":n(1,o.options.difficulty=pe.hard,o),n(1,o.options.numbers=[1,2,3,4,5,6,7,8,9,10,11,12],o),n(1,o.options.operators=["+","-","×"],o);break;case"Insane":n(1,o.options.difficulty=pe.insane,o),n(1,o.options.numbers=[3,4,5,6,7,8,9,11,12,13,14,15],o),n(1,o.options.operators=["+","-","×","÷"],o);break;default:n(1,o.options.difficulty=pe.medium,o)}s("difficulty")},o]}!function(e){e[e.easy=0]="easy",e[e.medium=1]="medium",e[e.hard=2]="hard",e[e.insane=3]="insane"}(pe||(pe={}));class he extends B{constructor(e){super(),Y(this,e,ge,de,r,{game:1})}}function ve(t){let n,o,r,i,l,$;return{c(){n=f("div"),o=f("span"),r=m(t[2]),g(o,"class","svelte-ktpdjl"),g(n,"style",i="width: "+t[1]+"; "+(t[0]?"background: "+t[3]+"; ":"")),g(n,"class","svelte-ktpdjl")},m(e,s){a(e,n,s),c(n,o),c(o,r),l||($=[d(n,"click",t[5]),d(n,"keyup",t[4])],l=!0)},p(e,[t]){4&t&&h(r,e[2]),11&t&&i!==(i="width: "+e[1]+"; "+(e[0]?"background: "+e[3]+"; ":""))&&g(n,"style",i)},i:e,o:e,d(e){e&&u(n),l=!1,s($)}}}function we(e,t,n){let{width:s="30%"}=t,{selected:o=!1}=t,{text:r=""}=t,{keyCode:i="0"}=t,{selectedColour:c="#71C4F4"}=t;const a=x();function u(){n(0,o=!o),a("select",{text:r,selected:o})}return e.$$set=e=>{"width"in e&&n(1,s=e.width),"selected"in e&&n(0,o=e.selected),"text"in e&&n(2,r=e.text),"keyCode"in e&&n(6,i=e.keyCode),"selectedColour"in e&&n(3,c=e.selectedColour)},[o,s,r,c,function(e){console.log("Key up"),console.log(e.keyCode),e.keyCode==i&&u()},u,i]}class be extends B{constructor(e){super(),Y(this,e,we,ve,r,{width:1,selected:0,text:2,keyCode:6,selectedColour:3})}}function xe(t){let n,s,o,r,i,l,m,p,d,h,v,w,b,x,y,k,C,S,N,_,D,T,M,P,E;return s=new be({props:{text:"1",keyCode:"49"}}),s.$on("select",t[0]),r=new be({props:{text:"2",keyCode:"50"}}),r.$on("select",t[0]),l=new be({props:{text:"3",keyCode:"51"}}),l.$on("select",t[0]),p=new be({props:{text:"4",keyCode:"52"}}),p.$on("select",t[0]),h=new be({props:{text:"5",keyCode:"53"}}),h.$on("select",t[0]),w=new be({props:{text:"6",keyCode:"54"}}),w.$on("select",t[0]),x=new be({props:{text:"7",keyCode:"55"}}),x.$on("select",t[0]),k=new be({props:{text:"8",keyCode:"56"}}),k.$on("select",t[0]),S=new be({props:{text:"9",keyCode:"57"}}),S.$on("select",t[0]),_=new be({props:{text:"10",keyCode:"65"}}),_.$on("select",t[0]),T=new be({props:{text:"11",keyCode:"66"}}),T.$on("select",t[0]),P=new be({props:{text:"12",keyCode:"67"}}),P.$on("select",t[0]),{c(){n=f("div"),H(s.$$.fragment),o=$(),H(r.$$.fragment),i=$(),H(l.$$.fragment),m=$(),H(p.$$.fragment),d=$(),H(h.$$.fragment),v=$(),H(w.$$.fragment),b=$(),H(x.$$.fragment),y=$(),H(k.$$.fragment),C=$(),H(S.$$.fragment),N=$(),H(_.$$.fragment),D=$(),H(T.$$.fragment),M=$(),H(P.$$.fragment),g(n,"class","container svelte-1m2wkw2")},m(e,t){a(e,n,t),j(s,n,null),c(n,o),j(r,n,null),c(n,i),j(l,n,null),c(n,m),j(p,n,null),c(n,d),j(h,n,null),c(n,v),j(w,n,null),c(n,b),j(x,n,null),c(n,y),j(k,n,null),c(n,C),j(S,n,null),c(n,N),j(_,n,null),c(n,D),j(T,n,null),c(n,M),j(P,n,null),E=!0},p:e,i(e){E||(I(s.$$.fragment,e),I(r.$$.fragment,e),I(l.$$.fragment,e),I(p.$$.fragment,e),I(h.$$.fragment,e),I(w.$$.fragment,e),I(x.$$.fragment,e),I(k.$$.fragment,e),I(S.$$.fragment,e),I(_.$$.fragment,e),I(T.$$.fragment,e),I(P.$$.fragment,e),E=!0)},o(e){G(s.$$.fragment,e),G(r.$$.fragment,e),G(l.$$.fragment,e),G(p.$$.fragment,e),G(h.$$.fragment,e),G(w.$$.fragment,e),G(x.$$.fragment,e),G(k.$$.fragment,e),G(S.$$.fragment,e),G(_.$$.fragment,e),G(T.$$.fragment,e),G(P.$$.fragment,e),E=!1},d(e){e&&u(n),F(s),F(r),F(l),F(p),F(h),F(w),F(x),F(k),F(S),F(_),F(T),F(P)}}}function ye(e,t,n){let{numbers:s=[]}=t;return e.$$set=e=>{"numbers"in e&&n(1,s=e.numbers)},[function(e){const t=e.detail.selected,n=Number(e.detail.text),o=s.includes(n);if(t&&!o)s.push(n);else if(o){const e=s.indexOf(n,0);e>-1&&s.splice(e,1)}},s]}class ke extends B{constructor(e){super(),Y(this,e,ye,xe,r,{numbers:1})}}function Ce(t){let n,s,o,r,i,l,m,p,d;return s=new be({props:{text:"+",keyCode:"49",width:"22%"}}),s.$on("select",t[0]),r=new be({props:{text:"-",keyCode:"50",width:"22%"}}),r.$on("select",t[0]),l=new be({props:{text:"×",keyCode:"51",width:"22%"}}),l.$on("select",t[0]),p=new be({props:{text:"÷",keyCode:"52",width:"22%"}}),p.$on("select",t[0]),{c(){n=f("div"),H(s.$$.fragment),o=$(),H(r.$$.fragment),i=$(),H(l.$$.fragment),m=$(),H(p.$$.fragment),g(n,"class","container svelte-1p2b84u")},m(e,t){a(e,n,t),j(s,n,null),c(n,o),j(r,n,null),c(n,i),j(l,n,null),c(n,m),j(p,n,null),d=!0},p:e,i(e){d||(I(s.$$.fragment,e),I(r.$$.fragment,e),I(l.$$.fragment,e),I(p.$$.fragment,e),d=!0)},o(e){G(s.$$.fragment,e),G(r.$$.fragment,e),G(l.$$.fragment,e),G(p.$$.fragment,e),d=!1},d(e){e&&u(n),F(s),F(r),F(l),F(p)}}}function Se(e,t,n){let{operators:s=[]}=t;return e.$$set=e=>{"operators"in e&&n(1,s=e.operators)},[function(e){const t=e.detail.selected,n=e.detail.text,o=s.includes(n);if(t&&!o)s.push(n);else if(o){const e=s.indexOf(n,0);e>-1&&s.splice(e,1)}},s]}class Ne extends B{constructor(e){super(),Y(this,e,Se,Ce,r,{operators:1})}}function _e(t){let n,s,o;return{c(){n=f("button"),n.textContent="🡐",g(n,"class","svelte-1k47ap5")},m(e,r){a(e,n,r),s||(o=d(n,"click",t[1]),s=!0)},p:e,i:e,o:e,d(e){e&&u(n),s=!1,o()}}}function De(e){const t=x();return[t,()=>t("back")]}class Te extends B{constructor(e){super(),Y(this,e,De,_e,r,{})}}function Me(e){let t,n,s,o,r,i,c,l;function f(t){e[8](t)}let m={};function p(t){e[9](t)}void 0!==e[1]&&(m.numbers=e[1]),t=new ke({props:m}),k.push((()=>R(t,"numbers",f)));let d={};return void 0!==e[2]&&(d.operators=e[2]),o=new Ne({props:d}),k.push((()=>R(o,"operators",p))),c=new V({props:{text:"Practice"}}),c.$on("click",e[5]),{c(){H(t.$$.fragment),s=$(),H(o.$$.fragment),i=$(),H(c.$$.fragment)},m(e,n){j(t,e,n),a(e,s,n),j(o,e,n),a(e,i,n),j(c,e,n),l=!0},p(e,s){const i={};!n&&2&s&&(n=!0,i.numbers=e[1],T((()=>n=!1))),t.$set(i);const c={};!r&&4&s&&(r=!0,c.operators=e[2],T((()=>r=!1))),o.$set(c)},i(e){l||(I(t.$$.fragment,e),I(o.$$.fragment,e),I(c.$$.fragment,e),l=!0)},o(e){G(t.$$.fragment,e),G(o.$$.fragment,e),G(c.$$.fragment,e),l=!1},d(e){F(t,e),e&&u(s),F(o,e),e&&u(i),F(c,e)}}}function Pe(e){let t,n,s;function o(t){e[7](t)}let r={};return void 0!==e[0]&&(r.game=e[0]),t=new he({props:r}),k.push((()=>R(t,"game",o))),t.$on("difficulty",e[4]),{c(){H(t.$$.fragment)},m(e,n){j(t,e,n),s=!0},p(e,s){const o={};!n&&1&s&&(n=!0,o.game=e[0],T((()=>n=!1))),t.$set(o)},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function Ee(e){let t,n,s,o,r,i;t=new Te({}),t.$on("back",e[6]);const c=[Pe,Me],l=[];function f(e,t){return e[0].options.mode!==J.practice?0:1}return s=f(e),o=l[s]=c[s](e),{c(){H(t.$$.fragment),n=$(),o.c(),r=p()},m(e,o){j(t,e,o),a(e,n,o),l[s].m(e,o),a(e,r,o),i=!0},p(e,[t]){let n=s;s=f(e),s===n?l[s].p(e,t):(A(),G(l[n],1,1,(()=>{l[n]=null})),L(),o=l[s],o?o.p(e,t):(o=l[s]=c[s](e),o.c()),I(o,1),o.m(r.parentNode,r))},i(e){i||(I(t.$$.fragment,e),I(o),i=!0)},o(e){G(t.$$.fragment,e),G(o),i=!1},d(e){F(t,e),e&&u(n),l[s].d(e),e&&u(r)}}}function Oe(e,t,n){let s,o,{game:r}=t;const i=x();return e.$$set=e=>{"game"in e&&n(0,r=e.game)},[r,s,o,i,function(){i("play")},function(){n(0,r.options.numbers=s,r),n(0,r.options.operators=o,r),n(0,r.options.difficulty=pe.medium,r),i("play")},()=>i("back"),function(e){r=e,n(0,r)},function(e){s=e,n(1,s)},function(e){o=e,n(2,o)}]}class qe extends B{constructor(e){super(),Y(this,e,Oe,Ee,r,{game:0})}}class Qe{constructor(e,t){this.game=e,this.options=e.options,this.selectedNumbersCount=this.options.numbers.length,this.selectedOperatorsCount=this.options.operators.length;let n=!0;for(;n;)this.operator=this.getOperator(),this.number1=this.getNumber1(),this.number2=this.getNumber2(),n=null!=t&&this.equals(t);this.fixNumbers(),this.answer=this.calculate(this.number1,this.number2,this.operator),this.choices=[],this.createChoices(),this.content=`${this.number1} ${this.operator} ${this.number2}`}getNumber1(){return this.options.numbers[this.getRandomInt(0,this.selectedNumbersCount)]}getNumber2(){const e=Math.max(1,this.game.level-3),t=2*(this.game.level+2),n=this.getRangeMultiplier();return this.getRandomInt(e,t)*n}getOperator(){return this.options.operators[this.getRandomInt(0,this.selectedOperatorsCount)]}fixNumbers(){switch(this.operator){case"-":this.number1<this.number2&&this.swapNumbers();break;case"÷":this.swapNumbers(),this.number1=this.number1*this.number2}}swapNumbers(){const e=this.number1;this.number1=this.number2,this.number2=e}calculate(e,t,n){switch(n){case"+":return e+t;case"-":return e-t;case"×":return e*t;case"÷":return e/t}return 0}getRandomInt(e,t){const n=t-e;return Math.floor(Math.random()*n)+e}createChoices(){this.choices.length=0,this.choices.push(this.answer);let e=3;for(;e>0;){let t=this.getNumber1(),n=this.getNumber2(),s=this.getOperator();if("-÷".includes(s)&&t<n){const e=t;t=n,n=e}"÷"===s&&(t*=n);let o=this.calculate(t,n,s);this.choices.includes(o)||(this.choices.push(o),e--)}this.shuffleChoices()}shuffleChoices(){var e=this.getRandomInt(0,this.choices.length);[this.choices[0],this.choices[e]]=[this.choices[e],this.choices[0]]}getRangeMultiplier(){switch(this.options.difficulty){case pe.easy:return 1;case pe.medium:return 2;case pe.hard:return 3;case pe.insane:return 6;default:return 1}}equals(e){return!!e&&(this.number1===e.number1&&this.number2===e.number2&&this.operator===e.operator)}}function Ae(t){let n,s;return{c(){n=f("div"),s=f("div"),g(s,"class","remaining svelte-nxk5m9"),v(s,"width",t[0]+"%"),v(s,"background-color","hsl("+(100-t[0])+", 100%, 50%)"),g(n,"class","timer svelte-nxk5m9")},m(e,t){a(e,n,t),c(n,s)},p(e,[t]){1&t&&v(s,"width",e[0]+"%"),1&t&&v(s,"background-color","hsl("+(100-e[0])+", 100%, 50%)")},i:e,o:e,d(e){e&&u(n)}}}function Le(e,t){var n,s,o=!1,r=t;this.pause=function(){o=!0,window.clearTimeout(n),n=null,r-=Date.now()-s},this.resume=function(){n||(s=Date.now(),n=window.setTimeout(e,r),o=!1)},this.proportionRemaining=function(){return(o?t-r:Date.now()-s)/t},this.resume()}function Ie(e,t,n){const s=x();let o,{time:r=3e3}=t,i=100;function c(){n(0,i=100),o=new Le((()=>{s("timeout")}),r)}return c(),function e(t){!function(){if(!o)return;n(0,i=100*o.proportionRemaining())}(),window.requestAnimationFrame(e)}(),e.$$set=e=>{"time"in e&&n(1,r=e.time)},[i,r,c,function(){o&&o.pause()}]}class Ge extends B{constructor(e){super(),Y(this,e,Ie,Ae,r,{time:1,reset:2,pause:3})}get reset(){return this.$$.ctx[2]}get pause(){return this.$$.ctx[3]}}function Re(e){let t,n,s,o=e[0].lives+"";return{c(){t=f("span"),n=m("Lives: "),s=m(o)},m(e,o){a(e,t,o),c(t,n),c(t,s)},p(e,t){1&t&&o!==(o=e[0].lives+"")&&h(s,o)},d(e){e&&u(t)}}}function He(t){let n,s,o,r,i,l,p,d,v,w=t[0].level+"",b=t[0].score+"",x=t[1]&&Re(t);return{c(){n=f("div"),s=f("span"),o=m("Level: "),r=m(w),i=$(),l=f("span"),p=m("Score: "),d=m(b),v=$(),x&&x.c(),g(l,"class","score svelte-1t467hs"),g(n,"class","info svelte-1t467hs")},m(e,t){a(e,n,t),c(n,s),c(s,o),c(s,r),c(n,i),c(n,l),c(l,p),c(l,d),c(n,v),x&&x.m(n,null)},p(e,[t]){1&t&&w!==(w=e[0].level+"")&&h(r,w),1&t&&b!==(b=e[0].score+"")&&h(d,b),e[1]?x?x.p(e,t):(x=Re(e),x.c(),x.m(n,null)):x&&(x.d(1),x=null)},i:e,o:e,d(e){e&&u(n),x&&x.d()}}}function je(e,t,n){let{game:s}=t,{showLives:o=!0}=t;return e.$$set=e=>{"game"in e&&n(0,s=e.game),"showLives"in e&&n(1,o=e.showLives)},[s,o]}class Fe extends B{constructor(e){super(),Y(this,e,je,He,r,{game:0,showLives:1})}}function ze(e,t,n){const s=e.slice();return s[7]=t[n],s[9]=n,s}function Ye(e){let t,n;return t=new be({props:{text:e[7].toString(),keyCode:(49+e[9]).toString(),width:"22%",selected:e[1][e[9]],selectedColour:e[2][e[9]]}}),t.$on("select",e[3]),{c(){H(t.$$.fragment)},m(e,s){j(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.text=e[7].toString()),2&n&&(s.selected=e[1][e[9]]),4&n&&(s.selectedColour=e[2][e[9]]),t.$set(s)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){G(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function Be(e){let t,n,s=e[0].choices,o=[];for(let t=0;t<s.length;t+=1)o[t]=Ye(ze(e,s,t));const r=e=>G(o[e],1,1,(()=>{o[e]=null}));return{c(){t=f("div");for(let e=0;e<o.length;e+=1)o[e].c();g(t,"class","choices svelte-1bi2uyh")},m(e,s){a(e,t,s);for(let e=0;e<o.length;e+=1)o[e].m(t,null);n=!0},p(e,[n]){if(15&n){let i;for(s=e[0].choices,i=0;i<s.length;i+=1){const r=ze(e,s,i);o[i]?(o[i].p(r,n),I(o[i],1)):(o[i]=Ye(r),o[i].c(),I(o[i],1),o[i].m(t,null))}for(A(),i=s.length;i<o.length;i+=1)r(i);L()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)I(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)G(o[e]);n=!1},d(e){e&&u(t),l(o,e)}}}let Je="#009933",Ke="#0d6fa7";function Ue(e,t,n){const s=x();let{currentQuestion:o}=t,r=[!1,!1,!1,!1],i=[Ke,Ke,Ke,Ke];function c(){n(1,r),n(2,i)}return e.$$set=e=>{"currentQuestion"in e&&n(0,o=e.currentQuestion)},[o,r,i,function(e){const t=Number(e.detail.text),a=t===o.answer;for(let e=0;e<o.choices.length;e++){var u=o.choices[e];u===t?(n(1,r[e]=!0,r),n(2,i[e]=a?Je:"#993300",i)):u===o.answer?(n(1,r[e]=!0,r),n(2,i[e]=Je,i)):(n(1,r[e]=!1,r),n(2,i[e]=Ke,i))}c(),s("answer",{correct:a})},function(){for(let e=0;e<r.length;e++)n(1,r[e]=!1,r),n(2,i[e]=Ke,i);c()}]}class Ve extends B{constructor(e){super(),Y(this,e,Ue,Be,r,{currentQuestion:0,reset:4})}get reset(){return this.$$.ctx[4]}}function We(e){let t,n,s,o,r,i,l,p,d,v,w,b,x,y=e[1].content+"";function C(t){e[8](t)}function S(t){e[9](t)}let N={};function _(t){e[10](t)}void 0!==e[0]&&(N.game=e[0]),void 0!==e[5]&&(N.showLives=e[5]),t=new Fe({props:N}),k.push((()=>R(t,"game",C))),k.push((()=>R(t,"showLives",S)));let D={};function M(t){e[12](t)}void 0!==e[1]&&(D.currentQuestion=e[1]),p=new Ve({props:D}),k.push((()=>R(p,"currentQuestion",_))),e[11](p),p.$on("answer",e[6]);let P={};return void 0!==e[4]&&(P.time=e[4]),w=new Ge({props:P}),k.push((()=>R(w,"time",M))),e[13](w),w.$on("timeout",e[7]),{c(){H(t.$$.fragment),o=$(),r=f("div"),i=m(y),l=$(),H(p.$$.fragment),v=$(),H(w.$$.fragment),g(r,"class","question svelte-sm9ogi")},m(e,n){j(t,e,n),a(e,o,n),a(e,r,n),c(r,i),a(e,l,n),j(p,e,n),a(e,v,n),j(w,e,n),x=!0},p(e,o){const r={};!n&&1&o&&(n=!0,r.game=e[0],T((()=>n=!1))),!s&&32&o&&(s=!0,r.showLives=e[5],T((()=>s=!1))),t.$set(r),(!x||2&o)&&y!==(y=e[1].content+"")&&h(i,y);const c={};!d&&2&o&&(d=!0,c.currentQuestion=e[1],T((()=>d=!1))),p.$set(c);const a={};!b&&16&o&&(b=!0,a.time=e[4],T((()=>b=!1))),w.$set(a)},i(e){x||(I(t.$$.fragment,e),I(p.$$.fragment,e),I(w.$$.fragment,e),x=!0)},o(e){G(t.$$.fragment,e),G(p.$$.fragment,e),G(w.$$.fragment,e),x=!1},d(n){F(t,n),n&&u(o),n&&u(r),n&&u(l),e[11](null),F(p,n),n&&u(v),e[13](null),F(w,n)}}}function Xe(e){let t,n,s=e[1]&&We(e);return{c(){s&&s.c(),t=p()},m(e,o){s&&s.m(e,o),a(e,t,o),n=!0},p(e,[n]){e[1]?s?(s.p(e,n),2&n&&I(s,1)):(s=We(e),s.c(),I(s,1),s.m(t.parentNode,t)):s&&(A(),G(s,1,1,(()=>{s=null})),L())},i(e){n||(I(s),n=!0)},o(e){G(s),n=!1},d(e){s&&s.d(e),e&&u(t)}}}function Ze(e,t,n){let{game:s}=t;const o=x();let r,i,c=null,a=s.defaultGameTime,u=!1;function l(){n(1,c=new Qe(s,c))}return l(),e.$$set=e=>{"game"in e&&n(0,s=e.game)},[s,c,r,i,a,u,function(e){var t=e.detail.correct;n(0,s.score+=t?1:0,s),n(0,s.lives-=t?0:1,s),setTimeout((()=>{l(),r.reset()}),t?s.pauseCorrectAnswer:s.pauseIncorrectAnswer)},function(){o("gameover")},function(e){s=e,n(0,s)},function(e){u=e,n(5,u)},function(e){c=e,n(1,c)},function(e){k[e?"unshift":"push"]((()=>{r=e,n(2,r)}))},function(e){a=e,n(4,a)},function(e){k[e?"unshift":"push"]((()=>{i=e,n(3,i)}))}]}class et extends B{constructor(e){super(),Y(this,e,Ze,Xe,r,{game:0})}}function tt(e){let t,n,s,o,r,i,l,p,d,v,w,b,x=e[1].content+"";function y(t){e[7](t)}let C={};function S(t){e[8](t)}void 0!==e[0]&&(C.game=e[0]),t=new Fe({props:C}),k.push((()=>R(t,"game",y)));let N={};function _(t){e[10](t)}void 0!==e[1]&&(N.currentQuestion=e[1]),l=new Ve({props:N}),k.push((()=>R(l,"currentQuestion",S))),e[9](l),l.$on("answer",e[5]);let D={};return void 0!==e[4]&&(D.time=e[4]),v=new Ge({props:D}),k.push((()=>R(v,"time",_))),e[11](v),v.$on("timeout",e[6]),{c(){H(t.$$.fragment),s=$(),o=f("div"),r=m(x),i=$(),H(l.$$.fragment),d=$(),H(v.$$.fragment),g(o,"class","question svelte-sm9ogi")},m(e,n){j(t,e,n),a(e,s,n),a(e,o,n),c(o,r),a(e,i,n),j(l,e,n),a(e,d,n),j(v,e,n),b=!0},p(e,s){const o={};!n&&1&s&&(n=!0,o.game=e[0],T((()=>n=!1))),t.$set(o),(!b||2&s)&&x!==(x=e[1].content+"")&&h(r,x);const i={};!p&&2&s&&(p=!0,i.currentQuestion=e[1],T((()=>p=!1))),l.$set(i);const c={};!w&&16&s&&(w=!0,c.time=e[4],T((()=>w=!1))),v.$set(c)},i(e){b||(I(t.$$.fragment,e),I(l.$$.fragment,e),I(v.$$.fragment,e),b=!0)},o(e){G(t.$$.fragment,e),G(l.$$.fragment,e),G(v.$$.fragment,e),b=!1},d(n){F(t,n),n&&u(s),n&&u(o),n&&u(i),e[9](null),F(l,n),n&&u(d),e[11](null),F(v,n)}}}function nt(e){let t,n,s=e[1]&&tt(e);return{c(){s&&s.c(),t=p()},m(e,o){s&&s.m(e,o),a(e,t,o),n=!0},p(e,[n]){e[1]?s?(s.p(e,n),2&n&&I(s,1)):(s=tt(e),s.c(),I(s,1),s.m(t.parentNode,t)):s&&(A(),G(s,1,1,(()=>{s=null})),L())},i(e){n||(I(s),n=!0)},o(e){G(s),n=!1},d(e){s&&s.d(e),e&&u(t)}}}function st(e,t,n){let{game:s}=t;const o=x();let r,i,c=null,a=s.timePerQuestion,u=s.levelCounter;function l(){i&&i.pause(),s.lives<=0?o("gameover"):(n(1,c=new Qe(s,c)),i&&i.reset())}return l(),e.$$set=e=>{"game"in e&&n(0,s=e.game)},[s,c,r,i,a,function(e){var t=e.detail.correct;i.pause(),n(0,s.score+=t?1:0,s),n(0,s.lives-=t?0:1,s),u+=t?-1:0,u<=0&&function(){n(0,s.level++,s),u=s.levelCounter,n(4,a*=s.levelTimeDelta);for(let e=1;e<s.options.numbers.length+10;e++)if(s.options.numbers.indexOf(e)<0){s.options.numbers.push(e);break}if(s.options.operators.length<4&&s.level%2==0){const e=["+","-","×","÷"];for(let t=0;t<e.length;t++)if(s.options.operators.indexOf(e[t])<0){s.options.operators.push(e[t]);break}}}(),setTimeout((()=>{l(),r.reset()}),t?s.pauseCorrectAnswer:s.pauseIncorrectAnswer)},function(){i.pause(),n(0,s.lives-=1,s),l()},function(e){s=e,n(0,s)},function(e){c=e,n(1,c)},function(e){k[e?"unshift":"push"]((()=>{r=e,n(2,r)}))},function(e){a=e,n(4,a)},function(e){k[e?"unshift":"push"]((()=>{i=e,n(3,i)}))}]}class ot extends B{constructor(e){super(),Y(this,e,st,nt,r,{game:0})}}function rt(e){let t,n,s,o,r,i,l,p,d,v,w,b,x,y=e[1].content+"";function C(t){e[8](t)}function S(t){e[9](t)}let N={};function _(t){e[10](t)}void 0!==e[0]&&(N.game=e[0]),void 0!==e[5]&&(N.showLives=e[5]),t=new Fe({props:N}),k.push((()=>R(t,"game",C))),k.push((()=>R(t,"showLives",S)));let D={};function M(t){e[12](t)}void 0!==e[1]&&(D.currentQuestion=e[1]),p=new Ve({props:D}),k.push((()=>R(p,"currentQuestion",_))),e[11](p),p.$on("answer",e[6]);let P={};return void 0!==e[4]&&(P.time=e[4]),w=new Ge({props:P}),k.push((()=>R(w,"time",M))),e[13](w),w.$on("timeout",e[7]),{c(){H(t.$$.fragment),o=$(),r=f("div"),i=m(y),l=$(),H(p.$$.fragment),v=$(),H(w.$$.fragment),g(r,"class","question svelte-sm9ogi")},m(e,n){j(t,e,n),a(e,o,n),a(e,r,n),c(r,i),a(e,l,n),j(p,e,n),a(e,v,n),j(w,e,n),x=!0},p(e,o){const r={};!n&&1&o&&(n=!0,r.game=e[0],T((()=>n=!1))),!s&&32&o&&(s=!0,r.showLives=e[5],T((()=>s=!1))),t.$set(r),(!x||2&o)&&y!==(y=e[1].content+"")&&h(i,y);const c={};!d&&2&o&&(d=!0,c.currentQuestion=e[1],T((()=>d=!1))),p.$set(c);const a={};!b&&16&o&&(b=!0,a.time=e[4],T((()=>b=!1))),w.$set(a)},i(e){x||(I(t.$$.fragment,e),I(p.$$.fragment,e),I(w.$$.fragment,e),x=!0)},o(e){G(t.$$.fragment,e),G(p.$$.fragment,e),G(w.$$.fragment,e),x=!1},d(n){F(t,n),n&&u(o),n&&u(r),n&&u(l),e[11](null),F(p,n),n&&u(v),e[13](null),F(w,n)}}}function it(e){let t,n,s=e[1]&&rt(e);return{c(){s&&s.c(),t=p()},m(e,o){s&&s.m(e,o),a(e,t,o),n=!0},p(e,[n]){e[1]?s?(s.p(e,n),2&n&&I(s,1)):(s=rt(e),s.c(),I(s,1),s.m(t.parentNode,t)):s&&(A(),G(s,1,1,(()=>{s=null})),L())},i(e){n||(I(s),n=!0)},o(e){G(s),n=!1},d(e){s&&s.d(e),e&&u(t)}}}function ct(e,t,n){let{game:s}=t;const o=x();let r,i,c=null,a=s.defaultGameTime,u=!1;function l(){n(1,c=new Qe(s,c))}return l(),e.$$set=e=>{"game"in e&&n(0,s=e.game)},[s,c,r,i,a,u,function(e){var t=e.detail.correct;n(0,s.score+=t?1:0,s),n(0,s.lives-=t?0:1,s),setTimeout((()=>{l(),r.reset()}),t?s.pauseCorrectAnswer:s.pauseIncorrectAnswer)},function(){o("gameover")},function(e){s=e,n(0,s)},function(e){u=e,n(5,u)},function(e){c=e,n(1,c)},function(e){k[e?"unshift":"push"]((()=>{r=e,n(2,r)}))},function(e){a=e,n(4,a)},function(e){k[e?"unshift":"push"]((()=>{i=e,n(3,i)}))}]}class at extends B{constructor(e){super(),Y(this,e,ct,it,r,{game:0})}}function ut(e){let t,n,s;function o(t){e[4](t)}let r={};return void 0!==e[0]&&(r.game=e[0]),t=new et({props:r}),k.push((()=>R(t,"game",o))),t.$on("gameover",e[1]),{c(){H(t.$$.fragment)},m(e,n){j(t,e,n),s=!0},p(e,s){const o={};!n&&1&s&&(n=!0,o.game=e[0],T((()=>n=!1))),t.$set(o)},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function lt(e){let t,n,s;function o(t){e[3](t)}let r={};return void 0!==e[0]&&(r.game=e[0]),t=new at({props:r}),k.push((()=>R(t,"game",o))),t.$on("gameover",e[1]),{c(){H(t.$$.fragment)},m(e,n){j(t,e,n),s=!0},p(e,s){const o={};!n&&1&s&&(n=!0,o.game=e[0],T((()=>n=!1))),t.$set(o)},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function ft(e){let t,n,s;function o(t){e[2](t)}let r={};return void 0!==e[0]&&(r.game=e[0]),t=new ot({props:r}),k.push((()=>R(t,"game",o))),t.$on("gameover",e[1]),{c(){H(t.$$.fragment)},m(e,n){j(t,e,n),s=!0},p(e,s){const o={};!n&&1&s&&(n=!0,o.game=e[0],T((()=>n=!1))),t.$set(o)},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function mt(e){let t,n,s,o;const r=[ft,lt,ut],i=[];function c(e,t){return e[0].options.mode===J.standard?0:e[0].options.mode===J.timed?1:2}return t=c(e),n=i[t]=r[t](e),{c(){n.c(),s=p()},m(e,n){i[t].m(e,n),a(e,s,n),o=!0},p(e,[o]){let a=t;t=c(e),t===a?i[t].p(e,o):(A(),G(i[a],1,1,(()=>{i[a]=null})),L(),n=i[t],n?n.p(e,o):(n=i[t]=r[t](e),n.c()),I(n,1),n.m(s.parentNode,s))},i(e){o||(I(n),o=!0)},o(e){G(n),o=!1},d(e){i[t].d(e),e&&u(s)}}}function $t(e,t,n){let{game:s}=t;const o=x();return e.$$set=e=>{"game"in e&&n(0,s=e.game)},[s,function(){o("gameover")},function(e){s=e,n(0,s)},function(e){s=e,n(0,s)},function(e){s=e,n(0,s)}]}class pt extends B{constructor(e){super(),Y(this,e,$t,mt,r,{game:0})}}class dt{constructor(){this.highScore=0,this.last10Games=[]}}class gt{static update(e,t){gt.setStreak(e),e.gamesPlayed++;const n=gt.getHistoryGame(e,t);10==n.last10Games.length&&n.last10Games.shift(),n.last10Games.push(t.score),n.highScore=Math.max(n.highScore,t.score)}static getHistoryGame(e,t){let n=e.stats.find((e=>e.difficulty===t.options.difficulty&&e.mode===t.options.mode));return n||(n=new dt,n.difficulty=t.options.difficulty,n.mode=t.options.mode,e.stats.push(n)),n}static setStreak(e){e.currentDate?this.isYesterday(new Date(e.currentDate))?(e.currentDate=new Date,e.currentStreak++):this.isToday(new Date(e.currentDate))||gt.resetStreak(e):gt.resetStreak(e),gt.setMaxStreak(e)}static isToday(e){const t=new Date;return this.doDatesMatch(e,t)}static isYesterday(e){let t=new Date;return t.setDate(t.getDate()-1),this.doDatesMatch(e,t)}static doDatesMatch(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}static setMaxStreak(e){e.currentStreak>e.maxStreak&&(e.maxStreak=e.currentStreak)}static resetStreak(e){e.currentDate=new Date,e.currentStreak=1}}function ht(t){let n,s,o,r,i,l=t[0].score+"";return{c(){n=f("h1"),n.textContent="Game Over",s=$(),o=f("h2"),r=m("Score: "),i=m(l)},m(e,t){a(e,n,t),a(e,s,t),a(e,o,t),c(o,r),c(o,i)},p(e,[t]){1&t&&l!==(l=e[0].score+"")&&h(i,l)},i:e,o:e,d(e){e&&u(n),e&&u(s),e&&u(o)}}}function vt(e,t,n){let s;i(e,ae,(e=>n(1,s=e)));let{game:o}=t;var r,c;return s||(r=ae,s=new ce,c=s,r.set(c)),gt.update(s,o),ae.set(s),e.$$set=e=>{"game"in e&&n(0,o=e.game)},[o]}class wt extends B{constructor(e){super(),Y(this,e,vt,ht,r,{game:0})}}var bt;!function(e){e[e.home=0]="home",e[e.help=1]="help",e[e.stats=2]="stats",e[e.options=3]="options",e[e.play=4]="play",e[e.gameover=5]="gameover"}(bt||(bt={}));class xt{constructor(){this.numbers=[],this.operators=[]}}class yt{constructor(){this.reset()}reset(){this.options=new xt,this.lives=3,this.level=1,this.score=0,this.pauseCorrectAnswer=200,this.pauseIncorrectAnswer=500,this.defaultGameTime=3e4,this.timePerQuestion=3e3,this.levelCounter=10,this.levelTimeDelta=.95}}function kt(e){let t,n,s,o,r,i,c;function l(t){e[13](t)}let m={};return void 0!==e[1]&&(m.game=e[1]),t=new wt({props:m}),k.push((()=>R(t,"game",l))),{c(){H(t.$$.fragment),s=$(),o=f("button"),o.textContent="Home"},m(n,u){j(t,n,u),a(n,s,u),a(n,o,u),r=!0,i||(c=d(o,"click",e[14]),i=!0)},p(e,s){const o={};!n&&2&s&&(n=!0,o.game=e[1],T((()=>n=!1))),t.$set(o)},i(e){r||(I(t.$$.fragment,e),r=!0)},o(e){G(t.$$.fragment,e),r=!1},d(e){F(t,e),e&&u(s),e&&u(o),i=!1,c()}}}function Ct(e){let t,n,s;function o(t){e[12](t)}let r={};return void 0!==e[1]&&(r.game=e[1]),t=new pt({props:r}),k.push((()=>R(t,"game",o))),t.$on("gameover",e[4]),{c(){H(t.$$.fragment)},m(e,n){j(t,e,n),s=!0},p(e,s){const o={};!n&&2&s&&(n=!0,o.game=e[1],T((()=>n=!1))),t.$set(o)},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function St(e){let t,n,s;function o(t){e[9](t)}let r={};return void 0!==e[1]&&(r.game=e[1]),t=new qe({props:r}),k.push((()=>R(t,"game",o))),t.$on("back",e[10]),t.$on("play",e[11]),{c(){H(t.$$.fragment)},m(e,n){j(t,e,n),s=!0},p(e,s){const o={};!n&&2&s&&(n=!0,o.game=e[1],T((()=>n=!1))),t.$set(o)},i(e){s||(I(t.$$.fragment,e),s=!0)},o(e){G(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function Nt(t){let n,s;return n=new $e({}),n.$on("close",t[8]),{c(){H(n.$$.fragment)},m(e,t){j(n,e,t),s=!0},p:e,i(e){s||(I(n.$$.fragment,e),s=!0)},o(e){G(n.$$.fragment,e),s=!1},d(e){F(n,e)}}}function _t(t){let n,s;return n=new re({}),n.$on("close",t[7]),{c(){H(n.$$.fragment)},m(e,t){j(n,e,t),s=!0},p:e,i(e){s||(I(n.$$.fragment,e),s=!0)},o(e){G(n.$$.fragment,e),s=!1},d(e){F(n,e)}}}function Dt(t){let n,s;return n=new Z({}),n.$on("help",t[5]),n.$on("stats",t[6]),n.$on("options",t[3]),{c(){H(n.$$.fragment)},m(e,t){j(n,e,t),s=!0},p:e,i(e){s||(I(n.$$.fragment,e),s=!0)},o(e){G(n.$$.fragment,e),s=!1},d(e){F(n,e)}}}function Tt(e){let t,n,s,o;const r=[Dt,_t,Nt,St,Ct,kt],i=[];function c(e,t){return e[0]===bt.home?0:e[0]===bt.help?1:e[0]===bt.stats?2:e[0]===bt.options?3:e[0]===bt.play?4:e[0]===bt.gameover?5:-1}return~(n=c(e))&&(s=i[n]=r[n](e)),{c(){t=f("main"),s&&s.c(),g(t,"class","svelte-1jsvcw")},m(e,s){a(e,t,s),~n&&i[n].m(t,null),o=!0},p(e,[o]){let a=n;n=c(e),n===a?~n&&i[n].p(e,o):(s&&(A(),G(i[a],1,1,(()=>{i[a]=null})),L()),~n?(s=i[n],s?s.p(e,o):(s=i[n]=r[n](e),s.c()),I(s,1),s.m(t,null)):s=null)},i(e){o||(I(s),o=!0)},o(e){G(s),o=!1},d(e){e&&u(t),~n&&i[n].d()}}}function Mt(e,t,n){let s=bt.home,o=new yt;function r(e){n(0,s=e)}return[s,o,r,function(e){o.reset(),n(1,o.options.mode=e.detail.gameType,o),r(bt.options)},function(){r(bt.gameover)},()=>r(bt.help),()=>r(bt.stats),()=>r(bt.home),()=>r(bt.home),function(e){o=e,n(1,o)},()=>r(bt.home),()=>r(bt.play),function(e){o=e,n(1,o)},function(e){o=e,n(1,o)},()=>r(bt.home)]}return new class extends B{constructor(e){super(),Y(this,e,Mt,Tt,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
