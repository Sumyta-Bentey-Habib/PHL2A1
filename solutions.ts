// Problem 1
export function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}


// Problem 2
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}


// Problem 3
export type StringOrNumber = string | number;

export function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
  throw new Error("Invalid type");
}


// Problem 4
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}


// Problem 5
export interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

export function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true
  };
}


// Problem 6
export class Person {
  constructor(public name: string, public age: number) {}
}

export class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


// Problem 7
export function getIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return arr1.filter(num => set2.has(num));
}
