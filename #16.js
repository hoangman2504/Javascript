//!#16 While/Do While Loops - Vòng Lặp While với JS
//1 Vd về For
//Comment
let arrTop4 = ['Liv', 'Mc', 'Arsenal', 'Tot'];

for(let i = 0; i < arrTop4.length; i++) {
    console.log('Top: ', i + 1, arrTop4[i]);
}
//Comment
//ở vòng lặp này sẽ log ra 4 các phần tử cả arr ra log, i + 1 giúp + vs phần tử đầu là pt 'liv' trong
//arr bắt đầu là 0, i + 1 sẽ = 1 do 1 + 0 = 1 sẽ là Top:  1 Liv, 'Mc' = 1 => 1 + 1 = 2 sẽ là Top:  2 Mc, 

//còn 4 dòng log này cũng in ra: Top: 1 Liv v.v
    console.log('Top: ', 0 + 1, arrTop4[0]);
    console.log('Top: ', 1 + 1, arrTop4[1]);// Top:  2 Mc
    console.log('Top: ', 2 + 1, arrTop4[2]);// Top:  3 Arsenal
    console.log('Top: ', 3 + 1, arrTop4[3]);// Top:  4 Tot

//2 While
//Cũng tương tự như vòng lặp for while sẽ sẽ khởi tạo biến a = 0; ở bên ngoài vòng lặp
//còn đk: a < arrTop4.length ở bên trong vòng lặp while
//còn ở phần bên trong phần cặp {} đầu tiên sẽ in ta log trc rồi mới tiếp đến là: a++ giúp
//trả về 1 giá trị sau khi tăng
let a = 0;
while(a < arrTop4.length) {
    console.log('Top: ', a + 1, arrTop4[a]);
    a++
}

//3 Do while
//Tham khảo thêm về Do while
let b = 0;

do {
    console.log('Top: ',b + 1, arrTop4[b])
    b++
} while(b < 0)