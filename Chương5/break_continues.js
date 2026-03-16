/* break */
//VD1
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Dừng vòng lặp khi i bằng 5
    }   
    console.log(i); // In ra giá trị của i
}

//VD2
for (var i = 0; i < 10; i++) {
    document.write( "Từ khóa break lần thứ " + i + "<br>"); // In ra giá trị của i
    if (i === 5) {
        break; // Dừng vòng lặp khi i bằng 5
    }   
}

/* continue */
//VD1
for (let i = 0; i < 10; i++) {  
    if (i === 5) {
        continue; // Bỏ qua lần lặp khi i bằng 5
    }
    document.write( "Từ khóa break lần thứ " + i + "<br>"); // In ra giá trị của i
}
