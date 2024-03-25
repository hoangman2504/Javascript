//!#19 Variables & Block Scope - Phạm Vi Sử Dụng Biến Số
//Phạm vi sử dụng biến (scope) cục bộ
function myFunction() {
    let x = 10;
    console.log("Trong hàm myFunction, x =", x);
}

myFunction(); // In ra: "Trong hàm myFunction, x = 10"
console.log("Ngoài hàm myFunction, x =", x); // Sẽ gây lỗi vì x không được xác định ở ngoài hàm myFunction

//Phạm vi sử dụng biến (global) toàn cục
let globalVariable = "Biến toàn cục";

function myFunction() {
    console.log("Trong hàm myFunction, globalVariable =", globalVariable);
}

myFunction(); // In ra: "Trong hàm myFunction, globalVariable = Biến toàn cục"
console.log("Ngoài hàm myFunction, globalVariable =", globalVariable); // In ra: "Ngoài hàm myFunction, globalVariable = Biến toàn cục"
