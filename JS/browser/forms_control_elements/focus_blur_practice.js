const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const error = document.getElementById('error');
const form = document.getElementById('form');

input.addEventListener('focus', () => {
    if (error.classList.contains('invalid')) {
        error.classList.remove('invalid');
        error.innerHTML = '';
    }
});

input.addEventListener('blur', () => {
    if (!input.value.includes('@')) {
        error.classList.add('invalid');
        error.innerHTML = 'Vvedi normal`nyi email, huesos'
    }
});

input2.addEventListener('blur', function () {
    if (!this.value.includes('@')) {
        this.classList.add('error');
        this.focus();
    } else {
        this.classList.remove('error');
    }
});

// form.addEventListener('focus', () => form.classList.add('focused'), { capture: true });
// form.addEventListener('blur', () => form.classList.remove('focused'), { capture: true });

form.addEventListener('focusin', () => form.classList.add('focused'));
form.addEventListener('focusout', () => form.classList.remove('focused'));