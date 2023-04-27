let product = document.getElementById("product");
let productDrop = document.getElementById("productDrop");
let arrowProd = document.getElementById("arrowProd");

let arrowCon = document.getElementById("arrowCon");
let connectDrop = document.getElementById("connectDrop");
let connect = document.getElementById("connect");
productDrop.style.display = "none";

product.addEventListener("mouseover", () => {
  if (productDrop.style.display === "none") {
    arrowProd.style.transform = "rotate(180deg)";
    productDrop.style.display = "block";
  } else {
    productDrop.style.display = "none";

    arrowProd.style.transform = "rotate(360deg)";
  }
});

let productDropMob = document.getElementById("productDropMob");
let dropMob = document.getElementById("dropMob");
let arrowProdMob = document.getElementById("arrowProdMob");

productDropMob.style.display = "none";
dropMob.addEventListener("click", () => {
  if (productDropMob.style.display === "none") {
   productDropMob.style.display = "block"
  } else {
    
    productDropMob.style.display = "none";
 }

});

connectDrop.style.display = "none";
connect.addEventListener("mouseover", () => {
  if (connectDrop.style.display === "none") {
    arrowCon.style.transform = "rotate(180deg)";
    connectDrop.style.display = "block";
  } else {
    connectDrop.style.display = "none";

    arrowCon.style.transform = "rotate(360deg)";
  }
});

// menu hamburguer

let menuHamburguer = document.getElementById("menuHamburguer");
let menuClose = document.getElementById("menuClose");
let menuOpen = document.getElementById("menuOpen");

menuHamburguer.addEventListener("click", () => {
  menuOpen.style.display = "flex";
  menuHamburguer.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  menuHamburguer.style.display = "block";
  menuClose.style.display = "none";
});
