function showNotification({ top = '0px', right = '0px', html, className }) {
    const notification = document.createElement('div');
    notification.className = 'notification';

    if (className) notification.classList.add(className);
    
    notification.style.top = top;
    notification.style.top = right;
    notification.innerHTML = html;

    document.body.append(notification);

    setTimeout(() => notification.remove(), 3 * 1000);
}

showNotification({
    top: 10,
    right: 10, 
    html: "Hello!", 
    className: "welcome" 
  });