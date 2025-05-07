// Connexion Admin locale
function connexionAdmin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
  
    if (username === 'MIRAMAR' && password === 'ESSPMIRAMAR') {
      message.textContent = 'Connexion réussie. Bienvenue Admin.';
      message.className = 'message success';
      
      // Redirection vers la page admin après 1.5 secondes
      setTimeout(() => {
        window.location.href = 'admin.html'; // Redirection vers admin
      }, 1500);
    } else {
      message.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
      message.className = 'message error';
    }
  }
  // Connexion avec Google
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Auth réussi → Rediriger vers page utilisateur
        window.location.href = 'utilisateur.html';
      })
      .catch((error) => {
        console.error('Erreur de connexion Google:', error.message);
        const message = document.getElementById('message');
        message.textContent = 'Erreur lors de la connexion avec Google.';
        message.className = 'message error';
      });
  }
  
  