// var a =13;
// console.log(a);
// let b = 35;
// console.log(a+b);

// num = 12;
// var num;
// console.log(num);

// const arr  = [1,2,4,5,6,,7,7,8,];
// arr.forEach((user) =>{
//     console.log(user * 2);

// // });
// const password = "Khush@123";
// let t = "";

// while (t !== password) {
//     t = prompt("Enter your password:");

//     if (t !== password) {
//         console.log("Wrong password.");
//     }
// }

// console.log("Successful!");
// // let sum =0;

// for(let i  = 1; i <= 100; i++ ){
//     sum += i;
// }
// console.log(sum);

// let three = 0;
// for(let i  = 1; i <= 50; i++ ){
//    if(i % 3 == 0){
//     three+= i;

//    }
//    console.log(three);
// }c
// console.log(three);
// function not(){
//     return 15;

// }

// async function  add(a , b){
//     let c = await not();
//     setTimeout(() =>{
//          console.log("happy");
//     },4000)

//     return a+b+c;
// }

// console.log("End");

// console.log(add(4,5));

// const pr = Promise((res , rej)=>{
//     rej("sad");
// })

// pr.then(pra) =>{
//     console.log(pra);
// }
// .catch()
// let name = "namste";
// console.log(`hello ${name} good ${""}`);
// console.log('welcome to "\pu\"');

// let nme = "K-h-u-shwant";
// let a = nme.slice(-4,-1);
// console.log(a);
// let b = nme.substring(0,5);
// console.log(b);

// let c = nme.substr();
// console.log(c);
// //  nme.replace("K" , "k");

// console.log( nme.replace("charAt(0)" , "k"));
// console.log(nme.split("-"));

// let jj = "kali linux";
// console.log(jj.includes("x"));

// for(let  i = 0 ; i < 10;  i++ ){
//     let a = Math.floor(Math.random()*10)+1;
//         console.log(a);

// }

// let fruits = ["apple", "banana", "mabngo" , "kaju"];

// fruits.push("kaju")
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits)
// fruits.unshift("kela");
// console.log(fruits)

// let arr =  [1,3,5,7];
// arr.map((val) =>{
//     console.log(val*2);

// })
// console.log(b);
// let user = [{uname : "khushawant"},{uname:"abhi"},{uname:"divya"}];

// let b = user.filter((val) =>{
//     return val.uname.includes("a");
// })

// if(b.length ===0){
//     console.log("Not Found");
// }
// else{
//     b.forEach((val) =>{
//     console.log(val.uname);
//     })
// }

// let nums = [1,2,3];
// const brr = nums.map((x) => {
//     if(x%2 == 0){
//         return x;
//     }
//     else{
//         return  x-x;
//     }

// });

// const reu = nums.reduce((acc , val) =>{
//     return val += acc;
// })
// console.log(`This is array elements : ${reu} `);
// for (let i = 0; i < 1; i++) {
//   console.log(i);
// }
// let nums = [1,2,3,4,65,6];
// nums.push(9);
// console.log(nums);
// nums.pop();
// console.log(nums);
// nums.unshift(10);
// console.log(nums);
// nums.shift();
// console.log(nums);

// console.log(nums.includes(2));
// console.log(nums.at(3));
// nums.splice(0,1,5 , 10 ,20);
// console.log(nums);

// ['a','b','n'].forEach(function(e){
//      console.log(e);
// })

//  function greet(name){
//      return function greets(){
//         console.log(`hello ${name}`);
//      }

//   }

// let a = greet("khush");
// a();

// function greeting(by){
//    console.log("hello");
//    by();
// }
// function by(){
//      console.log("bye");

// }
// greeting(by);

// function validation(a, b, callback) {
//   if (typeof (a) === "number" && typeof (b) === "number") {
//     callback(a,b);
//   } else {
//     console.log("Invalid");
//   }
// }

// function add(a, b) {
//   console.log(a + b);
// }
// function sub(a, b) {
//   console.log(a + b);
// }
// function mul(a, b) {
//   console.log(a * b);
// }
// function div(a, b) {
//   if (b > 0) {
//     console.log(a / b);
//   } else {
//     console.log("Invalid input");
//   }
// }
// validation(10, 12, add);
// validation(10, 2, sub);
// validation(101, 2, mul);
// validation(14, 1, div);


// function greet( name , callback){
//  console.log(`good morning ${name} ${callback(name)}`);
// }
// function by(name){
//      return "bye "+name
// }
// function welcome(name){
//      return `welcome ${name}`
     
// }
// greet("khush" , by);
// greet("khush" , welcome);

// let arr = [1,3,5,6,67];
// let b = arr.map(e => e*2);
// console.log(b);
// let brr = [{name : 'k' , id : 1} 
//      , {name:'b', id : 3},
//      {name : 'c', id : 3}
// ];
// const g = brr.map(e =>  {  return e.name});
// console.log(g);

// let crr = [1,2,5];
// function Map(arr, callback){
//      let newArray = [];
//      for(let  i = 0  ; i < arr.length; i++){
//           let r = callback(arr[i]);
//           newArray.push(r);
//      }
//      return newArray;
// }
// const k = Map(crr , function(num){
//           return num*2;
// })
// console.log(k);

// function j(a, ...b) {
//   console.log(a , b);
  
// }
// j(1,2,3,4,5,5,);


// const orders = [
//   {
//     id: 1,
//     customer: "Rahul",
//     food: "Pizza",
//     price: 500,
//     delivered: true
//   },
//   {
//     id: 2,
//     customer: "Aman",
//     food: "Burger",
//     price: 250,
//     delivered: false
//   },
//   {
//     id: 3,
//     customer: "Priya",
//     food: "Pasta",
//     price: 400,
//     delivered: true
//   },
//   {
//     id: 4,
//     customer: "Riya",
//     food: "Momos",
//     price: 150,
//     delivered: false
//   }
// ];

// // fatch the user name

// const users = orders.map((u) =>{
//   return u.customer;
// })

// console.log(users);

// // fatch customer or  food or price

// const cust = orders.map((u) =>{
//   return {name : u.customer , order : u.food , price : u.price}
// })
// console.log(cust);

// // filter the order price less than 200;

// const fit = orders.filter((u) =>{
//   if(u.price <= 300){
//     return u;
//   }
// })
// console.log(fit);
// fit.map((u) =>{
//   console.log(u.customer);
// })

// //filter the array  whose food is delivered 

// const red = orders.filter((val) =>{
//   if(val. delivered){
//     return val;
//   }

// })
// console.log(red);


// // count the number of orders delivered

// const pen = orders.reduce((count , order) =>{
//    return  order.delivered ? count + 1 : count;
// },0)

// console.log(pen);


// const arr = [1,2,3,5,6,8];
//  const brr = arr.filter((u) =>{
//   if(u % 2 != 0){
//     return u;
//   }
// })
// console.log(brr);


// const crr = orders.reduce((total , pr) =>{
//   return total += pr.price;
// },0)

// console.log(crr);
// let res1 = [];
// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i] % 2  === 0){
//       res1.push(arr[i]);
//     }
// }

// let res3 = orders.sort((a,b) => a.price - b.price);

// res3.map((u) => {
//     console.log();
    
//     console.log(u.price);
// })
// console.log(res3);

// function print(n , i =0){
//   if(n === 0) return;

//   console.log(i);
//   print(n-1);
//   i++;
  
// }
// print(10 , 1);

// *******************************************************************************************************************************************************
// objects

// function input(name , id ){
//    return [{
//   name : name,
//   id : id
// }]
// }

// let s = input("khushwant" , 32);
// console.log(s);


      // let s = {
      //   "full name" : "khush",
      //   id : 12,
      // }

      // // consol.log(s.full name)// error
      // console.log(s["full name"]) // khush


// let s = {
//     name : "k",
//     id : 12,
// }
// s.address = "limbda";
// s["k"] = "kk";
// console.log(s); //{ name: 'k', id: 12, address: 'limbda', k: 'kk' }


// let s = {
//     n : "k",
//     age : 12,
//     id : 123,
// }
// console.log(s);

// delete s.age 
// console.log(s);

// const car = {
//   name : "Camry",
//   company : "Toyota",
//   model : 2025,
//   rate : 300000,
// }

// console.log(car);
// // add data
// car.m = 20
// console.log(car);
// // delete data
// delete car.m;
// console.log(car);
// // access using bracket [];

// console.log(car["name"]);
//  // dynamic value 

//  let k = "company";
//  console.log(car[k]);
 


// let arr = [];
// function input(obj){
//     return arr.push(obj);
// }
// input({name : "k"});
// input({name : "e"});
// input({name : "h"});
// input({name : "l"});
// input({name : "o"});
// arr.map((u) =>{
//  console.log(u.name);
 
// })

// const inp = document.querySelector("input");
// console.log(inp.value);

let obj = {
  for:"kk",
  let : 12,

}
console.log(obj.let);