//!#8
//Lỗi NaN xảy ra khi bạn đang cố gắng in ra 1 biến nhưng biến đó kh phải là number
let d = 'Toi la string - chuoi';
console.log(d)

console.log(4 + 5 + 'a'); // >>> 9a
console.log('a' + 4 + 5 ); // >>> a45
// ở 2 đoạn mã log 1 trên nếu phép tính dc đặt đầu tiên thì sẽ là: 4 + 5 = 9 + 'a' = 9a;
//còn ở log 2 thì nếu có 1 string dc đặt đầu tiên thì sẽ là: 'a' + 4 + 5 = a45, bởi vì string 'a' dc đặt đầu tiên nên a nó sẽ hiểu 45 là 1 chuỗi a45