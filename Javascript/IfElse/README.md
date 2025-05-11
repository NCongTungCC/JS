# Khái Niệm

Câu lệnh `if...else` trong JavaScript được sử dụng để thực thi các đoạn mã khác nhau dựa trên điều kiện được cung cấp. Đây là một cấu trúc điều kiện cơ bản trong lập trình.

Câu lệnh `switch` trong JavaScript được sử dụng để thực thi một trong nhiều khối mã dựa trên giá trị của một biểu thức. Nó thường được sử dụng khi bạn cần so sánh một biến hoặc biểu thức với nhiều giá trị khác nhau.

## Cú pháp

```javascript
switch (biểu_thức) {
    case giá_trị_1:
        // Khối mã được thực thi nếu biểu_thức === giá_trị_1
        break;
    case giá_trị_2:
        // Khối mã được thực thi nếu biểu_thức === giá_trị_2
        break;
    default:
        // Khối mã được thực thi nếu không có case nào khớp
}
```

```javascript
if (điều_kiện) {
    // Khối mã được thực thi nếu điều kiện đúng
} else {
    // Khối mã được thực thi nếu điều kiện sai
}
```

### chạy TH

node ./Javascript/IfElse/ifElse.js