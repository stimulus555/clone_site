document.querySelectorAll('[data-box]').forEach((element) => {
  element.setAttribute('title', `Layout block ${element.dataset.box}`);
});

const feeAmounts = { registration: 10000, admission: 72000, course: 60000, hostel: 60000 };
const feeType = document.querySelector('#fee-type');
const amount = document.querySelector('#amount');
const payAmount = document.querySelector('#pay-amount');

feeType.addEventListener('change', () => {
  const total = feeAmounts[feeType.value] ?? 0;
  amount.textContent = total.toLocaleString('en-IN');
  payAmount.textContent = total.toLocaleString('en-IN');
});
