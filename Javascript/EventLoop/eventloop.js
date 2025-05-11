console.log("Start");

function normalFunction() {
    console.log("This is a normal function.");
}

async function asyncFunction() {
    console.log("This is an async function.");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async function completed.");
}

normalFunction();
asyncFunction();

console.log("End");