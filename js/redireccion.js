elemento = document.getElementById("item1");
elemento.onclick = function () {
  setTimeout(() => {
    location.href = "./index1.html";
  }, 1000);
};

elemento = document.getElementById("item2");
elemento.onclick = function () {
  setTimeout(() => {
    location.href = "./index.html#why?";
  }, 1000);
};

elemento = document.getElementById("item3");
elemento.onclick = function () {
  setTimeout(() => {
    location.href = "./index.html#cont3";
  }, 1000);
};
