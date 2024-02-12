class BankAccount:
    def __init__(self, account_holder, balance=0):
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposit of ${amount} successful. Current balance: ${self.balance}")
        else:
            print("Invalid deposit amount.")

    def withdraw(self, amount):
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                print(f"Withdrawal of ${amount} successful. Current balance: ${self.balance}")
            else:
                print("Insufficient funds. Withdrawal failed.")
        else:
            print("Invalid withdrawal amount.")

    def display_balance(self):
        print(f"Account holder: {self.account_holder}")
        print(f"Current balance: ${self.balance}")


def main():
    # Example usage
    user_name = input("Enter your name: ")
    account = BankAccount(user_name)

    while True:
        print("\n1. Display Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        choice = input("Enter your choice (1/2/3/4/5): ")

        if choice == "1":
            account.display_balance()
        elif choice == "2":
            amount = float(input("Enter the deposit amount: $"))
            account.deposit(amount)
        elif choice == "3":
            amount = float(input("Enter the withdrawal amount: $"))
            account.withdraw(amount)
        elif choice == "4":
            print("Exiting the program. Thank you!")
        else:
            print("Invalid choice. Please enter 1, 2, 3, or 4.")


if __name__ == "__main__":
    main()