var a = 10
var a = 20

console.log(a); // var có thêm khai báo lại biến

// let b = 10
// let b = 20

// console.log(b); // let không thể khai báo lại biến

// const c = 10
// c = 20
// console.log(c); // const không thể đặt lại giá trị biến và khai báo lại biến 

var a = 10

function global() {
    console.log(a); // 10 khi khai báo biến toàn cục 
}

global();

function local() {
    var a = 20
    console.log(a); // 20 khi khai báo biến cục bộ
}

local();

function letconst() {
    let c = 30
    console.log(a); // 30 khi khai báo biến cục bộ
}
letconst();

// console.log(c); // lỗi cục bộ không thể truy cập bên ngoài