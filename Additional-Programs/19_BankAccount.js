"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Deposited = " + amount);
    }
    withdraw(amount) {
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
