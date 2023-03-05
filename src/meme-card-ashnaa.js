import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const meme=new URL('../assets/meme.jpg', import.meta.url).href;


export class MemeCard extends LitElement {

  static get properties() {
    return {
      accentColor: {
        type: String,
        reflect: true, //important for styling
        attribute: 'accent-color'
      },
      name: {
        type: String,
        reflect: true
      }, 
      detail: {
        type: String,
      },
      top: {
        type: String,
  
      }, 
      bottom: {
        type: String,
      },  
      opened: {type: Boolean, reflect: true},
    }
  }


  static get styles(){
    return css`
    meme-card-ashnaa[accent-color="blue"]{
      background-color: var(--team-card-accent-color, lightblue);

    }
    meme-card-ashnaa[accent-color="green"]{
      background-color: palegreen;
      color: white;

    }
    meme-card-ashnaa[accent-color="pink"]{
      background-color: pink;
      color: white;

    }
    meme-card-ashnaa::part(card){
      margin: 100px;
    }


      .card {
        width: 400px;
        border: 2px solid black;
        display: inline-flex; 
        padding: var(--meme
        -card-wrapper-padding, 16px 8px 16px 8px);
      }

.image {
  width: 400px;
}


.header {
  text-align: center;
  font-weight: bold;
  font-size: 2rem; /* scales relatively */
  
  
}

.header h3:hover {
  font-style: italic; 
  font-size: 1.1em;
}

.header h3, 
.header h4{
  transition: .3s ease-in-out all;
  margin: 16px;
  font-style: normal;
  
}
.buttons button:focus, 
.buttons button:hover {
  background-color: rgba(200, 0, 50, .5);
}
/*
.buttons button:active {
  background-color: rgba(200, 0, 200, .5); - shades in the part of the project you're not actively working on
}
*/
 
.buttons {
  display: block;
  
}
button {
  padding: 12px;
  font-size: 32px;
}



details{
  margin-left: 24px;
  padding: 10px;
}
.details summary {
  font-size: 20px;
  font-weight: bold;
  
}

@media only screen and (max-width: 1200px){
  .card{
    background-color: pink;
  }
}
@media only screen and (max-width: 600px){
   .card{
    background-color: purple;
  }
  
}
@media only screen and (max-width: 425px){
   .card{
    font-size: 1em;
  }
  details {
    display: none;
  }
  .card{
    font-size: 1.1em; /*this will take priority*/
  }
}
    `;
  }


  constructor() {
    super();
    this.name = "Borzoi!!!!";
    this.detail = "big nose dog";
    this.accentColor = null;
    this.top = "woof";
    this.bottom = "borzoi!";
    this.opened = true;
  }

  toggleEvent(e) {
    console.log(this.opened);
    console.log(this.shadowRoot.querySelector('details').getAttribute('open'));
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    console.log(state);
    this.opened = state;
  } //listens

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if(propName === 'opened') {
        this.dispatchEvent(new CustomEvent('change-open-state', 
        {
          composed: true, //event occured in shadowroot but you want it to bubble up through page
          bubbles: true,
          cancelable: false,
          detail: { 
            value: this[propName]} 
          }));
          console.log(`${propName} changed. oldValue: ${oldValue}`);
  
        }
  
        });
        


    }
  


  render() {
    return html`
    
<div class="card" part="card">
  <div class="container">
  

<!--<img class="image" src="$(meme)"/> -->
  <div class="header">
  <h3>${this.name}</h3>
  <meme-maker image-url="${meme}"
 top-text="${this.top}"
 bottom-text="${this.bottom}"
 >

</meme-maker>
  <h4>${this.detail}</h4>
    <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
      <summary>Details</summary>
      <div>
        <p class="memeparagraph">
          <slot></slot>
      </p>
      
      </div>
  </details>
  </div>
</div>
</div>
    `;
  }
}

customElements.define('meme-card-ashnaa', MemeCard);