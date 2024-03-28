//!12 Kiểu dữ liệu object trong thế giới data
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