import random

userScore = 0
compScore = 0

while True:
    print("Welcome to Rock, Paper, Scissors!")
    move = input("What is your move? (r - rock, p - paper, s - scissors) ").lower()
    
    all_moves = ["r", "p", "s"]
    
    if move not in all_moves:
        print("Invalid move! Please choose r, p, or s.")
        continue

    print(f"You picked: {move}")
    compMove = random.choice(all_moves)
    print(f"Computer picked: {compMove}")

    if move == compMove:
        print("Great minds think alike! 🧠🎩")
    elif move == "r":
        if compMove == "p":
            print("I won buddy!")
            compScore += 1
        else:
            print("Great! You are a Champ!")
            userScore += 1
    elif move == "p":
        if compMove == "s":
            print("So you see who is the winner :)")
            compScore += 1
        else:
            print("You WON! Well Done!")
            userScore += 1
    elif move == "s":
        if compMove == "r":
            print("I am the winner")
            compScore += 1
        else:
            print("You are the winner!")
            userScore += 1

    print("\nHere are the Scores:")
    print(f"Your Score -> {userScore}")
    print(f"Computer's Score -> {compScore}")
    
    play_again = input("Do you want to play again buddy? (yes / no) ").lower()
    if play_again == "no":
        break
