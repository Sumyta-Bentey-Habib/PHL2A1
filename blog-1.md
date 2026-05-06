# TypeScript Type Safety Explanation

## 🚪 TypeScript as a Gate Guard

If TypeScript is a guard at a gate:

- `any` → walks straight in, no questions asked
  Because TypeScript trusts `any` completely,
  it creates a **type safety hole** where bugs can slip in unnoticed.

- `unknown` → like a strict security guard
  It does not allow access until the type is verified.

---

## 🧠 Type Narrowing

**Type Narrowing** =
Figuring out what a value actually is before using it.
