document.getElementById("registration-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());
  const hobby = document.getElementById("hobby").value.trim();
  const message = document.getElementById("message");

  message.textContent = "";

  if (!validateForm(fullName, email, age, hobby)) {
    message.textContent = "Please fill in all fields correctly.";
    return;
  }

  if (age <= 18) {
    message.textContent = "You must be over 18 to submit.";
    return;
  }

  addPersonToList({ fullName, email, age, hobby });

  // Clear form
  document.getElementById("registration-form").reset();
});

function validateForm(name, email, age, hobby) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    name.length > 0 &&
    emailPattern.test(email) &&
    !isNaN(age) &&
    age > 0 &&
    hobby.length > 0
  );
}

function addPersonToList(person) {
  const list = document.getElementById("people-list");

  const personCard = document.createElement("div");
  personCard.innerHTML = `
    <strong>Name:</strong> ${person.fullName}<br/>
    <strong>Email:</strong> ${person.email}<br/>
    <strong>Age:</strong> ${person.age}<br/>
    <strong>Hobby:</strong> ${person.hobby}
  `;
  list.appendChild(personCard);
}
