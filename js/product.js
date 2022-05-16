// import {product } from './data';
var pro = [];

function saveproduct() {
  sessionStorage.setItem("shopping", JSON.stringify(pro));
}
// đẩy mảng product vào local
function Save() {
  localStorage.setItem("listProduct", JSON.stringify(product));
}

//lấy sản phẩm
function load() {
  product = JSON.parse(localStorage.getItem("listProduct"));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
  load();
}
if (localStorage.getItem("listProduct") == null) {
  Save();
}

function renderProduct(dataProduct, selector) {
  var listproduct = "";
  for (const data of dataProduct) {
    var listproduct =
      '<div   class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3 watchProduct" > ';
    listproduct += '<div   class="card product" styte="width:auto">';
    listproduct +=
      '<a ><img  class="proo card-img-top" data-id="' +
      data.id +
      '" data-name="' +
      data.name +
      '" data-img="' +
      data.img +
      '" data-price="' +
      data.price +
      '" data-type="' +
      data.type +
      '" data-detail="' +
      encodeURIComponent(JSON.stringify(data.detail)) +
      '" src="img/' +
      data.img +
      '" alt="..."></a>';
    listproduct +=
      '<div class="card-title product-title text-center h5" ><a href="#"  class="proo" data-id="' +
      data.id +
      '" data-name="' +
      data.name +
      '" data-img="' +
      data.img +
      '" data-type="' +
      data.type +
      '" data-detail="' +
      encodeURIComponent(JSON.stringify(data.detail)) +
      '" data-price="' +
      data.price +
      '">' +
      data.name +
      "</a></div>";
    listproduct +=
      '<div class="price text-center h6 mb-3">' + data.price + "₫</div>";
    listproduct +=
      '<span class="text-center add-to-cart add-cart btn btn-outline-warning" data-id="' +
      data.id +
      '" data-name="' +
      data.name +
      '" data-img="' +
      data.img +
      '" data-price="' +
      data.price +
      '" onclick="">';
    listproduct += "<a>";
    listproduct += '<i class="fas fa-cart-plus"></i>';
    listproduct += "</a>";
    listproduct += "</span>";
    listproduct += "</div>";
    listproduct += "</div>";
    document.getElementById(selector).innerHTML += listproduct;
  }
  Save();
}
var listLocal = function () {
  let productsSkirt = product.filter((item) => item.type === 1);
  let productsShirt = product.filter((item) => item.type === 2);
  let productsPants = product.filter((item) => item.type === 3);
  renderProduct(productsSkirt, "productsSkirt");
  renderProduct(productsShirt, "productsShirt");
  renderProduct(productsPants, "productsPants");
};

var getInfoDetails = function () {};

listLocal();