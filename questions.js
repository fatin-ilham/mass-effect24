const questions = [
  {
    text: "You find an injured enemy on the battlefield.",
    choices: [
      {
        text: "Help them with medigel.",
        effects: { paragon: 20 },
        response: "You chose mercy. The crew admires your compassion."
      },
      {
        text: "Execute them without hesitation.",
        effects: { renegade: 25 },
        response: "You chose brutality. Fear lingers in the air."
      },
      {
        text: "Walk away — it’s not your problem.",
        effects: { neutral: 15 },
        response: "Efficiency over emotion. Cold, but logical."
      }
    ]
  },
  {
    text: "A civilian lied to your team. What do you do?",
    choices: [
      {
        text: "Forgive them — they were scared.",
        effects: { paragon: 15 },
        response: "Empathy guides your leadership."
      },
      {
        text: "Threaten them to never lie again.",
        effects: { renegade: 20 },
        response: "Your wrath leaves a lasting impression."
      },
      {
        text: "Ignore the issue, move on.",
        effects: { neutral: 10 },
        response: "You’ve got bigger priorities."
      }
    ]
  },
  {
    text: "You must choose between saving the Council or your own fleet.",
    choices: [
      {
        text: "Save the Council, even at a cost.",
        effects: { paragon: 25 },
        response: "Your nobility echoes across the galaxy."
      },
      {
        text: "Abandon them. Save your fleet.",
        effects: { renegade: 30 },
        response: "Power secured. The Council was a casualty of progress."
      },
      {
        text: "Delay the choice — try to do both.",
        effects: { neutral: 20 },
        response: "You gamble everything for balance."
      }
    ]
  }
];
