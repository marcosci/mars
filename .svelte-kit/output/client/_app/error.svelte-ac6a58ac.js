import{S as J,i as w,s as y,e as d,t as v,c as E,a as b,g as P,d as m,f as n,I as R,h as N,k as S,m as q,o as h,J as C}from"./chunks/vendor-b8d6582c.js";function H(r){let f,t=r[1].frame+"",a;return{c(){f=d("pre"),a=v(t)},l(l){f=E(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&N(a,t)},d(l){l&&m(f)}}}function I(r){let f,t=r[1].stack+"",a;return{c(){f=d("pre"),a=v(t)},l(l){f=E(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&N(a,t)},d(l){l&&m(f)}}}function z(r){let f,t,a,l,s=r[1].message+"",c,k,u,p,i=r[1].frame&&H(r),o=r[1].stack&&I(r);return{c(){f=d("h1"),t=v(r[0]),a=S(),l=d("pre"),c=v(s),k=S(),i&&i.c(),u=S(),o&&o.c(),p=q()},l(e){f=E(e,"H1",{});var _=b(f);t=P(_,r[0]),_.forEach(m),a=h(e),l=E(e,"PRE",{});var j=b(l);c=P(j,s),j.forEach(m),k=h(e),i&&i.l(e),u=h(e),o&&o.l(e),p=q()},m(e,_){n(e,f,_),R(f,t),n(e,a,_),n(e,l,_),R(l,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&N(t,e[0]),_&2&&s!==(s=e[1].message+"")&&N(c,s),e[1].frame?i?i.p(e,_):(i=H(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=I(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&m(f),e&&m(a),e&&m(l),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function D({error:r,status:f}){return{props:{error:r,status:f}}}function A(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class F extends J{constructor(f){super();w(this,f,A,z,y,{status:0,error:1})}}export{F as default,D as load};
