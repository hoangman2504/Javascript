//!#26 Map Arrays - Dùng Hàm Map Thay Vì For Loops
//đây là 1 vd về sự khác nhau giữa for và map()
//ở đoạn mã bên dưới sau khi nhân các số cho chính các phần tử trong arr, 1 * 1 = 1, 2 * 2 = 4 v.v
//khi log ra arrNumber[i]: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
//khi log ra arrNumber : [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
//như vậy vòng for đã thay thế các phần tử mới từ ntn [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
//thành ntn [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
for(let i = 0; i < arrNumber.length; i++) {
    arrNumber[i] = arrNumber[i] * arrNumber[i];
    console.log(arrNumber[i]);
}

console.log(arrNumber);

//map()
//ở đoạn mã này lệnh map() giúp lấy các phần tử đã * từ item và log ra: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//và lệnh map() nó kh thay đổi các phần tử ban đầu, arrMap log ra: [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
let arrMap = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
let arrA = arrMap.map((item, index) => {
    item = item * item;
    return item;
})

console.log(arrMap);

console.log(arrA);

