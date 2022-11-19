function checkData() {
  var enetrEmail = document.getElementById("entEmail").value;
  var enetrPwd = document.getElementById("entPwd").value;

  // get item from localstorage

  var getEmail = localStorage.getItem("userEmail");
  var getPwd = localStorage.getItem("userPwd");

  if (enetrEmail == getEmail) {
    if (enetrPwd == getPwd) {
      alert("Successfully Login");
    } else {
      alert("Wrong password or email");
    }
  } else {
    alert("Invalid details");
  }
}
