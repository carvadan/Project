document.getElementById('user-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value.trim(), 10);
  const hobby = document.getElementById('hobby').value.trim();
  const messageEl = document.getElementById('message');

  messageEl.textContent = '';

  if (
    !validateField('Full Name', fullName) ||
    !validateEmail(email) ||
    !validateAge(age) ||
    !validateField('Hobby', hobby)
  ) {
    return;
  }

  if (age > 18) {
    const person = { fullName, email, age, hobby };
    addPersonToList(person);
  } else {
    messageEl.textContent = 'You must be over 18 to submit.';
    messageEl.style.color = 'red';
  }
});

function validateField(name, value) {
  if (!value) {
    alert(`${name} is required.`);
    return false;
  }
  return true;
}

function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(email)) {
    alert('Invalid email format.');
    return false;
  }
  return true;
}

function validateAge(age) {
  if (isNaN(age) || age <= 0) {
    alert('Age must be a number greater than 0.');
    return false;
  }
  return true;
}

function addPersonToList(person) {
  const list = document.getElementById('people-list');
  const item = document.createElement('li');
  item.innerHTML = `
    <strong>${person.fullName}</strong><br>
    Email: ${person.email}<br>
    Age: ${person.age}<br>
    Hobby: ${person.hobby}
  `;
  list.appendChild(item);
}
