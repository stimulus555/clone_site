document.querySelectorAll('[data-box]').forEach((element) => {
  element.setAttribute('title', `Layout block ${element.dataset.box}`);
});
