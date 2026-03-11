// # JavaScript Practice Questions

// ## Fetch API

// **1.** Write a fetch request that gets data from `https://jsonplaceholder.typicode.com/users` and logs the data.

// let response = fetch("https://jsonplaceholder.typicode.com/users")

// response
//   .then((res) => res.json())
//   .then((data) => console.log(data))



// **2.** Fetch data from an API and convert the response using `res.json()`.

// let getData = fetch("https://jsonplaceholder.typicode.com/users")
// getData
//   .then((res) => res.json())
//   .then((res) => console.log(res))



// **3.** Write a fetch request that logs the **response object** before converting it to JSON.
// let getData = fetch("https://jsonplaceholder.typicode.com/users")

// getData
//   .then((res) => console.log(res))


// **4.** Fetch data and log `"Data loaded"` after the JSON is received.
// let getData = fetch("https://jsonplaceholder.typicode.com/users")

// getData
//   .then((res) => res.json())
//   .then((res) => console.log("Data Loded"))

// **5.** Fetch users and print the **total number of users returned**.
// let getData = fetch("https://jsonplaceholder.typicode.com/users")

// getData
//   .then((res) => res.json())
//   .then((res) => console.log(res.length))

// **6.** Write a fetch request that handles errors using `.catch()`.
// let getData = fetch("https://jsonplaceholder.typicode.com/users")

// getData
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch(err => console.log("Error->", err))

// ---

// ## Promises (.then / .catch)

// **7.** Create a Promise that resolves with `"Hello"` and print it using `.then()`.

// const promise = new Promise((res, req) => {
//   res("Hello")
// })
// promise.then(res => console.log(res))

// **8.** Create a Promise that rejects with `"Something went wrong"` and handle it using `.catch()`.

// const prom = new Promise((res, rej) => {
//   rej("Somthing went wrong")
// })
// prom.then((data) => console.log("res->", data))
//   .catch((error) => {
//     console.log(error);
//   })

// **9.** Write a Promise chain with **two `.then()` blocks**.

// const prom = new Promise((res, rej) => {
//   res(20)
// })
// prom
//   .then((data) => {
//     console.log("First then data-->", data);
//     return data*3

//   })
//   .then((data) => {
//     console.log("Second then data-->", data);

//   })

// **10.** Create a Promise that resolves after **2 seconds** using `setTimeout`.

// const prom = new Promise((res, rej) => {
//   setTimeout(()=>{
//     res("Resolve run after 2 sec")
//   },2000)
// })
// prom.then((data) => console.log("res->", data))

// **11.** Write a Promise chain that prints `"Step 1"` then `"Step 2"`.

// const prom = new Promise((resolve, reject) => {
//   resolve("Step 1");
// });

// prom
//   .then((data) => {
//     console.log(data);
//     return "Step 2";
//   })
//   .then((data) => {
//     console.log(data);
//   });


// ---

// ## Async / Await

// **12.** Convert the following code into `async/await`: `fetch(url).then(res => res.json()).then(data => console.log(data))`
// let response = fetch("https://jsonplaceholder.typicode.com/users")

// let getData = async () =>{
//   let res = await response
//   let data = await res.json()
//   console.log(data);

// }
// getData()

// **13.** Write an async function that fetches data and logs it.

// let getData = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   console.log(data);
// }

// getData();


// **14.** Write an async function that fetches data and stores it in a variable.

// let getData = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();

//   let userData = data
//   console.log(userData);
// }

// getData();

// **15.** Write an async function that waits for a Promise that resolves after **1 second**.

// let prom = new Promise(() => {
//   setTimeout(() => {
//     console.log("Wait for 1 second");

//   }, 1000)
// })


// let getData = async () => {
//   let res = await prom
//   let data = await res.json();

//   let userData = data
//   console.log(userData);
// }

// getData();

// **16.** Write an async function that fetches data and prints `"Finished fetching"` after the data is received.

// let getData = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();

//   console.log(data);

//   console.log("Finished fetching");
// }

// getData();

// ---

// ## Error Handling

// **17.** Write a `try/catch` block that handles an error from `JSON.parse()`.

// try {
//   let data = JSON.parse('{"username":"Subham"}')
//   console.log(data);

// } catch {
//   console.log("Invalid data");

// }

// **18.** Create a function that throws an error `"Invalid input"`.

// function throwError(value){
//   if(!value){
//     throw new Error("Invalid Input");

//   }
// }

// throwError()

// **19.** Write a `try/catch` example that prints `"Error occurred"` in the catch block.

// try {
//   throw new Error("Invalid Input")
// } catch {
//   console.log("Error occurred");

// }

// **20.** Write a `try/catch/finally` example where the finally block prints `"Always runs"`.

// try {
//   console.log("Try block");
// } catch (error) {
//   console.log("Error");
// } finally {
//   console.log("Always runs");
// }


// **21.** Use `try/catch` inside an async function.

// let response = async () => {
//   try {
//     let data = await fetch("https://jsonplaceholder.typicode.com/users")
//     let res = await data.json()
//     console.log(res); 
//   }catch{
//     console.log("err");

//   }
// }

// response()
// ---

// ## ES Modules

// **22.** Create a file `utils.js` that exports a variable `name = "JavaScript"` using **named export**.

//utils.js create path("./utils.js")

// **23.** Import the `name` variable in another file and log it.


// import { username } from "./utils.js"

// console.log(username);

// **24.** Create a **default export** function `add(a, b)` that returns the sum.


// **25.** Import the default exported `add` function in another file and use it.

import add from "./utils.js"
console.log(add(5, 2));
