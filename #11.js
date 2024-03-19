//!#11 Strings Template - Lối Thoát Để Xử Lý Kiểu Strings
const a = 5;
const b = 10;

console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

console.log(`Fifteen is ${a + b} and not ${2 * a + b}`); //log2
// "Fifteen is 15 and
// not 20."

//ở đây có 2 cách nối chuỗi nên sử dụng log2 thay vì sử dụng log1 