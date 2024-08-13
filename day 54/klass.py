def main():
    # Input
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    
    # Addition
    addition = num1 + num2
    print("Addition:", addition)
    
    # Subtraction
    subtraction = num1 - num2
    print("Subtraction:", subtraction)
    
    # Multiplication
    multiplication = num1 * num2
    print("Multiplication:", multiplication)
    
    # Division
    if num2 != 0:
        division = num1 / num2
        print("Division:", division)
    else:
        print("Division by zero is not allowed.")
    
    # Modulus
    if num2 != 0:
        modulus = num1 % num2
        print("Modulus:", modulus)
    else:
        print("Modulus by zero is not allowed.")

if __name__ == "__main__":
    main()