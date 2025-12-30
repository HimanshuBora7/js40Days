console.log("Day14: Error Handling");

// things covered in this section

// 1. Different types of error in js
// 2. try...catch syntax and flow
// 3. Real-World use cases with try...catch
// 4. Throwing error
// 5. Rethrowing error
// 6. the try...catch..finally
// 7. Creating  Custom error
// 8. Self assignment operator

// two types of error
// parsing error ~ syntax error , grammer of js is broken
// runtime error ~ error given out during runtime of program

// what is an exception in JavaScript
// ans: Exceptions are runtime errors that disrupt program execution.

//console.log(x); // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name); // TypeError: cannot read properties of null

//console.log("hi" // SyntaxError

// let arr = new Array(-1) // RangeError
// decodeURIComponent("%") //URI error

// try...catch

try {
  //logic or code
} catch (err) {
  // handling error
  // err is an instance of error object
}

/*
1. code inside try gets executed.
2. if no error in the try block, the catch block will be ignored and will not be executed.
3. if there is an error in the try block, the execution of the try block will be suspended and the control will move to the catch block. In the catch block you can find the error details and do the needful    
*/

try {
  console.log("execution starts here");
  abc;
  console.log("execution ends here");
} catch (err) {
  console.error("An error has occured");
  console.log(err.message);

  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

// real world use case

function divideNum(a, b) {
  try {
    if (b === 0) {
      // throw new Error("Division by zero is not allowed")
      const err = new Error("division by zero is not allowed. ");

      throw err;
    }
    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.log("got a math error:", error.message);
  }
}

divideNum(15, 3);
divideNum(14, 0);

const person = {
  name: "bob",
  address: {
    city: "banglore",
  },
};

function getPostalCode(user) {
  try {
    console.log(user.address.country.getPostalCode);
  } catch (error) {
    console.error("Error accessing property:", error.message);
  }
}
getPostalCode(person);

function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error("invalid input: age must be a number.");
    }
    console.log(`User's age is: ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}

validateAge(10);
validateAge("s");

// rethrow

// when we don't want to process the error ourself but we want to give this liberty to the user so we catch an error and throw it up in the heirarchy so some top level function can deal with it

function validateForm(formData) {
  try {
    if (!formData.username) throw new Error("username is mandatory");
    if (!formData.email.includes("@"))
      throw new Error("Invalid email format!!");
  } catch (error) {
    console.error("Validation issues found:", error.message);
    throw error; // again rethrowing error
  }
}
try {
  validateForm({ username: "bob", email: "bademail" });
} catch (error) {
  console.log("showing error message for user creation", error.message);
}
// to the end user always show error log from top level function
// finally

try {
} catch (error) {
} finally {
  // code that always runs(cleanup actions )
}
try {
} catch (error) {
} finally {
  //code that always runs (cleanup actions)
}

function processInformation(information) {
  try {
    console.log("Processing information...");
    if (!information) throw new Error("No information available to process");
    console.log("information processed");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("cleanup: closing database connection");
  }
}

processInformation("bob is firing ");

//custom error

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function validateCitizen(age) {
  if (age < 60) {
    throw new ValidationError("you are not a senior citizen");
  }
  return "you are a senior citizen";
}

try {
  const message = validateCitizen(45);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
