import"./modulepreload-polyfill-B5Qt9EMX.js";function A(e,t){const{tag:n,id:i,className:o}=j(e),l=t?document.createElementNS(t,n):document.createElement(n);return i&&(l.id=i),o&&(l.className=o),l}function j(e){const t=e.split(/([.#])/);let n="",i="";for(let o=1;o<t.length;o+=2)switch(t[o]){case".":n+=` ${t[o+1]}`;break;case"#":i=t[o+1]}return{className:n.trim(),tag:t[0]||"div",id:i}}function b(e,...t){let n;const i=typeof e;if(i==="string")n=A(e);else if(i==="function"){const o=e;n=new o(...t)}else throw new Error("At least one argument required");return N(u(n),t),n}const r=b;b.extend=function(...t){return b.bind(this,...t)};function v(e,t,n){const i=t.__redom_lifecycle;if(p(i)){t.__redom_lifecycle={};return}let o=n;for(t.__redom_mounted&&m(t,"onunmount");o;){const l=o.__redom_lifecycle||{};for(const s in i)l[s]&&(l[s]-=i[s]);p(l)&&(o.__redom_lifecycle=null),o=o.parentNode}}function p(e){if(e==null)return!0;for(const t in e)if(e[t])return!1;return!0}const x=["onmount","onremount","onunmount"],C=typeof window<"u"&&"ShadowRoot"in window;function a(e,t,n,i){let o=t;const l=u(e),s=u(o);o===s&&s.__redom_view&&(o=s.__redom_view),o!==s&&(s.__redom_view=o);const c=s.__redom_mounted,d=s.parentNode;return c&&d!==l&&v(o,s,d),l.appendChild(s),V(o,s,l,d),o}function m(e,t){var l;t==="onmount"||t==="onremount"?e.__redom_mounted=!0:t==="onunmount"&&(e.__redom_mounted=!1);const n=e.__redom_lifecycle;if(!n)return;const i=e.__redom_view;let o=0;(l=i==null?void 0:i[t])==null||l.call(i);for(const s in n)s&&o++;if(o){let s=e.firstChild;for(;s;){const c=s.nextSibling;m(s,t),s=c}}}function V(e,t,n,i){t.__redom_lifecycle||(t.__redom_lifecycle={});const o=t.__redom_lifecycle,l=n===i;let s=!1;for(const f of x)l||e!==t&&f in e&&(o[f]=(o[f]||0)+1),o[f]&&(s=!0);if(!s){t.__redom_lifecycle={};return}let c=n,d=!1;for((l||c!=null&&c.__redom_mounted)&&(m(t,l?"onremount":"onmount"),d=!0);c;){const f=c.parentNode;c.__redom_lifecycle||(c.__redom_lifecycle={});const y=c.__redom_lifecycle;for(const _ in o)y[_]=(y[_]||0)+o[_];if(d)break;(c.nodeType===Node.DOCUMENT_NODE||C&&c instanceof ShadowRoot||f!=null&&f.__redom_mounted)&&(m(c,l?"onremount":"onmount"),d=!0),c=f}}function E(e,t,n){const i=u(e);if(typeof t=="object")for(const o in t)h(i,o,t[o]);else h(i,t,n)}function h(e,t,n){e.style[t]=n??""}const P="http://www.w3.org/1999/xlink";function w(e,t,n,i){const o=u(e);if(typeof t=="object")for(const s in t)w(o,s,t[s]);else{const s=o instanceof SVGElement,c=typeof n=="function";if(t==="style"&&typeof n=="object")E(o,n);else if(s&&c)o[t]=n;else if(t==="dataset")S(o,n);else if(!s&&(t in o||c)&&t!=="list")o[t]=n;else{if(s&&t==="xlink"){k(o,n);return}if(t==="class"){L(o,n);return}n==null?o.removeAttribute(t):o.setAttribute(t,n)}}}function L(e,t){t==null?e.removeAttribute("class"):e.classList?e.classList.add(t):typeof e.className=="object"&&e.className&&e.className.baseVal?e.className.baseVal=`${e.className.baseVal} ${t}`.trim():e.className=`${e.className} ${t}`.trim()}function k(e,t,n){if(typeof t=="object")for(const i in t)k(e,i,t[i]);else n!=null?e.setAttributeNS(P,t,n):e.removeAttributeNS(P,t,n)}function S(e,t,n){if(typeof t=="object")for(const i in t)S(e,i,t[i]);else n!=null?e.dataset[t]=n:delete e.dataset[t]}function $(e){return document.createTextNode(e??"")}function N(e,t,n){for(const i of t){if(i!==0&&!i)continue;const o=typeof i;o==="function"?i(e):o==="string"||o==="number"?e.appendChild($(i)):B(u(i))?a(e,i):i.length?N(e,i):o==="object"&&w(e,i,null)}}function u(e){return e.nodeType&&e||!e.el&&e||u(e.el)}function B(e){return e==null?void 0:e.nodeType}class M{constructor(t,n){this.el=r("div.blog-post",[r("h2.blog-title",t),r("p.blog-date",n)])}}class O{constructor(){const t=r("h1","My Blog"),n=r("img",{src:"public/assets/leftArrow.svg",class:"arrowLeft"});n.addEventListener("click",s=>{window.location.href="javascript:history.back()"});const i=r("div.title-container",[n,t]);this.el=r("div.blog-page",[i]);const o=[{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"First Post",date:"Feb 17, 2025"},{title:"Second Post",date:"Feb 15, 2025"},{title:"First Post",date:"Feb 17, 2025"}],l=r("div.blog-posts");o.forEach(s=>a(l,new M(s.title,s.date))),a(this.el,l)}}const F=document.getElementById("blog-container");console.log(F);F&&a(F,new O);
