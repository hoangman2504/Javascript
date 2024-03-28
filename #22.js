//!#22 Arrow Functions - Đi Săn Với JS
//có 2 cách để tạo 1 func
//c1
function note1() {
    alert('Hello func1');
}

note1();

//c2
let note2 = () => {
    alert('Hello func2');
}

note2();
//đối vs c2 này nê sử dụng vì có cách khai báo ngắn gọn và có thể dùng vs class trong React mà kh cần
//phải khai báo biến cho từng func vì đối vs arrow func thì react sẽ tự hiểu và kh cần định nghĩa tên biến cho 1 class
