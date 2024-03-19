//!#7 Tất Tần Tật Các Kiểu Dữ Liệu Cần Biết của JS
console.log(`Hoc JS cung hoi dan IT ''"""`); 
// dòng lệnh này giúp thêm 1 đoạn vb có dấu '',"" bên trong 1 đoạn vb mà kh sợ bị lỗi bởi nó dc bao bọc bởi dấu ``

let a = 6, b = 8, c = 10;

console.log('>>> Check abc:','a = ', a, 'b = ', b, 'c = ', c);

console.log(typeof a);
// muốn biết kiểu dử liệu của biến a là gì thù dùng typeof để biết dc kiểu dữ liệu của nó

//!#8
//Lỗi NaN xảy ra khi bạn đang cố gắng in ra 1 biến nhưng biến đó kh phải là number
let d = 'Toi la string - chuoi';
console.log(d)

console.log(4 + 5 + 'a'); // >>> 9a
console.log('a' + 4 + 5 ); // >>> a45
// ở 2 đoạn mã log 1 trên nếu phép tính dc đặt đầu tiên thì sẽ là: 4 + 5 = 9 + 'a' = 9a;
//còn ở log 2 thì nếu có 1 string dc đặt đầu tiên thì sẽ là: 'a' + 4 + 5 = a45, bởi vì string 'a' dc đặt đầu tiên nên a nó sẽ hiểu 45 là 1 chuỗi a45