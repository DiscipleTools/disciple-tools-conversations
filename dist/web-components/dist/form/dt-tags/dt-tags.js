import{i as t,y as e}from"../../lit-element-2409d5fe.js";import{D as i}from"../dt-multi-select/dt-multi-select.js";import"../../style-map-ac85d91b.js";import"../../directive-de55b00a.js";import"../../lit-localize-763e4978.js";import"../dt-form-base.js";import"../../dt-base.js";import"../dt-label/dt-label.js";import"../mixins/hasOptionsList.js";import"../../icons/dt-spinner.js";import"../../icons/dt-checkmark.js";class s extends i{static get properties(){return{...super.properties,allowAdd:{type:Boolean},onload:{type:String}}}static get styles(){return[...super.styles,t`.selected-option a,.selected-option a:active,.selected-option a:visited{text-decoration:none;color:var(--primary-color,#3f729b)}`]}willUpdate(t){if(super.willUpdate(t),t){!t.has("open")||!this.open||this.filteredOptions&&this.filteredOptions.length||this._filterOptions()}}_filterOptions(){const t=(this.value||[]).filter((t=>!t.startsWith("-")));if(this.options?.length)this.filteredOptions=(this.options||[]).filter((e=>!t.includes(e.id)&&(!this.query||e.id.toLocaleLowerCase().includes(this.query.toLocaleLowerCase()))));else if(this.open){this.loading=!0,this.filteredOptions=[];const e=this,i=new CustomEvent("load",{bubbles:!0,detail:{field:this.name,postType:this.postType,query:this.query,onSuccess:i=>{e.loading=!1;let s=i;s.length&&"string"==typeof s[0]&&(s=s.map((t=>({id:t})))),e.allOptions=s,e.filteredOptions=s.filter((e=>!t.includes(e.id)))},onError:t=>{console.warn(t),e.loading=!1}}});this.dispatchEvent(i)}return this.filteredOptions}_renderOption(t,i){return e`<li tabindex="-1"><button value="${t.id}" type="button" data-label="${t.label}" @click="${this._clickOption}" @touchstart="${this._touchStart}" @touchmove="${this._touchMove}" @touchend="${this._touchEnd}" tabindex="-1" class="${this.activeIndex>-1&&this.activeIndex===i?"active":""}">${t.label||t.id}</button></li>`}_renderSelectedOptions(){const t=this.options||this.allOptions;return(this.value||[]).filter((t=>!t.startsWith("-"))).map((i=>{let s,o=i;if(t){const e=t.filter((t=>t===i||t.id===i));e.length&&(o=e[0].label||e[0].id||i)}if(!s&&window?.SHAREDFUNCTIONS?.createCustomFilter){const t=window.SHAREDFUNCTIONS.createCustomFilter(this.name,[i]),e=this.label||this.name,o=[{id:`${this.name}_${i}`,name:`${e}: ${i}`}];s=window.SHAREDFUNCTIONS.create_url_for_list_query(this.postType,t,o)}return e`<div class="selected-option"><a href="${s||"#"}" ?disabled="${this.disabled}" alt="${i}">${o}</a> <button @click="${this._remove}" ?disabled="${this.disabled}" data-value="${i}">x</button></div>`}))}}window.customElements.define("dt-tags",s);export{s as D};
//# sourceMappingURL=dt-tags.js.map
