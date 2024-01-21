const opdracht = new Opdracht(1, "Introductie", "Leer kennis maken met de nieuwe Capture The Flag", 10, "Introductie", localStorage.getItem("token"), localStorage.getItem("uid"));

(async function() {
  const flag = await opdracht.getFlag();
  if (flag == null) {
    document.getElementById("flag").innerHTML = "Ververs de pagina om de flag te zien.";
    return;
  }
  document.getElementById("flag").innerHTML = flag;
})();