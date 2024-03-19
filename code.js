//!#7 Tất Tần Tật Các Kiểu Dữ Liệu Cần Biết của JS
// console.log(`Hoc JS cung hoi dan IT ''"""`); 
// // dòng lệnh này giúp thêm 1 đoạn vb có dấu '',"" bên trong 1 đoạn vb mà kh sợ bị lỗi bởi nó dc bao bọc bởi dấu ``

// let a = 6, b = 8, c = 10;

// console.log('>>> Check abc:','a = ', a, 'b = ', b, 'c = ', c);

// console.log(typeof a);
// muốn biết kiểu dử liệu của biến a là gì thù dùng typeof để biết dc kiểu dữ liệu của nó

let a = {
    name: 'man',
    addres: 'Dai an',
    yearbirth: 25052004
}

a.name = 'hoang' //c1

let b = 'addres' //c2
a[b] = 'Dai loc'
// ở đây có 2 cách để thay đổi giá trị cho 1 object 

console.log('What your name: ', a.name, 'Where a your from: ', a.addres); //c1

//có 2 cách để in ra chuỗi object ra log, khi muốn lấy giá trị của 1 key trong object thì
//a.name hoặc a['name']

console.log('What your name: ', a['name'], 'Where a your from: ', a['addres'],a); //c2