export class Nav extends HTMLElement {
  render() {
    this.style.display = "block";
    this.style.margin = "10px";
    this.style.width = "100px";
    this.style.height = "100px";
    this.style.border = "1px solid purple";
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  static get observedAttributes() {
    return ["style"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}
