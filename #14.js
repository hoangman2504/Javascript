//!#14 So Sánh == và === , Phân Biệt Empty, NULL, Undefined
let a = 10, b = '10';

console.log('Check ===', a === b); //log1
//ở log1 khi so sánh biến a,b chúng ta nên dùng === để so sánh 1 cách đúng nhất, nó sẽ so sánh kiểu type
// và so sánh giá trị của 2 biến a,b 1 cách chính xác hơn

//Empty, Null, Undefied
let c = null, d = {};

console.log('Check null',typeof c, c)
console.log('Check d 1 string rỗng:',typeof d, d)
//Đối vs Empty, Null khi chúng ta cần dùng nó khi khai báo 1 biến nhưng chưa biết gán giá trị gì
//cho nó thì ta dùng null hoặc empty => empty = a = {};

let e;

console.log('Check e:', typeof e, e);
//Đối với undefied thì khi khai báo 1 biến nhưng kh có giá trị dc gán thì sẽ trả về undefied