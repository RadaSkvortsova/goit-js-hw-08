import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(inputText, 500));
form.addEventListener('submit', submitForm);
const INPUT_KEY = 'feedback-form-state';
let objectInput = {};

inForm();

function submitForm(event) {
  event.preventDefault();
  const formEl = event.target.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;
  if (message === '' && email === '') {
    return alert('Поля "email" та "message" мають бути заповнені!');
  }
  if (email === '') {
    return alert('Поле "email" мають бути заповнені!');
  }
  if (message === '') {
    return alert('Поле "message" мають бути заповнені!');
  }
  objectInput = {
    email,
    message,
  };
  console.log(objectInput);

  form.reset();
  localStorage.removeItem(INPUT_KEY);
}

function inputText(event) {
  objectInput[event.target.name] = event.target.value;
  localStorage.setItem(INPUT_KEY, JSON.stringify(objectInput));
}

function inForm() {
  let saveText = localStorage.getItem(INPUT_KEY);
  if (saveText) {
    saveText = JSON.parse(saveText);
    Object.entries(saveText).forEach(([name, value]) => {
      objectInput[name] = value;
      form.elements[name].value = value;
    });
  }
}
