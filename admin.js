// Initialiser un compteur de visiteurs local (peut être relié à Firebase ou autre)
let visitorCount = 0;

// Fonction pour augmenter le nombre de visiteurs à chaque visite
function updateVisitorCount() {
  visitorCount += 1;
  document.getElementById('counter').textContent = visitorCount;
}

// Mettre à jour le compteur de visiteurs chaque fois que la page est chargée
window.onload = updateVisitorCount;
