import { LitElement, html, css } from 'lit'
import { WiredCard } from 'wired-elements/lib/wired-card.js'
import { WiredButton } from 'wired-elements/lib/wired-button.js'
import googleNews from '../GoogleNewsAPI.js'

export class EitCounter extends LitElement {
  static properties = {
    counter: { type: Number },
    reflect: true,
  }

  constructor() {
    super()
    this.counter = 0
  }

  static styles = [
    css`
      :host {
        display: block;
        font-size: 1.3rem;
        width: 40%;
        padding: 30px;
      }

      .pa {
        color: #53c758;
      }
    `,
  ]

  render() {
    return html`
      <wired-card elevation="4">

        <h2>Mi contador</h2>

        <p class="pa">
          Los estilos dentro del componente web son totalmente independientes de
          los demás. Así que no afecta nada más que al propio componente en el que
          se implanto ese estilo
        </p>

        <div>${this.counter}</div>

        <input type="range" value="0" @change="${
          this._sliderValue
        }" id="valueRange" min="0" max="10">
        </br>

        ${googleNews()}

        <wired-button @click=${this._decrementar}>Decrementar</wired-button>

        <wired-button @click=${this._incrementar}>Incrementar</wired-button>

      </wired-card>
    `
  }

  //Actualiza el contador al darle valor al slider
  _sliderValue(e) {
    this.counter = e.target.value
  }

  _incrementar(e) {
    if (this.counter < 10) {
      ++this.counter
      this.shadowRoot.getElementById('valueRange')['value'] = this.counter
    }
  }
  _decrementar(e) {
    if (this.counter > 0) {
      --this.counter
      this.shadowRoot.getElementById('valueRange')['value'] = this.counter
    }
  }
}

customElements.define('eit-counter', EitCounter)
