document.getElementById("loginbtn").addEventListener("click", login);
  var logindetail = JSON.parse(localStorage.getItem("logindetails"));

  function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPass").value
   
    var flg = false;
        for (var i = 0; i < logindetail.length; i++) {
          if (
            email == logindetail[i].Email &&
            password == logindetail[i].Password
          ) {
            flag = true;
            break;
          } else {
            flag = false;
          }
        }
        if (flag == true && email != "" && password != "") {
          window.location.href = "home.html";
        } else if (flag == false) {
          alert("Invalid Credentials");
        } else {
          alert("Please enter credentials");
        }
    } 
  