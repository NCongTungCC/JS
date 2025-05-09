// Ví dụ về câu lệnh if-else trong JavaScript

let age = 19; // Khai báo biến age với giá trị là 18

if (age >= 18) { // Kiểm tra nếu age lớn hơn hoặc bằng 18
    console.log("Bạn đủ điều kiện để bầu cử."); // Nếu đúng, in ra "Bạn đủ điều kiện để bầu cử."
} else {
    console.log("Bạn không đủ điều kiện để bầu cử."); // Nếu sai, in ra "Bạn không đủ điều kiện để bầu cử."
}
// Sử dụng câu lệnh switch để kiểm tra độ tuổi
switch (age) {
    case 18:
        console.log("Bạn đủ điều kiện để bầu cử.");
        break;
    default:
        console.log("Bạn không đủ điều kiện để bầu cử.");
        break;
}