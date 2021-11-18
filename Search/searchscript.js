window.addEventListener("load", () => {
  const search = sessionStorage.getItem("textsearch");
  var search2 = document.getElementById("textsearch");
  document.getElementById("search-result").innerHTML = search2;
});
