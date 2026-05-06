# TypeScript Type Safety Explanation

## 🚪 TypeScript as a Gate Guard

If TypeScript is a guard at a gate:

- `any` → walks straight in, no questions asked
  Because TypeScript trusts `any` completely,
  it creates a **type safety hole** where bugs can slip in unnoticed.
```typescript
let suspiciousData: any = "Hello";
suspiciousData.nonExistentMethod(); // TS allows this! It will crash at runtime.
```

- `unknown` → like a strict security guard
  It does not allow access until the type is verified.
```typescript
let strictData: unknown = "Hello";
// strictData.toUpperCase(); // TS Error: Object is of type 'unknown'. Access denied!
```

---

## 🧠 Type Narrowing

**Type Narrowing** =
Figuring out what a value actually is before using it.
```typescript
function processData(data: unknown) {
  // Narrowing the type using 'typeof'
  if (typeof data === "string") {
    // Inside this block, TypeScript knows 'data' is definitely a string
    console.log(data.toUpperCase());
  } else if (typeof data === "number") {
    // Inside this block, TypeScript knows 'data' is definitely a number
    console.log(data.toFixed(2));
  } else {
    console.log("Unsupported data type");
  }
}
```

```
