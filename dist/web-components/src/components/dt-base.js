import { LitElement } from 'lit';
import { updateWhenLocaleChanges } from '@lit/localize';
import { setLocale } from '../i18n/localization.js';
import ApiService from '../services/apiService.js';

import 'element-internals-polyfill'; // eslint-disable-line import/no-extraneous-dependencies

export default class DtBase extends LitElement {
  static get properties() {
    return {
      RTL: { type: String },
      locale: { type: String },
      apiRoot: { type: String, reflect: false },
      postType: { type: String, reflect: false },
      postID: { type: String, reflect: false },
    };
  }

  /**
   * return the element to proxy focus to
   */
  get _focusTarget() {
    return this.shadowRoot.children[0] instanceof Element
      ? this.shadowRoot.children[0]
      : null;
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.addEventListener('focus', this._proxyFocus.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();

    this.apiRoot = this.apiRoot ? `${this.apiRoot}/`.replace('//', '/') : '/'; // ensure it ends with /
    this.api = new ApiService(this.nonce, this.apiRoot);
  }

  willUpdate(props) {
    // get RTL from closest parent with [dir] attribute
    if (this.RTL === undefined) {
      const dirEl = this.closest('[dir]');
      if (dirEl) {
        const dir = dirEl.getAttribute('dir');
        if (dir) {
          this.RTL = dir.toLowerCase() === 'rtl';
        }
      }
    }

    // get locale from closest parent with [lang] attribute
    if (!this.locale) {
      const langEl = this.closest('[lang]');
      if (langEl) {
        const lang = langEl.getAttribute('lang');
        if (lang) {
          this.locale = lang;
        }
      }
    }

    // if locale is changing, update lit-localize
    if (props && props.has('locale') && this.locale) {
      try {
        setLocale(this.locale);
      } catch (e) {
        console.error(e);
      }
    }
  }

  /**
   * Proxy focus to the focus target
   * @returns
   */
  _proxyFocus() {
    if (!this._focusTarget) {
      return;
    }

    this._focusTarget.focus();
  }
}
