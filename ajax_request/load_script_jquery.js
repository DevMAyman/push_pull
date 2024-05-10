$("#get_data").click(function () {
  $.ajax({
    url: "https://dummyjson.com/products",
    method: "GET",
    success: function (data) {
      const products = data.products;
      display(products);
    },
    error: function (xhr, status, error) {
      console.error("Request failed. Status:", xhr.status);
    },
  });
});

function display(products) {
  const dataList = products
    .map(
      (product) => `
    <img src="${product.thumbnail}"/>
    <li>${product.title}</li>`
    )
    .join("");
  $("#content").html(`<ul>${dataList}</ul>`);
}
