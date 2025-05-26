// async demo () {
//     B() // hamf ddoong bo
//     C()  // bat dong bo
//     await D() // bat dong bo
//     E() // bat dong bo
//     F() // dong bo
// }
async function demo() {
    console.log("A");
    setTimeout(() => {
        console.log("B");
    }, 1000);
    await new Promise(resolve => {
    setTimeout(() => {
        console.log("C");
        resolve();
    }, 0);
});
     setTimeout(() => {
        console.log("E");
    }, 1000);
    console.log("F");
}
demo();

try {
    let i = 0;
    i = i + x;
} catch(err) {
    console.log("looix");
} finally {
    console.log("finally");
}