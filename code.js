//!#17 If/Else statement. Break & Continue
//if / else
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
    console.log(a);
    if(a >= 5) {
        break
    }
}

//continue
for(let b = 0; b < 16; b++) {
    if(b%2 !== 0) {
        continue;
    }
    console.log(b);
}
