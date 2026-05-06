// Problem 1
export function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(n => n % 2 === 0);
}

// Problem 2
export function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

// Problem 3
export type StringOrNumber = string | number;

export function checkType(value: StringOrNumber): "String" | "Number" {
  return typeof value === "string" ? "String" : "Number";
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
  return { ...book, isRead: true };
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
export function getIntersection(a: number[], b: number[]): number[] {
  const setB = new Set(b);
  return a.filter(n => setB.has(n));
}
