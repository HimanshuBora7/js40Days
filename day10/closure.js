// Closures ~ in layman language it can be understood as the
//function that can remember the variable from its outer function even after the outer functin has executed

// a function that can remember the values of its outer function in some way even after the outer function has been executed then the inner function will be called closure

console.log("day 10 - Closure");

function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();

// to know if the inner function is closure or not

function outer1() {
  let x = 10;

  return function inner1() {
    console.log(x);
  };
}
const func = outer1();
func();
// in this way the inner function is getting executed after the execution of outer function
// and it is closure as it is remembering the value of its outer function even after it has siezed its execution

//can be used to hide the original value of outer function

function outerCount() {
  let count = 0;

  return function innerCount() {
    count++;

    console.log(count);
  };
}

const func1 = outerCount();
func1(); // 1
func1(); // 2
func1(); // 3

// so closure remembers the updated value it doesn't reinitialize again from outer function it closes the value only first time from outer function

// real world example

// Data encapsulation ~ u don't expose ur private variable or data to the world, they are accessed only through some functions or methods always

// here is a simple example of a bank account where we want to provide three basic functionalities displaying the current balance, depositing the amount, taking money from the account but in all these functionalities the initial balance shoudl not be exposed ~ use closure

// as a function can return only one thing so to return three functionalaties we will be using object
function createBankAccount(intialBalance) {
  let balance = intialBalance;
  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log("Deposited ", amount, " Current Balance ", balance);
    },
    withdraw: (amount) => {
      if (amount <= balance) {
        balance -= amount;
        console.log("withdrawn ", amount, " Current Balance ", balance);
      } else {
        console.log("not suffiecient balance");
      }
    },
    checkBalance: () => console.log(balance),
  };
}
let firstAccount = createBankAccount(100);

firstAccount.deposit(100);
firstAccount.withdraw(1000);
firstAccount.checkBalance();

// while using closure check for memory leakage
// a memory which is not been used by program but it is also not getting collected by garbage collector because it is still refrence by closure function
// closure should be avoided in memory heavy applications and while working with big data

// usefulness of closure
// 1. You can keep the variables private without exposing them
// 2. You can stop varaible pollution. ~ no one can change the variable directly it can only be changed using closure function
// 3. You can create a function factory. ~ mulitple methods inside a function
// 4. You can keep the variable alive between multiple calls

function timer() {
  let secs = 0;

  return function () {
    secs++;
    console.log("elapsed seconds ", secs);
  };
}

const time = timer();

time(); // 1
time(); // 2
time(); // 3
time(); // 4
