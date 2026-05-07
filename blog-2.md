### Question:
How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

#### What is Generics?
- generics is ts concept. generics are one of the most powerful features in TypeScript. which we can pass type as a parameter just like function parameter

```js
    function identity<T>(value: T): T {
        return value;
    }
    identity<string>("hello")

    function getFirstElement<T>(arr: T[]): T {
        return arr[0];
    }
    const num = getFirstElement<number>([1, 2, 3]); 
    const str = getFirstElement<string>(["a", "b"]);

    interface ApiResponse<T> {
        data: T;
        success: boolean;
    }

    const userResponse: ApiResponse<{ name: string }> = {
        data: { name: "Rayhan" },
        success: true,
    };
```

### Why Generic is powerfull?
- Reusability
- Type Safety
- Flexible + Safe together
- Without generics, fixed box, only one type. with generics flexible box, any type but labeled correctly