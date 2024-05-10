const data = document.getElementById("content");
const get_data = document.getElementById("get_data");

get_data.addEventListener("click", function () {
  const xttp = new XMLHttpRequest();
  xttp.open("GET", "https://dummyjson.com/products");

  xttp.send();

  xttp.onreadystatechange = function () {
    if (xttp.readyState === 4 && xttp.status === 200) {
      const responseData = JSON.parse(xttp.responseText);
      const products = responseData.products;
      display(products);
    } 
  };


});


function display(products) {
  const dataList = products
    .map(
      (product) => `
    <img src="${product.thumbnail}"/>
    <li>${product.title}</li>`
    )
    .join("");
  data.innerHTML = `<ul>${dataList}</ul>`;
}
