import{q as L,h as g,ab as d,ac as k,ad as E}from"./runtime.Dfx-lVnK.js";import{c as I,d as w,f as B,n as M,g as C}from"./store.BSTompDL.js";function D(s,i){if(i){const a=document.body;s.autofocus=!0,L(()=>{document.activeElement===a&&s.focus()})}}function F(s,i,a,_){var c=s.__attributes??(s.__attributes={});g&&(c[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||c[i]!==(c[i]=a)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[d]=a),a==null?s.removeAttribute(i):typeof a!="string"&&O(s).includes(i)?s[i]=a:s.setAttribute(i,a))}function R(s,i,a,_,c=!1,v=!1,G=!1){var f=i||{},T=s.tagName==="OPTION";for(var y in i)y in a||(a[y]=null);var b=O(s),e=s.__attributes??(s.__attributes={}),p=[];for(const r in a){let o=a[r];if(T&&r==="value"&&o==null){s.value=s.__value="",f[r]=o;continue}var h=f[r];if(o!==h){f[r]=o;var A=r[0]+r[1];if(A!=="$$"){if(A==="on"){const n={},l="$$"+r;let t=r.slice(2);var N=C(t);if(I(t)&&(t=t.slice(0,-7),n.capture=!0),!N&&h){if(o!=null)continue;s.removeEventListener(t,f[l],n),f[l]=null}if(o!=null)if(N)s[`__${t}`]=o,B([t]);else{let $=function(q){f[r].call(this,q)};i?f[l]=w(t,s,$,n):p.push([r,o,()=>f[l]=w(t,s,$,n)])}}else if(r==="style"&&o!=null)s.style.cssText=o+"";else if(r==="autofocus")D(s,!!o);else if(r==="__value"||r==="value"&&o!=null)s.value=s[r]=s.__value=o;else{var u=r;c||(u=M(u)),o==null&&!v?(e[r]=null,s.removeAttribute(r)):b.includes(u)&&(v||typeof o!="string")?s[u]=o:typeof o!="function"&&(g&&(u==="src"||u==="href"||u==="srcset")||F(s,u,o))}r==="style"&&"__styles"in s&&(s.__styles={})}}}return i||L(()=>{if(s.isConnected)for(const[r,o,n]of p)f[r]===o&&n()}),f}var z=new Map;function O(s){var i=z.get(s.nodeName);if(i)return i;z.set(s.nodeName,i=[]);for(var a,_=k(s),c=Element.prototype;c!==_;){a=E(_);for(var v in a)a[v].set&&i.push(v);_=k(_)}return i}function S(s){if(!g&&s.loading==="lazy"){var i=s.src;s[d]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[d]!=="eager"&&(s.loading="lazy"),s.src=i})}}export{R as a,S as h,F as s};