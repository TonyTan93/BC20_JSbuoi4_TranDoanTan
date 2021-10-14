// <!-- bai 1: so sanh 3 so nguyen  -->


function soSanh (){
    var soThuNhat = document.getElementById("soThuNhat").value;
    var soThuHai = document.getElementById("soThuHai").value;
    var soThuBa = document.getElementById("soThuBa").value;

    if (soThuNhat < soThuHai && soThuHai <soThuBa) {
        document.getElementById("txtSoSanh").innerHTML = "Thứ tự tăng dần là: " + soThuNhat + " < " + soThuHai +" < " + soThuBa;
    } else if (soThuNhat < soThuBa && soThuBa <soThuHai) {
        document.getElementById("txtSoSanh").innerHTML = "Thứ tự tăng dần là: " + soThuNhat + " < " + soThuBa +" < " + soThuHai;
    } else if (soThuHai < soThuNhat && soThuNhat <soThuBa) {
        document.getElementById("txtSoSanh").innerHTML = "Thứ tự tăng dần là: " + soThuHai + " < " + soThuNhat +" < " + soThuBa;
    } else if (soThuHai < soThuBa && soThuBa <soThuNhat) {
        document.getElementById("txtSoSanh").innerHTML = "Thứ tự tăng dần là: " + soThuHai + " < " + soThuBa +" < " + soThuNhat;
    } else if (soThuBa < soThuNhat && soThuNhat <soThuHai) {
        document.getElementById("txtSoSanh").innerHTML = "Thứ tự tăng dần là: " + soThuBa + " < " + soThuNhat +" < " + soThuHai;
    } else {
        document.getElementById("txtSoSanh").innerHTML = "Thứ tự tăng dần là: " + soThuBa + " < " + soThuHai +" < " + soThuNhat;
    }
}
document.getElementById("btnSoSanh").onclick = soSanh;

// bai 2: gui loi chao dang nhap

function xinChao (){
    var nguoiDung = document.getElementById ("nguoiDung").value;
    switch (nguoiDung) {
        case "bo":
            nguoiDung = " Bố";
            break;
        case "me":
            nguoiDung = " Mẹ";
            break;
        case "anhtrai":
            nguoiDung = " Anh trai";
            break;
        case "emgai":
            nguoiDung = " Em gái";
            break;
        default:
            nguoiDung = ". Xin vui lòng chọn người dùng!";
            break;
    }
document.getElementById("txtLoiChao").innerHTML = "Xin chào" + nguoiDung ;
}
document.getElementById("btnLoiChao").onclick = xinChao;



// bai 3: Dem so chan le 

function soChanLe (){
    var soNguyen1 = document.getElementById("soNguyen1").value;
    var soNguyen2 = document.getElementById("soNguyen2").value;
    var soNguyen3 = document.getElementById("soNguyen3").value;
    var soChan = 0;
    var soLe = 0;

    if (soNguyen1 % 2 == 0) {
        soChan = soChan + 1;
    } else {
        soLe = soLe +1;
    }
    if (soNguyen2 % 2 == 0) {
        soChan = soChan + 1;
    } else {
        soLe = soLe +1;
    }
    if (soNguyen3 % 2 == 0) {
        soChan = soChan + 1;
    } else {
        soLe = soLe +1;
    }

document.getElementById("txtDemSo").innerHTML = "Có " + soChan + " số chẵn và " + soLe + " số lẻ."
}
document.getElementById("btnDemSo").onclick = soChanLe;

// bai 4: kiem tra tam giac 
function checkTamgiac (){
    var canh1 = document.getElementById("canh1").value;
    var canh2 = document.getElementById("canh2").value;
    var canh3 = document.getElementById("canh3").value;
    tamGiac = "";

    if (canh1*canh1 + canh2*canh2 == canh3*canh3 ||
        canh1*canh1 + canh3*canh3 == canh2*canh2 ||
        canh2*canh2 + canh3*canh3 == canh1*canh1) {
        tamGiac = tamGiac + "vuông";
    }else if (canh1 == canh2 && canh2 == canh3) {
        tamGiac = tamGiac + "đều"
    } else if ((canh1 == canh2 && canh2 != canh3) || 
                (canh1 == canh3 && canh1 !=canh2 ) ||
                (canh2 == canh3 && canh1 != canh3)){
        tamGiac = tamGiac + "cân";
    } else {
        tamGiac = tamGiac + "thường";
    }

document.getElementById ("txtTamGiac").innerHTML = "Đây là tam giác " + tamGiac ; 
}
document.getElementById("btnTamGiac").onclick = checkTamgiac;


