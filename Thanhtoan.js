function changeImage() {
    document.getElementById("imgid").src="119e5f5b-419c-4715-a5d6-87cfa09796da.png";
        if (imgid.src="119e5f5b-419c-4715-a5d6-87cfa09796da.png"){if (window.confirm('Bạn đã đặt hàng thành công, nhấn "OK" để quay về trang chủ')) 
        {
        window.location.href='index.html';
        };}
}
function check() {
    
    
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('email').value;
    data[2] = document.getElementById('password').value;
    data[3] = document.getElementById('cpassword').value;
    
    var myerror = new Array();
    myerror[0] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập Họ và Tên</span>";
    myerror[1] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập email</span>";
    myerror[2] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập số điện thoại</span>";
    myerror[3] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập địa chỉ giao hàng</span>";
    
    var nearby = new Array("z-name", "z-email", "z-password", "z-cpassword");
    
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "👍";
        }
    }
    
}

