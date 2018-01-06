//Async methods; Simple ones without promise
const add = async(a, b) => {
    console.log("Inside add method");
    return (a + b);
}

const subtract = async(a, b) => {
    console.log("Inside subtract method");
    return (a - b);
}

const mul = async(a, b) => {
    console.log("Inside mul method");
    return (a * b);
}

const div = async(a, b) => {
    console.log("Inside div method");
    if(b === 0) {
        return "Divide by zero error!\nSecond operand can't be 0";
    }
    return (a / b);
}

//Using async methods - note, an async method can be called or awaited only inside another async context
//Hence using an async iife
//iife is a method which is immediately called after it is defined and that's exactly what we need here
//We want to create an async context within which we can call the above defined async methods.

//awaiting simply in a bare js program (top level await) is illegal. Refer: https://stackoverflow.com/a/39679541/7253565

(async() => {
    try{
        let result;

        result = await add(10,20);
        console.log(result);

        result = await subtract(10,20);
        console.log(result);

        result = await mul(10,20);
        console.log(result);

        result = await div(10,20);
        console.log(result);

        result = await div(10,0);
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
})();