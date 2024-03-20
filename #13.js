//!#13 Kiểu Dữ Liệu Array - Tiêu Chuẩn Để Giao Tiếp Data
let a = ['kakashi', 'sasuke', 'naruto'];

console.log('Chech a: ', typeof a, a); //log1
//ở đoạn log1 giúp lấy giá trị của arr a và show ra log
console.log('Take: 0', a[0], 'Take 1', a[1]) //log2
//ở đoạn log2 giúp lấy giá trị của của 2 arr đầu tiên là kakashi, sasuke
let b = [
    {name: 'hokage', age: 50},
    {name: 'orochi', age: 40}
]

console.log('>>>Check: ',typeof b, b) //log3
//ở đoạn log3 giúp lấy giá trị của 1 arr b bên trong là 1 object 
//note log3: chủ yếu khi làm việc vs arr thì lấy kiểu dữ liệu object trong 1 arr là gặp nhiều nhất