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


  let u = {
    name : "khushwant",
      fun : function(day){
      console.log("today is : "+day);
      console.log("good morning  "+this.name);
    },
  }
  let u2 = {
    name:"kunal",
  }
  u.fun.call(u2,"tuesday");

  let f2 = u.fun.bind(u2);
  f2("ll")