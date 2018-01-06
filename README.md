# Basic and simple examples on async/await (JS)

Before diving into async/await,

- All the js files in this repo use arrow functions. (Normal functions can be used too)
So, a little bit on arrow functions:
```javascript
function add(a, b) {
    return (a + b);
}
```
is similar to (They aren't alike!)
```javascript
const add = (a, b) => {
    return (a + b);
}
```

[**Click here to read about arrow functions' basics**](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc)

- How to execute?
Copy, paste the contents of an individual js file and execute it:
```node <jsFileName>.js```  

- Or,  
clone this repo (git clone https://github.com/cskru/asyncAwaitSimplified.git)  
Get into the repo (cd path/to/asyncAwaitSimplified)  
And execute the 3 files one by one using ```node <jsFileName>.js```  

Ok, Let's start!

1. **1_async_await_simple.js**
- Defines 4 ```async``` methods, add, subtract, mul, div that return respective results.
-  Uses an ```async``` iife as a context within which ```await``` is used.  
Awaiting simply in a bare js program (top level await) is illegal. Refer: <https://stackoverflow.com/a/39679541/7253565>
- This simply means, ```await``` can be done inside another async method.
- 
```javascript
result = await add(10,20);
console.log(result);
```
> Since ```await``` is mentioned before the ```add``` method call, the execution jumps to ```add``` method, **waits for add method to return results** and **continues to only after the add method returns!** Yay!  

> This simply means ```console.log(result);``` is executed only after add method returns.  
i.e., statements following ```result = await add(10,20);``` will be executed only after add returns.

2. **2_async_await_with_promises.js**  
- This explains how to use promises within async methods. It is as regular promise return as ever.  
- The main point of all attraction is how the promise returning methods are called.
```javascript
result = await add(10,20);
console.log(result);
```

> This is like a dream come true in JS. Why?   
Check out the next file ___3_problems_with_nested_then___ that accomplishes the same thing in the absence of async/await ;-)  
With a beautiful christmas tree of thens ;-)

> P.S: We can use a third party library like [bluebird](http://bluebirdjs.com/docs/api/promise.try.html) as a workaround.     
But, async/await is a feature, built into JS to beat the nested then and catch issue! Yay!

3. **3_problems_with_nested_then.js**
- This shows how beautiful, nested then looks :-P ;-)
- Also, try removing the innermost catch:
```javascript
.catch(err => {
    console.log("Errors wrt div method call 2",err);
}) 
```
It gives an Unhandled promise rejection error.  
Which means, each .then must have a corresponding .catch which leads to a tree like pattern.  

> Another separate issue:
Try writing your own method that has a nested then pattern. Induce rejections in the innermost then, catch it in the calling then and see the stacktrace. It is not easily readable.  
It'll be something like, .then.then.then.then has some issues.  :-|  

**Hail async/await !** :-)

Kruthika