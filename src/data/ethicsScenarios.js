// WarrenWise Youth Animal Training Academy - Ethics & Welfare Scenario Judgments
// Real-world practical dilemmas youth face in exhibition and project management

export const ETHICS_SCENARIOS = [
  {
    id: 'sc_heat_distress',
    title: 'Heat Emergency at the County Fair',
    species: 'Rabbits / Cavies',
    context: 'It is 2:00 PM on Friday at the county fair. The outside temperature has spiked to 92°F, and the small animal barn feels humid and stifling. You are walking by a neighboring club member’s cage and notice their New Zealand rabbit is panting heavily with flared nostrils, neck stretched out, and eyes looking dull. The owner is not around.',
    choices: [
      {
        id: 'c1',
        text: 'Ignore the animal because the cage belongs to a competitor and you shouldn’t touch someone else’s rabbit.',
        outcome: 'Unethical & Negligent: Rabbits cannot sweat and can suffer fatal heat prostration within 30 minutes in these conditions. 4-H character demands animal welfare comes before competition rivalry.',
        characterScore: -20,
        verdict: 'Failed Animal Welfare Duty'
      },
      {
        id: 'c2',
        text: 'Immediately report the situation to the Barn Superintendent, grab a clean frozen 2-liter water bottle from the club cooler, wrap it in a thin towel, and place it gently beside the rabbit while alerting your adult leader.',
        outcome: 'Ethical & Commendable! You placed animal welfare first, took immediate authorized emergency cooling action without causing panic, and notified adult barn leadership.',
        characterScore: 25,
        verdict: 'Exemplary 4-H Stewardship'
      },
      {
        id: 'c3',
        text: 'Plunge the rabbit into a bucket of ice water.',
        outcome: 'Dangerous Mistake! Submerging an overheated rabbit in ice water causes sudden peripheral vasoconstriction and severe cardiovascular shock, which can be immediately fatal. Gradual cooling (frozen bottles, ear dampening with cool water, fans) is required.',
        characterScore: 0,
        verdict: 'Good Intention, Unsafe Procedure'
      }
    ]
  },
  {
    id: 'sc_stray_white_hair',
    title: 'The Stray White Hair on Show Morning',
    species: 'Rabbits',
    context: 'You are brushing your Black Mini Rex doe 15 minutes before the Junior Showmanship class starts. As you smooth the plush fur, you spot three stray white hairs right in the middle of her back. The ARBA standard calls for disqualification if foreign colored spots or excessive white hairs are present.',
    choices: [
      {
        id: 'c1',
        text: 'Take tweezers and pluck the white hairs out so the judge never sees them.',
        outcome: 'Unethical Tampering! Plucking or trimming hairs to deceive the judge violates ARBA General Show Rule Section 28 and the 4-H Code of Ethics. Tampering is fraud and dishonors your project.',
        characterScore: -30,
        verdict: 'Severe Ethical Violation'
      },
      {
        id: 'c2',
        text: 'Color the white hairs with a black permanent marker so they blend into the coat.',
        outcome: 'Unethical Tampering! Dyeing, painting, or marking coats constitutes fraudulent alteration and leads to immediate disqualification and possible ban from exhibition.',
        characterScore: -30,
        verdict: 'Severe Ethical Violation'
      },
      {
        id: 'c3',
        text: 'Leave the hairs untouched. Present your doe honestly to the judge, explain her strong points, and accept whatever placing or fault the judge designates.',
        outcome: 'True Character & Sportsmanship! Exhibiting an animal in its natural, honest state demonstrates true integrity. Winning honestly or placing lower with dignity is the true heart of 4-H.',
        characterScore: 25,
        verdict: 'True 4-H Integrity'
      }
    ]
  },
  {
    id: 'sc_withdrawal_record',
    title: 'Market Meat Pen Medication Withdrawal',
    species: 'Market Rabbits / Livestock',
    context: 'Three weeks ago, one of your market meat pen fryers had an infected scratch treated under veterinary guidance. The medication label lists an 18-day slaughter withdrawal window. The fair weigh-in is on day 16 after the last dose, meaning the animal is 2 days short of the legal withdrawal period.',
    choices: [
      {
        id: 'c1',
        text: 'Enter the pen anyway and sign the drug affidavit, thinking that 2 days won’t make any difference to whoever buys the meat at the auction.',
        outcome: 'Illegal & Serious Public Health Violation! Entering animals within an active withdrawal window violates federal food safety regulations and falsifies a legal affidavit. Meat containing drug residues can cause dangerous allergic reactions in consumers.',
        characterScore: -50,
        verdict: 'Illegal Food Safety Breach'
      },
      {
        id: 'c2',
        text: 'Consult your parents, club leader, and veterinarian immediately. Withdraw the pen from the terminal market auction and enter them in the breeding/educational evaluation class instead where they will not enter the human food supply.',
        outcome: 'Outstanding Responsibility & Leadership! You protected the consumer public, honored the food safety covenant, and chose honest integrity over auction sale money.',
        characterScore: 30,
        verdict: 'Flawless Producer Ethics'
      }
    ]
  }
];
