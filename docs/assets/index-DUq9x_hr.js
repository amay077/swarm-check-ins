var Ee=Object.defineProperty;var Ie=(t,e,n)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>(Ie(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function L(){}function ke(t){return t()}function ue(){return Object.create(null)}function H(t){t.forEach(ke)}function we(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Oe(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function I(){return D(" ")}function Ne(){return D("")}function P(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Me(t){return Array.from(t.childNodes)}function Z(t,e){e=""+e,t.data!==e&&(t.data=e)}function ne(t,e){t.value=e??""}function K(t,e,n,o){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function ae(t,e,n){for(let o=0;o<t.options.length;o+=1){const l=t.options[o];if(l.__value===e){l.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Le(t){const e=t.querySelector(":checked");return e&&e.__value}let q;function J(t){q=t}function De(){if(!q)throw new Error("Function called outside component initialization");return q}function Pe(t){De().$$.on_mount.push(t)}const B=[],fe=[];let U=[];const de=[],xe=Promise.resolve();let oe=!1;function Fe(){oe||(oe=!0,xe.then($e))}function G(t){U.push(t)}const te=new Set;let R=0;function $e(){if(R!==0)return;const t=q;do{try{for(;R<B.length;){const e=B[R];R++,J(e),je(e.$$)}}catch(e){throw B.length=0,R=0,e}for(J(null),B.length=0,R=0;fe.length;)fe.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];te.has(n)||(te.add(n),n())}U.length=0}while(B.length);for(;de.length;)de.pop()();oe=!1,te.clear(),J(t)}function je(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function Re(t){const e=[],n=[];U.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),U=e}const W=new Set;let j;function Be(){j={r:0,c:[],p:j}}function Ue(){j.r||H(j.c),j=j.p}function z(t,e){t&&t.i&&(W.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),j.c.push(()=>{W.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function Q(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ce(t){t&&t.c()}function se(t,e,n){const{fragment:o,after_update:l}=t.$$;o&&o.m(e,n),G(()=>{const s=t.$$.on_mount.map(ke).filter(we);t.$$.on_destroy?t.$$.on_destroy.push(...s):H(s),t.$$.on_mount=[]}),l.forEach(G)}function ce(t,e){const n=t.$$;n.fragment!==null&&(Re(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(t,e){t.$$.dirty[0]===-1&&(B.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,o,l,s,r=null,i=[-1]){const c=q;J(t);const u=t.$$={fragment:null,ctx:[],props:s,update:L,not_equal:l,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ue(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(m,b,...g)=>{const k=g.length?g[0]:b;return u.ctx&&l(u.ctx[m],u.ctx[m]=k)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](k),_&&ze(t,m)),b}):[],u.update(),_=!0,H(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const m=Me(e.target);u.fragment&&u.fragment.l(m),m.forEach(C)}else u.fragment&&u.fragment.c();e.intro&&z(t.$$.fragment),se(t,e.target,e.anchor),$e()}J(c)}class ie{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){ce(this,1),this.$destroy=L}$on(e,n){if(!we(n))return L;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(e){this.$$set&&!Oe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const He="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(He);const Je={CLIENT_ID:"UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU",REDIRECT_URI:"https://amay077.github.io/swarm-check-ins/#/auth",API_ENDPOINT:"https://swarm-check-ins-api.netlify.app/.netlify/functions",post_targets:{mastodon:{mastodon_cloud:{name:"Mastodon.cloud",server:"Mastodon.cloud",MASTODON_CLIENT_ID:"8G4fffNV00gj5iWLxO7dB91JVnoAY6puZ--9d0atrc4",MASTODON_CLIENT_SECRET:"xW_xpjTdNurUBS-aGMrkx-zsxUeuboaOhs4VufE1LEc"}}}},Y=Je;function qe(t){let e,n,o,l;return{c(){e=h("div"),n=h("button"),n.textContent="Connect to Foursquare",d(n,"class","connect_button"),d(e,"class","connect_container")},m(s,r){T(s,e,r),f(e,n),o||(l=P(n,"click",t[0]),o=!0)},p:L,i:L,o:L,d(s){s&&C(e),o=!1,l()}}}function Ve(t){return[()=>{const n=`https://foursquare.com/oauth2/authenticate?client_id=${Y.CLIENT_ID}&response_type=code&redirect_uri=${Y.REDIRECT_URI}`;window.location.href=n}]}class Ze extends ie{constructor(e){super(),re(this,e,Ve,qe,le,{})}}function _e(t,e,n){const o=t.slice();return o[20]=e[n],o[22]=n,o}function pe(t,e,n){const o=t.slice();return o[23]=e[n],o}function We(t){let e,n,o,l,s,r,i,c,u;function _(a,O){return a[3]?Ke:Ge}let m=_(t),b=m(t),g=t[3]&&he(t),k=Q(t[4]),y=[];for(let a=0;a<k.length;a+=1)y[a]=be(_e(t,k,a));return{c(){e=h("div"),n=h("div"),b.c(),o=I(),l=h("h5"),l.textContent="Mastodon",s=I(),g&&g.c(),r=I(),i=h("div");for(let a=0;a<y.length;a+=1)y[a].c();d(l,"class","mb-0"),d(n,"class","d-flex flex-row gap-1 align-items-center"),K(n,"cursor","pointer"),d(i,"class","checkin_items")},m(a,O){T(a,e,O),f(e,n),b.m(n,null),f(n,o),f(n,l),f(e,s),g&&g.m(e,null),T(a,r,O),T(a,i,O);for(let v=0;v<y.length;v+=1)y[v]&&y[v].m(i,null);c||(u=P(n,"click",t[13]),c=!0)},p(a,O){if(m!==(m=_(a))&&(b.d(1),b=m(a),b&&(b.c(),b.m(n,o))),a[3]?g?g.p(a,O):(g=he(a),g.c(),g.m(e,null)):g&&(g.d(1),g=null),O&1684){k=Q(a[4]);let v;for(v=0;v<k.length;v+=1){const S=_e(a,k,v);y[v]?y[v].p(S,O):(y[v]=be(S),y[v].c(),y[v].m(i,null))}for(;v<y.length;v+=1)y[v].d(1);y.length=k.length}},d(a){a&&(C(e),C(r),C(i)),b.d(),g&&g.d(),ye(y,a),c=!1,u()}}}function Xe(t){let e;return{c(){e=h("span"),e.textContent="loading..",d(e,"class","loading")},m(n,o){T(n,e,o)},p:L,d(n){n&&C(e)}}}function Ke(t){let e,n;return{c(){e=X("svg"),n=X("path"),d(n,"fill-rule","evenodd"),d(n,"d","M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"width","18"),d(e,"height","18"),d(e,"fill","currentColor"),d(e,"class","bi bi-chevron-down"),d(e,"viewBox","0 0 16 16")},m(o,l){T(o,e,l),f(e,n)},d(o){o&&C(e)}}}function Ge(t){let e,n;return{c(){e=X("svg"),n=X("path"),d(n,"fill-rule","evenodd"),d(n,"d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"width","18"),d(e,"height","18"),d(e,"fill","currentColor"),d(e,"class","bi bi-chevron-right"),d(e,"viewBox","0 0 16 16")},m(o,l){T(o,e,l),f(e,n)},d(o){o&&C(e)}}}function he(t){let e;function n(s,r){var i;return(((i=s[2])==null?void 0:i.length)??0)>0?Ye:Qe}let o=n(t),l=o(t);return{c(){e=h("div"),l.c(),d(e,"class","p-2")},m(s,r){T(s,e,r),l.m(e,null)},p(s,r){o===(o=n(s))&&l?l.p(s,r):(l.d(1),l=o(s),l&&(l.c(),l.m(e,null)))},d(s){s&&C(e),l.d()}}}function Qe(t){let e,n,o,l,s,r,i,c,u,_,m,b,g,k,y,a,O,v,S,A,N=Q(t[6]),M=[];for(let $=0;$<N.length;$+=1)M[$]=me(pe(t,N,$));return{c(){var $;e=h("div"),n=h("div"),o=h("span"),o.textContent="1.Mastodon サーバーに接続",l=I(),s=h("div"),r=h("select");for(let p=0;p<M.length;p+=1)M[p].c();i=I(),c=h("button"),c.textContent="接続",u=I(),_=h("div"),m=h("span"),m.textContent="2.認証コードを貼り付けて設定",b=I(),g=h("div"),k=h("input"),y=I(),a=h("button"),O=D("設定"),d(r,"class","form-select form-select-sm"),t[0]===void 0&&G(()=>t[15].call(r)),d(c,"class","btn btn-sm btn-primary"),K(c,"width","60px"),d(s,"class","d-flex flex-row gap-1"),d(n,"class","d-flex flex-column gap-1"),d(k,"class","form-control form-control-sm"),d(k,"type","text"),d(a,"class","btn btn-sm btn-primary"),a.disabled=v=(($=t[1])==null?void 0:$.length)<=0,K(a,"width","60px"),d(g,"class","d-flex flex-row gap-1"),d(_,"class","d-flex flex-column gap-1"),d(e,"class","d-flex flex-column gap-1")},m($,p){T($,e,p),f(e,n),f(n,o),f(n,l),f(n,s),f(s,r);for(let E=0;E<M.length;E+=1)M[E]&&M[E].m(r,null);ae(r,t[0],!0),f(s,i),f(s,c),f(e,u),f(e,_),f(_,m),f(_,b),f(_,g),f(g,k),ne(k,t[1]),f(g,y),f(g,a),f(a,O),S||(A=[P(r,"change",t[15]),P(c,"click",t[11]),P(k,"input",t[16]),P(a,"click",t[12])],S=!0)},p($,p){var E;if(p&64){N=Q($[6]);let w;for(w=0;w<N.length;w+=1){const x=pe($,N,w);M[w]?M[w].p(x,p):(M[w]=me(x),M[w].c(),M[w].m(r,null))}for(;w<M.length;w+=1)M[w].d(1);M.length=N.length}p&65&&ae(r,$[0]),p&2&&k.value!==$[1]&&ne(k,$[1]),p&2&&v!==(v=((E=$[1])==null?void 0:E.length)<=0)&&(a.disabled=v)},d($){$&&C(e),ye(M,$),S=!1,H(A)}}}function Ye(t){let e,n,o,l,s,r;return{c(){e=h("div"),n=h("span"),n.textContent="接続済み",o=I(),l=h("button"),l.textContent="切断",d(l,"class","btn btn-sm btn-outline-primary"),K(l,"width","60px"),d(e,"class","d-flex flex-row gap-2 align-items-center")},m(i,c){T(i,e,c),f(e,n),f(e,o),f(e,l),s||(r=P(l,"click",t[14]),s=!0)},p:L,d(i){i&&C(e),s=!1,r()}}}function me(t){let e,n=t[23].name+"",o,l,s=t[23].server+"",r,i;return{c(){e=h("option"),o=D(n),l=D(" (https://"),r=D(s),i=D(")"),e.__value=t[23].server,ne(e,e.__value)},m(c,u){T(c,e,u),f(e,o),f(e,l),f(e,r),f(e,i)},p:L,d(c){c&&C(e)}}}function ge(t){let e,n,o=t[20].shout+"",l,s;return{c(){e=h("span"),n=D("「"),l=D(o),s=D("」"),d(e,"class","shout")},m(r,i){T(r,e,i),f(e,n),f(e,l),f(e,s)},p(r,i){i&16&&o!==(o=r[20].shout+"")&&Z(l,o)},d(r){r&&C(e)}}}function et(t){var c;let e,n,o,l,s;function r(){return t[17](t[20])}let i=(((c=t[2])==null?void 0:c.length)??0)>0&&ve(t);return{c(){e=h("div"),n=h("button"),n.textContent=`${t[7]}`,o=I(),i&&i.c(),d(n,"class","share_button"),d(e,"class","d-flex flex-row gap-2")},m(u,_){T(u,e,_),f(e,n),f(e,o),i&&i.m(e,null),l||(s=P(n,"click",r),l=!0)},p(u,_){var m;t=u,(((m=t[2])==null?void 0:m.length)??0)>0?i?i.p(t,_):(i=ve(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(u){u&&C(e),i&&i.d(),l=!1,s()}}}function tt(t){let e;return{c(){e=h("span"),e.textContent="非公開",d(e,"class","share_private")},m(n,o){T(n,e,o)},p:L,d(n){n&&C(e)}}}function ve(t){let e,n,o;function l(){return t[18](t[20])}return{c(){e=h("button"),e.innerHTML='<div class="d-flex flex-row align-items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16"><path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"></path></svg> <span>Toot</span></div>',d(e,"class","share_button")},m(s,r){T(s,e,r),n||(o=P(e,"click",l),n=!0)},p(s,r){t=s},d(s){s&&C(e),n=!1,o()}}}function be(t){let e,n,o=t[20].venue.name+"",l,s,r,i=t[20].appAddress+"",c,u,_,m=new Date(t[20].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"",b,g,k,y,a=t[20].shout!=null&&ge(t);function O(A,N){return A[20].appPrivate?tt:et}let v=O(t),S=v(t);return{c(){e=h("div"),n=h("span"),l=D(o),s=I(),r=h("span"),c=D(i),u=I(),_=h("span"),b=D(m),g=I(),a&&a.c(),k=I(),S.c(),y=I(),d(n,"class","venue_name"),d(r,"class","venue_address"),d(_,"class","checkin_at"),d(e,"class","checkin_item")},m(A,N){T(A,e,N),f(e,n),f(n,l),f(e,s),f(e,r),f(r,c),f(e,u),f(e,_),f(_,b),f(e,g),a&&a.m(e,null),f(e,k),S.m(e,null),f(e,y)},p(A,N){N&16&&o!==(o=A[20].venue.name+"")&&Z(l,o),N&16&&i!==(i=A[20].appAddress+"")&&Z(c,i),N&16&&m!==(m=new Date(A[20].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"")&&Z(b,m),A[20].shout!=null?a?a.p(A,N):(a=ge(A),a.c(),a.m(e,k)):a&&(a.d(1),a=null),v===(v=O(A))&&S?S.p(A,N):(S.d(1),S=v(A),S&&(S.c(),S.m(e,y)))},d(A){A&&C(e),a&&a.d(),S.d()}}}function nt(t){let e,n,o,l,s;function r(u,_){return u[5]?Xe:We}let i=r(t),c=i(t);return{c(){c.c(),e=I(),n=h("div"),o=h("button"),o.textContent="Disconnect",d(o,"class","disconnect_button"),d(n,"class","footer")},m(u,_){c.m(u,_),T(u,e,_),T(u,n,_),f(n,o),l||(s=P(o,"click",t[8]),l=!0)},p(u,[_]){i===(i=r(u))&&c?c.p(u,_):(c.d(1),c=i(u),c&&(c.c(),c.m(e.parentNode,e)))},i:L,o:L,d(u){u&&(C(e),C(n)),c.d(u),l=!1,s()}}}function ot(t,e,n){var $;const o=localStorage.getItem("sci_accessToken");let l="mastodon.cloud",s="",r=localStorage.getItem("sci_mastodonAccessToken")??"",i=!1;const c=Object.values(Y.post_targets.mastodon),u=(($=window.navigator)==null?void 0:$.canShare)!=null?"Share...":"Copy to clipboard";let _=[],m=!0;Pe(async()=>{console.log("onMount");try{const p=await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${o}&v=20230823&limit=100`);if(!p.ok){b();return}const E=await p.json();n(4,_=E.response.checkins.items),_.map(w=>{w.appAddress=`${w.venue.location.city}, ${w.venue.location.state}`,w.appPrivate=w.visibility==="private"})}finally{n(5,m=!1)}});const b=()=>{confirm("Foursquare から切断しますか？")&&(localStorage.removeItem("sci_accessToken"),window.location.href="./")},g=p=>{(async()=>{const E=await fetch(`https://api.foursquare.com/v2/checkins/${p.id}?oauth_token=${o}&v=20230823`).then(F=>F.json()),x=`${p.shout==null?"":`${p.shout} / `}I'm at ${p.venue.name} in ${p.appAddress} ${E.response.checkin.checkinShortUrl}`;if(!window.navigator.canShare){const F=prompt("クリップボードにコピーしますか？",x);F!=null&&await navigator.clipboard.writeText(F);return}try{await window.navigator.share({text:x})}catch(F){console.log(F)}})()},k=p=>{(async()=>{const E=await fetch(`https://api.foursquare.com/v2/checkins/${p.id}?oauth_token=${o}&v=20230823`).then(Se=>Se.json()),x=`${p.shout==null?"":`${p.shout} / `}I'm at ${p.venue.name} in ${p.appAddress} ${E.response.checkin.checkinShortUrl}`,F="mastodon.cloud",Te=JSON.parse(localStorage.getItem("sci_mastodonAccessToken")??"{}").access_token,Ae=x;await fetch(`https://${F}/api/v1/statuses`,{method:"POST",headers:{Authorization:`Bearer ${Te}`,"Content-Type":"application/json"},body:JSON.stringify({status:Ae})})})()},y=()=>{const p=c.find(w=>w.server===l);if(p==null){console.error("onApplyMastodonAccessToken -> settings:",p);return}const E=`https://${p.server}/oauth/authorize?client_id=${p.MASTODON_CLIENT_ID}&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob&scope=write`;window.open(E,"_blank")},a=async()=>{console.log("FIXME h_oku 後で消す  -> onApplyMastodonAccessToken -> mastodonCode:",s);const p=c.find(x=>x.server===l);if(p==null){console.error("onApplyMastodonAccessToken -> settings:",p);return}const E=await fetch(`https://${p.server}/oauth/token`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`client_id=${p.MASTODON_CLIENT_ID}&client_secret=${p.MASTODON_CLIENT_SECRET}&grant_type=authorization_code&code=${s}&redirect_uri=urn:ietf:wg:oauth:2.0:oob`});if(!E.ok){console.error("FIXME h_oku 後で消す  -> onApplyMastodonAccessToken -> res:",E);return}const w=await E.json();localStorage.setItem("sci_mastodonAccessToken",JSON.stringify(w)),n(2,r=JSON.stringify(w))},O=()=>{n(3,i=!i)},v=()=>{localStorage.removeItem("sci_mastodonAccessToken"),n(2,r="")};function S(){l=Le(this),n(0,l),n(6,c)}function A(){s=this.value,n(1,s)}return[l,s,r,i,_,m,c,u,b,g,k,y,a,O,v,S,A,p=>g(p),p=>k(p)]}class lt extends ie{constructor(e){super(),re(this,e,ot,nt,le,{})}}function st(t){let e,n;return e=new lt({}),{c(){Ce(e.$$.fragment)},m(o,l){se(e,o,l),n=!0},p:L,i(o){n||(z(e.$$.fragment,o),n=!0)},o(o){V(e.$$.fragment,o),n=!1},d(o){ce(e,o)}}}function ct(t){let e,n,o,l;const s=[it,rt],r=[];function i(c,u){return c[1]==null?0:1}return e=i(t),n=r[e]=s[e](t),{c(){n.c(),o=Ne()},m(c,u){r[e].m(c,u),T(c,o,u),l=!0},p:L,i(c){l||(z(n),l=!0)},o(c){V(n),l=!1},d(c){c&&C(o),r[e].d(c)}}}function rt(t){let e;return{c(){e=h("span"),e.textContent="Connecting..."},m(n,o){T(n,e,o)},i:L,o:L,d(n){n&&C(e)}}}function it(t){let e,n;return e=new Ze({}),{c(){Ce(e.$$.fragment)},m(o,l){se(e,o,l),n=!0},i(o){n||(z(e.$$.fragment,o),n=!0)},o(o){V(e.$$.fragment,o),n=!1},d(o){ce(e,o)}}}function ut(t){let e,n,o,l,s,r;const i=[ct,st],c=[];function u(_,m){return _[0]==null?0:1}return l=u(t),s=c[l]=i[l](t),{c(){e=h("main"),n=h("h1"),n.textContent="SHARE I'm AT",o=I(),s.c(),d(n,"class","mt-2")},m(_,m){T(_,e,m),f(e,n),f(e,o),c[l].m(e,null),r=!0},p(_,[m]){let b=l;l=u(_),l===b?c[l].p(_,m):(Be(),V(c[b],1,1,()=>{c[b]=null}),Ue(),s=c[l],s?s.p(_,m):(s=c[l]=i[l](_),s.c()),z(s,1),s.m(e,null))},i(_){r||(z(s),r=!0)},o(_){V(s),r=!1},d(_){_&&C(e),c[l].d()}}}function at(t,e,n){let o=localStorage.getItem("sci_accessToken");const s=new URLSearchParams(window.location.search).get("code");return o!=null||(s?(async()=>{const i=await(await fetch(`${Y.API_ENDPOINT}/token?code=${s}`)).json(),c=new URL(window.location.href),u=new URLSearchParams(c.search);u.delete("code"),c.hash="",c.search=u.toString(),history.replaceState(null,"",c.toString()),n(0,o=i.access_token),o!=null&&localStorage.setItem("sci_accessToken",o)})():localStorage.removeItem("sci_accessToken")),[o,s]}class ft extends ie{constructor(e){super(),re(this,e,at,ut,le,{})}}new ft({target:document.getElementById("app")});