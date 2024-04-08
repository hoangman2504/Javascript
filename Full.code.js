//#8 Tạo 2 vd về number + string và string + number
let a = 10;
let b = 'xyz';

console.log(a + 10 + b);
console.log(b + 10 + a);
//#10 Tạo so sánh === giữa 2 giá trị number, string và in ra log
let c = 10;
let d = '10';
let e = +d
console.log(c === d);
console.log(c === e);
//#11 Tạo 1 nối string đơn giản với dấu ``
let f = 5;
let g = 10;

console.log(`Fifteen is ${f + g} and not ${2 * f + g}`);
// "Fifteen is 15 and
// not 20."
//#12 Tạo 1 object và thay đổi giá trị của nó vs 2 cách
let obj = {
    name: 'Aliphar',
    age: 30
};

obj.name = 'Alufrt';

console.log(obj.name);

let h = 'age';
obj[h] = 20;

console.log(obj.age);
//và lấy giá trị của object từ key của nó vs 2 cách
console.log(obj.name, obj.age);
console.log(obj['name'], obj['age']);
//#13 Tạo 1 array và in ra dữ liệu của arr ra log
let arrA = ['Lucci', 'Kaku', 'Blueno', 'Stussy'];

console.log(arrA);
//sau đó lấy giá trị của 2 arr đầu tiên và in ra log
console.log(arrA[0], arrA[1]);
//cuối cùng tạo 1 arr mới cho bên trong arr mới là 1 object và sau đó in object ra log
let arrB = [
    {name: 'Luffy', age: 12},
    {name: 'Zoro', age: 13},
    {name: 'Nami', age: 14},
    {name: 'Ussop', age: 15}
];

console.log(arrB);
//#14 Tạo 1 bài so sánh string vs number bằng dấu ===
//Empty, Null, Undefied
let Empty = {};
let Null = null;
let Undefied;

console.log(Empty);
console.log(Null);
console.log(Undefied);
//#15 Tạo 1 vòng lặp for sau đó in các phần tử ra từ arr
let arrC = ['Lucci', 'Kaku', 'Blueno', 'Stussy'];
for(let s1 = 0; s1 < arrC.length; s1++){
    console.log(arrC[s1]);
}
//#16 While/Do While Loops - Vòng Lặp While với JS
//tạo 1 vòng lặp While
let arrD = ['Lucci', 'Kaku', 'Blueno', 'Stussy'];
let s2 = 0;
while(s2 < arrD.length){
    console.log(arrD[s2]);
    s2++;
}
//tạo 1 vòng lặp while

//#17 If/Else statement. Break & Continue
//Tạo if, else với 2 đk if, 1 đk else
let arrE = ['Lucci', 'Kaku', 'Blueno', 'Stussy'];
for(let s3 = 0; s3 < arrE.length; s3++){
    if(arrE[s3].length === 5){
        console.log(arrE[s3]);
    } else if(arrE[s3].length === 4){
        console.log(arrE[s3]);
    } else {
        console.log('Error');
    }
}
//Tạo 1 vd về break;
for(let s4 = 0; s4 < 10; s4++){
    console.log(s4)
    if(s4 >=5){
        break;
    }
}
//Tạo 1 vd về continued
for(let s5 = 0; s5 < 14; s5++){
    if(s5 % 2 !==0){
        continue;
    }
    console.log(s5);
}
//#18 Switch case cho 1 ví dụ
let day = 2;
let nameDay;

switch(day){
    case 0:
        nameDay = 'Cn';
        break;
        case 1:
        nameDay = 'Thu 2';
        break;
        case 2:
        nameDay = 'Thu 3';
        break;
        case 3:
        nameDay = 'Thu 4';
        break;
        case 4:
        nameDay = 'Thu 5';
        break;
        case 5:
        nameDay = 'Thu 6';
        break;
        case 6:
        nameDay = 'Thu 7';
        break;
}

console.log(nameDay);
//#19 Variables & Block Scope - Phạm Vi Sử Dụng Biến Số
//cho 1 ví dụ về variabel scope (cục bộ)


//cho 1 ví dụ về variabel global (toàn cục)

//#20 Declare Functions - Định Nghĩa Hàm Siêu Dễ với JS
//tạo 1 function tính tổng
function sum(a, b){
    return a + b;
}

console.log(sum(3, 4));
//#21 RETURN - ĐI ĐI ĐỂ TRỞ VỀ với JS
//tạo 1 return
let backA = (c, d) => {
    return c / d;
}

console.log(backA(10, 2));
//#23 Function vs Method - Phân Biệt Hàm và Phương Thức
//function
function hi(){
    console.log('Hello');
}

hi();
//method
let objA = {
    name: 'Man',
    greet: function(){
        console.log('Do Hoang', this.name);
    }
}

objA.greet();
//#24 Callbacks hay Call Me Later - Chạy Theo Thứ Tự
//callback function
function callback(subject, callback){
    console.log('Toi la 1 dan', subject);
    callback();
}

callback('IT frontend', function(){
    console.log('Ok guy');
});
  //set Timeout
let setT = () => {
    console.log('Oclock setT');
}

setTimeout(setT, 2000);
  //set Interval
//   let setI = () => {
//     console.log('Oclock setI');
// }

// setInterval(setI, 3000);

  //clear Time out
let timeoutId = setTimeout(function(){
    console.log('Hi timeoutId');
},2000);

setTimeout(function(){
    clearTimeout(timeoutId);
    console.log('Clear timeutId success');
}, 3000);
  //clear setInterval
let count = 0;
let intervalId = setInterval(function(){
    count++;
    console.log('Hi intervalId', count);
    if(count === 5){
        clearInterval(intervalId);
        console.log('Clear intervalId success');
    }
}, 2000)
//#25 Tìm Kiếm với Filter/Find Trên Mảng Array Dữ Liệu
//filter
let arrF = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
let filterA = arrF.filter((item, index) => {
    item = item > 5;
    return item;
})

console.log(arrF);
console.log(filterA);
//filter search obj
let objB = [
    {name: 'Luffy', age: 12},
    {name: 'Zoro', age: 13},
    {name: 'Nami', age: 12},
    {name: 'Ussop', age: 15}
];

let filterB = objB.filter((item, index) => {
    item = item.age === 12;
    return item;
})

console.log(objB);
console.log(filterB);
//find
let objC = [
    {name: 'Luffy', age: 12},
    {name: 'Zoro', age: 13},
    {name: 'Nami', age: 12},
    {name: 'Ussop', age: 15}
];

let findA = objC.find((item, index) => {
    item = item.age === 12;
    return item;
});

console.log(objC);
console.log(findA);
//#26 Map Arrays - Dùng Hàm Map Thay Vì For Loops
//for vs map()
//for
let arrG = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
for(let s6 = 0; s6 < arrG.length; s6++){
    arrG[s6] = arrG[s6] * arrG[s6];
    console.log(arrG[s6])
};
//map()
let arrH = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
let mapA = arrH.map((item, index) => {
    item = item * item;
    return item;
})

console.log(arrH);
console.log(mapA);
//#28 Sort - Hỗ Trợ Sắp xếp Array Linh Hoạt
//tạo 1 hàm sort() để sắp sếp các phần tử arr nmber
let arrJ = [1, 12, 55, 21, 44, 33];
arrJ.sort();

console.log(arrJ);