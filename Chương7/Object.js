//object
    
// let objectName = { 
//     key1 : value1,
//     key2 : value2,
//     key3 : value3,
// }

//VD1
let student = {
    ten : "An",
    tuoi : 20,
    lop : "CNNT",
    gioithieu : function() {
        document.write("Xin chao, toi la " + this.ten + ", toi " + this.tuoi + " tuoi, lop " + this.lop + "<br>");
    }
}
student.gioithieu(); // Xin chao, toi la An, toi 20 tuoi, lop CNNT

//VD2
let phone = {
    hang : "Samsung",
    mau : "den",
    pin : 80,
    sacpin : function() {
        this.pin = 100;
        document.write("Pin da duoc sac day<br>");
    },
    Hienthithongtin : function() {
        document.write("Hang: " + this.hang + "Mau: " + this.mau + "Pin: " + this.pin + "<br>");
    }
};
phone.Hienthithongtin(); // Hang: SamsungMau: denPin: 80
phone.sacpin(); // Pin da duoc sac day
phone.Hienthithongtin(); // Hang: SamsungMau: denPin: 100
