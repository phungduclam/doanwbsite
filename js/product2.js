var product = [];
var pro = [];

function saveproduct() {
  sessionStorage.setItem("shopping", JSON.stringify(pro));
}
// Load cart
function loadproduct() {
  pro = JSON.parse(sessionStorage.getItem("shopping"));
}

var chuyen = function () {
  pro = [];
  saveproduct();
  window.location = "index.html";
};

function handleClick() {
  $(".proo").click(function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var name = $(this).data("name");
    var img = $(this).data("img");
    var price = Number($(this).data("price"));
    var type = $(this).data("type");
    var detail = $(this).attr("data-detail");

    var item = {
      id,
      name,
      img,
      price,
      type,
      detail: JSON.parse(decodeURIComponent(detail)),
    };
    pro.push(item);
    saveproduct();
    window.location = "chitiet.html";
  });
}
if (sessionStorage.getItem("shopping") != null) {
  loadproduct();
}

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
var ProductLocal = function () {
  loadproduct();
  var Cproduct = "";
  var data1 = pro[pro.length - 1];
  Cproduct += "<h3>Sản phẩm/" + data1.name + "</h3>";
  Cproduct += '<div class="sanpham">';
  Cproduct += '<div class="hinhanh mt-3">';
  Cproduct += '<img src="img/' + data1.img + '" alt="">';
  Cproduct += "</div>";
  Cproduct += '<div class="content mt-3">';
  Cproduct += '<div class="title">';
  Cproduct += '<span class="title-name h5">' + data1.name + "</span> ";
  Cproduct +=
    '<span class="title-ma">Mã sản phẩm: <b>' + data1.id + "</b> </span> ";
  Cproduct += '<span class="title-trangthai">Còn hàng</span> ';
  Cproduct += "</div> ";
  Cproduct += '<div class="price">' + data1.price + "₫</div>";
  Cproduct +=
    '<button class="btn btn-primary add-to-cart add-cart  themhang"  data-id="' +
    data1.id +
    '" data-name="' +
    data1.name +
    '" data-img="' +
    data1.img +
    '" data-price="' +
    data1.price +
    '">Thêm vào giỏ</button>';
  Cproduct += '<div class="content-footer">';
  Cproduct += '<div class="giaohang">';
  Cproduct += '<div><i class="fas fa-truck"></i></div>';
  Cproduct += '<div class="giaohang-content">';
  Cproduct += "<h4>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h4>";
  Cproduct += "<p>(Sản phẩm trên 300,000đ)</p>";
  Cproduct += "</div>";
  Cproduct += "</div>";
  Cproduct += '<div class="giaohang">';
  Cproduct += '<div><i class="fas fa-file-invoice"></i></div>';
  Cproduct += '<div class="giaohang-content">';
  Cproduct += "<h4>ĐỔI TRẢ DỄ DÀNG</h4>";
  Cproduct += "<p>(Đổi trả 24h cho tất cả sản phẩm đầy đủ tem mác)</p>";
  Cproduct += "</div>";
  Cproduct += "</div>";
  Cproduct += '<div class="giaohang">';
  Cproduct += '<div><i class="fas fa-phone-alt"></i></div>';
  Cproduct += '<div class="giaohang-content">';
  Cproduct += "<h4>TỔNG ĐÀI BÁN HÀNG 1800 1162</h4>";
  Cproduct += "<p>(Miễn phí từ 8h30 - 21:30 mỗi ngày)</p>";
  Cproduct += "</div>        ";
  Cproduct += "</div>";
  Cproduct += "</div>";
  Cproduct += `
  <table class='table mt-5'>
    <tbody>
      <tr>
        <th width="40%">Màu</th>
        <td style="text-align:right">${data1.detail.color}</td>
      </tr>
      <tr>
        <th width="40%">Bảo hành</th>
        <td style="text-align:right">${data1.detail.warrantee}</td>
      </tr>
      <tr>
        <th width="40%">Kháng nước</th>
        <td style="text-align:right">${data1.detail.resistance}</td>
      </tr>

      <tr>
        <th width="40%">Dạng mặt số</th>
        <td style="text-align:right">${data1.detail.DangMatso}</td>
      </tr>

      <tr>
        <th width="40%">Loại dây</th>
        <td style="text-align:right">${data1.detail.LoaiDay}</td>
      </tr>

      <tr>
        <th width="30%">Loại kính</th>
        <td style="text-align:right">${data1.detail.LoaiKinh}</td>
      </tr>

      <tr>
        <th width="40%">Loại pin</th>
        <td style="text-align:right">${data1.detail.LoaiPin}</td>
      </tr>

      <tr>
        <th width="40%">Size mặt số</th>
        <td style="text-align:right">${data1.detail.SizeMatSo}</td>
      </tr>

      <tr>
        <th width="40%">Hãng</th>
        <td style="text-align:right">${data1.detail.Hang}</td>
      </tr>
      
    </tbody>
  </table>`;
  Cproduct += "</div>";

  Cproduct += "</div>";

  if (document.getElementById("chitiet")) {
    document.getElementById("chitiet").innerHTML = Cproduct;
  }
};

function renderProductRelated(dataProduct, selector) {
  var listproduct = "";
  for (const data of dataProduct) {
    // var data = JSON.parse(JSON.stringify(product[i]));
    var listproduct = '<div   class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="card product p-2" styte="width:auto">';
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
      '" data-price="' +
      data.price +
      '" data-type="' +
      data.type +
      '" data-detail="' +
      encodeURIComponent(JSON.stringify(data.detail)) +
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
    if (selector && document.getElementById(selector)) {
      document.getElementById(selector).innerHTML += listproduct;
    }
  }
  Save();
}

var getListProductsRelated = function () {
  let product = JSON.parse(localStorage.getItem("listProduct"));
  let productsRelated = product.filter(
    (item) => item.type === pro[0]?.type && item.id !== pro[0]?.id
  );
  renderProductRelated(productsRelated, "sanphamlq");
};

if (window.location.href.search("chitiet") !== -1) {
  getListProductsRelated();
  ProductLocal();
}
handleClick();
