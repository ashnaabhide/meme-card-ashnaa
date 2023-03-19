import { LitElement, html, css } from 'lit';
import "./meme-card-ashnaa.js";

export class MemeRoster extends LitElement{
    static get tag() {
        return 'meme-roster';
    }

    static get properties(){
        return {
            memes: { type: Array }, 
            memetype: { type: String },
           
        }
    
    }
    constructor(){
        super();
        this.memes = [];
        this.memetype = 'dog';
        this.updateList();
    }

    updateList(){
       const address = new URL('../assets/roster.json',  import.meta.url).href;
       const data = fetch(address).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return [];
    })
    .then((data) => {
        this.memes = data;
    });
    

    }

    

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;

        }
        
        `;
    }
    
    render() {
        return html`
        <h2>${this.memetype}</h2>
        <div class="wrapper">
            ${this.memes.map(meme => html`
            <div class="item">
                <meme-card-ashnaa name="${meme.name}" detail="${meme.detail}" top="${meme.top}" bottom="${meme.bottom}" image="${meme.image}"></meme-card-ashnaa>
            </div>
            `)}
        </div>
        `;
    }


}

customElements.define(MemeRoster.tag, MemeRoster);