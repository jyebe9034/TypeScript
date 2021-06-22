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
const doSomething = (): void => {
  console.log("doSomething");
}

// any (don't recommend use..)
let foo: any = "foo";
console.log(foo.log());

// never
const doSomething2 = (): never => {
  throw "never";
}

// unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string; // type assertion

let pageNumber: string = "1";
// let numericPageNumber: number = pageNumber as number; // error: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
let numericPageNumber2: number = (pageNumber as unknown) as number;

// console.log(vAny.foo());
// console.log(vUnknown.foo());

// DOM
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value);

// adding a listener
const someElement2 = document.querySelector(".foo");

someElement2.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
})

// Class
class User {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user = new User();