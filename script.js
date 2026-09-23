document.querySelectorAll('.nav-box').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.nav-box.is-active')?.classList.remove('is-active');
    button.classList.add('is-active');
  });
});

document.querySelectorAll('[data-box]').forEach((element) => {
  element.setAttribute('title', `Layout block ${element.dataset.box}`);
});

const chatDialog = document.querySelector('#chat-dialog');
const openChat = document.querySelector('#open-chat');
const closeChat = document.querySelector('#close-chat');
const chatForm = document.querySelector('#chat-form');
const chatStatus = document.querySelector('#chat-status');

openChat.addEventListener('click', () => chatDialog.showModal());
closeChat.addEventListener('click', () => chatDialog.close());
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  chatStatus.textContent = 'Details saved. Your chat can begin.';
});
