// object literals

const JsUser = {
  name: "Prajjwal",
  age: 26,
  "last name": "joshi",
  place: "Pune",
};

// console.log(JsUser["last name"])
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "joshi@google.com",
  fullname: {
    userfullnsme: {
      firstname: "prajjwal",
      lastname: "joshi",
    },
  },
};

// console.log(regularUser.fullname?.userfullnsme.firstname);

const obj1 = {
  1: "A",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "d",
  5: "e",
};

const obj3 = {...obj1,...obj2}
Object.assign(obj1,obj2)
// console.log(obj1 )


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('name'))


// Object Destruct

const course = {
    coursename : "react in node",
    price : '1222',
    courseInstructor : "Prajjwal"
}


const {courseInstructor : ins}=course

console.log(ins)