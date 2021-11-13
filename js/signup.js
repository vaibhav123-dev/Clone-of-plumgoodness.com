document.getElementById("signupbtn").addEventListener("click", signup);
  var userCred = JSON.parse(localStorage.getItem("logindetails")) || [];

  function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    

    var dataObj = {
      Email: email,
      Password: password,
    };
    userCred.push(dataObj);
    localStorage.setItem("logindetails", JSON.stringify(userCred));
    //redirect to login page
    if (email != "" && password != "" ) {
     alert("Sign up successful")
    } else {
      alert("Please enter credentials");
    }
  }