# Khái Niệm

**Node.js Modules** là các thành phần độc lập, có thể tái sử dụng trong ứng dụng Node.js. Mỗi file trong Node.js được coi là một module. Các module giúp tổ chức mã nguồn, chia nhỏ ứng dụng thành các phần dễ quản lý hơn.

## Các Loại Module
1. **Core Modules**: Các module được tích hợp sẵn trong Node.js (vd: `fs`, `http`, `path`).
2. **Local Modules**: Các module do người dùng tự định nghĩa.
3. **Third-party Modules**: Các module được cài đặt từ npm (Node Package Manager).

## Cách Sử Dụng Module
Để sử dụng một module, bạn cần import nó bằng từ khóa `require`.

```javascript
// Import core module
const fs = require('fs');

// Import local module
const myModule = require('./myModule');

// Import third-party module
const express = require('express');
```