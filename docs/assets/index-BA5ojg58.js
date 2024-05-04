var Oe=Object.defineProperty;var Ne=(t,e,n)=>e in t?Oe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var te=(t,e,n)=>(Ne(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function M(){}function we(t){return t()}function ae(){return Object.create(null)}function H(t){t.forEach(we)}function $e(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function De(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function I(){return L(" ")}function Me(){return L("")}function F(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function G(t,e,n,o){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function fe(t,e,n){for(let o=0;o<t.options.length;o+=1){const s=t.options[o];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Fe(t){const e=t.querySelector(":checked");return e&&e.__value}let z;function W(t){z=t}function Pe(){if(!z)throw new Error("Function called outside component initialization");return z}function Be(t){Pe().$$.on_mount.push(t)}const R=[],de=[];let U=[];const _e=[],xe=Promise.resolve();let se=!1;function je(){se||(se=!0,xe.then(Ce))}function Q(t){U.push(t)}const ne=new Set;let j=0;function Ce(){if(j!==0)return;const t=z;do{try{for(;j<R.length;){const e=R[j];j++,W(e),Re(e.$$)}}catch(e){throw R.length=0,j=0,e}for(W(null),R.length=0,j=0;de.length;)de.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];ne.has(n)||(ne.add(n),n())}U.length=0}while(R.length);for(;_e.length;)_e.pop()();se=!1,ne.clear(),W(t)}function Re(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Ue(t){const e=[],n=[];U.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),U=e}const X=new Set;let x;function Je(){x={r:0,c:[],p:x}}function He(){x.r||H(x.c),x=x.p}function J(t,e){t&&t.i&&(X.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(X.has(t))return;X.add(t),x.c.push(()=>{X.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function Y(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Te(t){t&&t.c()}function re(t,e,n){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),Q(()=>{const l=t.$$.on_mount.map(we).filter($e);t.$$.on_destroy?t.$$.on_destroy.push(...l):H(l),t.$$.on_mount=[]}),s.forEach(Q)}function ce(t,e){const n=t.$$;n.fragment!==null&&(Ue(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function We(t,e){t.$$.dirty[0]===-1&&(R.push(t),je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,o,s,l,c=null,i=[-1]){const r=z;W(t);const u=t.$$={fragment:null,ctx:[],props:l,update:M,not_equal:s,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:ae(),dirty:i,skip_bound:!1,root:e.target||r.$$.root};c&&c(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(m,b,...g)=>{const k=g.length?g[0]:b;return u.ctx&&s(u.ctx[m],u.ctx[m]=k)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](k),_&&We(t,m)),b}):[],u.update(),_=!0,H(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const m=Le(e.target);u.fragment&&u.fragment.l(m),m.forEach(C)}else u.fragment&&u.fragment.c();e.intro&&J(t.$$.fragment),re(t,e.target,e.anchor),Ce()}W(r)}class ue{constructor(){te(this,"$$");te(this,"$$set")}$destroy(){ce(this,1),this.$destroy=M}$on(e,n){if(!$e(n))return M;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ze);const qe={CLIENT_ID:"UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU",REDIRECT_URI:"https://amay077.github.io/swarm-check-ins/#/auth",API_ENDPOINT:"https://swarm-check-ins-api.netlify.app/.netlify/functions",post_targets:{mastodon:{mastodon_cloud:{name:"Mastodon.cloud",server:"mastodon.cloud",MASTODON_CLIENT_ID:"8G4fffNV00gj5iWLxO7dB91JVnoAY6puZ--9d0atrc4",MASTODON_CLIENT_SECRET:"xW_xpjTdNurUBS-aGMrkx-zsxUeuboaOhs4VufE1LEc"},mstdn_jp:{name:"mstdn.jp",server:"mstdn.jp",MASTODON_CLIENT_ID:"gIAagB7-8KP6XEW1xHW3Wh3UjOH9A-ircwMlZX-80xw",MASTODON_CLIENT_SECRET:"FlJm2oIaLBEJi4uWGk51ke_VPiwYB5lM5vCB5J5Cf9E"}}}},ee=qe;function Ve(t){let e,n,o,s;return{c(){e=h("div"),n=h("button"),n.textContent="Connect to Foursquare",d(n,"class","connect_button"),d(e,"class","connect_container")},m(l,c){T(l,e,c),f(e,n),o||(s=F(n,"click",t[0]),o=!0)},p:M,i:M,o:M,d(l){l&&C(e),o=!1,s()}}}function Ze(t){return[()=>{const n=`https://foursquare.com/oauth2/authenticate?client_id=${ee.CLIENT_ID}&response_type=code&redirect_uri=${ee.REDIRECT_URI}`;window.location.href=n}]}class Xe extends ue{constructor(e){super(),ie(this,e,Ze,Ve,le,{})}}function pe(t,e,n){const o=t.slice();return o[20]=e[n],o[22]=n,o}function he(t,e,n){const o=t.slice();return o[23]=e[n],o}function Ke(t){let e,n,o,s,l,c,i,r,u;function _(a,O){return a[3]?Qe:Ye}let m=_(t),b=m(t),g=t[3]&&me(t),k=Y(t[4]),$=[];for(let a=0;a<k.length;a+=1)$[a]=ke(pe(t,k,a));return{c(){e=h("div"),n=h("div"),b.c(),o=I(),s=h("h5"),s.textContent="Mastodon",l=I(),g&&g.c(),c=I(),i=h("div");for(let a=0;a<$.length;a+=1)$[a].c();d(s,"class","mb-0"),d(n,"class","d-flex flex-row gap-1 align-items-center"),G(n,"cursor","pointer"),d(i,"class","checkin_items")},m(a,O){T(a,e,O),f(e,n),b.m(n,null),f(n,o),f(n,s),f(e,l),g&&g.m(e,null),T(a,c,O),T(a,i,O);for(let v=0;v<$.length;v+=1)$[v]&&$[v].m(i,null);r||(u=F(n,"click",t[13]),r=!0)},p(a,O){if(m!==(m=_(a))&&(b.d(1),b=m(a),b&&(b.c(),b.m(n,o))),a[3]?g?g.p(a,O):(g=me(a),g.c(),g.m(e,null)):g&&(g.d(1),g=null),O&1684){k=Y(a[4]);let v;for(v=0;v<k.length;v+=1){const E=pe(a,k,v);$[v]?$[v].p(E,O):($[v]=ke(E),$[v].c(),$[v].m(i,null))}for(;v<$.length;v+=1)$[v].d(1);$.length=k.length}},d(a){a&&(C(e),C(c),C(i)),b.d(),g&&g.d(),ye($,a),r=!1,u()}}}function Ge(t){let e;return{c(){e=h("span"),e.textContent="loading..",d(e,"class","loading")},m(n,o){T(n,e,o)},p:M,d(n){n&&C(e)}}}function Qe(t){let e,n;return{c(){e=K("svg"),n=K("path"),d(n,"fill-rule","evenodd"),d(n,"d","M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"width","18"),d(e,"height","18"),d(e,"fill","currentColor"),d(e,"class","bi bi-chevron-down"),d(e,"viewBox","0 0 16 16")},m(o,s){T(o,e,s),f(e,n)},d(o){o&&C(e)}}}function Ye(t){let e,n;return{c(){e=K("svg"),n=K("path"),d(n,"fill-rule","evenodd"),d(n,"d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"width","18"),d(e,"height","18"),d(e,"fill","currentColor"),d(e,"class","bi bi-chevron-right"),d(e,"viewBox","0 0 16 16")},m(o,s){T(o,e,s),f(e,n)},d(o){o&&C(e)}}}function me(t){let e;function n(l,c){var i;return(((i=l[2])==null?void 0:i.length)??0)>0?tt:et}let o=n(t),s=o(t);return{c(){e=h("div"),s.c(),d(e,"class","p-2")},m(l,c){T(l,e,c),s.m(e,null)},p(l,c){o===(o=n(l))&&s?s.p(l,c):(s.d(1),s=o(l),s&&(s.c(),s.m(e,null)))},d(l){l&&C(e),s.d()}}}function et(t){let e,n,o,s,l,c,i,r,u,_,m,b,g,k,$,a,O,v,E,A,N=Y(t[6]),D=[];for(let y=0;y<N.length;y+=1)D[y]=ge(he(t,N,y));return{c(){var y;e=h("div"),n=h("div"),o=h("span"),o.textContent="1.Mastodon サーバーに接続",s=I(),l=h("div"),c=h("select");for(let p=0;p<D.length;p+=1)D[p].c();i=I(),r=h("button"),r.textContent="接続",u=I(),_=h("div"),m=h("span"),m.textContent="2.認証コードを貼り付けて設定",b=I(),g=h("div"),k=h("input"),$=I(),a=h("button"),O=L("設定"),d(c,"class","form-select form-select-sm"),t[0]===void 0&&Q(()=>t[15].call(c)),d(r,"class","btn btn-sm btn-primary"),G(r,"width","60px"),d(l,"class","d-flex flex-row gap-1"),d(n,"class","d-flex flex-column gap-1"),d(k,"class","form-control form-control-sm"),d(k,"type","text"),d(a,"class","btn btn-sm btn-primary"),a.disabled=v=((y=t[1])==null?void 0:y.length)<=0,G(a,"width","60px"),d(g,"class","d-flex flex-row gap-1"),d(_,"class","d-flex flex-column gap-1"),d(e,"class","d-flex flex-column gap-1")},m(y,p){T(y,e,p),f(e,n),f(n,o),f(n,s),f(n,l),f(l,c);for(let S=0;S<D.length;S+=1)D[S]&&D[S].m(c,null);fe(c,t[0],!0),f(l,i),f(l,r),f(e,u),f(e,_),f(_,m),f(_,b),f(_,g),f(g,k),oe(k,t[1]),f(g,$),f(g,a),f(a,O),E||(A=[F(c,"change",t[15]),F(r,"click",t[11]),F(k,"input",t[16]),F(a,"click",t[12])],E=!0)},p(y,p){var S;if(p&64){N=Y(y[6]);let w;for(w=0;w<N.length;w+=1){const P=he(y,N,w);D[w]?D[w].p(P,p):(D[w]=ge(P),D[w].c(),D[w].m(c,null))}for(;w<D.length;w+=1)D[w].d(1);D.length=N.length}p&65&&fe(c,y[0]),p&2&&k.value!==y[1]&&oe(k,y[1]),p&2&&v!==(v=((S=y[1])==null?void 0:S.length)<=0)&&(a.disabled=v)},d(y){y&&C(e),ye(D,y),E=!1,H(A)}}}function tt(t){let e,n,o,s,l,c;return{c(){e=h("div"),n=h("span"),n.textContent="接続済み",o=I(),s=h("button"),s.textContent="切断",d(s,"class","btn btn-sm btn-outline-primary"),G(s,"width","60px"),d(e,"class","d-flex flex-row gap-2 align-items-center")},m(i,r){T(i,e,r),f(e,n),f(e,o),f(e,s),l||(c=F(s,"click",t[14]),l=!0)},p:M,d(i){i&&C(e),l=!1,c()}}}function ge(t){let e,n=t[23].name+"",o,s,l=t[23].server+"",c,i;return{c(){e=h("option"),o=L(n),s=L(" (https://"),c=L(l),i=L(")"),e.__value=t[23].server,oe(e,e.__value)},m(r,u){T(r,e,u),f(e,o),f(e,s),f(e,c),f(e,i)},p:M,d(r){r&&C(e)}}}function ve(t){let e,n,o=t[20].shout+"",s,l;return{c(){e=h("span"),n=L("「"),s=L(o),l=L("」"),d(e,"class","shout")},m(c,i){T(c,e,i),f(e,n),f(e,s),f(e,l)},p(c,i){i&16&&o!==(o=c[20].shout+"")&&Z(s,o)},d(c){c&&C(e)}}}function nt(t){var r;let e,n,o,s,l;function c(){return t[17](t[20])}let i=(((r=t[2])==null?void 0:r.length)??0)>0&&be(t);return{c(){e=h("div"),n=h("button"),n.textContent=`${t[7]}`,o=I(),i&&i.c(),d(n,"class","share_button"),d(e,"class","d-flex flex-row gap-2")},m(u,_){T(u,e,_),f(e,n),f(e,o),i&&i.m(e,null),s||(l=F(n,"click",c),s=!0)},p(u,_){var m;t=u,(((m=t[2])==null?void 0:m.length)??0)>0?i?i.p(t,_):(i=be(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(u){u&&C(e),i&&i.d(),s=!1,l()}}}function ot(t){let e;return{c(){e=h("span"),e.textContent="非公開",d(e,"class","share_private")},m(n,o){T(n,e,o)},p:M,d(n){n&&C(e)}}}function be(t){let e,n,o;function s(){return t[18](t[20])}return{c(){e=h("button"),e.innerHTML='<div class="d-flex flex-row align-items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16"><path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"></path></svg> <span>Toot</span></div>',d(e,"class","share_button")},m(l,c){T(l,e,c),n||(o=F(e,"click",s),n=!0)},p(l,c){t=l},d(l){l&&C(e),n=!1,o()}}}function ke(t){let e,n,o=t[20].venue.name+"",s,l,c,i=t[20].appAddress+"",r,u,_,m=new Date(t[20].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"",b,g,k,$,a=t[20].shout!=null&&ve(t);function O(A,N){return A[20].appPrivate?ot:nt}let v=O(t),E=v(t);return{c(){e=h("div"),n=h("span"),s=L(o),l=I(),c=h("span"),r=L(i),u=I(),_=h("span"),b=L(m),g=I(),a&&a.c(),k=I(),E.c(),$=I(),d(n,"class","venue_name"),d(c,"class","venue_address"),d(_,"class","checkin_at"),d(e,"class","checkin_item")},m(A,N){T(A,e,N),f(e,n),f(n,s),f(e,l),f(e,c),f(c,r),f(e,u),f(e,_),f(_,b),f(e,g),a&&a.m(e,null),f(e,k),E.m(e,null),f(e,$)},p(A,N){N&16&&o!==(o=A[20].venue.name+"")&&Z(s,o),N&16&&i!==(i=A[20].appAddress+"")&&Z(r,i),N&16&&m!==(m=new Date(A[20].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"")&&Z(b,m),A[20].shout!=null?a?a.p(A,N):(a=ve(A),a.c(),a.m(e,k)):a&&(a.d(1),a=null),v===(v=O(A))&&E?E.p(A,N):(E.d(1),E=v(A),E&&(E.c(),E.m(e,$)))},d(A){A&&C(e),a&&a.d(),E.d()}}}function st(t){let e,n,o,s,l;function c(u,_){return u[5]?Ge:Ke}let i=c(t),r=i(t);return{c(){r.c(),e=I(),n=h("div"),o=h("button"),o.textContent="Disconnect",d(o,"class","disconnect_button"),d(n,"class","footer")},m(u,_){r.m(u,_),T(u,e,_),T(u,n,_),f(n,o),s||(l=F(o,"click",t[8]),s=!0)},p(u,[_]){i===(i=c(u))&&r?r.p(u,_):(r.d(1),r=i(u),r&&(r.c(),r.m(e.parentNode,e)))},i:M,o:M,d(u){u&&(C(e),C(n)),r.d(u),s=!1,l()}}}function lt(t,e,n){var y;const o=localStorage.getItem("sci_accessToken");let s="mastodon.cloud",l="",c=localStorage.getItem("sci_mastodonAccessToken")??"",i=!1;const r=Object.values(ee.post_targets.mastodon),u=((y=window.navigator)==null?void 0:y.canShare)!=null?"Share...":"Copy to clipboard";let _=[],m=!0;Be(async()=>{console.log("onMount");try{const p=await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${o}&v=20230823&limit=100`);if(!p.ok){b();return}const S=await p.json();n(4,_=S.response.checkins.items),_.map(w=>{w.appAddress=`${w.venue.location.city}, ${w.venue.location.state}`,w.appPrivate=w.visibility==="private"})}finally{n(5,m=!1)}});const b=()=>{confirm("Foursquare から切断しますか？")&&(localStorage.removeItem("sci_accessToken"),window.location.href="./")},g=p=>{(async()=>{const S=await fetch(`https://api.foursquare.com/v2/checkins/${p.id}?oauth_token=${o}&v=20230823`).then(B=>B.json()),P=`${p.shout==null?"":`${p.shout} / `}I'm at ${p.venue.name} in ${p.appAddress} ${S.response.checkin.checkinShortUrl}`;if(!window.navigator.canShare){const B=prompt("クリップボードにコピーしますか？",P);B!=null&&await navigator.clipboard.writeText(B);return}try{await window.navigator.share({text:P})}catch(B){console.log(B)}})()},k=p=>{(async()=>{const S=await fetch(`https://api.foursquare.com/v2/checkins/${p.id}?oauth_token=${o}&v=20230823`).then(Ie=>Ie.json()),P=`${p.shout==null?"":`${p.shout} / `}I'm at ${p.venue.name} in ${p.appAddress} ${S.response.checkin.checkinShortUrl}`,B=JSON.parse(localStorage.getItem("sci_mastodonAccessToken")??"{}"),Ae=B.server,Ee=B.access_token_response.access_token,Se=P,V=await fetch(`https://${Ae}/api/v1/statuses`,{method:"POST",headers:{Authorization:`Bearer ${Ee}`,"Content-Type":"application/json"},body:JSON.stringify({status:Se})});V.ok?(console.log("toot -> res:",V),alert("投稿しました。")):(console.error("toot -> res:",V),alert(`投稿できませんでした。(${V.status})`))})()},$=()=>{const p=r.find(w=>w.server===s);if(p==null){console.error("onApplyMastodonAccessToken -> settings:",p);return}const S=`https://${p.server}/oauth/authorize?client_id=${p.MASTODON_CLIENT_ID}&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob&scope=write`;window.open(S,"_blank")},a=async()=>{console.log("FIXME h_oku 後で消す  -> onApplyMastodonAccessToken -> mastodonCode:",l);const p=r.find(P=>P.server===s);if(p==null){console.error("onApplyMastodonAccessToken -> settings:",p);return}const S=await fetch(`https://${p.server}/oauth/token`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`client_id=${p.MASTODON_CLIENT_ID}&client_secret=${p.MASTODON_CLIENT_SECRET}&grant_type=authorization_code&code=${l}&redirect_uri=urn:ietf:wg:oauth:2.0:oob`});if(!S.ok){console.error("FIXME h_oku 後で消す  -> onApplyMastodonAccessToken -> res:",S);return}const w=await S.json();localStorage.setItem("sci_mastodonAccessToken",JSON.stringify({server:p.server,access_token_response:w})),n(2,c=JSON.stringify(w)),alert("Mastodon に接続しました。toot ボタンで投稿できます。")},O=()=>{n(3,i=!i)},v=()=>{localStorage.removeItem("sci_mastodonAccessToken"),n(2,c="")};function E(){s=Fe(this),n(0,s),n(6,r)}function A(){l=this.value,n(1,l)}return[s,l,c,i,_,m,r,u,b,g,k,$,a,O,v,E,A,p=>g(p),p=>k(p)]}class rt extends ue{constructor(e){super(),ie(this,e,lt,st,le,{})}}function ct(t){let e,n;return e=new rt({}),{c(){Te(e.$$.fragment)},m(o,s){re(e,o,s),n=!0},p:M,i(o){n||(J(e.$$.fragment,o),n=!0)},o(o){q(e.$$.fragment,o),n=!1},d(o){ce(e,o)}}}function it(t){let e,n,o,s;const l=[at,ut],c=[];function i(r,u){return r[1]==null?0:1}return e=i(t),n=c[e]=l[e](t),{c(){n.c(),o=Me()},m(r,u){c[e].m(r,u),T(r,o,u),s=!0},p:M,i(r){s||(J(n),s=!0)},o(r){q(n),s=!1},d(r){r&&C(o),c[e].d(r)}}}function ut(t){let e;return{c(){e=h("span"),e.textContent="Connecting..."},m(n,o){T(n,e,o)},i:M,o:M,d(n){n&&C(e)}}}function at(t){let e,n;return e=new Xe({}),{c(){Te(e.$$.fragment)},m(o,s){re(e,o,s),n=!0},i(o){n||(J(e.$$.fragment,o),n=!0)},o(o){q(e.$$.fragment,o),n=!1},d(o){ce(e,o)}}}function ft(t){let e,n,o,s,l,c;const i=[it,ct],r=[];function u(_,m){return _[0]==null?0:1}return s=u(t),l=r[s]=i[s](t),{c(){e=h("main"),n=h("h1"),n.textContent="SHARE I'm AT",o=I(),l.c(),d(n,"class","mt-2")},m(_,m){T(_,e,m),f(e,n),f(e,o),r[s].m(e,null),c=!0},p(_,[m]){let b=s;s=u(_),s===b?r[s].p(_,m):(Je(),q(r[b],1,1,()=>{r[b]=null}),He(),l=r[s],l?l.p(_,m):(l=r[s]=i[s](_),l.c()),J(l,1),l.m(e,null))},i(_){c||(J(l),c=!0)},o(_){q(l),c=!1},d(_){_&&C(e),r[s].d()}}}function dt(t,e,n){let o=localStorage.getItem("sci_accessToken");const l=new URLSearchParams(window.location.search).get("code");return o!=null||(l?(async()=>{const i=await(await fetch(`${ee.API_ENDPOINT}/token?code=${l}`)).json(),r=new URL(window.location.href),u=new URLSearchParams(r.search);u.delete("code"),r.hash="",r.search=u.toString(),history.replaceState(null,"",r.toString()),n(0,o=i.access_token),o!=null&&localStorage.setItem("sci_accessToken",o)})():localStorage.removeItem("sci_accessToken")),[o,l]}class _t extends ue{constructor(e){super(),ie(this,e,dt,ft,le,{})}}new _t({target:document.getElementById("app")});
