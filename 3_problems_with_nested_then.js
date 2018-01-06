//Normal methods methods (Not async)
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log("Inside add method");
        resolve(a + b);
    })
}

const subtract = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log("Inside subtract method");
        resolve(a - b);
    })
}

const mul = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log("Inside mul method");
        resolve(a * b);
    })
}

const div = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log("Inside div method");
        if(b === 0) {
            reject("Divide by zero error!\nThe second operand can't be 0");
        }
        resolve(a / b);
    })
}

add(10, 20)
    .then(result => {
        console.log(result);
        subtract(10, 20)
            .then(result => {
                console.log(result);
                mul(10, 20)
                    .then(result => {
                        console.log(result);
                        div(10, 20)
                            .then(result => {
                                console.log(result);
                                div(10, 0)
                                    .then(result => {
                                        console.log(result);
                                    })
                                    .catch(err => {
                                        console.log("Errors wrt div method call 2",err);
                                    })    
                            })
                            .catch(err => {
                                console.log("Errors wrt div method call 1",err);
                            })
                    })
                    .catch(err => {
                        console.log("Errors wrt mul method call",err);
                    })
            })
            .catch(err => {
                console.log("Errors wrt subtract method call",err);
            })
    })
    .catch(err => {
        console.log("Errors wrt add method call",err);
    })