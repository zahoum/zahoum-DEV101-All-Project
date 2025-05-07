let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function saveContacts() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

function displayContacts() {
  const list = document.getElementById('contactList');
  list.innerHTML = '';
  contacts.forEach((contact, index) => {
    list.innerHTML += `
      <div class="contact">
        <strong>${contact.name}</strong><br />
        ${contact.email}
      </div>
    `;
  });
}

function addContact() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (name && email) {
    contacts.push({ name, email });
    saveContacts();
    displayContacts();
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  } else {
    alert("Please fill both fields!");
  }
}

displayContacts(); // load on page
