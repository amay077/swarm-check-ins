var Ee=Object.defineProperty;var Se=(t,e,n)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>(Se(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function E(){}function we(t){return t()}function _e(){return Object.create(null)}function J(t){t.forEach(we)}function ye(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ie(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function Te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function I(){return D(" ")}function Ae(){return D("")}function F(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Oe(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.data!==e&&(t.data=e)}function le(t,e){t.value=e??""}function Z(t,e,n,o){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function pe(t,e,n){for(let o=0;o<t.options.length;o+=1){const s=t.options[o];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ne(t){const e=t.querySelector(":checked");return e&&e.__value}let W;function H(t){W=t}function Me(){if(!W)throw new Error("Function called outside component initialization");return W}function De(t){Me().$$.on_mount.push(t)}const R=[],ce=[];let U=[];const re=[],Le=Promise.resolve();let ie=!1;function Pe(){ie||(ie=!0,Le.then(Ce))}function X(t){U.push(t)}function Fe(t){re.push(t)}const se=new Set;let j=0;function Ce(){if(j!==0)return;const t=W;do{try{for(;j<R.length;){const e=R[j];j++,H(e),xe(e.$$)}}catch(e){throw R.length=0,j=0,e}for(H(null),R.length=0,j=0;ce.length;)ce.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];se.has(n)||(se.add(n),n())}U.length=0}while(R.length);for(;re.length;)re.pop()();ie=!1,se.clear(),H(t)}function xe(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Be(t){const e=[],n=[];U.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),U=e}const q=new Set;let B;function ue(){B={r:0,c:[],p:B}}function ae(){B.r||J(B.c),B=B.p}function P(t,e){t&&t.i&&(q.delete(t),t.i(e))}function x(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),B.c.push(()=>{q.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function K(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function je(t,e,n){const o=t.$$.props[e];o!==void 0&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function fe(t){t&&t.c()}function Y(t,e,n){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),X(()=>{const l=t.$$.on_mount.map(we).filter(ye);t.$$.on_destroy?t.$$.on_destroy.push(...l):J(l),t.$$.on_mount=[]}),s.forEach(X)}function ee(t,e){const n=t.$$;n.fragment!==null&&(Be(n.after_update),J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Re(t,e){t.$$.dirty[0]===-1&&(R.push(t),Pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,o,s,l,c=null,r=[-1]){const i=W;H(t);const u=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:s,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:_e(),dirty:r,skip_bound:!1,root:e.target||i.$$.root};c&&c(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(b,f,...v)=>{const h=v.length?v[0]:f;return u.ctx&&s(u.ctx[b],u.ctx[b]=h)&&(!u.skip_bound&&u.bound[b]&&u.bound[b](h),_&&Re(t,b)),f}):[],u.update(),_=!0,J(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const b=Oe(e.target);u.fragment&&u.fragment.l(b),b.forEach(T)}else u.fragment&&u.fragment.c();e.intro&&P(t.$$.fragment),Y(t,e.target,e.anchor),Ce()}H(i)}class ne{constructor(){oe(this,"$$");oe(this,"$$set")}$destroy(){ee(this,1),this.$destroy=E}$on(e,n){if(!ye(n))return E;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!Ie(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ue);const Je={CLIENT_ID:"UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU",REDIRECT_URI:"https://amay077.github.io/swarm-check-ins/#/auth",API_ENDPOINT:"https://swarm-check-ins-api.netlify.app/.netlify/functions",post_targets:{mastodon:{mastodon_cloud:{name:"Mastodon.cloud",server:"mastodon.cloud",MASTODON_CLIENT_ID:"8G4fffNV00gj5iWLxO7dB91JVnoAY6puZ--9d0atrc4",MASTODON_CLIENT_SECRET:"xW_xpjTdNurUBS-aGMrkx-zsxUeuboaOhs4VufE1LEc"},mstdn_jp:{name:"mstdn.jp",server:"mstdn.jp",MASTODON_CLIENT_ID:"gIAagB7-8KP6XEW1xHW3Wh3UjOH9A-ircwMlZX-80xw",MASTODON_CLIENT_SECRET:"FlJm2oIaLBEJi4uWGk51ke_VPiwYB5lM5vCB5J5Cf9E"}}}},G=Je;function He(t){let e,n,o,s;return{c(){e=k("div"),n=k("button"),n.textContent="Connect to Foursquare",p(n,"class","connect_button"),p(e,"class","connect_container")},m(l,c){A(l,e,c),d(e,n),o||(s=F(n,"click",t[0]),o=!0)},p:E,i:E,o:E,d(l){l&&T(e),o=!1,s()}}}function We(t){return[()=>{const n=`https://foursquare.com/oauth2/authenticate?client_id=${G.CLIENT_ID}&response_type=code&redirect_uri=${G.REDIRECT_URI}`;window.location.href=n}]}class ze extends ne{constructor(e){super(),te(this,e,We,He,Q,{})}}function he(t,e,n){const o=t.slice();return o[9]=e[n],o}function qe(t){let e,n,o,s,l,c,r,i,u,_,b,f,v,h,O,m,a,w,g,$,y=K(t[3]),S=[];for(let C=0;C<y.length;C+=1)S[C]=me(he(t,y,C));return{c(){var C;e=k("div"),n=k("div"),o=k("span"),o.textContent="1.Mastodon サーバーに接続",s=I(),l=k("div"),c=k("select");for(let M=0;M<S.length;M+=1)S[M].c();r=I(),i=k("button"),i.textContent="接続",u=I(),_=k("div"),b=k("span"),b.textContent="2.認証コードを貼り付けて設定",f=I(),v=k("div"),h=k("input"),O=I(),m=k("button"),a=D("設定"),p(c,"class","form-select form-select-sm"),t[1]===void 0&&X(()=>t[7].call(c)),p(i,"class","btn btn-sm btn-primary"),Z(i,"width","60px"),p(l,"class","d-flex flex-row gap-1"),p(n,"class","d-flex flex-column gap-1"),p(h,"class","form-control form-control-sm"),p(h,"type","text"),p(m,"class","btn btn-sm btn-primary"),m.disabled=w=((C=t[2])==null?void 0:C.length)<=0,Z(m,"width","60px"),p(v,"class","d-flex flex-row gap-1"),p(_,"class","d-flex flex-column gap-1"),p(e,"class","d-flex flex-column gap-1")},m(C,M){A(C,e,M),d(e,n),d(n,o),d(n,s),d(n,l),d(l,c);for(let L=0;L<S.length;L+=1)S[L]&&S[L].m(c,null);pe(c,t[1],!0),d(l,r),d(l,i),d(e,u),d(e,_),d(_,b),d(_,f),d(_,v),d(v,h),le(h,t[2]),d(v,O),d(v,m),d(m,a),g||($=[F(c,"change",t[7]),F(i,"click",t[4]),F(h,"input",t[8]),F(m,"click",t[5])],g=!0)},p(C,M){var L;if(M&8){y=K(C[3]);let N;for(N=0;N<y.length;N+=1){const de=he(C,y,N);S[N]?S[N].p(de,M):(S[N]=me(de),S[N].c(),S[N].m(c,null))}for(;N<S.length;N+=1)S[N].d(1);S.length=y.length}M&10&&pe(c,C[1]),M&4&&h.value!==C[2]&&le(h,C[2]),M&4&&w!==(w=((L=C[2])==null?void 0:L.length)<=0)&&(m.disabled=w)},d(C){C&&T(e),Te(S,C),g=!1,J($)}}}function Ve(t){let e,n,o,s,l,c;return{c(){e=k("div"),n=k("span"),n.textContent="接続済み",o=I(),s=k("button"),s.textContent="切断",p(s,"class","btn btn-sm btn-outline-primary"),Z(s,"width","60px"),p(e,"class","d-flex flex-row gap-2 align-items-center")},m(r,i){A(r,e,i),d(e,n),d(e,o),d(e,s),l||(c=F(s,"click",t[6]),l=!0)},p:E,d(r){r&&T(e),l=!1,c()}}}function me(t){let e,n=t[9].name+"",o,s,l=t[9].server+"",c,r;return{c(){e=k("option"),o=D(n),s=D(" (https://"),c=D(l),r=D(")"),e.__value=t[9].server,le(e,e.__value)},m(i,u){A(i,e,u),d(e,o),d(e,s),d(e,c),d(e,r)},p:E,d(i){i&&T(e)}}}function Ze(t){let e;function n(l,c){var r;return(((r=l[0])==null?void 0:r.length)??0)>0?Ve:qe}let o=n(t),s=o(t);return{c(){s.c(),e=Ae()},m(l,c){s.m(l,c),A(l,e,c)},p(l,[c]){o===(o=n(l))&&s?s.p(l,c):(s.d(1),s=o(l),s&&(s.c(),s.m(e.parentNode,e)))},i:E,o:E,d(l){l&&T(e),s.d(l)}}}function Xe(t,e,n){const o=Object.values(G.post_targets.mastodon);let s="mastodon.cloud",l="",{mastodonAccessToken:c=localStorage.getItem("sci_mastodonAccessToken")??""}=e;const r=()=>{const f=o.find(h=>h.server===s);if(f==null){console.error("onApplyMastodonAccessToken -> settings:",f);return}const v=`https://${f.server}/oauth/authorize?client_id=${f.MASTODON_CLIENT_ID}&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob&scope=write`;window.open(v,"_blank")},i=async()=>{console.log("onApplyMastodonAccessToken -> mastodonCode:",l);const f=o.find(O=>O.server===s);if(f==null){console.error("onApplyMastodonAccessToken -> settings:",f);return}const v=await fetch(`https://${f.server}/oauth/token`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`client_id=${f.MASTODON_CLIENT_ID}&client_secret=${f.MASTODON_CLIENT_SECRET}&grant_type=authorization_code&code=${l}&redirect_uri=urn:ietf:wg:oauth:2.0:oob`});if(!v.ok){console.error("FIXME h_oku 後で消す  -> onApplyMastodonAccessToken -> res:",v);return}const h=await v.json();localStorage.setItem("sci_mastodonAccessToken",JSON.stringify({server:f.server,access_token_response:h})),n(0,c=JSON.stringify(h)),alert("Mastodon に接続しました。toot ボタンで投稿できます。")},u=()=>{localStorage.removeItem("sci_mastodonAccessToken"),n(0,c="")};function _(){s=Ne(this),n(1,s),n(3,o)}function b(){l=this.value,n(2,l)}return t.$$set=f=>{"mastodonAccessToken"in f&&n(0,c=f.mastodonAccessToken)},[c,s,l,o,r,i,u,_,b]}class Ke extends ne{constructor(e){super(),te(this,e,Xe,Ze,Q,{mastodonAccessToken:0})}}function ge(t,e,n){const o=t.slice();return o[13]=e[n],o[15]=n,o}function Ge(t){let e,n,o,s,l,c,r,i,u,_;function b(a,w){return a[1]?Ye:et}let f=b(t),v=f(t),h=t[1]&&be(t),O=K(t[2]),m=[];for(let a=0;a<O.length;a+=1)m[a]=$e(ge(t,O,a));return{c(){e=k("div"),n=k("div"),o=k("h5"),o.textContent="Mastodon",s=I(),v.c(),l=I(),h&&h.c(),c=I(),r=k("div");for(let a=0;a<m.length;a+=1)m[a].c();p(o,"class","mb-0"),p(n,"class","d-flex flex-row gap-1 align-items-center"),Z(n,"cursor","pointer"),p(r,"class","checkin_items")},m(a,w){A(a,e,w),d(e,n),d(n,o),d(n,s),v.m(n,null),d(e,l),h&&h.m(e,null),A(a,c,w),A(a,r,w);for(let g=0;g<m.length;g+=1)m[g]&&m[g].m(r,null);i=!0,u||(_=F(n,"click",t[8]),u=!0)},p(a,w){if(f!==(f=b(a))&&(v.d(1),v=f(a),v&&(v.c(),v.m(n,null))),a[1]?h?(h.p(a,w),w&2&&P(h,1)):(h=be(a),h.c(),P(h,1),h.m(e,null)):h&&(ue(),x(h,1,1,()=>{h=null}),ae()),w&213){O=K(a[2]);let g;for(g=0;g<O.length;g+=1){const $=ge(a,O,g);m[g]?m[g].p($,w):(m[g]=$e($),m[g].c(),m[g].m(r,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=O.length}},i(a){i||(P(h),i=!0)},o(a){x(h),i=!1},d(a){a&&(T(e),T(c),T(r)),v.d(),h&&h.d(),Te(m,a),u=!1,_()}}}function Qe(t){let e;return{c(){e=k("span"),e.textContent="loading..",p(e,"class","loading")},m(n,o){A(n,e,o)},p:E,i:E,o:E,d(n){n&&T(e)}}}function Ye(t){let e,n;return{c(){e=V("svg"),n=V("path"),p(n,"fill-rule","evenodd"),p(n,"d","M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"width","18"),p(e,"height","18"),p(e,"fill","currentColor"),p(e,"class","bi bi-chevron-down"),p(e,"viewBox","0 0 16 16")},m(o,s){A(o,e,s),d(e,n)},d(o){o&&T(e)}}}function et(t){let e,n;return{c(){e=V("svg"),n=V("path"),p(n,"fill-rule","evenodd"),p(n,"d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"width","18"),p(e,"height","18"),p(e,"fill","currentColor"),p(e,"class","bi bi-chevron-right"),p(e,"viewBox","0 0 16 16")},m(o,s){A(o,e,s),d(e,n)},d(o){o&&T(e)}}}function be(t){let e,n,o,s;function l(r){t[9](r)}let c={};return t[0]!==void 0&&(c.mastodonAccessToken=t[0]),n=new Ke({props:c}),ce.push(()=>je(n,"mastodonAccessToken",l)),{c(){e=k("div"),fe(n.$$.fragment),p(e,"class","p-2")},m(r,i){A(r,e,i),Y(n,e,null),s=!0},p(r,i){const u={};!o&&i&1&&(o=!0,u.mastodonAccessToken=r[0],Fe(()=>o=!1)),n.$set(u)},i(r){s||(P(n.$$.fragment,r),s=!0)},o(r){x(n.$$.fragment,r),s=!1},d(r){r&&T(e),ee(n)}}}function ve(t){let e,n,o=t[13].shout+"",s,l;return{c(){e=k("span"),n=D("「"),s=D(o),l=D("」"),p(e,"class","shout")},m(c,r){A(c,e,r),d(e,n),d(e,s),d(e,l)},p(c,r){r&4&&o!==(o=c[13].shout+"")&&z(s,o)},d(c){c&&T(e)}}}function tt(t){var i;let e,n,o,s,l;function c(){return t[10](t[13])}let r=(((i=t[0])==null?void 0:i.length)??0)>0&&ke(t);return{c(){e=k("div"),n=k("button"),n.textContent=`${t[4]}`,o=I(),r&&r.c(),p(n,"class","share_button"),p(e,"class","d-flex flex-row gap-2")},m(u,_){A(u,e,_),d(e,n),d(e,o),r&&r.m(e,null),s||(l=F(n,"click",c),s=!0)},p(u,_){var b;t=u,(((b=t[0])==null?void 0:b.length)??0)>0?r?r.p(t,_):(r=ke(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(u){u&&T(e),r&&r.d(),s=!1,l()}}}function nt(t){let e;return{c(){e=k("span"),e.textContent="非公開",p(e,"class","share_private")},m(n,o){A(n,e,o)},p:E,d(n){n&&T(e)}}}function ke(t){let e,n,o;function s(){return t[11](t[13])}return{c(){e=k("button"),e.innerHTML='<div class="d-flex flex-row align-items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16"><path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"></path></svg> <span>Toot</span></div>',p(e,"class","share_button")},m(l,c){A(l,e,c),n||(o=F(e,"click",s),n=!0)},p(l,c){t=l},d(l){l&&T(e),n=!1,o()}}}function $e(t){let e,n,o=t[13].venue.name+"",s,l,c,r=t[13].appAddress+"",i,u,_,b=new Date(t[13].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"",f,v,h,O,m=t[13].shout!=null&&ve(t);function a($,y){return $[13].appPrivate?nt:tt}let w=a(t),g=w(t);return{c(){e=k("div"),n=k("span"),s=D(o),l=I(),c=k("span"),i=D(r),u=I(),_=k("span"),f=D(b),v=I(),m&&m.c(),h=I(),g.c(),O=I(),p(n,"class","venue_name"),p(c,"class","venue_address"),p(_,"class","checkin_at"),p(e,"class","checkin_item")},m($,y){A($,e,y),d(e,n),d(n,s),d(e,l),d(e,c),d(c,i),d(e,u),d(e,_),d(_,f),d(e,v),m&&m.m(e,null),d(e,h),g.m(e,null),d(e,O)},p($,y){y&4&&o!==(o=$[13].venue.name+"")&&z(s,o),y&4&&r!==(r=$[13].appAddress+"")&&z(i,r),y&4&&b!==(b=new Date($[13].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"")&&z(f,b),$[13].shout!=null?m?m.p($,y):(m=ve($),m.c(),m.m(e,h)):m&&(m.d(1),m=null),w===(w=a($))&&g?g.p($,y):(g.d(1),g=w($),g&&(g.c(),g.m(e,O)))},d($){$&&T(e),m&&m.d(),g.d()}}}function ot(t){let e,n,o,s,l,c,r,i;const u=[Qe,Ge],_=[];function b(f,v){return f[3]?0:1}return e=b(t),n=_[e]=u[e](t),{c(){n.c(),o=I(),s=k("div"),l=k("button"),l.textContent="Disconnect",p(l,"class","disconnect_button"),p(s,"class","footer")},m(f,v){_[e].m(f,v),A(f,o,v),A(f,s,v),d(s,l),c=!0,r||(i=F(l,"click",t[5]),r=!0)},p(f,[v]){let h=e;e=b(f),e===h?_[e].p(f,v):(ue(),x(_[h],1,1,()=>{_[h]=null}),ae(),n=_[e],n?n.p(f,v):(n=_[e]=u[e](f),n.c()),P(n,1),n.m(o.parentNode,o))},i(f){c||(P(n),c=!0)},o(f){x(n),c=!1},d(f){f&&(T(o),T(s)),_[e].d(f),r=!1,i()}}}function st(t,e,n){var m;const o=localStorage.getItem("sci_accessToken");let s=localStorage.getItem("sci_mastodonAccessToken")??"",l=!1;const c=((m=window.navigator)==null?void 0:m.canShare)!=null?"Share...":"Copy to clipboard";let r=[],i=!0;De(async()=>{console.log("onMount");try{const a=await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${o}&v=20230823&limit=100`);if(!a.ok){u();return}const w=await a.json();n(2,r=w.response.checkins.items),r.map(g=>{g.appAddress=`${g.venue.location.city}, ${g.venue.location.state}`,g.appPrivate=g.visibility==="private"})}finally{n(3,i=!1)}});const u=()=>{confirm("Foursquare から切断しますか？")&&(localStorage.removeItem("sci_accessToken"),window.location.href="./")},_=a=>{(async()=>{const w=await fetch(`https://api.foursquare.com/v2/checkins/${a.id}?oauth_token=${o}&v=20230823`).then(y=>y.json()),$=`${a.shout==null?"":`${a.shout} / `}I'm at ${a.venue.name} in ${a.appAddress} ${w.response.checkin.checkinShortUrl}`;if(!window.navigator.canShare){const y=prompt("クリップボードにコピーしますか？",$);y!=null&&await navigator.clipboard.writeText(y);return}try{await window.navigator.share({text:$})}catch(y){console.log(y)}})()},b=a=>{(async()=>{const w=await fetch(`https://api.foursquare.com/v2/checkins/${a.id}?oauth_token=${o}&v=20230823`).then(N=>N.json()),$=`${a.shout==null?"":`${a.shout} / `}I'm at ${a.venue.name} in ${a.appAddress} ${w.response.checkin.checkinShortUrl}`,y=JSON.parse(localStorage.getItem("sci_mastodonAccessToken")??"{}"),S=y.server,C=y.access_token_response.access_token,M=$,L=await fetch(`https://${S}/api/v1/statuses`,{method:"POST",headers:{Authorization:`Bearer ${C}`,"Content-Type":"application/json"},body:JSON.stringify({status:M})});L.ok?(console.log("toot -> res:",L),alert("投稿しました。")):(console.error("toot -> res:",L),alert(`投稿できませんでした。(${L.status})`))})()},f=()=>{n(1,l=!l)};function v(a){s=a,n(0,s)}return[s,l,r,i,c,u,_,b,f,v,a=>_(a),a=>b(a)]}class lt extends ne{constructor(e){super(),te(this,e,st,ot,Q,{})}}function ct(t){let e,n;return e=new lt({}),{c(){fe(e.$$.fragment)},m(o,s){Y(e,o,s),n=!0},p:E,i(o){n||(P(e.$$.fragment,o),n=!0)},o(o){x(e.$$.fragment,o),n=!1},d(o){ee(e,o)}}}function rt(t){let e,n,o,s;const l=[ut,it],c=[];function r(i,u){return i[1]==null?0:1}return e=r(t),n=c[e]=l[e](t),{c(){n.c(),o=Ae()},m(i,u){c[e].m(i,u),A(i,o,u),s=!0},p:E,i(i){s||(P(n),s=!0)},o(i){x(n),s=!1},d(i){i&&T(o),c[e].d(i)}}}function it(t){let e;return{c(){e=k("span"),e.textContent="Connecting..."},m(n,o){A(n,e,o)},i:E,o:E,d(n){n&&T(e)}}}function ut(t){let e,n;return e=new ze({}),{c(){fe(e.$$.fragment)},m(o,s){Y(e,o,s),n=!0},i(o){n||(P(e.$$.fragment,o),n=!0)},o(o){x(e.$$.fragment,o),n=!1},d(o){ee(e,o)}}}function at(t){let e,n,o,s,l,c;const r=[rt,ct],i=[];function u(_,b){return _[0]==null?0:1}return s=u(t),l=i[s]=r[s](t),{c(){e=k("main"),n=k("h1"),n.textContent="SHARE I'm AT",o=I(),l.c(),p(n,"class","mt-2")},m(_,b){A(_,e,b),d(e,n),d(e,o),i[s].m(e,null),c=!0},p(_,[b]){let f=s;s=u(_),s===f?i[s].p(_,b):(ue(),x(i[f],1,1,()=>{i[f]=null}),ae(),l=i[s],l?l.p(_,b):(l=i[s]=r[s](_),l.c()),P(l,1),l.m(e,null))},i(_){c||(P(l),c=!0)},o(_){x(l),c=!1},d(_){_&&T(e),i[s].d()}}}function ft(t,e,n){let o=localStorage.getItem("sci_accessToken");const l=new URLSearchParams(window.location.search).get("code");return o!=null||(l?(async()=>{const r=await(await fetch(`${G.API_ENDPOINT}/token?code=${l}`)).json(),i=new URL(window.location.href),u=new URLSearchParams(i.search);u.delete("code"),i.hash="",i.search=u.toString(),history.replaceState(null,"",i.toString()),n(0,o=r.access_token),o!=null&&localStorage.setItem("sci_accessToken",o)})():localStorage.removeItem("sci_accessToken")),[o,l]}class dt extends ne{constructor(e){super(),te(this,e,ft,at,Q,{})}}new dt({target:document.getElementById("app")});