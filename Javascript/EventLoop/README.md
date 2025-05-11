# Event Loop

Event Loop là một cơ chế quan trọng trong JavaScript, chịu trách nhiệm quản lý cách các tác vụ (tasks), hàng đợi (queues), và các hoạt động bất đồng bộ (asynchronous operations) được xử lý.

## Cách hoạt động của Event Loop
1. **Call Stack**: Nơi lưu trữ các lời gọi hàm (function calls) cần thực thi.
2. **Web APIs**: Nơi xử lý các tác vụ bất đồng bộ như `setTimeout`, `fetch`, hoặc DOM events.
3. **Callback Queue**: Hàng đợi chứa các callback sẵn sàng được đưa vào Call Stack khi Call Stack trống.
4. **Event Loop**: Theo dõi Call Stack và Callback Queue. Nếu Call Stack trống, Event Loop sẽ đẩy các callback từ Callback Queue vào Call Stack để thực thi.

## Quy trình
1. Khi một hàm được gọi, nó được đưa vào Call Stack.
2. Nếu hàm gọi một tác vụ bất đồng bộ, tác vụ đó được chuyển đến Web APIs.
3. Sau khi tác vụ bất đồng bộ hoàn thành, callback của nó được đưa vào Callback Queue.
4. Event Loop kiểm tra Call Stack. Nếu Call Stack trống, nó đẩy callback từ Callback Queue vào Call Stack để thực thi.

## Khái niệm Callback, Callback Hell, Promise, Async/Await

### Callback
- **Callback** là một hàm được truyền như một tham số vào một hàm khác và được gọi lại (callback) sau khi tác vụ trong hàm kia hoàn thành.
- Ví dụ:
    ```javascript
    function fetchData(callback) {
            setTimeout(() => {
                    callback("Dữ liệu đã được tải");
            }, 1000);
    }

    fetchData((data) => {
            console.log(data);
    });
    ```

### Callback Hell
- **Callback Hell** xảy ra khi có quá nhiều callback lồng nhau, dẫn đến mã khó đọc và khó bảo trì.
- Ví dụ:
    ```javascript
    setTimeout(() => {
            console.log("Tác vụ 1");
            setTimeout(() => {
                    console.log("Tác vụ 2");
                    setTimeout(() => {
                            console.log("Tác vụ 3");
                    }, 1000);
            }, 1000);
    }, 1000);
    ```

### Promise
- **Promise** là một đối tượng đại diện cho một giá trị có thể có trong tương lai (thành công hoặc thất bại) của một tác vụ bất đồng bộ.
- Cú pháp:
    ```javascript
    const promise = new Promise((resolve, reject) => {
            const success = true;
            if (success) {
                    resolve("Thành công");
            } else {
                    reject("Thất bại");
            }
    });

    promise
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    ```

### Async/Await
- **Async/Await** là cú pháp giúp viết mã bất đồng bộ trông giống như mã đồng bộ, giúp dễ đọc và dễ bảo trì hơn.
- Ví dụ:
    ```javascript
    async function fetchData() {
            try {
                    const data = await new Promise((resolve) =>
                            setTimeout(() => resolve("Dữ liệu đã được tải"), 1000)
                    );
                    console.log(data);
            } catch (error) {
                    console.error(error);
            }
    }

    fetchData();
    ```
- **Async** khai báo một hàm bất đồng bộ, và **Await** tạm dừng thực thi cho đến khi Promise được giải quyết.

### chạy TH

node ./Javascript/EventLoop/eventloop.js