import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaNavbarBs-styles.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-navbar-bs></bbva-navbar-bs>
```

##styling-doc

@customElement bbva-navbar-bs
*/
export class BbvaNavbarBs extends LitElement {
  static get is() {
    return 'bbva-navbar-bs';
  }
  getData(data) {
    this.menu = data;
  }
  // Declare properties
  static get properties() {
    return {
      menu: { type: Object },
      searchinput: {type: String}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.searchinput = "";
    this.menu = [
      {
        "name": "Home",
        "route": "/home"
      },
      {
        "name": "Movies",
        "route": "/movies"
      },
      {
        "name": "Categories",
        "route": "/categories"
      }
    ];
  }

  static get styles() {
    return [styles, getComponentSharedStyles('bbva-navbar-bs-shared-styles')];
  }
  _menuEvento(item) {
    this.dispatchEvent(
      new CustomEvent('route-menu-event', {
        bubbles: true,
        composed: true,
        detail: item
      })
    );
  }
  _searchEvento(item){
    if(item != ""){    this.dispatchEvent(
      new CustomEvent('search-menu-event',{
        bubbles: true,
        composed: true,
        detail: item
      })
    );}

  }
  _handleChange(e){
    console.log(e)
  }
  // Define a template
  render() {
    return html`
      <nav class="navbar navbar-expand-lg navbar-dark bd-navbar bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">BooMovie</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              ${this.menu.map(
                (option) => html`
                  <li class="nav-item">
                    <a class="nav-link" href="#" @click=${() => this._menuEvento(option.route)}
                      >${option.name}</a
                    >
                  </li>
                `
              )}
            </ul>
            <div class="d-flex align-items-center mb-0">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button class="btn btn-primary active" @click=${() => this._menuEvento(this.searchinput)}>
                Search
              </button>
              </div>
          </div>
        </div>
      </nav>
    `;
  }
}
