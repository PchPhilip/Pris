// Slumpar Deals!
document.addEventListener("DOMContentLoaded", function () {
  var ulist = document.querySelectorAll("ul");
  var list = ulist[0].querySelectorAll("li").length;
  for (var i = 0; i < list; i++) {
    var randomselect = Math.floor(Math.random() * list);
    ulist.forEach(function (random) {
      random.appendChild(random.querySelectorAll("li")[randomselect]);
    });
  }
});

function randomdeals() {}

// Om man söker lagras värdet tillfälligt i sessionen som sedan hämtas av "searchscript.js"
function sendsearch() {
  const search = document.getElementById("textsearch").value;
  sessionStorage.setItem("textse", search);
  return;
}
