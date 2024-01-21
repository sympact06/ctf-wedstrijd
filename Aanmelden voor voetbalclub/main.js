const opdracht = new Opdracht(1, "Aanmelden voor voetbalclub", "beschrijving", 10, "onbeveiligde gegevens", localStorage.getItem("token"), localStorage.getItem("uid"));

(async function() {
  const flag = await opdracht.getFlag();
  if (flag == null) {
      document.getElementById("flag").innerHTML = "Ververs de pagina om de flag te zien.";
      return;
  }
})();

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const voornaam = document.getElementsByName("first_name")[0].value;

  if (voornaam === "Olivier") {
      getFlag();
      document.getElementById("bericht").style.display = "none";
      alert("Gefeliciteerd! U heeft Olivier aangemeld!");
  } else {
      alert("Voer de juiste voornaam in.");
  }
});

async function getFlag() {
  const flag = await opdracht.getFlag();
  if (flag == null) {
      document.getElementById("flag").innerHTML = "Ververs de pagina om de flag te zien.";
      return;
  }
  document.getElementById("flag").innerHTML = flag;
}
