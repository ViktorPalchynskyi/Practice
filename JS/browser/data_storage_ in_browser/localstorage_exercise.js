const textarea = document.getElementById('area');

textarea.value = localStorage.getItem('input');

textarea.addEventListener('input', () => localStorage.setItem('input', textarea.value));