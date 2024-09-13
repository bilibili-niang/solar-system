(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jo(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const Ze={},Ii=[],cn=()=>{},Zu=()=>!1,gr=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Yo=i=>i.startsWith("onUpdate:"),gt=Object.assign,$o=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ku=Object.prototype.hasOwnProperty,je=(i,e)=>Ku.call(i,e),Fe=Array.isArray,os=i=>_r(i)==="[object Map]",Ju=i=>_r(i)==="[object Set]",Ne=i=>typeof i=="function",ht=i=>typeof i=="string",ki=i=>typeof i=="symbol",st=i=>i!==null&&typeof i=="object",yc=i=>(st(i)||Ne(i))&&Ne(i.then)&&Ne(i.catch),Qu=Object.prototype.toString,_r=i=>Qu.call(i),ef=i=>_r(i).slice(8,-1),tf=i=>_r(i)==="[object Object]",Zo=i=>ht(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,as=jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xr=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},nf=/-(\w)/g,ii=xr(i=>i.replace(nf,(e,t)=>t?t.toUpperCase():"")),sf=/\B([A-Z])/g,fi=xr(i=>i.replace(sf,"-$1").toLowerCase()),bc=xr(i=>i.charAt(0).toUpperCase()+i.slice(1)),Dr=xr(i=>i?`on${bc(i)}`:""),Nn=(i,e)=>!Object.is(i,e),Ir=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Sc=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},rf=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Ea;const wc=()=>Ea||(Ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ko(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=ht(n)?cf(n):Ko(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(ht(i)||st(i))return i}const of=/;(?![^(]*\))/g,af=/:([^]+)/,lf=/\/\*[^]*?\*\//g;function cf(i){const e={};return i.replace(lf,"").split(of).forEach(t=>{if(t){const n=t.split(af);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Jo(i){let e="";if(ht(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=Jo(i[t]);n&&(e+=n+" ")}else if(st(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const uf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ff=jo(uf);function Ec(i){return!!i||i===""}/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class hf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ut;try{return Ut=this,e()}finally{Ut=t}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function df(){return Ut}let $e;const Fr=new WeakSet;class Tc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&Ut.active&&Ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fr.has(this)&&(Fr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=ls,ls=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ta(this),Cc(this);const e=$e,t=Qt;$e=this,Qt=!0;try{return this.fn()}finally{Lc(this),$e=e,Qt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ta(e);this.deps=this.depsTail=void 0,Ta(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){To(this)&&this.run()}get dirty(){return To(this)}}let Ac=0,ls;function Qo(){Ac++}function ea(){if(--Ac>0)return;let i;for(;ls;){let e=ls;for(ls=void 0;e;){const t=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function Cc(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lc(i){let e,t=i.depsTail;for(let n=t;n;n=n.prevDep)n.version===-1?(n===t&&(t=n.prevDep),ta(n),pf(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0;i.deps=e,i.depsTail=t}function To(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Pc(e.dep.computed)||e.dep.version!==e.version)return!0;return!!i._dirty}function Pc(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===ps))return;i.globalVersion=ps;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&!To(i)){i.flags&=-3;return}const t=$e,n=Qt;$e=i,Qt=!0;try{Cc(i);const s=i.fn(i._value);(e.version===0||Nn(s,i._value))&&(i._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=t,Qt=n,Lc(i),i.flags&=-3}}function ta(i){const{dep:e,prevSub:t,nextSub:n}=i;if(t&&(t.nextSub=n,i.prevSub=void 0),n&&(n.prevSub=t,i.nextSub=void 0),e.subs===i&&(e.subs=t),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)ta(s)}}function pf(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let Qt=!0;const Rc=[];function Un(){Rc.push(Qt),Qt=!1}function zn(){const i=Rc.pop();Qt=i===void 0?!0:i}function Ta(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=$e;$e=void 0;try{e()}finally{$e=t}}}let ps=0;class na{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!$e||!Qt||$e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$e)t=this.activeLink={dep:this,sub:$e,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},$e.deps?(t.prevDep=$e.depsTail,$e.depsTail.nextDep=t,$e.depsTail=t):$e.deps=$e.depsTail=t,$e.flags&4&&Dc(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=$e.depsTail,t.nextDep=void 0,$e.depsTail.nextDep=t,$e.depsTail=t,$e.deps===t&&($e.deps=n)}return t}trigger(e){this.version++,ps++,this.notify(e)}notify(e){Qo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()}finally{ea()}}}function Dc(i){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Dc(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}const Ao=new WeakMap,ei=Symbol(""),Co=Symbol(""),ms=Symbol("");function _t(i,e,t){if(Qt&&$e){let n=Ao.get(i);n||Ao.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=new na),s.track()}}function bn(i,e,t,n,s,r){const a=Ao.get(i);if(!a){ps++;return}const o=l=>{l&&l.trigger()};if(Qo(),e==="clear")a.forEach(o);else{const l=Fe(i),u=l&&Zo(t);if(l&&t==="length"){const c=Number(n);a.forEach((f,h)=>{(h==="length"||h===ms||!ki(h)&&h>=c)&&o(f)})}else switch(t!==void 0&&o(a.get(t)),u&&o(a.get(ms)),e){case"add":l?u&&o(a.get("length")):(o(a.get(ei)),os(i)&&o(a.get(Co)));break;case"delete":l||(o(a.get(ei)),os(i)&&o(a.get(Co)));break;case"set":os(i)&&o(a.get(ei));break}}ea()}function di(i){const e=Ye(i);return e===i?e:(_t(e,"iterate",ms),en(i)?e:e.map(St))}function ia(i){return _t(i=Ye(i),"iterate",ms),i}const mf={__proto__:null,[Symbol.iterator](){return Or(this,Symbol.iterator,St)},concat(...i){return di(this).concat(...i.map(e=>Fe(e)?di(e):e))},entries(){return Or(this,"entries",i=>(i[1]=St(i[1]),i))},every(i,e){return dn(this,"every",i,e,void 0,arguments)},filter(i,e){return dn(this,"filter",i,e,t=>t.map(St),arguments)},find(i,e){return dn(this,"find",i,e,St,arguments)},findIndex(i,e){return dn(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return dn(this,"findLast",i,e,St,arguments)},findLastIndex(i,e){return dn(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return dn(this,"forEach",i,e,void 0,arguments)},includes(...i){return Nr(this,"includes",i)},indexOf(...i){return Nr(this,"indexOf",i)},join(i){return di(this).join(i)},lastIndexOf(...i){return Nr(this,"lastIndexOf",i)},map(i,e){return dn(this,"map",i,e,void 0,arguments)},pop(){return ji(this,"pop")},push(...i){return ji(this,"push",i)},reduce(i,...e){return Aa(this,"reduce",i,e)},reduceRight(i,...e){return Aa(this,"reduceRight",i,e)},shift(){return ji(this,"shift")},some(i,e){return dn(this,"some",i,e,void 0,arguments)},splice(...i){return ji(this,"splice",i)},toReversed(){return di(this).toReversed()},toSorted(i){return di(this).toSorted(i)},toSpliced(...i){return di(this).toSpliced(...i)},unshift(...i){return ji(this,"unshift",i)},values(){return Or(this,"values",St)}};function Or(i,e,t){const n=ia(i),s=n[e]();return n!==i&&!en(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const gf=Array.prototype;function dn(i,e,t,n,s,r){const a=ia(i),o=a!==i&&!en(i),l=a[e];if(l!==gf[e]){const f=l.apply(i,r);return o?St(f):f}let u=t;a!==i&&(o?u=function(f,h){return t.call(this,St(f),h,i)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,i)}));const c=l.call(a,u,n);return o&&s?s(c):c}function Aa(i,e,t,n){const s=ia(i);let r=t;return s!==i&&(en(i)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,i)}):r=function(a,o,l){return t.call(this,a,St(o),l,i)}),s[e](r,...n)}function Nr(i,e,t){const n=Ye(i);_t(n,"iterate",ms);const s=n[e](...t);return(s===-1||s===!1)&&la(t[0])?(t[0]=Ye(t[0]),n[e](...t)):s}function ji(i,e,t=[]){Un(),Qo();const n=Ye(i)[e].apply(i,t);return ea(),zn(),n}const _f=jo("__proto__,__v_isRef,__isVue"),Ic=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ki));function xf(i){ki(i)||(i=String(i));const e=Ye(this);return _t(e,"has",i),e.hasOwnProperty(i)}class Fc{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?Rf:zc:r?Uc:Nc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=Fe(e);if(!s){let l;if(a&&(l=mf[t]))return l;if(t==="hasOwnProperty")return xf}const o=Reflect.get(e,t,mt(e)?e:n);return(ki(t)?Ic.has(t):_f(t))||(s||_t(e,"get",t),r)?o:mt(o)?a&&Zo(t)?o:o.value:st(o)?s?Bc(o):oa(o):o}}class Oc extends Fc{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const l=si(r);if(!en(n)&&!si(n)&&(r=Ye(r),n=Ye(n)),!Fe(e)&&mt(r)&&!mt(n))return l?!1:(r.value=n,!0)}const a=Fe(e)&&Zo(t)?Number(t)<e.length:je(e,t),o=Reflect.set(e,t,n,mt(e)?e:s);return e===Ye(s)&&(a?Nn(n,r)&&bn(e,"set",t,n):bn(e,"add",t,n)),o}deleteProperty(e,t){const n=je(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&bn(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!ki(t)||!Ic.has(t))&&_t(e,"has",t),n}ownKeys(e){return _t(e,"iterate",Fe(e)?"length":ei),Reflect.ownKeys(e)}}class vf extends Fc{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Mf=new Oc,yf=new vf,bf=new Oc(!0);const sa=i=>i,vr=i=>Reflect.getPrototypeOf(i);function Ds(i,e,t=!1,n=!1){i=i.__v_raw;const s=Ye(i),r=Ye(e);t||(Nn(e,r)&&_t(s,"get",e),_t(s,"get",r));const{has:a}=vr(s),o=n?sa:t?ca:St;if(a.call(s,e))return o(i.get(e));if(a.call(s,r))return o(i.get(r));i!==s&&i.get(e)}function Is(i,e=!1){const t=this.__v_raw,n=Ye(t),s=Ye(i);return e||(Nn(i,s)&&_t(n,"has",i),_t(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Fs(i,e=!1){return i=i.__v_raw,!e&&_t(Ye(i),"iterate",ei),Reflect.get(i,"size",i)}function Ca(i,e=!1){!e&&!en(i)&&!si(i)&&(i=Ye(i));const t=Ye(this);return vr(t).has.call(t,i)||(t.add(i),bn(t,"add",i,i)),this}function La(i,e,t=!1){!t&&!en(e)&&!si(e)&&(e=Ye(e));const n=Ye(this),{has:s,get:r}=vr(n);let a=s.call(n,i);a||(i=Ye(i),a=s.call(n,i));const o=r.call(n,i);return n.set(i,e),a?Nn(e,o)&&bn(n,"set",i,e):bn(n,"add",i,e),this}function Pa(i){const e=Ye(this),{has:t,get:n}=vr(e);let s=t.call(e,i);s||(i=Ye(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&bn(e,"delete",i,void 0),r}function Ra(){const i=Ye(this),e=i.size!==0,t=i.clear();return e&&bn(i,"clear",void 0,void 0),t}function Os(i,e){return function(n,s){const r=this,a=r.__v_raw,o=Ye(a),l=e?sa:i?ca:St;return!i&&_t(o,"iterate",ei),a.forEach((u,c)=>n.call(s,l(u),l(c),r))}}function Ns(i,e,t){return function(...n){const s=this.__v_raw,r=Ye(s),a=os(r),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,u=s[i](...n),c=t?sa:e?ca:St;return!e&&_t(r,"iterate",l?Co:ei),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function En(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Sf(){const i={get(r){return Ds(this,r)},get size(){return Fs(this)},has:Is,add:Ca,set:La,delete:Pa,clear:Ra,forEach:Os(!1,!1)},e={get(r){return Ds(this,r,!1,!0)},get size(){return Fs(this)},has:Is,add(r){return Ca.call(this,r,!0)},set(r,a){return La.call(this,r,a,!0)},delete:Pa,clear:Ra,forEach:Os(!1,!0)},t={get(r){return Ds(this,r,!0)},get size(){return Fs(this,!0)},has(r){return Is.call(this,r,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Os(!0,!1)},n={get(r){return Ds(this,r,!0,!0)},get size(){return Fs(this,!0)},has(r){return Is.call(this,r,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Ns(r,!1,!1),t[r]=Ns(r,!0,!1),e[r]=Ns(r,!1,!0),n[r]=Ns(r,!0,!0)}),[i,t,e,n]}const[wf,Ef,Tf,Af]=Sf();function ra(i,e){const t=e?i?Af:Tf:i?Ef:wf;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(je(t,s)&&s in n?t:n,s,r)}const Cf={get:ra(!1,!1)},Lf={get:ra(!1,!0)},Pf={get:ra(!0,!1)};const Nc=new WeakMap,Uc=new WeakMap,zc=new WeakMap,Rf=new WeakMap;function Df(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function If(i){return i.__v_skip||!Object.isExtensible(i)?0:Df(ef(i))}function oa(i){return si(i)?i:aa(i,!1,Mf,Cf,Nc)}function Ff(i){return aa(i,!1,bf,Lf,Uc)}function Bc(i){return aa(i,!0,yf,Pf,zc)}function aa(i,e,t,n,s){if(!st(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const a=If(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return s.set(i,o),o}function cs(i){return si(i)?cs(i.__v_raw):!!(i&&i.__v_isReactive)}function si(i){return!!(i&&i.__v_isReadonly)}function en(i){return!!(i&&i.__v_isShallow)}function la(i){return i?!!i.__v_raw:!1}function Ye(i){const e=i&&i.__v_raw;return e?Ye(e):i}function Of(i){return!je(i,"__v_skip")&&Object.isExtensible(i)&&Sc(i,"__v_skip",!0),i}const St=i=>st(i)?oa(i):i,ca=i=>st(i)?Bc(i):i;function mt(i){return i?i.__v_isRef===!0:!1}function Nf(i){return Uf(i,!1)}function Uf(i,e){return mt(i)?i:new zf(i,e)}class zf{constructor(e,t){this.dep=new na,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ye(e),this._value=t?e:St(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||en(e)||si(e);e=n?e:Ye(e),Nn(e,t)&&(this._rawValue=e,this._value=n?e:St(e),this.dep.trigger())}}function Bf(i){return mt(i)?i.value:i}const Gf={get:(i,e,t)=>e==="__v_raw"?i:Bf(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return mt(s)&&!mt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Gc(i){return cs(i)?i:new Proxy(i,Gf)}class Vf{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new na(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ps-1,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){this.flags|=16,$e!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Pc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hf(i,e,t=!1){let n,s;return Ne(i)?n=i:(n=i.get,s=i.set),new Vf(n,s,t)}const Us={},hr=new WeakMap;let Yn;function kf(i,e=!1,t=Yn){if(t){let n=hr.get(t);n||hr.set(t,n=[]),n.push(i)}}function Wf(i,e,t=Ze){const{immediate:n,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,u=S=>s?S:en(S)||s===!1||s===0?In(S,1):In(S);let c,f,h,m,v=!1,p=!1;if(mt(i)?(f=()=>i.value,v=en(i)):cs(i)?(f=()=>u(i),v=!0):Fe(i)?(p=!0,v=i.some(S=>cs(S)||en(S)),f=()=>i.map(S=>{if(mt(S))return S.value;if(cs(S))return u(S);if(Ne(S))return l?l(S,2):S()})):Ne(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){Un();try{h()}finally{zn()}}const S=Yn;Yn=c;try{return l?l(i,3,[m]):i(m)}finally{Yn=S}}:f=cn,e&&s){const S=f,y=s===!0?1/0:s;f=()=>In(S(),y)}const d=df(),x=()=>{c.stop(),d&&$o(d.effects,c)};if(r)if(e){const S=e;e=(...y)=>{S(...y),x()}}else{const S=f;f=()=>{S(),x()}}let T=p?new Array(i.length).fill(Us):Us;const b=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(e){const y=c.run();if(s||v||(p?y.some((D,H)=>Nn(D,T[H])):Nn(y,T))){h&&h();const D=Yn;Yn=c;try{const H=[y,T===Us?void 0:p&&T[0]===Us?[]:T,m];l?l(e,3,H):e(...H),T=y}finally{Yn=D}}}else c.run()};return o&&o(b),c=new Tc(f),c.scheduler=a?()=>a(b,!1):b,m=S=>kf(S,!1,c),h=c.onStop=()=>{const S=hr.get(c);if(S){if(l)l(S,4);else for(const y of S)y();hr.delete(c)}},e?n?b(!0):T=c.run():a?a(b.bind(null,!0),!0):c.run(),x.pause=c.pause.bind(c),x.resume=c.resume.bind(c),x.stop=x,x}function In(i,e=1/0,t){if(e<=0||!st(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,mt(i))In(i.value,e,t);else if(Fe(i))for(let n=0;n<i.length;n++)In(i[n],e,t);else if(Ju(i)||os(i))i.forEach(n=>{In(n,e,t)});else if(tf(i)){for(const n in i)In(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&In(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ts(i,e,t,n){try{return n?i(...n):i()}catch(s){Mr(s,e,t)}}function un(i,e,t,n){if(Ne(i)){const s=Ts(i,e,t,n);return s&&yc(s)&&s.catch(r=>{Mr(r,e,t)}),s}if(Fe(i)){const s=[];for(let r=0;r<i.length;r++)s.push(un(i[r],e,t,n));return s}}function Mr(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ze;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](i,l,u)===!1)return}o=o.parent}if(r){Un(),Ts(r,null,10,[i,l,u]),zn();return}}qf(i,t,s,n,a)}function qf(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}let gs=!1,Lo=!1;const wt=[];let nn=0;const Fi=[];let Rn=null,Pi=0;const Vc=Promise.resolve();let ua=null;function Hc(i){const e=ua||Vc;return i?e.then(this?i.bind(this):i):e}function Xf(i){let e=gs?nn+1:0,t=wt.length;for(;e<t;){const n=e+t>>>1,s=wt[n],r=_s(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function fa(i){if(!(i.flags&1)){const e=_s(i),t=wt[wt.length-1];!t||!(i.flags&2)&&e>=_s(t)?wt.push(i):wt.splice(Xf(e),0,i),i.flags|=1,kc()}}function kc(){!gs&&!Lo&&(Lo=!0,ua=Vc.then(qc))}function jf(i){Fe(i)?Fi.push(...i):Rn&&i.id===-1?Rn.splice(Pi+1,0,i):i.flags&1||(Fi.push(i),i.flags|=1),kc()}function Da(i,e,t=gs?nn+1:0){for(;t<wt.length;t++){const n=wt[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;wt.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&=-2}}}function Wc(i){if(Fi.length){const e=[...new Set(Fi)].sort((t,n)=>_s(t)-_s(n));if(Fi.length=0,Rn){Rn.push(...e);return}for(Rn=e,Pi=0;Pi<Rn.length;Pi++){const t=Rn[Pi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Rn=null,Pi=0}}const _s=i=>i.id==null?i.flags&2?-1:1/0:i.id;function qc(i){Lo=!1,gs=!0;try{for(nn=0;nn<wt.length;nn++){const e=wt[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ts(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;nn<wt.length;nn++){const e=wt[nn];e&&(e.flags&=-2)}nn=0,wt.length=0,Wc(),gs=!1,ua=null,(wt.length||Fi.length)&&qc()}}let ln=null,Xc=null;function dr(i){const e=ln;return ln=i,Xc=i&&i.type.__scopeId||null,e}function Yf(i,e=ln,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Ga(-1);const r=dr(e);let a;try{a=i(...s)}finally{dr(r),n._d&&Ga(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function kn(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[n];l&&(Un(),un(l,t,8,[i.el,o,i,e]),zn())}}const $f=Symbol("_vte"),Zf=i=>i.__isTeleport;function ha(i,e){i.shapeFlag&6&&i.component?(i.transition=e,ha(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function jc(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Po(i,e,t,n,s=!1){if(Fe(i)){i.forEach((v,p)=>Po(v,e&&(Fe(e)?e[p]:e),t,n,s));return}if(us(n)&&!s)return;const r=n.shapeFlag&4?ga(n.component):n.el,a=s?null:r,{i:o,r:l}=i,u=e&&e.r,c=o.refs===Ze?o.refs={}:o.refs,f=o.setupState,h=Ye(f),m=f===Ze?()=>!1:v=>je(h,v);if(u!=null&&u!==l&&(ht(u)?(c[u]=null,m(u)&&(f[u]=null)):mt(u)&&(u.value=null)),Ne(l))Ts(l,o,12,[a,c]);else{const v=ht(l),p=mt(l);if(v||p){const d=()=>{if(i.f){const x=v?m(l)?f[l]:c[l]:l.value;s?Fe(x)&&$o(x,r):Fe(x)?x.includes(r)||x.push(r):v?(c[l]=[r],m(l)&&(f[l]=c[l])):(l.value=[r],i.k&&(c[i.k]=l.value))}else v?(c[l]=a,m(l)&&(f[l]=a)):p&&(l.value=a,i.k&&(c[i.k]=a))};a?(d.id=-1,Ot(d,t)):d()}}}const us=i=>!!i.type.__asyncLoader,Yc=i=>i.type.__isKeepAlive;function Kf(i,e){$c(i,"a",e)}function Jf(i,e){$c(i,"da",e)}function $c(i,e,t=Tt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(yr(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Yc(s.parent.vnode)&&Qf(n,e,t,s),s=s.parent}}function Qf(i,e,t,n){const s=yr(e,i,n,!0);Zc(()=>{$o(n[e],s)},t)}function yr(i,e,t=Tt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...a)=>{Un();const o=As(t),l=un(e,t,i,a);return o(),zn(),l});return n?s.unshift(r):s.push(r),r}}const wn=i=>(e,t=Tt)=>{(!wr||i==="sp")&&yr(i,(...n)=>e(...n),t)},eh=wn("bm"),th=wn("m"),nh=wn("bu"),ih=wn("u"),sh=wn("bum"),Zc=wn("um"),rh=wn("sp"),oh=wn("rtg"),ah=wn("rtc");function lh(i,e=Tt){yr("ec",i,e)}const ch=Symbol.for("v-ndc"),Ro=i=>i?_u(i)?ga(i):Ro(i.parent):null,fs=gt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ro(i.parent),$root:i=>Ro(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>da(i),$forceUpdate:i=>i.f||(i.f=()=>{fa(i.update)}),$nextTick:i=>i.n||(i.n=Hc.bind(i.proxy)),$watch:i=>Rh.bind(i)}),Ur=(i,e)=>i!==Ze&&!i.__isScriptSetup&&je(i,e),uh={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:a,type:o,appContext:l}=i;let u;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ur(n,e))return a[e]=1,n[e];if(s!==Ze&&je(s,e))return a[e]=2,s[e];if((u=i.propsOptions[0])&&je(u,e))return a[e]=3,r[e];if(t!==Ze&&je(t,e))return a[e]=4,t[e];Do&&(a[e]=0)}}const c=fs[e];let f,h;if(c)return e==="$attrs"&&_t(i.attrs,"get",""),c(i);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ze&&je(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Ur(s,e)?(s[e]=t,!0):n!==Ze&&je(n,e)?(n[e]=t,!0):je(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},a){let o;return!!t[a]||i!==Ze&&je(i,a)||Ur(e,a)||(o=r[0])&&je(o,a)||je(n,a)||je(fs,a)||je(s.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:je(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Ia(i){return Fe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Do=!0;function fh(i){const e=da(i),t=i.proxy,n=i.ctx;Do=!1,e.beforeCreate&&Fa(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:p,deactivated:d,beforeDestroy:x,beforeUnmount:T,destroyed:b,unmounted:S,render:y,renderTracked:D,renderTriggered:H,errorCaptured:M,serverPrefetch:L,expose:B,inheritAttrs:ee,components:de,directives:F,filters:R}=e;if(u&&hh(u,n,null),a)for(const G in a){const I=a[G];Ne(I)&&(n[G]=I.bind(t))}if(s){const G=s.call(t,t);st(G)&&(i.data=oa(G))}if(Do=!0,r)for(const G in r){const I=r[G],Y=Ne(I)?I.bind(t,t):Ne(I.get)?I.get.bind(t,t):cn,re=!Ne(I)&&Ne(I.set)?I.set.bind(t):cn,U=ed({get:Y,set:re});Object.defineProperty(n,G,{enumerable:!0,configurable:!0,get:()=>U.value,set:N=>U.value=N})}if(o)for(const G in o)Kc(o[G],n,t,G);if(l){const G=Ne(l)?l.call(t):l;Reflect.ownKeys(G).forEach(I=>{xh(I,G[I])})}c&&Fa(c,i,"c");function Z(G,I){Fe(I)?I.forEach(Y=>G(Y.bind(t))):I&&G(I.bind(t))}if(Z(eh,f),Z(th,h),Z(nh,m),Z(ih,v),Z(Kf,p),Z(Jf,d),Z(lh,M),Z(ah,D),Z(oh,H),Z(sh,T),Z(Zc,S),Z(rh,L),Fe(B))if(B.length){const G=i.exposed||(i.exposed={});B.forEach(I=>{Object.defineProperty(G,I,{get:()=>t[I],set:Y=>t[I]=Y})})}else i.exposed||(i.exposed={});y&&i.render===cn&&(i.render=y),ee!=null&&(i.inheritAttrs=ee),de&&(i.components=de),F&&(i.directives=F),L&&jc(i)}function hh(i,e,t=cn){Fe(i)&&(i=Io(i));for(const n in i){const s=i[n];let r;st(s)?"default"in s?r=ar(s.from||n,s.default,!0):r=ar(s.from||n):r=ar(s),mt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[n]=r}}function Fa(i,e,t){un(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Kc(i,e,t,n){let s=n.includes(".")?fu(t,n):()=>t[n];if(ht(i)){const r=e[i];Ne(r)&&Br(s,r)}else if(Ne(i))Br(s,i.bind(t));else if(st(i))if(Fe(i))i.forEach(r=>Kc(r,e,t,n));else{const r=Ne(i.handler)?i.handler.bind(t):e[i.handler];Ne(r)&&Br(s,r,i)}}function da(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=i.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(u=>pr(l,u,a,!0)),pr(l,e,a)),st(e)&&r.set(e,l),l}function pr(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&pr(i,r,t,!0),s&&s.forEach(a=>pr(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=dh[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const dh={data:Oa,props:Na,emits:Na,methods:is,computed:is,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:is,directives:is,watch:mh,provide:Oa,inject:ph};function Oa(i,e){return e?i?function(){return gt(Ne(i)?i.call(this,this):i,Ne(e)?e.call(this,this):e)}:e:i}function ph(i,e){return is(Io(i),Io(e))}function Io(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Mt(i,e){return i?[...new Set([].concat(i,e))]:e}function is(i,e){return i?gt(Object.create(null),i,e):e}function Na(i,e){return i?Fe(i)&&Fe(e)?[...new Set([...i,...e])]:gt(Object.create(null),Ia(i),Ia(e??{})):e}function mh(i,e){if(!i)return e;if(!e)return i;const t=gt(Object.create(null),i);for(const n in e)t[n]=Mt(i[n],e[n]);return t}function Jc(){return{app:null,config:{isNativeTag:Zu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gh=0;function _h(i,e){return function(n,s=null){Ne(n)||(n=gt({},n)),s!=null&&!st(s)&&(s=null);const r=Jc(),a=new WeakSet,o=[];let l=!1;const u=r.app={_uid:gh++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:td,get config(){return r.config},set config(c){},use(c,...f){return a.has(c)||(c&&Ne(c.install)?(a.add(c),c.install(u,...f)):Ne(c)&&(a.add(c),c(u,...f))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,f){return f?(r.components[c]=f,u):r.components[c]},directive(c,f){return f?(r.directives[c]=f,u):r.directives[c]},mount(c,f,h){if(!l){const m=u._ceVNode||Fn(n,s);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(m,c):i(m,c,h),l=!0,u._container=c,c.__vue_app__=u,ga(m.component)}},onUnmount(c){o.push(c)},unmount(){l&&(un(o,u._instance,16),i(null,u._container),delete u._container.__vue_app__)},provide(c,f){return r.provides[c]=f,u},runWithContext(c){const f=Oi;Oi=u;try{return c()}finally{Oi=f}}};return u}}let Oi=null;function xh(i,e){if(Tt){let t=Tt.provides;const n=Tt.parent&&Tt.parent.provides;n===t&&(t=Tt.provides=Object.create(n)),t[i]=e}}function ar(i,e,t=!1){const n=Tt||ln;if(n||Oi){const s=Oi?Oi._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ne(e)?e.call(n&&n.proxy):e}}const Qc={},eu=()=>Object.create(Qc),tu=i=>Object.getPrototypeOf(i)===Qc;function vh(i,e,t,n=!1){const s={},r=eu();i.propsDefaults=Object.create(null),nu(i,e,s,r);for(const a in i.propsOptions[0])a in s||(s[a]=void 0);t?i.props=n?s:Ff(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Mh(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=i,o=Ye(s),[l]=i.propsOptions;let u=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=i.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(br(i.emitsOptions,h))continue;const m=e[h];if(l)if(je(r,h))m!==r[h]&&(r[h]=m,u=!0);else{const v=ii(h);s[v]=Fo(l,o,v,m,i,!1)}else m!==r[h]&&(r[h]=m,u=!0)}}}else{nu(i,e,s,r)&&(u=!0);let c;for(const f in o)(!e||!je(e,f)&&((c=fi(f))===f||!je(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(s[f]=Fo(l,o,f,void 0,i,!0)):delete s[f]);if(r!==o)for(const f in r)(!e||!je(e,f))&&(delete r[f],u=!0)}u&&bn(i.attrs,"set","")}function nu(i,e,t,n){const[s,r]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(as(l))continue;const u=e[l];let c;s&&je(s,c=ii(l))?!r||!r.includes(c)?t[c]=u:(o||(o={}))[c]=u:br(i.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,a=!0)}if(r){const l=Ye(t),u=o||Ze;for(let c=0;c<r.length;c++){const f=r[c];t[f]=Fo(s,l,f,u[f],i,!je(u,f))}}return a}function Fo(i,e,t,n,s,r){const a=i[t];if(a!=null){const o=je(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ne(l)){const{propsDefaults:u}=s;if(t in u)n=u[t];else{const c=As(s);n=u[t]=l.call(null,e),c()}}else n=l;s.ce&&s.ce._setProp(t,n)}a[0]&&(r&&!o?n=!1:a[1]&&(n===""||n===fi(t))&&(n=!0))}return n}const yh=new WeakMap;function iu(i,e,t=!1){const n=t?yh:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,a={},o=[];let l=!1;if(!Ne(i)){const c=f=>{l=!0;const[h,m]=iu(f,e,!0);gt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}if(!r&&!l)return st(i)&&n.set(i,Ii),Ii;if(Fe(r))for(let c=0;c<r.length;c++){const f=ii(r[c]);Ua(f)&&(a[f]=Ze)}else if(r)for(const c in r){const f=ii(c);if(Ua(f)){const h=r[c],m=a[f]=Fe(h)||Ne(h)?{type:h}:gt({},h),v=m.type;let p=!1,d=!0;if(Fe(v))for(let x=0;x<v.length;++x){const T=v[x],b=Ne(T)&&T.name;if(b==="Boolean"){p=!0;break}else b==="String"&&(d=!1)}else p=Ne(v)&&v.name==="Boolean";m[0]=p,m[1]=d,(p||je(m,"default"))&&o.push(f)}}const u=[a,o];return st(i)&&n.set(i,u),u}function Ua(i){return i[0]!=="$"&&!as(i)}const su=i=>i[0]==="_"||i==="$stable",pa=i=>Fe(i)?i.map(on):[on(i)],bh=(i,e,t)=>{if(e._n)return e;const n=Yf((...s)=>pa(e(...s)),t);return n._c=!1,n},ru=(i,e,t)=>{const n=i._ctx;for(const s in i){if(su(s))continue;const r=i[s];if(Ne(r))e[s]=bh(s,r,n);else if(r!=null){const a=pa(r);e[s]=()=>a}}},ou=(i,e)=>{const t=pa(e);i.slots.default=()=>t},au=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},Sh=(i,e,t)=>{const n=i.slots=eu();if(i.vnode.shapeFlag&32){const s=e._;s?(au(n,e,t),t&&Sc(n,"_",s,!0)):ru(e,n)}else e&&ou(i,e)},wh=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,a=Ze;if(n.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:au(s,e,t):(r=!e.$stable,ru(e,s)),a=e}else e&&(ou(i,e),a={default:1});if(r)for(const o in s)!su(o)&&a[o]==null&&delete s[o]},Ot=zh;function Eh(i){return Th(i)}function Th(i,e){const t=wc();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=cn,insertStaticContent:v}=i,p=(E,C,q,oe=null,te=null,ne=null,ce=void 0,fe=null,ue=!!C.dynamicChildren)=>{if(E===C)return;E&&!Yi(E,C)&&(oe=Ce(E),N(E,te,ne,!0),E=null),C.patchFlag===-2&&(ue=!1,C.dynamicChildren=null);const{type:_,ref:g,shapeFlag:P}=C;switch(_){case Sr:d(E,C,q,oe);break;case xs:x(E,C,q,oe);break;case Vr:E==null&&T(C,q,oe,ce);break;case rn:de(E,C,q,oe,te,ne,ce,fe,ue);break;default:P&1?y(E,C,q,oe,te,ne,ce,fe,ue):P&6?F(E,C,q,oe,te,ne,ce,fe,ue):(P&64||P&128)&&_.process(E,C,q,oe,te,ne,ce,fe,ue,_e)}g!=null&&te&&Po(g,E&&E.ref,ne,C||E,!C)},d=(E,C,q,oe)=>{if(E==null)n(C.el=o(C.children),q,oe);else{const te=C.el=E.el;C.children!==E.children&&u(te,C.children)}},x=(E,C,q,oe)=>{E==null?n(C.el=l(C.children||""),q,oe):C.el=E.el},T=(E,C,q,oe)=>{[E.el,E.anchor]=v(E.children,C,q,oe,E.el,E.anchor)},b=({el:E,anchor:C},q,oe)=>{let te;for(;E&&E!==C;)te=h(E),n(E,q,oe),E=te;n(C,q,oe)},S=({el:E,anchor:C})=>{let q;for(;E&&E!==C;)q=h(E),s(E),E=q;s(C)},y=(E,C,q,oe,te,ne,ce,fe,ue)=>{C.type==="svg"?ce="svg":C.type==="math"&&(ce="mathml"),E==null?D(C,q,oe,te,ne,ce,fe,ue):L(E,C,te,ne,ce,fe,ue)},D=(E,C,q,oe,te,ne,ce,fe)=>{let ue,_;const{props:g,shapeFlag:P,transition:j,dirs:K}=E;if(ue=E.el=a(E.type,ne,g&&g.is,g),P&8?c(ue,E.children):P&16&&M(E.children,ue,null,oe,te,zr(E,ne),ce,fe),K&&kn(E,null,oe,"created"),H(ue,E,E.scopeId,ce,oe),g){for(const Me in g)Me!=="value"&&!as(Me)&&r(ue,Me,null,g[Me],ne,oe);"value"in g&&r(ue,"value",null,g.value,ne),(_=g.onVnodeBeforeMount)&&tn(_,oe,E)}K&&kn(E,null,oe,"beforeMount");const le=Ah(te,j);le&&j.beforeEnter(ue),n(ue,C,q),((_=g&&g.onVnodeMounted)||le||K)&&Ot(()=>{_&&tn(_,oe,E),le&&j.enter(ue),K&&kn(E,null,oe,"mounted")},te)},H=(E,C,q,oe,te)=>{if(q&&m(E,q),oe)for(let ne=0;ne<oe.length;ne++)m(E,oe[ne]);if(te){let ne=te.subTree;if(C===ne||du(ne.type)&&(ne.ssContent===C||ne.ssFallback===C)){const ce=te.vnode;H(E,ce,ce.scopeId,ce.slotScopeIds,te.parent)}}},M=(E,C,q,oe,te,ne,ce,fe,ue=0)=>{for(let _=ue;_<E.length;_++){const g=E[_]=fe?Dn(E[_]):on(E[_]);p(null,g,C,q,oe,te,ne,ce,fe)}},L=(E,C,q,oe,te,ne,ce)=>{const fe=C.el=E.el;let{patchFlag:ue,dynamicChildren:_,dirs:g}=C;ue|=E.patchFlag&16;const P=E.props||Ze,j=C.props||Ze;let K;if(q&&Wn(q,!1),(K=j.onVnodeBeforeUpdate)&&tn(K,q,C,E),g&&kn(C,E,q,"beforeUpdate"),q&&Wn(q,!0),(P.innerHTML&&j.innerHTML==null||P.textContent&&j.textContent==null)&&c(fe,""),_?B(E.dynamicChildren,_,fe,q,oe,zr(C,te),ne):ce||I(E,C,fe,null,q,oe,zr(C,te),ne,!1),ue>0){if(ue&16)ee(fe,P,j,q,te);else if(ue&2&&P.class!==j.class&&r(fe,"class",null,j.class,te),ue&4&&r(fe,"style",P.style,j.style,te),ue&8){const le=C.dynamicProps;for(let Me=0;Me<le.length;Me++){const A=le[Me],z=P[A],pe=j[A];(pe!==z||A==="value")&&r(fe,A,z,pe,te,q)}}ue&1&&E.children!==C.children&&c(fe,C.children)}else!ce&&_==null&&ee(fe,P,j,q,te);((K=j.onVnodeUpdated)||g)&&Ot(()=>{K&&tn(K,q,C,E),g&&kn(C,E,q,"updated")},oe)},B=(E,C,q,oe,te,ne,ce)=>{for(let fe=0;fe<C.length;fe++){const ue=E[fe],_=C[fe],g=ue.el&&(ue.type===rn||!Yi(ue,_)||ue.shapeFlag&70)?f(ue.el):q;p(ue,_,g,null,oe,te,ne,ce,!0)}},ee=(E,C,q,oe,te)=>{if(C!==q){if(C!==Ze)for(const ne in C)!as(ne)&&!(ne in q)&&r(E,ne,C[ne],null,te,oe);for(const ne in q){if(as(ne))continue;const ce=q[ne],fe=C[ne];ce!==fe&&ne!=="value"&&r(E,ne,fe,ce,te,oe)}"value"in q&&r(E,"value",C.value,q.value,te)}},de=(E,C,q,oe,te,ne,ce,fe,ue)=>{const _=C.el=E?E.el:o(""),g=C.anchor=E?E.anchor:o("");let{patchFlag:P,dynamicChildren:j,slotScopeIds:K}=C;K&&(fe=fe?fe.concat(K):K),E==null?(n(_,q,oe),n(g,q,oe),M(C.children||[],q,g,te,ne,ce,fe,ue)):P>0&&P&64&&j&&E.dynamicChildren?(B(E.dynamicChildren,j,q,te,ne,ce,fe),(C.key!=null||te&&C===te.subTree)&&lu(E,C,!0)):I(E,C,q,g,te,ne,ce,fe,ue)},F=(E,C,q,oe,te,ne,ce,fe,ue)=>{C.slotScopeIds=fe,E==null?C.shapeFlag&512?te.ctx.activate(C,q,oe,ce,ue):R(C,q,oe,te,ne,ce,ue):X(E,C,ue)},R=(E,C,q,oe,te,ne,ce)=>{const fe=E.component=Yh(E,oe,te);if(Yc(E)&&(fe.ctx.renderer=_e),$h(fe,!1,ce),fe.asyncDep){if(te&&te.registerDep(fe,Z,ce),!E.el){const ue=fe.subTree=Fn(xs);x(null,ue,C,q)}}else Z(fe,E,C,q,te,ne,ce)},X=(E,C,q)=>{const oe=C.component=E.component;if(Nh(E,C,q))if(oe.asyncDep&&!oe.asyncResolved){G(oe,C,q);return}else oe.next=C,oe.update();else C.el=E.el,oe.vnode=C},Z=(E,C,q,oe,te,ne,ce)=>{const fe=()=>{if(E.isMounted){let{next:P,bu:j,u:K,parent:le,vnode:Me}=E;{const me=cu(E);if(me){P&&(P.el=Me.el,G(E,P,ce)),me.asyncDep.then(()=>{E.isUnmounted||fe()});return}}let A=P,z;Wn(E,!1),P?(P.el=Me.el,G(E,P,ce)):P=Me,j&&Ir(j),(z=P.props&&P.props.onVnodeBeforeUpdate)&&tn(z,le,P,Me),Wn(E,!0);const pe=Gr(E),xe=E.subTree;E.subTree=pe,p(xe,pe,f(xe.el),Ce(xe),E,te,ne),P.el=pe.el,A===null&&Uh(E,pe.el),K&&Ot(K,te),(z=P.props&&P.props.onVnodeUpdated)&&Ot(()=>tn(z,le,P,Me),te)}else{let P;const{el:j,props:K}=C,{bm:le,m:Me,parent:A,root:z,type:pe}=E,xe=us(C);if(Wn(E,!1),le&&Ir(le),!xe&&(P=K&&K.onVnodeBeforeMount)&&tn(P,A,C),Wn(E,!0),j&&Re){const me=()=>{E.subTree=Gr(E),Re(j,E.subTree,E,te,null)};xe&&pe.__asyncHydrate?pe.__asyncHydrate(j,E,me):me()}else{z.ce&&z.ce._injectChildStyle(pe);const me=E.subTree=Gr(E);p(null,me,q,oe,E,te,ne),C.el=me.el}if(Me&&Ot(Me,te),!xe&&(P=K&&K.onVnodeMounted)){const me=C;Ot(()=>tn(P,A,me),te)}(C.shapeFlag&256||A&&us(A.vnode)&&A.vnode.shapeFlag&256)&&E.a&&Ot(E.a,te),E.isMounted=!0,C=q=oe=null}};E.scope.on();const ue=E.effect=new Tc(fe);E.scope.off();const _=E.update=ue.run.bind(ue),g=E.job=ue.runIfDirty.bind(ue);g.i=E,g.id=E.uid,ue.scheduler=()=>fa(g),Wn(E,!0),_()},G=(E,C,q)=>{C.component=E;const oe=E.vnode.props;E.vnode=C,E.next=null,Mh(E,C.props,oe,q),wh(E,C.children,q),Un(),Da(E),zn()},I=(E,C,q,oe,te,ne,ce,fe,ue=!1)=>{const _=E&&E.children,g=E?E.shapeFlag:0,P=C.children,{patchFlag:j,shapeFlag:K}=C;if(j>0){if(j&128){re(_,P,q,oe,te,ne,ce,fe,ue);return}else if(j&256){Y(_,P,q,oe,te,ne,ce,fe,ue);return}}K&8?(g&16&&$(_,te,ne),P!==_&&c(q,P)):g&16?K&16?re(_,P,q,oe,te,ne,ce,fe,ue):$(_,te,ne,!0):(g&8&&c(q,""),K&16&&M(P,q,oe,te,ne,ce,fe,ue))},Y=(E,C,q,oe,te,ne,ce,fe,ue)=>{E=E||Ii,C=C||Ii;const _=E.length,g=C.length,P=Math.min(_,g);let j;for(j=0;j<P;j++){const K=C[j]=ue?Dn(C[j]):on(C[j]);p(E[j],K,q,null,te,ne,ce,fe,ue)}_>g?$(E,te,ne,!0,!1,P):M(C,q,oe,te,ne,ce,fe,ue,P)},re=(E,C,q,oe,te,ne,ce,fe,ue)=>{let _=0;const g=C.length;let P=E.length-1,j=g-1;for(;_<=P&&_<=j;){const K=E[_],le=C[_]=ue?Dn(C[_]):on(C[_]);if(Yi(K,le))p(K,le,q,null,te,ne,ce,fe,ue);else break;_++}for(;_<=P&&_<=j;){const K=E[P],le=C[j]=ue?Dn(C[j]):on(C[j]);if(Yi(K,le))p(K,le,q,null,te,ne,ce,fe,ue);else break;P--,j--}if(_>P){if(_<=j){const K=j+1,le=K<g?C[K].el:oe;for(;_<=j;)p(null,C[_]=ue?Dn(C[_]):on(C[_]),q,le,te,ne,ce,fe,ue),_++}}else if(_>j)for(;_<=P;)N(E[_],te,ne,!0),_++;else{const K=_,le=_,Me=new Map;for(_=le;_<=j;_++){const Le=C[_]=ue?Dn(C[_]):on(C[_]);Le.key!=null&&Me.set(Le.key,_)}let A,z=0;const pe=j-le+1;let xe=!1,me=0;const Se=new Array(pe);for(_=0;_<pe;_++)Se[_]=0;for(_=K;_<=P;_++){const Le=E[_];if(z>=pe){N(Le,te,ne,!0);continue}let Pe;if(Le.key!=null)Pe=Me.get(Le.key);else for(A=le;A<=j;A++)if(Se[A-le]===0&&Yi(Le,C[A])){Pe=A;break}Pe===void 0?N(Le,te,ne,!0):(Se[Pe-le]=_+1,Pe>=me?me=Pe:xe=!0,p(Le,C[Pe],q,null,te,ne,ce,fe,ue),z++)}const we=xe?Ch(Se):Ii;for(A=we.length-1,_=pe-1;_>=0;_--){const Le=le+_,Pe=C[Le],qe=Le+1<g?C[Le+1].el:oe;Se[_]===0?p(null,Pe,q,qe,te,ne,ce,fe,ue):xe&&(A<0||_!==we[A]?U(Pe,q,qe,2):A--)}}},U=(E,C,q,oe,te=null)=>{const{el:ne,type:ce,transition:fe,children:ue,shapeFlag:_}=E;if(_&6){U(E.component.subTree,C,q,oe);return}if(_&128){E.suspense.move(C,q,oe);return}if(_&64){ce.move(E,C,q,_e);return}if(ce===rn){n(ne,C,q);for(let P=0;P<ue.length;P++)U(ue[P],C,q,oe);n(E.anchor,C,q);return}if(ce===Vr){b(E,C,q);return}if(oe!==2&&_&1&&fe)if(oe===0)fe.beforeEnter(ne),n(ne,C,q),Ot(()=>fe.enter(ne),te);else{const{leave:P,delayLeave:j,afterLeave:K}=fe,le=()=>n(ne,C,q),Me=()=>{P(ne,()=>{le(),K&&K()})};j?j(ne,le,Me):Me()}else n(ne,C,q)},N=(E,C,q,oe=!1,te=!1)=>{const{type:ne,props:ce,ref:fe,children:ue,dynamicChildren:_,shapeFlag:g,patchFlag:P,dirs:j,cacheIndex:K}=E;if(P===-2&&(te=!1),fe!=null&&Po(fe,null,q,E,!0),K!=null&&(C.renderCache[K]=void 0),g&256){C.ctx.deactivate(E);return}const le=g&1&&j,Me=!us(E);let A;if(Me&&(A=ce&&ce.onVnodeBeforeUnmount)&&tn(A,C,E),g&6)ge(E.component,q,oe);else{if(g&128){E.suspense.unmount(q,oe);return}le&&kn(E,null,C,"beforeUnmount"),g&64?E.type.remove(E,C,q,_e,oe):_&&!_.hasOnce&&(ne!==rn||P>0&&P&64)?$(_,C,q,!1,!0):(ne===rn&&P&384||!te&&g&16)&&$(ue,C,q),oe&&se(E)}(Me&&(A=ce&&ce.onVnodeUnmounted)||le)&&Ot(()=>{A&&tn(A,C,E),le&&kn(E,null,C,"unmounted")},q)},se=E=>{const{type:C,el:q,anchor:oe,transition:te}=E;if(C===rn){ae(q,oe);return}if(C===Vr){S(E);return}const ne=()=>{s(q),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(E.shapeFlag&1&&te&&!te.persisted){const{leave:ce,delayLeave:fe}=te,ue=()=>ce(q,ne);fe?fe(E.el,ne,ue):ue()}else ne()},ae=(E,C)=>{let q;for(;E!==C;)q=h(E),s(E),E=q;s(C)},ge=(E,C,q)=>{const{bum:oe,scope:te,job:ne,subTree:ce,um:fe,m:ue,a:_}=E;za(ue),za(_),oe&&Ir(oe),te.stop(),ne&&(ne.flags|=8,N(ce,E,C,q)),fe&&Ot(fe,C),Ot(()=>{E.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},$=(E,C,q,oe=!1,te=!1,ne=0)=>{for(let ce=ne;ce<E.length;ce++)N(E[ce],C,q,oe,te)},Ce=E=>{if(E.shapeFlag&6)return Ce(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const C=h(E.anchor||E.el),q=C&&C[$f];return q?h(q):C};let ye=!1;const Ee=(E,C,q)=>{E==null?C._vnode&&N(C._vnode,null,null,!0):p(C._vnode||null,E,C,null,null,null,q),C._vnode=E,ye||(ye=!0,Da(),Wc(),ye=!1)},_e={p,um:N,m:U,r:se,mt:R,mc:M,pc:I,pbc:B,n:Ce,o:i};let Ue,Re;return{render:Ee,hydrate:Ue,createApp:_h(Ee,Ue)}}function zr({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Wn({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Ah(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function lu(i,e,t=!1){const n=i.children,s=e.children;if(Fe(n)&&Fe(s))for(let r=0;r<n.length;r++){const a=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Dn(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&lu(a,o)),o.type===Sr&&(o.el=a.el)}}function Ch(i){const e=i.slice(),t=[0];let n,s,r,a,o;const l=i.length;for(n=0;n<l;n++){const u=i[n];if(u!==0){if(s=t[t.length-1],i[s]<u){e[n]=s,t.push(n);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,i[t[o]]<u?r=o+1:a=o;u<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function cu(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cu(e)}function za(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Lh=Symbol.for("v-scx"),Ph=()=>ar(Lh);function Br(i,e,t){return uu(i,e,t)}function uu(i,e,t=Ze){const{immediate:n,deep:s,flush:r,once:a}=t,o=gt({},t);let l;if(wr)if(r==="sync"){const h=Ph();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!e||n)o.once=!0;else return{stop:cn,resume:cn,pause:cn};const u=Tt;o.call=(h,m,v)=>un(h,u,m,v);let c=!1;r==="post"?o.scheduler=h=>{Ot(h,u&&u.suspense)}:r!=="sync"&&(c=!0,o.scheduler=(h,m)=>{m?h():fa(h)}),o.augmentJob=h=>{e&&(h.flags|=4),c&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Wf(i,e,o);return l&&l.push(f),f}function Rh(i,e,t){const n=this.proxy,s=ht(i)?i.includes(".")?fu(n,i):()=>n[i]:i.bind(n,n);let r;Ne(e)?r=e:(r=e.handler,t=e);const a=As(this),o=uu(s,r.bind(n),t);return a(),o}function fu(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const Dh=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${ii(e)}Modifiers`]||i[`${fi(e)}Modifiers`];function Ih(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Ze;let s=t;const r=e.startsWith("update:"),a=r&&Dh(n,e.slice(7));a&&(a.trim&&(s=t.map(c=>ht(c)?c.trim():c)),a.number&&(s=t.map(rf)));let o,l=n[o=Dr(e)]||n[o=Dr(ii(e))];!l&&r&&(l=n[o=Dr(fi(e))]),l&&un(l,i,6,s);const u=n[o+"Once"];if(u){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,un(u,i,6,s)}}function hu(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let a={},o=!1;if(!Ne(i)){const l=u=>{const c=hu(u,e,!0);c&&(o=!0,gt(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!o?(st(i)&&n.set(i,null),null):(Fe(r)?r.forEach(l=>a[l]=null):gt(a,r),st(i)&&n.set(i,a),a)}function br(i,e){return!i||!gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(i,e[0].toLowerCase()+e.slice(1))||je(i,fi(e))||je(i,e))}function Gr(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:v,inheritAttrs:p}=i,d=dr(i);let x,T;try{if(t.shapeFlag&4){const S=s||n,y=S;x=on(u.call(y,S,c,f,m,h,v)),T=o}else{const S=e;x=on(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),T=e.props?o:Fh(o)}}catch(S){hs.length=0,Mr(S,i,1),x=Fn(xs)}let b=x;if(T&&p!==!1){const S=Object.keys(T),{shapeFlag:y}=b;S.length&&y&7&&(r&&S.some(Yo)&&(T=Oh(T,r)),b=zi(b,T,!1,!0))}return t.dirs&&(b=zi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&ha(b,t.transition),x=b,dr(d),x}const Fh=i=>{let e;for(const t in i)(t==="class"||t==="style"||gr(t))&&((e||(e={}))[t]=i[t]);return e},Oh=(i,e)=>{const t={};for(const n in i)(!Yo(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Nh(i,e,t){const{props:n,children:s,component:r}=i,{props:a,children:o,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Ba(n,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(a[h]!==n[h]&&!br(u,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Ba(n,a,u):!0:!!a;return!1}function Ba(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!br(t,r))return!0}return!1}function Uh({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const du=i=>i.__isSuspense;function zh(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):jf(i)}const rn=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),xs=Symbol.for("v-cmt"),Vr=Symbol.for("v-stc"),hs=[];let Bt=null;function pu(i=!1){hs.push(Bt=i?null:[])}function Bh(){hs.pop(),Bt=hs[hs.length-1]||null}let vs=1;function Ga(i){vs+=i,i<0&&Bt&&(Bt.hasOnce=!0)}function Gh(i){return i.dynamicChildren=vs>0?Bt||Ii:null,Bh(),vs>0&&Bt&&Bt.push(i),i}function mu(i,e,t,n,s,r){return Gh(Ms(i,e,t,n,s,r,!0))}function Vh(i){return i?i.__v_isVNode===!0:!1}function Yi(i,e){return i.type===e.type&&i.key===e.key}const gu=({key:i})=>i??null,lr=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?ht(i)||mt(i)||Ne(i)?{i:ln,r:i,k:e,f:!!t}:i:null);function Ms(i,e=null,t=null,n=0,s=null,r=i===rn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&gu(e),ref:e&&lr(e),scopeId:Xc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ln};return o?(ma(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),vs>0&&!a&&Bt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Bt.push(l),l}const Fn=Hh;function Hh(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===ch)&&(i=xs),Vh(i)){const o=zi(i,e,!0);return t&&ma(o,t),vs>0&&!r&&Bt&&(o.shapeFlag&6?Bt[Bt.indexOf(i)]=o:Bt.push(o)),o.patchFlag=-2,o}if(Qh(i)&&(i=i.__vccOpts),e){e=kh(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=Jo(o)),st(l)&&(la(l)&&!Fe(l)&&(l=gt({},l)),e.style=Ko(l))}const a=ht(i)?1:du(i)?128:Zf(i)?64:st(i)?4:Ne(i)?2:0;return Ms(i,e,t,n,s,a,r,!0)}function kh(i){return i?la(i)||tu(i)?gt({},i):i:null}function zi(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=i,u=e?qh(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:i.type,props:u,key:u&&gu(u),ref:e&&e.ref?t&&r?Fe(r)?r.concat(lr(e)):[r,lr(e)]:lr(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==rn?a===-1?16:a|16:a,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&zi(i.ssContent),ssFallback:i.ssFallback&&zi(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&ha(c,l.clone(c)),c}function Wh(i=" ",e=0){return Fn(Sr,null,i,e)}function on(i){return i==null||typeof i=="boolean"?Fn(xs):Fe(i)?Fn(rn,null,i.slice()):typeof i=="object"?Dn(i):Fn(Sr,null,String(i))}function Dn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:zi(i)}function ma(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),ma(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!tu(e)?e._ctx=ln:s===3&&ln&&(ln.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:ln},t=32):(e=String(e),n&64?(t=16,e=[Wh(e)]):t=8);i.children=e,i.shapeFlag|=t}function qh(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Jo([e.class,n.class]));else if(s==="style")e.style=Ko([e.style,n.style]);else if(gr(s)){const r=e[s],a=n[s];a&&r!==a&&!(Fe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=n[s])}return e}function tn(i,e,t,n=null){un(i,e,7,[t,n])}const Xh=Jc();let jh=0;function Yh(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Xh,r={uid:jh++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iu(n,s),emitsOptions:hu(n,s),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:n.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ih.bind(null,r),i.ce&&i.ce(r),r}let Tt=null,mr,Oo;{const i=wc(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};mr=e("__VUE_INSTANCE_SETTERS__",t=>Tt=t),Oo=e("__VUE_SSR_SETTERS__",t=>wr=t)}const As=i=>{const e=Tt;return mr(i),i.scope.on(),()=>{i.scope.off(),mr(e)}},Va=()=>{Tt&&Tt.scope.off(),mr(null)};function _u(i){return i.vnode.shapeFlag&4}let wr=!1;function $h(i,e=!1,t=!1){e&&Oo(e);const{props:n,children:s}=i.vnode,r=_u(i);vh(i,n,r,e),Sh(i,s,t);const a=r?Zh(i,e):void 0;return e&&Oo(!1),a}function Zh(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,uh);const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Jh(i):null,r=As(i);Un();const a=Ts(n,i,0,[i.props,s]);if(zn(),r(),yc(a)){if(us(i)||jc(i),a.then(Va,Va),e)return a.then(o=>{Ha(i,o,e)}).catch(o=>{Mr(o,i,0)});i.asyncDep=a}else Ha(i,a,e)}else xu(i,e)}function Ha(i,e,t){Ne(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:st(e)&&(i.setupState=Gc(e)),xu(i,t)}let ka;function xu(i,e,t){const n=i.type;if(!i.render){if(!e&&ka&&!n.render){const s=n.template||da(i).template;if(s){const{isCustomElement:r,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,u=gt(gt({isCustomElement:r,delimiters:o},a),l);n.render=ka(s,u)}}i.render=n.render||cn}{const s=As(i);Un();try{fh(i)}finally{zn(),s()}}}const Kh={get(i,e){return _t(i,"get",""),i[e]}};function Jh(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Kh),slots:i.slots,emit:i.emit,expose:e}}function ga(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Gc(Of(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in fs)return fs[t](i)},has(e,t){return t in e||t in fs}})):i.proxy}function Qh(i){return Ne(i)&&"__vccOpts"in i}const ed=(i,e)=>Hf(i,e,wr),td="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let No;const Wa=typeof window<"u"&&window.trustedTypes;if(Wa)try{No=Wa.createPolicy("vue",{createHTML:i=>i})}catch{}const vu=No?i=>No.createHTML(i):i=>i,nd="http://www.w3.org/2000/svg",id="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,qa=Mn&&Mn.createElement("template"),sd={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?Mn.createElementNS(nd,i):e==="mathml"?Mn.createElementNS(id,i):t?Mn.createElement(i,{is:t}):Mn.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Mn.createTextNode(i),createComment:i=>Mn.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Mn.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{qa.innerHTML=vu(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const o=qa.content;if(n==="svg"||n==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},rd=Symbol("_vtc");function od(i,e,t){const n=i[rd];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Xa=Symbol("_vod"),ad=Symbol("_vsh"),ld=Symbol(""),cd=/(^|;)\s*display\s*:/;function ud(i,e,t){const n=i.style,s=ht(t);let r=!1;if(t&&!s){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&cr(n,o,"")}else for(const a in e)t[a]==null&&cr(n,a,"");for(const a in t)a==="display"&&(r=!0),cr(n,a,t[a])}else if(s){if(e!==t){const a=n[ld];a&&(t+=";"+a),n.cssText=t,r=cd.test(t)}}else e&&i.removeAttribute("style");Xa in i&&(i[Xa]=r?n.display:"",i[ad]&&(n.display="none"))}const ja=/\s*!important$/;function cr(i,e,t){if(Fe(t))t.forEach(n=>cr(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=fd(i,e);ja.test(t)?i.setProperty(fi(n),t.replace(ja,""),"important"):i[n]=t}}const Ya=["Webkit","Moz","ms"],Hr={};function fd(i,e){const t=Hr[e];if(t)return t;let n=ii(e);if(n!=="filter"&&n in i)return Hr[e]=n;n=bc(n);for(let s=0;s<Ya.length;s++){const r=Ya[s]+n;if(r in i)return Hr[e]=r}return e}const $a="http://www.w3.org/1999/xlink";function Za(i,e,t,n,s,r=ff(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS($a,e.slice(6,e.length)):i.setAttributeNS($a,e,t):t==null||r&&!Ec(t)?i.removeAttribute(e):i.setAttribute(e,r?"":ki(t)?String(t):t)}function hd(i,e,t,n){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?vu(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,o=t==null?i.type==="checkbox"?"on":"":String(t);(a!==o||!("_value"in i))&&(i.value=o),t==null&&i.removeAttribute(e),i._value=t;return}let r=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Ec(t):t==null&&a==="string"?(t="",r=!0):a==="number"&&(t=0,r=!0)}try{i[e]=t}catch{}r&&i.removeAttribute(e)}function dd(i,e,t,n){i.addEventListener(e,t,n)}function pd(i,e,t,n){i.removeEventListener(e,t,n)}const Ka=Symbol("_vei");function md(i,e,t,n,s=null){const r=i[Ka]||(i[Ka]={}),a=r[e];if(n&&a)a.value=n;else{const[o,l]=gd(e);if(n){const u=r[e]=vd(n,s);dd(i,o,u,l)}else a&&(pd(i,o,a,l),r[e]=void 0)}}const Ja=/(?:Once|Passive|Capture)$/;function gd(i){let e;if(Ja.test(i)){e={};let n;for(;n=i.match(Ja);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):fi(i.slice(2)),e]}let kr=0;const _d=Promise.resolve(),xd=()=>kr||(_d.then(()=>kr=0),kr=Date.now());function vd(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;un(Md(n,t.value),e,5,[n])};return t.value=i,t.attached=xd(),t}function Md(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Qa=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,yd=(i,e,t,n,s,r)=>{const a=s==="svg";e==="class"?od(i,n,a):e==="style"?ud(i,t,n):gr(e)?Yo(e)||md(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bd(i,e,n,a))?(hd(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Za(i,e,n,a,r,e!=="value")):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Za(i,e,n,a))};function bd(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Qa(e)&&Ne(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qa(e)&&ht(t)?!1:!!(e in i||i._isVueCE&&(/[A-Z]/.test(e)||!ht(t)))}const Sd=gt({patchProp:yd},sd);let el;function wd(){return el||(el=Eh(Sd))}const Ed=(...i)=>{const e=wd().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=Ad(n);if(!s)return;const r=e._component;!Ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Td(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Td(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Ad(i){return ht(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="148",pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cd=0,tl=1,Ld=2,Mu=1,Pd=2,ss=3,ri=0,Xt=1,Nt=2,zs=3,On=0,Ni=1,nl=2,il=3,sl=4,Rd=5,Ri=100,Dd=101,Id=102,rl=103,ol=104,Fd=200,Od=201,Nd=202,Ud=203,yu=204,bu=205,zd=206,Bd=207,Gd=208,Vd=209,Hd=210,kd=0,Wd=1,qd=2,Uo=3,Xd=4,jd=5,Yd=6,$d=7,Su=0,Zd=1,Kd=2,Sn=0,Jd=1,Qd=2,ep=3,tp=4,np=5,wu=300,Bi=301,Gi=302,zo=303,Bo=304,Er=306,Go=1e3,Kt=1001,Vo=1002,bt=1003,al=1004,Wr=1005,qt=1006,ip=1007,ys=1008,oi=1009,sp=1010,rp=1011,Eu=1012,op=1013,Jn=1014,Qn=1015,bs=1016,ap=1017,lp=1018,Ui=1020,cp=1021,up=1022,Jt=1023,fp=1024,hp=1025,ti=1026,Vi=1027,dp=1028,pp=1029,mp=1030,gp=1031,_p=1033,qr=33776,Xr=33777,jr=33778,Yr=33779,ll=35840,cl=35841,ul=35842,fl=35843,xp=36196,hl=37492,dl=37496,pl=37808,ml=37809,gl=37810,_l=37811,xl=37812,vl=37813,Ml=37814,yl=37815,bl=37816,Sl=37817,wl=37818,El=37819,Tl=37820,Al=37821,Cl=36492,ai=3e3,Ke=3001,vp=3200,Mp=3201,Tu=0,yp=1,sn="srgb",Ss="srgb-linear",$r=7680,bp=519,Ll=35044,Pl="300 es",Ho=1035;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,Rl=180/Math.PI;function Cs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Sp(i,e){return(i%e+e)%e}function Kr(i,e,t){return(1-t)*i+t*e}function Dl(i){return(i&i-1)===0&&i!==0}function ko(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bs(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],f=n[7],h=n[2],m=n[5],v=n[8],p=s[0],d=s[3],x=s[6],T=s[1],b=s[4],S=s[7],y=s[2],D=s[5],H=s[8];return r[0]=a*p+o*T+l*y,r[3]=a*d+o*b+l*D,r[6]=a*x+o*S+l*H,r[1]=u*p+c*T+f*y,r[4]=u*d+c*b+f*D,r[7]=u*x+c*S+f*H,r[2]=h*p+m*T+v*y,r[5]=h*d+m*b+v*D,r[8]=h*x+m*S+v*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-n*r*c+n*o*l+s*r*u-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,h=o*l-c*r,m=u*r-a*l,v=t*f+n*h+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=f*p,e[1]=(s*u-c*n)*p,e[2]=(o*n-s*a)*p,e[3]=h*p,e[4]=(c*t-s*l)*p,e[5]=(s*r-o*t)*p,e[6]=m*p,e[7]=(n*l-u*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Gt;function Au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Qr={[sn]:{[Ss]:ni},[Ss]:{[sn]:ur}},vt={legacyMode:!0,get workingColorSpace(){return Ss},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Qr[e]&&Qr[e][t]!==void 0){const n=Qr[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Yt={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Vs(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Sp(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=eo(a,r,e+1/3),this.g=eo(a,r,e),this.b=eo(a,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,vt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,vt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,u=parseFloat(r[2])/100,c=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,u,c,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=sn){const n=Cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return vt.fromWorkingColorSpace(Vs(this,rt),e),Et(rt.r*255,0,255)<<16^Et(rt.g*255,0,255)<<8^Et(rt.b*255,0,255)<<0}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Vs(this,rt),t);const n=rt.r,s=rt.g,r=rt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Vs(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=sn){return vt.fromWorkingColorSpace(Vs(this,rt),e),e!==sn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Yt),Yt.h+=e,Yt.s+=t,Yt.l+=n,this.setHSL(Yt.h,Yt.s,Yt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Gs);const n=Kr(Yt.h,Gs.h,t),s=Kr(Yt.s,Gs.s,t),r=Kr(Yt.l,Gs.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=Cu;let gi;class Lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=ws("canvas")),gi.width=e.width,gi.height=e.height;const n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Pu{constructor(e=null){this.isSource=!0,this.uuid=Cs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(to(s[a].image)):r.push(to(s[a]))}else r=to(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;class Lt extends hi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Kt,s=Kt,r=qt,a=ys,o=Jt,l=oi,u=Lt.DEFAULT_ANISOTROPY,c=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Cs(),this.name="",this.source=new Pu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Go:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Go:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=wu;Lt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],v=l[9],p=l[2],d=l[6],x=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-p)<.01&&Math.abs(v-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+p)<.1&&Math.abs(v+d)<.1&&Math.abs(u+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,S=(m+1)/2,y=(x+1)/2,D=(c+h)/4,H=(f+p)/4,M=(v+d)/4;return b>S&&b>y?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=D/n,r=H/n):S>y?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=D/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=H/r,s=M/r),this.set(n,s,r,t),this}let T=Math.sqrt((d-v)*(d-v)+(f-p)*(f-p)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(d-v)/T,this.y=(f-p)/T,this.z=(h-c)/T,this.w=Math.acos((u+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class li extends hi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ep extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],u=n[s+1],c=n[s+2],f=n[s+3];const h=r[a+0],m=r[a+1],v=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(f!==p||l!==h||u!==m||c!==v){let d=1-o;const x=l*h+u*m+c*v+f*p,T=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const y=Math.sqrt(b),D=Math.atan2(y,x*T);d=Math.sin(d*D)/y,o=Math.sin(o*D)/y}const S=o*T;if(l=l*d+h*S,u=u*d+m*S,c=c*d+v*S,f=f*d+p*S,d===1-o){const y=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=y,u*=y,c*=y,f*=y}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],u=n[s+2],c=n[s+3],f=r[a],h=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+c*f+l*m-u*h,e[t+1]=l*v+c*h+u*f-o*m,e[t+2]=u*v+c*m+o*h-l*f,e[t+3]=c*v-o*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(s/2),f=o(r/2),h=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"YXZ":this._x=h*c*f+u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"ZXY":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f-h*m*v;break;case"ZYX":this._x=h*c*f-u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f+h*m*v;break;case"YZX":this._x=h*c*f+u*m*v,this._y=u*m*f+h*c*v,this._z=u*c*v-h*m*f,this._w=u*c*f-h*m*v;break;case"XZY":this._x=h*c*f-u*m*v,this._y=u*m*f-h*c*v,this._z=u*c*v+h*m*f,this._w=u*c*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(c-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+a*o+s*u-r*l,this._y=s*c+a*l+r*o-n*u,this._z=r*c+a*u+n*l-s*o,this._w=a*c-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*s-o*n,c=l*n+o*t-r*s,f=l*s+r*n-a*t,h=-r*t-a*n-o*s;return this.x=u*l+h*-r+c*-o-f*-a,this.y=c*l+h*-a+f*-r-u*-o,this.z=f*l+h*-o+u*-a-c*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new V,Il=new ci;class Ls{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],h=e[l+2];c<t&&(t=c),f<n&&(n=f),h<s&&(s=h),c>r&&(r=c),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),h=e.getZ(l);c<t&&(t=c),f<n&&(n=f),h<s&&(s=h),c>r&&(r=c),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)qn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox),io.applyMatrix4(e.matrixWorld),this.union(io);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Hs.subVectors(this.max,$i),_i.subVectors(e.a,$i),xi.subVectors(e.b,$i),vi.subVectors(e.c,$i),Tn.subVectors(xi,_i),An.subVectors(vi,xi),Xn.subVectors(_i,vi);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Xn.z,Xn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Xn.z,0,-Xn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Xn.y,Xn.x,0];return!so(t,_i,xi,vi,Hs)||(t=[1,0,0,0,1,0,0,0,1],!so(t,_i,xi,vi,Hs))?!1:(ks.crossVectors(Tn,An),t=[ks.x,ks.y,ks.z],so(t,_i,xi,vi,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new V,new V,new V,new V,new V,new V,new V,new V],qn=new V,io=new Ls,_i=new V,xi=new V,vi=new V,Tn=new V,An=new V,Xn=new V,$i=new V,Hs=new V,ks=new V,jn=new V;function so(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);const o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),u=t.dot(jn),c=n.dot(jn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Tp=new Ls,Zi=new V,ro=new V;class Tr{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(ro)),this.expandByPoint(Zi.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new V,oo=new V,Ws=new V,Cn=new V,ao=new V,qs=new V,lo=new V;class Du{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.direction).multiplyScalar(t).add(this.origin),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oo.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(oo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=Cn.dot(this.direction),l=-Cn.dot(Ws),u=Cn.lengthSq(),c=Math.abs(1-a*a);let f,h,m,v;if(c>0)if(f=a*l-o,h=a*o-l,v=r*c,f>=0)if(h>=-v)if(h<=v){const p=1/c;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+u):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+u);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+u;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(Ws).multiplyScalar(h).add(oo),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,s=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,s=(e.min.x-h.x)*u),c>=0?(r=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(r=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){ao.subVectors(t,e),qs.subVectors(n,e),lo.crossVectors(ao,qs);let a=this.direction.dot(lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(qs.crossVectors(Cn,qs));if(l<0)return null;const u=o*this.direction.dot(ao.cross(Cn));if(u<0||l+u>a)return null;const c=-o*Cn.dot(lo);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,l,u,c,f,h,m,v,p,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=u,x[6]=c,x[10]=f,x[14]=h,x[3]=m,x[7]=v,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*c,m=a*f,v=o*c,p=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=m+v*u,t[5]=h-p*u,t[9]=-o*l,t[2]=p-h*u,t[6]=v+m*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,v=u*c,p=u*f;t[0]=h+p*o,t[4]=v*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=m*o-v,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,v=u*c,p=u*f;t[0]=h-p*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*c,t[9]=p-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,m=a*f,v=o*c,p=o*f;t[0]=l*c,t[4]=v*u-m,t[8]=h*u+p,t[1]=l*f,t[5]=p*u+h,t[9]=m*u-v,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*u,v=o*l,p=o*u;t[0]=l*c,t[4]=p-h*f,t[8]=v*f+m,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=m*f+v,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*u,v=o*l,p=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+p,t[5]=a*c,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*c,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ap,e,Cp)}lookAt(e,t,n){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Ln.crossVectors(n,It),Ln.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Ln.crossVectors(n,It)),Ln.normalize(),Xs.crossVectors(It,Ln),s[0]=Ln.x,s[4]=Xs.x,s[8]=It.x,s[1]=Ln.y,s[5]=Xs.y,s[9]=It.y,s[2]=Ln.z,s[6]=Xs.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],f=n[5],h=n[9],m=n[13],v=n[2],p=n[6],d=n[10],x=n[14],T=n[3],b=n[7],S=n[11],y=n[15],D=s[0],H=s[4],M=s[8],L=s[12],B=s[1],ee=s[5],de=s[9],F=s[13],R=s[2],X=s[6],Z=s[10],G=s[14],I=s[3],Y=s[7],re=s[11],U=s[15];return r[0]=a*D+o*B+l*R+u*I,r[4]=a*H+o*ee+l*X+u*Y,r[8]=a*M+o*de+l*Z+u*re,r[12]=a*L+o*F+l*G+u*U,r[1]=c*D+f*B+h*R+m*I,r[5]=c*H+f*ee+h*X+m*Y,r[9]=c*M+f*de+h*Z+m*re,r[13]=c*L+f*F+h*G+m*U,r[2]=v*D+p*B+d*R+x*I,r[6]=v*H+p*ee+d*X+x*Y,r[10]=v*M+p*de+d*Z+x*re,r[14]=v*L+p*F+d*G+x*U,r[3]=T*D+b*B+S*R+y*I,r[7]=T*H+b*ee+S*X+y*Y,r[11]=T*M+b*de+S*Z+y*re,r[15]=T*L+b*F+S*G+y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],v=e[3],p=e[7],d=e[11],x=e[15];return v*(+r*l*f-s*u*f-r*o*h+n*u*h+s*o*m-n*l*m)+p*(+t*l*m-t*u*h+r*a*h-s*a*m+s*u*c-r*l*c)+d*(+t*u*f-t*o*m-r*a*f+n*a*m+r*o*c-n*u*c)+x*(-s*o*c-t*l*f+t*o*h+s*a*f-n*a*h+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],v=e[12],p=e[13],d=e[14],x=e[15],T=f*d*u-p*h*u+p*l*m-o*d*m-f*l*x+o*h*x,b=v*h*u-c*d*u-v*l*m+a*d*m+c*l*x-a*h*x,S=c*p*u-v*f*u+v*o*m-a*p*m-c*o*x+a*f*x,y=v*f*l-c*p*l-v*o*h+a*p*h+c*o*d-a*f*d,D=t*T+n*b+s*S+r*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return e[0]=T*H,e[1]=(p*h*r-f*d*r-p*s*m+n*d*m+f*s*x-n*h*x)*H,e[2]=(o*d*r-p*l*r+p*s*u-n*d*u-o*s*x+n*l*x)*H,e[3]=(f*l*r-o*h*r-f*s*u+n*h*u+o*s*m-n*l*m)*H,e[4]=b*H,e[5]=(c*d*r-v*h*r+v*s*m-t*d*m-c*s*x+t*h*x)*H,e[6]=(v*l*r-a*d*r-v*s*u+t*d*u+a*s*x-t*l*x)*H,e[7]=(a*h*r-c*l*r+c*s*u-t*h*u-a*s*m+t*l*m)*H,e[8]=S*H,e[9]=(v*f*r-c*p*r-v*n*m+t*p*m+c*n*x-t*f*x)*H,e[10]=(a*p*r-v*o*r+v*n*u-t*p*u-a*n*x+t*o*x)*H,e[11]=(c*o*r-a*f*r-c*n*u+t*f*u+a*n*m-t*o*m)*H,e[12]=y*H,e[13]=(c*p*s-v*f*s+v*n*h-t*p*h-c*n*d+t*f*d)*H,e[14]=(v*o*s-a*p*s-v*n*l+t*p*l+a*n*d-t*o*d)*H,e[15]=(a*f*s-c*o*s+c*n*l-t*f*l-a*n*h+t*o*h)*H,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,u=r*a,c=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,c*o+n,c*l-s*a,0,u*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,c=a+a,f=o+o,h=r*u,m=r*c,v=r*f,p=a*c,d=a*f,x=o*f,T=l*u,b=l*c,S=l*f,y=n.x,D=n.y,H=n.z;return s[0]=(1-(p+x))*y,s[1]=(m+S)*y,s[2]=(v-b)*y,s[3]=0,s[4]=(m-S)*D,s[5]=(1-(h+x))*D,s[6]=(d+T)*D,s[7]=0,s[8]=(v+b)*H,s[9]=(d-T)*H,s[10]=(1-(h+p))*H,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);const u=1/r,c=1/a,f=1/o;return $t.elements[0]*=u,$t.elements[1]*=u,$t.elements[2]*=u,$t.elements[4]*=c,$t.elements[5]*=c,$t.elements[6]*=c,$t.elements[8]*=f,$t.elements[9]*=f,$t.elements[10]*=f,t.setFromRotationMatrix($t),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){const o=this.elements,l=2*r/(t-e),u=2*r/(n-s),c=(t+e)/(t-e),f=(n+s)/(n-s),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,l=1/(t-e),u=1/(n-s),c=1/(a-r),f=(t+e)*l,h=(n+s)*u,m=(a+r)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mi=new V,$t=new et,Ap=new V(0,0,0),Cp=new V(1,1,1),Ln=new V,Xs=new V,It=new V,Fl=new et,Ol=new ci;class Ps{constructor(e=0,t=0,n=0,s=Ps.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],c=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ps.DefaultOrder="XYZ";Ps.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const Nl=new V,yi=new ci,gn=new et,js=new V,Ki=new V,Pp=new V,Rp=new ci,Ul=new V(1,0,0),zl=new V(0,1,0),Bl=new V(0,0,1),Dp={type:"added"},Gl={type:"removed"};class At extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DefaultUp.clone();const e=new V,t=new Ps,n=new ci,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Gt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=At.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DefaultMatrixWorldAutoUpdate,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ki,js,this.up):gn.lookAt(js,Ki,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(gn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Gl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DefaultUp=new V(0,1,0);At.DefaultMatrixAutoUpdate=!0;At.DefaultMatrixWorldAutoUpdate=!0;const Zt=new V,_n=new V,co=new V,xn=new V,bi=new V,Si=new V,Vl=new V,uo=new V,fo=new V,ho=new V;class yn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zt.subVectors(s,t),_n.subVectors(n,t),co.subVectors(e,t);const a=Zt.dot(Zt),o=Zt.dot(_n),l=Zt.dot(co),u=_n.dot(_n),c=_n.dot(co),f=a*u-o*o;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(u*l-o*c)*h,v=(a*c-o*l)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xn),l.set(0,0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l}static isFrontFacing(e,t,n,s){return Zt.subVectors(n,t),_n.subVectors(e,t),Zt.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Zt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return yn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;bi.subVectors(s,n),Si.subVectors(r,n),uo.subVectors(e,n);const l=bi.dot(uo),u=Si.dot(uo);if(l<=0&&u<=0)return t.copy(n);fo.subVectors(e,s);const c=bi.dot(fo),f=Si.dot(fo);if(c>=0&&f<=c)return t.copy(s);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(bi,a);ho.subVectors(e,r);const m=bi.dot(ho),v=Si.dot(ho);if(v>=0&&m<=v)return t.copy(r);const p=m*u-l*v;if(p<=0&&u>=0&&v<=0)return o=u/(u-v),t.copy(n).addScaledVector(Si,o);const d=c*v-m*f;if(d<=0&&f-c>=0&&m-v>=0)return Vl.subVectors(r,s),o=(f-c)/(f-c+(m-v)),t.copy(s).addScaledVector(Vl,o);const x=1/(d+p+h);return a=p*x,o=h*x,t.copy(n).addScaledVector(bi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ip=0;class Wi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Ni,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yu,this.blendDst=bu,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Es extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new V,Ys=new Ie;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fu extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ou extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fp=0;const kt=new et,po=new At,wi=new V,Ft=new Ls,Ji=new Ls,ft=new V;class jt extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Ou:Fu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ft.min,Ji.min),Ft.expandByPoint(ft),ft.addVectors(Ft.max,Ji.max),Ft.expandByPoint(ft)):(Ft.expandByPoint(Ji.min),Ft.expandByPoint(Ji.max))}Ft.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)ft.fromBufferAttribute(o,u),l&&(wi.fromBufferAttribute(e,u),ft.add(wi)),s=Math.max(s,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let B=0;B<o;B++)u[B]=new V,c[B]=new V;const f=new V,h=new V,m=new V,v=new Ie,p=new Ie,d=new Ie,x=new V,T=new V;function b(B,ee,de){f.fromArray(s,B*3),h.fromArray(s,ee*3),m.fromArray(s,de*3),v.fromArray(a,B*2),p.fromArray(a,ee*2),d.fromArray(a,de*2),h.sub(f),m.sub(f),p.sub(v),d.sub(v);const F=1/(p.x*d.y-d.x*p.y);isFinite(F)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(F),T.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(F),u[B].add(x),u[ee].add(x),u[de].add(x),c[B].add(T),c[ee].add(T),c[de].add(T))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let B=0,ee=S.length;B<ee;++B){const de=S[B],F=de.start,R=de.count;for(let X=F,Z=F+R;X<Z;X+=3)b(n[X+0],n[X+1],n[X+2])}const y=new V,D=new V,H=new V,M=new V;function L(B){H.fromArray(r,B*3),M.copy(H);const ee=u[B];y.copy(ee),y.sub(H.multiplyScalar(H.dot(ee))).normalize(),D.crossVectors(M,ee);const F=D.dot(c[B])<0?-1:1;l[B*4]=y.x,l[B*4+1]=y.y,l[B*4+2]=y.z,l[B*4+3]=F}for(let B=0,ee=S.length;B<ee;++B){const de=S[B],F=de.start,R=de.count;for(let X=F,Z=F+R;X<Z;X+=3)L(n[X+0]),L(n[X+1]),L(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,u=new V,c=new V,f=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,d),o.add(c),l.add(c),u.add(c),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,r),f.subVectors(s,r),c.cross(f),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let m=0,v=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*c;for(let x=0;x<c;x++)h[v++]=u[m++]}return new Ct(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,n);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(t))}const r=e.morphAttributes;for(const u in r){const c=[],f=r[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new et,Ei=new Du,mo=new Tr,Qi=new V,es=new V,ts=new V,go=new V,$s=new V,Zs=new Ie,Ks=new Ie,Js=new Ie,_o=new V,Qs=new V;class ot extends At{constructor(e=new jt,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=o[l],f=r[l];c!==0&&(go.fromBufferAttribute(f,e),a?$s.addScaledVector(go,c):$s.addScaledVector(go.sub(t),c))}t.add($s)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),e.ray.intersectsSphere(mo)===!1)||(Hl.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Hl),n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,u=n.attributes.uv,c=n.attributes.uv2,f=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=s[p.materialIndex],x=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=x,S=T;b<S;b+=3){const y=o.getX(b),D=o.getX(b+1),H=o.getX(b+2);a=er(this,d,e,Ei,u,c,y,D,H),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const x=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);a=er(this,s,e,Ei,u,c,x,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=s[p.materialIndex],x=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=x,S=T;b<S;b+=3){const y=b,D=b+1,H=b+2;a=er(this,d,e,Ei,u,c,y,D,H),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const x=p,T=p+1,b=p+2;a=er(this,s,e,Ei,u,c,x,T,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Op(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ri,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Qs);return u<t.near||u>t.far?null:{distance:u,point:Qs.clone(),object:i}}function er(i,e,t,n,s,r,a,o,l){i.getVertexPosition(a,Qi),i.getVertexPosition(o,es),i.getVertexPosition(l,ts);const u=Op(i,e,t,n,Qi,es,ts,_o);if(u){s&&(Zs.fromBufferAttribute(s,a),Ks.fromBufferAttribute(s,o),Js.fromBufferAttribute(s,l),u.uv=yn.getUV(_o,Qi,es,ts,Zs,Ks,Js,new Ie)),r&&(Zs.fromBufferAttribute(r,a),Ks.fromBufferAttribute(r,o),Js.fromBufferAttribute(r,l),u.uv2=yn.getUV(_o,Qi,es,ts,Zs,Ks,Js,new Ie));const c={a,b:o,c:l,normal:new V,materialIndex:0};yn.getNormal(Qi,es,ts,c.normal),u.face=c}return u}class Rs extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(f,2));function v(p,d,x,T,b,S,y,D,H,M,L){const B=S/H,ee=y/M,de=S/2,F=y/2,R=D/2,X=H+1,Z=M+1;let G=0,I=0;const Y=new V;for(let re=0;re<Z;re++){const U=re*ee-F;for(let N=0;N<X;N++){const se=N*B-de;Y[p]=se*T,Y[d]=U*b,Y[x]=R,u.push(Y.x,Y.y,Y.z),Y[p]=0,Y[d]=0,Y[x]=D>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(N/H),f.push(1-re/M),G+=1}}for(let re=0;re<M;re++)for(let U=0;U<H;U++){const N=h+U+X*re,se=h+U+X*(re+1),ae=h+(U+1)+X*(re+1),ge=h+(U+1)+X*re;l.push(N,se,ge),l.push(se,ae,ge),I+=6}o.addGroup(m,I,L),m+=I,h+=G}}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function Np(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){return i.getRenderTarget()===null&&i.outputEncoding===Ke?sn:Ss}const Up={clone:Hi,merge:yt};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Uu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class Gp extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new zt(Ti,Ai,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new zt(Ti,Ai,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new zt(Ti,Ai,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new zt(Ti,Ai,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new zt(Ti,Ai,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new zt(Ti,Ai,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class zu extends Lt{constructor(e,t,n,s,r,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,s,r,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vp extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rs(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:On});r.uniforms.tEquirect.value=t;const a=new ot(s,r),o=t.minFilter;return t.minFilter===ys&&(t.minFilter=qt),new Gp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const xo=new V,Hp=new V,kp=new Gt;class $n{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xo.subVectors(n,t).cross(Hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(xo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kp.getNormalMatrix(e),s=this.coplanarPoint(xo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Tr,tr=new V;class xa{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],u=n[5],c=n[6],f=n[7],h=n[8],m=n[9],v=n[10],p=n[11],d=n[12],x=n[13],T=n[14],b=n[15];return t[0].setComponents(o-s,f-l,p-h,b-d).normalize(),t[1].setComponents(o+s,f+l,p+h,b+d).normalize(),t[2].setComponents(o+r,f+u,p+m,b+x).normalize(),t[3].setComponents(o-r,f-u,p-m,b-x).normalize(),t[4].setComponents(o-a,f-c,p-v,b-T).normalize(),t[5].setComponents(o+a,f+c,p+v,b+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(tr.x=s.normal.x>0?e.max.x:e.min.x,tr.y=s.normal.y>0?e.max.y:e.min.y,tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wp(i,e){const t=e.isWebGL2,n=new WeakMap;function s(u,c){const f=u.array,h=u.usage,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,f,h),u.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function r(u,c,f){const h=c.array,m=c.updateRange;i.bindBuffer(f,u),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(i.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f===void 0?n.set(u,s(u,c)):f.version<u.version&&(r(f.buffer,u,c),f.version=u.version)}return{get:a,remove:o,update:l}}class va extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,c=l+1,f=e/o,h=t/l,m=[],v=[],p=[],d=[];for(let x=0;x<c;x++){const T=x*h-a;for(let b=0;b<u;b++){const S=b*f-r;v.push(S,-T,0),p.push(0,0,1),d.push(b/o),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let T=0;T<o;T++){const b=T+u*x,S=T+u*(x+1),y=T+1+u*(x+1),D=T+1+u*x;m.push(b,S,D),m.push(S,y,D)}this.setIndex(m),this.setAttribute("position",new Vt(v,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(d,2))}static fromJSON(e){return new va(e.width,e.height,e.widthSegments,e.heightSegments)}}var qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp="vec3 transformed = vec3( position );",Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ng=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ng=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ug=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$g=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:qp,alphamap_pars_fragment:Xp,alphatest_fragment:jp,alphatest_pars_fragment:Yp,aomap_fragment:$p,aomap_pars_fragment:Zp,begin_vertex:Kp,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:um,cube_uv_reflection_fragment:fm,defaultnormal_vertex:hm,displacementmap_pars_vertex:dm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,encodings_fragment:_m,encodings_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:ym,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Fm,envmap_vertex:Sm,fog_vertex:wm,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:Am,gradientmap_pars_fragment:Cm,lightmap_fragment:Lm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Im,lights_toon_fragment:Om,lights_toon_pars_fragment:Nm,lights_phong_fragment:Um,lights_phong_pars_fragment:zm,lights_physical_fragment:Bm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Hm,lights_fragment_end:km,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:jm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:Zm,map_particle_pars_fragment:Km,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:dg,output_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:_g,dithering_fragment:xg,dithering_pars_fragment:vg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Sg,shadowmap_vertex:wg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:Ag,skinning_vertex:Cg,skinnormal_vertex:Lg,specularmap_fragment:Pg,specularmap_pars_fragment:Rg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ig,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:Ng,uv_pars_vertex:Ug,uv_vertex:zg,uv2_pars_fragment:Bg,uv2_pars_vertex:Gg,uv2_vertex:Vg,worldpos_vertex:Hg,background_vert:kg,background_frag:Wg,backgroundCube_vert:qg,backgroundCube_frag:Xg,cube_vert:jg,cube_frag:Yg,depth_vert:$g,depth_frag:Zg,distanceRGBA_vert:Kg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:u_,meshphong_vert:f_,meshphong_frag:h_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:__,points_frag:x_,shadow_vert:v_,shadow_frag:M_,sprite_vert:y_,sprite_frag:b_},ve={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gt},uv2Transform:{value:new Gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}}},an={basic:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:yt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:yt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:yt([ve.points,ve.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:yt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:yt([ve.common,ve.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:yt([ve.sprite,ve.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:yt([ve.common,ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:yt([ve.lights,ve.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};an.physical={uniforms:yt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const nr={r:0,b:0,g:0};function S_(i,e,t,n,s,r,a){const o=new We(0);let l=r===!0?0:1,u,c,f=null,h=0,m=null;function v(d,x){let T=!1,b=x.isScene===!0?x.background:null;b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b));const S=i.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(b=null),b===null?p(o,l):b&&b.isColor&&(p(b,1),T=!0),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Er)?(c===void 0&&(c=new ot(new Rs(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Hi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,H,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=b.encoding!==Ke,(f!==b||h!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,m=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new ot(new va(2,2),new ui({name:"BackgroundMaterial",uniforms:Hi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=b.encoding!==Ke,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null))}function p(d,x){d.getRGB(nr,Nu(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(d,x=1){o.set(d),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:v}}function w_(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let u=l,c=!1;function f(R,X,Z,G,I){let Y=!1;if(a){const re=p(G,Z,X);u!==re&&(u=re,m(u.object)),Y=x(R,G,Z,I),Y&&T(R,G,Z,I)}else{const re=X.wireframe===!0;(u.geometry!==G.id||u.program!==Z.id||u.wireframe!==re)&&(u.geometry=G.id,u.program=Z.id,u.wireframe=re,Y=!0)}I!==null&&t.update(I,34963),(Y||c)&&(c=!1,M(R,X,Z,G),I!==null&&i.bindBuffer(34963,t.get(I).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function v(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,X,Z){const G=Z.wireframe===!0;let I=o[R.id];I===void 0&&(I={},o[R.id]=I);let Y=I[X.id];Y===void 0&&(Y={},I[X.id]=Y);let re=Y[G];return re===void 0&&(re=d(h()),Y[G]=re),re}function d(R){const X=[],Z=[],G=[];for(let I=0;I<s;I++)X[I]=0,Z[I]=0,G[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:G,object:R,attributes:{},index:null}}function x(R,X,Z,G){const I=u.attributes,Y=X.attributes;let re=0;const U=Z.getAttributes();for(const N in U)if(U[N].location>=0){const ae=I[N];let ge=Y[N];if(ge===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;re++}return u.attributesNum!==re||u.index!==G}function T(R,X,Z,G){const I={},Y=X.attributes;let re=0;const U=Z.getAttributes();for(const N in U)if(U[N].location>=0){let ae=Y[N];ae===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),I[N]=ge,re++}u.attributes=I,u.attributesNum=re,u.index=G}function b(){const R=u.newAttributes;for(let X=0,Z=R.length;X<Z;X++)R[X]=0}function S(R){y(R,0)}function y(R,X){const Z=u.newAttributes,G=u.enabledAttributes,I=u.attributeDivisors;Z[R]=1,G[R]===0&&(i.enableVertexAttribArray(R),G[R]=1),I[R]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,X),I[R]=X)}function D(){const R=u.newAttributes,X=u.enabledAttributes;for(let Z=0,G=X.length;Z<G;Z++)X[Z]!==R[Z]&&(i.disableVertexAttribArray(Z),X[Z]=0)}function H(R,X,Z,G,I,Y){n.isWebGL2===!0&&(Z===5124||Z===5125)?i.vertexAttribIPointer(R,X,Z,I,Y):i.vertexAttribPointer(R,X,Z,G,I,Y)}function M(R,X,Z,G){if(n.isWebGL2===!1&&(R.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const I=G.attributes,Y=Z.getAttributes(),re=X.defaultAttributeValues;for(const U in Y){const N=Y[U];if(N.location>=0){let se=I[U];if(se===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),se!==void 0){const ae=se.normalized,ge=se.itemSize,$=t.get(se);if($===void 0)continue;const Ce=$.buffer,ye=$.type,Ee=$.bytesPerElement;if(se.isInterleavedBufferAttribute){const _e=se.data,Ue=_e.stride,Re=se.offset;if(_e.isInstancedInterleavedBuffer){for(let E=0;E<N.locationSize;E++)y(N.location+E,_e.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let E=0;E<N.locationSize;E++)S(N.location+E);i.bindBuffer(34962,Ce);for(let E=0;E<N.locationSize;E++)H(N.location+E,ge/N.locationSize,ye,ae,Ue*Ee,(Re+ge/N.locationSize*E)*Ee)}else{if(se.isInstancedBufferAttribute){for(let _e=0;_e<N.locationSize;_e++)y(N.location+_e,se.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let _e=0;_e<N.locationSize;_e++)S(N.location+_e);i.bindBuffer(34962,Ce);for(let _e=0;_e<N.locationSize;_e++)H(N.location+_e,ge/N.locationSize,ye,ae,ge*Ee,ge/N.locationSize*_e*Ee)}}else if(re!==void 0){const ae=re[U];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(N.location,ae);break;case 3:i.vertexAttrib3fv(N.location,ae);break;case 4:i.vertexAttrib4fv(N.location,ae);break;default:i.vertexAttrib1fv(N.location,ae)}}}}D()}function L(){de();for(const R in o){const X=o[R];for(const Z in X){const G=X[Z];for(const I in G)v(G[I].object),delete G[I];delete X[Z]}delete o[R]}}function B(R){if(o[R.id]===void 0)return;const X=o[R.id];for(const Z in X){const G=X[Z];for(const I in G)v(G[I].object),delete G[I];delete X[Z]}delete o[R.id]}function ee(R){for(const X in o){const Z=o[X];if(Z[R.id]===void 0)continue;const G=Z[R.id];for(const I in G)v(G[I].object),delete G[I];delete Z[R.id]}}function de(){F(),c=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:de,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:ee,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function E_(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,c){i.drawArrays(r,u,c),t.update(c,r,1)}function l(u,c,f){if(f===0)return;let h,m;if(s)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,u,c,f),t.update(c,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function T_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(H){if(H==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),m=i.getParameter(3379),v=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),x=i.getParameter(36348),T=i.getParameter(36349),b=h>0,S=a||e.has("OES_texture_float"),y=b&&S,D=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:D}}function A_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new $n,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const v=f.length!==0||h||n!==0||s;return s=h,t=c(f,m,0),n=f.length,v},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1,u()},this.setState=function(f,h,m){const v=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,x=i.get(f);if(!s||v===null||v.length===0||r&&!d)r?c(null):u();else{const T=r?0:n,b=T*4;let S=x.clippingState||null;l.value=S,S=c(v,h,b,m);for(let y=0;y!==b;++y)S[y]=t[y];x.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,h,m,v){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,v!==!0||d===null){const x=m+p*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<x)&&(d=new Float32Array(x));for(let b=0,S=m;b!==p;++b,S+=4)a.copy(f[b]).applyMatrix4(T,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function C_(i){let e=new WeakMap;function t(a,o){return o===zo?a.mapping=Bi:o===Bo&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===zo||o===Bo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Vp(l.height/2);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class L_ extends Uu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,kl=[.125,.215,.35,.446,.526,.582],Kn=20,vo=new L_,Wl=new We;let Mo=null;const Zn=(1+Math.sqrt(5))/2,Li=1/Zn,ql=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Zn,Li),new V(0,Zn,-Li),new V(Li,0,Zn),new V(-Li,0,Zn),new V(Zn,Li,0),new V(-Zn,Li,0)];class Xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Mo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo),e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:bs,format:Jt,encoding:ai,depthBuffer:!1},s=jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(r)),this._blurMaterial=R_(r,e,t)}return s}_compileMaterial(e){const t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,s){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Wl),c.toneMapping=Sn,c.autoClear=!1;const m=new Es({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),v=new ot(new Rs,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Wl),p=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(o.up.set(0,l[x],0),o.lookAt(u[x],0,0)):T===1?(o.up.set(0,0,l[x]),o.lookAt(0,u[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,u[x]));const b=this._cubeSize;ir(s,T*b,x>2?b:0,b,b),c.setRenderTarget(s),p&&c.render(v,o),c.render(e,o)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ql[(s-1)%ql.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ot(this._lodPlanes[s],u),h=u.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),p=r/v,d=isFinite(r)?1+Math.floor(c*p):Kn;d>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Kn}`);const x=[];let T=0;for(let H=0;H<Kn;++H){const M=H/p,L=Math.exp(-M*M/2);x.push(L),H===0?T+=L:H<d&&(T+=2*L)}for(let H=0;H<x.length;H++)x[H]=x[H]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=x,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=v,h.mipInt.value=b-n;const S=this._sizeLods[s],y=3*S*(s>b-Di?s-b+Di:0),D=4*(this._cubeSize-S);ir(t,y,D,3*S,2*S),l.setRenderTarget(t),l.render(f,vo)}}function P_(i){const e=[],t=[],n=[];let s=i;const r=i-Di+1+kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Di?l=kl[a-i+Di-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,v=6,p=3,d=2,x=1,T=new Float32Array(p*v*m),b=new Float32Array(d*v*m),S=new Float32Array(x*v*m);for(let D=0;D<m;D++){const H=D%3*2/3-1,M=D>2?0:-1,L=[H,M,0,H+2/3,M,0,H+2/3,M+1,0,H,M,0,H+2/3,M+1,0,H,M+1,0];T.set(L,p*v*D),b.set(h,d*v*D);const B=[D,D,D,D,D,D];S.set(B,x*v*D)}const y=new jt;y.setAttribute("position",new Ct(T,p)),y.setAttribute("uv",new Ct(b,d)),y.setAttribute("faceIndex",new Ct(S,x)),e.push(y),s>Di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jl(i,e,t){const n=new li(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function R_(i,e,t){const n=new Float32Array(Kn),s=new V(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Yl(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function $l(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===zo||l===Bo,c=l===Bi||l===Gi;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Xl(i)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&s(f)){t===null&&(t=new Xl(i));const h=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function I_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],34962);const m=f.morphAttributes;for(const v in m){const p=m[v];for(let d=0,x=p.length;d<x;d++)e.update(p[d],34962)}}function u(f){const h=[],m=f.index,v=f.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let b=0,S=T.length;b<S;b+=3){const y=T[b+0],D=T[b+1],H=T[b+2];h.push(y,D,D,H,H,y)}}else{const T=v.array;p=v.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const y=b+0,D=b+1,H=b+2;h.push(y,D,D,H,H,y)}}const d=new(Au(h)?Ou:Fu)(h,1);d.version=p;const x=r.get(f);x&&e.remove(x),r.set(f,d)}function c(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function O_(i,e,t,n){const s=n.isWebGL2;let r;function a(h){r=h}let o,l;function u(h){o=h.type,l=h.bytesPerElement}function c(h,m){i.drawElements(r,m,o,h*l),t.update(m,r,1)}function f(h,m,v){if(v===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,o,h*l,v),t.update(m,r,v)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f}function N_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function U_(i,e){return i[0]-e[0]}function z_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function B_(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new Qe,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f,h){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let x=r.get(c);if(x===void 0||x.count!==d){let Z=function(){R.dispose(),r.delete(c),c.removeEventListener("dispose",Z)};var v=Z;x!==void 0&&x.texture.dispose();const S=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,D=c.morphAttributes.color!==void 0,H=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let B=0;S===!0&&(B=1),y===!0&&(B=2),D===!0&&(B=3);let ee=c.attributes.position.count*B,de=1;ee>e.maxTextureSize&&(de=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const F=new Float32Array(ee*de*4*d),R=new Ru(F,ee,de,d);R.type=Qn,R.needsUpdate=!0;const X=B*4;for(let G=0;G<d;G++){const I=H[G],Y=M[G],re=L[G],U=ee*de*4*G;for(let N=0;N<I.count;N++){const se=N*X;S===!0&&(a.fromBufferAttribute(I,N),F[U+se+0]=a.x,F[U+se+1]=a.y,F[U+se+2]=a.z,F[U+se+3]=0),y===!0&&(a.fromBufferAttribute(Y,N),F[U+se+4]=a.x,F[U+se+5]=a.y,F[U+se+6]=a.z,F[U+se+7]=0),D===!0&&(a.fromBufferAttribute(re,N),F[U+se+8]=a.x,F[U+se+9]=a.y,F[U+se+10]=a.z,F[U+se+11]=re.itemSize===4?a.w:1)}}x={count:d,texture:R,size:new Ie(ee,de)},r.set(c,x),c.addEventListener("dispose",Z)}let T=0;for(let S=0;S<m.length;S++)T+=m[S];const b=c.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",m),h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let d=n[c.id];if(d===void 0||d.length!==p){d=[];for(let y=0;y<p;y++)d[y]=[y,0];n[c.id]=d}for(let y=0;y<p;y++){const D=d[y];D[0]=y,D[1]=m[y]}d.sort(z_);for(let y=0;y<8;y++)y<p&&d[y][1]?(o[y][0]=d[y][0],o[y][1]=d[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(U_);const x=c.morphAttributes.position,T=c.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const D=o[y],H=D[0],M=D[1];H!==Number.MAX_SAFE_INTEGER&&M?(x&&c.getAttribute("morphTarget"+y)!==x[H]&&c.setAttribute("morphTarget"+y,x[H]),T&&c.getAttribute("morphNormal"+y)!==T[H]&&c.setAttribute("morphNormal"+y,T[H]),s[y]=M,b+=M):(x&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),T&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),s[y]=0)}const S=c.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function G_(i,e,t,n){let s=new WeakMap;function r(l){const u=n.render.frame,c=l.geometry,f=e.get(l,c);return s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}const Gu=new Lt,Vu=new Ru,Hu=new Ep,ku=new zu,Zl=[],Kl=[],Jl=new Float32Array(16),Ql=new Float32Array(9),ec=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function at(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ar(i,e){let t=Kl[e];t===void 0&&(t=new Int32Array(e),Kl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function V_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function W_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function q_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),lt(t,n)}}function X_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;Ql.set(n),i.uniformMatrix3fv(this.addr,!1,Ql),lt(t,n)}}function j_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),lt(t,n)}}function Y_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function J_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function n0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Gu,s)}function i0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hu,s)}function s0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ku,s)}function r0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vu,s)}function o0(i){switch(i){case 5126:return V_;case 35664:return H_;case 35665:return k_;case 35666:return W_;case 35674:return q_;case 35675:return X_;case 35676:return j_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return K_;case 5125:return J_;case 36294:return Q_;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(i,e){i.uniform1fv(this.addr,e)}function l0(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function c0(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function u0(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function f0(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h0(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d0(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p0(i,e){i.uniform1iv(this.addr,e)}function m0(i,e){i.uniform2iv(this.addr,e)}function g0(i,e){i.uniform3iv(this.addr,e)}function _0(i,e){i.uniform4iv(this.addr,e)}function x0(i,e){i.uniform1uiv(this.addr,e)}function v0(i,e){i.uniform2uiv(this.addr,e)}function M0(i,e){i.uniform3uiv(this.addr,e)}function y0(i,e){i.uniform4uiv(this.addr,e)}function b0(i,e,t){const n=this.cache,s=e.length,r=Ar(t,s);at(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gu,r[a])}function S0(i,e,t){const n=this.cache,s=e.length,r=Ar(t,s);at(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hu,r[a])}function w0(i,e,t){const n=this.cache,s=e.length,r=Ar(t,s);at(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ku,r[a])}function E0(i,e,t){const n=this.cache,s=e.length,r=Ar(t,s);at(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vu,r[a])}function T0(i){switch(i){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return f0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return v0;case 36295:return M0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=o0(t.type)}}class C0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=T0(t.type)}}class L0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function tc(i,e){i.seq.push(e),i.map[e.id]=e}function P0(i,e,t){const n=i.name,s=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),a=yo.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){tc(t,u===void 0?new A0(o,i,e):new C0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new L0(o),tc(t,f)),t=f}}}class fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);P0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function nc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let R0=0;function D0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function I0(i){switch(i){case ai:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ic(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+D0(i.getShaderSource(e),a)}else return s}function F0(i,e){const t=I0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function O0(i,e){let t;switch(e){case Jd:t="Linear";break;case Qd:t="Reinhard";break;case ep:t="OptimizedCineon";break;case tp:t="ACESFilmic";break;case np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function N0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function U0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rs(i){return i!==""}function sc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(B0,G0)}function G0(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wo(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(V0,H0)}function H0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ss&&(e="SHADOWMAP_TYPE_VSM"),e}function W0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Su:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case Kd:e="ENVMAP_BLENDING_ADD";break}return e}function j0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=k0(t),u=W0(t),c=q0(t),f=X0(t),h=j0(t),m=t.isWebGL2?"":N0(t),v=U0(r),p=s.createProgram();let d,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[v].filter(rs).join(`
`),d.length>0&&(d+=`
`),x=[m,v].filter(rs).join(`
`),x.length>0&&(x+=`
`)):(d=[ac(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),x=[m,ac(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Sn?O0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,F0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=Wo(a),a=sc(a,t),a=rc(a,t),o=Wo(o),o=sc(o,t),o=rc(o,t),a=oc(a),o=oc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=T+d+a,S=T+x+o,y=nc(s,35633,b),D=nc(s,35632,S);if(s.attachShader(p,y),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const L=s.getProgramInfoLog(p).trim(),B=s.getShaderInfoLog(y).trim(),ee=s.getShaderInfoLog(D).trim();let de=!0,F=!0;if(s.getProgramParameter(p,35714)===!1){de=!1;const R=ic(s,y,"vertex"),X=ic(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+R+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||ee==="")&&(F=!1);F&&(this.diagnostics={runnable:de,programLog:L,vertexShader:{log:B,prefix:d},fragmentShader:{log:ee,prefix:x}})}s.deleteShader(y),s.deleteShader(D);let H;this.getUniforms=function(){return H===void 0&&(H=new fr(s,p)),H};let M;return this.getAttributes=function(){return M===void 0&&(M=z0(s,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=D,this}let $0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new K0(e),t.set(e,n)),n}}class K0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function J0(i,e,t,n,s,r,a){const o=new Iu,l=new Z0,u=[],c=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,L,B,ee,de){const F=ee.fog,R=de.geometry,X=M.isMeshStandardMaterial?ee.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),G=Z&&Z.mapping===Er?Z.image.height:null,I=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Y=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,re=Y!==void 0?Y.length:0;let U=0;R.morphAttributes.position!==void 0&&(U=1),R.morphAttributes.normal!==void 0&&(U=2),R.morphAttributes.color!==void 0&&(U=3);let N,se,ae,ge;if(I){const Ue=an[I];N=Ue.vertexShader,se=Ue.fragmentShader}else N=M.vertexShader,se=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const $=i.getRenderTarget(),Ce=M.alphaTest>0,ye=M.clearcoat>0,Ee=M.iridescence>0;return{isWebGL2:c,shaderID:I,shaderName:M.type,vertexShader:N,fragmentShader:se,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:de.isInstancedMesh===!0,instancingColor:de.isInstancedMesh===!0&&de.instanceColor!==null,supportsVertexTextures:h,outputEncoding:$===null?i.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:ai,map:!!M.map,matcap:!!M.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:G,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===yp,tangentSpaceNormalMap:M.normalMapType===Tu,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Ke,clearcoat:ye,clearcoatMap:ye&&!!M.clearcoatMap,clearcoatRoughnessMap:ye&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!M.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!M.iridescenceMap,iridescenceThicknessMap:Ee&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Ni,alphaMap:!!M.alphaMap,alphaTest:Ce,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!R.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!F,useFog:M.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:de.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:U,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:Sn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nt,flipSided:M.side===Xt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)L.push(B),L.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(x(L,M),T(L,M),L.push(i.outputEncoding)),L.push(M.customProgramCacheKey),L.join()}function x(M,L){M.push(L.precision),M.push(L.outputEncoding),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.combine),M.push(L.vertexUvs),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function T(M,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.physicallyCorrectLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.specularIntensityMap&&o.enable(15),L.specularColorMap&&o.enable(16),L.transmission&&o.enable(17),L.transmissionMap&&o.enable(18),L.thicknessMap&&o.enable(19),L.sheen&&o.enable(20),L.sheenColorMap&&o.enable(21),L.sheenRoughnessMap&&o.enable(22),L.decodeVideoTexture&&o.enable(23),L.opaque&&o.enable(24),M.push(o.mask)}function b(M){const L=v[M.type];let B;if(L){const ee=an[L];B=Up.clone(ee.uniforms)}else B=M.uniforms;return B}function S(M,L){let B;for(let ee=0,de=u.length;ee<de;ee++){const F=u[ee];if(F.cacheKey===L){B=F,++B.usedTimes;break}}return B===void 0&&(B=new Y0(i,L,M,r),u.push(B)),B}function y(M){if(--M.usedTimes===0){const L=u.indexOf(M);u[L]=u[u.length-1],u.pop(),M.destroy()}}function D(M){l.remove(M)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:S,releaseProgram:y,releaseShaderCache:D,programs:u,dispose:H}}function Q0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ex(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,h,m,v,p,d){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:p,group:d},i[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=p,x.group=d),e++,x}function o(f,h,m,v,p,d){const x=a(f,h,m,v,p,d);m.transmission>0?n.push(x):m.transparent===!0?s.push(x):t.push(x)}function l(f,h,m,v,p,d){const x=a(f,h,m,v,p,d);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function u(f,h){t.length>1&&t.sort(f||ex),n.length>1&&n.sort(h||lc),s.length>1&&s.sort(h||lc)}function c(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:c,sort:u}}function tx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new cc,i.set(n,[a])):s>=r.length?(a=new cc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function nx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new We};break;case"SpotLight":t={position:new V,direction:new V,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sx=0;function rx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ox(i,e){const t=new nx,n=ix(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)s.probe.push(new V);const r=new V,a=new et,o=new et;function l(c,f){let h=0,m=0,v=0;for(let ee=0;ee<9;ee++)s.probe[ee].set(0,0,0);let p=0,d=0,x=0,T=0,b=0,S=0,y=0,D=0,H=0,M=0;c.sort(rx);const L=f!==!0?Math.PI:1;for(let ee=0,de=c.length;ee<de;ee++){const F=c[ee],R=F.color,X=F.intensity,Z=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=R.r*X*L,m+=R.g*X*L,v+=R.b*X*L;else if(F.isLightProbe)for(let I=0;I<9;I++)s.probe[I].addScaledVector(F.sh.coefficients[I],X);else if(F.isDirectionalLight){const I=t.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*L),F.castShadow){const Y=F.shadow,re=n.get(F);re.shadowBias=Y.bias,re.shadowNormalBias=Y.normalBias,re.shadowRadius=Y.radius,re.shadowMapSize=Y.mapSize,s.directionalShadow[p]=re,s.directionalShadowMap[p]=G,s.directionalShadowMatrix[p]=F.shadow.matrix,S++}s.directional[p]=I,p++}else if(F.isSpotLight){const I=t.get(F);I.position.setFromMatrixPosition(F.matrixWorld),I.color.copy(R).multiplyScalar(X*L),I.distance=Z,I.coneCos=Math.cos(F.angle),I.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),I.decay=F.decay,s.spot[x]=I;const Y=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,Y.updateMatrices(F),F.castShadow&&M++),s.spotLightMatrix[x]=Y.matrix,F.castShadow){const re=n.get(F);re.shadowBias=Y.bias,re.shadowNormalBias=Y.normalBias,re.shadowRadius=Y.radius,re.shadowMapSize=Y.mapSize,s.spotShadow[x]=re,s.spotShadowMap[x]=G,D++}x++}else if(F.isRectAreaLight){const I=t.get(F);I.color.copy(R).multiplyScalar(X),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),s.rectArea[T]=I,T++}else if(F.isPointLight){const I=t.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*L),I.distance=F.distance,I.decay=F.decay,F.castShadow){const Y=F.shadow,re=n.get(F);re.shadowBias=Y.bias,re.shadowNormalBias=Y.normalBias,re.shadowRadius=Y.radius,re.shadowMapSize=Y.mapSize,re.shadowCameraNear=Y.camera.near,re.shadowCameraFar=Y.camera.far,s.pointShadow[d]=re,s.pointShadowMap[d]=G,s.pointShadowMatrix[d]=F.shadow.matrix,y++}s.point[d]=I,d++}else if(F.isHemisphereLight){const I=t.get(F);I.skyColor.copy(F.color).multiplyScalar(X*L),I.groundColor.copy(F.groundColor).multiplyScalar(X*L),s.hemi[b]=I,b++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=v;const B=s.hash;(B.directionalLength!==p||B.pointLength!==d||B.spotLength!==x||B.rectAreaLength!==T||B.hemiLength!==b||B.numDirectionalShadows!==S||B.numPointShadows!==y||B.numSpotShadows!==D||B.numSpotMaps!==H)&&(s.directional.length=p,s.spot.length=x,s.rectArea.length=T,s.point.length=d,s.hemi.length=b,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=y,s.pointShadowMap.length=y,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=y,s.spotLightMatrix.length=D+H-M,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=M,B.directionalLength=p,B.pointLength=d,B.spotLength=x,B.rectAreaLength=T,B.hemiLength=b,B.numDirectionalShadows=S,B.numPointShadows=y,B.numSpotShadows=D,B.numSpotMaps=H,s.version=sx++)}function u(c,f){let h=0,m=0,v=0,p=0,d=0;const x=f.matrixWorldInverse;for(let T=0,b=c.length;T<b;T++){const S=c[T];if(S.isDirectionalLight){const y=s.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),h++}else if(S.isSpotLight){const y=s.spot[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),v++}else if(S.isRectAreaLight){const y=s.rectArea[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),o.identity(),a.copy(S.matrixWorld),a.premultiply(x),o.extractRotation(a),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const y=s.point[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),m++}else if(S.isHemisphereLight){const y=s.hemi[d];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(x),d++}}}return{setup:l,setupView:u,state:s}}function uc(i,e){const t=new ox(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function ax(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new uc(i,e),t.set(r,[l])):a>=o.length?(l=new uc(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class lx extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cx extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hx(i,e,t){let n=new xa;const s=new Ie,r=new Ie,a=new Qe,o=new lx({depthPacking:Mp}),l=new cx,u={},c=t.maxTextureSize,f={0:Xt,1:ri,2:Nt},h=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:ux,fragmentShader:fx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new jt;v.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ot(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu,this.render=function(S,y,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const H=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(On),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let ee=0,de=S.length;ee<de;ee++){const F=S[ee],R=F.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);const X=R.getFrameExtents();if(s.multiply(X),r.copy(R.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/X.x),s.x=r.x*X.x,R.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/X.y),s.y=r.y*X.y,R.mapSize.y=r.y)),R.map===null){const G=this.type!==ss?{minFilter:bt,magFilter:bt}:{};R.map=new li(s.x,s.y,G),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();const Z=R.getViewportCount();for(let G=0;G<Z;G++){const I=R.getViewport(G);a.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),B.viewport(a),R.updateMatrices(F,G),n=R.getFrustum(),b(y,D,R.camera,F,this.type)}R.isPointLightShadow!==!0&&this.type===ss&&x(R,D),R.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(H,M,L)};function x(S,y){const D=e.update(p);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new li(s.x,s.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(y,null,D,h,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(y,null,D,m,p,null)}function T(S,y,D,H,M,L){let B=null;const ee=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(ee!==void 0)B=ee;else if(B=D.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const de=B.uuid,F=y.uuid;let R=u[de];R===void 0&&(R={},u[de]=R);let X=R[F];X===void 0&&(X=B.clone(),R[F]=X),B=X}return B.visible=y.visible,B.wireframe=y.wireframe,L===ss?B.side=y.shadowSide!==null?y.shadowSide:y.side:B.side=y.shadowSide!==null?y.shadowSide:f[y.side],B.alphaMap=y.alphaMap,B.alphaTest=y.alphaTest,B.map=y.map,B.clipShadows=y.clipShadows,B.clippingPlanes=y.clippingPlanes,B.clipIntersection=y.clipIntersection,B.displacementMap=y.displacementMap,B.displacementScale=y.displacementScale,B.displacementBias=y.displacementBias,B.wireframeLinewidth=y.wireframeLinewidth,B.linewidth=y.linewidth,D.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(D.matrixWorld),B.nearDistance=H,B.farDistance=M),B}function b(S,y,D,H,M){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===ss)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);const ee=e.update(S),de=S.material;if(Array.isArray(de)){const F=ee.groups;for(let R=0,X=F.length;R<X;R++){const Z=F[R],G=de[Z.materialIndex];if(G&&G.visible){const I=T(S,G,H,D.near,D.far,M);i.renderBufferDirect(D,null,ee,I,S,Z)}}}else if(de.visible){const F=T(S,de,H,D.near,D.far,M);i.renderBufferDirect(D,null,ee,F,S,null)}}const B=S.children;for(let ee=0,de=B.length;ee<de;ee++)b(B[ee],y,D,H,M)}}function dx(i,e,t){const n=t.isWebGL2;function s(){let O=!1;const J=new Qe;let he=null;const be=new Qe(0,0,0,0);return{setMask:function(Te){he!==Te&&!O&&(i.colorMask(Te,Te,Te,Te),he=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Xe,ct,dt,Bn){Bn===!0&&(Te*=dt,Xe*=dt,ct*=dt),J.set(Te,Xe,ct,dt),be.equals(J)===!1&&(i.clearColor(Te,Xe,ct,dt),be.copy(J))},reset:function(){O=!1,he=null,be.set(-1,0,0,0)}}}function r(){let O=!1,J=null,he=null,be=null;return{setTest:function(Te){Te?Ce(2929):ye(2929)},setMask:function(Te){J!==Te&&!O&&(i.depthMask(Te),J=Te)},setFunc:function(Te){if(he!==Te){switch(Te){case kd:i.depthFunc(512);break;case Wd:i.depthFunc(519);break;case qd:i.depthFunc(513);break;case Uo:i.depthFunc(515);break;case Xd:i.depthFunc(514);break;case jd:i.depthFunc(518);break;case Yd:i.depthFunc(516);break;case $d:i.depthFunc(517);break;default:i.depthFunc(515)}he=Te}},setLocked:function(Te){O=Te},setClear:function(Te){be!==Te&&(i.clearDepth(Te),be=Te)},reset:function(){O=!1,J=null,he=null,be=null}}}function a(){let O=!1,J=null,he=null,be=null,Te=null,Xe=null,ct=null,dt=null,Bn=null;return{setTest:function(Je){O||(Je?Ce(2960):ye(2960))},setMask:function(Je){J!==Je&&!O&&(i.stencilMask(Je),J=Je)},setFunc:function(Je,fn,Ht){(he!==Je||be!==fn||Te!==Ht)&&(i.stencilFunc(Je,fn,Ht),he=Je,be=fn,Te=Ht)},setOp:function(Je,fn,Ht){(Xe!==Je||ct!==fn||dt!==Ht)&&(i.stencilOp(Je,fn,Ht),Xe=Je,ct=fn,dt=Ht)},setLocked:function(Je){O=Je},setClear:function(Je){Bn!==Je&&(i.clearStencil(Je),Bn=Je)},reset:function(){O=!1,J=null,he=null,be=null,Te=null,Xe=null,ct=null,dt=null,Bn=null}}}const o=new s,l=new r,u=new a,c=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,p=[],d=null,x=!1,T=null,b=null,S=null,y=null,D=null,H=null,M=null,L=!1,B=null,ee=null,de=null,F=null,R=null;const X=i.getParameter(35661);let Z=!1,G=0;const I=i.getParameter(7938);I.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=G>=1):I.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=G>=2);let Y=null,re={};const U=i.getParameter(3088),N=i.getParameter(2978),se=new Qe().fromArray(U),ae=new Qe().fromArray(N);function ge(O,J,he){const be=new Uint8Array(4),Te=i.createTexture();i.bindTexture(O,Te),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let Xe=0;Xe<he;Xe++)i.texImage2D(J+Xe,0,6408,1,1,0,6408,5121,be);return Te}const $={};$[3553]=ge(3553,3553,1),$[34067]=ge(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ce(2929),l.setFunc(Uo),oe(!1),te(tl),Ce(2884),C(On);function Ce(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ye(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ee(O,J){return m[O]!==J?(i.bindFramebuffer(O,J),m[O]=J,n&&(O===36009&&(m[36160]=J),O===36160&&(m[36009]=J)),!0):!1}function _e(O,J){let he=p,be=!1;if(O)if(he=v.get(J),he===void 0&&(he=[],v.set(J,he)),O.isWebGLMultipleRenderTargets){const Te=O.texture;if(he.length!==Te.length||he[0]!==36064){for(let Xe=0,ct=Te.length;Xe<ct;Xe++)he[Xe]=36064+Xe;he.length=Te.length,be=!0}}else he[0]!==36064&&(he[0]=36064,be=!0);else he[0]!==1029&&(he[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ue(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const Re={[Ri]:32774,[Dd]:32778,[Id]:32779};if(n)Re[rl]=32775,Re[ol]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Re[rl]=O.MIN_EXT,Re[ol]=O.MAX_EXT)}const E={[Fd]:0,[Od]:1,[Nd]:768,[yu]:770,[Hd]:776,[Gd]:774,[zd]:772,[Ud]:769,[bu]:771,[Vd]:775,[Bd]:773};function C(O,J,he,be,Te,Xe,ct,dt){if(O===On){x===!0&&(ye(3042),x=!1);return}if(x===!1&&(Ce(3042),x=!0),O!==Rd){if(O!==T||dt!==L){if((b!==Ri||D!==Ri)&&(i.blendEquation(32774),b=Ri,D=Ri),dt)switch(O){case Ni:i.blendFuncSeparate(1,771,1,771);break;case nl:i.blendFunc(1,1);break;case il:i.blendFuncSeparate(0,769,0,1);break;case sl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ni:i.blendFuncSeparate(770,771,1,771);break;case nl:i.blendFunc(770,1);break;case il:i.blendFuncSeparate(0,769,0,1);break;case sl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,y=null,H=null,M=null,T=O,L=dt}return}Te=Te||J,Xe=Xe||he,ct=ct||be,(J!==b||Te!==D)&&(i.blendEquationSeparate(Re[J],Re[Te]),b=J,D=Te),(he!==S||be!==y||Xe!==H||ct!==M)&&(i.blendFuncSeparate(E[he],E[be],E[Xe],E[ct]),S=he,y=be,H=Xe,M=ct),T=O,L=!1}function q(O,J){O.side===Nt?ye(2884):Ce(2884);let he=O.side===Xt;J&&(he=!he),oe(he),O.blending===Ni&&O.transparent===!1?C(On):C(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const be=O.stencilWrite;u.setTest(be),be&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ce(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ce(32926):ye(32926)}function oe(O){B!==O&&(O?i.frontFace(2304):i.frontFace(2305),B=O)}function te(O){O!==Cd?(Ce(2884),O!==ee&&(O===tl?i.cullFace(1029):O===Ld?i.cullFace(1028):i.cullFace(1032))):ye(2884),ee=O}function ne(O){O!==de&&(Z&&i.lineWidth(O),de=O)}function ce(O,J,he){O?(Ce(32823),(F!==J||R!==he)&&(i.polygonOffset(J,he),F=J,R=he)):ye(32823)}function fe(O){O?Ce(3089):ye(3089)}function ue(O){O===void 0&&(O=33984+X-1),Y!==O&&(i.activeTexture(O),Y=O)}function _(O,J,he){he===void 0&&(Y===null?he=33984+X-1:he=Y);let be=re[he];be===void 0&&(be={type:void 0,texture:void 0},re[he]=be),(be.type!==O||be.texture!==J)&&(Y!==he&&(i.activeTexture(he),Y=he),i.bindTexture(O,J||$[O]),be.type=O,be.texture=J)}function g(){const O=re[Y];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function P(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function A(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){se.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function we(O){ae.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ae.copy(O))}function Le(O,J){let he=f.get(J);he===void 0&&(he=new WeakMap,f.set(J,he));let be=he.get(O);be===void 0&&(be=i.getUniformBlockIndex(J,O.name),he.set(O,be))}function Pe(O,J){const be=f.get(J).get(O);c.get(J)!==be&&(i.uniformBlockBinding(J,be,O.__bindingPointIndex),c.set(J,be))}function qe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,re={},m={},v=new WeakMap,p=[],d=null,x=!1,T=null,b=null,S=null,y=null,D=null,H=null,M=null,L=!1,B=null,ee=null,de=null,F=null,R=null,se.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ce,disable:ye,bindFramebuffer:Ee,drawBuffers:_e,useProgram:Ue,setBlending:C,setMaterial:q,setFlipSided:oe,setCullFace:te,setLineWidth:ne,setPolygonOffset:ce,setScissorTest:fe,activeTexture:ue,bindTexture:_,unbindTexture:g,compressedTexImage2D:P,compressedTexImage3D:j,texImage2D:xe,texImage3D:me,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:z,texStorage3D:pe,texSubImage2D:K,texSubImage3D:le,compressedTexSubImage2D:Me,compressedTexSubImage3D:A,scissor:Se,viewport:we,reset:qe}}function px(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,u=s.maxCubemapSize,c=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(_,g){return x?new OffscreenCanvas(_,g):ws("canvas")}function b(_,g,P,j){let K=1;if((_.width>j||_.height>j)&&(K=j/Math.max(_.width,_.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){const le=g?ko:Math.floor,Me=le(K*_.width),A=le(K*_.height);p===void 0&&(p=T(Me,A));const z=P?T(Me,A):p;return z.width=Me,z.height=A,z.getContext("2d").drawImage(_,0,0,Me,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+Me+"x"+A+")."),z}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function S(_){return Dl(_.width)&&Dl(_.height)}function y(_){return o?!1:_.wrapS!==Kt||_.wrapT!==Kt||_.minFilter!==bt&&_.minFilter!==qt}function D(_,g){return _.generateMipmaps&&g&&_.minFilter!==bt&&_.minFilter!==qt}function H(_){i.generateMipmap(_)}function M(_,g,P,j,K=!1){if(o===!1)return g;if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let le=g;return g===6403&&(P===5126&&(le=33326),P===5131&&(le=33325),P===5121&&(le=33321)),g===33319&&(P===5126&&(le=33328),P===5131&&(le=33327),P===5121&&(le=33323)),g===6408&&(P===5126&&(le=34836),P===5131&&(le=34842),P===5121&&(le=j===Ke&&K===!1?35907:32856),P===32819&&(le=32854),P===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function L(_,g,P){return D(_,P)===!0||_.isFramebufferTexture&&_.minFilter!==bt&&_.minFilter!==qt?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function B(_){return _===bt||_===al||_===Wr?9728:9729}function ee(_){const g=_.target;g.removeEventListener("dispose",ee),F(g),g.isVideoTexture&&v.delete(g)}function de(_){const g=_.target;g.removeEventListener("dispose",de),X(g)}function F(_){const g=n.get(_);if(g.__webglInit===void 0)return;const P=_.source,j=d.get(P);if(j){const K=j[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(_),Object.keys(j).length===0&&d.delete(P)}n.remove(_)}function R(_){const g=n.get(_);i.deleteTexture(g.__webglTexture);const P=_.source,j=d.get(P);delete j[g.__cacheKey],a.memory.textures--}function X(_){const g=_.texture,P=n.get(_),j=n.get(g);if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)i.deleteFramebuffer(P.__webglFramebuffer[K]),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[K]);else{if(i.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let K=0;K<P.__webglColorRenderbuffer.length;K++)P.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[K]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let K=0,le=g.length;K<le;K++){const Me=n.get(g[K]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(g[K])}n.remove(g),n.remove(_)}let Z=0;function G(){Z=0}function I(){const _=Z;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),Z+=1,_}function Y(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.encoding),g.join()}function re(_,g){const P=n.get(_);if(_.isVideoTexture&&fe(_),_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){const j=_.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(P,_,g);return}}t.bindTexture(3553,P.__webglTexture,33984+g)}function U(_,g){const P=n.get(_);if(_.version>0&&P.__version!==_.version){ye(P,_,g);return}t.bindTexture(35866,P.__webglTexture,33984+g)}function N(_,g){const P=n.get(_);if(_.version>0&&P.__version!==_.version){ye(P,_,g);return}t.bindTexture(32879,P.__webglTexture,33984+g)}function se(_,g){const P=n.get(_);if(_.version>0&&P.__version!==_.version){Ee(P,_,g);return}t.bindTexture(34067,P.__webglTexture,33984+g)}const ae={[Go]:10497,[Kt]:33071,[Vo]:33648},ge={[bt]:9728,[al]:9984,[Wr]:9986,[qt]:9729,[ip]:9985,[ys]:9987};function $(_,g,P){if(P?(i.texParameteri(_,10242,ae[g.wrapS]),i.texParameteri(_,10243,ae[g.wrapT]),(_===32879||_===35866)&&i.texParameteri(_,32882,ae[g.wrapR]),i.texParameteri(_,10240,ge[g.magFilter]),i.texParameteri(_,10241,ge[g.minFilter])):(i.texParameteri(_,10242,33071),i.texParameteri(_,10243,33071),(_===32879||_===35866)&&i.texParameteri(_,32882,33071),(g.wrapS!==Kt||g.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(_,10240,B(g.magFilter)),i.texParameteri(_,10241,B(g.minFilter)),g.minFilter!==bt&&g.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===bt||g.minFilter!==Wr&&g.minFilter!==ys||g.type===Qn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===bs&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(_,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function Ce(_,g){let P=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",ee));const j=g.source;let K=d.get(j);K===void 0&&(K={},d.set(j,K));const le=Y(g);if(le!==_.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,P=!0),K[le].usedTimes++;const Me=K[_.__cacheKey];Me!==void 0&&(K[_.__cacheKey].usedTimes--,Me.usedTimes===0&&R(g)),_.__cacheKey=le,_.__webglTexture=K[le].texture}return P}function ye(_,g,P){let j=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=35866),g.isData3DTexture&&(j=32879);const K=Ce(_,g),le=g.source;t.bindTexture(j,_.__webglTexture,33984+P);const Me=n.get(le);if(le.version!==Me.__version||K===!0){t.activeTexture(33984+P),i.pixelStorei(37440,g.flipY),i.pixelStorei(37441,g.premultiplyAlpha),i.pixelStorei(3317,g.unpackAlignment),i.pixelStorei(37443,0);const A=y(g)&&S(g.image)===!1;let z=b(g.image,A,!1,c);z=ue(g,z);const pe=S(z)||o,xe=r.convert(g.format,g.encoding);let me=r.convert(g.type),Se=M(g.internalFormat,xe,me,g.encoding,g.isVideoTexture);$(j,g,pe);let we;const Le=g.mipmaps,Pe=o&&g.isVideoTexture!==!0,qe=Me.__version===void 0||K===!0,O=L(g,z,pe);if(g.isDepthTexture)Se=6402,o?g.type===Qn?Se=36012:g.type===Jn?Se=33190:g.type===Ui?Se=35056:Se=33189:g.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ti&&Se===6402&&g.type!==Eu&&g.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Jn,me=r.convert(g.type)),g.format===Vi&&Se===6402&&(Se=34041,g.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ui,me=r.convert(g.type))),qe&&(Pe?t.texStorage2D(3553,1,Se,z.width,z.height):t.texImage2D(3553,0,Se,z.width,z.height,0,xe,me,null));else if(g.isDataTexture)if(Le.length>0&&pe){Pe&&qe&&t.texStorage2D(3553,O,Se,Le[0].width,Le[0].height);for(let J=0,he=Le.length;J<he;J++)we=Le[J],Pe?t.texSubImage2D(3553,J,0,0,we.width,we.height,xe,me,we.data):t.texImage2D(3553,J,Se,we.width,we.height,0,xe,me,we.data);g.generateMipmaps=!1}else Pe?(qe&&t.texStorage2D(3553,O,Se,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,xe,me,z.data)):t.texImage2D(3553,0,Se,z.width,z.height,0,xe,me,z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&qe&&t.texStorage3D(35866,O,Se,Le[0].width,Le[0].height,z.depth);for(let J=0,he=Le.length;J<he;J++)we=Le[J],g.format!==Jt?xe!==null?Pe?t.compressedTexSubImage3D(35866,J,0,0,0,we.width,we.height,z.depth,xe,we.data,0,0):t.compressedTexImage3D(35866,J,Se,we.width,we.height,z.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,J,0,0,0,we.width,we.height,z.depth,xe,me,we.data):t.texImage3D(35866,J,Se,we.width,we.height,z.depth,0,xe,me,we.data)}else{Pe&&qe&&t.texStorage2D(3553,O,Se,Le[0].width,Le[0].height);for(let J=0,he=Le.length;J<he;J++)we=Le[J],g.format!==Jt?xe!==null?Pe?t.compressedTexSubImage2D(3553,J,0,0,we.width,we.height,xe,we.data):t.compressedTexImage2D(3553,J,Se,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,J,0,0,we.width,we.height,xe,me,we.data):t.texImage2D(3553,J,Se,we.width,we.height,0,xe,me,we.data)}else if(g.isDataArrayTexture)Pe?(qe&&t.texStorage3D(35866,O,Se,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,xe,me,z.data)):t.texImage3D(35866,0,Se,z.width,z.height,z.depth,0,xe,me,z.data);else if(g.isData3DTexture)Pe?(qe&&t.texStorage3D(32879,O,Se,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,xe,me,z.data)):t.texImage3D(32879,0,Se,z.width,z.height,z.depth,0,xe,me,z.data);else if(g.isFramebufferTexture){if(qe)if(Pe)t.texStorage2D(3553,O,Se,z.width,z.height);else{let J=z.width,he=z.height;for(let be=0;be<O;be++)t.texImage2D(3553,be,Se,J,he,0,xe,me,null),J>>=1,he>>=1}}else if(Le.length>0&&pe){Pe&&qe&&t.texStorage2D(3553,O,Se,Le[0].width,Le[0].height);for(let J=0,he=Le.length;J<he;J++)we=Le[J],Pe?t.texSubImage2D(3553,J,0,0,xe,me,we):t.texImage2D(3553,J,Se,xe,me,we);g.generateMipmaps=!1}else Pe?(qe&&t.texStorage2D(3553,O,Se,z.width,z.height),t.texSubImage2D(3553,0,0,0,xe,me,z)):t.texImage2D(3553,0,Se,xe,me,z);D(g,pe)&&H(j),Me.__version=le.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Ee(_,g,P){if(g.image.length!==6)return;const j=Ce(_,g),K=g.source;t.bindTexture(34067,_.__webglTexture,33984+P);const le=n.get(K);if(K.version!==le.__version||j===!0){t.activeTexture(33984+P),i.pixelStorei(37440,g.flipY),i.pixelStorei(37441,g.premultiplyAlpha),i.pixelStorei(3317,g.unpackAlignment),i.pixelStorei(37443,0);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,A=g.image[0]&&g.image[0].isDataTexture,z=[];for(let J=0;J<6;J++)!Me&&!A?z[J]=b(g.image[J],!1,!0,u):z[J]=A?g.image[J].image:g.image[J],z[J]=ue(g,z[J]);const pe=z[0],xe=S(pe)||o,me=r.convert(g.format,g.encoding),Se=r.convert(g.type),we=M(g.internalFormat,me,Se,g.encoding),Le=o&&g.isVideoTexture!==!0,Pe=le.__version===void 0||j===!0;let qe=L(g,pe,xe);$(34067,g,xe);let O;if(Me){Le&&Pe&&t.texStorage2D(34067,qe,we,pe.width,pe.height);for(let J=0;J<6;J++){O=z[J].mipmaps;for(let he=0;he<O.length;he++){const be=O[he];g.format!==Jt?me!==null?Le?t.compressedTexSubImage2D(34069+J,he,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(34069+J,he,we,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+J,he,0,0,be.width,be.height,me,Se,be.data):t.texImage2D(34069+J,he,we,be.width,be.height,0,me,Se,be.data)}}}else{O=g.mipmaps,Le&&Pe&&(O.length>0&&qe++,t.texStorage2D(34067,qe,we,z[0].width,z[0].height));for(let J=0;J<6;J++)if(A){Le?t.texSubImage2D(34069+J,0,0,0,z[J].width,z[J].height,me,Se,z[J].data):t.texImage2D(34069+J,0,we,z[J].width,z[J].height,0,me,Se,z[J].data);for(let he=0;he<O.length;he++){const Te=O[he].image[J].image;Le?t.texSubImage2D(34069+J,he+1,0,0,Te.width,Te.height,me,Se,Te.data):t.texImage2D(34069+J,he+1,we,Te.width,Te.height,0,me,Se,Te.data)}}else{Le?t.texSubImage2D(34069+J,0,0,0,me,Se,z[J]):t.texImage2D(34069+J,0,we,me,Se,z[J]);for(let he=0;he<O.length;he++){const be=O[he];Le?t.texSubImage2D(34069+J,he+1,0,0,me,Se,be.image[J]):t.texImage2D(34069+J,he+1,we,me,Se,be.image[J])}}}D(g,xe)&&H(34067),le.__version=K.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function _e(_,g,P,j,K){const le=r.convert(P.format,P.encoding),Me=r.convert(P.type),A=M(P.internalFormat,le,Me,P.encoding);n.get(g).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,A,g.width,g.height,g.depth,0,le,Me,null):t.texImage2D(K,0,A,g.width,g.height,0,le,Me,null)),t.bindFramebuffer(36160,_),ce(g)?h.framebufferTexture2DMultisampleEXT(36160,j,K,n.get(P).__webglTexture,0,ne(g)):(K===3553||K>=34069&&K<=34074)&&i.framebufferTexture2D(36160,j,K,n.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(_,g,P){if(i.bindRenderbuffer(36161,_),g.depthBuffer&&!g.stencilBuffer){let j=33189;if(P||ce(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===Qn?j=36012:K.type===Jn&&(j=33190));const le=ne(g);ce(g)?h.renderbufferStorageMultisampleEXT(36161,le,j,g.width,g.height):i.renderbufferStorageMultisample(36161,le,j,g.width,g.height)}else i.renderbufferStorage(36161,j,g.width,g.height);i.framebufferRenderbuffer(36160,36096,36161,_)}else if(g.depthBuffer&&g.stencilBuffer){const j=ne(g);P&&ce(g)===!1?i.renderbufferStorageMultisample(36161,j,35056,g.width,g.height):ce(g)?h.renderbufferStorageMultisampleEXT(36161,j,35056,g.width,g.height):i.renderbufferStorage(36161,34041,g.width,g.height),i.framebufferRenderbuffer(36160,33306,36161,_)}else{const j=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<j.length;K++){const le=j[K],Me=r.convert(le.format,le.encoding),A=r.convert(le.type),z=M(le.internalFormat,Me,A,le.encoding),pe=ne(g);P&&ce(g)===!1?i.renderbufferStorageMultisample(36161,pe,z,g.width,g.height):ce(g)?h.renderbufferStorageMultisampleEXT(36161,pe,z,g.width,g.height):i.renderbufferStorage(36161,z,g.width,g.height)}}i.bindRenderbuffer(36161,null)}function Re(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const j=n.get(g.depthTexture).__webglTexture,K=ne(g);if(g.depthTexture.format===ti)ce(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,K):i.framebufferTexture2D(36160,36096,3553,j,0);else if(g.depthTexture.format===Vi)ce(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,K):i.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function E(_){const g=n.get(_),P=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Re(g.__webglFramebuffer,_)}else if(P){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]=i.createRenderbuffer(),Ue(g.__webglDepthbuffer[j],_,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),Ue(g.__webglDepthbuffer,_,!1);t.bindFramebuffer(36160,null)}function C(_,g,P){const j=n.get(_);g!==void 0&&_e(j.__webglFramebuffer,_,_.texture,36064,3553),P!==void 0&&E(_)}function q(_){const g=_.texture,P=n.get(_),j=n.get(g);_.addEventListener("dispose",de),_.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=g.version,a.memory.textures++);const K=_.isWebGLCubeRenderTarget===!0,le=_.isWebGLMultipleRenderTargets===!0,Me=S(_)||o;if(K){P.__webglFramebuffer=[];for(let A=0;A<6;A++)P.__webglFramebuffer[A]=i.createFramebuffer()}else{if(P.__webglFramebuffer=i.createFramebuffer(),le)if(s.drawBuffers){const A=_.texture;for(let z=0,pe=A.length;z<pe;z++){const xe=n.get(A[z]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&_.samples>0&&ce(_)===!1){const A=le?g:[g];P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer);for(let z=0;z<A.length;z++){const pe=A[z];P.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(36161,P.__webglColorRenderbuffer[z]);const xe=r.convert(pe.format,pe.encoding),me=r.convert(pe.type),Se=M(pe.internalFormat,xe,me,pe.encoding,_.isXRRenderTarget===!0),we=ne(_);i.renderbufferStorageMultisample(36161,we,Se,_.width,_.height),i.framebufferRenderbuffer(36160,36064+z,36161,P.__webglColorRenderbuffer[z])}i.bindRenderbuffer(36161,null),_.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(P.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,j.__webglTexture),$(34067,g,Me);for(let A=0;A<6;A++)_e(P.__webglFramebuffer[A],_,g,36064,34069+A);D(g,Me)&&H(34067),t.unbindTexture()}else if(le){const A=_.texture;for(let z=0,pe=A.length;z<pe;z++){const xe=A[z],me=n.get(xe);t.bindTexture(3553,me.__webglTexture),$(3553,xe,Me),_e(P.__webglFramebuffer,_,xe,36064+z,3553),D(xe,Me)&&H(3553)}t.unbindTexture()}else{let A=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(o?A=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,j.__webglTexture),$(A,g,Me),_e(P.__webglFramebuffer,_,g,36064,A),D(g,Me)&&H(A),t.unbindTexture()}_.depthBuffer&&E(_)}function oe(_){const g=S(_)||o,P=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let j=0,K=P.length;j<K;j++){const le=P[j];if(D(le,g)){const Me=_.isWebGLCubeRenderTarget?34067:3553,A=n.get(le).__webglTexture;t.bindTexture(Me,A),H(Me),t.unbindTexture()}}}function te(_){if(o&&_.samples>0&&ce(_)===!1){const g=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],P=_.width,j=_.height;let K=16384;const le=[],Me=_.stencilBuffer?33306:36096,A=n.get(_),z=_.isWebGLMultipleRenderTargets===!0;if(z)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),i.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){le.push(36064+pe),_.depthBuffer&&le.push(Me);const xe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(xe===!1&&(_.depthBuffer&&(K|=256),_.stencilBuffer&&(K|=1024)),z&&i.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[pe]),xe===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),z){const me=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,me,0)}i.blitFramebuffer(0,0,P,j,0,0,P,j,K,9728),m&&i.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+pe,36161,A.__webglColorRenderbuffer[pe]);const xe=n.get(g[pe]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),i.framebufferTexture2D(36009,36064+pe,3553,xe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function ne(_){return Math.min(f,_.samples)}function ce(_){const g=n.get(_);return o&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function fe(_){const g=a.render.frame;v.get(_)!==g&&(v.set(_,g),_.update())}function ue(_,g){const P=_.encoding,j=_.format,K=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Ho||P!==ai&&(P===Ke?o===!1?e.has("EXT_sRGB")===!0&&j===Jt?(_.format=Ho,_.minFilter=qt,_.generateMipmaps=!1):g=Lu.sRGBToLinear(g):(j!==Jt||K!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),g}this.allocateTextureUnit=I,this.resetTextureUnits=G,this.setTexture2D=re,this.setTexture2DArray=U,this.setTexture3D=N,this.setTextureCube=se,this.rebindTextures=C,this.setupRenderTarget=q,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ce}function mx(i,e,t){const n=t.isWebGL2;function s(r,a=null){let o;if(r===oi)return 5121;if(r===ap)return 32819;if(r===lp)return 32820;if(r===sp)return 5120;if(r===rp)return 5122;if(r===Eu)return 5123;if(r===op)return 5124;if(r===Jn)return 5125;if(r===Qn)return 5126;if(r===bs)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===cp)return 6406;if(r===Jt)return 6408;if(r===fp)return 6409;if(r===hp)return 6410;if(r===ti)return 6402;if(r===Vi)return 34041;if(r===up)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ho)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===dp)return 6403;if(r===pp)return 36244;if(r===mp)return 33319;if(r===gp)return 33320;if(r===_p)return 36249;if(r===qr||r===Xr||r===jr||r===Yr)if(a===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===qr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===qr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ll||r===cl||r===ul||r===fl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hl||r===dl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===hl)return a===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===dl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===Ml||r===yl||r===bl||r===Sl||r===wl||r===El||r===Tl||r===Al)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===pl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ml)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_l)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ml)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===El)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tl)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Al)return a===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Cl)return a===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ui?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class gx extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _x={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),x=this._getHandJoint(u,p);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&h>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xx extends Lt{constructor(e,t,n,s,r,a,o,l,u,c){if(c=c!==void 0?c:ti,c!==ti&&c!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ti&&(n=Jn),n===void 0&&c===Vi&&(n=Ui),super(null,s,r,a,o,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class vx extends hi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=null,u=null,c=null,f=null,h=null,m=null;const v=t.getContextAttributes();let p=null,d=null;const x=[],T=[],b=new Set,S=new Map,y=new zt;y.layers.enable(1),y.viewport=new Qe;const D=new zt;D.layers.enable(2),D.viewport=new Qe;const H=[y,D],M=new gx;M.layers.enable(1),M.layers.enable(2);let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let N=x[U];return N===void 0&&(N=new bo,x[U]=N),N.getTargetRaySpace()},this.getControllerGrip=function(U){let N=x[U];return N===void 0&&(N=new bo,x[U]=N),N.getGripSpace()},this.getHand=function(U){let N=x[U];return N===void 0&&(N=new bo,x[U]=N),N.getHandSpace()};function ee(U){const N=T.indexOf(U.inputSource);if(N===-1)return;const se=x[N];se!==void 0&&se.dispatchEvent({type:U.type,data:U.inputSource})}function de(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",F);for(let U=0;U<x.length;U++){const N=T[U];N!==null&&(T[U]=null,x[U].disconnect(N))}L=null,B=null,e.setRenderTarget(p),h=null,f=null,c=null,s=null,d=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",de),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,N),s.updateRenderState({baseLayer:h}),d=new li(h.framebufferWidth,h.framebufferHeight,{format:Jt,type:oi,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let N=null,se=null,ae=null;v.depth&&(ae=v.stencil?35056:33190,N=v.stencil?Vi:ti,se=v.stencil?Ui:Jn);const ge={colorFormat:32856,depthFormat:ae,scaleFactor:r};c=new XRWebGLBinding(s,t),f=c.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),d=new li(f.textureWidth,f.textureHeight,{format:Jt,type:oi,depthTexture:new xx(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const $=e.properties.get(d);$.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(U){for(let N=0;N<U.removed.length;N++){const se=U.removed[N],ae=T.indexOf(se);ae>=0&&(T[ae]=null,x[ae].disconnect(se))}for(let N=0;N<U.added.length;N++){const se=U.added[N];let ae=T.indexOf(se);if(ae===-1){for(let $=0;$<x.length;$++)if($>=T.length){T.push(se),ae=$;break}else if(T[$]===null){T[$]=se,ae=$;break}if(ae===-1)break}const ge=x[ae];ge&&ge.connect(se)}}const R=new V,X=new V;function Z(U,N,se){R.setFromMatrixPosition(N.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const ae=R.distanceTo(X),ge=N.projectionMatrix.elements,$=se.projectionMatrix.elements,Ce=ge[14]/(ge[10]-1),ye=ge[14]/(ge[10]+1),Ee=(ge[9]+1)/ge[5],_e=(ge[9]-1)/ge[5],Ue=(ge[8]-1)/ge[0],Re=($[8]+1)/$[0],E=Ce*Ue,C=Ce*Re,q=ae/(-Ue+Re),oe=q*-Ue;N.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(oe),U.translateZ(q),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const te=Ce+q,ne=ye+q,ce=E-oe,fe=C+(ae-oe),ue=Ee*ye/ne*te,_=_e*ye/ne*te;U.projectionMatrix.makePerspective(ce,fe,ue,_,te,ne)}function G(U,N){N===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(N.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;M.near=D.near=y.near=U.near,M.far=D.far=y.far=U.far,(L!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,B=M.far);const N=U.parent,se=M.cameras;G(M,N);for(let ge=0;ge<se.length;ge++)G(se[ge],N);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),U.matrix.copy(M.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const ae=U.children;for(let ge=0,$=ae.length;ge<$;ge++)ae[ge].updateMatrixWorld(!0);se.length===2?Z(M,y,D):M.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(U){f!==null&&(f.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)},this.getPlanes=function(){return b};let I=null;function Y(U,N){if(u=N.getViewerPose(l||a),m=N,u!==null){const se=u.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ae=!1;se.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let ge=0;ge<se.length;ge++){const $=se[ge];let Ce=null;if(h!==null)Ce=h.getViewport($);else{const Ee=c.getViewSubImage(f,$);Ce=Ee.viewport,ge===0&&(e.setRenderTargetTextures(d,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(d))}let ye=H[ge];ye===void 0&&(ye=new zt,ye.layers.enable(ge),ye.viewport=new Qe,H[ge]=ye),ye.matrix.fromArray($.transform.matrix),ye.projectionMatrix.fromArray($.projectionMatrix),ye.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&M.matrix.copy(ye.matrix),ae===!0&&M.cameras.push(ye)}}for(let se=0;se<x.length;se++){const ae=T[se],ge=x[se];ae!==null&&ge!==void 0&&ge.update(ae,N,l||a)}if(I&&I(U,N),N.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:N.detectedPlanes});let se=null;for(const ae of b)N.detectedPlanes.has(ae)||(se===null&&(se=[]),se.push(ae));if(se!==null)for(const ae of se)b.delete(ae),S.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of N.detectedPlanes)if(!b.has(ae))b.add(ae),S.set(ae,N.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const ge=S.get(ae);ae.lastChangedTime>ge&&(S.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}m=null}const re=new Bu;re.setAnimationLoop(Y),this.setAnimationLoop=function(U){I=U},this.dispose=function(){}}}function Mx(i,e){function t(p,d){d.color.getRGB(p.fogColor.value,Nu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,x,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),c(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,x,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Xt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Xt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,x,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=T*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Xt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function yx(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function u(T,b){let S=s[T.id];S===void 0&&(v(T),S=c(T),s[T.id]=S,T.addEventListener("dispose",d));const y=b.program;n.updateUBOMapping(T,y);const D=e.render.frame;r[T.id]!==D&&(h(T),r[T.id]=D)}function c(T){const b=f();T.__bindingPointIndex=b;const S=i.createBuffer(),y=T.__size,D=T.usage;return i.bindBuffer(35345,S),i.bufferData(35345,y,D),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,S),S}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const b=s[T.id],S=T.uniforms,y=T.__cache;i.bindBuffer(35345,b);for(let D=0,H=S.length;D<H;D++){const M=S[D];if(m(M,D,y)===!0){const L=M.__offset,B=Array.isArray(M.value)?M.value:[M.value];let ee=0;for(let de=0;de<B.length;de++){const F=B[de],R=p(F);typeof F=="number"?(M.__data[0]=F,i.bufferSubData(35345,L+ee,M.__data)):F.isMatrix3?(M.__data[0]=F.elements[0],M.__data[1]=F.elements[1],M.__data[2]=F.elements[2],M.__data[3]=F.elements[0],M.__data[4]=F.elements[3],M.__data[5]=F.elements[4],M.__data[6]=F.elements[5],M.__data[7]=F.elements[0],M.__data[8]=F.elements[6],M.__data[9]=F.elements[7],M.__data[10]=F.elements[8],M.__data[11]=F.elements[0]):(F.toArray(M.__data,ee),ee+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,L,M.__data)}}i.bindBuffer(35345,null)}function m(T,b,S){const y=T.value;if(S[b]===void 0){if(typeof y=="number")S[b]=y;else{const D=Array.isArray(y)?y:[y],H=[];for(let M=0;M<D.length;M++)H.push(D[M].clone());S[b]=H}return!0}else if(typeof y=="number"){if(S[b]!==y)return S[b]=y,!0}else{const D=Array.isArray(S[b])?S[b]:[S[b]],H=Array.isArray(y)?y:[y];for(let M=0;M<D.length;M++){const L=D[M];if(L.equals(H[M])===!1)return L.copy(H[M]),!0}}return!1}function v(T){const b=T.uniforms;let S=0;const y=16;let D=0;for(let H=0,M=b.length;H<M;H++){const L=b[H],B={boundary:0,storage:0},ee=Array.isArray(L.value)?L.value:[L.value];for(let de=0,F=ee.length;de<F;de++){const R=ee[de],X=p(R);B.boundary+=X.boundary,B.storage+=X.storage}if(L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,H>0){D=S%y;const de=y-D;D!==0&&de-B.boundary<0&&(S+=y-D,L.__offset=S)}S+=B.storage}return D=S%y,D>0&&(S+=y-D),T.__size=S,T.__cache={},this}function p(T){const b={boundary:0,storage:0};return typeof T=="number"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function d(T){const b=T.target;b.removeEventListener("dispose",d);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function x(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:u,dispose:x}}function bx(){const i=ws("canvas");return i.style.display="block",i}function Wu(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:bx(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ai,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const p=this;let d=!1,x=0,T=0,b=null,S=-1,y=null;const D=new Qe,H=new Qe;let M=null,L=e.width,B=e.height,ee=1,de=null,F=null;const R=new Qe(0,0,L,B),X=new Qe(0,0,L,B);let Z=!1;const G=new xa;let I=!1,Y=!1,re=null;const U=new et,N=new Ie,se=new V,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return b===null?ee:1}let $=t;function Ce(w,W){for(let Q=0;Q<w.length;Q++){const k=w[Q],ie=e.getContext(k,W);if(ie!==null)return ie}return null}try{const w={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Le,!1),$===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),$=Ce(W,w),$===null)throw Ce(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ye,Ee,_e,Ue,Re,E,C,q,oe,te,ne,ce,fe,ue,_,g,P,j,K,le,Me,A,z,pe;function xe(){ye=new I_($),Ee=new T_($,ye,i),ye.init(Ee),A=new mx($,ye,Ee),_e=new dx($,ye,Ee),Ue=new N_,Re=new Q0,E=new px($,ye,_e,Re,Ee,A,Ue),C=new C_(p),q=new D_(p),oe=new Wp($,Ee),z=new w_($,ye,oe,Ee),te=new F_($,oe,Ue,z),ne=new G_($,te,oe,Ue),K=new B_($,Ee,E),g=new A_(Re),ce=new J0(p,C,q,ye,Ee,z,g),fe=new Mx(p,Re),ue=new tx,_=new ax(ye,Ee),j=new S_(p,C,q,_e,ne,c,a),P=new hx(p,ne,Ee),pe=new yx($,Ue,Ee,_e),le=new E_($,ye,Ue,Ee),Me=new O_($,ye,Ue,Ee),Ue.programs=ce.programs,p.capabilities=Ee,p.extensions=ye,p.properties=Re,p.renderLists=ue,p.shadowMap=P,p.state=_e,p.info=Ue}xe();const me=new vx(p,$);this.xr=me,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(L,B,!1))},this.getSize=function(w){return w.set(L,B)},this.setSize=function(w,W,Q){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,B=W,e.width=Math.floor(w*ee),e.height=Math.floor(W*ee),Q!==!1&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(L*ee,B*ee).floor()},this.setDrawingBufferSize=function(w,W,Q){L=w,B=W,ee=Q,e.width=Math.floor(w*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,W,Q,k){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,W,Q,k),_e.viewport(D.copy(R).multiplyScalar(ee).floor())},this.getScissor=function(w){return w.copy(X)},this.setScissor=function(w,W,Q,k){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,W,Q,k),_e.scissor(H.copy(X).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){_e.setScissorTest(Z=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(w=!0,W=!0,Q=!0){let k=0;w&&(k|=16384),W&&(k|=256),Q&&(k|=1024),$.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),ue.dispose(),_.dispose(),Re.dispose(),C.dispose(),q.dispose(),ne.dispose(),z.dispose(),pe.dispose(),ce.dispose(),me.dispose(),me.removeEventListener("sessionstart",be),me.removeEventListener("sessionend",Te),re&&(re.dispose(),re=null),Xe.stop()};function Se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Ue.autoReset,W=P.enabled,Q=P.autoUpdate,k=P.needsUpdate,ie=P.type;xe(),Ue.autoReset=w,P.enabled=W,P.autoUpdate=Q,P.needsUpdate=k,P.type=ie}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){const W=w.target;W.removeEventListener("dispose",Pe),qe(W)}function qe(w){O(w),Re.remove(w)}function O(w){const W=Re.get(w).programs;W!==void 0&&(W.forEach(function(Q){ce.releaseProgram(Q)}),w.isShaderMaterial&&ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Q,k,ie,Ae){W===null&&(W=ae);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=Xu(w,W,Q,k,ie);_e.setMaterial(k,De);let Be=Q.index,ke=1;k.wireframe===!0&&(Be=te.getWireframeAttribute(Q),ke=2);const Ge=Q.drawRange,Ve=Q.attributes.position;let tt=Ge.start*ke,Pt=(Ge.start+Ge.count)*ke;Ae!==null&&(tt=Math.max(tt,Ae.start*ke),Pt=Math.min(Pt,(Ae.start+Ae.count)*ke)),Be!==null?(tt=Math.max(tt,0),Pt=Math.min(Pt,Be.count)):Ve!=null&&(tt=Math.max(tt,0),Pt=Math.min(Pt,Ve.count));const hn=Pt-tt;if(hn<0||hn===1/0)return;z.setup(ie,k,ze,Q,Be);let Gn,nt=le;if(Be!==null&&(Gn=oe.get(Be),nt=Me,nt.setIndex(Gn)),ie.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*ge()),nt.setMode(1)):nt.setMode(4);else if(ie.isLine){let He=k.linewidth;He===void 0&&(He=1),_e.setLineWidth(He*ge()),ie.isLineSegments?nt.setMode(1):ie.isLineLoop?nt.setMode(2):nt.setMode(3)}else ie.isPoints?nt.setMode(0):ie.isSprite&&nt.setMode(4);if(ie.isInstancedMesh)nt.renderInstances(tt,hn,ie.count);else if(Q.isInstancedBufferGeometry){const He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Cr=Math.min(Q.instanceCount,He);nt.renderInstances(tt,hn,Cr)}else nt.render(tt,hn)},this.compile=function(w,W){function Q(k,ie,Ae){k.transparent===!0&&k.side===zs?(k.side=Xt,k.needsUpdate=!0,Ht(k,ie,Ae),k.side=ri,k.needsUpdate=!0,Ht(k,ie,Ae),k.side=zs):Ht(k,ie,Ae)}h=_.get(w),h.init(),v.push(h),w.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights(p.physicallyCorrectLights),w.traverse(function(k){const ie=k.material;if(ie)if(Array.isArray(ie))for(let Ae=0;Ae<ie.length;Ae++){const De=ie[Ae];Q(De,w,k)}else Q(ie,w,k)}),v.pop(),h=null};let J=null;function he(w){J&&J(w)}function be(){Xe.stop()}function Te(){Xe.start()}const Xe=new Bu;Xe.setAnimationLoop(he),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){J=w,me.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},me.addEventListener("sessionstart",be),me.addEventListener("sessionend",Te),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(W),W=me.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,W,b),h=_.get(w,v.length),h.init(),v.push(h),U.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(U),Y=this.localClippingEnabled,I=g.init(this.clippingPlanes,Y,W),f=ue.get(w,m.length),f.init(),m.push(f),ct(w,W,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(de,F),I===!0&&g.beginShadows();const Q=h.state.shadowsArray;if(P.render(Q,w,W),I===!0&&g.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(f,w),h.setupLights(p.physicallyCorrectLights),W.isArrayCamera){const k=W.cameras;for(let ie=0,Ae=k.length;ie<Ae;ie++){const De=k[ie];dt(f,w,De,De.viewport)}}else dt(f,w,W);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(p,w,W),z.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ct(w,W,Q,k){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){k&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(U);const De=ne.update(w),ze=w.material;ze.visible&&f.push(w,De,ze,Q,se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ue.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ue.render.frame),!w.frustumCulled||G.intersectsObject(w))){k&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(U);const De=ne.update(w),ze=w.material;if(Array.isArray(ze)){const Be=De.groups;for(let ke=0,Ge=Be.length;ke<Ge;ke++){const Ve=Be[ke],tt=ze[Ve.materialIndex];tt&&tt.visible&&f.push(w,De,tt,Q,se.z,Ve)}}else ze.visible&&f.push(w,De,ze,Q,se.z,null)}}const Ae=w.children;for(let De=0,ze=Ae.length;De<ze;De++)ct(Ae[De],W,Q,k)}function dt(w,W,Q,k){const ie=w.opaque,Ae=w.transmissive,De=w.transparent;h.setupLightsView(Q),Ae.length>0&&Bn(ie,W,Q),k&&_e.viewport(D.copy(k)),ie.length>0&&Je(ie,W,Q),Ae.length>0&&Je(Ae,W,Q),De.length>0&&Je(De,W,Q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Bn(w,W,Q){const k=Ee.isWebGL2;re===null&&(re=new li(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?bs:oi,minFilter:ys,samples:k&&r===!0?4:0})),p.getDrawingBufferSize(N),k?re.setSize(N.x,N.y):re.setSize(ko(N.x),ko(N.y));const ie=p.getRenderTarget();p.setRenderTarget(re),p.clear();const Ae=p.toneMapping;p.toneMapping=Sn,Je(w,W,Q),p.toneMapping=Ae,E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re),p.setRenderTarget(ie)}function Je(w,W,Q){const k=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Ae=w.length;ie<Ae;ie++){const De=w[ie],ze=De.object,Be=De.geometry,ke=k===null?De.material:k,Ge=De.group;ze.layers.test(Q.layers)&&fn(ze,W,Q,Be,ke,Ge)}}function fn(w,W,Q,k,ie,Ae){w.onBeforeRender(p,W,Q,k,ie,Ae),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ie.onBeforeRender(p,W,Q,k,w,Ae),ie.transparent===!0&&ie.side===zs?(ie.side=Xt,ie.needsUpdate=!0,p.renderBufferDirect(Q,W,k,ie,w,Ae),ie.side=ri,ie.needsUpdate=!0,p.renderBufferDirect(Q,W,k,ie,w,Ae),ie.side=zs):p.renderBufferDirect(Q,W,k,ie,w,Ae),w.onAfterRender(p,W,Q,k,ie,Ae)}function Ht(w,W,Q){W.isScene!==!0&&(W=ae);const k=Re.get(w),ie=h.state.lights,Ae=h.state.shadowsArray,De=ie.state.version,ze=ce.getParameters(w,ie.state,Ae,W,Q),Be=ce.getProgramCacheKey(ze);let ke=k.programs;k.environment=w.isMeshStandardMaterial?W.environment:null,k.fog=W.fog,k.envMap=(w.isMeshStandardMaterial?q:C).get(w.envMap||k.environment),ke===void 0&&(w.addEventListener("dispose",Pe),ke=new Map,k.programs=ke);let Ge=ke.get(Be);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===De)return ba(w,ze),Ge}else ze.uniforms=ce.getUniforms(w),w.onBuild(Q,ze,p),w.onBeforeCompile(ze,p),Ge=ce.acquireProgram(ze,Be),ke.set(Be,Ge),k.uniforms=ze.uniforms;const Ve=k.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=g.uniform),ba(w,ze),k.needsLights=Yu(w),k.lightsStateVersion=De,k.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix);const tt=Ge.getUniforms(),Pt=fr.seqWithValue(tt.seq,Ve);return k.currentProgram=Ge,k.uniformsList=Pt,Ge}function ba(w,W){const Q=Re.get(w);Q.outputEncoding=W.outputEncoding,Q.instancing=W.instancing,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Xu(w,W,Q,k,ie){W.isScene!==!0&&(W=ae),E.resetTextureUnits();const Ae=W.fog,De=k.isMeshStandardMaterial?W.environment:null,ze=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:ai,Be=(k.isMeshStandardMaterial?q:C).get(k.envMap||De),ke=k.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ge=!!k.normalMap&&!!Q.attributes.tangent,Ve=!!Q.morphAttributes.position,tt=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color,hn=k.toneMapped?p.toneMapping:Sn,Gn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,nt=Gn!==void 0?Gn.length:0,He=Re.get(k),Cr=h.state.lights;if(I===!0&&(Y===!0||w!==y)){const Rt=w===y&&k.id===S;g.setState(k,w,Rt)}let ut=!1;k.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Cr.state.version||He.outputEncoding!==ze||ie.isInstancedMesh&&He.instancing===!1||!ie.isInstancedMesh&&He.instancing===!0||ie.isSkinnedMesh&&He.skinning===!1||!ie.isSkinnedMesh&&He.skinning===!0||He.envMap!==Be||k.fog===!0&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==g.numPlanes||He.numIntersection!==g.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ge||He.morphTargets!==Ve||He.morphNormals!==tt||He.morphColors!==Pt||He.toneMapping!==hn||Ee.isWebGL2===!0&&He.morphTargetsCount!==nt)&&(ut=!0):(ut=!0,He.__version=k.version);let Vn=He.currentProgram;ut===!0&&(Vn=Ht(k,W,ie));let Sa=!1,Xi=!1,Lr=!1;const xt=Vn.getUniforms(),Hn=He.uniforms;if(_e.useProgram(Vn.program)&&(Sa=!0,Xi=!0,Lr=!0),k.id!==S&&(S=k.id,Xi=!0),Sa||y!==w){if(xt.setValue($,"projectionMatrix",w.projectionMatrix),Ee.logarithmicDepthBuffer&&xt.setValue($,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,Xi=!0,Lr=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Rt=xt.map.cameraPosition;Rt!==void 0&&Rt.setValue($,se.setFromMatrixPosition(w.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue($,"isOrthographic",w.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ie.isSkinnedMesh)&&xt.setValue($,"viewMatrix",w.matrixWorldInverse)}if(ie.isSkinnedMesh){xt.setOptional($,ie,"bindMatrix"),xt.setOptional($,ie,"bindMatrixInverse");const Rt=ie.skeleton;Rt&&(Ee.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),xt.setValue($,"boneTexture",Rt.boneTexture,E),xt.setValue($,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pr=Q.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0&&Ee.isWebGL2===!0)&&K.update(ie,Q,k,Vn),(Xi||He.receiveShadow!==ie.receiveShadow)&&(He.receiveShadow=ie.receiveShadow,xt.setValue($,"receiveShadow",ie.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Hn.envMap.value=Be,Hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Xi&&(xt.setValue($,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&ju(Hn,Lr),Ae&&k.fog===!0&&fe.refreshFogUniforms(Hn,Ae),fe.refreshMaterialUniforms(Hn,k,ee,B,re),fr.upload($,He.uniformsList,Hn,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fr.upload($,He.uniformsList,Hn,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue($,"center",ie.center),xt.setValue($,"modelViewMatrix",ie.modelViewMatrix),xt.setValue($,"normalMatrix",ie.normalMatrix),xt.setValue($,"modelMatrix",ie.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rt=k.uniformsGroups;for(let Rr=0,$u=Rt.length;Rr<$u;Rr++)if(Ee.isWebGL2){const wa=Rt[Rr];pe.update(wa,Vn),pe.bind(wa,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function ju(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Yu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,W,Q){Re.get(w.texture).__webglTexture=W,Re.get(w.depthTexture).__webglTexture=Q;const k=Re.get(w);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Q===void 0,k.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const Q=Re.get(w);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Q=0){b=w,x=W,T=Q;let k=!0,ie=null,Ae=!1,De=!1;if(w){const Be=Re.get(w);Be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),k=!1):Be.__webglFramebuffer===void 0?E.setupRenderTarget(w):Be.__hasExternalTextures&&E.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(De=!0);const Ge=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ie=Ge[W],Ae=!0):Ee.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?ie=Re.get(w).__webglMultisampledFramebuffer:ie=Ge,D.copy(w.viewport),H.copy(w.scissor),M=w.scissorTest}else D.copy(R).multiplyScalar(ee).floor(),H.copy(X).multiplyScalar(ee).floor(),M=Z;if(_e.bindFramebuffer(36160,ie)&&Ee.drawBuffers&&k&&_e.drawBuffers(w,ie),_e.viewport(D),_e.scissor(H),_e.setScissorTest(M),Ae){const Be=Re.get(w.texture);$.framebufferTexture2D(36160,36064,34069+W,Be.__webglTexture,Q)}else if(De){const Be=Re.get(w.texture),ke=W||0;$.framebufferTextureLayer(36160,36064,Be.__webglTexture,Q||0,ke)}S=-1},this.readRenderTargetPixels=function(w,W,Q,k,ie,Ae,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){_e.bindFramebuffer(36160,ze);try{const Be=w.texture,ke=Be.format,Ge=Be.type;if(ke!==Jt&&A.convert(ke)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===bs&&(ye.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ge!==oi&&A.convert(Ge)!==$.getParameter(35738)&&!(Ge===Qn&&(Ee.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-k&&Q>=0&&Q<=w.height-ie&&$.readPixels(W,Q,k,ie,A.convert(ke),A.convert(Ge),Ae)}finally{const Be=b!==null?Re.get(b).__webglFramebuffer:null;_e.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(w,W,Q=0){const k=Math.pow(2,-Q),ie=Math.floor(W.image.width*k),Ae=Math.floor(W.image.height*k);E.setTexture2D(W,0),$.copyTexSubImage2D(3553,Q,0,0,w.x,w.y,ie,Ae),_e.unbindTexture()},this.copyTextureToTexture=function(w,W,Q,k=0){const ie=W.image.width,Ae=W.image.height,De=A.convert(Q.format),ze=A.convert(Q.type);E.setTexture2D(Q,0),$.pixelStorei(37440,Q.flipY),$.pixelStorei(37441,Q.premultiplyAlpha),$.pixelStorei(3317,Q.unpackAlignment),W.isDataTexture?$.texSubImage2D(3553,k,w.x,w.y,ie,Ae,De,ze,W.image.data):W.isCompressedTexture?$.compressedTexSubImage2D(3553,k,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,De,W.mipmaps[0].data):$.texSubImage2D(3553,k,w.x,w.y,De,ze,W.image),k===0&&Q.generateMipmaps&&$.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Q,k,ie=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,ze=w.max.z-w.min.z+1,Be=A.convert(k.format),ke=A.convert(k.type);let Ge;if(k.isData3DTexture)E.setTexture3D(k,0),Ge=32879;else if(k.isDataArrayTexture)E.setTexture2DArray(k,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,k.flipY),$.pixelStorei(37441,k.premultiplyAlpha),$.pixelStorei(3317,k.unpackAlignment);const Ve=$.getParameter(3314),tt=$.getParameter(32878),Pt=$.getParameter(3316),hn=$.getParameter(3315),Gn=$.getParameter(32877),nt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;$.pixelStorei(3314,nt.width),$.pixelStorei(32878,nt.height),$.pixelStorei(3316,w.min.x),$.pixelStorei(3315,w.min.y),$.pixelStorei(32877,w.min.z),Q.isDataTexture||Q.isData3DTexture?$.texSubImage3D(Ge,ie,W.x,W.y,W.z,Ae,De,ze,Be,ke,nt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ge,ie,W.x,W.y,W.z,Ae,De,ze,Be,nt.data)):$.texSubImage3D(Ge,ie,W.x,W.y,W.z,Ae,De,ze,Be,ke,nt),$.pixelStorei(3314,Ve),$.pixelStorei(32878,tt),$.pixelStorei(3316,Pt),$.pixelStorei(3315,hn),$.pixelStorei(32877,Gn),ie===0&&k.generateMipmaps&&$.generateMipmap(Ge),_e.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){x=0,T=0,b=null,_e.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sx extends Wu{}Sx.prototype.isWebGL1Renderer=!0;class wx extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class qo extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fc=new et,Xo=new Du,rr=new Tr,or=new V;class hc extends At{constructor(e=new jt,t=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;fc.copy(s).invert(),Xo.copy(e.ray).applyMatrix4(fc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=h,p=m;v<p;v++){const d=u.getX(v);or.fromBufferAttribute(f,d),dc(or,d,l,s,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=h,p=m;v<p;v++)or.fromBufferAttribute(f,v),dc(or,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dc(i,e,t,n,s,r,a){const o=Xo.distanceSqToPoint(i);if(o<t){const l=new V;Xo.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ya extends jt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],u=[],c=[];let f=e;const h=(t-e)/s,m=new V,v=new Ie;for(let p=0;p<=s;p++){for(let d=0;d<=n;d++){const x=r+d/n*a;m.x=f*Math.cos(x),m.y=f*Math.sin(x),l.push(m.x,m.y,m.z),u.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,c.push(v.x,v.y)}f+=h}for(let p=0;p<s;p++){const d=p*(n+1);for(let x=0;x<n;x++){const T=x+d,b=T,S=T+n+1,y=T+n+2,D=T+1;o.push(b,S,D),o.push(S,y,D)}}this.setIndex(o),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(c,2))}static fromJSON(e){return new ya(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wt extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new V,h=new V,m=[],v=[],p=[],d=[];for(let x=0;x<=n;x++){const T=[],b=x/n;let S=0;x==0&&a==0?S=.5/t:x==n&&l==Math.PI&&(S=-.5/t);for(let y=0;y<=t;y++){const D=y/t;f.x=-e*Math.cos(s+D*r)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(s+D*r)*Math.sin(a+b*o),v.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(D+S,1-b),T.push(u++)}c.push(T)}for(let x=0;x<n;x++)for(let T=0;T<t;T++){const b=c[x][T+1],S=c[x][T],y=c[x+1][T],D=c[x+1][T+1];(x!==0||a>0)&&m.push(b,S,D),(x!==n-1||l<Math.PI)&&m.push(S,y,D)}this.setIndex(m),this.setAttribute("position",new Vt(v,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(d,2))}static fromJSON(e){return new Wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ex extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pn extends Ex{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const pc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Tx{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],v=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return v}return null}}}const Ax=new Tx;class qu{constructor(e){this.manager=e!==void 0?e:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Cx extends qu{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ws("img");function l(){c(),pc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(f){c(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class vn extends qu{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,a=new Cx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Lx extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const So=new et,mc=new V,gc=new V;class Px{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(mc),gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gc),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _c=new et,ns=new V,wo=new V;class Rx extends Px{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(ns),wo.copy(n.position),wo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wo),n.updateMatrixWorld(),s.makeTranslation(-ns.x,-ns.y,-ns.z),_c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c)}}class Dx extends Lx{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ix extends ot{constructor(e,t,n){const s=new Wt(t,4,2),r=new Es({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);const vc={type:"change"},Eo={type:"start"},Mc={type:"end"};class Fx extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ue),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vc),n.update(),r=s.NONE},this.update=function(){const A=new V,z=new ci().setFromUnitVectors(e.up,new V(0,1,0)),pe=z.clone().invert(),xe=new V,me=new ci,Se=2*Math.PI;return function(){const Le=n.object.position;A.copy(Le).sub(n.target),A.applyQuaternion(z),o.setFromVector3(A),n.autoRotate&&r===s.NONE&&L(H()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Pe=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(qe)&&(Pe<-Math.PI?Pe+=Se:Pe>Math.PI&&(Pe-=Se),qe<-Math.PI?qe+=Se:qe>Math.PI&&(qe-=Se),Pe<=qe?o.theta=Math.max(Pe,Math.min(qe,o.theta)):o.theta=o.theta>(Pe+qe)/2?Math.max(Pe,o.theta):Math.min(qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=u,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),A.setFromSpherical(o),A.applyQuaternion(pe),Le.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,f||xe.distanceToSquared(n.object.position)>a||8*(1-me.dot(n.object.quaternion))>a?(n.dispatchEvent(vc),xe.copy(n.object.position),me.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",te),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",oe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new xc,l=new xc;let u=1;const c=new V;let f=!1;const h=new Ie,m=new Ie,v=new Ie,p=new Ie,d=new Ie,x=new Ie,T=new Ie,b=new Ie,S=new Ie,y=[],D={};function H(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function L(A){l.theta-=A}function B(A){l.phi-=A}const ee=function(){const A=new V;return function(pe,xe){A.setFromMatrixColumn(xe,0),A.multiplyScalar(-pe),c.add(A)}}(),de=function(){const A=new V;return function(pe,xe){n.screenSpacePanning===!0?A.setFromMatrixColumn(xe,1):(A.setFromMatrixColumn(xe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(pe),c.add(A)}}(),F=function(){const A=new V;return function(pe,xe){const me=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;A.copy(Se).sub(n.target);let we=A.length();we*=Math.tan(n.object.fov/2*Math.PI/180),ee(2*pe*we/me.clientHeight,n.object.matrix),de(2*xe*we/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ee(pe*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),de(xe*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(A){n.object.isPerspectiveCamera?u/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(A){n.object.isPerspectiveCamera?u*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(A){h.set(A.clientX,A.clientY)}function G(A){T.set(A.clientX,A.clientY)}function I(A){p.set(A.clientX,A.clientY)}function Y(A){m.set(A.clientX,A.clientY),v.subVectors(m,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;L(2*Math.PI*v.x/z.clientHeight),B(2*Math.PI*v.y/z.clientHeight),h.copy(m),n.update()}function re(A){b.set(A.clientX,A.clientY),S.subVectors(b,T),S.y>0?R(M()):S.y<0&&X(M()),T.copy(b),n.update()}function U(A){d.set(A.clientX,A.clientY),x.subVectors(d,p).multiplyScalar(n.panSpeed),F(x.x,x.y),p.copy(d),n.update()}function N(A){A.deltaY<0?X(M()):A.deltaY>0&&R(M()),n.update()}function se(A){let z=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),z=!0;break}z&&(A.preventDefault(),n.update())}function ae(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),z=.5*(y[0].pageY+y[1].pageY);h.set(A,z)}}function ge(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const A=.5*(y[0].pageX+y[1].pageX),z=.5*(y[0].pageY+y[1].pageY);p.set(A,z)}}function $(){const A=y[0].pageX-y[1].pageX,z=y[0].pageY-y[1].pageY,pe=Math.sqrt(A*A+z*z);T.set(0,pe)}function Ce(){n.enableZoom&&$(),n.enablePan&&ge()}function ye(){n.enableZoom&&$(),n.enableRotate&&ae()}function Ee(A){if(y.length==1)m.set(A.pageX,A.pageY);else{const pe=Me(A),xe=.5*(A.pageX+pe.x),me=.5*(A.pageY+pe.y);m.set(xe,me)}v.subVectors(m,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;L(2*Math.PI*v.x/z.clientHeight),B(2*Math.PI*v.y/z.clientHeight),h.copy(m)}function _e(A){if(y.length===1)d.set(A.pageX,A.pageY);else{const z=Me(A),pe=.5*(A.pageX+z.x),xe=.5*(A.pageY+z.y);d.set(pe,xe)}x.subVectors(d,p).multiplyScalar(n.panSpeed),F(x.x,x.y),p.copy(d)}function Ue(A){const z=Me(A),pe=A.pageX-z.x,xe=A.pageY-z.y,me=Math.sqrt(pe*pe+xe*xe);b.set(0,me),S.set(0,Math.pow(b.y/T.y,n.zoomSpeed)),R(S.y),T.copy(b)}function Re(A){n.enableZoom&&Ue(A),n.enablePan&&_e(A)}function E(A){n.enableZoom&&Ue(A),n.enableRotate&&Ee(A)}function C(A){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",q),n.domElement.addEventListener("pointerup",oe)),j(A),A.pointerType==="touch"?_(A):ne(A))}function q(A){n.enabled!==!1&&(A.pointerType==="touch"?g(A):ce(A))}function oe(A){K(A),y.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",oe)),n.dispatchEvent(Mc),r=s.NONE}function te(A){K(A)}function ne(A){let z;switch(A.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case pi.DOLLY:if(n.enableZoom===!1)return;G(A),r=s.DOLLY;break;case pi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;I(A),r=s.PAN}else{if(n.enableRotate===!1)return;Z(A),r=s.ROTATE}break;case pi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;Z(A),r=s.ROTATE}else{if(n.enablePan===!1)return;I(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Eo)}function ce(A){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Y(A);break;case s.DOLLY:if(n.enableZoom===!1)return;re(A);break;case s.PAN:if(n.enablePan===!1)return;U(A);break}}function fe(A){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(A.preventDefault(),n.dispatchEvent(Eo),N(A),n.dispatchEvent(Mc))}function ue(A){n.enabled===!1||n.enablePan===!1||se(A)}function _(A){switch(le(A),y.length){case 1:switch(n.touches.ONE){case mi.ROTATE:if(n.enableRotate===!1)return;ae(),r=s.TOUCH_ROTATE;break;case mi.PAN:if(n.enablePan===!1)return;ge(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case mi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),r=s.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Eo)}function g(A){switch(le(A),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(A),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;_e(A),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(A),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;E(A),n.update();break;default:r=s.NONE}}function P(A){n.enabled!==!1&&A.preventDefault()}function j(A){y.push(A)}function K(A){delete D[A.pointerId];for(let z=0;z<y.length;z++)if(y[z].pointerId==A.pointerId){y.splice(z,1);return}}function le(A){let z=D[A.pointerId];z===void 0&&(z=new Ie,D[A.pointerId]=z),z.set(A.pageX,A.pageY)}function Me(A){const z=A.pointerId===y[0].pointerId?y[1]:y[0];return D[z.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",te),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}var ds=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),n(++i%e.children.length)},!1);function t(c){return e.appendChild(c.dom),c}function n(c){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===c?"block":"none";i=c}var s=(performance||Date).now(),r=s,a=0,o=t(new ds.Panel("FPS","#0ff","#002")),l=t(new ds.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new ds.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();if(l.update(c-s,200),c>=r+1e3&&(o.update(a*1e3/(c-r),100),r=c,a=0,u)){var f=performance.memory;u.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return c},update:function(){s=this.end()},domElement:e,setMode:n}};ds.Panel=function(i,e,t){var n=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,u=3*a,c=2*a,f=3*a,h=15*a,m=74*a,v=30*a,p=document.createElement("canvas");p.width=o,p.height=l,p.style.cssText="width:80px;height:48px";var d=p.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=t,d.fillRect(0,0,o,l),d.fillStyle=e,d.fillText(i,u,c),d.fillRect(f,h,m,v),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(f,h,m,v),{dom:p,update:function(x,T){n=Math.min(n,x),s=Math.max(s,x),d.fillStyle=t,d.globalAlpha=1,d.fillRect(0,0,o,h),d.fillStyle=e,d.fillText(r(x)+" "+i+" ("+r(n)+"-"+r(s)+")",u,c),d.drawImage(p,f+a,h,m-a,v,f,h,m-a,v),d.fillRect(f+m-a,h,a,v),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(f+m-a,h,a,r((1-x/T)*v))}}};const Ox=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},Nx={__name:"HelloWorld",props:{msg:String},setup(i){const e=Nf(null);let t,n,s,r,a,o,l,u;const c=()=>{f(),h(),m(),v(),p(),d(),T(),b(),S(),y(),D(),H(),M(),L(),x(),ee(),de()},f=()=>{l=e.value.offsetWidth,u=e.value.offsetHeight,t=new wx,a=new Wu,a.setSize(l,u),document.getElementById("webgl").appendChild(a.domElement)},h=()=>{o=new Wt(300,32,16);const R=new vn().load("./public/sun.jpg"),X=new Es({map:R,side:Nt});n=new ot(o,X),n.position.set(0,0,0),t.add(n)},m=()=>{s=new zt(30,l/u,1,5e7),s.position.set(3500,1e3,1e5),s.lookAt(0,10,0),a.render(t,s)},v=()=>{const F=new Dx("#ffeedb",2);F.intensity=2,F.decay=2,F.position.set(0,0,0),t.add(F);const R=new Ix(F,10);t.add(R)},p=()=>{new Fx(s,a.domElement).addEventListener("change",function(){a.render(t,s)})},d=()=>{r=new ds,r.setMode(1),document.body.appendChild(r.domElement)},x=()=>{r.update(),a.render(t,s),n.rotateY(.01),requestAnimationFrame(x)},T=()=>{const F=new Wt(5,32,16),X=new vn().load("./public/mercury.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(-500,0,0),t.add(G);function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I(),B(500);let Y=0,re=.025,U=500;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},b=()=>{const F=new Wt(20,32,16),X=new vn().load("./public/venus.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(600,0,0),t.add(G);function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I(),B(600);let Y=0,re=.022,U=600;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},S=()=>{const F=new Wt(21,32,16),X=new vn().load("./public/earth.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(-850,0,0),t.add(G);function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I(),B(850);let Y=0,re=.02,U=850;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},y=()=>{const F=new Wt(11,32,16),X=new vn().load("./public/mars.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(1150,0,0),t.add(G);function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I(),B(1150);let Y=0,re=.015,U=1150;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},D=()=>{const F=new Wt(100,32,16),X=new vn().load("./public/jupiter.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(-1450,0,0),t.add(G);function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I(),B(1450);let Y=0,re=.018,U=1450;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},H=()=>{const F=new Wt(80,32,16),X=new vn().load("./public/saturn.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(1700,0,0),t.add(G);function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I(),B(1700);let Y=0,re=.01,U=1700;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},M=()=>{const F=new Wt(45,32,16),X=new vn().load("./public/uranus.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(-2e3,0,0),t.add(G);function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I(),B(2e3);let Y=0,re=.008,U=2e3;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},L=()=>{const F=new Wt(45,32,16),X=new vn().load("./public/neptune.jpg"),Z=new Pn({map:X,side:Nt}),G=new ot(F,Z);G.position.set(2300,0,0),t.add(G),B(2300),G.rotation.y=100;function I(){a.render(t,s),G.rotateY(.05),requestAnimationFrame(I)}I();let Y=0,re=.005,U=2300;function N(){a.render(t,s),Y+=re,Y>Math.PI*2&&(Y-=Math.PI*2),G.position.set(U*Math.sin(Y),0,U*Math.cos(Y)),requestAnimationFrame(N)}N()},B=F=>{let R=new ot(new ya(F-.2,F+.2,64,1),new Es({color:16777215,side:Nt}));R.rotation.x=-Math.PI/2,t.add(R)},ee=()=>{const R=new jt;let X=new Float32Array(3e4*3),Z=new Float32Array(3e4*3),G=new We;const I=8e4;for(let U=0;U<X.length;U+=3){let N=Math.random()*I*(Math.random()<.5?-1:1),se=Math.random()*I*(Math.random()<.5?-1:1),ae=Math.random()*I*(Math.random()<.5?-1:1),ge=Math.abs(N)>Math.abs(se)?Math.abs(N)>Math.abs(ae)?"x":"z":Math.abs(se)>Math.abs(ae)?"y":"z",$={x:N,y:se,z:ae};Math.abs($[ge])<I&&($[ge]=$[ge]<0?-I:I),N=$.x,se=$.y,ae=$.z,X[U]=I*Math.sin(Math.acos(Math.abs(ae)/I))*Math.cos(Math.atan(Math.abs(se)/Math.abs(N)))*(N/Math.abs(N)),X[U+1]=I*Math.sin(Math.acos(Math.abs(ae)/I))*Math.sin(Math.atan(Math.abs(se)/Math.abs(N)))*(se/Math.abs(se)),X[U+2]=I*Math.cos(Math.acos(Math.abs(ae)/I))*(ae/Math.abs(ae));let Ce=Math.random()>.3,ye,Ee,_e;Ce?(ye=(Math.random()+1)/2,Ee=(Math.random()+1)/2,_e=(Math.random()+1)/2):(ye=1,Ee=1,_e=1),G.setRGB(ye,Ee,_e),Z[U]=G.r,Z[U+1]=G.g,Z[U+2]=G.b}R.setAttribute("position",new Ct(X,3)),R.setAttribute("color",new Ct(Z,3)),R.computeBoundingSphere();let Y=new qo({size:6,vertexColors:void 0});const re=new hc(R,Y);t.add(re)},de=()=>{const R=new jt;let X=new Float32Array(5e4*3),Z=new Float32Array(5e4*3),G=new We;const I=1e7;for(let U=0;U<X.length;U+=3){let N=Math.random()*6*I*(Math.random()<.5?-1:1),se=Math.random()*6*I*(Math.random()<.5?-1:1),ae=Math.random()*6*I*(Math.random()<.5?-1:1),ge=Math.abs(N)>Math.abs(se)?Math.abs(N)>Math.abs(ae)?"x":"z":Math.abs(se)>Math.abs(ae)?"y":"z",$={x:N,y:se,z:ae};Math.abs($[ge])<I&&($[ge]=$[ge]<0?-I:I),N=$.x,se=$.y,ae=$.z;let Ce=Math.sqrt(N*N+se*se+ae*ae)>6*I?6*I:Math.sqrt(N*N+se*se+ae*ae);X[U]=Ce*Math.sin(Math.acos(Math.abs(ae)/Ce))*Math.cos(Math.atan(Math.abs(se)/Math.abs(N)))*(N/Math.abs(N)),X[U+1]=Ce*Math.sin(Math.acos(Math.abs(ae)/Ce))*Math.sin(Math.atan(Math.abs(se)/Math.abs(N)))*(se/Math.abs(se)),X[U+2]=Ce*Math.cos(Math.acos(Math.abs(ae)/Ce))*(ae/Math.abs(ae));let ye=Math.random()>.3,Ee,_e,Ue;ye?(Ee=(Math.random()+1)/2,_e=(Math.random()+1)/2,Ue=(Math.random()+1)/2):(Ee=1,_e=1,Ue=1),G.setRGB(Ee,_e,Ue),Z[U]=G.r,Z[U+1]=G.g,Z[U+2]=G.b}R.setAttribute("position",new Ct(X,3)),R.setAttribute("color",new Ct(Z,3)),R.computeBoundingSphere();let Y=new qo({size:6,vertexColors:void 0});const re=new hc(R,Y);t.add(re)};return Hc(()=>{c()}),(F,R)=>(pu(),mu("div",{class:"webGl-box",ref_key:"webGlRef",ref:e},R[0]||(R[0]=[Ms("div",{id:"webgl"},null,-1)]),512))}},Ux=Ox(Nx,[["__scopeId","data-v-16b9057c"]]),zx={__name:"App",setup(i){return console.log("作者:"),console.log("https://github.com/y467770447"),(e,t)=>(pu(),mu(rn,null,[Fn(Ux,{msg:"Vite + Vue"}),t[0]||(t[0]=Ms("div",{class:"fixed"},[Ms("a",{href:"https://github.com/y467770447"}," 康康作者的github ")],-1))],64))}};Ed(zx).mount("#app");
