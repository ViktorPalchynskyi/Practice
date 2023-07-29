const contents = document.getElementById('contents');

contents.onclick = (e) => {
  const target = e.target;

  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }

  if (target.closest('a') && contents.contains(target)) {
    const targetLink = target.closest('a');

    return handleLink(targetLink.getAttribute('href'));
  }
};

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
    const target = e.target;
    const targetLink = target.closest('a');

    if (!targetLink) return


    const img = document.getElementById('largeImg');
    img.src = targetLink.getAttribute('href');
    img.alt = targetLink.title;
    e.preventDefault();
});