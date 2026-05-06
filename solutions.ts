

// Solution: 1
function filterEvenNumbers(arr: number[]): number[]{
    return arr.filter(num => num % 2 === 0)
}
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(evenNumbers)

// Solution: 2
function reverseString(str: string): string{
    return str.split("").reverse().join("")
};
const rev = reverseString("typescript");
console.log(rev)

// Solution: 3
type StringOrNumber = string | number
function checkType(props: StringOrNumber): 'String' | 'Number' {
    if (typeof props === 'string'){
        return "String";
    } else {
        return "Number";
    }
}
const typeCheck = checkType("Hello");
console.log(typeCheck);

// Solution: 4
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
const getPro = getProperty(user, "name");
console.log(getPro);

// Solution: 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookWithIsRead extends Book {
  isRead: boolean;
}

function toggleReadStatus(book: Book): BookWithIsRead {
  return { ...book, isRead: true };
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const bookUpdate = toggleReadStatus(myBook);
console.log(bookUpdate);

// Solution: 6
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}
class Student extends Person {
    grade: number;
    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, 90);
console.log(student.getDetails());

// Solution: 7
function getIntersection(arr: number[], arr2: number[]){
    const set = new Set(arr);
    const res: number[] = [];

    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i]!;
        if (set.has(element)) {
            res.push(element);
        }
    }
   return res
} 
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))