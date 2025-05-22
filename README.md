## Node.js - Kiến trúc và cơ chế hoạt động

### 1. Event Loop trong Node.js và các giai đoạn chính

Node.js sử dụng event loop để xử lý bất đồng bộ theo cơ chế single-threaded non-blocking. Event loop chia thành các giai đoạn (phases):

* **Timers**: Xử lý callback của `setTimeout`, `setInterval`
* **Pending Callbacks**: Thực thi các callback của I/O bị hoãn từ giai đoạn trước.
* **Idle, Prepare**: Dùng nội bộ Node.js.
* **Poll**: Chờ và xử lý các I/O events (như đọc file, socket...)
* **Check**: Xử lý các callback từ `setImmediate()`.
* **Close Callbacks**: Xử lý `close` events như socket.on('close').

**Microtasks** (process.nextTick, Promise) được thực thi **sau mỗi phase**, trong khi **Macrotasks** là các callback được xếp hàng trong các phase của event loop.

### 2. Phân biệt worker threads, child processes, và cluster

* **Child Processes**: Tạo tiến trình con riêng biệt, dùng `child_process` module. Phù hợp với xử lý tách biệt hoặc CPU-bound.
* **Worker Threads**: Chia sẻ bộ nhớ và chạy trong cùng tiến trình. Phù hợp xử lý CPU-bound không muốn fork process.
* **Cluster**: Dùng nhiều child processes để tận dụng CPU đa nhân. Thường dùng để scale server.

**Khi nào dùng**:

* I/O-bound → Event loop đủ dùng.
* CPU-bound → Worker Threads hoặc Child Processes.
* Scale server nhiều core → Cluster.

### 3. Libuv là gì?

Libuv là thư viện nền giúp Node.js thực hiện I/O bất đồng bộ. Nó cung cấp:

* Thread pool để xử lý các tác vụ blocking (file system, DNS,...).
* Event loop đa nền tảng.
* Các primitive như TCP, UDP, FS, pipe,...

Libuv tạo abstraction giúp Node hoạt động thống nhất trên nhiều hệ điều hành.

### 4. Garbage Collection trong V8

* **V8 Engine** sử dụng garbage collection để dọn dẹp bộ nhớ không còn dùng.
* Dựa vào các thuật toán như **Mark-and-Sweep**, **Generational GC** (chia heap thành Young/Old Generation).

**Tối ưu bộ nhớ**:

* Tránh tạo object không cần thiết.
* Sử dụng stream thay vì load toàn bộ vào bộ nhớ.
* Giải phóng bộ nhớ tạm (event listeners, intervals).

### 5. Streams trong Node.js

* Streams giúp xử lý dữ liệu lớn một cách hiệu quả mà không cần load toàn bộ vào bộ nhớ.
* Có 4 loại stream:

  * **Readable**: Tạo ra dữ liệu (`fs.createReadStream`)
  * **Writable**: Tiêu thụ dữ liệu (`fs.createWriteStream`)
  * **Duplex**: Đọc & ghi (WebSocket)
  * **Transform**: Biến đổi dữ liệu khi truyền (zlib.createGzip)

---

## Express.js - Middleware và Routing

### 1. Middleware stack trong Express

* Middleware là hàm có dạng `(req, res, next)` xử lý yêu cầu trước khi đến route handler.
* Express dùng **middleware stack** theo thứ tự khai báo.
* Gọi `next()` để chuyển tiếp. Có thể dừng lại hoặc bắt lỗi với `next(err)`.

### 2. Phân biệt app.use(), app.get(), app.all(), router.use()

* `app.use()` → Áp dụng middleware cho tất cả method (GET, POST,...)
* `app.get()` → Chỉ áp dụng cho GET
* `app.all()` → Áp dụng cho tất cả method, nhưng cho 1 path cụ thể
* `router.use()` → Dùng cho router module con

### 3. Route Matching

* Express khớp route từ trên xuống. Dừng khi gặp route đầu tiên phù hợp.
* Có thể dùng **route params** (`/users/:id`) và query string (`/users?id=123`)

### 4. Tổ chức route theo MVC

* `controllers/` chứa logic xử lý
* `routes/` chứa khai báo đường dẫn và liên kết controller
* `models/` chứa schema hoặc truy vấn DB
* Tách file giúp dễ bảo trì và mở rộng.

### 5. Error handling middleware

* Middleware có 4 tham số: `(err, req, res, next)`
* Được gọi khi có lỗi đồng bộ hoặc dùng `next(err)` trong async/await hoặc Promise
* Dùng để xử lý lỗi tập trung

---

