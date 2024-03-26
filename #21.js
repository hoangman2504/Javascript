//!#21 RETURN - ĐI ĐI ĐỂ TRỞ VỀ với JS
function getNumber(a, b ,i) {
    console.log('string a');
    console.log('string b');
    console.log('string c');
    if(i === 5) return;

    console.log('string d');
    console.log('string e');
    return a + b;
}

console.log('Check sum: ',getNumber(3, 4, 6));