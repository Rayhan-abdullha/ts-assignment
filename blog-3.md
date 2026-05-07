
### Question:
How do the four pillars of OOP—inheritance, polymorphism, abstraction, and encapsulation help manage logic and reduce complexity in large scale typeScript projects?

### Ans: Four Pillars of OOP

## Encapsulation

- binding data and methods inside a class, hiding internal details using private keyword
- outside code cannot access or break internal logic

```js
class BankAccount {
    private balance: number = 0;
    
    deposit(amount: number): void {
        this.balance += amount;
    }
    
    getBalance(): number {
        return this.balance;
    }
}
const account = new BankAccount()
account.balance = 500 // error, we can not access private value from outside
```

## Abstraction

- showing only essential features, hiding complex implementation
- use abstract classes and interfaces

```js
abstract class PaymentProcessor {
    abstract pay(amount: number): void;
}

class StripePayment extends PaymentProcessor {
    async pay(amount: number): void {
        
    }
}
```

## Inheritance

- child class gets properties and methods from parent class using extends keyword
- common logic written once, reused everywhere

```js
class Component {
    show(): void {
        console.log("showing");
    }
}

class Button extends Component {
    click(): void {
        console.log("clicked");
    }
}

const btn = new Button();
btn.show(); // from parent
btn.click(); // its own
```

## Polymorphism

- same method name, different implementations in different classes
- no need for if-else type checking

```js
interface Logger {
    log(msg: string): void;
}

class ConsoleLogger implements Logger {
    log(msg: string): void {
        console.log(msg);
    }
}

class FileLogger implements Logger {
    log(msg: string): void {
        fs.writeFile("log.txt", msg);
    }
}

class UserService {
    constructor(private logger: Logger) {} 
}
```

## How They Work Together

```js
class Order {
    private items: any[] = [];
    addItem(item: any): void {
        this.items.push(item);
    }
}

abstract class Payment {
    abstract pay(amount: number): void;
}

class CardPayment extends Payment {
    pay(amount: number): void {
        console.log("card payment");
    }
}

class Checkout {
    process(order: Order, payment: Payment): void {
        payment.pay(order.getTotal());
    }
}
```