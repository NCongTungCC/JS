var mang = [1,5,7,9,2,4];

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
c.pop();
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
