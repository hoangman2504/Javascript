//!#10 A Bờ Cờ Numbers Trong Thế Giới Js
let a = 10;
let b = '10';
let c = +b;
//Đoạn mã c = +b giúp giá trị của b từ string '10' => thành number 10, qua đó a sẽ = c, 
//10 = 10 và log ra kq là true và biến a và c sẽ có kiểu dữ liệu là number
console.log(a === c, '>>> a: ', typeof a, '>>> b: ', typeof c);