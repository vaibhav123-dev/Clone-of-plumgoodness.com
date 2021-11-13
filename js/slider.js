// sliderJS
var data = [

    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1avocado_150x.jpg?v=1630919840",
        Name:"Avocado Daily Haircare Kit | For Frizzy Hair | Silicone & Sulphate Free | FREE Neem Comb",
        Price: 310,
        Review:1167 + " reviews",
    },
    { 
        Img_url: "https://cdn.shopify.com/s/files/1/0390/2985/products/1_603073d5-bfde-4502-824e-eb52c1600c4b_150x.jpg?v=1630921441",
        Name:"Ginseng Hair Fall Rescue Duo | Limited Edition | Prevents Breakage",
        Price: 423,
        Review:157 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/06_OM_New_1_1f494331-70c5-4d1b-9857-9452e83f831a_150x.jpg?v=1630921781",
        Name:"Olive & Macadamia Get Nourished Trio | Dull, Dry, Damaged Hair | Sulphate Free | 100% Vegan | With Free Hair Oil",
        Price: 427,
        Review:99 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1_3646ee52-ec42-431b-a6c7-96e9556d2566_150x.jpg?v=1630919818",
        Name:"Avocado Daily & Weekly Anti-Frizz Hair Kit | For Smooth & Shiny Hair | 100% Vegan | FREE Neem Comb",
        Price: 351,
        Review:1285 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1_AvocadoFrizzFreeDailyRegime_01b_150x.jpg?v=1630919859",
        Name:"Avocado Frizz Free Daily Hair Regime | For Frizz-Free Hair  | Goodness of Shea Butter, Argan Oil and Avocados | Silicone & Sulphate Free | Neem Comb Free",
        Price: 265,
        Review:227 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1_a921642f-0a81-4ef4-848e-c313ba91c2c3_150x.jpg?v=1630921339",
        Name:"Olive & Macadamia Hair Care Trio with Satin Headband",
        Price: 423,
        Review:789 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/WBG_4_150x.jpg?v=1630921828",
        Name:"Olive & Macadamia Hair Care Trio with Satin Headband",
        Price: 499,
        Review:207 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/Shampoo_Mask_1_150x.jpg?v=1630920936",
        Name:"Daily + Weekly Hair Care Duo  | Dry, Dull Damaged Hair | Sulphate Free | 100% Vegan",
        Price: 441,
        Review:881 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/2-A_150x.jpg?v=1630921412",
        Name:"Dull and Dry Hair Intense Repair Treatment | For Smooth & Shiny Hair | Suitable for Chemically Treated Hair",
        Price: 449,
        Review:97 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1_c4d5b9d3-183c-4098-8efc-bf00f791ca29_150x.jpg?v=1635398822",
        Name:"Ginseng Anti-Hair Fall Weekly Treatment | Limited Edition | Prevents Breakage & Strengthensn",
        Price: 305,
        Review:225 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1a.WBG_150x.jpg?v=1632452616",
        Name:"Avocado Nourish-Up Hair Mask | For Frizz-Free Hair | Contains Avocado Oil, Argan Oil & Shea Butter",
        Price: 269,
        Review:353 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1a.WBG_Front_1_150x.jpg?v=1630919938",
        Name:"Avocado Smoothin' It Conditioner | For Frizz-Free & Smooth Hair | Contains Shea Butter & Almond Oil | Silicone-Free",
        Price: 549,
        Review:568 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/GinsengRootNourishHairOil_1_150x.jpg?v=1630921463",
        Name:"Ginseng Root Nourish Hair Oil | Pre-Shampoo Hair Oil With Amla & Almond Oil | Promotes Hair Growth & Controls Hair Fall",
        Price: 298,
        Review:451 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/WBG_1_45649619-9b05-45f3-9ec7-ea17fea4f32b_150x.jpg?v=1630921893",
        Name:"Olive & Macadamia Healthy Hydration Shampoo | Dull, Dry, Damaged Hair | Safe for Chemically Treated Hair",
        Price: 788,
        Review:235 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/GinsengFallRescueScalpSerum_1_150x.jpg?v=1630921360",
        Name:"Ginseng Fall Rescue Scalp Serum | Strengthens roots and Promotes hair growth | Silicone-free",
        Price: 333,
        Review:121 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/WBG_1_150x.jpg?v=1630921964",
        Name:"Olive & Macadamia Mega Moisturizing Hair Mask | Hair Spa | Safe for Chemically Treated Hair |100% Vegan",
        Price: 635,
        Review:254 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/WBG_2_150x.jpg?v=1630922002",
        Name:"Olive & Macadamia Nutri-Shield Pre-Shampoo Hair Oil | 8 Natural Oil for Damaged Hair | Argan, Jojoba Oils | 100% Vegan",
        Price: 689,
        Review:254 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/1WBG_015e804d-92af-411a-830e-9760badad6c7_150x.jpg?v=1630922043",
        Name:"Olive & Macadamia Rich Nourish Conditioner | For Smooth & Shiny Hair | Dull, Dry, Damaged Hair | 100% Vegan",
        Price: 310,
        Review:302 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/Daily_weeklycareduo_1_2eda4de7-d704-464f-8c21-4a769967cad2_150x.jpg?v=1630922110",
        Name:"Olive & Macadamia Shampoo + Mask for Dry, Damaged Hair",
        Price: 420,
        Review:401 + " reviews",
    },
    { 
        Img_url:"https://cdn.shopify.com/s/files/1/0390/2985/products/3_AvocadoAntiFrizzTreatment_01a_150x.jpg?v=1634203361",
        Name:"Avocado Frizz Control Treatment | Prevents Frizz | Smooth & Shiny Hair | 100% Vegan",
        Price: 423,
        Review:213 + " reviews",
    },
  
  
  ]
  localStorage.setItem("hairList", JSON.stringify(data))
  
  
  productScroll();
  
  function productScroll() {
    var prod = JSON.parse(localStorage.getItem("hairList"));
    
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");
  
  
  display(prod)
  function display(prod){
    prod.map(function(items){
        var maindiv = document.createElement("div")
        maindiv.setAttribute("id", "maindiv")
        var imgdiv= document.createElement("div")
        imgdiv.setAttribute("id", "imgdiv")
        var offer = document.createElement("div")
        offer.setAttribute("id", "offer")
        offer.textContent="10% off"
        var img = document.createElement("img")
        img.setAttribute("src", items.Img_url)
        var div1= document.createElement("div")
        div1.setAttribute("id", "div1")
        var rating = document.createElement("div")
        rating.setAttribute("id", "rating")
        rating.innerHTML= "<span>★★★★☆</span> " + items.Review;
        var title= document.createElement("div")
        title.textContent = items.Name;
        var dash= document.createElement("div")
        dash.setAttribute("id", "dash")
        var price= document.createElement("div")
        price.textContent = "₹" +" " +items.Price;
        var btn= document.createElement("button")
        btn.textContent="add to cart"
        imgdiv.append(offer, img)
    
        div1.append(rating,title,dash,price)
        maindiv.append(imgdiv,div1, btn)
        document.getElementById("slide").append(maindiv)
    
    })
  }
  
  for (let i = 0; i < next.length; i++) {
    //refer elements by class name
  
    let position = 0; //slider postion
  
    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });
  
    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }
  
  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
  }
  
  function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
  }
  
  function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
  }
  
  productScrolltwo();
    
  function productScrolltwo() {
    var products=JSON.parse(localStorage.getItem("skinList"))
    console.log("products",products)
    let slider = document.getElementById("slider2");
    let next = document.getElementsByClassName("pro-next-two");
    let prev = document.getElementsByClassName("pro-prev-two");
    let slide = document.getElementById("slide2");
    let item = document.getElementById("slide2");
  
  display(products)
    function display(products){
      console.log("here")
      products.map(function(items){
          var maindiv = document.createElement("div")
          maindiv.setAttribute("id", "maindiv")
          maindiv.style.width = "300px";
          var imgdiv= document.createElement("div")
          imgdiv.setAttribute("id", "imgdiv")
          var offer = document.createElement("div")
          offer.setAttribute("id", "offer")
          offer.textContent="10% off"
          var img = document.createElement("img")
          img.setAttribute("src", items.Img_url)
          var div1= document.createElement("div")
          div1.setAttribute("id", "div1")
          var rating = document.createElement("div")
          rating.setAttribute("id", "rating")
          rating.innerHTML= "<span>★★★★☆</span> " + items.Review;
          var title= document.createElement("div")
          title.textContent = items.Name;
          var dash= document.createElement("div")
          dash.setAttribute("id", "dash");
          dash.style.marginLeft = "38%"
          var price= document.createElement("div")
          price.textContent = "₹" +" " +items.Price;
          var btn= document.createElement("button")
          btn.textContent="add to cart"
          imgdiv.append(offer, img)
      
          div1.append(rating,title,dash,price)
          maindiv.append(imgdiv,div1, btn)
          document.getElementById("slide2").append(maindiv)
      
      })
  }
  
  
  
  
    for (let i = 0; i < next.length; i++) {
      //refer elements by class name
  
      let position = 0; //slider postion
  
      prev[i].addEventListener("click", function() {
        //click previos button
        if (position > 0) {
          //avoid slide left beyond the first item
          position -= 1;
          translateX(position); //translate items
        }
      });
  
      next[i].addEventListener("click", function() {
        if (position >= 0 && position < hiddenItems()) {
          //avoid slide right beyond the last item
          position += 1;
          translateX(position); //translate items
        }
      });
    }
  
    function hiddenItems() {
      //get hidden items
      let items = getCount(item, false);
      let visibleItems = slider.offsetWidth / 210;
      return items - Math.ceil(visibleItems);
    }
  
  
  function translateX(position) {
    //translate items
    slide.style.left = position * -210 + "px";
  }
  
  function getCount(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
      if (parent.childNodes[i].nodeType != 3) {
        if (getChildrensChildren)
          relevantChildren += getCount(parent.childNodes[i], true);
        relevantChildren++;
      }
    }
    return relevantChildren;
  }
}

