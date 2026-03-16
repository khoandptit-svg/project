// Định nghĩa DOM
// Khi 1 trang web đc tải lên trình duyệt , điều đầu tiên trình duyệt nhận đc là mã HTML của trang web đó
// Sau đó trình duyệt sẽ phân tích và tổ chức lại nội dung sau đó tạo ra 1 mô ginhf biều diễn cấu trúc của trang web đó , mô hình này đc gọi là DOM (Document Object Model)

// DOM ko là HTMLmà là mô hình tạo ra từ mã HTML 

// Khi HTML đc phân tích, DOM đc xây dựng ở dạng cấu trúc cây
// + Mỗi thẻ HTML sẽ trở thành 1 phần tử DOM
// + HTML đc biểu diễn dưới dạng mô hình đối tượng (cấu trúc cây)

// DOM là sơ đồ cây các phần tử móc nối nhau biểu diễn toàn bộ cấu trúc trang web

/* Thành phần chính của DOM:
1. Element: bất cứ các thẻ nào đc viết trg file HTML . VD : html , head , body,h1 ,a,...
2. Attribute: các thuộc tính nằm trg thẻ mở . CD : class, id , title , href trong thẻ a hay src trong thẻ img hoặc script
3. Text : là nội dung chữ trong thẻ html .VD : nội dung chữ trong thẻ h1 , p ,... 
*/

/* Node trong DOM 
Sơ đồ DOM có các ô hoặc điểm được nối với nhau . Mỗi điểm nối tại DOM đc gọi là Node , ko phải loại riêng
element, attribute , text đều là node
*/

/* Tác dụng của DOM trong JavaScript:
+ Toàn bộ trang web đc viết bằng HTML ,được trình duyệt phân tích và biểu diễn dưới dạng DOM
+ DOM đại diện cho toàn bộ website 
+ Javascript có thể thay đổi element , attribute , text , thêm mới ,xóa cácc phần tử trong trang web 
*/