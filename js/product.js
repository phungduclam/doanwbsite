var product = [
  {
    id: "SP1",
    name: "Casio AE-1200WHD-1AVDF Nam Quartz ",
    img: "watch1.jpg",
    price: 335600,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 1,
  },
  {
    id: "SP2",
    name: "Casio MTP-1374L-1AVDF Nam Quartz",
    img: "watch2.jpg",
    price: 400000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 1,
  },
  {
    id: "SP3",
    name: "Casio MTP-1374D-1AVDF Nam Quartz",
    img: "watch3.jpg",
    price: 350000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 1,
  },
  {
    id: "SP4",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "watch4.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 1,
  },

  {
    id: "SP5",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "orient1.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 2,
  },

  {
    id: "SP6",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "orient2.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 2,
  },

  {
    id: "SP7",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "orient3.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 2,
  },

  {
    id: "SP8",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "orient4.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 2,
  },

  {
    id: "SP9",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "tissot1.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 3,
  },

  {
    id: "SP10",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "tissot2.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 3,
  },

  {
    id: "SP11",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "tissot3.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 3,
  },

  {
    id: "SP12",
    name: "Casio B640WC-5ADF Nữ Quartz",
    img: "tissot7.jpg",
    price: 564000,
    detail: {
      color: "trắng",
      warrantee: "quốc tế 2 năm ",
      resistance: "3 ATM(30m)",
    },
    type: 3,
  },
];
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
    var listproduct = '<div  class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3" > ';
    listproduct += '<div   class="card product p-2" styte="width:auto">';
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
      '" data-price="' +
      data.price +
      '">' +
      data.name +
      "</a></div>";
    listproduct +=
      '<div class="price text-center h6">' + data.price + "₫</div>";
    listproduct +=
      '<span class="text-center add-to-cart add-cart btn btn-outline-warning" data-id="' +
      data.id +
      '" data-name="' +
      data.name +
      '" data-img="' +
      data.img +
      '" data-price="' +
      data.price +
      '" onclick="tks()">';
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
  console.log(product);
  console.log(productsShirt);

  renderProduct(productsSkirt, "productsSkirt");
  renderProduct(productsShirt, "productsShirt");
  renderProduct(productsPants, "productsPants");
};

var getInfoDetails = function () {};

listLocal();
