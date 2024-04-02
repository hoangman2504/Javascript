//!#24 Callbacks hay Call Me Later - Chạy Theo Thứ Tự
// let sum = (a, b, callback) => {
//     let tong = a + b;
//     setTimeout(() => {
//         callback(tong);
//     }, 5000) // miliseconds
//     let i = 0;
//     let timer = setInterval(() => {
//         callback(tong);
//         i++;
//         if (i === 5) {
//             clearInterval(timer)
//         }
//     }, 1000);

// }


// let printSum = (message) => {
//     console.log('>> check sum: 6 + 9 = ', message)
// }

// sum(6, 9, printSum)

// function doHomework(subject) {
//   console.log(`Bắt đầu làm bài tập ${subject}.`);
// }

// doHomework('Toán');

//callback function
function getA(subject, callback) {
    console.log(`Hom nay hoc ${subject}`);
    callback();
  }
  
  getA('Toan',function(){
    console.log('Day la 1 ham callback tra ve');
  })
  //note: trình tự thứ nhất subject => cho 1 tham số subject gán biến ${subject} Toan để cho vào biến subject
  //note: trình tự thứ 2: gán callback() func ở đây tượng được khai báo cho callback sau đó nó log ra
  //'Day la 1 ham callback tra ve'
  //set Timeout
  function setMessage() {
    console.log('Hien thi sau 5 giay');
  }
  
  setTimeout(setMessage, 5000);
  
  
  //set Interval
  function setAgain() {
    console.log('Lap di lap lai');
  }
  
  setInterval(setAgain, 5000);

  //clear Time out
  const timeoutId = setTimeout(function(){
    console.log('Day la tb setTimeout');
  }, 4000);

  setTimeout(function(){
    clearTimeout(timeoutId);
    console.log('Da xoa setTimeout');
  }, 2000)
  //note: khi dùng vs setTimeout thì phải có khai báo 1 func cho nó nếu kh thì nó sẽ báo lỗi
  //bởi nó kh biết thực được điều gì khi hết thời gian chạy
  
  //clear setInterval
  let count = 0;
  const setintervalId = setInterval(function() {
    count++;
    console.log('Day la tb setInterval', count) ;
        if(count === 5) {
            clearInterval(setintervalId);
            console.log('Da xoa setInterval');
        }
  }, 1000);