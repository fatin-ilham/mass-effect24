
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
  },
  {
    text: "A crewmate disobeys a direct order during combat.",
    choices: [
      {
        text: "Speak to them calmly after the mission.",
        effects: { paragon: 15 },
        response: "You believe in growth through understanding."
      },
      {
        text: "Publicly reprimand them on the spot.",
        effects: { renegade: 20 },
        response: "Discipline is absolute in your command."
      },
      {
        text: "Reassign them quietly.",
        effects: { neutral: 10 },
        response: "No drama, just strategic personnel management."
      }
    ]
  },
  {
    text: "You discover a powerful AI that could help or harm the galaxy.",
    choices: [
      {
        text: "Try to reprogram it for peace.",
        effects: { paragon: 20 },
        response: "You believe intelligence deserves a chance to evolve."
      },
      {
        text: "Destroy it immediately.",
        effects: { renegade: 25 },
        response: "No risks. No second chances."
      },
      {
        text: "Lock it away for study.",
        effects: { neutral: 15 },
        response: "Containment first. The future is uncertain."
      }
    ]
  },
  {
    text: "You’re offered a bribe to look the other way.",
    choices: [
      {
        text: "Refuse outright and report them.",
        effects: { paragon: 20 },
        response: "Honor over profit. Your crew respects your integrity."
      },
      {
        text: "Accept the bribe. Use it to fund your cause.",
        effects: { renegade: 25 },
        response: "The ends justify the means in your eyes."
      },
      {
        text: "Pretend to accept, then betray them later.",
        effects: { neutral: 20 },
        response: "You play both sides — and win."
      }
    ]
  },
  {
    text: "A colony is under attack. You can only save one group.",
    choices: [
      {
        text: "Rescue the families and children.",
        effects: { paragon: 25 },
        response: "You protect the innocent at all costs."
      },
      {
        text: "Save the weapons cache to fight back later.",
        effects: { renegade: 30 },
        response: "Tactical advantage above sentiment."
      },
      {
        text: "Hold the line until reinforcements arrive.",
        effects: { neutral: 20 },
        response: "You bet everything on timing and resolve."
      }
    ]
  },
  {
    text: "You encounter a species believed extinct — and hostile.",
    choices: [
      {
        text: "Attempt to make peaceful contact.",
        effects: { paragon: 20 },
        response: "You extend a hand even in the darkest moment."
      },
      {
        text: "Wipe them out before they become a threat.",
        effects: { renegade: 25 },
        response: "You make the hard call to preserve peace."
      },
      {
        text: "Quarantine and observe them secretly.",
        effects: { neutral: 15 },
        response: "Knowledge is power, and caution is wisdom."
      }
    ]
  }
];

export default questions;
