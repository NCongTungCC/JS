### Khái niệm hàm

Hàm (function) là một khối mã được thiết kế để thực hiện một nhiệm vụ cụ thể. Hàm giúp tái sử dụng mã, giảm thiểu sự lặp lại và làm cho mã dễ đọc hơn. Trong JavaScript, hàm có thể nhận tham số đầu vào và trả về giá trị đầu ra, giúp xử lý dữ liệu một cách linh hoạt và hiệu quả.

Hàm (function) trong JavaScript có thể được khai báo theo 3 cách phổ biến, mỗi cách có ưu và nhược điểm riêng, phù hợp với từng trường hợp sử dụng:

1. **Khai báo hàm (Function Declaration):**
    - **Ưu điểm:** 
      - Có thể được gọi trước khi khai báo nhờ tính năng hoisting.
      - Dễ đọc và phù hợp với các hàm toàn cục hoặc các hàm cần sử dụng nhiều lần.
    - **Nhược điểm:** 
      - Không linh hoạt trong việc gán hàm cho biến hoặc đối tượng.

    **Khi nào dùng:** Sử dụng khi cần khai báo các hàm toàn cục hoặc các hàm có tính độc lập cao.

2. **Biểu thức hàm (Function Expression):**
    - **Ưu điểm:** 
      - Có thể gán hàm cho biến, giúp dễ dàng quản lý và sử dụng trong các ngữ cảnh cụ thể.
      - Hỗ trợ tạo hàm ẩn danh.
    - **Nhược điểm:** 
      - Không thể gọi trước khi khai báo do không có hoisting.

    **Khi nào dùng:** Sử dụng khi cần gán hàm cho biến hoặc cần tạo các hàm cục bộ trong một phạm vi nhất định.

3. **Hàm mũi tên (Arrow Function):**
    - **Ưu điểm:** 
      - Cú pháp ngắn gọn, dễ viết.
      - Không có `this` riêng, phù hợp với các hàm callback hoặc các hàm không cần ngữ cảnh `this`.
    - **Nhược điểm:** 
      - Không thể sử dụng làm hàm khởi tạo (constructor).
      - Không có `arguments` object.

    **Khi nào dùng:** Sử dụng khi cần viết các hàm ngắn gọn, đặc biệt trong các hàm callback hoặc các hàm không cần ngữ cảnh `this`.

### chạy TH

 node ./Javascript/Function/function.js        