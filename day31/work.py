import random

class DiceRollGame:
    def __init__(self, rounds=3):
        self.user_name = ""
        self.user_points = 0
        self.computer_points = 0
        self.rounds = rounds

    def get_user_name(self):
        self.user_name = input("Enter your name: ")

    def roll_dice(self):
        return random.randint(1, 6)

    def play_round(self):
        user_roll = self.roll_dice()
        computer_roll = self.roll_dice()

        print(f"\n{self.user_name}'s roll: {user_roll}")
        print(f"Computer's roll: {computer_roll}")
        if user_roll > computer_roll:
            print(f"{self.user_name} wins this round!")
            self.user_points += 1
        elif user_roll < computer_roll:
            print("Computer wins this round!")
            self.computer_points += 1
        else:
            print("It's a tie!")

    def display_results(self):
        print("\nGame Over! Results:")
        print(f"{self.user_name}'s points: {self.user_points}")
        print(f"Computer's points: {self.computer_points}")

        if self.user_points > self.computer_points:
            print(f"{self.user_name} wins!")
        elif self.user_points < self.computer_points:
            print("Computer wins!")
        else:
            print("It's a tie!")
    def play_game(self):
        self.get_user_name()
        print(f"\nWelcome, {self.user_name}! Let's play Dice Roll Game.")
        print(f"Each round, you and the computer will roll a six-sided die.")
        print(f"The one with the higher roll gets a point. The game consists of {self.rounds} rounds.\n")

        for _ in range(self.rounds):
         self.play_round()
         self.display_results()

if __name__ == "__main__":
   game = DiceRollGame()
   game.play_game()