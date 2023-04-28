let product = document.getElementById("product");
let productDrop = document.getElementById("productDrop");
let arrowProd = document.getElementById("arrowProd");

let arrowCon = document.getElementById("arrowCon");
let connectDrop = document.getElementById("connectDrop");
let connect = document.getElementById("connect");
productDrop.style.display = "none";

product.addEventListener("click", () => {
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
    productDropMob.style.display = "flex";
    arrowProdMob.style.transform = "rotate(180deg)";
  } else {
    productDropMob.style.display = "none";
    arrowProdMob.style.transform = "rotate(360deg)";
  }
});

connectDrop.style.display = "none";
connect.addEventListener("click", () => {
  if (connectDrop.style.display === "none") {
    arrowCon.style.transform = "rotate(180deg)";
    connectDrop.style.display = "block";
  } else {
    connectDrop.style.display = "none";

    arrowCon.style.transform = "rotate(360deg)";
  }
});



let connectConnMob = document.getElementById("connectConnMob");
let connDropMob = document.getElementById("connDropMob");
let arrowConnMob = document.getElementById("arrowConnMob");
connectConnMob.style.display = "none";
connDropMob.addEventListener("click", () => {
  if (connectConnMob.style.display === "none") {
    arrowConnMob.style.transform = "rotate(180deg)";
    connectConnMob.style.display = "flex";
  } else {
    connectConnMob.style.display = "none";
    arrowConnMob.style.transform = "rotate(360deg)";
  }
});

// menu hamburguer

let menuHamburguer = document.getElementById("menuHamburguer");
let menuClose = document.getElementById("menuClose");
let menuOpen = document.getElementById("menuOpen");
menuOpen.style.display = "none";
menuHamburguer.addEventListener("click", () => {
  if (menuOpen.style.display === "none") {
    menuOpen.style.display = "block";
    menuClose.style.display = "block";
    menuHamburguer.style.display = "none";
  } else {
    return;
  }
});

menuClose.addEventListener("click", () => {
  if (menuOpen.style.display === "block") {
    menuOpen.style.display = "none";
    menuClose.style.display = "none";
    menuHamburguer.style.display = "block";
  } else {
    return;
  }
});
