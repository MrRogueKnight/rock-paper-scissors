import random

user_score = 0
computer_score = 0

moves = [
    {"move": "rock", "emoji": "🪨"},
    {"move": "paper", "emoji": "📄"},
    {"move": "scissors", "emoji": "✂️"}
]

def get_computer_move():
    return random.choice(["rock", "paper", "scissors"])

def get_comment(result_type: str, move: str) -> str:
    comments = {
        "tie": [
            "Great minds think alike! 🧠🎩",
            "Wow, we're telepathically connected! 🔮",
            "Copy cat! Did you read my mind? 😏",
            "Jinx! You owe me a soda! 🥤"
        ],
        "win_rock": [
            "Rock smashes scissors! You're absolutely crushing it! 💪",
            "BOOM! Your rock just demolished my scissors! 💥",
            "Rock solid victory! You're harder than a diamond! 💎"
        ],
        "lose_rock": [
            "Paper beats rock! I'm wrapping you up like a burrito! 🌯",
            "Your rock got buried under my paperwork! 📋",
            "I just gift-wrapped your defeat! 🎁"
        ],
        "win_paper": [
            "Paper covers rock! You just smothered my hopes and dreams! 😱",
            "Your paper is mightier than my rock! Newspaper headlines tomorrow! 📰",
            "Rock got papered! You're the wrapper champion! 🏆"
        ],
        "lose_paper": [
            "Snip snap! My scissors just gave your paper a haircut! ✂️",
            "Your paper got shredded! Time to recycle! ♻️",
            "I just turned your masterpiece into confetti! 🎊"
        ],
        "win_scissors": [
            "Scissors cut paper! You just crafted a victory! ✨",
            "Snip snip hooray! You're the cutting-edge champion! 🏅",
            "Your scissors are sharper than my wit! Paper shredded! 📃"
        ],
        "lose_scissors": [
            "Rock crushes scissors! Your blades just met their match! 🔨",
            "Ouch! My rock just dulled your scissors permanently! 😵",
            "Your scissors are now modern art - completely abstract! 🎨"
        ]
    }
    return random.choice(comments[result_type + "_" + move]) if result_type != "tie" else random.choice(comments["tie"])

def print_scores():
    print("\nScores:")
    print(f"Your Score: {user_score}")
    print(f"Computer Score: {computer_score}\n")

def play_game():
    global user_score, computer_score

    while True:
        print("\n🎮 Rock Paper Scissors")
        print("Choose your move:")
        for i, m in enumerate(moves):
            print(f"{i+1}. {m['move'].capitalize()} {m['emoji']}")

        choice = input("Enter 1, 2, or 3: ").strip()
        if choice not in {"1", "2", "3"}:
            print("Invalid choice. Try again.")
            continue

        user_move = moves[int(choice) - 1]["move"]
        computer_move = get_computer_move()

        print(f"\nYou picked: {user_move} {next(m['emoji'] for m in moves if m['move'] == user_move)}")
        print(f"Computer picked: {computer_move} {next(m['emoji'] for m in moves if m['move'] == computer_move)}")

        if user_move == computer_move:
            print(get_comment("tie", user_move))
        elif (
            (user_move == "rock" and computer_move == "scissors") or
            (user_move == "paper" and computer_move == "rock") or
            (user_move == "scissors" and computer_move == "paper")
        ):
            print(get_comment("win", user_move))
            user_score += 1
        else:
            print(get_comment("lose", user_move))
            computer_score += 1

        print_scores()

        again = input("Play again? (y/n): ").strip().lower()
        if again != 'y':
            break

def reset_scores():
    global user_score, computer_score
    user_score = 0
    computer_score = 0
    print("\nScores have been reset.\n")

if __name__ == "__main__":
    while True:
        print("\n--- MAIN MENU ---")
        print("1. Play Game")
        print("2. Reset Scores")
        print("3. Exit")
        menu_choice = input("Choose an option: ").strip()

        if menu_choice == "1":
            play_game()
        elif menu_choice == "2":
            reset_scores()
        elif menu_choice == "3":
            print("Thanks for playing!")
            break
        else:
            print("Invalid choice. Try again.")
