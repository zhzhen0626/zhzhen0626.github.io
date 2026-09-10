const wechatDialog = document.getElementById('wechat-dialog');
document.getElementById('wechat-open').addEventListener('click', () => {
  wechatDialog.showModal();
});
document.getElementById('wechat-close').addEventListener('click', () => {
  wechatDialog.close();
});
wechatDialog.addEventListener('click', (event) => {
  const bounds = wechatDialog.getBoundingClientRect();
  if (event.target === wechatDialog &&
      (event.clientX < bounds.left || event.clientX > bounds.right ||
       event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    wechatDialog.close();
  }
});
