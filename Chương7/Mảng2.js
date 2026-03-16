//length
var number = new Array(1, 2, 3, 4, 5, 6);
console.log(number.length); // 6

// join :nối các phần tử của mảng thành một chuỗi, phân cách bằng ký tự được chỉ định
console.log(number.join("-")); // 1-2-3-4-5-6

// concat : ghép mảng
var number2 = new Array(7, 8, 9, 10);
console.log(number.concat(number2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//slice : lấy ra 1 hay 1 số phần tử của mảng (number.slice(start, end)) , start là vị trí bắt đầu , end là vị trí kết thúc 
console.log(number.slice(3, 5)); // [4, 5]

// reverse : đảo ngược thứ tự phần tử trong mảng
console.log(number2.reverse()); // [10, 9, 8, 7]

// sort : sắp xếp phần tử trong mảng theo thứ tự tăng dần (chữ từ a-z)
var char = new Array("a", "y", "e", "z", "b");
console.log(char.sort()); // [a, b, e, y, z]

// push : thêm phần tử vào cuối mảng
number.push(100, 200);
console.log(number); // [1, 2, 3, 4, 5, 6, 100, 200]

// pop : xóa phần tử cuối mảng
number.pop();
console.log(number); // [1, 2, 3, 4, 5, 6, 100]

//unshift : thêm phần tử vào đầu mảng
console.log(number2);
number2.unshift(11,12);
console.log(number2);

//shift : xóa phần tử đầu mảng
number2.shift();
console.log(number2); // [9, 8, 7, 11, 12]