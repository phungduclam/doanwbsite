function loaddon() {
  donhang = JSON.parse(localStorage.getItem("listdon"));
}

var infoOrders = function () {
  var listElements = "";
  for (var i in donhang) {
    var data = JSON.parse(JSON.stringify(donhang[i]));
    console.log("data: ",data);
    
    varlistElements = "<tr>";
    listElements += "<td>" + data.id + "</td>";
    listElements += "<td>";
    listElements += "<ul style='list-style-type:none'>";
    for (let proOrder of data.orderProduct) {
      console.log(proOrder);
      listElements += "<li>";
      listElements += "<span>" + proOrder?.name + "</span>";
      listElements +=
        "<span style='color: red; margin-left: 15px'><br>Số lượng:" +
        proOrder?.count +
        "</span>";
        listElements += '<br> <span><img src="../img/'+proOrder.img+'" alt="" style="width: 50px;"></span>';
      listElements += "</li>";
    }
    listElements += "</ul>";
    listElements += "</td>";
    listElements += "<td>" + data.total + "₫</td>";
    listElements += "<td>" + data.name + "</td>";
    listElements += "<td>" + data.phone + "</td>";
    //  listElements+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
    listElements += "<td>" + data.email + "</td>";
    listElements += "<td>" + data.address + "</td>";
    listElements += "<td>" + data.trangthai + "</td>";
    // listElements1+='';
    listElements +=
      '<td><button onclick="updateListOrders(' +
      i +
      ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
    listElements +=
      '<button onclick="deleteOrders(' +
      i +
      ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
    listElements += "</tr>";
    document.getElementById("order-admin").innerHTML = listElements;
  }

  console.log(listElements);
  // Save();
};
loaddon();

//update san pham ma khach hang da dat
var updateListOrders = function (i) {
 
  var k = donhang[i];
  console.log(k, 'donhangk');
  (document.getElementById("don-id").value = k.id),
    (document.getElementById("don-soluong").value = k.soluong),
    (document.getElementById("don-total").value = k.total),
    (document.getElementById("don-user").value = k.name),
    (document.getElementById("don-phone").value = k.phone),
    (document.getElementById("don-email").value = k.email),
    (document.getElementById("don-address").value = k.address),
    (document.getElementById("trangthai").value = k.trangthai),
    document.getElementById("don-id").setAttribute("disabled", "disabled");

  document.getElementById("Update-orders").innerHTML =
    '<button class="btn btn-outline-danger mt-3" onclick="updateOrder(' +
    i +
    ')"> Đồng ý</button>';
};

var updateOrder = function (i) {
  alert("Thành công");
  var k = donhang[i];
  console.log(k, 'donhangk');
  (k.id = k.id),
    (k.username = document.getElementById("don-id").value),
    (k.soluong = document.getElementById("don-soluong").value),
    (k.total = document.getElementById("don-total").value),
    (k.name = document.getElementById("don-user").value),
    (k.sdt = document.getElementById("don-phone").value),
    (k.email = document.getElementById("don-email").value),
    (k.address = document.getElementById("don-address").value),
    (k.trangthai = document.getElementById("trangthai").value),
    localStorage.setItem("listdon", JSON.stringify(donhang));
  window.location.reload();
};
// Xóa sản phẩm
var deleteOrders = function (i) {
  donhang.splice(i, 1);
  localStorage.setItem("listdon", JSON.stringify(donhang));
  
  window.location.reload();
  alert("Đã xóa đơn hàng")
};

infoOrders();
