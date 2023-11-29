export default class LiveTimer extends HTMLElement {
    populateElemtntWithAttr() {
        const attrList = [
            { name: 'hour', value: 'numeric' },
            { name: 'minute', value: 'numeric' },
            { name: 'second', value: 'numeric' },
        ];

        if (!attrList?.length) return;

        for (const { name, value } of attrList) {
            this.timerElem.setAttribute(name, value);
        }
    }

    render() {
        this.timerElem = document.createElement('time-formatted');
        this.populateElemtntWithAttr();

        this.append(this.timerElem);
    }

    update() {
        this.date = new Date();
        this.timerElem.setAttribute('datetime', this.date);
        this.dispatchEvent(new CustomEvent('tick', { detail: this.date }));
    }

    connectedCallback() {
        if(!this.rendered) {
            this.render();
            this.rendered = true;
        };

        this.intervalId = setInterval(() => this.update(), 1000);
    }

    disconectedCallback() {
        clearInterval(this.intervalId);
    }
}