const mang = [1,5,7,9,2,4];

for(let i = 0; i < mang.length; i++) {
  for(let j = i + 1; j < mang.length; j++) {
    if(mang[i] > mang[j]) {
      let temp = mang[i];
      mang[i] = mang[j];
      mang[j] = temp;
    }
  }
}   
console.log(mang);
let sm = 1;

for(let i = 1;i<5;i++) {
  sm=sm*i;
}

console.log(sm);
const input = [1,2,3,4,5];
const mu = input.map((item) => (item*item));
console.log(mu);

const bai3 = "Every developer likes to mix kubernetes and javascript";

const mang3 = bai3.split(" ");
const mang4 = mang3.map((item) => {
    if(item.length > 3) {
        return item.charAt(0) + item.length + item.charAt(item.length - 1);
    }
    return item;
})
console.log(mang4.join(" "));

const input1 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
const input2 = input1.sort((a,b) => a.age - b.age);
console.log([input2[0].age, input2[input2.length - 1].age, input2[input2.length - 1].age - input2[0].age])
const inputr = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
console.log(inputr.flat());
const count = {};

inputr.flat().forEach((item) => {
    count[item] = (count[item] || 0 ) + 1;
}
)
console.log(count);

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
];
const output = students.map((item) => {
    const average = item.scores.reduce((sum, item) => sum + item,0) / item.scores.length;
    return {name : item.name, average : average}
}).filter((item) => item.average > 90)
console.log(output);

const input44 = "George Raymond Richard Martin";

console.log(input44.split(" ").map((item) => item.charAt(0)).join(""));

const input33 = [1,-4,12,0,-3,29,-150]

console.log(input33.filter((item) => item > 0).reduce((sum, item) => sum + item,0))

const input333 = [12, 46, 32, 64];
console.log(input333.reduce((sum, item) => sum + item,0) / input333.length);

const a = ["HTML", "CSS"];
a.push("JS");
console.log(a);

const b = ["JS"];
b.unshift("React");
console.log(b);

const c = [1,2,3,4];
const xoa = c.pop();
console.log(xoa);
console.log(c);
const d = [1,2,3];
// d.shift();
console.log(d);

const dd = d.map((item) => item*2);
console.log(dd);

const e = [1,2,3,4,5,6]
console.log(e.filter((item) => item % 2 == 0));

const f = ["a", "b", "c", "d"];
console.log(f.slice(1,4));

const g = [1,2]
const h = [3,4]
console.log(g.concat(h));

const k = [1,2,3];
console.log(k.includes(2));

const l = [1,3,5,6];
console.log(l.some((item) => item % 2 == 0));

const j = [2,4,6];
console.log(j.every((item) => item % 2==0))

const n = [5,8,12,3];
console.log(n.findIndex((item) => item > 10));

const m = ["hi", "hello", "yo"];
console.log(m.find((item) => item.length > 3));

const v = ["a", "b", "c"];
console.log(v.reduce((sum, item) => sum + item));

const furit = ["apple", "banana", "cherry"];
furit.forEach((item) => {
    console.log(item);
})

const color = ["red", "green", "blue"];
console.log(color.join("-"));

const x = [1,[2,[3]]];
console.log(x.flat());

const z = [1,2,3];
console.log(z.flatMap((item) => item*2));

var s = [1,2,3,4,5];
var max = s[0];
for(let tt = 1; tt< s.length; tt++)
{
    if(s[tt] > max) {
        max=s[tt];
    }
}
console.log(max);

const cart = [
  { name: "Áo", price: 200000, quantity: 2 },
  { name: "Quần", price: 300000, quantity: 1 },
  { name: "Mũ", price: 100000, quantity: 3 }
];


console.log(cart.reduce((total, item) => total + item.price*item.quantity,0))

const products = [
  { name: "Áo", stock: 10 },
  { name: "Quần", stock: 0 },
  { name: "Giày", stock: 5 },
];

console.log(products.filter((item) => item.stock > 0));

const users = [
  { name: "An", age: 20 },
  { name: "Bình", age: 22 },
  { name: "Chi", age: 20 },
  { name: "Dũng", age: 22 },
];

console.log(users.reduce((group, item) => {
    const key = item.age;
    if(!group[key]) {
      group[key] = [];
    }
    group[key].push(item);
    return group;
}, {}))
// const arr = ["apple", "banana", "orange"];

// console.log(arr.map((item) => item.toUpperCase()));

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.reduce((sum,item) => item%2 != 0 ?
  sum + item : sum,0
))

const a1 = [1, 2, 3];
const a2 = [2, 3, 4, 5];

const a3 = a1.concat(a2);
const a4 = [];
console.log([...new Set(a3)]);
for(let item of a3) {
    const result = a4.some((iem) => item == iem );
    if(!result) {
        a4.push(item);
    }
}
console.log(a4);
const student = [
  {name: "An", age: 18},
  {name: "Bình", age: 19}
];
// Kết quả: ["An", "Bình"]

console.log(student.map((item) => item.name));

const obj = { a: 1, b: 2, c: 3, d:4};
// Kết quả: { 1: "a", 2: "b", 3: "c" }

const rev = {};
// for(const key in obj) {
//   const value = obj[key];
//   rev[value] = key;
// }
// console.log(rev);

// for(const item in obj) {
//   if(obj[item] % 2 == 0) {
//       rev[item] = obj[item]; 
//   }
// }
// console.log(rev);

const arrr = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" }
];
// Kết quả: { 1: { id: 1, name: "John" }, 2: { id: 2, name: "Mary" } }
console.log(arrr.reduce((group,item) => {
    const key = item.id;
    if(!group[key]) {
        group[key] = {};
    }
    group[key] = item;
    return group;
},{}))
const arra = [1, 2, 2, 3, 3, 3, 4, 4];

arra.forEach((item) => rev[item] = (rev[item] || 0 ) + 1);
console.log(rev);
var max = -1;
for(const key in rev) {
    if(rev[key] > max) {
      max = rev[key];
    }
}
console.log(max);

const arrb = [
  {a: 1, b: 2},
  {a: 3, b: 4}
];
// Kết quả: {a: 4, b: 6}

console.log(arrb.reduce((group,item) => 
    {
      for(const key in item) {
        group[key] = (group[key] || 0) + item[key];
      }
      return group;
    }
,{}));

const ob = {a: 2, b: 4, c: 6};
// Kết quả: [['a', 1], ['b', 2], ['c', 3]]

const kk = [];

for(const key in ob) {
    const item = [key, ob[key]];
    kk.push(item);
}

console.log(kk);
var sum =0;
for(const key in ob) {
  sum = sum + ob[key];
}
console.log(sum);
const dao = {}
for(const key in ob) {
    dao[ob[key]] = key;
}
console.log(dao);

const user = [
  { name: "An", age: 28 },
  { name: "Bình", age: 25 },
  { name: "Chi", age: 21 },
];

console.log(user.map((item) => item.name));
console.log(user.filter((item) => item.age > 18));
console.log(user.reduce((avg, item) => avg + item.age,0)/user.length);
console.log(user.sort((a,b) => a.age - b.age));
console.log(user.reduce((group,item) => 
  { const key = item.age;
    group[key] = (group[key] || 0) + 1;
    return group;}
,{}))
console.log(user.reduce((group,item) => 
  { const key = item.age;
    if(!group[key])
    {group[key] = []}
    group[key].push(item);
    return group;}
,{}))

const product = [
  { name: "iPhone", price: 20000000 },
  { name: "Tai nghe", price: 1500000 },
  { name: "Ốp lưng", price: 200000 },
  { name: "Laptop", price: 30000000 },
];
const filte = (produc, min, max) => {
    const fil = produc.filter((item) => item.price >= min && item.price <= max);
    return fil;
}
console.log(filte(product, 1000000, 5000000));

const comments = [
  { postId: 1, content: "Hay quá" },
  { postId: 2, content: "Thanks" },
  { postId: 1, content: "Tuyệt" },
  { postId: 3, content: "Không hiểu" },
  { postId: 1, content: "Cảm ơn" },
];

function countCommentsPerPost(comments) {
  // 👉 Output: { 1: 3, 2: 1, 3: 1 }
    return comments.reduce((group,item) => {
      const key = item.postId;
      group[key] = (group[key] || 0) + 1;
      return group;
  },{})
}

console.log(countCommentsPerPost(comments));

const produc = [
  { name: "iPhone", category: "Điện thoại", price: 20000000 },
  { name: "Galaxy", category: "Điện thoại", price: 18000000 },
  { name: "MacBook", category: "Laptop", price: 32000000 },
  { name: "Asus", category: "Laptop", price: 15000000 },
  { name: "Tai nghe", category: "Phụ kiện", price: 2000000 },
];

// const pro = produc.reduce((group,item) => {
//     const key = item.category;
//     if(!group[key]) {
//       group[key] = 0;
//     }
//     group[key] = group[key] + item.price;
//     return group;
// },{})
// console.log(pro);
// const price = {};
// for(const key in pro) {
//   const pri = pro[key].reduce((sum,item) => sum + item.price,0);
//   price[key] = pri;
// }
// console.log(price);
const pro = produc.reduce((group,item) => {
    const key = item.category;
    if(!group[key] || item.price > group[key].price) {
      group[key] = item;
    }
    return group;
},{})
console.log(pro);

const produs = [
  { name: "iPhone", price: 20000000 },
  { name: "Galaxy", price: 18000000 },
  { name: "MacBook", price: 32000000 },
  { name: "Asus", price: 15000000 },
  { name: "Tai nghe", price: 2000000 },
  { name: "Bàn phím", price: 1000000 },
  { name: "Chuột", price: 800000 },
];
console.log(produs.map((item) => {
    return {...item, sort : Math.abs(50000000 - item.price)}
}).sort((a,b) => b.sort-a.sort).slice(0,3));
console.log(produs.reduce((group,item) => {
    if(item.price <= 10000000) {
        if(!group["low"]) {
          group["low"] = []
        }
        group["low"].push(item); 
    } else if(item.price > 10000000 && item.price < 20000000) {
       if(!group["medium"]) {
          group["medium"] = []
        }  
      group["medium"].push(item);
    } else {
       if(!group["high"]) {
          group["high"] = []
        }
      group["high"].push(item);}
    return group;
},{}))

const orders = [
  { userId: 1, amount: 500000 },
  { userId: 2, amount: 200000 },
  { userId: 1, amount: 700000 },
  { userId: 3, amount: 300000 },
  { userId: 2, amount: 400000 },
];

console.log(orders.reduce((group,item) => {
    const key = item.userId;
    if(!group[key]) {
        group[key] = 0;
    }
    group[key] = group[key] + item.amount;
    return group;
},{}))

const pducts = [
  { id: 1, name: "iPhone", category: "Điện thoại", price: 20000000 },
  { id: 2, name: "MacBook", category: "Laptop", price: 35000000 },
  { id: 3, name: "Galaxy", category: "Điện thoại", price: 18000000 },
  { id: 4, name: "Asus", category: "Laptop", price: 25000000 },
  { id: 5, name: "AirPods", category: "Phụ kiện", price: 5000000 },
  { id: 6, name: "Ốp lưng", category: "Phụ kiện", price: 500000 },
];

console.log(pducts.reduce((group,item) => {
    const key = item.category;
    if(!group[key] || item.price > group[key].price) {
        group[key] = item;
    }
    return group;
},{}))

const iphone = [
  { id: 1, name: "iPhone", category: "Điện thoại", price: 20000000 },
  { id: 2, name: "MacBook", category: "Laptop", price: 35000000 },
  { id: 3, name: "Galaxy", category: "Điện thoại", price: 18000000 },
  { id: 4, name: "Asus", category: "Laptop", price: 25000000 },
  { id: 5, name: "AirPods", category: "Phụ kiện", price: 5000000 },
  { id: 6, name: "Ốp lưng", category: "Phụ kiện", price: 500000 },
  { id: 7, name: "Pixel", category: "Điện thoại", price: 19500000 },
];

const ip = iphone.reduce((group,item) => {
    const key = item.category;
    if(!group[key]) {
      group[key] = [];
    }
    group[key].push(item);
    return group;
},{});

for(const key in ip) {
    ip[key].sort((a,b) => b.price - a.price);
    console.log(ip[key].slice(0,2));
}

const prods = [
  { id: 1, name: "iPhone", category: "Điện thoại", price: 20000000 },
  { id: 2, name: "MacBook", category: "Laptop", price: 35000000 },
  { id: 3, name: "Galaxy", category: "Điện thoại", price: 18000000 },
  { id: 4, name: "Asus", category: "Laptop", price: 25000000 },
  { id: 5, name: "AirPods", category: "Phụ kiện", price: 5000000 },
  { id: 6, name: "Ốp lưng", category: "Phụ kiện", price: 500000 },
  { id: 7, name: "Pixel", category: "Điện thoại", price: 19500000 },
];

console.log(prods.reduce((group,item) => {
    const key = item.category;
     if (!group["categories"]) {
        group["categories"] = {};
    }
    if(!group["categories"][key]) {
        group["categories"][key] = 0;
    }
    group["categories"][key] = group["categories"][key] + item.price;
    group["total"] = (group["total"] || 0) + item.price;
    return group;
},{}))

const ii = [1,2,3,2,1,3,3,4,2,2];

const uia = ii.reduce((group,item) => {
    const key = item;
    group[key] = (group[key] || 0) + 1;
    return group;
},{})
console.log(uia);
let mx = -1;
let tt = null;
for(const key in uia) {
    if(uia[key] > mx) {
        mx = uia[key];
        tt = key;
    }
}
console.log(tt);

const arr11 = [{id: 1, name: 'An'}, {id: 2, name: 'Binh'}]
const arr22 = [{id: 1, age: 20}, {id: 2, age: 25}]

const arr33 = arr11.concat(arr22);

const arr44 = arr33.reduce((group,item) => {
    const key = item.id;
    if(!group[key]) {
        group[key] = {};
    }
    group[key] = {...group[key], ...item};
    return group;
},{})
console.log(arr44);
const sx = [5, 1, 10, 2, 8];

console.log(sx.reduce((group,item) => {
    group["max"] = Math.max(...sx);
    group["min"] = Math.min(...sx);
    group["sum"] = (group["sum"]  || 0) + item;
    group["avg"] = group["sum"] / sx.length;
    return group;
},{}))

let string = "Hello World JavaScript"

console.log(string.toLowerCase().split(" ").join("-"));

const aaa = [1,2,3,4,5];

const bbb = [3,4,5,6,7];

console.log([...(aaa.filter((item) => !bbb.includes(item))), ...(bbb.filter((item) => !aaa.includes(item)))]);

let inputa = [
  { id: 1, name: 'An' },
  { id: 2, name: 'Binh' },
  { id: 1, name: 'An' },
  { id: 3, name: 'Chi' }
]

console.log(inputa.reduce((group,item) => {
    const find = group.some((tem) => item.name === tem.name);
    if(!find) {
    group.push(item);
    }
    return group;
},[]))

const pagination = [1,2,3,4,5,6,7,8,9];
const pageSize = 3;
const pageNumber = 1;
const offset = (pageNumber - 1) * pageSize; 

const page = pagination.slice(offset, offset + pageSize);
console.log(page);


const fr = ["apple", "banana", "kiwi", "strawberry", "orange"];
let ax = -1;
let chuoi = null;
for(let c of fr) {
    if(c.length > ax) {
        ax = c.length;
        chuoi = c;
    }
}
console.log(chuoi);

const stud = [
  { id: 1, name: "Alice", scores: { math: 90, english: 85, physics: 95 } },
  { id: 2, name: "Bob", scores: { math: 85, english: 95, physics: 85 } },
  { id: 3, name: "Charlie", scores: { math: 80, english: 75, physics: 90 } }
];

console.log(stud.map((item) => {
  let avg = 0;
  const group = item.scores;
  let count = 0;
  for(const key in group) {
      avg = (avg + group[key]);
      count++;
    }
  avg = avg / count;
  return {...item, avg};
}).sort((a,b) => a.avg - b.avg))

const vn = [1,2,3,4,5,6];
const targetSum = 7;

const cap = [];

for(let i = 0;i<vn.length;i++) {
  for(let j=i+1;j<vn.length;j++) {
    if(vn[i] + vn[j] === targetSum) {
        cap.push([vn[i],vn[j]]);
    }
  }
}
console.log(cap);

const sales = [
  { date: "2023-01-15", category: "Electronics", store: "Store A", amount: 2000 },
  { date: "2023-01-20", category: "Clothing", store: "Store B", amount: 500 },
  { date: "2023-02-10", category: "Electronics", store: "Store A", amount: 1500 },
  { date: "2023-02-15", category: "Clothing", store: "Store A", amount: 800 }
];

console.log(sales.reduce((group,item) => {
    const category = item.category;
    const strore = item.store;
    group[category] = (group[category] || 0) + item.amount;
    group[strore] = (group[strore] || 0) + item.amount;
    return group;
},{}))


const pp = "This is a sample text. This text contains some words, and some words appear more than once."

const ppo = pp.split(" ").filter((item) => item.length > 3);
console.log(ppo.join("").split("").reduce((group,item) => {
    group[item] = (group[item] || 0) +1;
    return group;
},{}))

const mangdachieu = [[1, 2], [2, 3, 2], [1, 3, 2, 4], [3]];

const nn = mangdachieu.flat();

const nnn = nn.reduce((group,item) => {
    group[item] = (group[item] || 0) +1;
    return group;
},{})
let cx = -1;
let pt = null;
for(const key in nnn) {
    if(nnn[key] > cx) {
        cx = nnn[key];
        pt = key;
    }
}
console.log(pt);

const pr = [
  { id: 1, name: "iPhone", price: 20000000, inStock: true, category: "Electronics" },
  { id: 2, name: "Samsung", price: 18000000, inStock: true, category: "Electronics" },
  { id: 3, name: "Áo thun", price: 200000, inStock: false, category: "Clothing" },
  { id: 4, name: "Quần jeans", price: 500000, inStock: true, category: "Clothing" },
  { id: 5, name: "Tai nghe", price: 5000000, inStock: true, category: "Electronics" }
];

const category = "Electronics";
const inStock = true;

console.log(pr.filter((item) => item.category == category && inStock == item.inStock));

const str = "OlilOi";
function isPalindrome(str) {
for(let i = 0; i < Math.floor(str.length /2 -1);i++) {
    if(str[i] !== str[str.length - 1 -i]) {
        return false;
    }
}
return true;
}
console.log(isPalindrome(str));

const hh = [2, 2, 1, 1, 1,1 , 2, 2];

const hhh = hh.reduce((group,item) => {
    group[item] = (group[item] || 0) + 1;
    return group;
},{})
const qq = hh.length /2;
for(const key in hhh) {
    if(hhh[key] >= qq) {
      console.log(key);
    }
}
const nnv = [1, 2, 3, 4, 3, 2, 1];

nnv.reduce((group,item) => {
    if(!group[item]) {
      group[item] = 0;
    }
    group[item] = group[item] + 1;
    if(group[item] == 2) {
      console.log(item);
      return item;
    }
    return group;
},{})

const vb = [3, 2, 4];
const target = 6;
const vvv = [];
for(let i = 0; i < vb.length ;i++) {
  for(let j = i + 1;j <vb.length;j++) {
    if(vb[i] + vb[j] == target){
        vvv.push(i,j);
    }
  }
}
console.log(vvv);

const prs = [
  { id: 1, name: "iPhone", brand: "Apple", category: "Smartphone", price: 1000 },
  { id: 2, name: "Galaxy S21", brand: "Samsung", category: "Smartphone", price: 900 },
  { id: 3, name: "MacBook", brand: "Apple", category: "Laptop", price: 2000 },
  { id: 4, name: "AirPods", brand: "Apple", category: "Accessory", price: 200 },
  { id: 5, name: "Galaxy Buds", brand: "Samsung", category: "Accessory", price: 150 }
];

const result = prs.reduce((group,item) => {
    const key = item.brand;
    if(!group[key]) {
        group[key] = {};
    }
    const key1 = item.category;
    if(!group[key][key1]) {
      group[key][key1] = [];
    }
    group[key][key1].push(item);
    return group;
},{})

const salesData = [
  { date: "2023-01-01", product: "iPhone", amount: 5000 },
  { date: "2023-01-02", product: "MacBook", amount: 12000 },
  { date: "2023-01-01", product: "AirPods", amount: 2000 },
  { date: "2023-02-01", product: "iPhone", amount: 8000 },
  { date: "2023-02-02", product: "MacBook", amount: 10000 },
  { date: "2023-03-01", product: "iPhone", amount: 6000 }
];


console.log(salesData.reduce((group,item) => {
    const month = item.date.slice(0,7);
    if(!group["byMonth"]) {
        group["byMonth"] = {}
    }
    group["byMonth"][month] = (group["byMonth"][month] || 0) + item.amount;
    if(!group["byProduct"]) {
        group["byProduct"] = {};
    }
    const key = item.product;
    group["byProduct"][key] = (group["byProduct"][key] || 0) + item.amount;
    return group;
},{}))

const stus = [
  { name: "An", subject: "Toán", score: 8 },
  { name: "Bình", subject: "Toán", score: 9 },
  { name: "Chi", subject: "Toán", score: 7 },
  { name: "An", subject: "Lý", score: 6 },
  { name: "Bình", subject: "Lý", score: 8 },
  { name: "Chi", subject: "Lý", score: 9 },
];


console.log(stus.reduce((group,item) => {
    const key = item.subject;
    if(!group[key] || group[key].score < item.score) {
        group[key] = item;
    }
    return group;
},{}));

const orrr = [
  { orderId: 1, customer: "An", total: 5000000 },
  { orderId: 2, customer: "Bình", total: 7000000 },
  { orderId: 3, customer: "An", total: 3000000 },
  { orderId: 4, customer: "Chi", total: 4000000 },
  { orderId: 5, customer: "Bình", total: 2000000 },
];
const ass = orrr.reduce((group,item) => {
    const key = item.customer;
    if(!group[key]) {
        group[key] = 0;
    }
    group[key] = group[key] + item.total;
    return group;
},{})
const ten = [];
for(const key in ass) {
    if(ass[key] >= 8000000) {
      ten.push(key);
    }
}
console.log(ten);
console.log(orrr.reduce((group,item) => {
    const key = item.customer;
    group[key] =(group[key] || 0) + 1;
    return group;
},{}))

const rro = orrr.reduce((group,item) => {
    const key = item.customer;
    group[key] =(group[key] || 0) + item.total;
    return group;
},{});
let lx = -1;
let vnnv = null;
for(const key in rro) {
    if(rro[key] > lx) {
        lx = rro[key];
        vnnv = key;
    }
}
console.log(vnnv);

const mmn = [
  { id: 1, customer: "An", total: 5000000, createdAt: "2024-05-15" },
  { id: 2, customer: "Bình", total: 7000000, createdAt: "2024-05-20" },
  { id: 3, customer: "Chi", total: 3000000, createdAt: "2024-06-05" },
  { id: 4, customer: "An", total: 2000000, createdAt: "2024-06-10" },
  { id: 5, customer: "Bình", total: 6000000, createdAt: "2024-07-01" },
];

console.log(mmn.reduce((group,item) => {
    const key = item.createdAt.slice(0,7);
    if(!group[key]) {
        group[key] = [];
    }
    group[key].push(item);
    return group;
},{}))

const sstu = [
  { id: 1, name: "An", score: 85 },
  { id: 2, name: "Bình", score: 75 },
  { id: 3, name: "Chi", score: 90 }
];

// Yêu cầu: Chuyển thành object với id làm key, điểm làm value
// Kết quả: { 1: 85, 2: 75, 3: 90 }

console.log(sstu.reduce((group,item) => {
    const key = item.id;
    const value = item.score;
    if(!group[key]) {
        group[key] = {};
    }
    group[key] = value;
    return group;
},{}))

const scos = [
  { name: "An", subject: "Math", score: 85 },
  { name: "An", subject: "Physics", score: 75 },
  { name: "Bình", subject: "Math", score: 90 },
  { name: "Bình", subject: "Physics", score: 80 }
];

// Yêu cầu: Tính điểm trung bình của mỗi học sinh
// Kết quả: [{ name: "An", average: 80 }, { name: "Bình", average: 85 }]

const ccv = scos.reduce((group,item) => {
    const key = item.name;
    if(!group[key]) {
        group[key] = [];
    }
    group[key].push(item) ;
    return group;
},{})
const nvc = []
for(const key in ccv) {
    const avg = ccv[key].reduce((sum,item) => sum + item.score,0) / ccv[key].length;
    const item = {name : key, average : avg}
    nvc.push(item);
}
console.log(nvc);

const psa = [
  { name: "iPhone", price: 20000000 },
  { name: "Samsung", price: 15000000 },
  { name: "Oppo", price: 8000000 },
  { name: "Xiaomi", price: 6000000 },
  { name: "Vivo", price: 5000000 },
  { name: "Vivoo", price: 4000000 }
];

console.log(psa.reduce((group,item) => {
    var key;
    if(item.price > 15000000) {
        key = "Cao cấp";
    } else if(item.price >= 5000000 && item.price <= 150000000) {
        key = "Trung cấp";
    } else {key = "Giá rẻ";}
    if(!group[key]) {
        group[key] = [];
    }
    group[key].push(item);
    return group;
},{}))

const customers = [
  { id: 1, name: "An", orders: [{ id: 1, total: 500000 }, { id: 2, total: 300000 }] },
  { id: 2, name: "Bình", orders: [{ id: 3, total: 700000 }] },
  { id: 3, name: "Chi", orders: [{ id: 4, total: 900000 }, { id: 5, total: 600000 }] }
];

// Yêu cầu: Tìm khách hàng có tổng giá trị đơn hàng cao nhất
// Kết quả: { id: 3, name: "Chi", totalOrderValue: 1500000 }

console.log(customers.map((item) => {
    const totalOrderValue = item.orders.reduce((sum,item) => sum + item.total,0);
    return {id : item.id, name : item.name, totalOrderValue : totalOrderValue};
}).sort((a,b) => b.totalOrderValue - a.totalOrderValue).slice(0,1));

const data = {
  users: [
    { id: 1, name: "An" },
    { id: 2, name: "Bình" }
  ],
  products: [
    { id: 1, name: "iPhone" },
    { id: 2, name: "Samsung" }
  ]
};
// Yêu cầu: Chuyển đổi thành mảng có dạng:
// [
//   { type: "user", id: 1, name: "An" },
//   { type: "user", id: 2, name: "Bình" },
//   { type: "product", id: 1, name: "iPhone" },
//   { type: "product", id: 2, name: "Samsung" }
// ]
const doi = [];
for(const key in data) {
    const witch = data[key].map((item) => {
        return {type : key, ...item};
    })
    doi.push(witch);
}
console.log(doi.flat());

const url = "https://example.com/search?name=iphone&price=20000000&category=smartphone";

// Yêu cầu: Phân tích query string thành object
// Kết quả: { name: "iphone", price: "20000000", category: "smartphone" }

const query = url.indexOf('?');
const urll = url.slice(query + 1);

console.log(urll.split("&").reduce((obj, item) => {
    const [key, value] = item.split('=');
    obj[key] = value;
    return obj;
},{}))