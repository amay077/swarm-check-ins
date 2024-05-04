var Ce=Object.defineProperty;var Ee=(t,e,n)=>e in t?Ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>(Ee(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function E(){}function $e(t){return t()}function fe(){return Object.create(null)}function J(t){t.forEach($e)}function we(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Se(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function O(){return M(" ")}function Te(){return M("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ie(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.data!==e&&(t.data=e)}function le(t,e){t.value=e??""}function Z(t,e,n,o){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function de(t,e,n){for(let o=0;o<t.options.length;o+=1){const s=t.options[o];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Oe(t){const e=t.querySelector(":checked");return e&&e.__value}let W;function H(t){W=t}function Ne(){if(!W)throw new Error("Function called outside component initialization");return W}function Me(t){Ne().$$.on_mount.push(t)}const R=[],_e=[];let U=[];const pe=[],De=Promise.resolve();let re=!1;function Le(){re||(re=!0,De.then(Ae))}function X(t){U.push(t)}const se=new Set;let j=0;function Ae(){if(j!==0)return;const t=W;do{try{for(;j<R.length;){const e=R[j];j++,H(e),xe(e.$$)}}catch(e){throw R.length=0,j=0,e}for(H(null),R.length=0,j=0;_e.length;)_e.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];se.has(n)||(se.add(n),n())}U.length=0}while(R.length);for(;pe.length;)pe.pop()();re=!1,se.clear(),H(t)}function xe(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Pe(t){const e=[],n=[];U.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),U=e}const q=new Set;let B;function ce(){B={r:0,c:[],p:B}}function ie(){B.r||J(B.c),B=B.p}function L(t,e){t&&t.i&&(q.delete(t),t.i(e))}function P(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),B.c.push(()=>{q.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function K(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ue(t){t&&t.c()}function Y(t,e,n){const{fragment:o,after_update:s}=t.$$;o&&o.m(e,n),X(()=>{const l=t.$$.on_mount.map($e).filter(we);t.$$.on_destroy?t.$$.on_destroy.push(...l):J(l),t.$$.on_mount=[]}),s.forEach(X)}function ee(t,e){const n=t.$$;n.fragment!==null&&(Pe(n.after_update),J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(t,e){t.$$.dirty[0]===-1&&(R.push(t),Le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,o,s,l,r=null,u=[-1]){const c=W;H(t);const a=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:s,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:fe(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(m,_,...k)=>{const h=k.length?k[0]:_;return a.ctx&&s(a.ctx[m],a.ctx[m]=h)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](h),d&&Fe(t,m)),_}):[],a.update(),d=!0,J(a.before_update),a.fragment=o?o(a.ctx):!1,e.target){if(e.hydrate){const m=Ie(e.target);a.fragment&&a.fragment.l(m),m.forEach(y)}else a.fragment&&a.fragment.c();e.intro&&L(t.$$.fragment),Y(t,e.target,e.anchor),Ae()}H(c)}class ne{constructor(){oe(this,"$$");oe(this,"$$set")}$destroy(){ee(this,1),this.$destroy=E}$on(e,n){if(!we(n))return E;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!Se(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Be);const je={CLIENT_ID:"UBWPEWEM3L1XHICEZ0TJWOHFQ3QZ0KC3XZPHUXRRVWL044ZU",REDIRECT_URI:"https://amay077.github.io/swarm-check-ins/#/auth",API_ENDPOINT:"https://swarm-check-ins-api.netlify.app/.netlify/functions",post_targets:{mastodon:{mastodon_cloud:{name:"Mastodon.cloud",server:"mastodon.cloud",MASTODON_CLIENT_ID:"8G4fffNV00gj5iWLxO7dB91JVnoAY6puZ--9d0atrc4",MASTODON_CLIENT_SECRET:"xW_xpjTdNurUBS-aGMrkx-zsxUeuboaOhs4VufE1LEc"},mstdn_jp:{name:"mstdn.jp",server:"mstdn.jp",MASTODON_CLIENT_ID:"gIAagB7-8KP6XEW1xHW3Wh3UjOH9A-ircwMlZX-80xw",MASTODON_CLIENT_SECRET:"FlJm2oIaLBEJi4uWGk51ke_VPiwYB5lM5vCB5J5Cf9E"}}}},G=je;function Re(t){let e,n,o,s;return{c(){e=b("div"),n=b("button"),n.textContent="Connect to Foursquare",p(n,"class","connect_button"),p(e,"class","connect_container")},m(l,r){T(l,e,r),f(e,n),o||(s=x(n,"click",t[0]),o=!0)},p:E,i:E,o:E,d(l){l&&y(e),o=!1,s()}}}function Ue(t){return[()=>{const n=`https://foursquare.com/oauth2/authenticate?client_id=${G.CLIENT_ID}&response_type=code&redirect_uri=${G.REDIRECT_URI}`;window.location.href=n}]}class Je extends ne{constructor(e){super(),te(this,e,Ue,Re,Q,{})}}function he(t,e,n){const o=t.slice();return o[9]=e[n],o}function He(t){let e,n,o,s,l,r,u,c,a,d,m,_,k,h,C,i,g,w,v,$,S=K(t[3]),I=[];for(let A=0;A<S.length;A+=1)I[A]=me(he(t,S,A));return{c(){var A;e=b("div"),n=b("div"),o=b("span"),o.textContent="1.Mastodon サーバーに接続",s=O(),l=b("div"),r=b("select");for(let N=0;N<I.length;N+=1)I[N].c();u=O(),c=b("button"),c.textContent="接続",a=O(),d=b("div"),m=b("span"),m.textContent="2.認証コードを貼り付けて設定",_=O(),k=b("div"),h=b("input"),C=O(),i=b("button"),g=M("設定"),p(r,"class","form-select form-select-sm"),t[0]===void 0&&X(()=>t[7].call(r)),p(c,"class","btn btn-sm btn-primary"),Z(c,"width","60px"),p(l,"class","d-flex flex-row gap-1"),p(n,"class","d-flex flex-column gap-1"),p(h,"class","form-control form-control-sm"),p(h,"type","text"),p(i,"class","btn btn-sm btn-primary"),i.disabled=w=((A=t[1])==null?void 0:A.length)<=0,Z(i,"width","60px"),p(k,"class","d-flex flex-row gap-1"),p(d,"class","d-flex flex-column gap-1"),p(e,"class","d-flex flex-column gap-1")},m(A,N){T(A,e,N),f(e,n),f(n,o),f(n,s),f(n,l),f(l,r);for(let F=0;F<I.length;F+=1)I[F]&&I[F].m(r,null);de(r,t[0],!0),f(l,u),f(l,c),f(e,a),f(e,d),f(d,m),f(d,_),f(d,k),f(k,h),le(h,t[1]),f(k,C),f(k,i),f(i,g),v||($=[x(r,"change",t[7]),x(c,"click",t[4]),x(h,"input",t[8]),x(i,"click",t[5])],v=!0)},p(A,N){var F;if(N&8){S=K(A[3]);let D;for(D=0;D<S.length;D+=1){const ae=he(A,S,D);I[D]?I[D].p(ae,N):(I[D]=me(ae),I[D].c(),I[D].m(r,null))}for(;D<I.length;D+=1)I[D].d(1);I.length=S.length}N&9&&de(r,A[0]),N&2&&h.value!==A[1]&&le(h,A[1]),N&2&&w!==(w=((F=A[1])==null?void 0:F.length)<=0)&&(i.disabled=w)},d(A){A&&y(e),ye(I,A),v=!1,J($)}}}function We(t){let e,n,o,s,l,r;return{c(){e=b("div"),n=b("span"),n.textContent="接続済み",o=O(),s=b("button"),s.textContent="切断",p(s,"class","btn btn-sm btn-outline-primary"),Z(s,"width","60px"),p(e,"class","d-flex flex-row gap-2 align-items-center")},m(u,c){T(u,e,c),f(e,n),f(e,o),f(e,s),l||(r=x(s,"click",t[6]),l=!0)},p:E,d(u){u&&y(e),l=!1,r()}}}function me(t){let e,n=t[9].name+"",o,s,l=t[9].server+"",r,u;return{c(){e=b("option"),o=M(n),s=M(" (https://"),r=M(l),u=M(")"),e.__value=t[9].server,le(e,e.__value)},m(c,a){T(c,e,a),f(e,o),f(e,s),f(e,r),f(e,u)},p:E,d(c){c&&y(e)}}}function ze(t){let e;function n(l,r){var u;return(((u=l[2])==null?void 0:u.length)??0)>0?We:He}let o=n(t),s=o(t);return{c(){s.c(),e=Te()},m(l,r){s.m(l,r),T(l,e,r)},p(l,[r]){o===(o=n(l))&&s?s.p(l,r):(s.d(1),s=o(l),s&&(s.c(),s.m(e.parentNode,e)))},i:E,o:E,d(l){l&&y(e),s.d(l)}}}function qe(t,e,n){const o=Object.values(G.post_targets.mastodon);let s="mastodon.cloud",l="",r=localStorage.getItem("sci_mastodonAccessToken")??"";const u=()=>{const _=o.find(h=>h.server===s);if(_==null){console.error("onApplyMastodonAccessToken -> settings:",_);return}const k=`https://${_.server}/oauth/authorize?client_id=${_.MASTODON_CLIENT_ID}&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob&scope=write`;window.open(k,"_blank")},c=async()=>{console.log("onApplyMastodonAccessToken -> mastodonCode:",l);const _=o.find(C=>C.server===s);if(_==null){console.error("onApplyMastodonAccessToken -> settings:",_);return}const k=await fetch(`https://${_.server}/oauth/token`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`client_id=${_.MASTODON_CLIENT_ID}&client_secret=${_.MASTODON_CLIENT_SECRET}&grant_type=authorization_code&code=${l}&redirect_uri=urn:ietf:wg:oauth:2.0:oob`});if(!k.ok){console.error("FIXME h_oku 後で消す  -> onApplyMastodonAccessToken -> res:",k);return}const h=await k.json();localStorage.setItem("sci_mastodonAccessToken",JSON.stringify({server:_.server,access_token_response:h})),n(2,r=JSON.stringify(h)),alert("Mastodon に接続しました。toot ボタンで投稿できます。")},a=()=>{localStorage.removeItem("sci_mastodonAccessToken"),n(2,r="")};function d(){s=Oe(this),n(0,s),n(3,o)}function m(){l=this.value,n(1,l)}return[s,l,r,o,u,c,a,d,m]}class Ve extends ne{constructor(e){super(),te(this,e,qe,ze,Q,{})}}function ge(t,e,n){const o=t.slice();return o[12]=e[n],o[14]=n,o}function Ze(t){let e,n,o,s,l,r,u,c,a,d;function m(g,w){return g[0]?Ke:Ge}let _=m(t),k=_(t),h=t[0]&&ve(),C=K(t[1]),i=[];for(let g=0;g<C.length;g+=1)i[g]=ke(ge(t,C,g));return{c(){e=b("div"),n=b("div"),o=b("h5"),o.textContent="Mastodon",s=O(),k.c(),l=O(),h&&h.c(),r=O(),u=b("div");for(let g=0;g<i.length;g+=1)i[g].c();p(o,"class","mb-0"),p(n,"class","d-flex flex-row gap-1 align-items-center"),Z(n,"cursor","pointer"),p(u,"class","checkin_items")},m(g,w){T(g,e,w),f(e,n),f(n,o),f(n,s),k.m(n,null),f(e,l),h&&h.m(e,null),T(g,r,w),T(g,u,w);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(u,null);c=!0,a||(d=x(n,"click",t[8]),a=!0)},p(g,w){if(_!==(_=m(g))&&(k.d(1),k=_(g),k&&(k.c(),k.m(n,null))),g[0]?h?w&1&&L(h,1):(h=ve(),h.c(),L(h,1),h.m(e,null)):h&&(ce(),P(h,1,1,()=>{h=null}),ie()),w&218){C=K(g[1]);let v;for(v=0;v<C.length;v+=1){const $=ge(g,C,v);i[v]?i[v].p($,w):(i[v]=ke($),i[v].c(),i[v].m(u,null))}for(;v<i.length;v+=1)i[v].d(1);i.length=C.length}},i(g){c||(L(h),c=!0)},o(g){P(h),c=!1},d(g){g&&(y(e),y(r),y(u)),k.d(),h&&h.d(),ye(i,g),a=!1,d()}}}function Xe(t){let e;return{c(){e=b("span"),e.textContent="loading..",p(e,"class","loading")},m(n,o){T(n,e,o)},p:E,i:E,o:E,d(n){n&&y(e)}}}function Ke(t){let e,n;return{c(){e=V("svg"),n=V("path"),p(n,"fill-rule","evenodd"),p(n,"d","M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"width","18"),p(e,"height","18"),p(e,"fill","currentColor"),p(e,"class","bi bi-chevron-down"),p(e,"viewBox","0 0 16 16")},m(o,s){T(o,e,s),f(e,n)},d(o){o&&y(e)}}}function Ge(t){let e,n;return{c(){e=V("svg"),n=V("path"),p(n,"fill-rule","evenodd"),p(n,"d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"width","18"),p(e,"height","18"),p(e,"fill","currentColor"),p(e,"class","bi bi-chevron-right"),p(e,"viewBox","0 0 16 16")},m(o,s){T(o,e,s),f(e,n)},d(o){o&&y(e)}}}function ve(t){let e,n,o;return n=new Ve({}),{c(){e=b("div"),ue(n.$$.fragment),p(e,"class","p-2")},m(s,l){T(s,e,l),Y(n,e,null),o=!0},i(s){o||(L(n.$$.fragment,s),o=!0)},o(s){P(n.$$.fragment,s),o=!1},d(s){s&&y(e),ee(n)}}}function be(t){let e,n,o=t[12].shout+"",s,l;return{c(){e=b("span"),n=M("「"),s=M(o),l=M("」"),p(e,"class","shout")},m(r,u){T(r,e,u),f(e,n),f(e,s),f(e,l)},p(r,u){u&2&&o!==(o=r[12].shout+"")&&z(s,o)},d(r){r&&y(e)}}}function Qe(t){var c;let e,n,o,s,l;function r(){return t[9](t[12])}let u=(((c=t[3])==null?void 0:c.length)??0)>0&&et(t);return{c(){e=b("div"),n=b("button"),n.textContent=`${t[4]}`,o=O(),u&&u.c(),p(n,"class","share_button"),p(e,"class","d-flex flex-row gap-2")},m(a,d){T(a,e,d),f(e,n),f(e,o),u&&u.m(e,null),s||(l=x(n,"click",r),s=!0)},p(a,d){var m;t=a,(((m=t[3])==null?void 0:m.length)??0)>0&&u.p(t,d)},d(a){a&&y(e),u&&u.d(),s=!1,l()}}}function Ye(t){let e;return{c(){e=b("span"),e.textContent="非公開",p(e,"class","share_private")},m(n,o){T(n,e,o)},p:E,d(n){n&&y(e)}}}function et(t){let e,n,o;function s(){return t[10](t[12])}return{c(){e=b("button"),e.innerHTML='<div class="d-flex flex-row align-items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16"><path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"></path></svg> <span>Toot</span></div>',p(e,"class","share_button")},m(l,r){T(l,e,r),n||(o=x(e,"click",s),n=!0)},p(l,r){t=l},d(l){l&&y(e),n=!1,o()}}}function ke(t){let e,n,o=t[12].venue.name+"",s,l,r,u=t[12].appAddress+"",c,a,d,m=new Date(t[12].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"",_,k,h,C,i=t[12].shout!=null&&be(t);function g($,S){return $[12].appPrivate?Ye:Qe}let w=g(t),v=w(t);return{c(){e=b("div"),n=b("span"),s=M(o),l=O(),r=b("span"),c=M(u),a=O(),d=b("span"),_=M(m),k=O(),i&&i.c(),h=O(),v.c(),C=O(),p(n,"class","venue_name"),p(r,"class","venue_address"),p(d,"class","checkin_at"),p(e,"class","checkin_item")},m($,S){T($,e,S),f(e,n),f(n,s),f(e,l),f(e,r),f(r,c),f(e,a),f(e,d),f(d,_),f(e,k),i&&i.m(e,null),f(e,h),v.m(e,null),f(e,C)},p($,S){S&2&&o!==(o=$[12].venue.name+"")&&z(s,o),S&2&&u!==(u=$[12].appAddress+"")&&z(c,u),S&2&&m!==(m=new Date($[12].createdAt*1e3).toLocaleString("ja-JP",{timeZone:"Asia/Tokyo"})+"")&&z(_,m),$[12].shout!=null?i?i.p($,S):(i=be($),i.c(),i.m(e,h)):i&&(i.d(1),i=null),w===(w=g($))&&v?v.p($,S):(v.d(1),v=w($),v&&(v.c(),v.m(e,C)))},d($){$&&y(e),i&&i.d(),v.d()}}}function tt(t){let e,n,o,s,l,r,u,c;const a=[Xe,Ze],d=[];function m(_,k){return _[2]?0:1}return e=m(t),n=d[e]=a[e](t),{c(){n.c(),o=O(),s=b("div"),l=b("button"),l.textContent="Disconnect",p(l,"class","disconnect_button"),p(s,"class","footer")},m(_,k){d[e].m(_,k),T(_,o,k),T(_,s,k),f(s,l),r=!0,u||(c=x(l,"click",t[5]),u=!0)},p(_,[k]){let h=e;e=m(_),e===h?d[e].p(_,k):(ce(),P(d[h],1,1,()=>{d[h]=null}),ie(),n=d[e],n?n.p(_,k):(n=d[e]=a[e](_),n.c()),L(n,1),n.m(o.parentNode,o))},i(_){r||(L(n),r=!0)},o(_){P(n),r=!1},d(_){_&&(y(o),y(s)),d[e].d(_),u=!1,c()}}}function nt(t,e,n){var C;const o=localStorage.getItem("sci_accessToken");let s=localStorage.getItem("sci_mastodonAccessToken")??"",l=!1;const r=((C=window.navigator)==null?void 0:C.canShare)!=null?"Share...":"Copy to clipboard";let u=[],c=!0;Me(async()=>{console.log("onMount");try{const i=await fetch(`https://api.foursquare.com/v2/users/self/checkins?oauth_token=${o}&v=20230823&limit=100`);if(!i.ok){a();return}const g=await i.json();n(1,u=g.response.checkins.items),u.map(w=>{w.appAddress=`${w.venue.location.city}, ${w.venue.location.state}`,w.appPrivate=w.visibility==="private"})}finally{n(2,c=!1)}});const a=()=>{confirm("Foursquare から切断しますか？")&&(localStorage.removeItem("sci_accessToken"),window.location.href="./")},d=i=>{(async()=>{const g=await fetch(`https://api.foursquare.com/v2/checkins/${i.id}?oauth_token=${o}&v=20230823`).then($=>$.json()),v=`${i.shout==null?"":`${i.shout} / `}I'm at ${i.venue.name} in ${i.appAddress} ${g.response.checkin.checkinShortUrl}`;if(!window.navigator.canShare){const $=prompt("クリップボードにコピーしますか？",v);$!=null&&await navigator.clipboard.writeText($);return}try{await window.navigator.share({text:v})}catch($){console.log($)}})()},m=i=>{(async()=>{const g=await fetch(`https://api.foursquare.com/v2/checkins/${i.id}?oauth_token=${o}&v=20230823`).then(F=>F.json()),v=`${i.shout==null?"":`${i.shout} / `}I'm at ${i.venue.name} in ${i.appAddress} ${g.response.checkin.checkinShortUrl}`,$=JSON.parse(localStorage.getItem("sci_mastodonAccessToken")??"{}"),S=$.server,I=$.access_token_response.access_token,A=v,N=await fetch(`https://${S}/api/v1/statuses`,{method:"POST",headers:{Authorization:`Bearer ${I}`,"Content-Type":"application/json"},body:JSON.stringify({status:A})});N.ok?(console.log("toot -> res:",N),alert("投稿しました。")):(console.error("toot -> res:",N),alert(`投稿できませんでした。(${N.status})`))})()};return[l,u,c,s,r,a,d,m,()=>{n(0,l=!l)},i=>d(i),i=>m(i)]}class ot extends ne{constructor(e){super(),te(this,e,nt,tt,Q,{})}}function st(t){let e,n;return e=new ot({}),{c(){ue(e.$$.fragment)},m(o,s){Y(e,o,s),n=!0},p:E,i(o){n||(L(e.$$.fragment,o),n=!0)},o(o){P(e.$$.fragment,o),n=!1},d(o){ee(e,o)}}}function lt(t){let e,n,o,s;const l=[ct,rt],r=[];function u(c,a){return c[1]==null?0:1}return e=u(t),n=r[e]=l[e](t),{c(){n.c(),o=Te()},m(c,a){r[e].m(c,a),T(c,o,a),s=!0},p:E,i(c){s||(L(n),s=!0)},o(c){P(n),s=!1},d(c){c&&y(o),r[e].d(c)}}}function rt(t){let e;return{c(){e=b("span"),e.textContent="Connecting..."},m(n,o){T(n,e,o)},i:E,o:E,d(n){n&&y(e)}}}function ct(t){let e,n;return e=new Je({}),{c(){ue(e.$$.fragment)},m(o,s){Y(e,o,s),n=!0},i(o){n||(L(e.$$.fragment,o),n=!0)},o(o){P(e.$$.fragment,o),n=!1},d(o){ee(e,o)}}}function it(t){let e,n,o,s,l,r;const u=[lt,st],c=[];function a(d,m){return d[0]==null?0:1}return s=a(t),l=c[s]=u[s](t),{c(){e=b("main"),n=b("h1"),n.textContent="SHARE I'm AT",o=O(),l.c(),p(n,"class","mt-2")},m(d,m){T(d,e,m),f(e,n),f(e,o),c[s].m(e,null),r=!0},p(d,[m]){let _=s;s=a(d),s===_?c[s].p(d,m):(ce(),P(c[_],1,1,()=>{c[_]=null}),ie(),l=c[s],l?l.p(d,m):(l=c[s]=u[s](d),l.c()),L(l,1),l.m(e,null))},i(d){r||(L(l),r=!0)},o(d){P(l),r=!1},d(d){d&&y(e),c[s].d()}}}function ut(t,e,n){let o=localStorage.getItem("sci_accessToken");const l=new URLSearchParams(window.location.search).get("code");return o!=null||(l?(async()=>{const u=await(await fetch(`${G.API_ENDPOINT}/token?code=${l}`)).json(),c=new URL(window.location.href),a=new URLSearchParams(c.search);a.delete("code"),c.hash="",c.search=a.toString(),history.replaceState(null,"",c.toString()),n(0,o=u.access_token),o!=null&&localStorage.setItem("sci_accessToken",o)})():localStorage.removeItem("sci_accessToken")),[o,l]}class at extends ne{constructor(e){super(),te(this,e,ut,it,Q,{})}}new at({target:document.getElementById("app")});