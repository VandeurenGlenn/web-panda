const Html = new HTMLElement();
export default class NewProperty extends Html {
  createdCallback() {
    console.log('creted');
  }
}

document.registerElement('new-property', NewProperty);
