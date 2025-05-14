### Khái niệm Command Line Apps

Command Line Apps là các ứng dụng được thiết kế để chạy trong môi trường dòng lệnh (terminal). Chúng thường được sử dụng để tự động hóa các tác vụ, xử lý dữ liệu, hoặc cung cấp các công cụ tiện ích. Trong Node.js, bạn có thể xây dựng các ứng dụng dòng lệnh bằng cách sử dụng các module như `process.argv` để xử lý tham số đầu vào, và các thư viện như `commander` hoặc `inquirer` để tạo giao diện dòng lệnh thân thiện hơn.

Ngoài ra, bạn có thể sử dụng các biến môi trường (`process.env`) để cấu hình ứng dụng, và các luồng chuẩn (`process.stdin`, `process.stdout`, `process.stderr`) để giao tiếp với người dùng hoặc các ứng dụng khác. Ví dụ:

```javascript
console.log('Output to stdout');
console.error('Output to stderr');

process.stdin.on('data', (data) => {
    console.log(`Received input: ${data}`);
});
```