// Fonction pour gérer la demande de carte d'accès
document.querySelector('.card-request form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.createElement('div');
  
    if (name && email) {
      // Si les champs sont remplis correctement, afficher un message de succès
      message.textContent = 'Demande de carte d\'accès envoyée avec succès !';
      message.style.color = 'green';
    } else {
      // Sinon afficher un message d'erreur
      message.textContent = 'Veuillez remplir tous les champs.';
      message.style.color = 'red';
    }
  
    // Ajouter le message sous le formulaire
    document.querySelector('.card-request').appendChild(message);
  
    // Réinitialiser le formulaire
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });
  