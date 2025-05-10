
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.querySelector('.loader');
  
  // Sakrij loader kada se stranica potpuno učita
  window.addEventListener('load', function() {
    // Dodaj klasu za nestajanje
    loader.classList.add('hidden');
    
    // Nakon animacije, ukloni element
    setTimeout(function() {
      loader.remove();
    }, 500); // Vreme mora da odgovara CSS transition (0.5s)
  });
  
  // Fallback ako load event ne radi
  setTimeout(function() {
    loader.classList.add('hidden');
    setTimeout(function() {
      loader.remove();
    }, 500);
  }, 3000); // Maksimalno čekanje 3 sekunde
});