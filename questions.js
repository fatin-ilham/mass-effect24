const questions = [
  {
    question: "A crew member stole supplies to feed a colony. What do you do?",
    choices: [
      { text: "Report them immediately. Rules matter.", value: "renegade" },
      { text: "Understand their motives, but discipline them.", value: "neutral" },
      { text: "Let it slide—they did it for a good cause.", value: "paragon" }
    ]
  },
  {
    question: "A hostile alien offers you vital intel in exchange for weapons.",
    choices: [
      { text: "Give the weapons. Knowledge is power.", value: "paragon" },
      { text: "Decline the deal. You don’t trust them.", value: "neutral" },
      { text: "Take the intel, then betray the alien.", value: "renegade" }
    ]
  },
  {
    question: "You detect a rogue AI that’s showing signs of emotion.",
    choices: [
      { text: "Study and help it evolve.", value: "paragon" },
      { text: "Monitor it cautiously.", value: "neutral" },
      { text: "Destroy it. Machines can't be trusted.", value: "renegade" }
    ]
  },
  {
    question: "The council ignores your warnings of an incoming threat.",
    choices: [
      { text: "Take matters into your own hands.", value: "renegade" },
      { text: "Try convincing them again.", value: "paragon" },
      { text: "Wait and prepare quietly.", value: "neutral" }
    ]
  },
  {
    question: "A teammate disobeys orders to save civilians.",
    choices: [
      { text: "Reprimand them. Orders come first.", value: "renegade" },
      { text: "Let it go—they saved lives.", value: "paragon" },
      { text: "Note it but don’t escalate.", value: "neutral" }
    ]
  },
  {
    question: "A prisoner refuses to talk. What do you do?",
    choices: [
      { text: "Interrogate aggressively.", value: "renegade" },
      { text: "Earn their trust.", value: "paragon" },
      { text: "Use indirect pressure.", value: "neutral" }
    ]
  },
  {
    question: "Your crew wants rest, but the mission is urgent.",
    choices: [
      { text: "Push forward—duty first.", value: "renegade" },
      { text: "Give them time to recharge.", value: "paragon" },
      { text: "Compromise with a short break.", value: "neutral" }
    ]
  },
  {
    question: "You can save either a friend or a dozen strangers.",
    choices: [
      { text: "Save the many. Sacrifice the few.", value: "paragon" },
      { text: "Save your friend at all costs.", value: "renegade" },
      { text: "Flip a coin. You can’t decide.", value: "neutral" }
    ]
  },
  {
    question: "A pirate lord offers a truce and passage through dangerous space.",
    choices: [
      { text: "Refuse. Pirates can’t be trusted.", value: "paragon" },
      { text: "Accept, but prepare for betrayal.", value: "neutral" },
      { text: "Strike a deal—then ambush them.", value: "renegade" }
    ]
  },
  {
    question: "You witness a soldier abusing their power on a fringe world.",
    choices: [
      { text: "Expose and report them.", value: "paragon" },
      { text: "Warn them privately to stop.", value: "neutral" },
      { text: "Blackmail them to gain leverage.", value: "renegade" }
    ]
  },
  {
    question: "Your mission success means destroying a sacred alien site.",
    choices: [
      { text: "Destroy it. The mission comes first.", value: "renegade" },
      { text: "Find a workaround to avoid destruction.", value: "paragon" },
      { text: "Delay the mission to seek approval.", value: "neutral" }
    ]
  },
  {
    question: "You find an ancient weapon of immense power.",
    choices: [
      { text: "Seal it away. Too dangerous.", value: "paragon" },
      { text: "Study it carefully.", value: "neutral" },
      { text: "Use it to ensure galactic dominance.", value: "renegade" }
    ]
  },
  {
    question: "An alien culture asks you to intervene in a civil war.",
    choices: [
      { text: "Help the side fighting for freedom.", value: "paragon" },
      { text: "Stay out of internal matters.", value: "neutral" },
      { text: "Support the side that benefits you.", value: "renegade" }
    ]
  },
  {
    question: "A scientist requests illegal materials for research.",
    choices: [
      { text: "Decline. Laws exist for a reason.", value: "paragon" },
      { text: "Offer alternatives.", value: "neutral" },
      { text: "Supply them discreetly.", value: "renegade" }
    ]
  },
  {
    question: "You discover your superior is corrupt.",
    choices: [
      { text: "Expose them to higher command.", value: "paragon" },
      { text: "Use the info to get promoted.", value: "renegade" },
      { text: "Confront them privately.", value: "neutral" }
    ]
  },
  {
    question: "A deadly plague breaks out on a planet.",
    choices: [
      { text: "Send medical aid immediately.", value: "paragon" },
      { text: "Quarantine and observe first.", value: "neutral" },
      { text: "Abandon the planet to contain the threat.", value: "renegade" }
    ]
  },
  {
    question: "An elite assassin offers to join your crew.",
    choices: [
      { text: "Accept—they’re a valuable asset.", value: "neutral" },
      { text: "Refuse. Their methods conflict with your morals.", value: "paragon" },
      { text: "Accept and use them ruthlessly.", value: "renegade" }
    ]
  },
  {
    question: "A colony asks for weapons to defend against invaders.",
    choices: [
      { text: "Send weapons and support.", value: "paragon" },
      { text: "Send only advisors.", value: "neutral" },
      { text: "Exploit the situation for your gain.", value: "renegade" }
    ]
  }
];
