import { css, html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { DtBase } from "@disciple.tools/web-components";
import io from 'socket.io-client';


export class conversationListItem extends DtBase {
  static get properties() {
    return {
      ...super.properties,
      conversation: { type: Array },
      claimed: { type: Boolean },
      userid: { type: Number },
      socketurl: { type: String },
      socket: { type: Object },
      notification_count: { type: Number },
    };
  }
  constructor() {
    super();
    //TODO: Set this number to the number of unread messages
    this.notification_count = 0;
  }
static get styles() {
    return css`
      :host {
        --dt-modal-button-background: var(--primary-color);
        --dt-modal-button-opener-background: var(--primary-color);
        --dt-modal-button-color: #FFFFFF;
        --dt-button-font-weight: 100;
        --dt-button-padding-y: 0em;
        --dt-button-padding-y: 0.15em;
        --dt-button-padding-x: 1em;
        --dt-button-border-radius: 0.25em;
        --dt-button-font-size: 1em;
        color: currentcolor;
        display: block;
        container-type: inline-size;
        container-name: line-container;
      }

      .line-container {
        display: grid;
        grid-template-columns: 1.5fr .75fr .75fr;
        gap: 1em 0.35em;
        place-items: center;
        border-bottom: 1px solid rgb(230, 230, 230);
        padding: 1em 0;
        margin: 0 0.5em;
      }

      .mid-line-container {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        height: 100%;
        justify-content: space-around;
      }

      .name {
        font-weight: bold;
      }

      .notication {
        background: var(--smm-list-notification-background, var(--alert-color, red));
        color: var(--smm-list-notification-color, white);
        border-radius: 50%;
        font-size: clamp(.75em, 1em, 1.15em);
        display: inline-flex;
        min-width: 1em;
        padding: 0em 0.25em;
        justify-content: center;
      }

      .date {
        font-size: .75em;
        align-content: center;
      }

      .date span {
        background: var(--smm-list-date-background, #F0F0F0);
        border-radius: .25em;
        padding: .5em;
      }

      .platform {
        font-size: .75em;
      }
      /* dt-button {
        flex: 1;
      } */

      @container line-container (min-width: 500px) {
        .line-container {
          grid-template-columns: 1fr 1fr 1fr;
        }

        .mid-line-container {
          flex-flow: row;
          width: 100%;
          justify-content: space-evenly;
        }
      }
    `;
}

  connectedCallback() {
    super.connectedCallback();
    this.claimed = this.conversation.assigned_to
    if(this.claimed) {
      //subscribe only to the conversation that is claimed
      this.socket_subscribe();
    }

  }

  socket_subscribe() {
    console.log('Subscribing to the conversation updates');
    const socket = io(this.socketurl, { transports: ['websocket'] });

    // Assuming you have recipientPageId and senderId available
    const pageid = this.conversation.PageID;
    const senderId = this.conversation.name;
    const room = `${pageid}-${senderId}`;
    socket.emit('join', room);
    this.socket = socket;
    socket.on('message', () => {
      this.notification_count++;
      //emit a custom event called commentsUpdated to update the comments
      const event = new CustomEvent('commentsUpdated', {
        detail: {
          conversation: this.conversation,
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    });

  }

  _formatDate() {
    let dateObj = new Date( this.conversation.last_modified.timestamp * 1000);
    let dateString = new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' }).format(dateObj);

    return dateString;
  }



  render() {
    const name = this.conversation.first_name||this.conversation.last_name ? `${this.conversation.first_name} ${this.conversation.last_name}` : this.conversation.name;
    return html`
      <div class="line-container">
      <div class="name">${name}
        ${this.notification_count != 0 ? html`<span class="notication count">${this.notification_count}</span>` : ''}
      </div>
      <div class="mid-line-container">
        <div class="date"><span>${this._formatDate()}</span></div>
        <div class="platform">${this.conversation.type.label}</div>
      </div>

      <smm-conversation-modal title="" context="default" ?claimed=${this.claimed} convoid="${this.conversation.ID}" userid=${this.userid} conversation="${JSON.stringify(this.conversation)}" buttonclass="{&quot;alert&quot;:true}" buttonstyle="{&quot;padding&quot;:&quot;40px&quot;}" socketurl=${this.socketurl} socket=${this.socket}>
        <span slot="content">Test</span>
        <span slot="openButton">
        View Conversation
        </span>
      </smm-conversation-modal>
      </div>
    `;
  }

}

customElements.define("smm-list-item", conversationListItem);
