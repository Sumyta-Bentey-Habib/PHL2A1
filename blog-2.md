# OOP Pillars in TypeScript

## Introduction

Object-Oriented Programming (OOP) helps structure large applications by organizing code into reusable and maintainable units. TypeScript supports OOP strongly through four main pillars.

---

## Encapsulation

Encapsulation means keeping data and logic inside a class and restricting direct access.

### 🧩 Code Template
```ts
class User {
  private password: string;

  constructor(public name: string, password: string) {
    this.password = password;
  }

  getPassword(): string {
    return this.password;
  }
}

## Inheritance

Reuses common code → avoids duplication.

### 🧩 Code Template
``ts
class Animal {
  move() {
    return "Moving";
  }
}

class Dog extends Animal {
  bark() {
    return "Woof";
  }
}

## Polymorphism
  Same method, different behavior → removes messy conditionals.
### 🧩 Code Template
``ts
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  area(): number {
    return 3.14 * 10 * 10;
  }
}

## Abstraction
Hides complex logic, exposes only what’s needed → simplifies large systems.

### 🧩 Code Template
``ts
interface Payment {
  pay(amount: number): void;
}

class Stripe implements Payment {
  pay(amount: number): void {
    console.log("Paid via Stripe:", amount);
  }
}

## 🔥 Result
Together, they make code:
- More organized
- Easier to maintain
- Easier to scale
- Less complex
