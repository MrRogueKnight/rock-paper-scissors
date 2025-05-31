

---

### **Rock, Paper, Scissors Game (Version 2) - Python Command-Line**

This Python script implements a classic interactive Rock, Paper, Scissors game designed for the command-line interface. It provides a fun and engaging experience for players to challenge the computer, keep track of scores, and enjoy dynamic feedback throughout the game.

🔗 **Access the Game Online:**

1. [EduBlocks Project](https://app.edublocks.org/project/Dqokfxwig2UWC7N6dQUYSussiN32/EXDRcu6C11b0e3DdaQdk)
2. [Playable Web Version](https://rock-paper-scissors-champ.lovable.app/)

---

**What the Code Does:**

1. **Initializes Game State:**

   * Sets up `user_score` and `computer_score` to 0, tracking the progress of the game.
   * Defines a list of `moves` (rock, paper, scissors) along with their corresponding emojis for a more visually appealing output.

2. **Computer's Move Generation:**

   * The `get_computer_move()` function uses Python's `random.choice()` to randomly select one of the three moves for the computer, ensuring unpredictable gameplay.

3. **Dynamic Commentary System:**

   * The `get_comment(result_type, move)` function is a standout feature. It provides a rich set of pre-defined, witty, and engaging comments for various outcomes:

     * General "tie" comments.
     * Specific "win" comments based on the user's winning move (e.g., `win_rock`, `win_paper`, `win_scissors`).
     * Specific "lose" comments based on the user's losing move (e.g., `lose_rock`, `lose_paper`, `lose_scissors`).
   * This function randomly selects a comment from the relevant category, making each round feel fresh and interactive.

4. **Score Display:**

   * The `print_scores()` function neatly displays the current user and computer scores after each round, keeping players informed of the game's progress.

5. **Core Game Logic (`play_game()`):**

   * This function orchestrates the main game loop.
   * **User Input:** Prompts the user to choose their move (1, 2, or 3) and handles invalid inputs.
   * **Move Display:** Clearly shows both the user's and the computer's chosen moves with their respective emojis.
   * **Determining the Winner:** Contains the core logic to evaluate the moves and determine if the round is a tie, a user win, or a computer win.
   * **Score Update:** Increments `user_score` or `computer_score` based on the round's outcome.
   * **Comment Delivery:** Calls `get_comment()` to display a relevant and engaging message for the round.
   * **Play Again Prompt:** Asks the user if they want to play another round, allowing for continuous gameplay until the user decides to quit.

6. **Score Reset Functionality (`reset_scores()`):**

   * Allows players to reset both scores to zero from the main menu, useful for starting a new game session.

7. **Main Menu (`if __name__ == "__main__":` block):**

   * Provides a simple command-line menu structure for the user.
   * Options include:

     * **Play Game:** Starts the Rock, Paper, Scissors game.
     * **Reset Scores:** Resets the accumulated scores.
     * **Exit:** Terminates the program.
   * Handles invalid menu choices.

---

