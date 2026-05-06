// Problem: 1
function filterEvenNumbers(arr: number[]): number[]{
    return arr.filter(num => num % 2 === 0)
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// Problem: 2
function reverseString(str: string): string{
    return str.split("").reverse().join("")
};
console.log(reverseString("hello world"))

// Problem: 3
type StringOrNumber = string | number
function checkType(props: StringOrNumber): 'String' | 'Number' {
    if (typeof props === 'string'){
        return "String";
    } else {
        return "Number";
    }
}
checkType("Hello");