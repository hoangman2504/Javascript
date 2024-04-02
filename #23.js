//!#23 Function vs Method - Phân Biệt Hàm và Phương Thức
//function
let sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 6));
//note: func có thể làm 1 cv cụ thể và trả về giá trị bằng cách gọi tên func
//method
let obj = {
    name: 'tubasa',
    greet: function() {
        console.log('My name is',this.name);
    }
};

obj.greet();
//note: thắc mắc tại sao greet lại gắn vào 1 func thì do đó là khi nó sẽ gọi obj.greet()
// thì method ở đây là greet, tóm lại thì biến greet nó có khai báo 1 func để nó lấy hàm name thì
//nó gọi là 1 method
//note: method thường sẽ thao tác hoặc truy cập các thuộc tính của đối tượng