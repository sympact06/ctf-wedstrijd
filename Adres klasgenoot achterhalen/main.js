const opdracht = new Opdracht(1, "Adres van klasgenoot achterhalen", "probeer onbeveiligde gegevens te achterhalen", 10, "onbeveiligde gegevens", localStorage.getItem("token"), localStorage.getItem("uid"));

(async function() {
  const flag = await opdracht.getFlag();
  if (flag == null) {
    document.getElementById("flag").innerHTML = "Ververs de pagina om de flag te zien.";
    return;
  }
  document.getElementById("flag").innerHTML = flag;
})();