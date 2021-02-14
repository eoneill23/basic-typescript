"use strict";
// const person: {
//   name: string,
//   age
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Eric',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Eric",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
//person.role.push("admin");
// person.role.push('admin');
//person.role[1] = 10;
let favoriteActivities;
favoriteActivities = ["Sports", 5];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
