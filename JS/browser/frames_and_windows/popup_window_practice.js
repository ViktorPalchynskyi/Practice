const test = document.querySelector('.test');
const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=600`;

test.addEventListener('click', () => {
  const newWindow = window.open('/', 'testWindow', params);

  newWindow.focus();

  alert(newWindow.location.href);

  newWindow.onload = () => {
    const html = `<div style="font-size:30px">Добро пожаловать!</div>`;
    newWindow.document.body.insertAdjacentHTML('afterbegin', html);
    newWindow.document.write(
      `<script>window.opener.document.body.innerHTML = 'Тест'<\/script>`
    );
    newWindow.close();
    alert(newWindow.closed);
  };
});
