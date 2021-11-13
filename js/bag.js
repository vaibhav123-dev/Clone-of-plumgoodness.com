// openocart
function openNav() {
    document.getElementById("mySidenav").style.width = "420px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  var cartitems=JSON.parse(localStorage.getItem("Usercart")) || [];
  
  cartitems.map(function(items) {
   var maindiv=document.createElement("div");
   maindiv.setAttribute("id","maindiv1")
   var imgdiv=document.createElement("div");
   imgdiv.setAttribute("id","imgdiv1")
   var img=document.createElement("img")
   img.setAttribute("src",items.Img_url)
   var namediv=document.createElement("div")
   namediv.setAttribute("id","namediv1")
   namediv.textContent=items.Name;
  
   
   var pricediv=document.createElement("div")
   pricediv.setAttribute("id","pricediv1")
   pricediv.textContent="₹ "+items.Price+".00";
   var remove=document.createElement("div");
   remove.setAttribute("id","remove");
   remove.textContent="remove";
   remove.addEventListener("click",removeitem)
   document.getElementById("mycart1").addEventListener("click",function(){
     window.location.href="views.html"
   })
  
   var totalA = cartitems.reduce(function (acc, cv) {
    return acc + Number(cv.Price);
  }, 0);
  
   document.getElementById("p").textContent ="₹ "+totalA+".00";
  
  
   maindiv.append(imgdiv, namediv, pricediv)
   imgdiv.append(img)
   pricediv.append(remove)
   document.querySelector(".container").append(maindiv)
  })
  function removeitem(event) {
  event.target.parentElement.parentNode.remove();
  }