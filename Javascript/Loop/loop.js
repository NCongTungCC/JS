// Ví dụ về vòng lặp for
for (let i = 0; i < 5; i++) {
    console.log(`Vòng lặp for - Lần lặp: ${i}`);
}

// Ví dụ về vòng lặp while
let count = 0;
while (count < 5) {
    console.log(`Vòng lặp while - Lần lặp: ${count}`);
    count++;
}

// Ví dụ về vòng lặp do...while
let num = 0;
do {
    console.log(`Vòng lặp do...while - Lần lặp: ${num}`);
    num++;
} while (num < 5);

// Ví dụ về vòng lặp for...of
const array = ['A', 'B', 'C', 'D'];
for (const item of array) {
    console.log(`Vòng lặp for...of - Phần tử: ${item}`);
}

// Ví dụ về vòng lặp for...in
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(`Vòng lặp for...in - Key: ${key}, Value: ${object[key]}`);
}