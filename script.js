let huidigeKleur = "";

function genereerKleur() {
  huidigeKleur = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = huidigeKleur;
  document.getElementById("kleurcode").textContent = "Welke kleur is dit?";
  document.getElementById("resultaat").textContent = "";
  document.getElementById("gok").value = "";
}

function checkGok() {
  const gok = document.getElementById("gok").value.trim().toLowerCase();
  if (gok === huidigeKleur.toLowerCase()) {
    document.getElementById("resultaat").textContent = "✅ dit is kapot zeldzaam!";
  } else {
    document.getElementById("resultaat").textContent = `❌ Helaas!maak ook niet uit het is super lastig De kleur was ${huidigeKleur}`;
  }

  setTimeout(genereerKleur, 3000); // nieuwe kleur na 3 seconden
}

genereerKleur(); // start met een random kleur
