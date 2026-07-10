const emailInput = document.querySelector('input[type="email"]');
const btn = document.querySelector('.btn');
const inputWrapper = document.querySelector('.r4');
const errorIcon = document.getElementById('i3');
const errorMsg = document.querySelector('.msg');

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.trim());
}

function validate() {
  const value = emailInput.value;

  if (value.trim() === '' || !isValidEmail(value)) {
    inputWrapper.classList.add('invalid');
    errorIcon.classList.add('invalid');
    errorMsg.classList.add('invalid');
    btn.classList.add('invalid');
  } else {
    inputWrapper.classList.remove('invalid');
    errorIcon.classList.remove('invalid');
    errorMsg.classList.remove('invalid');
    btn.classList.remove('invalid');
  }
}

btn.addEventListener('click', validate);