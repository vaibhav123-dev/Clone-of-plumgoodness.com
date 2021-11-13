var viewcart=JSON.parse(localStorage.getItem("Usercart")) ||[];

viewcart.map(function(item,index){

    var details1=document.createElement("div");
    details1.setAttribute("class", "details1")
    var img=document.createElement("img");
    img.setAttribute("src",item.Img_url);
    
    var details2=document.createElement("div");
    details2.setAttribute("class", "details2")
    var h3=document.createElement("h3");
    h3.textContent = item.Name;
    var h6=document.createElement("h6")
    h6.textContent = "(100% off)"


    var btn=document.createElement("button")
    btn.setAttribute("id","btn")
    btn.textContent="update cart"
    
    var details3=document.createElement("div")
    details3.setAttribute("class","details3")
    var money=document.createElement("div")
    money.setAttribute("class","money same1")
    var h2=document.createElement("h3")
    h2.textContent="₹ "+ item.Price +".00";
    var remove=document.createElement("div")
    remove.setAttribute("class","remo same2")
    var anchor=document.createElement("a")
    anchor.textContent="remove";

    var totalA = viewcart.reduce(function (acc, cv) {
        return acc + Number(cv.Price);
      }, 0);
document.querySelector(".total1").textContent= "₹ "+ totalA+".00";
    details1.append(img)
    details2.append(h3,h6,btn)
    money.append(h2)
    remove.append(anchor)
    details3.append(money,remove)
    
    document.querySelector(".product1").append(details1,details2,details3)
    
    
})
//  gotopay
document.querySelector(".gotopay").addEventListener("click",function() {
    window.location.href = "checkOut.html"
    })
    // gotoskinpage
    document.getElementById("gotoproductskin").addEventListener("click",function() {
        window.location.href = "skin.html"
      })
       // gotohairpage
    document.getElementById("gotoproducthair").addEventListener("click",function() {
        window.location.href = "hair.html"
      })
      // go to login page
    
    document.getElementById("register").addEventListener("click",function() {
        window.location.href = "signInPage.html"
      })

      // gotocheckout
      document.querySelector("#bttttn").addEventListener("click",function() {
        window.location.href = "checkOut.html"
        })