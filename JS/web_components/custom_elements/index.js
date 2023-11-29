import TimeFormatted from './TimeFormatted.js';
import HelloButton from './HelloButton.js';
import LiveTimer from './LiveTimer.js';

customElements.define('time-formatted', TimeFormatted);
customElements.define('hello-button', HelloButton, { extends: 'button' });
customElements.define('live-timer', LiveTimer);