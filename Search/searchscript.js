// Kör koden när sidan laddas in.
window.addEventListener("load", () => {
  //Hämtar sökvärdet som är lagrat tillfälligt i sessionen.
  const search = sessionStorage.getItem("textse");
  document.getElementById("search-result").innerHTML = search;
  document.getElementsByName("text")[0].placeholder = search;

  // Slumpar sökningens resultat då jag inte hann slutföra mitt API för att hämta riktigta produkter.
  var ulist = document.querySelectorAll("ul");
  var list = ulist[0].querySelectorAll("li").length;
  for (var i = 0; i < list; i++) {
    var randomselect = Math.floor(Math.random() * list);
    ulist.forEach(function (random) {
      random.appendChild(random.querySelectorAll("li")[randomselect]);
    });
  }
});

// Om man söker igen.
function sendsearch() {
  const search = document.getElementById("textsearch").value;
  sessionStorage.setItem("textse", search);
  return;
}
