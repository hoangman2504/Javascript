//!#25 Tìm Kiếm với Filter/Find Trên Mảng Array Dữ Liệu
//filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filter = arr.filter((item, index) => {
    console.log('>>>Check item: ',item, '>>>Check index: ', index);
    return item && item > 5;
})

console.log(filter);
//ở đoạn mã này lệnh filter giúp lấy các item > 5 ở arr trên, còn index là thứ tự của
//các arr tính từ 0 đến hết arr

//filter search age
let arrB = [
    {name: 'ace', age: 27},
    {name: 'sabo', age: 25},
    {name: 'luffy', age: 19},
    {name: 'garp', age: 25},
    {name: 'dadan', age: 40}
];

let filterB = arrB.filter((item, index) => {
    return item && item.age === 25;
});

console.log(filterB);
//ở đoạn mã này lệnh filter sẽ lấy các object có age = 25, nếu trường hợp filter kh có object nào
//là age === 25 thì sẽ in ra là 1 arr rỗng

//find
let arrC = [
    {name: 'ace', age: 27},
    {name: 'sabo', age: 25},
    {name: 'luffy', age: 19},
    {name: 'garp', age: 25},
    {name: 'dadan', age: 40}
];

let filterC = arrC.find((item, index) => {
    return item && item.age === 25;
})

console.log(filterC);
//ở lệnh find này nó sẽ lấy age === 25 như vậy obj {name: 'sabo', age: '25'} này sẽ dc log ra
//bởi vì nếu item nào có age: 25 đầu tiên thì nó sẽ lấy item đó