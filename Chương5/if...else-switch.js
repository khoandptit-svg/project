/* if...else */
var gio = 12;
if (gio < 12) {
    console.log("Chào buổi sáng");
} else if (gio < 18) {
    console.log("Chào buổi chiều");
} else {
    console.log("Chào buổi tối");
}

/** Switch case */
var day = 2;
switch (day) {
    case 0:
        console.log("Hôm nay là chủ nhật");
        break;
    case 1:
        console.log("Hôm nay là thứ 2");
        break;  
    case 2:
        console.log("Hôm nay là thứ 3");
        break;
    case 3:
        console.log("Hôm nay là thứ 4");
        break;          
    case 4:
        console.log("Hôm nay là thứ 5");
        break;
    case 5:
        console.log("Hôm nay là thứ 6");
        break;
    case 6:
        console.log("Hôm nay là thứ 7");
        break;
    default:
        console.log("Không phải ngày trong tuần");
        break;
}
