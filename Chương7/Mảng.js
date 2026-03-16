// Mảng 
let ban_be = ["Khoa", "Lan", "Thương", "Hùng"];
console.log(ban_be); // Khoa
console.log(ban_be[0]); // Khoa
console.log(ban_be[1]); // Lan
console.log(ban_be[2]); // Thương
console.log(ban_be[3]); // Hùng
console.log(ban_be[4]); // undefined
console.log(ban_be.length); // 4

//cách 2
for (let i = 0; i <= ban_be.length; i++) {
    console.log(ban_be[i]);
}

//cách 3
for (let ban in ban_be) {
    console.log(ban_be[ban]);
}

//Một số hàm thông dụng với mảng
/* 
.length(): độ dài của mảng
.push(): thêm phần tử cuối
.pop(): xóa phần tử cuối 
.shift(): xóa phần tử đầu 
.unshift(): thêm phần tử đầu
.indexOf(): tìm vị trí phần tử 
*/


// mảng con
let score = [["Khoa", 9], ["Lan", 8], ["Thương", 7], ["Hùng", 6]];
console.log(score[0][0]); // Khoa
console.log(score[2][1]); // 7