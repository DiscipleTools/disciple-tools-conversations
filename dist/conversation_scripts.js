/*! For license information please see conversation_scripts.js.LICENSE.txt */
(()=>{var t,e,o,n={116:(t,e,o)=>{var n={"./am_ET.js":[331,331],"./ar.js":[966,966],"./ar_MA.js":[847,847],"./bg_BG.js":[214,214],"./bn_BD.js":[526,526],"./bs_BA.js":[908,527],"./cs.js":[307,307],"./de_DE.js":[806,806],"./el.js":[332,332],"./en_US.js":[289,289],"./es-419.js":[586,586],"./es_419.js":[180,180],"./es_ES.js":[392,392],"./fa_IR.js":[799,799],"./fr_FR.js":[60,60],"./hi_IN.js":[934,934],"./hr.js":[647,647],"./hu_HU.js":[726,726],"./id_ID.js":[10,10],"./it_IT.js":[986,986],"./ja.js":[668,668],"./ko_KR.js":[383,383],"./mk_MK.js":[408,408],"./mr.js":[146,146],"./my_MM.js":[292,292],"./ne_NP.js":[161,161],"./nl_NL.js":[880,880],"./pa_IN.js":[454,454],"./pl.js":[997,997],"./pt_BR.js":[527,908],"./ro_RO.js":[566,566],"./ru_RU.js":[158,158],"./sl_SI.js":[497,497],"./sr_BA.js":[470,470],"./sw.js":[143,143],"./th.js":[213,213],"./tl.js":[361,361],"./tr_TR.js":[604,604],"./uk.js":[977,977],"./vi.js":[560,560],"./zh_CN.js":[167,167],"./zh_TW.js":[791,791]};function i(t){if(!o.o(n,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],i=e[0];return o.e(e[1]).then((()=>o(i)))}i.keys=()=>Object.keys(n),i.id=116,t.exports=i},838:(t,e,o)=>{"use strict";const n=window,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;class a{constructor(t,e,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1]),t[0]);return new a(o,t,r)},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;var d;const u=window,h=u.trustedTypes,p=h?h.emptyScript:"",f=u.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g},b="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const n=this._$Ep(o,e);void 0!==n&&(this._$Ev.set(n,o),t.push(n))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),i=n.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=v){var n;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:m).toAttribute(e,o.type);this._$El=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(t,e){var o;const n=this.constructor,i=n._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=n.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:m;this._$El=i,this[i]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let n=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var w;y[b]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:y}),(null!==(d=u.reactiveElementVersions)&&void 0!==d?d:u.reactiveElementVersions=[]).push("1.6.3");const x=window,_=x.trustedTypes,k=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,S="?"+O,E=`<${S}>`,T=document,j=()=>T.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,P=t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),L="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,I=/>/g,N=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,q=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),D=q(1),V=q(2),U=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),G=new WeakMap,W=T.createTreeWalker(T,129,null,!1);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Z=(t,e)=>{const o=t.length-1,n=[];let i,r=2===e?"<svg>":"",s=M;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===M?"!--"===l[1]?s=R:void 0!==l[1]?s=I:void 0!==l[2]?(B.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=N):void 0!==l[3]&&(s=N):s===N?">"===l[0]?(s=null!=i?i:M,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?N:'"'===l[3]?z:F):s===z||s===F?s=N:s===R||s===I?s=M:(s=N,i=void 0);const u=s===N&&t[e+1].startsWith("/>")?" ":"";r+=s===M?o+E:c>=0?(n.push(a),o.slice(0,c)+$+o.slice(c)+O+u):o+O+(-2===c?(n.push(void 0),e):u)}return[K(t,r+(t[o]||"<?>")+(2===e?"</svg>":"")),n]};class J{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let i=0,r=0;const s=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=J.createElement(l,o),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=W.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith($)||e.startsWith(O)){const o=c[r++];if(t.push(e),void 0!==o){const t=n.getAttribute(o.toLowerCase()+$).split(O),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?et:"?"===e[1]?nt:"@"===e[1]?it:tt})}else a.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(B.test(n.tagName)){const t=n.textContent.split(O),e=t.length-1;if(e>0){n.textContent=_?_.emptyScript:"";for(let o=0;o<e;o++)n.append(t[o],j()),W.nextNode(),a.push({type:2,index:++i});n.append(t[e],j())}}}else if(8===n.nodeType)if(n.data===S)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(O,t+1));)a.push({type:7,index:i}),t+=O.length-1}i++}}static createElement(t,e){const o=T.createElement("template");return o.innerHTML=t,o}}function Q(t,e,o=t,n){var i,r,s,a;if(e===U)return e;let l=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,n)),void 0!==n?(null!==(s=(a=o)._$Co)&&void 0!==s?s:a._$Co=[])[n]=l:o._$Cl=l),void 0!==l&&(e=Q(t,l._$AS(t,e.values),l,n)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(o,!0);W.currentNode=i;let r=W.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new X(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new rt(r,this,t)),this._$AV.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(r=W.nextNode(),s++)}return W.currentNode=T,i}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class X{constructor(t,e,o,n){var i;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),C(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):P(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=J.createElement(K(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(o);else{const t=new Y(i,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new J(t)),e}T(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const i of t)n===e.length?e.push(o=new X(this.k(j()),this.k(j()),this,this.options)):o=e[n],o._$AI(i),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class tt{constructor(t,e,o,n,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const i=this.strings;let r=!1;if(void 0===i)t=Q(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==U,r&&(this._$AH=t);else{const n=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=Q(this,n[o+s],e,s),a===U&&(a=this._$AH[s]),r||(r=!C(a)||a!==this._$AH[s]),a===H?t=H:t!==H&&(t+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}r&&!n&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const ot=_?_.emptyScript:"";class nt extends tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,ot):this.element.removeAttribute(this.name)}}class it extends tt{constructor(t,e,o,n,i){super(t,e,o,n,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=Q(this,t,e,0))&&void 0!==o?o:H)===U)return;const n=this._$AH,i=t===H&&n!==H||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==H&&(n===H||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const st={O:$,P:O,A:S,C:1,M:Z,L:Y,R:P,D:Q,I:X,V:tt,H:nt,N:it,U:et,F:rt},at=x.litHtmlPolyfillSupport;null==at||at(J,X),(null!==(w=x.litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.8.0");var lt,ct;class dt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:e;let s=r._$litPart$;if(void 0===s){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=s=new X(e.insertBefore(j(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}dt.finalized=!0,dt._$litElement$=!0,null===(lt=globalThis.litElementHydrateSupport)||void 0===lt||lt.call(globalThis,{LitElement:dt});const ut=globalThis.litElementPolyfillSupport;null==ut||ut({LitElement:dt});(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.3.3");const ht=1,pt=2,ft=t=>(...e)=>({_$litDirective$:t,values:e});class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const gt=ft(class extends mt{constructor(t){var e;if(super(t),t.type!==ht||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,n;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(t))&&this.it.add(t);return this.render(e)}const i=t.element.classList;this.it.forEach((t=>{t in e||(i.remove(t),this.it.delete(t))}));for(const t in e){const o=!!e[t];o===this.it.has(t)||(null===(n=this.nt)||void 0===n?void 0:n.has(t))||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return U}});var vt=o(61);const bt=["am_ET","ar","ar_MA","bg_BG","bn_BD","bs_BA","cs","de_DE","el","en_US","es_419","es_ES","fa_IR","fr_FR","hi_IN","hr","hu_HU","id_ID","it_IT","ja","ko_KR","mk_MK","mr","my_MM","ne_NP","nl_NL","pa_IN","pl","pt_BR","ro_RO","ru_RU","sl_SI","sr_BA","sw","th","tl","tr_TR","uk","vi","zh_CN","zh_TW"],{getLocale:yt,setLocale:wt}=(0,vt.E8)({sourceLocale:"en",targetLocales:bt,loadLocale:t=>o(116)(`./${t}.js`)});class xt{constructor(t,e="/wp-json"){this.nonce=t,this.apiRoot=e.endsWith("/")?`${e}`:`${e} + "/"`,this.apiRoot=`/${e}/`.replace(/\/\//g,"/")}async makeRequest(t,e,o,n="dt/v1/"){let i=n;i.endsWith("/")||e.startsWith("/")||(i+="/");const r=e.startsWith("http")?e:`${this.apiRoot}${i}${e}`,s={method:t,credentials:"same-origin",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce}};"GET"!==t&&(s.body=JSON.stringify(o));const a=await fetch(r,s),l=await a.json();if(!a.ok){const t=new Error(l?.message||l.toString());throw t.args={status:a.status,statusText:a.statusText,body:l},t}return l}async makeRequestOnPosts(t,e,o={}){return this.makeRequest(t,e,o,"dt-posts/v2/")}async getPost(t,e){return this.makeRequestOnPosts("GET",`${t}/${e}`)}async createPost(t,e){return this.makeRequestOnPosts("POST",t,e)}async updatePost(t,e,o){return this.makeRequestOnPosts("POST",`${t}/${e}`,o)}async deletePost(t,e){return this.makeRequestOnPosts("DELETE",`${t}/${e}`)}async listPostsCompact(t,e=""){const o=new URLSearchParams({s:e});return this.makeRequestOnPosts("GET",`${t}/compact?${o}`)}async getPostDuplicates(t,e,o){return this.makeRequestOnPosts("GET",`${t}/${e}/all_duplicates`,o)}async getMultiSelectValues(t,e,o=""){const n=new URLSearchParams({s:o,field:e});return this.makeRequestOnPosts("GET",`${t}/multi-select-values?${n}`)}async transferContact(t,e){return this.makeRequestOnPosts("POST","contacts/transfer",{contact_id:t,site_post_id:e})}async transferContactSummaryUpdate(t,e){return this.makeRequestOnPosts("POST","contacts/transfer/summary/send-update",{contact_id:t,update:e})}async requestRecordAccess(t,e,o){return this.makeRequestOnPosts("POST",`${t}/${e}/request_record_access`,{user_id:o})}async createComment(t,e,o,n="comment"){return this.makeRequestOnPosts("POST",`${t}/${e}/comments`,{comment:o,comment_type:n})}async updateComment(t,e,o,n,i="comment"){return this.makeRequestOnPosts("POST",`${t}/${e}/comments/${o}`,{comment:n,comment_type:i})}async deleteComment(t,e,o){return this.makeRequestOnPosts("DELETE",`${t}/${e}/comments/${o}`)}async getComments(t,e){return this.makeRequestOnPosts("GET",`${t}/${e}/comments`)}async toggle_comment_reaction(t,e,o,n,i){return this.makeRequestOnPosts("POST",`${t}/${e}/comments/${o}/react`,{user_id:n,reaction:i})}async getPostActivity(t,e){return this.makeRequestOnPosts("GET",`${t}/${e}/activity`)}async getSingleActivity(t,e,o){return this.makeRequestOnPosts("GET",`${t}/${e}/activity/${o}`)}async revertActivity(t,e,o){return this.makeRequestOnPosts("GET",`${t}/${e}/revert/${o}`)}async getPostShares(t,e){return this.makeRequestOnPosts("GET",`${t}/${e}/shares`)}async addPostShare(t,e,o){return this.makeRequestOnPosts("POST",`${t}/${e}/shares`,{user_id:o})}async removePostShare(t,e,o){return this.makeRequestOnPosts("DELETE",`${t}/${e}/shares`,{user_id:o})}async getFilters(){return this.makeRequest("GET","users/get_filters")}async saveFilters(t,e){return this.makeRequest("POST","users/save_filters",{filter:e,postType:t})}async deleteFilter(t,e){return this.makeRequest("DELETE","users/save_filters",{id:e,postType:t})}async searchUsers(t){return this.makeRequest("GET",`users/get_users?s=${t}`)}async createUser(t){return this.makeRequest("POST","users/create",t)}async advanced_search(t,e,o,n){return this.makeRequest("GET","advanced_search",{query:t,postType:e,offset:o,post:n.post,comment:n.comment,meta:n.meta,status:n.status},"dt-posts/v2/posts/search/")}}!function(t){const e=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,r=new WeakMap,s=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap,g={ariaAtomic:"aria-atomic",ariaAutoComplete:"aria-autocomplete",ariaBusy:"aria-busy",ariaChecked:"aria-checked",ariaColCount:"aria-colcount",ariaColIndex:"aria-colindex",ariaColIndexText:"aria-colindextext",ariaColSpan:"aria-colspan",ariaCurrent:"aria-current",ariaDescription:"aria-description",ariaDisabled:"aria-disabled",ariaExpanded:"aria-expanded",ariaHasPopup:"aria-haspopup",ariaHidden:"aria-hidden",ariaInvalid:"aria-invalid",ariaKeyShortcuts:"aria-keyshortcuts",ariaLabel:"aria-label",ariaLevel:"aria-level",ariaLive:"aria-live",ariaModal:"aria-modal",ariaMultiLine:"aria-multiline",ariaMultiSelectable:"aria-multiselectable",ariaOrientation:"aria-orientation",ariaPlaceholder:"aria-placeholder",ariaPosInSet:"aria-posinset",ariaPressed:"aria-pressed",ariaReadOnly:"aria-readonly",ariaRelevant:"aria-relevant",ariaRequired:"aria-required",ariaRoleDescription:"aria-roledescription",ariaRowCount:"aria-rowcount",ariaRowIndex:"aria-rowindex",ariaRowIndexText:"aria-rowindextext",ariaRowSpan:"aria-rowspan",ariaSelected:"aria-selected",ariaSetSize:"aria-setsize",ariaSort:"aria-sort",ariaValueMax:"aria-valuemax",ariaValueMin:"aria-valuemin",ariaValueNow:"aria-valuenow",ariaValueText:"aria-valuetext",role:"role"};function v(t){const e=i.get(t),{form:o}=e;P(t,o,e),E(t,e.labels)}const b=(t,e=!1)=>{const o=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>i.has(t)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});let n=o.nextNode();const r=!e||t.disabled;for(;n;)n.formDisabledCallback&&r&&$(n,t.disabled),n=o.nextNode()},y={attributes:!0,attributeFilter:["disabled","name"]},w=N()?new MutationObserver((t=>{for(const e of t){const t=e.target;if("disabled"===e.attributeName&&(t.constructor.formAssociated?$(t,t.hasAttribute("disabled")):"fieldset"===t.localName&&b(t)),"name"===e.attributeName&&t.constructor.formAssociated){const e=i.get(t),o=c.get(t);e.setFormValue(o)}}})):{};function x(t){t.forEach((t=>{const{addedNodes:e,removedNodes:o}=t,r=Array.from(e),s=Array.from(o);r.forEach((t=>{var e;if(i.has(t)&&t.constructor.formAssociated&&v(t),d.has(t)){const e=d.get(t);Object.keys(g).filter((t=>null!==e[t])).forEach((o=>{t.setAttribute(g[o],e[o])})),d.delete(t)}if(m.has(t)){const e=m.get(t);t.setAttribute("internals-valid",e.validity.valid.toString()),t.setAttribute("internals-invalid",(!e.validity.valid).toString()),t.setAttribute("aria-invalid",(!e.validity.valid).toString()),m.delete(t)}if("form"===t.localName){const e=l.get(t),o=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>!i.has(t)||!t.constructor.formAssociated||e&&e.has(t)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT});let n=o.nextNode();for(;n;)v(n),n=o.nextNode()}"fieldset"===t.localName&&(null===(e=w.observe)||void 0===e||e.call(w,t,y),b(t,!0))})),s.forEach((t=>{const e=i.get(t);if(e&&n.get(e)&&O(e),a.has(t)){a.get(t).disconnect()}}))}))}function _(t){t.forEach((t=>{const{removedNodes:e}=t;e.forEach((e=>{const o=p.get(t.target);i.has(e)&&I(e),o.disconnect()}))}))}!N()||new MutationObserver(x);const k={childList:!0,subtree:!0},$=(t,e)=>{t.toggleAttribute("internals-disabled",e),e?t.setAttribute("aria-disabled","true"):t.removeAttribute("aria-disabled"),t.formDisabledCallback&&t.formDisabledCallback.apply(t,[e])},O=t=>{n.get(t).forEach((t=>{t.remove()})),n.set(t,[])},S=(t,e)=>{const o=document.createElement("input");return o.type="hidden",o.name=t.getAttribute("name"),t.after(o),n.get(e).push(o),o},E=(t,e)=>{if(e.length){Array.from(e).forEach((e=>e.addEventListener("click",t.click.bind(t))));let o=e[0].id;e[0].id||(o=`${e[0].htmlFor}_Label`,e[0].id=o),t.setAttribute("aria-labelledby",o)}},T=t=>{const e=Array.from(t.elements).filter((t=>!t.tagName.includes("-")&&t.validity)).map((t=>t.validity.valid)),o=l.get(t)||[],n=[...e,...Array.from(o).filter((t=>t.isConnected)).map((t=>i.get(t).validity.valid))].includes(!1);t.toggleAttribute("internals-invalid",n),t.toggleAttribute("internals-valid",!n)},j=t=>{T(L(t.target))},C=t=>{T(L(t.target))},A=t=>{const e=l.get(t.target);e&&e.size&&e.forEach((t=>{t.constructor.formAssociated&&t.formResetCallback&&t.formResetCallback.apply(t)}))},P=(t,e,o)=>{if(e){const n=l.get(e);if(n)n.add(t);else{const o=new Set;o.add(t),l.set(e,o),(t=>{const e=["button[type=submit]","input[type=submit]","button:not([type])"].map((t=>`${t}:not([disabled])`)).map((e=>`${e}:not([form])${t.id?`,${e}[form='${t.id}']`:""}`)).join(",");t.addEventListener("click",(o=>{if(o.target.closest(e)){const e=l.get(t);if(t.noValidate)return;e.size&&Array.from(e).reverse().map((t=>i.get(t).reportValidity())).includes(!1)&&o.preventDefault()}}))})(e),e.addEventListener("reset",A),e.addEventListener("input",j),e.addEventListener("change",C)}s.set(e,{ref:t,internals:o}),t.constructor.formAssociated&&t.formAssociatedCallback&&setTimeout((()=>{t.formAssociatedCallback.apply(t,[e])}),0),T(e)}},L=t=>{let e=t.parentNode;return e&&"FORM"!==e.tagName&&(e=L(e)),e},M=(t,e,o=DOMException)=>{if(!t.constructor.formAssociated)throw new o(e)},R=(t,e,o)=>{const n=l.get(t);return n&&n.size&&n.forEach((t=>{i.get(t)[o]()||(e=!1)})),e},I=t=>{if(t.constructor.formAssociated){const e=i.get(t),{labels:o,form:n}=e;E(t,o),P(t,n,e)}};function N(){return"undefined"!=typeof MutationObserver}class F{constructor(){this.badInput=!1,this.customError=!1,this.patternMismatch=!1,this.rangeOverflow=!1,this.rangeUnderflow=!1,this.stepMismatch=!1,this.tooLong=!1,this.tooShort=!1,this.typeMismatch=!1,this.valid=!0,this.valueMissing=!1,Object.seal(this)}}const z=t=>{let e=!0;for(let o in t)"valid"!==o&&!1!==t[o]&&(e=!1);return e},B=new WeakMap;function q(t,e){t.toggleAttribute(e,!0),t.part&&t.part.add(e)}class D extends Set{static get isPolyfilled(){return!0}constructor(t){if(super(),!t||!t.tagName||-1===t.tagName.indexOf("-"))throw new TypeError("Illegal constructor");B.set(this,t)}add(t){if(!/^--/.test(t)||"string"!=typeof t)throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${t} must start with '--'.`);const e=super.add(t),o=B.get(this),n=`state${t}`;return o.isConnected?q(o,n):setTimeout((()=>{q(o,n)})),e}clear(){for(let[t]of this.entries())this.delete(t);super.clear()}delete(t){const e=super.delete(t),o=B.get(this);return o.isConnected?(o.toggleAttribute(`state${t}`,!1),o.part&&o.part.remove(`state${t}`)):setTimeout((()=>{o.toggleAttribute(`state${t}`,!1),o.part&&o.part.remove(`state${t}`)})),e}}function V(t,e,o,n){if("a"===o&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?n:"a"===o?n.call(t):n?n.value:e.get(t)}var U;class H{constructor(t){U.set(this,void 0),function(t,e,o,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===n?i.call(t,o):i?i.value=o:e.set(t,o)}(this,U,t,"f");for(let e=0;e<t.length;e++){let o=t[e];this[e]=o,o.hasAttribute("name")&&(this[o.getAttribute("name")]=o)}Object.freeze(this)}get length(){return V(this,U,"f").length}[(U=new WeakMap,Symbol.iterator)](){return V(this,U,"f")[Symbol.iterator]()}item(t){return null==this[t]?null:this[t]}namedItem(t){return null==this[t]?null:this[t]}}class G{static get isPolyfilled(){return!0}constructor(t){if(!t||!t.tagName||-1===t.tagName.indexOf("-"))throw new TypeError("Illegal constructor");const r=t.getRootNode(),s=new F;this.states=new D(t),e.set(this,t),o.set(this,s),i.set(t,this),((t,e)=>{for(let o in g){e[o]=null;let n=null;const i=g[o];Object.defineProperty(e,o,{get:()=>n,set(o){n=o,t.isConnected?t.setAttribute(i,o):d.set(t,e)}})}})(t,this),((t,e)=>{var o;n.set(e,[]),null===(o=w.observe)||void 0===o||o.call(w,t,y)})(t,this),Object.seal(this),r instanceof DocumentFragment&&(t=>{var e,o;const n=new MutationObserver(_);(null===(e=null===window||void 0===window?void 0:window.ShadyDOM)||void 0===e?void 0:e.inUse)&&t.mode&&t.host&&(t=t.host),null===(o=n.observe)||void 0===o||o.call(n,t,{childList:!0}),p.set(t,n)})(r)}checkValidity(){const t=e.get(this);if(M(t,"Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;const n=o.get(this);if(!n.valid){const e=new Event("invalid",{bubbles:!1,cancelable:!0,composed:!1});t.dispatchEvent(e)}return n.valid}get form(){const t=e.get(this);let o;return M(t,"Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element."),!0===t.constructor.formAssociated&&(o=L(t)),o}get labels(){const t=e.get(this);M(t,"Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");const o=t.getAttribute("id"),n=t.getRootNode();return n&&o?n.querySelectorAll(`[for="${o}"]`):[]}reportValidity(){const t=e.get(this);if(M(t,"Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!this.willValidate)return!0;const o=this.checkValidity(),n=h.get(this);if(n&&!t.constructor.formAssociated)throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");return!o&&n&&(t.focus(),n.focus()),o}setFormValue(t){const o=e.get(this);if(M(o,"Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."),O(this),null==t||t instanceof FormData)null!=t&&t instanceof FormData&&Array.from(t).reverse().forEach((([t,e])=>{if("string"==typeof e){const n=S(o,this);n.name=t,n.value=e}}));else if(o.getAttribute("name")){S(o,this).value=t}c.set(o,t)}setValidity(t,n,i){const s=e.get(this);if(M(s,"Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."),!t)throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");h.set(this,i);const a=o.get(this),l={};for(const e in t)l[e]=t[e];var c;0===Object.keys(l).length&&((c=a).badInput=!1,c.customError=!1,c.patternMismatch=!1,c.rangeOverflow=!1,c.rangeUnderflow=!1,c.stepMismatch=!1,c.tooLong=!1,c.tooShort=!1,c.typeMismatch=!1,c.valid=!0,c.valueMissing=!1);const d=Object.assign(Object.assign({},a),l);delete d.valid;const{valid:u}=((t,e,o)=>(t.valid=z(e),Object.keys(e).forEach((o=>t[o]=e[o])),o&&T(o),t))(a,d,this.form);if(!u&&!n)throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");r.set(this,u?"":n),s.isConnected?(s.toggleAttribute("internals-invalid",!u),s.toggleAttribute("internals-valid",u),s.setAttribute("aria-invalid",`${!u}`)):m.set(s,this)}get shadowRoot(){const t=e.get(this),o=u.get(t);return o||null}get validationMessage(){const t=e.get(this);return M(t,"Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."),r.get(this)}get validity(){const t=e.get(this);M(t,"Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element.");return o.get(this)}get willValidate(){const t=e.get(this);return M(t,"Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."),!(t.disabled||t.hasAttribute("disabled")||t.hasAttribute("readonly"))}}let W=!1,K=!1;function Z(t){K||(K=!0,window.CustomStateSet=D,t&&(HTMLElement.prototype.attachInternals=function(...e){const o=t.call(this,e);return o.states=new D(this),o}))}function J(t=!0){if(!W){if(W=!0,"undefined"!=typeof window&&(window.ElementInternals=G),"undefined"!=typeof CustomElementRegistry){const e=CustomElementRegistry.prototype.define;CustomElementRegistry.prototype.define=function(t,o,n){if(o.formAssociated){const t=o.prototype.connectedCallback;o.prototype.connectedCallback=function(){f.has(this)||(f.set(this,!0),this.hasAttribute("disabled")&&$(this,!0)),null!=t&&t.apply(this),I(this)}}e.call(this,t,o,n)}}if("undefined"!=typeof HTMLElement&&(HTMLElement.prototype.attachInternals=function(){if(!this.tagName)return{};if(-1===this.tagName.indexOf("-"))throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");if(i.has(this))throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");return new G(this)}),"undefined"!=typeof Element){function o(...t){const e=n.apply(this,t);if(u.set(this,e),N()){const t=new MutationObserver(x);window.ShadyDOM?t.observe(this,k):t.observe(e,k),a.set(this,t)}return e}const n=Element.prototype.attachShadow;Element.prototype.attachShadow=o}if(N()&&"undefined"!=typeof document){new MutationObserver(x).observe(document.documentElement,k)}"undefined"!=typeof HTMLFormElement&&function(){const t=HTMLFormElement.prototype.checkValidity;HTMLFormElement.prototype.checkValidity=function(...e){let o=t.apply(this,e);return R(this,o,"checkValidity")};const e=HTMLFormElement.prototype.reportValidity;HTMLFormElement.prototype.reportValidity=function(...t){let o=e.apply(this,t);return R(this,o,"reportValidity")};const{get:o}=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"elements");Object.defineProperty(HTMLFormElement.prototype,"elements",{get(...t){const e=o.call(this,...t),n=Array.from(l.get(this)||[]);if(0===n.length)return e;const i=Array.from(e).concat(n).sort(((t,e)=>t.compareDocumentPosition?2&t.compareDocumentPosition(e)?1:-1:0));return new H(i)}})}(),(t||"undefined"!=typeof window&&!window.CustomStateSet)&&Z()}}!!customElements.polyfillWrapFlushCallback||(!function(){if("undefined"==typeof window||!window.ElementInternals||!HTMLElement.prototype.attachInternals)return!1;class t extends HTMLElement{constructor(){super(),this.internals=this.attachInternals()}}const e=`element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g,"")}`;customElements.define(e,t);const o=new t;return["shadowRoot","form","willValidate","validity","validationMessage","labels","setFormValue","setValidity","checkValidity","reportValidity"].every((t=>t in o.internals))}()?J(!1):"undefined"==typeof window||window.CustomStateSet||Z(HTMLElement.prototype.attachInternals)),t.forceCustomStateSetPolyfill=Z,t.forceElementInternalsPolyfill=J,Object.defineProperty(t,"__esModule",{value:!0})}({});class _t extends dt{static get properties(){return{RTL:{type:String},locale:{type:String},apiRoot:{type:String,reflect:!1},postType:{type:String,reflect:!1},postID:{type:String,reflect:!1}}}get _focusTarget(){return this.shadowRoot.children[0]instanceof Element?this.shadowRoot.children[0]:null}constructor(){super(),(0,vt.fA)(this),this.addEventListener("focus",this._proxyFocus.bind(this))}connectedCallback(){super.connectedCallback(),this.apiRoot=this.apiRoot?`${this.apiRoot}/`.replace("//","/"):"/",this.api=new xt(this.nonce,this.apiRoot)}willUpdate(t){if(void 0===this.RTL){const t=this.closest("[dir]");if(t){const e=t.getAttribute("dir");e&&(this.RTL="rtl"===e.toLowerCase())}}if(!this.locale){const t=this.closest("[lang]");if(t){const e=t.getAttribute("lang");e&&(this.locale=e)}}if(t&&t.has("locale")&&this.locale)try{wt(this.locale)}catch(t){console.error(t)}}_proxyFocus(){this._focusTarget&&this._focusTarget.focus()}}window.customElements.define("dt-button",class extends _t{static get styles(){return l`
      :host {
        display: inline-flex;
        width: fit-content;
        height: fit-content;
      }

      .dt-button {
        cursor: pointer;
        display: flex;
        padding: var(--dt-button-padding-y, 10px)
          var(--dt-button-padding-x, 10px);
        font-family: var(--dt-button-font-family);
        font-size: var(--dt-button-font-size, 14px);
        line-height: var(--dt-button-line-height, inherit);
        font-weight: var(--dt-button-font-weight, 700);
        background-color: var(
          --dt-button-context-background-color,
          var(--dt-button-background-color)
        );
        border: var(--dt-button-border-width, 1px) solid
          var(--dt-button-context-border-color, var(--dt-button-border-color));
        border-radius: var(--dt-button-border-radius, 10px);
        box-shadow: var(
          --dt-button-box-shadow,
          --dt-button-context-box-shadow(0 2px 4px rgb(0 0 0 / 25%))
        );
        color: var(--dt-button-context-text-color, var(--dt-button-text-color));
        text-rendering: optimizeLegibility;
        gap: var(--dt-button-gap, 10px);
        justify-content: var(--dt-button-justify-content, center);
        align-content: var(--dt-button-align-content, center);
        align-items: var(--dt-button-align-items, center);
        text-decoration: var(
          --dt-button-text-decoration,
          var(--dt-button-context-text-decoration, none)
        );
        text-transform: var(--dt-button-text-transform, none);
        letter-spacing: var(--dt-button-letter-spacing, normal);
        width: var(--dt-button-width, 100%);
        height: var(--dt-button-height, auto);
        aspect-ratio: var(--dt-button-aspect-ratio, auto);
        position: relative;
      }

      .dt-button.dt-button--outline {
        background-color: transparent;
        color: var(--dt-button-context-text-color, var(--text-color-inverse));
      }

      .dt-button--primary:not(.dt-button--outline) {
        --dt-button-context-border-color: var(--primary-color);
        --dt-button-context-background-color: var(--primary-color);
        --dt-button-context-text-color: var(--dt-button-text-color-light);
      }

      .dt-button--link:not(.dt-button--outline) {
        --dt-button-context-text-decoration: underline;
        --dt-button-context-box-shadow: none;
        --dt-button-context-border-color: transparent;
        --dt-button-context-background-color: transparent;
        --dt-button-context-text-color: var(--dt-button-text-color-dark);
      }

      .dt-button--alert:not(.dt-button--outline) {
        --dt-button-context-border-color: var(--alert-color);
        --dt-button-context-background-color: var(--alert-color);
        --dt-button-context-text-color: var(--dt-button-text-color-light);
      }

      .dt-button--caution:not(.dt-button--outline) {
        --dt-button-context-border-color: var(--caution-color);
        --dt-button-context-background-color: var(--caution-color);
        --dt-button-context-text-color: var(--dt-button-text-color-dark);
      }

      .dt-button--success:not(.dt-button--outline) {
        --dt-button-context-border-color: var(--success-color);
        --dt-button-context-background-color: var(--success-color);
        --dt-button-context-text-color: var(--dt-button-text-color-light);
      }

      .dt-button--inactive:not(.dt-button--outline) {
        --dt-button-context-border-color: var(--inactive-color);
        --dt-button-context-background-color: var(--inactive-color);
        --dt-button-context-text-color: var(--dt-button-text-color-light);
      }

      .dt-button--disabled:not(.dt-button--outline) {
        --dt-button-context-border-color: var(--disabled-color);
        --dt-button-context-background-color: var(--disabled-color);
        --dt-button-context-text-color: var(--dt-button-text-color-dark);
      }

      .dt-button--primary.dt-button--outline {
        --dt-button-context-border-color: var(--primary-color);
        --dt-button-context-text-color: var(--primary-color);
      }

      .dt-button--alert.dt-button--outline {
        --dt-button-context-border-color: var(--alert-color);
        --dt-button-context-text-color: var(--alert-color);
      }

      .dt-button--caution.dt-button--outline {
        --dt-button-context-border-color: var(--caution-color);
        --dt-button-context-text-color: var(--caution-color);
      }

      .dt-button--success.dt-button--outline {
        --dt-button-context-border-color: var(--success-color);
        --dt-button-context-text-color: var(--success-color);
      }

      .dt-button--inactive.dt-button--outline {
        --dt-button-context-border-color: var(--inactive-color);
      }

      .dt-button--disabled.dt-button--outline {
        --dt-button-context-border-color: var(--disabled-color);
      }

      .dt-button.dt-button--rounded {
        --dt-button-border-radius: 50%;
        --dt-button-padding-x: 0px;
        --dt-button-padding-y: 0px;
        --dt-button-aspect-ratio: var(--dt-button-rounded-aspect-ratio, 1/1);
      }

      button.toggle {
        margin-inline-end: 0;
        margin-inline-start: auto;
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    `}static get properties(){return{context:{type:String},type:{type:String},outline:{type:Boolean},href:{type:String},title:{type:String},onClick:{type:Function},rounded:{type:Boolean},confirm:{type:String}}}get classes(){const t={"dt-button":!0,"dt-button--outline":this.outline,"dt-button--rounded":this.rounded};return t[`dt-button--${this.context}`]=!0,t}constructor(){super(),this.context="default"}handleClick(t){if(!this.confirm||confirm(this.confirm))if(this.onClick)t.preventDefault(),this.onClick(t);else{const t=this.closest("form");t&&t.submit()}else t.preventDefault()}_dismiss(){this.hide=!0}render(){return this.hide?D``:this.href?D`
        <a
          class=${gt(this.classes)}
          href=${this.href}
          title=${this.title}
          type=${this.type}
          @click=${()=>this.handleClick()}
        >
          <div>
            <slot></slot>
          </div>
        </a>
      `:D`
      <button
        class=${gt(this.classes)}
        title=${this.title}
        type=${this.type}
        @click=${()=>this.handleClick()}
      >
        <div>
          <slot></slot>
        </div>
      </button>
    `}});window.customElements.define("dt-church-health-icon",class extends _t{static get styles(){return l`
      root {
        display: block;
      }
      .health-item img {
        width: var(--d);
        height: var(--d);
        filter: grayscale(1) opacity(0.75);
      }
      .health-item--active img {
        filter: none !important;
      }
    `}static get properties(){return{key:{type:String},metric:{type:Object},group:{type:Object},active:{type:Boolean,reflect:!0},missingIcon:{type:String},handleSave:{type:Function}}}render(){const{metric:t,active:e,missingIcon:o=`${window.wpApiShare.template_dir}/dt-assets/images/groups/missing.svg`}=this;return D`<div
      class=${gt({"health-item":!0,"health-item--active":e})}
      title="${t.description}"
      @click="${this._handleClick}"
    >
      <img src="${t.icon?t.icon:o}" />
    </div>`}async _handleClick(){if(!this.handleSave)return;const t=!this.active;this.active=t;const e={health_metrics:{values:[{value:this.key,delete:!t}]}};try{await this.handleSave(this.group.ID,e)}catch(t){return void console.error(t)}t?this.group.health_metrics.push(this.key):this.group.health_metrics.pop(this.key)}});window.customElements.define("dt-church-health-circle",class extends _t{static get styles(){return l`
      .health-circle__container {
        --d: 55px; /* image size */
        --rel: 1; /* how much extra space we want between images, 1 = one image size */
        --r: calc(1 * var(--d) / var(--tan)); /* circle radius */
        --s: calc(3 * var(--r));
        margin: 1rem auto;
        display: flex;
        justify-content: center;
        align-items: baseline;
        padding-top: 100%;
        height: 0;
        position: relative;
        overflow: visible;
      }

      .health-circle {
        display: block;
        border-radius: 100%;
        border: 3px darkgray dashed;
        max-width: 100%;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
      }

      @media (max-width: 519px) {
        .health-circle__container {
          --d: 40px; /* image size */
        }

        .health-circle {
          max-width: 300px;
          max-height: 300px;
        }
      }

      @media (max-width: 400px) {
        .health-circle__container {
          --d: 30px; /* image size */
        }

        .health-circle {
          max-width: 250px;
          max-height: 250px;
        }
      }

      @media (max-width: 321px) {
        .health-circle__container {
          --d: 25px; /* image size */
        }

        .health-circle {
          max-width: 225px;
          max-height: 225px;
        }
      }

      .health-circle__grid {
        display: inline-block;
        position: relative;
        height: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        width: var(--s);
        max-width: 100%;
      }

      .health-circle--committed {
        border: 3px #4caf50 solid !important;
      }

      dt-church-health-icon {
        position: absolute;
        border-radius: 100%;
        font-size: 16px;
        color: black;
        text-align: center;
        font-style: italic;
        cursor: pointer;
        top: 50%;
        left: 50%;
        margin: calc(-0.5 * var(--d));
        width: var(--d);
        height: var(--d);
        --az: calc(var(--i) * 1turn / var(--m));
        transform: rotate(var(--az)) translate(var(--r)) rotate(calc(-1 * var(--az)));
      }
    `}static get properties(){return{groupId:{type:Number},group:{type:Object,reflect:!1},settings:{type:Object,reflect:!1},errorMessage:{type:String,attribute:!1},missingIcon:{type:String},handleSave:{type:Function}}}get metrics(){const t=this.settings||[];if(!Object.values(t).length)return[];return Object.entries(t).filter((([t,e])=>"church_commitment"!==t))}get isCommited(){return!!this.group&&(!!this.group.health_metrics&&this.group.health_metrics.includes("church_commitment"))}connectedCallback(){super.connectedCallback(),this.fetch()}adoptedCallback(){this.distributeItems()}updated(){this.distributeItems()}async fetch(){try{const t=[this.fetchSettings(),this.fetchGroup()];let[e,o]=await Promise.all(t);this.settings=e,this.post=o,e||(this.errorMessage="Error loading settings"),o||(this.errorMessage="Error loading group")}catch(t){console.error(t)}}fetchGroup(){if(this.group)return Promise.resolve(this.group);fetch(`/wp-json/dt-posts/v2/groups/${this.groupId}`).then((t=>t.json()))}fetchSettings(){return this.settings?Promise.resolve(this.settings):fetch("/wp-json/dt-posts/v2/groups/settings").then((t=>t.json()))}findMetric(t){const e=this.metrics.find((e=>e.key===t));return e?e.value:null}render(){if(!this.group||!this.metrics.length)return D`<dt-spinner></dt-spinner>`;const t=this.group.health_metrics||[];return this.errorMessage&&D`<dt-alert type="error">${this.errorMessage}</dt-alert>`,D`
      <div class="health-circle__wrapper">
        <div class="health-circle__container">
          <div
            class=${gt({"health-circle":!0,"health-circle--committed":this.isCommited})}
          >
            <div class="health-circle__grid">
              ${this.metrics.map((([e,o],n)=>D`<dt-church-health-icon
                    key="${e}"
                    .group="${this.group}"
                    .metric=${o}
                    .active=${-1!==t.indexOf(e)}
                    .style="--i: ${n+1}"
                    .missingIcon="${this.missingIcon}"
                    .handleSave="${this.handleSave}"
                  >
                  </dt-church-health-icon>`))}
            </div>
          </div>
        </div>

        <dt-toggle
          name="church-commitment"
          label="${this.settings.church_commitment.label}"
          requiredmessage=""
          icon="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          iconalttext="Icon Alt Text"
          privatelabel=""
          @click="${this.toggleClick}"
          ?checked=${this.isCommited}
        >
        </dt-toggle>
      </div>
    `}distributeItems(){const t=this.renderRoot.querySelector(".health-circle__container");let e=t.querySelectorAll("dt-church-health-icon").length,o=Math.tan(Math.PI/e);t.style.setProperty("--m",e),t.style.setProperty("--tan",+o.toFixed(2))}async toggleClick(t){const{handleSave:e}=this;if(!e)return;let o=this.renderRoot.querySelector("dt-toggle"),n=o.toggleAttribute("checked");this.group.health_metrics||(this.group.health_metrics=[]);const i={health_metrics:{values:[{value:"church_commitment",delete:!n}]}};try{await e(this.group.ID,i)}catch(t){return o.toggleAttribute("checked",!n),void console.error(t)}n?this.group.health_metrics.push("church_commitment"):this.group.health_metrics.pop("church_commitment"),this.requestUpdate()}_isChecked(){return Object.hasOwn(this.group,"health_metrics")&&this.group.health_metrics.includes("church_commitment")?this.isChurch=!0:this.isChurch=!1}});const kt="important",$t=" !"+kt,Ot=ft(class extends mt{constructor(t){var e;if(super(t),t.type!==ht||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const n=t[o];return null==n?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?o.removeProperty(t):o[t]="")}));for(const t in e){const n=e[t];if(null!=n){this.ht.add(t);const e="string"==typeof n&&n.endsWith($t);t.includes("-")||e?o.setProperty(t,e?n.slice(0,-11):n,e?kt:""):o[t]=n}}return U}});window.customElements.define("dt-label",class extends _t{static get styles(){return l`
      :host {
        font-family: var(--font-family);
        font-size: var(--dt-label-font-size, 14px);
        font-weight: var(--dt-label-font-weight, 700);
        color: var(--dt-label-color, #000);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .icon {
        height: var(--dt-label-font-size, 14px);
        width: auto;
        display: inline-block;
      }

      .icon.private {
        position: relative;
      }
      .icon.private:hover .tooltip {
        display: block;
      }
      .tooltip {
        display: none;
        position: absolute;
        color: var(--dt-label-tooltip-color, #666);
        background: var(--dt-label-tooltip-background, #eee);
        top: calc(100% + 0.5rem);
        inset-inline-start: -1rem;
        font-weight: normal;
        padding: 0.4rem;
      }
      .tooltip:before {
        content: '';
        position: absolute;
        inset-inline-start: 1rem;
        top: -0.5rem;
        height: 0;
        width: 0;
        border-bottom: 0.5rem solid var(--dt-label-tooltip-background, #eee);
        border-inline-start: 0.5rem solid transparent;
        border-inline-end: 0.5rem solid transparent;
      }
    `}static get properties(){return{icon:{type:String},iconAltText:{type:String},private:{type:Boolean},privateLabel:{type:String}}}firstUpdated(){const t=this.shadowRoot.querySelector("slot[name=icon-start]").assignedElements({flatten:!0});for(const e of t)e.style.height="100%",e.style.width="auto"}get _slottedChildren(){return this.shadowRoot.querySelector("slot").assignedElements({flatten:!0})}render(){const t=D`<svg class="icon" height='100px' width='100px' fill="#000000" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><g i:extraneous="self"><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"></path></g><path d="M75.8,37.6v-9.3C75.8,14.1,64.2,2.5,50,2.5S24.2,14.1,24.2,28.3v9.3c-7,0.6-12.4,6.4-12.4,13.6v32.6    c0,7.6,6.1,13.7,13.7,13.7h49.1c7.6,0,13.7-6.1,13.7-13.7V51.2C88.3,44,82.8,38.2,75.8,37.6z M56,79.4c0.2,1-0.5,1.9-1.5,1.9h-9.1    c-1,0-1.7-0.9-1.5-1.9l3-11.8c-2.5-1.1-4.3-3.6-4.3-6.6c0-4,3.3-7.3,7.3-7.3c4,0,7.3,3.3,7.3,7.3c0,2.9-1.8,5.4-4.3,6.6L56,79.4z     M62.7,37.5H37.3v-9.1c0-7,5.7-12.7,12.7-12.7s12.7,5.7,12.7,12.7V37.5z"></path></g></g></svg>`;return D`
      <div class="label">
        <span class="icon">
          <slot name="icon-start">
            ${this.icon?D`<img src="${this.icon}" alt="${this.iconAltText}" />`:null}
          </slot>
        </span>
        <slot></slot>

        ${this.private?D`<span class="icon private">
              ${t}
              <span class="tooltip"
                >${this.privateLabel||(0,vt.ab)("Private Field: Only I can see its content")}</span
              >
            </span> `:null}
      </div>
    `}});class St extends _t{static get formAssociated(){return!0}static get styles(){return[l`
        .input-group {
          position: relative;
        }
        .input-group.disabled {
          background-color: var(--disabled-color);
        }

        /* === Inline Icons === */
        .icon-overlay {
          position: absolute;
          inset-inline-end: 2rem;
          top: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-overlay.alert {
          color: var(--alert-color);
          cursor: pointer;
        }
        .icon-overlay.success {
          color: var(--success-color);
        }
      `]}static get properties(){return{...super.properties,name:{type:String},label:{type:String},icon:{type:String},iconAltText:{type:String},private:{type:Boolean},privateLabel:{type:String},disabled:{type:Boolean},required:{type:Boolean},requiredMessage:{type:String},touched:{type:Boolean,state:!0},invalid:{type:Boolean,state:!0},error:{type:String},loading:{type:Boolean},saved:{type:Boolean}}}get _field(){return this.shadowRoot.querySelector("input, textarea, select")}get _focusTarget(){return this._field}constructor(){super(),this.touched=!1,this.invalid=!1,this.internals=this.attachInternals(),this.addEventListener("invalid",(()=>{this.touched=!0,this._validateRequired()}))}firstUpdated(...t){super.firstUpdated(...t);const e=St._jsonToFormData(this.value,this.name);this.internals.setFormValue(e),this._validateRequired()}static _buildFormData(t,e,o){if(!e||"object"!=typeof e||e instanceof Date||e instanceof File){const n=null==e?"":e;t.append(o,n)}else Object.keys(e).forEach((n=>{this._buildFormData(t,e[n],o?`${o}[${n}]`:n)}))}static _jsonToFormData(t,e){const o=new FormData;return St._buildFormData(o,t,e),o}_setFormValue(t){const e=St._jsonToFormData(t,this.name);this.internals.setFormValue(e,t),this._validateRequired(),this.touched=!0}_validateRequired(){}labelTemplate(){return this.label?D`
      <dt-label
        ?private=${this.private}
        privateLabel="${this.privateLabel}"
        iconAltText="${this.iconAltText}"
        icon="${this.icon}"
      >
        ${this.icon?null:D`<slot name="icon-start" slot="icon-start"></slot>`}
        ${this.label}
      </dt-label>
    `:""}render(){return D`
      ${this.labelTemplate()}
      <slot></slot>
    `}}const Et=t=>class extends t{constructor(){super(),this.activeIndex=-1,this.filteredOptions=[],this.detectTap=!1}static get properties(){return{...super.properties,value:{type:Array,reflect:!0},query:{type:String,state:!0},options:{type:Array},filteredOptions:{type:Array,state:!0},open:{type:Boolean,state:!0},activeIndex:{type:Number,state:!0},containerHeight:{type:Number,state:!0},loading:{type:Boolean}}}willUpdate(t){if(super.willUpdate(t),t&&!this.containerHeight&&this.shadowRoot.children&&this.shadowRoot.children.length){const t=this.shadowRoot.querySelector(".input-group");t&&(this.containerHeight=t.offsetHeight)}}updated(){this._scrollOptionListToActive();const t=this.shadowRoot.querySelector(".input-group");!t.style.getPropertyValue("--container-width")&&t.clientWidth>0&&t.style.setProperty("--container-width",`${t.clientWidth}px`)}_select(){console.error("Must implement `_select(value)` function")}static _focusInput(t){t.target===t.currentTarget&&t.target.getElementsByTagName("input")[0].focus()}_inputFocusIn(t){t.relatedTarget&&["BUTTON","LI"].includes(t.relatedTarget.nodeName)||(this.open=!0,this.activeIndex=-1)}_inputFocusOut(t){t.relatedTarget&&["BUTTON","LI"].includes(t.relatedTarget.nodeName)||(this.open=!1)}_inputKeyDown(t){switch(t.keyCode||t.which){case 8:""===t.target.value?this.value=this.value.slice(0,-1):this.open=!0;break;case 38:this.open=!0,this._listHighlightPrevious();break;case 40:this.open=!0,this._listHighlightNext();break;case 9:this.activeIndex<0?this.open=!1:t.preventDefault(),this._keyboardSelectOption();break;case 13:this._keyboardSelectOption();break;case 27:this.open=!1,this.activeIndex=-1;break;default:this.open=!0}}_inputKeyUp(t){this.query=t.target.value}_scrollOptionListToActive(){const t=this.shadowRoot.querySelector(".option-list"),e=this.shadowRoot.querySelector("button.active");if(t&&e){const o=e.offsetTop,n=e.offsetTop+e.clientHeight,i=t.scrollTop;n>t.scrollTop+t.clientHeight?t.scrollTo({top:n-t.clientHeight,behavior:"smooth"}):o<i&&t.scrollTo({top:o,behavior:"smooth"})}}_touchStart(t){t.target&&(this.detectTap=!1)}_touchMove(t){t.target&&(this.detectTap=!0)}_touchEnd(t){this.detectTap||(t.target&&t.target.value&&this._clickOption(t),this.detectTap=!1)}_keyboardSelectOption(){this.activeIndex>-1&&(this.activeIndex+1>this.filteredOptions.length?this._select(this.query):this._select(this.filteredOptions[this.activeIndex].id),this._clearSearch())}_clickOption(t){t.target&&t.target.value&&(this._select(t.target.value),this._clearSearch())}_clickAddNew(t){t.target&&(this._select(t.target.dataset?.label),this._clearSearch())}_clearSearch(){const t=this.shadowRoot.querySelector("input");t&&(t.value="")}_listHighlightNext(){this.allowAdd?this.activeIndex=Math.min(this.filteredOptions.length,this.activeIndex+1):this.activeIndex=Math.min(this.filteredOptions.length-1,this.activeIndex+1)}_listHighlightPrevious(){this.activeIndex=Math.max(0,this.activeIndex-1)}_renderOption(t,e){return D`
      <li tabindex="-1">
        <button
          value="${t.id}"
          type="button"
          data-label="${t.label}"
          @click="${this._clickOption}"
          @touchstart="${this._touchStart}"
          @touchmove="${this._touchMove}"
          @touchend="${this._touchEnd}"
          tabindex="-1"
          class="${this.activeIndex>-1&&this.activeIndex===e?"active":""}"
        >
          ${t.label}
        </button>
      </li>
    `}_baseRenderOptions(){return this.filteredOptions.length?this.filteredOptions.map(((t,e)=>this._renderOption(t,e))):this.loading?D`<li><div>${(0,vt.ab)("Loading options...")}</div></li>`:D`<li><div>${(0,vt.ab)("No Data Available")}</div></li>`}_renderOptions(){let t=this._baseRenderOptions();return this.allowAdd&&this.query&&(Array.isArray(t)||(t=[t]),t.push(D`<li tabindex="-1">
        <button
          data-label="${this.query}"
          @click="${this._clickAddNew}"
          @touchstart="${this._touchStart}"
          @touchmove="${this._touchMove}"
          @touchend="${this._touchEnd}"
          class="${this.activeIndex>-1&&this.activeIndex>=this.filteredOptions.length?"active":""}"
        >
          ${(0,vt.ab)("Add")} "${this.query}"
        </button>
      </li>`)),t}};window.customElements.define("dt-spinner",class extends dt{static get styles(){return l`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
      :host::before {
        content: '';
        animation: spin 1s linear infinite;
        border: 0.25rem solid var(--dt-spinner-color-1, #919191);
        border-radius: 50%;
        border-top-color: var(--dt-spinner-color-2, #000);
        display: inline-block;
        height: 1rem;
        width: 1rem;
      }
    `}});window.customElements.define("dt-checkmark",class extends dt{static get styles(){return l`
      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      :host {
        margin-top: -0.25rem;
      }
      :host::before {
        content: '';
        transform: rotate(45deg);
        height: 1rem;
        width: 0.5rem;
        opacity: 0;
        color: inherit;
        border-bottom: var(--dt-checkmark-width) solid currentcolor;
        border-right: var(--dt-checkmark-width) solid currentcolor;
        animation: fadeOut 4s;
      }
    `}});class Tt extends(Et(St)){static get styles(){return[...super.styles,l`
        :host {
          position: relative;
          font-family: Helvetica, Arial, sans-serif;
        }

        .input-group {
          color: var(--dt-multi-select-text-color, #0a0a0a);
          margin-bottom: 1rem;
        }
        .input-group.disabled input,
        .input-group.disabled .field-container {
          background-color: var(--disabled-color);
        }
        .input-group.disabled a,
        .input-group.disabled button {
          cursor: not-allowed;
          pointer-events: none;
        }
        .input-group.disabled *:hover {
          cursor: not-allowed;
        }

        .field-container {
          background-color: var(--dt-multi-select-background-color, #fefefe);
          border: 1px solid var(--dt-form-border-color, #cacaca);
          border-radius: 0;
          color: var(--dt-multi-select-text-color, #0a0a0a);
          font-size: 1rem;
          font-weight: 300;
          min-height: 2.5rem;
          line-height: 1.5;
          margin: 0;
          padding-top: calc(0.5rem - 0.375rem);
          padding-bottom: 0.5rem;
          padding-inline: 0.5rem 1.6rem;
          box-sizing: border-box;
          width: 100%;
          text-transform: none;
          display: flex;
          flex-wrap: wrap;
        }

        .field-container input,
        .field-container .selected-option {
          height: 1.25rem;
        }

        .selected-option {
          border: 1px solid var(--dt-multi-select-tag-border-color, #c2e0ff);
          background-color: var(
            --dt-multi-select-tag-background-color,
            #c2e0ff
          );

          display: flex;
          font-size: 0.875rem;
          position: relative;
          border-radius: 2px;
          margin-inline-end: 4px;
          margin-block-start: 0.375rem;
          box-sizing: border-box;
        }
        .selected-option > *:first-child {
          padding-inline-start: 4px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          --container-padding: calc(0.5rem + 1.6rem + 2px);
          --option-padding: 8px;
          --option-button: 20px;
          max-width: calc(
            var(--container-width) - var(--container-padding) -
              var(--option-padding) - var(--option-button)
          );
        }
        .selected-option * {
          align-self: center;
        }
        .selected-option button {
          background: transparent;
          outline: 0;
          border: 0;
          border-inline-start: 1px solid
            var(--dt-multi-select-tag-border-color, #c2e0ff);
          color: var(--dt-multi-select-text-color, #0a0a0a);
          margin-inline-start: 4px;
        }
        .selected-option button:hover {
          cursor: pointer;
        }

        .field-container input {
          background-color: var(--dt-form-background-color, #fff);
          color: var(--dt-form-text-color, #000);
          flex-grow: 1;
          min-width: 50px;
          border: 0;
          margin-block-start: 0.375rem;
        }
        .field-container input:focus,
        .field-container input:focus-visible,
        .field-container input:active {
          border: 0;
          outline: 0;
        }
        .field-container input::placeholder {
          color: var(--dt-text-placeholder-color, #999);
          opacity: 1;
        }

        /* === Options List === */
        .option-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border: 1px solid var(--dt-form-border-color, #cacaca);
          background: var(--dt-form-background-color, #fefefe);
          z-index: 10;
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          box-shadow: var(--shadow-1);
          max-height: 150px;
          overflow-y: scroll;
        }
        .option-list li {
          border-block-start: 1px solid var(--dt-form-border-color, #cacaca);
          outline: 0;
        }
        .option-list li div,
        .option-list li button {
          padding: 0.5rem 0.75rem;
          color: var(--dt-multi-select-text-color, #0a0a0a);
          font-weight: 100;
          font-size: 1rem;
          text-decoration: none;
          text-align: inherit;
        }
        .option-list li button {
          display: block;
          width: 100%;
          border: 0;
          background: transparent;
        }
        .option-list li button:hover,
        .option-list li button.active {
          cursor: pointer;
          background: var(--dt-multi-select-option-hover-background, #f5f5f5);
        }
      `]}static get properties(){return{...super.properties,placeholder:{type:String},containerHeight:{type:Number,state:!0},onchange:{type:String}}}_select(t){const e=new CustomEvent("change",{bubbles:!0,detail:{field:this.name,oldValue:this.value}});if(this.value&&this.value.length)if("string"==typeof this.value[0])this.value=[...this.value.filter((e=>e!==`-${t}`)),t];else{let e=!1;const o=this.value.map((o=>{const n={...o};return o.id===t.id&&o.delete&&(delete n.delete,e=!0),n}));e||o.push(t),this.value=o}else this.value=[t];e.detail.newValue=this.value,this.open=!1,this.activeIndex=-1,this.dispatchEvent(e),this._setFormValue(this.value)}_remove(t){if(t.target&&t.target.dataset&&t.target.dataset.value){const e=new CustomEvent("change",{bubbles:!0,detail:{field:this.name,oldValue:this.value}});this.value=(this.value||[]).map((e=>e===t.target.dataset.value?`-${e}`:e)),e.detail.newValue=this.value,this.dispatchEvent(e),this._setFormValue(this.value),this.open&&this.shadowRoot.querySelector("input").focus()}}_filterOptions(){return this.filteredOptions=(this.options||[]).filter((t=>!(this.value||[]).includes(t.id)&&(!this.query||t.label.toLocaleLowerCase().includes(this.query.toLocaleLowerCase())))),this.filteredOptions}willUpdate(t){if(super.willUpdate(t),t){const e=t.has("value"),o=t.has("query"),n=t.has("options");(e||o||n)&&this._filterOptions()}}_renderSelectedOptions(){return this.options&&this.options.filter((t=>this.value&&this.value.indexOf(t.id)>-1)).map((t=>D`
            <div class="selected-option">
              <span>${t.label}</span>
              <button
                @click="${this._remove}"
                ?disabled="${this.disabled}"
                data-value="${t.id}"
              >
                x
              </button>
            </div>
          `))}render(){const t={display:this.open?"block":"none",top:this.containerHeight?`${this.containerHeight}px`:"2.5rem"};return D`
      ${this.labelTemplate()}

      <div class="input-group ${this.disabled?"disabled":""}">
        <div
          class="field-container"
          @click="${this._focusInput}"
          @keydown="${this._focusInput}"
        >
          ${this._renderSelectedOptions()}
          <input
            type="text"
            placeholder="${this.placeholder}"
            @focusin="${this._inputFocusIn}"
            @blur="${this._inputFocusOut}"
            @keydown="${this._inputKeyDown}"
            @keyup="${this._inputKeyUp}"
            ?disabled="${this.disabled}"
          />
        </div>
        <ul class="option-list" style=${Ot(t)}>
          ${this._renderOptions()}
        </ul>
        ${this.loading?D`<dt-spinner class="icon-overlay"></dt-spinner>`:null}
        ${this.saved?D`<dt-checkmark class="icon-overlay success"></dt-checkmark>`:null}
        ${this.error?D`<dt-icon
                icon="mdi:alert-circle"
                class="icon-overlay alert"
                tooltip="${this.error}"
                size="2rem"
                ></dt-icon>`:null}
        </div>
`}}window.customElements.define("dt-multi-select",Tt);class jt extends Tt{static get properties(){return{...super.properties,allowAdd:{type:Boolean},onload:{type:String}}}static get styles(){return[...super.styles,l`
        .selected-option a,
        .selected-option a:active,
        .selected-option a:visited {
          text-decoration: none;
          color: var(--primary-color, #3f729b);
        }
      `]}willUpdate(t){if(super.willUpdate(t),t){!t.has("open")||!this.open||this.filteredOptions&&this.filteredOptions.length||this._filterOptions()}}_filterOptions(){const t=(this.value||[]).filter((t=>!t.startsWith("-")));if(this.options?.length)this.filteredOptions=(this.options||[]).filter((e=>!t.includes(e.id)&&(!this.query||e.id.toLocaleLowerCase().includes(this.query.toLocaleLowerCase()))));else if(this.open){this.loading=!0,this.filteredOptions=[];const e=this,o=new CustomEvent("load",{bubbles:!0,detail:{field:this.name,postType:this.postType,query:this.query,onSuccess:o=>{e.loading=!1;let n=o;n.length&&"string"==typeof n[0]&&(n=n.map((t=>({id:t})))),e.allOptions=n,e.filteredOptions=n.filter((e=>!t.includes(e.id)))},onError:t=>{console.warn(t),e.loading=!1}}});this.dispatchEvent(o)}return this.filteredOptions}_renderOption(t,e){return D`
      <li tabindex="-1">
        <button
          value="${t.id}"
          type="button"
          data-label="${t.label}"
          @click="${this._clickOption}"
          @touchstart="${this._touchStart}"
          @touchmove="${this._touchMove}"
          @touchend="${this._touchEnd}"
          tabindex="-1"
          class="${this.activeIndex>-1&&this.activeIndex===e?"active":""}"
        >
          ${t.label||t.id}
        </button>
      </li>
    `}_renderSelectedOptions(){const t=this.options||this.allOptions;return(this.value||[]).filter((t=>!t.startsWith("-"))).map((e=>{let o,n=e;if(t){const o=t.filter((t=>t===e||t.id===e));o.length&&(n=o[0].label||o[0].id||e)}if(!o&&window?.SHAREDFUNCTIONS?.createCustomFilter){const t=window.SHAREDFUNCTIONS.createCustomFilter(this.name,[e]),n=this.label||this.name,i=[{id:`${this.name}_${e}`,name:`${n}: ${e}`}];o=window.SHAREDFUNCTIONS.create_url_for_list_query(this.postType,t,i)}return D`
          <div class="selected-option">
            <a
              href="${o||"#"}"
              ?disabled="${this.disabled}"
              alt="${e}"
              >${n}</a
            >
            <button
              @click="${this._remove}"
              ?disabled="${this.disabled}"
              data-value="${e}"
            >
              x
            </button>
          </div>
        `}))}}window.customElements.define("dt-tags",jt);window.customElements.define("dt-connection",class extends jt{static get styles(){return[...super.styles,l`
        .selected-option a {
          border-inline-start: solid 3px transparent;
        }

        li button * {
          pointer-events: none;
        }

        li {
          border-inline-start: solid 5px transparent;
        }

        li button .status {
          font-style: italic;
          opacity: 0.6;
        }
        li button .status:before {
          content: '[';
          font-style: normal;
        }
        li button .status:after {
          content: ']';
          font-style: normal;
        }

        li button svg {
          width: 20px;
          height: auto;
          margin-bottom: -4px;
        }
        li button svg use {
          fill: var(--dt-connection-icon-fill, var(--primary-color));
        }
      `]}_clickOption(t){if(t.target&&t.target.value){const e=parseInt(t.target.value,10),o=this.filteredOptions.reduce(((t,o)=>t||o.id!=e?t:o),null);o&&this._select(o),this._clearSearch()}}_clickAddNew(t){if(t.target){this._select({id:t.target.dataset?.label,label:t.target.dataset?.label,isNew:!0});const e=this.shadowRoot.querySelector("input");e&&(e.value="")}}_keyboardSelectOption(){this.activeIndex>-1&&(this.activeIndex+1>this.filteredOptions.length?this._select({id:this.query,label:this.query,isNew:!0}):this._select(this.filteredOptions[this.activeIndex]),this._clearSearch())}_remove(t){if(t.target&&t.target.dataset&&t.target.dataset.value){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value}});this.value=(this.value||[]).map((e=>{const o={...e};return e.id===t.target.dataset.value&&(o.delete=!0),o})),e.detail.newValue=this.value,this.dispatchEvent(e),this.open&&this.shadowRoot.querySelector("input").focus()}}_filterOptions(){const t=(this.value||[]).filter((t=>!t.delete)).map((t=>t?.id));if(this.options?.length)this.filteredOptions=(this.options||[]).filter((e=>!t.includes(e.id)&&(!this.query||e.label.toLocaleLowerCase().includes(this.query.toLocaleLowerCase()))));else if(this.open){this.loading=!0,this.filteredOptions=[];const e=this,o=new CustomEvent("load",{bubbles:!0,detail:{field:this.name,postType:this.postType,query:this.query,onSuccess:o=>{e.loading=!1,e.filteredOptions=o.filter((e=>!t.includes(e.id)))},onError:t=>{console.warn(t),e.loading=!1}}});this.dispatchEvent(o)}return this.filteredOptions}_renderSelectedOptions(){return(this.value||[]).filter((t=>!t.delete)).map((t=>D`
          <div class="selected-option">
            <a
              href="${t.link}"
              style="border-inline-start-color: ${t.status?t.status.color:""}"
              ?disabled="${this.disabled}"
              title="${t.status?t.status.label:t.label}"
              >${t.label}</a
            >
            <button
              @click="${this._remove}"
              ?disabled="${this.disabled}"
              data-value="${t.id}"
            >
              x
            </button>
          </div>
        `))}_renderOption(t,e){const o=D`<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>circle-08 2</title><desc>Created using Figma</desc><g id="Canvas" transform="translate(1457 4940)"><g id="circle-08 2"><g id="Group"><g id="Vector"><use xlink:href="#path0_fill" transform="translate(-1457 -4940)" fill="#000000"/></g></g></g></g><defs><path id="path0_fill" d="M 12 0C 5.383 0 0 5.383 0 12C 0 18.617 5.383 24 12 24C 18.617 24 24 18.617 24 12C 24 5.383 18.617 0 12 0ZM 8 10C 8 7.791 9.844 6 12 6C 14.156 6 16 7.791 16 10L 16 11C 16 13.209 14.156 15 12 15C 9.844 15 8 13.209 8 11L 8 10ZM 12 22C 9.567 22 7.335 21.124 5.599 19.674C 6.438 18.091 8.083 17 10 17L 14 17C 15.917 17 17.562 18.091 18.401 19.674C 16.665 21.124 14.433 22 12 22Z"/></defs></svg>`,n=t.status||{key:"",label:"",color:""};return D`
      <li tabindex="-1" style="border-inline-start-color:${n.color}">
        <button
          value="${t.id}"
          type="button"
          data-label="${t.label}"
          @click="${this._clickOption}"
          @touchstart="${this._touchStart}"
          @touchmove="${this._touchMove}"
          @touchend="${this._touchEnd}"
          tabindex="-1"
          class="${this.activeIndex>-1&&this.activeIndex===e?"active":""}"
        >
          <span class="label">${t.label}</span>
          <span class="connection-id">(#${t.id})</span>
          ${n.label?D`<span class="status">${n.label}</span>`:null}
          ${t.user?o:null}
        </button>
      </li>
    `}});window.customElements.define("dt-copy-text",class extends _t{static get styles(){return l`
      :root {
        font-size: inherit;
      }

      .copy-text {
        --dt-form-text-color: #575757;
        display: flex;
        align-items: center;
        position: relative;
        width: calc(100% + 20px);
      }

      .copy-text__input {
        flex: 1;
      }

      .copy_icon {
        cursor: copy;
        font-size: 16px;
        display: block;
        transform: translate(-24px, -5px);
        width: 20px;
      }

      :host([dir='rtl']) .copy_icon {
        transform: translate(24px, -5px);
      }
    `}static get properties(){return{value:{type:String},success:{type:Boolean},error:{type:Boolean}}}get inputStyles(){return this.success?{"--dt-text-border-color":"var(--copy-text-success-color, var(--success-color))","--dt-form-text-color":"var( --copy-text-success-color, var(--success-color))",color:"var( --copy-text-success-color, var(--success-color))"}:this.error?{"---dt-text-border-color":"var(--copy-text-alert-color, var(--alert-color))","--dt-form-text-color":"var(--copy-text-alert-color, var(--alert-color))"}:{}}get icon(){return this.success?"ic:round-check":"ic:round-content-copy"}async copy(){try{this.success=!1,this.error=!1,await navigator.clipboard.writeText(this.value),this.success=!0,this.error=!1}catch(t){console.log(t),this.success=!1,this.error=!0}}render(){return D`
      <div class="copy-text" style=${Ot(this.inputStyles)}>
        <dt-text
          class="copy-text__input"
          value="${this.value}"
          disabled
        ></dt-text>
        <dt-icon
          class="copy_icon"
          icon="${this.icon}"
          @click="${this.copy}"
        ></dt-icon>
      </div>
    `}});function*Ct(t,e){if(void 0!==t){let o=0;for(const n of t)yield e(n,o++)}}window.customElements.define("dt-date",class extends St{static get styles(){return[...super.styles,l`
        input {
          color: var(--dt-form-text-color, #000);
          appearance: none;
          background-color: var(--dt-form-background-color, #cecece);
          border: 1px solid var(--dt-form-border-color, #cacaca);
          border-radius: 0;
          box-shadow: var(
            --dt-form-input-box-shadow,
            inset 0 1px 2px hsl(0deg 0% 4% / 10%)
          );
          box-sizing: border-box;
          display: inline-flex;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 300;
          height: 2.5rem;
          line-height: 1.5;
          padding: var(--dt-form-padding, 0.5333333333rem);
          transition: var(
            --dt-form-transition,
            box-shadow 0.5s,
            border-color 0.25s ease-in-out
          );
          width: 100%;
        }
        input:disabled,
        input[readonly],
        textarea:disabled,
        textarea[readonly],
        .input-group button:disabled {
          background-color: var(--dt-form-disabled-background-color, #e6e6e6);
          cursor: not-allowed;
        }

        /* input::-webkit-datetime-edit-text { color: red; padding: 0 0.3em; } */
        input::-webkit-calendar-picker-indicator {
          color: red;
        }

        .input-group {
          position: relative;
          display: inline-flex;
          margin: 0 0 1.0666666667rem;
          width: 100%;
        }

        .input-group .input-group-button {
          font-size: 0.75rem;
          line-height: 1em;
          display: inline-flex;
        }
        .input-group .button {
          display: inline-block;
          background: var(--dt-form-background-color, #cecece);
          border: 1px solid var(--dt-form-border-color, #cecece);
          color: var(--alert-color, #cc4b37);
          align-self: stretch;
          font-size: 1rem;
          height: auto;
          padding: 0 1em;
          margin: 0;
        }
        .input-group .button:hover:not([disabled]) {
          background-color: var(--alert-color, #cc4b37);
          color: var(--text-color-inverse, #fefefe);
        }

        .icon-overlay {
          inset-inline-end: 5rem;
        }
      `]}static get properties(){return{...super.properties,id:{type:String},value:{type:String,reflect:!0},timestamp:{converter:t=>{let e=Number(t);if(e<1e12&&(e*=1e3),e)return e},reflect:!0},onchange:{type:String}}}updateTimestamp(t){const e=new Date(t).getTime(),o=e/1e3,n=new CustomEvent("change",{detail:{field:this.name,oldValue:this.timestamp,newValue:o}});this.timestamp=e,this.value=t,this._setFormValue(t),this.dispatchEvent(n)}_change(t){this.updateTimestamp(t.target.value)}clearInput(){this.updateTimestamp("")}showDatePicker(){this.shadowRoot.querySelector("input").showPicker()}render(){return this.timestamp?this.value=new Date(this.timestamp).toISOString().substring(0,10):this.value&&(this.timestamp=new Date(this.value).getTime()),D`
      ${this.labelTemplate()}

      <div class="input-group">
        <input
          id="${this.id}"
          class="input-group-field dt_date_picker"
          type="date"
          autocomplete="off"
          .placeholder="${(new Date).toISOString().substring(0,10)}"
          .value="${this.value}"
          .timestamp="${this.date}"
          ?disabled=${this.disabled}
          @change="${this._change}"
          @click="${this.showDatePicker}"
        />
        <button
          id="${this.id}-clear-button"
          class="button alert clear-date-button"
          data-inputid="${this.id}"
          title="Delete Date"
          type="button"
          ?disabled=${this.disabled}
          @click="${this.clearInput}"
        >
          x
        </button>

        ${this.touched&&this.invalid||this.error?D`<dt-exclamation-circle
              class="icon-overlay alert"
            ></dt-exclamation-circle>`:null}
        ${this.loading?D`<dt-spinner class="icon-overlay"></dt-spinner>`:null}
        ${this.saved?D`<dt-checkmark class="icon-overlay success"></dt-checkmark>`:null}
      </div>
    `}});window.customElements.define("dt-location",class extends jt{static get properties(){return{...super.properties,filters:{type:Array},mapboxKey:{type:String},dtMapbox:{type:Object}}}static get styles(){return[...super.styles,l`
        .input-group {
          display: flex;
        }

        .field-container {
          position: relative;
        }

        select {
          border: 1px solid var(--dt-form-border-color, #cacaca);
          outline: 0;
        }
        .selected-option > *:first-child {
          max-width: calc(
            var(--container-width) - var(--select-width) -
              var(--container-padding) - var(--option-padding) -
              var(--option-button) - 8px
          );
        }
      `]}_clickOption(t){if(t.target&&t.target.value){const e=t.target.value,o=this.filteredOptions.reduce(((t,o)=>t||o.id!==e?t:o),null);this._select(o)}}_clickAddNew(t){if(t.target){this._select({id:t.target.dataset?.label,label:t.target.dataset?.label,isNew:!0});const e=this.shadowRoot.querySelector("input");e&&(e.value="")}}_keyboardSelectOption(){this.activeIndex>-1&&(this.activeIndex+1>this.filteredOptions.length?this._select({id:this.query,label:this.query,isNew:!0}):this._select(this.filteredOptions[this.activeIndex]))}_remove(t){if(t.target&&t.target.dataset&&t.target.dataset.value){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value}});this.value=(this.value||[]).map((e=>{const o={...e};return e.id===t.target.dataset.value&&(o.delete=!0),o})),e.detail.newValue=this.value,this.dispatchEvent(e),this.open&&this.shadowRoot.querySelector("input").focus()}}updated(){super.updated();const t=this.shadowRoot.querySelector(".input-group"),e=t.style.getPropertyValue("--select-width"),o=this.shadowRoot.querySelector("select");!e&&o?.clientWidth>0&&t.style.setProperty("--select-width",`${o.clientWidth}px`)}_filterOptions(){const t=(this.value||[]).filter((t=>!t.delete)).map((t=>t?.id));if(this.options?.length)this.filteredOptions=(this.options||[]).filter((e=>!t.includes(e.id)&&(!this.query||e.label.toLocaleLowerCase().includes(this.query.toLocaleLowerCase()))));else{this.loading=!0,this.filteredOptions=[];const e=this,o=this.shadowRoot.querySelector("select"),n=new CustomEvent("load",{bubbles:!0,detail:{field:this.name,query:this.query,filter:o?.value,onSuccess:o=>{e.loading=!1,e.filteredOptions=o.filter((e=>!t.includes(e.id)))},onError:t=>{console.warn(t),e.loading=!1}}});this.dispatchEvent(n)}return this.filteredOptions}_renderOption(t,e){return D`
      <li tabindex="-1">
        <button
          value="${t.id}"
          type="button"
          data-label="${t.label}"
          @click="${this._clickOption}"
          @touchstart="${this._touchStart}"
          @touchmove="${this._touchMove}"
          @touchend="${this._touchEnd}"
          tabindex="-1"
          class="${this.activeIndex>-1&&this.activeIndex===e?"active":""}"
        >
          ${t.label}
        </button>
      </li>
    `}_renderSelectedOptions(){return(this.value||[]).filter((t=>!t.delete)).map((t=>D`
          <div class="selected-option">
            <a
              href="${t.link}"
              ?disabled="${this.disabled}"
              alt="${t.status?t.status.label:t.label}"
              >${t.label}</a
            >
            <button
              @click="${this._remove}"
              ?disabled="${this.disabled}"
              data-value="${t.id}"
            >
              x
            </button>
          </div>
        `))}render(){const t={display:this.open?"block":"none",top:`${this.containerHeight}px`};return this.mapboxKey?D` ${this.labelTemplate()}
          <div id="mapbox-wrapper">
            <div
              id="mapbox-autocomplete"
              class="mapbox-autocomplete input-group"
              data-autosubmit="true"
              data-add-address="true"
            >
              <input
                id="mapbox-search"
                type="text"
                name="mapbox_search"
                class="input-group-field"
                autocomplete="off"
                dir="auto"
                placeholder="Search Location"
              />
              <div class="input-group-button">
                <button
                  id="mapbox-spinner-button"
                  class="button hollow"
                  style="display:none;border-color:lightgrey;"
                >
                  <span
                    class=""
                    style="border-radius: 50%;width: 24px;height: 24px;border: 0.25rem solid lightgrey;border-top-color: black;animation: spin 1s infinite linear;display: inline-block;"
                  ></span>
                </button>
                <button
                  id="mapbox-clear-autocomplete"
                  class="button alert input-height delete-button-style mapbox-delete-button"
                  type="button"
                  title="Clear"
                  style="display:none;"
                >
                  ×
                </button>
              </div>
              <div
                id="mapbox-autocomplete-list"
                class="mapbox-autocomplete-items"
              ></div>
            </div>
            <div id="location-grid-meta-results"></div>
          </div>`:D`
          ${this.labelTemplate()}

          <div class="input-group ${this.disabled?"disabled":""}">
            <div
              class="field-container"
              @click="${this._focusInput}"
              @keydown="${this._focusInput}"
            >
              ${this._renderSelectedOptions()}
              <input
                type="text"
                placeholder="${this.placeholder}"
                @focusin="${this._inputFocusIn}"
                @blur="${this._inputFocusOut}"
                @keydown="${this._inputKeyDown}"
                @keyup="${this._inputKeyUp}"
                ?disabled="${this.disabled}"
              />

              ${this.loading?D`<dt-spinner class="icon-overlay"></dt-spinner>`:null}
              ${this.saved?D`<dt-checkmark
                    class="icon-overlay success"
                  ></dt-checkmark>`:null}
            </div>
            <select class="filter-list" ?disabled="${this.disabled}">
              ${Ct(this.filters,(t=>D`<option value="${t.id}">${t.label}</option>`))}
            </select>
            <ul class="option-list" style=${Ot(t)}>
              ${this._renderOptions()}
            </ul>
          </div>
        `}});const{I:At}=st,Pt=()=>document.createComment(""),Lt=(t,e,o)=>{var n;const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=i.insertBefore(Pt(),r),n=i.insertBefore(Pt(),r);o=new At(e,n,t,t.options)}else{const e=o._$AB.nextSibling,s=o._$AM,a=s!==t;if(a){let e;null===(n=o._$AQ)||void 0===n||n.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==s._$AU&&o._$AP(e)}if(e!==r||a){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return o},Mt=(t,e,o=t)=>(t._$AI(e,o),t),Rt={},It=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const n=t._$AB.nextSibling;for(;o!==n;){const t=o.nextSibling;o.remove(),o=t}},Nt=(t,e,o)=>{const n=new Map;for(let i=e;i<=o;i++)n.set(t[i],i);return n},Ft=ft(class extends mt{constructor(t){if(super(t),t.type!==pt)throw Error("repeat() can only be used in text expressions")}ct(t,e,o){let n;void 0===o?o=e:void 0!==e&&(n=e);const i=[],r=[];let s=0;for(const e of t)i[s]=n?n(e,s):s,r[s]=o(e,s),s++;return{values:r,keys:i}}render(t,e,o){return this.ct(t,e,o).values}update(t,[e,o,n]){var i;const r=(t=>t._$AH)(t),{values:s,keys:a}=this.ct(e,o,n);if(!Array.isArray(r))return this.ut=a,s;const l=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],c=[];let d,u,h=0,p=r.length-1,f=0,m=s.length-1;for(;h<=p&&f<=m;)if(null===r[h])h++;else if(null===r[p])p--;else if(l[h]===a[f])c[f]=Mt(r[h],s[f]),h++,f++;else if(l[p]===a[m])c[m]=Mt(r[p],s[m]),p--,m--;else if(l[h]===a[m])c[m]=Mt(r[h],s[m]),Lt(t,c[m+1],r[h]),h++,m--;else if(l[p]===a[f])c[f]=Mt(r[p],s[f]),Lt(t,r[h],r[p]),p--,f++;else if(void 0===d&&(d=Nt(a,f,m),u=Nt(l,h,p)),d.has(l[h]))if(d.has(l[p])){const e=u.get(a[f]),o=void 0!==e?r[e]:null;if(null===o){const e=Lt(t,r[h]);Mt(e,s[f]),c[f]=e}else c[f]=Mt(o,s[f]),Lt(t,r[h],o),r[e]=null;f++}else It(r[p]),p--;else It(r[h]),h++;for(;f<=m;){const e=Lt(t,c[m+1]);Mt(e,s[f]),c[f++]=e}for(;h<=p;){const t=r[h++];null!==t&&It(t)}return this.ut=a,((t,e=Rt)=>{t._$AH=e})(t,c),U}});class zt{constructor(t){this.token=t}async searchPlaces(t,e="en"){const o=new URLSearchParams({types:["country","region","postcode","district","place","locality","neighborhood","address"],limit:6,access_token:this.token,language:e}),n=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(t)}.json?${o}`,i=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}),r=await i.json();return r?.features}async reverseGeocode(t,e,o="en"){const n=new URLSearchParams({types:["country","region","postcode","district","place","locality","neighborhood","address"],access_token:this.token,language:o}),i=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(t)},${encodeURI(e)}.json?${n}`,r=await fetch(i,{method:"GET",headers:{"Content-Type":"application/json"}}),s=await r.json();return s?.features}}class Bt{constructor(t,e,o){if(this.token=t,this.window=e,!e.google?.maps?.places?.AutocompleteService){let e=o.createElement("script");e.src=`https://maps.googleapis.com/maps/api/js?libraries=places&key=${t}`,o.body.appendChild(e)}}async getPlacePredictions(t,e="en"){if(this.window.google){const o=new this.window.google.maps.places.AutocompleteService,{predictions:n}=await o.getPlacePredictions({input:t,language:e});return n}return null}async getPlaceDetails(t,e="en"){const o=`https://maps.googleapis.com/maps/api/geocode/json?${new URLSearchParams({key:this.token,address:t,language:e})}`,n=await fetch(o,{method:"GET"}),i=await n.json();let r=[];if("OK"===i.status)r=i.results;return r&&r.length?r[0]:null}async reverseGeocode(t,e,o="en"){const n=`https://maps.googleapis.com/maps/api/geocode/json?${new URLSearchParams({key:this.token,latlng:`${e},${t}`,language:o,result_type:["point_of_interest","establishment","premise","street_address","neighborhood","sublocality","locality","colloquial_area","political","country"].join("|")})}`,i=await fetch(n,{method:"GET"}),r=await i.json();return r?.results}}const qt=Object.freeze({left:0,top:0,width:16,height:16}),Dt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Vt=Object.freeze({...qt,...Dt}),Ut=Object.freeze({...Vt,body:"",hidden:!1}),Ht=Object.freeze({width:null,height:null}),Gt=Object.freeze({...Ht,...Dt});const Wt=/[\s,]+/;const Kt={...Gt,preserveAspectRatio:""};function Zt(t){const e={...Kt},o=(e,o)=>t.getAttribute(e)||o;var n;return e.width=o("width",null),e.height=o("height",null),e.rotate=function(t,e=0){const o=t.replace(/^-?[0-9.]*/,"");function n(t){for(;t<0;)t+=4;return t%4}if(""===o){const e=parseInt(t);return isNaN(e)?0:n(e)}if(o!==t){let e=0;switch(o){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-o.length));return isNaN(i)?0:(i/=e,i%1==0?n(i):0)}}return e}(o("rotate","")),n=e,o("flip","").split(Wt).forEach((t=>{switch(t.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0}})),e.preserveAspectRatio=o("preserveAspectRatio",o("preserveaspectratio","")),e}const Jt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Qt=(t,e,o,n="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;n=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),o=i.pop(),r={provider:i.length>0?i[0]:n,prefix:o,name:t};return e&&!Yt(r)?null:r}const r=i[0],s=r.split("-");if(s.length>1){const t={provider:n,prefix:s.shift(),name:s.join("-")};return e&&!Yt(t)?null:t}if(o&&""===n){const t={provider:n,prefix:"",name:r};return e&&!Yt(t,o)?null:t}return null},Yt=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(Jt)||!(e&&""===t.prefix||t.prefix.match(Jt))||!t.name.match(Jt));function Xt(t,e){const o=function(t,e){const o={};!t.hFlip!=!e.hFlip&&(o.hFlip=!0),!t.vFlip!=!e.vFlip&&(o.vFlip=!0);const n=((t.rotate||0)+(e.rotate||0))%4;return n&&(o.rotate=n),o}(t,e);for(const n in Ut)n in Dt?n in t&&!(n in o)&&(o[n]=Dt[n]):n in e?o[n]=e[n]:n in t&&(o[n]=t[n]);return o}function te(t,e,o){const n=t.icons,i=t.aliases||Object.create(null);let r={};function s(t){r=Xt(n[t]||i[t],r)}return s(e),o.forEach(s),Xt(t,r)}function ee(t,e){const o=[];if("object"!=typeof t||"object"!=typeof t.icons)return o;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),o.push(t)}));const n=function(t,e){const o=t.icons,n=t.aliases||Object.create(null),i=Object.create(null);return(e||Object.keys(o).concat(Object.keys(n))).forEach((function t(e){if(o[e])return i[e]=[];if(!(e in i)){i[e]=null;const o=n[e]&&n[e].parent,r=o&&t(o);r&&(i[e]=[o].concat(r))}return i[e]})),i}(t);for(const i in n){const r=n[i];r&&(e(i,te(t,i,r)),o.push(i))}return o}const oe={provider:"",aliases:{},not_found:{},...qt};function ne(t,e){for(const o in e)if(o in t&&typeof t[o]!=typeof e[o])return!1;return!0}function ie(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!ne(t,oe))return null;const o=e.icons;for(const t in o){const e=o[t];if(!t.match(Jt)||"string"!=typeof e.body||!ne(e,Ut))return null}const n=e.aliases||Object.create(null);for(const t in n){const e=n[t],i=e.parent;if(!t.match(Jt)||"string"!=typeof i||!o[i]&&!n[i]||!ne(e,Ut))return null}return e}const re=Object.create(null);function se(t,e){const o=re[t]||(re[t]=Object.create(null));return o[e]||(o[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function ae(t,e){return ie(e)?ee(e,((e,o)=>{o?t.icons[e]=o:t.missing.add(e)})):[]}function le(t,e){let o=[];return("string"==typeof t?[t]:Object.keys(re)).forEach((t=>{("string"==typeof t&&"string"==typeof e?[e]:Object.keys(re[t]||{})).forEach((e=>{const n=se(t,e);o=o.concat(Object.keys(n.icons).map((o=>(""!==t?"@"+t+":":"")+e+":"+o)))}))})),o}let ce=!1;function de(t){return"boolean"==typeof t&&(ce=t),ce}function ue(t){const e="string"==typeof t?Qt(t,!0,ce):t;if(e){const t=se(e.provider,e.prefix),o=e.name;return t.icons[o]||(t.missing.has(o)?null:void 0)}}function he(t,e){const o=Qt(t,!0,ce);if(!o)return!1;return function(t,e,o){try{if("string"==typeof o.body)return t.icons[e]={...o},!0}catch(t){}return!1}(se(o.provider,o.prefix),o.name,e)}function pe(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),ce&&!e&&!t.prefix){let e=!1;return ie(t)&&(t.prefix="",ee(t,((t,o)=>{o&&he(t,o)&&(e=!0)}))),e}const o=t.prefix;if(!Yt({provider:e,prefix:o,name:"a"}))return!1;return!!ae(se(e,o),t)}function fe(t){return!!ue(t)}function me(t){const e=ue(t);return e?{...Vt,...e}:null}function ge(t,e){t.forEach((t=>{const o=t.loaderCallbacks;o&&(t.loaderCallbacks=o.filter((t=>t.id!==e)))}))}let ve=0;const be=Object.create(null);function ye(t,e){be[t]=e}function we(t){return be[t]||be[""]}var xe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function _e(t,e,o,n){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const a=Date.now();let l,c="pending",d=0,u=null,h=[],p=[];function f(){u&&(clearTimeout(u),u=null)}function m(){"pending"===c&&(c="aborted"),f(),h.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),h=[]}function g(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function v(){c="failed",p.forEach((t=>{t(void 0,l)}))}function b(){h.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),h=[]}function y(){if("pending"!==c)return;f();const n=s.shift();if(void 0===n)return h.length?void(u=setTimeout((()=>{f(),"pending"===c&&(b(),v())}),t.timeout)):void v();const i={status:"pending",resource:n,callback:(e,o)=>{!function(e,o,n){const i="success"!==o;switch(h=h.filter((t=>t!==e)),c){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===o)return l=n,void v();if(i)return l=n,void(h.length||(s.length?y():v()));if(f(),b(),!t.random){const o=t.resources.indexOf(e.resource);-1!==o&&o!==t.index&&(t.index=o)}c="completed",p.forEach((t=>{t(n)}))}(i,e,o)}};h.push(i),d++,u=setTimeout(y,t.rotate),o(n,e,i.callback)}return"function"==typeof n&&p.push(n),setTimeout(y),function(){return{startTime:a,payload:e,status:c,queriesSent:d,queriesPending:h.length,subscribe:g,abort:m}}}function ke(t){const e={...xe,...t};let o=[];function n(){o=o.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const s=_e(e,t,i,((t,e)=>{n(),r&&r(t,e)}));return o.push(s),s},find:function(t){return o.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:n}}function $e(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const Oe=Object.create(null),Se=["https://api.simplesvg.com","https://api.unisvg.com"],Ee=[];for(;Se.length>0;)1===Se.length||Math.random()>.5?Ee.push(Se.shift()):Ee.push(Se.pop());function Te(t,e){const o=$e(e);return null!==o&&(Oe[t]=o,!0)}function je(t){return Oe[t]}function Ce(){return Object.keys(Oe)}function Ae(){}Oe[""]=$e({resources:["https://api.iconify.design"].concat(Ee)});const Pe=Object.create(null);function Le(t,e,o){let n,i;if("string"==typeof t){const e=we(t);if(!e)return o(void 0,424),Ae;i=e.send;const r=function(t){if(!Pe[t]){const e=je(t);if(!e)return;const o={config:e,redundancy:ke(e)};Pe[t]=o}return Pe[t]}(t);r&&(n=r.redundancy)}else{const e=$e(t);if(e){n=ke(e);const o=we(t.resources?t.resources[0]:"");o&&(i=o.send)}}return n&&i?n.query(e,i,o)().abort:(o(void 0,424),Ae)}const Me="iconify2",Re="iconify",Ie=Re+"-count",Ne=Re+"-version",Fe=36e5,ze=168;function Be(t,e){try{return t.getItem(e)}catch(t){}}function qe(t,e,o){try{return t.setItem(e,o),!0}catch(t){}}function De(t,e){try{t.removeItem(e)}catch(t){}}function Ve(t,e){return qe(t,Ie,e.toString())}function Ue(t){return parseInt(Be(t,Ie))||0}const He={local:!0,session:!0},Ge={local:new Set,session:new Set};let We=!1;let Ke="undefined"==typeof window?{}:window;function Ze(t){const e=t+"Storage";try{if(Ke&&Ke[e]&&"number"==typeof Ke[e].length)return Ke[e]}catch(t){}He[t]=!1}function Je(t,e){const o=Ze(t);if(!o)return;const n=Be(o,Ne);if(n!==Me){if(n){const t=Ue(o);for(let e=0;e<t;e++)De(o,Re+e.toString())}return qe(o,Ne,Me),void Ve(o,0)}const i=Math.floor(Date.now()/Fe)-ze,r=t=>{const n=Re+t.toString(),r=Be(o,n);if("string"==typeof r){try{const o=JSON.parse(r);if("object"==typeof o&&"number"==typeof o.cached&&o.cached>i&&"string"==typeof o.provider&&"object"==typeof o.data&&"string"==typeof o.data.prefix&&e(o,t))return!0}catch(t){}De(o,n)}};let s=Ue(o);for(let e=s-1;e>=0;e--)r(e)||(e===s-1?(s--,Ve(o,s)):Ge[t].add(e))}function Qe(){if(!We){We=!0;for(const t in He)Je(t,(t=>{const e=t.data,o=se(t.provider,e.prefix);if(!ae(o,e).length)return!1;const n=e.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,n):n,!0}))}}function Ye(t,e){function o(o){let n;if(!He[o]||!(n=Ze(o)))return;const i=Ge[o];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=Ue(n),!Ve(n,r+1))return;const s={cached:Math.floor(Date.now()/Fe),provider:t.provider,data:e};return qe(n,Re+r.toString(),JSON.stringify(s))}We||Qe(),e.lastModified&&!function(t,e){const o=t.lastModifiedCached;if(o&&o>=e)return o===e;if(t.lastModifiedCached=e,o)for(const o in He)Je(o,(o=>{const n=o.data;return o.provider!==t.provider||n.prefix!==t.prefix||n.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,o("local")||o("session"))}function Xe(){}function to(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let o=!1;const n=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,s=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const s=e.name;if(t.icons[s])r.loaded.push({provider:n,prefix:i,name:s});else{if(!t.missing.has(s))return o=!0,!0;r.missing.push({provider:n,prefix:i,name:s})}return!1})),r.pending.length!==s&&(o||ge([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}const eo=(t,e)=>{const o=function(t,e=!0,o=!1){const n=[];return t.forEach((t=>{const i="string"==typeof t?Qt(t,e,o):t;i&&n.push(i)})),n}(t,!0,de()),n=function(t){const e={loaded:[],missing:[],pending:[]},o=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let n={provider:"",prefix:"",name:""};return t.forEach((t=>{if(n.name===t.name&&n.prefix===t.prefix&&n.provider===t.provider)return;n=t;const i=t.provider,r=t.prefix,s=t.name,a=o[i]||(o[i]=Object.create(null)),l=a[r]||(a[r]=se(i,r));let c;c=s in l.icons?e.loaded:""===r||l.missing.has(s)?e.missing:e.pending;const d={provider:i,prefix:r,name:s};c.push(d)})),e}(o);if(!n.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(n.loaded,n.missing,n.pending,Xe)})),()=>{t=!1}}const i=Object.create(null),r=[];let s,a;return n.pending.forEach((t=>{const{provider:e,prefix:o}=t;if(o===a&&e===s)return;s=e,a=o,r.push(se(e,o));const n=i[e]||(i[e]=Object.create(null));n[o]||(n[o]=[])})),n.pending.forEach((t=>{const{provider:e,prefix:o,name:n}=t,r=se(e,o),s=r.pendingIcons||(r.pendingIcons=new Set);s.has(n)||(s.add(n),i[e][o].push(n))})),r.forEach((t=>{const{provider:e,prefix:o}=t;i[e][o].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:o}=t,n=t.iconsToLoad;let i;delete t.iconsToLoad,n&&(i=we(e))&&i.prepare(e,o,n).forEach((o=>{Le(e,o,(e=>{if("object"!=typeof e)o.icons.forEach((e=>{t.missing.add(e)}));else try{const o=ae(t,e);if(!o.length)return;const n=t.pendingIcons;n&&o.forEach((t=>{n.delete(t)})),Ye(t,e)}catch(t){console.error(t)}to(t)}))}))})))}(t,i[e][o])})),e?function(t,e,o){const n=ve++,i=ge.bind(null,o,n);if(!e.pending.length)return i;const r={id:n,icons:e,callback:t,abort:i};return o.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,n,r):Xe},oo=t=>new Promise(((e,o)=>{const n="string"==typeof t?Qt(t,!0):t;n?eo([n||t],(i=>{if(i.length&&n){const t=ue(n);if(t)return void e({...Vt,...t})}o(t)})):o(t)}));function no(t,e){const o="string"==typeof t?Qt(t,!0,!0):null;if(!o){const e=function(t){try{const e="string"==typeof t?JSON.parse(t):t;if("string"==typeof e.body)return{...e}}catch(t){}}(t);return{value:t,data:e}}const n=ue(o);if(void 0!==n||!o.prefix)return{value:t,name:o,data:n};const i=eo([o],(()=>e(t,o,ue(o))));return{value:t,name:o,loading:i}}function io(t){return t.hasAttribute("inline")}let ro=!1;try{ro=0===navigator.vendor.indexOf("Apple")}catch(t){}const so=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ao=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function lo(t,e,o){if(1===e)return t;if(o=o||100,"number"==typeof t)return Math.ceil(t*e*o)/o;if("string"!=typeof t)return t;const n=t.split(so);if(null===n||!n.length)return t;const i=[];let r=n.shift(),s=ao.test(r);for(;;){if(s){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*o)/o)}else i.push(r);if(r=n.shift(),void 0===r)return i.join("");s=!s}}const co=t=>"unset"===t||"undefined"===t||"none"===t;function uo(t,e){const o={...Vt,...t},n={...Gt,...e},i={left:o.left,top:o.top,width:o.width,height:o.height};let r=o.body;[o,n].forEach((t=>{const e=[],o=t.hFlip,n=t.vFlip;let s,a=t.rotate;switch(o?n?a+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):n&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),a<0&&(a-=4*Math.floor(a/4)),a%=4,a){case 1:s=i.height/2+i.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:s=i.width/2+i.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}a%2==1&&(i.left!==i.top&&(s=i.left,i.left=i.top,i.top=s),i.width!==i.height&&(s=i.width,i.width=i.height,i.height=s)),e.length&&(r='<g transform="'+e.join(" ")+'">'+r+"</g>")}));const s=n.width,a=n.height,l=i.width,c=i.height;let d,u;null===s?(u=null===a?"1em":"auto"===a?c:a,d=lo(u,l/c)):(d="auto"===s?l:s,u=null===a?lo(d,c/l):"auto"===a?c:a);const h={},p=(t,e)=>{co(e)||(h[t]=e.toString())};return p("width",d),p("height",u),h.viewBox=i.left.toString()+" "+i.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:h,body:r}}let ho=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(t){}})();function po(t){ho=t}function fo(){return ho}const mo={prepare:(t,e,o)=>{const n=[],i=function(t,e){const o=je(t);if(!o)return 0;let n;if(o.maxURL){let t=0;o.resources.forEach((e=>{const o=e;t=Math.max(t,o.length)}));const i=e+".json?icons=";n=o.maxURL-t-o.path.length-i.length}else n=0;return n}(t,e),r="icons";let s={type:r,provider:t,prefix:e,icons:[]},a=0;return o.forEach(((o,l)=>{a+=o.length+1,a>=i&&l>0&&(n.push(s),s={type:r,provider:t,prefix:e,icons:[]},a=o.length),s.icons.push(o)})),n.push(s),n},send:(t,e,o)=>{if(!ho)return void o("abort",424);let n=function(t){if("string"==typeof t){const e=je(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,o=e.icons.join(",");n+=t+".json?"+new URLSearchParams({icons:o}).toString();break}case"custom":{const t=e.uri;n+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void o("abort",400)}let i=503;ho(t+n).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{o(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{o("success",t)})):setTimeout((()=>{404===t?o("abort",t):o("next",i)}))})).catch((()=>{o("next",i)}))}};function go(t,e){switch(t){case"local":case"session":He[t]=e;break;case"all":for(const t in He)He[t]=e}}const vo="data-style";let bo="";function yo(t){bo=t}function wo(t,e){let o=Array.from(t.childNodes).find((t=>t.hasAttribute&&t.hasAttribute(vo)));o||(o=document.createElement("style"),o.setAttribute(vo,vo),t.appendChild(o)),o.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+bo}function xo(){let t;ye("",mo),de(!0);try{t=window}catch(t){}if(t){if(Qe(),void 0!==t.IconifyPreload){const e=t.IconifyPreload,o="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!pe(t))&&console.error(o)}catch(t){console.error(o)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(const t in e){const o="IconifyProviders["+t+"] is invalid.";try{const n=e[t];if("object"!=typeof n||!n||void 0===n.resources)continue;Te(t,n)||console.error(o)}catch(t){console.error(o)}}}}return{enableCache:t=>go(t,!0),disableCache:t=>go(t,!1),iconExists:fe,getIcon:me,listIcons:le,addIcon:he,addCollection:pe,calculateSize:lo,buildIcon:uo,loadIcons:eo,loadIcon:oo,addAPIProvider:Te,appendCustomStyle:yo,_api:{getAPIConfig:je,setAPIModule:ye,sendAPIQuery:Le,setFetch:po,getFetch:fo,listAPIProviders:Ce}}}function _o(t,e){let o=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)o+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+t+"</svg>"}const ko={"background-color":"currentColor"},$o={"background-color":"transparent"},Oo={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},So={"-webkit-mask":ko,mask:ko,background:$o};for(const t in So){const e=So[t];for(const o in Oo)e[t+"-"+o]=Oo[o]}function Eo(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}let To;function jo(t){return void 0===To&&function(){try{To=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch(t){To=null}}(),To?To.createHTML(t):t}function Co(t,e){const o=e.icon.data,n=e.customisations,i=uo(o,n);n.preserveAspectRatio&&(i.attributes.preserveAspectRatio=n.preserveAspectRatio);const r=e.renderedMode;let s;if("svg"===r)s=function(t){const e=document.createElement("span"),o=t.attributes;let n="";o.width||(n="width: inherit;"),o.height||(n+="height: inherit;"),n&&(o.style=n);const i=_o(t.body,o);return e.innerHTML=jo(i),e.firstChild}(i);else s=function(t,e,o){const n=document.createElement("span");let i=t.body;-1!==i.indexOf("<a")&&(i+="\x3c!-- "+Date.now()+" --\x3e");const r=t.attributes,s='url("'+(c=_o(i,{...r,width:e.width+"",height:e.height+""}),"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(c)+'")'),a=n.style,l={"--svg":s,width:Eo(r.width),height:Eo(r.height),...o?ko:$o};var c;for(const t in l)a.setProperty(t,l[t]);return n}(i,{...Vt,...o},"mask"===r);const a=Array.from(t.childNodes).find((t=>{const e=t.tagName&&t.tagName.toUpperCase();return"SPAN"===e||"SVG"===e}));a?"SPAN"===s.tagName&&a.tagName===s.tagName?a.setAttribute("style",s.getAttribute("style")):t.replaceChild(s,a):t.appendChild(s)}function Ao(t,e,o){return{rendered:!1,inline:e,icon:t,lastRender:o&&(o.rendered?o:o.lastRender)}}const Po=function(t="iconify-icon"){let e,o;try{e=window.customElements,o=window.HTMLElement}catch(t){return}if(!e||!o)return;const n=e.get(t);if(n)return n;const i=["icon","mode","inline","width","height","rotate","flip"],r=class extends o{_shadowRoot;_state;_checkQueued=!1;constructor(){super();const t=this._shadowRoot=this.attachShadow({mode:"open"}),e=io(this);wo(t,e),this._state=Ao({value:""},e),this._queueCheck()}static get observedAttributes(){return i.slice(0)}attributeChangedCallback(t){if("inline"===t){const t=io(this),e=this._state;t!==e.inline&&(e.inline=t,wo(this._shadowRoot,t))}else this._queueCheck()}get icon(){const t=this.getAttribute("icon");if(t&&"{"===t.slice(0,1))try{return JSON.parse(t)}catch(t){}return t}set icon(t){"object"==typeof t&&(t=JSON.stringify(t)),this.setAttribute("icon",t)}get inline(){return io(this)}set inline(t){t?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const t=this._state;if(t.rendered){const e=this._shadowRoot;if("svg"===t.renderedMode)try{return void e.lastChild.setCurrentTime(0)}catch(t){}Co(e,t)}}get status(){const t=this._state;return t.rendered?"rendered":null===t.icon.data?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout((()=>{this._check()})))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const t=this._state,e=this.getAttribute("icon");if(e!==t.icon.value)return void this._iconChanged(e);if(!t.rendered)return;const o=this.getAttribute("mode"),n=Zt(this);(t.attrMode!==o||function(t,e){for(const o in Kt)if(t[o]!==e[o])return!0;return!1}(t.customisations,n))&&this._renderIcon(t.icon,n,o)}_iconChanged(t){const e=no(t,((t,e,o)=>{const n=this._state;if(n.rendered||this.getAttribute("icon")!==t)return;const i={value:t,name:e,data:o};i.data?this._gotIconData(i):n.icon=i}));e.data?this._gotIconData(e):this._state=Ao(e,this._state.inline,this._state)}_gotIconData(t){this._checkQueued=!1,this._renderIcon(t,Zt(this),this.getAttribute("mode"))}_renderIcon(t,e,o){const n=function(t,e){switch(e){case"svg":case"bg":case"mask":return e}return"style"===e||!ro&&-1!==t.indexOf("<a")?-1===t.indexOf("currentColor")?"bg":"mask":"svg"}(t.data.body,o),i=this._state.inline;Co(this._shadowRoot,this._state={rendered:!0,icon:t,inline:i,customisations:e,attrMode:o,renderedMode:n})}};i.forEach((t=>{t in r.prototype||Object.defineProperty(r.prototype,t,{get:function(){return this.getAttribute(t)},set:function(e){null!==e?this.setAttribute(t,e):this.removeAttribute(t)}})}));const s=xo();for(const t in s)r[t]=r.prototype[t]=s[t];return e.define(t,r),r}()||xo(),{enableCache:Lo,disableCache:Mo,iconExists:Ro,getIcon:Io,listIcons:No,addIcon:Fo,addCollection:zo,calculateSize:Bo,buildIcon:qo,loadIcons:Do,loadIcon:Vo,addAPIProvider:Uo,_api:Ho}=Po;window.customElements.define("dt-icon",class extends _t{static get styles(){return l`
      :root {
        font-size: inherit;
        color: inherit;
        display: inline-flex;
        width: fit-content;
        height: fit-content;
        position: relative;
      }
      .tooltip {
        position: absolute;
        right: 20px;
        top: -50%;
        min-width: max-content;
        border: solid 1px currentcolor;
        background-color: var(--dt-form-background-color, var(--surface-1));
        padding: .25rem;
        border-radius: .25rem;
        text-align: end;
        z-index: 1;
        display:block;
      }
      .tooltip:before {
        position: absolute;
        right: .7rem;
        top: 1.45rem;
        content: " ";
        border-width: .25rem;
        border-style: solid;
        border-color: transparent transparent currentcolor transparent;
      }
      .tooltip[hidden] {
        display: none;
      }
    `}static get properties(){return{...super.properties,icon:{type:String},tooltip:{type:String},tooltip_open:{type:Boolean},size:{type:String}}}_showTooltip(){this.tooltip_open?this.tooltip_open=!1:this.tooltip_open=!0}render(){const t=this.tooltip?D`<div class="tooltip" ?hidden=${this.tooltip_open}>${this.tooltip}</div>`:null;return D`
      <iconify-icon icon=${this.icon} width="${this.size}" @click=${this._showTooltip}></iconify-icon>
      ${t}
    `}});class Go extends _t{static get styles(){return l`
      :host {
        display: block;
        font-family: var(--font-family);
      }
      :host:has(dialog[open]) {
        overflow: hidden;
      }

      .dt-modal {
        display: block;
        background: var(--dt-modal-background-color, #fff);
        color: var(--dt-modal-color, #000);
        max-inline-size: min(90vw, 100%);
        max-block-size: min(80vh, 100%);
        max-block-size: min(80dvb, 100%);
        margin: auto;
        height: fit-content;
        padding: var(--dt-modal-padding, 1em);
        position: fixed;
        inset: 0;
        border-radius: 1em;
        border: none;
        box-shadow: var(--shadow-6);
        z-index: 1000;
        transition: opacity 0.1s ease-in-out;
      }

      dialog:not([open]) {
        pointer-events: none;
        opacity: 0;
      }

      dialog::backdrop {
        background: var(--dt-modal-backdrop-color, rgba(0, 0, 0, 0.25));
        animation: var(--dt-modal-animation, fade-in 0.75s);
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: 1.4;
        text-rendering: optimizeLegibility;
        color: inherit;
        font-style: normal;
        font-weight: 300;
        margin: 0;
      }

      form {
        display: grid;
        height: fit-content;
        grid-template-columns: 1fr;
        grid-template-rows: 100px auto 100px;
        grid-template-areas:
          'header'
          'main'
          'footer';
        position: relative;
      }

      form.no-header {
        grid-template-rows: auto auto;
        grid-template-areas:
          'main'
          'footer';
      }

      header {
        grid-area: header;
        display: flex;
        justify-content: space-between;
      }

      .button {
        color: var(--dt-modal-button-color, #fff);
        background: var(--dt-modal-button-background, #000);
        font-size: 1rem;
        border: 0.1em solid var(--dt-modal-button-background, #000);
        border-radius: 0.25em;
        padding: 0.25rem 0.5rem;
        cursor: pointer;
        text-decoration: none;
      }
      .button.opener {
        color: var(--dt-modal-button-opener-color,var(--dt-modal-button-color, #fff) );
        background: var(--dt-modal-button-opener-background, var(--dt-modal-button-background, #000) );
        border: 0.1em solid var(--dt-modal-button-opener-background, #000);
      }
      button.toggle {
        margin-inline-end: 0;
        margin-inline-start: auto;
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
      }

      article {
        grid-area: main;
        overflow: auto;
      }

      footer {
        grid-area: footer;
        display: flex;
        justify-content: space-between;
      }

      .help-more h5 {
        font-size: 0.75rem;
        display: block;
      }
      .help-more .button {
        font-size: 0.75rem;
        display: block;
      }
    `}static get properties(){return{title:{type:String},context:{type:String},isHelp:{type:Boolean},isOpen:{type:Boolean},hideHeader:{type:Boolean},hideButton:{type:Boolean},buttonClass:{type:Object},buttonStyle:{type:Object}}}constructor(){super(),this.context="default",this.addEventListener("open",(t=>this._openModal())),this.addEventListener("close",(t=>this._closeModal()))}_openModal(){this.isOpen=!0,this.shadowRoot.querySelector("dialog").showModal(),document.querySelector("body").style.overflow="hidden"}_dialogHeader(t){return this.hideHeader?D``:D`
      <header>
            <h1 id="modal-field-title">${this.title}</h1>
            <button @click="${this._cancelModal}" class="toggle">${t}</button>
          </header>
      `}_closeModal(){this.isOpen=!1,this.shadowRoot.querySelector("dialog").close(),document.querySelector("body").style.overflow="initial"}_cancelModal(){this._triggerClose("cancel")}_triggerClose(t){this.dispatchEvent(new CustomEvent("close",{detail:{action:t}}))}_dialogClick(t){if("DIALOG"!==t.target.tagName)return;const e=t.target.getBoundingClientRect();!1===(e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width)&&this._cancelModal()}_dialogKeypress(t){"Escape"===t.key&&this._cancelModal()}_helpMore(){return this.isHelp?D`
          <div class="help-more">
            <h5>${(0,vt.ab)("Need more help?")}</h5>
            <a
              class="button small"
              id="docslink"
              href="https://disciple.tools/user-docs"
              target="_blank"
              >${(0,vt.ab)("Read the documentation")}</a
            >
          </div>
        `:null}firstUpdated(){this.isOpen&&this._openModal()}_onButtonClick(){this._triggerClose("button")}render(){const t=D`
      <svg viewPort="0 0 12 12" version="1.1" width='12' height='12'>
          xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11"
              x2="11" y2="1"
              stroke="currentColor"
              stroke-width="2"/>
        <line x1="1" y1="1"
              x2="11" y2="11"
              stroke="currentColor"
              stroke-width="2"/>
      </svg>
    `;return D`
      <dialog
        id=""
        class="dt-modal"
        @click=${this._dialogClick}
        @keypress=${this._dialogKeypress}
      >
        <form method="dialog" class=${this.hideHeader?"no-header":""}>
      ${this._dialogHeader(t)}
          <article>
            <slot name="content"></slot>
          </article>
          <footer>
            <button
              class="button small"
              data-close=""
              aria-label="Close reveal"
              type="button"
              @click=${this._onButtonClick}
            >
              <slot name="close-button">${(0,vt.ab)("Close")}</slot>
            </button>
            ${this._helpMore()}
          </footer>
        </form>
      </dialog>

      ${this.hideButton?null:D`
      <button
        class="button small opener ${gt(this.buttonClass||{})}"
        data-open=""
        aria-label="Open reveal"
        type="button"
        @click="${this._openModal}"
        style=${Ot(this.buttonStyle||{})}
      >
        <slot name="openButton">${(0,vt.ab)("Open Dialog")}</slot>
      </button>
      `}
    `}}window.customElements.define("dt-modal",Go);window.customElements.define("dt-map-modal",class extends _t{static get properties(){return{...super.properties,title:{type:String},isOpen:{type:Boolean},canEdit:{type:Boolean,state:!0},metadata:{type:Object},center:{type:Array},mapboxToken:{type:String,attribute:"mapbox-token"}}}static get styles(){return[l`
        .map {
          width: 100%;
          min-width: 50vw;
          min-height: 50dvb;
        }
      `]}constructor(){super(),this.addEventListener("open",(t=>{this.shadowRoot.querySelector("dt-modal").dispatchEvent(new Event("open")),this.isOpen=!0})),this.addEventListener("close",(t=>{this.shadowRoot.querySelector("dt-modal").dispatchEvent(new Event("close")),this.isOpen=!1}))}connectedCallback(){if(super.connectedCallback(),this.canEdit=!this.metadata,window.mapboxgl)this.initMap();else{let t=document.createElement("script");t.src="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js",t.onload=this.initMap.bind(this),document.body.appendChild(t),console.log("injected script")}}initMap(){if(!this.isOpen||!window.mapboxgl||!this.mapboxToken)return;const t=this.shadowRoot.querySelector("#map");if(t&&!this.map){this.map=new window.mapboxgl.Map({accessToken:this.mapboxToken,container:t,style:"mapbox://styles/mapbox/streets-v12",minZoom:1}),this.map.on("load",(()=>this.map.resize())),this.center&&this.center.length&&(this.map.setCenter(this.center),this.map.setZoom(15));const e=new mapboxgl.NavigationControl;this.map.addControl(e,"bottom-right"),this.addPinFromMetadata(),this.map.on("click",(t=>{this.canEdit&&(this.marker?this.marker.setLngLat(t.lngLat):this.marker=(new mapboxgl.Marker).setLngLat(t.lngLat).addTo(this.map))}))}}addPinFromMetadata(){if(this.metadata){const{lng:t,lat:e,level:o}=this.metadata;let n=15;"admin0"===o?n=3:"admin1"===o?n=6:"admin2"===o&&(n=10),this.map&&(this.map.setCenter([t,e]),this.map.setZoom(n),this.marker=(new mapboxgl.Marker).setLngLat([t,e]).addTo(this.map))}}updated(t){window.mapboxgl&&(t.has("metadata")&&this.metadata&&this.metadata.lat&&this.addPinFromMetadata(),t.has("isOpen")&&this.isOpen&&this.initMap())}onClose(t){"button"===t?.detail?.action&&this.marker&&this.dispatchEvent(new CustomEvent("submit",{detail:{location:this.marker.getLngLat()}}))}render(){return D`      
      <dt-modal
        .title=${this.metadata?.label}
        ?isopen=${this.isOpen}
        hideButton
        @close=${this.onClose}
      >
        <div slot="content">
          <div class="map" id="map"></div>
        </div>
       
        ${this.canEdit?D`<div slot="close-button">${(0,vt.ab)("Save")}</div>`:null}
      </dt-modal>
      
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css' rel='stylesheet' />
    `}});window.customElements.define("dt-location-map-item",class extends dt{static get properties(){return{id:{type:String,reflect:!0},placeholder:{type:String},mapboxToken:{type:String,attribute:"mapbox-token"},googleToken:{type:String,attribute:"google-token"},metadata:{type:Object},disabled:{type:Boolean},open:{type:Boolean,state:!0},query:{type:String,state:!0},activeIndex:{type:Number,state:!0},containerHeight:{type:Number,state:!0},loading:{type:Boolean},saved:{type:Boolean},filteredOptions:{type:Array,state:!0}}}static get styles(){return[l`
        :host {
          position: relative;
          font-family: Helvetica, Arial, sans-serif;
          display: block;
        }
        
        .input-group {
          color: var(--dt-multi-select-text-color, #0a0a0a);
          margin-bottom: 1rem;
        }
        .input-group.disabled input,
        .input-group.disabled .field-container {
          background-color: var(--disabled-color);
        }
        .input-group.disabled a,
        .input-group.disabled button {
          cursor: not-allowed;
          pointer-events: none;
        }
        .input-group.disabled *:hover {
          cursor: not-allowed;
        }
        
        /* === Options List === */
        .option-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border: 1px solid var(--dt-form-border-color, #cacaca);
          background: var(--dt-form-background-color, #fefefe);
          z-index: 10;
          position: absolute;
          width: var(--container-width, 100%);
          width: 100%;
          top: 0;
          left: 0;
          box-shadow: var(--shadow-1);
          max-height: 150px;
          overflow-y: scroll;
        }
        .option-list li {
          border-block-start: 1px solid var(--dt-form-border-color, #cacaca);
          outline: 0;
        }
        .option-list li div,
        .option-list li button {
          padding: 0.5rem 0.75rem;
          color: var(--dt-multi-select-text-color, #0a0a0a);
          font-weight: 100;
          font-size: 1rem;
          text-decoration: none;
          text-align: inherit;
        }
        .option-list li button {
          display: block;
          width: 100%;
          border: 0;
          background: transparent;
        }
        .option-list li button:hover,
        .option-list li button.active {
          cursor: pointer;
          background: var(--dt-multi-select-option-hover-background, #f5f5f5);
        }
      `,l`
        input {
          color: var(--dt-form-text-color, #000);
          appearance: none;
          background-color: var(--dt-location-map-background-color, #fefefe);
          border: 1px solid var(--dt-location-map-border-color, #fefefe);
          border-radius: var(--dt-location-map-border-radius, 0);
          box-shadow: var(
            --dt-location-map-box-shadow,
            var(
              --dt-form-input-box-shadow,
              inset 0 1px 2px hsl(0deg 0% 4% / 10%)
            )
          );
          box-sizing: border-box;
          display: block;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.5;
          margin: 0;
          padding: var(--dt-form-padding, 0.5333333333rem);
          transition: var(
            --dt-form-transition,
            box-shadow 0.5s,
            border-color 0.25s ease-in-out
          );
        }
        input:disabled,
        input[readonly],
        textarea:disabled,
        textarea[readonly] {
          background-color: var(
            --dt-text-disabled-background-color,
            var(--dt-form-disabled-background-color, #e6e6e6)
          );
          cursor: not-allowed;
        }
        input.disabled {
          color: var(--dt-text-placeholder-color, #999);        
        }
        input:focus-within,
        input:focus-visible {
          outline: none;
        }
        input::placeholder {
          color: var(--dt-text-placeholder-color, #999);
          text-transform: var(--dt-text-placeholder-transform, none);
          font-size: var(--dt-text-placeholder-font-size, 1rem);
          font-weight: var(--dt-text-placeholder-font-weight, 400);
          letter-spacing: var(--dt-text-placeholder-letter-spacing, normal);
        }
        input.invalid {
          border-color: var(--dt-text-border-color-alert, var(--alert-color));
        }
        
        .field-container {
          display: flex;
          margin-bottom: 0.5rem;
        }
        .field-container input {
          flex-grow: 1;
        }
        .field-container .input-addon {
          flex-shrink: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          aspect-ratio: 1/1;
          padding: 10px;
          border: solid 1px gray;
          border-collapse: collapse;
          color: var(--dt-location-map-button-color, #cc4b37);
          background-color: var(--dt-location-map-background-color, buttonface);
          border: 1px solid var(--dt-location-map-border-color, #fefefe);
          border-radius: var(--dt-location-map-border-radius, 0);
          box-shadow: var(
            --dt-location-map-box-shadow,
            var(
              --dt-form-input-box-shadow,
              inset 0 1px 2px hsl(0deg 0% 4% / 10%)
            )
          );
        }
        .field-container .input-addon:hover {
          background-color: var(--dt-location-map-button-hover-background-color, #cc4b37);
          color: var(--dt-location-map-button-hover-color, #ffffff);
        }
        
        .input-addon:disabled {
          background-color: var(--dt-form-disabled-background-color);
          color: var(--dt-text-placeholder-color, #999);
        }
        .input-addon:disabled:hover {
          background-color: var(--dt-form-disabled-background-color);
          color: var(--dt-text-placeholder-color, #999);
          cursor: not-allowed;          
        }
      `,l`
        /* === Inline Icons === */
        .icon-overlay {
          position: absolute;
          inset-inline-end: 1rem;
          top: 0;
          inset-inline-end: 3rem;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-overlay.alert {
          color: var(--alert-color);
        }
        .icon-overlay.success {
          color: var(--success-color);
        }
      `]}constructor(){super(),this.activeIndex=-1,this.filteredOptions=[],this.detectTap=!1,this.debounceTimer=null}connectedCallback(){super.connectedCallback(),this.addEventListener("autofocus",(async t=>{await this.updateComplete;const e=this.shadowRoot.querySelector("input");e&&e.focus()})),this.mapboxToken&&(this.mapboxService=new zt(this.mapboxToken)),this.googleToken&&(this.googleGeocodeService=new Bt(this.googleToken,window,document))}updated(t){this._scrollOptionListToActive();const e=this.shadowRoot.querySelector(".input-group");e.style.getPropertyValue("--container-width")||e.style.setProperty("--container-width",`${e.clientWidth}px`)}_scrollOptionListToActive(){const t=this.shadowRoot.querySelector(".option-list"),e=this.shadowRoot.querySelector("button.active");if(t&&e){const o=e.offsetTop,n=e.offsetTop+e.clientHeight,i=t.scrollTop;n>t.scrollTop+t.clientHeight?t.scrollTo({top:n-t.clientHeight,behavior:"smooth"}):o<i&&t.scrollTo({top:o,behavior:"smooth"})}}_clickOption(t){const e=t.currentTarget??t.target;e&&e.value&&this._select(JSON.parse(e.value))}_touchStart(t){t.target&&(this.detectTap=!1)}_touchMove(t){t.target&&(this.detectTap=!0)}_touchEnd(t){this.detectTap||(t.target&&t.target.value&&this._clickOption(t),this.detectTap=!1)}_keyboardSelectOption(){this.activeIndex>-1&&(this.activeIndex<this.filteredOptions.length?this._select(this.filteredOptions[this.activeIndex]):this._select({value:this.query,label:this.query}))}async _select(t){if(t.place_id&&this.googleGeocodeService){this.loading=!0;const e=await this.googleGeocodeService.getPlaceDetails(t.label,this.locale);this.loading=!1,e&&(t.lat=e.geometry.location.lat,t.lng=e.geometry.location.lng,t.level=e.types&&e.types.length?e.types[0]:null)}const e={detail:{metadata:t},bubbles:!1};this.dispatchEvent(new CustomEvent("select",e)),this.metadata=t;const o=this.shadowRoot.querySelector("input");o&&(o.value=t?.label),this.open=!1,this.activeIndex=-1}get _focusTarget(){let t=this._field;return this.metadata&&(t=this.shadowRoot.querySelector("button")||t),t}_inputFocusIn(){this.activeIndex=-1}_inputFocusOut(t){t.relatedTarget&&["BUTTON","LI"].includes(t.relatedTarget.nodeName)||(this.open=!1)}_inputKeyDown(t){switch(t.keyCode||t.which){case 38:this.open=!0,this._listHighlightPrevious();break;case 40:this.open=!0,this._listHighlightNext();break;case 9:this.activeIndex<0?this.open=!1:t.preventDefault(),this._keyboardSelectOption();break;case 13:this._keyboardSelectOption();break;case 27:this.open=!1,this.activeIndex=-1;break;default:this.open=!0}}_inputKeyUp(t){const e=t.keyCode||t.which;t.target.value&&![9,13].includes(e)&&(this.open=!0),this.query=t.target.value}_listHighlightNext(){this.activeIndex=Math.min(this.filteredOptions.length,this.activeIndex+1)}_listHighlightPrevious(){this.activeIndex=Math.max(0,this.activeIndex-1)}async _filterOptions(){if(this.query)if(this.googleToken&&this.googleGeocodeService){this.loading=!0;try{const t=await this.googleGeocodeService.getPlacePredictions(this.query,this.locale);this.filteredOptions=(t||[]).map((t=>({label:t.description,place_id:t.place_id,source:"user",raw:t}))),this.loading=!1}catch(t){return console.error(t),this.error=!0,void(this.loading=!1)}}else if(this.mapboxToken&&this.mapboxService){this.loading=!0;const t=await this.mapboxService.searchPlaces(this.query,this.locale);this.filteredOptions=t.map((t=>({lng:t.center[0],lat:t.center[1],level:t.place_type[0],label:t.place_name,source:"user"}))),this.loading=!1}return this.filteredOptions}willUpdate(t){if(super.willUpdate(t),t){if(t.has("query")&&(this.error=!1,clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout((()=>this._filterOptions()),300)),!this.containerHeight&&this.shadowRoot.children&&this.shadowRoot.children.length){const t=this.shadowRoot.querySelector(".input-group");t&&(this.containerHeight=t.offsetHeight)}}}_change(){}_delete(){const t={detail:{metadata:this.metadata},bubbles:!1};this.dispatchEvent(new CustomEvent("delete",t))}_openMapModal(){this.shadowRoot.querySelector("dt-map-modal").dispatchEvent(new Event("open"))}async _onMapModalSubmit(t){if(t?.detail?.location?.lat){const{location:e}=t?.detail,{lat:o,lng:n}=e;if(this.googleGeocodeService){const t=await this.googleGeocodeService.reverseGeocode(n,o,this.locale);if(t&&t.length){const e=t[0];this._select({lng:e.geometry.location.lng,lat:e.geometry.location.lat,level:e.types&&e.types.length?e.types[0]:null,label:e.formatted_address,source:"user"})}}else if(this.mapboxService){const t=await this.mapboxService.reverseGeocode(n,o,this.locale);if(t&&t.length){const e=t[0];this._select({lng:e.center[0],lat:e.center[1],level:e.place_type[0],label:e.place_name,source:"user"})}}}}_renderOption(t,e,o){return D`
      <li tabindex="-1">
        <button
          value="${JSON.stringify(t)}"
          type="button"
          @click="${this._clickOption}"
          @touchstart="${this._touchStart}"
          @touchmove="${this._touchMove}"
          @touchend="${this._touchEnd}"
          tabindex="-1"
          class="${this.activeIndex>-1&&this.activeIndex===e?"active":""}"
        >
          ${o??t.label}
        </button>
      </li>
    `}_renderOptions(){let t=[];return this.filteredOptions.length?t.push(...this.filteredOptions.map(((t,e)=>this._renderOption(t,e)))):this.loading?t.push(D`<li><div>${(0,vt.ab)("Loading...")}</div></li>`):t.push(D`<li><div>${(0,vt.ab)("No Data Available")}</div></li>`),t.push(this._renderOption({value:this.query,label:this.query},(this.filteredOptions||[]).length,D`<strong>${(0,vt.ab)("Use")}: "${this.query}"</strong>`)),t}render(){const t={display:this.open?"block":"none",top:this.containerHeight?`${this.containerHeight}px`:"2.5rem"},e=!!this.metadata?.label,o=this.metadata?.lat&&this.metadata?.lng;return D`
      <div class="input-group">
        <div class="field-container">      
          <input 
            type="text"
            class="${this.disabled?"disabled":null}"
            placeholder="${this.placeholder}"
            value="${this.metadata?.label}"
            .disabled=${e&&o||this.disabled}
            @focusin="${this._inputFocusIn}"
            @blur="${this._inputFocusOut}"
            @keydown="${this._inputKeyDown}"
            @keyup="${this._inputKeyUp}"
          />
          
          ${e&&o?D`
          <button 
            class="input-addon btn-map" 
            @click=${this._openMapModal}
            ?disabled=${this.disabled}
          >
            <dt-icon icon="mdi:map" />
          </button>
          `:null}
          ${e?D`
          <button 
            class="input-addon btn-delete" 
            @click=${this._delete}
            ?disabled=${this.disabled}
          >
            <dt-icon icon="mdi:trash-can-outline" />
          </button>
          `:D`
          <button 
            class="input-addon btn-pin" 
            @click=${this._openMapModal}
            ?disabled=${this.disabled}
          >
            <dt-icon icon="mdi:map-marker-radius" />
          </button>
          `}
        </div>
        <ul class="option-list" style=${Ot(t)}>
          ${this._renderOptions()}
        </ul>
        ${this.touched&&this.invalid||this.error?D`<dt-exclamation-circle class="icon-overlay alert"></dt-exclamation-circle>`:null}
        ${this.loading?D`<dt-spinner class="icon-overlay"></dt-spinner>`:null}
        ${this.saved?D`<dt-checkmark class="icon-overlay success"></dt-checkmark>`:null}
      </div>
      
      <dt-map-modal 
        .metadata=${this.metadata} 
        mapbox-token="${this.mapboxToken}"
        @submit=${this._onMapModalSubmit} 
      />
      
`}});window.customElements.define("dt-location-map",class extends St{static get properties(){return{...super.properties,placeholder:{type:String},value:{type:Array,reflect:!0},locations:{type:Array,state:!0},open:{type:Boolean,state:!0},onchange:{type:String},mapboxToken:{type:String,attribute:"mapbox-token"},googleToken:{type:String,attribute:"google-token"}}}static get styles(){return[...super.styles,l`
        :host {
          font-family: Helvetica, Arial, sans-serif;
        }
        .input-group {
          display: flex;
        }

        .field-container {
          position: relative;
        }
      `]}constructor(){super(),this.value=[],this.locations=[{id:Date.now()}]}_setFormValue(t){super._setFormValue(t),this.internals.setFormValue(JSON.stringify(t))}willUpdate(...t){super.willUpdate(...t),this.value&&this.value.filter((t=>!t.id))&&(this.value=[...this.value.map((t=>({...t,id:t.grid_meta_id})))]),this.updateLocationList()}firstUpdated(...t){super.firstUpdated(...t),this.internals.setFormValue(JSON.stringify(this.value))}updated(t){if(t.has("value")){const e=t.get("value");e&&e?.length!==this.value?.length&&this.focusNewLocation()}if(t.has("locations")){const e=t.get("locations");e&&e?.length!==this.locations?.length&&this.focusNewLocation()}}focusNewLocation(){const t=this.shadowRoot.querySelectorAll("dt-location-map-item");t&&t.length&&t[t.length-1].dispatchEvent(new Event("autofocus"))}updateLocationList(){this.disabled||!this.open&&this.value&&this.value.length?this.locations=[...(this.value||[]).filter((t=>t.label))]:(this.open=!0,this.locations=[...(this.value||[]).filter((t=>t.label)),{id:Date.now()}])}selectLocation(t){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value}}),o={...t.detail.metadata,id:Date.now()};this.value=[...(this.value||[]).filter((t=>t.label)),o],this.updateLocationList(),e.detail.newValue=this.value,this.dispatchEvent(e),this._setFormValue(this.value)}deleteItem(t){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value}}),o=t.detail?.metadata,n=o?.grid_meta_id;this.value=n?(this.value||[]).filter((t=>t.grid_meta_id!==n)):(this.value||[]).filter((t=>t.lat!==o.lat&&t.lng!==o.lng)),this.updateLocationList(),e.detail.newValue=this.value,this.dispatchEvent(e),this._setFormValue(this.value)}addNew(){this.open=!0,this.updateLocationList()}renderItem(t){return D`
      <dt-location-map-item
        placeholder="${this.placeholder}"
        .metadata=${t}
        mapbox-token="${this.mapboxToken}"
        google-token="${this.googleToken}"
        @delete=${this.deleteItem}
        @select=${this.selectLocation}
        ?disabled=${this.disabled}
      ></dt-location-map-item>
    `}render(){return[...this.value||[]].push({id:Date.now()}),D`
      ${this.labelTemplate()}

      ${Ft(this.locations||[],(t=>t.id),((t,e)=>this.renderItem(t,e)))}
      ${this.open?null:D`<button @click="${this.addNew}">Add New</button>`}
    `}});const Wo=t=>null!=t?t:H;window.customElements.define("dt-number",class extends St{static get styles(){return[...super.styles,l`
        input {
          color: var(--dt-form-text-color, #000);
          appearance: none;
          background-color: var(--dt-form-background-color, #fff);
          border: 1px solid var(--dt-form-border-color, #ccc);
          border-radius: 0;
          box-shadow: var(
            --dt-form-input-box-shadow,
            inset 0 1px 2px hsl(0deg 0% 4% / 10%)
          );
          box-sizing: border-box;
          display: block;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 300;
          height: 2.5rem;
          line-height: 1.5;
          margin: 0 0 1.0666666667rem;
          padding: var(--dt-form-padding, 0.5333333333rem);
          transition: var(
            --dt-form-transition,
            box-shadow 0.5s,
            border-color 0.25s ease-in-out
          );
        }
        input:disabled,
        input[readonly],
        textarea:disabled,
        textarea[readonly] {
          background-color: var(--dt-form-disabled-background-color, #e6e6e6);
          cursor: not-allowed;
        }
        input:invalid {
          border-color: var(--dt-form-invalid-border-color, #dc3545);
        }
      `]}static get properties(){return{...super.properties,id:{type:String},value:{type:String,reflect:!0},oldValue:{type:String},min:{type:Number},max:{type:Number},loading:{type:Boolean},saved:{type:Boolean},onchange:{type:String}}}connectedCallback(){super.connectedCallback(),this.oldValue=this.value}_checkValue(t){return!(t<this.min||t>this.max)}async onChange(t){if(this._checkValue(t.target.value)){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value,newValue:t.target.value},bubbles:!0,composed:!0});this.value=t.target.value,this._field.setCustomValidity(""),this.dispatchEvent(e),this.api=new xt(this.nonce,`${this.apiRoot}`)}else t.currentTarget.value=""}handleError(t="An error occurred."){let e=t;e instanceof Error?(console.error(e),e=e.message):console.error(e),this.error=e,this._field.setCustomValidity(e),this.invalid=!0,this.value=this.oldValue}render(){return D`
      ${this.labelTemplate()}

      <input
        id="${this.id}"
        name="${this.name}"
        aria-label="${this.label}"
        type="number"
        ?disabled=${this.disabled}
        class="text-input"
        .value="${this.value}"
        min="${Wo(this.min)}"
        max="${Wo(this.max)}"
        @change=${this.onChange}
      />
    `}});window.customElements.define("dt-single-select",class extends St{static get styles(){return[...super.styles,l`
        :host {
          position: relative;
        }

        select {
          appearance: none;
          background-color: var(--dt-form-background-color, #fefefe);
          background-image: linear-gradient(
              45deg,
              transparent 50%,
              var(--dt-single-select-text-color) 50%
            ),
            linear-gradient(
              135deg,
              var(--dt-single-select-text-color) 50%,
              transparent 50%
            );
          background-position: calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
          background-size: 5px 5px, 5px 5px, 1px 1.5em;
          background-repeat: no-repeat;
          border: 1px solid var(--dt-form-border-color, #cacaca);
          border-radius: 0;
          color: var(--dt-single-select-text-color, #0a0a0a);
          font-family: var(--font-family, sans-serif);
          font-size: 1rem;
          font-weight: 300;
          height: 2.5rem;
          line-height: 1.5;
          margin: 0 0 1rem;
          padding: 0.53rem;
          padding-inline-end: 1.6rem;
          transition: border-color 0.25s ease-in-out;
          transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
          box-sizing: border-box;
          width: 100%;
          text-transform: none;
        }
        [dir='rtl'] select {
          background-position: 15px calc(1em + 2px), 20px calc(1em + 2px),
            2.5em 0.5em;
        }
        select.color-select {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: white'></polygon></svg>");
          background-color: var(--dt-form-border-color, #cacaca);
          border: none;
          border-radius: 10px;
          color: var(--dt-single-select-text-color-inverse, #fff);
          font-weight: 700;
          text-shadow: rgb(0 0 0 / 45%) 0 0 6px;
        }

        .icon-overlay {
          inset-inline-end: 2.5rem;
        }
      `]}static get properties(){return{...super.properties,placeholder:{type:String},options:{type:Array},value:{type:String,reflect:!0},color:{type:String,state:!0},onchange:{type:String}}}updateColor(){if(this.value&&this.options){const t=this.options.filter((t=>t.id===this.value));t&&t.length&&(this.color=t[0].color)}}isColorSelect(){return(this.options||[]).reduce(((t,e)=>t||e.color),!1)}willUpdate(t){super.willUpdate(t),t.has("value")&&this.updateColor()}_change(t){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value,newValue:t.target.value}});this.value=t.target.value,this._setFormValue(this.value),this.dispatchEvent(e)}render(){return D`
      ${this.labelTemplate()}

      <div class="container" dir="${this.RTL?"rtl":"ltr"}">
        <select
          name="${this.name}"
          aria-label="${this.name}"
          @change="${this._change}"
          class="${this.isColorSelect()?"color-select":""}"
          style="background-color: ${this.color};"
          ?disabled="${this.disabled}"
        >
          <option disabled selected hidden value="">${this.placeholder}</option>

          ${this.options&&this.options.map((t=>D`
              <option value="${t.id}" ?selected="${t.id===this.value}">
                ${t.label}
              </option>
            `))}
        </select>
        ${this.loading?D`<dt-spinner class="icon-overlay"></dt-spinner>`:null}
        ${this.saved?D`<dt-checkmark class="icon-overlay success"></dt-checkmark>`:null}
      </div>
    `}});window.customElements.define("dt-exclamation-circle",class extends dt{static get styles(){return l`
      svg use {
        fill: currentcolor;
      }
    `}render(){return D`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="Canvas" transform="translate(1845 -2441)">
          <g id="alert-circle-exc">
            <g id="Group">
              <g id="Vector">
                <use
                  xlink:href="#path0_fill"
                  transform="translate(-1845 2441)"
                  fill="#000000"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <path
            id="path0_fill"
            d="M 12 0C 5.383 0 0 5.383 0 12C 0 18.617 5.383 24 12 24C 18.617 24 24 18.617 24 12C 24 5.383 18.617 0 12 0ZM 13.645 5L 13 14L 11 14L 10.392 5L 13.645 5ZM 12 20C 10.895 20 10 19.105 10 18C 10 16.895 10.895 16 12 16C 13.105 16 14 16.895 14 18C 14 19.105 13.105 20 12 20Z"
          />
        </defs>
      </svg>
    `}});class Ko extends St{static get styles(){return[...super.styles,l`
        input {
          color: var(--dt-form-text-color, #000);
          appearance: none;
          background-color: var(--dt-text-background-color, #fefefe);
          border: 1px solid var(--dt-text-border-color, #fefefe);
          border-radius: var(--dt-text-border-radius, 0);
          box-shadow: var(
            --dt-text-box-shadow,
            var(
              --dt-form-input-box-shadow,
              inset 0 1px 2px hsl(0deg 0% 4% / 10%)
            )
          );
          box-sizing: border-box;
          display: block;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 300;
          height: 2.5rem;
          line-height: 1.5;
          margin: 0 0 1.0666666667rem;
          padding: var(--dt-form-padding, 0.5333333333rem);
          transition: var(
            --dt-form-transition,
            box-shadow 0.5s,
            border-color 0.25s ease-in-out
          );
          width: 100%;
        }
        input:disabled,
        input[readonly],
        textarea:disabled,
        textarea[readonly] {
          background-color: var(
            --dt-text-disabled-background-color,
            var(--dt-form-disabled-background-color, #e6e6e6)
          );
          cursor: copy;
        }
        input:focus-within,
        input:focus-visible {
          outline: none;
        }
        input::placeholder {
          color: var(--dt-text-placeholder-color, #999);
          text-transform: var(--dt-text-placeholder-transform, none);
          font-size: var(--dt-text-placeholder-font-size, 1rem);
          font-weight: var(--dt-text-placeholder-font-weight, 400);
          letter-spacing: var(--dt-text-placeholder-letter-spacing, normal);
        }
        input.invalid {
          border-color: var(--dt-text-border-color-alert, var(--alert-color));
        }
      `]}static get properties(){return{...super.properties,id:{type:String},type:{type:String},placeholder:{type:String},value:{type:String,reflect:!0},onchange:{type:String}}}_change(t){const e=new CustomEvent("change",{bubbles:!0,detail:{field:this.name,oldValue:this.value,newValue:t.target.value}});this.value=t.target.value,this._setFormValue(this.value),this.dispatchEvent(e)}implicitFormSubmit(t){if(13===(t.keyCode||t.which)&&this.internals.form){const t=this.internals.form.querySelector("button");t&&t.click()}}_validateRequired(){const{value:t}=this,e=this.shadowRoot.querySelector("input");""===t&&this.required?(this.invalid=!0,this.internals.setValidity({valueMissing:!0},this.requiredMessage||"This field is required",e)):(this.invalid=!1,this.internals.setValidity({}))}get classes(){return{"text-input":!0,invalid:this.touched&&this.invalid}}render(){return D`
      ${this.labelTemplate()}

      <div class="input-group">
        <input
          id="${this.id}"
          name="${this.name}"
          aria-label="${this.label}"
          type="${this.type||"text"}"
          placeholder="${this.placeholder}"
          ?disabled=${this.disabled}
          ?required=${this.required}
          class="${gt(this.classes)}"
          .value="${this.value||""}"
          @change=${this._change}
          novalidate
          @keyup="${this.implicitFormSubmit}"
        />

        ${this.touched&&this.invalid?D`<dt-exclamation-circle
              class="icon-overlay alert"
            ></dt-exclamation-circle>`:null}
        ${this.error?D`<dt-icon
              icon="mdi:alert-circle"
              class="icon-overlay alert"
              tooltip="${this.error}"
              size="2rem"
            ></dt-icon>`:null}
        ${this.loading?D`<dt-spinner class="icon-overlay"></dt-spinner>`:null}
        ${this.saved?D`<dt-checkmark class="icon-overlay success"></dt-checkmark>`:null}
      </div>
    `}}window.customElements.define("dt-text",Ko);window.customElements.define("dt-textarea",class extends St{static get styles(){return[...super.styles,l`
        textarea {
          color: var(--dt-textarea-text-color, #0a0a0a);
          appearance: none;
          background-color: var(--dt-textarea-background-color, #fefefe);
          border: 1px solid var(--dt-textarea-border-color, #cecece);
          border-radius: 3px;
          box-shadow: var(
            --dt-textarea-input-box-shadow,
            inset 0 1px 2px hsl(0deg 0% 4% / 10%)
          );
          box-sizing: border-box;
          display: block;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 300;
          height: 10rem;
          line-height: 1.5;
          margin: 0 0 1.0666666667rem;
          padding: var(--dt-form-padding, 0.5333333333rem);
          transition: var(
            --dt-form-transition,
            box-shadow 0.5s,
            border-color 0.25s ease-in-out
          );
          overflow: hidden;
          position: relative;
          outline: 0;
          resize: none;
        }
        input:disabled,
        input[readonly],
        textarea:disabled,
        textarea[readonly] {
          background-color: var(
            --dt-textarea-disabled-background-color,
            #e6e6e6
          );
          cursor: not-allowed;
        }
      `]}static get properties(){return{...super.properties,id:{type:String},value:{type:String,reflect:!0},loading:{type:Boolean},saved:{type:Boolean},onchange:{type:String}}}onChange(t){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value,newValue:t.target.value}});this.value=t.target.value,this.dispatchEvent(e)}render(){return D`
      ${this.labelTemplate()}

      <textarea
        id="${this.id}"
        name="${this.name}"
        aria-label="${this.label}"
        type="text"
        ?disabled=${this.disabled}
        class="text-input"
        @change=${this.onChange}
        .value="${this.value||""}"
      ></textarea>
    `}});window.customElements.define("dt-toggle",class extends St{static get styles(){return[...super.styles,l`
        :host {
          display: inline-block;
        }

        .Toggle {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          position: relative;
          margin-bottom: 1em;
          cursor: pointer;
          gap: 1ch;
        }

        button.Toggle {
          border: 0;
          padding: 0;
          background-color: transparent;
          font: inherit;
        }

        .Toggle__input {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
        }

        .Toggle__display {
          --offset: 0.25em;
          --diameter: 1.2em;

          display: inline-flex;
          align-items: center;
          justify-content: space-around;
          box-sizing: content-box;
          width: calc(var(--diameter) * 2 + var(--offset) * 2);
          height: calc(var(--diameter) + var(--offset) * 2);
          border: 0.1em solid rgb(0 0 0 / 0.2);
          position: relative;
          border-radius: 100vw;
          background-color: var(--dt-toggle-background-color-off, #ecf5fc);
          transition: 250ms;
        }

        .Toggle__display::before {
          content: '';
          z-index: 2;
          position: absolute;
          top: 50%;
          left: var(--offset);
          box-sizing: border-box;
          width: var(--diameter);
          height: var(--diameter);
          border: 0.1em solid rgb(0 0 0 / 0.2);
          border-radius: 50%;
          background-color: white;
          transform: translate(0, -50%);
          will-change: transform;
          transition: inherit;
        }

        .Toggle:focus .Toggle__display,
        .Toggle__input:focus + .Toggle__display {
          outline: 1px dotted #212121;
          outline: 1px auto -webkit-focus-ring-color;
          outline-offset: 2px;
        }

        .Toggle:focus,
        .Toggle:focus:not(:focus-visible) .Toggle__display,
        .Toggle__input:focus:not(:focus-visible) + .Toggle__display {
          outline: 0;
        }

        .Toggle[aria-pressed='true'] .Toggle__display,
        .Toggle__input:checked + .Toggle__display {
          background-color: var(--primary-color);
        }

        .Toggle[aria-pressed='true'] .Toggle__display::before,
        .Toggle__input:checked + .Toggle__display::before {
          transform: translate(100%, -50%);
        }

        .Toggle[disabled] .Toggle__display,
        .Toggle__input:disabled + .Toggle__display {
          opacity: 0.6;
          filter: grayscale(40%);
          cursor: not-allowed;
        }
        [dir='rtl'] .Toggle__display::before {
          left: auto;
          right: var(--offset);
        }

        [dir='rtl'] .Toggle[aria-pressed='true'] + .Toggle__display::before,
        [dir='rtl'] .Toggle__input:checked + .Toggle__display::before {
          transform: translate(-100%, -50%);
        }

        .Toggle__icon {
          display: inline-block;
          width: 1em;
          height: 1em;
          color: inherit;
          fill: currentcolor;
          vertical-align: middle;
          overflow: hidden;
        }

        .Toggle__icon--cross {
          color: var(--alert-color);
          font-size: 65%;
        }

        .Toggle__icon--checkmark {
          color: var(--success-color);
        }
      `]}static get properties(){return{...super.properties,id:{type:String},checked:{type:Boolean,reflect:!0},onchange:{type:String},hideIcons:{type:Boolean,default:!0}}}constructor(){super(),this.hideIcons=!1}onChange(t){const e=new CustomEvent("change",{detail:{field:this.name,oldValue:this.checked,newValue:t.target.checked}});this.checked=t.target.checked,this._setFormValue(this.checked),this.dispatchEvent(e)}render(){const t=D`<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--checkmark"><path d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z" fill="currentcolor" stroke="currentcolor" /></svg>`,e=D`<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="Toggle__icon Toggle__icon--cross"><path d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z" fill="currentcolor" /></svg>`;return D`
      <label class="Toggle" for="${this.id}" dir="${this.RTL?"rtl":"ltr"}">
        ${this.label}
        <input
          type="checkbox"
          name="${this.id}"
          id="${this.id}"
          class="Toggle__input"
          ?checked=${this.checked}
          @click=${this.onChange}
          ?disabled=${this.disabled}
        />
        <span class="Toggle__display" hidden>
          ${this.hideIcons?D``:D` ${t} ${e} `}
        </span>
      </label>
    `}});window.customElements.define("dt-comm-channel",class extends Ko{static get styles(){return[...super.styles,l`
        :host {
          display: block;
        }
       .label-wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          align-items: center;
       }
       .add-btn {
          background-color: transparent;
          border: none;
       }
        .add-icon {
          color: var(--dt-comm-channel-add-btn-color, var(--success-color));
          height: 1.75rem;
          margin: 0 1rem
        }
        .input-group {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .input-group li {
          display: flex;
          width: 100%;
          flex-direction: row;
          align-content: center;
          justify-content: center;
          align-items: center;
        }
        #path0_fill {
          fill: red;
        }

        .delete-button {
          background-color: transparent;
          border: none;
        }

        .delete-button svg {
          width: 100%;
          height: 20px;
        }
      `]}static get properties(){return{...super.properties,value:{type:Array,reflect:!0}}}_addClick(){const t={verified:!1,value:"",key:`new-${this.name}-${Math.floor(100*Math.random())}`};this.value=[...this.value,t],this.requestUpdate()}_deleteField(t){const e=this.value.findIndex((e=>e.key===t.key));-1!==e&&this.value.splice(e,1),this.value=[...this.value],this.requestUpdate()}labelTemplate(){return this.label?D`
      <dt-label
        ?private=${this.private}
        privateLabel="${this.privateLabel}"
        iconAltText="${this.iconAltText}"
        icon="${this.icon}"
      >
        ${this.icon?null:D`<slot name="icon-start" slot="icon-start"></slot>`}
        ${this.label}
      </dt-label>
      <button class="add-btn" @click=${this._addClick}>
        <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4z"></svg>
      </button>
    `:""}_inputFieldTemplate(t){const e=t.key===`new-${this.name}-0`?"":D`
      <button class="delete-button"  @click=${()=>this._deleteField(t)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <path
            id="path0_fill"
            fill-rule="evenodd"
            d="M 14 7C 14 10.866 10.866 14 7 14C 3.13403 14 0 10.866 0 7C 0 3.13401 3.13403 0 7 0C 10.866 0 14 3.13401 14 7ZM 9.51294 3.51299L 7 6.01299L 4.48706 3.51299L 3.5 4.49999L 6.01294 6.99999L 3.5 9.49999L 4.48706 10.487L 7 7.98699L 9.5 10.5L 10.4871 9.51299L 7.98706 6.99999L 10.5 4.49999L 9.51294 3.51299Z"
          />
        </svg>
      </button>
  `;return D`
      <div class="input-group">
        <input
          id="${t.key}"
          name="${this.name}"
          aria-label="${this.label}"
          type="${this.type||"text"}"
          placeholder="${this.placeholder}"
          ?disabled=${this.disabled}
          ?required=${this.required}
          class="${gt(this.classes)}"
          .value="${t.value||""}"
          @change=${this._change}
          novalidate
          @keyup="${this.implicitFormSubmit}"
        />
        ${e}

        ${this.touched&&this.invalid?D`<dt-exclamation-circle
              class="icon-overlay alert"
            ></dt-exclamation-circle>`:null}
        ${this.error?D`<dt-icon
              icon="mdi:alert-circle"
              class="icon-overlay alert"
              tooltip="${this.error}"
              size="2rem"
              ></dt-icon>`:null}
        ${this.loading?D`<dt-spinner class="icon-overlay"></dt-spinner>`:null}
        ${this.saved?D`<dt-checkmark class="icon-overlay success"></dt-checkmark>`:null}
      </div>
    `}_setFormValue(t){super._setFormValue(t),this.internals.setFormValue(JSON.stringify(t)),this.value=[...this.value]}_change(t){const e=t.target.id,{value:o}=t.target,n=this.value;this.value.find(((t,i)=>t.key===e&&(n[i]={verified:!1,value:o,key:e},!0)));const i=new CustomEvent("change",{detail:{field:this.name,oldValue:this.value,newValue:n}});this.value=n,this._setFormValue(this.value),this.dispatchEvent(i)}_renderInputFields(){return this.value?D`
      ${this.value.map((t=>this._inputFieldTemplate(t)))}
    `:(this.value=[{verified:!1,value:"",key:`new-${this.name}-0`}],this._inputFieldTemplate(this.value[0]))}render(){return D`
     <div class="label-wrapper">
        ${this.labelTemplate()}
      </div>
      ${this._renderInputFields()}
    `}});window.customElements.define("dt-alert",class extends _t{static get styles(){return l`
      :host {
        display: block;
      }

      .dt-alert {
        padding: var(--dt-alert-padding, 10px);
        font-family: var(--dt-alert-font-family);
        font-size: var(--dt-alert-font-size, 14px);
        font-weight: var(--dt-alert-font-weight, 700);
        background-color: var(
          --dt-alert-context-background-color,
          var(--dt-alert-background-color)
        );
        border: var(--dt-alert-border-width, 1px) solid
          var(--dt-alert-context-border-color, var(--dt-alert-border-color));
        border-radius: var(--dt-alert-border-radius, 10px);
        box-shadow: var(--dt-alert-box-shadow, 0 2px 4px rgb(0 0 0 / 25%));
        color: var(--dt-alert-context-text-color, var(--dt-alert-text-color));
        text-rendering: optimizeLegibility;
        display: flex;
        gap: var(--dt-alert-gap, 10px);
        justify-content: space-between;
        align-content: center;
        align-items: center;
        white-space: initial;
      }

      .dt-alert.dt-alert--outline {
        background-color: transparent;
        color: var(--dt-alert-context-text-color, var(--text-color-inverse));
      }

      .dt-alert--primary:not(.dt-alert--outline) {
        --dt-alert-context-border-color: var(--primary-color);
        --dt-alert-context-background-color: var(--primary-color);
        --dt-alert-context-text-color: var(--dt-alert-text-color-light);
      }

      .dt-alert--alert:not(.dt-alert--outline) {
        --dt-alert-context-border-color: var(--alert-color);
        --dt-alert-context-background-color: var(--alert-color);
        --dt-alert-context-text-color: var(--dt-alert-text-color-light);
      }

      .dt-alert--caution:not(.dt-alert--outline) {
        --dt-alert-context-border-color: var(--caution-color);
        --dt-alert-context-background-color: var(--caution-color);
        --dt-alert-context-text-color: var(--dt-alert-text-color-dark);
      }

      .dt-alert--success:not(.dt-alert--outline) {
        --dt-alert-context-border-color: var(--success-color);
        --dt-alert-context-background-color: var(--success-color);
        --dt-alert-context-text-color: var(--dt-alert-text-color-light);
      }

      .dt-alert--inactive:not(.dt-alert--outline) {
        --dt-alert-context-border-color: var(--inactive-color);
        --dt-alert-context-background-color: var(--inactive-color);
        --dt-alert-context-text-color: var(--dt-alert-text-color-light);
      }

      .dt-alert--disabled:not(.dt-alert--outline) {
        --dt-alert-context-border-color: var(--disabled-color);
        --dt-alert-context-background-color: var(--disabled-color);
        --dt-alert-context-text-color: var(--dt-alert-text-color-dark);
      }

      .dt-alert--primary.dt-alert--outline {
        --dt-alert-context-border-color: var(--primary-color);
        --dt-alert-context-text-color: var(--primary-color);
      }

      .dt-alert--alert.dt-alert--outline {
        --dt-alert-context-border-color: var(--alert-color);
        --dt-alert-context-text-color: var(--alert-color);
      }

      .dt-alert--caution.dt-alert--outline {
        --dt-alert-context-border-color: var(--caution-color);
        --dt-alert-context-text-color: var(--caution-color);
      }

      .dt-alert--success.dt-alert--outline {
        --dt-alert-context-border-color: var(--success-color);
        --dt-alert-context-text-color: var(--success-color);
      }

      .dt-alert--inactive.dt-alert--outline {
        --dt-alert-context-border-color: var(--inactive-color);
      }

      .dt-alert--disabled.dt-alert--outline {
        --dt-alert-context-border-color: var(--disabled-color);
      }

      button.toggle {
        margin-inline-end: 0;
        margin-inline-start: auto;
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    `}static get properties(){return{context:{type:String},dismissable:{type:Boolean},timeout:{type:Number},hide:{type:Boolean},outline:{type:Boolean}}}get classes(){const t={"dt-alert":!0,"dt-alert--outline":this.outline};return t[`dt-alert--${this.context}`]=!0,t}constructor(){super(),this.context="default"}connectedCallback(){super.connectedCallback(),this.timeout&&setTimeout((()=>{this._dismiss()}),this.timeout)}_dismiss(){this.hide=!0}render(){if(this.hide)return D``;const t=D`
      <svg viewPort="0 0 12 12" version="1.1" width='12' height='12'>
           xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11"
              x2="11" y2="1"
              stroke="currentColor"
              stroke-width="2"/>
        <line x1="1" y1="1"
              x2="11" y2="11"
              stroke="currentColor"
              stroke-width="2"/>
      </svg>
    `;return D`
      <div role="alert" class=${gt(this.classes)}>
        <div>
          <slot></slot>
        </div>
        ${this.dismissable?D`
              <button @click="${this._dismiss}" class="toggle">${t}</button>
            `:null}
      </div>
    `}});window.customElements.define("dt-star",class extends dt{static get styles(){return l`
      :host {
        fill: var(--star-unselected-color, #c7c6c1);
      }
      :host([selected]) {
        fill: var(--star-unselected-color, hsl(45, 100%, 51%));
      }
    `}static get properties(){return{postID:{type:Number},selected:{type:Boolean,reflect:!0}}}_onclick(){this.selected=!this.selected;const t=new CustomEvent("change",{detail:{postID:this.postID,favorited:this.selected}});this.dispatchEvent(t)}_keyUp(t){13===(t.keyCode||t.which)&&this._onclick()}render(){return D`
      <svg
        @click="${this._onclick}"
        @keyup="${this._keyUp}"
        tabindex="0"
        id="star"
        height="32"
        viewBox="0 0 32 32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 31.916 12.092 C 31.706 11.417 31.131 10.937 30.451 10.873 L 21.215 9.996 L 17.564 1.077 C 17.295 0.423 16.681 0 16 0 C 15.318 0 14.706 0.423 14.435 1.079 L 10.784 9.996 L 1.546 10.873 C 0.868 10.937 0.295 11.417 0.084 12.092 C -0.126 12.769 0.068 13.51 0.581 13.978 L 7.563 20.367 L 5.503 29.83 C 5.354 30.524 5.613 31.245 6.165 31.662 C 6.462 31.886 6.811 32 7.161 32 C 7.463 32 7.764 31.915 8.032 31.747 L 16 26.778 L 23.963 31.747 C 24.546 32.113 25.281 32.08 25.834 31.662 C 26.386 31.243 26.645 30.524 26.494 29.83 L 24.436 20.367 L 31.417 13.978 C 31.931 13.51 32.127 12.769 31.916 12.092 Z M 31.916 12.092"
        />
      </svg>
    `}});window.customElements.define("dt-list",class extends _t{static get styles(){return l`
      :host {
        --number-of-columns: 7;
        font-family: var(--dt-list-font-family, var(--font-family));
        font-size: var(--dt-list-font-size, 15px);
        font-weight: var(--dt-list-font-weight, 300);
        line-height: var(--dt-list-line-height, 1.5);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .section {
        container-type: inline-size;
        background-color: var(--dt-list-background-color, #fefefe);
        border: 1px solid var(--dt-list-border-color, #f1f1f1);
        border-radius: var(--dt-list-border-radius, 10px);
        box-shadow: var(--dt-list-box-shadow, 0 2px 4px rgb(0 0 0 / 25%));
        padding: var(--dt-list-section-padding, 1rem);
      }

      .header {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        gap: var(--dt-list-header-gap, 1.5em);
        flex-wrap: wrap;
      }

      .section-header {
        color: var(--dt-list-header-color, var(--primary-color));
        font-size: 1.5rem;
        display: inline-block;
        text-transform: capitalize;
      }

      .toggleButton {
        color: var(--dt-list-header-color, var(--primary-color));
        font-size: 1rem;
        background: transparent;
        border: var(--dt-list-toggleButton, 0.1em solid rgb(0 0 0 / 0.2));
        border-radius: 0.25em;
        padding: 0.25em 0.5em;
        cursor: pointer;
      }

      .toggleButton svg {
        height: 0.9rem;
        transform: translateY(-2px);
        vertical-align: bottom;
        width: 1rem;
        fill: var(--dt-list-header-color, var(--primary-color));
        stroke: var(--dt-list-header-color, var(--primary-color));
      }

      .list_action_section {
        background-color: var(
          --dt-list-action-section-background-color,
          #ecf5fc
        );
        border-radius: var(--dt-list-border-radius, 10px);
        margin: var(--dt-list-action-section-margin, 30px 0);
        padding: var(--dt-list-action-section-padding, 20px);
      }
      .list_action_section_header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .close-button {
        outline: none;
        font-size: 2.5em;
        line-height: 1;
        color: var(--dt-list-action-close-button, var(--inactive-color));
        background: transparent;
        border: none;
        cursor: pointer;
      }
      .fieldsList {
        list-style-type: none;
        column-count: 1;
      }

      .list-field-picker-item {
        list-style-type: none;
      }

      .list-field-picker-item input {
        margin: 1rem;
      }

      .list-field-picker-item .dt-icon {
        height: var(--dt-list-field-picker-icon-size, 1rem);
        width: var(--dt-list-field-picker-icon-size, 1rem);
      }

      table {
        display: grid;
        border: 1px solid var(--dt-list-border-color, #f1f1f1);
        border-top: 0;
        border-collapse: collapse;
        min-width: 100%;
        grid-template-columns: minmax(32px, 0.1fr) minmax(32px, 0.1fr) minmax(
            50px,
            0.8fr
          );
      }

      table td:last-child {
        border-bottom: 1px solid var(--dt-list-border-color, #f1f1f1);
        padding-bottom: 2rem;
      }

      thead,
      tbody,
      tr {
        display: contents;
      }

      tr {
        cursor: pointer;
      }

      tr:nth-child(2n + 1) {
        background: #f1f1f1;
      }

      tr:hover {
        background-color: var(--dt-list-hover-background-color, #ecf5fc);
      }

      tr a {
        color: var(--dt-list-link-color, var(--primary-color));
      }

      th {
        display: none;
      }

      .column-name {
        pointer-events: none;
      }
      #sort-arrows {
        grid-template-columns: 4fr 1fr;
        display: flex;
        flex-direction: column;
        height: 1.5em;
        justify-content: space-evenly;
      }
      th.all span.sort-arrow-up {
        border-color: transparent transparent
          var(--dt-list-sort-arrow-color, #808080) transparent;
        border-style: solid;
        border-width: 0 0.5em 0.5em 0.5em;
      }

      th.all span.sort-arrow-down {
        content: '';
        border-color: var(--dt-list-sort-arrow-color, #808080) transparent
          transparent;
        border-style: solid;
        border-width: 0.5em 0.5em 0;
      }

      th.all span.sort-arrow-up.sortedBy {
        border-color: transparent transparent
          var(--dt-list-sort-arrow-color-highlight, #999999) transparent;
      }

      th.all span.sort-arrow-down.sortedBy {
        border-color: var(--dt-list-sort-arrow-color-highlight, #999999)
          transparent transparent;
      }

      td {
        border: 0;
        grid-column: 1 / span 3;
        padding-inline-start: 1em;
      }

      td::before {
        content: attr(title) ': ';
        padding-inline-end: 1em;
      }

      td.no-title {
        grid-column: auto;
      }

      td.line-count {
        padding-block-start: 0.8em;
        padding-inline-start: 1em;
      }

      td.bulk_edit_checkbox {
        grid-column: 1 / auto;
      }

      td.no-title::before {
        content: '';
        padding-inline-end: 0.25em;
      }

      th.bulk_edit_checkbox,
      td.bulk_edit_checkbox {
        grid-column: none;
      }

      .bulk_edit_checkbox input {
        display: none;
      }

      .bulk_editing th.bulk_edit_checkbox,
      .bulk_editing td.bulk_edit_checkbox {
        grid-column: 1 / auto;
      }

      .bulk_editing .bulk_edit_checkbox input {
        display: initial;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      ul li {
        list-style-type: none;
      }

      input[type='checkbox'] {
        margin: 1rem;
      }
      @container (min-width: 650px) {
        .fieldsList {
          column-count: 2;
        }
        table {
          grid-template-columns:
            minmax(32px, 0.5fr)
            minmax(32px, 0.5fr)
            minmax(32px, 0.5fr)
            repeat(var(--number-of-columns, 7), minmax(50px, 1fr));
        }

        th {
          position: sticky;
          top: 0;
          background: var(
            --dt-list-header-background-color,
            var(--dt-tile-background-color, #fefefe)
          );
          text-align: start;
          justify-self: start;
          font-weight: normal;
          font-size: 1.1rem;
          color: var(--dt-list-header-color, #0a0a0a);
          white-space: pre-wrap;
          display: grid;
          place-items: center;
          grid-template-columns: 2fr 1fr;
        }

        th:last-child {
          border: 0;
        }
        td {
          display: flex;
          align-items: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-inline-start: 0;
          color: var(--text-color-mid);
          border-bottom: 1px solid var(--dt-list-border-color, #f1f1f1);
          grid-column: auto;
        }
        td::before {
          content: '';
          display: none;
        }
      }
      @container (min-width: 950px) {
        .fieldsList {
          column-count: 3;
        }
      }
      @container (min-width: 1500px) {
        .fieldsList {
          column-count: 4;
        }
      }
    `}static get properties(){return{postType:{type:String},postTypeLabel:{type:String},postTypeSettings:{type:Object,attribute:!0},posts:{type:Array},total:{type:Number},columns:{type:Array},sortedBy:{type:String},loading:{type:Boolean,default:!0},offset:{type:Number},showArchived:{type:Boolean,default:!1},showFieldsSelector:{type:Boolean,default:!1},showBulkEditSelector:{type:Boolean,default:!1},nonce:{type:String}}}constructor(){super(),this.sortedBy="name"}firstUpdated(){this.nonce&&!this.api&&(this.api=new xt(this.nonce))}async _getPosts(t=0,e="name",o="desc"){this.loading=!0,this.filteredOptions=[];const n=encodeURI(`?offset=${t}&sortBy=${`${"desc"===o?"-":""}${e}`}&offset=${t}${this.columns.map((t=>`&fields_to_return=${t}`)).join("")}`);return await this.api.makeRequestOnPosts("GET",`${this.postType}${n}`)}_headerClick(t){const e=t.target.dataset.id;this._getPosts(this.offset?this.offset:0,e).then((t=>{this.posts=t,this.sortedBy=e}))}_bulkEdit(){this.showBulkEditSelector=!this.showBulkEditSelector}_fieldsEdit(){this.showFieldsSelector=!this.showFieldsSelector}_toggleShowArchived(){this.showArchived=!this.showArchived}_sortArrowsClass(t){return this.sortedBy===t?"sortedBy":""}_sortArrowsToggle(t){return this.sortedBy!==`-${t}`?`-${t}`:t}_headerTemplate(){return D`
      <thead>
        <tr>
          <th id="bulk_edit_master" class="bulk_edit_checkbox">
            <input
              type="checkbox"
              name="bulk_send_app_id"
              value=""
              id="bulk_edit_master_checkbox"
            />
          </th>

          <th></th>

          ${Ct(this.columns,(t=>D`<th
                class="all"
                data-id="${this._sortArrowsToggle(t)}"
                @click=${this._headerClick}
              >
                <span class="column-name"
                  >${this.postTypeSettings[t].name}</span
                >
                <span id="sort-arrows">
                  <span
                    class="sort-arrow-up ${this._sortArrowsClass(`-${t}`)}"
                    data-id="-${t}"
                  ></span>
                  <span
                    class="sort-arrow-down ${this._sortArrowsClass(t)}"
                    data-id="${t}"
                  ></span>
                </span>
              </th>`))}
        </tr>
      </thead>
    `}_rowTemplate(){return Ct(this.posts,((t,e)=>this.showArchived||!this.showArchived&&"closed"!==t.overall_status.key?D`
          <tr class="dnd-moved" data-link="${this.posts.permalink}">
            <td class="bulk_edit_checkbox no-title">
              <input type="checkbox" name="bulk_edit_id" .value="${t.ID}" />
            </td>
            <td class="no-title line-count">${e+1}.</td>

            ${this._cellTemplate(t)}
          </tr>
        `:null))}_cellTemplate(t){return Ct(this.columns,(e=>{if(["text","textarea","number"].includes(this.postTypeSettings[e].type))return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          <a href="${t[e]}" title="test">${t[e]}</a>
        </td>`;if("date"===this.postTypeSettings[e].type)return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          ${t[e].formatted}
        </td>`;if("user_select"===this.postTypeSettings[e].type&&t[e]&&t[e].display)return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          ${Wo(t[e].display)}
        </td>`;if("key_select"===this.postTypeSettings[e].type&&t[e]&&(t[e].label||t[e].name))return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          ${t[e].label||t[e].name}
        </td>`;if("multi_select"===this.postTypeSettings[e].type||"tags"===this.postTypeSettings[e].type&&t[e]&&t[e].length>0)return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          <ul>
            ${Ct(t[e],(t=>D`<li>
                  ${this.postTypeSettings[e].default[t].label}
                </li>`))}
          </ul>
        </td>`;if("location"===this.postTypeSettings[e].type||"location_meta"===this.postTypeSettings[e].type)return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          ${Wo(t[e].label)}
        </td>`;if("communication_channel"===this.postTypeSettings[e].type)return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          ${Wo(t[e].value)}
        </td>`;if("connection"===this.postTypeSettings[e].type)return D` <td
          dir="auto"
          title="${this.postTypeSettings[e].name}"
        >
          <!-- TODO: look at this, it doesn't match the current theme. -->
          ${Wo(t[e].value)}
        </td>`;if("boolean"===this.postTypeSettings[e].type){if("favorite"===e)return D`<td
            dir="auto"
            title="${this.postTypeSettings[e].name}"
            class=""
          >
            <dt-star postID=${t.ID} ?selected=${t.favorite}></dt-star>
          </td>`;if(!0===this.postTypeSettings[e])return D`<td
            dir="auto"
            title="${this.postTypeSettings[e].name}"
          >
            ['&check;']
          </td>`}return D`<td
        dir="auto"
        title="${this.postTypeSettings[e].name}"
      ></td>`}))}_fieldListIconTemplate(t){return this.postTypeSettings[t].icon?D`<img
        class="dt-icon"
        src="${this.postTypeSettings[t].icon}"
        alt="${this.postTypeSettings[t].name}"
      />`:null}_fieldsListTemplate(){return Ft(Object.keys(this.postTypeSettings).sort(((t,e)=>{const o=this.postTypeSettings[t].name.toUpperCase(),n=this.postTypeSettings[e].name.toUpperCase();return o<n?-1:o>n?1:0})),(t=>t),(t=>this.postTypeSettings[t].hidden?null:D`<li class="list-field-picker-item">
            <label>
              <input
                type="checkbox"
                id="${t}"
                name="${t}"
                .value="${t}"
                @change=${this._updateFields}
                ?checked=${this.columns.includes(t)}
              />
              ${this._fieldListIconTemplate(t)}
              ${this.postTypeSettings[t].name}</label
            >
          </li> `))}_fieldsSelectorTemplate(){return this.showFieldsSelector?D`<div
        id="list_column_picker"
        class="list_field_picker list_action_section"
      >
        <div class="list_action_section_header">
          <p style="font-weight:bold">
            ${(0,vt.ab)("Choose which fields to display as columns in the list")}
          </p>
          <button
            class="close-button list-action-close-button"
            data-close="list_column_picker"
            aria-label="Close modal"
            type="button"
            @click=${this._fieldsEdit}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <ul class="fieldsList">
          ${this._fieldsListTemplate()}
        </ul>
      </div>`:null}_updateFields(t){const e=t.target.value,o=this.columns;o.includes(e)?(o.filter((t=>t!==e)),o.splice(o.indexOf(e),1)):o.push(e),this.columns=o,this.style.setProperty("--number-of-columns",this.columns.length-1),this.requestUpdate()}_bulkSelectorTemplate(){return this.showBulkEditSelector?D`<div id="bulk_edit_picker" class="list_action_section">
        <div class="list_action_section_header">
          <p style="font-weight:bold">
            ${(0,vt.ab)(vt.gx`Select all the ${this.postType} you want to update from the list, and update them below`)}
          </p>
          <button
            class="close-button list-action-close-button"
            aria-label="Close modal"
            type="button"
            @click=${this._bulkEdit}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <ul class="fieldsList">
          This is where the bulk edit form will go.
        </ul>
      </div>`:null}connectedCallback(){super.connectedCallback(),this.posts||this._getPosts().then((t=>{this.posts=t}))}render(){const t={bulk_editing:this.showBulkEditSelector,hidden:!1},e=D`
      <svg viewBox="0 0 100 100" fill="#000000" style="enable-background:new 0 0 100 100;" xmlns="http://www.w3.org/2000/svg">
        <line style="stroke-linecap: round; paint-order: fill; fill: none; stroke-width: 15px;" x1="7.97" y1="50.199" x2="76.069" y2="50.128" transform="matrix(0.999999, 0.001017, -0.001017, 0.999999, 0.051038, -0.042708)"/>
        <line style="stroke-linecap: round; stroke-width: 15px;" x1="7.97" y1="17.751" x2="92.058" y2="17.751"/>
        <line style="stroke-linecap: round; stroke-width: 15px;" x1="7.97" y1="82.853" x2="42.343" y2="82.853"/>
        <polygon style="stroke-linecap: round; stroke-miterlimit: 1; stroke-linejoin: round; fill: rgb(255, 255, 255); paint-order: stroke; stroke-width: 9px;" points="22.982 64.982 33.592 53.186 50.916 70.608 82.902 21.308 95 30.85 52.256 95"/>
      </svg>
    `,o=D`<svg height='100px' width='100px'  fill="#000000" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><g i:extraneous="self"><g><path d="M94.4,63c0-5.7-3.6-10.5-8.6-12.5V7.3c0-2.7-2.2-4.8-4.8-4.8c-2.7,0-4.8,2.2-4.8,4.8v43.2c-5,1.9-8.6,6.8-8.6,12.5     s3.6,10.5,8.6,12.5v17.2c0,2.7,2.2,4.8,4.8,4.8c2.7,0,4.8-2.2,4.8-4.8V75.5C90.9,73.6,94.4,68.7,94.4,63z M81,66.7     c-2,0-3.7-1.7-3.7-3.7c0-2,1.7-3.7,3.7-3.7s3.7,1.7,3.7,3.7C84.7,65.1,83.1,66.7,81,66.7z"></path><path d="M54.8,24.5V7.3c0-2.7-2.2-4.8-4.8-4.8c-2.7,0-4.8,2.2-4.8,4.8v17.2c-5,1.9-8.6,6.8-8.6,12.5s3.6,10.5,8.6,12.5v43.2     c0,2.7,2.2,4.8,4.8,4.8c2.7,0,4.8-2.2,4.8-4.8V49.5c5-1.9,8.6-6.8,8.6-12.5S59.8,26.5,54.8,24.5z M50,40.7c-2,0-3.7-1.7-3.7-3.7     c0-2,1.7-3.7,3.7-3.7c2,0,3.7,1.7,3.7,3.7C53.7,39.1,52,40.7,50,40.7z"></path><path d="M23.8,50.5V7.3c0-2.7-2.2-4.8-4.8-4.8c-2.7,0-4.8,2.2-4.8,4.8v43.2c-5,1.9-8.6,6.8-8.6,12.5s3.6,10.5,8.6,12.5v17.2     c0,2.7,2.2,4.8,4.8,4.8c2.7,0,4.8-2.2,4.8-4.8V75.5c5-1.9,8.6-6.8,8.6-12.5S28.8,52.5,23.8,50.5z M19,66.7c-2,0-3.7-1.7-3.7-3.7     c0-2,1.7-3.7,3.7-3.7c2,0,3.7,1.7,3.7,3.7C22.7,65.1,21,66.7,19,66.7z"></path></g></g></g></svg>`;return D`
      <div class="section">
        <div class="header">
          <div class="section-header">
            <span
              class="section-header posts-header"
              style="display: inline-block"
              >${(0,vt.ab)(vt.gx`${this.postTypeLabel?this.postTypeLabel:this.postType} List`)}</span
            >
          </div>
          <span class="filter-result-text"
            >${(0,vt.ab)(vt.gx`Showing 1 of ${this.total}`)}</span
          >

          <button
            class="bulkToggle toggleButton"
            id="bulk_edit_button"
            @click=${this._bulkEdit}
          >
            ${e} ${(0,vt.ab)("Bulk Edit")}
          </button>
          <button
            class="fieldsToggle toggleButton"
            id="fields_edit_button"
            @click=${this._fieldsEdit}
          >
            ${o} ${(0,vt.ab)("Fields")}
          </button>

          <dt-toggle
            name="showArchived"
            label=${(0,vt.ab)("Show Archived")}
            ?checked=${this.showArchived}
            hideIcons
            onchange=${this._toggleShowArchived}
            @click=${this._toggleShowArchived}
          ></dt-toggle>
        </div>
        ${this._fieldsSelectorTemplate()} ${this._bulkSelectorTemplate()}
        <table class=${gt(t)}>
          ${this._headerTemplate()}
          ${this.posts?this._rowTemplate():(0,vt.ab)("Loading")}
        </table>
      </div>
    `}});var Zo,Jo,Qo,Yo,Xo,tn,en,on,nn,rn,sn,an;function ln(t){return ln="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ln(t)}function cn(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function dn(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?cn(Object(o),!0).forEach((function(e){wn(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):cn(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function un(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function hn(){hn=function(){return e};var t,e={},o=Object.prototype,n=o.hasOwnProperty,i=Object.defineProperty||function(t,e,o){t[e]=o.value},r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,o){return t[e]=o}}function d(t,e,o,n){var r=e&&e.prototype instanceof v?e:v,s=Object.create(r.prototype),a=new C(n||[]);return i(s,"_invoke",{value:S(t,o,a)}),s}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",p="suspendedYield",f="executing",m="completed",g={};function v(){}function b(){}function y(){}var w={};c(w,s,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==o&&n.call(_,s)&&(w=_);var k=y.prototype=v.prototype=Object.create(w);function $(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(i,r,s,a){var l=u(t[i],t,r);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==ln(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,s,a)}),(function(t){o("throw",t,s,a)})):e.resolve(d).then((function(t){c.value=t,s(c)}),(function(t){return o("throw",t,s,a)}))}a(l.arg)}var r;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){o(t,n,e,i)}))}return r=r?r.then(i,i):i()}})}function S(e,o,n){var i=h;return function(r,s){if(i===f)throw Error("Generator is already running");if(i===m){if("throw"===r)throw s;return{value:t,done:!0}}for(n.method=r,n.arg=s;;){var a=n.delegate;if(a){var l=E(a,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=u(e,o,n);if("normal"===c.type){if(i=n.done?m:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=m,n.method="throw",n.arg=c.arg)}}}function E(e,o){var n=o.method,i=e.iterator[n];if(i===t)return o.delegate=null,"throw"===n&&e.iterator.return&&(o.method="return",o.arg=t,E(e,o),"throw"===o.method)||"return"!==n&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var r=u(i,e.iterator,o.arg);if("throw"===r.type)return o.method="throw",o.arg=r.arg,o.delegate=null,g;var s=r.arg;return s?s.done?(o[e.resultName]=s.value,o.next=e.nextLoc,"return"!==o.method&&(o.method="next",o.arg=t),o.delegate=null,g):s:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var o=e[s];if(o)return o.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,r=function o(){for(;++i<e.length;)if(n.call(e,i))return o.value=e[i],o.done=!1,o;return o.value=t,o.done=!0,o};return r.next=r}}throw new TypeError(ln(e)+" is not iterable")}return b.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:b,configurable:!0}),b.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},$(O.prototype),c(O.prototype,a,(function(){return this})),e.AsyncIterator=O,e.async=function(t,o,n,i,r){void 0===r&&(r=Promise);var s=new O(d(t,o,n,i),r);return e.isGeneratorFunction(o)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},$(k),c(k,l,"Generator"),c(k,s,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),o=[];for(var n in e)o.push(n);return o.reverse(),function t(){for(;o.length;){var n=o.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var o in this)"t"===o.charAt(0)&&n.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var o=this;function i(n,i){return a.type="throw",a.arg=e,o.next=n,i&&(o.method="next",o.arg=t),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var l=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),j(o),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var i=n.arg;j(o)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,o,n){return this.delegate={iterator:A(e),resultName:o,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function pn(t,e,o,n,i,r,s){try{var a=t[r](s),l=a.value}catch(t){return void o(t)}a.done?e(l):Promise.resolve(l).then(n,i)}function fn(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,xn(n.key),n)}}function mn(t,e,o){return e=yn(e),function(t,e){if(e&&("object"===ln(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,gn()?Reflect.construct(e,o||[],yn(t).constructor):e.apply(t,o))}function gn(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(gn=function(){return!!t})()}function vn(t,e){return vn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},vn(t,e)}function bn(){return bn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=yn(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:o):i.value}},bn.apply(this,arguments)}function yn(t){return yn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},yn(t)}function wn(t,e,o){return(e=xn(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function xn(t){var e=function(t,e){if("object"!=ln(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=ln(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==ln(e)?e:e+""}window.customElements.define("dt-tile",class extends _t{static get styles(){return l`
      :host {
        font-family: var(--dt-tile-font-family, var(--font-family));
        font-size: var(--dt-tile-font-size, 14px);
        font-weight: var(--dt-tile-font-weight, 700);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      section {
        background-color: var(--dt-tile-background-color, #fefefe);
        border-top: var(--dt-tile-border-top, 1px solid #cecece);
        border-bottom: var(--dt-tile-border-bottom, 1px solid #cecece);
        border-right: var(--dt-tile-border-right, 1px solid #cecece);
        border-left: var(--dt-tile-border-left, 1px solid #cecece);
        border-radius: var(--dt-tile-border-radius, 10px);
        box-shadow: var(--dt-tile-box-shadow, 0 2px 4px rgb(0 0 0 / 25%));
        padding: 1rem;
        margin: var(--dt-tile-margin, 0); 
      }

      h3 {
        line-height: 1.4;
        margin: var(--dt-tile-header-margin, 0 0 0.5rem 0);
        text-rendering: optimizeLegibility;
        font-family: var(--dt-tile-font-family, var(--font-family));
        font-style: normal;
        font-weight: var(--dt-tile-header-font-weight, 300);
      }

      .section-header {
        color: var(--dt-tile-header-color, #3f729b);
        font-size: 1.5rem;
        display: flex;
        text-transform: var(--dt-tile-header-text-transform, capitalize);
        justify-content: var(--dt-tile-header-justify-content);
      }

      .section-body {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        column-gap: 1.4rem;
        transition: height 1s ease 0s;
        height: auto;
      }
      .section-body.collapsed {
        height: 0 !important;
        overflow: hidden;
      }

      button.toggle {
        margin-inline-end: 0;
        margin-inline-start: auto;
        background: none;
        border: none;
      }

      .chevron::before {
        border-color: var(--dt-tile-header-color, var(--primary-color));
        border-style: solid;
        border-width: 2px 2px 0 0;
        content: '';
        display: inline-block;
        height: 1em;
        width: 1em;
        left: 0.15em;
        position: relative;
        top: 0.15em;
        transform: rotate(-45deg);
        vertical-align: top;
      }

      .chevron.down:before {
        top: 0;
        transform: rotate(135deg);
      }
    `}static get properties(){return{title:{type:String},expands:{type:Boolean},collapsed:{type:Boolean}}}get hasHeading(){return this.title||this.expands}_toggle(){this.collapsed=!this.collapsed}renderHeading(){return this.hasHeading?D`
        <h3 class="section-header">
          ${this.title}
          ${this.expands?D`
                <button
                  @click="${this._toggle}"
                  class="toggle chevron ${this.collapsed?"down":"up"}"
                >
                  &nbsp;
                </button>
              `:null}
        </h3>
    `:H}render(){return D`
      <section>
        ${this.renderHeading()}
        <div class="section-body ${this.collapsed?"collapsed":null}">
          <slot></slot>
        </div>
      </section>
    `}});var _n,kn,$n=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),wn(t=mn(this,e),"_handleSearch",function(){var e,o=(e=hn().mark((function e(o){var n,i;return hn().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.target===t){e.next=2;break}return e.abrupt("return");case 2:return n={sort:"last_modified"},""!==o.detail.value&&(n.text=o.detail.value),t.showOnlyUnclaimed&&!t.showOnlyClaimed&&(n.claimed=[!1]),t.showOnlyClaimed&&!t.showOnlyUnclaimed&&(n.claimed=[!0]),t.showOnlyUnclaimed&&t.showOnlyClaimed&&console.log("You can't show only unclaimed and only claimed at the same time. Remove one of the attributes to the <smm-conversation-list> element."),t.showOnlyMyConversations&&(n.claimed_by=[t.userid]),t.showOnlyContactConversations&&(n.contacts=[t.showOnlyContactConversations]),e.next=11,window.makeRequestOnPosts("GET","disciple-tools-conversations",n);case 11:i=e.sent,console.log(i),t.conversations=i.posts;case 14:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(n,i){var r=e.apply(t,o);function s(t){pn(r,n,i,s,a,"next",t)}function a(t){pn(r,n,i,s,a,"throw",t)}s(void 0)}))});return function(t){return o.apply(this,arguments)}}()),t.offset=0,t.perPage=10,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&vn(t,e)}(e,t),o=e,n=[{key:"connectedCallback",value:function(){bn(yn(e.prototype),"connectedCallback",this).call(this),window.addEventListener("search",this._handleSearch)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("search",this._handleSearch),bn(yn(e.prototype),"disconnectedCallback",this).call(this)}},{key:"_leftarrowSVG",value:function(){return V(Zo||(Zo=un(['<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.6333 0.46666L4.69997 3.53333C4.76663 3.59999 4.81375 3.67221 4.8413 3.74999C4.8693 3.82777 4.8833 3.9111 4.8833 3.99999C4.8833 4.08888 4.8693 4.17222 4.8413 4.24999C4.81375 4.32777 4.76663 4.39999 4.69997 4.46666L1.6333 7.53333C1.51108 7.65555 1.35552 7.71666 1.16663 7.71666C0.977745 7.71666 0.82219 7.65555 0.699967 7.53333C0.577745 7.4111 0.516634 7.25555 0.516634 7.06666C0.516634 6.87777 0.577746 6.72221 0.699967 6.59999L3.29997 3.99999L0.699968 1.39999C0.577746 1.27777 0.516635 1.12221 0.516635 0.933325C0.516635 0.744437 0.577746 0.588882 0.699968 0.46666C0.82219 0.344437 0.977746 0.283325 1.16663 0.283325C1.35552 0.283325 1.51108 0.344437 1.6333 0.46666Z" fill="var(--gray-1, #B7B7B7)"/></svg>'])))}},{key:"_rightarrowSVG",value:function(){return V(Jo||(Jo=un(['<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.3667 7.53334L0.300032 4.46667C0.233366 4.40001 0.186255 4.32779 0.158699 4.25001C0.130699 4.17223 0.116699 4.0889 0.116699 4.00001C0.116699 3.91112 0.130699 3.82778 0.158699 3.75001C0.186255 3.67223 0.233366 3.60001 0.300032 3.53334L3.3667 0.466674C3.48892 0.344451 3.64448 0.28334 3.83337 0.28334C4.02225 0.28334 4.17781 0.344451 4.30003 0.466674C4.42225 0.588896 4.48337 0.744452 4.48337 0.93334C4.48337 1.12223 4.42225 1.27779 4.30003 1.40001L1.70003 4.00001L4.30003 6.60001C4.42225 6.72223 4.48337 6.87779 4.48337 7.06667C4.48337 7.25556 4.42225 7.41112 4.30003 7.53334C4.17781 7.65556 4.02225 7.71667 3.83337 7.71667C3.64448 7.71667 3.48892 7.65556 3.3667 7.53334Z" fill="var(--gray-1, #B7B7B7)"/></svg>'])))}},{key:"_prevArrowSVG",value:function(){return this.RTL?this._leftarrowSVG():this._rightarrowSVG()}},{key:"_nextArrowSVG",value:function(){return this.RTL?this._rightarrowSVG():this._leftarrowSVG()}},{key:"_paginationRender",value:function(){var t=this,e=Math.ceil(this.conversations.length/this.perPage);return e>1?0===this.offset?D(Qo||(Qo=un(["\n          ",'\n          <button class="button small" @click=',">","</button>"])),this._paginationButtonsRender(e),(function(){return t.offset=t.offset+t.perPage}),this._nextArrowSVG()):this.offset===(e-1)*this.perPage?D(Yo||(Yo=un(['\n        <button class="button small" @click=',">","</button>\n        ",""])),(function(){return t.offset=t.offset-t.perPage}),this._prevArrowSVG(),this._paginationButtonsRender(e)):D(Xo||(Xo=un(['\n      <button class="button small" @click=',">","</button>\n      ",'\n      <button class="button small" @click=',">","</button>"])),(function(){return t.offset=t.offset-t.perPage}),this._prevArrowSVG(),this._paginationButtonsRender(e),(function(){return t.offset=t.offset+t.perPage}),this._nextArrowSVG()):D(tn||(tn=un([""])))}},{key:"_paginationButtonsRender",value:function(t){for(var e=this,o=[],n=function(t){var n={button:!0,small:!0,active:e.offset===t*e.perPage};o.push(D(on||(on=un(['<button class="','" @click=',">","</button>"])),gt(n),(function(){return e.offset=t*e.perPage}),t+1))},i=0;i<t;i++)n(i);return D(en||(en=un(["",""])),o)}},{key:"_headerRender",value:function(){return D(nn||(nn=un(['\n      <span class="smm-list-header-text">\n      \x3c!-- <smm-search id="convoListSearch" name="convoListSearch" value="" type="text" requiredmessage="" privatelabel="" onchange="" internals-valid="" aria-invalid="false"></smm-search> --\x3e\n      </span>\n      '])))}},{key:"render",value:function(){var t=this;return D(rn||(rn=un(['\n      <div class="smm-list-header">\n        ','\n      </div>\n      <ul class="smm-conversation-list">\n      ','\n      </ul>\n      <span class="smm-list-pagination">\n        ',"\n      </span>\n    "])),this.showOnlyCurrentConversation?"":this._headerRender(),Ft(this.conversations.posts,(function(t){return t.ID}),(function(e,o){return t.offset<=o&&o<t.offset+t.perPage?D(sn||(sn=un(["\n        <li><smm-list-item .conversation="," userid=","></smm-list-item></li>\n        "])),e,t.userid):""})),this._paginationRender())}}],i=[{key:"properties",get:function(){return dn(dn({},bn(yn(e),"properties",this)),{},{conversations:{type:Array},offset:{type:Number},perPage:{type:Number},userid:{type:Number},showOnlyUnclaimed:{type:Boolean},showOnlyClaimed:{type:Boolean},showOnlyMyConversations:{type:Boolean},showOnlyContactConversations:{type:Number},showOnlyCurrentConversation:{type:Boolean}})}},{key:"styles",get:function(){return l(an||(an=un(["\n      .smm-conversation-list {\n          list-style: none;\n          margin: 0;\n          margin-bottom: 4rem;\n          padding: 0;\n          border: 1px solid #E6E6E6;\n      }\n      button {\n        border: none;\n        background: none;\n        cursor: pointer;\n        color: var(--gray-1, #B7B7B7);\n        font-size: 1em;\n        padding: .25em 0.5em;\n      }\n\n      button svg {\n        display: block;\n        height: 1em;\n        width: 0.4em;\n      }\n\n      button.active {\n        background: var(--surface-0, e2e2e2);\n        color: var(--text-color, #0a0a0a);\n        border-radius: 5px;\n      }\n      .smm-list-pagination {\n        display: flex;\n        justify-content: center;\n        font-size: 1.5rem;\n      }\n    "])))}}],n&&fn(o.prototype,n),i&&fn(o,i),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n,i}(_t);function On(t){return On="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(t)}function Sn(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function En(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Sn(Object(o),!0).forEach((function(e){Tn(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Sn(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function Tn(t,e,o){return(e=An(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function jn(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Cn(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,An(n.key),n)}}function An(t){var e=function(t,e){if("object"!=On(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=On(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==On(e)?e:e+""}function Pn(t,e,o){return e=In(e),function(t,e){if(e&&("object"===On(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Ln()?Reflect.construct(e,o||[],In(t).constructor):e.apply(t,o))}function Ln(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Ln=function(){return!!t})()}function Mn(t,e){return Mn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Mn(t,e)}function Rn(){return Rn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=In(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:o):i.value}},Rn.apply(this,arguments)}function In(t){return In=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},In(t)}customElements.define("smm-conversation-list",$n);var Nn,Fn,zn=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Pn(this,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Mn(t,e)}(e,t),o=e,i=[{key:"properties",get:function(){return En(En({},Rn(In(e),"properties",this)),{},{conversation:{type:Array},claimed:{type:Boolean},userid:{type:Number}})}},{key:"styles",get:function(){return l(kn||(kn=jn(["\n      :host {\n        --dt-modal-button-background: var(--primary-color);\n        --dt-modal-button-opener-background: var(--primary-color);\n        --dt-modal-button-color: #FFFFFF;\n        --dt-button-font-weight: 100;\n        --dt-button-padding-y: 0em;\n        --dt-button-padding-y: 0.15em;\n        --dt-button-padding-x: 1em;\n        --dt-button-border-radius: 0.25em;\n        --dt-button-font-size: 1em;\n        color: currentcolor;\n        display: block;\n        container-type: inline-size;\n        container-name: line-container;\n      }\n\n      .line-container {\n        display: grid;\n        grid-template-columns: 1.5fr .75fr .75fr;\n        gap: 1em 0.35em;\n        place-items: center;\n        border-bottom: 1px solid rgb(230, 230, 230);\n        padding: 1em 0;\n        margin: 0 0.5em;\n      }\n\n      .mid-line-container {\n        display: flex;\n        flex-flow: column wrap;\n        align-items: center;\n        height: 100%;\n        justify-content: space-around;\n      }\n\n      .name {\n        font-weight: bold;\n      }\n\n      .date {\n        font-size: .75em;\n        align-content: center;\n      }\n\n      .date span {\n        background: var(--smm-list-date-background, #F0F0F0);\n        border-radius: .25em;\n        padding: .5em;\n      }\n\n      .platform {\n        font-size: .75em;\n      }\n      /* dt-button {\n        flex: 1;\n      } */\n\n      @container line-container (min-width: 500px) {\n        .line-container {\n          grid-template-columns: 1fr 1fr 1fr;\n        }\n\n        .mid-line-container {\n          flex-flow: row;\n          width: 100%;\n          justify-content: space-evenly;\n        }\n      }\n    "])))}}],(n=[{key:"connectedCallback",value:function(){Rn(In(e.prototype),"connectedCallback",this).call(this),this.claimed=null!==this.conversation.assigned_to}},{key:"_formatDate",value:function(){var t=new Date(1e3*this.conversation.post_date.timestamp);return new Intl.DateTimeFormat("default",{month:"short",day:"numeric"}).format(t)}},{key:"render",value:function(){var t=this.conversation.first_name||this.conversation.last_name?"".concat(this.conversation.first_name," ").concat(this.conversation.last_name):this.conversation.name;return D(_n||(_n=jn(['<div class="line-container">\n      <div class="name">','</div>\n      <div class="mid-line-container">\n        <div class="date"><span>','</span></div>\n        <div class="platform">','</div>\n      </div>\n\n      <smm-conversation-modal title="" context="default" ?claimed=',' convoid="','" userid=',' conversation="','" buttonclass="{&quot;alert&quot;:true}" buttonstyle="{&quot;padding&quot;:&quot;40px&quot;}">\n        <span slot="content">Test</span>\n        <span slot="openButton">\n          View Conversation\n        </span>\n    </smm-conversation-modal>\n    </div>'])),t,this._formatDate(),this.conversation.type.label,this.claimed,this.conversation.ID,this.userid,JSON.stringify(this.conversation))}}])&&Cn(o.prototype,n),i&&Cn(o,i),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n,i}(_t);function Bn(t){return Bn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(t)}function qn(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Dn(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Vn(n.key),n)}}function Vn(t){var e=function(t,e){if("object"!=Bn(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=Bn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==Bn(e)?e:e+""}function Un(t,e,o){return e=Wn(e),function(t,e){if(e&&("object"===Bn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Hn()?Reflect.construct(e,o||[],Wn(t).constructor):e.apply(t,o))}function Hn(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Hn=function(){return!!t})()}function Gn(){return Gn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Wn(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:o):i.value}},Gn.apply(this,arguments)}function Wn(t){return Wn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wn(t)}function Kn(t,e){return Kn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Kn(t,e)}customElements.define("smm-list-item",zn);var Zn,Jn,Qn=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Un(this,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Kn(t,e)}(e,t),o=e,i=[{key:"properties",get:function(){return{conversation:{type:Object},open:{type:Boolean},claimed:{type:Boolean},convoid:{type:Number},userid:{type:Number}}}},{key:"styles",get:function(){return l(Fn||(Fn=qn(["\n      :host {\n      }\n      dialog {\n        width: 90vw;\n        height: 90vh;\n        padding: 0;\n      }\n      dialog::backdrop {\n        background: rgba(0, 0, 0, 0.7);\n      }\n      "])))}}],(n=[{key:"connectedCallback",value:function(){Gn(Wn(e.prototype),"connectedCallback",this).call(this)}},{key:"render",value:function(){return D(Nn||(Nn=qn(['\n    <dialog\n        id=""\n        class="dt-modal"\n        @click=',"\n        @keypress=","\n      >\n        <smm-chat-window ?claimed="," convoid="," userid="," conversation=",'></smm-chat-window>\n\n    </dialog>\n    <button\n      class="button small opener"\n      data-open=""\n      aria-label="Open reveal"\n      type="button"\n      @click="','"\n    >\n      <slot name="openButton">',"</slot>\n    </button>\n    "])),this._dialogClick,this._dialogKeypress,this.claimed,this.convoid,this.userid,JSON.stringify(this.conversation),this._openModal,(0,vt.ab)("Open Dialog"))}}])&&Dn(o.prototype,n),i&&Dn(o,i),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n,i}(Go);function Yn(t){return Yn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(t)}function Xn(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function ti(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Xn(Object(o),!0).forEach((function(e){ei(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Xn(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function ei(t,e,o){return(e=ii(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function oi(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function ni(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,ii(n.key),n)}}function ii(t){var e=function(t,e){if("object"!=Yn(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=Yn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==Yn(e)?e:e+""}function ri(t,e,o){return e=ci(e),function(t,e){if(e&&("object"===Yn(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,si()?Reflect.construct(e,o||[],ci(t).constructor):e.apply(t,o))}function si(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(si=function(){return!!t})()}function ai(t,e){return ai=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ai(t,e)}function li(){return li="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ci(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:o):i.value}},li.apply(this,arguments)}function ci(t){return ci=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ci(t)}window.customElements.define("smm-conversation-modal",Qn);var di,ui,hi,pi,fi,mi,gi=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=ri(this,e)).placeholder="Search",t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ai(t,e)}(e,t),o=e,n=[{key:"search",value:function(t){console.log(t);var e=t.target;if(e.value!==this.value){this.value=e.value;var o=new CustomEvent("search",{detail:{value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(o)}}},{key:"render",value:function(){var t=this;return D(Zn||(Zn=oi(['\n    <div class="search">\n        <input\n          class="search_input"\n          value="','"\n          placeholder="','"\n          @change="','"\n        />\n        <dt-icon\n          class="search_icon"\n          icon="ic:outline-search"\n          @click="','"\n        ></dt-icon>\n      </div>'])),this.value,this.placeholder,(function(e){return t.search(e)}),this.search)}}],i=[{key:"properties",get:function(){return ti(ti({},li(ci(e),"properties",this)),{},{value:{type:String},placeholder:{type:String}})}},{key:"styles",get:function(){return[li(ci(e),"styles",this),l(Jn||(Jn=oi(["\n      :host {\n        --dt-text-background-color: var(--surface-1);\n        --dt-text-border-color: none;\n        --dt-form-padding: 0 1em;\n      }\n      .search {\n        display: flex;\n        align-items: center;\n        height: 3rem;\n      }\n\n      .search_input {\n        flex: 1;\n        height: 100%;\n      }\n\n      .search_icon {\n        width: 2.5rem;\n        height: 100%;\n        text-align: center;\n        font-size: 2rem;\n      }\n    "])))]}}],n&&ni(o.prototype,n),i&&ni(o,i),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n,i}(Ko);function vi(t){return vi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(t)}function bi(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function yi(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?bi(Object(o),!0).forEach((function(e){wi(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):bi(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function wi(t,e,o){return(e=Ti(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function xi(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return _i(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _i(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==o.return||o.return()}finally{if(a)throw r}}}}function _i(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function ki(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function $i(){$i=function(){return e};var t,e={},o=Object.prototype,n=o.hasOwnProperty,i=Object.defineProperty||function(t,e,o){t[e]=o.value},r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,o){return t[e]=o}}function d(t,e,o,n){var r=e&&e.prototype instanceof v?e:v,s=Object.create(r.prototype),a=new C(n||[]);return i(s,"_invoke",{value:S(t,o,a)}),s}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",p="suspendedYield",f="executing",m="completed",g={};function v(){}function b(){}function y(){}var w={};c(w,s,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(A([])));_&&_!==o&&n.call(_,s)&&(w=_);var k=y.prototype=v.prototype=Object.create(w);function $(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(i,r,s,a){var l=u(t[i],t,r);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==vi(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,s,a)}),(function(t){o("throw",t,s,a)})):e.resolve(d).then((function(t){c.value=t,s(c)}),(function(t){return o("throw",t,s,a)}))}a(l.arg)}var r;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){o(t,n,e,i)}))}return r=r?r.then(i,i):i()}})}function S(e,o,n){var i=h;return function(r,s){if(i===f)throw Error("Generator is already running");if(i===m){if("throw"===r)throw s;return{value:t,done:!0}}for(n.method=r,n.arg=s;;){var a=n.delegate;if(a){var l=E(a,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=u(e,o,n);if("normal"===c.type){if(i=n.done?m:p,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=m,n.method="throw",n.arg=c.arg)}}}function E(e,o){var n=o.method,i=e.iterator[n];if(i===t)return o.delegate=null,"throw"===n&&e.iterator.return&&(o.method="return",o.arg=t,E(e,o),"throw"===o.method)||"return"!==n&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var r=u(i,e.iterator,o.arg);if("throw"===r.type)return o.method="throw",o.arg=r.arg,o.delegate=null,g;var s=r.arg;return s?s.done?(o[e.resultName]=s.value,o.next=e.nextLoc,"return"!==o.method&&(o.method="next",o.arg=t),o.delegate=null,g):s:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var o=e[s];if(o)return o.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,r=function o(){for(;++i<e.length;)if(n.call(e,i))return o.value=e[i],o.done=!1,o;return o.value=t,o.done=!0,o};return r.next=r}}throw new TypeError(vi(e)+" is not iterable")}return b.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:b,configurable:!0}),b.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},$(O.prototype),c(O.prototype,a,(function(){return this})),e.AsyncIterator=O,e.async=function(t,o,n,i,r){void 0===r&&(r=Promise);var s=new O(d(t,o,n,i),r);return e.isGeneratorFunction(o)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},$(k),c(k,l,"Generator"),c(k,s,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),o=[];for(var n in e)o.push(n);return o.reverse(),function t(){for(;o.length;){var n=o.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var o in this)"t"===o.charAt(0)&&n.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var o=this;function i(n,i){return a.type="throw",a.arg=e,o.next=n,i&&(o.method="next",o.arg=t),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var l=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),j(o),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var i=n.arg;j(o)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,o,n){return this.delegate={iterator:A(e),resultName:o,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function Oi(t,e,o,n,i,r,s){try{var a=t[r](s),l=a.value}catch(t){return void o(t)}a.done?e(l):Promise.resolve(l).then(n,i)}function Si(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var r=t.apply(e,o);function s(t){Oi(r,n,i,s,a,"next",t)}function a(t){Oi(r,n,i,s,a,"throw",t)}s(void 0)}))}}function Ei(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Ti(n.key),n)}}function Ti(t){var e=function(t,e){if("object"!=vi(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=vi(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==vi(e)?e:e+""}function ji(t,e,o){return e=Li(e),function(t,e){if(e&&("object"===vi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Ci()?Reflect.construct(e,o||[],Li(t).constructor):e.apply(t,o))}function Ci(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Ci=function(){return!!t})()}function Ai(t,e){return Ai=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Ai(t,e)}function Pi(){return Pi="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Li(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:o):i.value}},Pi.apply(this,arguments)}function Li(t){return Li=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Li(t)}window.customElements.define("smm-search",gi);var Mi,Ri,Ii,Ni,Fi=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=ji(this,e)).apiRoot=window.wpApiShare.root.replace(window.wpApiShare.site_url,""),t.nonce=window.wpApiShare.nonce,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ai(t,e)}(e,t),o=e,n=[{key:"connectedCallback",value:function(){var t=this;Pi(Li(e.prototype),"connectedCallback",this).call(this),this.api=new window.WebComponentServices.ApiService(this.nonce,this.apiRoot),this._initMessages(),document.addEventListener("commentsRetrieved",(function(e){t.getPostComments()}))}},{key:"_initMessages",value:(s=Si($i().mark((function t(){return $i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getPostComments();case 2:this.comment_polling();case 3:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){Pi(Li(e.prototype),"disconnectedCallback",this).call(this),document.removeEventListener("commentsRetrieved",this.getPostComments())}},{key:"comment_polling",value:function(){var t=this;console.log("Polling for new comments");var e,o=new Date("".concat(this.conversation_messages.comments[0].comment_date_gmt,"Z")),n=(new Date-o)/6e4;e=n>5&&n<15?6e4:n>15?3e5:5e3,this.getPostComments(),setTimeout((function(){t.comment_polling()}),e)}},{key:"ChatButtonClick",value:function(t){var e=this,o=this.shadowRoot.querySelector("textarea").value;this.api.createComment("conversations",this.convoid,o,"whatsapp").then((function(t){e.getPostComments(),e.shadowRoot.querySelector("textarea").value=""}))}},{key:"getPostComments",value:(r=Si($i().mark((function t(){var e;return $i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api.getComments("conversations",this.convoid);case 2:e=t.sent,this.conversation_messages=e,console.log(this.conversation_messages);case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"claimConvo",value:function(){var t=this,e={assigned_to:this.userid};this.api.updatePost("conversations",this.convoid,e).then((function(e){t.conversation=e,t.claimed=!0}))}},{key:"unclaimConvo",value:function(){var t=this;this.api.updatePost("conversations",this.convoid,{assigned_to:""}).then((function(e){t.conversation=e,t.claimed=!1}))}},{key:"_moreActions",value:function(){this.moreActionOpen?this.moreActionOpen=!1:this.moreActionOpen=!0}},{key:"_chatWindowFooterRender",value:function(){return this.conversation.assigned_to?this.userid!=this.conversation.assigned_to.id?D(di||(di=ki(["\n            <span>This Conversation is claimed by another user</span>\n            <button @click=",">Claim this Conversation</button>"])),this.claimConvo):D(ui||(ui=ki(['<textarea\n            id="smm-chat-input"\n            name="smm-chat-input"\n            aria-label="Chat Response Input"\n            type="text"\n            ?disabled=','\n            class="text-input"\n            @change=','\n            .value="','"\n          ></textarea>\n          <button class="send-button" @click=',">Send</button>"])),this.disabled,this.onChange,this.value||"",this.ChatButtonClick):D(hi||(hi=ki(["<button @click=",">Claim this Conversation</button>"])),this.claimConvo)}},{key:"render",value:function(){var t=[];if(this.conversation_messages){var e,o=xi(this.conversation_messages.comments);try{for(o.s();!(e=o.n()).done;){var n=e.value;t.push(D(pi||(pi=ki(["<smm-chat-message .message="," .incomingMessage="," ></smm-chat-message>"])),n,n.comment_author===this.conversation.name))}}catch(t){o.e(t)}finally{o.f()}t.reverse()}var i={display:this.moreActionOpen?"grid":"none"},r=this.conversation.first_name||this.conversation.last_name?"".concat(this.conversation.first_name," ").concat(this.conversation.last_name):this.conversation.name;return D(fi||(fi=ki(['\n      <div class="chat-window">\n        <div class="chat-window__header">\n          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" height="250px" width="250px" alt="John Smith" class="avatar"/>\n          <h1 class="name">','</h1>\n          <span class="channel">','</span>\n          \x3c!-- <span class="age">25 years old</span> --\x3e\n\n          <div class="action-buttons container">\n              <button>\n                <dt-icon class="delete_icon" icon="material-symbols:delete-outline"></dt-icon>\n              </button>\n              <button>\n                <dt-icon class="check_icon" icon="material-symbols:check-small"></dt-icon>\n              </button>\n              <button>\n                <dt-icon class="more_icon" icon="material-symbols:more-vert" @click=','></dt-icon>\n              </button>\n              <ul id="moreActions"  style=',">\n                <li><button @click=",">Release This Conversation</button></li>\n                <li><button @click=",'>Claim This Conversation for yourself</button></li>\n              </ul>\n          </div>\n\n        </div>\n        <div class="conversation">\n          ','\n          <div id="anchor"></div>\n        </div>\n        <div class="chat-window__footer">\n          ',"\n        </div>\n      </div>\n    "])),r,this.conversation.type.label,this._moreActions,Ot(i),this.unclaimConvo,this.claimConvo,t,this._chatWindowFooterRender())}}],i=[{key:"styles",get:function(){return l(mi||(mi=ki(["\n      :host {\n      }\n      .chat-window {\n        display: flex;\n        flex-direction: column;\n        height: 90dvh;\n        width: 100%;\n      }\n      .chat-window__header {\n        flex: 1;\n        display: grid;\n        grid-template-columns: 1fr 2fr 1fr;\n        gap: 0em 1em;\n        border-bottom: 1px solid var(--border-color);\n        line-height: 1em;\n        padding: 1em 0.25em;\n      }\n      .chat-window__header .avatar {\n        width: clamp(3em, 100%, 5em);\n        height: clamp(3em, 100%, 5em);\n        aspect-ratio: 1 / 1;\n        border-radius: 50%;\n        grid-area: 1 / 1 / span 3 / auto;\n        justify-self: flex-start;\n        place-self: center;\n      }\n      .chat-window__header h1 {\n        margin: 0;\n        line-height: 1;\n        font-size: clamp(1.5em, 2vw, 2em);\n        color: var(--primary-color);\n        grid-row: 1;\n        grid-column: 2;\n      }\n\n      .chat-window__header .channel {\n        grid-column: 2;\n        grid-row: 2;\n      }\n\n      .chat-window__header .age {\n        grid-column: 2;\n        grid-row: 3;\n      }\n\n      .chat-window__header .action-buttons.container {\n        grid-column: 3;\n        grid-row: span 3;\n        display: flex;\n        gap: 5px;\n        padding: 0.25em;\n        place-self: center;\n      }\n\n      #moreActions {\n        display: none;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        transform: translate(0, 2.5em);\n        width: 7.5em;\n        position: absolute;\n        background: var(--gray-1);\n      }\n\n      #moreAction.open {\n        display: grid;\n      }\n\n      #moreActions li {\n        display: block;\n        width: 100%;\n        height: 3em;\n      }\n\n      #moreActions li button {\n        width: 100%;\n        height: 100%;\n        display: block;\n      }\n\n      .chat-window__header .action-buttons.container button {\n        width: 2.5em;\n        height: 2.5em;\n        padding: 0;\n      }\n\n      .chat-window__header .action-buttons.container button dt-icon {\n        font-size: clamp(1.5em, 2vw, 2em);\n      }\n\n      .conversation {\n        flex: 10;\n        padding: 1em 0;\n        height: 50dvh;\n        overflow-y: scroll;\n        overscroll-behavior-y: contain;\n        scroll-snap-type: y proximity;\n      }\n\n      .conversation * {\n        overflow-anchor: none;\n      }\n\n      #anchor {\n        scroll-snap-align: end;\n        height: 1px;\n      }\n\n      .chat-window__footer {\n        flex: 1 2 0px;\n        border-top: 1px solid var(--border-color);\n        display: grid;\n        grid-template-columns: 10fr 1fr;\n        gap: 10px;\n        padding: 1em 0.5em 1em 1em;\n        place-content: center space-between;\n        place-items: stretch;\n        align-items: center;\n      }\n\n      .chat-window__footer textarea {\n        grid-row-start: 1;\n        grid-column-start: 1;\n        border-radius: 0.25em;\n        border: 1px solid var(--border-color);\n        resize: none;\n        padding: 1em;\n      }\n\n      .chat-window__footer .send-button {\n        background: var(--primary-color);\n        border: none;\n        color: var(--text-color-inverse);\n        height: 3.5em;\n        width: 3.5em;\n        border-radius: 50%;\n        grid-row-start: 1;\n        grid-column-start: 2;\n        justify-self: center;\n      }\n      "])))}},{key:"properties",get:function(){return yi(yi({},Pi(Li(e),"properties",this)),{},{message:{type:Object},open:{type:Boolean},claimed:{type:Boolean},convoid:{type:Number},userid:{type:Number},conversation:{type:Object},conversation_messages:{type:Array},moreActionOpen:{type:Boolean}})}}],n&&Ei(o.prototype,n),i&&Ei(o,i),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n,i,r,s}(_t);function zi(t){return zi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zi(t)}function Bi(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function qi(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Di(n.key),n)}}function Di(t){var e=function(t,e){if("object"!=zi(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=zi(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==zi(e)?e:e+""}function Vi(t,e,o){return e=Hi(e),function(t,e){if(e&&("object"===zi(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,Ui()?Reflect.construct(e,o||[],Hi(t).constructor):e.apply(t,o))}function Ui(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(Ui=function(){return!!t})()}function Hi(t){return Hi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Hi(t)}function Gi(t,e){return Gi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},Gi(t,e)}window.customElements.define("smm-chat-window",Fi);var Wi=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Vi(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Gi(t,e)}(e,t),o=e,i=[{key:"styles",get:function(){return l(Ni||(Ni=Bi(["\n      :host {\n        --smm-incoming-message-background: var(--gray-1, #919191);\n        --smm-outgoing-message-background: var(--success-color, #4caf50);\n      }\n      .chat-message {\n        display: flex;\n        align-items: flex-end;\n        margin-bottom: 1em;\n        flex-direction: row-reverse;\n      }\n\n      .chat-message__avatar {\n        width: clamp(3em, 5vw, 5em);\n      }\n\n      .chat-message__avatar img {\n        width: 100%;\n        border-radius: 50%;\n      }\n\n      .chat-message__body {\n        max-width: clamp(10em, 52vw, 60%);\n        padding: 1em;\n        border-radius: 1em;\n        /* @todo make this right to left compatible */\n        border-bottom-right-radius: 0;\n        background: var(--smm-outgoing-message-background);\n      }\n\n      .chat-message__header {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n\n      .chat-message__name {\n        font-weight: bold;\n        font-size: 1.1em;\n      }\n      .chat-message.incoming {\n        flex-direction: row;\n      }\n\n      .chat-message.incoming .chat-message__body {\n        background: var(--smm-incoming-message-background);\n        /* @todo make this right to left compatible */\n        border-bottom-right-radius: 1em;\n        border-bottom-left-radius: 0;\n      }\n      "])))}},{key:"properties",get:function(){return{message:{type:Object},incomingMessage:{type:Boolean}}}}],(n=[{key:"_formatDate",value:function(t){var e=new Date(t);return new Intl.DateTimeFormat("default",{month:"short",day:"numeric"}).format(e)}},{key:"render",value:function(){var t={incoming:this.incomingMessage,outgoing:!1,"chat-message":!0};return D(Mi||(Mi=Bi(['\n      <div class="','">\n          <div class="chat-message__avatar">\n            ','\n          </div>\n        <div class="chat-message__body">\n          <div class="chat-message__header">\n            <div class="chat-message__name">','</div>\n            <div class="chat-message__date">','</div>\n          </div>\n          <div class="chat-message__text">',"</div>\n        </div>\n      </div>\n    "])),gt(t),this.message.avatar?D(Ri||(Ri=Bi(['<img src="','" alt="','" />'])),this.message.avatar,this.message.comment_author):D(Ii||(Ii=Bi(['<dt-icon icon="user" size="2em"></dt-icon>']))),this.message.comment_author,this._formatDate(this.message.comment_date),this.message.comment_content)}}])&&qi(o.prototype,n),i&&qi(o,i),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,n,i}(_t);window.customElements.define("smm-chat-message",Wi)},72:()=>{},61:(t,e,o)=>{"use strict";o.d(e,{Wu:()=>P,E8:()=>E,ab:()=>C,gx:()=>n,fA:()=>l});const n=(t,...e)=>({strTag:!0,strings:t,values:e}),i=(t,e,o)=>{let n=t[0];for(let i=1;i<t.length;i++)n+=e[o?o[i-1]:i-1],n+=t[i];return n},r=t=>{return"string"!=typeof(e=t)&&"strTag"in e?i(t.strings,t.values):t;var e},s="lit-localize-status";class a{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(s,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(s,this.__litLocalizeEventHandler)}}const l=t=>t.addController(new a(t));class c{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}const d=[];for(let t=0;t<256;t++)d[t]=(t>>4&15).toString(16)+(15&t).toString(16);const u="",h="h",p="s";function f(t,e){return(e?h:p)+function(t){let e=0,o=8997,n=0,i=33826,r=0,s=40164,a=0,l=52210;for(let c=0;c<t.length;c++)o^=t.charCodeAt(c),e=435*o,n=435*i,r=435*s,a=435*l,r+=o<<8,a+=i<<8,n+=e>>>16,o=65535&e,r+=n>>>16,i=65535&n,l=a+(r>>>16)&65535,s=65535&r;return d[l>>8]+d[255&l]+d[s>>8]+d[255&s]+d[i>>8]+d[255&i]+d[o>>8]+d[255&o]}("string"==typeof t?t:t.join(u))}const m=new WeakMap,g=new Map;function v(t,e,o){var n;if(t){const r=null!==(n=null==o?void 0:o.id)&&void 0!==n?n:function(t){const e="string"==typeof t?t:t.strings;let o=g.get(e);void 0===o&&(o=f(e,"string"!=typeof t&&!("strTag"in t)),g.set(e,o));return o}(e),s=t[r];if(s){if("string"==typeof s)return s;if("strTag"in s)return i(s.strings,e.values,s.values);{let t=m.get(s);return void 0===t&&(t=s.values,m.set(s,t)),{...s,values:t.map((t=>e.values[t]))}}}}return r(e)}function b(t){window.dispatchEvent(new CustomEvent(s,{detail:t}))}let y,w,x,_,k,$="",O=new c;O.resolve();let S=0;const E=t=>(P(((t,e)=>v(k,t,e))),$=w=t.sourceLocale,x=new Set(t.targetLocales),x.add(t.sourceLocale),_=t.loadLocale,{getLocale:T,setLocale:j}),T=()=>$,j=t=>{if(t===(null!=y?y:$))return O.promise;if(!x||!_)throw new Error("Internal error");if(!x.has(t))throw new Error("Invalid locale code");S++;const e=S;y=t,O.settled&&(O=new c),b({status:"loading",loadingLocale:t});return(t===w?Promise.resolve({templates:void 0}):_(t)).then((o=>{S===e&&($=t,y=void 0,k=o.templates,b({status:"ready",readyLocale:t}),O.resolve())}),(o=>{S===e&&(b({status:"error",errorLocale:t,errorMessage:o.toString()}),O.reject(o))})),O.promise};let C=r,A=!1;function P(t){if(A)throw new Error("lit-localize can only be configured once");C=t,A=!0}}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,t=[],r.O=(e,o,n,i)=>{if(!o){var s=1/0;for(d=0;d<t.length;d++){for(var[o,n,i]=t[d],a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((t=>r.O[t](o[l])))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,n,i]},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,o)=>(r.f[o](t,e),e)),[])),r.u=t=>331===t?"conversation_scripts/331.js":966===t?"conversation_scripts/966.js":847===t?"conversation_scripts/847.js":214===t?"conversation_scripts/214.js":526===t?"conversation_scripts/526.js":527===t?"conversation_scripts/527.js":307===t?"conversation_scripts/307.js":806===t?"conversation_scripts/806.js":332===t?"conversation_scripts/332.js":289===t?"conversation_scripts/289.js":586===t?"conversation_scripts/586.js":180===t?"conversation_scripts/180.js":392===t?"conversation_scripts/392.js":799===t?"conversation_scripts/799.js":60===t?"conversation_scripts/60.js":934===t?"conversation_scripts/934.js":647===t?"conversation_scripts/647.js":726===t?"conversation_scripts/726.js":10===t?"conversation_scripts/10.js":986===t?"conversation_scripts/986.js":668===t?"conversation_scripts/668.js":383===t?"conversation_scripts/383.js":408===t?"conversation_scripts/408.js":146===t?"conversation_scripts/146.js":292===t?"conversation_scripts/292.js":161===t?"conversation_scripts/161.js":880===t?"conversation_scripts/880.js":454===t?"conversation_scripts/454.js":997===t?"conversation_scripts/997.js":908===t?"conversation_scripts/908.js":566===t?"conversation_scripts/566.js":158===t?"conversation_scripts/158.js":497===t?"conversation_scripts/497.js":470===t?"conversation_scripts/470.js":143===t?"conversation_scripts/143.js":213===t?"conversation_scripts/213.js":361===t?"conversation_scripts/361.js":604===t?"conversation_scripts/604.js":977===t?"conversation_scripts/977.js":560===t?"conversation_scripts/560.js":167===t?"conversation_scripts/167.js":791===t?"conversation_scripts/791.js":void 0,r.miniCssF=t=>"styles.css",r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},o="disciple-tools-conversations:",r.l=(t,n,i,s)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==o+i){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",o+i),a.src=t),e[t]=[n];var h=(o,n)=>{a.onerror=a.onload=null,clearTimeout(p);var i=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((t=>t(n))),o)return o(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.p="/wp-content/plugins/disciple-tools-conversations/dist/",(()=>{var t={14:0,869:0};r.f.j=(e,o)=>{var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else if(869!=e){var i=new Promise(((o,i)=>n=t[e]=[o,i]));o.push(n[2]=i);var s=r.p+r.u(e),a=new Error;r.l(s,(o=>{if(r.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,n[1](a)}}),"chunk-"+e,e)}else t[e]=0},r.O.j=e=>0===t[e];var e=(e,o)=>{var n,i,[s,a,l]=o,c=0;if(s.some((e=>0!==t[e]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(e&&e(o);c<s.length;c++)i=s[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(d)},o=self.webpackChunkdisciple_tools_conversations=self.webpackChunkdisciple_tools_conversations||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})(),r.O(void 0,[869],(()=>r(838)));var s=r.O(void 0,[869],(()=>r(72)));s=r.O(s)})();
//# sourceMappingURL=conversation_scripts.js.map