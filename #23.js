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

//note: method thường sẽ thao tác hoặc truy cập các thuộc tính của đối tượng