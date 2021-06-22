// Variable
// const hello = "hello";
// Function
// const getFullName = (name: string, surname: string): string => {
//   return name + " " + surname;
// };
// console.log(getFullName("Monster", "Lessons"));
// Interfaces & Functions inside of Interface
// interface UserInterface {
//   name: string;
//   age?: number; // ? means not mandatory
//   getMessage(): string
// }
// const user: UserInterface = {
//   name: "Moster",
//   age: 20,
//   getMessage() {
//     return "Hello " + name;
//   }
// };
// const user2: UserInterface = {
//   name: "Jack",
//   getMessage() {
//     return "Hello " + name;
//   }
// };
// console.log(user.getMessage());
// Type Alias
// type ID = string
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null; // type alias + union
// Union operator in typescript
// interface UserInterface {
//   id: ID;
//   name: string
//   surname: string
// }
// const popularTags: PopularTag[] = ["dragon", "coffee"];
// const dragonsTag: MaybePopularTag = "dragon";
// let username: string = "alex";
// let pageNumber: string | number = "1";
// let errorMessage: string | null = null;
// let user: UserInterface | null = null;
// void
var doSomething = function () {
    console.log("doSomething");
};
// any (don't recommend use..)
var foo = "foo";
console.log(foo.log());
// never
var doSomething2 = function () {
    throw "never";
};
// unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown; // type assertion
var pageNumber = "1";
// let numericPageNumber: number = pageNumber as number; // error: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
var numericPageNumber2 = pageNumber;
// console.log(vAny.foo());
// console.log(vUnknown.foo());
// DOM
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
// adding a listener
var someElement2 = document.querySelector(".foo");
someElement2.addEventListener('blur', function (event) {
    var target = event.target;
    console.log("event", target.value);
});
// Class
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user = new User();
