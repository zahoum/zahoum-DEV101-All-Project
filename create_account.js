// Initialize EmailJS
(function() {
    emailjs.init('your_user_id'); // Remplace par ton ID utilisateur EmailJS
  })();
  
  // Fonction d'envoi du formulaire
  document.getElementById('create-account-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher le rechargement de la page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    const params = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
  
    // Envoi du formulaire via EmailJS
    emailjs.send('your_service_id', 'your_template_id', params)
      .then(function(response) {
        document.getElementById('response-message').textContent = 'Demande envoyée avec succès ! Vous serez contacté bientôt.';
        document.getElementById('response-message').style.color = 'green';
      }, function(error) {
        document.getElementById('response-message').textContent = 'Erreur lors de l\'envoi. Essayez plus tard.';
        document.getElementById('response-message').style.color = 'red';
      });
  });
  