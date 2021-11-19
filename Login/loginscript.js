// Array med lösenord... inte säkert (:
var DBUsers = [
  {
    username: "test",
    password: "123",
  },
  {
    username: "test2",
    password: "234",
  },
  {
    username: "test3",
    password: "345",
  },
];

// for loop som går igenom arrayen och jämför angivna lösenordet och användarnamnet med "databasen"
function validateUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (i = 0; i < DBUsers.length; i++) {
    if (username == DBUsers[i].username && password == DBUsers[i].password) {
      document.cookie = "username=" + username;
      document.cookie = "password=" + password;
      console.log("Inloggad som" + username);
      window.location.pathname = "/index.html";
      return;
    }
    console.log("Fel lösenord eller användarnamn!");
  }
}
