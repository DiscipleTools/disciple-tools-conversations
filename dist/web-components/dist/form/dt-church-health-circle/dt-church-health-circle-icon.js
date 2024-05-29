import{i as t,y as e}from"../../lit-element-2409d5fe.js";import{o as i}from"../../class-map-8d921948.js";import{D as s}from"../../dt-base.js";import"../../directive-de55b00a.js";import"../../lit-localize-763e4978.js";window.customElements.define("dt-church-health-icon",class extends s{static get styles(){return t`root{display:block}.health-item img{width:var(--d);height:var(--d);filter:grayscale(1) opacity(.75)}.health-item--active img{filter:none!important}`}static get properties(){return{key:{type:String},metric:{type:Object},group:{type:Object},active:{type:Boolean,reflect:!0},missingIcon:{type:String},handleSave:{type:Function}}}render(){const{metric:t,active:s,missingIcon:r=`${window.wpApiShare.template_dir}/dt-assets/images/groups/missing.svg`}=this;return e`<div class="${i({"health-item":!0,"health-item--active":s})}" title="${t.description}" @click="${this._handleClick}"><img src="${t.icon?t.icon:r}"></div>`}async _handleClick(){if(!this.handleSave)return;const t=!this.active;this.active=t;const e={health_metrics:{values:[{value:this.key,delete:!t}]}};try{await this.handleSave(this.group.ID,e)}catch(t){return void console.error(t)}t?this.group.health_metrics.push(this.key):this.group.health_metrics.pop(this.key)}});
//# sourceMappingURL=dt-church-health-circle-icon.js.map