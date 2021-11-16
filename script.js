function sendsearch() {
  const search = document.getElementById("text").ariaValueMax;
  sessionStorage.setItem("text", search);
  return;
}
