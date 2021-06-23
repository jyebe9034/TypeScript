// Variable
const hello = "hello";

// Function
const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log(getFullName("Monster", "Lessons"));

// Interfaces & Functions inside of Interface
interface UserInterface {
  name: string;
  age?: number; // ? means not mandatory
  getMessage(): string
}

const user: UserInterface = {
  name: "Moster",
  age: 20,
  getMessage() {
    return "Hello " + name;
  }
};

const user2: UserInterface = {
  name: "Jack",
  getMessage() {
    return "Hello " + name;
  }
};

console.log(user.getMessage());

// Type Alias
type ID = string
type PopularTag = string;
type MaybePopularTag = PopularTag | null; // type alias + union

// Union operator in typescript
interface UserInterface2 {
  id: ID;
  name: string
  surname: string
}

const popularTags: PopularTag[] = ["dragon", "coffee"];

const dragonsTag: MaybePopularTag = "dragon";

let username: string = "alex";

let pageNumber: string | number = "1";

let errorMessage: string | null = null;

let user3: UserInterface | null = null;

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

let pageNumber2: string = "1";
// let numericPageNumber: number = pageNumber as number; // error: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
let numericPageNumber2: number = (pageNumber2 as unknown) as number;

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

interface UserInterface3 {
  getFullName(): string;
}
// Class
class User implements UserInterface3 {
  firstName: string
  lastName: string
  readonly unchangableName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  changeUnchangableName(): void {
    // this.unchangableName = "foo"; // error
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// Inheritance
class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const monster = new User("Monster", "lessons");
console.log(monster.firstName);
console.log(User.maxAge);

const admin = new Admin("Foo", "Bar");
console.log(admin.firstName);
console.log(admin.setEditor("who"));

// const updateArray = append<string>("baz", ["foo", "bar"]);

const searchStr = "foo";
// const hasSearchedString = any<string>((el: string) => el.includes(searchStr), ["foooo", "bar", "baz"]); 

// Generics
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id
  }
}

interface UserInterface4<T> {
  name: string;
  data: T;
}

interface UserInterface5<T, V> {
  name: string;
  data: T;
  meta: V;
}

const jack: UserInterface4<{ meta: string }> = {
  name: "Jack",
  data: {
    meta: "foo"
  }
}

const john: UserInterface4<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"]
}

// const result = addId<UserInterface4>(user2);
// console.log("result", result);

//Enum
const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2
};

console.log(statuses.inProgress);

// The values are incremented from zero
enum StatusEnum {
  NotStarted = "not started",
  InProgress = "inProgress",
  Done = "done"
}

interface Task {
  id: string;
  status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
// notStartedStatus = "foo"; error
notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);

