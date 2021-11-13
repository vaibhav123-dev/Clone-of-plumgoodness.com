// sideMenu
function openMenu() {
    document.getElementById("mySideMenu").style.width = "350px";
  }
  
  function closeMenu() {
    document.getElementById("mySideMenu").style.width = "0";
  }
  var accord = document.getElementsByClassName("contentBx");
  
  for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }