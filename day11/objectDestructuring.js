console.log("Object Destructuring......");

const user = {
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  maidenName: "Smith",
  age: 29,
  gender: "female",
  email: "emily.johnson@x.dummyjson.com",
  phone: "+81 965-431-3024",
  username: "emilys",
  password: "emilyspass",
  birthDate: "1996-5-30",
  image: "https://dummyjson.com/icon/emilys/128",
  bloodGroup: "O-",
  height: 193.24,
  weight: 63.16,
  eyeColor: "Green",
  hair: {
    color: "Brown",
    type: "Curly",
  },
  ip: "42.48.100.32",
  address: {
    address: "626 Main Street",
    city: "Phoenix",
    state: "Mississippi",
    stateCode: "MS",
    postalCode: "29112",
    coordinates: {
      lat: -77.16213,
      lng: -92.084824,
    },
    country: "United States",
  },
};

// traditional way to access data

console.log(user.firstName, " \n", user.address);

const { age, gender } = user;

// now the age and gender properties from the user will be extracted and will be assigned to the variable age and gender respectively

console.log(age);
console.log(gender);

// creating a new varibale ~ suppose we also want to initialize and assign a variable some value which do not exist in the objects property

const { lastName, maidenName, rank = "captain" } = user;

console.log(lastName, maidenName, rank);

//dynamic variable

const { hair } = user;
console.log(hair);

// Aliases ~ used to avoid variable name conflicts

const { weight: weightt } = user; //

console.log(weightt);

// nested object destructuring

const {
  address: { city },
} = user; // only city value will be extracted from the nested object and will be assigned to variable city

console.log(city);

// destructuring to the function parameter

function dropBomb(user) {
  console.log(
    `dropping bomb at ${user.address.coordinates.lat} + ${user.address.coordinates.lng}`
  );
}

dropBomb(user);

// another way to do this is applying object destructuring at function parameter level

function dropAnotherBomb({
  address: {
    coordinates: { lat, lng },
  },
}) {
  console.log(`dropping bomb at ${lat} + ${lng} again `);
}

dropAnotherBomb(user);

// destrucutre a functions return value
let user1 = () => {
  return {
    ip: "42.48.100.32",
    address: {
      address: "626 Main Street",
      city: "Phoenix",
      state: "Mississippi",
      stateCode: "MS",
      postalCode: "29112",
      coordinates: {
        lat: -77.16213,
        lng: -92.084824,
      },
      country: "United States",
    },
  };
};

const {
  ip: anotherIp,
  address: { address: anotherAddress },
} = user1();

console.log(anotherIp);
console.log(anotherAddress);

// destructuring with in a loop

// destrucuting a array

const students = [
  {
    name: "william",
    grade: "A",
  },

  {
    name: "tom",
    grade: "A+",
  },
];

console.log(students);

// using for of loop

for (let { name, grade } of students) {
  console.log(name, grade);
}

//The right side of the off will have the array. The left side of the off
