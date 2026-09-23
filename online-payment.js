document.querySelectorAll('[data-box]').forEach((element) => {
  element.setAttribute('title', `Layout block ${element.dataset.box}`);
});

document.querySelectorAll('input[name="account-type"]').forEach((option) => {
  option.addEventListener('change', () => {
    document.querySelector('.login-panel').dataset.accountType = option.value;
  });
});
