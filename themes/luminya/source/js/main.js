// 可选：添加复制服务器地址功能（若页面有）
document.querySelectorAll('.copy-address').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const text = this.dataset.address || 'example.com';
    navigator.clipboard.writeText(text).then(() => {
      alert('已复制地址');
    });
  });
});