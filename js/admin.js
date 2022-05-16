var product = [];

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
var productAdmin = function () {
  var listproduct1 = "";
  for (var i in product) {
    var data = JSON.parse(JSON.stringify(product[i]));
    var listproduct1 = "<tr>";
    listproduct1 += "<td>" + data.id + "</td>";
    listproduct1 += "<td>" + data.name + "</td>";
    listproduct1 +=
      '<td><img src="../img/' +
      data.img +
      '" alt="" style="width: 50px;"></td>';
    listproduct1 += "<td>" + data.price + " ₫</td>";
    //  listproduct1+='';
    listproduct1 +=
      '<td><button onclick="updateProduct(' +
      i +
      ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
    listproduct1 +=
      '<button onclick="deleteProduct(' +
      i +
      ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
    listproduct1 += "</tr>";
    // if (window.location.href.search("chitiet") !== -1) {
    //   document.getElementById("product-admin").innerHTML += listproduct1;
    // }
    document.getElementById("product-admin").innerHTML += listproduct1;
  }
  // Save();
};

var addProduct = function () {
  const fileInput = document.getElementById("myfile");
  var Product = {
    id: "SP" + parseInt(product.length + 1),
    name: document?.getElementById("name")?.value ?? null,
    img: fileInput?.files[0]?.name ?? null,
    price: document?.getElementById("price")?.value ?? null,
    // type: document?.getElementById("type")?.value ?? null,
    // detail: document?.getElementById("detail")?.value ?? null,
  };
  if (Product.name && Product.img && Product.price) {
    product.push(Product);
    localStorage.setItem("listProduct", JSON.stringify(product));
    window.location.reload();
  } else {
    alert("vui lòng điền đủ cac ô ");
  }
};
console.log(product);
// Xóa sản phẩm
var deleteProduct = function (i) {
  product.splice(i, 1);
  localStorage.setItem("listProduct", JSON.stringify(product));
  window.location.reload();
  alert("đã xóa sản phẩm")
};

// Sửa sản phẩm
var updateProduct = function (i) {
  var k = product[i];
  document.getElementById("idd").value = k.id;
  document.getElementById("named").value = k.name;
  // document.getElementById("imgdd").value = k.img;
  document.getElementById("priced").value = k.price;
  
  document.getElementById("idd").setAttribute("disabled", "disabled");

  document.getElementById("update-product").innerHTML =
  '<button class="btn btn-outline-danger mt-3" onclick="submitUpdateProduct(' +
  i +
  ')"> Đồng ý</button>';
};
var submitUpdateProduct = function (i) {
  alert("Thành công");
console.log(document.getElementById("imgdd"));
  var k = product[i];
  k.id = document.getElementById("idd").value;
  k.name = document.getElementById("named").value;
  if (document.getElementById("imgdd").files[0]?.name) {
    k.img = document.getElementById("imgdd").files[0].name;
  }
  k.price = document.getElementById("priced").value;

  console.log(k);
  // document.getElementById("idd").setAttribute("disabled","disabled");
  localStorage.setItem("listProduct", JSON.stringify(product));
  window.location.reload();
};

var userAdmin = function () {
  var listproduct = "";
  for (var i in user) {
    var data = JSON.parse(JSON.stringify(user[i]));
    var listproduct = "<tr>";
    listproduct += "<td>" + data.id + "</td>";
    listproduct += "<td>" + data.username + "</td>";
    //   listproduct+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
    listproduct += "<td>" + data.email + "</td>";
    //  listproduct1+='';
    listproduct +=
      '<td><button onclick="updateProduct(' +
      i +
      ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
    listproduct +=
      '<button onclick="deleteProduct(' +
      i +
      ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
    listproduct += "</tr>";

    document.getElementById("user-admin").innerHTML += listproduct;
  }
  // Save();
};
productAdmin();
if (window.location.href.search("user") !== -1) {
  userAdmin();
}
