// Truyền tham số và giá trị trả về
function chao(ten) {
    document.writeln("Xin chào " + ten + "<br>");
}
chao("Khoa");
chao("lan");
chao("thầy Thương");

function cong(a, b) {
    document.writeln("Tổng là ",a +b);
}
cong(3,5);

//return
function cong(c, d) {
    return c + d; // Trả về tổng của c và d
}
var tong = cong(5, 5); // Gọi hàm và lưu kết quả vào biến tong
document.writeln("Tổng : " + tong); // In ra kết quả