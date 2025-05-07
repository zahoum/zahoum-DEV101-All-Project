document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nomInput = document.getElementById("nom");
    const emailInput = document.getElementById("email");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche l'envoi par défaut
  
      const nom = nomInput.value.trim();
      const email = emailInput.value.trim();
  
      if (nom === "" || email === "") {
        alert("Veuillez remplir tous les champs.");
        return;
      }
  
      // Afficher les données simulées
      alert(`Merci ${nom}, nous avons bien reçu votre email: ${email}`);
  
      // Réinitialiser le formulaire
      form.reset();
    });
  });
  