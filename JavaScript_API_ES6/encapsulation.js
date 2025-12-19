class BankAccount {
  // private property
  #balance;

  constructor(owner, initialBalance) {
    this.owner = owner;       // public property
    this.#balance = initialBalance;
  }

  // public method to access private data
  getBalance() {
    return this.#balance;
  }

  // public method to modify private data
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }
}

// Object creation
const account = new BankAccount("Alex", 1000);

account.deposit(500);
console.log(account.getBalance()); // 1500

account.withdraw(300);
console.log(account.getBalance()); // 1200

//  Not allowed (private)
// console.log(account.#balance); // Error
