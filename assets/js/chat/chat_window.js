import { html, css } from 'lit';
import { msg } from '@lit/localize';
import { styleMap } from 'lit/directives/style-map.js';
import { DtBase } from "@disciple.tools/web-components";


export class smmChatWindow extends DtBase {
  static get styles() {
    return css`
      :host {
      }
      .chat-window {
        display: flex;
        flex-direction: column;
        height: 75dvh;
        width: 100%;
      }
      .chat-window__header {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 0em 1em;
        border-bottom: 1px solid var(--border-color);
        line-height: 1em;
        padding: 1em 0.25em;
      }
      .chat-window__header .avatar {
        width: clamp(3em, 100%, 5em);
        height: clamp(3em, 100%, 5em);
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        grid-area: 1 / 1 / span 3 / auto;
        justify-self: flex-start;
        place-self: center;
      }
      .chat-window__header h1 {
        margin: 0;
        line-height: 1;
        font-size: clamp(1.5em, 2vw, 2em);
        color: var(--primary-color);
        grid-row: 1;
        grid-column: 2;
      }

      .chat-window__header .channel {
        grid-column: 2;
        grid-row: 2;
      }

      .chat-window__header .age {
        grid-column: 2;
        grid-row: 3;
      }

      .chat-window__header .action-buttons.container {
        grid-column: 3;
        grid-row: span 3;
        display: flex;
        gap: 5px;
        padding: 0.25em;
        place-self: center;
      }

      #moreActions {
        display: none;
        margin: 0;
        padding: 0;
        list-style: none;
        transform: translate(0, 2.5em);
        width: 7.5em;
        position: absolute;
        background: var(--gray-1);
      }

      #moreAction.open {
        display: grid;
      }

      #moreActions li {
        display: block;
        width: 100%;
        height: 3em;
      }

      #moreActions li button {
        width: 100%;
        height: 100%;
        display: block;
      }

      .chat-window__header .action-buttons.container button {
        width: 2.5em;
        height: 2.5em;
        padding: 0;
      }

      .chat-window__header .action-buttons.container button dt-icon {
        font-size: clamp(1.5em, 2vw, 2em);
      }

      .conversation {
        flex: 10;
        padding: 1em 0;
        height: 50dvh;
        overflow-y: scroll;
        overscroll-behavior-y: contain;
        scroll-snap-type: y proximity;
      }

      .conversation * {
        overflow-anchor: none;
      }

      #anchor {
        scroll-snap-align: end;
        height: 1px;
      }

      .chat-window__footer {
        flex: 1 2 0px;
        border-top: 1px solid var(--border-color);
        display: grid;
        grid-template-columns: 10fr 1fr;
        gap: 10px;
        padding: 1em 0.5em 1em 1em;
        place-content: center space-between;
        place-items: stretch;
        align-items: center;
      }

      .chat-window__footer textarea {
        grid-row-start: 1;
        grid-column-start: 1;
        border-radius: 0.25em;
        border: 1px solid var(--border-color);
        resize: none;
        padding: 1em;
      }

      .chat-window__footer .send-button {
        background: var(--primary-color);
        border: none;
        color: var(--text-color-inverse);
        height: 3.5em;
        width: 3.5em;
        border-radius: 50%;
        grid-row-start: 1;
        grid-column-start: 2;
        justify-self: center;
      }
      `
  }

  static get properties() {
    return {
      ...super.properties,
      message: { type: Object },
      open: { type: Boolean },
      claimed: { type: Boolean },
      convoid: { type: Number },
      userid: { type: Number },
      conversation: { type: Object },
      conversation_messages: { type: Array },
      moreActionOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.conversation_messages = window.commentsSettings.comments.comments;
  }

  connectedCallback() {
    super.connectedCallback();

    this.comment_polling();

    document.addEventListener('commentsRetrieved', (e) => {
      this.getPostComments()
    } );

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('commentsRetrieved', this.getPostComments() );
  }

comment_polling(){
  const commentDateGMT = new Date(`${this.conversation_messages.comments[0].comment_date_gmt}Z`);//The Z makes sure the date is in GMT
  const currentDateGMT = new Date();

  const diffInMilliseconds = currentDateGMT - commentDateGMT;
  const diffInMinutes = diffInMilliseconds / (1000 * 60);
  let nextCheck;
console.log(this.conversation_messages.comments[0].comment_date_gmt);
  console.log(commentDateGMT);
  console.log(currentDateGMT);

  console.log(diffInMinutes);
  if ( diffInMinutes > 5 && diffInMinutes < 15 ) {
    console.log('The comment_date_gmt is more than 5 minutes ago.');
    nextCheck = 60000;
  } else if ( diffInMinutes > 15 ) {
    console.log('The comment_date_gmt is more than 15 minutes ago.');
    nextCheck = 300000;
  } else {
    console.log('The comment_date_gmt is less than 5 minutes ago.');
    nextCheck = 5000;
  }

  this.getPostComments();

  setTimeout(() => { this.comment_polling() }, nextCheck);
}

  ChatButtonClick(e) {
    let messageText = this.shadowRoot.querySelector('textarea').value;

    const payload = {
      comment: messageText,
      comment_type: "whatsapp"
    }

    API.post_comment('conversations', this.convoid, messageText, "whatsapp").then((response) => {
      this.getPostComments();
      this.shadowRoot.querySelector('textarea').value = '';
    });
  }

  getPostComments() {
    API.get_comments('conversations', this.convoid).then((response) =>  {
      this.conversation_messages = response;
      console.log(this.conversation_messages)
    });
  }

  claimConvo() {
    const payload = {
      assigned_to: this.userid,
    };

    API.update_post('conversations', this.convoid, payload).then((response) => {
      this.conversation = response;
      this.claimed = true;
    });
  }

  unclaimConvo() {
    const payload = {
      claimed: false,
      assigned_to: 0,
    };
    API.update_post('conversations', this.convoid, payload).then((response) => {
      this.conversation = response;
      this.claimed = false;
    });
  }

  _moreActions() {
    if (this.moreActionOpen) {
      this.moreActionOpen = false;
    } else {
      this.moreActionOpen = true;
    }
  }

  _chatWindowFooterRender() {
    if (this.conversation.assigned_to) {
        if (this.userid != this.conversation.assigned_to.id) {
          return html`
            <span>This Conversation is claimed by another user</span>
            <button @click=${this.claimConvo}>Claim this Conversation</button>`
        } else {
          return html`<textarea
            id="smm-chat-input"
            name="smm-chat-input"
            aria-label="Chat Response Input"
            type="text"
            ?disabled=${this.disabled}
            class="text-input"
            @change=${this.onChange}
            .value="${this.value || ''}"
          ></textarea>
          <button class="send-button" @click=${this.ChatButtonClick}>Send</button>`
        }
    } else {
        return html`<button @click=${this.claimConvo}>Claim this Conversation</button>`
    }
  }

  render() {
    const messagesTemplates = [];

    for (const i of this.conversation_messages.comments) {
      messagesTemplates.push(html`<smm-chat-message .message=${i} .incomingMessage=${i.comment_author === this.conversation.name ? true : false} ></smm-chat-message>`);
    }
    messagesTemplates.reverse();

    const moreActionsStyles = {
      display: this.moreActionOpen ? 'grid' : 'none',
    };
    const name = this.conversation.first_name||this.conversation.last_name ? `${this.conversation.first_name} ${this.conversation.last_name}` : this.conversation.name;

    return html`
      <div class="chat-window">
        <div class="chat-window__header">
          <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" height="250px" width="250px" alt="John Smith" class="avatar"/>
          <h1 class="name">${name}</h1>
          <span class="channel">${this.conversation.type.label}</span>
          <!-- <span class="age">25 years old</span> -->

          <div class="action-buttons container">
              <button>
                <dt-icon class="delete_icon" icon="material-symbols:delete-outline"></dt-icon>
              </button>
              <button>
                <dt-icon class="check_icon" icon="material-symbols:check-small"></dt-icon>
              </button>
              <button>
                <dt-icon class="more_icon" icon="material-symbols:more-vert" @click=${this._moreActions}></dt-icon>
              </button>
              <ul id="moreActions"  style=${styleMap( moreActionsStyles )}>
                <li><button @click=${this.unclaimConvo}>Release This Conversation</button></li>
                <li><button @click=${this.claimConvo}>Claim This Conversation for yourself</button></li>
              </ul>
          </div>

        </div>
        <div class="conversation">
          ${messagesTemplates}
          <div id="anchor"></div>
        </div>
        <div class="chat-window__footer">
          ${this._chatWindowFooterRender()}
        </div>
      </div>
    `;
  }
}

window.customElements.define("smm-chat-window", smmChatWindow);
