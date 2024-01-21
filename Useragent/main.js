const opdracht = new Opdracht(1, "Header Tag", "Lees de header uit", 20, "Beginner", localStorage.getItem("token"), localStorage.getItem("uid"));
const Useragent = window.navigator.userAgent;
const Expected = "NoWindows";

(async function() {
  const flag = await opdracht.getFlag();
  let String = '<span class="text-danger">Het wachtwoord verschijnt hier als je User-Agent overeen komt.</span>';
  if (Useragent === Expected) {
    String = '<span class="text-success">' + flag + '</span>';
  }
  document.getElementById("password").innerHTML = String;
})();