document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyZ' && (e.ctrlKey || e.metaKey)) alert('Cancel!!!!!')
});

document.addEventListener('keyup', (e) => console.log({ key: e.key }));
document.querySelector('.tel').addEventListener('keydown', (e) => checkPhoneKey(e.key));

function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
  }