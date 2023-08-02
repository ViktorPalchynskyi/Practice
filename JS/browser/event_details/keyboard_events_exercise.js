const runOnKeys = (fn, ...codes) => {
    let pressedButtons = new Set();

    document.addEventListener('keydown', (event) => {
        pressedButtons.add(event.code);

        for (const code of codes) {
            if (!pressedButtons.has(code)) return;
        }

        pressedButtons.clear();
        fn();
    });

    document.addEventListener('keyup', (event) => {
        pressedButtons.delete(event.code);
    });
};

runOnKeys(() => alert('Pressed key'), 'KeyV', 'KeyG', 'KeyY');