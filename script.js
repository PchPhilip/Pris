// Om man söker lagras värdet tillfälligt i sessionen som sedan hämtas av "searchscript.js"
function sendsearch() {
  const search = document.getElementById("textsearch").value;
  sessionStorage.setItem("textse", search);
  return;
}

$(document).ready(function(){
  $('input').click(function(){
    $('body').toggleClass('active')
  });
});
