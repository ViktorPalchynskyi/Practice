export default class HelloButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => alert('Konnichiwa!'));
    }
}