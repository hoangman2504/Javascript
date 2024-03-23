//!#17 If/Else statement. Break & Continue
//if / else
//if giúp kiểm tra đk đúng sẽ dc in ra ở log if , nếu 2 đk if thì 2 đk cũng sẽ dc in ra
// 1 đk đúng cũng sẽ dc in ra 1 trong 2 if đúng
//còn nếu 2 đk if sai thì khi đó else sẽ dc in ra
let arr = ['momo', 'tyur', 'fshio', 'dhwuhwi'];

for(let i = 0; i < arr.length; i++) {
    if(arr[i].length === 10) {
        console.log('>>>Check: ',arr[i])
    } else if(arr[i].length === 10) {
        console.log('>>>Check: ',arr[i])
        
    } else {
        console.log('sai ca 2 dk')
    }
}

//break 
for(let a = 0; a < 10; a++) {
    console.log(a); // log ra các số trong đk >= 5: = 12345 dc log ra
    if(a >= 5) {
        break
    }
}

//continue
for(let b = 0; b < 16; b++) {
    if(b%2 !== 0) {
        continue;
    }
    console.log(b); // log ra các số chẵn
}
