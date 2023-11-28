import TimeFormatted from './TimeFormatted.js';
import HelloButton from './HelloButton.js';

customElements.define('time-formatted', TimeFormatted);
customElements.define('hello-button', HelloButton, { extends: 'button' });