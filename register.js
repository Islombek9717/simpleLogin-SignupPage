function addData() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  // to store data in localstorage

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPwd", pass);
}
