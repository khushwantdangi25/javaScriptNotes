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

// let obj = {
//   for:"kk",
//   let : 12,

// }
// console.log(obj.let);

// let user = {
//       name : "jhon",
//       address : {
//             // city:{
//             //       state:"rj",
//             // }
//       },
//       date : 7
// }
// console.log(user.address.city?.state);
// console.log("hello");

// let s1 = Symbol();
// let s2 = Symbol();
// if(s1 == s2){

//       console.log("true");

// }

// let salary = Symbol("salary")
// const employee  = {
//          name : "Jhone",
//          age  : 25,
//          [salary]:50000,
//       //    address : {
//       //                   city : "UDZ",
//       //              },

//           }

//       console.log(employee.address?.city);
//       console.log(employee[salary]);
//       console.log(Object.keys(employee));

//  let users = [
//   {
//     id: 1,
//     name: "Khushwant",
//     pic: "https://tse3.mm.bing.net/th/id/OIP.ElNoLNw9fjO3FCKrBNhMtwHaL5?rs=1&pid=ImgDetMain&o=7&rm=3",
//     bio: "create yourself"
//   },
//   {
//     id: 2,
//     name: "Jay",
//     pic: "https://th.bing.com/th/id/OIP.nbuopYKv4CTw1mGUMcgM7AHaLG?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "Money"
//   },
//   {
//     id: 3,
//     name: "Divya",
//     pic: "https://th.bing.com/th/id/OIP.H3S-oQHMw9okOwSMHmb0jQHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "Self Obsessed"
//   },
//   {
//     id: 4,
//     name: "Tanu",
//     pic: "https://th.bing.com/th/id/OIP.JAQW0ViuSEq9ZpX5f0EHYAHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "dancing world"
//   },
//   {
//     id: 5,
//     name: "Bhumi",
//     pic: "https://th.bing.com/th/id/OIP.LC5QeewTlOYRlb0-6cg4vAHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "Make it"
//   },
//   {
//     id: 6,
//     name: "hitesh",
//     pic: "https://th.bing.com/th/id/OIP.OCHyq87SpYxZPNWl8_UezQHaJh?w=208&h=268&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "urgent only"
//   },
//   {
//     id: 7,
//     name: "vikram",
//     pic: "https://th.bing.com/th/id/OIP.MCdl_FWPF5UxbRw2coXOAQHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "anger issue"
//   },
//   {
//     id: 8,
//     name: "panda",
//     pic: "https://th.bing.com/th/id/OIP.Qbrperu0V-aDLxC2COE-ewHaHa?w=208&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "sleep sleep"
//   },
//   {
//     id: 9,
//     name: "p2",
//     pic: "https://th.bing.com/th/id/OIP.DJ0LOso38n8jle_UVSw9cgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "love panda"
//   },
//   {
//     id: 10,
//     name: "p3",
//     pic: "https://th.bing.com/th/id/OIP.NQIMyGFg_zvCX1u_Jj1rHgHaLG?w=204&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "love panda"
//   },
//   {
//     id: 11,
//     name: "Dhruvi",
//     pic: "https://th.bing.com/th/id/OIP.HxlOVJJLTcmV63taXN-blwHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
//     bio: "love hitesh"
//   }
// ];

// for (let i = 0; i < users.length; i++) {
//     for (let a in users[i]) {
//         console.log(`${a} : ${users[i].a.id}`);
//     }
// }

// *******************************************************************************************************************************************************

//  Shallow copy Deep copy

// let obj = {
//   name:"k",
//   d : 1
// }
// let b = {...obj , k:2};
// console.log(b);

// let ob = {
//   name : "khushwant",
//   age : 22,
//   address : function(){
//     () =>{
//     console.log(this.name);

//   }
// }

// }

// Shallow-copy
// let obc = ob;

// obc.address.city.place = "Nathdwara"
// console.log(obc.address.city.place);
/// console.log(ob.address.city.place);
// console.log(ob.address()());

// Deep-copy
// let obcd = structuredClone(ob);
// obcd.address.city.place = "Bhilwara";

// console.log(obc.address.city.place);
// console.log(ob.address.city.place);
// console.log(obcd.address.city.place);

// // Array deep shallow copy

// let ar = [1,2,3,4,55];
// let br = [...ar];
// br.push(30);
// console.log(ar);
// console.log(br);

// let arr = [[1,2],[3,4],[45 , 0]];
// let brr = [...arr];

// brr[0][0] = 45

// console.log(arr);
// console.log(brr);

// ****************************************************************************************************************************************************************************

// Q1. Reference Copy (=)
// ----------------------
// Create an object student1 with:
// - name
// - age

// Assign it to student2 using (=).

// Tasks:
// 1. Change student2.name.
// 2. Print both objects.
// 3. Explain why both objects changed.

// let student1 = {
//     name : "kkhuswant",
//     age : 20
// }

// let student2 = student1;

// student2.name = "kunal"
// console.log(student1);
// console.log(student2);

// Q2. Shallow Copy
// ----------------
// Create an object employee with:
// - name
// - department

// Tasks:
// 1. Create a shallow copy using the spread operator (...).
// 2. Change the department in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did or did not change.

let emp = {
  name: "sourav",
  department: "IT",
};

let emp2 = { ...emp };
emp2.department = "Accounts";
// console.log(emp2);
// console.log(emp);

// Q3. Shallow Copy with Nested Object
// -----------------------------------
// Create an object user with:
// - name
// - address
//     - city
//     - pincode

// Tasks:
// 1. Create a shallow copy using the spread operator.
// 2. Change address.city in the copied object.
// 3. Print both objects.
// 4. Explain why both objects show the same city.

let city1 = {
  name: "khushwant",
  age: 22,
  address: {
    city: "Udaipur",
  },
};
let city2 = { ...city1 };

city2.address.city = "bhilwara";
// console.log(city1);
// console.log(city2);

// Q4. Deep Copy
// -------------
// Using the same user object:

// Tasks:
// 1. Create a deep copy using structuredClone().
// 2. Change address.pincode in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did not change.

let user = {
  name: "Jay",
  age: 20,
  address: {
    city: "Rajasthan",
  },
};

let user2 = structuredClone(user);

user2.address.city = "Udaipur";
user2.name = "kunal";
// console.log(user);
// console.log(user2);

// Q5. Bank Account
// ----------------
// Create an object with:
// - accountHolder
// - balance

// Create methods:
// 1. deposit(amount)
// 2. withdraw(amount)

// Requirements:
// - Update balance using this.balance.
// - Print balance after every transaction.

// let Bank = {
//   accountHolder: "Sudhir",
//   balance: 1000,

//   deposit: function (val) {
//     console.log("before deposite : " + this.balance);

//     this.balance += val;

//     console.log("current balance : " + this.balance);
//   },

//   withdraw: function (val) {
//     if (this.balance >= val) {
//       console.log("withdrawl success");
//       this.balance -= val;
//       console.log("remaning balance : " + this.balance);
//     } else {
//       console.error("Insufficient Balance");
//     }
//   },


//   checkBalance: function () {
//     console.log("current balance :  " + this.balance);
//   },
// };

// // Bank.deposit(100);
// // console.log();
// // Bank.withdraw(1200);
// // console.log();
// // console.log(Bank.accountHolder);
// // console.log();
// Bank.checkBalance();

//  ramBolo();
// function ramBolo(){
//   console.log("Ram");
  
// }
//  string method : startswith , endswith trimstart , trimends , padstart , padendt 
  // number pricision in float and int 