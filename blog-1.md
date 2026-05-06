### Question: 1 
- Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

### Ans: any vs unknown

## any -

- in typescript any type allows anything, if we write a variable using any type, we can store any type of data on that variable. typescript does not give any error.

```js
    let val: any
    val = "Rayhan abdullah"
    val = 10
    val = undefined
    val = null
    val = [1,2,3,4]
    val = function(){}
```

### Props
- typescript can not give error in complie time
- code can crush in runtime, if i call any wrong method or anyting

## unknown
- unknown is safer than any. because which typeof data can store on that variable do not know, so at first check type and then do operation.

```js
let val: unknown = "rayhan abdullah";

val.toUpperCase(); // got error
```

got error , so at first need to prove data is string. and then can use string opration. compile time give safe to write bug free code

```js
if (typeof val === "string") {
  val.toUpperCase(); // safe
}
```

### type narrowing
type narrowing is the real sefty.

```js
if (typeof value === "string") {
  value.toUpperCase();
}

if (value instanceof Date) {
  console.log(value.getFullYear());
}

function isNumberCheck(val: unknown): val is number {
  return typeof val === "number";
}

if (isNumberCheck(val)) {
  val.toFixed(2);
}
```
