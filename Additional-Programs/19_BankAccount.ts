class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
        console.log("Deposited = " + amount);
    }

    withdraw(amount: number) {
        this.balance = this.balance - amount;
        console.log("Withdrawn = " + amount);
    }

    displayBalance() {
        console.log("Balance = " + this.balance);
    }
}

let account = new BankAccount(1000);

account.displayBalance();
account.deposit(500);
account.withdraw(200);
account.displayBalance();