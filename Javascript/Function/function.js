// Cách 1: Khai báo hàm bằng từ khóa function
function greet() {
    console.log("Hello, World!");
}
greet();

// Cách 2: Khai báo hàm dưới dạng biểu thức hàm (Function Expression)
const sayHello = function() {
    console.log("Hello, JavaScript!");
};
sayHello();

// Cách 3: Khai báo hàm bằng Arrow Function (ES6+)
const greetArrow = () => {
    console.log("Hello, Arrow Function!");
};
greetArrow();