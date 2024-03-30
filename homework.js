//#8 Tạo 2 vd về number + string và string + number
let a = 10;
let b = 'xyz';

console.log(a + 7 + b);

console.log(b + a + 20);
//#10 Tạo so sánh === giữa 2 giá trị number, string và in ra log
let c = 10;
let d = '10';
let e = +d

console.log(c === d);
console.log(c ===e);

//#11 Tạo 1 nối string đơn giản với dấu ``
let f = 5;
let g = 10;

console.log(`Fifteen is ${f + g} and not ${2 * f + g}`);
// "Fifteen is 15 and
// not 20."
//#12 Tạo 1 object và thay đổi giá trị của nó vs 2 cách,
let h = {
  name: 'itachi',
  age: 22
}

h.name = 'sasuke';
let j = 'age';
h[j] = 26;

console.log(h);
//và lấy giá trị của object từ key của nó vs 2 cách
console.log(h.name, h.age);

console.log(h['name'], h['age']);
//#13 Tạo 1 array và in ra dữ liệu của arr ra log
let k = ['naruto', 'rock lee', 'gara', 'temari'];

console.log(k);
//sau đó lấy giá trị của 2 arr đầu tiên và in ra log
console.log(k[0], k[1]);
//cuối cùng tạo 1 arr mới cho bên trong arr mới là 1 object và sau đó in object ra log
let l = [
  {name: 'kabuto', age: 27},
  {name: 'jabuja', age: 30}
]

console.log(l);
//#14 Tạo 1 bài so sánh string vs number bằng dấu ===
//Empty, Null, Undefied
let Empty = {};
let Null = null;
let m;

console.log(Empty);
console.log(Null);
console.log(m);
//#15 Tạo 1 vòng lặp for sau đó in các phần tử ra từ arr
let arr = ['sikamaru', 'ino', 'chouji', 'sakura'];
for(let n = 0; n < arr.length; n++) {
  console.log(arr[n]);
}

//#16 While/Do While Loops - Vòng Lặp While với JS
//tạo 1 vòng lặp While
let o = 0;
while(o < arr.length) {
  console.log(arr[o]);
  o++;
}
//tạo 1 vòng lặp while

//#17 If/Else statement. Break & Continue
//Tạo if, else với 2 đk if, 1 đk else
for(let p = 0; p < arr.length; p++) {
  if(arr[p].length === 3){
    console.log(arr[p]);
  } else if(arr[p].length === 6) {
    console.log(arr[p]);
  } else {
    console.log('Error');
  }
}
//Tạo 1 vd về break;
for(let q = 0; q < 10; q++) {
  if(q >= 5) {
    break;
  }
  console.log(q);
}
//Tạo 1 vd về continued
for(let r = 0; r < 20; r++) {
  if(r%2 !==0) {
    continue;
  }
  console.log(r);
}
//#18 Switch case cho 1 ví dụ
let Day = 5;
let nameDay;

switch(Day) {
  case 0:
    nameDay = 'Chu nhat';
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
let sum = (a, b) => {
  return a + b;
}

console.log(sum(3,4))
//cho 1 ví dụ về variabel global (toàn cục)
let global = 10;

console.log(10+ global);
//#20 Declare Functions - Định Nghĩa Hàm Siêu Dễ với JS
//tạo 1 function tính tổng
function maxT(x, y) {
  return x + y;
}

console.log(maxT(4,5));
//#21 RETURN - ĐI ĐI ĐỂ TRỞ VỀ với JS
//tạo 1 return
function z(d, e, f) {
  console.log('Day la string 1');
  console.log('Day la string 2');
  console.log('Day la string 3');
  if(f === 5) return;

  console.log('Day la string 4');
  console.log('Day la string 5');
  return d + e;
}

console.log(z(3, 4));

//#22 Arrow Functions - Đi Săn Với Js
//tạo 1 arrow func
let arrow = (c) => {
  c = 'hello arrow func';
  return c;
}

console.log(arrow());
//#23 Function vs Method - Phân Biệt Hàm và Phương Thức
//tạo 1 function
function showMes() {
  console.log('Da show');
}

showMes();
//tạo 1 method
let showMet = {
  name : 'Tanjiro',
  greet: function() {
    console.log('My name is', this.name);
  }
}

showMet.greet();
//#24 Callbacks hay Call Me Later - Chạy Theo Thứ Tự

//callback function
let backC = (subject, callback) => {
  console.log('Hom nay co tiet', subject);
  callback();
}

backC('Van', function() {
  console.log('Day la ham callback');
})



  //set Timeout
let setT = () => {
  console.log('Day la setTimeout');
}

setTimeout(setT, 3000);
  //set Interval
let SetI = () => {
  console.log('Day la setInterval');
}

setInterval(SetI, 3000);
  //clear Time out
const clearsetT = setTimeout(function(){
  console.log('Day la ham setT');
}, 2000)

setTimeout(function(){
  clearTimeout(clearsetT);
  console.log('Da xoa setT');
}, 4000)  
//clear setInterval
let count = 0;
const clearsetI = setInterval(function(){
  count++;
  console.log('Day la tb cua setI');
  if(count === 5) {
    clearInterval(clearsetI);
    console.log('Da xoa setIn');
  }
})

