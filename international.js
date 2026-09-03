document.querySelectorAll('[data-fee-file]').forEach((button) => {
  button.addEventListener('click', () => {
    const region = button.dataset.feeFile === 'saarc' ? 'SAARC' : 'non-SAARC';
    const toast = document.getElementById('toast');
    toast.textContent = `The ${region} fee-structure file will open here once it is uploaded.`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3600);
  });
});
