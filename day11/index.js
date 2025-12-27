console.log("day 11 - Objects ");

// object literal way of creating an object
let user = {
  name: "bob",
  age: 20,
  "for special": false,
};

console.log(user);

console.log(user.name);
console.log(user.age);

user.isfemale = false;
console.log(user);
console.log(user.isfemale);
user["for special"] = true;
console.log(user["for special"]);

// square brackets are used when we want to include some special charector in our key field like space etc.
// deleting a property
// delete is keyword
// dot operator is not used while using square bracket
delete user["for special"];
delete user.age;
console.log(user);

//accessing dynamic key value

user.age = 24;
const someKey = "age";

// now we want to estb someKey as key so its value  can be fetched dynamically (during runtime )

console.log(user[someKey]); // 24

// construct a object whose key is getting dynamically generated

// const favCar = prompt("Enter ur favorite car ");

// let car = {
//   [favCar]: "fav car",
// };
// console.log(car);

// constructor function ~ similar syntax to normal function but by convention the name of the constructor function should begin with capital letter .. helps to create diffn instances
// objects created wth consttructor function are associated with types while using console.log of object we can say their type means from which construction function this particular object is created
function Car(name, model) {
  this.name = name;
  this.model = model;
}

// to create object from this constructor function we have to use 'new' keyword

const porcheCar = new Car("porche", 911);
console.log(porcheCar);

const BmwCar = new Car("BMW", "X1");
console.log(BmwCar);

console.log(BmwCar instanceof Car); //true

//using Object() keyword to make an object

const alphaPerson = new Object();
alphaPerson.name = " alpha";
alphaPerson.age = 20;

console.log(alphaPerson);

// objects using factory function (factory function ~ function which can provide diffn types of functionalities based on the arguments ) ~ same function creating diffn objects

function createUser(name, age) {
  return {
    name,
    age,
  };
}

// 'new ' keyword is not used here while creation of object

const person1 = createUser("charlie", 19);

console.log(person1);

const person2 = createUser("delta", 18);
console.log(person2);

//in key value pairs of object the values can also be non primitive ~ function , array , objects
// functions as key inside an object are nothing but mehods hahaha

function createAnotherUser(name, age) {
  return {
    // name: name, is simalar to name , shothand operator
    name,
    age,
    greet() {
      console.log("hello", this.name);
    },
  };
}
const person3 = createAnotherUser("echo", 22);

console.log(person3);
person3.greet();

//includong methods in object crated using object literal method

let profile = {
  name: "foxtrot",
  age: 23,
  company: "delta",
  message: function () {
    console.log(
      `${this.name}'s age is ${this.age} and he belongs to ${this.company} company`
    );
  },
};

console.log(profile);
profile.message();

//nested objects

// object containing other objects as values

let profile2 = {
  name: "hotel",
  age: 24,
  company: "echo",
  address: {
    city: "mogadishu",
    location: "central cmd",
    zone: "A+",
    country: "somalia",
    status: function () {
      console.log("Roger, Active");
    },
  },
};

console.log(
  `${profile2.name} is depolyed in ${profile2.address.zone} under ${profile2.address.location}`
);
profile2.address.status();
console.log(profile2);

// the in operator is used to check if certain property exits in an object or not

console.log("field" in profile2); // false
console.log("status" in profile2); // false
console.log("name" in profile2); // true

// for traversing all the properties of object we will be using for ... in loop

for (let key in profile2) {
  console.log(key);
  console.log(profile2[key]);
}

// using Object.keys to get all the keys of a object in an array
console.log(">");
console.log(Object.keys(profile2));

// object reference

const fruit = {
  name: "apple1",
};

let anotherFruit = {
  name: "apple",
};

// although both the objects are containing same value inside but they are not same as objects are refence type and the constant fruit and anotherFruit are holding different address

anotherFruit = fruit; // now the fruit constant is holding reference to the address of anotherFruit so it has stored now the

console.log(anotherFruit);
console.log(anotherFruit == fruit);
