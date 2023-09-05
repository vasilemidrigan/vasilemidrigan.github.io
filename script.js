import { Nav } from "./components/menu.js";

customElements.define("nav-menu", Nav);

customElements.define(
  "menu-nav",
  class extends HTMLElement {
    connectedCallback() {
      console.log(this.innerHTML);
    }
  }
);
